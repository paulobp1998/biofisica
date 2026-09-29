/**
 * Tópico 7: Partículas α, β e Radiações Gama
 * 200 Questões Clínicas Rigorosas para o 1.º Ano de Enfermagem (IDs 7001 a 7200)
 */

const TOPIC_7_QUESTIONS = [
  {
    "id": 7001,
    "topicId": 7,
    "question": "Qual é a constituição física fundamental de uma 'Partícula Alfa' (α) emitida durante o decaimento radioativo de núcleos atómicos pesados?",
    "options": [
      "É um eletrão relativista de alta velocidade com carga negativa ejetado diretamente a partir de um neutrão do núcleo atómico durante a transmutação radioativa fraca.",
      "É um núcleo atómico de Hélio-4 composto por dois protões e dois neutrões fortemente ligados, desprovido de eletrões e com carga elétrica positiva elementar dupla (+2e).",
      "É um fotão de radiação eletromagnética ionizante de comprimento de onda infinitesimal desprovido de massa em repouso e sem qualquer carga elétrica elementar associada.",
      "É uma molécula gasosa diatómica de hélio comprimida que se propaga através dos tecidos celulares por difusão passiva através das membranas lipídicas celulares normais."
    ],
    "correctIndex": 1,
    "explanation": "A partícula alfa (descoberta e caracterizada por Ernest Rutherford em 1899) é rigorosamente o núcleo desprovido de eletrões de um átomo de Hélio-4 (⁴₂He²⁺): é constituída por 2 protões e 2 neutrões. Apresenta carga elétrica líquida de +2e (+3,204 × 10⁻¹⁹ C) e massa atómica elevada (cerca de 4,0015 u ≈ 6,64 × 10⁻²⁷ kg, mais de 7300 vezes mais massiva do que um eletrão).",
    "distractorAnalysis": [
      "Está incorreta: confunde a partícula alfa (núcleo de ⁴₂He) com a partícula beta menos (eletrão rápido ejetado do núcleo).",
      "Está incorreta: descreve um fotão gama ou raio X, os quais são radiação eletromagnética desprovida de massa de repouso e de carga elétrica.",
      "Está incorreta: a partícula alfa é uma entidade subatómica nua (núcleo de hélio) com massa de ~4 u e carga +2e, não um gás molecular macroscópico."
    ],
    "nursingApplication": "Na prática clínica, radiofármacos emissores alfa como o Rádio-223 (Xofigo) são administrados por via endovenosa por enfermeiros especializados para tratar metástases ósseas: a partícula alfa ejetada deposita toda a sua energia destrutiva num raio microscópico de poucas células, destruindo o tumor sem irradiar a medula óssea saudável adjacente."
  },
  {
    "id": 7002,
    "topicId": 7,
    "question": "O poder de penetração de uma partícula alfa na matéria condensada e no tecido biológico humano é considerado:",
    "options": [
      "Muito elevado: atravessa facilmente o corpo humano de lado a lado, exigindo paredes de chumbo com trinta centímetros de espessura para reduzir o feixe incidente.",
      "Moderado: percorre cerca de vinte centímetros em tecidos moles e perfura qualquer tipo de plástico hospitalar rígido utilizado no fabrico de seringas e cateteres.",
      "Extremamente reduzido: tem alcance inferior a cem micrómetros no tecido biológico (poucos diâmetros celulares), sendo travada pela camada córnea morta da epiderme.",
      "Variável com a luminosidade: atinge alcance de dez metros no vácuo mas é absorvida instantaneamente se exposta a lâmpadas de luz fluorescente na enfermaria."
    ],
    "correctIndex": 2,
    "explanation": "Devido à sua grande massa (4 u) e elevada carga (+2e), a partícula alfa colide intensamente com os eletrões orbitais dos átomos circundantes, perdendo cerca de 100 keV de energia por cada micrómetro de tecido percorrido (alto LET). A sua energia cinética típica (4 a 8 MeV) esgota-se numa distância microscópica de escassos 40 a 80 μm (o diâmetro de apenas 4 a 6 células biológicas). A camada córnea superficial da pele humana (espessura de ~50 a 100 μm de células queratinizadas mortas) atua como uma blindagem impenetrável contra a radiação alfa externa.",
    "distractorAnalysis": [
      "Está incorreta: devido à sua grande massa (~4 u) e carga dupla (+2), a partícula alfa perde energia muito rapidamente por ionizações densas, tendo alcance de apenas 40 a 90 µm.",
      "Está incorreta: confunde o alcance microscópico da partícula alfa com o elevado poder de penetração dos fotões de radiação gama de alta energia.",
      "Está incorreta: o alcance da alfa no tecido é inferior a 0,1 mm (não 20 cm); não depende da iluminação da sala, sendo travada até por uma folha de papel comum."
    ],
    "nursingApplication": "Fontes radioativas alfa externas não representam qualquer risco de irradiação cutânea ou visceral através de recipientes intactos: uma folha de papel, o vidro da ampola ou as luvas de procedimento do enfermeiro retêm 100% de todas as partículas alfa emitidas."
  },
  {
    "id": 7003,
    "topicId": 7,
    "question": "Se uma partícula alfa é travada pela camada morta da epiderme, por que motivo as substâncias emissoras alfa (como o gás Radão-222 ou o Polónio-210) são consideradas as mais EXTREMAMENTE PERIGOSAS para a saúde humana em caso de 'Contaminação Interna'?",
    "options": [
      "Por emitirem feixes contínuos de calor térmico a trezentos graus Celsius que fervem instantaneamente a água citoplasmática das mucosas do trato respiratório.",
      "Porque os núcleos de hélio se combinam quimicamente com os glóbulos vermelhos do sangue, impedindo mecanicamente a circulação venosa em todos os capilares.",
      "Pelo facto de a sua radioatividade ser transmitida por via genética através do ar ambiente para todas as pessoas que se aproximem a menos de cinco metros.",
      "Por possuírem altíssima transferência linear de energia (LET), depositando energia massiva em células vivas vizinhas que causa lesões irreparáveis no ADN nuclear."
    ],
    "correctIndex": 3,
    "explanation": "O perigo da radiação alfa inverte-se drasticamente na contaminação interna: no interior dos alvéolos pulmonares ou da mucosa gástrica, não existe camada córnea de queratina morta protetora. As partículas alfa depositam a sua colossal densidade de ionização diretamente sobre o núcleo das células epiteliais vivas. A ICRP atribui à radiação alfa o fator de ponderação máximo w_R = 20: cada Gray de dose alfa equivale a 20 Sieverts de dano biológico, sendo o gás Radão (²²²Rn) a segunda causa principal de cancro do pulmão no mundo a seguir ao tabaco.",
    "distractorAnalysis": [
      "Está incorreta: em contaminação interna (inalação ou ingestão), a ausência da barreira protetora da epiderme permite que o elevado LET (~100 keV/µm) atinja diretamente núcleos celulares.",
      "Está incorreta: o dano biológico da radiação ionizante não provém de calor macroscópico ou fervura, mas sim de ionizações e roturas de ligações moleculares vitais.",
      "Está incorreta: partículas alfa não se ligam quimicamente a eritrócitos para obstruir vasos nem a radioatividade é transmissível pelo ar por via hereditária."
    ],
    "nursingApplication": "Na gestão de incidentes radiológicos com emissores alfa, o enfermeiro foca a proteção na prevenção de contaminação interna: uso rigoroso de máscaras respiratórias de alta eficiência (FFP3 / N95), vestuário impermeável integral, proibição estrita de comer ou beber na área e lavagem imediata de qualquer corte ou ferida com água corrente abundante."
  },
  {
    "id": 7004,
    "topicId": 7,
    "question": "A emissão de uma partícula alfa por um núcleo radioativo genérico ᴬ_Z X obedece à Primeira Lei do Deslocamento Radioativo (Lei de Soddy e Fajans). Qual é a composição do núcleo filho resultante (Y)?",
    "options": [
      "O núcleo filho possui número de massa A - 4 nucleões e número atómico Z - 2 protões (ᴬ⁻⁴_(Z-2)Y), recuando no sistema periódico dos elementos em duas casas químicas.",
      "O núcleo filho mantém rigorosamente o mesmo número de massa A e aumenta o seu número atómico em uma unidade (ᴬ_(Z+1)Y), avançando uma casa na tabela periódica.",
      "O núcleo filho perde quatro protões e nenhum neutrão (ᴬ⁻⁴_(Z-4)Y), transformando-se num isótopo instável que emite exclusivamente luz visível no escuro.",
      "O núcleo filho duplica a sua massa atómica original por absorção simultânea de dois eletrões atómicos a partir das órbitas da camada K mais interna."
    ],
    "correctIndex": 0,
    "explanation": "Pela conservação da carga elétrica (Z) e do número total de nucleões (A): a ejeção de uma partícula alfa (com 2 protões e 2 neutrões, ⁴₂He) remove 2 protões e 4 nucleões do núcleo pai. O núcleo filho resultante transmuta-se num novo elemento químico situado duas posições à esquerda na Tabela Periódica: ᴬ_Z X -> ᴬ⁻⁴_Z₋₂ Y + ⁴₂He. Por exemplo: ²²⁶₈₈Ra (Rádio) decai por alfa para ²²²₈₆Rn (gás Rádon).",
    "distractorAnalysis": [
      "Está incorreta: a conservação do número de nucleões e de carga dita: ᴬ_Z X -> ᴬ⁻⁴_(Z-2) Y + ⁴₂He; logo o filho tem A - 4 e Z - 2 (Primeira Lei do Deslocamento de Soddy-Fajans).",
      "Está incorreta: a transformação com A constante e Z -> Z + 1 caracteriza a Segunda Lei (decaimento beta menos) e não a emissão alfa.",
      "Está incorreta: a partícula alfa é composta por 2 protões e 2 neutrões (e não 4 protões); o núcleo não duplica de massa durante um decaimento espontâneo."
    ],
    "nursingApplication": "Conhecer a Lei de Soddy-Fajans permite ao enfermeiro compreender as séries de decaimento radioativo presentes nos efluentes e resíduos de medicina nuclear: saber que o Rádio-226 decai num gás nobre radioativo (Rádon-222) alerta para a necessidade de ventilação forçada em locais de armazenamento de fontes históricas."
  },
  {
    "id": 7005,
    "topicId": 7,
    "question": "Qual é a natureza física de uma 'Partícula Beta Negativa' (β⁻) emitida espontaneamente por núcleos atómicos com excesso de neutrões?",
    "options": [
      "É um eletrão orbital que foi desprendido da camada K do átomo por efeito fotoelétrico provocado pela incidência de radiação solar direta na bancada hospitalar.",
      "É um eletrão de alta velocidade ejetado do núcleo atómico, criado quando um neutrão se transmuta espontaneamente num protão, num eletrão e num antineutrino (n -> p + e⁻ + ν̄).",
      "É uma partícula composta por dois protões e dois neutrões com carga elétrica negativa concentrada na sua superfície exterior por rotação mecânica rápida.",
      "É uma onda eletromagnética ionizante de elevada frequência que adquire carga elétrica temporária ao atravessar o campo magnético dos tecidos corporais."
    ],
    "correctIndex": 1,
    "explanation": "Uma partícula beta negativa (β⁻) é, sob todos os aspetos físicos quânticos, idêntica a um eletrão (carga -1e, massa m_e ≈ 9,11 × 10⁻³¹ kg). Contudo, ela NÃO provém das camadas eletrónicas extranucleares do átomo: é criada e ejetada do próprio NÚCLEO atómico no instante do decaimento. Devido à Força Nuclear Fraca, um neutrão instável transforma-se num protão que permanece no núcleo, enquanto o eletrão (β⁻) e um antineutrino são ejetados a velocidades que podem atingir mais de 90% da velocidade da luz.",
    "distractorAnalysis": [
      "Está incorreta: as partículas beta menos têm origem estritamente intranuclear (interação fraca convertendo um quark down em up no neutrão), sendo ejetadas a fracções apreciáveis de c.",
      "Está incorreta: eletrões atómicos de orbitais ejetados por radiação são fotoeletrões ou eletrões de recuo Compton, pertencentes à eletrosfera e não à radiação beta nuclear.",
      "Está incorreta: partículas com dois protões e dois neutrões são núcleos de hélio (alfa, com carga +2) e nunca possuem carga negativa; fotões são neutros."
    ],
    "nursingApplication": "O Iodo-131 (¹³¹I), amplamente utilizado em enfermagem no tratamento do hipertiroidismo e cancro diferenciado da tiroide, é um emissor beta negativo (β⁻): os eletrões velozes penetram cerca de 1 a 2 mm no parênquima tiroideu, destruindo as células foliculares malignas por ionização focalizada sem atingir estruturas vitais vizinhas como as paratiroides."
  },
  {
    "id": 7006,
    "topicId": 7,
    "question": "Ao contrário das partículas alfa (que são emitidas com energias cinéticas discretas e fixas), as partículas beta são emitidas com um 'Espetro Contínuo de Energia' (desde zero até uma energia máxima E_max). Qual é a explicação biofísica fundamental para este fenómeno?",
    "options": [
      "As partículas beta sofrem atrito viscoso contra os eletrões orbitais periféricos do próprio átomo, perdendo frações variáveis e aleatórias da sua energia antes de saírem.",
      "A energia inicial das partículas beta varia de acordo com a temperatura ambiental da sala de enfermagem no momento exato em que a ampola de vidro é manipulada.",
      "A energia total de transição (Q) é repartida continuamente em cada decaimento individual entre a partícula beta (eletrão) e o antineutrino do eletrão emitido em simultâneo.",
      "A emissão de eletrões do núcleo atómico viola propositadamente a conservação da energia mecânica clássica, fazendo com que a energia desapareça no vácuo interatómico."
    ],
    "correctIndex": 2,
    "explanation": "Na desintegração beta de 3 corpos (núcleo filho + partícula beta + neutrino): a energia total disponível da reação (Q_beta = Δm · c²) é partilhada continuamente entre a energia cinética da partícula beta e a energia do antineutrino: E_beta + E_neutrino = E_max. O antineutrino pode levar desde 0% até 100% da energia: por isso, a partícula beta exibe um espetro contínuo, com a energia média de emissão a situar-se tipicamente em cerca de um terço da energia máxima (E_média ≈ 1/3 E_max). Foi esta constatação de Wolfgang Pauli em 1930 que levou à previsão teórica da existência do neutrino.",
    "distractorAnalysis": [
      "Está incorreta: o decaimento beta é um processo de três corpos (filho, e⁻, ν̄_e); a conservação de energia e momento exige que a energia disponível Q se reparta continuamente entre o eletrão e o antineutrino.",
      "Está incorreta: o espetro contínuo é uma propriedade quântica fundamental do processo de emissão nuclear de três corpos e não de atrito com a nuvem eletrónica.",
      "Está incorreta: energias nucleares (da ordem dos MeV) são ordens de grandeza superiores às energias térmicas e invariantes com a temperatura; a energia total conserva-se estritamente."
    ],
    "nursingApplication": "Conhecer a energia média (E_média ≈ 1/3 E_max) é vital para o cálculo dosimétrico efetuado pela equipa de radioproteção: para o Iodo-131, embora E_max seja 606 keV, a energia média real depositada nas células da tiroide pelo feixe beta é de apenas cerca de 190 keV, sendo este o valor utilizado para determinar os dias de isolamento do doente."
  },
  {
    "id": 7007,
    "topicId": 7,
    "question": "Na blindagem de seringas e frascos contendo emissores de partículas Beta puras de alta energia (como o Ítrio-90, ⁹⁰Y, ou o Fósforo-32, ³²P), qual é o material de eleição que deve ser utilizado na barreira primária imediata?",
    "options": [
      "Chumbo maciço espesso como primeira camada única, porque o elevado número atómico Z bloqueia os eletrões sem gerar qualquer tipo de emissão eletromagnética secundária.",
      "Folhas de alumínio enroladas em compressas de algodão humedecido com soro fisiológico para absorver o calor transmitido pelos eletrões rápidos em movimento.",
      "Frascos de vidro borossilicato transparente revestidos externamente por papel de jornal para evitar o contacto físico com a luz fluorescente do posto clínico.",
      "Materiais plásticos ou acrílicos de baixo número atómico Z (como o polimetilmetacrilato/Lucite), para evitar a produção secundária de radiação de travamento (Bremsstrahlung)."
    ],
    "correctIndex": 3,
    "explanation": "Quando eletrões de alta velocidade (partículas beta) colidem com materiais de ALTO número atómico Z (como o Chumbo, Z=82), a desaceleração violenta no campo nuclear gera uma grande quantidade de Radiação de Travagem (Bremsstrahlung / Raios X secundários muito penetrantes). Para evitar esta produção indesejada de raios X, a blindagem primária de emissores beta tem de ser feita obrigatoriamente com materiais de BAIXO Z (como o acrílico / Perspex ou plástico, onde a probabilidade de Bremsstrahlung é desprezível). O acrílico trava as partículas beta puras por colisões eletrónicas suaves sem gerar raios X secundários.",
    "distractorAnalysis": [
      "Está incorreta: a fração de energia de eletrões convertida em Bremsstrahlung é proporcional a E_β × Z; usar chumbo (Z = 82) diretamente causaria intensa emissão de raios X secundários.",
      "Está incorreta: blindar primeiro com chumbo gera alta intensidade de radiação de travamento penetrante; a regra é blindar primeiro com baixo Z (acrílico) e colocar chumbo por fora se necessário.",
      "Está incorreta: compressas de soro ou papel de jornal não constituem barreiras dosimétricas calibradas para reter a energia de emissores beta duros (como ⁹⁰Y com E_max = 2,28 MeV)."
    ],
    "nursingApplication": "Regra de ouro de radioproteção em enfermagem de medicina nuclear: emissores beta puros (como ⁹⁰Y para radioimunoterapia ou ³²P) são SEMPRE aspirados e manipulados com protetores de seringa e caixas de ACRÍLICO transparente grosso, e NUNCA em protetores de chumbo convencionais, protegendo os olhos e as mãos do enfermeiro contra os raios X de travagem."
  },
  {
    "id": 7008,
    "topicId": 7,
    "question": "O que é uma 'Partícula Beta Positiva' (β⁺ ou Positrão) e o que sucede no instante em que ela perde a sua energia cinética nos tecidos do doente?",
    "options": [
      "É a antipartícula do eletrão (carga +1e e massa igual à do eletrão), que após perder energia cinética se aniquila com um eletrão tecidual gerando dois fotões de 511 keV a 180°.",
      "É um protão que perdeu noventa por cento da sua massa após ser ejetado do núcleo atómico, transformando-se num neutrão térmico quando colide com a membrana plasmática.",
      "É um ião de cálcio bivalente acelerado que se funde diretamente com os fosfolípidos da membrana celular, provocando a abertura mecânica permanente de canais iónicos.",
      "É uma partícula hipotética sem massa ou carga elétrica que se dissolve na corrente sanguínea em poucos nanossegundos sem emitir qualquer radiação detetável."
    ],
    "correctIndex": 0,
    "explanation": "O positrão (previsto por Paul Dirac e descoberto por Carl Anderson em 1932) é a antimatéria do eletrão (massa = 511 keV/c², carga = +1e). É ejetado no decaimento de núcleos ricos em protões (como o Flúor-18: p -> n + e⁺ + ν_e). No tecido biológico, o positrão viaja alguns milímetros ionizando suavemente até desacelerar ao nível térmico. Quando encontra um eletrão negativo tecidual comum (e⁻), ocorre o fenómeno quântico da Aniquilação: a matéria e a antimatéria deixam de existir, e as suas duas massas de repouso combinadas (2 × 511 keV = 1022 keV) transformam-se puramente em dois fotões de radiação de aniquilação de exatamente 511 keV emitidos em linha reta colinear oposta (180° mútuos por conservação do momento linear).",
    "distractorAnalysis": [
      "Está incorreta: o positrão (e⁺) dissipa energia no meio por colisões elásticas e inelásticas e aniquila-se com um e⁻: e⁺ + e⁻ -> 2γ (511 keV cada, emitidos a 180°), base da tomografia PET.",
      "Está incorreta: o positrão é um leptão elementar de antimatéria e não um protão modificado; nucleões e leptões pertencem a famílias de partículas subatómicas distintas.",
      "Está incorreta: o positrão não é um ião metálico nem uma partícula hipotética sem carga; possui carga positiva elementar (+1e) e massa de repouso bem determinada (511 keV/c²)."
    ],
    "nursingApplication": "A aniquilação do positrão em dois fotões opostos de 511 keV é o fundamento da Tomografia por Emissão de Positrões (PET): o scanner deteta os dois fotões em coincidência simultânea temporal, traçando a linha exata onde o radiofármaco glicídico (¹⁸F-FDG) foi consumido com avidez pelo cancro, permitindo ao enfermeiro e médico visualizar metástases milimétricas com precisão ímpar."
  },
  {
    "id": 7009,
    "topicId": 7,
    "question": "Em relação ao alcance e poder de penetração, como se compara a Radiação Gama (γ) com as partículas Alfa (α) e Beta (β)?",
    "options": [
      "A radiação gama é travada pela epiderme morta, enquanto as partículas alfa atravessam facilmente paredes de betão de vinte centímetros de espessura de blindagem.",
      "A radiação gama tem um poder de penetração muitíssimo superior ao de alfa e beta, atenuando-se de forma exponencial e exigindo blindagens pesadas de chumbo ou betão denso.",
      "O alcance da radiação gama no ar atmosférico é estritamente limitado a dois centímetros, sendo inferior ao alcance de partículas beta de alta velocidade.",
      "A penetração da radiação gama é idêntica à do som humano, não conseguindo atravessar uma porta de madeira fechada no interior da enfermaria de medicina física."
    ],
    "correctIndex": 1,
    "explanation": "Por ser radiação eletromagnética constituída por fotões puros desprovidos de carga elétrica e de massa de repouso, a radiação gama não sofre atração coulombiana direta contínua com a nuvem atómica: ela interage apenas por eventos pontuais probabilísticos discretos (Efeito Fotoelétrico, Dispersão Compton e Produção de Pares). Por conseguinte, a sua atenuação é exponencial e lenta, possuindo um alcance gigantesco: dezenas a centenas de metros no ar e facilidade em atravessar todo o organismo de um doente, exigindo espessos escudos de chumbo para proteção.",
    "distractorAnalysis": [
      "Está incorreta: por serem fotões neutros sem carga nem massa, os raios gama interagem fracamente com a matéria (efeito fotoelétrico, Compton, produção de pares), sendo altamente penetrantes.",
      "Está incorreta: inverte totalmente os poderes de penetração: a partícula alfa é barrada pela epiderme córnea, enquanto os fotões gama atravessam tecidos e exigem chumbo para atenuação.",
      "Está incorreta: os fotões gama propagam-se por centenas de metros no ar atmosférico sem sofrer paragem abrupta, obedecendo à atenuação geométrica e exponencial do meio."
    ],
    "nursingApplication": "A alta penetrância da radiação gama exige que o enfermeiro aplique sempre a regra da Distância e da Blindagem ao cuidar de doentes que receberam radioisótopos emissores gama (como o Iodo-131 ou Tecnécio-99m): ao contrário da radiação alfa ou beta, o corpo do doente NÃO bloqueia os fotões gama, que saem livremente pelo tórax e abdómen e atingem quem estiver no quarto."
  },
  {
    "id": 7010,
    "topicId": 7,
    "question": "O radioisótopo Iodo-131 (¹³¹₅₃I, T₁/₂ ≈ 8 dias) é classicamente designado como um emissor misto 'Beta-Gama'. Qual é a função de cada uma destas duas emissões no tratamento e seguimento de doentes com cancro da tiroide?",
    "options": [
      "A emissão beta menos é utilizada exclusivamente para obter imagens cintigráficas na gama-câmara, enquanto a radiação gama serve para resfriar a glândula tiroide por convecção.",
      "Ambas as emissões são direcionadas unicamente para esterilizar os utensílios cirúrgicos da sala de operações através de ionização superficial à distância.",
      "A emissão beta menos (β⁻, alcance milimétrico) promove a destruição terapêutica local das células tiroideias neoplásicas, enquanto a gama (364 keV) permite imagiologia e dosimetria.",
      "A radiação gama do Iodo-131 serve para dissolver os cálculos biliares no fígado do doente, enquanto a partícula beta é eliminada pelos pulmões durante a respiração comum."
    ],
    "correctIndex": 2,
    "explanation": "O Iodo-131 é o arquétipo da 'teranóstica' médica (terapia + diagnóstico conjugados no mesmo isótopo): cerca de 90% da energia de desintegração é emitida como partículas beta negativas (β⁻ com E_max = 606 keV, alcance médio de 0,8 mm no tecido), que ionizam e quebram irreversivelmente o DNA das células tiroidianas neoplásicas que captaram o iodo, necrosando o tumor por ação local. Os restantes 10% de energia são emitidos como fotões gama penetrantes (pico principal de 364 keV), que escapam do pescoço sem grande dano local e são detetados externamente pela câmara gama para desenhar o mapa cintigráfico de metástases corporais.",
    "distractorAnalysis": [
      "Está incorreta: o ¹³¹I é o radiofármaco teranóstico prototípico: os eletrões beta (E_max ≈ 0,61 MeV, alcance médio ~1 mm) destroem o tecido tiroideu, e os gamas de 364 keV saem do corpo para rastreio.",
      "Está incorreta: os eletrões beta não são usados para imagem em gama-câmara (são travados nos tecidos e causam dose desnecessária aos detetores); a radiação não resfria tecidos.",
      "Está incorreta: o Iodo-131 é administrado por via oral em cápsula ou solução líquida para tratamento sistémico in vivo, não para esterilização de materiais industriais."
    ],
    "nursingApplication": "Nos quartos de isolamento de radioiodoterapia onde o enfermeiro presta cuidados, a radiação gama de 364 keV do Iodo-131 é a responsável pela dose externa que atinge os profissionais através das paredes e do ar, enquanto a radiação beta é responsável pelas medidas de isolamento das secreções (urina, saliva e suor) do doente, exigindo luvas e calçado protetor descartável."
  },
  {
    "id": 7011,
    "topicId": 7,
    "question": "A 'Radiólise da Água' biológica intracelular pela radiação ionizante de baixo LET (raios X e radiação gama) desencadeia a formação de Espécies Reativas de Oxigénio (ROS). Qual é o radical livre mais abundante, reativo e citotóxico gerado na radiólise aquosa?",
    "options": [
      "O ião sódio metálico, que atua alcalinizando o citoplasma celular e neutralizando a acidez fisiológica dos lisossomas em todas as células do tecido irradiado.",
      "A molécula de gás oxigénio estável, que fortalece as membranas mitocondriais contra qualquer tipo de quebra enzimática no interior do compartimento nuclear.",
      "O ácido clorídrico concentrado, que corrói as proteínas do citoesqueleto por ação puramente mecânica sem afetar as bases azotadas dos ácidos nucleicos.",
      "O Radical Hidroxilo (•OH), um oxidante extremamente agressivo responsável por cerca de dois terços do dano radiobiológico indireto infligido à molécula de ADN celular."
    ],
    "correctIndex": 3,
    "explanation": "Como a água compõe 70% a 80% do volume celular, a radiólise primária é: H₂O + radiação -> H₂O⁺ + e⁻. O catião reage instantaneamente com a água vizinha: H₂O⁺ + H₂O -> H₃O⁺ + •OH. O Radical Hidroxilo (•OH) é o oxidante químico biológico mais agressivo que existe na natureza: tem uma semivida ultracurta (nanossegundos) e um raio de difusão de poucos nanómetros, reagindo vorazmente com qualquer molécula biológica próxima, extraindo átomos de hidrogénio das bases azotadas e do anel de desoxirribose do DNA e provocando quebras de cadeia genética.",
    "distractorAnalysis": [
      "Está incorreta: a radiólise da água produz e⁻_aq, •H e •OH; o radical hidroxilo (•OH) possui um eletrão desemparelhado e potencial redox altíssimo, oxidando desoxirribose e bases do ADN.",
      "Está incorreta: o sódio é um ião inorgânico estável presente na fisiologia normal (Na⁺) e não um radical livre oxidante derivado da cisão homolítica da água.",
      "Está incorreta: a presença de oxigénio molecular atua como radiosensibilizador (fixando o dano de radicais em peróxidos) e não como protetor de membranas; ácido clorídrico não é gerado."
    ],
    "nursingApplication": "O ataque por radicais •OH gerados pela radiólise da água é responsável por cerca de 65% a 70% de todas as mortes celulares na radioterapia oncológica. O enfermeiro orienta doentes oncológicos a NÃO consumirem suplementos vitamínicos antioxidantes em megadoses (como vitamina C e E em doses maciças) durante o curso de radioterapia sem ordem médica, pois os antioxidantes exógenos neutralizam os radicais livres e diminuem a eficácia tumoricida da radiação."
  },
  {
    "id": 7012,
    "topicId": 7,
    "question": "Na física da interação da radiação com a matéria, qual é o limiar de energia fotónica mínimo indispensável para que possa ocorrer o fenómeno de 'Produção de Pares' (criação de um par eletrão-positrão no campo nuclear)?",
    "options": [
      "Um valor limiar de 1,022 MeV (equivalente a 2 · m_e · c²), que corresponde à soma exata das massas em repouso do par eletrão-positrão criado no campo elétrico do núcleo.",
      "Um limiar mínimo de 0,511 keV, que corresponde à energia do fotão de luz visível violeta emitida durante ensaios de fluorescência atómica de bancada.",
      "Uma energia estritamente igual a dezasseis megaeletrão-volts, necessária para vencer a barreira gravitacional exercida pelo centro geométrico do átomo alvo.",
      "A produção de pares não possui qualquer limiar de energia, ocorrendo com igual probabilidade em fotões de rádio de baixa frequência e em raios gama cósmicos."
    ],
    "correctIndex": 0,
    "explanation": "A Produção de Pares é a materialização pura de energia em massa segundo E = m · c²: um fotão gama de altíssima energia penetra no campo elétrico intenso de um núcleo e desaparece, criando um par matéria-antimatéria (um eletrão e um positrão). Pela conservação de massa-energia, a energia do fotão incidente tem de ser pelo menos igual à soma das energias de massa de repouso das duas partículas criadas: E_limiar = m_e · c² + m_p · c² = 511 keV + 511 keV = 1022 keV = 1,022 MeV. Fotões com energia inferior a 1,022 MeV são fisicamente incapazes de produzir pares.",
    "distractorAnalysis": [
      "Está incorreta: pela conservação de energia-massa E = mc², para materializar duas partículas de massa m_e (0,511 MeV cada) o fotão incidente deve ter no mínimo hν ≥ 2 × 0,511 = 1,022 MeV.",
      "Está incorreta: confunde a unidade MeV com keV; a massa de repouso do eletrão é de 511 keV (0,511 MeV); para criar o par requer-se o dobro (1,022 MeV).",
      "Está incorreta: 1,022 MeV é o limiar absoluto; abaixo desse limiar a formação de pares é estritamente proibida pelas leis da mecânica quântica e relatividade restrita."
    ],
    "nursingApplication": "Em serviços de radioterapia com aceleradores lineares modernos que utilizam feixes de 6 a 18 Megavolts (MV), a produção de pares torna-se um dos principais mecanismos de atenuação e absorção de dose no tumor: o positrão criado desacelera e aniquila-se no próprio tecido tumoral, aumentando a eficácia biológica da dose administrada."
  },
  {
    "id": 7013,
    "topicId": 7,
    "question": "O que caracteriza uma 'Quebra Dupla de Cadeia' (Double-Strand Break - DSB) do DNA celular induzida por radiação ionizante em comparação com uma 'Quebra Simples' (Single-Strand Break - SSB)?",
    "options": [
      "A DSB é reparada instantaneamente pela enzima DNA polimerase sem qualquer margem de erro biológico, sendo muito menos perigosa do que uma quebra de cadeia simples.",
      "Uma DSB envolve a rotura simultânea das duas cadeias complementares da dupla hélice com proximidade espacial (<10-20 pares de bases), sendo altamente propensa a erros de reparação.",
      "A rotura dupla do DNA faz com que a célula adquira imunidade definitiva contra qualquer infeção bacteriana subsequente ao procedimento de imagiologia médica.",
      "A quebra simples de cadeia é irreversível e invariavelmente letal para a célula em qualquer dose, enquanto a quebra dupla não tem qualquer significado genético."
    ],
    "correctIndex": 1,
    "explanation": "Numa quebra simples (SSB), apenas uma das fitas fosfodiéster do DNA é cortada: a fita intacta oposta serve de molde perfeito para que a enzima DNA ligase e polimerase reparem o dano com fidelidade quase absoluta (alta taxa de reparação sem erro). Numa quebra dupla (DSB), ambas as fitas adjacentes são seccionadas: a molécula perde a continuidade estrutural e não há fita molde direta intacta. As vias de reparação de emergência da célula (recombinação homóloga e união de extremidades não-homólogas - NHEJ) cometem frequentes erros de junção, originando quebras cromossómicas dicêntricas, anéis e morte celular (mitotic catastrophe).",
    "distractorAnalysis": [
      "Está incorreta: as quebras duplas de cadeia (DSB) perdem a cadeia molde de referência intacta, sendo difíceis de reparar (recorrem a NHEJ sujeito a erro) e originando aberrações ou morte celular.",
      "Está incorreta: a quebra simples (SSB) é reparada com facilidade por excisão usando a fita complementar intacta como molde; a DSB é o principal evento lesivo radiobiológico crítico.",
      "Está incorreta: a radiação ionizante não confere imunidade bacteriana; SSBs são facilmente reparáveis (milhares ocorrem diariamente por stresse oxidativo metabólico normal)."
    ],
    "nursingApplication": "A eficácia da radioterapia no controlo de tumores malignos baseia-se na indução massiva de quebras duplas de cadeia (DSBs) no DNA das células neoplásicas: a incapacidade das células cancerígenas para reparar as DSBs nos intervalos das sessões fracionadas desencadeia a morte do tumor por apoptose e catástrofe mitótica."
  },
  {
    "id": 7014,
    "topicId": 7,
    "question": "Na gestão de segurança hospitalar de resíduos radioativos de doentes submetidos a exames com Tecnécio-99m (⁹⁹ᵐTc, semivida T₁/₂ = 6 horas), qual é a regra prática geral de radioproteção para a desclassificação e eliminação segura dos resíduos como lixo hospitalar convencional isento?",
    "options": [
      "A retenção dos resíduos em contentores de chumbo durante quarenta e cinco anos consecutivos para garantir a estabilização completa de todos os átomos de tecnécio.",
      "A incineração imediata dos resíduos radioativos húmidos na lareira do piso de internamento logo após o término da administração do radiofármaco ao utente.",
      "O decurso de pelo menos 10 semividas físicas (10 × 6 h = 60 horas ≈ 2,5 dias), momento em que a atividade residual é inferior a 0,1% da inicial e atinge níveis de isenção.",
      "A lavagem vigorosa de todos os materiais contaminados com sabão azul em água corrente potável da rede pública para neutralizar quimicamente os fotões gama emitidos."
    ],
    "correctIndex": 2,
    "explanation": "A taxa de desintegração radioativa de um núcleo atómico obedece à lei matemática N(t) = N₀ · (1/2)^(t / T₁/₂). Nenhum processo físico ou químico humano (nem calor, nem autoclave, nem lixívia) consegue acelerar ou travar a semivida nuclear. A regra de ouro internacional de radioproteção determina que após 10 meias-vidas (10 × T₁/₂), a atividade residual é de (1/2)¹⁰ = 1/1024 ≈ 0,098% da atividade original. Para o ⁹⁹ᵐTc (T₁/₂ = 6 h), 10 meias-vidas correspondem a 60 horas (~2,5 dias): após este período de armazenamento no decaimento blindado, mede-se com o detetor Geiger e elimina-se como resíduo biológico comum.",
    "distractorAnalysis": [
      "Está incorreta: a regra prática das 10 semividas (t = 10 · T1/2) reduz a atividade por (1/2)¹⁰ = 1/1024 (<0,1%); confirmando-se que a taxa de dose iguala o fundo ambiental, o resíduo é desclassificado.",
      "Está incorreta: para o ⁹⁹ᵐTc (T1/2 = 6 h), 2,5 a 3 dias são suficientes; armazenar por 45 anos seria um erro grave de gestão de espaço e resíduos hospitalares.",
      "Está incorreta: a incineração incontrolada libertaria radioatividade volátil para o meio ambiente; sabões químicos não desativam núcleos atómicos nem neutralizam emissões nucleares."
    ],
    "nursingApplication": "O enfermeiro que atua em medicina nuclear e imagiologia garante que frascos de eluição, seringas, agulhas e compressas utilizadas na administração de ⁹⁹ᵐTc são segregados em baldes específicos com blindagem plúmbea identificados com a data e hora do descarte, assegurando o período regulamentar de decaimento de 10 meias-vidas antes da recolha final de resíduos."
  },
  {
    "id": 7015,
    "topicId": 7,
    "question": "O contador de radiação 'Geiger-Müller' portátil com sonda externa é um dos aparelhos mais emblemáticos da física médica. Qual é o seu princípio biofísico de funcionamento e em que situações de enfermagem é utilizado?",
    "options": [
      "Determina a pressão arterial sistólica do doente através da medição da resistência elétrica das artérias radiais durante a infusão contínua de radioisótopos.",
      "Regista os batimentos cardíacos fetais em mulheres grávidas utilizando pulsos ultrassónicos de alta frequência refletidos pela parede posterior do útero.",
      "Analisa a composição química das urinas de vinte e quatro horas através da medição da densidade óptica da amostra sob iluminação de luz visível polarizada.",
      "Mede a ionização de um gás sob elevado potencial elétrico em regime de avalanche (Townsend), sendo utilizado para detetar fugas e monitorizar contaminações de superfícies e pele."
    ],
    "correctIndex": 3,
    "explanation": "O tubo Geiger-Müller é preenchido por um gás nobre (néon/árgon) a baixa pressão atravessado por um ânodo central sob alta tensão elétrica (~900 a 1200 V). Quando uma única partícula ionizante (alfa, beta ou fotão gama) penetra na janela fina de mica e ioniza átomos de gás, os eletrões aceleram em direção ao ânodo gerando uma cascata exponencial de ionização secundária por impacto (avalanche de Townsend). Essa descarga elétrica rápida gera um pulso de voltagem registado pelo circuito do monitor sob a forma de um clique audível e deflexão de agulha em contagens por minuto (cpm) ou microSieverts por hora (μSv/h).",
    "distractorAnalysis": [
      "Está incorreta: o tubo Geiger-Müller opera na região onde qualquer evento ionizante primário desencadeia uma avalanche massiva de Townsend, gerando um pulso elétrico independente da energia.",
      "Está incorreta: o contador Geiger-Müller é um detetor de radiação ionizante portátil e não um esfigmomanómetro hemodinâmico de pressão arterial.",
      "Está incorreta: não utiliza ondas ultrassónicas nem atua como cardiotocógrafo fetal; não mede densidades químicas ou parâmetros urinários de rotina."
    ],
    "nursingApplication": "Em caso de extravasamento, quebra de frasco ou derrame acidental de urina radioativa no chão da enfermaria, o enfermeiro delimita a área e utiliza o detetor Geiger-Müller para mapear com precisão os limites da contaminação física na superfície e confirmar a descontaminação completa após a limpeza especializada."
  },
  {
    "id": 7016,
    "topicId": 7,
    "question": "O método de imagem diagnóstica SPECT (Single Photon Emission Computed Tomography - Tomografia por Emissão de Fotão Único) baseia-se na deteção de qual tipo de radiação?",
    "options": [
      "Na deteção de fotões de radiação gama individuais emitidos por radionuclídeos (como o ⁹⁹ᵐTc ou ¹¹¹In) através de colimadores mecânicos de chumbo acoplados a câmaras rotativas.",
      "Na deteção em coincidência de dois fotões de aniquilação colineares emitidos simultaneamente em direções rigorosamente opostas após a emissão de positrões.",
      "Na absorção preferencial de feixes de partículas alfa de alta velocidade através de tecidos cartilaginosos com elevado teor de proteoglicanos sulfatados.",
      "Na emissão contínua de ondas de som inaudíveis geradas pelo movimento mecânico das válvulas cardíacas durante a fase de sístole ventricular esquerda."
    ],
    "correctIndex": 0,
    "explanation": "Ao contrário do PET (que deteta pares de fotões de aniquilação opostos de 511 keV de emissores de positrões), o SPECT utiliza radioisótopos emissores gama convencionais que libertam um único fotão gama por desintegração (daí o nome 'Single Photon'). A câmara gama rotativa possui colimadores de chumbo que absorvem os raios oblíquos e deixam passar apenas os fotões perpendiculares: estes atingem cristais cintiladores de NaI(Tl) acoplados a tubos fotomultiplicadores, permitindo reconstruir fatias axiais tomográficas tridimensionais da distribuição tecidual do radiofármaco no órgão estudado.",
    "distractorAnalysis": [
      "Está incorreta: a SPECT (Tomografia por Emissão de Fotão Único) utiliza colimadores mecânicos multiorifício (LEHR, MEGP) para definir a direção dos fotões gama emitidos pelo traçador.",
      "Está incorreta: a deteção em coincidência de dois fotões de aniquilação a 180° sem colimador mecânico é o princípio do PET (Tomografia por Emissão de Positrões) e não do SPECT.",
      "Está incorreta: o SPECT baseia-se em fotões gama penetrantes e não em partículas alfa (que são travadas no corpo) ou ondas sonoras de ecocardiografia."
    ],
    "nursingApplication": "O SPECT de perfusão miocárdica (com ⁹⁹ᵐTc-Sestamibi ou Tetrofosmina) é um dos exames cardiológicos mais realizados no mundo: o enfermeiro monitoriza o doente durante a prova de esforço em passadeira rolante ou indução farmacológica de stress com adenosina/dipiridamol, administrando o radiofármaco no pico do esforço isquémico para mapear áreas viáveis de miocárdio sob risco de enfarte."
  },
  {
    "id": 7017,
    "topicId": 7,
    "question": "Qual das seguintes barreiras físicas é estritamente SUFICIENTE para bloquear e reter 100% de um feixe externo de Partículas Alfa emitidas por uma fonte radioativa de Rádio-226?",
    "options": [
      "Um biombo de betão armado com pelo menos meio metro de espessura de material estrutural pesado enriquecido com fibras metálicas de aço inoxidável.",
      "Uma folha simples de papel comum com espessura padrão ou a camada mais externa de células mortas da epiderme humana (estrato córneo de cerca de 40 a 70 micrómetros).",
      "Uma lâmina de chumbo maciço com vinte milímetros de espessura mantida a temperaturas inferiores a dez graus centígrados para evitar o aquecimento térmico.",
      "Um tanque de água destilada com quatro metros de profundidade montado no piso da sala de preparação prévia de radiofármacos hospitalares."
    ],
    "correctIndex": 1,
    "explanation": "Devido ao seu colossal poder de paragem e perda contínua de energia por colisões coulombianas (alto LET), a partícula alfa tem um alcance microscópico na matéria sólida: uma folha de papel sulfite comum com espessura de ~0,1 mm (100 μm) contém massa e densidade eletrónica mais do que suficientes para frear e imobilizar integralmente todas as partículas alfa de 4 a 8 MeV antes que atravessem o outro lado da folha.",
    "distractorAnalysis": [
      "Está incorreta: devido à sua alta taxa de perda de energia por unidade de percurso (elevadíssimo stopping power), as partículas alfa são totalmente barradas por 0,05 a 0,08 mm de tecido ou papel.",
      "Está incorreta: betão de 50 cm ou tanques de água são blindagens necessárias contra neutrões rápidos ou fotões gama de teleterapia, sendo colossalmente excessivas para partículas alfa.",
      "Está incorreta: o chumbo é usado para fotões X e gama; uma folha de papel de 0,1 mm é estritamente suficiente para reter cem por cento de qualquer partícula alfa emitida pelo rádio."
    ],
    "nursingApplication": "Compreender a suficiência de uma folha de papel ou luva de látex para travar a radiação alfa permite ao enfermeiro ter tranquilidade técnica e segurança psicológica no manuseamento de frascos fechados de alfa-terapia (como o ²²³RaCl₂): a radiação emitida está perfeitamente contida pelas paredes do próprio frasco de vidro e pelas luvas descartáveis de procedimento."
  },
  {
    "id": 7018,
    "topicId": 7,
    "question": "Durante o decaimento radioativo por Emissão de Positrões (β⁺), o que ocorre com o número atómico (Z) e o número de massa (A) do núcleo pai ao transformar-se no núcleo filho?",
    "options": [
      "O número atómico Z aumenta em duas unidades e o número de massa A diminui em quatro nucleões por fragmentação espontânea do volume nuclear central.",
      "O número atómico Z aumenta em uma unidade enquanto o número de massa A diminui para metade do seu valor numérico inicial na tabela periódica dos elementos.",
      "O número atómico Z diminui em uma unidade (Z -> Z - 1) enquanto o número de massa A permanece rigorosamente constante (ᴬ_Z X -> ᴬ_(Z-1) Y + e⁺ + ν_e).",
      "Tanto o número atómico Z como o número de massa A diminuem obrigatoriamente em duas unidades devido à expulsão simultânea de dois eletrões de valência."
    ],
    "correctIndex": 2,
    "explanation": "Na emissão de positrões (decaimento beta positivo, β⁺): um protão do núcleo rico em protões transforma-se num neutrão, emitindo um positrão e um neutrino: p -> n + e⁺ + ν_e. Como o número total de nucleões permanece constante (um protão desaparece mas surge um neutrão em seu lugar), o número de massa não varia (ΔA = 0). Contudo, como a carga nuclear positiva diminui em 1 unidade de protão, o número atómico passa para Z - 1. Exemplo: ¹⁸₉F (Z=9, A=18) decai por β⁺ no elemento estável ¹⁸₈O (Z=8, A=18, Oxigénio-18).",
    "distractorAnalysis": [
      "Está incorreta: na transmutação beta mais, p -> n + e⁺ + ν_e; um protão positivo torna-se neutrão neutro, pelo que a contagem total de nucleões A não muda e Z diminui em 1.",
      "Está incorreta: Z -> Z - 2 e A -> A - 4 descreve o decaimento alfa e não a emissão de positrões beta mais.",
      "Está incorreta: o decaimento beta é isobárico (A permanece constante); em beta mais Z diminui em 1 e não aumenta (Z aumenta em 1 no decaimento beta menos)."
    ],
    "nursingApplication": "Saber que o Flúor-18 decai em Oxigénio-18 estável não-tóxico garante ao enfermeiro a segurança biológica a longo prazo do exame de PET: o átomo de flúor radioativo transmuta-se num elemento químico inócuo que se incorpora na água endógena do corpo sem qualquer toxicidade residual permanente."
  },
  {
    "id": 7019,
    "topicId": 7,
    "question": "O conceito de 'Captura Eletrónica' (CE ou K-capture) é um processo nuclear alternativo e competitivo com a emissão de positrões. Como ocorre este fenómeno no núcleo atómico?",
    "options": [
      "O núcleo atómico ejeta dois neutrões rápidos que colidem com os eletrões da camada de condução da agulha cirúrgica utilizada para a punção vascular.",
      "Um eletrão da órbita periférica salta espontaneamente para fora do átomo gerando uma corrente galvânica contínua detetada na pele dos profissionais de saúde.",
      "Dois protões do núcleo fundem-se com uma molécula de oxigénio gasoso a partir do sangue arterial do doente para gerar água destilada esterilizada.",
      "Um protão do núcleo captura um eletrão orbital interno (geralmente da camada K), transformando-se num neutrão com emissão concomitante de um neutrino monoenergético (p + e⁻ -> n + ν)."
    ],
    "correctIndex": 3,
    "explanation": "A Captura Eletrónica ocorre frequentemente quando a diferença de energia entre o núcleo pai e o filho é insuficiente para a emissão de um positrão (que requer pelo menos 2 m_e c² = 1,022 MeV). Como a função de onda quântica dos eletrões da camada K (mais próxima do núcleo) penetra ligeiramente no volume nuclear, o núcleo 'engole' esse eletrão orbital: p + e⁻ -> n + ν_e. O núcleo filho resultante tem Z - 1 e mesmo A. A vacância deixada na camada K é preenchida por eletrões mais externos, emitindo-se Raios X característicos de fluorescência ou eletrões Auger de curto alcance tecidual.",
    "distractorAnalysis": [
      "Está incorreta: na Captura Eletrónica (CE), a densidade de probabilidade finita do eletrão 1s dentro do núcleo permite a interação p + e⁻ -> n + ν_e; Z diminui em 1 e A mantém-se constante.",
      "Está incorreta: não ocorre ejeção de neutrões na CE; a desexcitação atómica posterior da vacância na camada K origina a emissão de raios X característicos e eletrões Auger.",
      "Está incorreta: a captura é um fenómeno de transmutação intranuclear entre um nucleão e um eletrão interno da camada K/L, sem fusão molecular com gases ou correntes galvânicas."
    ],
    "nursingApplication": "O Iodo-125 (¹²⁵I, utilizado em sementes permanentes de braquiterapia para o cancro da próstata) decai exclusivamente por Captura Eletrónica (T_1/2 ≈ 59,4 dias), emitindo Raios X característicos de baixa energia (~27 a 35 keV): a radiação é confinada estritamente à próstata, poupando a bexiga e o reto de efeitos secundários graves."
  },
  {
    "id": 7020,
    "topicId": 7,
    "question": "Na física das radiações, qual é a principal distinção de 'Origem Física' entre os Raios X e as Radiações Gama (γ), sabendo que ambos são fotões de radiação eletromagnética ionizante?",
    "options": [
      "Os Raios Gama têm origem intranuclear (desexcitação do núcleo atómico), enquanto os Raios X originam-se fora do núcleo (transições eletrónicas orbitais ou travamento Bremsstrahlung).",
      "Os Raios Gama são formados por partículas corpusculares com massa positiva, enquanto os Raios X são ondas mecânicas acústicas que vibram no ar ambiente hospitalar.",
      "Os Raios X viajam à velocidade da luz no vácuo mas os Raios Gama propagam-se a uma velocidade dez vezes inferior devido à sua densidade magnética elevada.",
      "A distinção reside na temperatura do feixe: os Raios X são fotões frios e os Raios Gama são fotões em combustão que aquecem as paredes da sala de exames."
    ],
    "correctIndex": 0,
    "explanation": "Embora um fotão de Raios X e um fotão Gama com a mesma energia (por exemplo, 140 keV) possuam propriedades e interações físicas rigorosamente indistinguíveis na matéria biológica, a convenção internacional da física define-os estritamente pela sua origem de geração: 1) Raios X nascem na nuvem eletrónica extranuclear (Bremsstrahlung ou saltos eletrónicos entre camadas K/L); 2) Radiações Gama nascem no interior do NÚCLEO atómico em transições entre estados de excitação nuclear de nucleões.",
    "distractorAnalysis": [
      "Está incorreta: fotões gama e raios X da mesma energia são fisicamente indistinguíveis na sua interação; o seu nome e classificação derivam unicamente do seu processo de génese física.",
      "Está incorreta: tanto os raios X como os raios gama são radiação eletromagnética ionizante (fotões) sem massa de repouso e sem carga elétrica, viajando ambos à velocidade c no vácuo.",
      "Está incorreta: a velocidade de ambos no vácuo é rigorosamente igual a c (≈ 3 × 10⁸ m/s); não existem fotões em combustão nem diferenças térmicas intrínsecas na radiação pura."
    ],
    "nursingApplication": "Compreender a diferença de origem esclarece os procedimentos de segurança: equipamentos de Raios X (como TAC ou arcos cirúrgicos) só emitem radiação quando ligados à corrente elétrica (desligando a tomada cessa toda a radiação); em contrapartida, fontes de Radiação Gama (como frascos de radiofármacos em medicina nuclear) emitem fotões de forma contínua e ininterrupta por decaimento nuclear espontâneo permanente, exigindo blindagem física em cofre de chumbo a toda a hora."
  },
  {
    "id": 7021,
    "topicId": 7,
    "question": "O fenómeno dos 'Eletrões Auger' (efeito fotoelétrico interno ou efeito Auger) tem aplicação promissora em terapia oncológica dirigida. Como se originam estes eletrões?",
    "options": [
      "Originam-se da fragmentação explosiva de um neutrão do núcleo atómico quando este entra em contacto com os iões de potássio intracelulares do miocárdio.",
      "A vacância deixada numa camada interna é preenchida por um eletrão superior, e a energia libertada é transferida sem radiação para outro eletrão orbital, que é ejetado do átomo.",
      "São produzidos pela fricção dos frascos de vidro contra as gavetas de aço inoxidável durante o transporte manual de materiais no piso da enfermaria médica.",
      "Resultam da condensação da humidade relativa do ar sobre os detetores de cintilação das gama-câmaras durante a realização de exames complementares."
    ],
    "correctIndex": 1,
    "explanation": "Descoberto por Lise Meitner e Pierre Auger: quando uma vaga se abre na camada K e um eletrão de camada superior desce para preenchê-la, em vez de emitir um fotão de Raio X característico, a energia é transferida sem radiação direta para um eletrão mais externo, que é ejetado (eletrão Auger). Como estes eletrões possuem energias cinéticas baixas (de poucas centenas de eV a poucos keV), o seu alcance no tecido é minúsculo (apenas dezenas de nanómetros), depositando uma densidade de ionização massiva localizada (comportamento de alto LET biológico eficaz).",
    "distractorAnalysis": [
      "Está incorreta: o efeito Auger é um processo não-radiativo concorrente com a emissão de raios X característicos; os eletrões Auger têm alcance ultracurto nanométrico e alto LET local.",
      "Está incorreta: o fenómeno Auger é puramente atómico (eletrosfera) e não envolve cisão de neutrões nucleares ou reatividade química com iões de potássio.",
      "Está incorreta: o efeito Auger não se relaciona com fricção mecânica de frascos ou condensação física de humidade em salas clínicas."
    ],
    "nursingApplication": "Na 'Terapia com Emissores Auger' (como o Índio-111 ligado a anticorpos monoclonais), o radiofármaco é internalizado diretamente para o núcleo da célula tumoral: os eletrões Auger libertam a sua energia destrutiva a nanómetros de distância das cadeias de DNA, estilhaçando a célula cancerígena com preservação quase total das células saudáveis vizinhas."
  },
  {
    "id": 7022,
    "topicId": 7,
    "question": "O conceito de 'Conversão Interna' (CI) na física nuclear concorre com a emissão de radiação gama na desexcitação nuclear. Como ocorre a conversão interna?",
    "options": [
      "O núcleo atómico colapsa e funde-se instantaneamente com todos os eletrões da eletrosfera para formar uma gota compacta de matéria eletricamente neutra no tecido.",
      "A radiação gama emitida é absorvida pelos ossos do doente e transformada espontaneamente em cálcio ionizado que acelera a consolidação de fraturas ósseas.",
      "A energia de excitação nuclear é transferida diretamente por acoplamento eletromagnético para um eletrão orbital interno, que é ejetado com energia cinética igual a ΔE - B.",
      "A energia nuclear dissipa-se sob a forma de ondas de pressão sonoras que produzem zumbidos inaudíveis na cabeça do profissional de saúde que administra o radiofármaco."
    ],
    "correctIndex": 2,
    "explanation": "Em vez de emitir um fotão gama para o exterior, a densidade de probabilidade da função de onda do eletrão da camada K cruza o volume nuclear, permitindo que a energia de desexcitação nuclear seja transferida diretamente para o eletrão orbital. O eletrão é ejetado com energia cinética E_cinética = E_transição - E_ligação (eletrão de conversão interna monoenergético). O átomo fica ionizado com uma vacância na camada interna, gerando a subsequente cascata de Raios X característicos e eletrões Auger.",
    "distractorAnalysis": [
      "Está incorreta: na Conversão Interna (CI), o fotão gama não chega a ser emitido; a interação de Coulomb entre os nucleões e o eletrão (1s/2s) ejeta o eletrão monoenergético com E_c = ΔE - B.",
      "Está incorreta: o átomo mantém a sua estrutura geral (exceto pela vacância orbital que se segue à ejeção do eletrão); não há colapso global da matéria atómica.",
      "Está incorreta: a CI é um modo quântico de desexcitação nuclear concorrente com o gama; não converte radiação em massa de cálcio ósseo nem em zumbidos mecânicos."
    ],
    "nursingApplication": "A conversão interna é um dos fatores considerados pelos físicos médicos na dosimetria clínica de radionuclídeos: a emissão de eletrões de conversão interna aumenta a dose local de radiação absorvida pelos tecidos circundantes onde o radioisótopo se aloja, influenciando o cálculo de dose terapêutica administrada pelo enfermeiro."
  },
  {
    "id": 7023,
    "topicId": 7,
    "question": "No pós-operatório de doentes submetidos a cirurgia com técnica de 'Biópsia do Gânglio Sentinela' (ex: no cancro da mama ou melanoma), o enfermeiro utiliza na sala cirúrgica uma 'Sonda Gama' (gamma probe). Qual é a sua função biofísica?",
    "options": [
      "Emite um feixe contínuo de raios laser para cortar os vasos sanguíneos da axila e coagular as artérias sem necessidade de ligaduras mecânicas de fio cirúrgico.",
      "Mede a temperatura interna dos tecidos musculares profundos para detetar precocemente estados febris provocados por bactérias hospitalares durante a cirurgia.",
      "Injeta pequenas doses de anestésico local através de ondas de choque de alta energia direcionadas para os gânglios linfáticos metastáticos da cadeia mamária.",
      "Deteta a radiação gama emitida pelo radiocoloide (como o ⁹⁹ᵐTc-nanocoloide) retido no gânglio sentinela, orientando com precisão acústica e numérica a sua excisão cirúrgica."
    ],
    "correctIndex": 3,
    "explanation": "A biópsia do gânglio sentinela revolucionou a cirurgia oncológica: o primeiro linfonodo que recebe a drenagem linfática do tumor primário é marcado com micropartículas coloidais radiomarcadas com ⁹⁹ᵐTc. Na sala operatória, a 'Gamma Probe' (sonda portátil com cristal cintilador e colimador direcional de chumbo) traduz a taxa de fotões gama de 140 keV captados num som de bips de frequência crescente: quanto mais próximo da sonda o gânglio estiver, maior é a contagem sonora, permitindo ao cirurgião extirpar seletivamente apenas aquele gânglio único para exame anatomopatológico.",
    "distractorAnalysis": [
      "Está incorreta: a sonda gama intraoperatória contém um cristal de cintilação (ou semicondutor) colimado que converte os fotões gama do ⁹⁹ᵐTc em contagens sonoras e visuais para guiar o cirurgião.",
      "Está incorreta: a sonda é um instrumento estritamente detetor (recetor) de radiação ionizante e não um emissor de laser cirúrgico para hemostase térmica.",
      "Está incorreta: a sonda gama não mede temperatura tecidual nem injeta substâncias anestésicas por ondas de choque; destina-se exclusivamente à localização radioguiada."
    ],
    "nursingApplication": "A técnica do gânglio sentinela evita o esvaziamento ganglionar axilar total em milhares de mulheres, prevenindo o linfedema crónico incapacitante do braço ('braço inchado'). O enfermeiro desempenha papel basilar: orientar a doente na injeção intradérmica pré-operatória, calibrar a sonda gama com fonte de controlo e gerir as peças operatórias radiomarcadas enviadas à patologia."
  },
  {
    "id": 7024,
    "topicId": 7,
    "question": "Na caracterização de um acidente com 'Contaminação Radioativa Externa' na pele de um trabalhador ou doente, qual é a conduta inicial prioritária de enfermagem antes de iniciar qualquer despenhamento químico invasivo?",
    "options": [
      "Remover com cuidado todo o vestuário contaminado (o que elimina tipicamente 80 a 90% da contaminação externa) e lavar a pele com água morna e sabão neutro sem fricção abrasiva.",
      "Esfregar a pele vigorosamente com escovas de aço e detergente cáustico concentrado até provocar sangramento ativo para drenar o radioisótopo através do fluxo vascular dérmico.",
      "Mergulhar o indivíduo num banho de gelo com álcool etílico a noventa e seis graus durante trinta minutos para congelar e inativar a carga nuclear dos átomos.",
      "Administrar de imediato antibióticos de largo espetro por via intravenosa rápida antes de efetuar qualquer medição de radiometria com contador de contaminação."
    ],
    "correctIndex": 0,
    "explanation": "A doutrina internacional de resposta a acidentes radiológicos estabelece passos claros: 1) A simples remoção de sapatos e roupas retém a vasta maioria do material particulado disperso; 2) A lavagem da pele deve ser suave e com sabão de pH neutro: NUNCA esfregar agressivamente com escovas duras, pois a escoriação mecânica da epiderme remove a camada córnea queratinizada protetora e facilita a absorção transdérmica do radioisótopo para a circulação sistémica (transformando uma contaminação externa benigna numa contaminação interna perigosa); 3) A água utilizada deve ser morna (água quente provocaria vasodilatação e absorção; água fria fecharia os poros retendo o agente).",
    "distractorAnalysis": [
      "Está incorreta: a remoção do vestuário remove a vasta maioria da contaminação; a lavagem suave preserva a integridade da barreira cutânea, impedindo a absorção interna do contaminante.",
      "Está incorreta: nunca se deve esfregar com escovas abrasivas ou substâncias cáusticas que danifiquem a epiderme, pois isso converteria contaminação externa em contaminação interna sistémica grave.",
      "Está incorreta: banhos de gelo e álcool não inativam a radioatividade e causam hipotermia e lesão cutânea; a prioridade imediata é a descontaminação externa física suave e medição radiológica."
    ],
    "nursingApplication": "O enfermeiro monitoriza a descontaminação cutânea com o contador Geiger-Müller após cada ciclo suave de lavagem e secagem por toques: o processo repete-se até que a taxa de contagem atinja os níveis basais de fundo do ambiente ou abaixo dos limites de isenção."
  },
  {
    "id": 7025,
    "topicId": 7,
    "question": "O radioisótopo Estrôncio-89 (⁸⁹Sr, emissor beta puro com T₁/₂ ≈ 50,5 dias) é utilizado na paliação de dor em metástases ósseas osteoblásticas. A nível biofísico e fisiológico, porque é que o Estrôncio-89 se fixa seletivamente no esqueleto?",
    "options": [
      "O Estrôncio-89 liga-se exclusivamente aos lípidos da medula óssea amarela devido ao seu elevado peso molecular e à sua insolubilidade em solventes aquosos do plasma.",
      "Por ser um análogo químico bivalente do Cálcio (mesmo grupo 2 da tabela periódica), o Estrôncio-89 é incorporado na hidroxiapatite óssea em zonas de rápida osteogénese tumoral.",
      "O radiofármaco é transportado ativamente pela hemoglobina dos eritrócitos até aos ossos porque partilha a mesma fórmula estrutural que o oxigénio molecular gasoso.",
      "A fixação ocorre por atração eletrostática induzida pelas próteses metálicas de titânio que todos os doentes oncológicos com metástases ósseas possuem implantadas."
    ],
    "correctIndex": 1,
    "explanation": "Elementos do mesmo grupo da Tabela Periódica possuem o mesmo número de eletrões de valência e comportamentos químicos semelhantes. O Estrôncio (³⁸Sr) e o Cálcio (²⁰Ca) são ambos metais alcalino-terrosos com iões bivalentes estáveis (Sr²⁺ e Ca²⁺) de raio iónico muito próximo: as células ósseas (osteoblastos) não conseguem distinguir o estrôncio do cálcio, incorporando-o diretamente na rede cristalina da hidroxiapatite [Ca₁₀(PO₄)₆(OH)₂]. Em lesões metastáticas ósseas com proliferação osteoblástica acelerada, o ⁸⁹Sr concentra-se até 10 vezes mais do que no osso são, irradiando com partículas beta o foco doloroso metastático.",
    "distractorAnalysis": [
      "Está incorreta: como metal alcalino-terroso (Sr²⁺ análogo ao Ca²⁺), o ⁸⁹Sr comporta-se biologicamente como cálcio, concentrando-se avidamente na matriz óssea em renovação em redor das metástases.",
      "Está incorreta: o estrôncio deposita-se na fração mineral óssea inorgânica (cristais de hidroxiapatite) e não nos lípidos adiposos da medula amarela.",
      "Está incorreta: não é transportado pela hemoglobina como oxigénio gasoso nem depende de próteses metálicas de titânio para fixação esquelética."
    ],
    "nursingApplication": "O enfermeiro sabe que o Estrôncio-89 tem uma ação analgésica prolongada (alívio da dor óssea que surge 1 a 2 semanas após a injeção e dura até 6 meses). Como é um potente mielotóxico, o enfermeiro deve monitorizar hemogramas semanais com contagem de plaquetas e leucócitos antes e após a terapêutica."
  },
  {
    "id": 7026,
    "topicId": 7,
    "question": "Na utilização de detectores de cintilação sólidos (como os cristais de NaI:Tl ou BGO utilizados em câmaras gama e scanners de PET), qual é o fenómeno biofísico de conversão de energia que ocorre quando um fotão de radiação gama colide com o cristal?",
    "options": [
      "A radiação gama converte-se instantaneamente em corrente elétrica contínua de duzentos amperes que alimenta as lâmpadas da sala de observação hospitalar.",
      "O cristal de NaI absorve o fotão e transmuta-se mecanicamente numa solução aquosa de cloreto de sódio que escorre para fora do equipamento imagiológico.",
      "O fotão gama transfere energia aos eletrões do cristal, provocando ionização e excitação que emitem fotões de luz visível nas impurezas ativadoras de tálio (Tl⁺).",
      "Ocorre uma reação de fusão nuclear a frio no interior do cristal cintilador, aquecendo o equipamento a mais de mil graus centígrados durante o exame."
    ],
    "correctIndex": 2,
    "explanation": "Os cintiladores inorgânicos (como o Iodeto de Sódio ativado com Tálio, NaI:Tl) são a pedra angular da deteção em medicina nuclear: o fotão gama deposita energia no cristal por efeito fotoelétrico ou Compton, promovendo eletrões da banda de valência para a banda de condução. Ao desexcitarem-se através dos centros de luminescência do tálio, emitem impulsos luminosos de luz visível (cerca de 38 fotões de luz por cada 1 keV de energia depositada). Um tubo fotomultiplicador com fotocátodo converte esses fotões de luz em fotoeletrões e amplifica-os por um fator de 10⁶, gerando um sinal elétrico mensurável nos computadores de aquisição.",
    "distractorAnalysis": [
      "Está incorreta: o cristal cintilador absorve o fotão por efeito fotoelétrico ou Compton; os eletrões secundários desexcitam-se através dos centros luminescentes de tálio emitindo cintilações ópticas.",
      "Está incorreta: a energia de cada fotão individual (keV a MeV) gera luz visível microscópica amplificada por tubos fotomultiplicadores (PMT), sem correntes elétricas macroscópicas elevadas.",
      "Está incorreta: o cristal é sólido inorgânico permanente selado hermeticamente contra humidade; não sofre liquefação nem fusão nuclear térmica durante as aquisições."
    ],
    "nursingApplication": "Os cristais de cintilação de NaI(Tl) das câmaras gama são extremamente higroscópicos (absorvem água do ar e oxidam tornando-se opacos) e frágeis mecanicamente a choques térmicos: o enfermeiro e técnicos asseguram que a sala de medicina nuclear mantém climatização estrita 24 horas por dia com temperatura (20-22 °C) e humidade controladas."
  },
  {
    "id": 7027,
    "topicId": 7,
    "question": "O conceito de 'Rendimento de Fissão' (fission yield curve) descreve a probabilidade percentual com que cada fragmento de fissão é gerado a partir da cisão térmica do Urânio-235. Em relação à simetria da fissão, o que revela a famosa curva em 'Corcova de Camelo' (dois picos de massa)?",
    "options": [
      "A fissão do Urânio-235 quebra o núcleo invariavelmente em duas metades perfeitamente simétricas com sessenta e quatro nucleões em cada fragmento resultante.",
      "A curva demonstra que a probabilidade de fissão é rigorosamente constante e uniforme para qualquer elemento químico desde o hidrogénio até ao urânio.",
      "O gráfico indica que o Urânio-235 se converte exclusivamente em gás oxigénio e gás azoto estáveis sem produzir quaisquer resíduos radioativos de fissão.",
      "A fissão induzida por neutrões térmicos é predominantemente assimétrica, quebrando o núcleo em dois fragmentos de massas desiguais (picos perto de A ≈ 95 e A ≈ 140)."
    ],
    "correctIndex": 3,
    "explanation": "A curva de rendimento de fissão por neutrões térmicos de ²³⁵U tem uma forma bimodal clássica com dois picos pronunciados (conhecida internacionalmente como curva em corcova de camelo): a fissão simétrica em dois fragmentos idênticos (A = 117) tem uma probabilidade inferior a 0,01%. Os núcleos filhos preferem configurações quânticas com camadas quase mágicas: um grupo de massa leve centrado em A = 90 a 100 (rendimento de ~6% para ⁹⁹Mo) e um grupo de massa pesada centrado em A = 130 a 145 (rendimento de ~3% para ¹³¹I e ~6% para ¹³⁷Cs).",
    "distractorAnalysis": [
      "Está incorreta: a distribuição de massa bimodal reflete efeitos de camadas nucleares que favorecem núcleos com números mágicos perto de A ≈ 95 (ex: ⁹⁹Mo) e A ≈ 140 (ex: ¹³¹I, ¹³³Xe, ¹³⁷Cs).",
      "Está incorreta: a fissão simétrica em duas metades iguais (A ≈ 117) é rara na fissão térmica de U-235, ocorrendo com rendimento inferior a 0,01% (fundo do vale entre os picos).",
      "Está incorreta: a fissão térmica ocorre apenas em núcleos físseis pesados (como U-235, Pu-239) e gera radionuclídeos instáveis ricos em neutrões com cinética bem determinada."
    ],
    "nursingApplication": "Esta assimetria natural na produção de fissão em reatores nucleares é a razão pela qual os radioisótopos médicos de diagnóstico (Mo-99 -> Tc-99m) e de terapia (I-131) são obtidos com rendimentos tão elevados e comercializados a custos acessíveis para os hospitais e sistemas de saúde mundiais."
  },
  {
    "id": 7028,
    "topicId": 7,
    "question": "Na manipulação de radiofármacos em seringas de plástico comum pelo enfermeiro, por que razão uma seringa contendo 370 MBq (10 mCi) de Tecnécio-99m mantida diretamente entre as pontas dos dedos sem qualquer blindagem plúmbea pode administrar doses perigosas na pele das mãos em escassos minutos?",
    "options": [
      "Pela lei do inverso do quadrado da distância: a distância do fluido radioativo à pele das polpas digitais é de apenas 1-2 mm, gerando taxas de dose de dezenas de mGy por minuto.",
      "Porque os eletrões do plástico da seringa reagem quimicamente com os lípidos da epiderme do enfermeiro provocando queimaduras térmicas por convecção direta.",
      "Pelo facto de o Tecnécio-99m emitir partículas alfa pesadas capazes de perfurar as paredes de plástico e penetrar vários centímetros nos ossos da mão humana.",
      "Devido à atração magnética permanente entre a agulha de aço inoxidável e os ossos das falanges proximais dos membros superiores da equipa cirúrgica."
    ],
    "correctIndex": 0,
    "explanation": "A Lei do Inverso do Quadrado (I ∝ 1/d²) dita que quando a distância d se aproxima de zero (milímetros de contacto da pele com a parede cilíndrica da seringa), o denominador (d²) torna-se minúsculo, catapultando a taxa de dose superficial para valores alarmantes (>100-300 mGy/hora para poucos mililitros de ⁹⁹ᵐTc). Se o enfermeiro empunhar a seringa sem blindagem diariamente ao preparar injeções, a pele dos dedos indicador e polegar pode atingir o limite determinístico anual de extremidades (500 mSv) em poucas semanas.",
    "distractorAnalysis": [
      "Está incorreta: como a taxa de dose escala com 1/d², aproximar os dedos a 1-2 mm da fonte concentrada expõe as extremidades a doses perigosas; o uso de protetor de seringa é mandatório.",
      "Está incorreta: a lesão radiológica provém da radiação ionizante e não de reações químicas com o plástico ou convecção térmica macroscópica.",
      "Está incorreta: o ⁹⁹ᵐTc não é um emissor alfa; é um emissor gama quase puro (140 keV); o efeito decorre estritamente da geometria de proximidade milimétrica extrema."
    ],
    "nursingApplication": "O uso inegociável de 'Protetores de Seringa de Tungsténio' (cilindros de tungsténio de alta densidade com visor de vidro plumbífero) durante toda a preparação, transporte e injeção endovenosa de radiofármacos é a salvaguarda primária do enfermeiro: o protetor afasta os dedos e atenua mais de 98% da radiação gama, reduzindo a dose nas mãos para frações insignificantes."
  },
  {
    "id": 7029,
    "topicId": 7,
    "question": "O Samário-153 (¹⁵³Sm-lexidronam / Quadramet) é um radiofármaco complexado com fosfonatos utilizado no alívio da dor de metástases ósseas. Como se caracteriza o seu decaimento radioativo duplo?",
    "options": [
      "Emite partículas alfa de alta energia para cauterizar as artérias coronárias e feixes laser para estimular a regeneração da medula óssea dos membros inferiores.",
      "Emite partículas beta menos (E_max = 808 keV) para destruição celular terapêutica e fotões gama de 103 keV que permitem a obtenção de imagens cintigráficas de controlo.",
      "Decai exclusivamente por emissão de neutrões rápidos que são captados pelas células tumorais para acelerar a sedimentação de glóbulos vermelhos no baço.",
      "O Samário-153 liberta luz ultravioleta visível a olho nu que esteriliza a superfície óssea do fémur sem depositar qualquer dose de radiação ionizante nos tecidos."
    ],
    "correctIndex": 1,
    "explanation": "O Samário-153 (T₁/₂ ≈ 46,3 horas) combina emissão terapêutica e imagiológica simultânea: as partículas beta negativas têm um alcance máximo no tecido biológico de cerca de 3,1 mm (suficiente para irradiar o microambiente da metástase óssea com destruição seletiva de terminações nervosas sensitivas e células cancerígenas), enquanto a emissão simultânea de fotões gama de 103 keV (com 29% de abundância) é detetada de forma clara pelas câmaras gama padrão de medicina nuclear para confirmar a fixação do radiofármaco nas lesões.",
    "distractorAnalysis": [
      "Está incorreta: o ¹⁵³Sm conjuga efeito analgésico por radiação beta menos (alcance médio nos tecidos ~0,6 mm) com fotões gama de 103 keV (29%) detetáveis em gama-câmara.",
      "Está incorreta: o Samário-153 não emite partículas alfa nem frequências hertzianas; a sua indicação primária é a paliação de dor em metástases ósseas osteoblásticas.",
      "Está incorreta: não emite neutrões nem luz ultravioleta; é um radiofármaco bivalente de beta/gama com afinidade pela matriz de hidroxiapatite do osso trabecular."
    ],
    "nursingApplication": "O enfermeiro programa a injeção lenta de ¹⁵³Sm-lexidronam através de linha venosa pérvia e monitoriza a resposta clínica: a maioria dos doentes experimenta uma exacerbação transitória da dor nas primeiras 48 a 72 horas pós-injeção ('flare phenomenon' provocada pela resposta inflamatória inicial à radiação beta), devendo o enfermeiro reforçar a analgesia profilática antes da melhoria sustentada subsequente."
  },
  {
    "id": 7030,
    "topicId": 7,
    "question": "No contexto da terapia com anticorpos monoclonais radiomarcados (Radioimunoterapia - RIT), o Ítrio-90 (⁹⁰Y, conjugado por exemplo no Ibritumomab tiuxetan para tratamento de linfomas foliculares refratários) é classificado como qual tipo de emissor radioativo?",
    "options": [
      "Um emissor de partículas alfa puras de curto alcance tecidual utilizado para destruir células cancerígenas individuais sem atingir células adjacentes na circulação.",
      "Um emissor de fotões gama de alta frequência utilizado para iluminar o tórax do doente durante a realização de ecografias cardíacas transtorácicas de rotina.",
      "Um emissor beta menos puro de alta energia (E_max = 2,28 MeV, sem emissão gama primária apreciável), com alcance tecidual máximo de 11 milímetros (médio de 2,5 mm).",
      "Um composto radioativo inerte que decai por emissão de neutrões frios com semivida física de quatrocentos anos na corrente sanguínea do doente oncológico."
    ],
    "correctIndex": 2,
    "explanation": "O Ítrio-90 (⁹⁰₃₉Y) decai diretamente para o Zircónio-90 estável (⁹⁰₄₀Zr) por emissão de uma partícula beta negativa muito energética (E_max = 2,28 MeV, energia média de 933 keV) sem emissão de fotões gama primários (emissor beta puro). O longo alcance tecidual dos seus eletrões velozes (alcance médio de 5 mm, máximo de 11 mm) é a sua grande vantagem terapêutica: o 'efeito de fogo cruzado' (crossfire) permite que os eletrões irradiem e destruam células neoplásicas vizinhas que não expressavam o antigénio tumoral ou que não foram atingidas diretamente pelo anticorpo monoclonal.",
    "distractorAnalysis": [
      "Está incorreta: o ⁹⁰Y decai quase a 100% por beta menos direta para o Zircónio-90 estável (E_max = 2,28 MeV); o seu alcance elevado é excelente para tumores volumosos ou pouco vascularizados.",
      "Está incorreta: o Ítrio-90 não emite partículas alfa; a sua emissão corpuscular é puramente eletrónica (beta menos de alta velocidade).",
      "Está incorreta: a ausência de gamas primários impede imagens convencionais diretas (embora possa usar-se Bremsstrahlung ou a ínfima fração de aniquilação 32 ppm em PET-CT)."
    ],
    "nursingApplication": "Ao administrar anticorpos marcados com ⁹⁰Y, o enfermeiro manipula seringas com blindagem acrílica grossa (nunca chumbo!) e vigia de perto o hemograma completo durante as semanas seguintes: devido à longa penetrância dos eletrões de 2,28 MeV, a toxicidade limitante de dose é a trombocitopenia e neutropenia tardia transitória decorrente do efeito de radiação sobre a medula óssea adjacente."
  },
  {
    "id": 7031,
    "topicId": 7,
    "question": "O conceito biofísico de 'Efeito Espectador' (Bystander Effect) radioinduzido na biologia das radiações refere-se a qual resposta celular inesperada?",
    "options": [
      "Os profissionais de saúde que observam o doente através do vidro plumbífero desenvolvem sintomas de enjoo e tonturas devido à ação magnética da radiação à distância.",
      "As células neoplásicas tornam-se completamente resistentes a qualquer quimioterapia após a observação visual do doente pelo médico especialista de oncologia médica.",
      "O radiofármaco acumulado no tumor evapora espontaneamente através dos poros cutâneos e irradia as pessoas sentadas na sala de espera contígua à enfermaria.",
      "Células vizinhas não diretamente atravessadas pela radiação manifestam danos genéticos e apoptose, induzidas por sinais químicos intercelulares transmitidos pelas células irradiadas."
    ],
    "correctIndex": 3,
    "explanation": "Tradicionalmente, a radiobiologia clássica postulava que o dano celular exigia a passagem física direta do feixe ionizante pelo núcleo ou citoplasma da célula. O Efeito Espectador (Bystander Effect), comprovado nas últimas décadas, demonstra que células diretamente irradiadas libertam espécies reativas de oxigénio (ROS), óxido nítrico e citocinas pró-inflamatórias (como TNF-α e TGF-β) que viajam por canais intercelulares de junções gap ou pelo fluido extracelular, ativando vias de morte celular programada ou instabilidade genómica em células vizinhas 'espectadoras' não-atingidas pelo feixe primário.",
    "distractorAnalysis": [
      "Está incorreta: o efeito bystander é mediado por junções comunicantes (gap junctions) e libertação de citocinas (como TGF-β, TNF-α) e ROS que propagam o dano a células vizinhas intactas.",
      "Está incorreta: o termo não se refere a observadores humanos mas sim a células não-alvo vizinhas que sofrem efeitos biológicos secundários sem absorção direta de radiação.",
      "Está incorreta: não decorre de evaporação de radioisótopos através da pele nem de sugestão visual; é um fenómeno radiobiológico molecular amplamente documentado."
    ],
    "nursingApplication": "O efeito espectador amplifica a eficácia da radioterapia e da terapia com radionuclídeos dirigidos (como na alfa e beta terapia administrada por enfermeiros): mesmo que o fármaco radiomarcado não consiga ligar-se a 100% das células de uma massa tumoral heterogénea, a sinalização de dano biológico induz a morte de células tumorais vizinhas não marcadas."
  },
  {
    "id": 7032,
    "topicId": 7,
    "question": "No pós-tratamento de um doente submetido a Radioiodoterapia com Iodo-131 em dose ablativa alta (ex: 3700 MBq / 100 mCi), o doente permanece internado num quarto de isolamento radiológico blindado até que a taxa de dose externa a 1 metro de distância desça abaixo de qual patamar legal de segurança para alta hospitalar?",
    "options": [
      "Abaixo de patamares regulamentares rigorosos (tipicamente inferiores a vinte a trinta microsieverts por hora a 1 metro de distância, ou atividade retida < 800 MBq).",
      "Abaixo de dez sieverts por segundo a meio metro de distância, permitindo que o doente regresse a casa no mesmo dia utilizando transportes públicos urbanos.",
      "Apenas quando o doente deixar de emitir qualquer tipo de calor corporal, comprovando o arrefecimento completo de todos os átomos de iodo na glândula tiroide.",
      "A permanência hospitalar é fixada em noventa dias obrigatórios para qualquer dose administrada, independentemente da taxa de dose residual medida no leito."
    ],
    "correctIndex": 0,
    "explanation": "As normas nacionais e europeias de radioproteção (DGS em Portugal e Diretiva BSS) estipulam que o doente tratado com ¹³¹I em alta atividade só tem autorização de alta do quarto blindado quando a taxa de dose medida pelo físico médico com detetor portátil calibrated a 1 metro do abdómen/pescoço estiver abaixo de um valor pré-definido (tipicamente ≤ 20 a 25 μSv/h). Isto assegura que, seguindo as recomendações de distanciamento e higiene prescritas na alta, os familiares adultos não excedam 1 a 3 mSv de dose acumulada e crianças/grávidas permaneçam abaixo de 1 mSv.",
    "distractorAnalysis": [
      "Está incorreta: os critérios de alta baseiam-se em limites de taxa de dose a 1 metro (ex: <20 µSv/h na Europa / DGS em Portugal) para garantir que conviventes não recebam >1-5 mSv.",
      "Está incorreta: 10 Sieverts por segundo seria uma dose letal instantânea; os limites de alta situam-se na escala de microsieverts por hora (µSv/h).",
      "Está incorreta: a retenção dura habitualmente 2 a 4 dias até a eliminação renal baixar a atividade para níveis seguros; não depende de temperatura biológica nem dura 90 dias."
    ],
    "nursingApplication": "Na alta hospitalar, o enfermeiro entrega e explica detalhadamente o folheto de instruções personalizadas de segurança radiológica: dormir em cama separada do cônjuge durante 7 a 14 dias, evitar transportes públicos lotados nas primeiras 48h, manter distância de 2 metros de crianças pequenas e mulheres grávidas, dar dupla descarga na sanita e lavar a roupa pessoal em separado."
  },
  {
    "id": 7033,
    "topicId": 7,
    "question": "O fenómeno da 'Conversão de Par Inversa' ou Aniquilação de Positrões gera dois fotões gama monoenergéticos de exatamente qual energia matemática?",
    "options": [
      "Exatamente dezassete megaeletrão-volts cada um, resultantes da fragmentação do núcleo atómico de oxigénio em dois neutrões livres acelerados no tecido.",
      "Exatamente 511 keV (0,511 MeV) cada um, correspondente à conversão integral da massa de repouso do eletrão e do positrão em energia eletromagnética pura (E = m_e · c²).",
      "Uma energia variável entre um eletrão-volt e cinquenta joules em função do tipo de alimento ingerido pelo doente nas doze horas anteriores ao exame de tomografia.",
      "Rigorosamente zero eletrão-volts, porque os dois fotões de aniquilação anulam mutuamente as suas frequências de oscilação por interferência quântica destrutiva."
    ],
    "correctIndex": 1,
    "explanation": "A massa de repouso do eletrão (e do positrão) é m_e ≈ 9,109 × 10⁻³¹ kg. Pela equação de equivalência de Einstein: E = m_e · c² = (9,109 × 10⁻³¹ kg) × (2,998 × 10⁸ m/s)² = 8,187 × 10⁻¹⁴ Joules. Convertendo Joules para eletrão-volts (1 eV = 1,602 × 10⁻¹⁹ J): E = (8,187 × 10⁻¹⁴) / (1,602 × 10⁻¹⁹) ≈ 511.000 eV = 511 keV. Como na aniquilação a baixa energia o momento linear inicial do par é quase nulo, a conservação do momento e energia exige a criação de dois fotões rigorosamente idênticos de 511 keV viajando em direções diametralmente opostas (180°).",
    "distractorAnalysis": [
      "Está incorreta: a massa do eletrão em repouso é m_e ≈ 9,109 × 10⁻³¹ kg, que multiplicada por c² e convertida em MeV resulta em E = 0,510998 MeV ≈ 511 keV por fotão.",
      "Está incorreta: a aniquilação envolve um par leptão-antileptão (e⁺ + e⁻) e não fragmentação nuclear de oxigénio; a energia é fixa em 511 keV no referencial do centro de massa.",
      "Está incorreta: a energia não é nula nem depende da dieta alimentar; os fotões são altamente energéticos (raios gama) e propagam-se em sentidos opostos (180°)."
    ],
    "nursingApplication": "A energia invariável de 511 keV é a 'assinatura' quântica que os enfermeiros de medicina nuclear reconhecem: os detetores do tomógrafo PET possuem janelas eletrónicas de seleção de energia ajustadas rigorosamente em torno do pico de 511 keV (ex: 450 a 550 keV), rejeitando qualquer radiação dispersa com energias diferentes para produzir imagens oncológicas de máxima nitidez."
  },
  {
    "id": 7034,
    "topicId": 7,
    "question": "Na utilização de blindagens para transporte de radiofármacos emissores de Radiação Gama de alta energia (como os fotões de 511 keV de PET), qual é a diferença entre usar Chumbo (Pb) e Tungsténio (W)?",
    "options": [
      "O Chumbo é um metal leve e transparente que flutua na água, enquanto o Tungsténio é um gás nobre utilizado para pressurizar seringas descartáveis de polietileno.",
      "O Tungsténio atrai os fotões gama por magnetismo dipolar, enquanto o Chumbo repele todas as radiações ionizantes através de cargas elétricas eletrostáticas de superfície.",
      "O Tungsténio tem maior densidade (19,3 g/cm³ vs 11,3 g/cm³ do Pb) e resistência mecânica, permitindo protetores de seringa mais finos, compactos e fáceis de manusear.",
      "Não existe qualquer diferença física ou mecânica entre ambos, sendo os dois elementos químicos exatamente idênticos na tabela periódica moderna dos elementos."
    ],
    "correctIndex": 2,
    "explanation": "A atenuação linear de fotões penetrantes de alta energia (como os 511 keV) depende fundamentalmente da densidade de massa (g/cm³) e da densidade de eletrões do material. O Tungsténio tem uma densidade de quase 19,3 g/cm³ (cerca de 70% mais denso que o chumbo, que tem 11,34 g/cm³). Isto significa que uma parede de tungsténio com menor espessura proporciona a mesma Camada Hemirredutora (HVL) que uma parede grossa de chumbo. Além disso, o tungsténio é extremamente duro e não se deforma, ao contrário do chumbo que é maleável e tóxico por contacto cutâneo contínuo.",
    "distractorAnalysis": [
      "Está incorreta: devido à densidade muito superior do tungsténio (~19,3 vs ~11,3 g/cm³ do chumbo), a camada hemirredutora é substancialmente menor, viabilizando blindagens ergonómicas.",
      "Está incorreta: o chumbo é um metal pesado denso e maleável (Z = 82); o tungsténio é um metal de transição refratário muito duro (Z = 74, ρ ≈ 19,3 g/cm³); nenhum é gás.",
      "Está incorreta: a atenuação de fotões ocorre por interações quânticas com eletrões e núcleos (efeito fotoelétrico, espalhamento Compton) e não por atração magnética."
    ],
    "nursingApplication": "Em serviços de PET-CT com Flúor-18, os protetores de seringa e os cofres de transporte que o enfermeiro empunha são quase exclusivamente fabricados em ligas pesadas de Tungsténio: proporcionam proteção formidável contra os penetrantes fotões de 511 keV com uma empunhadura ergonómica e sem o risco de contaminação dérmica por chumbo metálico pesado."
  },
  {
    "id": 7035,
    "topicId": 7,
    "question": "O Lutece-177 (¹⁷⁷Lu, T₁/₂ ≈ 6,7 dias) é um dos radioisótopos mais inovadores da 'Terapia com Radionuclídeos de Recetores Peptídicos' (PRRT, ex: Lutathera no tratamento de tumores neuroendócrinos e Pluvicto no cancro da próstata). Qual é a sua assinatura de emissão nuclear?",
    "options": [
      "Emite exclusivamente partículas alfa de alta energia sem qualquer emissão de fotões gama ou partículas beta no interior dos tecidos celulares tumorais.",
      "Decai por fusão nuclear espontânea com átomos de hidrogénio, emitindo feixes contínuos de luz visível verde que iluminam o interior da bexiga do utente.",
      "A sua assinatura consiste na libertação de electrões pesados que permanecem aprisionados nos ossos da bacia durante trinta anos sem sofrer eliminação biológica.",
      "Emite partículas beta menos terapêuticas de médio alcance (E_max = 497 keV) e fotões gama diagnósticos de 113 e 208 keV perfeitamente detetáveis em câmaras gama/SPECT."
    ],
    "correctIndex": 3,
    "explanation": "O Lutécio-177 tornou-se o padrão de excelência da teranóstica moderna de precisão: as suas partículas beta negativas têm menor energia e menor alcance (~1,5-2 mm) do que o Ítrio-90 (~11 mm), o que reduz drasticamente a irradiação colateral da medula óssea e rins saudáveis. Simultaneamente, as suas emissões gama de 113 e 208 keV são suficientemente penetrantes para serem captadas com excelente nitidez por câmaras gama convencionais SPECT/CT, permitindo ao enfermeiro e médico visualizar exatamente onde o fármaco se ligou e calcular a dose absorvida pelo tumor após cada ciclo.",
    "distractorAnalysis": [
      "Está incorreta: o ¹⁷⁷Lu é o expoente máximo da teranóstica moderna: os eletrões beta destroem micrometástases (alcance tecidual ~1-2 mm), e os gamas permitem dosimetria e imagens SPECT.",
      "Está incorreta: o Lutécio-177 não é um emissor alfa (emissores alfa em PRRT incluem o Actínio-225 ou Bismuto-213); o ¹⁷⁷Lu é um emissor beta menos/gama.",
      "Está incorreta: não sofre fusão com hidrogénio nem emite luz verde macroscópica; a sua semivida física de 6,7 dias permite tratamento eficaz e eliminação controlada."
    ],
    "nursingApplication": "Na administração de ¹⁷⁷Lu-Dotatate pelo enfermeiro oncológico, é administrada concomitantemente uma perfusão intravenosa de aminoácidos específicos (lisina e arginina) durante várias horas: os aminoácidos saturam competitivamente a reabsorção tubular renal proximal, impedindo que o Lutécio-177 se fixe nos rins e prevenindo a toxicidade renal radioinduzida."
  },
  {
    "id": 7036,
    "topicId": 7,
    "question": "Qual das seguintes características biofísicas é EXCLUSIVA da radiação eletromagnética Gama (γ) em comparação com as partículas corpusculares Alfa (α) e Beta (β)?",
    "options": [
      "É radiação eletromagnética ionizante sem massa de repouso e sem carga elétrica, apresentando atenuação exponencial na matéria em vez de um alcance máximo finito rígido.",
      "Possui a maior carga elétrica positiva de todas as emissões radioativas conhecidas no universo, sendo atraída com grande intensidade pelo polo negativo de circuitos.",
      "É travada por uma simples folha de papel de jornal ou pela camada superficial de queratina das células mortas da epiderme humana na face anterior do punho.",
      "Provoca a quebra mecânica de ossos e cartilagens devido à sua elevada massa corpuscular bariónica durante a realização de exames complementares de diagnóstico."
    ],
    "correctIndex": 0,
    "explanation": "Na experiência clássica do campo magnético/elétrico transversal: as partículas alfa (positivas) desviam-se para o polo negativo; as partículas beta negativas desviam-se acentuadamente para o polo positivo; os raios gama (sendo fotões eletromagnéticos sem qualquer carga elétrica e sem massa de repouso) atravessam o campo elétrico em linha reta perfeita sem qualquer deflexão ou desvio da sua trajetória retilínea, propagando-se rigorosamente à velocidade da luz no vácuo (c).",
    "distractorAnalysis": [
      "Está incorreta: fotões gama não possuem massa nem carga; atenuam-se pela lei exponencial de Beer-Lambert (I = I₀·e^(-µx)), não existindo uma distância finita onde todos parem.",
      "Está incorreta: a partícula alfa é que possui carga +2; a beta menos possui carga -1; os fotões de radiação gama são eletricamente neutros (carga zero).",
      "Está incorreta: a folha de papel barra partículas alfa; fotões gama têm elevado poder de penetração, atravessando dezenas de centímetros de tecido biológico."
    ],
    "nursingApplication": "Por não ter carga elétrica e não ser desviada, a radiação gama não é retida por forças eletrostáticas de superfície. Ao cuidar de doentes em unidades de medicina nuclear, o enfermeiro sabe que a única proteção contra fotões gama é a interposição de blindagens de alta densidade atómica e o recuo físico em distância."
  },
  {
    "id": 7037,
    "topicId": 7,
    "question": "O fenómeno da 'Dose Profunda' e a ausência de um 'Pico de Bragg' na radiação gama e raios X diferenciam-na marcadamente das partículas pesadas como protões e partículas alfa. O que é o 'Pico de Bragg' característico das partículas carregadas pesadas?",
    "options": [
      "A temperatura máxima atingida pelo óleo de refrigeração no ânodo dos tubos de raios X durante procedimentos de tomografia computorizada helicoidal multifatias.",
      "O pico de máxima deposição de dose e densidade de ionização que ocorre no final do trajeto da partícula carregada pesada, antes de parar abruptamente na matéria.",
      "A velocidade de rotação da mesa do doente no interior da câmara quente quando é acionado o comando manual de emergência elétrica pelo enfermeiro de serviço.",
      "A intensidade máxima do sinal de alarme sonoro emitido pelos dosímetros individuais quando a taxa de dose ultrapassa os limites legais de tolerância ocupacional."
    ],
    "correctIndex": 1,
    "explanation": "Descrito por William Henry Bragg em 1904 e formulado na equação de Bethe-Bloch: a taxa de perda de energia de uma partícula carregada pesada (como protões ou iões de carbono na Hadronterapia) é inversamente proporcional ao quadrado da sua velocidade (dE/dx ∝ 1/v²). À medida que a partícula penetra e desacelera no corpo humano, ela deposita pouca energia à entrada; quando atinge uma velocidade muito baixa perto do fim do alcance, a probabilidade de interação dispara, libertando um pico colossal e localizado de ionização (Pico de Bragg) e cessando a radiação imediatamente a seguir com dose zero.",
    "distractorAnalysis": [
      "Está incorreta: à medida que a partícula carregada abranda, a sua secção eficaz de interação coulombiana cresce (1/v² na fórmula de Bethe-Bloch), gerando o Pico de Bragg no final do alcance.",
      "Está incorreta: fotões X e gama depositam dose máxima à superfície ou a pequena profundidade (build-up) e decaem exponencialmente; não exibem pico de Bragg no final.",
      "Está incorreta: o pico de Bragg é um conceito puramente dosimétrico da física das partículas pesadas (protões, iões de carbono, alfas) na matéria, sem relação com rotação de mesas."
    ],
    "nursingApplication": "A terapia com feixes de protões e o estudo do Pico de Bragg revolucionaram o tratamento de tumores pediátricos e tumores cerebrais e oculares próximos do nervo ótico e tronco cerebral: permite ao enfermeiro e equipa de radioterapia administrar doses tumoricidas com preservação absoluta de tecidos neurológicos nobres situados imediatamente atrás do tumor."
  },
  {
    "id": 7038,
    "topicId": 7,
    "question": "Na rotura e contaminação acidental de um tubo ou frasco contendo Césio-137 (¹³⁷Cs, emissor beta e gama de meia-vida física de 30 anos), qual é o fármaco de quelação oral administrado para acelerar a excreção biológica deste radionuclídeo do organismo?",
    "options": [
      "Comprimidos de vitamina C efervescente diluídos em água fria para neutralizar as cargas elétricas positivas dos núcleos atómicos em circulação no plasma venoso.",
      "Óleo de rícino purificado para induzir o vómito gástrico imediato e dissolver os eletrões de alta energia acumulados nas paredes da mucosa do estômago.",
      "Azul da Prússia (hexacianoferrato de potássio e ferro), que atua no lúmen intestinal ligando-se ao Césio por troca iónica e impedindo a sua recirculação entero-hepática.",
      "Antibióticos penicilínicos de terceira geração administrados por via intramuscular profunda nas nádegas para eliminar as bactérias radioativas presentes."
    ],
    "correctIndex": 2,
    "explanation": "O Césio pertence ao Grupo 1 da Tabela Periódica (metal alcalino quimicamente análogo ao potássio), distribuindo-se amplamente por todos os músculos e tecidos moles do corpo humano com elevada recirculação na circulação entero-hepática. O Azul da Prússia (Prussian Blue / Radiogardase) é um quelante inorgânico de troca iónica não-absorvível administrado por via oral: no intestino, liga-se fortemente aos iões Cs⁺ que são secretados com a bílis e sucos digestivos, formando um complexo insolúvel que é excretado nas fezes, reduzindo a meia-vida biológica do césio de cerca de 110 dias para cerca de 30 dias.",
    "distractorAnalysis": [
      "Está incorreta: o Azul da Prússia (Radiogardase) adsorve o Césio-137 e Tálio no trato gastrointestinal, acelerando a excreção fecal e reduzindo a semivida biológica do ¹³⁷Cs de 110 para ~30 dias.",
      "Está incorreta: vitamina C é um antioxidante que não quela o césio; não altera o transporte de iões alcalinos monovalentes (Cs⁺) nas vilosidades intestinais.",
      "Está incorreta: induzir vómitos pode causar aspiração pulmonar e queimaduras; radioisótopos não são bactérias biológicas, sendo ineficaz o uso de penicilinas."
    ],
    "nursingApplication": "Em acidentes de contaminação radiológica de massa (como no célebre acidente com Césio-137 em Goiânia em 1987), o enfermeiro desempenha papel primordial na triagem, administração supervisionada de cápsulas orais de Azul da Prússia e colheita diária e pesagem de amostras de fezes e urina com monitorização contínua dosimétrica da carga corporal."
  },
  {
    "id": 7039,
    "topicId": 7,
    "question": "O Rádon-222 (²²²Rn) é um gás radioativo nobre natural que se infiltra em caves e edifícios a partir do decaimento do Urânio e Rádio presentes nas rochas graníticas do solo. Porque é que o perigo biológico do radão provém predominantemente dos seus 'Filhos de Meia-Vida Curta' e não do próprio gás radão?",
    "options": [
      "O radão não emite qualquer tipo de radiação ionizante no estado livre, tornando-se radioativo apenas quando digerido pelas bactérias anaeróbias presentes no cólon.",
      "Os descendentes do radão aquecem o ar dos pulmões a mais de duzentos graus centígrados, provocando queimaduras térmicas mecânicas e asfixia imediata.",
      "O gás radão liga-se de forma irreversível à queratina do cabelo dos indivíduos, provocando a queda total de pelos corporais em escassos dez segundos de exposição.",
      "O radão é um gás nobre que é inalado e em grande parte exalado, mas os seus descendentes sólidos (²¹⁸Po, ²¹⁴Po) fixam-se no epitélio brônquico emitindo partículas alfa locais."
    ],
    "correctIndex": 3,
    "explanation": "O Rádon-222 é um gás nobre quimicamente inerte: a vasta maioria dos átomos de radão inalados entra nos pulmões e é imediatamente expelida na expiração seguinte sem sofrer desintegração (já que a sua meia-vida é de 3,8 dias). O verdadeiro carrasco biológico são os seus filhos radioativos de vida ultracurta: ²¹⁸Po (T_1/2 = 3 min) e ²¹⁴Po (T_1/2 = 164 μs). Sendo metais sólidos com carga elétrica, fixam-se às partículas de poeira inaladas e aderem ao muco das vias aéreas. Ao decaírem nos brônquios, ejetam partículas alfa de altíssimo LET (6,0 a 7,7 MeV) diretamente contra os núcleos das células basais respiratórias, sendo o principal fator de cancro pulmonar em não-fumadores.",
    "distractorAnalysis": [
      "Está incorreta: os 'filhos do radão' (Polónio-218, Chumbo-214, Bismuto-214, Polónio-214) são partículas sólidas que aderem aos aerossóis inalados, depositando doses alfa densas nos brônquios.",
      "Está incorreta: o ²²²Rn é radioativo (emissor alfa com T1/2 = 3,82 dias), mas por ser gás quimicamente inerte é exalado rapidamente; são os filhos de meia-vida curta que causam cancro pulmonar.",
      "Está incorreta: o dano é radiobiológico (quebras duplas de ADN no epitélio respiratório) e não térmico ou cosmético; o radão é a 2.ª causa de cancro do pulmão no mundo (após o tabagismo)."
    ],
    "nursingApplication": "Em regiões de elevado teor de urânio granítico no solo (como na região Centro e Norte de Portugal e maciço Ibérico), o enfermeiro de Saúde Comunitária desempenha um papel de saúde pública crucial: alertar as populações para a ventilação frequente de caves e pisos térreos de habitações graníticas e promover a cessação tabágica, pois o fumo do tabaco e o radão atuam em sinergismo multiplicativo devastador na indução do cancro pulmonar."
  },
  {
    "id": 7040,
    "topicId": 7,
    "question": "Qual das seguintes grandezas expressa a 'Atividade Radioativa' (A) de uma amostra radioativa e qual é a sua unidade oficial no Sistema Internacional (SI)?",
    "options": [
      "A taxa de decaimentos radioativos por unidade de tempo (A = -dN/dt = λ·N), cuja unidade oficial no Sistema Internacional é o Becquerel (1 Bq = 1 decaimento por segundo).",
      "A quantidade de calor térmico libertada por quilograma de matéria radioativa, expressa em calorias por hora na escala termodinâmica convencional de medição.",
      "O número total de protões e electrões que circulam no interior do cateter de infusão venosa, medido na unidade de Coulomb por segundo nos monitores hospitalares.",
      "A velocidade linear média a que os fotões gama atravessam o ar atmosférico, medida em metros por segundo no interior dos quartos de isolamento terapêutico."
    ],
    "correctIndex": 0,
    "explanation": "A Atividade Radioativa (A) quantifica o ritmo com que os núcleos instáveis da amostra decaem no tempo: A = λ · N, onde λ é a constante de decaimento radioativo (λ = ln(2) / T₁/₂) e N o número de núcleos radioativos presentes. A unidade oficial do SI (homenageando Henri Becquerel, descobridor da radioatividade em 1896) é o Becquerel (Bq), que corresponde rigorosamente a 1 desintegração por segundo (1 Bq = 1 s⁻¹). A unidade histórica anterior era o Curie (Ci), onde 1 Ci = 3,7 × 10¹⁰ Bq = 37 GBq.",
    "distractorAnalysis": [
      "Está incorreta: no SI a atividade mede-se em Becquerel (Bq); a unidade histórica é o Curie (Ci), onde 1 Ci = 3,7 × 10¹⁰ Bq (atividade de 1 grama de Rádio-226 em equilíbrio).",
      "Está incorreta: calor por quilograma mede calorimetria térmica ou entalpia, e não atividade radioativa subatómica.",
      "Está incorreta: Coulomb por segundo define a intensidade de corrente elétrica macroscópica (Ampere) e não a taxa de transformações nucleares de uma fonte radioativa."
    ],
    "nursingApplication": "Em Portugal e na União Europeia, todas as prescrições de radiofármacos administradas por enfermeiros são formuladas em múltiplos de Becquerel (Megabecquerel, MBq, ou Gigabecquerel, GBq): por exemplo, uma cintigrafia óssea com ⁹⁹ᵐTc prescreve habitualmente 740 MBq (740 milhões de desintegrações por segundo), cuja atividade é calibrada pelo enfermeiro no ativímetro antes da administração."
  },
  {
    "id": 7041,
    "topicId": 7,
    "question": "O ativímetro (ou calibrador de doses) utilizado na câmara quente de medicina nuclear para medir com precisão a atividade em MBq de uma seringa antes da sua injeção no doente é constituído por qual transdutor biofísico?",
    "options": [
      "Um termómetro digital de alta precisão que calcula a atividade da seringa através da subida da temperatura provocada pelo atrito dos eletrões no vidro da ampola.",
      "Uma câmara de ionização a gás pressurizado com árgon que recolhe as cargas elétricas geradas pela radiação, produzindo uma corrente picoamétrica proporcional à atividade.",
      "Uma balança hidrostática de precisão micrométrica que afere a atividade medindo a perda de peso atómico contínua experimentada pela solução radiofarmacêutica.",
      "Um fotómetro óptico de lente polarizada que quantifica o brilho da fluorescência visível emitida pela solução aquosa sob a luz natural da janela do laboratório."
    ],
    "correctIndex": 1,
    "explanation": "O calibrador de dose (dose calibrator) de poço é uma câmara de ionização cilíndrica blindada com chumbo contendo gás árgon pressurizado (~12 a 15 atmosferas). O enfermeiro introduz a seringa ou frasco no orifício central ('poço'): os fotões gama emitidos ionizam o gás árgon; o campo elétrico atrai os eletrões gerando uma minúscula corrente de ionização (picoamperes a nanoamperes) que é diretamente proporcional à taxa de emissão de radiação. O equipamento converte a corrente e apresenta a atividade instantânea em MBq ou mCi no visor digital.",
    "distractorAnalysis": [
      "Está incorreta: o ativímetro (calibrador de dose) é uma câmara de ionização tipo poço hermética operando na região de saturação; a corrente picoamétrica é convertida em MBq/GBq.",
      "Está incorreta: doses de atividade médica contêm energias térmicas infinitesimais (sub-microwatt), impossíveis de quantificar por termómetros convencionais.",
      "Está incorreta: a perda de massa em soluções radiofarmacêuticas é impercetível (nanogramas ou picogramas); não se mede atividade por balança hidrostática ou fotometria óptica."
    ],
    "nursingApplication": "A medição e calibração de cada dose individual no ativímetro pelo enfermeiro imediatamente antes de administrar o radiofármaco é uma etapa de segurança mandante e indeclinável: garante que o doente não recebe doses subterapêuticas (que invalidariam o exame) nem sobredoses prejudiciais de radiação."
  },
  {
    "id": 7042,
    "topicId": 7,
    "question": "O Fósforo-32 (³²P, T₁/₂ ≈ 14,3 dias) é um emissor beta puro de alta energia (E_max = 1,71 MeV) utilizado historicamente no tratamento da Policitemia Vera e em sinoviortese radioativa em doentes com artrite inflamatória. Qual é a via primária de eliminação da radioatividade pelo doente?",
    "options": [
      "A via respiratória através da expiração de dióxido de carbono gasoso enriquecido com neutrões livres emitidos pelo sangue circulante nos capilares alveolares pulmonares.",
      "A via cutânea por sudorese profusa nas palmas das mãos e plantas dos pés após imersão dos membros em banhos térmicos de água mineral salgada com bicarbonato.",
      "A via renal através da excreção urinária, requerendo cuidados rigorosos na manipulação de urinas e lavagem frequente da sanita com descarga dupla pelos doentes tratados.",
      "O Fósforo-32 não é excretado do organismo humano, permanecendo ligado permanentemente às cartilagens articulares sem sofrer qualquer tipo de depuração biológica."
    ],
    "correctIndex": 2,
    "explanation": "O fósforo é um macroelemento bioquímico fundamental na estrutura do DNA, RNA, fosfolípidos de membrana e mineral ósseo. Após administração intravenosa de ³²P-ortofosfato, cerca de 20% a 50% é rapidamente excretado pelos rins na urina nas primeiras 24 a 48 horas. A fração remanescente é captada e retida nos tecidos hematopoéticos de alta renovação celular e no esqueleto, onde os eletrões beta de alta energia suprimem a proliferação clonal descontrolada de eritrócitos na medula óssea.",
    "distractorAnalysis": [
      "Está incorreta: o fósforo é excretado predominantemente pelos rins na urina (cerca de 5-10% nas primeiras 24 horas); as urinas do doente são altamente radioativas e exigem precauções.",
      "Está incorreta: o fósforo não volatiliza como gás respiratório alveolar; o ³²P metaboliza-se como fosfato inorgânico e incorpora-se nos ácidos nucleicos e osso.",
      "Está incorreta: a excreção cutânea é negligenciável face à excreção renal; embora parte do fósforo se incorpore no osso, a depuração biológica e o decaimento físico ocorrem continuamente."
    ],
    "nursingApplication": "O enfermeiro orienta o doente tratado com Fósforo-32 sobre os cuidados estritos de higiene sanitária durante a primeira semana pós-tratamento: utilizar a sanita sentado (homens e mulheres) para evitar salpicos, dar descarga duas vezes e lavar cuidadosamente as mãos com sabão abundante após cada micção para prevenir a contaminação da pele."
  },
  {
    "id": 7043,
    "topicId": 7,
    "question": "Em caso de derramamento acidental de um líquido contendo radionuclídeos no chão da sala de preparação da câmara quente, qual é o mnemónico e ordem correta de ações de emergência adotada pela equipa de enfermagem?",
    "options": [
      "Lavar imediatamente a área inundando o chão com mangueiras de alta pressão com água fria em direção aos ralos do esgoto sanitário comum de águas pluviais.",
      "Esfregar o pavimento vigorosamente com vassouras de cerdas duras para acelerar a evaporação dos radionuclídeos no ar ambiente da câmara quente hospitalar.",
      "Cobrir a poça de radioisótopo com pó de talco e autorizar o tráfego pedonal normal de funcionários para distribuir a atividade por todo o piso do hospital.",
      "Conter o líquido com papel absorvente para evitar a dispersão, delimitar a área e afastar pessoas, monitorizar os níveis de radiação e descontaminar da periferia para o centro."
    ],
    "correctIndex": 3,
    "explanation": "O protocolo padrão de contenção de derrames radioativos ('SWIMS' ou protocolo de contenção imediata) determina: 1) Conter o líquido derramado imediatamente cobrindo-o com papel absorvente (lado absorvente para baixo, lado plastificado para cima) para evitar que o líquido se espalhe pelo chão; 2) Alertar a sala para evitar que outros profissionais pisem o local; 3) Sinalizar e evacuar a área imediata; 4) Vestir EPI completo e iniciar a limpeza cuidadosa com pinças dos bordos exteriores em direção ao centro (evitando ampliar a mancha); 5) Recolher todo o material em contentor blindado para resíduos e medir a radiação residual.",
    "distractorAnalysis": [
      "Está incorreta: o protocolo padrão de contenção de derrames dita: cobrir/conter com absorvente, restringir acessos, avisar o RPE, monitorizar e limpar sempre da periferia (menos ativo) para o centro.",
      "Está incorreta: jatos de mangueira espalham a contaminação e contaminam a rede de esgotos geral; vassouras geram aerossóis radioativos perigosos para as vias respiratórias.",
      "Está incorreta: pó de talco e tráfego de pessoas disseminariam a contaminação radioativa por calçado a outras enfermarias e blocos operatórios, um erro de segurança inaceitável."
    ],
    "nursingApplication": "O enfermeiro atua com frieza técnica e rapidez na contenção de pequenos derrames: a aplicação imediata de folhas absorventes e a restrição de trânsito pedonal no piso evitam que um pequeno acidente de bancada se transforme num incidente radiológico de grande escala hospitalar."
  },
  {
    "id": 7044,
    "topicId": 7,
    "question": "Na avaliação da radiotoxicidade de diferentes tipos de radionuclídeos, por que motivo a radiação Alfa recebe um fator de eficácia biológica relativa (RBE) tão superior ao das radiações Beta e Gama?",
    "options": [
      "Pela sua altíssima Transferência Linear de Energia (LET ~100 keV/µm), gerando aglomerados densos de ionizações que causam quebras duplas de ADN irreparáveis nas células.",
      "Pelo facto de a partícula alfa arrefecer os tecidos biológicos até temperaturas próximas de quarenta graus negativos por convecção térmica molecular espontânea.",
      "Porque as partículas alfa atraem os eletrões de condução do corpo humano criando faíscas elétricas de alta intensidade visíveis na ponta dos dedos dos operadores.",
      "Devido à sua capacidade de atravessar paredes de chumbo com cinquenta centímetros de espessura sem sofrer qualquer atenuação por dispersão eletrostática."
    ],
    "correctIndex": 0,
    "explanation": "A Eficácia Biológica Relativa (RBE) reflete a severidade do dano genético para a mesma dose física absorvida em Grays. Radiações de baixo LET (raios X, beta, gama) depositam energia de modo disperso: grande parte das lesões são quebras simples de cadeia que a célula repara perfeitamente. A partícula alfa deposita centenas de keV em escassos nanómetros de trajeto: quando cruza uma fibra de cromatina, causa dezenas de quebras na hélice do DNA e proteínas associadas num único impacto ('lesões agrupadas ou complexas'). As enzimas de reparação celular colapsam perante danos tão concentrados, resultando em morte celular quase inevitável.",
    "distractorAnalysis": [
      "Está incorreta: a Eficácia Biológica Relativa (RBE) e o fator de ponderação da radiação (w_R = 20 para alfa vs w_R = 1 para gama/beta) decorrem do dano denso em aglomerado (clustered damage).",
      "Está incorreta: a radiação alfa não congela tecidos; o dano biológico é puramente quântico e molecular, resultante da ionização direta de átomos no percurso submicroscópico da partícula.",
      "Está incorreta: não produz faíscas elétricas nem atravessa chumbo; o alcance da partícula alfa é microscópico (<0,1 mm em tecido), concentrando toda a sua destruição celular no local."
    ],
    "nursingApplication": "A elevadíssima RBE da radiação alfa fundamenta o entusiasmo clínico da Alfa-Terapia Alvo em oncologia: como não depende da fase do ciclo celular nem do oxigénio tecidual (imune à hipóxia tumoral), uma única partícula alfa que cruze o núcleo de uma célula tumoral é suficiente para esterilizá-la e erradicar o cancro."
  },
  {
    "id": 7045,
    "topicId": 7,
    "question": "Qual das seguintes fontes radioativas utilizadas na medicina hospitalar é um exemplo de fonte radioativa 'Não-Selada'?",
    "options": [
      "Uma semente metálica de Titânio soldada a laser contendo Iodo-125 implantada cirurgicamente no parênquima da próstata para braquiterapia permanente.",
      "Uma solução injetável de Pertecnetato de Tecnécio-99m contida num frasco estéril na radiofarmácia, que pode verter, ser aspirada ou provocar contaminações biológicas e químicas.",
      "Uma agulha selada de Aço Inoxidável contendo fios de Irídio-192 utilizada em braquiterapia ginecológica de alta taxa de dose no bloco operatório.",
      "Uma cápsula blindada hermética de Cobalto-60 selada com soldadura dupla instalada no cabeçote de uma unidade de teleterapia externa de radioterapia."
    ],
    "correctIndex": 1,
    "explanation": "Em radioproteção e legislação médica: 1) Fonte Selada: a matéria radioativa está permanentemente encerrada dentro de uma cápsula sólida estanque (como aço, titânio ou cerâmica soldada) que impede qualquer dispersão ou derrame do material em condições normais de uso (ex: sementes de ¹²⁵I ou fontes de ¹⁹²Ir); 2) Fonte NÃO-SELADA: a substância radioativa encontra-se em estado líquido, gasoso ou em suspensão aberta (como soluções de ¹³¹I, ¹⁸F-FDG ou ⁹⁹ᵐTc injetáveis), havendo risco iminente de derrame físico, dispersão, contaminação ambiental e incorporação biológica interna.",
    "distractorAnalysis": [
      "Está incorreta: fontes não-seladas são formas químicas líquidas, gasosas ou em pó não encapsuladas hermeticamente, apresentando risco simultâneo de irradiação externa e contaminação.",
      "Está incorreta: sementes de I-125, agulhas de Ir-192 e fontes de Co-60 são fontes seladas encapsuladas em metais que retêm o material radioativo, emitindo apenas radiação externa.",
      "Está incorreta: fontes seladas são concebidas para impedir qualquer fuga física ou contaminação em condições normais de manuseamento clínico."
    ],
    "nursingApplication": "O manuseamento de fontes NÃO-SELADAS é o domínio clínico primordial do enfermeiro de medicina nuclear: exige protocolos rigorosos de assepsia, vestuário de proteção contra salpicos e vigilância de aerossóis, já que qualquer contacto acidental com o líquido acarreta risco direto de contaminação e ingestão inadvertida."
  },
  {
    "id": 7046,
    "topicId": 7,
    "question": "Na física médica da imagem molecular PET, qual é a consequência do 'Alcance do Positrão' (positron range) na resolução espacial final das imagens tomográficas?",
    "options": [
      "O alcance do positrão faz com que os fotões de aniquilação se propaguem em ângulos de noventa graus em vez de cento e oitenta graus, duplicando a nitidez de imagem.",
      "O trajeto do positrão impede totalmente a aquisição de imagens tomográficas em doentes que apresentem um índice de massa corporal superior a vinte e cinco quilos por metro quadrado.",
      "O positrão viaja uma fração de milímetro a alguns milímetros no tecido antes de se aniquilar, introduzindo um erro intrínseco fundamental que limita a resolução espacial do scanner.",
      "A distância percorrida pelo positrão aumenta a sensibilidade dos cristais cintiladores de silicato de lutécio através da magnetização temporária dos elétrodos de leitura."
    ],
    "correctIndex": 2,
    "explanation": "Na tomografia PET, os detectores captam os dois fotões de 511 keV no local exato onde ocorreu a ANIQUILAÇÃO. Contudo, o que se pretende mapear clinicamente é a posição do radioisótopo emissor. Entre a ejeção do positrão e a sua aniquilação final, ele percorre um trajeto tortuoso de frenagem: para o Flúor-18 (E_max = 635 keV), o alcance médio é muito pequeno (~0,6 mm, excelente resolução); para o Rubídio-82 (E_max = 3,35 MeV), o alcance atinge até 5 a 6 mm, gerando uma indefinição posicional física que limita a nitidez da imagem independentemente da resolução dos detetores.",
    "distractorAnalysis": [
      "Está incorreta: a aniquilação ocorre onde o positrão para e não onde o radioisótopo decaiu; este alcance residual (positron range, ~0,6 mm no ¹⁸F, ~3-4 mm no ⁶⁸Ga e ⁸²Rb) degrada a resolução do PET.",
      "Está incorreta: os fotões de aniquilação são colineares (~180° ± 0,25° devido ao momento residual); o alcance do positrão deteriora a resolução e não melhora a nitidez.",
      "Está incorreta: o fenómeno afeta a resolução em todos os doentes de forma independente do IMC; não impede o exame nem magnetiza detetores de cintilação (LSO/LYSO)."
    ],
    "nursingApplication": "O excelente alcance reduzido do Flúor-18 (~0,6 mm) é um dos principais motivos da sua hegemonia mundial na oncologia: permite aos enfermeiros e médicos identificar lesões tumorais e gânglios metastáticos minúsculos de apenas 3 a 4 milímetros de diâmetro na imagem PET-CT combinada."
  },
  {
    "id": 7047,
    "topicId": 7,
    "question": "A 'Equação Fundamental do Decaimento Radioativo' de Rutherford e Soddy rege a diminuição do número de núcleos radioativos ao longo do tempo: N(t) = N₀ · e^(-λ·t). Como se relaciona a Constante de Decaimento (λ) com o Tempo de Meia-Vida física (T₁/₂)?",
    "options": [
      "A semivida física é calculada multiplicando a constante de decaimento pela velocidade da luz no vácuo e dividindo pelo peso molecular do elemento radioativo em gramas.",
      "A relação entre ambas é dada por T₁/₂ = λ² · π, demonstrando que a semivida aumenta com o quadrado da probabilidade de decaimento por unidade de tempo.",
      "A constante λ é rigorosamente igual ao dobro da semivida física para todos os radiofármacos que contenham átomos de carbono na sua estrutura química orgânica.",
      "A constante de decaimento λ e a semivida física relacionam-se de forma inversamente proporcional segundo a equação exata T₁/₂ = ln(2) / λ ≈ 0,693 / λ."
    ],
    "correctIndex": 3,
    "explanation": "Por definição de meia-vida (T₁/₂): é o intervalo de tempo após o qual metade dos núcleos radioativos iniciais se desintegrou, ou seja, N(T₁/₂) = N₀ / 2. Substituindo na equação de decaimento exponencial: N₀ / 2 = N₀ · e^(-λ · T₁/₂) => 1/2 = e^(-λ · T₁/₂) => ln(1/2) = -λ · T₁/₂ => -ln(2) = -λ · T₁/₂ => λ = ln(2) / T₁/₂ ≈ 0,693 / T₁/₂. A constante λ (unidade: s⁻¹ ou h⁻¹) expressa a probabilidade quântica de desintegração de cada núcleo por unidade de tempo.",
    "distractorAnalysis": [
      "Está incorreta: quando t = T1/2, N(t) = N₀/2; substituindo na lei exponencial: 1/2 = e^(-λ·T1/2) <=> ln(1/2) = -λ·T1/2 <=> T1/2 = ln(2)/λ ≈ 0,69315/λ.",
      "Está incorreta: a relação independe da velocidade da luz, da massa molecular ou de pi; reflete puramente a cinética de decaimento de primeira ordem da mecânica quântica.",
      "Está incorreta: como T1/2 = ln(2)/λ, quanto maior for λ (maior probabilidade de decaimento por segundo), mais curta é a semivida física do radioisótopo."
    ],
    "nursingApplication": "Esta fórmula permite ao enfermeiro calcular facilmente a perda de atividade no tempo: sabendo que o Tecnécio-99m tem T₁/₂ = 6 horas (λ ≈ 0,115 h⁻¹), ao fim de 6 horas resta 50% da dose inicial, ao fim de 12 horas resta 25%, e ao fim de 24 horas (4 meias-vidas) resta apenas 6,25% da atividade original."
  },
  {
    "id": 7048,
    "topicId": 7,
    "question": "Na gestão de doentes tratados com Radioiodoterapia que apresentam incontinência urinária grave no quarto de isolamento, qual é o dispositivo de contenção de enfermagem de eleição prioritária?",
    "options": [
      "Algaliação com sonda vesical de Foley acoplada a sistema de drenagem fechado e saco coletor blindado de chumbo com esvaziamento asséptico regular pela equipa.",
      "Utilização de fraldas descartáveis de algodão comum que devem ser acumuladas no balde de lixo aberto do quarto durante os dez dias de internamento.",
      "Permitir que a urina radioativa escorra livremente para as toalhas de banho do quarto hospitalar para posterior lavagem manual no lavatório de serviço.",
      "Suspensão de qualquer administração de líquidos orais ou endovenosos durante uma semana para anular a produção fisiológica de urina nos rins do doente."
    ],
    "correctIndex": 0,
    "explanation": "A urina nas primeiras 24 a 48 horas após a toma de Iodo-131 em dose terapêutica concentra a maior taxa de atividade radioativa não-fixada (vários Gigabecquerels). Se um doente com incontinência urinária utilizar apenas fraldas comuns, a saturação rápida da fralda verte urina radioativa para o leito, molhando a pele (causando radiodermite química e contaminação externa severa por contacto íntimo) e contaminando colchões e o chão da enfermaria. A algaliação profilática em circuito fechado assegura a contenção física estanque dos fluidos corporais.",
    "distractorAnalysis": [
      "Está incorreta: o sistema fechado e saco blindado previne contaminações ambientais e cutâneas graves; nos homens sem retenção pode usar-se uripen/condom catheter acoplado a saco blindado.",
      "Está incorreta: fraldas saturadas em urina com I-131 expõem a pele do doente a doses elevadas de beta/gama e aumentam o risco de contaminação externa; nunca acumular em baldes abertos.",
      "Está incorreta: toalhas ensopadas em urina radioativa causariam contaminação extrema e inalação de vapores de iodo; o jejum hídrico é proibido (exige-se hidratação forçada para depuração renal)."
    ],
    "nursingApplication": "A inserção da sonda vesical em circuito fechado deve ser planeada e realizada pelo enfermeiro ANTES da administração da cápsula de Iodo-131. O saco coletor é colocado dentro de um balde de chumbo ao nível do solo junto à cama, e a sua manipulação faz-se sempre com luvas duplas e óculos de proteção."
  },
  {
    "id": 7049,
    "topicId": 7,
    "question": "O conceito de 'Conversão de Neutrão em Protão' com emissão de um eletrão e um antineutrino no decaimento beta negativo (n -> p + e⁻ + ν̄_e) é mediado por qual partícula intermediária da força nuclear fraca no Modelo Padrão?",
    "options": [
      "O fotão gama de alta frequência, que atua como mediador eletromagnético atraindo as partículas de carga oposta em direção à periferia do átomo em repouso.",
      "O Bosão W menos (W⁻), uma partícula vetorial pesada mediadora da força nuclear fraca que decai num eletrão e num antineutrino do eletrão em frações de segundo.",
      "O gravitão hipotético, que atrai mecanicamente o neutrão em direção ao centro de massa da Terra com uma intensidade proporcional ao quadrado da altitude.",
      "O glúon colorido, que se liberta do núcleo atómico e circula livremente no ar condicionado da enfermaria médica sob a forma de uma onda acústica contínua."
    ],
    "correctIndex": 1,
    "explanation": "Na teoria eletrofraca moderna (Glashow, Salam e Weinberg): a desintegração beta não ocorre por contacto pontual direto instantâneo de 4 partículas (teoria de Fermi). Um quark down (carga -1/3) do neutrão transforma-se num quark up (carga +2/3) emitindo um bosão vetorial pesado W⁻ (massa colossal de ~80,4 GeV/c²). Em escassos 10⁻²⁵ segundos, o bosão W⁻ decai num par leptão-antileptão: um eletrão (partícula beta, e⁻) e um antineutrino do elétrão (ν̄_e), conservando rigorosamente a carga elétrica e o número leptónico.",
    "distractorAnalysis": [
      "Está incorreta: no Modelo Padrão, a interação fraca converte um quark d (-1/3) num quark u (+2/3) com emissão de um bosão intermediário W⁻ (massa ~80,4 GeV/c²), que decai em e⁻ + ν̄_e.",
      "Está incorreta: o fotão medeia a força eletromagnética e não a interação fraca responsável pela transmutação de sabor de quarks no decaimento beta.",
      "Está incorreta: gravitões são mediadores teóricos da gravidade e glúons medeiam a força forte entre quarks (confinados nos hadrões); o decaimento beta é governado pelo bosão W⁻."
    ],
    "nursingApplication": "A descoberta do bosão W e da unificação eletrofraca (Prémio Nobel de 1979 e 1984 no CERN) é o ápice da física que sustenta as terapias radioisotópicas que os enfermeiros ministram: comprova que as leis fundamentais que regem o universo subatómico são as mesmas que permitem curar o cancro através da radioterapia dirigida."
  },
  {
    "id": 7050,
    "topicId": 7,
    "question": "Na avaliação comparativa global dos três tipos fundamentais de radiação nuclear para a segurança hospitalar de enfermeiros, qual é o resumo biofísico de radioproteção CORRETO?",
    "options": [
      "Alfa: altamente penetrante no chumbo; Beta: invisível aos detetores; Gama: travada integralmente por uma simples folha de papel fino de jornal na bancada.",
      "Alfa: não ioniza a matéria; Beta: transmite radioatividade a objetos metálicos; Gama: transforma a água corporal em gelo medicinal instantâneo no leito.",
      "Alfa: travada por papel/pele, perigo interno extremo; Beta: travada por plástico/acrílico, perigo cutâneo e interno; Gama: muito penetrante, travada por chumbo/betão, perigo externo e interno.",
      "Todas as três radiações têm exatamente a mesma massa, o mesmo poder de penetração e exigem rigorosamente a mesma blindagem de papelão em contexto hospitalar."
    ],
    "correctIndex": 2,
    "explanation": "Este é o axioma mestre da radioproteção em enfermagem: 1) ALFA: altíssimo LET e ionização destrutiva, penetração microscópica (<80 μm), travada por papel ou luvas, risco quase exclusivamente interno (inalação/ingestão); 2) BETA: penetração moderada (milímetros a centímetros), travada por acrílico/plástico (evitando chumbo para não gerar Bremsstrahlung), risco de queimadura na pele/olhos e interno; 3) GAMA: altíssima penetração em todo o organismo, baixo LET, exige a tríade de ouro Tempo-Distância-Blindagem de chumbo para proteção contra irradiação externa.",
    "distractorAnalysis": [
      "Está incorreta: este é o resumo angular da proteção radiológica: o conhecimento das massas, cargas e mecanismos de atenuação orienta a escolha de blindagens e protocolos de enfermagem.",
      "Está incorreta: inverte radicalmente os poderes de penetração de alfa e gama; a radiação gama penetra tecidos e chumbo, enquanto a partícula alfa é barrada pela epiderme córnea.",
      "Está incorreta: a alfa é a mais densamente ionizante de todas; a radiação não transmite radioatividade a metais (ativação exige neutrões) nem congela água corporal."
    ],
    "nursingApplication": "Dominar este resumo comparativo capacita o enfermeiro a selecionar instantaneamente o Equipamento de Proteção Individual adequado, a barreira física correta e as regras de segurança postural perante qualquer tipo de radiofármaco ou doente submetido a técnicas de radiologia e medicina nuclear."
  },
  {
    "id": 7051,
    "topicId": 7,
    "question": "Na física das radiações nucleares (partículas alfa, beta e fotões gama) aplicada à prática clínica, em relação a 'constituição física e carga da partícula alfa', qual é a fundamentação científica correta?",
    "options": [
      "A partícula alfa é um feixe de fotões de alta energia sem carga ou massa que se propaga em linha reta à velocidade da luz no vácuo intersticial dos tecidos biológicos.",
      "Trata-se de um eletrão relativista de carga negativa ejetado da nuvem eletrónica extranuclear após a colisão inelástica de um feixe de raios X de diagnóstico.",
      "É uma molécula de água evaporada ionizada com carga unitária negativa que se condensa nos alvéolos pulmonares durante a respiração espontânea na enfermaria.",
      "A partícula alfa é um núcleo de Hélio-4 (⁴₂He²⁺) constituído por dois protões e dois neutrões coligados pela força nuclear forte, com carga líquida positiva de +2e e massa de ~4 u."
    ],
    "correctIndex": 3,
    "explanation": "Em física nuclear e radioproteção clínica, constituição física e carga da partícula alfa explica-se pelo facto de que a partícula alfa é um núcleo de Hélio-4 (⁴He²⁺) ejetado em alta velocidade, formado por exatamente 2 protões e 2 neutrões firmemente ligados, com massa de 4 u.m.a. e carga elétrica líquida de +2e (+3,2 · 10⁻¹⁹ C). Sendo uma partícula pesada e duplamente ionizada, a sua massa é cerca de 7300 vezes superior à de um eletrão ou partícula beta.",
    "distractorAnalysis": [
      "Está incorreta: a partícula alfa é corpuscular pesada (dois protões e dois neutrões com carga +2 e massa ~6,64 × 10⁻²⁷ kg), e não radiação eletromagnética sem massa.",
      "Está incorreta: confunde a partícula alfa com eletrões (partículas beta ou fotoeletrões) que possuem carga negativa e massa cerca de 7300 vezes menor.",
      "Está incorreta: a alfa é uma entidade nuclear elementar nua (núcleo de hélio) e não gotículas de água ou molécula química ionizada."
    ],
    "nursingApplication": "O enfermeiro identifica que esta grande massa e carga condicionam interações de choque direto coulombiano muito frequentes ao atravessar a matéria biológica."
  },
  {
    "id": 7052,
    "topicId": 7,
    "question": "Na prestação de cuidados de enfermagem e proteção radiológica em serviços com doentes radioativos, como se aplica na prática o conceito de 'constituição física e carga da partícula alfa'?",
    "options": [
      "A carga dupla (+2) e grande massa conferem uma altíssima secção eficaz de interação coulombiana com os eletrões do meio, resultando em retenção total pela epiderme desvitalizada.",
      "A partícula alfa atravessa o corpo do doente e atinge o enfermeiro com velocidade inalterada, exigindo aventais de chumbo de três centímetros de espessura na cabeceira.",
      "A carga da partícula alfa anula os sinais do eletrocardiograma se o doente segurar um copo de água mineral radioativa com a mão esquerda durante o internamento.",
      "O núcleo de hélio emitido funde-se instantaneamente com o ferro da hemoglobina, transformando o sangue venoso numa massa gelatinosa insolúvel em escassos segundos."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para constituição física e carga da partícula alfa baseia-se no princípio: O enfermeiro identifica que esta grande massa e carga condicionam interações de choque direto coulombiano muito frequentes ao atravessar a matéria biológica. Esta atuação rigorosa garante a segurança do profissional, do utente e da comunidade.",
    "distractorAnalysis": [
      "Está incorreta: a forte atração coulombiana desacelera a alfa em poucas dezenas de micrómetros; a camada córnea da pele (0,05 mm) bloqueia a radiação externa por completo.",
      "Está incorreta: alfas têm penetração externa praticamente nula, sendo desnecessários aventais de chumbo pesados; o risco crítico é exclusivamente a contaminação interna.",
      "Está incorreta: não interfere com o traçado eletrocardiográfico nem gelatiniza a hemoglobina; atua por ionização atómica submicroscópica no percurso tecidual."
    ],
    "nursingApplication": "O enfermeiro identifica que esta grande massa e carga condicionam interações de choque direto coulombiano muito frequentes ao atravessar a matéria biológica."
  },
  {
    "id": 7053,
    "topicId": 7,
    "question": "Um enfermeiro analisa o poder de penetração, mecanismos de atenuação e riscos biológicos em 'constituição física e carga da partícula alfa'. Qual das seguintes afirmações expressa a correlação biofísica correta?",
    "options": [
      "A partícula alfa ziguezagueia aleatoriamente como um eletrão rápido, sendo refletida pela superfície da pele e dispersando-se por toda a sala sob a forma de luz verde.",
      "Devido à sua elevada massa e carga elétrica (+2e), a partícula alfa ioniza densamente a matéria ao longo de uma trajetória quase retilínea, perdendo energia com rapidez extrema.",
      "A atenuação da radiação alfa obedece à lei exponencial de Beer-Lambert com comprimento de atenuação de vários metros de chumbo estrutural hospitalar.",
      "A força de repulsão gravitacional exercida pelo corpo do doente empurra as partículas alfa para fora do quarto através dos canais de ar condicionado central."
    ],
    "correctIndex": 1,
    "explanation": "A análise biofísica exata demonstra que Sendo uma partícula pesada e duplamente ionizada, a sua massa é cerca de 7300 vezes superior à de um eletrão ou partícula beta. O domínio destes conhecimentos permite ao enfermeiro fundamentar a escolha de blindagens e protocolos de segurança.",
    "distractorAnalysis": [
      "Está incorreta: por ser muito mais pesada que os eletrões orbitais com os quais colide (~7300 vezes mais pesada), a partícula alfa praticamente não se desvia, mantendo trajetória retilínea.",
      "Está incorreta: dispersão ziguezagueante e reflexão são características de partículas beta leves; a partícula alfa é travada em linha reta e não emite luz verde dispersa.",
      "Está incorreta: a lei exponencial de Beer-Lambert aplica-se a fotões sem carga (raios X e gama); partículas carregadas pesadas possuem alcance máximo finito bem definido."
    ],
    "nursingApplication": "O enfermeiro identifica que esta grande massa e carga condicionam interações de choque direto coulombiano muito frequentes ao atravessar a matéria biológica."
  },
  {
    "id": 7054,
    "topicId": 7,
    "question": "Na física das radiações nucleares (partículas alfa, beta e fotões gama) aplicada à prática clínica, em relação a 'energia cinética típica de emissão alfa (4 a 8 MeV)', qual é a fundamentação científica correta?",
    "options": [
      "As partículas alfa são emitidas com energias térmicas da ordem de poucos microeletrão-volts, idênticas à energia cinética das moléculas de oxigénio à temperatura ambiente.",
      "A energia alfa varia entre cem e duzentos gigaelectrão-volts, gerando feixes de antimatéria que perfuram o pavimento da câmara quente em direção ao subsolo.",
      "A energia típica das partículas alfa situa-se entre 4 e 8 MeV, uma magnitude colossal em escala molecular capaz de arrancar dezenas de milhares de eletrões ao longo do trajeto.",
      "A energia de emissão alfa é estritamente independente do núcleo pai, sendo rigorosamente igual a dezasseis joules em qualquer elemento radioativo conhecido."
    ],
    "correctIndex": 2,
    "explanation": "Em física nuclear e radioproteção clínica, energia cinética típica de emissão alfa (4 a 8 MeV) explica-se pelo facto de que as partículas alfa são ejetadas do núcleo atómico instável com energias cinéticas discretas e monocromáticas características, variando tipicamente entre 4 e 8 Megaeletrão-Volts (MeV). Viajam a velocidades de cerca de 15.000 a 20.000 km/s (cerca de 5 a 7% da velocidade da luz), desacelerando bruscamente em distâncias microscópicas.",
    "distractorAnalysis": [
      "Está incorreta: a janela energética das alfas naturais e médicas situa-se tipicamente entre 4 e 8,5 MeV (ex: ²²³Ra com ~5,8 MeV, ²¹²Po com 8,78 MeV), ionizando densamente o meio.",
      "Está incorreta: microeletrão-volts ou térmicas (0,025 eV) caracterizam neutrões lentos ou agitação molecular; 1 MeV equivale a um milhão de eletrão-volts de energia ionizante.",
      "Está incorreta: gigaelectrão-volts (GeV) ocorrem em raios cósmicos ou grandes aceleradores de partículas de alta energia; não se formam feixes de antimatéria que perfurem o solo."
    ],
    "nursingApplication": "O enfermeiro sabe que radiofármacos emissores alfa como o Rádio-223 (²²³Ra) depositam toda esta imensa energia em volumes microscópicos correspondentes a poucas células."
  },
  {
    "id": 7055,
    "topicId": 7,
    "question": "Na prestação de cuidados de enfermagem e proteção radiológica em serviços com doentes radioativos, como se aplica na prática o conceito de 'energia cinética típica de emissão alfa (4 a 8 MeV)'?",
    "options": [
      "A elevada energia cinética exige que o enfermeiro utilize calçado com solas de chumbo de dez quilos para neutralizar a atração eletrostática do chão da enfermaria.",
      "Essa energia é utilizada para aquecer a água do banho dos doentes oncológicos com vista a relaxar a musculatura paravertebral antes da realização de cintigrafias.",
      "A energia das alfas faz com que as ampolas de vidro explodam com estrondo audível sempre que são retiradas da embalagem térmica de transporte internacional.",
      "Na alfa-imunoterapia dirigida (TAT), a concentração de 5 a 8 MeV num percurso inferior a 0,1 mm permite que uma ou duas partículas alfa que atravessem o núcleo celular induzam morte celular."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para energia cinética típica de emissão alfa (4 a 8 MeV) baseia-se no princípio: O enfermeiro sabe que radiofármacos emissores alfa como o Rádio-223 (²²³Ra) depositam toda esta imensa energia em volumes microscópicos correspondentes a poucas células. Esta atuação rigorosa garante a segurança do profissional, do utente e da comunidade.",
    "distractorAnalysis": [
      "Está incorreta: a enorme densidade de energia local (5-8 MeV em poucas células) causa roturas irreparáveis na dupla hélice de ADN, conferindo alta citotoxicidade a tumores radio-resistentes.",
      "Está incorreta: solas de chumbo não têm qualquer função dosimétrica para alfas; o chumbo visa fotões e neutrões; a alfa não cria atração eletrostática macroscópica com o chão.",
      "Está incorreta: a energia radioativa é libertada a nível microscópico atómico sem aquecer águas macroscópicas nem provocar explosões sonoras em ampolas estéreis."
    ],
    "nursingApplication": "O enfermeiro sabe que radiofármacos emissores alfa como o Rádio-223 (²²³Ra) depositam toda esta imensa energia em volumes microscópicos correspondentes a poucas células."
  },
  {
    "id": 7056,
    "topicId": 7,
    "question": "Um enfermeiro analisa o poder de penetração, mecanismos de atenuação e riscos biológicos em 'energia cinética típica de emissão alfa (4 a 8 MeV)'. Qual das seguintes afirmações expressa a correlação biofísica correta?",
    "options": [
      "Como a energia média para criar um par de iões em tecido biológico é de cerca de 34 eV, uma única partícula alfa de 5 MeV gera mais de 140 000 ionizações no seu percurso tecidual.",
      "Uma partícula alfa de 5 MeV dissipa a totalidade da sua energia criando apenas dois pares de iões no citoplasma celular antes de parar completamente em repouso.",
      "A energia da partícula alfa é totalmente convertida em ondas acústicas de ultrassons que estimulam a proliferação mitótica das células tumorais circundantes.",
      "A quantidade de ionizações geradas pela alfa é inversamente proporcional à sua energia cinética inicial, sendo nula para partículas com energia superior a 4 MeV."
    ],
    "correctIndex": 0,
    "explanation": "A análise biofísica exata demonstra que Viajam a velocidades de cerca de 15.000 a 20.000 km/s (cerca de 5 a 7% da velocidade da luz), desacelerando bruscamente em distâncias microscópicas. O domínio destes conhecimentos permite ao enfermeiro fundamentar a escolha de blindagens e protocolos de segurança.",
    "distractorAnalysis": [
      "Está incorreta: N_pares = E / W_ionização = (5 × 10⁶ eV) / (34 eV/par) ≈ 147 000 pares de iões ao longo de apenas ~40 µm, gerando danos moleculares irreparáveis em aglomerado.",
      "Está incorreta: a alfa gera centenas de milhares de ionizações densamente agrupadas (alto LET) e não apenas dois pares de iões.",
      "Está incorreta: a ionização cresce com a energia total depositada; a radiação ionizante danifica o ADN e não estimula a proliferação neoplásica por ondas acústicas."
    ],
    "nursingApplication": "O enfermeiro sabe que radiofármacos emissores alfa como o Rádio-223 (²²³Ra) depositam toda esta imensa energia em volumes microscópicos correspondentes a poucas células."
  },
  {
    "id": 7057,
    "topicId": 7,
    "question": "Na física das radiações nucleares (partículas alfa, beta e fotões gama) aplicada à prática clínica, em relação a 'Lei de Soddy-Fajans no decaimento alfa', qual é a fundamentação científica correta?",
    "options": [
      "A lei dita que a emissão alfa duplica o número de protões do núcleo atómico e reduz os neutrões a zero por evaporação espontânea da matéria condensada.",
      "A Lei de Soddy-Fajans estabelece que a emissão de uma partícula alfa (⁴₂He) reduz o número de massa em quatro (A -> A - 4) e o número atómico em dois (Z -> Z - 2).",
      "Segundo Soddy-Fajans, o núcleo resultante de um decaimento alfa mantém rigorosamente o mesmo elemento químico na tabela periódica com propriedades idênticas.",
      "A regra de Soddy-Fajans aplica-se exclusivamente a eletrões emitidos a partir de resistências elétricas aquecidas no vácuo de ampolas de raios X de teleterapia."
    ],
    "correctIndex": 1,
    "explanation": "Em física nuclear e radioproteção clínica, Lei de Soddy-Fajans no decaimento alfa explica-se pelo facto de que a emissão de uma partícula alfa ($^A_Z\\text{X} \\rightarrow ^{A-4}_{Z-2}\\text{Y} + ^4_2\\alpha$) reduz o número de massa (A) em 4 unidades e o número atómico (Z) em 2 unidades. O átomo transmuta-se num elemento químico situado duas casas à esquerda na tabela periódica (por exemplo, Urânio-238 com Z = 92 decai para Tório-234 com Z = 90).",
    "distractorAnalysis": [
      "Está incorreta: como ⁴₂He tem 2 protões e 2 neutrões, a conservação universal da carga e de nucleões exige: ᴬ_Z X -> ᴬ⁻⁴_(Z-2) Y + ⁴₂He; o elemento recua 2 posições na tabela periódica.",
      "Está incorreta: a matéria nuclear conserva-se; os neutrões não evaporam e o número de protões diminui em 2 (e não duplica).",
      "Está incorreta: como Z diminui em duas unidades, o elemento filho é quimicamente diferente do elemento pai (ex: ²²⁶₈₈Ra decai para o gás nobre ²²²₈₆Rn)."
    ],
    "nursingApplication": "O enfermeiro aplica a conservação de carga e de número de nucleões para compreender as cadeias de decaimento natural presentes no meio ambiente hospitalar."
  },
  {
    "id": 7058,
    "topicId": 7,
    "question": "Na prestação de cuidados de enfermagem e proteção radiológica em serviços com doentes radioativos, como se aplica na prática o conceito de 'Lei de Soddy-Fajans no decaimento alfa'?",
    "options": [
      "A lei de Soddy-Fajans obriga o enfermeiro a administrar o dobro da dosagem de analgésicos sempre que o número atómico do radiofármaco diminui em duas casas.",
      "Essa lei física permite dispensar o isolamento radiológico dos doentes porque a redução de Z em duas unidades torna o núcleo filho completamente não-radioativo.",
      "A alteração do número atómico Z altera as propriedades químicas e a farmacocinética in vivo do elemento filho, influenciando a sua biodistribuição e excreção pelo organismo.",
      "A aplicação da lei na enfermagem consiste em esterilizar as compressas cirúrgicas mergulhando-as em soluções aquosas de sais de rádio a oitenta graus centígrados."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para Lei de Soddy-Fajans no decaimento alfa baseia-se no princípio: O enfermeiro aplica a conservação de carga e de número de nucleões para compreender as cadeias de decaimento natural presentes no meio ambiente hospitalar. Esta atuação rigorosa garante a segurança do profissional, do utente e da comunidade.",
    "distractorAnalysis": [
      "Está incorreta: por exemplo, o Rádio-223 (alcalino-terroso análogo ao cálcio) decai para o Radão-219 (gás nobre volátil); a transmutação química altera o comportamento biológico in vivo.",
      "Está incorreta: dosagens farmacológicas dependem de prescrições clínicas baseadas em dor e fisiologia, não em alterações teóricas de Z na tabela periódica.",
      "Está incorreta: o núcleo filho de decaimentos alfa é frequentemente também radioativo (fazendo parte de cadeias de decaimento sequenciais, como na série do actínio ou rádio)."
    ],
    "nursingApplication": "O enfermeiro aplica a conservação de carga e de número de nucleões para compreender as cadeias de decaimento natural presentes no meio ambiente hospitalar."
  },
  {
    "id": 7059,
    "topicId": 7,
    "question": "Um enfermeiro analisa o poder de penetração, mecanismos de atenuação e riscos biológicos em 'Lei de Soddy-Fajans no decaimento alfa'. Qual das seguintes afirmações expressa a correlação biofísica correta?",
    "options": [
      "No decaimento do Rádio-226 por alfa, o elemento filho é o Urânio-235 em virtude da absorção de neutrões cósmicos a partir da radiação de fundo ambiental hospitalar.",
      "A conservação do número de massa falha no decaimento alfa porque cerca de vinte por cento da massa dos nucleões é convertida em ondas térmicas de infravermelhos.",
      "A lei de Soddy-Fajans prevê que a partícula alfa emitida se transforme num eletrão estável logo que abandona o volume nuclear do átomo de rádio em repouso.",
      "No decaimento alfa do Rádio-226 (²²⁶₈₈Ra), o produto é o gás Radão-222 (²²²₈₆Rn), confirmando a perda de quatro nucleões na massa e dois protões na carga nuclear (A-4, Z-2)."
    ],
    "correctIndex": 3,
    "explanation": "A análise biofísica exata demonstra que O átomo transmuta-se num elemento químico situado duas casas à esquerda na tabela periódica (por exemplo, Urânio-238 com Z = 92 decai para Tório-234 com Z = 90). O domínio destes conhecimentos permite ao enfermeiro fundamentar a escolha de blindagens e protocolos de segurança.",
    "distractorAnalysis": [
      "Está incorreta: ²²⁶₈₈Ra -> ²²²₈₆Rn + ⁴₂He; conservam-se nucleões (226 = 222 + 4) e carga elétrica (+88 = +86 + 2); o radão é um gás que pode migrar para a atmosfera.",
      "Está incorreta: o decaimento espontâneo reduz a massa (A -> A-4); não é possível formar urânio (Z=92) a partir de rádio (Z=88) em decaimento alfa.",
      "Está incorreta: o número bariónico total conserva-se estritamente; a partícula alfa é um núcleo de hélio e nunca se transforma num eletrão."
    ],
    "nursingApplication": "O enfermeiro aplica a conservação de carga e de número de nucleões para compreender as cadeias de decaimento natural presentes no meio ambiente hospitalar."
  },
  {
    "id": 7060,
    "topicId": 7,
    "question": "Na física das radiações nucleares (partículas alfa, beta e fotões gama) aplicada à prática clínica, em relação a 'espetro de energia em linhas discretas da partícula alfa', qual é a fundamentação científica correta?",
    "options": [
      "As partículas alfa são monoenergéticas (apresentam espetro de riscas discretas e bem definidas), porque o decaimento alfa é um processo de dois corpos (núcleo filho e alfa).",
      "O espetro alfa é contínuo com todas as energias possíveis de zero até ao infinito, porque a energia se divide com um neutrino de massa variável emitido na reação.",
      "As energias das partículas alfa variam de forma aleatória em função do ruído acústico gerado pelos passos dos profissionais de saúde no corredor da enfermaria.",
      "O espetro alfa é indistinguível do espetro contínuo de radiação de travamento gerado em ampolas radiológicas convencionais de diagnóstico por raios X."
    ],
    "correctIndex": 0,
    "explanation": "Em física nuclear e radioproteção clínica, espetro de energia em linhas discretas da partícula alfa explica-se pelo facto de que ao contrário do decaimento beta (que é contínuo), todas as partículas alfa emitidas na mesma transição nuclear possuem exatamente a mesma energia cinética pré-determinada. Isto permite identificar com precisão o radioisótopo contaminante através de espetrometria alfa de alta resolução.",
    "distractorAnalysis": [
      "Está incorreta: no decaimento de 2 corpos (pai -> filho + alfa), a conservação de energia e momento fixa unicamente a energia cinética: E_α = Q · M_filho / (M_filho + M_α).",
      "Está incorreta: no decaimento alfa não há emissão de neutrino (o neutrino é exclusivo de processos fracos beta); por isso o espetro alfa não é contínuo mas sim monoenergético.",
      "Está incorreta: o espetro alfa exibe riscas discretas estreitas características de cada radionuclídeo, permitindo identificação isotópica precisa por espectrometria alfa."
    ],
    "nursingApplication": "O enfermeiro reconhece que a deteção de emissores alfa em amostras ambientais ou biológicas requer detetores de barreira de silício dedicados."
  },
  {
    "id": 7061,
    "topicId": 7,
    "question": "Na prestação de cuidados de enfermagem e proteção radiológica em serviços com doentes radioativos, como se aplica na prática o conceito de 'espetro de energia em linhas discretas da partícula alfa'?",
    "options": [
      "O espetro discreto indica que o enfermeiro deve administrar as injeções em múltiplos impulsos mecânicos discretos para coincidir com as riscas de energia do feixe.",
      "A natureza monoenergética das alfas permite identificar radionuclídeos contaminantes com precisão absoluta através de espectrometria alfa em amostras biológicas e urina.",
      "A monoenergeticidade da radiação alfa faz com que o sangue do doente adquira uma tonalidade verde fluorescente que brilha no escuro durante a noite.",
      "Essa característica física torna os emissores alfa completamente indetetáveis por qualquer tipo de equipamento radiométrico laboratorial moderno."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para espetro de energia em linhas discretas da partícula alfa baseia-se no princípio: O enfermeiro reconhece que a deteção de emissores alfa em amostras ambientais ou biológicas requer detetores de barreira de silício dedicados. Esta atuação rigorosa garante a segurança do profissional, do utente e da comunidade.",
    "distractorAnalysis": [
      "Está incorreta: detetores de semicondutor de barreira de superfície medem as riscas de energia com alta resolução, permitindo quantificar contaminações com emissores alfa em ensaios biológicos.",
      "Está incorreta: administrações parenterais de radiofármacos (como Xofigo / ²²³RaCl₂) seguem injeção venosa lenta contínua padrão sem impulsos mecânicos sincronizados.",
      "Está incorreta: emissores alfa não colorem o sangue nem brilham no escuro; são perfeitamente mensuráveis por técnicas laboratoriais dedicadas de física nuclear."
    ],
    "nursingApplication": "O enfermeiro reconhece que a deteção de emissores alfa em amostras ambientais ou biológicas requer detetores de barreira de silício dedicados."
  },
  {
    "id": 7062,
    "topicId": 7,
    "question": "Um enfermeiro analisa o poder de penetração, mecanismos de atenuação e riscos biológicos em 'espetro de energia em linhas discretas da partícula alfa'. Qual das seguintes afirmações expressa a correlação biofísica correta?",
    "options": [
      "A presença de estados excitados faz com que o núcleo filho absorva instantaneamente a partícula alfa de volta para a sua estrutura antes de esta atingir o exterior.",
      "Quando ocorrem transições para estados excitados, a partícula alfa perde toda a sua carga elétrica tornando-se num neutrão livre em repouso no tecido biológico.",
      "Se o núcleo filho for deixado num estado excitado, a partícula alfa terá energia cinética ligeiramente menor, sendo a diferença compensada pela emissão subsequente de um fotão gama.",
      "A estrutura fina do espetro alfa viola as leis da mecânica quântica por gerar energias fracionárias incompatíveis com os níveis quânticos do poço nuclear."
    ],
    "correctIndex": 2,
    "explanation": "A análise biofísica exata demonstra que Isto permite identificar com precisão o radioisótopo contaminante através de espetrometria alfa de alta resolução. O domínio destes conhecimentos permite ao enfermeiro fundamentar a escolha de blindagens e protocolos de segurança.",
    "distractorAnalysis": [
      "Está incorreta: a existência de 'estrutura fina' no espetro alfa reflete a desexcitação para diferentes níveis nucleares quânticos do filho; o excesso de energia é emitido por fotões gama.",
      "Está incorreta: uma vez tunelada para fora da barreira de Coulomb, a alfa é repelida com força e escapa permanentemente do átomo.",
      "Está incorreta: a conservação de carga e nucleões mantém-se estrita; a estrutura fina é a confirmação direta da quantização dos níveis energéticos nucleares."
    ],
    "nursingApplication": "O enfermeiro reconhece que a deteção de emissores alfa em amostras ambientais ou biológicas requer detetores de barreira de silício dedicados."
  },
  {
    "id": 7063,
    "topicId": 7,
    "question": "Na física das radiações nucleares (partículas alfa, beta e fotões gama) aplicada à prática clínica, em relação a 'recombinação da partícula alfa e formação de gás hélio', qual é a fundamentação científica correta?",
    "options": [
      "A partícula alfa desfaz-se definitivamente no vácuo, desaparecendo todos os seus protões e neutrões num feixe contínuo de luz ultravioleta brilhante.",
      "Ao parar no tecido biológico, a partícula alfa transforma-se num átomo de chumbo metálico pesado que se acumula no cérebro provocando encefalopatia tóxica aguda.",
      "A partícula alfa recombina-se com os iões de sódio do sangue venoso originando uma reação exotérmica de combustão química espontânea na veia do utente.",
      "Ao perder a sua energia cinética por ionizações nos tecidos, a partícula alfa desacelera até velocidades térmicas e captura dois eletrões livres, tornando-se um átomo neutro de Hélio gasoso."
    ],
    "correctIndex": 3,
    "explanation": "Em física nuclear e radioproteção clínica, recombinação da partícula alfa e formação de gás hélio explica-se pelo facto de que ao fim do seu percurso ionizante no tecido ou no ar, quando perde toda a sua energia cinética, a partícula alfa atrai e captura dois eletrões livres do meio. Transforma-se num átomo quimicamente inerte e inofensivo de gás Hélio estável (⁴He).",
    "distractorAnalysis": [
      "Está incorreta: a partícula alfa é apenas um núcleo de hélio nu; no final do seu alcance, capta dois eletrões do meio (He²⁺ + 2e⁻ -> He) e torna-se um átomo inócuo de hélio gasoso.",
      "Está incorreta: protões e neutrões conservam-se integralmente; a matéria bariónica não desaparece em radiação ultravioleta no final do alcance da partícula.",
      "Está incorreta: a partícula alfa forma hélio neutro (gás inerte não-tóxico) e não chumbo metálico nem combustão química com sódio."
    ],
    "nursingApplication": "O enfermeiro compreende que o perigo biológico da radiação alfa reside exclusivamente na fase de desaceleração ionizante de alta velocidade, e não no átomo de hélio final."
  },
  {
    "id": 7064,
    "topicId": 7,
    "question": "Na prestação de cuidados de enfermagem e proteção radiológica em serviços com doentes radioativos, como se aplica na prática o conceito de 'recombinação da partícula alfa e formação de gás hélio'?",
    "options": [
      "O hélio formado é metabolicamente inerte e biologicamente inofensivo; o perigo reside exclusivamente no trajeto ionizante prévio de 5 MeV que destruiu o ADN celular vizinho.",
      "A formação de gás hélio obriga o enfermeiro a aplicar aspiração contínua com cânulas traqueais no local da injeção para evitar a asfixia mecânica por gases nobres.",
      "O hélio resultante faz com que a voz do doente fique aguda e metálica durante quarenta e oito horas após a injeção terapêutica de radioisótopos emissores alfa.",
      "A produção de hélio neutraliza totalmente a acidez da urina do doente, impedindo a determinação laboratorial da glicosúria nas enfermarias de medicina interna."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para recombinação da partícula alfa e formação de gás hélio baseia-se no princípio: O enfermeiro compreende que o perigo biológico da radiação alfa reside exclusivamente na fase de desaceleração ionizante de alta velocidade, e não no átomo de hélio final. Esta atuação rigorosa garante a segurança do profissional, do utente e da comunidade.",
    "distractorAnalysis": [
      "Está incorreta: as quantidades molares de hélio geradas em tratamentos (picomoles) são farmacologicamente insignificantes; o dano reside no dano ionizante severo durante o percurso.",
      "Está incorreta: picomoles de hélio dissolvem-se impercetivelmente no líquido tecidual sem formar bolhas de gás macroscópicas nem alterar o timbre da voz humana.",
      "Está incorreta: o hélio é quimicamente inerte e não reage com tampões de pH urinário nem afeta testes químicos comuns na rotina hospitalar."
    ],
    "nursingApplication": "O enfermeiro compreende que o perigo biológico da radiação alfa reside exclusivamente na fase de desaceleração ionizante de alta velocidade, e não no átomo de hélio final."
  },
  {
    "id": 7065,
    "topicId": 7,
    "question": "Um enfermeiro analisa o poder de penetração, mecanismos de atenuação e riscos biológicos em 'recombinação da partícula alfa e formação de gás hélio'. Qual das seguintes afirmações expressa a correlação biofísica correta?",
    "options": [
      "A recombinação em hélio demonstra que todos os núcleos radioativos existentes na Terra se transformarão em ouro metálico num prazo de cinquenta anos.",
      "Como cada decaimento alfa produz um átomo de hélio estável, a acumulação de gás hélio em minérios de urânio ao longo de éons permitiu a Rutherford datar a idade das rochas terrestres.",
      "A captura de eletrões pela partícula alfa arrefece o interior da crosta terrestre até temperaturas criogénicas extremas a dez quilómetros de profundidade.",
      "A formação de átomos neutros de hélio no espaço intersticial do osso provoca a calcificação instantânea de todas as artérias coronárias e carótidas."
    ],
    "correctIndex": 1,
    "explanation": "A análise biofísica exata demonstra que Transforma-se num átomo quimicamente inerte e inofensivo de gás Hélio estável (⁴He). O domínio destes conhecimentos permite ao enfermeiro fundamentar a escolha de blindagens e protocolos de segurança.",
    "distractorAnalysis": [
      "Está incorreta: a medição da acumulação de hélio e de chumbo a partir do decaimento do urânio constituiu o primeiro método de datação radiométrica geológica (Rutherford, 1905).",
      "Está incorreta: o produto final das cadeias naturais do urânio e tório é o chumbo estável (²⁰⁶Pb, ²⁰⁷Pb, ²⁰⁸Pb) e hélio, e não ouro metálico.",
      "Está incorreta: o decaimento radioativo na Terra é exotérmico e constitui a principal fonte de calor geotérmico interno do planeta, não arrefecendo a crosta."
    ],
    "nursingApplication": "O enfermeiro compreende que o perigo biológico da radiação alfa reside exclusivamente na fase de desaceleração ionizante de alta velocidade, e não no átomo de hélio final."
  },
  {
    "id": 7066,
    "topicId": 7,
    "question": "Na física das radiações nucleares (partículas alfa, beta e fotões gama) aplicada à prática clínica, em relação a 'Transferência Linear de Energia (LET - Linear Energy Transfer)', qual é a fundamentação científica correta?",
    "options": [
      "O LET é a velocidade angular a que os eletrões orbitais giram em torno do núcleo atómico, medida em rotações por segundo nos tubos de raios X de diagnóstico.",
      "O LET define a pressão hidrostática exercida pelo líquido radiofarmacêutico sobre as paredes internas da seringa de plástico durante a injeção intravenosa.",
      "O LET (dE / dx) expressa a energia média depositada localmente pela radiação por unidade de comprimento de trajetória, medindo-se habitualmente em quiloeleatrão-volts por micrómetro (keV/µm).",
      "Essa grandeza mede a percentagem de humidade relativa do ar que é absorvida pelos dosímetros termoluminescentes quando expostos a vapores alcoólicos hospitalares."
    ],
    "correctIndex": 2,
    "explanation": "Em física nuclear e radioproteção clínica, Transferência Linear de Energia (LET - Linear Energy Transfer) explica-se pelo facto de que a partícula alfa possui um LET extremamente elevado (da ordem de 80 a 100 keV por micrómetro de tecido percorrido), cerca de 100 a 400 vezes superior ao dos Raios X ou partículas beta. Isto significa que liberta uma densidade espacial de ionizações massiva ao longo de uma trajetória retilínea microscópica.",
    "distractorAnalysis": [
      "Está incorreta: LET = dE/dx quantifica a densidade espacial de ionização ao longo da traça da partícula, sendo o parâmetro biofísico cardeal para determinar a eficácia biológica (RBE).",
      "Está incorreta: não mede velocidade angular de eletrões nem rotações em ampolas radiológicas.",
      "Está incorreta: o LET é uma grandeza da microdosimetria da interação das radiações com a matéria e não pressão de êmbolo ou humidade de dosímetros TLD."
    ],
    "nursingApplication": "O enfermeiro sabe que este alto LET causa quebras duplas complexas irreparáveis no DNA das células vizinhas imediatas."
  },
  {
    "id": 7067,
    "topicId": 7,
    "question": "Na prestação de cuidados de enfermagem e proteção radiológica em serviços com doentes radioativos, como se aplica na prática o conceito de 'Transferência Linear de Energia (LET - Linear Energy Transfer)'?",
    "options": [
      "O elevado LET das radiações faz com que os cateteres venosos de teflon ganhem carga elétrica estática perigosa capaz de eletrocutar o profissional de saúde.",
      "Radiações com alto LET exigem que o enfermeiro utilize luvas magnéticas de aço para absorver as partículas antes de estas tocarem na pele do utente internado.",
      "O conceito de LET determina que os doentes submetidos a medicina nuclear não possam ingerir alimentos quentes durante quarenta e oito horas consecutivas.",
      "Radiações de alto LET (como partículas alfa, ~100 keV/µm) produzem danos em aglomerado densos e letais no ADN celular, independentes da presença de oxigénio tecidual (baixo OER)."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para Transferência Linear de Energia (LET - Linear Energy Transfer) baseia-se no princípio: O enfermeiro sabe que este alto LET causa quebras duplas complexas irreparáveis no DNA das células vizinhas imediatas. Esta atuação rigorosa garante a segurança do profissional, do utente e da comunidade.",
    "distractorAnalysis": [
      "Está incorreta: alto LET induz quebras duplas de ADN complexas e quase impossíveis de reparar, sendo eficaz mesmo em tumores hipóxicos (Razão de Aumento de Oxigénio / OER próxima de 1).",
      "Está incorreta: o LET atua à escala celular/molecular no tecido e não gera cargas eletrostáticas macroscópicas em cateteres plásticos.",
      "Está incorreta: a radioproteção baseia-se em blindagens materiais apropriadas (vidro, acrílico, chumbo); luvas magnéticas ou restrições alimentares térmicas são desprovidas de fundamento."
    ],
    "nursingApplication": "O enfermeiro sabe que este alto LET causa quebras duplas complexas irreparáveis no DNA das células vizinhas imediatas."
  },
  {
    "id": 7068,
    "topicId": 7,
    "question": "Um enfermeiro analisa o poder de penetração, mecanismos de atenuação e riscos biológicos em 'Transferência Linear de Energia (LET - Linear Energy Transfer)'. Qual das seguintes afirmações expressa a correlação biofísica correta?",
    "options": [
      "Radiações de baixo LET (como raios X, gama e eletrões beta, ~0,2 a 2 keV/µm) produzem ionizações esparsas e dependem fortemente do efeito indireto mediado por radicais livres e oxigénio.",
      "Radiações de baixo LET são cem vezes mais letais e destruidoras para o núcleo celular humano do que as partículas alfa de elevada transferência linear de energia.",
      "O valor de LET é estritamente constante e imutável ao longo de todo o percurso da partícula carregada, desde a sua emissão no núcleo até ao repouso absoluto.",
      "A radiação de baixo LET não consegue atravessar tecidos moles biológicos, sendo totalmente barrada pela camada de ar que circunda o corpo do doente."
    ],
    "correctIndex": 0,
    "explanation": "A análise biofísica exata demonstra que Isto significa que liberta uma densidade espacial de ionizações massiva ao longo de uma trajetória retilínea microscópica. O domínio destes conhecimentos permite ao enfermeiro fundamentar a escolha de blindagens e protocolos de segurança.",
    "distractorAnalysis": [
      "Está incorreta: baixo LET produz ionizações esparsas (separadas por ~100 nm); cerca de 60-70% do dano é indireto (via radicais •OH), sendo altamente dependente da presença de oxigénio tecidual.",
      "Está incorreta: radiações de alto LET são significativamente mais eficazes em matar células por unidade de dose absorvida (maior RBE) do que as de baixo LET.",
      "Está incorreta: o LET varia ao longo do percurso segundo a fórmula de Bethe-Bloch, aumentando acentuadamente no final do alcance (Pico de Bragg)."
    ],
    "nursingApplication": "O enfermeiro sabe que este alto LET causa quebras duplas complexas irreparáveis no DNA das células vizinhas imediatas."
  },
  {
    "id": 7069,
    "topicId": 7,
    "question": "Na física das radiações nucleares (partículas alfa, beta e fotões gama) aplicada à prática clínica, em relação a 'alcance microscópico da partícula alfa na matéria viva', qual é a fundamentação científica correta?",
    "options": [
      "O alcance da partícula alfa na matéria viva é de cerca de meio metro, perfurando facilmente múltiplos órgãos internos durante o seu trajeto no corpo do doente.",
      "O alcance de uma partícula alfa em tecidos biológicos é de apenas 40 a 90 micrómetros, o equivalente a cerca de duas a seis células humanas diâmetro a diâmetro.",
      "A partícula alfa percorre exatamente vinte centímetros no fígado humano antes de sofrer reflexão eletrostática total pelas membranas plasmáticas celulares.",
      "O alcance da radiação alfa varia de acordo com o grupo sanguíneo do indivíduo, sendo dez vezes maior em pessoas com sangue do grupo O positivo."
    ],
    "correctIndex": 1,
    "explanation": "Em física nuclear e radioproteção clínica, alcance microscópico da partícula alfa na matéria viva explica-se pelo facto de que devido ao alto LET e colisões frequentes, o alcance da partícula alfa nos tecidos moles humanos é de apenas 30 a 80 micrómetros (μm), correspondente ao diâmetro de escassas 2 a 5 células contíguas. No ar atmosférico normal, o seu alcance máximo raramente excede 3 a 5 centímetros.",
    "distractorAnalysis": [
      "Está incorreta: devido à alta taxa de perda de energia (~100 keV/µm), uma alfa de 5-6 MeV dissipa toda a energia em 40-90 µm (diâmetro celular ~10-20 µm).",
      "Está incorreta: a alfa não atinge meio metro nem 20 centímetros no tecido humano; o seu alcance é rigorosamente microscópico (<0,1 mm).",
      "Está incorreta: o alcance depende unicamente da densidade de eletrões do meio e da energia inicial da partícula alfa, sendo independente do grupo sanguíneo ABO do utente."
    ],
    "nursingApplication": "Uma simples folha de papel de impressora, um lenço de papel ou a camada córnea de células mortas da pele humana são suficientes para travar 100% das partículas alfa."
  },
  {
    "id": 7070,
    "topicId": 7,
    "question": "Na prestação de cuidados de enfermagem e proteção radiológica em serviços com doentes radioativos, como se aplica na prática o conceito de 'alcance microscópico da partícula alfa na matéria viva'?",
    "options": [
      "O alcance microscópico da alfa permite aos profissionais de saúde tocar diretamente nas lesões do doente sem necessidade de calçar luvas descartáveis de proteção.",
      "Essa propriedade física faz com que a urina de doentes tratados com emissores alfa seja consumida com segurança por outros doentes na enfermaria hospitalar.",
      "O alcance microscópico (<0,1 mm) garante que a irradiação letal fica estritamente confinada às células neoplásicas ligadas ao vetor, poupando a medula óssea circundante.",
      "O curto alcance obriga o enfermeiro a massajar a área da injeção com pomadas térmicas de salicilato durante uma hora para forçar o avanço da partícula alfa."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para alcance microscópico da partícula alfa na matéria viva baseia-se no princípio: Uma simples folha de papel de impressora, um lenço de papel ou a camada córnea de células mortas da pele humana são suficientes para travar 100% das partículas alfa. Esta atuação rigorosa garante a segurança do profissional, do utente e da comunidade.",
    "distractorAnalysis": [
      "Está incorreta: emissores alfa dirigidos (ex: ²²³Ra para metástases ósseas, ²²⁵Ac-PSMA para cancro da próstata) poupam o estroma e a medula óssea sã devido ao alcance micrométrico.",
      "Está incorreta: a equipa de enfermagem deve utilizar sempre luvas de proteção estéreis para prevenir contaminação dérmica acidental; a urina contém radioatividade e exige isolamento.",
      "Está incorreta: resíduos biológicos de doentes tratados são radioativos e perigosos; massajar o local é desnecessário e prejudicial à biodistribuição do radiofármaco."
    ],
    "nursingApplication": "Uma simples folha de papel de impressora, um lenço de papel ou a camada córnea de células mortas da pele humana são suficientes para travar 100% das partículas alfa."
  },
  {
    "id": 7071,
    "topicId": 7,
    "question": "Um enfermeiro analisa o poder de penetração, mecanismos de atenuação e riscos biológicos em 'alcance microscópico da partícula alfa na matéria viva'. Qual das seguintes afirmações expressa a correlação biofísica correta?",
    "options": [
      "A epiderme humana deixa passar livremente as partículas alfa sem qualquer resistência mecânica em virtude da ausência de lípidos na camada córnea exterior.",
      "O alcance das partículas alfa no ar atmosférico é estritamente nulo, impedindo que as partículas consigam sair do interior dos frascos de radiofármacos hospitalares.",
      "A espessura da pele impede a absorção de radiação beta ou gama, tornando o corpo humano invulnerável a qualquer tipo de exposição a radioisótopos no hospital.",
      "Como a camada córnea morta da epiderme humana possui espessura típica de 40 a 70 micrómetros, ela é suficiente para reter a quase totalidade das partículas alfa externas."
    ],
    "correctIndex": 3,
    "explanation": "A análise biofísica exata demonstra que No ar atmosférico normal, o seu alcance máximo raramente excede 3 a 5 centímetros. O domínio destes conhecimentos permite ao enfermeiro fundamentar a escolha de blindagens e protocolos de segurança.",
    "distractorAnalysis": [
      "Está incorreta: a camada de queratinócitos mortos anucleados (estrato córneo) tem espessura suficiente para absorver a energia das alfas externas, protegendo as células basais vivas.",
      "Está incorreta: a camada córnea é uma barreira mecânica e física eficaz contra alfas externas; a vulnerabilidade surge em contaminação interna (inalação, ingestão ou feridas).",
      "Está incorreta: o alcance da alfa no ar é de cerca de 3 a 8 centímetros; as radiações beta e gama atravessam facilmente a epiderme e exigem blindagens específicas."
    ],
    "nursingApplication": "Uma simples folha de papel de impressora, um lenço de papel ou a camada córnea de células mortas da pele humana são suficientes para travar 100% das partículas alfa."
  },
  {
    "id": 7072,
    "topicId": 7,
    "question": "Na física das radiações nucleares (partículas alfa, beta e fotões gama) aplicada à prática clínica, em relação a 'o pico de Bragg da partícula alfa', qual é a fundamentação científica correta?",
    "options": [
      "O pico de Bragg é o máximo acentuado de perda de energia por ionização (dE/dx) que ocorre imediatamente antes do fim da trajetória da partícula alfa, quando esta abranda.",
      "O pico de Bragg representa o aumento repentino da pressão atmosférica no interior da sala de medicina nuclear quando o gerador de tecnécio é eluído pelo operador.",
      "Trata-se da temperatura máxima atingida pelos detetores de cintilação das câmaras gama quando expostos à luz visível emitida por tubos fluorescentes do teto.",
      "O pico de Bragg é a frequência máxima das ondas sonoras emitidas pelo coração humano durante a realização de ecocardiogramas transtorácicos bidimensionais."
    ],
    "correctIndex": 0,
    "explanation": "Em física nuclear e radioproteção clínica, o pico de Bragg da partícula alfa explica-se pelo facto de que a taxa de perda de energia por ionização aumenta acentuadamente no final do percurso da partícula pesada, à medida que ela desacelera (Pico de Bragg). A maior densidade de dano biológico é depositada com precisão cirúrgica na extremidade terminal da sua trajetória tecidual.",
    "distractorAnalysis": [
      "Está incorreta: segundo a fórmula de Bethe-Bloch, dE/dx ∝ 1/v²; logo, à medida que a partícula alfa desacelera, a probabilidade de interação coulombiana dispara, gerando o pico de Bragg.",
      "Está incorreta: o pico de Bragg é um conceito fundamental da física da interação de partículas carregadas pesadas na matéria e não uma variação de pressão barométrica na sala.",
      "Está incorreta: não se relaciona com temperatura de cristais de cintilação nem com ondas sonoras de ecocardiografia."
    ],
    "nursingApplication": "Na terapia alfa dirigida com anticorpos marcados com Bismuto-213 ou Actínio-225, o pico de Bragg é aproveitado para destruir células tumorais sem lesar os tecidos normais circundantes."
  },
  {
    "id": 7073,
    "topicId": 7,
    "question": "Na prestação de cuidados de enfermagem e proteção radiológica em serviços com doentes radioativos, como se aplica na prática o conceito de 'o pico de Bragg da partícula alfa'?",
    "options": [
      "O pico de Bragg exige que o enfermeiro administre soro fisiológico a noventa graus centígrados para evitar o congelamento das artérias coronárias do utente internado.",
      "O pico de Bragg concentra a destruição biológica máxima no interior da massa tumoral com dose mínima à superfície e dose estritamente nula para além do alcance da partícula.",
      "Essa propriedade física faz com que os doentes irradiados emitam pulsos luminosos visíveis através da cavidade oral sempre que expiram o ar dos pulmões.",
      "A existência do pico de Bragg permite que os doentes recebam alta hospitalar imediata em menos de um segundo após a injeção do radioisótopo na câmara quente."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para o pico de Bragg da partícula alfa baseia-se no princípio: Na terapia alfa dirigida com anticorpos marcados com Bismuto-213 ou Actínio-225, o pico de Bragg é aproveitado para destruir células tumorais sem lesar os tecidos normais circundantes. Esta atuação rigorosa garante a segurança do profissional, do utente e da comunidade.",
    "distractorAnalysis": [
      "Está incorreta: o perfil de Bragg é a base de ouro da terapia com partículas (hadronterapia com protões e alfas): deposita dose conformada no tumor sem irradiar os tecidos normais posteriores.",
      "Está incorreta: o pico de Bragg atua à escala celular microscópica de energia cinética e não requer perfusões de soro a temperaturas escaldantes nem emite luz visível na boca.",
      "Está incorreta: a alta hospitalar obedece a critérios dosimétricos de segurança e decaimento temporal, não sendo instantânea após procedimentos terapêuticos."
    ],
    "nursingApplication": "Na terapia alfa dirigida com anticorpos marcados com Bismuto-213 ou Actínio-225, o pico de Bragg é aproveitado para destruir células tumorais sem lesar os tecidos normais circundantes."
  },
  {
    "id": 7074,
    "topicId": 7,
    "question": "Um enfermeiro analisa o poder de penetração, mecanismos de atenuação e riscos biológicos em 'o pico de Bragg da partícula alfa'. Qual das seguintes afirmações expressa a correlação biofísica correta?",
    "options": [
      "Os fotões de radiação gama apresentam um pico de Bragg idêntico ao das partículas alfa a dez centímetros de profundidade em qualquer meio biológico aquoso.",
      "O pico de Bragg das partículas alfa desaparece completamente se o tecido irradiado contiver mais de setenta por cento de água na sua composição química normal.",
      "Ao contrário dos fotões X e gama (que exibem atenuação exponencial com cauda longa), partículas carregadas pesadas apresentam um limite de penetração rígido com pico de Bragg terminal.",
      "A altura do pico de Bragg diminui linearmente com a gravidade terrestre, sendo impossível de observar em hospitais localizados ao nível do mar costeiro."
    ],
    "correctIndex": 2,
    "explanation": "A análise biofísica exata demonstra que A maior densidade de dano biológico é depositada com precisão cirúrgica na extremidade terminal da sua trajetória tecidual. O domínio destes conhecimentos permite ao enfermeiro fundamentar a escolha de blindagens e protocolos de segurança.",
    "distractorAnalysis": [
      "Está incorreta: fotões interagem de forma estocástica e atenuam-se exponencialmente (I = I₀·e^(-µx)), sem limite final abrupto; partículas carregadas têm alcance finito com pico de Bragg terminal.",
      "Está incorreta: fotões gama não possuem massa de repouso nem carga elétrica e não produzem pico de Bragg na matéria condensada.",
      "Está incorreta: o pico de Bragg é independente da gravidade terrestre e manifesta-se plenamente em meios aquosos corporais (tecidos moles biológicos)."
    ],
    "nursingApplication": "Na terapia alfa dirigida com anticorpos marcados com Bismuto-213 ou Actínio-225, o pico de Bragg é aproveitado para destruir células tumorais sem lesar os tecidos normais circundantes."
  },
  {
    "id": 7075,
    "topicId": 7,
    "question": "Na física das radiações nucleares (partículas alfa, beta e fotões gama) aplicada à prática clínica, em relação a 'Eficácia Biológica Relativa (RBE) e fator de ponderação da radiação (wR)', qual é a fundamentação científica correta?",
    "options": [
      "O fator w_R da radiação alfa é rigorosamente igual a zero porque as partículas alfa são biologicamente inertes no interior dos tecidos celulares humanos vivos.",
      "O fator de ponderação da radiação mede o peso físico em gramas das blindagens de chumbo necessárias para proteger as portas da câmara quente hospitalar.",
      "A radiação beta possui o maior valor de w_R de toda a física nuclear, sendo cinquenta vezes mais destruidora por unidade de dose absorvida do que a alfa.",
      "A radiação alfa tem fator de ponderação w_R = 20 (vs w_R = 1 para gama e beta), refletindo que 1 Gray de alfa produz vinte vezes mais dano biológico estocástico que 1 Gray de gama."
    ],
    "correctIndex": 3,
    "explanation": "Em física nuclear e radioproteção clínica, Eficácia Biológica Relativa (RBE) e fator de ponderação da radiação (wR) explica-se pelo facto de que o fator de ponderação das partículas alfa para proteção radiológica é $w_R = 20$ (enquanto para Raios X, Gama e Beta é $w_R = 1$). Isto significa que 1 Gray (Gy) de dose absorvida de radiação alfa produz o mesmo dano biológico estocástico que 20 Grays de Raios X convencionais (Dose Equivalente em Sievert = 20 Sv).",
    "distractorAnalysis": [
      "Está incorreta: a dose equivalente H = D × w_R atribui w_R = 20 à partícula alfa pela CIPR/ICRP devido às quebras duplas de ADN densas e irreparáveis induzidas pelo seu alto LET.",
      "Está incorreta: a alfa é a radiação com maior eficácia biológica relativa entre as radiações clínicas de uso corrente (w_R = 20 e não zero).",
      "Está incorreta: w_R é um fator de ponderação biológico adimensional (e não peso de blindagens em gramas); para radiação beta e gama o valor regulamentar é w_R = 1."
    ],
    "nursingApplication": "O enfermeiro compreende por que qualquer dose absorvida de radiação alfa no organismo é considerada criticamente perigosa na dosimetria biológica."
  },
  {
    "id": 7076,
    "topicId": 7,
    "question": "Na prestação de cuidados de enfermagem e proteção radiológica em serviços com doentes radioativos, como se aplica na prática o conceito de 'Eficácia Biológica Relativa (RBE) e fator de ponderação da radiação (wR)'?",
    "options": [
      "Na dosimetria de proteção, a dose absorvida em Gray é multiplicada pelo fator w_R = 20 para calcular a Dose Equivalente em Sievert (H = D × w_R) para fontes alfa.",
      "O fator w_R serve para determinar o preço de faturação dos exames imagiológicos multiplicando o número de fotões pelo valor da moeda oficial no hospital.",
      "A aplicação do fator w_R permite ao enfermeiro reduzir a ingestão diária de líquidos do doente para metade durante o período de internamento terapêutico.",
      "O fator de ponderação w_R indica a velocidade em quilómetros por hora a que os doentes tratados devem caminhar nos corredores da enfermaria oncológica."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para Eficácia Biológica Relativa (RBE) e fator de ponderação da radiação (wR) baseia-se no princípio: O enfermeiro compreende por que qualquer dose absorvida de radiação alfa no organismo é considerada criticamente perigosa na dosimetria biológica. Esta atuação rigorosa garante a segurança do profissional, do utente e da comunidade.",
    "distractorAnalysis": [
      "Está incorreta: o fator de ponderação da radiação (w_R = 20 para alfas) pondera o dano biológico estocástico, convertendo a dose física em Gy para a grandeza de radioproteção Sv.",
      "Está incorreta: w_R é uma constante biofísica estrita da Comissão Internacional de Proteção Radiológica (ICRP) e não uma tarifa administrativa hospitalar.",
      "Está incorreta: doentes submetidos a radiofármacos exigem hidratação abundante para acelerar a excreção renal; w_R não tem relação com regimes de caminhada motora."
    ],
    "nursingApplication": "O enfermeiro compreende por que qualquer dose absorvida de radiação alfa no organismo é considerada criticamente perigosa na dosimetria biológica."
  },
  {
    "id": 7077,
    "topicId": 7,
    "question": "Um enfermeiro analisa o poder de penetração, mecanismos de atenuação e riscos biológicos em 'Eficácia Biológica Relativa (RBE) e fator de ponderação da radiação (wR)'. Qual das seguintes afirmações expressa a correlação biofísica correta?",
    "options": [
      "Uma dose de 1 Gy de partículas alfa é vinte vezes menos tóxica para a medula óssea do que 1 Gy de radiação gama de baixa transferência linear de energia.",
      "Uma dose absorvida de apenas 1 Gy de partículas alfa tem a mesma eficácia lesiva e probabilidade mutagénica que uma dose de 20 Gy de raios X ou radiação gama.",
      "A dose equivalente em Sievert é sempre rigorosamente nula para qualquer exposição a partículas alfa em virtude da ausência de eletrões livres no núcleo.",
      "O valor de w_R da radiação gama é cem vezes superior ao da alfa devido ao seu comprimento de onda extremamente longo na escala métrica internacional."
    ],
    "correctIndex": 1,
    "explanation": "A análise biofísica exata demonstra que Isto significa que 1 Gray (Gy) de dose absorvida de radiação alfa produz o mesmo dano biológico estocástico que 20 Grays de Raios X convencionais (Dose Equivalente em Sievert = 20 Sv). O domínio destes conhecimentos permite ao enfermeiro fundamentar a escolha de blindagens e protocolos de segurança.",
    "distractorAnalysis": [
      "Está incorreta: como H = D × w_R, 1 Gy de alfa equivale a 20 Sv; enquanto 1 Gy de gama equivale a 1 Sv (w_R = 1); a eficácia biológica da alfa é 20 vezes superior.",
      "Está incorreta: a radiação alfa é vinte vezes mais prejudicial por Gray de dose física do que a radiação gama ou raios X convencionais.",
      "Está incorreta: a dose equivalente da alfa é expressiva e crítica em contaminação interna; para a radiação gama w_R = 1, e não 100."
    ],
    "nursingApplication": "O enfermeiro compreende por que qualquer dose absorvida de radiação alfa no organismo é considerada criticamente perigosa na dosimetria biológica."
  },
  {
    "id": 7078,
    "topicId": 7,
    "question": "Na física das radiações nucleares (partículas alfa, beta e fotões gama) aplicada à prática clínica, em relação a 'ausência de risco na irradiação externa da pele íntegra por fontes alfa', qual é a fundamentação científica correta?",
    "options": [
      "As partículas alfa externas não oferecem risco porque são atraídas pelo oxigénio atmosférico e convertem-se espontaneamente em luz solar inócua na pele.",
      "A ausência de risco externo deve-se ao facto de a partícula alfa possuir carga elétrica neutra que não interage com os átomos da superfície corporal.",
      "A camada córnea da epiderme íntegra (40 a 70 µm de células mortas queratinizadas) barra totalmente as alfas externas, impedindo que atinjam a camada basal viva.",
      "As fontes alfa externas penetram até aos órgãos profundos sem causar dano porque atravessam os tecidos biológicos sem produzir qualquer ionização."
    ],
    "correctIndex": 2,
    "explanation": "Em física nuclear e radioproteção clínica, ausência de risco na irradiação externa da pele íntegra por fontes alfa explica-se pelo facto de que uma fonte de partículas alfa colocada a 10 cm de distância ou mesmo pousada sobre a pele intacta não consegue ultrapassar o estrato córneo queratinizado. Como o estrato córneo é constituído por células mortas anucleadas que descamam naturalmente, a radiação alfa externa não atinge a camada basal proliferativa da epiderme nem o DNA celular viável.",
    "distractorAnalysis": [
      "Está incorreta: o estrato córneo anucleado funciona como uma barreira passiva que absorve os ~5 MeV da partícula alfa antes que esta alcance os queratinócitos basais viáveis.",
      "Está incorreta: a radiação alfa não se transforma em luz solar; é matéria atómica pesada desacelerada por colisões inelásticas com os átomos da queratina.",
      "Está incorreta: a partícula alfa possui carga positiva dupla (+2e) e ioniza densamente a matéria; é barrada mecanicamente pelo estrato córneo exterior."
    ],
    "nursingApplication": "O enfermeiro sabe que o perigo letal das emissões alfa é quase nulo na irradiação externa, mas torna-se máximo na contaminação interna."
  },
  {
    "id": 7079,
    "topicId": 7,
    "question": "Na prestação de cuidados de enfermagem e proteção radiológica em serviços com doentes radioativos, como se aplica na prática o conceito de 'ausência de risco na irradiação externa da pele íntegra por fontes alfa'?",
    "options": [
      "Os enfermeiros podem ingerir pequenas doses de fontes alfa externas sem qualquer perigo porque a saliva humana neutraliza instantaneamente a radioatividade.",
      "A inocuidade externa autoriza os profissionais a manusear radiofármacos emissores alfa sem qualquer equipamento de proteção individual descartável na sala.",
      "A ausência de penetração externa significa que as fontes alfa podem ser armazenadas em gavetas comuns de madeira sem qualquer aviso de sinalização de risco.",
      "Fontes alfa externas não exigem blindagens corporais pesadas de chumbo, mas a sua manipulação requer luvas e técnica fechada para impedir a contaminação interna."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para ausência de risco na irradiação externa da pele íntegra por fontes alfa baseia-se no princípio: O enfermeiro sabe que o perigo letal das emissões alfa é quase nulo na irradiação externa, mas torna-se máximo na contaminação interna. Esta atuação rigorosa garante a segurança do profissional, do utente e da comunidade.",
    "distractorAnalysis": [
      "Está incorreta: o princípio chave é: zero risco de irradiação externa pela pele íntegra, mas risco extremo se houver inalação, ingestão ou penetração através de feridas cutâneas.",
      "Está incorreta: a ingestão de emissores alfa é fatal ou altamente carcinogénica; a saliva não neutraliza reações nucleares; luvas e EPI são mandatórios.",
      "Está incorreta: fontes de radiação ionizante exigem armazenamento controlado e sinalização com o trifólio de radiação de acordo com as normas de segurança."
    ],
    "nursingApplication": "O enfermeiro sabe que o perigo letal das emissões alfa é quase nulo na irradiação externa, mas torna-se máximo na contaminação interna."
  },
  {
    "id": 7080,
    "topicId": 7,
    "question": "Um enfermeiro analisa o poder de penetração, mecanismos de atenuação e riscos biológicos em 'ausência de risco na irradiação externa da pele íntegra por fontes alfa'. Qual das seguintes afirmações expressa a correlação biofísica correta?",
    "options": [
      "Se a pele apresentar fissuras, escoriações ou queimaduras, a barreira córnea é perdida e a partícula alfa atinge diretamente células vivas, gerando necrose e mutações.",
      "A presença de feridas na pele repele magneticamente as partículas alfa para fora do corpo através do aumento da secreção local de histamina tecidual.",
      "A camada basal da epiderme é invulnerável à radiação ionizante, reparando todas as quebras duplas de ADN em escassos milionésimos de segundo.",
      "As partículas alfa tornam-se inofensivas logo que entram em contacto com o sangue venoso devido à elevada concentração de bicarbonato plasmático."
    ],
    "correctIndex": 0,
    "explanation": "A análise biofísica exata demonstra que Como o estrato córneo é constituído por células mortas anucleadas que descamam naturalmente, a radiação alfa externa não atinge a camada basal proliferativa da epiderme nem o DNA celular viável. O domínio destes conhecimentos permite ao enfermeiro fundamentar a escolha de blindagens e protocolos de segurança.",
    "distractorAnalysis": [
      "Está incorreta: soluções de continuidade da barreira cutânea permitem a entrada direta do radioisótopo nos tecidos vivos e na circulação, originando contaminação interna grave.",
      "Está incorreta: a histamina é um mediador inflamatório vascular e não exerce repulsão magnética subatómica sobre partículas nucleares.",
      "Está incorreta: a camada basal da pele contém células estaminais em proliferação ativa altamente radiossensíveis (lei de Bergonié-Tribondeau)."
    ],
    "nursingApplication": "O enfermeiro sabe que o perigo letal das emissões alfa é quase nulo na irradiação externa, mas torna-se máximo na contaminação interna."
  },
  {
    "id": 7081,
    "topicId": 7,
    "question": "Na física das radiações nucleares (partículas alfa, beta e fotões gama) aplicada à prática clínica, em relação a 'perigo extremo da inalação de partículas alfa: o Gás Rádon (²²²Rn)', qual é a fundamentação científica correta?",
    "options": [
      "O perigo do gás radão decorre da sua combustão espontânea à temperatura ambiente gerando chamas que queimam a árvore traqueobrônquica do indivíduo.",
      "O ²²²Rn é um gás nobre inalado que decai nos pulmões em descendentes sólidos metálicos emissores alfa (²¹⁸Po, ²¹⁴Po), que se fixam na mucosa brônquica.",
      "O gás radão reage com a hemoglobina transformando o sangue venoso em ácido sulfúrico concentrado em menos de dez minutos após a inalação involuntária.",
      "O radão emite exclusivamente radiação ultravioleta que queima a mucosa nasal sem produzir qualquer ionização nos núcleos celulares do epitélio pulmonar."
    ],
    "correctIndex": 1,
    "explanation": "Em física nuclear e radioproteção clínica, perigo extremo da inalação de partículas alfa: o Gás Rádon (²²²Rn) explica-se pelo facto de que o Rádon-222 é um gás nobre radioativo emissor alfa resultante do decaimento do Rádio no solo e granito de caves e pisos térreos pouco ventilados. Quando inalado, os seus produtos filhos sólidos emissores alfa (Polónio-218 e Polónio-214) depositam-se no epitélio dos brônquios, bombardeando as células pulmonares com radiação de alto LET.",
    "distractorAnalysis": [
      "Está incorreta: o Radão-222 decai por emissão alfa; os seus descendentes sólidos de semivida curta aderem ao muco brônquico, emitindo alfas que provocam quebras no ADN das células basais.",
      "Está incorreta: o radão é um gás quimicamente nobre/inerte (grupo 18) e não entra em combustão química; a lesão é puramente radiobiológica por radiação ionizante alfa.",
      "Está incorreta: o radão é a segunda causa principal de cancro do pulmão no mundo (responsável por 3 a 14% dos casos), sendo a principal causa em não fumadores."
    ],
    "nursingApplication": "O Rádon é a segunda causa de cancro do pulmão no mundo (a seguir ao tabagismo): o enfermeiro de saúde comunitária educa a população para a ventilação frequente de habitações em zonas graníticas."
  },
  {
    "id": 7082,
    "topicId": 7,
    "question": "Na prestação de cuidados de enfermagem e proteção radiológica em serviços com doentes radioativos, como se aplica na prática o conceito de 'perigo extremo da inalação de partículas alfa: o Gás Rádon (²²²Rn)'?",
    "options": [
      "O enfermeiro deve administrar xaropes mucolíticos diários a todas as pessoas que residam em zonas com granito para dissolver os átomos de urânio inalados.",
      "A proteção contra o gás radão exige que os profissionais utilizem máscaras de chumbo com dez milímetros de espessura durante a prestação de cuidados gerais.",
      "O enfermeiro deve orientar a ventilação frequente de habitações térreas e caves em zonas graníticas (como no Norte e Centro de Portugal) para dispersar a concentração de radão.",
      "A inalação de radão em pequenas quantidades é recomendada para aumentar a capacidade vital forçada em doentes com doença pulmonar obstrutiva crónica."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para perigo extremo da inalação de partículas alfa: o Gás Rádon (²²²Rn) baseia-se no princípio: O Rádon é a segunda causa de cancro do pulmão no mundo (a seguir ao tabagismo): o enfermeiro de saúde comunitária educa a população para a ventilação frequente de habitações em zonas graníticas. Esta atuação rigorosa garante a segurança do profissional, do utente e da comunidade.",
    "distractorAnalysis": [
      "Está incorreta: a ventilação natural ou mecânica de espaços fechados e o isolamento de fundações no solo reduzem drasticamente a concentração de radão no ar interior (Bq/m³).",
      "Está incorreta: xaropes mucolíticos não neutralizam a deposição radioativa; máscaras de chumbo são fisicamente inviáveis para respiração; a exposição ao radão não é benéfica.",
      "Está incorreta: a inalação de radão não melhora a DPOC, aumentando cumulativamente o risco de desenvolvimento de neoplasia maligna broncopulmonar."
    ],
    "nursingApplication": "O Rádon é a segunda causa de cancro do pulmão no mundo (a seguir ao tabagismo): o enfermeiro de saúde comunitária educa a população para a ventilação frequente de habitações em zonas graníticas."
  },
  {
    "id": 7083,
    "topicId": 7,
    "question": "Um enfermeiro analisa o poder de penetração, mecanismos de atenuação e riscos biológicos em 'perigo extremo da inalação de partículas alfa: o Gás Rádon (²²²Rn)'. Qual das seguintes afirmações expressa a correlação biofísica correta?",
    "options": [
      "O epitélio dos pulmões possui uma membrana de titânio biológico que reflete as partículas alfa em direção à traqueia impedindo a absorção de energia.",
      "O muco pulmonar neutraliza cem por cento da dose de radiação alfa absorvida, impedindo qualquer mutação genética nas células epiteliais do hospedeiro.",
      "As partículas alfa emitidas no pulmão convertem-se em feixes de raios laser que saem pela boca sem provocar qualquer ionização molecular nos tecidos.",
      "A ausência de estrato córneo no epitélio respiratório e a proximidade das células basais em divisão expõem o ADN brônquico à deposição de 5 a 7 MeV de cada partícula alfa."
    ],
    "correctIndex": 3,
    "explanation": "A análise biofísica exata demonstra que Quando inalado, os seus produtos filhos sólidos emissores alfa (Polónio-218 e Polónio-214) depositam-se no epitélio dos brônquios, bombardeando as células pulmonares com radiação de alto LET. O domínio destes conhecimentos permite ao enfermeiro fundamentar a escolha de blindagens e protocolos de segurança.",
    "distractorAnalysis": [
      "Está incorreta: o epitélio respiratório é mucoso e vivo (sem camada córnea de queratina morta); as partículas alfa dos descendentes do radão atingem diretamente o núcleo das células basais.",
      "Está incorreta: o epitélio brônquico é altamente vulnerável à radiação ionizante de alto LET; não existem barreiras de titânio na biologia pulmonar.",
      "Está incorreta: o muco brônquico retém as partículas sólidas em vez de as neutralizar, concentrando a dose radioativa sobre o epitélio de revestimento respiratório."
    ],
    "nursingApplication": "O Rádon é a segunda causa de cancro do pulmão no mundo (a seguir ao tabagismo): o enfermeiro de saúde comunitária educa a população para a ventilação frequente de habitações em zonas graníticas."
  },
  {
    "id": 7084,
    "topicId": 7,
    "question": "Na física das radiações nucleares (partículas alfa, beta e fotões gama) aplicada à prática clínica, em relação a 'contaminação interna por ingestão acidental ou feridas cutâneas abertas', qual é a fundamentação científica correta?",
    "options": [
      "Em contaminação interna, o alcance microscópico da alfa (40-90 µm) torna-se altamente letal porque toda a energia é depositada no interior dos órgãos vitais em renovação.",
      "A contaminação interna por ingestão é totalmente inofensiva porque o suco gástrico dissolve os núcleos atómicos neutralizando a sua carga elétrica elementar.",
      "Os emissores alfa ingeridos são expelidos instantaneamente através da transpiração cutânea sem deixar qualquer resíduo radioativo nos tecidos biológicos.",
      "A absorção através de feridas abertas converte os radioisótopos em cálcio mineral estável que acelera a cicatrização das lesões da pele por osteogénese."
    ],
    "correctIndex": 0,
    "explanation": "Em física nuclear e radioproteção clínica, contaminação interna por ingestão acidental ou feridas cutâneas abertas explica-se pelo facto de que se um emissor alfa entrar na corrente sanguínea através de uma picada acidental de agulha, corte cutâneo ou ingestão de alimentos contaminados, a barreira do estrato córneo é contornada. As partículas alfa bombardeiam diretamente os tecidos profundos e órgãos de fixação (como o fígado, rins ou medula óssea), causando citólise maciça e aberrações genéticas letais.",
    "distractorAnalysis": [
      "Está incorreta: internamente, a ausência de barreiras de proteção faz com que a alta transferência linear de energia (~100 keV/µm) atinja diretamente células viáveis em órgãos críticos.",
      "Está incorreta: reações químicas e acidez estomacal não alteram a estabilidade do núcleo atómico; o radionuclídeo é absorvido no trato digestivo para a corrente sanguínea.",
      "Está incorreta: a contaminação interna não é excretada por transpiração instantânea; o radioisótopo deposita-se em órgãos-alvo (osso, fígado, rins) segundo a sua afinidade biológica."
    ],
    "nursingApplication": "O enfermeiro utiliza luvas impermeáveis duplas, máscara FFP3 e proteção ocular estrita ao manipular soluções líquidas de radiofármacos emissores alfa."
  },
  {
    "id": 7085,
    "topicId": 7,
    "question": "Na prestação de cuidados de enfermagem e proteção radiológica em serviços com doentes radioativos, como se aplica na prática o conceito de 'contaminação interna por ingestão acidental ou feridas cutâneas abertas'?",
    "options": [
      "O enfermeiro deve orientar a lavagem de feridas contaminadas com escovas de aço rígidas até remover todas as camadas da derme dos membros superiores.",
      "A equipa de enfermagem deve proibir rigorosamente comer, beber ou fumar em áreas controladas, utilizar luvas duplas e cobrir imediatamente qualquer ferida cutânea.",
      "Em caso de ferida com radioisótopo, o profissional deve incentivar a deglutição do sangue contaminado para acelerar a depuração renal através do estômago.",
      "A equipe clínica deve aplicar compressas de chumbo líquido fundido a trezentos graus sobre a ferida para selar a entrada de radiação no organismo."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para contaminação interna por ingestão acidental ou feridas cutâneas abertas baseia-se no princípio: O enfermeiro utiliza luvas impermeáveis duplas, máscara FFP3 e proteção ocular estrita ao manipular soluções líquidas de radiofármacos emissores alfa. Esta atuação rigorosa garante a segurança do profissional, do utente e da comunidade.",
    "distractorAnalysis": [
      "Está incorreta: a radioproteção operacional proíbe estritamente a ingestão ou contacto em áreas ativas para evitar a contaminação interna; feridas devem ser protegidas e lavadas suavemente.",
      "Está incorreta: escovas de aço provocam abrasão profunda e aumentam a absorção vascular do contaminante; a lavagem de feridas faz-se com soro fisiológico estéril abundante.",
      "Está incorreta: engolir sangue ou material radioativo causaria contaminação interna digestiva grave; compressas de chumbo fundido causariam queimaduras térmicas catastróficas."
    ],
    "nursingApplication": "O enfermeiro utiliza luvas impermeáveis duplas, máscara FFP3 e proteção ocular estrita ao manipular soluções líquidas de radiofármacos emissores alfa."
  },
  {
    "id": 7086,
    "topicId": 7,
    "question": "Um enfermeiro analisa o poder de penetração, mecanismos de atenuação e riscos biológicos em 'contaminação interna por ingestão acidental ou feridas cutâneas abertas'. Qual das seguintes afirmações expressa a correlação biofísica correta?",
    "options": [
      "Os radionuclídeos alfa incorporados são decompostos pelas mitocôndrias celulares em açúcar simples que nutre o cérebro durante períodos de jejum prolongado.",
      "A presença de emissores alfa no sangue impede a coagulação de feridas cirúrgicas através da absorção permanente de todas as plaquetas da circulação sistémica.",
      "A incorporação biológica de emissores alfa acarreta risco cumulativo de indução de neoplasias malignas e aplasia medular, sendo a excreção biológica frequentemente lenta.",
      "O organismo humano é totalmente imune aos emissores alfa internos desde que o doente mantenha um índice de massa corporal superior a trinta quilos por metro quadrado."
    ],
    "correctIndex": 2,
    "explanation": "A análise biofísica exata demonstra que As partículas alfa bombardeiam diretamente os tecidos profundos e órgãos de fixação (como o fígado, rins ou medula óssea), causando citólise maciça e aberrações genéticas letais. O domínio destes conhecimentos permite ao enfermeiro fundamentar a escolha de blindagens e protocolos de segurança.",
    "distractorAnalysis": [
      "Está incorreta: emissores alfa retidos nos tecidos (como Rádio nos ossos ou Plutónio no fígado) irradiam continuamente as células circundantes ao longo de anos, elevando o risco oncológico.",
      "Está incorreta: a radiação ionizante não é metabolizada em nutrientes energéticos pelas mitocôndrias; danifica enzimas e estruturas moleculares.",
      "Está incorreta: a incorporação afeta a medula óssea a longo prazo (induzindo aplasia ou leucemia), mas não dissolve plaquetas de forma instantânea; o IMC não confere imunidade."
    ],
    "nursingApplication": "O enfermeiro utiliza luvas impermeáveis duplas, máscara FFP3 e proteção ocular estrita ao manipular soluções líquidas de radiofármacos emissores alfa."
  },
  {
    "id": 7087,
    "topicId": 7,
    "question": "Na física das radiações nucleares (partículas alfa, beta e fotões gama) aplicada à prática clínica, em relação a 'Rádio-226 e o caso histórico das operárias dos mostradores de relógio (Radium Girls)', qual é a fundamentação científica correta?",
    "options": [
      "As operárias desenvolveram surdez aguda provocada pelo ruído ensurdecedor das partículas alfa a colidirem com os mostradores de vidro dos relógios industriais.",
      "O caso das Radium Girls demonstrou que as partículas alfa não interagem com o corpo humano, comprovando a total segurança do rádio para a cosmética médica.",
      "A toxicidade do rádio deveu-se à inalação de vapores de mercúrio libertados pela tinta quando esta era aquecida em fornos de secagem a vapor na fábrica.",
      "As operárias afinavam pincéis com os lábios ao pintar mostradores com ²²⁶Ra; o rádio, análogo químico do cálcio, fixou-se no esqueleto causando necrose óssea e osteossarcomas."
    ],
    "correctIndex": 3,
    "explanation": "Em física nuclear e radioproteção clínica, Rádio-226 e o caso histórico das operárias dos mostradores de relógio (Radium Girls) explica-se pelo facto de que o Rádio (²²⁶Ra) é um metal alcalino-terroso quimicamente análogo ao cálcio; quando ingerido, é incorporado ativamente na matriz óssea mineral pela hidroxiapatite. A emissão alfa contínua na medula óssea causou necrose óssea grave da mandíbula, aplasia medular fatal e osteossarcomas devastadores nas operárias que lambiam os pincéis com tinta radioluminescente.",
    "distractorAnalysis": [
      "Está incorreta: o caso histórico (década de 1920) comprovou a radiotoxicidade interna: o ²²⁶Ra (osteotrópico, análogo do cálcio) acumulou-se no esqueleto, gerando 'radium jaw' e osteossarcoma.",
      "Está incorreta: as colisões de partículas alfa são eventos microscópicos subatómicos inaudíveis ao ouvido humano; a doença foi um cancro ósseo radioinduzido crónico.",
      "Está incorreta: o episódio estabeleceu as primeiras normas modernas de proteção radiológica ocupacional e limites de dose admissíveis no mundo laboral."
    ],
    "nursingApplication": "Este desastre histórico originou as primeiras leis mundiais de higiene e proteção radiológica ocupacional para trabalhadores e enfermeiros."
  },
  {
    "id": 7088,
    "topicId": 7,
    "question": "Na prestação de cuidados de enfermagem e proteção radiológica em serviços com doentes radioativos, como se aplica na prática o conceito de 'Rádio-226 e o caso histórico das operárias dos mostradores de relógio (Radium Girls)'?",
    "options": [
      "O caso ensinou à enfermagem o perigo da ingestão de radionuclídeos 'osteotrópicos' (que se fixam no osso), fundamentando os protocolos rigorosos de assepsia e proteção de radiofármacos.",
      "A lição histórica levou os hospitais a banir o uso de relógios de pulso pelos enfermeiros para evitar a proliferação de bactérias resistentes na pele dos punhos.",
      "O caso das operárias comprovou que os radiofármacos administrados aos doentes se transmitem por via aérea para as mãos dos profissionais que aplicam os pensos.",
      "A experiência histórica demonstrou a necessidade de mergulhar os frascos de radioisótopos em álcool absoluto antes de cada administração intravenosa na enfermaria."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para Rádio-226 e o caso histórico das operárias dos mostradores de relógio (Radium Girls) baseia-se no princípio: Este desastre histórico originou as primeiras leis mundiais de higiene e proteção radiológica ocupacional para trabalhadores e enfermeiros. Esta atuação rigorosa garante a segurança do profissional, do utente e da comunidade.",
    "distractorAnalysis": [
      "Está incorreta: radionuclídeos 'bone-seekers' (como ²²⁶Ra, ⁸⁹Sr, ²²³Ra) têm semivida biológica longa no esqueleto; a proteção radiológica exige técnica fechada sem contacto com mucosas.",
      "Está incorreta: a remoção de relógios e joias na enfermagem destina-se ao controlo de infeção hospitalar microbiológica e não à proteção contra contaminação por rádio do século passado.",
      "Está incorreta: radiofármacos não voláteis não se propagam pelo ar como gás respiratório; a contaminação ocorre por contacto físico com líquidos biológicos ou soluções."
    ],
    "nursingApplication": "Este desastre histórico originou as primeiras leis mundiais de higiene e proteção radiológica ocupacional para trabalhadores e enfermeiros."
  },
  {
    "id": 7089,
    "topicId": 7,
    "question": "Um enfermeiro analisa o poder de penetração, mecanismos de atenuação e riscos biológicos em 'Rádio-226 e o caso histórico das operárias dos mostradores de relógio (Radium Girls)'. Qual das seguintes afirmações expressa a correlação biofísica correta?",
    "options": [
      "O Rádio-226 liga-se unicamente às fibras de colagénio tipo I da cartilagem articular através de pontes de dissulfeto permanentes que resistem à ação enzimática tecidual.",
      "Por ser do mesmo grupo 2 da tabela periódica que o Cálcio, o Rádio é reconhecido pelos osteoblastos como cálcio e incorporado na matriz de hidroxiapatite do osso mineralizado.",
      "A deposição óssea do rádio resulta da precipitação mecânica de cristais de cloreto de rádio insolúveis provocada pela acidez do líquido sinovial articular.",
      "O Rádio não se fixa nos ossos, sendo eliminado integralmente pelo suor cutâneo nas primeiras duas horas após a ingestão de soluções aquosas contaminadas."
    ],
    "correctIndex": 1,
    "explanation": "A análise biofísica exata demonstra que A emissão alfa contínua na medula óssea causou necrose óssea grave da mandíbula, aplasia medular fatal e osteossarcomas devastadores nas operárias que lambiam os pincéis com tinta radioluminescente. O domínio destes conhecimentos permite ao enfermeiro fundamentar a escolha de blindagens e protocolos de segurança.",
    "distractorAnalysis": [
      "Está incorreta: os metais alcalino-terrosos (Ca, Sr, Ba, Ra) possuem valência +2 e raios iónicos comparáveis, substituindo o cálcio nos cristais de hidroxiapatite [Ca₁₀(PO₄)₆(OH)₂].",
      "Está incorreta: o rádio deposita-se na fase mineral inorgânica do osso e não nas fibras proteicas de colagénio ou cartilagem hialina.",
      "Está incorreta: o rádio permanece retido no esqueleto com semivida biológica de muitos anos, irradiando a medula óssea hematopoiética e o tecido ósseo continuamente."
    ],
    "nursingApplication": "Este desastre histórico originou as primeiras leis mundiais de higiene e proteção radiológica ocupacional para trabalhadores e enfermeiros."
  },
  {
    "id": 7090,
    "topicId": 7,
    "question": "Na física das radiações nucleares (partículas alfa, beta e fotões gama) aplicada à prática clínica, em relação a 'Polónio-210 (²¹⁰Po) e toxicidade celular fulminante', qual é a fundamentação científica correta?",
    "options": [
      "O Polónio-210 é um gás asfixiante que reage com o oxigénio atmosférico gerando chamas que queimam a pele dos profissionais de saúde a distâncias superiores a dez metros.",
      "A toxicidade do Polónio-210 provém da sua capacidade de neutralizar a gravidade terrestre no corpo da vítima, fazendo com que o indivíduo flutue descontroladamente no ar.",
      "O ²¹⁰Po é um emissor alfa puro de alta energia (5,3 MeV) com semivida física de 138 dias e altíssima atividade específica (166 TBq/g), sendo fatal em quantidades de microgramas.",
      "O Polónio-210 é um elemento químico estável e inócuo utilizado habitualmente como corante alimentar em cápsulas de medicação oral nas farmácias hospitalares."
    ],
    "correctIndex": 2,
    "explanation": "Em física nuclear e radioproteção clínica, Polónio-210 (²¹⁰Po) e toxicidade celular fulminante explica-se pelo facto de que o ²¹⁰Po é um emissor alfa puro de alta atividade específica: uma quantidade invisível de escassos microgramas ingerida na comida ou bebida causa a Síndrome Aguda de Radiação letal com falência multiorgânica. Ao ser absorvido pelo trato gastrointestinal, liga-se a proteínas teciduais e irradia a medula óssea, fígado e rins sem emitir quase nenhuma radiação gama detetável externamente por contadores Geiger comuns.",
    "distractorAnalysis": [
      "Está incorreta: a atividade específica colossal do ²¹⁰Po significa que um milionésimo de grama administrado internamente deposita centenas de Gray em órgãos vitais, causando morte rápida.",
      "Está incorreta: o Polónio-210 é um metal sólido (não um gás nem chamas macroscópicas); o seu perigo é radiobiológico por emissão alfa de curto alcance e alto LET.",
      "Está incorreta: não anula a gravidade nem é um aditivo farmacêutico inofensivo; é uma das substâncias radiotóxicas mais letais alguma vez identificadas pela ciência."
    ],
    "nursingApplication": "O enfermeiro compreende que a contaminação por emissores alfa puros pode passar despercebida a sensores de radiação externos comuns que procuram fotões gama."
  },
  {
    "id": 7091,
    "topicId": 7,
    "question": "Na prestação de cuidados de enfermagem e proteção radiológica em serviços com doentes radioativos, como se aplica na prática o conceito de 'Polónio-210 (²¹⁰Po) e toxicidade celular fulminante'?",
    "options": [
      "O enfermeiro pode detetar a presença de Polónio-210 no doente observando o brilho verde fosforescente que os olhos da vítima emitem na penumbra da enfermaria.",
      "O Polónio-210 faz com que a temperatura do quarto desça para zero graus centígrados em escassos dez segundos devido à absorção contínua de fotões térmicos de calor.",
      "A exposição ao Polónio-210 exige que a equipa clínica administre antibióticos antifúngicos por via inalatória a cada trinta minutos durante duas semanas.",
      "Como o ²¹⁰Po é emissor alfa puro (sem fotões gama apreciáveis), a vítima não emite radiação penetrante externa, sendo a contaminação indetetável por detetores gama comuns à distância."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para Polónio-210 (²¹⁰Po) e toxicidade celular fulminante baseia-se no princípio: O enfermeiro compreende que a contaminação por emissores alfa puros pode passar despercebida a sensores de radiação externos comuns que procuram fotões gama. Esta atuação rigorosa garante a segurança do profissional, do utente e da comunidade.",
    "distractorAnalysis": [
      "Está incorreta: por ser emissor alfa puro, os monitores de radiação gama usuais (como pórticos ou detetores de cintilação externos) não apitam; a confirmação exige espectrometria alfa de urina/fezes.",
      "Está incorreta: a contaminação interna por polónio não causa luminescência ocular visível nem arrefecimento ambiental macroscópico na sala de internamento.",
      "Está incorreta: o quadro clínico é de Síndrome Aguda da Radiação (SAR: falência gastrointestinal e medular fulminante) e não infeção fúngica; exige suporte vital intensivo e quelação."
    ],
    "nursingApplication": "O enfermeiro compreende que a contaminação por emissores alfa puros pode passar despercebida a sensores de radiação externos comuns que procuram fotões gama."
  },
  {
    "id": 7092,
    "topicId": 7,
    "question": "Um enfermeiro analisa o poder de penetração, mecanismos de atenuação e riscos biológicos em 'Polónio-210 (²¹⁰Po) e toxicidade celular fulminante'. Qual das seguintes afirmações expressa a correlação biofísica correta?",
    "options": [
      "A dose letal de ²¹⁰Po no ser humano é de apenas cerca de 1 a 3 microgramas, depositando dezenas de Gray na medula óssea, fígado e rins, culminando em Síndrome Aguda da Radiação.",
      "A dose letal de Polónio-210 é de cerca de dez quilos de material sólido ingerido com as refeições diárias na cantina do hospital durante três meses consecutivos.",
      "O Polónio-210 dissipa a sua energia exclusivamente através da formação de cristais de açúcar que obstruem mecanicamente os uréteres do doente internado.",
      "O mecanismo lesivo do polónio decorre da quebra mecânica das hemácias provocada pelo atrito da sua massa bariónica pesada na válvula mitral do coração."
    ],
    "correctIndex": 0,
    "explanation": "A análise biofísica exata demonstra que Ao ser absorvido pelo trato gastrointestinal, liga-se a proteínas teciduais e irradia a medula óssea, fígado e rins sem emitir quase nenhuma radiação gama detetável externamente por contadores Geiger comuns. O domínio destes conhecimentos permite ao enfermeiro fundamentar a escolha de blindagens e protocolos de segurança.",
    "distractorAnalysis": [
      "Está incorreta: 1 micrograma de ²¹⁰Po (~166 MBq) ingerido ou absorvido no sangue causa destruição celular massiva em órgãos de depósito (rins, fígado, medula), levando a óbito em semanas.",
      "Está incorreta: a letalidade opera na escala de microgramas (10⁻⁶ g) e não quilogramas; a toxicidade não é química clássica mas sim estritamente radiológica por alto LET.",
      "Está incorreta: a morte decorre de falência multiorgânica por quebras cromossómicas letais e ablação celular, e não de cristais de açúcar ou atrito valvular mecânico."
    ],
    "nursingApplication": "O enfermeiro compreende que a contaminação por emissores alfa puros pode passar despercebida a sensores de radiação externos comuns que procuram fotões gama."
  },
  {
    "id": 7093,
    "topicId": 7,
    "question": "Na física das radiações nucleares (partículas alfa, beta e fotões gama) aplicada à prática clínica, em relação a 'Rádio-223 (Xofigo) em terapia dirigida de metástases ósseas', qual é a fundamentação científica correta?",
    "options": [
      "O Rádio-223 é um emissor de fotões gama de baixa energia utilizado para dissolver placas ateromatosas nas artérias carótidas de doentes idosos hospitalizados.",
      "O ²²³Ra é um emissor alfa utilizado em cloreto (Xofigo) que mimetiza o cálcio, fixando-se em metástases ósseas osteoblásticas e destruindo células tumorais com alfas de curto alcance.",
      "O radiofármaco Xofigo atua congelando o líquido sinovial das articulações da anca a temperaturas criogénicas para anestesiar as terminações nervosas do periósteo.",
      "O ²²³Ra cura o cancro da próstata através da atração magnética contínua exercida sobre as células tumorais que são puxadas para fora do corpo através da pele."
    ],
    "correctIndex": 1,
    "explanation": "Em física nuclear e radioproteção clínica, Rádio-223 (Xofigo) em terapia dirigida de metástases ósseas explica-se pelo facto de que o Dicloreto de Rádio-223 é o primeiro emissor alfa aprovado para tratamento sistémico em oncologia, utilizado em homens com cancro da próstata com metástases ósseas dolorosas. Por mimetizar o cálcio, liga-se nas áreas de alta remodelação óssea tumoral perimetastática, onde as partículas alfa quebram o DNA das células tumorais num raio de apenas 2 a 10 células, poupando a medula óssea adjacente.",
    "distractorAnalysis": [
      "Está incorreta: como metal alcalino-terroso análogo ao cálcio, o ²²³Ra deposita-se nas áreas de remodelação óssea peritumoral; as alfas quebram o ADN tumoral com alcance <100 µm, poupando a medula.",
      "Está incorreta: o Rádio-223 decai emitindo 4 partículas alfa na sua cadeia; a sua indicação aprovada é o cancro da próstata resistente à castração com metástases ósseas dolorosas.",
      "Está incorreta: o Xofigo não é crioterapia nem magnetismo; é radioterapia alfa dirigida administrada por via endovenosa lenta (ciclos mensais em ambulatório)."
    ],
    "nursingApplication": "O enfermeiro orienta o doente para a higiene rigorosa após a micção e dejeção durante 7 dias (fechar a tampa da sanita e descarregar 2 vezes), pois o ²²³Ra é eliminado maioritariamente pelas fezes."
  },
  {
    "id": 7094,
    "topicId": 7,
    "question": "Na prestação de cuidados de enfermagem e proteção radiológica em serviços com doentes radioativos, como se aplica na prática o conceito de 'Rádio-223 (Xofigo) em terapia dirigida de metástases ósseas'?",
    "options": [
      "A excreção do Rádio-223 é cem por cento pulmonar, obrigando a equipa de enfermagem a ligar o doente a ventiladores mecânicos durante três semanas consecutivas.",
      "Os doentes tratados com Rádio-223 devem permanecer em isolamento em quarto de chumbo durante um mês sob risco de contaminação gama de todos os corredores.",
      "Como a excreção do ²²³Ra ocorre predominantemente por via fecal através do intestino (~95%), o enfermeiro deve orientar cuidados rigorosos na higiene da sanita e resíduos fecais.",
      "O enfermeiro deve orientar o doente a evitar a ingestão de água mineral durante cinco dias para impedir a ativação das partículas alfa na corrente sanguínea venosa."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para Rádio-223 (Xofigo) em terapia dirigida de metástases ósseas baseia-se no princípio: O enfermeiro orienta o doente para a higiene rigorosa após a micção e dejeção durante 7 dias (fechar a tampa da sanita e descarregar 2 vezes), pois o ²²³Ra é eliminado maioritariamente pelas fezes. Esta atuação rigorosa garante a segurança do profissional, do utente e da comunidade.",
    "distractorAnalysis": [
      "Está incorreta: o rádio é excretado quase na totalidade pelo trato gastrointestinal nas fezes; a urina tem baixa atividade (~5%); luvas descartáveis e descarga sanitária dupla são cruciais.",
      "Está incorreta: o rádio não é volátil e não é exalado pelos pulmões; como a emissão externa gama é ínfima, o tratamento faz-se em regime de ambulatório (sem internamento em isolamento).",
      "Está incorreta: os doentes recebem a injeção em 1 minuto e vão para casa; a hidratação oral regular é incentivada para promover o trânsito intestinal e a depuração renal."
    ],
    "nursingApplication": "O enfermeiro orienta o doente para a higiene rigorosa após a micção e dejeção durante 7 dias (fechar a tampa da sanita e descarregar 2 vezes), pois o ²²³Ra é eliminado maioritariamente pelas fezes."
  },
  {
    "id": 7095,
    "topicId": 7,
    "question": "Um enfermeiro analisa o poder de penetração, mecanismos de atenuação e riscos biológicos em 'Rádio-223 (Xofigo) em terapia dirigida de metástases ósseas'. Qual das seguintes afirmações expressa a correlação biofísica correta?",
    "options": [
      "O Rádio-223 destrói a totalidade das células da medula óssea em todos os doentes tratados, exigindo transplante imediato de medula nas primeiras vinte e quatro horas.",
      "As partículas alfa do ²²³Ra atravessam livremente o corpo do doente e irradiam os técnicos de radiologia sentados na sala de comando do piso superior.",
      "A eficácia do Xofigo deve-se à absorção de todos os fotões de luz natural que entram pelas janelas da enfermaria médica durante o período diurno de repouso.",
      "A curta trajetória das alfas do ²²³Ra (<100 micrómetros) limita a dose letal à interface estroma-tumor, preservando a celularidade hematopoiética da medula óssea adjacente."
    ],
    "correctIndex": 3,
    "explanation": "A análise biofísica exata demonstra que Por mimetizar o cálcio, liga-se nas áreas de alta remodelação óssea tumoral perimetastática, onde as partículas alfa quebram o DNA das células tumorais num raio de apenas 2 a 10 células, poupando a medula óssea adjacente. O domínio destes conhecimentos permite ao enfermeiro fundamentar a escolha de blindagens e protocolos de segurança.",
    "distractorAnalysis": [
      "Está incorreta: em comparação com emissores beta (como ⁸⁹Sr com alcance de até 7 mm que causa mielossupressão severa), o alcance de <0,1 mm do ²²³Ra induz mínima toxicidade medular.",
      "Está incorreta: a mielotoxicidade do ²²³Ra é baixa a moderada (anemia, trombocitopenia transitórias); não causa ablação medular total nem requer transplante de progenitores hematopoiéticos.",
      "Está incorreta: partículas alfa não saem do corpo do doente; o alcance nos tecidos é estritamente microscópico; luz ambiente não influencia decaimentos radioativos nucleares."
    ],
    "nursingApplication": "O enfermeiro orienta o doente para a higiene rigorosa após a micção e dejeção durante 7 dias (fechar a tampa da sanita e descarregar 2 vezes), pois o ²²³Ra é eliminado maioritariamente pelas fezes."
  },
  {
    "id": 7096,
    "topicId": 7,
    "question": "Na física das radiações nucleares (partículas alfa, beta e fotões gama) aplicada à prática clínica, em relação a 'mecanismo nuclear do decaimento Beta Menos (β⁻)', qual é a fundamentação científica correta?",
    "options": [
      "No decaimento β⁻, um neutrão do núcleo transmuta-se num protão com emissão de um eletrão rápido e de um antineutrino do eletrão (n -> p + e⁻ + ν̄_e), mediado pela interação fraca.",
      "No decaimento beta menos, dois protões fundem-se no centro do átomo gerando um núcleo de deutério com emissão de ondas de calor térmico para os tecidos vizinhos.",
      "O processo beta menos consiste na absorção de um eletrão da órbita externa que se combina com um protão para formar um novo neutrão sem libertação de energia.",
      "O decaimento β⁻ decorre da rotação mecânica rápida do núcleo atómico que expulsa fotões de luz infravermelha em direção aos vasos sanguíneos periféricos."
    ],
    "correctIndex": 0,
    "explanation": "Em física nuclear e radioproteção clínica, mecanismo nuclear do decaimento Beta Menos (β⁻) explica-se pelo facto de que ocorre em núcleos instáveis com excesso de neutrões, onde um neutrão transforma-se espontaneamente num protão, ejetando um eletrão de alta velocidade (partícula $\\beta^-$) e um antineutrino do eletrão ($n \\rightarrow p + \\beta^- + \bar{\nu}_e$). O número atómico (Z) aumenta 1 unidade ($Z \\rightarrow Z+1$) e o número de massa (A) mantém-se rigorosamente invariante (decaimento isobárico).",
    "distractorAnalysis": [
      "Está incorreta: mediado pelo bosão W⁻ da força fraca, um quark down (carga -1/3) converte-se num quark up (carga +2/3): d -> u + e⁻ + ν̄_e; o neutrão vira protão, aumentando Z em 1.",
      "Está incorreta: o decaimento beta menos é um processo subatómico espontâneo de núcleos instáveis com excesso de neutrões, não envolvendo fusão nuclear de protões.",
      "Está incorreta: a absorção de um eletrão orbital interno com conversão de protão em neutrão é a Captura Eletrónica (CE) e não o decaimento beta menos."
    ],
    "nursingApplication": "O Iodo-131 ($^{131}_{53}\\text{I}$) decai por emissão $\\beta^-$ com semivida de 8 dias para o isóbaro estável Xénon-131 ($^{131}_{54}\\text{Xe}$)."
  },
  {
    "id": 7097,
    "topicId": 7,
    "question": "Na prestação de cuidados de enfermagem e proteção radiológica em serviços com doentes radioativos, como se aplica na prática o conceito de 'mecanismo nuclear do decaimento Beta Menos (β⁻)'?",
    "options": [
      "A emissão de eletrões do núcleo atómico permite ao enfermeiro carregar as baterias dos telemóveis do serviço hospitalar ligando fios de cobre ao cateter do doente.",
      "Emissores β⁻ (como ¹³¹I, ¹⁷⁷Lu e ⁹⁰Y) são utilizados em terapia oncológica dirigida porque os eletrões rápidos depositam dose ionizante letal localizada em poucos milímetros.",
      "O decaimento beta menos obriga a equipa a administrar choques elétricos no peito do doente a cada meia hora para neutralizar a carga elétrica negativa dos eletrões.",
      "A radiação beta menos dissipa a sua energia tornando os doentes fluorescentes no escuro, permitindo a sua localização rápida sem iluminação artificial no quarto."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para mecanismo nuclear do decaimento Beta Menos (β⁻) baseia-se no princípio: O Iodo-131 ($^{131}_{53}\\text{I}$) decai por emissão $\\beta^-$ com semivida de 8 dias para o isóbaro estável Xénon-131 ($^{131}_{54}\\text{Xe}$). Esta atuação rigorosa garante a segurança do profissional, do utente e da comunidade.",
    "distractorAnalysis": [
      "Está incorreta: o alcance milimétrico dos eletrões beta teciduais (1 a 10 mm) é perfeitamente calibrado para esterilizar micro e macrometástases tumorais com alta conformidade.",
      "Está incorreta: a corrente elétrica gerada por radiofármacos é microscópica (picoamperes) e dissipa-se inofensivamente a nível atómico nos tecidos biológicos condutores.",
      "Está incorreta: os eletrões beta ionizam os tecidos sem originar choques macroscópicos nem exigem desfibrilhação; não tornam o corpo humano fluorescente no escuro."
    ],
    "nursingApplication": "O Iodo-131 ($^{131}_{53}\\text{I}$) decai por emissão $\\beta^-$ com semivida de 8 dias para o isóbaro estável Xénon-131 ($^{131}_{54}\\text{Xe}$)."
  },
  {
    "id": 7098,
    "topicId": 7,
    "question": "Um enfermeiro analisa o poder de penetração, mecanismos de atenuação e riscos biológicos em 'mecanismo nuclear do decaimento Beta Menos (β⁻)'. Qual das seguintes afirmações expressa a correlação biofísica correta?",
    "options": [
      "Na emissão beta menos tanto a massa atómica como o número de protões diminuem para metade em resultado da conversão de matéria nuclear em fotões visíveis.",
      "O número atómico Z diminui obrigatoriamente em duas unidades no decaimento beta menos devido à ejeção simultânea de dois eletrões emparelhados da eletrosfera.",
      "Na transmutação beta menos o número de massa A permanece constante e o número atómico aumenta em um (A constante, Z -> Z + 1), transformando o átomo no elemento químico seguinte.",
      "A lei de conservação da carga elétrica total é violada no decaimento beta menos pela criação de um eletrão sem a presença de partículas de carga positiva."
    ],
    "correctIndex": 2,
    "explanation": "A análise biofísica exata demonstra que O número atómico (Z) aumenta 1 unidade ($Z \\rightarrow Z+1$) e o número de massa (A) mantém-se rigorosamente invariante (decaimento isobárico). O domínio destes conhecimentos permite ao enfermeiro fundamentar a escolha de blindagens e protocolos de segurança.",
    "distractorAnalysis": [
      "Está incorreta: o decaimento beta é uma transição isobárica: A permanece invariante (ex: ¹³¹₅₃I -> ¹³¹₅₄Xe + e⁻ + ν̄_e); o neutrão vira protão, pelo que Z sobe de 53 para 54.",
      "Está incorreta: nucleões e carga conservam-se estritamente; Z não diminui para metade nem diminui em 2 (Z diminui em 2 no decaimento alfa).",
      "Está incorreta: a carga conserva-se: carga inicial do neutrão = 0; carga final = protão (+1) + eletrão (-1) + antineutrino (0) = 0."
    ],
    "nursingApplication": "O Iodo-131 ($^{131}_{53}\\text{I}$) decai por emissão $\\beta^-$ com semivida de 8 dias para o isóbaro estável Xénon-131 ($^{131}_{54}\\text{Xe}$)."
  },
  {
    "id": 7099,
    "topicId": 7,
    "question": "Na física das radiações nucleares (partículas alfa, beta e fotões gama) aplicada à prática clínica, em relação a 'espetro contínuo de energia da radiação beta e o papel do neutrino', qual é a fundamentação científica correta?",
    "options": [
      "O espetro contínuo de energia beta decorre da fricção dos eletrões contra as moléculas de água do ar ambiente durante a travessia da agulha de injeção hospitalar.",
      "As partículas beta são monoenergéticas e têm todas rigorosamente a mesma energia cinética fixa porque o neutrino não transporta qualquer fração de energia no decaimento.",
      "A variação contínua de energia na radiação beta resulta do arrefecimento do núcleo atómico por convecção de gases nobres a temperaturas criogénicas na câmara quente.",
      "A energia disponível Q_β é partilhada continuamente entre a partícula beta e o antineutrino (E_β + E_ν = Q_β), originando um espetro contínuo de energias com média E_médio ≈ E_max / 3."
    ],
    "correctIndex": 3,
    "explanation": "Em física nuclear e radioproteção clínica, espetro contínuo de energia da radiação beta e o papel do neutrino explica-se pelo facto de que a energia total libertada na transição nuclear ($E_{max}$ ou valor Q) é partilhada de forma variável e contínua entre a partícula beta e o antineutrino. A partícula beta pode emergir com qualquer energia cinética desde zero até ao valor máximo $E_{max}$, sendo a sua energia média típica cerca de um terço do máximo ($E_{média} \\approx E_{max} / 3$).",
    "distractorAnalysis": [
      "Está incorreta: a conservação de energia e momento num decaimento de 3 corpos reparte a energia Q estatisticamente entre o eletrão e o antineutrino, resultando num espetro contínuo com E_médio ≈ 1/3 E_max.",
      "Está incorreta: a energia contínua é um facto intranuclear comprovado e não atrito externo com o ar ou a agulha de punção venosa.",
      "Está incorreta: o neutrino transporta energia cinética e momento angular (spin 1/2); se a emissão fosse só do eletrão (2 corpos), a beta seria monoenergética, o que foi refutado nos anos 1920."
    ],
    "nursingApplication": "A necessidade de explicar esta partilha de energia contínua sem violar a conservação de energia levou Wolfgang Pauli a postular a existência do neutrino em 1930."
  },
  {
    "id": 7100,
    "topicId": 7,
    "question": "Na prestação de cuidados de enfermagem e proteção radiológica em serviços com doentes radioativos, como se aplica na prática o conceito de 'espetro contínuo de energia da radiação beta e o papel do neutrino'?",
    "options": [
      "Nos cálculos dosimétricos clínicos de radioterapia com emissores beta, utiliza-se a energia média (E_médio ≈ E_max / 3) para estimar com precisão a dose absorvida pelo tecido.",
      "A existência do espetro contínuo obriga o enfermeiro a administrar a dose com seringas de aço inoxidável aquecidas a oitenta graus centígrados na cabeceira.",
      "Os neutrinos emitidos no decaimento beta colidem fortemente com o corpo dos profissionais de saúde, exigindo o uso de coletes de chumbo de dez centímetros de espessura.",
      "A energia média das partículas beta faz com que os doentes submetidos a radioisótopos emitam feixes contínuos de luz visível amarela através das pontas dos dedos."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para espetro contínuo de energia da radiação beta e o papel do neutrino baseia-se no princípio: A necessidade de explicar esta partilha de energia contínua sem violar a conservação de energia levou Wolfgang Pauli a postular a existência do neutrino em 1930. Esta atuação rigorosa garante a segurança do profissional, do utente e da comunidade.",
    "distractorAnalysis": [
      "Está incorreta: para dosimetria interna (formalismo MIRD), a energia cumulativa depositada depende de E_médio (ex: no ⁹⁰Y E_max = 2,28 MeV mas E_médio ≈ 0,93 MeV).",
      "Está incorreta: neutrinos interagem quase exclusivamente pela força fraca, atravessando a Terra ou o corpo humano sem depositar qualquer dose ionizante mensurável; chumbo não os detém.",
      "Está incorreta: seringas hospitalares são plásticas estéreis à temperatura ambiente com proteção de acrílico/tungsténio; a radiação beta não gera feixes de luz amarela."
    ],
    "nursingApplication": "A necessidade de explicar esta partilha de energia contínua sem violar a conservação de energia levou Wolfgang Pauli a postular a existência do neutrino em 1930."
  },
  {
    "id": 7101,
    "topicId": 7,
    "question": "Um enfermeiro analisa o poder de penetração, mecanismos de atenuação e riscos biológicos em 'espetro contínuo de energia da radiação beta e o papel do neutrino'. Qual das seguintes afirmações expressa a correlação biofísica correta?",
    "options": [
      "O espetro contínuo é provocado pela absorção de fotões de luz ambiente que entram através dos recipientes transparentes de vidro durante a preparação farmacêutica.",
      "A forma contínua do espetro beta (com máximo E_max e média E_max/3) decorre da emissão simultânea de um antineutrino que partilha a energia cinética total disponível no processo.",
      "A emissão de eletrões do núcleo atómico é monoenergética em todos os radioisótopos conhecidos, sendo a variação observada um mero erro técnico dos detetores de laboratório.",
      "A partilha de energia com o neutrino decorre da fricção mecânica das partículas beta contra o revestimento plástico interno dos cateteres venosos periféricos dos doentes."
    ],
    "correctIndex": 1,
    "explanation": "A análise biofísica exata demonstra que A partícula beta pode emergir com qualquer energia cinética desde zero até ao valor máximo $E_{max}$, sendo a sua energia média típica cerca de um terço do máximo ($E_{média} \\approx E_{max} / 3$). O domínio destes conhecimentos permite ao enfermeiro fundamentar a escolha de blindagens e protocolos de segurança.",
    "distractorAnalysis": [
      "Está incorreta: o decaimento de 3 corpos (filho, e⁻, ν̄_e) reparte estatisticamente a energia Q; o espetro é contínuo desde zero até E_max, com média em cerca de um terço de E_max.",
      "Está incorreta: o espetro beta decorre da mecânica quântica intranuclear e independe da iluminação exterior ou do tipo de recipiente de vidro utilizado.",
      "Está incorreta: a emissão beta menos é intrinsecamente contínua (comprovado por Chadwick em 1914); apenas a conversão interna ejeta eletrões monoenergéticos."
    ],
    "nursingApplication": "A necessidade de explicar esta partilha de energia contínua sem violar a conservação de energia levou Wolfgang Pauli a postular a existência do neutrino em 1930."
  },
  {
    "id": 7102,
    "topicId": 7,
    "question": "Na física das radiações nucleares (partículas alfa, beta e fotões gama) aplicada à prática clínica, em relação a 'poder de penetração moderado da partícula beta nos tecidos', qual é a fundamentação científica correta?",
    "options": [
      "As partículas beta atravessam dezenas de metros de chumbo maciço sem sofrer qualquer desvio, comportando-se como radiação cósmica ultrapenetrante nos hospitais.",
      "O poder de penetração da partícula beta é rigorosamente nulo na matéria viva, sendo totalmente bloqueada pela camada de ar que circunda a pele do corpo humano.",
      "O alcance de partículas beta em tecidos biológicos é de alguns milímetros a cerca de um centímetro (consoante a energia), sendo facilmente travadas por placas de plástico rígido.",
      "O alcance da radiação beta varia com o humor do doente, aumentando dez vezes sempre que o utente manifesta sintomas clínicos de ansiedade pré-operatória."
    ],
    "correctIndex": 2,
    "explanation": "Em física nuclear e radioproteção clínica, poder de penetração moderado da partícula beta nos tecidos explica-se pelo facto de que sendo um eletrão leve com carga negativa (-1e), a partícula beta possui menor LET do que a partícula alfa, sofrendo múltiplos desvios em ziguezague. O seu alcance nos tecidos biológicos varia entre alguns milímetros e 1 a 2 centímetros, dependendo da sua energia máxima ($E_{max}$).",
    "distractorAnalysis": [
      "Está incorreta: a regra prática dita que o alcance máximo em tecido mole é R_max (mm) ≈ 5 × E_max (MeV); para ¹³¹I (0,6 MeV) é ~2 mm e para ⁹⁰Y (2,28 MeV) atinge ~11 mm.",
      "Está incorreta: eletrões são partículas leves carregadas com alto stopping power em comparação com fotões; são travados por milímetros de acrílico ou alumínio.",
      "Está incorreta: as partículas beta percorrem metros no ar e milímetros nos tecidos vivos; o seu alcance físico é uma propriedade dosimétrica independente do estado emocional."
    ],
    "nursingApplication": "As partículas $\\beta^-$ do Iodo-131 ($E_{max} = 0,6$ MeV) têm alcance médio de apenas 0,8 mm na tiroide, destruindo os folículos tumorais da tiroide sem irradiar a traqueia ou pele do pescoço."
  },
  {
    "id": 7103,
    "topicId": 7,
    "question": "Na prestação de cuidados de enfermagem e proteção radiológica em serviços com doentes radioativos, como se aplica na prática o conceito de 'poder de penetração moderado da partícula beta nos tecidos'?",
    "options": [
      "A penetração moderada das partículas beta autoriza os profissionais a descartar agulhas contaminadas nos recipientes de resíduos de papel de escritório comum.",
      "A equipa de enfermagem deve mergulhar os frascos de radiofármacos em água muito aquecida durante meia hora antes da administração para esterilizar a radiação beta emitida.",
      "O alcance das partículas beta faz com que os doentes devam ser mantidos amarrados à cama durante duas semanas para evitar a queda mecânica por perda de equilíbrio.",
      "O alcance milimétrico em tecidos exige que o enfermeiro utilize protetores de seringa e evite o contacto direto da pele com ampolas para prevenir radiodermites nas mãos."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para poder de penetração moderado da partícula beta nos tecidos baseia-se no princípio: As partículas $\\beta^-$ do Iodo-131 ($E_{max} = 0,6$ MeV) têm alcance médio de apenas 0,8 mm na tiroide, destruindo os folículos tumorais da tiroide sem irradiar a traqueia ou pele do pescoço. Esta atuação rigorosa garante a segurança do profissional, do utente e da comunidade.",
    "distractorAnalysis": [
      "Está incorreta: a manipulação desprotegida de emissores beta expõe a pele das extremidades a doses superficiais severas que podem causar eritema e necrose (radiodermite).",
      "Está incorreta: materiais com radioisótopos são resíduos radioativos perigosos e perfurocortantes, exigindo contentores rígidos específicos e decaimento em câmara de resíduos.",
      "Está incorreta: esterilizar por água quente sob pressão não afeta a taxa de decaimento nuclear; doentes mantêm autonomia motora normal sem imobilizações forçadas."
    ],
    "nursingApplication": "As partículas $\\beta^-$ do Iodo-131 ($E_{max} = 0,6$ MeV) têm alcance médio de apenas 0,8 mm na tiroide, destruindo os folículos tumorais da tiroide sem irradiar a traqueia ou pele do pescoço."
  },
  {
    "id": 7104,
    "topicId": 7,
    "question": "Um enfermeiro analisa o poder de penetração, mecanismos de atenuação e riscos biológicos em 'poder de penetração moderado da partícula beta nos tecidos'. Qual das seguintes afirmações expressa a correlação biofísica correta?",
    "options": [
      "A perda de energia das partículas beta nos tecidos ocorre predominantemente por colisões coulombianas inelásticas com os eletrões atómicos, gerando ionizações e excitações.",
      "As partículas beta perdem energia nos tecidos através da emissão espontânea de feixes contínuos de luz laser visível que aquecem a circulação arterial periférica.",
      "A desaceleração dos eletrões nos tecidos ocorre exclusivamente por atrito gravitacional contra os núcleos pesados de ferro presentes nos glóbulos vermelhos.",
      "A atenuação de partículas beta em tecidos moles é estritamente independente da sua densidade de massa, sendo idêntica no ar rarefeito e no osso cortical denso."
    ],
    "correctIndex": 0,
    "explanation": "A análise biofísica exata demonstra que O seu alcance nos tecidos biológicos varia entre alguns milímetros e 1 a 2 centímetros, dependendo da sua energia máxima ($E_{max}$). O domínio destes conhecimentos permite ao enfermeiro fundamentar a escolha de blindagens e protocolos de segurança.",
    "distractorAnalysis": [
      "Está incorreta: a fórmula de Bethe-Bloch para eletrões demonstra que a desaceleração em meios biológicos de baixo Z (água, tecido mole) ocorre por perdas colisionais ionizantes.",
      "Está incorreta: não há emissão de raios laser teciduais; a energia cinética dissipa-se em calor infinitesimal e danos moleculares por ionização e quebra de ligações.",
      "Está incorreta: a força gravitacional é totalmente desprezável face às forças coulombianas; o alcance é inversamente proporcional à densidade física do tecido (g/cm³)."
    ],
    "nursingApplication": "As partículas $\\beta^-$ do Iodo-131 ($E_{max} = 0,6$ MeV) têm alcance médio de apenas 0,8 mm na tiroide, destruindo os folículos tumorais da tiroide sem irradiar a traqueia ou pele do pescoço."
  },
  {
    "id": 7105,
    "topicId": 7,
    "question": "Na física das radiações nucleares (partículas alfa, beta e fotões gama) aplicada à prática clínica, em relação a 'aplicação terapêutica dos emissores beta em radioterapia metabólica', qual é a fundamentação científica correta?",
    "options": [
      "Os emissores beta atuam congelando os tumores através da absorção de calor das artérias vizinhas, provocando a mumificação instantânea do tecido canceroso.",
      "Os emissores beta permitem o 'efeito de fogo cruzado' (cross-fire), onde eletrões emitidos por células que captaram o radiofármaco destroem células tumorais vizinhas não-marcadas.",
      "A aplicação terapêutica baseia-se na capacidade de as partículas beta transformarem os tumores em tecidos cartilaginosos benignos com semivida de trinta anos.",
      "Os radiofármacos beta são administrados unicamente através de pomadas dérmicas aplicadas sobre a pele do couro cabeludo em todas as doenças oncológicas humanas."
    ],
    "correctIndex": 1,
    "explanation": "Em física nuclear e radioproteção clínica, aplicação terapêutica dos emissores beta em radioterapia metabólica explica-se pelo facto de que o alcance milimétrico das partículas $\\beta^-$ nos tecidos moles torna os emissores beta a ferramenta ideal para a terapia celular direcionada interna. Permitem irradiar localmente massas tumorais com alta dose ablativa, preservando os órgãos críticos distantes.",
    "distractorAnalysis": [
      "Está incorreta: o efeito cross-fire é uma grande vantagem da terapia beta (ex: ⁹⁰Y, ¹⁷⁷Lu): o alcance de 1 a 10 mm irradia células heterogéneas que não expressam o recetor biológico.",
      "Está incorreta: a radioterapia metabólica não é crioterapia nem mumificação; induz apoptose e morte mitótica por danos letais no ADN (quebras duplas e simples).",
      "Está incorreta: a radiação mata células tumorais e não as transforma em cartilagem; a administração é na vasta maioria sistémica intravenosa direcionada por biomoléculas."
    ],
    "nursingApplication": "Exemplos na prática clínica de enfermagem incluem o Iodo-131 para cancro da tiroide, o Lutécio-177 para tumores neuroendócrinos e o Ítrio-90 para radioembolização hepática."
  },
  {
    "id": 7106,
    "topicId": 7,
    "question": "Na prestação de cuidados de enfermagem e proteção radiológica em serviços com doentes radioativos, como se aplica na prática o conceito de 'aplicação terapêutica dos emissores beta em radioterapia metabólica'?",
    "options": [
      "O enfermeiro deve administrar grandes quantidades de sal marinho iodado a todos os doentes para acelerar a excreção das partículas beta pela via respiratória.",
      "A equipa de enfermagem deve retirar todas as ligaduras cirúrgicas e deixar as feridas expostas ao ar livre para que os eletrões beta se evaporem da pele do doente.",
      "O enfermeiro monitoriza potenciais toxicidades hematológicas (anemia, leucopenia, trombocitopenia), dado que a medula óssea pode receber dose por irradiação cruzada.",
      "O enfermeiro orienta o utente a evitar a ingestão de alimentos sólidos durante quatro meses consecutivos após a injeção do radioisótopo terapêutico na clínica."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para aplicação terapêutica dos emissores beta em radioterapia metabólica baseia-se no princípio: Exemplos na prática clínica de enfermagem incluem o Iodo-131 para cancro da tiroide, o Lutécio-177 para tumores neuroendócrinos e o Ítrio-90 para radioembolização hepática. Esta atuação rigorosa garante a segurança do profissional, do utente e da comunidade.",
    "distractorAnalysis": [
      "Está incorreta: a radiotoxicidade limitante de dose na terapia com emissores beta sistémicos é frequentemente a mielossupressão, exigindo hemogramas periódicos de controlo.",
      "Está incorreta: sal iodado só tem indicação para bloquear a tiroide contra radioisótopos de iodo; partículas beta não são eliminadas como gás pelos pulmões.",
      "Está incorreta: feridas cirúrgicas exigem pensos estéreis e assépticos normais; restrições alimentares de meses são desprovidas de qualquer indicação médica ou dosimétrica."
    ],
    "nursingApplication": "Exemplos na prática clínica de enfermagem incluem o Iodo-131 para cancro da tiroide, o Lutécio-177 para tumores neuroendócrinos e o Ítrio-90 para radioembolização hepática."
  },
  {
    "id": 7107,
    "topicId": 7,
    "question": "Um enfermeiro analisa o poder de penetração, mecanismos de atenuação e riscos biológicos em 'aplicação terapêutica dos emissores beta em radioterapia metabólica'. Qual das seguintes afirmações expressa a correlação biofísica correta?",
    "options": [
      "Todos os emissores beta apresentam rigorosamente o mesmo alcance de dez centímetros em tecidos moles, independentemente da sua energia máxima de emissão.",
      "A eficácia da radioterapia beta é nula se o doente possuir uma pressão arterial média superior a cem milímetros de mercúrio durante a fase de absorção vascular.",
      "A energia média depositada pela radiação beta é independente da densidade eletrónica do tecido, sendo idêntica no ar alveolar do pulmão e no osso cortical denso.",
      "O alcance ótimo do emissor beta depende do volume tumoral: emissores de curto alcance (¹⁷⁷Lu, ~1-2 mm) para micrometástases e de longo alcance (⁹⁰Y, ~5-11 mm) para tumores grandes."
    ],
    "correctIndex": 3,
    "explanation": "A análise biofísica exata demonstra que Permitem irradiar localmente massas tumorais com alta dose ablativa, preservando os órgãos críticos distantes. O domínio destes conhecimentos permite ao enfermeiro fundamentar a escolha de blindagens e protocolos de segurança.",
    "distractorAnalysis": [
      "Está incorreta: a seleção teranóstica combina a física da emissão com a morfologia tumoral: Lutécio-177 para doença disseminada de pequeno volume; Ítrio-90 para massas volumosas.",
      "Está incorreta: o alcance varia com a terceira raiz ou diretamente com E_max; nenhum emissor beta atinge 10 cm em tecidos moles biológicos.",
      "Está incorreta: a pressão arterial não anula a ação radiobiológica da radiação ionizante; a densidade eletrónica governa o poder de travamento tecidual."
    ],
    "nursingApplication": "Exemplos na prática clínica de enfermagem incluem o Iodo-131 para cancro da tiroide, o Lutécio-177 para tumores neuroendócrinos e o Ítrio-90 para radioembolização hepática."
  },
  {
    "id": 7108,
    "topicId": 7,
    "question": "Na física das radiações nucleares (partículas alfa, beta e fotões gama) aplicada à prática clínica, em relação a 'proteção do operador: luvas e seringas blindadas para emissores beta', qual é a fundamentação científica correta?",
    "options": [
      "Para emissores beta puros de alta energia, a blindagem primária da seringa deve ser em plástico/acrílico transparente de 5 a 10 mm para minimizar a emissão de Bremsstrahlung.",
      "A seringa deve ser envolvida exclusivamente por uma camada maciça de dez centímetros de chumbo para impedir que as partículas beta perfurem as paredes da sala.",
      "A blindagem de seringas deve ser realizada com papel de filtro embebido em vinagre para neutralizar a carga elétrica negativa dos eletrões por reação ácida.",
      "Não é necessária qualquer blindagem de seringa para radiofármacos beta porque os eletrões são completamente bloqueados pela fina parede de plástico da seringa."
    ],
    "correctIndex": 0,
    "explanation": "Em física nuclear e radioproteção clínica, proteção do operador: luvas e seringas blindadas para emissores beta explica-se pelo facto de que o enfermeiro nunca segura diretamente seringas não blindadas contendo emissores beta de alta energia como o Ítrio-90 ($E_{max} = 2,28$ MeV). A dose por contacto direto na pele dos dedos pode atingir dezenas de miliGrays por segundo se a seringa não possuir uma camisa plástica de acrílico.",
    "distractorAnalysis": [
      "Está incorreta: o acrílico (baixo Z) barra todos os eletrões beta sem gerar radiação de travamento apreciável; protetores comerciais usam acrílico interno e chumbo fino exterior.",
      "Está incorreta: chumbo direto (Z = 82) geraria intensa radiação X de Bremsstrahlung secundária, aumentando a dose na mão do profissional; o plástico da seringa simples não é suficiente.",
      "Está incorreta: papel e vinagre não possuem capacidade física de blindagem para emissores beta de alta energia (como ⁹⁰Y com E_max de 2,28 MeV)."
    ],
    "nursingApplication": "O enfermeiro utiliza protetores de seringa transparentes em acrílico grosso de 1 cm para realizar a injeção com segurança e conforto."
  },
  {
    "id": 7109,
    "topicId": 7,
    "question": "Na prestação de cuidados de enfermagem e proteção radiológica em serviços com doentes radioativos, como se aplica na prática o conceito de 'proteção do operador: luvas e seringas blindadas para emissores beta'?",
    "options": [
      "O enfermeiro deve segurar o corpo da seringa diretamente com as pontas dos dedos desnudas para aquecer a solução com a temperatura corporal antes da infusão.",
      "O enfermeiro utiliza protetores de seringa específicos de acrílico/chumbo e pinças de manipulação longa para maximizar a distância entre a fonte e os dedos durante a injeção.",
      "A proteção do operador exige a utilização de óculos de sol polarizados para evitar o encadeamento visual provocado pela fluorescência dos eletrões na seringa.",
      "A administração de radiofármacos beta deve ser efetuada com seringas abertas sem êmbolo, deixando o líquido escorrer por gravidade natural para o cateter venoso."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para proteção do operador: luvas e seringas blindadas para emissores beta baseia-se no princípio: O enfermeiro utiliza protetores de seringa transparentes em acrílico grosso de 1 cm para realizar a injeção com segurança e conforto. Esta atuação rigorosa garante a segurança do profissional, do utente e da comunidade.",
    "distractorAnalysis": [
      "Está incorreta: a combinação de blindagem adaptada (acrílico) com ferramentas que aumentam a distância (pinças, extensores venosos) reduz a dose nas mãos por ordens de grandeza.",
      "Está incorreta: segurar a seringa desprotegida expõe a pele a taxas de dose de dezenas de mGy/min, violando os princípios fundamentais da proteção radiológica.",
      "Está incorreta: óculos de sol não atenuam radiação ionizante; seringas abertas causariam derrames e contaminações biológicas e radiológicas inaceitáveis."
    ],
    "nursingApplication": "O enfermeiro utiliza protetores de seringa transparentes em acrílico grosso de 1 cm para realizar a injeção com segurança e conforto."
  },
  {
    "id": 7110,
    "topicId": 7,
    "question": "Um enfermeiro analisa o poder de penetração, mecanismos de atenuação e riscos biológicos em 'proteção do operador: luvas e seringas blindadas para emissores beta'. Qual das seguintes afirmações expressa a correlação biofísica correta?",
    "options": [
      "O chumbo atua como condutor térmico que aquece a solução do radiofármaco até à ebulição em poucos segundos, quebrando o vidro da ampola hospitalar.",
      "O plástico de acrílico converte as partículas beta em fotões de luz ultravioleta que estimulam a síntese de vitamina D na pele do profissional de saúde.",
      "A taxa de emissão de Bremsstrahlung é proporcional a E_β × Z_material; assim, o uso de chumbo (Z = 82) gera muito mais fotões penetrantes do que materiais de baixo Z (Z ≈ 6).",
      "A utilização de blindagens de acrílico é estritamente proibida em enfermagem porque o plástico acumula neutrões livres que tornam a seringa radioativa."
    ],
    "correctIndex": 2,
    "explanation": "A análise biofísica exata demonstra que A dose por contacto direto na pele dos dedos pode atingir dezenas de miliGrays por segundo se a seringa não possuir uma camisa plástica de acrílico. O domínio destes conhecimentos permite ao enfermeiro fundamentar a escolha de blindagens e protocolos de segurança.",
    "distractorAnalysis": [
      "Está incorreta: a probabilidade de radiação de travamento cresce com o quadrado da carga do núcleo do material absorvente; usar materiais leves (plástico, perspex) suprime este risco.",
      "Está incorreta: as energias radiológicas não fervem soluções hospitalares; a blindagem por acrílico é a norma internacional recomendada para emissores beta puros.",
      "Está incorreta: acrílico não emite neutrões nem gera vitamina D médica; é um escudo mecânico e físico excelente e transparente para eletrões de alta energia."
    ],
    "nursingApplication": "O enfermeiro utiliza protetores de seringa transparentes em acrílico grosso de 1 cm para realizar a injeção com segurança e conforto."
  },
  {
    "id": 7111,
    "topicId": 7,
    "question": "Na física das radiações nucleares (partículas alfa, beta e fotões gama) aplicada à prática clínica, em relação a 'natureza do positrão como partícula de antimatéria', qual é a fundamentação científica correta?",
    "options": [
      "O positrão é um protão de alta velocidade que perdeu noventa por cento da sua massa após ser ejetado do núcleo atómico por decaimento radioativo fraco.",
      "O positrão é uma partícula sem carga elétrica nem massa que viaja a velocidades superiores à da luz no vácuo transportando energia sob a forma de calor.",
      "Trata-se de uma molécula química instável formada pela combinação de dois átomos de hélio ionizado em meio aquoso biológico enriquecido com potássio.",
      "O positrão (e⁺ ou β⁺) é a antipartícula do eletrão, possuindo exatamente a mesma massa de repouso (511 keV/c²) e spin (1/2), mas carga elétrica de sinal oposto (+1e = +1,602 × 10⁻¹⁹ C)."
    ],
    "correctIndex": 3,
    "explanation": "Em física nuclear e radioproteção clínica, natureza do positrão como partícula de antimatéria explica-se pelo facto de que o positrão ($\\beta^+$) é a antipartícula do eletrão: possui rigorosamente a mesma massa de repouso (9,11 · 10⁻³¹ kg ≈ 511 keV/c²) e o mesmo spin (1/2), mas carga elétrica oposta (+1e). É gerado no núcleo atómico quando um protão transmuta-se num neutrão com ejeção de um positrão e um neutrino ($p \\rightarrow n + \\beta^+ + \nu_e$).",
    "distractorAnalysis": [
      "Está incorreta: previsto teoricamente por Dirac (1928) e descoberto por Anderson (1932), o positrão é o antileptão correspondente ao eletrão, com carga positiva elementar.",
      "Está incorreta: o positrão é um leptão elementar de antimatéria e não um protão; nucleões são hadrões compostos por quarks com massa quase duas mil vezes superior.",
      "Está incorreta: possui massa bem determinada (m_e ≈ 9,109 × 10⁻³¹ kg) e carga unitária positiva (+1e); nada viaja acima da velocidade da luz no vácuo."
    ],
    "nursingApplication": "O número atómico (Z) diminui uma unidade ($Z \\rightarrow Z-1$) enquanto a massa total A permanece constante (por exemplo, $^{18}_9\\text{F} \\rightarrow ^{18}_8\\text{O} + \\beta^+ + \nu_e$)."
  },
  {
    "id": 7112,
    "topicId": 7,
    "question": "Na prestação de cuidados de enfermagem e proteção radiológica em serviços com doentes radioativos, como se aplica na prática o conceito de 'natureza do positrão como partícula de antimatéria'?",
    "options": [
      "A emissão de positrões por radiofármacos (como o ¹⁸F na ¹⁸F-FDG) é a base física da tomografia PET, permitindo mapear o metabolismo glicolítico tumoral em tempo real.",
      "A natureza de antimatéria do positrão faz com que os doentes explodam se entrarem em contacto com objetos metálicos durante a realização do exame imagiológico.",
      "O enfermeiro deve administrar substâncias redutoras orais para evitar que o positrão destrua permanentemente todos os átomos de oxigénio da respiração do utente.",
      "O uso de emissores de positrões é restrito a doentes internados em câmaras de vácuo absoluto para impedir a oxidação do ar ambiente na presença de antimatéria."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para natureza do positrão como partícula de antimatéria baseia-se no princípio: O número atómico (Z) diminui uma unidade ($Z \\rightarrow Z-1$) enquanto a massa total A permanece constante (por exemplo, $^{18}_9\\text{F} \\rightarrow ^{18}_8\\text{O} + \\beta^+ + \nu_e$). Esta atuação rigorosa garante a segurança do profissional, do utente e da comunidade.",
    "distractorAnalysis": [
      "Está incorreta: na imagiologia PET a antimatéria é utilizada com extrema segurança diagnóstica: traçadores emissores β⁺ desvendam o hipermetabolismo de neoplasias e infeções.",
      "Está incorreta: a quantidade administrada é picomolar (~10⁻¹² moles); a aniquilação microscópica gera fotões de 511 keV inofensivos em termos mecânicos, sem qualquer explosão.",
      "Está incorreta: não afeta o oxigénio respiratório nem requer câmaras de vácuo; os doentes permanecem comodamente em salas de repouso normais climatizadas."
    ],
    "nursingApplication": "O número atómico (Z) diminui uma unidade ($Z \\rightarrow Z-1$) enquanto a massa total A permanece constante (por exemplo, $^{18}_9\\text{F} \\rightarrow ^{18}_8\\text{O} + \\beta^+ + \nu_e$)."
  },
  {
    "id": 7113,
    "topicId": 7,
    "question": "Um enfermeiro analisa o poder de penetração, mecanismos de atenuação e riscos biológicos em 'natureza do positrão como partícula de antimatéria'. Qual das seguintes afirmações expressa a correlação biofísica correta?",
    "options": [
      "O decaimento por emissão de positrões é característico de núcleos pesados com excesso maciço de neutrões situados no topo superior da tabela periódica.",
      "O decaimento β⁺ ocorre exclusivamente em núcleos instáveis deficientes em neutrões (abaixo da linha de estabilidade), transmutando um protão num neutrão (p -> n + e⁺ + ν_e).",
      "A emissão de um positrão aumenta o número atómico Z do núcleo pai em duas unidades devido à criação simultânea de dois novos protões no centro nuclear.",
      "No decaimento β⁺ o número de massa A diminui sempre em quatro nucleões, correspondendo à ejeção de um núcleo estável de hélio em direção à eletrosfera."
    ],
    "correctIndex": 1,
    "explanation": "A análise biofísica exata demonstra que É gerado no núcleo atómico quando um protão transmuta-se num neutrão com ejeção de um positrão e um neutrino ($p \\rightarrow n + \\beta^+ + \nu_e$). O domínio destes conhecimentos permite ao enfermeiro fundamentar a escolha de blindagens e protocolos de segurança.",
    "distractorAnalysis": [
      "Está incorreta: núcleos ricos em protões convertem p em n para se aproximarem do vale de estabilidade, com Z -> Z - 1 e A constante (ex: ¹⁸₉F -> ¹⁸₈O + e⁺ + ν_e).",
      "Está incorreta: núcleos com excesso de neutrões decaem por beta menos (β⁻) e não por beta mais (β⁺).",
      "Está incorreta: em beta mais Z diminui em uma unidade (Z -> Z - 1); a diminuição de A em 4 nucleões descreve a emissão alfa e não a emissão de positrões."
    ],
    "nursingApplication": "O número atómico (Z) diminui uma unidade ($Z \\rightarrow Z-1$) enquanto a massa total A permanece constante (por exemplo, $^{18}_9\\text{F} \\rightarrow ^{18}_8\\text{O} + \\beta^+ + \nu_e$)."
  },
  {
    "id": 7114,
    "topicId": 7,
    "question": "Na física das radiações nucleares (partículas alfa, beta e fotões gama) aplicada à prática clínica, em relação a 'desaceleração térmica e alcance do positrão no tecido humano', qual é a fundamentação científica correta?",
    "options": [
      "O positrão aniquila-se instantaneamente no momento exato em que sai do núcleo atómico, sem percorrer qualquer distância no interior do tecido celular circundante.",
      "O alcance do positrão no corpo humano é de cerca de dois metros, perfurando facilmente todos os tecidos biológicos e saindo do quarto do doente.",
      "O positrão emitido perde energia cinética através de milhares de colisões coulombianas até termalizar, percorrendo uma distância média de 0,5 a alguns milímetros no tecido.",
      "A desaceleração do positrão gera a combustão química de todas as moléculas de glicose vizinhas com libertação de chamas térmicas na corrente sanguínea."
    ],
    "correctIndex": 2,
    "explanation": "Em física nuclear e radioproteção clínica, desaceleração térmica e alcance do positrão no tecido humano explica-se pelo facto de que ao ser ejetado no tecido biológico com energia cinética inicial (cerca de 0,63 MeV no caso do Flúor-18), o positrão viaja em ziguezague colidindo com eletrões atómicos circundantes. Desacelera até atingir energia térmica quase nula, percorrendo uma distância microscópica média de apenas 0,6 a 1,0 mm no caso do ¹⁸F (positrão range).",
    "distractorAnalysis": [
      "Está incorreta: a probabilidade de aniquilação em voo é mínima (~1-2%); o positrão quase sempre perde energia até ao repouso térmico antes de se aniquilar (alcance do positrão).",
      "Está incorreta: o positrão percorre um trajeto microscópico (range) antes da aniquilação: ~0,6 mm para ¹⁸F (E_max = 0,63 MeV) e até ~3-4 mm para ⁶⁸Ga (E_max = 1,9 MeV).",
      "Está incorreta: o alcance é milimétrico e não métrico; dissipa-se por ionizações submicroscópicas a nível atómico sem qualquer combustão química de glicose."
    ],
    "nursingApplication": "Esta pequena distância de desaceleração define o limite físico fundamental da resolução espacial máxima das imagens tomográficas de PET."
  },
  {
    "id": 7115,
    "topicId": 7,
    "question": "Na prestação de cuidados de enfermagem e proteção radiológica em serviços com doentes radioativos, como se aplica na prática o conceito de 'desaceleração térmica e alcance do positrão no tecido humano'?",
    "options": [
      "A desaceleração do positrão obriga o enfermeiro a massajar vigorosamente o braço do doente com toalhas aquecidas para acelerar o trajeto dos eletrões no vaso.",
      "O alcance do positrão faz com que os doentes internados sofram paragens cardíacas reflexas sempre que realizam movimentos bruscos com os membros superiores.",
      "Essa desaceleração impede a realização de exames em crianças porque os ossos infantis repelem os positrões através de forças gravitacionais aumentadas.",
      "A distância percorrida pelo positrão antes da aniquilação ('alcance do positrão') é a causa física intrínseca que limita a resolução espacial das imagens tomográficas em PET."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para desaceleração térmica e alcance do positrão no tecido humano baseia-se no princípio: Esta pequena distância de desaceleração define o limite físico fundamental da resolução espacial máxima das imagens tomográficas de PET. Esta atuação rigorosa garante a segurança do profissional, do utente e da comunidade.",
    "distractorAnalysis": [
      "Está incorreta: como o evento detectado (os 2 gamas) origina-se no ponto de aniquilação e não no ponto de decaimento do traçador, o positron range adiciona uma incerteza física à imagem.",
      "Está incorreta: o braço do doente não deve ser massajado; o doente deve permanecer em repouso absoluto durante o período de captação para evitar captação muscular indesejada de FDG.",
      "Está incorreta: a desaceleração é um fenómeno subatómico indolor e inócuo hemodinamicamente, sendo o PET perfeitamente seguro e rotineiro em pediatria oncológica."
    ],
    "nursingApplication": "Esta pequena distância de desaceleração define o limite físico fundamental da resolução espacial máxima das imagens tomográficas de PET."
  },
  {
    "id": 7116,
    "topicId": 7,
    "question": "Um enfermeiro analisa o poder de penetração, mecanismos de atenuação e riscos biológicos em 'desaceleração térmica e alcance do positrão no tecido humano'. Qual das seguintes afirmações expressa a correlação biofísica correta?",
    "options": [
      "Radionuclídeos com maior energia de emissão de positrão (como ⁸²Rb com E_max = 3,35 MeV ou ⁶⁸Ga com 1,9 MeV) apresentam maior alcance e pior resolução espacial do que o ¹⁸F (0,63 MeV).",
      "O Flúor-18 apresenta o pior alcance de todos os emissores de positrões conhecidos, gerando imagens com resolução cem vezes inferior à do Rubídio-82 em ensaios clínicos.",
      "O alcance do positrão é estritamente independente da sua energia cinética inicial, sendo rigorosamente idêntico no Flúor-18, Gálio-68 e Carbono-11.",
      "A energia de emissão do positrão é completamente absorvida pelos detetores da câmara antes de as partículas entrarem em contacto com o corpo do doente."
    ],
    "correctIndex": 0,
    "explanation": "A análise biofísica exata demonstra que Desacelera até atingir energia térmica quase nula, percorrendo uma distância microscópica média de apenas 0,6 a 1,0 mm no caso do ¹⁸F (positrão range). O domínio destes conhecimentos permite ao enfermeiro fundamentar a escolha de blindagens e protocolos de segurança.",
    "distractorAnalysis": [
      "Está incorreta: quanto maior a energia máxima E_max do positrão, maior o seu percurso tecidual médio (F-18 tem excelente resolução com range <1 mm; Ga-68 e Rb-82 têm maior degradação espacial).",
      "Está incorreta: o Flúor-18 possui a menor energia de positrão entre os emissores comuns de PET, proporcionando a melhor resolução espacial diagnóstica.",
      "Está incorreta: o alcance escala diretamente com a energia cinética das partículas carregadas; os detetores recebem apenas os fotões gama secundários de 511 keV."
    ],
    "nursingApplication": "Esta pequena distância de desaceleração define o limite físico fundamental da resolução espacial máxima das imagens tomográficas de PET."
  },
  {
    "id": 7117,
    "topicId": 7,
    "question": "Na física das radiações nucleares (partículas alfa, beta e fotões gama) aplicada à prática clínica, em relação a 'formação do estado transiente de Positrónio', qual é a fundamentação científica correta?",
    "options": [
      "O Positrónio é uma molécula proteica de grande dimensão sintetizada pelo fígado para transportar os radiofármacos através da barreira hematoencefálica.",
      "O Positrónio (Ps) é um átomo exótico metaestável formado por um positrão e um eletrão tecidual ligados por atração coulombiana, antes da aniquilação final.",
      "Trata-se de um tipo de cristal cintilador artificial composto por chumbo e silício utilizado no fabrico dos anéis detetores das tomografias computorizadas.",
      "O Positrónio é um gás inerte radioativo que se liberta da urina de doentes oncológicos submetidos a exames de medicina nuclear diagnóstica no leito."
    ],
    "correctIndex": 1,
    "explanation": "Em física nuclear e radioproteção clínica, formação do estado transiente de Positrónio explica-se pelo facto de que antes da aniquilação final, o positrão termalizado pode associar-se temporariamente a um eletrão do tecido para formar um átomo exótico metaestável chamado Positrónio. O parapositrónio (spins antiparalelos) colapsa e aniquila-se numa fração de 125 picossegundos, emitindo dois fotões gama.",
    "distractorAnalysis": [
      "Está incorreta: o positrónio é um sistema puramente leptónico semelhante ao átomo de hidrogénio (com o positrão no lugar do protão), com níveis quânticos de energia e estados de spin bem determinados.",
      "Está incorreta: não é uma proteína hepática nem um transportador biológico; é um átomo quântico efémero subatómico de vida ultracurta.",
      "Está incorreta: cristais cintiladores são sólidos inorgânicos (LSO, BGO, NaI); o positrónio não é um cristal nem um gás urinário macroscópico."
    ],
    "nursingApplication": "Esta física quântica ultrarrápida decorre silenciosamente dentro do corpo do doente após a injeção do radiofármaco na sala de PET."
  },
  {
    "id": 7118,
    "topicId": 7,
    "question": "Na prestação de cuidados de enfermagem e proteção radiológica em serviços com doentes radioativos, como se aplica na prática o conceito de 'formação do estado transiente de Positrónio'?",
    "options": [
      "O estado de positrónio dura quarenta e oito horas no organismo, permitindo aos enfermeiros recolher amostras de sangue para quantificar a antimatéria presente.",
      "A formação de positrónio impede a emissão de qualquer fotão gama, fazendo com que os exames PET necessitem de colimadores mecânicos de chumbo espesso.",
      "No para-positrónio (spins antiparalelos, S=0) a semivida é de 125 ps com emissão de 2 fotões de 511 keV; no orto-positrónio (spins paralelos, S=1) a semivida é mais longa e sensível à oxigenação tecidual.",
      "O orto-positrónio emite feixes contínuos de partículas alfa que destroem as células endoteliais dos vasos sanguíneos em menos de dois segundos de exame."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para formação do estado transiente de Positrónio baseia-se no princípio: Esta física quântica ultrarrápida decorre silenciosamente dentro do corpo do doente após a injeção do radiofármaco na sala de PET. Esta atuação rigorosa garante a segurança do profissional, do utente e da comunidade.",
    "distractorAnalysis": [
      "Está incorreta: a semivida e o canal de aniquilação do o-Ps nos tecidos (pick-off annihilation em 2 fotões) são explorados no moderno 'PET de Positrónio' para avaliar a hipóxia tumoral in vivo.",
      "Está incorreta: a semivida do positrónio situa-se na escala de picossegundos a nanossegundos (10⁻¹² a 10⁻⁹ s) e não de horas; aniquila-se quase instantaneamente.",
      "Está incorreta: o positrónio aniquila-se em fotões gama (o p-Ps em 2 fotões de 511 keV a 180°), que constituem o sinal captado sem necessidade de colimadores mecânicos."
    ],
    "nursingApplication": "Esta física quântica ultrarrápida decorre silenciosamente dentro do corpo do doente após a injeção do radiofármaco na sala de PET."
  },
  {
    "id": 7119,
    "topicId": 7,
    "question": "Um enfermeiro analisa o poder de penetração, mecanismos de atenuação e riscos biológicos em 'formação do estado transiente de Positrónio'. Qual das seguintes afirmações expressa a correlação biofísica correta?",
    "options": [
      "A conservação do momento linear é violada no decaimento do positrónio em virtude da ausência de atrito mecânico no espaço extracelular celular aquoso.",
      "O decaimento do para-positrónio gera exclusivamente um único fotão de 1022 keV que se propaga numa única direção reta em direção ao teto da sala de exames.",
      "A aniquilação no estado tripleto liberta quatro neutrões lentos que são absorvidos pelas mitocôndrias celulares para acelerar o ciclo de Krebs aeróbio.",
      "A aniquilação do para-positrónio obedece à conservação de momento linear e paridade no seu referencial de repouso, emitindo obrigatoriamente dois fotões em direções opostas (180°)."
    ],
    "correctIndex": 3,
    "explanation": "A análise biofísica exata demonstra que O parapositrónio (spins antiparalelos) colapsa e aniquila-se numa fração de 125 picossegundos, emitindo dois fotões gama. O domínio destes conhecimentos permite ao enfermeiro fundamentar a escolha de blindagens e protocolos de segurança.",
    "distractorAnalysis": [
      "Está incorreta: como o momento no centro de massa é zero (p = 0), a emissão de dois fotões com momentos iguais e opostos (p₁ = -p₂) é imperativa para cumprir a conservação do momento vetorial.",
      "Está incorreta: a conservação do momento linear é inviolável na física moderna; a emissão de um único fotão no vácuo violaria a conservação do momento linear.",
      "Está incorreta: o estado singleto (p-Ps) decai em 2 gamas de 511 keV; o estado tripleto (o-Ps) decai no vácuo em 3 gamas coplanares, nunca em neutrões bariónicos."
    ],
    "nursingApplication": "Esta física quântica ultrarrápida decorre silenciosamente dentro do corpo do doente após a injeção do radiofármaco na sala de PET."
  },
  {
    "id": 7120,
    "topicId": 7,
    "question": "Na física das radiações nucleares (partículas alfa, beta e fotões gama) aplicada à prática clínica, em relação a 'Flúor-18 Desoxiglicose (¹⁸F-FDG) como marcador metabólico de glucose', qual é a fundamentação científica correta?",
    "options": [
      "A ¹⁸F-FDG é transportada para dentro da célula via GLUT e fosforilada pela hexoquinase a FDG-6-P; por não ter o grupo hidroxilo (-OH) em C-2, não prossegue na glicólise e fica retida ('trapping').",
      "A ¹⁸F-FDG é uma molécula de gordura pura que se dissolve nas membranas celulares dos adipócitos provocando o aumento rápido da massa gorda subcutânea do doente.",
      "O radiofármaco ¹⁸F-FDG atua destruindo o DNA das células malignas através de reações de hidrólise ácida induzidas pelo flúor estável à temperatura ambiente.",
      "A desoxiglicose marcada com Flúor-18 liga-se aos recetores de insulina da circulação venosa, impedindo a entrada de glicose em todos os órgãos do corpo humano."
    ],
    "correctIndex": 0,
    "explanation": "Em física nuclear e radioproteção clínica, Flúor-18 Desoxiglicose (¹⁸F-FDG) como marcador metabólico de glucose explica-se pelo facto de que a ¹⁸F-FDG é um análogo da glicose que entra nas células através dos transportadores GLUT e é fosforilada pela hexoquinase em ¹⁸F-FDG-6-fosfato. Devido à ausência do grupo hidroxilo na posição 2, a molécula fica metabolicamente bloqueada dentro da célula ('trapping metabólico'), acumulando-se intensamente em células tumorais que consomem glicose em ritmo acelerado (Efeito Warburg).",
    "distractorAnalysis": [
      "Está incorreta: a substituição do grupo 2'-OH por ¹⁸F impede a isomerização por fosfoglucoisomerase; como a desfosforilação é lenta em células tumorais (efeito Warburg), o traçador acumula-se.",
      "Está incorreta: a FDG é um análogo hidrossolúvel da D-glicose e não uma gordura lipídica; quantifica o consumo metabólico de glicose.",
      "Está incorreta: a FDG é um radiofármaco diagnóstico de concentrações vestigiais (sem efeito farmacológico ou químico); a sua função é emitir positrões para imagem PET."
    ],
    "nursingApplication": "O enfermeiro assegura que o doente permaneça em jejum de 6 horas e verifica a glicemia capilar antes da injeção (idealmente < 150-180 mg/dL para não competir com a FDG)."
  },
  {
    "id": 7121,
    "topicId": 7,
    "question": "Na prestação de cuidados de enfermagem e proteção radiológica em serviços com doentes radioativos, como se aplica na prática o conceito de 'Flúor-18 Desoxiglicose (¹⁸F-FDG) como marcador metabólico de glucose'?",
    "options": [
      "A acumulação tumoral de ¹⁸F-FDG ocorre porque os tumores são formados por células vegetais que realizam a fotossíntese de glicose sob a luz ambiente do hospital.",
      "Células neoplásicas têm expressão aumentada de transportadores GLUT1/3 e alta taxa de glicólise anaeróbia (efeito Warburg), acumulando muito mais ¹⁸F-FDG do que os tecidos vizinhos normais.",
      "Os tumores captam o radiofármaco porque o flúor atrai magneticamente as proteínas do estroma conectivo com uma força inversamente proporcional à distância.",
      "A avidez tumoral pela FDG deve-se à ausência total de circulação vascular arterial no centro das massas neoplásicas malignas em fase de progressão rápida."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para Flúor-18 Desoxiglicose (¹⁸F-FDG) como marcador metabólico de glucose baseia-se no princípio: O enfermeiro assegura que o doente permaneça em jejum de 6 horas e verifica a glicemia capilar antes da injeção (idealmente < 150-180 mg/dL para não competir com a FDG). Esta atuação rigorosa garante a segurança do profissional, do utente e da comunidade.",
    "distractorAnalysis": [
      "Está incorreta: Otto Warburg descobriu que tumores realizam glicólise acelerada mesmo na presença de oxigénio; a sobreexpressão de GLUT e hexoquinase II gera captação intensa no PET.",
      "Está incorreta: células tumorais são células eucarióticas humanas desreguladas e não realizam fotossíntese vegetal nem dependem de luz solar.",
      "Está incorreta: a retenção é bioquímica e enzimática (fosforilação metabólica) e não magnética; os tumores exigem vascularização ativa para que o traçador chegue aos tecidos."
    ],
    "nursingApplication": "O enfermeiro assegura que o doente permaneça em jejum de 6 horas e verifica a glicemia capilar antes da injeção (idealmente < 150-180 mg/dL para não competir com a FDG)."
  },
  {
    "id": 7122,
    "topicId": 7,
    "question": "Um enfermeiro analisa o poder de penetração, mecanismos de atenuação e riscos biológicos em 'Flúor-18 Desoxiglicose (¹⁸F-FDG) como marcador metabólico de glucose'. Qual das seguintes afirmações expressa a correlação biofísica correta?",
    "options": [
      "A glicemia elevada no momento da injeção de ¹⁸F-FDG é benéfica porque acelera o decaimento radioativo do Flúor-18 para metade da sua semivida física normal.",
      "O enfermeiro deve administrar dez colheres de açúcar refinado por via oral ao doente imediatamente antes de iniciar o procedimento de injeção na câmara quente.",
      "O enfermeiro verifica a glicemia capilar antes da injeção de ¹⁸F-FDG: a hiperglicemia (>150-200 mg/dL) compete pelos transportadores GLUT e reduz marcadamente a captação tumoral do traçador.",
      "A verificação da glicemia destina-se a confirmar se o doente possui anticorpos monoclonais circulantes contra os fotões de aniquilação de 511 keV."
    ],
    "correctIndex": 2,
    "explanation": "A análise biofísica exata demonstra que Devido à ausência do grupo hidroxilo na posição 2, a molécula fica metabolicamente bloqueada dentro da célula ('trapping metabólico'), acumulando-se intensamente em células tumorais que consomem glicose em ritmo acelerado (Efeito Warburg). O domínio destes conhecimentos permite ao enfermeiro fundamentar a escolha de blindagens e protocolos de segurança.",
    "distractorAnalysis": [
      "Está incorreta: a D-glicose sérica e a FDG competem pelos mesmos transportadores transmembranares (GLUT); glicemia alta satura os transportadores e 'lava' o sinal tumoral, falseando o PET.",
      "Está incorreta: a glicemia não altera a física quântica do decaimento nuclear do ¹⁸F (T1/2 = 109,8 min é rigorosamente constante).",
      "Está incorreta: o doente deve estar em jejum de pelo menos 4 a 6 horas para garantir glicemia baixa (<150 mg/dL) e insulina basal baixa, evitando que o músculo capte o traçador."
    ],
    "nursingApplication": "O enfermeiro assegura que o doente permaneça em jejum de 6 horas e verifica a glicemia capilar antes da injeção (idealmente < 150-180 mg/dL para não competir com a FDG)."
  },
  {
    "id": 7123,
    "topicId": 7,
    "question": "Na física das radiações nucleares (partículas alfa, beta e fotões gama) aplicada à prática clínica, em relação a 'cuidados na administração de emissores de positrões em enfermagem', qual é a fundamentação científica correta?",
    "options": [
      "O doente deve ser incentivado a correr nos corredores da enfermaria e a subir escadas logo após a injeção para acelerar a distribuição do radiofármaco pelo corpo.",
      "O enfermeiro deve orientar o doente a mascar pastilhas elásticas durante toda a fase de captação para estimular a produção de saliva e a excreção de radiofármaco.",
      "O doente deve ser sujeito a correntes de ar frio para ativar a gordura castanha interescapular com vista a aumentar a nitidez diagnóstica das imagens cervicais.",
      "Após a injeção de ¹⁸F-FDG, o doente deve permanecer em repouso estrito, num quarto aquecido e calmo (sem falar, ler ou mastigar pastilha) durante cerca de 60 minutos de captação."
    ],
    "correctIndex": 3,
    "explanation": "Em física nuclear e radioproteção clínica, cuidados na administração de emissores de positrões em enfermagem explica-se pelo facto de que o Flúor-18 emite indiretamente fotões gama altamente penetrantes de 511 keV após a aniquilação, exigindo blindagens pesadas de tungsténio em vez de simples acrílico. A seringa de injeção é transportada num contentor blindado de tungsténio de alta densidade.",
    "distractorAnalysis": [
      "Está incorreta: o esforço muscular capta avidamente FDG no miocárdio, músculos esqueléticos, laríngeos (se falar) ou mastigatórios (se mascar), gerando falsos positivos e degradando a imagem.",
      "Está incorreta: o exercício físico desvia a FDG dos tumores para os músculos exercitados; o repouso absoluto no quarto de captação é regra mandatória em PET.",
      "Está incorreta: o frio ativa a gordura castanha (brown adipose tissue / BAT), que capta intensamente FDG nas fossas supraclaviculares e mediastino; o quarto deve ser confortavelmente aquecido."
    ],
    "nursingApplication": "Após a injeção endovenosa, o doente descansa 60 minutos num cubículo individual com paredes plumbíferas antes de entrar no tomógrafo PET."
  },
  {
    "id": 7124,
    "topicId": 7,
    "question": "Na prestação de cuidados de enfermagem e proteção radiológica em serviços com doentes radioativos, como se aplica na prática o conceito de 'cuidados na administração de emissores de positrões em enfermagem'?",
    "options": [
      "Como o fotão de 511 keV tem grande energia e penetração, a manipulação de seringas de PET exige protetores espessos de tungsténio e manutenção do princípio do tempo e distância.",
      "Os fotões de 511 keV são absorvidos integralmente por luvas cirúrgicas de látex finas, permitindo ao enfermeiro segurar a seringa desprotegida durante horas.",
      "A elevada energia dos fotões de aniquilação permite que o enfermeiro prescinda do uso de dosímetro individual de radiação durante os turnos de trabalho na unidade PET.",
      "A radiação de aniquilação anula-se espontaneamente se o profissional de saúde utilizar batas cirúrgicas de algodão azul escuro durante os procedimentos de enfermagem."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para cuidados na administração de emissores de positrões em enfermagem baseia-se no princípio: Após a injeção endovenosa, o doente descansa 60 minutos num cubículo individual com paredes plumbíferas antes de entrar no tomógrafo PET. Esta atuação rigorosa garante a segurança do profissional, do utente e da comunidade.",
    "distractorAnalysis": [
      "Está incorreta: os gamas duros de 511 keV requerem proteções de tungsténio/chumbo pesadas (~5-6 mm de camada hemirredutora em Pb); tempo, distância e blindagem são cruciais para a equipa.",
      "Está incorreta: luvas finas de látex protegem contra contaminação química e biológica, mas têm atenuação praticamente zero para fotões gama de 511 keV.",
      "Está incorreta: osimetria individual mensal e dosimetria de anel nas mãos são exigências regulamentares estritas; a cor da bata não altera a interação física da radiação."
    ],
    "nursingApplication": "Após a injeção endovenosa, o doente descansa 60 minutos num cubículo individual com paredes plumbíferas antes de entrar no tomógrafo PET."
  },
  {
    "id": 7125,
    "topicId": 7,
    "question": "Um enfermeiro analisa o poder de penetração, mecanismos de atenuação e riscos biológicos em 'cuidados na administração de emissores de positrões em enfermagem'. Qual das seguintes afirmações expressa a correlação biofísica correta?",
    "options": [
      "O doente deve ser orientado a reter a urina durante quarenta e oito horas consecutivas para evitar a perda do radiofármaco injetado antes do processamento computorizado.",
      "O enfermeiro incentiva a hidratação oral abundante e a micção frequente antes e após a aquisição tomográfica para acelerar a depuração da fração de ¹⁸F-FDG excretada na bexiga.",
      "A ingestão de água é estritamente proibida aos doentes que realizam PET sob risco de aniquilação imediata das moléculas de hidrogénio no estômago.",
      "A urina de doentes submetidos a PET não contém radioatividade, podendo ser descartada sem qualquer cuidado de proteção nas pias comuns do posto de enfermagem."
    ],
    "correctIndex": 1,
    "explanation": "A análise biofísica exata demonstra que A seringa de injeção é transportada num contentor blindado de tungsténio de alta densidade. O domínio destes conhecimentos permite ao enfermeiro fundamentar a escolha de blindagens e protocolos de segurança.",
    "distractorAnalysis": [
      "Está incorreta: a fração não-fosforilada de FDG é eliminada por filtração glomerular; urinar com frequência reduz significativamente a dose absorvida na parede da bexiga urinária.",
      "Está incorreta: reter a urina acumularia alta atividade radioativa na pelve, irradiando a bexiga e gónadas e gerando artefactos de imagem que mascaram lesões pélvicas.",
      "Está incorreta: a água não-açucarada é permitida e fortemente recomendada durante o período de captação; a urina é radioativa nas primeiras horas e exige descarga dupla."
    ],
    "nursingApplication": "Após a injeção endovenosa, o doente descansa 60 minutos num cubículo individual com paredes plumbíferas antes de entrar no tomógrafo PET."
  },
  {
    "id": 7126,
    "topicId": 7,
    "question": "Na física das radiações nucleares (partículas alfa, beta e fotões gama) aplicada à prática clínica, em relação a 'equação e balanço energético da reação de aniquilação', qual é a fundamentação científica correta?",
    "options": [
      "A aniquilação liberta três neutrões rápidos de alta energia que permanecem em repouso térmico no interior das mitocôndrias celulares do tecido irradiado.",
      "O balanço energético da reação gera um único fotão de luz visível azul que se dissipa na epiderme do doente sem emitir qualquer radiação ionizante detetável.",
      "A aniquilação converte a massa de repouso do positrão e do eletrão tecidual (2 × 0,511 MeV/c²) em dois fotões gama colineares de exatamente 511 keV cada um (e⁺ + e⁻ -> 2γ).",
      "A aniquilação positrão-eletrão destrói a carga do eletrão mas preserva a massa física do positrão sob a forma de um fragmento metálico microscópico no sangue."
    ],
    "correctIndex": 2,
    "explanation": "Em física nuclear e radioproteção clínica, equação e balanço energético da reação de aniquilação explica-se pelo facto de que quando o positrão ($\\beta^+$) colide com um eletrão ($e^-$) em repouso térmico, ambas as partículas aniquilam-se mutuamente segundo a reação $\\beta^+ + e^- \\rightarrow 2\\gamma$. A soma das massas de repouso das duas partículas ($2 \\times m_e \\approx 2 \\times 0,511$ MeV) é convertida integralmente em dois fotões gama monocromáticos de exatamente 511 keV de energia cada.",
    "distractorAnalysis": [
      "Está incorreta: a conservação da massa-energia (E = 2 m_e·c² = 1,022 MeV) e a conservação do momento linear no repouso produzem rigorosamente dois fotões de 511 keV colineares a 180°.",
      "Está incorreta: leptões de carga oposta aniquilam-se em radiação eletromagnética pura (fotões) e nunca em partículas bariónicas pesadas como neutrões.",
      "Está incorreta: a emissão de um único fotão no vácuo violaria a lei da conservação do momento linear; ambas as massas de repouso são totalmente desmaterializadas."
    ],
    "nursingApplication": "Esta energia constante de 511 keV é a assinatura física universal de todos os emissores de positrões em física médica."
  },
  {
    "id": 7127,
    "topicId": 7,
    "question": "Na prestação de cuidados de enfermagem e proteção radiológica em serviços com doentes radioativos, como se aplica na prática o conceito de 'equação e balanço energético da reação de aniquilação'?",
    "options": [
      "A aniquilação liberta calor massivo que obriga o enfermeiro a mergulhar os pés do doente em gelo picado durante a aquisição tomográfica para evitar queimaduras.",
      "A reação de aniquilação faz com que os cateteres venosos fiquem permanentemente magnetizados, atraindo agulhas cirúrgicas a partir das bancadas vizinhas.",
      "Os fotões de 511 keV anulam a necessidade de monitorização dos sinais vitais porque estabilizam a pressão arterial em valores fisiológicos ideais perfeitos.",
      "Os dois fotões penetrantes de 511 keV escapam do corpo do doente e ativam o anel detetor PET, exigindo proteção radiológica da equipa contra radiação gama penetrante."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para equação e balanço energético da reação de aniquilação baseia-se no princípio: Esta energia constante de 511 keV é a assinatura física universal de todos os emissores de positrões em física médica. Esta atuação rigorosa garante a segurança do profissional, do utente e da comunidade.",
    "distractorAnalysis": [
      "Está incorreta: o doente injetado torna-se uma fonte externa de radiação gama de 511 keV de alta energia, exigindo que os enfermeiros minimizem o tempo de permanência próximo.",
      "Está incorreta: a energia libertada a nível microscópico (nanojoules) é completamente impercetível termicamente, não existindo aquecimento ou necessidade de gelo.",
      "Está incorreta: fotões gama não induzem magnetismo macroscópico em cateteres de plástico nem alteram a regulação hemodinâmica fisiológica do doente."
    ],
    "nursingApplication": "Esta energia constante de 511 keV é a assinatura física universal de todos os emissores de positrões em física médica."
  },
  {
    "id": 7128,
    "topicId": 7,
    "question": "Um enfermeiro analisa o poder de penetração, mecanismos de atenuação e riscos biológicos em 'equação e balanço energético da reação de aniquilação'. Qual das seguintes afirmações expressa a correlação biofísica correta?",
    "options": [
      "A energia de 511 keV interage na matéria biológica predominantemente por Dispersão de Compton com eletrões teciduais, gerando alguma radiação dispersa na imagem.",
      "Os fotões de aniquilação interagem exclusivamente por reações de fusão nuclear com os núcleos de hidrogénio da água celular a temperaturas padrão.",
      "A energia de 511 keV é travada integralmente por uma simples folha de papel de filtro, dispensando a colocação de blindagens nas portas das salas de injeção.",
      "A atenuação de fotões de 511 keV é nula em qualquer tipo de material sólido, atravessando montanhas inteiras sem sofrer qualquer tipo de perda energética."
    ],
    "correctIndex": 0,
    "explanation": "A análise biofísica exata demonstra que A soma das massas de repouso das duas partículas ($2 \\times m_e \\approx 2 \\times 0,511$ MeV) é convertida integralmente em dois fotões gama monocromáticos de exatamente 511 keV de energia cada. O domínio destes conhecimentos permite ao enfermeiro fundamentar a escolha de blindagens e protocolos de segurança.",
    "distractorAnalysis": [
      "Está incorreta: a 511 keV em tecidos moles aquosos (baixo Z), o efeito Compton é de longe o mecanismo de interação dominante (>99%), provocando dispersão angular de fotões.",
      "Está incorreta: fotões gama interagem por processos eletromagnéticos com a nuvem eletrónica e campo nuclear, não induzindo fusão nuclear de hidrogénio corporal.",
      "Está incorreta: 511 keV é uma radiação gama dura e muito penetrante: a camada hemirredutora em tecido biológico é de ~7 cm e em chumbo é de cerca de 5 a 6 mm."
    ],
    "nursingApplication": "Esta energia constante de 511 keV é a assinatura física universal de todos os emissores de positrões em física médica."
  },
  {
    "id": 7129,
    "topicId": 7,
    "question": "Na física das radiações nucleares (partículas alfa, beta e fotões gama) aplicada à prática clínica, em relação a 'conservação do momento linear e ângulo de emissão a 180°', qual é a fundamentação científica correta?",
    "options": [
      "Os fotões de aniquilação são emitidos paralelamente na mesma direção e sentido para reforçar mutuamente a intensidade do sinal detetado pelos anéis da câmara.",
      "Como o par positrão-eletrão aniquila-se quase em repouso térmico (p_total ≈ 0), a conservação do momento vetorial exige que os dois fotões sejam emitidos em sentidos opostos (180°).",
      "O ângulo de emissão varia livremente entre zero e trezentos e sessenta graus em função da velocidade de rotação do tubo de raios X do sistema acoplado de TC.",
      "A conservação do momento angular impede a emissão de fotões gama, fazendo com que a energia da aniquilação seja expelida sob a forma de ondas sonoras inaudíveis."
    ],
    "correctIndex": 1,
    "explanation": "Em física nuclear e radioproteção clínica, conservação do momento linear e ângulo de emissão a 180° explica-se pelo facto de que pela Lei de Conservação do Momento Linear, como as partículas estavam praticamente em repouso antes da colisão (momento linear inicial $\\approx 0$), os dois fotões fotões gama resultantes têm de ser ejetados em sentidos rigorosamente opostos, formando um ângulo de exatamente 180° entre si. Pequenas flutuações angulares térmicas (desvio de $\\pm 0,5°$) ocorrem devido ao pequeno momento residual do centro de massa.",
    "distractorAnalysis": [
      "Está incorreta: no referencial do centro de massa em repouso, o momento inicial é nulo; logo p₁ + p₂ = 0 => p₁ = -p₂, forçando os fotões a saírem costas com costas a 180°.",
      "Está incorreta: se saíssem na mesma direção o momento final seria 2E/c ≠ 0, violando grosseiramente o princípio inviolável da conservação do momento linear.",
      "Está incorreta: existe apenas uma ínfima acolinearidade (~180° ± 0,25°) devido ao pequeno momento residual do par no instante da colisão; o ângulo não é aleatório."
    ],
    "nursingApplication": "O enfermeiro compreende que este alinhamento retilíneo perfeito é o que permite traçar a Linha de Resposta (LOR - Line of Response) no tomógrafo PET."
  },
  {
    "id": 7130,
    "topicId": 7,
    "question": "Na prestação de cuidados de enfermagem e proteção radiológica em serviços com doentes radioativos, como se aplica na prática o conceito de 'conservação do momento linear e ângulo de emissão a 180°'?",
    "options": [
      "O ângulo de 180° obriga o doente a permanecer deitado em decúbito dorsal rigoroso sem virar a cabeça durante as quatro semanas seguintes ao exame imagiológico.",
      "A colimação a 180° faz com que a radiação gama saia unicamente pelos pés do doente, autorizando o profissional a sentar-se à cabeceira da maca sem proteção.",
      "A emissão estrita a 180° permite a 'colimação eletrónica', traçando uma Linha de Resposta (LOR) entre os dois detetores ativados simultaneamente sem usar colimadores mecânicos.",
      "A geometria de 180° impede que o doente urine nas primeiras doze horas de internamento devido ao encerramento reflexo dos esfíncteres vesicais autónomos."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para conservação do momento linear e ângulo de emissão a 180° baseia-se no princípio: O enfermeiro compreende que este alinhamento retilíneo perfeito é o que permite traçar a Linha de Resposta (LOR - Line of Response) no tomógrafo PET. Esta atuação rigorosa garante a segurança do profissional, do utente e da comunidade.",
    "distractorAnalysis": [
      "Está incorreta: ligando os dois cristais que detetam os fotões em coincidência, o computador estabelece a LOR sobre a qual o evento ocorreu; isso elimina colimadores de chumbo ineficientes.",
      "Está incorreta: a emissão a 180° refere-se à geometria subatómica dos fotões e dura nanossegundos; o doente não tem restrições posturais prolongadas de semanas.",
      "Está incorreta: a emissão de positrões é isotrópica em todas as direções espaciais tridimensionais a partir dos órgãos que captaram o radiofármaco no corpo."
    ],
    "nursingApplication": "O enfermeiro compreende que este alinhamento retilíneo perfeito é o que permite traçar a Linha de Resposta (LOR - Line of Response) no tomógrafo PET."
  },
  {
    "id": 7131,
    "topicId": 7,
    "question": "Um enfermeiro analisa o poder de penetração, mecanismos de atenuação e riscos biológicos em 'conservação do momento linear e ângulo de emissão a 180°'. Qual das seguintes afirmações expressa a correlação biofísica correta?",
    "options": [
      "A acolinearidade de 180° é um defeito de calibração eletrónica dos monitores de visualização de imagem que é corrigido aplicando filtros ópticos de cor verde.",
      "Os fotões de aniquilação viajam em trajetórias curvas circulares no interior do corpo do doente devido à força centrípeta exercida pelo batimento cardíaco.",
      "O ângulo de emissão desvia-se para noventa graus sempre que a temperatura da sala de exames desce abaixo dos dezoito graus centígrados na época do inverno.",
      "A pequena acolinearidade residual (~0,25° em torno de 180°) decorre do momento cinético residual não-nulo do par no instante do impacto, introduzindo uma incerteza de ~1-2 mm."
    ],
    "correctIndex": 3,
    "explanation": "A análise biofísica exata demonstra que Pequenas flutuações angulares térmicas (desvio de $\\pm 0,5°$) ocorrem devido ao pequeno momento residual do centro de massa. O domínio destes conhecimentos permite ao enfermeiro fundamentar a escolha de blindagens e protocolos de segurança.",
    "distractorAnalysis": [
      "Está incorreta: o par não está em repouso absoluto no momento da colisão; o pequeno momento residual faz com que os fotões não saiam exatamente a 180,0°, limitando a resolução espacial.",
      "Está incorreta: a acolinearidade é um fenómeno físico quântico intrínseco fundamental e não um artefacto de ecrãs de computador corrigível por filtros de cor.",
      "Está incorreta: no meio uniforme tecidual os fotões propagam-se em linha reta à velocidade c; não sofrem deflexão circular por batimentos cardíacos ou temperatura."
    ],
    "nursingApplication": "O enfermeiro compreende que este alinhamento retilíneo perfeito é o que permite traçar a Linha de Resposta (LOR - Line of Response) no tomógrafo PET."
  },
  {
    "id": 7132,
    "topicId": 7,
    "question": "Na física das radiações nucleares (partículas alfa, beta e fotões gama) aplicada à prática clínica, em relação a 'circuito de deteção em coincidência temporal estrita (Coincidence Circuit)', qual é a fundamentação científica correta?",
    "options": [
      "O circuito de coincidência valida um evento PET apenas se dois fotões de 511 keV forem registados por detetores opostos dentro de uma janela temporal estreita (3 a 6 nanossegundos).",
      "O circuito de coincidência opera através da comparação do peso corporal do doente antes e após a micção com um intervalo de tempo obrigatório de vinte e quatro horas.",
      "Trata-se de um sistema eletromecânico que desliga automaticamente as luzes da sala sempre que dois enfermeiros entram simultaneamente na enfermaria de doentes.",
      "O circuito baseia-se na deteção de descargas eletrostáticas acumuladas nas solas dos sapatos de borracha dos profissionais durante a ronda noturna de enfermagem."
    ],
    "correctIndex": 0,
    "explanation": "Em física nuclear e radioproteção clínica, circuito de deteção em coincidência temporal estrita (Coincidence Circuit) explica-se pelo facto de que a coroa circular de cristais cintiladores (como LSO ou BGO) do tomógrafo PET regista um evento válido apenas se dois fotões de 511 keV atingirem detetores diametralmente opostos numa janela de tempo infinitesimal de poucos nanossegundos (típico 3 a 5 ns). Se apenas um fotão for detetado ou se chegarem fora da janela temporal, o computador descarta o evento como radiação dispersa espúria.",
    "distractorAnalysis": [
      "Está incorreta: a janela temporal de coincidência (ex: 2τ ≈ 4-6 ns) assegura que apenas fotões originados da mesma aniquilação sejam correlacionados na mesma LOR.",
      "Está incorreta: o circuito é puramente eletrónico e processa pulsos lógicos a velocidades ultra-rápidas de gigahertz, sem relação com balanças de pesagem corporal.",
      "Está incorreta: não controla interruptores de iluminação nem eletricidade estática de calçado; é o coração da aquisição de dados do anel de deteção tomográfica PET."
    ],
    "nursingApplication": "Isto elimina a necessidade de colimadores físicos absorventes pesados, multiplicando a sensibilidade diagnóstica da imagem."
  },
  {
    "id": 7133,
    "topicId": 7,
    "question": "Na prestação de cuidados de enfermagem e proteção radiológica em serviços com doentes radioativos, como se aplica na prática o conceito de 'circuito de deteção em coincidência temporal estrita (Coincidence Circuit)'?",
    "options": [
      "A deteção em coincidência obriga o enfermeiro a cronometrar as pulsações radiais do doente com um relógio de corda mecânico de bolso durante o exame de imagem.",
      "A colimação eletrónica por coincidência elimina a necessidade de colimadores físicos de chumbo pesados, aumentando a sensibilidade de deteção em centenas de vezes face à SPECT.",
      "Esse circuito eletrónico faz com que as seringas utilizadas na injeção fiquem incandescentes e queimem as bancadas plásticas do laboratório hospitalar.",
      "A coincidência temporal permite administrar doses cem vezes superiores aos limites legais anuais de segurança estabelecidos pelas diretivas comunitárias."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para circuito de deteção em coincidência temporal estrita (Coincidence Circuit) baseia-se no princípio: Isto elimina a necessidade de colimadores físicos absorventes pesados, multiplicando a sensibilidade diagnóstica da imagem. Esta atuação rigorosa garante a segurança do profissional, do utente e da comunidade.",
    "distractorAnalysis": [
      "Está incorreta: na SPECT os colimadores de chumbo absorvem >99,9% dos fotões úteis; no PET a colimação eletrónica aceita ordens de grandeza mais fotões, reduzindo dose e tempo.",
      "Está incorreta: o circuito é microeletrónico e autónomo; seringas mantêm-se à temperatura ambiente e os limites de dose continuam estritamente obrigatórios.",
      "Está incorreta: o aumento de sensibilidade permite precisamente reduzir a atividade administrada ao doente, diminuindo a dose absorvida em conformidade com o ALARA."
    ],
    "nursingApplication": "Isto elimina a necessidade de colimadores físicos absorventes pesados, multiplicando a sensibilidade diagnóstica da imagem."
  },
  {
    "id": 7134,
    "topicId": 7,
    "question": "Um enfermeiro analisa o poder de penetração, mecanismos de atenuação e riscos biológicos em 'circuito de deteção em coincidência temporal estrita (Coincidence Circuit)'. Qual das seguintes afirmações expressa a correlação biofísica correta?",
    "options": [
      "As coincidências aleatórias impedem qualquer utilização clínica de scanners PET em seres humanos, limitando a técnica a ensaios laboratoriais com plantas secas.",
      "Os circuitos de coincidência modernos eliminam cem por cento de toda a radiação ionizante presente no corpo do doente no momento exato em que são ligados.",
      "Eventos de coincidência aleatória (quando dois fotões de aniquilações distintas chegam na mesma janela de tempo) e dispersos degradam o contraste, exigindo correções matemáticas.",
      "A taxa de coincidências verdadeiras é inversamente proporcional à atividade de radiofármaco injetada, anulando-se quando a dose excede dez megabecquerels."
    ],
    "correctIndex": 2,
    "explanation": "A análise biofísica exata demonstra que Se apenas um fotão for detetado ou se chegarem fora da janela temporal, o computador descarta o evento como radiação dispersa espúria. O domínio destes conhecimentos permite ao enfermeiro fundamentar a escolha de blindagens e protocolos de segurança.",
    "distractorAnalysis": [
      "Está incorreta: eventos registados compõem-se de verdadeiros, dispersos (scattered) e acidentais/aleatórios (randoms); algoritmos de correção subtraem os randoms para restaurar o contraste.",
      "Está incorreta: o PET é uma técnica clínica humana universal na oncologia, cardiologia e neurologia modernas; correções em tempo real viabilizam imagens de alta qualidade.",
      "Está incorreta: os circuitos detetam os fotões mas não apagam a radioatividade do corpo; a taxa de contagens verdadeiras cresce linearmente com a atividade."
    ],
    "nursingApplication": "Isto elimina a necessidade de colimadores físicos absorventes pesados, multiplicando a sensibilidade diagnóstica da imagem."
  },
  {
    "id": 7135,
    "topicId": 7,
    "question": "Na física das radiações nucleares (partículas alfa, beta e fotões gama) aplicada à prática clínica, em relação a 'tecnologia Time-of-Flight (TOF-PET) na reconstrução tomográfica', qual é a fundamentação científica correta?",
    "options": [
      "O sistema Time-of-Flight mede a velocidade com que a maca do doente desliza sobre os carris metálicos motorizados durante a entrada no túnel de aquisição imagiológica.",
      "Trata-se de um cronómetro mecânico acionado pelo enfermeiro para contabilizar o tempo que o doente demora a esvaziar a bexiga na casa de banho da unidade de internamento.",
      "A tecnologia TOF baseia-se na medição da velocidade de rotação do planeta Terra em torno do seu eixo para sincronizar os cristais cintiladores de medicina nuclear.",
      "A tecnologia Time-of-Flight mede a ínfima diferença de tempo de chegada (Δt em picossegundos) dos dois fotões, localizando o ponto de aniquilação na LOR segundo Δx = c · Δt / 2."
    ],
    "correctIndex": 3,
    "explanation": "Em física nuclear e radioproteção clínica, tecnologia Time-of-Flight (TOF-PET) na reconstrução tomográfica explica-se pelo facto de que os tomógrafos PET modernos medem a diferença de tempo de chegada ($\\Delta t$) entre os dois fotões com resolução de picossegundos. Como a radiação viaja à velocidade da luz, a diferença $\\Delta t$ permite localizar a aniquilação num segmento curto da LOR ($d = c \\cdot \\Delta t / 2$), melhorando espetacularmente a relação sinal-ruído da imagem em doentes obesos.",
    "distractorAnalysis": [
      "Está incorreta: cristais ultra-rápidos (ex: LSO/LYSO com resolução temporal <400 ps) permitem restringir a incerteza espacial ao longo da LOR a poucos centímetros, melhorando a relação sinal-ruído.",
      "Está incorreta: TOF mede a velocidade da luz e intervalos de picossegundos (10⁻¹² s) entre a chegada dos fotões aos detetores opostos, e não o movimento macroscópico da maca.",
      "Está incorreta: não é um cronómetro urinário nem depende da rotação terrestre; é um avanço da eletrónica de ponta que revolucionou a qualidade de imagem PET."
    ],
    "nursingApplication": "O enfermeiro reconhece os avanços tecnológicos de ponta que reduzem o tempo de exame para o doente claustrofóbico e diminuem a dose de radiofármaco necessária."
  },
  {
    "id": 7136,
    "topicId": 7,
    "question": "Na prestação de cuidados de enfermagem e proteção radiológica em serviços com doentes radioativos, como se aplica na prática o conceito de 'tecnologia Time-of-Flight (TOF-PET) na reconstrução tomográfica'?",
    "options": [
      "O TOF-PET melhora marcadamente a relação sinal-ruído (SNR) e a nitidez de imagem, especialmente em doentes com elevado índice de massa corporal (obesidade) e lesões pequenas.",
      "A tecnologia TOF obriga o enfermeiro a administrar fármacos sedativos profundos a todos os doentes para evitar qualquer movimento respiratório dos pulmões durante o exame.",
      "O uso de Time-of-Flight torna desnecessária a utilização de radiofármacos injetáveis, operando através da leitura de ondas cerebrais captadas por sensores de contacto dérmico.",
      "A tecnologia TOF emite feixes contínuos de partículas alfa que queimam as gorduras corporais do utente, reduzindo o seu peso em cinco quilos no término do exame."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para tecnologia Time-of-Flight (TOF-PET) na reconstrução tomográfica baseia-se no princípio: O enfermeiro reconhece os avanços tecnológicos de ponta que reduzem o tempo de exame para o doente claustrofóbico e diminuem a dose de radiofármaco necessária. Esta atuação rigorosa garante a segurança do profissional, do utente e da comunidade.",
    "distractorAnalysis": [
      "Está incorreta: o ganho na relação sinal-ruído é proporcional a √(D / Δx), onde D é o diâmetro do doente; em doentes obesos o ganho de qualidade é substancial, melhorando a deteção tumoral.",
      "Está incorreta: sedação profunda não é necessária; doentes respiram normalmente e permanecem acordados e confortáveis durante a aquisição tomográfica rápida.",
      "Está incorreta: o TOF é uma funcionalidade dos detetores de radiação de aniquilação gama de radiofármacos PET; não lê ondas cerebrais nem queima gorduras corporais."
    ],
    "nursingApplication": "O enfermeiro reconhece os avanços tecnológicos de ponta que reduzem o tempo de exame para o doente claustrofóbico e diminuem a dose de radiofármaco necessária."
  },
  {
    "id": 7137,
    "topicId": 7,
    "question": "Um enfermeiro analisa o poder de penetração, mecanismos de atenuação e riscos biológicos em 'tecnologia Time-of-Flight (TOF-PET) na reconstrução tomográfica'. Qual das seguintes afirmações expressa a correlação biofísica correta?",
    "options": [
      "Uma resolução temporal de 400 ps permite calcular a posição do doente com uma precisão matemática infinita de zero milímetros sem qualquer erro instrumental associado.",
      "Uma resolução temporal de 400 picossegundos (400 × 10⁻¹² s) restringe a posição da aniquilação a um segmento de apenas seis centímetros ao longo da linha de resposta de 80 cm.",
      "A resolução de tempo do TOF-PET degrada a imagem porque os computadores hospitalares são incapazes de processar intervalos de tempo inferiores a dez minutos.",
      "O parâmetro temporal do TOF-PET é calculado dividindo a massa do cristal cintilador pela pressão hidrostática do óleo de arrefecimento do transformador de rede."
    ],
    "correctIndex": 1,
    "explanation": "A análise biofísica exata demonstra que Como a radiação viaja à velocidade da luz, a diferença $\\Delta t$ permite localizar a aniquilação num segmento curto da LOR ($d = c \\cdot \\Delta t / 2$), melhorando espetacularmente a relação sinal-ruído da imagem em doentes obesos. O domínio destes conhecimentos permite ao enfermeiro fundamentar a escolha de blindagens e protocolos de segurança.",
    "distractorAnalysis": [
      "Está incorreta: Δx = (c × Δt) / 2 = (3 × 10¹⁰ cm/s × 400 × 10⁻¹² s) / 2 = 6,0 cm; em vez de distribuir a probabilidade por toda a LOR (~80 cm), ela é confinada a 6 cm.",
      "Está incorreta: precisão infinita é proibida pela física; incertezas nos tempos de subida de cintilação e transit-time-spread de fotomultiplicadores limitam a resolução temporal.",
      "Está incorreta: placas de processamento digital de sinal (FPGA/ASIC) processam petabytes de dados em nanossegundos, melhorando dramaticamente a reconstrução iterativa."
    ],
    "nursingApplication": "O enfermeiro reconhece os avanços tecnológicos de ponta que reduzem o tempo de exame para o doente claustrofóbico e diminuem a dose de radiofármaco necessária."
  },
  {
    "id": 7138,
    "topicId": 7,
    "question": "Na física das radiações nucleares (partículas alfa, beta e fotões gama) aplicada à prática clínica, em relação a 'dose de exposição externa proveniente do doente pós-PET', qual é a fundamentação científica correta?",
    "options": [
      "O doente pós-PET não emite qualquer tipo de radiação ionizante externa porque todos os fotões são integralmente absorvidos pela pele do abdómen e membros.",
      "A taxa de dose externa a um metro do doente pós-PET é de dez Sieverts por segundo, exigindo que o quarto seja evacuado e selado com portas de chumbo de meio metro.",
      "O doente injetado emite fotões de 511 keV, originando uma taxa de dose de cerca de 15 a 25 µSv/h a 1 metro de distância logo após a administração de 250 a 370 MBq de ¹⁸F-FDG.",
      "A exposição externa proveniente do doente pós-PET é composta exclusivamente por partículas alfa pesadas que viajam no ar ambiente hospitalar durante vários dias."
    ],
    "correctIndex": 2,
    "explanation": "Em física nuclear e radioproteção clínica, dose de exposição externa proveniente do doente pós-PET explica-se pelo facto de que após receber a injeção de ¹⁸F-FDG, o doente emite ativamente fotões de 511 keV que escapam do seu corpo em todas as direções. A taxa de dose à superfície do tórax do doente pode atingir 50 a 100 $\\mu$Sv/h imediatamente após a injeção de uma dose clínica padrão de 250 a 370 MBq.",
    "distractorAnalysis": [
      "Está incorreta: os fotões de 511 keV penetram o tecido do doente e irradiam o ambiente externo; a taxa de dose inicial a 1 metro situa-se tipicamente entre 15 e 25 µSv/h para doses padrão de FDG.",
      "Está incorreta: cerca de 50 a 60% dos fotões de 511 keV conseguem escapar do corpo humano sem interagir, constituindo uma fonte de irradiação externa mensurável.",
      "Está incorreta: 10 Sv/s seria uma taxa catastrófica impossível na medicina nuclear diagnóstica; a taxa real situa-se na escala segura de dezenas de microsieverts por hora (µSv/h)."
    ],
    "nursingApplication": "O enfermeiro mantém uma distância de pelo menos 1 a 2 metros sempre que possível, comunicando com o doente através do intercomunicador durante a fase de repouso pré-exame."
  },
  {
    "id": 7139,
    "topicId": 7,
    "question": "Na prestação de cuidados de enfermagem e proteção radiológica em serviços com doentes radioativos, como se aplica na prática o conceito de 'dose de exposição externa proveniente do doente pós-PET'?",
    "options": [
      "O enfermeiro deve permanecer abraçado ao doente durante quarenta minutos após a injeção para absorver a radiação de 511 keV com o seu próprio corpo protetor.",
      "A equipa de enfermagem deve proibir o doente de respirar durante todo o período de repouso no quarto para evitar a emissão de aerossóis de antimatéria radioativa.",
      "A proteção dos profissionais exige o isolamento do doente num bunker subterrâneo durante trinta dias consecutivos após qualquer exame com ¹⁸F-FDG.",
      "O enfermeiro gere a radioproteção aplicando o princípio do tempo e da distância: comunicar mantendo afastamento seguro (>1-2 metros) e restringir o tempo de contacto direto no leito."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para dose de exposição externa proveniente do doente pós-PET baseia-se no princípio: O enfermeiro mantém uma distância de pelo menos 1 a 2 metros sempre que possível, comunicando com o doente através do intercomunicador durante a fase de repouso pré-exame. Esta atuação rigorosa garante a segurança do profissional, do utente e da comunidade.",
    "distractorAnalysis": [
      "Está incorreta: pela lei do inverso do quadrado, duplicar a distância de 0,5 m para 1 m reduz a taxa de dose para 1/4; a 2 metros cai para 1/16; tempo curto e distância são as melhores defesas.",
      "Está incorreta: o contacto físico próximo desnecessário aumentaria exponencialmente a dose recebida na pele e órgãos do operador, violando os princípios de proteção radiológica.",
      "Está incorreta: o doente respira normalmente; como a semivida do Flúor-18 é de 110 min (~1,8 h), após 6 horas a taxa de dose cai para níveis mínimos, permitindo a saída do centro."
    ],
    "nursingApplication": "O enfermeiro mantém uma distância de pelo menos 1 a 2 metros sempre que possível, comunicando com o doente através do intercomunicador durante a fase de repouso pré-exame."
  },
  {
    "id": 7140,
    "topicId": 7,
    "question": "Um enfermeiro analisa o poder de penetração, mecanismos de atenuação e riscos biológicos em 'dose de exposição externa proveniente do doente pós-PET'. Qual das seguintes afirmações expressa a correlação biofísica correta?",
    "options": [
      "Como a semivida do Flúor-18 é de 110 minutos e ocorre excreção urinária contínua, a taxa de dose externa decai rapidamente para valores negligenciáveis ao fim de 4 a 6 horas.",
      "A taxa de dose externa mantém-se inalterada durante duzentos anos porque o Flúor-18 não decai quando incorporado em moléculas orgânicas de desoxiglicose.",
      "A dose externa diminui instantaneamente para zero se o doente beber um copo de leite de vaca integral logo após o término da aquisição na mesa tomográfica.",
      "A taxa de dose externa duplica a cada hora que passa em virtude da replicação biológica contínua dos átomos de flúor radioativo no interior das hemácias."
    ],
    "correctIndex": 0,
    "explanation": "A análise biofísica exata demonstra que A taxa de dose à superfície do tórax do doente pode atingir 50 a 100 $\\mu$Sv/h imediatamente após a injeção de uma dose clínica padrão de 250 a 370 MBq. O domínio destes conhecimentos permite ao enfermeiro fundamentar a escolha de blindagens e protocolos de segurança.",
    "distractorAnalysis": [
      "Está incorreta: a conjugação da semivida física curta (T1/2 = 109,8 min) com a semivida biológica (eliminação na urina) faz com que após 5-6 horas a atividade residual seja <10% da inicial.",
      "Está incorreta: o decaimento nuclear do ¹⁸F é imutável e exponencial; átomos radioativos não se replicam biologicamente como bactérias e o leite não altera o decaimento quântico.",
      "Está incorreta: a semivida efetiva garante a segurança do doente e conviventes, permitindo o regresso a casa após o exame com precauções simples nas primeiras horas."
    ],
    "nursingApplication": "O enfermeiro mantém uma distância de pelo menos 1 a 2 metros sempre que possível, comunicando com o doente através do intercomunicador durante a fase de repouso pré-exame."
  },
  {
    "id": 7141,
    "topicId": 7,
    "question": "Na física das radiações nucleares (partículas alfa, beta e fotões gama) aplicada à prática clínica, em relação a 'regra de ouro da blindagem para emissores beta puros', qual é a fundamentação científica correta?",
    "options": [
      "A regra consiste em utilizar sempre chapas de chumbo maciço com vinte centímetros de espessura como barreira imediata única em contacto direto com o frasco de beta.",
      "A regra de ouro para blindar emissores beta puros é utilizar materiais de baixo número atómico Z (acrílico, plástico, Lucite), prevenindo a formação de Bremsstrahlung.",
      "A regra de ouro dita que os emissores beta puros devem ser mantidos sem qualquer blindagem ao ar livre porque os eletrões repelem-se mutuamente para fora da sala.",
      "A blindagem deve ser realizada exclusivamente com folhas de papel de jornal humedecidas em álcool etílico para absorver a carga estática dos eletrões emitidos."
    ],
    "correctIndex": 1,
    "explanation": "Em física nuclear e radioproteção clínica, regra de ouro da blindagem para emissores beta puros explica-se pelo facto de que devem ser blindados EXCLUSIVAMENTE com materiais de baixo número atómico ($Z$ baixo), como plástico, acrílico (Lucite/Plexiglas), vidro ou alumínio, e NUNCA diretamente com chumbo denso. Materiais com $Z$ baixo têm poucos protões nucleares, desacelerando os eletrões rápidos por colisões ionizantes suaves sem emitir radiação de travagem perigosa.",
    "distractorAnalysis": [
      "Está incorreta: a geração de raios X secundários de travamento (Bremsstrahlung) é proporcional a Z; usar acrílico (Z médio ≈ 6) absorve 100% dos eletrões com Bremsstrahlung mínimo.",
      "Está incorreta: chumbo direto (Z = 82) geraria intensa radiação X de travamento penetrante, transformando uma fonte pura de eletrões numa fonte de raios X perigosos.",
      "Está incorreta: recipientes sem blindagem causariam taxas de dose de contacto cutâneas extremas; papel e álcool não atenuam a radiação corpuscular beta de alta energia."
    ],
    "nursingApplication": "O enfermeiro segue esta norma de segurança ao preparar e administrar doses de Estrôncio-89, Fósforo-32 ou Ítrio-90."
  },
  {
    "id": 7142,
    "topicId": 7,
    "question": "Na prestação de cuidados de enfermagem e proteção radiológica em serviços com doentes radioativos, como se aplica na prática o conceito de 'regra de ouro da blindagem para emissores beta puros'?",
    "options": [
      "O enfermeiro deve embrulhar as ampolas de emissores beta em mantas térmicas elétricas aquecidas a sessenta graus para manter a estabilidade do radioisótopo.",
      "A regra autoriza o enfermeiro a manusear frascos de emissores beta diretamente com as mãos sem necessidade de luvas se a sala estiver bem ventilada.",
      "O enfermeiro deve verificar que os protetores de seringa e contentores para ⁹⁰Y ou ³²P são de acrílico/plástico transparente e nunca de chumbo desnudado puro.",
      "A prática correta é colocar a seringa de emissor beta dentro de um balde de água corrente potável da rede pública durante todo o período de administração endovenosa."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para regra de ouro da blindagem para emissores beta puros baseia-se no princípio: O enfermeiro segue esta norma de segurança ao preparar e administrar doses de Estrôncio-89, Fósforo-32 ou Ítrio-90. Esta atuação rigorosa garante a segurança do profissional, do utente e da comunidade.",
    "distractorAnalysis": [
      "Está incorreta: o uso de protetores de acrílico espesso (tipicamente 10 mm) é a conduta padrão de enfermagem para emissores beta puros como o Ítrio-90 e Fósforo-32.",
      "Está incorreta: o aquecimento térmico não altera decaimentos nucleares e degrada vetores moleculares sensíveis (como anticorpos monoclonais ou péptidos).",
      "Está incorreta: o uso de luvas descartáveis e pinças é mandatório para prevenir contaminação cutânea; baldes de água corrente dispersariam a contaminação."
    ],
    "nursingApplication": "O enfermeiro segue esta norma de segurança ao preparar e administrar doses de Estrôncio-89, Fósforo-32 ou Ítrio-90."
  },
  {
    "id": 7143,
    "topicId": 7,
    "question": "Um enfermeiro analisa o poder de penetração, mecanismos de atenuação e riscos biológicos em 'regra de ouro da blindagem para emissores beta puros'. Qual das seguintes afirmações expressa a correlação biofísica correta?",
    "options": [
      "A produção de radiação de travamento é inversamente proporcional ao número atómico do material, sendo máxima no hidrogénio gasoso e nula no chumbo metálico.",
      "A quantidade de Bremsstrahlung é estritamente independente da energia dos eletrões e do material de blindagem, sendo constante em qualquer meio absorvente.",
      "O Bremsstrahlung ocorre unicamente quando os eletrões colidem com núcleos de hélio a velocidades inferiores a dez quilómetros por hora no interior da seringa.",
      "A fração da energia da partícula beta convertida em Bremsstrahlung na matéria é estimada pela relação f_b ≈ 3,5 × 10⁻⁴ · Z · E_max (com E em MeV), crescendo diretamente com Z."
    ],
    "correctIndex": 3,
    "explanation": "A análise biofísica exata demonstra que Materiais com $Z$ baixo têm poucos protões nucleares, desacelerando os eletrões rápidos por colisões ionizantes suaves sem emitir radiação de travagem perigosa. O domínio destes conhecimentos permite ao enfermeiro fundamentar a escolha de blindagens e protocolos de segurança.",
    "distractorAnalysis": [
      "Está incorreta: a fórmula f_b ≈ 3,5 × 10⁻⁴ · Z · E_max prova que para ⁹⁰Y (E_max = 2,28 MeV), blindar em Chumbo (Z=82) converte ~6,5% da energia em raios X, mas em acrílico (Z≈6) converte <0,5%.",
      "Está incorreta: a desaceleração coulombiana cresce com a carga nuclear Z do absorvente; materiais de alto Z produzem muito mais Bremsstrahlung.",
      "Está incorreta: a perda radiativa depende de Z² da matéria e de (E/m)² da partícula carregada, sendo crítica para eletrões rápidos e desprezável para partículas pesadas."
    ],
    "nursingApplication": "O enfermeiro segue esta norma de segurança ao preparar e administrar doses de Estrôncio-89, Fósforo-32 ou Ítrio-90."
  },
  {
    "id": 7144,
    "topicId": 7,
    "question": "Na física das radiações nucleares (partículas alfa, beta e fotões gama) aplicada à prática clínica, em relação a 'génese perigosa de Bremsstrahlung quando se usa chumbo com emissores beta', qual é a fundamentação científica correta?",
    "options": [
      "Ao colidirem com núcleos pesados de Chumbo (Z = 82), os eletrões beta sofrem desaceleração violenta, convertendo energia cinética em fotões de raios X contínuos penetrantes.",
      "O chumbo reage quimicamente com os eletrões libertando vapores tóxicos de monóxido de carbono que asfixiam a equipa de enfermagem presente na sala.",
      "O perigo do chumbo reside no facto de este se transformar espontaneamente em mercúrio líquido quando exposto a feixes contínuos de partículas beta negativas.",
      "Os eletrões beta atravessam o chumbo sem qualquer interação mas aceleram os neutrões da parede da sala tornando os biombos estruturais altamente radioativos."
    ],
    "correctIndex": 0,
    "explanation": "Em física nuclear e radioproteção clínica, génese perigosa de Bremsstrahlung quando se usa chumbo com emissores beta explica-se pelo facto de que a intensidade da radiação de travagem (Raios X de Bremsstrahlung) gerada pela desaceleração de partículas beta é diretamente proporcional ao número atómico do escudo ($I \\propto Z$). Se uma fonte beta pura potente de alta energia (como o Ítrio-90) for colocada num recipiente de chumbo ($Z = 82$), os eletrões ao chocarem com o chumbo desaceleram violentamente, gerando uma quantidade maciça de Raios X penetrantes que escapam para a sala.",
    "distractorAnalysis": [
      "Está incorreta: Bremsstrahlung (radiação de travamento) é a radiação X contínua emitida pela deflexão/desaceleração de partículas carregadas no campo elétrico do núcleo atómico.",
      "Está incorreta: o chumbo é um elemento metálico inorgânico estável que não liberta monóxido de carbono nem mercúrio sob bombardeamento de eletrões clínicos.",
      "Está incorreta: eletrões não ativam materiais com neutrões; o risco de usar chumbo puro é transformar radiação beta facilmente travável em radiação X penetrante."
    ],
    "nursingApplication": "Ao tentar proteger-se com chumbo, o profissional acaba por transformar a fonte de partículas de curto alcance num emissor involuntário de Raios X altamente penetrantes!"
  },
  {
    "id": 7145,
    "topicId": 7,
    "question": "Na prestação de cuidados de enfermagem e proteção radiológica em serviços com doentes radioativos, como se aplica na prática o conceito de 'génese perigosa de Bremsstrahlung quando se usa chumbo com emissores beta'?",
    "options": [
      "O uso de contentores de chumbo faz com que a solução de radiofármaco congele instantaneamente no interior da seringa de vidro antes da administração.",
      "Se o enfermeiro colocar uma fonte intensa de emissor beta de alta energia (como ⁹⁰Y) diretamente num contentor de chumbo fino, a taxa de dose externa de raios X na sala aumenta.",
      "O enfermeiro deve evitar o chumbo porque este elemento atrai magneticamente as agulhas cirúrgicas provocando acidentes por picada nos profissionais.",
      "A génese de Bremsstrahlung faz com que os doentes fiquem temporariamente cegos durante a realização de cintigrafias na câmara gama hospitalar."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para génese perigosa de Bremsstrahlung quando se usa chumbo com emissores beta baseia-se no princípio: Ao tentar proteger-se com chumbo, o profissional acaba por transformar a fonte de partículas de curto alcance num emissor involuntário de Raios X altamente penetrantes! Esta atuação rigorosa garante a segurança do profissional, do utente e da comunidade.",
    "distractorAnalysis": [
      "Está incorreta: o operador que usa chumbo desnudado para emissores beta intensos pode receber uma dose de radiação X de travamento superior à que receberia se usasse plástico.",
      "Está incorreta: o Bremsstrahlung é radiação eletromagnética ionizante e não congelamento térmico; chumbo não é ferromagnético nem afeta a visão do doente.",
      "Está incorreta: a blindagem adequada previne a exposição ocupacional desnecessária a raios X secundários gerados pelo travamento dos eletrões de alta velocidade."
    ],
    "nursingApplication": "Ao tentar proteger-se com chumbo, o profissional acaba por transformar a fonte de partículas de curto alcance num emissor involuntário de Raios X altamente penetrantes!"
  },
  {
    "id": 7146,
    "topicId": 7,
    "question": "Um enfermeiro analisa o poder de penetração, mecanismos de atenuação e riscos biológicos em 'génese perigosa de Bremsstrahlung quando se usa chumbo com emissores beta'. Qual das seguintes afirmações expressa a correlação biofísica correta?",
    "options": [
      "Os fotões de Bremsstrahlung são monoenergéticos e apresentam rigorosamente a mesma frequência de oscilação que as ondas sonoras audíveis pelo ser humano.",
      "A radiação de travamento é absorvida na totalidade por uma folha de papel de seda de espessura microscópica colocada sobre a bancada da câmara quente.",
      "O espetro de Bremsstrahlung é contínuo e estende-se até à energia máxima da partícula beta (E_max), gerando fotões que exigem blindagens adicionais para serem atenuados.",
      "A intensidade do Bremsstrahlung é nula para partículas beta com energia cinética superior a um megaeletrão-volt nas experiências laboratoriais."
    ],
    "correctIndex": 2,
    "explanation": "A análise biofísica exata demonstra que Se uma fonte beta pura potente de alta energia (como o Ítrio-90) for colocada num recipiente de chumbo ($Z = 82$), os eletrões ao chocarem com o chumbo desaceleram violentamente, gerando uma quantidade maciça de Raios X penetrantes que escapam para a sala. O domínio destes conhecimentos permite ao enfermeiro fundamentar a escolha de blindagens e protocolos de segurança.",
    "distractorAnalysis": [
      "Está incorreta: a desaceleração estatística no campo nuclear produz um espetro contínuo de raios X com energia de zero até E_max da partícula beta incidente.",
      "Está incorreta: Bremsstrahlung é radiação eletromagnética ionizante contínua (como nos tubos de raios X convencionais) e não ondas acústicas monoenergéticas.",
      "Está incorreta: raios X de travamento com energias de centenas de keV atravessam papel e tecidos biológicos com facilidade, exigindo chumbo para atenuação."
    ],
    "nursingApplication": "Ao tentar proteger-se com chumbo, o profissional acaba por transformar a fonte de partículas de curto alcance num emissor involuntário de Raios X altamente penetrantes!"
  },
  {
    "id": 7147,
    "topicId": 7,
    "question": "Na física das radiações nucleares (partículas alfa, beta e fotões gama) aplicada à prática clínica, em relação a 'blindagem composta multicamada (blindagem em sanduíche)', qual é a fundamentação científica correta?",
    "options": [
      "Consiste na alternância de camadas de papel de jornal e toalhas de algodão humedecido para arrefecer o radiofármaco antes da administração intravenosa.",
      "Trata-se de uma parede de betão armado revestida internamente com placas de madeira maciça de carvalho para absorver a humidade do quarto do doente.",
      "A blindagem em sanduíche é um contentor de chumbo maciço revestido no exterior por borracha condutora de eletricidade estática ligada à terra.",
      "Uma blindagem multicamada combina uma camada interna de baixo Z (acrílico) para travar os eletrões beta e uma camada externa de alto Z (chumbo) para absorver o Bremsstrahlung."
    ],
    "correctIndex": 3,
    "explanation": "Em física nuclear e radioproteção clínica, blindagem composta multicamada (blindagem em sanduíche) explica-se pelo facto de que quando a atividade de um emissor beta é extremamente elevada ou quando o isótopo emite simultaneamente radiação beta e gama, utiliza-se uma blindagem combinada em duas camadas. A primeira camada interna é de plástico ou acrílico grosso (Z baixo) para absorver todas as partículas beta sem produzir Bremsstrahlung; a segunda camada externa é de chumbo (Z alto) para atenuar os fotões gama residuais.",
    "distractorAnalysis": [
      "Está incorreta: a camada interna de acrílico/plástico para as partículas beta minimizando o Bremsstrahlung; o pouco Bremsstrahlung gerado é então absorvido pela fina camada externa de chumbo.",
      "Está incorreta: toalhas e papel não atenuam a radiação de travamento penetrante nem constituem blindagens calibradas segundo as normas de proteção radiológica.",
      "Está incorreta: a regra física é estrita: baixo Z no interior (onde incidem os eletrões) e alto Z no exterior (para atenuar os fotões X secundários)."
    ],
    "nursingApplication": "O enfermeiro identifica contentores de transporte especializados de duas camadas na câmara quente de medicina nuclear."
  },
  {
    "id": 7148,
    "topicId": 7,
    "question": "Na prestação de cuidados de enfermagem e proteção radiológica em serviços com doentes radioativos, como se aplica na prática o conceito de 'blindagem composta multicamada (blindagem em sanduíche)'?",
    "options": [
      "Contentores comerciais de transporte e protetores de seringa para ⁹⁰Y e ³²P utilizam esta conceção (acrílico transparente interior com anel de chumbo exterior) para máxima proteção.",
      "O enfermeiro deve aplicar a blindagem multicamada diretamente sobre a pele do tórax do doente através de ligaduras adesivas de gesso cirúrgico estéril.",
      "Essa blindagem permite que a equipa de enfermagem dispense a higienização das mãos entre diferentes procedimentos com doentes internados na enfermaria.",
      "A utilização de blindagens em sanduíche torna os frascos de radiofármacos imunes a quedas mecânicas no chão por anulação das forças de gravitação."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para blindagem composta multicamada (blindagem em sanduíche) baseia-se no princípio: O enfermeiro identifica contentores de transporte especializados de duas camadas na câmara quente de medicina nuclear. Esta atuação rigorosa garante a segurança do profissional, do utente e da comunidade.",
    "distractorAnalysis": [
      "Está incorreta: esta geometria garante retenção total dos eletrões beta no acrílico e atenuação de >95% do Bremsstrahlung residual no chumbo, protegendo as mãos do operador.",
      "Está incorreta: blindagens são aplicadas aos recipientes e seringas de administração, nunca coladas ao corpo do doente com ligaduras de gesso.",
      "Está incorreta: a assepsia e higienização das mãos são imperativos biológicos universais; blindagens não anulam a gravidade nem impedem quebras físicas de ampolas."
    ],
    "nursingApplication": "O enfermeiro identifica contentores de transporte especializados de duas camadas na câmara quente de medicina nuclear."
  },
  {
    "id": 7149,
    "topicId": 7,
    "question": "Um enfermeiro analisa o poder de penetração, mecanismos de atenuação e riscos biológicos em 'blindagem composta multicamada (blindagem em sanduíche)'. Qual das seguintes afirmações expressa a correlação biofísica correta?",
    "options": [
      "A ordem das camadas na blindagem composta é indiferente porque os eletrões beta transformam-se em fotões gama logo que saem do frasco de vidro.",
      "Inverter a ordem das camadas (colocar chumbo no interior e plástico no exterior) é um erro grave de física das radiações que maximiza a dose de raios X na sala.",
      "Colocar chumbo no interior é a técnica recomendada pelas agências internacionais para acelerar o decaimento radioativo dos emissores beta hospitalares.",
      "A camada de plástico exterior serve exclusivamente para conferir uma cor decorativa agradável aos recipientes utilizados na farmácia do hospital."
    ],
    "correctIndex": 1,
    "explanation": "A análise biofísica exata demonstra que A primeira camada interna é de plástico ou acrílico grosso (Z baixo) para absorver todas as partículas beta sem produzir Bremsstrahlung; a segunda camada externa é de chumbo (Z alto) para atenuar os fotões gama residuais. O domínio destes conhecimentos permite ao enfermeiro fundamentar a escolha de blindagens e protocolos de segurança.",
    "distractorAnalysis": [
      "Está incorreta: se o chumbo estiver no interior, os eletrões colidem com núcleos de alto Z gerando alta intensidade de Bremsstrahlung, que o plástico exterior não consegue atenuar.",
      "Está incorreta: a física da interação impõe a ordem estrita: baixo Z primeiro (absorção colisional pura) e alto Z depois (absorção fotoelétrica dos raios X secundários).",
      "Está incorreta: a taxa de decaimento nuclear é uma propriedade intrínseca que não pode ser alterada por camadas de chumbo ou plástico da blindagem."
    ],
    "nursingApplication": "O enfermeiro identifica contentores de transporte especializados de duas camadas na câmara quente de medicina nuclear."
  },
  {
    "id": 7150,
    "topicId": 7,
    "question": "Na física das radiações nucleares (partículas alfa, beta e fotões gama) aplicada à prática clínica, em relação a 'espessura necessária de acrílico para travar partículas beta', qual é a fundamentação científica correta?",
    "options": [
      "São necessários pelo menos três metros de acrílico maciço para travar as partículas beta emitidas por radiofármacos hospitalares em solução aquosa.",
      "Uma película de acrílico de cinco micrómetros é suficiente para absorver a totalidade dos eletrões beta emitidos pelo Fósforo-32 e Ítrio-90.",
      "Para travar 100% das partículas beta de alta energia do ⁹⁰Y (E_max = 2,28 MeV), uma espessura de 10 mm de acrílico (Lucite/PMMA) é suficiente e proporciona margem de segurança.",
      "O acrílico não consegue travar qualquer partícula beta, sendo os eletrões absorvidos unicamente por água pesada mantida a noventa graus centígrados."
    ],
    "correctIndex": 2,
    "explanation": "Em física nuclear e radioproteção clínica, espessura necessária de acrílico para travar partículas beta explica-se pelo facto de que para travar partículas $\\beta^-$ com $E_{max} = 2,28$ MeV (como as do Ítrio-90), é necessária uma espessura de apenas 1,0 a 1,2 cm de acrílico transparente. Para o Iodo-131 ($E_{max} = 0,6$ MeV), escassos 3 mm de plástico ou a própria parede de uma seringa de plástico convencional absorvem a grande maioria das partículas beta.",
    "distractorAnalysis": [
      "Está incorreta: o alcance máximo do ⁹⁰Y em água/tecido é ~11 mm; no acrílico (densidade ρ ≈ 1,18 g/cm³), R_max ≈ 1,1 g/cm² / 1,18 g/cm³ ≈ 9,3 mm; 10 mm garante retenção completa.",
      "Está incorreta: 3 metros seria um exagero incomportável (metro de acrílico absorveria neutrões ou fotões); 1 cm é a escala real de espessura de protetores de seringa.",
      "Está incorreta: 5 micrómetros reteria apenas partículas alfa ou eletrões de ultrabaixa energia (como trítio); para ⁹⁰Y ou ³²P (E_max > 1,7 MeV) requer-se cerca de 10 mm."
    ],
    "nursingApplication": "O enfermeiro manuseia o protetor de seringa em acrílico transparente que permite visualizar o volume aspirado em mililitros sem expor as mãos."
  },
  {
    "id": 7151,
    "topicId": 7,
    "question": "Na prestação de cuidados de enfermagem e proteção radiológica em serviços com doentes radioativos, como se aplica na prática o conceito de 'espessura necessária de acrílico para travar partículas beta'?",
    "options": [
      "A espessura de acrílico deve ser de vinte centímetros em todos os procedimentos para evitar que os neutrões rápidos de fissão atravessem a bancada do laboratório.",
      "O acrílico deve ser aquecido a noventa graus centígrados imediatamente antes da injeção para amolecer a sua estrutura polimérica e absorver mais carga elétrica.",
      "O enfermeiro deve substituir o acrílico por cortiça natural não-tratada para impedir a fuga espontânea de radiação térmica infravermelha para o quarto do doente.",
      "Na rotina hospitalar, suportes de bancada e protetores de seringa com 10 mm de acrílico garantem absorção total de eletrões beta duros (como ⁹⁰Y), mantendo visibilidade e leveza."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para espessura necessária de acrílico para travar partículas beta baseia-se no princípio: O enfermeiro manuseia o protetor de seringa em acrílico transparente que permite visualizar o volume aspirado em mililitros sem expor as mãos. Esta atuação rigorosa garante a segurança do profissional, do utente e da comunidade.",
    "distractorAnalysis": [
      "Está incorreta: 10 mm de acrílico transparente (PMMA) supera o alcance máximo de qualquer emissor beta clínico de uso corrente, aliando segurança radiológica a excelente ergonomia visual.",
      "Está incorreta: 20 cm de acrílico seria excessivo e inviabilizaria a manipulação fina de seringas; radiofármacos beta clínicos não emitem neutrões rápidos de fissão.",
      "Está incorreta: o acrílico é manipulado à temperatura ambiente estável; cortiça não oferece atenuação dosimétrica calibrada para radiação beta de alta energia."
    ],
    "nursingApplication": "O enfermeiro manuseia o protetor de seringa em acrílico transparente que permite visualizar o volume aspirado em mililitros sem expor as mãos."
  },
  {
    "id": 7152,
    "topicId": 7,
    "question": "Um enfermeiro analisa o poder de penetração, mecanismos de atenuação e riscos biológicos em 'espessura necessária de acrílico para travar partículas beta'. Qual das seguintes afirmações expressa a correlação biofísica correta?",
    "options": [
      "O alcance máximo mássico de eletrões com E > 1 MeV é dado aproximadamente por R_max ≈ 0,542 · E_max - 0,133 (em g/cm²), que dividido pela densidade dita a espessura em cm.",
      "A espessura requerida de acrílico cresce com o cubo da constante de Planck, tornando impossível travar eletrões que possuam velocidade superior a dez metros por segundo.",
      "A atenuação de partículas beta no acrílico obedece à lei do inverso do quadrado da distância com coeficiente de absorção nulo em todo o espetro de energia.",
      "O cálculo da espessura de plástico baseia-se unicamente no teor de glicose da solução injetável, sendo independente da energia cinética da partícula emitida."
    ],
    "correctIndex": 0,
    "explanation": "A análise biofísica exata demonstra que Para o Iodo-131 ($E_{max} = 0,6$ MeV), escassos 3 mm de plástico ou a própria parede de uma seringa de plástico convencional absorvem a grande maioria das partículas beta. O domínio destes conhecimentos permite ao enfermeiro fundamentar a escolha de blindagens e protocolos de segurança.",
    "distractorAnalysis": [
      "Está incorreta: a relação empírica de Katz-Penfold (R_max em g/cm²) dividida pela densidade do acrílico (ρ ≈ 1,18 g/cm³) calcula a espessura milimétrica exata para retenção de 100%.",
      "Está incorreta: a mecânica de travamento colisional de partículas carregadas depende de grandezas macroscópicas clássicas e quânticas bem definidas pela equação de Bethe-Bloch.",
      "Está incorreta: a lei do inverso do quadrado rege a atenuação geométrica espacial e não a absorção material em blindagens sólidas; depende diretamente da energia máxima da beta."
    ],
    "nursingApplication": "O enfermeiro manuseia o protetor de seringa em acrílico transparente que permite visualizar o volume aspirado em mililitros sem expor as mãos."
  },
  {
    "id": 7153,
    "topicId": 7,
    "question": "Na física das radiações nucleares (partículas alfa, beta e fotões gama) aplicada à prática clínica, em relação a 'segurança no manuseamento de derrames de líquidos com emissores beta', qual é a fundamentação científica correta?",
    "options": [
      "A equipa de enfermagem deve utilizar mangueiras de jardim para lavar o chão em direção aos corredores gerais de passagem pedonal da enfermaria hospitalar.",
      "Em derrames de líquidos com emissores beta, a prioridade é absorver o líquido com papel sem espalhar, proteger a pele com luvas e calçado impermeável e usar pinças compridas.",
      "O derrame deve ser neutralizado deitando ácido sulfúrico concentrado sobre a poça para dissolver quimicamente os protões dos núcleos atómicos em repouso.",
      "O protocolo hospitalar exige a evacuação de toda a cidade num raio de cinquenta quilómetros sempre que cai uma gota de solução de tecnécio no pavimento."
    ],
    "correctIndex": 1,
    "explanation": "Em física nuclear e radioproteção clínica, segurança no manuseamento de derrames de líquidos com emissores beta explica-se pelo facto de que em caso de derrame acidental de uma solução contendo emissor beta sobre a bancada, o enfermeiro utiliza papel absorvente impermeabilizado e pinças longas. O material contaminado é depositado em sacos plásticos espessos identificados e guardados em caixas de plástico grosso no abrigo de resíduos radioativos.",
    "distractorAnalysis": [
      "Está incorreta: a contenção com papel absorvente da periferia para o centro impede a dispersão da contaminação; cobre-sapatos e luvas duplas previnem a fixação na pele.",
      "Está incorreta: usar água corrente ou mangueiras espalharia o contaminante para outras áreas e para a rede de águas pluviais; ácidos concentrados causariam vapores perigosos.",
      "Está incorreta: a área de isolamento é local e restrita à sala do derrame; planos de emergência interna contêm o incidente sem alarme público desnecessário."
    ],
    "nursingApplication": "O enfermeiro realiza a monitorização da superfície da bancada e das próprias luvas com monitor de contaminação portátil de sonda Geiger-Müller com janela fina de mica."
  },
  {
    "id": 7154,
    "topicId": 7,
    "question": "Na prestação de cuidados de enfermagem e proteção radiológica em serviços com doentes radioativos, como se aplica na prática o conceito de 'segurança no manuseamento de derrames de líquidos com emissores beta'?",
    "options": [
      "A confirmação da limpeza do derrame deve ser efetuada cheirando a superfície do pavimento com o nariz desprovido de qualquer máscara cirúrgica de proteção.",
      "O enfermeiro deve orientar a colocação de compressas de algodão secas sobre a área e autorizar a reabertura imediata da sala ao público geral sem medição prévia.",
      "A monitorização da área descontaminada exige detetores portáteis com janela fina de mica (como sondas Geiger tipo panqueca), capazes de registar eletrões beta de baixa e média energia.",
      "A descontaminação é comprovada verificando se o chão da câmara quente reflete a luz solar natural da janela com um brilho espelhado dourado característico."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para segurança no manuseamento de derrames de líquidos com emissores beta baseia-se no princípio: O enfermeiro realiza a monitorização da superfície da bancada e das próprias luvas com monitor de contaminação portátil de sonda Geiger-Müller com janela fina de mica. Esta atuação rigorosa garante a segurança do profissional, do utente e da comunidade.",
    "distractorAnalysis": [
      "Está incorreta: tubos Geiger comuns com paredes metálicas grossas não detetam partículas beta; sondas com janela fina de mica (1,5-2 mg/cm²) são indispensáveis para a monitorização de superfície.",
      "Está incorreta: a radiação ionizante é totalmente inodora, incolor e insípida; cheirar o chão expõe a mucosa nasal a contaminação interna por inalação gravíssima.",
      "Está incorreta: a libertação de qualquer área após contaminação exige medições radiométricas objetivas que comprovem níveis de fundo ambiental (<2 a 3 vezes o background)."
    ],
    "nursingApplication": "O enfermeiro realiza a monitorização da superfície da bancada e das próprias luvas com monitor de contaminação portátil de sonda Geiger-Müller com janela fina de mica."
  },
  {
    "id": 7155,
    "topicId": 7,
    "question": "Um enfermeiro analisa o poder de penetração, mecanismos de atenuação e riscos biológicos em 'segurança no manuseamento de derrames de líquidos com emissores beta'. Qual das seguintes afirmações expressa a correlação biofísica correta?",
    "options": [
      "Os emissores beta puros irradiam as casas vizinhas do hospital através de feixes lineares de raios X que atravessam montanhas inteiras de granito e betão.",
      "O perigo dos derrames beta é nulo mesmo se o líquido entrar em contacto com os olhos do profissional porque as lágrimas neutralizam as reações de fissão.",
      "A taxa de dose de um derrame beta aumenta com o quadrado da distância, tornando mais perigoso estar a dez metros do que a um centímetro da poça radioativa.",
      "Como emissores beta puros não emitem gamas primários penetrantes, a dose à distância cai rapidamente no ar, mas a contaminação cutânea direta administraria doses dérmicas colossais."
    ],
    "correctIndex": 3,
    "explanation": "A análise biofísica exata demonstra que O material contaminado é depositado em sacos plásticos espessos identificados e guardados em caixas de plástico grosso no abrigo de resíduos radioativos. O domínio destes conhecimentos permite ao enfermeiro fundamentar a escolha de blindagens e protocolos de segurança.",
    "distractorAnalysis": [
      "Está incorreta: o perigo dos emissores beta sem blindagem é essencialmente de contacto e contaminação dérmica (doses na pele basilar que causam eritema e necrose), caindo com a distância.",
      "Está incorreta: sem emissão gama apreciável, a irradiação externa diminui fortemente no ar a distâncias superiores a 1-2 metros; não atravessam montanhas de granito.",
      "Está incorreta: o contacto ocular com soluções radioativas causaria lesões graves na córnea e cristalino (cataratas radioinduzidas); a taxa de dose cai com o inverso do quadrado da distância."
    ],
    "nursingApplication": "O enfermeiro realiza a monitorização da superfície da bancada e das próprias luvas com monitor de contaminação portátil de sonda Geiger-Müller com janela fina de mica."
  },
  {
    "id": 7156,
    "topicId": 7,
    "question": "Na física das radiações nucleares (partículas alfa, beta e fotões gama) aplicada à prática clínica, em relação a 'natureza eletromagnética pura da radiação gama', qual é a fundamentação científica correta?",
    "options": [
      "A radiação gama é constituída por fotões (quanta de energia eletromagnética) desprovidos de massa de repouso e de carga elétrica, propagando-se à velocidade da luz no vácuo (c).",
      "A radiação gama é uma corrente de eletrões relativistas de carga positiva que circulam em anéis concêntricos no interior dos tecidos celulares do doente internado.",
      "Trata-se de uma onda sonora mecânica de frequência audível que faz vibrar os tímpanos dos profissionais de saúde presentes na sala de administração de radioisótopos.",
      "A radiação gama é um líquido viscoso transparente que se condensa na superfície externa das ampolas de vidro mantidas em frigoríficos de conservação hospitalar."
    ],
    "correctIndex": 0,
    "explanation": "Em física nuclear e radioproteção clínica, natureza eletromagnética pura da radiação gama explica-se pelo facto de que a radiação gama é uma radiação eletromagnética constituída por fotões puros ejetados do núcleo atómico durante transições entre estados nucleares de desexcitação. Possui massa de repouso rigorosamente nula (m = 0), carga elétrica nula (q = 0) e propaga-se no vácuo à velocidade absoluta da luz ($c \\approx 3 \\cdot 10^8$ m/s).",
    "distractorAnalysis": [
      "Está incorreta: raios gama são radiação eletromagnética ionizante de frequência ultra-alta e comprimento de onda infinitesimal (<10⁻¹¹ m), sem massa nem carga elétrica.",
      "Está incorreta: eletrões de carga positiva são positrões (partículas corpusculares com massa); a radiação gama é puramente fotónica eletromagnética.",
      "Está incorreta: ondas sonoras são perturbações mecânicas em meios materiais; fotões gama propagam-se no vácuo e através da matéria à velocidade da luz (≈ 3 × 10⁸ m/s)."
    ],
    "nursingApplication": "Não possui limites definidos de energia, variando habitualmente desde dezenas de keV até vários MeV na medicina."
  },
  {
    "id": 7157,
    "topicId": 7,
    "question": "Na prestação de cuidados de enfermagem e proteção radiológica em serviços com doentes radioativos, como se aplica na prática o conceito de 'natureza eletromagnética pura da radiação gama'?",
    "options": [
      "A natureza eletromagnética da radiação gama permite que esta seja neutralizada simplesmente desligando o interruptor geral de eletricidade da enfermaria clínica.",
      "A ausência de carga elétrica confere aos fotões gama um poder de penetração extraordinário, permitindo que atravessem o corpo do doente e sejam detetados na gama-câmara.",
      "Os fotões gama tornam-se inofensivos logo que entram em contacto com o sangue venoso porque são absorvidos pelas moléculas de glicose do plasma biológico.",
      "Essa propriedade física faz com que a radiação gama queime instantaneamente a roupa do doente se esta for confecionada com tecidos de fibras sintéticas no leito."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para natureza eletromagnética pura da radiação gama baseia-se no princípio: Não possui limites definidos de energia, variando habitualmente desde dezenas de keV até vários MeV na medicina. Esta atuação rigorosa garante a segurança do profissional, do utente e da comunidade.",
    "distractorAnalysis": [
      "Está incorreta: por serem neutros e não sofrerem desaceleração coulombiana contínua, os fotões gama viajam distâncias longas nos tecidos antes de sofrerem uma interação pontual (fotoelétrico/Compton).",
      "Está incorreta: radioisótopos emitem radiação espontaneamente por decaimento nuclear; não dependem de energia elétrica da rede e não são desligados por interruptores.",
      "Está incorreta: os fotões atravessam o sangue e interagem ionizando átomos teciduais; não queimam roupas de poliéster nem são desativados por glicose."
    ],
    "nursingApplication": "Não possui limites definidos de energia, variando habitualmente desde dezenas de keV até vários MeV na medicina."
  },
  {
    "id": 7158,
    "topicId": 7,
    "question": "Um enfermeiro analisa o poder de penetração, mecanismos de atenuação e riscos biológicos em 'natureza eletromagnética pura da radiação gama'. Qual das seguintes afirmações expressa a correlação biofísica correta?",
    "options": [
      "A energia dos fotões gama depende exclusivamente da massa de chumbo que constitui a bancada de trabalho onde se encontram pousados os frascos de radiofármacos.",
      "A velocidade de propagação da radiação gama diminui para dez quilómetros por hora quando atravessa soluções aquosas contendo solutos de cloreto de sódio isotónico.",
      "A energia do fotão gama relaciona-se com a sua frequência e comprimento de onda segundo E = h · ν = h · c / λ, onde h é a constante de Planck e c a velocidade da luz.",
      "A frequência de oscilação dos fotões gama é rigorosamente nula em qualquer meio material que possua uma densidade de massa superior a um grama por centímetro cúbico."
    ],
    "correctIndex": 2,
    "explanation": "A análise biofísica exata demonstra que Possui massa de repouso rigorosamente nula (m = 0), carga elétrica nula (q = 0) e propaga-se no vácuo à velocidade absoluta da luz ($c \\approx 3 \\cdot 10^8$ m/s). O domínio destes conhecimentos permite ao enfermeiro fundamentar a escolha de blindagens e protocolos de segurança.",
    "distractorAnalysis": [
      "Está incorreta: a equação de Planck-Einstein governa a energia dos fotões (E = hν); para energias típicas em medicina (140 keV no ⁹⁹ᵐTc), o comprimento de onda é de ~0,0088 nm.",
      "Está incorreta: a energia do fotão é fixada pela transição nuclear que o originou, sendo independente de massas de blindagens externas.",
      "Está incorreta: fotões viajam à velocidade da luz no meio (c/n ≈ 3 × 10⁸ m/s, com índice de refração n ≈ 1 para raios gama); a frequência é na escala de exahertz (10¹⁸ Hz)."
    ],
    "nursingApplication": "Não possui limites definidos de energia, variando habitualmente desde dezenas de keV até vários MeV na medicina."
  },
  {
    "id": 7159,
    "topicId": 7,
    "question": "Na física das radiações nucleares (partículas alfa, beta e fotões gama) aplicada à prática clínica, em relação a 'diferença física fundamental entre Raios X e Radiação Gama', qual é a fundamentação científica correta?",
    "options": [
      "Os Raios Gama são formados por partículas com carga positiva elementar e os Raios X são ondas eletromagnéticas totalmente desprovidas de qualquer massa de repouso.",
      "Os Raios X propagam-se dez vezes mais depressa do que os Raios Gama no espaço vazio devido à sua menor resistência aerodinâmica contra o vento cósmico solar.",
      "A distinção consiste no facto de os Raios X serem visíveis a olho nu sob a forma de luz verde enquanto os Raios Gama são totalmente invisíveis ao ser humano.",
      "A diferença reside na origem física: os Raios Gama provêm de transições intranucleares de estados excitados, enquanto os Raios X originam-se na eletrosfera extranuclear."
    ],
    "correctIndex": 3,
    "explanation": "Em física nuclear e radioproteção clínica, diferença física fundamental entre Raios X e Radiação Gama explica-se pelo facto de que os Raios X e a Radiação Gama com a mesma energia são absolutamente idênticos e indistinguíveis na sua estrutura física e nos seus efeitos biológicos. A sua única distinção reside na ORIGEM física: os Raios X são originados fora do núcleo atómico (transições eletrónicas orbitais ou desaceleração termiónica no ânodo), enquanto a Radiação Gama é gerada estritamente no interior do núcleo atómico.",
    "distractorAnalysis": [
      "Está incorreta: fotões X e gama de igual energia têm propriedades e interações físicas rigorosamente idênticas; diferem exclusivamente no local de génese: núcleo (gama) vs eletrosfera (raios X).",
      "Está incorreta: ambos são radiação eletromagnética pura (fotões neutros sem massa); nenhum possui carga elétrica ou partículas corpusculares pesadas.",
      "Está incorreta: ambos viajam rigorosamente à velocidade da luz no vácuo (c); ambos são totalmente invisíveis ao olho humano (frequências ordens de grandeza acima da luz visível)."
    ],
    "nursingApplication": "O enfermeiro compreende a nomenclatura física formal utilizada nos serviços de radiologia (Raios X) e medicina nuclear/radioterapia (Radiação Gama)."
  },
  {
    "id": 7160,
    "topicId": 7,
    "question": "Na prestação de cuidados de enfermagem e proteção radiológica em serviços com doentes radioativos, como se aplica na prática o conceito de 'diferença física fundamental entre Raios X e Radiação Gama'?",
    "options": [
      "Em radiodiagnóstico os Raios X podem ser desligados no interruptor elétrico da ampola, mas os radiofármacos emissores gama decaem continuamente sem possibilidade de interrupção.",
      "O enfermeiro pode suspender a emissão gama dos doentes retirando as baterias recarregáveis do cateter venoso periférico instalado no braço do utente.",
      "A diferença de origem faz com que os doentes submetidos a exames de medicina nuclear necessitem de tomar banho com sabão de glicerina a cada quinze minutos no quarto.",
      "Os equipamentos de raios X continuam a emitir radiação ionizante de alta energia durante várias semanas após serem desligados da tomada elétrica de parede."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para diferença física fundamental entre Raios X e Radiação Gama baseia-se no princípio: O enfermeiro compreende a nomenclatura física formal utilizada nos serviços de radiologia (Raios X) e medicina nuclear/radioterapia (Radiação Gama). Esta atuação rigorosa garante a segurança do profissional, do utente e da comunidade.",
    "distractorAnalysis": [
      "Está incorreta: um tubo de raios X só emite quando recebe alta tensão elétrica; o doente com radiofármaco é uma fonte radioativa emissora contínua regulada pela semivida física do isótopo.",
      "Está incorreta: a emissão de radiofármacos é espontânea e contínua, governada por leis quânticas nucleares invariantes que não podem ser interrompidas por desligar equipamentos.",
      "Está incorreta: quando a ampola de raios X é desligada, a radiação cessa no nanossegundo seguinte; não há 'radiação residual' acumulada nas paredes de uma sala de radiologia simples."
    ],
    "nursingApplication": "O enfermeiro compreende a nomenclatura física formal utilizada nos serviços de radiologia (Raios X) e medicina nuclear/radioterapia (Radiação Gama)."
  },
  {
    "id": 7161,
    "topicId": 7,
    "question": "Um enfermeiro analisa o poder de penetração, mecanismos de atenuação e riscos biológicos em 'diferença física fundamental entre Raios X e Radiação Gama'. Qual das seguintes afirmações expressa a correlação biofísica correta?",
    "options": [
      "Os raios X característicos são gerados unicamente por reações de fusão de protões no centro do núcleo atómico a temperaturas estelares colossais.",
      "Raios X de transição eletrónica (característicos) ou travamento (Bremsstrahlung) têm origem orbital; os raios gama decorrem do rearranjo de nucleões entre níveis quânticos nucleares.",
      "A emissão de radiação gama ocorre através da quebra mecânica das órbitas dos eletrões de valência quando estes colidem com as moléculas de ar da câmara quente.",
      "Os fotões de raios X possuem uma constante de gravitação universal duas vezes superior à dos fotões gama emitidos em medicina nuclear diagnóstica."
    ],
    "correctIndex": 1,
    "explanation": "A análise biofísica exata demonstra que A sua única distinção reside na ORIGEM física: os Raios X são originados fora do núcleo atómico (transições eletrónicas orbitais ou desaceleração termiónica no ânodo), enquanto a Radiação Gama é gerada estritamente no interior do núcleo atómico. O domínio destes conhecimentos permite ao enfermeiro fundamentar a escolha de blindagens e protocolos de segurança.",
    "distractorAnalysis": [
      "Está incorreta: raios X característicos surgem quando vacâncias eletrónicas internas (camada K, L) são preenchidas; raios gama originam-se em desexcitações de estados excitados de nucleões no núcleo.",
      "Está incorreta: raios X são fenómenos atómicos/eletrónicos que ocorrem rotineiramente a tensões de 50 a 150 kV em ampolas radiológicas convencionais sem fusão nuclear.",
      "Está incorreta: os fotões gama provêm do interior do poço de potencial nuclear; não há variação de constantes físicas fundamentais entre raios X e raios gama."
    ],
    "nursingApplication": "O enfermeiro compreende a nomenclatura física formal utilizada nos serviços de radiologia (Raios X) e medicina nuclear/radioterapia (Radiação Gama)."
  },
  {
    "id": 7162,
    "topicId": 7,
    "question": "Na física das radiações nucleares (partículas alfa, beta e fotões gama) aplicada à prática clínica, em relação a 'ausência de deflexão em campos elétricos e magnéticos', qual é a fundamentação científica correta?",
    "options": [
      "A radiação gama curva-se em círculos perfeitos sob a ação de campos magnéticos fracos, sendo facilmente atraída por pequenos ímanes de plástico na secretária médica.",
      "Os fotões gama são repelidos com violência extrema por campos elétricos positivos, acelerando até velocidades dez vezes superiores à velocidade da luz no vácuo.",
      "Por possuírem carga elétrica rigorosamente nula (q = 0), os fotões gama não sofrem deflexão na presença de campos elétricos ou magnéticos (Força de Lorentz F = q(E + v × B) = 0).",
      "A ausência de deflexão ocorre apenas se a radiação gama for emitida por radionuclídeos que tenham sido arrefecidos a temperaturas criogénicas inferiores a zero Kelvin."
    ],
    "correctIndex": 2,
    "explanation": "Em física nuclear e radioproteção clínica, ausência de deflexão em campos elétricos e magnéticos explica-se pelo facto de que como os fotões gama não possuem carga elétrica líquida, não sofrem a Força de Lorentz ($F = q(E + v \\times B)$) ao passarem por campos elétricos ou eletroímanes potentes. Viajam em linha reta inalterada até interagirem com os átomos dos tecidos humanos através do efeito fotoelétrico, espalhamento Compton ou produção de pares.",
    "distractorAnalysis": [
      "Está incorreta: a força eletromagnética atua estritamente sobre partículas carregadas; como q = 0 para o fotão, a força de Lorentz é nula e os raios gama mantêm trajetória retilínea uniforme.",
      "Está incorreta: partículas alfa (q = +2) e beta (q = -1) sofrem deflexão em campos eletromagnéticos; fotões gama nunca sofrem deflexão magnética em ímanes.",
      "Está incorreta: a velocidade da luz no vácuo c é o limite absoluto universal da teoria da relatividade; nenhum fotão viaja acima de c."
    ],
    "nursingApplication": "Esta retilineidade estrita é o princípio fundamental que permite a colimação geométrica e a formação de imagens nítidas na câmara gama."
  },
  {
    "id": 7163,
    "topicId": 7,
    "question": "Na prestação de cuidados de enfermagem e proteção radiológica em serviços com doentes radioativos, como se aplica na prática o conceito de 'ausência de deflexão em campos elétricos e magnéticos'?",
    "options": [
      "A trajetória retilínea obriga os enfermeiros a utilizar ímanes permanentes de neodímio nos bolsos das batas para desviar a radiação para longe do seu próprio corpo.",
      "A impossibilidade de curvar a radiação gama faz com que os doentes devam permanecer deitados sobre placas de aço imantadas durante quarenta e oito horas de exame.",
      "Essa propriedade física impede que os doentes que tenham realizado cintigrafias possam viajar de avião durante cinco anos devido aos campos magnéticos terrestres.",
      "A ausência de deflexão garante que os fotões gama se propagam em linha reta através do corpo e colimadores, permitindo reconstruções geométricas precisas na câmara gama e SPECT."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para ausência de deflexão em campos elétricos e magnéticos baseia-se no princípio: Esta retilineidade estrita é o princípio fundamental que permite a colimação geométrica e a formação de imagens nítidas na câmara gama. Esta atuação rigorosa garante a segurança do profissional, do utente e da comunidade.",
    "distractorAnalysis": [
      "Está incorreta: a propagação retilínea permite que colimadores mecânicos de orifícios paralelos selecionem com rigor geométrico a direção de emissão dos fotões para mapear órgãos.",
      "Está incorreta: ímanes de neodímio não têm qualquer efeito sobre a radiação gama (q = 0); placas imantadas ou restrições aeronáuticas de anos são completamente estapafúrdias.",
      "Está incorreta: a radiação gama decai com a semivida do radiofármaco (horas a dias); os campos geomagnéticos não exercem forças sobre fotões gama."
    ],
    "nursingApplication": "Esta retilineidade estrita é o princípio fundamental que permite a colimação geométrica e a formação de imagens nítidas na câmara gama."
  },
  {
    "id": 7164,
    "topicId": 7,
    "question": "Um enfermeiro analisa o poder de penetração, mecanismos de atenuação e riscos biológicos em 'ausência de deflexão em campos elétricos e magnéticos'. Qual das seguintes afirmações expressa a correlação biofísica correta?",
    "options": [
      "Enquanto a partícula alfa se desvia suavemente para um lado e a partícula beta se desvia fortemente para o lado oposto num campo magnético, o fotão gama não sofre qualquer desvio.",
      "Partículas alfa e fotões gama sofrem exatamente a mesma deflexão angular num campo elétrico transversal por partilharem a mesma carga elétrica elementar positiva.",
      "A partícula beta negativa não sofre qualquer desvio magnético porque a sua massa é considerada nula na física relativista de partículas subatómicas de alta energia.",
      "A radiação gama é a única das três emissões que sofre atração eletrostática contínua pelo polo positivo de uma bateria química galvânica comum de bancada."
    ],
    "correctIndex": 0,
    "explanation": "A análise biofísica exata demonstra que Viajam em linha reta inalterada até interagirem com os átomos dos tecidos humanos através do efeito fotoelétrico, espalhamento Compton ou produção de pares. O domínio destes conhecimentos permite ao enfermeiro fundamentar a escolha de blindagens e protocolos de segurança.",
    "distractorAnalysis": [
      "Está incorreta: a experiência clássica de Rutherford provou a natureza das três emissões: alfa (pesada, +) desvia pouco para um polo; beta (leve, -) desvia muito para o outro; gama (0) segue em linha reta.",
      "Está incorreta: fotões gama não têm carga (desvio zero); alfas têm carga +2 (desviam na direção oposta à de beta).",
      "Está incorreta: a partícula beta tem carga -1 e sofre forte desvio; a massa do eletrão é finita e não nula (0,511 MeV/c²)."
    ],
    "nursingApplication": "Esta retilineidade estrita é o princípio fundamental que permite a colimação geométrica e a formação de imagens nítidas na câmara gama."
  },
  {
    "id": 7165,
    "topicId": 7,
    "question": "Na física das radiações nucleares (partículas alfa, beta e fotões gama) aplicada à prática clínica, em relação a 'espetro de energias discretas da radiação gama médica', qual é a fundamentação científica correta?",
    "options": [
      "A radiação gama apresenta um espetro contínuo com todas as frequências da luz visível, tornando os frascos de radiofármacos brilhantes e coloridos como o arco-íris.",
      "Os fotões gama emitidos em transições nucleares são monoenergéticos com valores discretos característicos (como 140 keV no ⁹⁹ᵐTc e 364 keV no ¹³¹I), funcionando como 'impressão digital'.",
      "A energia dos fotões gama médicos varia aleatoriamente entre zero e cem joules de acordo com a velocidade do vento no exterior das instalações do hospital.",
      "O espetro gama médico é composto exclusivamente por fotões de raios X térmicos que perdem metade da sua energia a cada centímetro de ar atmosférico percorrido."
    ],
    "correctIndex": 1,
    "explanation": "Em física nuclear e radioproteção clínica, espetro de energias discretas da radiação gama médica explica-se pelo facto de que ao contrário do espetro contínuo de travagem dos tubos de Raios X, a radiação gama emitida por um radioisótopo específico apresenta fotões com energias estritamente discretas e características. Por exemplo, o Tecnécio-99m emite fotões gama monocromáticos de 140 keV; o Cobalto-60 emite duas linhas gama proeminentes de 1,17 MeV e 1,33 MeV; o Césio-137 emite a 662 keV.",
    "distractorAnalysis": [
      "Está incorreta: porque os níveis nucleares de energia são quantizados, a desexcitação eletromagnética emite fotões com energias estritamente discretas características de cada radionuclídeo.",
      "Está incorreta: fotões gama estão muito acima do espetro visível e são invisíveis ao olho humano; o espetro não é contínuo mas sim de linhas discretas estreitas.",
      "Está incorreta: a energia fotónica é intrínseca à mecânica quântica do núcleo atómico, sendo absolutamente invariante com condições meteorológicas externas."
    ],
    "nursingApplication": "A câmara gama utiliza analisadores de altura de pulso (janela de energia fotomultiplicadora centrada em 140 keV com $\\pm 10\\%$) para rejeitar fotões dispersos que degradariam a imagem."
  },
  {
    "id": 7166,
    "topicId": 7,
    "question": "Na prestação de cuidados de enfermagem e proteção radiológica em serviços com doentes radioativos, como se aplica na prática o conceito de 'espetro de energias discretas da radiação gama médica'?",
    "options": [
      "O espetro discreto obriga a equipa de enfermagem a administrar o radiofármaco em pequenas gotas espaçadas por exatamente vinte segundos de intervalo cronometrado.",
      "A monoenergeticidade gama faz com que as seringas fiquem fluorescentes e iluminem o posto de enfermagem durante a preparação das doses de manhã cedo.",
      "A existência de energias discretas permite ajustar uma 'janela de energia' no analisador multicanal (MCA) da gama-câmara, rejeitando fotões dispersos por Compton e melhorando a imagem.",
      "O analisador de energia serve para acelerar a velocidade dos fotões gama até ultrapassarem a velocidade da luz no cristal cintilador da gama-câmara."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para espetro de energias discretas da radiação gama médica baseia-se no princípio: A câmara gama utiliza analisadores de altura de pulso (janela de energia fotomultiplicadora centrada em 140 keV com $\\pm 10\\%$) para rejeitar fotões dispersos que degradariam a imagem. Esta atuação rigorosa garante a segurança do profissional, do utente e da comunidade.",
    "distractorAnalysis": [
      "Está incorreta: centrando uma janela de ±10-20% no fotopico (ex: janela de 140 keV para ⁹⁹ᵐTc), a eletrónica rejeita fotões que sofreram Compton (que têm menor energia), preservando o contraste.",
      "Está incorreta: a administração faz-se por injeção endovenosa contínua suave padrão; a quantização quântica não exige gotejamento rítmico artificial.",
      "Está incorreta: radiofármacos incolores não fluorescem nem iluminam salas clínicas; nada viaja acima da velocidade da luz no vácuo."
    ],
    "nursingApplication": "A câmara gama utiliza analisadores de altura de pulso (janela de energia fotomultiplicadora centrada em 140 keV com $\\pm 10\\%$) para rejeitar fotões dispersos que degradariam a imagem."
  },
  {
    "id": 7167,
    "topicId": 7,
    "question": "Um enfermeiro analisa o poder de penetração, mecanismos de atenuação e riscos biológicos em 'espetro de energias discretas da radiação gama médica'. Qual das seguintes afirmações expressa a correlação biofísica correta?",
    "options": [
      "O Gálio-67 emite um único fotopico contínuo indistinguível da radiação cósmica de fundo atmosférica em todas as medições de espectrometria laboratorial.",
      "A presenca de múltiplos picos gama faz com que o radioisótopo exploda espontaneamente no momento em que a sua atividade atinge trinta megabecquerels na seringa.",
      "Os múltiplos picos de energia ocorrem devido à fusão de dois eletrões atómicos com um protão livre no interior do citoplasma celular durante a circulação.",
      "Em radionuclídeos com múltiplos fotopicos (como o ¹¹¹In com 171 e 245 keV, ou o ⁶⁷Ga com 93, 185 e 300 keV), podem adquirir-se simultaneamente duas ou três janelas de energia na câmara."
    ],
    "correctIndex": 3,
    "explanation": "A análise biofísica exata demonstra que Por exemplo, o Tecnécio-99m emite fotões gama monocromáticos de 140 keV; o Cobalto-60 emite duas linhas gama proeminentes de 1,17 MeV e 1,33 MeV; o Césio-137 emite a 662 keV. O domínio destes conhecimentos permite ao enfermeiro fundamentar a escolha de blindagens e protocolos de segurança.",
    "distractorAnalysis": [
      "Está incorreta: a gama-câmara moderna soma as contagens das janelas de múltiplos picos (como 171 e 245 keV no Índio-111), aumentando a sensibilidade estatística da cintigrafia.",
      "Está incorreta: o ⁶⁷Ga tem espetro discreto característico com três picos clínicos clássicos bem resolvidos; não explode nem se funde com eletrões celulares.",
      "Está incorreta: decaimentos nucleares ocorrem átomo a átomo de forma suave e estatística, sem qualquer fenómeno explosivo macroscópico."
    ],
    "nursingApplication": "A câmara gama utiliza analisadores de altura de pulso (janela de energia fotomultiplicadora centrada em 140 keV com $\\pm 10\\%$) para rejeitar fotões dispersos que degradariam a imagem."
  },
  {
    "id": 7168,
    "topicId": 7,
    "question": "Na física das radiações nucleares (partículas alfa, beta e fotões gama) aplicada à prática clínica, em relação a 'baixo LET e alto poder de penetração tecidual dos fotões gama', qual é a fundamentação científica correta?",
    "options": [
      "A radiação gama tem baixo LET (~0,2 a 2 keV/µm) e elevado poder de penetração, depositando energia de forma esparsa e permitindo que uma fração substancial escape do corpo para formar imagem.",
      "Os fotões gama têm o maior LET de todas as radiações conhecidas, depositando a totalidade da sua energia na camada morta superficial da epiderme humana.",
      "O baixo LET da radiação gama significa que ela não é capaz de ionizar a matéria biológica, comportando-se como radiação perfeitamente inofensiva e não-ionizante.",
      "A penetração tecidual dos fotões gama é nula se o doente mantiver uma temperatura corporal superior a trinta e sete graus centígrados no momento do exame."
    ],
    "correctIndex": 0,
    "explanation": "Em física nuclear e radioproteção clínica, baixo LET e alto poder de penetração tecidual dos fotões gama explica-se pelo facto de que como os fotões gama interagem com a matéria apenas esporadicamente através de colisões pontuais espaçadas, possuem uma Transferência Linear de Energia muito baixa (baixo LET, $\\sim 0,2$ a 2 keV/$\\mu$m). A grande maioria dos fotões gama atravessa vários centímetros de tecido biológico sem sofrer qualquer interação, o que lhes confere o mais alto poder de penetração de todas as emissões radioativas.",
    "distractorAnalysis": [
      "Está incorreta: como os fotões ionizam esparsamente através de eletrões secundários de recuo Compton e fotoelétricos, o LET é baixo (w_R = 1) e a penetração tecidual é excelente para diagnóstico in vivo.",
      "Está incorreta: quem tem maior LET e alcance superficial é a partícula alfa (~100 keV/µm); a gama atravessa o corpo facilmente.",
      "Está incorreta: a radiação gama é radiação ionizante inequívoca; embora de baixo LET, doses elevadas causam efeitos estocásticos e determinísticos graves."
    ],
    "nursingApplication": "Esta propriedade permite que o fotão saia facilmente do órgão examinado para ser captado pelos cristais cintiladores externos, mas exige blindagens pesadas para proteger o enfermeiro."
  },
  {
    "id": 7169,
    "topicId": 7,
    "question": "Na prestação de cuidados de enfermagem e proteção radiológica em serviços com doentes radioativos, como se aplica na prática o conceito de 'baixo LET e alto poder de penetração tecidual dos fotões gama'?",
    "options": [
      "A penetração tecidual dos fotões gama permite ao enfermeiro dispensar o uso de luvas descartáveis durante a administração de radiofármacos por via venosa.",
      "O elevado poder de penetração dos fotões gama exige a utilização de biombos móveis de chumbo e a minimização do tempo de permanência junto ao doente para radioproteção da equipa.",
      "Os profissionais de saúde devem vestir batas cirúrgicas de lã grossa para absorver integralmente todos os fotões gama emitidos na enfermaria de oncologia.",
      "A radiação gama torna os doentes contagiosos por via respiratória, exigindo o isolamento em quartos com pressão negativa estrita durante três meses."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para baixo LET e alto poder de penetração tecidual dos fotões gama baseia-se no princípio: Esta propriedade permite que o fotão saia facilmente do órgão examinado para ser captado pelos cristais cintiladores externos, mas exige blindagens pesadas para proteger o enfermeiro. Esta atuação rigorosa garante a segurança do profissional, do utente e da comunidade.",
    "distractorAnalysis": [
      "Está incorreta: como os fotões gama atravessam o doente e chegam ao profissional, a proteção apoia-se nos pilares clássicos: Tempo reduzido, Distância máxima e Blindagens plumbíferas.",
      "Está incorreta: luvas são indispensáveis para proteção contra contaminação biológica e química por fluidos e radiofármacos; lã comum não atenua fotões gama.",
      "Está incorreta: a radiação ionizante não é uma doença infetocontagiosa; doentes não transmitem radioatividade por via respiratória nem requerem pressão negativa pulmonar."
    ],
    "nursingApplication": "Esta propriedade permite que o fotão saia facilmente do órgão examinado para ser captado pelos cristais cintiladores externos, mas exige blindagens pesadas para proteger o enfermeiro."
  },
  {
    "id": 7170,
    "topicId": 7,
    "question": "Um enfermeiro analisa o poder de penetração, mecanismos de atenuação e riscos biológicos em 'baixo LET e alto poder de penetração tecidual dos fotões gama'. Qual das seguintes afirmações expressa a correlação biofísica correta?",
    "options": [
      "O efeito fotoelétrico é o único mecanismo de interação de fotões gama em tecidos biológicos para qualquer energia compreendida entre cem keV e dez MeV.",
      "A produção de pares de eletrão-positrão ocorre intensamente para fotões de 140 keV emitidos pelo Tecnécio-99m durante exames de rotina hospitalar.",
      "A probabilidade de interação por efeito fotoelétrico cai drasticamente com a energia do fotão (proporcional a 1/E³), tornando o efeito Compton o processo dominante em tecidos para gamas médicos.",
      "A dispersão de Compton atua exclusivamente sobre os neutrões do núcleo atómico, arrancando os nucleões centrais para a circulação venosa periférica."
    ],
    "correctIndex": 2,
    "explanation": "A análise biofísica exata demonstra que A grande maioria dos fotões gama atravessa vários centímetros de tecido biológico sem sofrer qualquer interação, o que lhes confere o mais alto poder de penetração de todas as emissões radioativas. O domínio destes conhecimentos permite ao enfermeiro fundamentar a escolha de blindagens e protocolos de segurança.",
    "distractorAnalysis": [
      "Está incorreta: para gamas diagnósticos usuais (100 keV a 1 MeV) em tecidos moles (Z médio ≈ 7,4), a dispersão de Compton com eletrões livres/pouco ligados é o mecanismo dominante.",
      "Está incorreta: o efeito fotoelétrico domina apenas a baixas energias (<30-50 keV em tecidos moles); a energias diagnósticas o espalhamento Compton predomina largamente.",
      "Está incorreta: a produção de pares exige limiar mínimo de 1,022 MeV, sendo fisicamente impossível para fotões de 140 keV do ⁹⁹ᵐTc."
    ],
    "nursingApplication": "Esta propriedade permite que o fotão saia facilmente do órgão examinado para ser captado pelos cristais cintiladores externos, mas exige blindagens pesadas para proteger o enfermeiro."
  },
  {
    "id": 7171,
    "topicId": 7,
    "question": "Na física das radiações nucleares (partículas alfa, beta e fotões gama) aplicada à prática clínica, em relação a 'Lei de atenuação exponencial da radiação gama na matéria (Lei de Beer-Lambert)', qual é a fundamentação científica correta?",
    "options": [
      "A intensidade da radiação gama decresce de forma puramente linear com a espessura da blindagem, atingindo valor estritamente nulo a exatamente dois centímetros de qualquer material metálico.",
      "A equação de atenuação da radiação gama é uma função sinusoidal que oscila entre a intensidade máxima e o valor zero a cada dez segundos de tempo decorrido.",
      "A intensidade dos fotões gama aumenta exponencialmente à medida que atravessam materiais pesados como o chumbo devido à multiplicação espontânea de fotões.",
      "A atenuação de um feixe estreito monoenergético de fotões gama na matéria é puramente exponencial: I(x) = I₀ · e^(-µ·x), onde µ é o coeficiente de atenuação linear total."
    ],
    "correctIndex": 3,
    "explanation": "Em física nuclear e radioproteção clínica, Lei de atenuação exponencial da radiação gama na matéria (Lei de Beer-Lambert) explica-se pelo facto de que a intensidade (I) de um feixe monocromático de fotões gama decresce exponencialmente com a espessura (x) do material atravessado: $I(x) = I_0 \\cdot e^{-\\mu \\cdot x}$. Onde $I_0$ é a intensidade inicial incidente e $\\mu$ é o coeficiente de atenuação linear do material (em cm⁻¹), que depende da densidade do material e da energia do fotão.",
    "distractorAnalysis": [
      "Está incorreta: a Lei de Beer-Lambert governa a probabilidade de colisão independente de cada fotão: dI/dx = -µ·I, cuja solução analítica é a clássica curva exponencial I = I₀·e^(-µx).",
      "Está incorreta: a atenuação de fotões nunca atinge zero abrupto (não há 'alcance máximo' como em partículas carregadas); há sempre uma fração residual que penetra a barreira.",
      "Está incorreta: a intensidade decai monotonamente sem oscilações sinusoidais; materiais passivos não multiplicam fotões gama no seu percurso."
    ],
    "nursingApplication": "Isto demonstra que a radiação gama nunca é teoricamente 100% extinta até zero absoluto; ela é atenuada para frações infinitesimais seguras."
  },
  {
    "id": 7172,
    "topicId": 7,
    "question": "Na prestação de cuidados de enfermagem e proteção radiológica em serviços com doentes radioativos, como se aplica na prática o conceito de 'Lei de atenuação exponencial da radiação gama na matéria (Lei de Beer-Lambert)'?",
    "options": [
      "A lei exponencial comprova que nenhuma blindagem absorve 100% da radiação gama; a blindagem visa atenuar a taxa de dose para níveis insignificantes e abaixo dos limites regulamentares.",
      "A lei de Beer-Lambert indica que os biombos de chumbo devem ser substituídos a cada vinte minutos para não perderem a sua capacidade química de absorção de luz.",
      "Essa lei física permite dispensar a medição de radiação nas áreas controladas porque o chumbo anula cem por cento da dose a qualquer distância do doente.",
      "A atenuação exponencial aplica-se exclusivamente a feixes de partículas alfa pesadas mantidas no interior de soluções aquosas com açúcar refinado."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para Lei de atenuação exponencial da radiação gama na matéria (Lei de Beer-Lambert) baseia-se no princípio: Isto demonstra que a radiação gama nunca é teoricamente 100% extinta até zero absoluto; ela é atenuada para frações infinitesimais seguras. Esta atuação rigorosa garante a segurança do profissional, do utente e da comunidade.",
    "distractorAnalysis": [
      "Está incorreta: como I(x) nunca se anula matematicamente, a espessura de chumbo é calculada para reduzir a intensidade a um valor seguro aceitável (ex: 95%, 99% ou 99,9% de atenuação).",
      "Está incorreta: blindagens de chumbo mantêm a sua capacidade de atenuação intacta ao longo de décadas sem necessidade de substituição periódica.",
      "Está incorreta: a monitorização periódica é uma obrigação regulamentar legal; a lei exponencial governa fotões descarregados (raios X e gama) e não partículas alfa."
    ],
    "nursingApplication": "Isto demonstra que a radiação gama nunca é teoricamente 100% extinta até zero absoluto; ela é atenuada para frações infinitesimais seguras."
  },
  {
    "id": 7173,
    "topicId": 7,
    "question": "Um enfermeiro analisa o poder de penetração, mecanismos de atenuação e riscos biológicos em 'Lei de atenuação exponencial da radiação gama na matéria (Lei de Beer-Lambert)'. Qual das seguintes afirmações expressa a correlação biofísica correta?",
    "options": [
      "O coeficiente de atenuação linear é estritamente idêntico no ar rarefeito e no chumbo maciço para qualquer feixe de radiação ionizante de alta frequência.",
      "O coeficiente de atenuação linear µ (em cm⁻¹) depende da densidade física do material e da energia do fotão: é muito mais elevado no chumbo (alto Z e densidade) do que na água.",
      "O valor de µ cresce com o aumento da energia dos fotões gama, tornando os fotões de alta energia muito mais fáceis de atenuar do que os de baixa energia.",
      "O coeficiente linear µ anula-se completamente se a temperatura da sala de procedimentos hospitalares for mantida rigorosamente nos vinte e dois graus Celsius."
    ],
    "correctIndex": 1,
    "explanation": "A análise biofísica exata demonstra que Onde $I_0$ é a intensidade inicial incidente e $\\mu$ é o coeficiente de atenuação linear do material (em cm⁻¹), que depende da densidade do material e da energia do fotão. O domínio destes conhecimentos permite ao enfermeiro fundamentar a escolha de blindagens e protocolos de segurança.",
    "distractorAnalysis": [
      "Está incorreta: µ = ρ × (µ/ρ); como o chumbo tem densidade elevada (11,3 g/cm³) e Z elevado (82), o seu coeficiente µ é dezenas de vezes superior ao dos tecidos biológicos.",
      "Está incorreta: o coeficiente µ é proporcional à densidade do material; no chumbo é ordens de grandeza maior do que no ar.",
      "Está incorreta: de modo geral, para a gama diagnóstica (100-500 keV), µ diminui com a subida da energia, tornando os fotões de maior energia mais penetrantes e difíceis de atenuar."
    ],
    "nursingApplication": "Isto demonstra que a radiação gama nunca é teoricamente 100% extinta até zero absoluto; ela é atenuada para frações infinitesimais seguras."
  },
  {
    "id": 7174,
    "topicId": 7,
    "question": "Na física das radiações nucleares (partículas alfa, beta e fotões gama) aplicada à prática clínica, em relação a 'conceito e cálculo da Camada de Semiatuação (HVL - Half Value Layer)', qual é a fundamentação científica correta?",
    "options": [
      "A HVL é a espessura de material que reduz a intensidade da radiação gama para rigorosamente zero por cento em qualquer regime de energia fotónica.",
      "Trata-se do tempo em minutos que uma ampola de radiofármaco demora a perder metade da sua temperatura inicial quando colocada numa bancada de laboratório.",
      "A Camada de Semiatuação (HVL ou CDA) é a espessura de material necessária para reduzir a intensidade de um feixe de fotões para metade (50%), calculada por HVL = ln(2) / µ ≈ 0,693 / µ.",
      "A Camada de Semiatuação define a área superficial em metros quadrados dos biombos móveis de chumbo instalados nas salas de administração clínica de traçadores."
    ],
    "correctIndex": 2,
    "explanation": "Em física nuclear e radioproteção clínica, conceito e cálculo da Camada de Semiatuação (HVL - Half Value Layer) explica-se pelo facto de que a HVL (ou CDA - Camada de Semi-Atenuação) é a espessura exata de um determinado material de blindagem necessária para reduzir a intensidade do feixe de radiação para metade (50% do valor inicial). Relaciona-se matematicamente com o coeficiente de atenuação pela fórmula: $HVL = \\frac{\\ln(2)}{\\mu} \\approx \\frac{0,693}{\\mu}$.",
    "distractorAnalysis": [
      "Está incorreta: fazendo I/I₀ = 0,5 na lei exponencial: e^(-µ·HVL) = 1/2 <=> µ·HVL = ln(2) <=> HVL = ln(2)/µ ≈ 0,693/µ; n HVLs atenuam o feixe por um fator de 2^n.",
      "Está incorreta: HVL reduz a intensidade a 50% (e não a zero); para reduzir a 1% requerem-se cerca de 7 HVLs (2⁷ = 128); para 0,1% requerem-se 10 HVLs (2¹⁰ = 1024).",
      "Está incorreta: a HVL é uma espessura de comprimento linear (mm ou cm de absorvente) e não um tempo térmico ou área de superfície métrica."
    ],
    "nursingApplication": "Para o Tecnécio-99m (140 keV), a HVL no chumbo é de apenas cerca de 0,25 a 0,3 mm de chumbo maciço."
  },
  {
    "id": 7175,
    "topicId": 7,
    "question": "Na prestação de cuidados de enfermagem e proteção radiológica em serviços com doentes radioativos, como se aplica na prática o conceito de 'conceito e cálculo da Camada de Semiatuação (HVL - Half Value Layer)'?",
    "options": [
      "A HVL indica que os enfermeiros devem utilizar sempre dez centímetros de chumbo em todas as seringas que contenham qualquer tipo de radiofármaco diagnóstico.",
      "O conceito de HVL permite ao profissional prescindir do uso de dosímetros porque comprova a imunidade total do organismo humano à radiação ionizante.",
      "A Camada de Semiatuação estabelece que os doentes submetidos a medicina nuclear perdem metade do seu peso corporal nas primeiras vinte e quatro horas de exame.",
      "Conhecer a HVL do chumbo para o ⁹⁹ᵐTc (~0,3 mm) permite calcular que uma lâmina de chumbo de cerca de 2 a 3 mm reduz a radiação do tecnécio para menos de 1% do feixe inicial."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para conceito e cálculo da Camada de Semiatuação (HVL - Half Value Layer) baseia-se no princípio: Para o Tecnécio-99m (140 keV), a HVL no chumbo é de apenas cerca de 0,25 a 0,3 mm de chumbo maciço. Esta atuação rigorosa garante a segurança do profissional, do utente e da comunidade.",
    "distractorAnalysis": [
      "Está incorreta: para 140 keV a HVL do chumbo é de apenas ~0,27-0,3 mm; com 10 HVLs (~3 mm de chumbo), a intensidade transmitida é inferior a 0,1%, conferindo proteção quase total.",
      "Está incorreta: 10 cm de chumbo pesaria dezenas de quilos e seria impraticável para seringas; 2-3 mm é suficiente para 99mTc; para 511 keV de PET a HVL do chumbo é ~5-6 mm.",
      "Está incorreta: a dosimetria individual e o controlo ocupacional são obrigatórios; a radiação afeta a biologia celular e não tem relação com perda de peso ponderal macroscópico."
    ],
    "nursingApplication": "Para o Tecnécio-99m (140 keV), a HVL no chumbo é de apenas cerca de 0,25 a 0,3 mm de chumbo maciço."
  },
  {
    "id": 7176,
    "topicId": 7,
    "question": "Um enfermeiro analisa o poder de penetração, mecanismos de atenuação e riscos biológicos em 'conceito e cálculo da Camada de Semiatuação (HVL - Half Value Layer)'. Qual das seguintes afirmações expressa a correlação biofísica correta?",
    "options": [
      "Relaciona-se formalmente com o coeficiente de atenuação linear do meio absorvente através da expressão analítica: $HVL = \\frac{\\ln(2)}{\\mu} \\approx \\frac{0,693}{\\mu}$, indicando a espessura necessária para atenuar 50% dos fotões.",
      "Define a espessura necessária para reduzir a energia individual de cada fotão gama incidente para metade do seu valor quântico inicial ao atravessar o material absorvente metálico colocado na barreira.",
      "Calcula-se dividindo diretamente a velocidade da luz no vácuo pela densidade mássica absoluta do meio protetor, sendo totalmente independente do coeficiente de atenuação linear do material utilizado.",
      "Representa a distância fixa de penetração na matéria após a qual todos os fotões monoenergéticos são integralmente absorvidos pelo efeito fotoelétrico sem qualquer feixe de radiação residual transmitida."
    ],
    "correctIndex": 0,
    "explanation": "A análise biofísica exata demonstra que Relaciona-se matematicamente com o coeficiente de atenuação pela fórmula: $HVL = \\frac{\\ln(2)}{\\mu} \\approx \\frac{0,693}{\\mu}$. O domínio destes conhecimentos permite ao enfermeiro fundamentar a escolha de blindagens e protocolos de segurança.",
    "distractorAnalysis": [
      "Está incorreta: a HVL reduz a intensidade total (o número de fotões no feixe) para metade e não a energia individual dos fotões não colididos, cuja energia quântica permanece inalterada.",
      "Está incorreta: a HVL depende inversamente do coeficiente de atenuação linear ($HVL = 0,693/\\mu$) e não da velocidade da luz ou de divisões empíricas com a densidade absoluta.",
      "Está incorreta: a atenuação de fotões é estocástica e exponencial, não existindo uma distância finita de alcance fixo após a qual a absorção seja total e abrupta."
    ],
    "nursingApplication": "Para o Tecnécio-99m (140 keV), a HVL no chumbo é de apenas cerca de 0,25 a 0,3 mm de chumbo maciço."
  },
  {
    "id": 7177,
    "topicId": 7,
    "question": "Na física das radiações nucleares (partículas alfa, beta e fotões gama) aplicada à prática clínica, em relação a 'regra das Camadas de Semiatuação sucessivas (redução para 1/2ⁿ)', qual é a fundamentação científica correta?",
    "options": [
      "Cada camada adicional de espessura HVL subtrai uma quantidade fixa e constante de fotões correspondente a metade da intensidade da fonte original, anulando totalmente a transmissão de radiação ao fim de duas camadas sobrepostas.",
      "Cada camada sucessiva de espessura correspondente a uma HVL reduz a intensidade remanescente para metade da anterior (1 HVL para 50%, 2 HVL para 25%, 3 HVL para 12,5% e n HVL para $(1/2)^n$), permitindo estimar a atenuação obtida com biombos de proteção radiológica.",
      "A adição sucessiva de barreiras de espessura HVL apenas reduz a taxa de fluência para fotões de dispersão Compton, não exercendo qualquer atenuação mensurável sobre o feixe primário emitido pela fonte radioativa pontual.",
      "O fator de redução com n camadas HVL segue uma progressão puramente linear decrescente ($I = I_0 \\cdot (1 - 0,5 \\cdot n)$), o que extingue por completo a radiação transmitida pelo biombo ao fim da segunda camada colocada no trajeto."
    ],
    "correctIndex": 1,
    "explanation": "Em física nuclear e radioproteção clínica, regra das Camadas de Semiatuação sucessivas (redução para 1/2ⁿ) explica-se pelo facto de que cada camada adicional de espessura HVL reduz a radiação remanescente para metade: 1 HVL reduz para 50%, 2 HVL para 25%, 3 HVL para 12,5%, 7 HVL para menos de 1% e 10 HVL para menos de 0,1% (fator de atenuação superior a 1000). O enfermeiro calcula rapidamente a atenuação proporcionada por biombos móveis de proteção no serviço de medicina nuclear com base no número de HVL presentes.",
    "distractorAnalysis": [
      "Está incorreta: a atenuação é fracionária e exponencial ($(1/2)^n$) e não uma subtração aritmética constante da intensidade inicial, nunca atingindo o valor zero em espessura finita.",
      "Está incorreta: a regra das HVL aplica-se à atenuação do feixe de fotões gama primário monoenergético sob geometria de feixe estreito.",
      "Está incorreta: a relação não é linear mas sim exponencial geométrica; após 2 HVL a intensidade remanescente é de 25% ($0,5^2$) e não 0%."
    ],
    "nursingApplication": "Um biombo de chumbo com espessura correspondente a 5 HVL reduz a dose recebida pelo enfermeiro para apenas 3% da dose original!"
  },
  {
    "id": 7178,
    "topicId": 7,
    "question": "Na prestação de cuidados de enfermagem e proteção radiológica em serviços com doentes radioativos, como se aplica na prática o conceito de 'regra das Camadas de Semiatuação sucessivas (redução para 1/2ⁿ)'?",
    "options": [
      "A utilização de um biombo de chumbo com espessura de 5 HVL reduz a dose para exatamente metade do valor inicial, visto que as restantes quatro camadas apenas servem de reforço mecânico da estrutura de suporte móvel.",
      "A regra de atenuação por HVL sucessivas dispensa a monitorização dosimétrica pessoal, assegurando que o enfermeiro pode permanecer tempo ilimitado junto do doente sem incorrer em qualquer risco ocupacional mensurável.",
      "Ao selecionar um biombo protetor móvel cuja espessura equivale a cinco camadas de semiatuação (5 HVL), o enfermeiro sabe que a taxa de dose recebida durante os cuidados diretos é reduzida para cerca de 3,1% do valor não blindado original.",
      "A eficácia de cinco camadas de HVL acumula-se de modo subtrativo simples (5 vezes 50%), permitindo ao enfermeiro trabalhar em contacto direto com o paciente sem registar qualquer exposição radiológica no dosímetro."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para regra das Camadas de Semiatuação sucessivas (redução para 1/2ⁿ) baseia-se no princípio: Um biombo de chumbo com espessura correspondente a 5 HVL reduz a dose recebida pelo enfermeiro para apenas 3% da dose original! Esta atuação rigorosa garante a segurança do profissional, do utente e da comunidade.",
    "distractorAnalysis": [
      "Está incorreta: cada uma das 5 HVL atenua sucessivamente para metade: $1/(2^5) = 1/32 \\approx 0,03125$ (3,125%), e não apenas metade no conjunto global.",
      "Está incorreta: mesmo com blindagens robustas, a dosimetria individual e a limitação do tempo de contacto continuam a ser obrigatórias segundo o princípio ALARA.",
      "Está incorreta: a atenuação exponencial não se soma percentualmente de forma aditiva; 5 HVL não eliminam 250% da radiação, reduzem-na para $(1/2)^5 = 3,125\\%$."
    ],
    "nursingApplication": "Um biombo de chumbo com espessura correspondente a 5 HVL reduz a dose recebida pelo enfermeiro para apenas 3% da dose original!"
  },
  {
    "id": 7179,
    "topicId": 7,
    "question": "Um enfermeiro analisa o poder de penetração, mecanismos de atenuação e riscos biológicos em 'regra das Camadas de Semiatuação sucessivas (redução para 1/2ⁿ)'. Qual das seguintes afirmações expressa a correlação biofísica correta?",
    "options": [
      "A fração de radiação transmitida através de barreiras sucessivas decresce de forma linear até se anular quando a espessura total em centímetros atinge o valor numérico da energia máxima expressa em megaeletrão-volt do feixe incidente.",
      "O número de camadas de semiatuação necessárias para atenuar o feixe gama independe da energia quântica dos fotões emitidos, sendo rigorosamente idêntico para fontes terapêuticas de iodo-131 e fontes diagnósticas de tecnécio-99m.",
      "A radiação transmitida por duas HVL decai para 25%, mas a terceira HVL perde eficácia atenuadora devido à saturação atómica precoce dos núcleos pesados de chumbo sob a incidência direta e contínua do feixe primário emitido.",
      "A fração de radiação transmitida através de uma blindagem homogénea decresce de modo estritamente exponencial com o número de camadas de semiatuação: $\\frac{I}{I_0} = \\left(\\frac{1}{2}\right)^n = 2^{-n} = e^{-\\mu \\cdot x}$, confirmando o modelo estocástico de atenuação."
    ],
    "correctIndex": 3,
    "explanation": "A análise biofísica exata demonstra que O enfermeiro calcula rapidamente a atenuação proporcionada por biombos móveis de proteção no serviço de medicina nuclear com base no número de HVL presentes. O domínio destes conhecimentos permite ao enfermeiro fundamentar a escolha de blindagens e protocolos de segurança.",
    "distractorAnalysis": [
      "Está incorreta: a transmissão de fotões gama segue uma lei exponencial decrescente e não uma regressão linear que se extinga a uma distância rígida.",
      "Está incorreta: a HVL varia significativamente com a energia dos fotões e o material absorvente; fotões mais energéticos exigem maiores espessuras de HVL.",
      "Está incorreta: os materiais absorventes não sofrem 'saturação' que degrade a atenuação radiológica nas intensidades e doses diagnósticas ou terapêuticas usuais."
    ],
    "nursingApplication": "Um biombo de chumbo com espessura correspondente a 5 HVL reduz a dose recebida pelo enfermeiro para apenas 3% da dose original!"
  },
  {
    "id": 7180,
    "topicId": 7,
    "question": "Na física das radiações nucleares (partículas alfa, beta e fotões gama) aplicada à prática clínica, em relação a 'Camada Deciatuadora (TVL - Tenth Value Layer)', qual é a fundamentação científica correta?",
    "options": [
      "Representa a espessura de material absorvente necessária para reduzir a intensidade do feixe de radiação a um décimo (10%) do seu valor inicial ($TVL = \\frac{\\ln(10)}{\\mu} \\approx \\frac{2,303}{\\mu} \\approx 3,32 \\times HVL$), sendo crucial no dimensionamento de barreiras estruturais.",
      "Representa a espessura necessária para desacelerar eletrões relativistas em dez unidades de tempo consecutivas, impedindo a produção indesejada de radiação de travagem penetrante no interior dos tecidos corporais profundos do doente.",
      "Consiste na camada de blindagem que reduz a taxa de dose para 0,1% da intensidade inicial emitida pela fonte, sendo exatamente equivalente à espessura combinada de dez camadas de semiatuação sucessivas sobrepostas no feixe.",
      "Equivale a dez vezes a espessura da camada de semiatuação ($10 \\times HVL$), sendo a unidade métrica padrão aplicada de forma estrita à caracterização quantitativa da absorção tecidual de partículas alfa superficiais na pele humana."
    ],
    "correctIndex": 0,
    "explanation": "Em física nuclear e radioproteção clínica, Camada Deciatuadora (TVL - Tenth Value Layer) explica-se pelo facto de que é a espessura de material necessária para atenuar o feixe de radiação para um décimo (10%) da sua intensidade inicial ($TVL = \\ln(10) / \\mu \\approx 2,303 / \\mu \\approx 3,32 \\times HVL$). É amplamente utilizada no cálculo arquitetónico de blindagem estrutural das paredes de betão dos bunkers de radioterapia e aceleradores lineares.",
    "distractorAnalysis": [
      "Está incorreta: a TVL é uma medida dimensional de atenuação de intensidade de fotões para 10% e não uma unidade cronológica de desaceleração de eletrões.",
      "Está incorreta: a redução para 0,1% corresponde a 3 TVL ($0,1^3 = 0,001$) ou a cerca de 10 HVL ($2^{-10} \\approx 0,00098$), enquanto uma única TVL reduz para 10%.",
      "Está incorreta: 1 TVL equivale matematicamente a aproximadamente $3,32 \\times HVL$ (pois $\\ln(10)/\\ln(2) \\approx 3,322$) e não a $10 \\times HVL$."
    ],
    "nursingApplication": "O enfermeiro sabe que as paredes de betão de um bunker hospitalar possuem vários TVLs de espessura (mais de 1 a 2 metros de betão baritado denso) para proteger corredores e enfermarias contíguas."
  },
  {
    "id": 7181,
    "topicId": 7,
    "question": "Na prestação de cuidados de enfermagem e proteção radiológica em serviços com doentes radioativos, como se aplica na prática o conceito de 'Camada Deciatuadora (TVL - Tenth Value Layer)'?",
    "options": [
      "O enfermeiro deve vestir simultaneamente dez aventais de chumbo finos para perfazer um TVL antes de proceder à administração assistida de qualquer radiofármaco emissor gama de energia moderada ao doente internado no serviço.",
      "O enfermeiro compreende que os muros e divisórias de betão baritado dos quartos de isolamento metabólico e bunkers hospitalares são dimensionados com múltiplos TVLs de espessura para atenuar a dose exterior para níveis regulamentares seguros.",
      "A presença de uma parede com um TVL de espessura elimina na totalidade qualquer necessidade de distanciamento físico ou monitorização radiológica individual nas áreas de circulação adjacentes ao quarto de isolamento terapêutico.",
      "O conceito de TVL é utilizado unicamente para quantificar o tempo mínimo de repouso no leito que o doente necessita de cumprir antes de poder receber visitas no serviço de internamento de medicina nuclear de intervenção."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para Camada Deciatuadora (TVL - Tenth Value Layer) baseia-se no princípio: O enfermeiro sabe que as paredes de betão de um bunker hospitalar possuem vários TVLs de espessura (mais de 1 a 2 metros de betão baritado denso) para proteger corredores e enfermarias contíguas. Esta atuação rigorosa garante a segurança do profissional, do utente e da comunidade.",
    "distractorAnalysis": [
      "Está incorreta: o uso de 10 aventais é impraticável ergonomicamente e desnecessário; a proteção em isolamento baseia-se na blindagem arquitetónica das paredes e biombos estruturais.",
      "Está incorreta: 1 TVL reduz a dose para 10%, o que pode ainda representar taxas mensuráveis; o projeto arquitetónico combina múltiplos TVLs com regras operacionais de controlo de acessos.",
      "Está incorreta: a TVL é uma grandeza de espessura de atenuação física de materiais ($cm$ ou $mm$) e não uma unidade de tempo de repouso clínico do doente."
    ],
    "nursingApplication": "O enfermeiro sabe que as paredes de betão de um bunker hospitalar possuem vários TVLs de espessura (mais de 1 a 2 metros de betão baritado denso) para proteger corredores e enfermarias contíguas."
  },
  {
    "id": 7182,
    "topicId": 7,
    "question": "Um enfermeiro analisa o poder de penetração, mecanismos de atenuação e riscos biológicos em 'Camada Deciatuadora (TVL - Tenth Value Layer)'. Qual das seguintes afirmações expressa a correlação biofísica correta?",
    "options": [
      "A relação métrica entre a TVL e a HVL é estritamente de 10 para 1 em qualquer meio absorvente denso, já que o prefixo deciatuador exige dez camadas de espessura física idêntica à semiatuadora de referência laboratorial.",
      "A TVL aplica-se exclusivamente a barreiras de chumbo maciço de pureza cirúrgica, sendo impossível determinar a sua grandeza para alvenaria de betão armado, vidro plumbífero denso ou argamassa baritada estrutural.",
      "A relação analítica entre a TVL e a HVL decorre diretamente da base logarítmica das curvas de atenuação exponencial: $TVL = HVL \\cdot \\frac{\\ln(10)}{\\ln(2)} \\approx 3,322 \\times HVL$, permitindo converter de imediato espessuras de barreira calculadas.",
      "Duas camadas deciatuadoras (2 TVL) reduzem a intensidade do feixe incidente para 20% do valor inicial emitido pela fonte, de acordo com o princípio da proporcionalidade aritmética direta das blindagens pesadas."
    ],
    "correctIndex": 2,
    "explanation": "A análise biofísica exata demonstra que É amplamente utilizada no cálculo arquitetónico de blindagem estrutural das paredes de betão dos bunkers de radioterapia e aceleradores lineares. O domínio destes conhecimentos permite ao enfermeiro fundamentar a escolha de blindagens e protocolos de segurança.",
    "distractorAnalysis": [
      "Está incorreta: como $2^{3,322} \\approx 10$, são necessárias cerca de 3,32 HVL para atenuar o mesmo feixe que 1 TVL, e não 10 HVL.",
      "Está incorreta: a TVL é definida para qualquer material absorvente (chumbo, betão, barita, água, ferro), desde que seja conhecido o coeficiente de atenuação linear para a energia considerada.",
      "Está incorreta: a atenuação de 2 TVL é multiplicativa: $0,10 \\times 0,10 = 0,01$ (redução para 1% da intensidade inicial) e não 20%."
    ],
    "nursingApplication": "O enfermeiro sabe que as paredes de betão de um bunker hospitalar possuem vários TVLs de espessura (mais de 1 a 2 metros de betão baritado denso) para proteger corredores e enfermarias contíguas."
  },
  {
    "id": 7183,
    "topicId": 7,
    "question": "Na física das radiações nucleares (partículas alfa, beta e fotões gama) aplicada à prática clínica, em relação a 'influência da energia do fotão gama na espessura de blindagem', qual é a fundamentação científica correta?",
    "options": [
      "Fotões gama de maior energia interagem com muito maior intensidade com os eletrões orbitais periféricos, o que reduz substancialmente a espessura de blindagem plúmbea necessária para a sua contenção física no serviço hospitalar.",
      "A espessura de chumbo necessária para atenuar a radiação é fixa em 1 milímetro para qualquer radionuclídeo utilizado, dependendo unicamente da atividade total em megabecquerel da amostra administrada por via venosa ao paciente.",
      "A elevação da energia dos fotões transforma progressivamente a radiação gama incidente em partículas alfa de curto alcance, tornando desnecessário o aumento da espessura das barreiras de proteção plúmbea na unidade clínica.",
      "Quanto maior for a energia dos fotões gama emitidos pelo radioisótopo, menor é a secção eficaz de interação na matéria, menor é o coeficiente de atenuação linear ($\\mu$) e, por conseguinte, maior tem de ser a espessura da Camada de Semiatuação (HVL) da blindagem."
    ],
    "correctIndex": 3,
    "explanation": "Em física nuclear e radioproteção clínica, influência da energia do fotão gama na espessura de blindagem explica-se pelo facto de que quanto maior for a energia dos fotões gama emitidos pelo radioisótopo, maior será o valor da sua Camada de Semiatuação (HVL) e mais espessa terá de ser a blindagem de chumbo. Enquanto o Tecnécio-99m (140 keV) tem HVL de ~0,3 mm Pb, o Césio-137 (662 keV) tem HVL de ~5 mm Pb e o Cobalto-60 (1,25 MeV) exige HVL de cerca de 12 mm de chumbo maciço.",
    "distractorAnalysis": [
      "Está incorreta: fotões com maior energia têm geralmente menor probabilidade de interação por unidade de comprimento (menor $\\mu$), exigindo espessuras de blindagem significativamente superiores.",
      "Está incorreta: a atenuação depende criticamente da energia dos fotões emitidos; um feixe de 140 keV (Tc-99m) exige muito menos chumbo que fotões de 511 keV ou de 1,25 MeV (Co-60).",
      "Está incorreta: fotões gama são quanta de radiação eletromagnética e nunca se convertem em partículas alfa (núcleos de hélio-4)."
    ],
    "nursingApplication": "O enfermeiro nunca utiliza um biombo leve calibrado para diagnóstico de baixa energia ao cuidar de um doente submetido a braquiterapia com fontes de alta energia."
  },
  {
    "id": 7184,
    "topicId": 7,
    "question": "Na prestação de cuidados de enfermagem e proteção radiológica em serviços com doentes radioativos, como se aplica na prática o conceito de 'influência da energia do fotão gama na espessura de blindagem'?",
    "options": [
      "O enfermeiro reconhece que biombos e aventais plúmbeos concebidos para radiologia convencional e tecnécio-99m (0,5 mm Pb) oferecem proteção muito reduzida contra fotões de aniquilação de 511 keV emitidos em procedimentos de PET.",
      "O enfermeiro pode substituir com total segurança biombos de chumbo estrutural por divisórias leves de alumínio quando presta cuidados a doentes submetidos a exames de PET com 18F-fludesoxiglicose no serviço.",
      "A utilização de óculos plumbíferos normais de 0,25 mm Pb bloqueia integralmente os fotões de 511 keV de PET por reflexão especular na superfície do vidro condutor colocado na armação protetora de enfermagem.",
      "Os aventais plúmbeos habituais de radiodiagnóstico aumentam a sua capacidade de blindagem quanto mais elevada for a energia dos fotões secundários emitidos pelo corpo do doente radioativo internado na unidade."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para influência da energia do fotão gama na espessura de blindagem baseia-se no princípio: O enfermeiro nunca utiliza um biombo leve calibrado para diagnóstico de baixa energia ao cuidar de um doente submetido a braquiterapia com fontes de alta energia. Esta atuação rigorosa garante a segurança do profissional, do utente e da comunidade.",
    "distractorAnalysis": [
      "Está incorreta: para fotões de 511 keV, o chumbo de 0,5 mm Pb atenua apenas uma pequena fração (< 15-20%); o alumínio é ainda muito menos denso e ineficaz para fotões desta energia.",
      "Está incorreta: fotões gama não sofrem reflexão óptica especular em vidro plumbífero; a sua atenuação ocorre por interações atómicas volumétricas e exige maiores espessuras.",
      "Está incorreta: para energias mais elevadas (como 511 keV), o coeficiente de atenuação linear do chumbo é inferior ao registado nas energias de diagnóstico (60-140 keV), diminuindo a eficácia do avental fino."
    ],
    "nursingApplication": "O enfermeiro nunca utiliza um biombo leve calibrado para diagnóstico de baixa energia ao cuidar de um doente submetido a braquiterapia com fontes de alta energia."
  },
  {
    "id": 7185,
    "topicId": 7,
    "question": "Um enfermeiro analisa o poder de penetração, mecanismos de atenuação e riscos biológicos em 'influência da energia do fotão gama na espessura de blindagem'. Qual das seguintes afirmações expressa a correlação biofísica correta?",
    "options": [
      "A espessura de HVL em chumbo é constante e igual a 0,3 mm para todas as energias conhecidas na prática clínica, desde o diagnóstico convencional até à radioterapia externa com feixes profundos de cobalto-60.",
      "A espessura de semiatuação (HVL) em chumbo varia fortemente com a energia: cerca de 0,3 mm para o tecnécio-99m (140 keV), cerca de 4 a 5 mm para os fotões de aniquilação de PET (511 keV) e aproximadamente 11 a 12 mm para o cobalto-60 (~1,25 MeV).",
      "O tecnécio-99m requer barreiras de chumbo dez vezes mais espessas do que os fotões de aniquilação de PET, devido ao seu elevado rendimento quântico por transição isomérica nuclear no meio absorvente tecidual.",
      "O cobalto-60 requer menor espessura de blindagem do que o tecnécio-99m porque a sua elevada frequência de onda permite que a radiação contorne os átomos de chumbo por difração geométrica na barreira de proteção."
    ],
    "correctIndex": 1,
    "explanation": "A análise biofísica exata demonstra que Enquanto o Tecnécio-99m (140 keV) tem HVL de ~0,3 mm Pb, o Césio-137 (662 keV) tem HVL de ~5 mm Pb e o Cobalto-60 (1,25 MeV) exige HVL de cerca de 12 mm de chumbo maciço. O domínio destes conhecimentos permite ao enfermeiro fundamentar a escolha de blindagens e protocolos de segurança.",
    "distractorAnalysis": [
      "Está incorreta: a HVL do chumbo aumenta drasticamente com o aumento da energia dos fotões na gama clínica considerada (de frações de milímetro a mais de um centímetro).",
      "Está incorreta: o Tc-99m emite fotões de 140 keV, cuja HVL em Pb é de apenas ~0,3 mm, enquanto os 511 keV do PET requerem cerca de 4 a 5 mm de chumbo para atenuar para metade.",
      "Está incorreta: o cobalto-60 emite fotões de 1,17 e 1,33 MeV, altamente penetrantes, que exigem blindagens de chumbo muito mais espessas (~11 mm de HVL) e não sofrem difração benéfica."
    ],
    "nursingApplication": "O enfermeiro nunca utiliza um biombo leve calibrado para diagnóstico de baixa energia ao cuidar de um doente submetido a braquiterapia com fontes de alta energia."
  },
  {
    "id": 7186,
    "topicId": 7,
    "question": "Na física das radiações nucleares (partículas alfa, beta e fotões gama) aplicada à prática clínica, em relação a 'regras de internamento em quarto de isolamento radioativo com paredes baritadas', qual é a fundamentação científica correta?",
    "options": [
      "O internamento em quarto baritado tem como única finalidade impedir que os campos magnéticos dos equipamentos eletrónicos exteriores perturbem a fixação tireoidiana do iodo administrado por via oral ao doente internado.",
      "As paredes com barita destinam-se a acelerar o decaimento físico do iodo-131 através da absorção contínua de fluxos de neutrões térmicos emitidos espontaneamente pelo organismo do paciente durante o tratamento metabólico.",
      "Doentes submetidos a doses terapêuticas ablativas de iodo-131 (ex.: 3700 MBq) permanecem internados em quartos com paredes revestidas a barita ou chumbo e sanitários ligados a tanques de decaimento temporário para prevenir a contaminação radioativa ambiental.",
      "O isolamento radioativo é recomendado apenas para o conforto psicológico do doente, dado que o iodo-131 administrado por via oral deixa de emitir qualquer radiação penetrante após ser totalmente deglutido e absorvido."
    ],
    "correctIndex": 2,
    "explanation": "Em física nuclear e radioproteção clínica, regras de internamento em quarto de isolamento radioativo com paredes baritadas explica-se pelo facto de que doentes submetidos a tratamentos com altas doses de radiofármacos metabólicos (como Iodo-131 em dose ablativa de 3700 MBq) ficam internados em quartos individuais com paredes blindadas com chumbo ou sulfato de bário. O quarto dispõe de casa de banho privativa ligada a tanques de decaimento radioativo subterrâneos para reter os dejetos até que a radioatividade decaia para níveis legais de segurança.",
    "distractorAnalysis": [
      "Está incorreta: a barita (sulfato de bário) é utilizada pela sua densidade e capacidade de atenuação de fotões gama de 364 keV, não tendo qualquer relação com campos magnéticos.",
      "Está incorreta: nenhuma barreira passiva consegue alterar a constante de decaimento radioativo ($\\lambda$) ou a semivida física de um radionuclídeo no organismo.",
      "Está incorreta: o iodo-131 é um emissor beta e gama de 8 dias de semivida; a sua emissão penetrante de 364 keV e a excreção na urina impõem medidas rigorosas de radioproteção."
    ],
    "nursingApplication": "O enfermeiro instrui o doente para não sair do quarto e utiliza calçado e batas descartáveis ao entrar na antecâmara de isolamento."
  },
  {
    "id": 7187,
    "topicId": 7,
    "question": "Na prestação de cuidados de enfermagem e proteção radiológica em serviços com doentes radioativos, como se aplica na prática o conceito de 'regras de internamento em quarto de isolamento radioativo com paredes baritadas'?",
    "options": [
      "O enfermeiro promove a ventilação do quarto abrindo as portas de comunicação com o corredor central para diluir rapidamente os fotões gama na circulação geral de ar do piso de internamento de doentes do hospital.",
      "Os resíduos alimentares e descartáveis do doente são eliminados diretamente no circuito comum de resíduos urbanos hospitalares nas primeiras duas horas após a ingestão da dose terapêutica líquida prescrita.",
      "O enfermeiro autoriza a visita livre e prolongada de familiares, desde que permaneçam sentados em cadeiras de madeira junto da cabeceira do leito do doente radioativo durante todo o período da visita hospitalar.",
      "O enfermeiro aplica protocolos estritos de circulação: o doente não sai do quarto, o acesso de profissionais é restrito e na antecâmara são calçados cobre-sapatos e vestidas batas descartáveis para conter qualquer contaminação externa indesejada."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para regras de internamento em quarto de isolamento radioativo com paredes baritadas baseia-se no princípio: O enfermeiro instrui o doente para não sair do quarto e utiliza calçado e batas descartáveis ao entrar na antecâmara de isolamento. Esta atuação rigorosa garante a segurança do profissional, do utente e da comunidade.",
    "distractorAnalysis": [
      "Está incorreta: as portas do quarto de isolamento devem permanecer sempre fechadas para conter emissões e manter a depressão de ar da antecâmara, evitando contaminações.",
      "Está incorreta: todos os materiais descartáveis e sobras alimentares devem ser segregados em contentores plásticos selados e encaminhados para decaimento radioativo no expurgo quente.",
      "Está incorreta: visitas são expressamente restritas ou proibidas (especialmente grávidas e crianças); o contacto deve respeitar limites de dose rigorosos e distanciamento físico estrito."
    ],
    "nursingApplication": "O enfermeiro instrui o doente para não sair do quarto e utiliza calçado e batas descartáveis ao entrar na antecâmara de isolamento."
  },
  {
    "id": 7188,
    "topicId": 7,
    "question": "Um enfermeiro analisa o poder de penetração, mecanismos de atenuação e riscos biológicos em 'regras de internamento em quarto de isolamento radioativo com paredes baritadas'. Qual das seguintes afirmações expressa a correlação biofísica correta?",
    "options": [
      "A retenção das urinas em reservatórios de decaimento radiológico é indispensável porque a excreção renal elimina a fração majoritária do iodo-131 não captado, prevenindo a introdução de efluentes com elevada atividade específica na rede pública de saneamento.",
      "Os tanques de decaimento radioativo funcionam por destilação térmica para transformar quimicamente o iodo radioativo residual em cloreto de sódio inerte antes da sua eliminação urbana regular pelo sistema predial.",
      "A barita nas paredes do quarto reage quimicamente com os fotões gama incidentes, neutralizando a sua carga elétrica e convertendo-os em partículas alfa inofensivas de baixa penetração tecidual na antecâmara.",
      "A presença de sanitários privativos no quarto isolado é opcional, visto que as excreções corporais dos doentes tratados com iodo-131 não contêm qualquer atividade radiológica biologicamente mensurável no efluente."
    ],
    "correctIndex": 0,
    "explanation": "A análise biofísica exata demonstra que O quarto dispõe de casa de banho privativa ligada a tanques de decaimento radioativo subterrâneos para reter os dejetos até que a radioatividade decaia para níveis legais de segurança. O domínio destes conhecimentos permite ao enfermeiro fundamentar a escolha de blindagens e protocolos de segurança.",
    "distractorAnalysis": [
      "Está incorreta: o tratamento em reservatórios baseia-se exclusivamente no decaimento radioativo ao longo do tempo (várias meias-vidas de 8 dias) e não em destilação térmica.",
      "Está incorreta: fotões gama não possuem carga elétrica e as paredes atenuam o feixe por absorção fotoelétrica e dispersão Compton, sem produzir partículas alfa.",
      "Está incorreta: a urina é a principal via de excreção rápida do iodo radioativo (frequentemente > 80% nas primeiras 48h), constituindo o maior foco de contaminação radioativa potencial."
    ],
    "nursingApplication": "O enfermeiro instrui o doente para não sair do quarto e utiliza calçado e batas descartáveis ao entrar na antecâmara de isolamento."
  },
  {
    "id": 7189,
    "topicId": 7,
    "question": "Na física das radiações nucleares (partículas alfa, beta e fotões gama) aplicada à prática clínica, em relação a 'prestação de cuidados de enfermagem sob a regra de Tempo, Distância e Blindagem', qual é a fundamentação científica correta?",
    "options": [
      "O tempo de contacto e a distância física exercem efeitos proporcionais idênticos na dose recebida, reduzindo ambos a exposição ocupacional segundo uma função logarítmica dependente da massa corporal do profissional e da taxa de humidade do ar.",
      "A dose absorvida pelo profissional é diretamente proporcional ao tempo de contacto ($D = \\dot{D} \\cdot t$), inversamente proporcional ao quadrado da distância à fonte ($D \\propto 1/d^2$) e atenuada exponencialmente pela intercalação de blindagens apropriadas ($D \\propto e^{-\\mu \\cdot x}$).",
      "A blindagem móvel de chumbo é o único fator biofísico determinante de proteção radiológica, assegurando que o profissional pode permanecer tempo ilimitado junto do leito sem que a sua dose acumulada registe qualquer aumento mensurável.",
      "O aumento da distância física apenas confere proteção efetiva contra a radiação corpuscular beta de curto alcance, não exercendo qualquer atenuação geométrica ou dosimétrica mensurável sobre a taxa de dose dos fotões gama emitidos pelo doente."
    ],
    "correctIndex": 1,
    "explanation": "Em física nuclear e radioproteção clínica, prestação de cuidados de enfermagem sob a regra de Tempo, Distância e Blindagem explica-se pelo facto de que o enfermeiro organiza todo o material previamente no exterior do quarto, entra apenas para procedimentos estritamente necessários, comunica a partir da porta ou por intercomunicador e utiliza biombos móveis plúmbeos colocados junto ao leito. O tempo total de permanência direta junto ao doente é cronometrado e distribuído por rotação entre os vários membros da equipa de enfermagem para não ultrapassar os limites dosimétricos.",
    "distractorAnalysis": [
      "Está incorreta: o tempo afeta a dose de forma linear ($D = \\dot{D} \\times t$), enquanto a distância atua com o inverso do quadrado ($1/d^2$), sendo ambos fundamentais e independentes da massa corporal.",
      "Está incorreta: a dose acumulada continua a aumentar linearmente com o tempo decorrido, mesmo com a presença de blindagens parciais, sendo vital restringir a permanência.",
      "Está incorreta: a lei do inverso do quadrado da distância aplica-se estritamente à radiação eletromagnética gama proveniente de fontes pontuais ou de doentes radioativos."
    ],
    "nursingApplication": "O dosímetro de leitura direta (eletrónico com alarme sonoro de taxa de dose) é utilizado obrigatoriamente pelo enfermeiro durante a entrada no quarto."
  },
  {
    "id": 7190,
    "topicId": 7,
    "question": "Na prestação de cuidados de enfermagem e proteção radiológica em serviços com doentes radioativos, como se aplica na prática o conceito de 'prestação de cuidados de enfermagem sob a regra de Tempo, Distância e Blindagem'?",
    "options": [
      "O enfermeiro deve realizar as intervenções técnicas de enfermagem em marcha acelerada sem luvas nem proteção individual, compensando a proximidade física com o aumento exclusivo da velocidade motora de execução dos procedimentos clínicos.",
      "A monitorização por dosímetro eletrónico dispensa o registo dosimétrico mensal oficial, permitindo ao enfermeiro gerir autonomamente a sua própria exposição sem qualquer supervisão da equipa de física médica e proteção radiológica.",
      "O enfermeiro planeia todos os procedimentos fora do quarto, utiliza dosímetro operacional de leitura direta com alarme sonoro, mantém comunicação à distância com o doente e recorre a biombos móveis de chumbo durante as intervenções presenciais no leito.",
      "O profissional deve permanecer sentado no bordo do leito do doente radioativo para transmitir tranquilidade e segurança emocional, prescindindo intencionalmente de biombos de chumbo móveis ou limites de permanência temporal."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para prestação de cuidados de enfermagem sob a regra de Tempo, Distância e Blindagem baseia-se no princípio: O dosímetro de leitura direta (eletrónico com alarme sonoro de taxa de dose) é utilizado obrigatoriamente pelo enfermeiro durante a entrada no quarto. Esta atuação rigorosa garante a segurança do profissional, do utente e da comunidade.",
    "distractorAnalysis": [
      "Está incorreta: o trabalho apressado sem EPI aumenta o risco de contaminação e erros clínicos; a organização prévia do material permite executar procedimentos com calma e rigor no menor tempo necessário.",
      "Está incorreta: o dosímetro operacional eletrónico complementa, mas não substitui, o dosímetro individual passivo oficial (TLD/OSL) de uso regulamentar obrigatório.",
      "Está incorreta: permanecer no bordo do leito viola o princípio da distância ($1/d^2$) e do tempo mínimo; o apoio psicológico deve ser prestado mantendo distanciamento físico ou por intercomunicação."
    ],
    "nursingApplication": "O dosímetro de leitura direta (eletrónico com alarme sonoro de taxa de dose) é utilizado obrigatoriamente pelo enfermeiro durante a entrada no quarto."
  },
  {
    "id": 7191,
    "topicId": 7,
    "question": "Um enfermeiro analisa o poder de penetração, mecanismos de atenuação e riscos biológicos em 'prestação de cuidados de enfermagem sob a regra de Tempo, Distância e Blindagem'. Qual das seguintes afirmações expressa a correlação biofísica correta?",
    "options": [
      "Duplicar a distância de trabalho entre o enfermeiro e o doente radioativo reduz a intensidade da taxa de dose para exatamente metade (50%) de acordo com a lei de atenuação linear do ar ambiente da enfermaria hospitalar.",
      "Aumentar a distância de trabalho só produz redução efetiva de dose se o ar entre o profissional e o doente estiver submetido a uma pressão atmosférica hipobárica mantida artificialmente por filtros de carvão ativado no quarto.",
      "O fator tempo permite anular retrospectivamente a dose recebida, desde que o enfermeiro cumpra um intervalo de repouso no domicílio de duração rigorosamente idêntica à do turno de trabalho cumprido no serviço de isolamento.",
      "Duplicar a distância de trabalho em relação ao doente radioativo (de 1 metro para 2 metros) reduz a taxa de dose recebida pelo enfermeiro para um quarto (25%), demonstrando a extrema eficácia da distância geométrica na proteção ocupacional em medicina nuclear."
    ],
    "correctIndex": 3,
    "explanation": "A análise biofísica exata demonstra que O tempo total de permanência direta junto ao doente é cronometrado e distribuído por rotação entre os vários membros da equipa de enfermagem para não ultrapassar os limites dosimétricos. O domínio destes conhecimentos permite ao enfermeiro fundamentar a escolha de blindagens e protocolos de segurança.",
    "distractorAnalysis": [
      "Está incorreta: a lei do inverso do quadrado determina que duplicar a distância ($2\\times$) reduz a dose para $(1/2)^2 = 1/4$ (25%) e não para metade (50%).",
      "Está incorreta: a dispersão geométrica no espaço tridimensional decorre da área da esfera ($4\\pi r^2$) e opera em ar normal sob qualquer pressão atmosférica clínica.",
      "Está incorreta: a dose de radiação ionizante absorvida é cumulativa a nível molecular e tecidual, não podendo ser 'apagada' por repouso posterior."
    ],
    "nursingApplication": "O dosímetro de leitura direta (eletrónico com alarme sonoro de taxa de dose) é utilizado obrigatoriamente pelo enfermeiro durante a entrada no quarto."
  },
  {
    "id": 7192,
    "topicId": 7,
    "question": "Na física das radiações nucleares (partículas alfa, beta e fotões gama) aplicada à prática clínica, em relação a 'gestão segura de excreções radioativas (urina, suor e saliva)', qual é a fundamentação científica correta?",
    "options": [
      "Em doentes tratados com iodo-131, a rápida eliminação renal da fração livre nas primeiras 48 horas exige hidratação oral abundante (2 a 3 litros/dia) e micções frequentes sentado para reduzir a dose na bexiga e evitar salpicos de contaminação radioativa.",
      "O iodo radioativo excretado na urina perde instantaneamente toda a sua atividade ionizante ao entrar em contacto com o ar ambiente e com os produtos de limpeza habitualmente utilizados na sanita privativa do quarto.",
      "A restrição severa de líquidos é recomendada para concentrar a urina na bexiga, evitando que os rins e o trato urinário sofram irritação tecidual por radiação ionizante diluída ao longo de todas as vias excretoras.",
      "O suor e a saliva dos doentes submetidos a terapia metabólica não contêm radionuclídeos, sendo desnecessário qualquer cuidado com a partilha ou manipulação de copos, talheres ou almofadas do leito durante o internamento."
    ],
    "correctIndex": 0,
    "explanation": "Em física nuclear e radioproteção clínica, gestão segura de excreções radioativas (urina, suor e saliva) explica-se pelo facto de que em doentes tratados com Iodo-131, mais de 80-90% da dose não retida na tiroide é excretada pelos rins na urina nas primeiras 48 horas, além de frações eliminadas pelo suor e saliva. O enfermeiro incentiva a ingestão abundante de líquidos (2 a 3 litros/dia) e a micção frequente, ensinando o doente masculino a urinar sempre sentado para evitar salpicos radioativos.",
    "distractorAnalysis": [
      "Está incorreta: o iodo-131 na urina preserva integralmente as suas propriedades nucleares ($\\lambda$, emissão $\\beta^-$ e $\\gamma$), exigindo gestão controlada de efluentes.",
      "Está incorreta: reter urina concentrada aumenta drasticamente a dose absorvida pelo epitélio vesical; a hiper-hidratação e esvaziamento frequente protegem a parede da bexiga.",
      "Está incorreta: o iodo-131 é excretado nas glândulas salivares e sudoríparas, exigindo uso exclusivo de toalhas, lençóis e talheres e a respetiva segregação em sacos próprios."
    ],
    "nursingApplication": "Todos os lençóis, toalhas, copos e talheres são ensacados em contentores identificados para decaimento radioativo temporário no expurgo quente."
  },
  {
    "id": 7193,
    "topicId": 7,
    "question": "Na prestação de cuidados de enfermagem e proteção radiológica em serviços com doentes radioativos, como se aplica na prática o conceito de 'gestão segura de excreções radioativas (urina, suor e saliva)'?",
    "options": [
      "A roupa de cama contaminada com fluidos radioativos é enviada imediatamente para a lavandaria hospitalar geral em sacos de pano abertos para permitir uma rápida desinfeção térmica por vapor na máquina industrial central.",
      "Todos os materiais têxteis, copos, pratos descartáveis e compressas utilizados pelo doente são acondicionados em contentores com sacos plásticos espessos devidamente sinalizados e encaminhados para o expurgo quente para decaimento radioativo temporário.",
      "As fezes e urinas recolhidas em arrastadeiras devem ser despejadas diretamente no lavatório comum da antecâmara de isolamento, lavando a bancada cerâmica com água tépida e compressas comuns de gaze cirúrgica estéril.",
      "O enfermeiro deve recolher pensos e resíduos corporais do doente sem luvas para evitar a acumulação de eletricidade estática plástica que desestabilize os radionuclídeos emissores presentes no material recolhido."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para gestão segura de excreções radioativas (urina, suor e saliva) baseia-se no princípio: Todos os lençóis, toalhas, copos e talheres são ensacados em contentores identificados para decaimento radioativo temporário no expurgo quente. Esta atuação rigorosa garante a segurança do profissional, do utente e da comunidade.",
    "distractorAnalysis": [
      "Está incorreta: têxteis e resíduos radioativos nunca devem ir para a lavandaria comum sem prévio decaimento radioativo e monitorização com contador Geiger-Müller.",
      "Está incorreta: dejetos radioativos devem ser esvaziados nas sanitas ligadas a reservatórios de decaimento; despejá-los em lavatórios comuns gera risco grave de contaminação e aerossóis.",
      "Está incorreta: o uso de luvas e vestuário de proteção impermeável é mandatório para impedir a absorção percutânea e a contaminação cruzada das mãos do profissional."
    ],
    "nursingApplication": "Todos os lençóis, toalhas, copos e talheres são ensacados em contentores identificados para decaimento radioativo temporário no expurgo quente."
  },
  {
    "id": 7194,
    "topicId": 7,
    "question": "Um enfermeiro analisa o poder de penetração, mecanismos de atenuação e riscos biológicos em 'gestão segura de excreções radioativas (urina, suor e saliva)'. Qual das seguintes afirmações expressa a correlação biofísica correta?",
    "options": [
      "O encerramento do tampo da sanita neutraliza as emissões gama através de um mecanismo de confinamento barométrico hermético que desativa espontaneamente os átomos radioativos presentes na água de descarga do autoclismo.",
      "A instrução para urinar de pé a uma distância segura da sanita é recomendada para permitir que as partículas beta colidam com o ar antes de contactarem com as paredes cerâmicas do sanitário privativo do doente.",
      "Incentivar o doente a urinar sentado e descarregar o autoclismo duas vezes consecutivas com o tampo fechado reduz a formação de aerossóis e microgotículas suspensas no ar do compartimento sanitário, prevenindo a deposição indesejada de iodo-131 nas superfícies circundantes.",
      "A contaminação superficial com urina radioativa seca espontaneamente em poucos minutos, cessando de imediato qualquer emissão ionizante sobre o pavimento ou sobre o mobiliário clínico existente no interior do quarto."
    ],
    "correctIndex": 2,
    "explanation": "A análise biofísica exata demonstra que O enfermeiro incentiva a ingestão abundante de líquidos (2 a 3 litros/dia) e a micção frequente, ensinando o doente masculino a urinar sempre sentado para evitar salpicos radioativos. O domínio destes conhecimentos permite ao enfermeiro fundamentar a escolha de blindagens e protocolos de segurança.",
    "distractorAnalysis": [
      "Está incorreta: o tampo impede a dispersão mecânica de aerossóis e salpicos; não há destruição barométrica de radionuclídeos nem alteração do seu decaimento.",
      "Está incorreta: urinar de pé gera salpicos e aerossóis que contaminam o pavimento e o vestuário; o doente masculino deve ser instruído a urinar sempre sentado.",
      "Está incorreta: a evaporação da água deixa resíduos secos de iodo-131 ativos sobre o chão, aumentando o risco de contaminação das solas do calçado e ressuspensão de poeiras ativas."
    ],
    "nursingApplication": "Todos os lençóis, toalhas, copos e talheres são ensacados em contentores identificados para decaimento radioativo temporário no expurgo quente."
  },
  {
    "id": 7195,
    "topicId": 7,
    "question": "Na física das radiações nucleares (partículas alfa, beta e fotões gama) aplicada à prática clínica, em relação a 'protocolo de emergência perante perda ou deslocamento de fonte selada de braquiterapia', qual é a fundamentação científica correta?",
    "options": [
      "O enfermeiro deve recolher a fonte de braquiterapia de imediato entre os dedos polegar e indicador e guardá-la no bolso da farda hospitalar para assegurar a custódia física permanente até à chegada do médico radioterapeuta.",
      "A fonte de braquiterapia radioativa deve ser empurrada para debaixo do leito com uma vassoura comum e deixada exposta ao ar livre para dispersar a radiação por convecção térmica contínua no ar da enfermaria.",
      "As fontes seladas de braquiterapia emitem radiação exclusivamente na direção longitudinal do fio guia metálico, não apresentando qualquer risco de irradiação lateral para quem as manuseie a curta distância com luvas comuns.",
      "Perante uma semente ou fio de braquiterapia (ex.: Ir-192 ou I-125) desalojado na cama, o enfermeiro nunca a manipula com as mãos desprotegidas, utilizando imediatamente uma pinça cirúrgica longa (>= 30 cm) para a colocar no contentor plúmbeo blindado de emergência existente no quarto."
    ],
    "correctIndex": 3,
    "explanation": "Em física nuclear e radioproteção clínica, protocolo de emergência perante perda ou deslocamento de fonte selada de braquiterapia explica-se pelo facto de que na braquiterapia de alta taxa de dose (HDR) ginecológica ou prostática (sementes de Iodo-125 ou fios de Irídio-192), se uma fonte selada se soltar ou for expelida para a cama, o enfermeiro NUNCA a toca com as mãos desprotegidas. Utiliza imediatamente uma pinça cirúrgica longa (de pelo menos 30 cm para garantir distância física) e deposita a fonte no contentor de transporte de chumbo de emergência ('cofre de chumbo') mantido no quarto.",
    "distractorAnalysis": [
      "Está incorreta: o manuseio direto com os dedos resulta em taxas de dose cutânea extremas (podendo causar radiodermite grave ou necrose); o uso de pinça longa assegura distância protetora ($1/d^2$).",
      "Está incorreta: deixar a fonte solta irradia o quarto e cria perigo extremo; deve ser imediatamente confinada num cofre de chumbo de emergência mantido no local.",
      "Está incorreta: a emissão gama das fontes de braquiterapia é praticamente isotrópica (em todas as direções espaciais), exigindo proteção em 360 graus."
    ],
    "nursingApplication": "Notifica de imediato o Físico Médico de serviço e o Médico Radioterapeuta responsável, isolando o quarto."
  },
  {
    "id": 7196,
    "topicId": 7,
    "question": "Na prestação de cuidados de enfermagem e proteção radiológica em serviços com doentes radioativos, como se aplica na prática o conceito de 'protocolo de emergência perante perda ou deslocamento de fonte selada de braquiterapia'?",
    "options": [
      "Após isolar a fonte dentro do contentor plúmbeo de emergência com auxílio da pinça longa, o enfermeiro evacua e restringe o acesso ao quarto, alertando imediatamente o Físico Médico de serviço e a equipa de Radioproteção do hospital.",
      "O enfermeiro procede à desmontagem mecânica da cápsula protetora da fonte com um bisturi esterilizado para verificar visualmente se o material radioativo encapsulado permanece intacto no seu interior antes de comunicar o incidente.",
      "O profissional lava a fonte em água corrente na pia da enfermaria com detergente enzimático hospitalar concentrado para remover secreções biológicas antes de formalizar a comunicação escrita da ocorrência radiológica.",
      "O protocolo hospitalar determina que o enfermeiro ignore a situação caso o doente não manifeste dor aguda imediata no momento em que a semente radioativa se desloca acidentalmente do leito cirúrgico para a cama."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para protocolo de emergência perante perda ou deslocamento de fonte selada de braquiterapia baseia-se no princípio: Notifica de imediato o Físico Médico de serviço e o Médico Radioterapeuta responsável, isolando o quarto. Esta atuação rigorosa garante a segurança do profissional, do utente e da comunidade.",
    "distractorAnalysis": [
      "Está incorreta: abrir ou desmontar uma fonte selada pode provocar contaminação radioativa massiva e libertação descontrolada do material radioativo encapsulado.",
      "Está incorreta: lavar a fonte na pia pode contaminar o sistema de esgotos ou resultar na sua perda física; a fonte deve ir intacta para o contentor plúmbeo.",
      "Está incorreta: uma fonte desalojada representa uma emergência radiológica grave com risco de irradiação inadvertida de doentes e profissionais, exigindo intervenção imediata."
    ],
    "nursingApplication": "Notifica de imediato o Físico Médico de serviço e o Médico Radioterapeuta responsável, isolando o quarto."
  },
  {
    "id": 7197,
    "topicId": 7,
    "question": "Um enfermeiro analisa o poder de penetração, mecanismos de atenuação e riscos biológicos em 'protocolo de emergência perante perda ou deslocamento de fonte selada de braquiterapia'. Qual das seguintes afirmações expressa a correlação biofísica correta?",
    "options": [
      "O uso de uma pinça cirúrgica longa metálica serve unicamente para estabelecer uma ligação à terra eletrostática que neutralize os fotões gama antes que estes alcancem a superfície externa das luvas cirúrgicas do profissional.",
      "O recurso a uma pinça cirúrgica longa de 30 cm em vez do contacto manual direto (distância de cerca de 3 mm da polpa digital à semente) reduz a taxa de dose recebida na pele dos dedos em aproximadamente dez mil vezes ($100^2 = 10000$), demonstrando o efeito da distância.",
      "A pinça cirúrgica deve ser mantida o mais curta possível para permitir um controlo manual estável e impedir que a fonte caia acidentalmente ao chão durante a sua transferência rápida para o interior do cofre plúmbeo de proteção.",
      "A redução proporcionada pelo comprimento da pinça é negligenciável na prática clínica, visto que os fotões gama emitidos mantêm rigorosamente a mesma intensidade de absorção tecidual ao longo do primeiro metro de ar atmosférico."
    ],
    "correctIndex": 1,
    "explanation": "A análise biofísica exata demonstra que Utiliza imediatamente uma pinça cirúrgica longa (de pelo menos 30 cm para garantir distância física) e deposita a fonte no contentor de transporte de chumbo de emergência ('cofre de chumbo') mantido no quarto. O domínio destes conhecimentos permite ao enfermeiro fundamentar a escolha de blindagens e protocolos de segurança.",
    "distractorAnalysis": [
      "Está incorreta: o benefício da pinça reside na lei do inverso do quadrado da distância: ao aumentar a distância de 3 mm para 30 cm (fator 100), a taxa de dose cai por $100^2 = 10.000$ vezes.",
      "Está incorreta: pinças curtas mantêm as mãos demasiado próximas da fonte, expondo a pele a taxas de dose elevadíssimas; a pinça longa é um elemento basilar de segurança.",
      "Está incorreta: a taxa de dose no ar decresce fortemente com o quadrado da distância ($1/r^2$), constituindo a distância a medida protetora mais rápida e eficaz."
    ],
    "nursingApplication": "Notifica de imediato o Físico Médico de serviço e o Médico Radioterapeuta responsável, isolando o quarto."
  },
  {
    "id": 7198,
    "topicId": 7,
    "question": "Na física das radiações nucleares (partículas alfa, beta e fotões gama) aplicada à prática clínica, em relação a 'critérios de alta hospitalar e educação para a saúde no domicílio', qual é a fundamentação científica correta?",
    "options": [
      "A autorização de alta hospitalar depende exclusivamente do desaparecimento completo de qualquer vestígio de radioatividade residual no organismo do doente, o que decorre espontaneamente ao fim de doze horas pós-administração da dose terapêutica.",
      "O doente pode ter alta imediata sem qualquer medição radiométrica de controlo, desde que declare sob compromisso de honra que irá tomar banho duas vezes ao dia com sabão neutro durante a primeira semana de regresso ao domicílio familiar.",
      "A alta hospitalar de doentes tratados com iodo-131 requer que a taxa de dose externa medida a 1 metro de distância esteja abaixo dos limites legais regulamentares (habitualmente < 20 $\\mu$Sv/h), complementada por instruções escritas de distanciamento e higiene pessoal para cumprimento rigoroso no domicílio.",
      "Os limites de dose regulamentares pós-alta são aplicáveis unicamente a animais domésticos de companhia, não existindo qualquer recomendação de restrição de proximidade física para crianças pequenas ou mulheres grávidas que coabitem na residência."
    ],
    "correctIndex": 2,
    "explanation": "Em física nuclear e radioproteção clínica, critérios de alta hospitalar e educação para a saúde no domicílio explica-se pelo facto de que a alta do doente tratado com iodo radioativo só é autorizada quando a taxa de dose externa a 1 metro de distância for inferior ao limite legal de segurança (habitualmente < 20 $\\mu$Sv/h). O enfermeiro fornece orientações por escrito para os primeiros 7 a 14 dias em casa: dormir em camas separadas, manter distância de segurança de 2 metros de familiares, lavar a roupa de cama em separado e proibir contacto próximo com crianças e grávidas.",
    "distractorAnalysis": [
      "Está incorreta: com a semivida física de 8 dias do iodo-131, o doente ainda contém atividade mensurável na alta; a alta é autorizada quando a taxa de dose residual for segura e compatível com as regras domiciliárias.",
      "Está incorreta: a monitorização radiométrica com equipamento calibrado pelo Físico Médico ou Técnico/Enfermeiro credenciado é obrigatória antes da concessão da alta clínica.",
      "Está incorreta: grávidas e crianças são populações com radiosensibilidade aumentada; as orientações de distanciamento físico rigoroso visam especificamente a sua proteção."
    ],
    "nursingApplication": "Esta educação estruturada de enfermagem protege as famílias e desmistifica preconceitos através do esclarecimento seguro dos princípios de decaimento físico."
  },
  {
    "id": 7199,
    "topicId": 7,
    "question": "Na prestação de cuidados de enfermagem e proteção radiológica em serviços com doentes radioativos, como se aplica na prática o conceito de 'critérios de alta hospitalar e educação para a saúde no domicílio'?",
    "options": [
      "O enfermeiro recomenda que o doente durma na mesma cama com crianças pequenas para acelerar a dissipação da radioatividade residual através da proximidade corporal contínua com tecidos biológicos com elevado teor hídrico.",
      "As orientações de alta elaboradas pela equipa de enfermagem proíbem o doente de ingerir água nas primeiras duas semanas em casa para impedir a produção de urina que possa transportar pequenas frações ativas de iodo radioativo.",
      "O enfermeiro instrui os familiares a incinerarem toda a roupa de cama e os talheres utilizados pelo doente após o regresso a casa, de modo a evitar a acumulação prolongada de resíduos atenuadores no ambiente familiar do paciente.",
      "O enfermeiro fornece folheto estruturado e esclarece verbalmente o plano de contingência: dormir em cama separada, manter distância de 1 a 2 metros de coabitantes, lavar a roupa pessoal em separado e evitar contacto próximo com crianças e grávidas durante o período recomendado."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para critérios de alta hospitalar e educação para a saúde no domicílio baseia-se no princípio: Esta educação estruturada de enfermagem protege as famílias e desmistifica preconceitos através do esclarecimento seguro dos princípios de decaimento físico. Esta atuação rigorosa garante a segurança do profissional, do utente e da comunidade.",
    "distractorAnalysis": [
      "Está incorreta: crianças pequenas possuem elevada radiosensibilidade tiroideia; a proximidade estreita é expressamente proibida para evitar irradiação externa desnecessária.",
      "Está incorreta: a ingestão de água deve continuar abundante no domicílio para favorecer a diurese e a depuração renal contínua do iodo não captado.",
      "Está incorreta: queimar artigos domésticos é perigoso e desnecessário; a lavagem habitual em separado na máquina elimina resíduos solúveis e o decaimento radioativo natural reduz a atividade a níveis basais."
    ],
    "nursingApplication": "Esta educação estruturada de enfermagem protege as famílias e desmistifica preconceitos através do esclarecimento seguro dos princípios de decaimento físico."
  },
  {
    "id": 7200,
    "topicId": 7,
    "question": "Um enfermeiro analisa o poder de penetração, mecanismos de atenuação e riscos biológicos em 'critérios de alta hospitalar e educação para a saúde no domicílio'. Qual das seguintes afirmações expressa a correlação biofísica correta?",
    "options": [
      "A duração das medidas de precaução domiciliária pós-alta baseia-se na semivida efetiva do radionuclídeo ($T_{ef}$), a qual integra harmonicamente a semivida física de decaimento nuclear e a semivida biológica de depuração metabólica: $\\frac{1}{T_{ef}} = \\frac{1}{T_f} + \\frac{1}{T_b}$.",
      "A duração das medidas domiciliárias decorre unicamente da semivida física do radioisótopo administrado, sendo fisiologicamente impossível que as vias de excreção renal ou digestiva acelerem a redução da carga corporal radioativa retida.",
      "A semivida biológica anula instantaneamente o decaimento físico do iodo-131 assim que o doente sai do hospital, passando a retenção global a depender apenas da taxa metabólica basal individual do paciente no seu domicílio.",
      "O cálculo da semivida efetiva do radiofármaco decorre da soma aritmética direta do tempo de decaimento físico e do tempo de excreção renal: $T_{ef} = T_f + T_b$, determinando o tempo total de isolamento profilático domiciliário."
    ],
    "correctIndex": 0,
    "explanation": "A análise biofísica exata demonstra que O enfermeiro fornece orientações por escrito para os primeiros 7 a 14 dias em casa: dormir em camas separadas, manter distância de segurança de 2 metros de familiares, lavar a roupa de cama em separado e proibir contacto próximo com crianças e grávidas. O domínio destes conhecimentos permite ao enfermeiro fundamentar a escolha de blindagens e protocolos de segurança.",
    "distractorAnalysis": [
      "Está incorreta: a semivida efetiva ($T_{ef}$) é sempre menor que a física ($T_f$) porque o organismo excreta ativamente o radiofármaco por vias biológicas ($T_b$).",
      "Está incorreta: as duas grandezas atuam em simultâneo; a saída do ambiente hospitalar não altera os mecanismos de decaimento nuclear nem a fisiologia de excreção corporal.",
      "Está incorreta: as taxas de decaimento somam-se harmonicamente ($\\lambda_{ef} = \\lambda_f + \\lambda_b$), o que corresponde a $1/T_{ef} = 1/T_f + 1/T_b$, e não à soma aritmética simples."
    ],
    "nursingApplication": "Esta educação estruturada de enfermagem protege as famílias e desmistifica preconceitos através do esclarecimento seguro dos princípios de decaimento físico."
  }
];
