/**
 * Tópico 8: Isótopos, Isóbaros, Isótonos e Aplicações Terapêuticas
 * 200 Questões Clínicas Rigorosas para o 1.º Ano de Enfermagem (IDs 8001 a 8200)
 */

const TOPIC_8_QUESTIONS = [
  {
    "id": 8001,
    "topicId": 8,
    "question": "Dois nuclídeos são classificados como 'Isótopos' quando possuem:",
    "options": [
      "O mesmo Número de Massa A (mesma quantidade combinada de nucleões nucleares), mas diferentes Números Atómicos Z por pertencerem a famílias de elementos químicos distintos da tabela periódica.",
      "O mesmo Número Atómico Z (mesmo número de protões, pertencendo rigorosamente ao mesmo elemento químico), mas diferentes Números de Massa A (diferente número de neutrões N no núcleo atómico).",
      "O mesmo Número de Neutrões N no interior da estrutura nuclear, partilhando propriedades de reatividade química idênticas apesar de possuírem cargas elétricas nucleares desiguais no átomo.",
      "O mesmo estado de excitação quântica metaestável com tempos de decaimento idênticos, independentemente do número de protões e de neutrões presentes na sua estrutura atómica fundamental."
    ],
    "correctIndex": 1,
    "explanation": "Isótopos (do grego isos = igual, topos = lugar na tabela periódica) são átomos que possuem o mesmo número atómico Z (mesmo número de protões e mesma configuração eletrónica externa), mas diferem no número de neutrões N (logo, têm massas atómicas A diferentes). Como a reatividade química depende exclusivamente da eletrosfera eletrónica governada por Z, todos os isótopos do mesmo elemento exibem propriedades bioquímicas e metabólicas rigorosamente IDÊNTICAS no organismo humano. Exemplos: ¹²⁷₅₃I (iodo estável) e ¹³¹₅₃I (iodo radioativo); ¹²₆C e ¹⁴₆C.",
    "distractorAnalysis": [
      "Está incorreta: nuclídeos com o mesmo número de massa A e diferentes números atómicos Z são designados isóbaros e não isótopos.",
      "Está incorreta: átomos com o mesmo número de neutrões N e diferentes números de protões Z são classificados como isótonos.",
      "Está incorreta: núcleos com o mesmo número de protões e neutrões em diferentes estados energéticos de excitação são chamados isómeros nucleares."
    ],
    "nursingApplication": "A identidade bioquímica perfeita dos isótopos é a pedra filosofal da medicina nuclear: as células foliculares da glândula tiroide do doente não conseguem distinguir o iodo radioativo (¹³¹I) do iodo estável da alimentação (¹²⁷I), absorvendo e concentrando avidamente o radioisótopo através do simporte de sódio-iodeto (NIS), permitindo a destruição seletiva do tumor."
  },
  {
    "id": 8002,
    "topicId": 8,
    "question": "Dois átomos são denominados 'Isóbaros' quando partilham qual característica em comum?",
    "options": [
      "O mesmo Número Atómico Z e a mesma configuração de eletrões na camada de valência, partilhando rigorosamente a mesma massa atómica absoluta e o mesmo número de neutrões no núcleo atómico.",
      "O mesmo Número de Neutrões N no núcleo, apresentando comportamento farmacocinético sobreponível quando administrados sob a forma de radiofármacos metabólicos no organismo humano em meio clínico.",
      "O mesmo Número de Massa A (mesma soma total de protões e neutrões, A = Z + N), mas diferentes Números Atómicos Z (sendo elementos químicos distintos com propriedades químicas e biológicas diferentes).",
      "A mesma densidade eletrónica de superfície e o mesmo tempo de semivida física de decaimento nuclear, ainda que pertençam a períodos distintos da tabela periódica dos elementos químicos conhecidos."
    ],
    "correctIndex": 2,
    "explanation": "Isóbaros (do grego barys = pesado) são nuclídeos que partilham a mesma massa atómica A, mas têm números atómicos Z diferentes e números de neutrões N diferentes. Por possuírem Z diferente, são elementos químicos totalmente distintos na Tabela Periódica, com propriedades químicas, afinidades farmacológicas e destinos biológicos no corpo humano completamente diferentes. Exemplo: Potássio-40 (⁴⁰₁₉K, metal alcalino) e Cálcio-40 (⁴⁰₂₀Ca, metal alcalino-terroso); Iodo-131 (¹³¹₅₃I, halogéneo) e Xénon-131 (¹³¹₅₄Xe, gás nobre).",
    "distractorAnalysis": [
      "Está incorreta: nuclídeos com o mesmo número atómico Z e número de massa A idêntico são o mesmo isótopo do mesmo elemento químico.",
      "Está incorreta: núcleos que partilham o mesmo número de neutrões N mas possuem números atómicos Z diferentes são isótonos e não isóbaros.",
      "Está incorreta: isóbaros diferem na composição química nuclear e não possuem tempos de semivida idênticos nem propriedades farmacológicas sobreponíveis."
    ],
    "nursingApplication": "No decaimento beta do Iodo-131 (¹³¹₅₃I -> ¹³¹₅₄Xe + β⁻ + ν̄), o elemento radioativo ligado aos tecidos corporais transforma-se no seu isóbaro Xénon-131: sendo o xénon um gás nobre quimicamente inerte, desliga-se de imediato da tiroide e difunde-se pela corrente sanguínea, sendo eliminado de forma inócua pela expiração pulmonar do doente."
  },
  {
    "id": 8003,
    "topicId": 8,
    "question": "Dois nuclídeos são classificados como 'Isótonos' quando apresentam:",
    "options": [
      "O mesmo Número Atómico Z com número de neutrões variável, manifestando afinidade idêntica para fixação seletiva nos mesmos transportadores moleculares membranares específicos.",
      "O mesmo Número de Massa A e a mesma energia de ligação nuclear por nucleão, exibindo o mesmo espetro de emissão gama monoenergética durante a transição isomérica espontânea.",
      "A mesma razão entre a massa atómica e o número de eletrões orbitais, resultando na emissão obrigatória de partículas beta positivas com idêntico percurso biológico tecidual.",
      "O mesmo Número de Neutrões N ($N = A - Z$), mas diferentes Números Atómicos Z e diferentes Números de Massa A, correspondendo a elementos químicos inteiramente distintos."
    ],
    "correctIndex": 3,
    "explanation": "Isótonos (o 'n' na palavra mnemónica lembra Neutrões) são nuclídeos que contêm exatamente o mesmo número de neutrões N no seu núcleo (N = A - Z), mas diferem no número de protões Z e no número de massa A. Por terem Z diferente, são elementos químicos distintos. Exemplos: Silício-30 (³⁰₁₄Si, onde N = 30 - 14 = 16) e Fósforo-31 (³¹₁₅P, onde N = 31 - 15 = 16); Carbono-13 (¹³₆C, N = 7) e Azoto-14 (¹⁴₇N, N = 7).",
    "distractorAnalysis": [
      "Está incorreta: nuclídeos com o mesmo número atómico Z e diferente número de massa são isótopos e não isótonos.",
      "Está incorreta: núcleos que partilham o mesmo número de massa A com diferentes números atómicos Z denominam-se isóbaros.",
      "Está incorreta: a definição de isótonos assenta estritamente na igualdade do número de neutrões ($N = A - Z$) e não em razões mássicas eletrónicas."
    ],
    "nursingApplication": "O estudo das séries de isótonos e isóbaros é utilizado pela física médica e radioquímica na síntese de novos radioisótopos em reatores e cíclotrons, permitindo prever a estabilidade nuclear e os canais de desintegração de fármacos experimentais."
  },
  {
    "id": 8004,
    "topicId": 8,
    "question": "Na farmacocinética e radioproteção de radiofármacos hospitalares, qual é a definição e relação matemática exata entre a Meia-Vida Física (T_p), a Meia-Vida Biológica (T_b) e a 'Meia-Vida Efetiva' (T_e)?",
    "options": [
      "$\\frac{1}{T_e} = \\frac{1}{T_p} + \\frac{1}{T_b} \\implies T_e = \\frac{T_p \\cdot T_b}{T_p + T_b}$, representando a taxa real combinada com que a radioatividade diminui no organismo pela junção do decaimento físico e da excreção biológica.",
      "$T_e = T_p + T_b$, indicando que a permanência da radiação no doente resulta da soma aritmética linear direta entre a meia-vida física do radionuclídeo e a sua meia-vida de excreção renal tecidual.",
      "$T_e = \\frac{T_p \\cdot T_b}{T_p - T_b}$, expressando que a eliminação biológica acelera o decaimento físico apenas quando a depuração renal for substancialmente superior à meia-vida nuclear intrínseca.",
      "$T_e = \\sqrt{T_p^2 + T_b^2}$, calculando a permanência global através da raiz quadrada da soma dos quadrados dos tempos de semivida física e fisiológica do traçador administrado na circulação."
    ],
    "correctIndex": 0,
    "explanation": "A eliminação da radiação do corpo de um doente decorre de dois processos independentes que ocorrem em paralelo: 1) O decaimento radioativo físico espontâneo dos núcleos (constante λ_p = ln(2)/T_p); 2) A depuração metabólica fisiológica do fármaco pelo fígado e rins (constante λ_b = ln(2)/T_b). A taxa de desaparecimento efetiva total é a soma das constantes: λ_e = λ_p + λ_b. Como λ = ln(2)/T, tem-se 1/T_e = 1/T_p + 1/T_b, o que resulta em T_e = (T_p · T_b) / (T_p + T_b). Consequentemente, T_e é SEMPRE menor do que o menor dos valores de T_p ou T_b.",
    "distractorAnalysis": [
      "Está incorreta: as taxas de eliminação (constantes de decaimento $\\lambda$) somam-se ($\\lambda_e = \\lambda_p + \\lambda_b$), o que conduz à relação harmónica inversa e nunca à soma direta dos tempos.",
      "Está incorreta: o denominador da equação analítica correta é a soma ($T_p + T_b$) e não a diferença, já que ambos os processos atuam no sentido de reduzir a atividade retida.",
      "Está incorreta: a combinação de processos cinéticos de primeira ordem resulta numa soma de constantes inversas e não numa composição quadrática vetorial."
    ],
    "nursingApplication": "A meia-vida efetiva governa a segurança clínica: se um radiofármaco tem T_p de 6 horas (⁹⁹ᵐTc) e o doente o excreta na urina com T_b de 3 horas, a meia-vida efetiva no corpo é T_e = (6 × 3) / (6 + 3) = 18 / 9 = 2 horas! O enfermeiro incentiva a hidratação abundante porque quanto mais rápido o doente urinar (menor T_b), menor será a meia-vida efetiva T_e e menor a dose de radiação absorvida pelo organismo."
  },
  {
    "id": 8005,
    "topicId": 8,
    "question": "Um doente recebe um radiofármaco que possui uma Meia-Vida Física T_p = 8 dias e uma Meia-Vida Biológica de eliminação corporal T_b = 8 dias. Qual é a Meia-Vida Efetiva (T_e) desse radiofármaco no organismo do doente?",
    "options": [
      "16 dias, dado que a permanência radioativa no organismo resulta da acumulação aritmética aditiva direta da meia-vida física e da meia-vida biológica de depuração ($8 + 8 = 16\\text{ dias}$) no doente.",
      "4 dias, pois a meia-vida efetiva resulta da média harmónica ponderada das duas componentes simultâneas: $T_e = \\frac{T_p \\cdot T_b}{T_p + T_b} = \\frac{8 \\times 8}{8 + 8} = \\frac{64}{16} = 4\\text{ dias}$ de retenção radioativa real.",
      "8 dias, uma vez que a eliminação biológica não possui capacidade de interferir com o ritmo imutável do decaimento físico nuclear pré-determinado pela constante do isótopo administrado.",
      "64 dias, pois a taxa de sobrevivência radioativa no meio intravesical calcula-se através do produto multiplicativo simples dos dois tempos de semivida envolvidos ($8 \\times 8 = 64\\text{ dias}$) na cinética."
    ],
    "correctIndex": 1,
    "explanation": "Aplicando a equação biofísica da meia-vida efetiva: T_e = (T_p · T_b) / (T_p + T_b). Substituindo os valores dados: T_e = (8 × 8) / (8 + 8) = 64 / 16 = 4 dias. Quando a meia-vida física é rigorosamente igual à meia-vida biológica (T_p = T_b), a meia-vida efetiva total no corpo humano é exatamente igual a METADE desse valor (T_e = T / 2).",
    "distractorAnalysis": [
      "Está incorreta: a meia-vida efetiva nunca é a soma direta das meias-vidas ($T_p + T_b$); é sempre inferior à menor das duas meias-vidas isoladas.",
      "Está incorreta: a depuração biológica remove ativamente os átomos radioativos do corpo através da urina/fezes, reduzindo a atividade retida muito mais depressa do que o decaimento físico isolado.",
      "Está incorreta: multiplicar os tempos de semivida não tem fundamentação biofísica e geraria um tempo absurdo de permanência no organismo."
    ],
    "nursingApplication": "Este cálculo simples permite ao enfermeiro estimar o tempo necessário para desclassificar o quarto de isolamento de radioiodoterapia: ao fim de 4 dias (1 meia-vida efetiva), a atividade de Iodo-131 no corpo do doente desceu para 50%; ao fim de 8 dias (2 meias-vidas efetivas), resta apenas 25% da dose originalmente administrada."
  },
  {
    "id": 8006,
    "topicId": 8,
    "question": "Antes da realização de um exame de Tomografia por Emissão de Positrões com ¹⁸F-FDG (Fluorodesoxiglicose), qual é a preparação clínica e verificação prioritária que o enfermeiro deve realizar junto do doente para evitar o insucesso diagnóstico do exame?",
    "options": [
      "Administrar uma refeição rica em hidratos de carbono simples imediatamente antes da injeção para induzir um pico fisiológico de insulina que acelere a captação tumoral do traçador metabólico na corrente sanguínea.",
      "Incentivar a realização de exercício físico vigoroso na bicicleta ergométrica antes da injeção para ativar a circulação periférica e facilitar a distribuição tecidual da fluorodesoxiglicose no organismo do doente.",
      "Garantir jejum calórico prévio de 4 a 6 horas (apenas hidratação oral com água pura), assegurar repouso físico e emocional absoluto e verificar que a glicemia capilar se encontra rigorosamente abaixo de 150 a 180 mg/dL.",
      "Promover a mastigação ativa de pastilha elástica com açúcar durante a fase de captação para relaxar a musculatura mastigatória e evitar artefatos de movimento na região craniofacial durante o exame de imagem."
    ],
    "correctIndex": 2,
    "explanation": "A ¹⁸F-FDG é uma molécula de glicose marcada com Flúor-18 que entra nas células através dos transportadores GLUT e é fosforilada pela hexoquinase (ficando metabolicamente retida nas células com alto consumo glicídico). Se o doente estiver hiperglicémico (glicose > 180 mg/dL), a glicose endógena fria do sangue compete com a ¹⁸F-FDG e satura os transportadores GLUT, impedindo a captação do radiofármaco pelo tumor e gerando imagens falsamente negativas. Se o doente falar ou fizer exercício, a FDG é avidamente captada pelas cordas vocais e músculos esqueléticos ativos, gerando falsos positivos.",
    "distractorAnalysis": [
      "Está incorreta: hiperglicemia e picos de insulina competem com o 18F-FDG pelos transportadores GLUT e desviam o radiofármaco para os músculos esqueléticos, arruinando a qualidade do exame.",
      "Está incorreta: o exercício físico ativa avidamente a captação de glicose nos grupos musculares solicitados, mascarando lesões neoplásicas e gerando falsos positivos.",
      "Está incorreta: mastigar pastilha promove uma captação muscular intensa e simétrica de FDG nos músculos masséteres e pterigoideus, prejudicando a interpretação diagnóstica."
    ],
    "nursingApplication": "O protocolo de acolhimento em enfermagem no PET é minuciosamente padronizado: medição da glicemia à chegada, canulação venosa atraumática, injeção da ¹⁸F-FDG e acomodação do doente num cadeirão confortável em sala individual aquecida e em penumbra durante 60 minutos de repouso absoluto em silêncio antes da aquisição de imagens."
  },
  {
    "id": 8007,
    "topicId": 8,
    "question": "Na profilaxia médica de populações civis perante o risco iminente de acidente em reator nuclear com libertação de plumas de fissão atmosféricas contendo Iodo-131 radioativo, qual é a intervenção de saúde pública administrada?",
    "options": [
      "Prescrição profilática de elevadas doses de levotiroxina sintética para estimular a síntese hormonal folicular e aumentar a capacidade de excreção rápida de iodo radioativo pelas glândulas endócrinas ativadas.",
      "Aplicação cutânea direta de soluções alcoólicas de iodo em toda a extensão do tórax para neutralizar os fotões gama por absorção superficial antes que atinjam o parênquima tiroideu profundo no organismo.",
      "Administração oral obrigatória de cloreto de sódio concentrado para alcalinizar o sangue periférico e precipitar o iodo radioativo na corrente circulatória sob forma insolúvel de eliminação fecal direta.",
      "Distribuição e administração célere de comprimidos de iodeto de potássio estável (KI), que satura a capacidade dos transportadores moleculares NIS da tiroide e impede a captação do iodo-131 inalado ou ingerido."
    ],
    "correctIndex": 3,
    "explanation": "A glândula tiroide humana tem uma capacidade limitada de captação e armazenamento de iodo (cerca de 10 a 15 mg no total). Perante a fuga nuclear de iodo radioativo volátil (¹³¹I e ¹³³I): a toma de uma dose elevada de Iodeto de Potássio estável (130 mg de KI para adultos) satura 100% dos simportadores de iodo (mecanismo de bloqueio de Wolff-Chaikoff). Quando a nuvem radioativa passa, o Iodo-131 inalado não encontra recetores livres na tiroide, sendo rapidamente excretado pelos rins na urina, reduzindo a dose tiroideia em mais de 95% e prevenindo o cancro da tiroide infantil.",
    "distractorAnalysis": [
      "Está incorreta: a levotiroxina não bloqueia a absorção imediata do iodo radioativo pelos simportadores NIS tão eficazmente como o iodeto estável em saturação maciça.",
      "Está incorreta: a aplicação tópica cutânea de tintura de iodo acarreta risco de queimaduras químicas e intoxicação e não fornece a biodisponibilidade plasmática necessária para bloqueio folicular.",
      "Está incorreta: o cloreto de sódio não precipita o iodo plasmático nem protege a tiroide contra a radiação ionizante de produtos de fissão nuclear."
    ],
    "nursingApplication": "O enfermeiro em planos de catástrofe e saúde pública conhece a janela de ouro do Iodeto de Potássio: o KI deve ser tomado idealmente algumas horas antes ou até 2 a 4 horas após a exposição à nuvem radioativa. Administrar o KI mais de 24 horas depois da inalação é ineficaz e pode ser prejudicial, pois o iodo radioativo já se fixou no parênquima tiroideu."
  },
  {
    "id": 8008,
    "topicId": 8,
    "question": "O radioisótopo Tecnécio-99m (⁹⁹ᵐTc) é considerado mundialmente o radioisótopo de eleição (padrão de ouro) para diagnósticos de cintigrafia em Medicina Nuclear. Quais são as suas QUATRO propriedades biofísicas ideais que justificam essa hegemonia?",
    "options": [
      "Emissão gama monoenergética de 140 keV quase pura, semivida física ideal de 6 horas, versatilidade para marcação de múltiplas moléculas biológicas e disponibilidade fácil em geradores hospitalares de molibdénio-99.",
      "Emissão simultânea de partículas alfa pesadas de alto LET para radioterapia celular localizada, associada a uma semivida ultracurta de 2 minutos que dispensa qualquer proteção radiológica do profissional de saúde.",
      "Emissão beta pura de alta energia cinética com percurso tecidual de 10 milímetros, conjugada com uma semivida longa de 30 dias que permite armazenar as doses preparadas durante meses nas enfermarias hospitalares.",
      "Decaimento por captura eletrónica exclusiva sem libertação de fotões, associado a uma afinidade química espontânea limitada unicamente à matriz inorgânica do tecido ósseo cortical mineralizado do esqueleto."
    ],
    "correctIndex": 0,
    "explanation": "O Tecnécio-99m reúne características radiofísicas incomparáveis: 1) Desexcita-se por transição isomérica emitindo fotões gama de 140 keV (99% de penetrância com pouca dispersão e facilmente colimável por furos finos de chumbo); 2) Ausência de partículas beta, reduzindo drasticamente a dose absorvida pelo doente; 3) A semivida de 6 horas é suficientemente longa para procedimentos clínicos e curta para desaparecer do organismo em 24h (4 meias-vidas); 4) O gerador Mo-99/Tc-99m dura uma semana no serviço hospitalar, disponibilizando tecnécio fresco diariamente por eluição.",
    "distractorAnalysis": [
      "Está incorreta: o 99mTc não emite partículas alfa; é um emissor gama quase puro (99% de transição isomérica), ideal para diagnóstico e com mínima dose absorvida.",
      "Está incorreta: a emissão beta pura não permite deteção externa em câmaras gama e a sua semivida é de ~6 horas e não de 30 dias.",
      "Está incorreta: o 99mTc emite fotões gama de 140 keV perfeitamente detetáveis pelos colimadores de cintigrafia e liga-se a dezenas de veículos moleculares através de kits frios."
    ],
    "nursingApplication": "O enfermeiro administra dezenas de radiofármacos baseados em ⁹⁹ᵐTc: ⁹⁹ᵐTc-DMSA (para avaliação de cicatrizes renais de pielonefrite em pediatria), ⁹⁹ᵐTc-HIDA (para vias biliares e colecistite aguda) e ⁹⁹ᵐTc-Nanocoloide (para mapeamento linfático de gânglio sentinela), reconhecendo a segurança proporcionada pela ausência de radiação beta."
  },
  {
    "id": 8009,
    "topicId": 8,
    "question": "Na 'Braquiterapia de Alta Taxa de Dose' (HDR - High Dose Rate) utilizada no cancro do colo do útero e endométrio, o radioisótopo Irídio-192 (¹⁹²Ir, T₁/₂ ≈ 73,8 dias) é introduzido no aplicador ginecológico através de um sistema robotizado de pós-carregamento remoto (afterloading). Qual é o cuidado de enfermagem crítico antes de autorizar a saída da doente da sala de tratamento blindada?",
    "options": [
      "Verificar visualmente se a pele da doente apresenta fluorescência esverdeada sob iluminação ambiente, o que indicaria que a fonte radioativa selada ainda permanece em contacto com o aplicador de tratamento.",
      "Monitorizar a doente e a sala com um detetor de radiação portátil para confirmar formalmente que a fonte selada de irídio-192 recolheu integralmente para o interior do cofre blindado do projetor robótico.",
      "Solicitar à doente que permaneça em repouso no leito na enfermaria comum sem remover o aplicador ginecológico enquanto a fonte selada continua a decair lentamente nos tecidos tumorais profundos da pelve.",
      "Proceder à lavagem imediata do aplicador na pia da enfermaria com soro fisiológico morno enquanto a fonte selada se encontra ativada no seu interior para assegurar uma descontaminação térmica superficial."
    ],
    "correctIndex": 1,
    "explanation": "Na braquiterapia HDR ginecológica, uma minúscula semente sólida selada de Irídio-192 com altíssima atividade (~370 GBq / 10 Ci) é impulsionada por um cabo flexível acionado por motor até ao interior dos aplicadores uterinos (sondas tandem/anel), permanecendo poucos minutos para entregar a dose prescrita e recolhendo depois automaticamente para o cofre de chumbo do projetor. Se o cabo encravar e a fonte não recolher (emergência radiológica), a doente sofrerá necrose pélvica massiva em horas e contaminará o hospital. A verificação física da recolha da fonte com monitor de radiação é mandante antes de tocar na doente.",
    "distractorAnalysis": [
      "Está incorreta: a radiação gama não gera fluorescência visível a olho nu na pele; a verificação física deve ser feita com detetor radiométrico calibrado.",
      "Está incorreta: na braquiterapia HDR o irídio-192 permanece apenas durante os minutos da fração prescrita e recolhe ao projetor; a doente nunca vai para a enfermaria com a fonte ativa.",
      "Está incorreta: qualquer manipulação do aplicador só ocorre após a recolha confirmada da fonte para o cofre; lavar o aplicador com a fonte retida seria um acidente radiológico gravíssimo."
    ],
    "nursingApplication": "O enfermeiro de braquiterapia está treinado em protocolos de emergência de recolha de fonte: se o monitor de radiação acusar que o Irídio-192 não recolheu para o cofre, o enfermeiro utiliza pinças longas de emergência para remover manualmente o aplicador e deposita a fonte no contentor de blindagem de emergência existente na sala, prestando assistência imediata à doente."
  },
  {
    "id": 8010,
    "topicId": 8,
    "question": "O radioisótopo Rádio-223 (²²³Ra, comercializado como Xofigo, sob a forma de dicloreto de rádio) foi o primeiro 'Emissor de Partículas Alfa' aprovado internacionalmente para o tratamento de metástases ósseas dolorosas no cancro da próstata resistente à castração. Qual é o fundamento biofísico e fisiológico da sua eficácia?",
    "options": [
      "Emite fotões gama de ultra-alta energia que atravessam o esqueleto e lesionam seletivamente as células tumorais por ativação fototérmica, poupando a proliferação dos osteoclastos vizinhos nos tecidos ósseos sadios.",
      "Bloqueia irreversivelmente os recetores hormonais de androgénios na membrana dos osteoblastos através de um mecanismo de inibição alostérica não radioativa puramente farmacológica no microambiente metastático.",
      "Atua como análogo do cálcio fixando-se avidamente na hidroxiapatite das metástases ósseas osteoblásticas, onde emite partículas alfa de elevado LET e curto alcance (<100 $\\mu$m) que causam quebras duplas de DNA tumorais sem lesionar a medula adjacente.",
      "Promove a dissolução ácida maciça do tecido ósseo cortical mineralizado para libertar as células neoplásicas na circulação venosa sistémica, onde são eliminadas por fagocitose esplénica fisiológica nos órgãos."
    ],
    "correctIndex": 2,
    "explanation": "Como membro da família dos metais alcalino-terrosos (junto com Ca, Mg e Sr), o catião Ra²⁺ mimetiza perfeitamente o cálcio, sendo incorporado seletivamente nos locais de turnover ósseo acelerado induzido pelas metástases da próstata. A sua cadeia de decaimento emite 4 partículas alfa altamente energéticas (energia total > 28 MeV): devido ao curtíssimo alcance tecidual das partículas alfa (menos de 100 micrómetros, equivalente a 2 a 10 diâmetros celulares), as células tumorais e os osteoblastos/osteoclastos vizinhos são destruídos por quebras duplas de DNA, enquanto a medula óssea hematopoética situada a mais de 100 μm de distância é amplamente poupada, resultando em sobrevida prolongada com excelente perfil de segurança.",
    "distractorAnalysis": [
      "Está incorreta: o rádio-223 é um emissor alfa terapêutico dirigido e não um emissor gama fototérmico; o efeito citotóxico decorre de quebras letais de cadeia dupla no DNA tumoral.",
      "Está incorreta: o rádio-223 (Xofigo) é um radiofármaco cuja ação citotóxica é estritamente radiobiológica por irradiação alfa de curto alcance e não um inibidor hormonal alostérico.",
      "Está incorreta: o fármaco incorpora-se nas zonas de neoformação óssea osteoblástica sem dissolver a matriz cortical nem induzir dispersão vascular de células tumorais."
    ],
    "nursingApplication": "O enfermeiro administra o ²²³Ra por injeção endovenosa lenta ao longo de 1 minuto através de linha com soro fisiológico. Como o rádio é excretado primariamente pelo trato gastrointestinal nas fezes (eliminação fecal), o enfermeiro educa o doente e os cuidadores sobre o manuseamento seguro de fezes durante os 7 dias seguintes (usar luvas descartáveis ao limpar a sanita, fechar a tampa e dar dupla descarga)."
  },
  {
    "id": 8011,
    "topicId": 8,
    "question": "O Criptónio-81m (⁸¹ᵐKr, T₁/₂ ≈ 13 segundos) e o Xénon-133 (¹³³Xe, T₁/₂ ≈ 5,2 dias) são gases radioativos utilizados em Medicina Nuclear para qual exame funcional pulmonar?",
    "options": [
      "Avaliação do grau de calcificação patológica das artérias coronárias epicárdicas através da retenção do gás radioativo no lúmen do ventrículo esquerdo durante o ciclo cardíaco de contração e relaxamento miocárdico.",
      "Quantificação da taxa de absorção de oxigénio a nível das microvilosidades do epitélio duodenal e jejunal em doentes com suspeita de síndrome de má absorção alimentar grave e perda ponderal acentuada crónica.",
      "Deteção precoce de fístulas liquóricas no canal raquidiano e meninges cranianas através da inalação forçada de gases nobres hidrossolúveis em câmara hiperbárica fechada com pressão positiva de oxigénio medicinal.",
      "Cintigrafia de ventilação pulmonar (acoplada à cintigrafia de perfusão com 99mTc-MAA) para diagnosticar tromboembolismo pulmonar agudo através da identificação de desajuste entre ventilação e perfusão (mismatch V/Q)."
    ],
    "correctIndex": 3,
    "explanation": "No diagnóstico do TEP: o doente inala o gás radioativo (⁸¹ᵐKr ou ¹³³Xe) através de um bocal com máscara valvulada fechada, permitindo à câmara gama desenhar o mapa de VENTILAÇÃO alveolar (V). De seguida, injetam-se macroagregados de albumina marcados com tecnécio (⁹⁹ᵐTc-MAA) para mapear a PERFUSÃO capilar pulmonar (Q). A presença de zonas com ventilação normal mas com ausência de fluxo sanguíneo perfusional ('mismatch V/Q') confirma a oclusão embólica da artéria pulmonar correspondente com altíssima precisão.",
    "distractorAnalysis": [
      "Está incorreta: a calcificação coronária avalia-se por tomografia computorizada (score de cálcio) e a perfusão miocárdica com radiotraçadores injetáveis como 99mTc-MIBI ou tetrofosmina.",
      "Está incorreta: a ventilação com Kr-81m ou Xe-133 estuda a fisiologia respiratória alveolar e não a mucosa intestinal ou a absorção digestiva de nutrientes.",
      "Está incorreta: o estudo de fístulas liquóricas realiza-se por cisternocintigrafia com injeção intratecal de 111In-DTPA ou 99mTc-DTPA e nunca por inalação pulmonar de gases nobres."
    ],
    "nursingApplication": "Na realização da cintigrafia de ventilação, o enfermeiro garante o acoplamento estanque da máscara facial ou bocal de inalação: se o doente soltar a máscara ou tossir descontroladamente, o gás radioativo escapa para o ar da sala, exigindo sistemas hospitalares de exaustão com pressão negativa e filtros de carvão ativado para capturar o gás exalado."
  },
  {
    "id": 8012,
    "topicId": 8,
    "question": "O Gálio-68 (⁶⁸Ga, T₁/₂ ≈ 68 minutos) é obtido a partir de um gerador hospitalar autónomo de Germânio-68/Gálio-68 (⁶⁸Ge/⁶⁸Ga). Qual é a enorme vantagem clínica deste sistema para centros de PET que não possuem um Cíclotron próprio nas suas instalações?",
    "options": [
      "Permite a produção local sob demanda de um radioisótopo emissor de positrões de elevada qualidade diagnóstica (68Ga-PSMA e 68Ga-DOTATOC), com um gerador com vida útil próxima de um ano sem requerer o investimento num ciclotrão.",
      "Garante a produção contínua de feixes de partículas beta de alta energia capazes de realizar ablações cirúrgicas intraoperatórias de metástases hepáticas sem emissão gama ou necessidade de colimação adicional.",
      "Elimina integralmente qualquer risco radiológico para os profissionais de enfermagem, visto que o gálio-68 não emite positrões nem fotões secundários durante a realização do exame imagiológico de corpo inteiro.",
      "Permite sintetizar no próprio serviço hospitalar comprimidos orais de fluorodesoxiglicose de longa conservação para distribuição domiciliária a doentes oncológicos em regime de ambulatório programado."
    ],
    "correctIndex": 0,
    "explanation": "Instalar e operar um cíclotron médico exige edifícios com bunkers especiais e custos astronómicos. O gerador ⁶⁸Ge/⁶⁸Ga replica para o PET o sucesso que o gerador Mo-99/Tc-99m trouxe para o SPECT: o pai ⁶⁸Ge tem semivida de cerca de 9 meses (271 dias) e decai continuamente por captura eletrónica para o filho ⁶⁸Ga (T_1/2 = 68 min, emissor β⁺ a 89%). O enfermeiro e radiofarmacêutico eluem o gerador com ácido clorídrico diluído (0,1 M HCl), obtendo Gálio-68 fresco à cabeceira para marcar peptídeos diagnósticos sem necessidade de cíclotron no hospital.",
    "distractorAnalysis": [
      "Está incorreta: o Ga-68 é um emissor de positrões ($\\beta^+$) para diagnóstico em PET e não um feixe de partículas para ablação cirúrgica intraoperatória.",
      "Está incorreta: os positrões aniquilam-se com eletrões produzindo pares de fotões gama de 511 keV de alta penetração, exigindo blindagem espessa de chumbo ou tungsténio.",
      "Está incorreta: o gerador produz Gálio-68 iónico para marcação de péptidos específicos; a FDG é marcada com Flúor-18 produzido em ciclotrão e administrada por via intravenosa."
    ],
    "nursingApplication": "O uso crescente de ⁶⁸Ga-PSMA (antigénio de membrana específico da próstata) revolucionou a oncologia urológica: permite ao enfermeiro e equipa multidisciplinar detetar recidivas bioquímicas de cancro da próstata com valores de PSA sérico extremamente baixos (<0,5 ng/mL), localizando micrometástases ganglionares precoces com sensibilidade inalcançável por TAC ou RMN convencionais."
  },
  {
    "id": 8013,
    "topicId": 8,
    "question": "Na terapia de doentes com Tumores Neuroendócrinos metastáticos com Lutécio-177 (¹⁷⁷Lu-Dotatate), a toxicidade renal constitui o principal fator limitante de dose. Qual é a intervenção de enfermagem obrigatória durante a infusão para proteger os rins do doente?",
    "options": [
      "Instaurar restrição hídrica absoluta nas vinte e quatro horas anteriores e posteriores à administração para evitar que o radiofármaco seja diluído nos túbulos coletores renais durante o processo de filtração urinária.",
      "Administrar uma perfusão intravenosa de solução de aminoácidos específicos (L-lisina e L-arginina) iniciada antes do radiofármaco e mantida durante várias horas para saturar a reabsorção tubular renal proximal do péptido.",
      "Prescrever diuréticos de ansa em bólus intravenoso rápido em simultâneo com a injeção do lutécio-177 para paralisar temporariamente a filtração glomerular do paciente e impedir o contacto com o córtex renal.",
      "Acidificar intensamente a urina através da infusão venosa contínua de cloreto de amónio para precipitar o radiofármaco nos cálices renais e acelerar a sua depuração mecânica através do fluxo excretor urinário."
    ],
    "correctIndex": 1,
    "explanation": "Os peptídeos radiomarcados (como o Dotatate) são filtrados pelos glomérulos e sofrem reabsorção ativa por endocitose mediada pelo complexo megalina/cubilina nos túbulos contornados proximais renais. Sem proteção, o ¹⁷⁷Lu ficaria retido nas células tubulares durante a sua meia-vida de 6,7 dias, depositando radiação beta que induziria insuficiência renal crónica tardia. A perfusão de aminoácidos básicos carregados positivamente (lisina/arginina) satura os sítios de ligação da megalina: o ¹⁷⁷Lu-Dotatate não é reabsorvido e passa livremente para a bexiga, sendo rapidamente eliminado na urina e poupando o parênquima renal.",
    "distractorAnalysis": [
      "Está incorreta: a infusão de aminoácidos catiónicos (lisina/arginina) satura os recetores megalina/cubilina nos túbulos proximais, reduzindo a dose renal de radiação em cerca de 40-50%.",
      "Está incorreta: a desidratação aumenta drasticamente a toxicidade tubular; os doentes devem ser profusamente hidratados para facilitar a rápida excreção do péptido não ligado.",
      "Está incorreta: manobras de acidificação forçada aumentam o risco de lesão renal aguda e litíase; o protocolo padrão assenta na proteção competitiva por aminoácidos e hiper-hidratação."
    ],
    "nursingApplication": "A solução concentrada de aminoácidos frequentemente desencadeia náuseas e vómitos reflexos nos primeiros 30 a 60 minutos devido à estimulação central. O enfermeiro administra antieméticos profiláticos específicos (como ondansetron ou aprepitant) 30 minutos antes do início dos aminoácidos, garantindo o conforto do doente e a tolerância da perfusão nefroprotetora."
  },
  {
    "id": 8014,
    "topicId": 8,
    "question": "O Iodo-123 (¹²³₅₃I, T₁/₂ ≈ 13,2 horas) é um radioisótopo amplamente utilizado em cintigrafias da tiroide e no estudo de transportadores de dopamina no cérebro (DaTscan em doença de Parkinson). Qual é a sua principal vantagem biofísica sobre o Iodo-131 para fins puramente DIAGNÓSTICOS?",
    "options": [
      "O iodo-123 emite partículas alfa de alta transferência linear de energia que destroem seletivamente os folículos tiroidianos sem emitir qualquer fotão eletromagnético penetrante detetável por câmaras gama convencionais.",
      "O iodo-123 possui uma semivida física de 30 dias que permite efetuar cintigrafias repetidas ao longo de vários meses com uma única administração endovenosa de radiofármaco no serviço de medicina nuclear.",
      "O iodo-123 decai por captura eletrónica com emissão gama pura de 159 keV sem emitir partículas beta lesivas, resultando numa dose absorvida no doente muito inferior à do iodo-131 para o mesmo estudo imagiológico.",
      "O iodo-123 decai exclusivamente por emissão de neutrões rápidos que ativam a hormona tiroidiana inerte, dispensando a captação por simportadores basolaterais NIS na membrana basal celular dos folículos da tiroide."
    ],
    "correctIndex": 2,
    "explanation": "Para exames imagiológicos onde se pretende apenas mapear o órgão sem destruir células, o Iodo-131 é muito desfavorável porque 90% da sua energia é emitida sob forma de partículas beta que irradiam e lesam a tiroide sem sair do corpo. O Iodo-123 não tem radiação beta: decai por captura eletrónica emitindo um fotão gama ideal de 159 keV (muito próximo dos 140 keV do tecnécio), compatível com colimadores padrão de baixa energia e alta resolução. A sua meia-vida de 13 horas é perfeita para estudos metabólicos de 24 horas com mínima carga dosimétrica.",
    "distractorAnalysis": [
      "Está incorreta: o I-123 não emite partículas alfa; o seu fotão gama de 159 keV é perfeitamente detetável pelos colimadores de baixa energia e a ausência de emissão beta poupa o tecido saudável.",
      "Está incorreta: a semivida física do I-123 é de apenas 13,2 horas (muito mais favorável que os 8 dias do I-131 para fins de diagnóstico).",
      "Está incorreta: o decaimento por emissão de neutrões não ocorre em radioisótopos médicos de iodo; o I-123 comporta-se quimicamente como iodeto fisiológico e entra pelo transportador NIS."
    ],
    "nursingApplication": "No exame de DaTscan para diferenciação entre Doença de Parkinson e tremor essencial, o enfermeiro administra previamente gotas de Solução de Lugol (ou perclorato de potássio) para bloquear a tiroide do doente: como o Iodo-123 está ligado à molécula que estuda o cérebro, o bloqueio tiroideu impede que o iodo livre se fixe na tiroide, protegendo a glândula contra a radiação desnecessária."
  },
  {
    "id": 8015,
    "topicId": 8,
    "question": "O radioisótopo Tálio-201 (²⁰¹Tl, T₁/₂ ≈ 73 horas) atua como um análogo biológico de qual catião intracelular fisiológico na realização de cintigrafias de perfusão e viabilidade miocárdica?",
    "options": [
      "Do ião cloreto ($Cl^-$), atravessando passivamente os canais de cloro das junções de fenda nos discos intercalares dos miócitos ventriculares em situação de isquemia transmural aguda e hipóxia celular grave.",
      "Do catião cálcio ($Ca^{2+}$), acumulando-se preferencialmente no retículo sarcoplasmático das células necróticas desprovidas de qualquer circulação coronária funcional ou contração mecânica no miocárdio lesado.",
      "Do ião bicarbonato ($HCO_3^-$), participando ativamente na regulação do pH do fluido intersticial pericárdico durante as fases de contração sistólica do ventrículo esquerdo na presença de estenose coronária.",
      "Do catião potássio ($K^+$), penetrando ativamente nas células musculares viáveis do miocárdio através da bomba de sódio-potássio ATPase ($Na^+/K^+$ ATPase) dependente de energia celular e perfusão coronária intacta."
    ],
    "correctIndex": 3,
    "explanation": "O Tálio (²⁰¹Tl, metal pesado do grupo 13) possui um raio iónico hidratado (1,44 Å) muito próximo do ião Potássio K⁺ (1,33 Å). O miócito cardíaco viável possui milhões de bombas ativas de Na⁺/K⁺ ATPase que transportam avidamente o Tálio-201 para o citoplasma intracelular. Áreas de enfarte miocárdico com necrose celular e fibrose (células mortas sem ATP e sem bombas funcionais) não conseguem captar o ²⁰¹Tl, surgindo como áreas 'frias' (defeitos de captação) na cintigrafia de viabilidade miocárdica.",
    "distractorAnalysis": [
      "Está incorreta: o tálio-201 possui raio iónico e propriedades químicas semelhantes ao potássio, sendo transportado ativamente pela bomba Na+/K+ ATPase nas células viáveis.",
      "Está incorreta: o tálio entra nos miócitos vivos por transporte ativo do potássio; tecidos necróticos ou cicatriciais não retêm tálio por falta de perfusão e de viabilidade membranar.",
      "Está incorreta: o tálio é um catião monovalente (Tl+) e não um análogo de iões bicarbonato ou de mediadores do equilíbrio ácido-base extracelular."
    ],
    "nursingApplication": "O exame de viabilidade com ²⁰¹Tl ajuda a responder a uma questão clínica crucial: o músculo cardíaco após enfarte está morto (tecido cicatricial) ou apenas 'hibernado' e reversível por cirurgia de revascularização coronária? O enfermeiro apoia a aquisição das imagens tardias de redistribuição (feitas 4 a 24 horas pós-injeção), instruindo o doente a permanecer em repouso e sem refeições pesadas."
  },
  {
    "id": 8016,
    "topicId": 8,
    "question": "A terapia com 'Iodo-131 MIBG' (metaiodobenzilguanidina radiomarcada) é utilizada no tratamento de quais tipos específicos de neoplasias malignas de origem neuroectodérmica?",
    "options": [
      "Feocromocitomas, paragangliomas e neuroblastomas pediátricos avançados, nos quais o radiofármaco mimetiza a noradrenalina e é captado ativamente pelo transportador vesicular de monoaminas (VMAT).",
      "Carcinomas espinocelulares da pele e melanomas metastáticos com expressão aumentada de recetores de melanocortina e queratina no estrato córneo epidérmico de doentes submetidos a quimioterapia prévia.",
      "Adenocarcinomas ductais invasivos da cabeça do pâncreas com obstrução biliar e fibrose estromal densa em doentes oncológicos sem mutações genéticas identificadas nos exames moleculares de rotina.",
      "Sarcomas ósseos osteogénicos dos membros inferiores caracterizados por proliferação desregulada de osteoblastos primitivos na cavidade medular diafisária e fraturas patológicas recorrentes no fémur."
    ],
    "correctIndex": 0,
    "explanation": "A MIBG é um análogo molecular da guanetidina que partilha estreita homologia estrutural com a noradrenalina (norepinefrina). Tumores derivados da crista neural e sistema neuroendócrino (como o neuroblastoma na infância e o feocromocitoma na medula suprarrenal) superexpressam os transportadores de recaptação de noradrenalina (NET e VMAT): captam e armazenam ativamente a ¹³¹I-MIBG em vesículas citoplasmáticas neurosecretoras, permitindo irradiar e destruir o tumor internamente com a radiação beta do Iodo-131.",
    "distractorAnalysis": [
      "Está incorreta: a MIBG é um análogo da guanetidina/noradrenalina com alta afinidade para células originárias da crista neural (sistema neuroendócrino e cromafim).",
      "Está incorreta: adenocarcinomas pancreáticos comuns não expressam transportadores de captação de monoaminas, não apresentando afinidade biológica para 131I-MIBG.",
      "Está incorreta: metástases e lesões osteoblásticas são tratadas com análogos do cálcio (223Ra, 89Sr) ou bisfosfonatos marcados, não com análogos de catecolaminas."
    ],
    "nursingApplication": "Durante a infusão endovenosa de altas doses de ¹³¹I-MIBG em crianças com neuroblastoma na unidade de transplante e medicina nuclear, a infusão lenta (ao longo de 1 a 2 horas) com monitorização contínua de ECG e pressão arterial é mandatória pelo enfermeiro: a MIBG pode deslocar temporariamente catecolaminas endógenas das vesículas adrenérgicas, provocando picos hipertensivos súbitos ou taquicardia que exigem intervenção imediata."
  },
  {
    "id": 8017,
    "topicId": 8,
    "question": "No contexto da dosimetria e proteção de acompanhantes de doentes submetidos a exames de PET com ¹⁸F-FDG, qual é a 'Taxa de Dose' típica emitida pelo doente logo após a injeção do radiofármaco e qual a conduta recomendada pelo enfermeiro?",
    "options": [
      "Aproximadamente 5 a 10 Sievert por hora a 1 metro; o enfermeiro exige a evacuação imediata de todo o edifício hospitalar durante as seis horas seguintes à administração por risco de síndrome aguda de radiação.",
      "Cerca de 20 a 40 $\\mu$Sv/h a 1 metro de distância imediatamente após a injeção; o enfermeiro orienta os acompanhantes (especialmente grávidas e crianças) a aguardar na sala comum exterior durante a fase de captação.",
      "Uma taxa estritamente nula de radiação exterior, podendo os familiares permanecer abraçados ao doente na sala de repouso sem qualquer limitação de tempo ou proximidade física durante toda a permanência no serviço.",
      "Mais de 500 milisievert por segundo na superfície cutânea; o enfermeiro obriga os acompanhantes a envergarem três aventais de chumbo sobrepostos durante toda a consulta de acompanhamento do exame de imagem."
    ],
    "correctIndex": 1,
    "explanation": "Após a injeção de cerca de 250 a 370 MBq de ¹⁸F-FDG, a aniquilação contínua dos positrões gera triliões de pares de fotões gama de 511 keV que escapam livremente do corpo do doente. A 1 metro do tórax do doente, a taxa de dose situa-se entre 20 e 40 μSv/h: embora segura para exposições curtas da equipa de saúde com EPI, o princípio de Otimização e Limitação de Dose (limite de 1 mSv/ano para o público) exige que familiares desnecessários permaneçam afastados na sala de espera comum.",
    "distractorAnalysis": [
      "Está incorreta: valores de 5 a 10 Sv/h seriam letais em poucos minutos e não correspondem a doses diagnósticas de PET; a taxa situa-se na ordem dos microsieverts por hora.",
      "Está incorreta: o doente injetado com 18F-FDG emite fotões de aniquilação de 511 keV de alta penetração; acompanhantes devem manter distanciamento profilático.",
      "Está incorreta: ordens de grandeza em mSv/s são completamente desproporcionadas para exames diagnósticos de medicina nuclear e os aventais comuns finos são ineficazes para 511 keV."
    ],
    "nursingApplication": "O enfermeiro acolhe e educa os familiares com sensibilidade e clareza: explicar que o distanciamento físico durante as 2 a 3 horas de permanência no serviço de PET é uma medida de prudência protetora padrão, tranquilizando que após o decaimento rápido do Flúor-18 (meia-vida de 1,8h) o doente regressará a casa em segurança radiológica plena."
  },
  {
    "id": 8018,
    "topicId": 8,
    "question": "Qual das seguintes substâncias químicas radiofármacas é utilizada pela enfermagem para realizar a 'Linfocintigrafia' pré-operatória no mapeamento anatómico do gânglio sentinela?",
    "options": [
      "Microesferas de resina insolúvel com diâmetro superior a 50 micrómetros que bloqueiam mecanicamente a artéria femoral profunda durante o procedimento cirúrgico de mapeamento vascular intraoperatório.",
      "Solução aquosa pura de iodo-131 elementar que se difunde passivamente por toda a circulação sanguínea venosa sem demonstrar qualquer seletividade migratória pelo sistema de capilares linfáticos da mama.",
      "Nanocoloide de albumina humana marcado com tecnécio-99m (99mTc-nanocoloide), cujas partículas calibradas (10 a 80 nm) migram pelos canais linfáticos até serem retidas no primeiro gânglio linfático regional drenante.",
      "Cristais macroscópicos de cloreto de rádio insolúvel que precipitam no tecido celular subcutâneo no local de incisão sem migrarem para os gânglios vizinhos por falta de motilidade linfática regional ativa."
    ],
    "correctIndex": 2,
    "explanation": "Para mapear os canais linfáticos com precisão microscópica, a dimensão das partículas é um parâmetro reológico crítico: partículas muito pequenas (<5 nm) entrariam na circulação venosa capilar e não parariam nos gânglios; partículas muito grandes (>200-500 nm) ficariam presas no local da injeção dérmica sem migrar. Os nanocolóides de albumina humana radiomarcados com ⁹⁹ᵐTc (tamanho ótimo de 10 a 80 nm) são drenados exclusivamente pelos vasos linfáticos aferentes e são retidos nos seios subcapsulares do primeiro gânglio linfático sentinela por filtração mecânica e fagocitose macrófaga.",
    "distractorAnalysis": [
      "Está incorreta: partículas de tamanho micrométrico (> 10-20 $\\mu$m) ficam retidas no local de injeção e não migram nos capilares linfáticos; o nanocoloide tem tamanho nanométrico ideal (10-80 nm).",
      "Está incorreta: o iodo elementar livre entra rapidamente na corrente vascular sanguínea e não permite o mapeamento seletivo de drenagem linfática do gânglio sentinela.",
      "Está incorreta: o gânglio sentinela é mapeado por migração coloidal radiomarcada; o rádio-223 é um emissor alfa terapêutico para metástases ósseas."
    ],
    "nursingApplication": "Na injeção subdérmica ou periareolar do ⁹⁹ᵐTc-nanocoloide, o enfermeiro realiza uma massagem suave e circular durante 1 a 2 minutos com compressa sobre o local da punção: a pressão mecânica suave estimula a drenagem nos canais linfáticos da derme superficial, acelerando a progressão do radiofármaco até ao gânglio sentinela axilar ou inguinal antes da cirurgia."
  },
  {
    "id": 8019,
    "topicId": 8,
    "question": "O Cobre-64 (⁶⁴Cu, T₁/₂ ≈ 12,7 horas) apresenta uma particularidade única de decaimento nuclear na física médica. Como decai este radionuclídeo de transição?",
    "options": [
      "Decai exclusivamente por fissão nuclear espontânea binária com emissão contínua de neutrões térmicos moderados, sem libertação de fotões gama secundários ou partículas carregadas leves na matéria circundante.",
      "Decai apenas por emissão de partículas alfa pesadas de curto alcance, apresentando um tempo de semivida física extremamente longo superior a dez mil anos terrestres nos repositórios geológicos de isolamento.",
      "Sofre exclusivamente transição isomérica metaestável sem variação de carga nuclear nem emissão de eletrões secundários de conversão interna ou fotões de aniquilação no meio celular biológico examinado.",
      "Decai em simultâneo por três vias concorrentes: emissão de positrões ($\\beta^+$, ~18%), emissão beta negativa ($\\beta^-$, ~38%) e captura eletrónica (~44%), conferindo-lhe um perfil híbrido promissor para teranóstica."
    ],
    "correctIndex": 3,
    "explanation": "O Cobre-64 é um nuclídeo fascinante: encontra-se num estado intermédio singular que lhe permite decair tanto por emissão beta positiva (β⁺) para o Níquel-64 (permitindo a aquisição de imagens de alta resolução em scanners PET), como por emissão beta negativa (β⁻) para o Zinco-64 (permitindo terapia celular tumoral com eletrões de curto alcance), além de captura eletrónica acompanhada de eletrões Auger citotóxicos. A sua meia-vida de 12,7 horas é ideal para estudar a farmacocinética lenta de anticorpos monoclonais e nanopartículas.",
    "distractorAnalysis": [
      "Está incorreta: o cobre-64 decai pelo ramo triplo ($\\beta^+$, $\\beta^-$ e captura eletrónica), o que permite emparelhar imagem PET com radioterapia beta dirigida.",
      "Está incorreta: a fissão nuclear espontânea ocorre em núcleos actinídeos muito pesados (como o califórnio-252) e nunca no núcleo leve do cobre-64 ($Z=29$).",
      "Está incorreta: o Cu-64 não é um emissor alfa nem tem semivida de milénios; a sua semivida física é de aproximadamente 12,7 horas."
    ],
    "nursingApplication": "O enfermeiro envolvido em ensaios clínicos com ⁶⁴Cu participa na vanguarda da nanomedicina oncológica: o acompanhamento de doentes que recebem imunoconjugados de cobre permite diagnosticar a localização tumoral e iniciar a terapia citotóxica numa única preparação radiofarmacêutica."
  },
  {
    "id": 8020,
    "topicId": 8,
    "question": "Na alta de um doente submetido a cirurgia de colocação de 'Sementes Permanentes de Iodo-125' na próstata (braquiterapia de baixa taxa de dose - LDR), qual é a recomendação de enfermagem quanto ao risco de migração acidental de sementes?",
    "options": [
      "Instruir o doente a utilizar preservativo nas relações sexuais e a filtrar a urina através de uma rede fornecida nas primeiras semanas, evitando manipular sementes expelidas e contactando a radioterapia se tal ocorrer.",
      "Determinar que o doente permaneça deitado de costas em repouso estrito no domicílio durante seis meses consecutivos para impedir a deslocação mecânica das sementes prostáticas implantadas no bloco operatório.",
      "Instruir o doente a guardar eventuais sementes metálicas expelidas na urina na sua caixa de comprimidos diária para entrega presencial na consulta médica de rotina no final do ano de acompanhamento clínico.",
      "Recomendar a toma diária de laxantes potentes para aumentar o trânsito intestinal e expulsar precocemente todas as sementes radioativas retidas na próstata através da ampola retal antes de qualquer decaimento."
    ],
    "correctIndex": 0,
    "explanation": "Na braquiterapia prostática permanente, cerca de 60 a 100 sementes de titânio (medindo 4,5 mm de comprimento por 0,8 mm de diâmetro) contendo Iodo-125 selado no seu interior são implantadas no parênquima da próstata sob guia ecográfica transretal. Nas primeiras semanas, existe uma pequena probabilidade de migração ou ejeção espontânea de uma semente através da uretra na urina ou durante a ejaculação seminal. O doente é instruído a usar preservativo e a recuperar qualquer semente expelida com uma pinça de metal (nunca com os dedos!) colocando-a num recipiente de vidro selado e informando o hospital.",
    "distractorAnalysis": [
      "Está incorreta: o repouso absoluto durante meses é contraindicado e desnecessário; o doente retoma a vida diária habitual respeitando apenas precauções de higiene e proximidade íntima inicial.",
      "Está incorreta: fontes de braquiterapia expelidas nunca devem ser tocadas com as mãos nem misturadas com medicação; devem ser manipuladas com pinça e colocadas em frasco seguro.",
      "Está incorreta: as sementes devem permanecer alojadas permanentemente no tecido prostático para emitir a dose terapêutica tumoral; expulsá-las precocemente comprometeria o tratamento."
    ],
    "nursingApplication": "O enfermeiro entrega o cartão de portador de implante radioativo de Iodo-125 ao doente: este documento oficial é crucial ao passar em detetores de radiação de aeroportos e fronteiras internacionais (que disparam facilmente com a emissão residual de raios X de 27 keV das sementes), justificando a presença de radioisótopos medicinais implantados."
  },
  {
    "id": 8021,
    "topicId": 8,
    "question": "O Xenon-133 (¹³³Xe, gás radioativo com T₁/₂ ≈ 5,2 dias) tem grande afinidade lipofílica, acumulando-se preferencialmente em quais tecidos corporais com elevado teor de gordura?",
    "options": [
      "Na matriz inorgânica mineralizada de hidroxiapatite do esqueleto ósseo cortical através de substituição isomorfa irreversível dos cristais de fosfato de cálcio presentes nas lamelas ósseas compactas do doente.",
      "No tecido adiposo subcutâneo e visceral e na mielina fosfolipídica do sistema nervoso central, nos quais se dissolve preferencialmente com uma cinética de depuração biológica substancialmente mais lenta do que no sangue.",
      "No interior das hemácias circulantes ligando-se covalentemente aos grupos hemo da molécula de hemoglobina com afinidade mil vezes superior à do oxigénio gasoso nos capilares alveolares pulmonares terminais.",
      "No epitélio folicular da glândula tiroide por transporte ativo mediado pelos mesmos simportadores basolaterais de sódio e iodeto (sistemas NIS) dependentes do gradiente eletroquímico de membrana celular."
    ],
    "correctIndex": 1,
    "explanation": "O Xénon é um gás nobre de elevado peso atómico que exibe altíssima solubilidade lipídica (elevado coeficiente de partição óleo/água). Quando inalado para estudos de ventilação pulmonar ou perfusão cerebral, difunde-se rapidamente através da barreira hematoencefálica dissolvendo-se na bainha de mielina rica em lípidos dos neurónios e no tecido adiposo periférico. Esta lipofilia prolonga a sua meia-vida biológica em doentes obesos, exigindo tempos de decaimento e ventilação ligeiramente mais longos.",
    "distractorAnalysis": [
      "Está incorreta: o xénon é um gás nobre lipofílico com elevada solubilidade em lípidos e gordura neutra e não tem qualquer afinidade química para a hidroxiapatite óssea.",
      "Está incorreta: o xénon não se liga covalentemente à hemoglobina nem atua como competidor tóxico irreversível do oxigénio gasoso.",
      "Está incorreta: o transporte tiroideu via NIS é seletivo para aniões iodeto e análogos estruturais, não captando gases nobres quimicamente inertes como o xénon."
    ],
    "nursingApplication": "Em doentes obesos que realizam estudos respiratórios com gases radioativos, o enfermeiro sabe que a depuração do traçador é mais demorada: reforçar a ventilação do quarto de internamento e garantir períodos de repouso antes de alta assegura que a concentração residual de gás radioativo exalado no ar ambiente permaneça dentro dos limites de higiene do trabalho."
  },
  {
    "id": 8022,
    "topicId": 8,
    "question": "No contexto da 'Lei do Decaimento Exponencial', o que representa a 'Vida Média' (τ, tau) de um radioisótopo em comparação com o seu tempo de meia-vida física (T₁/₂)?",
    "options": [
      "A Vida Média é exatamente igual a metade da meia-vida física ($\\tau = 0,5 \\cdot T_{1/2}$), correspondendo ao tempo necessário para consumir por decaimento a totalidade dos núcleos atómicos da amostra radioativa administrada.",
      "A Vida Média expressa a duração do intervalo de tempo durante o qual o radiofármaco retém eficácia farmacológica no doente antes de ser degradado por enzimas plasmáticas hepáticas na circulação venosa sistémica.",
      "A Vida Média ($\\tau = 1/\\lambda = T_{1/2}/\\ln(2) \\approx 1,443 \\cdot T_{1/2}$) representa a esperança de vida temporal média de um átomo radioativo individual antes de decair, sendo aproximadamente 44% superior ao tempo de meia-vida.",
      "A Vida Média é calculada multiplicando o tempo de meia-vida por dez ($\\tau = 10 \\cdot T_{1/2}$), sendo a métrica oficial utilizada para autorizar a destruição de resíduos sem medição prévia no expurgo hospitalar."
    ],
    "correctIndex": 2,
    "explanation": "Enquanto a Meia-Vida (T₁/₂) é a mediana temporal da população de átomos (tempo para 50% dos núcleos se desintegrarem), a Vida Média (τ, tau) é a média aritmética estatística do tempo de sobrevivência de todos os átomos da amostra: τ = 1 / λ. Como λ = ln(2)/T₁/₂, tem-se τ = T₁/₂ / 0,693 ≈ 1,44 · T₁/₂. A integral da atividade ao longo do tempo de decaimento completo infinito é simplesmente A_total = A₀ · τ, fórmula fundamental utilizada pelos físicos médicos e dosimetristas para calcular a dose total acumulada em Joules ou Grays entregue a um tumor ao longo de toda a vida do implante.",
    "distractorAnalysis": [
      "Está incorreta: a vida média $\\tau$ é $1/\\lambda = T_{1/2}/0,693 \\approx 1,443 \\cdot T_{1/2}$ e não metade; além disso, a decaimento total teórico exigiria um tempo assintoticamente infinito.",
      "Está incorreta: a vida média nuclear é uma propriedade física independente do metabolismo enzimático plasmático ou da ação farmacodinâmica de fármacos.",
      "Está incorreta: multiplicar por 10 corresponde à regra prática das 10 meias-vidas para decaimento a < 0,1% e não à definição analítica de vida média ($\\tau \\approx 1,443 \\cdot T_{1/2}$)."
    ],
    "nursingApplication": "O conhecimento da Vida Média (τ = 1,44 · T₁/₂) é indispensável na braquiterapia de implantes permanentes (como sementes de Iodo-125 na próstata com T_1/2 = 60 dias, onde τ ≈ 86,6 dias): permite ao enfermeiro explicar ao doente que a dose terapêutica total prescrita pelo oncologista é entregue de forma contínua e suave ao longo de cerca de 3 meses, minimizando o estresse e esclarecendo o plano terapêutico."
  },
  {
    "id": 8023,
    "topicId": 8,
    "question": "Em caso de paragem cardiorrespiratória (PCR) de um doente internado num quarto blindado de isolamento após ter recebido uma dose terapêutica muito elevada de Iodo-131 (ex: 5550 MBq / 150 mCi) algumas horas antes, qual é a prioridade ética e operacional da equipa de enfermagem de reanimação?",
    "options": [
      "A equipa de enfermagem deve abandonar o quarto e aguardar no exterior durante dez meias-vidas físicas (cerca de 80 dias) antes de prestar qualquer assistência clínica emergente ao doente em paragem cardiorrespiratória.",
      "O protocolo hospitalar exige a realização prévia de uma reunião multidisciplinar de bioética de três horas antes de decidir se o doente internado em paragem cardíaca pode ser tocado pela equipa médica de socorro.",
      "As compressões torácicas são estritamente proibidas em todos os doentes radioativos porque a compressão mecânica acelera a libertação de fluxos de neutrões energéticos pelo esterno durante o suporte de vida.",
      "A reanimação cardiorrespiratória do doente tem prioridade absoluta sobre a proteção radiológica: a equipa inicia manobras e suporte avançado de vida de imediato, aplicando medidas de radioproteção práticas rápidas."
    ],
    "correctIndex": 3,
    "explanation": "Princípio deontológico e de radioproteção universal (ICRP 103 e regulamentos internacionais): A vida humana e as manobras de reanimação de emergência médica têm prioridade indiscutível sobre qualquer restrição radiológica rotineira. A dose que a equipa de emergência recebe durante 15 a 30 minutos de reanimação vigorosa (frações de mSv) está muito abaixo dos limites de emergência de salvamento de vidas humanas (que admitem doses ocupacionais de até 100 ou 500 mSv). Medidas simples de barreira (luvas duplas para evitar contacto com saliva/suor radioativo e saco reanimador com válvula / ventilador sem boca-a-boca) garantem a segurança dos reanimadores.",
    "distractorAnalysis": [
      "Está incorreta: segundo as diretrizes internacionais da ICRP e IAEA, a preservação da vida do doente em risco iminente de morte sobrepõe-se sempre aos limites de proteção radiológica.",
      "Está incorreta: atrasar a reanimação para aguardar decaimento ou reuniões burocráticas conduz à morte cerebral irreversível do doente em poucos minutos.",
      "Está incorreta: compressões torácicas não alteram a física nuclear do radioisótopo nem produzem neutrões; reanimadores devem alternar frequentemente e usar EPI adequado."
    ],
    "nursingApplication": "O enfermeiro lidera a resposta serena perante uma PCR em quartos de medicina nuclear: toca o alarme de paragem cardíaca, coloca as luvas e avental plástico de intervenção rápida, inicia compressões torácicas e intubação orotraqueal imediatamente, e orienta a rotação dos profissionais a cada 2 minutos para dividir o esforço físico e a modesta taxa de radiação externa."
  },
  {
    "id": 8024,
    "topicId": 8,
    "question": "O radioisótopo Césio-137 e o Iodo-131 têm como órgãos-alvo preferenciais no corpo humano quais estruturas biológicas, respetivamente?",
    "options": [
      "O césio-137 distribui-se uniformemente por toda a massa muscular e tecidos moles corporais (como análogo do potássio); o iodo-131 concentra-se de forma altamente seletiva no parênquima da glândula tiroide.",
      "O césio-137 deposita-se exclusivamente no esmalte dentário sem penetrar na corrente sanguínea; o iodo-131 distribui-se de modo homogéneo apenas no tecido adiposo subcutâneo da parede abdominal anterior.",
      "O césio-137 fixa-se exclusivamente na medula espinhal lombar através de barreira hematoencefálica; o iodo-131 acumula-se preferencialmente no córtex das glândulas suprarrenais sem captar na tiroide.",
      "Ambos os radionuclídeos apresentam tropismo exclusivo para a matriz óssea cortical compacta, ligando-se covalentemente aos cristais de hidroxiapatite nos canais de Havers do esqueleto apendicular e axial."
    ],
    "correctIndex": 0,
    "explanation": "A biodistribuição dos radionuclídeos decorre da sua afinidade química celular: 1) O Iodo-131 é concentrado ativamente pelas células foliculares da glândula tiroide por transporte ativo através do simporte de Na⁺/I⁻ (onde a concentração de iodeto atinge valores de 20 a 100 vezes superiores aos do plasma); 2) O Césio-137 (Z=55), sendo um metal alcalino quimicamente idêntico ao potássio (K⁺), é transportado para o espaço intracelular de todas as células do corpo pela bomba de sódio-potássio ATPase, acumulando-se preferencialmente no músculo estriado esquelético (que representa cerca de 40% da massa corporal humana).",
    "distractorAnalysis": [
      "Está incorreta: o Cs-137 comporta-se quimicamente como o potássio ($K^+$) e distribui-se por todo o volume muscular; o I-131 é concentrado de modo muito ávido na tiroide via NIS.",
      "Está incorreta: o césio não se fixa no esmalte nem o iodo é puramente lipófilo; a tiroide capta a quase totalidade do iodo retido no organismo.",
      "Está incorreta: o tropismo para o esqueleto ósseo é característico de metais alcalino-terrosos análogos do cálcio (como 89Sr e 223Ra) e não do césio ou do iodo."
    ],
    "nursingApplication": "Conhecer a organotropia (órgão-alvo) dos radioisótopos dita as intervenções de enfermagem: em doentes que receberam Iodo-131, o enfermeiro monitoriza o pescoço e orienta a ingestão de rebuçados ácidos de limão (ácido cítrico) 24h após a toma para estimular a salivação e 'lavar' as glândulas salivares, prevenindo a sialoadenite radioinduzida crónica."
  },
  {
    "id": 8025,
    "topicId": 8,
    "question": "Na cintigrafia renal, qual é a diferença clínica e biofísica fundamental entre o uso do ⁹⁹ᵐTc-MAG3 e do ⁹⁹ᵐTc-DMSA administrados por enfermagem?",
    "options": [
      "O 99mTc-MAG3 é um radiofármaco que se fixa permanentemente nos glomérulos renais sem ser excretado; o 99mTc-DMSA é um gás inalatório utilizado para avaliar a filtração do ar alveolar nos pulmões do doente.",
      "O 99mTc-MAG3 é excretado quase totalmente por secreção tubular renal na urina (ideal para estudos dinâmicos de obstrução); o 99mTc-DMSA fixa-se no córtex renal proximal (ideal para morfologia estática e função relativa).",
      "O 99mTc-MAG3 avalia exclusivamente a viabilidade das coronárias esquerdas; o 99mTc-DMSA é administrado por via intratecal para quantificar a circulação do líquido cefalorraquidiano nos ventrículos cerebrais.",
      "Ambos os radiofármacos possuem farmacocinética idêntica de filtração glomerular pura sem secreção tubular, variando unicamente o custo comercial de aquisição hospitalar dos respetivos conjuntos de marcação fria."
    ],
    "correctIndex": 1,
    "explanation": "Em nefrologia e urologia nuclear: 1) Renograma Dinâmico com ⁹⁹ᵐTc-MAG3 (mercaptoacetiltriglicina): a câmara gama filma em tempo real a chegada rápida do radiofármaco aos rins, a sua passagem pelo parênquima e a sua drenagem ureteral para a bexiga (com prova de furosemida/Lasix para distinguir obstruções mecânicas de dilatações hipotónicas); 2) Cintigrafia Renal Estática com ⁹⁹ᵐTc-DMSA (ácido dimercaptosuccínico): as moléculas fixam-se firmemente nas células dos túbulos contornados proximais do córtex renal (retenção estática parenquimatosa sem lavagem urinária rápida), desenhando a anatomia do córtex e quantificando se o rim esquerdo e direito funcionam na proporção esperada de 50%/50%.",
    "distractorAnalysis": [
      "Está incorreta: o MAG3 é eliminado ativamente na urina por secreção tubular rápida (estudo renográfico dinâmico); o DMSA permanece retido nos túbulos proximais para imagem estática cortical.",
      "Está incorreta: MAG3 e DMSA são radiofármacos de nefrologia e urologia e não traçadores de cardiologia ou cisternocintigrafia neurológica.",
      "Está incorreta: o MAG3 é excretado maioritariamente por secreção tubular e o DMSA fica retido no parênquima; não partilham o mesmo comportamento cinético."
    ],
    "nursingApplication": "Ao preparar uma criança para cintigrafia renal com DMSA para investigar refluxo vesicoureteral e cicatrizes pós-infeção urinária, o enfermeiro sabe que as imagens estáticas são adquiridas apenas 2 a 3 horas após a injeção (tempo necessário para a fixação cortical máxima), mantendo a criança calma e hidratada durante o intervalo de espera."
  },
  {
    "id": 8026,
    "topicId": 8,
    "question": "O conceito de 'Teranóstica' (teranostics, fusão de Terapia com Diagnóstico) representa o paradigma mais moderno da medicina nuclear personalizada. Como se define este conceito biofísico?",
    "options": [
      "A administração simultânea de dois radiofármacos distintos sem ligação a recetores, de modo que um fármaco emita calor por condução térmica enquanto o outro realiza a cintigrafia funcional em meio hospitalar sob controlo rigoroso.",
      "A técnica cirúrgica que combina a excisão robótica de lesões metastáticas com a aplicação tópica direta de pomadas radioativas de bário para acelerar o processo de cicatrização tecidual primária nos tecidos periféricos circundantes.",
      "O uso do mesmo vetor molecular dirigido a um recetor tumoral, marcado primeiro com um emissor gama ou positrões para diagnóstico e estadiamento por imagem, e depois com um emissor beta ou alfa para terapia seletiva e ablação do tumor.",
      "O método de monitorização radiológica que utiliza doses terapêuticas de iodo radioativo para efetuar a calibração diária dos detetores de cintilação e das câmaras gama instaladas nos serviços de imagiologia médica moderna."
    ],
    "correctIndex": 2,
    "explanation": "O lema da teranóstica é: 'Vemos o que tratamos e tratamos o que vemos' (We see what we treat, we treat what we see). Baseia-se em emparelhar um par de radioisótopos com a mesma afinidade biológica: 1) Na fase diagnóstica, injeta-se o vetor marcado com um emissor de imagem (como ⁶⁸Ga para PET ou ⁹⁹ᵐTc para SPECT) para comprovar visualmente que o tumor do doente expressa avidamente os recetores-alvo; 2) Se o tumor for positivo na imagem, injeta-se exatamente a mesma molécula carreadora mas ligada a uma ogiva radioativa destruidora (emissor beta de alta energia como ¹⁷⁷Lu ou emissor alfa como ²²⁵Ac), bombardeando as células tumorais a nível nanométrico.",
    "distractorAnalysis": [
      "Está incorreta: a teranóstica baseia-se no emparelhamento do mesmo vetor alvo específico (como o PSMA ou DOTA) com radioisótopos diferentes para imagem (ex.: 68Ga) e tratamento (ex.: 177Lu ou 225Ac), sem produção de calor térmico.",
      "Está incorreta: a teranóstica não consiste em excisão cirúrgica com aplicação de pomadas de bário; é uma abordagem farmacológica sistémica dirigida a nível celular.",
      "Está incorreta: a calibração de equipamentos utiliza fontes padrão seladas de referência e não doses terapêuticas de doentes administradas para fins diagnósticos rotineiros."
    ],
    "nursingApplication": "O enfermeiro atua no coração da revolução teranóstica: acompanha o doente desde o acolhimento para o exame PET com ⁶⁸Ga-PSMA (confirmando a indicação tumoral) até à internação na enfermaria especializada para os ciclos terapêuticos de perfusão de ¹⁷⁷Lu-PSMA, monitorizando a eficácia clínica da remissão tumoral e gerindo os efeitos secundários com segurança radiológica."
  },
  {
    "id": 8027,
    "topicId": 8,
    "question": "Em caso de extravasamento periférico de uma injeção de ¹⁸F-FDG no braço do doente durante o procedimento de preparação para o exame PET, qual é a implicação biofísica imediata na qualidade do exame imagiológico e na segurança do doente?",
    "options": [
      "O radiofármaco extravasado converte-se instantaneamente num gás radioativo volátil que se liberta para o ar ambiente, provocando a contaminação atmosférica respiratória de toda a equipa de enfermagem do serviço.",
      "O extravasamento tecidual periférico acelera a depuração renal do radioisótopo, eliminando a totalidade da atividade administrada na urina em menos de cinco minutos sem qualquer radiação retida no braço do doente.",
      "A retenção local do radiofármaco no tecido subcutâneo neutraliza os positrões emitidos através da absorção fotoelétrica dérmica, impedindo a emissão de qualquer fotão secundário de aniquilação para o meio exterior.",
      "Grande parte da dose fica retida nos tecidos moles do braço, gerando um artefacto de hipercaptação que distorce a calibração, reduz o traçador circulante sistémico e deposita uma dose de radiação local desnecessária no membro."
    ],
    "correctIndex": 3,
    "explanation": "A ¹⁸F-FDG destina-se a distribuir-se equitativamente por via intravascular por todo o organismo. Se ocorrer extravasamento perivenoso no local da punção: 1) Uma fração colossal da radioatividade permanece confinada ao tecido celular subcutâneo do antebraço, emitindo uma densidade absurda de fotões de aniquilação de 511 keV que gera artefactos de saturação nos detetores do PET; 2) A concentração plasmática sistémica cai, reduzindo os valores de captação padronizada (SUV - Standardized Uptake Value) nos tumores e provocando falsos negativos no estadiamento; 3) A dose absorvida localmente na pele do braço pode atingir vários Grays determinísticos.",
    "distractorAnalysis": [
      "Está incorreta: o 18F-FDG retido no interstício subcutâneo não se volatiliza em gás; permanece como líquido ionizante emissor de positrões provocando dose cutânea desnecessária e arruinando o exame.",
      "Está incorreta: o fármaco extravasado é absorvido lentamente pelas vias linfáticas e venosas locais, atrasando em vez de acelerar a excreção renal e impedindo o estadiamento tumoral adequado.",
      "Está incorreta: os positrões emitidos no tecido extravasado aniquilam-se com eletrões locais produzindo fotões de 511 keV de alta penetração que saturam os detetores e geram artefactos de imagem severos."
    ],
    "nursingApplication": "A punção venosa periférica para administração de radiofármacos de PET e terapia metabólica exige excelência técnica do enfermeiro: garantir cateter venoso periférico calibroso e seguro, testar vigorosamente o retorno venoso e a lavagem prévia com soro fisiológico sem resistência e aspirar antes de injetar, prevenindo extravasamentos radioativos lesivos."
  },
  {
    "id": 8028,
    "topicId": 8,
    "question": "O radioisótopo Iridio-192 (¹⁹²Ir) decai com semivida de aproximadamente 74 dias por emissão beta e fotões gama com energia média de cerca de 380 keV. Qual é a principal vantagem do Irídio-192 sobre o Césio-137 em procedimentos de braquiterapia moderna?",
    "options": [
      "O irídio-192 pode ser produzido com uma atividade específica extremamente elevada, permitindo fabricar fontes radioativas miniaturizadas capazes de navegar através de cateteres flexíveis finos até ao interior de tumores profundos.",
      "O irídio-192 decai sem emitir qualquer radiação ionizante penetrante no ar, dispensando totalmente a utilização de cofres blindados de chumbo ou barreiras estruturais nas salas de tratamento de braquiterapia ginecológica.",
      "O irídio-192 apresenta uma semivida física superior a cinco séculos, o que assegura que as mesmas sementes cirúrgicas metálicas possam ser reutilizadas indefinidamente em centenas de doentes ao longo de várias gerações.",
      "O irídio-192 reage quimicamente com os tecidos neoplásicos gerando compostos insolúveis de platina que atuam como agentes citostáticos convencionais independentemente da radiação emitida pelo núcleo atómico do elemento."
    ],
    "correctIndex": 0,
    "explanation": "O Césio-137 possui atividade específica moderada, exigindo fontes volumosas e pesadas que necessitam de canais aplicadores calibrosos e rígidos. O Irídio-192 obtido por irradiação neutrónica de Irídio-191 tem altíssima secção eficaz, alcançando atividades específicas monumentais: uma semente cilíndrica de irídio com dimensões submilimétricas concentra dezenas de Curies de atividade, permitindo a sua passagem suave por tubos plásticos flexíveis ultrafinos em braquiterapia intersticial de tumores da cabeça e pescoço, mama, próstata e brônquios (braquiterapia endobrônquica).",
    "distractorAnalysis": [
      "Está incorreta: o 192Ir emite fotões gama com energia média de ~380 keV e partículas beta, exigindo cofres pesados de urânio empobrecido ou chumbo e salas blindadas com comando remoto.",
      "Está incorreta: a semivida física do 192Ir é de aproximadamente 73,8 dias (exigindo substituição periódica da fonte a cada 3 a 4 meses) e não centenas de anos.",
      "Está incorreta: o irídio-192 é selado numa cápsula hermética de aço inoxidável ou titânio; a sua ação é estritamente radiobiológica por irradiação física e não por quimioterapia tecidual de contacto."
    ],
    "nursingApplication": "Como o Irídio-192 tem semivida de cerca de 74 dias (~2 meses e meio), a sua atividade radioativa decai progressivamente cerca de 1% por dia: a equipa de física médica atualiza semanalmente os tempos de irradiação no computador de tratamento, e a fonte é substituída trimestralmente no equipamento sob rigoroso protocolo de segurança de enfermagem e proteção radiológica."
  },
  {
    "id": 8029,
    "topicId": 8,
    "question": "Na gestão de segurança hospitalar, se um doente internado no quarto de radioiodoterapia com Iodo-131 falecer subitamente durante o período de alta atividade corporal residual (primeiras 24 horas pós-dose), qual é o procedimento biofísico e legal mandatório?",
    "options": [
      "Proceder de imediato à drenagem manual dos fluidos cavitários do doente na enfermaria com seringas comuns, descartando os resíduos líquidos no lavatório do quarto antes de qualquer notificação formal às autoridades do hospital.",
      "Notificar imediatamente o Serviço de Proteção Radiológica e o Físico Médico para avaliar a taxa de dose corporal e orientar a preparação do cadáver com saco impermeável estanque selado de espessura reforçada e rotulagem de risco radiológico.",
      "Encaminhar o cadáver imediatamente para a morgue geral sem qualquer sinalização radiológica externa, instruindo os técnicos de anatomia patológica a realizarem a autópsia forense de rotina no mesmo turno de trabalho.",
      "Autorizar a entrega imediata do corpo aos familiares para realização de velório de caixão aberto em ambiente domiciliário sem restrições de proximidade física para crianças pequenas ou mulheres grávidas da família."
    ],
    "correctIndex": 1,
    "explanation": "A morte de um doente retendo Gigabecquerels de radioisótopos no organismo (como ¹³¹I, ¹⁷⁷Lu ou fontes de braquiterapia não removidas) constitui uma ocorrência radiológica que exige procedimentos especiais: 1) O cadáver emite radiação penetrante contínua; 2) Os fluidos cadavéricos (sangue, urina, fezes) contêm contaminação biológica e radioativa massiva. O corpo tem de ser acondicionado em saco impermeável estanque, rotulado com o trifólio de radiação com a atividade estimada e mantido em câmara frigorífica mortuária isolada até que o decaimento permita o sepultamento ou cremação em conformidade com as normas legais de dose pública.",
    "distractorAnalysis": [
      "Está incorreta: a drenagem manual direta de fluidos contaminados expõe o profissional a taxas elevadíssimas de radiação e contaminação biológica e radiológica, violando as normas de biossegurança.",
      "Está incorreta: a sinalização expressa com símbolo de radioatividade e a avaliação pelo Físico Médico são obrigatórias; a autópsia deve ser evitada ou realizada sob protocolo de proteção radiológica estrito.",
      "Está incorreta: o corpo de um doente com dose terapêutica de I-131 emite taxas de dose significativas que impõem restrições legais ao contacto dos familiares e regras de inumação ou cremação."
    ],
    "nursingApplication": "O enfermeiro desempenha papel primordial na dignifiedade do cuidado pós-morte seguro: aplicar o saco fúnebre impermeável reforçado, identificar externamente com etiqueta de 'Cadáver Radioativo - Risco de Radiação', documentar a atividade administrada e hora do óbito, e acompanhar a transferência com o técnico de proteção radiológica para a morgue hospitalar."
  },
  {
    "id": 8030,
    "topicId": 8,
    "question": "O Carbono-11 (¹¹C, emissor de positrões com T₁/₂ ≈ 20,4 minutos) é um dos radioisótopos mais versáteis da investigação biomédica molecular em PET. Qual é a principal limitação logística que restringe o seu uso clínico de rotina na maioria dos hospitais gerais?",
    "options": [
      "A ausência de emissão de positrões durante o decaimento nuclear impede que os detetores dos aparelhos de PET registem as coincidências de aniquilação a 180 graus necessárias para a reconstrução tomográfica computorizada.",
      "A extrema toxidade química intrínseca do elemento carbono que induz choque anafilático grave e colapso circulatório imediato assim que a molécula radiomarcada contacta com as proteínas do plasma venoso do doente.",
      "A sua semivida física ultracurta de apenas 20 minutos exige que o ciclotrão de produção esteja localizado nas próprias instalações do hospital ou a curta distância da sala de exames de PET, inviabilizando o transporte rodoviário prolongado.",
      "O facto de o carbono-11 decair exclusivamente por emissão de partículas alfa de elevado percurso tecidual que provocam lesões necróticas extensas nas veias periféricas utilizadas na administração do radiofármaco."
    ],
    "correctIndex": 2,
    "explanation": "Com uma semivida de apenas 20,4 minutos: após 1 hora (3 meias-vidas) resta apenas 12,5% da atividade original; após 2 horas (6 meias-vidas) resta apenas 1,5% da dose sintetizada! Este decaimento físico vertiginoso impossibilita a distribuição comercial a partir de centros externos distantes. O uso de ¹¹C (como em ¹¹C-Colina ou ¹¹C-PIB para diagnóstico precoce da Doença de Alzheimer) exige a presença integrada de um cíclotron no subsolo do próprio hospital, módulos robotizados de radiossíntese química rápida e uma equipa multidisciplinar de químicos e enfermeiros trabalhando em sincronia ao segundo.",
    "distractorAnalysis": [
      "Está incorreta: o 11C decai quase a 100% por emissão de positrões ($\\beta^+$), sendo um excelente agente para imagem PET funcional de recetores cerebrais e metabolismo lipídico.",
      "Está incorreta: o carbono é o elemento estrutural fundamental da matéria viva e as massas químicas de radiotraçador injetadas são ínfimas (escala de picomoles a nanomoles), sem qualquer toxicidade química.",
      "Está incorreta: o 11C não emite partículas alfa; decai por emissão de positrões ($\\beta^+$) com aniquilação em fotões gama de 511 keV."
    ],
    "nursingApplication": "A logística do Carbono-11 ensina a disciplina de tempo na enfermagem de medicina nuclear: o doente tem de estar já cateterizado na sala de exames, o posicionamento no scanner calibrado e a aquisição pronta a iniciar no exato minuto em que a seringa sai do laboratório de radiofarmácia, garantindo o aproveitamento pleno da atividade fotónica antes do seu decaimento total."
  },
  {
    "id": 8031,
    "topicId": 8,
    "question": "O Cloreto de Estrôncio-89 (⁸⁹Sr, T₁/₂ ≈ 50,5 dias) é um emissor beta puro (E_max = 1,49 MeV). Por não emitir fotões gama significativos, qual é o impacto no isolamento hospitalar do doente após a sua administração?",
    "options": [
      "A ausência de emissão gama dispensa qualquer cuidado com o manuseio das excreções urinárias do doente, podendo a urina ser recolhida em arrastadeiras comuns sem luvas ou equipamentos de proteção individual pelo enfermeiro.",
      "O tratamento com estrôncio-89 exige o confinamento em câmara subterrânea durante pelo menos cinquenta dias consecutivos para impedir a ativação por neutrões das paredes dos edifícios circundantes da unidade hospitalar.",
      "A radiação beta pura emitida pelo fármaco anula completamente a necessidade de monitorização analítica dos parâmetros hematológicos, garantindo a ausência de qualquer efeito mielossupressor na medula óssea do paciente.",
      "O doente não necessita de internamento em quarto blindado de chumbo (pode receber a terapêutica em ambulatório), visto que a radiação beta é quase totalmente absorvida no esqueleto e partes moles, com taxa externa insignificante."
    ],
    "correctIndex": 3,
    "explanation": "Diferença crucial de radioproteção entre emissores gama e emissores beta puros: fotões gama escapam facilmente do corpo e irradiam quem estiver perto, exigindo quartos blindados (como no Iodo-131). As partículas beta do Estrôncio-89 têm um alcance máximo nos tecidos corporais de apenas cerca de 6 a 7 mm: quase 100% da radiação é absorvida nos próprios ossos do doente. A taxa de radiação emitida externamente para o exterior é virtualmente nula, permitindo a administração segura em hospital de dia com regresso imediato à residência familiar.",
    "distractorAnalysis": [
      "Está incorreta: a excreção urinária nas primeiras 48-72 horas contém frações significativas do radiofármaco não fixado no osso, exigindo luvas, recolha cuidada e higiene rigorosa para evitar contaminações.",
      "Está incorreta: a semivida de 50,5 dias não exige internamento durante todo o período, pois a radiação externa através da pele é desprezível e o doente cumpre precauções simples no domicílio.",
      "Está incorreta: a radiação beta atinge a medula óssea vizinha das metástases, podendo provocar trombocitopenia e leucopenia que exigem controlo regular do hemograma."
    ],
    "nursingApplication": "O enfermeiro foca a educação de alta do doente tratado com Estrôncio-89 na higiene com as excreções biológicas: como parte do radiofármaco é eliminado na urina e fezes nas primeiras semanas, o enfermeiro instrui o doente a usar sempre a sanita sentado, lavar cuidadosamente as mãos e trocar imediatamente qualquer roupa de cama molhada com urina utilizando luvas descartáveis."
  },
  {
    "id": 8032,
    "topicId": 8,
    "question": "Na avaliação de doentes com suspeita de demência e Doença de Alzheimer, qual é o princípio da imagem PET com radiotraçadores de Placas Amilóides (como o ¹⁸F-Florbetapir ou ¹⁸F-Florbetaben)?",
    "options": [
      "As moléculas do radiofármaco atravessam a barreira hematoencefálica e ligam-se especificamente com elevada afinidade aos depósitos fibrilares insolúveis de proteína beta-amiloide no córtex cerebral, permitindo a sua deteção tomográfica in vivo.",
      "Os radiotraçadores amiloides promovem a destruição fotoquímica seletiva das placas senis corticais através da emissão de fotões ultravioleta que dissolvem os filamentos proteicos durante a aquisição do exame de PET cerebral.",
      "O radiofármaco acumula-se preferencialmente nos ventrículos cerebrais laterais, avaliando o grau de hidrocefalia normotensiva através do bloqueio da reabsorção do líquido cefalorraquidiano nas granulações aracnoides.",
      "O mecanismo de diagnóstico assenta na inibição enzimática competitiva da acetilcolinesterase nos gânglios da base, quantificando o grau de perda de neurónios dopaminérgicos na substância negra do mesencéfalo do doente."
    ],
    "correctIndex": 0,
    "explanation": "A Doença de Alzheimer caracteriza-se microscopicamente pela acumulação de placas extracelulares de peptídeo beta-amilóide (Aβ) e tranças neurofibrilares de proteína tau hiperfosforilada. Os traçadores de PET amilóide radiomarcados com Flúor-18 cruzam a barreira hematoencefálica e ligam-se às folhas plissadas beta das placas amilóides corticais. Um exame negativo afasta com altíssima probabilidade a Doença de Alzheimer como causa do défice cognitivo, orientando o diagnóstico diferencial neurológico.",
    "distractorAnalysis": [
      "Está incorreta: os traçadores amiloides (ex.: 18F-Florbetapir, 18F-Florbetaben) são ferramentas de imagem diagnóstica que se ligam com alta especificidade às placas de beta-amiloide sem efeito lítico fotoquímico.",
      "Está incorreta: os exames com radiotraçadores emitem radiação de aniquilação (511 keV) e não luz ultravioleta, não tendo finalidade terapêutica de dissolução tecidual.",
      "Está incorreta: o estudo de hidrocefalia ou dinâmica do LCR realiza-se por cisternocintigrafia e a avaliação da via dopaminérgica faz-se com DaTscan (123I-Ioflupano) ou 18F-DOPA."
    ],
    "nursingApplication": "No acolhimento a doentes com défice cognitivo e às suas famílias angustiadas, o enfermeiro explica o procedimento com empatia e tranquilidade: o exame é não-invasivo, indolor, exige apenas uma pequena punção venosa para a injeção do traçador e 90 minutos de repouso confortável antes da digitalização no scanner PET, orientando os familiares sobre a relevância do diagnóstico precoce."
  },
  {
    "id": 8033,
    "topicId": 8,
    "question": "O conceito de 'Equilíbrio Secular' (Secular Equilibrium) ocorre num sistema de decaimento pai-filho quando qual condição de semividas físicas é satisfeita?",
    "options": [
      "Quando a semivida física do núcleo pai é rigorosamente idêntica à do filho ($T_{pai} = T_{filho}$), resultando na duplicação contínua da atividade total da amostra a cada período decorrido no interior do gerador hospitalar.",
      "Quando a semivida física do radionuclídeo pai é extraordinariamente muito superior à semivida do filho ($T_{pai} \\gg T_{filho}$, por um fator de centenas ou milhares de vezes), atingindo-se um estado em que a atividade do filho iguala a do pai.",
      "Quando o núcleo pai decai exclusivamente por emissão de partículas alfa e o filho decai exclusivamente por emissão gama pura, neutralizando-se mutuamente as cargas elétricas no interior da coluna de separação cromatográfica.",
      "Quando a semivida do núcleo filho excede a do pai em mais de dez vezes, permitindo que a atividade do filho continue a crescer indefinidamente de forma linear sem nunca atingir um valor máximo ou saturação física."
    ],
    "correctIndex": 1,
    "explanation": "No Equilíbrio Secular (λ_pai << λ_filho, ou T_pai >> T_filho): como o núcleo pai decai a um ritmo quase impercetível ao longo de décadas ou milénios (sua atividade permanece essencialmente constante durante a observação clínica), a taxa de produção de núcleos filhos equilibra-se exatamente com a sua taxa de desintegração: λ_pai · N_pai = λ_filho · N_filho => A_pai = A_filho. Uma vez atingido o equilíbrio secular (após cerca de 7 meias-vidas do filho), a atividade do radionuclídeo filho permanece constante e igual à do pai.",
    "distractorAnalysis": [
      "Está incorreta: o equilíbrio secular exige $T_{pai} \\gg T_{filho}$ (como 226Ra/222Rn), situação em que o decaimento do pai é negligenciável no intervalo clínico e a atividade do filho atinge o valor da do pai: $A_f = A_p$.",
      "Está incorreta: se $T_{pai} = T_{filho}$, não há equilíbrio secular e a atividade total nunca duplica continuamente; o número de átomos decai monotonamente.",
      "Está incorreta: o equilíbrio secular decorre das equações diferenciais cinéticas de Bateman e independe do tipo corpuscular de radiação emitida pelos nuclídeos."
    ],
    "nursingApplication": "O equilíbrio secular é a base da calibração de fontes padrão de referência utilizadas no controlo diário de qualidade dos ativímetros de dose pelos serviços hospitalares: fontes de Césio-137 (T_1/2 = 30 anos) em equilíbrio com Bário-137m (T_1/2 = 2,55 min) fornecem uma taxa de atividade perfeitamente estável e previsível ano após ano para o enfermeiro aferir a precisão dos instrumentos de medição."
  },
  {
    "id": 8034,
    "topicId": 8,
    "question": "Qual é o mecanismo biofísico pelo qual o radioisótopo Carbono-14 (¹⁴C, T₁/₂ ≈ 5730 anos) é incorporado em todos os tecidos dos seres vivos e por que motivo cessa essa assimilação após a morte biológica?",
    "options": [
      "É absorvido do solo exclusivamente pelas raízes de plantas carnívoras através de transporte ativo de minerais radioativos; após a morte celular, o carbono-14 volatiliza-se instantaneamente sob a forma de metano gasoso inerte.",
      "É sintetizado nos pulmões humanos através da fusão nuclear de átomos de hidrogénio e azoto inspirados do ar ambiente; após a morte clínica, a temperatura corporal arrefece e converte o carbono-14 em diamante microscópico.",
      "É produzido na alta atmosfera por neutrões cósmicos e incorporado nos seres vivos via fotossíntese e cadeia alimentar em proporção constante; após a morte, a assimilação cessa e a fração de carbono-14 decai exponencialmente.",
      "O carbono-14 é gerado pelo metabolismo anaeróbio das mitocôndrias durante o sono profundo; com a cessação da respiração celular, o isótopo reverte espontaneamente para carbono-12 por absorção de fotões solares."
    ],
    "correctIndex": 2,
    "explanation": "Na alta atmosfera, a radiação cósmica gera neutrões térmicos que transmutam o azoto: ¹⁴₇N + n -> ¹⁴₆C + p. O ¹⁴C incorpora-se no dióxido de carbono atmosférico (¹⁴CO₂). Todos os seres vivos que respiram e se alimentam mantêm uma razão ¹⁴C/¹²C em equilíbrio dinâmico constante com a biosfera (~1 átomo de ¹⁴C por cada 10¹² átomos de ¹²C). No instante da morte, o organismo cessa as trocas metabólicas com o meio ambiente: o 'relógio radiométrico' começa a contar, com a atividade de ¹⁴C a decair para metade a cada 5730 anos (técnica de datação por radiocarbono desenvolvida por Willard Libby, Prémio Nobel de 1960).",
    "distractorAnalysis": [
      "Está incorreta: o 14C forma-se na estratosfera pela reação 14N(n,p)14C, entra no ciclo do carbono como 14CO2 e mantém-se em equilíbrio dinâmico nos seres vivos até à morte, altura em que o decaimento ($T_{1/2}=5730$ anos) não é compensado.",
      "Está incorreta: o 14C distribui-se uniformemente por toda a biosfera terrestre e não apenas em plantas carnívoras, e o seu decaimento ocorre por emissão beta negativa para 14N estável.",
      "Está incorreta: o corpo humano não realiza reações de fusão nuclear nem converte carbono em diamantes após a morte; o processo é regido pelo decaimento radioativo natural."
    ],
    "nursingApplication": "Compreender o ciclo natural do Carbono-14 e a incorporação de traçadores nos ciclos metabólicos é o fundamento dos testes respiratórios com Carbono (como o teste respiratório da Ureia marcada com ¹³C ou ¹⁴C que o enfermeiro realiza para diagnosticar com alta precisão a infeção gástrica por Helicobacter pylori)."
  },
  {
    "id": 8035,
    "topicId": 8,
    "question": "Na utilização do Teste Respiratório com Ureia marcada com Carbono-14 (¹⁴C-Urea Breath Test) para diagnóstico da infeção por Helicobacter pylori no estômago, como funciona o princípio biofísico de deteção pelo enfermeiro?",
    "options": [
      "O carbono-14 liga-se irreversivelmente à parede celular da bactéria H. pylori no estômago, emitindo partículas beta que são detetadas por uma sonda externa de ultrassons colocada na pele do abdómen do doente.",
      "A cápsula de 14C-ureia dissolve-se no fígado e induz a secreção de bílis radioativa que altera a coloração da urina do doente para um tom fluorescente visível ao microscópio ótico na enfermaria.",
      "A bactéria absorve a ureia radioativa e sintetiza toxinas solúveis de azoto que diminuem a saturação periférica de oxigénio, sendo o diagnóstico confirmado pela queda imediata no oxímetro de pulso do paciente.",
      "A urease da bactéria H. pylori hidrolisa a 14C-ureia ingerida libertando amónia e 14CO2 gasoso que, absorvido pelo sangue, é exalado nos pulmões e quantificado em contador de cintilação com elevada sensibilidade diagnóstica."
    ],
    "correctIndex": 3,
    "explanation": "A bactéria Helicobacter pylori sobrevive no meio ácido do estômago sintetizando grandes quantidades da enzima urease. No teste clínico: o doente em jejum ingere uma microcápsula com urease marcada com dose diminuta de ¹⁴C (cerca de 37 kBq = 1 μCi, dose de radiação inofensiva equivalente a menos de 1 dia de radiação natural). Se houver infeção ativa por H. pylori, a urease bacteriana quebra a molécula: (¹⁴NH₂)₂CO + H₂O -> 2 NH₃ + ¹⁴CO₂. O ¹⁴CO₂ é absorvido no sangue e expelido pelos pulmões em 10 a 20 minutos: o doente sopra para dentro de um cartucho ou frasco com solução captadora de CO₂ que é depois lido num contador beta com precisão diagnóstica superior a 95%.",
    "distractorAnalysis": [
      "Está incorreta: as partículas beta de baixa energia do 14C (156 keV) têm alcance de frações de milímetro e não atravessam o corpo nem podem ser detetadas por ultrassons cutâneos.",
      "Está incorreta: o teste respiratório baseia-se na quantificação de 14CO2 no ar exalado e não na observação de bílis fluorescente ou de alterações na urina.",
      "Está incorreta: o teste não provoca dessaturação de oxigénio nem depende de oximetria de pulso; mede a atividade de 14C no ar alveolar expirado num cartucho próprio."
    ],
    "nursingApplication": "O teste da ureia marcada é um procedimento não-invasivo de rotina conduzido por enfermeiros em ambulatório e gastroenterologia: o enfermeiro orienta o doente a suspender antibióticos e inibidores da bomba de protões (omeprazol) com semanas de antecedência para evitar falsos negativos, e recolhe a amostra respiratória cronometrada com segurança e rapidez."
  },
  {
    "id": 8036,
    "topicId": 8,
    "question": "O radioisótopo Zinco-65 (⁶⁵Zn, T₁/₂ ≈ 244 dias) é amplamente utilizado como radiotraçador em investigação do metabolismo de micronutrientes. Do ponto de vista de famílias nucleares, como se relaciona o Zinco-65 (⁶⁵₃₀Zn) com o Cobre-65 (⁶⁵₂₉Cu)?",
    "options": [
      "São isóbaros, pois partilham rigorosamente o mesmo Número de Massa A = 65 (mesma soma de protões e neutrões no núcleo), mas possuem diferentes Números Atómicos (Z = 30 para o zinco e Z = 29 para o cobre).",
      "São isótopos, dado que pertencem à mesma família de metais de transição e partilham a mesma reatividade química e farmacocinética quando administrados sob a forma de oligoelementos essenciais na nutrição entérica.",
      "São isótonos, visto que apresentam o mesmo número de neutrões no interior da sua estrutura atómica fundamental, diferindo unicamente na carga elétrica total da sua nuvem eletrónica periférica envolvente.",
      "São isómeros nucleares metaestáveis, possuindo ambos o mesmo arranjo quântico de eletrões e diferindo apenas na taxa de condutividade térmica quando submetidos a variações de temperatura atmosférica hospitalar."
    ],
    "correctIndex": 0,
    "explanation": "O Zinco-65 possui Z = 30 protões e A = 65 nucleões (número de neutrões N = 65 - 30 = 35). O Cobre-65 possui Z = 29 protões e A = 65 nucleões (número de neutrões N = 65 - 29 = 36). Como partilham rigorosamente o mesmo número de massa A = 65 mas diferem nos números atómicos Z e no número de neutrões N, classificam-se inequivocamente como ISÓBAROS. Quando o ⁶⁵Zn decai por captura eletrónica ou emissão β⁺, transmuta-se no seu isóbaro estável ⁶⁵Cu.",
    "distractorAnalysis": [
      "Está incorreta: isótopos têm o mesmo número atómico Z (pertencem ao mesmo elemento); Zn e Cu são elementos químicos diferentes com $Z=30$ e $Z=29$, respetivamente.",
      "Está incorreta: o número de neutrões no 65Zn é $65 - 30 = 35$, enquanto no 65Cu é $65 - 29 = 36$; como têm diferente número de neutrões, não são isótonos.",
      "Está incorreta: isómeros nucleares são estados excitados do mesmo núcleo (mesmo Z e mesmo A, como 99mTc e 99Tc); Zn-65 e Cu-65 são nuclídeos de elementos distintos com mesmo A (isóbaros)."
    ],
    "nursingApplication": "O conhecimento das relações isobáricas e dos produtos de transmutação é a base da farmacocinética de radioisótopos: permite antecipar a transformação metabólica dos elementos e a sua eliminação segura pelos órgãos em estudos nutricionais e toxicológicos."
  },
  {
    "id": 8037,
    "topicId": 8,
    "question": "O Iodo-125 (¹²⁵I) e o Iodo-131 (¹³¹I) são ambos isótopos radioativos do mesmo elemento químico iodo. Contudo, em braquiterapia da próstata utilizam-se sementes de ¹²⁵I e NUNCA de ¹³¹I. Qual é a razão biofísica e dosimétrica determinante para esta escolha?",
    "options": [
      "O iodo-125 decai sem produzir qualquer tipo de ionização nos tecidos corporais, enquanto o iodo-131 induz a combustão espontânea da gordura periprostática devido à produção excessiva de calor térmico local no bloco operatório.",
      "O iodo-125 emite fotões de muito baixa energia (~27 a 35 keV) e tem semivida mais longa (~60 dias), confinando a dose à próstata; o iodo-131 emite partículas beta e gamas penetrantes de 364 keV que lesariam a bexiga e o reto vizinhos.",
      "As sementes de iodo-125 são feitas de ouro maleável biocompatível com o parênquima celular, enquanto o iodo-131 só pode ser formulado sob a forma de pó explosivo altamente corrosivo para os tecidos da próstata do doente.",
      "O iodo-131 é um emissor alfa puro cujo alcance micrométrico microscópico seria insuficiente para ultrapassar a membrana dos folículos glandulares, impedindo a irradiação das células cancerosas circundantes no órgão."
    ],
    "correctIndex": 1,
    "explanation": "Na braquiterapia prostática permanente com implante de sementes definitivas: o objetivo clínico é depositar uma dose curativa colossal (~145 Gy) dentro da cápsula prostática, com queda abrupta da dose a zero na parede anterior do reto e no esfíncter uretral situados a escassos milímetros. Os fotões de baixa energia do ¹²⁵I (~28 keV) têm uma Camada Hemirredutora tecidual de apenas ~2 cm, sendo atenuados quase integralmente no interior da próstata. Se fossem usadas sementes de ¹³¹I, os fotões gama penetrantes de 364 keV atravessariam a bacia do doente, causando proctite actínica hemorrágica severa e irradiando o ambiente domiciliar.",
    "distractorAnalysis": [
      "Está incorreta: o 125I emite fotões de baixa energia (27-35 keV) que são absorvidos a curta distância, garantindo alta dose na próstata com proteção dos órgãos de risco (reto e bexiga); o 131I emite radiação penetrante inadequada para braquiterapia permanente.",
      "Está incorreta: a radiação ionizante não provoca combustão de tecidos; o dano celular decorre de radicais livres e quebras de DNA induzidas pelas radiações sem aquecimento térmico.",
      "Está incorreta: o 131I decai por emissão $\\beta^-$ e $\\gamma$, não sendo emissor alfa nem pó explosivo; as sementes de 125I são cilindros de titânio selados a laser."
    ],
    "nursingApplication": "O conhecimento da baixa energia e penetração confinada do Iodo-125 permite ao enfermeiro tranquilizar os doentes e cuidadores na alta pós-braquiterapia prostática: a radiação que escapa do corpo para o exterior da pele é mínima (<2-5 μSv/h em contacto pélvico), exigindo apenas cuidados simples de precaução temporária com crianças ao colo nas primeiras semanas."
  },
  {
    "id": 8038,
    "topicId": 8,
    "question": "O radioisótopo Criptónio-81m (⁸¹ᵐKr) possui uma semivida física ultracurta de apenas 13 segundos. Como é possível utilizar clinicamente um radiofármaco que decai para metade em 13 segundos num hospital?",
    "options": [
      "É armazenado em garrafas metálicas pressurizadas de aço maciço nos armazéns centrais do hospital, mantendo a sua radioatividade inalterada durante vários anos graças ao isolamento térmico por nitrogénio líquido.",
      "O enfermeiro injeta o radioisótopo diretamente numa veia central profunda com uma seringa comum de plástico, cronometrando exactamente treze segundos de infusão rápida para evitar o decaimento extracorporal do gás.",
      "É obtido de forma contínua a partir de um gerador hospitalar de rubídio-81 (T1/2 = 4,6 horas): o gás 81mKr é eluído por um fluxo de ar ou oxigénio que passa pela coluna diretamente para a máscara do doente em tempo real.",
      "O radiofármaco é formulado sob a forma de xarope oral administrado com uma colher de medida, sendo absorvido pelo estômago e transportado para a circulação brônquica antes de ocorrer qualquer decaimento radioativo físico."
    ],
    "correctIndex": 2,
    "explanation": "Seria impossível transportar e armazenar um isótopo de 13 segundos de meia-vida. A solução da física nuclear é o gerador ⁸¹Rb/⁸¹ᵐKr: o Rubídio-81 (T_1/2 = 4,58 h) decai continuamente na coluna geradora para o isómero metaestável Criptónio-81m (T_1/2 = 13 s). Ao conectar uma linha de ar medicinal ou oxigénio a passar pela coluna, o gás nobre ⁸¹ᵐKr é arrastado no fluxo respiratório diretamente para as vias aéreas do doente: atinge o equilíbrio de ventilação instantâneo nos alvéolos e decai para o estado fundamental estável (⁸¹Kr) em menos de 1 minuto, permitindo imagens de ventilação perfeitas com dose de radiação quase nula para o doente.",
    "distractorAnalysis": [
      "Está incorreta: o decaimento nuclear não pode ser desacelerado por nitrogénio líquido ou pressão mecânica; 13 segundos de semivida extinguem a atividade em poucos minutos sem gerador ativo.",
      "Está incorreta: o 81mKr é um gás administrado por via inalatória na ventilação pulmonar; a injeção intravenosa rápida não seria viável nem permitiria avaliar a ventilação alveolar.",
      "Está incorreta: o criptónio é um gás inerte e não um fármaco enteral formulado em xarope de absorção digestiva."
    ],
    "nursingApplication": "O sistema de ventilação com ⁸¹ᵐKr ilustra o pico da segurança em enfermagem: a semivida de 13 segundos garante que, no segundo em que o doente retira a máscara inalatória, a radioatividade residual nos seus pulmões e no ar do quarto desvanece-se em escassos minutos, permitindo a transição imediata para a fase seguinte do exame sem qualquer contaminação do ambiente de trabalho."
  },
  {
    "id": 8039,
    "topicId": 8,
    "question": "A eficácia biológica da Terapia com Radionuclídeos Alvo (Targeted Radionuclide Therapy - TRT) baseia-se no conceito de 'Vetor e Carga Útil' (Vector and Payload). Qual é o papel desempenhado pelo 'Vetor' biológico?",
    "options": [
      "Desacelerar o fluxo sanguíneo local no interior dos vasos tumorais através de vasoconstrição mecânica forçada, impedindo que os glóbulos vermelhos transportem nutrientes para as células malignas em divisão ativa.",
      "Emitir feixes contínuos de ultrassons de alta frequência que rompem a membrana plasmática das células tumorais por cavitação acústica sem necessidade de intervenção do radionuclídeo emissor de radiação.",
      "Atuar como um agente anestésico local potente que dessensibiliza as terminações nervosas pericapsulares, eliminando totalmente a dor oncológica antes de ser absorvido pelo parênquima celular das metástases.",
      "Reconhecer com altíssima especificidade e afinidade recetores membranares ou antigénios expressos pelas células tumorais, transportando a carga citotóxica radioativa para a lesão e poupando os tecidos saudáveis normais."
    ],
    "correctIndex": 3,
    "explanation": "Na farmacologia nuclear moderna, a molécula teranóstica é desenhada como um míssil guiado molecular composto por três partes: 1) O VETOR (um anticorpo monoclonal, peptídeo ou pequena molécula ligante) que procura e tranca-se especificamente no recetor superexpresso na superfície das células cancerígenas; 2) O QUELANTE (como o DOTA ou NOTA), uma 'gaiola química' que aprisiona firmemente o ião metálico radioativo; 3) A CARGA ÚTIL (payload), que é o radionuclídeo emissor de radiação citotóxica (como o ¹⁷⁷Lu ou ²²⁵Ac) que destrói o DNA do tumor a partir de dentro.",
    "distractorAnalysis": [
      "Está incorreta: o vetor (ex.: anticorpos, péptidos como o DOTA-TATE ou ligantes de PSMA) tem como função o reconhecimento molecular específico de alvos na célula cancerosa para depositar a radiação seletivamente.",
      "Está incorreta: o vetor biológico atua por ligação bioquímica a recetores e não por indução de vasoconstrição mecânica ou paragem vascular.",
      "Está incorreta: os vetores não emitem ultrassons nem funcionam por cavitação; o mecanismo citotóxico decorre das quebras no DNA provocadas pela radiação ionizante acoplada (a carga útil)."
    ],
    "nursingApplication": "A especificidade do vetor molecular confere à teranóstica uma seletividade extraordinária incomparável com a quimioterapia clássica convencional: os doentes toleram habitualmente os ciclos de Lutécio-177 ou Actínio-225 sem queda de cabelo (alopecia) e com muito menor incidência de náuseas graves, cabendo ao enfermeiro reforçar a adesão ao tratamento e a hidratação profilática."
  },
  {
    "id": 8040,
    "topicId": 8,
    "question": "Na gestão de doentes idosos internados que realizam exames de Medicina Nuclear e que se encontram medicados com Diuréticos de ansa (como a furosemida), como interage este fármaco com a biodistribuição de radioisótopos de excreção renal (como o ⁹⁹ᵐTc-MDP ou ⁹⁹ᵐTc-MAG3)?",
    "options": [
      "Acelera a filtração e excreção urinária do radiofármaco livre, reduzindo a meia-vida biológica e o ruído em tecidos moles, mas exigindo vigilância do enfermeiro para prevenir incontinência radioativa e desidratação.",
      "Inibe a filtração glomerular renal, bloqueando o radiofármaco na circulação venosa durante várias semanas e forçando a sua eliminação exclusiva através da respiração e da sudação cutânea na enfermaria.",
      "Provoca a precipitação imediata do radiofármaco sob a forma de cristais maciços de chumbo nos túbulos coletores renais, provocando anúria obstrutiva aguda irreversível em todos os doentes medicados.",
      "Neutraliza a emissão gama do tecnécio-99m através da alcalinização forçada da urina, permitindo o descarte dos fluidos biológicos no circuito geral de esgotos sem necessidade de retenção hospitalar."
    ],
    "correctIndex": 0,
    "explanation": "A furosemida atua na ansa de Henle inibindo o cotransportador Na⁺-K⁺-2Cl⁻, provocando uma diurese aquosa e salina massiva rápida. Isto tem um duplo impacto: 1) Efeito hidrodinâmico favorável: o fluxo urinário acelerado lava rapidamente o radiofármaco livre residual que não se fixou nos tecidos, diminuindo a dose absorvida pela bexiga e aumentando a relação sinal/ruído da imagem cintigráfica; 2) Risco clínico de enfermagem: a diurese copiosa enche a bexiga em minutos, podendo provocar episódios súbitos de incontinência em doentes com mobilidade reduzida, além de desidratação e hipotensão arterial.",
    "distractorAnalysis": [
      "Está incorreta: a furosemida é um diurético potente que aumenta (e não inibe) a excreção urinária; os radiofármacos hidrossolúveis não são eliminados pela respiração.",
      "Está incorreta: os radiofármacos não contêm chumbo nem precipitam em cristais obstrutivos nas doses traçadoras habituais administradas em medicina nuclear.",
      "Está incorreta: o decaimento radioativo nuclear é totalmente imune a variações do pH urinário; a alcalinização não anula a emissão fotónica de 140 keV."
    ],
    "nursingApplication": "No protocolo de renograma com furosemida (MAG3-Furosemida), o enfermeiro programa a administração do diurético no minuto exato prescrito (habitualmente 15 a 20 minutos após o radiofármaco), garante acesso imediato à arrastadeira ou casa de banho e apoia o doente no levante para prevenir quedas por hipotensão ortostática."
  },
  {
    "id": 8041,
    "topicId": 8,
    "question": "Qual das seguintes famílias de radionuclídeos inclui o Hidrogénio-1 (¹₁H, prótio estável), o Hidrogénio-2 (²₁H, deutério estável) e o Hidrogénio-3 (³₁H, trítio radioativo)?",
    "options": [
      "São isóbaros, visto que partilham a mesma massa molar absoluta e o mesmo número quântico principal em todas as reações químicas orgânicas em que participam nos organismos vivos terrestres.",
      "São isótopos do elemento hidrogénio, dado que partilham o mesmo número atómico Z = 1 (mesmo número de protões), diferindo unicamente na presença de 0, 1 e 2 neutrões nos seus respetivos núcleos atómicos.",
      "São isótonos, apresentando rigorosamente a mesma quantidade de neutrões no seu núcleo interior e diferindo apenas no número de eletrões em órbita ao redor do núcleo do átomo no espaço circundante.",
      "São isómeros nucleares de alta energia, representando o mesmo estado metaestável do hidrogénio excitado por absorção prévia de fotões solares ultravioleta na troposfera terrestre exterior."
    ],
    "correctIndex": 1,
    "explanation": "O hidrogénio é o exemplo clássico da física atómica: 1) Prótio (¹H): Z=1, A=1, N=0 (um protão isolado com um elétrão, compõe 99,98% de todo o hidrogénio natural); 2) Deutério (²H ou D): Z=1, A=2, N=1 (estável, utilizado na água pesada D₂O como moderador em reatores nucleares); 3) Trítio (³H ou T): Z=1, A=3, N=2 (radioativo, emissor beta puro de muito baixa energia com T₁/₂ ≈ 12,3 anos). Por possuírem todos rigorosamente Z = 1 protão, são inequivocamente ISÓTOPOS do elemento químico Hidrogénio.",
    "distractorAnalysis": [
      "Está incorreta: prótio (1H), deutério (2H) e trítio (3H) são isótopos do hidrogénio: todos têm $Z=1$, mas com $A=1$, $A=2$ e $A=3$ devido à variação de neutrões (0, 1 e 2).",
      "Está incorreta: como possuem números de massa A diferentes (1, 2 e 3), não são isóbaros (que por definição têm o mesmo A).",
      "Está incorreta: têm números de neutrões diferentes ($0, 1, 2$) e, portanto, não podem ser classificados como isótonos."
    ],
    "nursingApplication": "O trítio (³H) é amplamente utilizado em investigação biomédica molecular na rotulagem de timidina tritiada para quantificar a proliferação de células estaminais e cicatrização de feridas em modelos experimentais de enfermagem baseada na evidência."
  },
  {
    "id": 8042,
    "topicId": 8,
    "question": "Na determinação do volume sanguíneo circulante e da volemia em doentes críticos com choque hipovolémico ou queimaduras extensas, qual é o método radioisotópico de 'Diluição de Traçadores' clássico utilizado em medicina nuclear?",
    "options": [
      "Administração de suspensão oral de bário insolúvel e quantificação do tempo necessário para o corante atravessar o piloro gástrico através de radioscopia contínua de raios X no leito do doente em choque.",
      "Inalação forçada de monóxido de carbono radioativo puro em câmara selada até induzir cianose labial transitória, calculando o volume ventricular a partir do grau de saturação das artérias femorais periféricas.",
      "Injeção de uma atividade conhecida de hemácias marcadas com crómio-51 para a massa globular ou albumina com iodo-125 para o volume plasmático, aplicando a relação de conservação mássica: $V_{total} = \\frac{A_{injetada}}{C_{amostrada}}$.",
      "Instilação retal de água pesada marcada com trítio e medição da condutividade elétrica da pele do antebraço após vinte e quatro horas de sudação forçada em ambiente aquecido a quarenta graus Celsius."
    ],
    "correctIndex": 2,
    "explanation": "O princípio da diluição de traçadores de George de Hevesy (Prémio Nobel de 1943) é a forma mais precisa e elegante de medir volumes corporais inacessíveis: injeta-se uma quantidade estritamente conhecida de radiofármaco marcador intravascular (C₁ · V₁). Deixa-se o traçador homogeneizar-se perfeitamente em toda a circulação sanguínea durante 10 a 20 minutos e colhe-se uma amostra de sangue periférico medindo a sua concentração radioativa (C₂). Pela conservação da atividade: C₁ · V₁ = C₂ · V_total => V_total = (C₁ · V₁) / C₂. Permite determinar a volemia real com exatidão milimétrica sem estimativas empíricas.",
    "distractorAnalysis": [
      "Está incorreta: o bário é um contraste radiológico opaco não absorvível para o trato digestivo, incapaz de medir a volemia intravascular sanguínea.",
      "Está incorreta: inalar monóxido de carbono radioativo até à cianose é extremamente perigoso e tóxico; a volemia avalia-se por amostragem sanguínea e contagem de radioatividade em poço gama.",
      "Está incorreta: métodos retais de sudação com água tritiada não medem a volemia intravascular plasmática de urgência em choque circulatório."
    ],
    "nursingApplication": "O enfermeiro garante a colheita precisa da amostra de sangue cronometrada no braço CONTRALATERAL ao da injeção do radiotraçador (para evitar colher sangue contaminado com o bólus local inicial) e registra o valor exato do hematócrito para cálculo da volemia circulante na gestão intensiva de fluidoterapia do doente crítico."
  },
  {
    "id": 8043,
    "topicId": 8,
    "question": "O radioisótopo Actínio-225 (²²⁵Ac, T₁/₂ ≈ 9,9 dias) está na vanguarda da terapia oncológica como um 'Nanogerador Alfa Atómico'. Por que motivo o Actínio-225 é considerado tão potente contra micrometástases tumorais?",
    "options": [
      "Decai emitindo feixes de micro-ondas de alta intensidade que fervem instantaneamente o citoplasma das células malignas circundantes sem tocar na membrana celular das células vizinhas normais do estroma.",
      "Atua como um potente catalisador químico oxidativo que remove todos os átomos de hidrogénio da água celular, provocando a desidratação espontânea das micrometástases tumorais no organismo.",
      "O actínio-225 atrai magneticamente os eletrões do microambiente tumoral, criando uma carga eletrostática positiva intensa que despolariza irreversivelmente os vasos sanguíneos neoformados.",
      "A sua cascata de decaimento gera sucessivamente quatro partículas alfa energéticas por cada átomo inicial decaído (libertando quase 28 MeV de energia citotóxica em quebras duplas de DNA no raio celular do tumor)."
    ],
    "correctIndex": 3,
    "explanation": "O Actínio-225 é denominado um 'nanogerador de partículas alfa': decai através de uma cadeia radioativa rápida gerando Frâncio-221 (emissor alfa), Ástato-217 (emissor alfa), Bismuto-213 (emissor alfa/beta) e Polónio-213 (emissor alfa). No total, a cadeia de desintegração de um único núcleo de ²²⁵Ac dispara 4 partículas alfa consecutivas de altíssimo LET (~6 a 8 MeV cada), depositando uma dose concentrada avassaladora de quase 28 MeV em escassos diâmetros celulares. É capaz de erradicar micrometástases de cancro da próstata resistentes a todas as outras modalidades terapêuticas.",
    "distractorAnalysis": [
      "Está incorreta: o 225Ac é apelidado de nanogerador alfa atómico porque decai através de uma cadeia com 4 emissões alfa sucessivas (225Ac $\to$ 221Fr $\to$ 217At $\to$ 213Bi $\to$ 209Pb), depositando quase 28 MeV no raio microscópico tumoral.",
      "Está incorreta: a radiobiologia do 225Ac baseia-se na densa ionização e quebras de DNA de dupla cadeia provocadas pelas partículas alfa e não na produção de calor térmico ou micro-ondas.",
      "Está incorreta: o dano é induzido por radiação corpuscular alfa ionizante de alto LET e não por reações químicas macroscópicas de desidratação forçada ou forças eletrostáticas."
    ],
    "nursingApplication": "Na administração de ²²⁵Ac-PSMA pelo enfermeiro em unidades de oncologia de precisão, o controlo da toxicidade nas glândulas salivares (xerostomia / boca seca provocada pela fixação fisiológica do PSMA nas parótidas) é uma intervenção prioritária: aplicar gelo local (crioterapia com bolsas térmicas nas bochechas durante e após a infusão) para provocar vasoconstrição e diminuir a captação do radiofármaco na saliva."
  },
  {
    "id": 8044,
    "topicId": 8,
    "question": "O conceito de 'Meia-Vida Física' (T_1/2) de um radioisótopo é uma propriedade nuclear intrínseca e imutável. Quais são os fatores externos (temperatura, pressão atmosférica, gravidade ou reações químicas) que conseguem alterar ou acelerar o tempo de meia-vida física de um núcleo radioativo?",
    "options": [
      "Nenhum fator físico ou químico convencional humano: a constante de decaimento (\\lambda) e a meia-vida física são rigorosamente invariáveis perante variações de temperatura, pressão, gravidade ou reações químicas ordinárias.",
      "A exposição da amostra a elevadas temperaturas em fornos industriais acelera o decaimento em mais de cem vezes, permitindo a descontaminação rápida de materiais no autoclave hospitalar.",
      "A submissão do frasco do radiofármaco a campos magnéticos intensos na ressonância magnética desacelera o decaimento físico, preservando a atividade nuclear da dose durante semanas a fio.",
      "A reação com agentes oxidantes fortes neutraliza as forças nucleares fortes no núcleo atómico, transformando os radioisótopos em elementos químicos estáveis em poucos minutos de contacto em solução."
    ],
    "correctIndex": 0,
    "explanation": "A desintegração radioativa espontânea é um processo governado pelas forças nucleares profunda no interior do núcleo atómico (energias de escala de MeV). As energias das reações químicas mais violentas ou de variações de temperatura biológica (0 a 100 °C) situam-se na escala microscópica de poucos eletrão-volts (eV) na nuvem eletrónica periférica — uma diferença de escala energética de um milhão de vezes! Portanto, ferver, queimar, congelar, pressurizar ou combinar quimicamente o radioisótopo com qualquer ácido ou base NÃO altera em rigorosamente nada a sua meia-vida física.",
    "distractorAnalysis": [
      "Está incorreta: o calor de autoclaves ou fornos afeta apenas as ligações moleculares químicas externas; as energias nucleares envolvidas são ordens de grandeza superiores às energias térmicas ordinárias.",
      "Está incorreta: campos magnéticos clínicos (como 1,5T ou 3T de RM) não alteram a constante de decaimento nuclear dos radionuclídeos.",
      "Está incorreta: reações de oxidação-redução alteram apenas a configuração dos eletrões de valência periféricos, deixando a estrutura e estabilidade do núcleo atómico intactas."
    ],
    "nursingApplication": "Este princípio é basilar na gestão de resíduos hospitalares pelo enfermeiro: nunca tentar esterilizar resíduos radioativos na autoclave com o intuito de 'eliminar a radioatividade'. A autoclave destrói bactérias biológicas, mas a radioatividade continuará a decair no seu ritmo natural invariável, devendo o tempo de armazenamento ser rigorosamente cumprido."
  },
  {
    "id": 8045,
    "topicId": 8,
    "question": "Na cintigrafia pulmonar de perfusão, os 'Macroagregados de Albumina Humana marcados com Tecnécio-99m' (⁹⁹ᵐTc-MAA) são injetados por via intravenosa. Qual é o mecanismo biofísico de fixação destas partículas nos pulmões?",
    "options": [
      "Os agregados de albumina ligam-se covalentemente aos recetores de surfactante no epitélio alveolar através de uma reação antigénio-anticorpo que imobiliza o traçador nas paredes dos brônquios principais.",
      "As partículas têm diâmetro calibrado (10 a 90 micrómetros) superior ao lúmen dos capilares pulmonares normais (~8 \\mu m), ficando retidas por microembolização mecânica transitória benigna em proporção ao fluxo sanguíneo regional.",
      "As partículas de tecnécio dissolvem-se instantaneamente na membrana alveolar por transporte ativo dependente de insulina, penetrando no espaço aéreo expirado onde são detetadas por capnografia radioativa.",
      "A fixação decorre da atração eletrostática entre a albumina carregada positivamente e o ferro existente na hemoglobina dos glóbulos vermelhos desoxigenados nas veias pulmonares pós-capilares."
    ],
    "correctIndex": 1,
    "explanation": "O ⁹⁹ᵐTc-MAA baseia-se numa microembolização biológica transitória perfeitamente segura e controlada: o organismo humano possui cerca de 280 mil milhões de capilares pulmonares. Ao injetar cerca de 200.000 a 500.000 partículas microscópicas de albumina calibradas com 10 a 90 μm, menos de 1 em cada 100.000 capilares fica momentaneamente ocluído na primeira passagem pelo leito vascular pulmonar. A distribuição das partículas reflete com precisão matemática a perfusão arterial pulmonar. Ao fim de 4 a 8 horas, as enzimas plasmáticas degradam a albumina biodegradável, desobstruindo os capilares sem qualquer sequela respiratória.",
    "distractorAnalysis": [
      "Está incorreta: o MAA é injetado por via intravenosa no sangue e não inalado na árvore brônquica, não se ligando ao surfactante nem dependendo de anticorpos.",
      "Está incorreta: as partículas ficam impactadas no lúmen capilar pré-alveolar sem atravessar para o ar alveolar nem serem expelidas na expiração.",
      "Está incorreta: o mecanismo não é eletrostático com a hemoglobina, mas sim puramente mecânico por discrepância de diâmetro (partículas de 10-90 $\\mu$m versus capilares de 7-10 $\\mu$m)."
    ],
    "nursingApplication": "Ao administrar ⁹⁹ᵐTc-MAA em doentes acamados, o enfermeiro sabe que a gravidade afeta a perfusão pulmonar (zonas de West): o doente deve permanecer em decúbito dorsal horizontal durante a injeção para assegurar uma distribuição uniforme do fluxo sanguíneo dos ápices às bases pulmonares, e nunca agitar a seringa com sangue aspirado para não criar macrocoágulos antes da injeção."
  },
  {
    "id": 8046,
    "topicId": 8,
    "question": "O radioisótopo Ouro-198 (¹⁹⁸Au, T₁/₂ ≈ 2,7 dias, emissor beta e gama) foi amplamente utilizado no tratamento de derrames cavitários malignos (ascite carcinomatosa e derrame pleural neoplásico). Como era administrado este coloide radioativo pela equipa de enfermagem e médica?",
    "options": [
      "Por inalação forçada através de um nebulizador ultrassónico de aerossóis contínuos na enfermaria comum, mantendo o doente sentado em posição de Fowler durante oito horas consecutivas.",
      "Por via intravenosa em bólus periférico rápido através de um cateter venoso fino colocado no dorso da mão, aguardando que o ouro radioativo difunda passivamente para a cavidade pleural através dos poros da aorta.",
      "Por instilação intracavitária direta na cavidade peritoneal ou pleural (após paracentese ou toracocentese), mobilizando o doente em vários decúbitos para distribuir o coloide de forma homogénea sobre toda a serosa.",
      "Por aplicação tópica de pensos impregnados em ouro radioativo sobre a pele do tórax, promovendo a absorção transdérmica contínua da radiação beta ao longo de várias semanas de internamento no serviço."
    ],
    "correctIndex": 2,
    "explanation": "O Ouro-198 coloidal foi o precursor histórico da terapia intracavitária: o coloide de ouro não atravessa a membrana serosa para a circulação sistémica, permanecendo confinado à cavidade peritoneal ou pleural. A emissão de partículas beta negativas de alta energia irradiava a superfície das células neoplásicas e mesoteliais disseminadas, induzindo fibrose e esclerose da serosa, cessando a produção exsudativa contínua de líquido ascítico ou pleural carcinomatoso refratário.",
    "distractorAnalysis": [
      "Está incorreta: a nebulização geraria aerossóis radioativos perigosos de ouro coloidal no ar ambiente da enfermaria e não alcançaria a cavidade pleural ou peritoneal.",
      "Está incorreta: se administrado por via venosa sistémica, o coloide seria captado pelos macrófagos de Kupffer no fígado e no baço e não na serosa pleural ou peritoneal.",
      "Está incorreta: partículas beta não possuem penetração transdérmica suficiente para tratar a pleura ou o peritoneu a partir da pele; a administração exige acesso intracavitário."
    ],
    "nursingApplication": "Na instilação de radiofármacos intracavitários, o enfermeiro executa o protocolo de rotação postural do doente no leito a cada 15 a 30 minutos (decúbito dorsal, decúbito lateral direito, decúbito lateral esquerdo e posição semi-sentada): esta mobilização sequencial permite que o líquido radioativo banhe por gravidade todas as goteiras e recessos da cavidade serosa de forma perfeitamente homogénea."
  },
  {
    "id": 8047,
    "topicId": 8,
    "question": "A 'Câmara Quente' de um serviço de Medicina Nuclear é o laboratório altamente especializado e protegido onde se processam e preparam as doses de radiofármacos. Quais são os equipamentos de segurança e radioproteção primários manipulados pelo enfermeiro nesta área?",
    "options": [
      "Aventais de algodão simples esterilizados a vapor em autoclave, bisturis cirúrgicos de corte fino para perfuração manual de frascos e lâmpadas incandescentes comuns de iluminação de bancada clínica.",
      "Campânulas de acrílico transparente desprovidas de blindagem com ventiladores de exaustão abertos diretamente para o corredor de circulação de doentes e visitantes do piso hospitalar de internamento.",
      "Centrifugadoras industriais abertas para separação mecânica rápida de soluções radioativas líquidas sem qualquer contenção de aerossóis ou barreiras plúmbeas de atenuação radiológica na sala.",
      "Câmara de fluxo laminar com vidro plumbífero e castelo de chumbo, ativímetro calibrador de doses de poço, pinças de manipulação à distância, protetores de seringa blindados e monitores de contaminação na saída."
    ],
    "correctIndex": 3,
    "explanation": "A câmara quente (radiopharmacy hot lab) é o coração da proteção radiológica em medicina nuclear: combina a proteção asséptica do fármaco injetável (fluxo laminar estéril Classe A) com a blindagem física pesada contra radiações para os profissionais (biombos frontais de vidro plumbífero espesso de 5 cm e blocos de tijolo de chumbo intertravados). Todas as manipulações de frascos com atividades de Gigabecquerels são realizadas com pinças mecânicas longas para maximizar a distância (d² na Lei do Inverso do Quadrado), e cada profissional monitoriza obrigatoriamente as mãos e calçado no portal radiométrico à saída da câmara quente.",
    "distractorAnalysis": [
      "Está incorreta: aventais de algodão e manipulação manual direta sem blindagem violam frontalmente os princípios de biossegurança e radioproteção.",
      "Está incorreta: o ar da câmara quente é filtrado por filtros absolutos HEPA e carvão ativado antes da rejeição controlada para a atmosfera e nunca expelido para corredores hospitalares.",
      "Está incorreta: a manipulação aberta sem proteção ou centrifugação desprotegida geraria contaminação radioativa severa por salpicos e aerossóis ativos."
    ],
    "nursingApplication": "O trabalho seguro na câmara quente exige rigor quase cirúrgico e destreza do enfermeiro: planear antecipadamente todos os movimentos com fontes cegas para executar a eluição, marcação do kit, dosagem no ativímetro e rotulagem no menor tempo possível (princípio do Tempo) mantendo a maior distância possível das fontes abertas."
  },
  {
    "id": 8048,
    "topicId": 8,
    "question": "O radioisótopo Rádio-226 (²²⁶Ra, emissor alfa e gama com T₁/₂ ≈ 1600 anos) foi historicamente utilizado por Marie Curie e médicos pioneiros no tratamento de tumores em tubos de agulha ('curieterapia'). Por que motivo o Rádio-226 foi totalmente abandonado e descontinuado na medicina moderna?",
    "options": [
      "Devido à sua semivida de 1600 anos com risco ambiental crónico nos resíduos e à produção de gás rádon-222 perigoso que podia vazar de agulhas fissuradas, tendo sido substituído por isótopos de semivida mais curta como 192Ir e 125I.",
      "Porque o rádio-226 perdeu espontaneamente a sua radioatividade em meados do século vinte devido a alterações no campo magnético terrestre, tornando-se incapaz de emitir radiação ionizante nos tecidos tumorais.",
      "Porque as agulhas de rádio-226 explodiam invariavelmente ao entrarem em contacto com o sangue humano em virtude de uma reação de combustão exotérmica descontrolada provocada pelo ferro plasmático.",
      "Devido ao facto de o rádio-226 emitir exclusivamente fotões de luz visível amarela que não produziam qualquer efeito biológico lesivo sobre as células dos carcinomas do colo do útero tratados."
    ],
    "correctIndex": 0,
    "explanation": "O Rádio-226 foi o primeiro elemento radioativo usado em braquiterapia clínica. Contudo, apresentava gravíssimos problemas de radioproteção: 1) A sua meia-vida de 1600 anos impossibilita qualquer desclassificação biológica de resíduos a curto prazo; 2) O seu produto filho imediato é o gás Rádon-222: a acumulação contínua de gás radioativo pressurizado dentro das agulhas de platina seladas provocava microfissuras e vazamento de gás letal nas enfermarias; 3) A emissão de fotões gama ultra-energéticos de até 2,2 MeV causava doses ocupacionais pesadíssimas em enfermeiros e cirurgiões. A medicina moderna substituiu-o integralmente por fontes de média/curta semivida com decaimento limpo.",
    "distractorAnalysis": [
      "Está incorreta: as propriedades nucleares não mudam com o campo magnético da Terra; a constante de decaimento do 226Ra permanece imutável.",
      "Está incorreta: as agulhas seladas de rádio não explodiam por combustão com ferro no sangue; o perigo residia na pressão interna acumulada de hélio e rádon e no risco de fissura mecânica.",
      "Está incorreta: o 226Ra e descendentes emitem radiação alfa de alta energia e gamas penetrantes altamente ionizantes e perigosos para o pessoal cuidador."
    ],
    "nursingApplication": "O estudo da história da curieterapia com Rádio-226 é uma lição permanente de radioproteção em enfermagem: demonstra como a evolução da física médica permitiu substituir agentes perigosos por radioisótopos biocompatíveis de alta precisão que salvam vidas minimizando a toxicidade ambiental."
  },
  {
    "id": 8049,
    "topicId": 8,
    "question": "No pós-tratamento de um doente submetido a cirurgia oncológica de tiroidectomia total seguida de radioiodoterapia com Iodo-131, qual é o biomarcador tumoral sérico que o enfermeiro monitoriza na consulta de seguimento para avaliar a remissão ou recidiva do cancro?",
    "options": [
      "O antigénio carcinoembrionário (CEA), que deve manter-se elevado acima de mil unidades por mililitro para indicar que o sistema imunitário do doente está a responder adequadamente ao radioisótopo administrado.",
      "A tiroglobulina sérica (Tg), que deve encontrar-se indetetável (<0,1 a 0,2 ng/mL) num doente curado cuja glândula tiroide e eventuais células neoplásicas foram totalmente erradicadas pela cirurgia e pelo iodo-131.",
      "A fosfatase ácida prostática (PAP), cuja medição seriada na circulação sanguínea confirma a ausência de disseminação metastática para as glândulas salivares e mucosas gástricas do doente tratado.",
      "O ácido úrico plasmático, que atua como marcador exclusivo da proliferação folicular da tiroide e reflete com rigor a destruição seletiva dos tecidos pelo tratamento com radioiodo metabólico oral."
    ],
    "correctIndex": 1,
    "explanation": "A Tiroglobulina (Tg) é uma grande glicoproteína precursora sintetizada exclusivamente pelas células foliculares da glândula tiroide (normais ou malignas). Se o doente foi submetido a cirurgia de remoção total da tiroide seguida da ablação radioisotópica dos restos tiroidianos com Iodo-131, não resta no organismo qualquer célula capaz de produzir tiroglobulina: o valor da Tg sérica deve cair para níveis indetetáveis. Qualquer elevação posterior da tiroglobulina no sangue do doente sinaliza a recidiva do cancro ou o crescimento de metástases à distância, indicando a necessidade de nova cintigrafia de corpo inteiro com ¹³¹I.",
    "distractorAnalysis": [
      "Está incorreta: o CEA é um marcador de tumores gastrointestinais e colorretais e níveis de 1000 ng/mL indicariam neoplasia metastática avançada e não resposta imune adequada.",
      "Está incorreta: a PAP é um marcador obsoleto de cancro da próstata e não tem qualquer aplicação no seguimento de carcinomas da tiroide.",
      "Está incorreta: o ácido úrico reflete o catabolismo das purinas e função renal, não sendo marcador tumoral de carcinomas diferenciados da tiroide."
    ],
    "nursingApplication": "Na consulta de enfermagem de seguimento ao doente com cancro da tiroide, o enfermeiro verifica os níveis de Tiroglobulina e anticorpos anti-tiroglobulina (anti-Tg), monitoriza a adesão à terapêutica de substituição hormonal com levotiroxina (para manter a TSH suprimida) e educa o doente a reconhecer precocemente qualquer nódulo palpável no pescoço."
  },
  {
    "id": 8050,
    "topicId": 8,
    "question": "A síntese biofísica de todos os radioisótopos utilizados na terapêutica médica assenta no princípio de que a matéria, nas suas menores escalas atómicas, é governada pela equivalência massa-energia e pelas forças nucleares. Qual é a principal missão do enfermeiro na administração destas terapias do século XXI?",
    "options": [
      "Limitar a sua intervenção exclusivamente ao ato mecânico de pressionar o êmbolo da seringa no braço do doente, abstendo-se de qualquer comunicação verbal ou esclarecimento educativo durante a sua permanência no serviço.",
      "Priorizar a contenção financeira dos custos operacionais do hospital através da eliminação da monitorização dosimétrica individual dos profissionais e do reaproveitamento de materiais descartáveis contaminados.",
      "Garantir a convergência entre o rigor da radioproteção (Justificação, Otimização ALARA e Limitação de Dose) e a excelência do cuidado humano centrado no doente, desmistificando medos e monitorizando toxicidades precoces.",
      "Delegar o acompanhamento dos doentes radioativos inteiramente em familiares desprotegidos, de modo a evitar que qualquer membro da equipa de enfermagem sofra qualquer nível de exposição ocupacional no serviço."
    ],
    "correctIndex": 2,
    "explanation": "A enfermagem em medicina nuclear e radioterapia é a ponte viva e indispensável entre a alta tecnologia física nuclear e o ser humano vulnerável que enfrenta uma patologia grave: o enfermeiro domina as grandezas dosimétricas, os tempos de decaimento, as propriedades de blindagem e as vias de excreção biológica para proteger a si próprio, à equipa e à sociedade contra a irradiação indevida, enquanto acolhe, escuta, esclarece as dúvidas do doente e da família, administra com perícia asséptica os radiofármacos e vigia com competência científica a resposta clínica e o conforto do doente.",
    "distractorAnalysis": [
      "Está incorreta: a relação terapêutica e a educação em saúde são pilares de enfermagem essenciais para diminuir a ansiedade e promover o cumprimento das regras de biossegurança.",
      "Está incorreta: a dosimetria individual e o material descartável são imperativos regulamentares de segurança que nunca podem ser sacrificados por motivos económicos.",
      "Está incorreta: a proteção de familiares (especialmente de populações vulneráveis) é da responsabilidade da equipa clínica; transferir o cuidado desprotegido para a família viola os princípios éticos e regulamentares."
    ],
    "nursingApplication": "Esta síntese coroa a formação de Biofísica para o 1.º Ano de Enfermagem: a ciência das radiações, forças nucleares, fluidos e mecânica dos materiais não é uma teoria abstrata de laboratório, mas sim o alicerce científico diário que capacita o futuro enfermeiro a salvar vidas com competência, rigor e humanismo em qualquer hospital do mundo."
  },
  {
    "id": 8051,
    "topicId": 8,
    "question": "Na física nuclear e farmacocinética dos radioisótopos na terapêutica médica, em relação a 'definição e propriedades dos Isótopos (mesmo Z)', qual é a fundamentação científica exata?",
    "options": [
      "São átomos de elementos químicos distintos que apresentam o mesmo número de neutrões nucleares, exibindo reatividade química idêntica em todas as reações de precipitação inorgânica realizadas no organismo.",
      "São compostos moleculares que partilham rigorosamente o mesmo número de massa atómica total, mas diferem na quantidade de protões presentes no núcleo em virtude de emissões beta prévias espontâneas.",
      "São núcleos atómicos que apresentam o mesmo estado de excitação energética metaestável, decaindo simultaneamente por transição isomérica com emissão de eletrões secundários de conversão interna contínua.",
      "São átomos do mesmo elemento químico que possuem o mesmo número de protões (Z), mas diferente número de neutrões (N) e de massa (A), partilhando propriedades químicas semelhantes mas estabilidade nuclear distinta."
    ],
    "correctIndex": 3,
    "explanation": "Em biofísica e medicina nuclear, definição e propriedades dos Isótopos (mesmo Z) explica-se pelo facto de que são átomos do mesmo elemento químico que possuem o mesmo número de protões (Z), mas diferente número de neutrões (N) e, consequentemente, diferente número de massa (A). Como possuem exatamente a mesma configuração eletrónica de eletrões orbitais, partilham propriedades químicas idênticas, mas apresentam propriedades nucleares e estabilidade radioativa totalmente distintas.",
    "distractorAnalysis": [
      "Está incorreta: nuclídeos de elementos diferentes com o mesmo número de neutrões são isótonos e não isótopos; elementos distintos não partilham propriedades químicas idênticas.",
      "Está incorreta: espécies com o mesmo número de massa A pertencentes a elementos químicos distintos denominam-se isóbaros e não isótopos.",
      "Está incorreta: núcleos com o mesmo arranjo de nucleões em estados de excitação energética metaestáveis diferentes são classificados como isómeros nucleares."
    ],
    "nursingApplication": "O enfermeiro sabe que a tiroide humana capta o radioisótopo Iodo-131 exatamente da mesma forma química que capta o isótopo estável dietético Iodo-127."
  },
  {
    "id": 8052,
    "topicId": 8,
    "question": "Na administração de radiofármacos e cuidados clínicos de enfermagem em medicina nuclear e oncologia, como se concretiza na prática o conceito de 'definição e propriedades dos Isótopos (mesmo Z)'?",
    "options": [
      "O enfermeiro sabe que as células foliculares da tiroide humana captam e metabolizam o radioisótopo iodo-131 exatamente da mesma forma bioquímica que utilizam o iodo-127 estável proveniente da alimentação diária.",
      "O profissional presume que a tiroide rejeita ativamente o radioisótopo iodo-131 devido à sua carga radioativa ionizante, obrigando à administração concomitante de doses maciças de hormonas tiroideias sintéticas.",
      "O enfermeiro considera que os isótopos radioativos apenas conseguem penetrar no citoplasma celular após sofrerem decaimento prévio no lúmen do tubo digestivo sob a ação direta do ácido clorídrico gástrico.",
      "O enfermeiro assume que a afinidade bioquímica dos tecidos pelos radiofármacos depende exclusivamente do número de neutrões do núcleo e não da configuração dos eletrões orbitais periféricos da molécula."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para definição e propriedades dos Isótopos (mesmo Z) baseia-se no princípio: O enfermeiro sabe que a tiroide humana capta o radioisótopo Iodo-131 exatamente da mesma forma química que capta o isótopo estável dietético Iodo-127. Esta prática concilia a segurança radiológica com os cuidados de excelência ao utente.",
    "distractorAnalysis": [
      "Está incorreta: o transportador simportador de sódio-iodeto (NIS) não discrimina isotopicamente entre 131I e 127I estável, transportando ambos com a mesma avidez fisiológica.",
      "Está incorreta: a captação celular de iodeto é um processo bioquímico membranar que independe da estabilidade nuclear do átomo captado.",
      "Está incorreta: a afinidade química e o reconhecimento molecular celular são determinados pela eletrosfera (eletrões de valência e carga Z) e não pelo número de neutrões nucleares."
    ],
    "nursingApplication": "O enfermeiro sabe que a tiroide humana capta o radioisótopo Iodo-131 exatamente da mesma forma química que capta o isótopo estável dietético Iodo-127."
  },
  {
    "id": 8053,
    "topicId": 8,
    "question": "Um enfermeiro analisa as grandezas físicas, semividas e vias de depuração em 'definição e propriedades dos Isótopos (mesmo Z)'. Qual das seguintes afirmações expressa com rigor a relação científica entre as variáveis?",
    "options": [
      "A diferença no número de protões do núcleo atómico faz com que os diferentes isótopos se comportem como elementos químicos inteiramente distintos nas reações enzimáticas do metabolismo tecidual humano.",
      "Por possuírem rigorosamente a mesma configuração eletrónica na camada de valência, os isótopos partilham idêntico comportamento químico e biológico, diferindo na estabilidade e no tipo de emissão nuclear radioativa.",
      "Os isótopos estáveis e radioativos do mesmo elemento diferem na velocidade de propagação eletromagnética dos seus fotões orbitais no vácuo durante a realização de exames cintigráficos hospitalares.",
      "A reatividade química dos isótopos aumenta proporcionalmente ao quadrado do número de neutrões excedentes no núcleo, acelerando a fixação celular dos radiofármacos nos órgãos-alvo examinados."
    ],
    "correctIndex": 1,
    "explanation": "A relação biofísica e farmacocinética rigorosa demonstra que Como possuem exatamente a mesma configuração eletrónica de eletrões orbitais, partilham propriedades químicas idênticas, mas apresentam propriedades nucleares e estabilidade radioativa totalmente distintas. O domínio destas grandezas capacita o enfermeiro para a prestação de cuidados seguros e esclarecimento de dúvidas.",
    "distractorAnalysis": [
      "Está incorreta: isótopos possuem o mesmo número de protões ($Z$) e a mesma eletrosfera, determinando propriedades químicas idênticas mas propriedades radioativas nucleares totalmente diferentes.",
      "Está incorreta: a velocidade da luz e da radiação eletromagnética no vácuo ($c$) é uma constante universal invariável, idêntica para qualquer emissão fotónica.",
      "Está incorreta: o número de neutrões não altera as propriedades de reatividade química dos átomos, governadas pelas forças eletrostáticas dos eletrões periféricos."
    ],
    "nursingApplication": "O enfermeiro sabe que a tiroide humana capta o radioisótopo Iodo-131 exatamente da mesma forma química que capta o isótopo estável dietético Iodo-127."
  },
  {
    "id": 8054,
    "topicId": 8,
    "question": "Na física nuclear e farmacocinética dos radioisótopos na terapêutica médica, em relação a 'definição e propriedades dos Isóbaros (mesmo A)', qual é a fundamentação científica exata?",
    "options": [
      "São espécies nucleares pertencentes rigorosamente ao mesmo elemento químico que apresentam massas atómicas distintas devido à perda progressiva de eletrões periféricos na camada de valência.",
      "São átomos que partilham o mesmo número atómico Z e o mesmo tempo de semivida física de decaimento, diferindo unicamente na sua densidade macroscópica e ponto de fusão na matéria pura.",
      "São nuclídeos pertencentes a elementos químicos distintos que possuem o mesmo número de massa A (mesma soma de protões e neutrões, A = Z + N), surgindo caracteristicamente como pares em decaimentos beta.",
      "São radionuclídeos que decaem exclusivamente por fissão nuclear espontânea com emissão contínua de neutrões térmicos, mantendo inalterada a sua carga elétrica nuclear ao longo do processo."
    ],
    "correctIndex": 2,
    "explanation": "Em biofísica e medicina nuclear, definição e propriedades dos Isóbaros (mesmo A) explica-se pelo facto de que são nuclídeos pertencentes a elementos químicos diferentes que possuem o mesmo número de massa total A = Z + N, mas diferentes números atómicos (Z) e de neutrões (N). Aparecem tipicamente como pares de produtos em decaimentos beta (por exemplo, Iodo-131 com Z = 53 decai para Xénon-131 com Z = 54; ou Carbono-14 com Z = 6 decai para Azoto-14 com Z = 7).",
    "distractorAnalysis": [
      "Está incorreta: isóbaros pertencem a elementos químicos diferentes (possuem diferentes Z), partilhando apenas o número de massa A total (como o par 131I e 131Xe no decaimento beta menos).",
      "Está incorreta: átomos com o mesmo número atómico Z pertencem ao mesmo elemento e são isótopos; a perda de eletrões gera iões e não altera a massa nuclear.",
      "Está incorreta: o decaimento por fissão espontânea ocorre em actinídeos superpesados e não define o conceito geral de isóbaros."
    ],
    "nursingApplication": "O enfermeiro identifica que na transição isobárica a massa atómica total permanece constante enquanto a identidade química do elemento muda."
  },
  {
    "id": 8055,
    "topicId": 8,
    "question": "Na administração de radiofármacos e cuidados clínicos de enfermagem em medicina nuclear e oncologia, como se concretiza na prática o conceito de 'definição e propriedades dos Isóbaros (mesmo A)'?",
    "options": [
      "O enfermeiro presume que a transição isobárica destrói metade dos nucleões nucleares do átomo, reduzindo a massa física do órgão-alvo do doente na proporção direta da atividade administrada.",
      "O profissional assume que a conservação da massa atómica nos isóbaros impede a libertação de qualquer tipo de energia ou radiação ionizante durante o decaimento radioativo no interior do corpo.",
      "O enfermeiro calcula a dose absorvida assumindo que os isóbaros mantêm as mesmas propriedades farmacológicas no plasma, sendo metabolizados pelas mesmas enzimas hepáticas do elemento original.",
      "O enfermeiro compreende que na transição isobárica (como no decaimento beta) a massa atómica total A permanece constante, enquanto o número atómico Z se altera, transformando o radioisótopo noutro elemento químico."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para definição e propriedades dos Isóbaros (mesmo A) baseia-se no princípio: O enfermeiro identifica que na transição isobárica a massa atómica total permanece constante enquanto a identidade química do elemento muda. Esta prática concilia a segurança radiológica com os cuidados de excelência ao utente.",
    "distractorAnalysis": [
      "Está incorreta: o número total de nucleões (bariões) conserva-se rigorosamente; não há destruição em massa de matéria nos tecidos do paciente.",
      "Está incorreta: a transição isobárica liberta energia sob a forma de radiação ionizante (partículas beta, neutrinos e fotões gama de desexcitação nuclear).",
      "Está incorreta: como mudam de número atómico Z, os produtos isobáricos resultantes tornam-se elementos químicos diferentes com propriedades bioquímicas inteiramente distintas."
    ],
    "nursingApplication": "O enfermeiro identifica que na transição isobárica a massa atómica total permanece constante enquanto a identidade química do elemento muda."
  },
  {
    "id": 8056,
    "topicId": 8,
    "question": "Um enfermeiro analisa as grandezas físicas, semividas e vias de depuração em 'definição e propriedades dos Isóbaros (mesmo A)'. Qual das seguintes afirmações expressa com rigor a relação científica entre as variáveis?",
    "options": [
      "A transformação isobárica nuclear conserva rigorosamente o número de nucleões (A = constante), convertendo um neutrão num protão com emissão beta negativa, ou um protão num neutrão com emissão beta positiva.",
      "A conversão isobárica implica a destruição espontânea de protões no núcleo sem criação de outras partículas, reduzindo continuamente o número de massa A em cada ciclo de decaimento físico registado.",
      "A relação entre isóbaros decorre da fusão forçada de eletrões orbitais com neutrões do núcleo, gerando emissões de fotões ultravioleta que anulam a toxicidade biológica da amostra radioativa.",
      "Os isóbaros possuem coeficientes de atenuação linear rigorosamente idênticos em qualquer material absorvente denso, independentemente da energia dos fotões gama emitidos pelo núcleo filho."
    ],
    "correctIndex": 0,
    "explanation": "A relação biofísica e farmacocinética rigorosa demonstra que Aparecem tipicamente como pares de produtos em decaimentos beta (por exemplo, Iodo-131 com Z = 53 decai para Xénon-131 com Z = 54; ou Carbono-14 com Z = 6 decai para Azoto-14 com Z = 7). O domínio destas grandezas capacita o enfermeiro para a prestação de cuidados seguros e esclarecimento de dúvidas.",
    "distractorAnalysis": [
      "Está incorreta: a conservação do número bariónico assegura que a soma total de nucleões $A$ não varia nos decaimentos beta ($\\beta^-$ ou $\\beta^+$), caracterizando a relação isobárica.",
      "Está incorreta: protões não são simplesmente 'destruídos'; convertem-se em neutrões (no decaimento $\\beta^+$ ou captura eletrónica) conservando a carga e a massa global.",
      "Está incorreta: a atenuação na matéria depende da energia da radiação e do número atómico do absorvente, variando significativamente consoante a emissão específica do radionuclídeo."
    ],
    "nursingApplication": "O enfermeiro identifica que na transição isobárica a massa atómica total permanece constante enquanto a identidade química do elemento muda."
  },
  {
    "id": 8057,
    "topicId": 8,
    "question": "Na física nuclear e farmacocinética dos radioisótopos na terapêutica médica, em relação a 'definição e características dos Isótonos (mesmo N)', qual é a fundamentação científica exata?",
    "options": [
      "São núcleos atómicos pertencentes ao mesmo elemento químico que possuem o mesmo número de massa A e diferentes configurações eletrónicas na sua camada molecular de valência periférica.",
      "São átomos de elementos químicos distintos que apresentam rigorosamente o mesmo número de neutrões (N = A - Z), mas possuem diferentes números atómicos (Z) e diferentes números de massa total (A).",
      "São nuclídeos artificiais criados exclusivamente em reatores nucleares de fissão que apresentam taxas de decaimento alfa contínuas e invariáveis perante a passagem do tempo geológico.",
      "São partículas subatómicas desprovidas de massa e carga elétrica que medeiam as forças eletromagnéticas entre eletrões e protões no interior do citoplasma das células humanas normais."
    ],
    "correctIndex": 1,
    "explanation": "Em biofísica e medicina nuclear, definição e características dos Isótonos (mesmo N) explica-se pelo facto de que são átomos de elementos químicos diferentes que possuem rigorosamente o mesmo número de neutrões (N = A - Z), mas diferentes números de protões (Z) e de massa (A). Exemplos incluem o Carbono-13 (6p, 7n), o Azoto-14 (7p, 7n) e o Oxigénio-15 (8p, 7n), todos com N = 7 neutrões no núcleo.",
    "distractorAnalysis": [
      "Está incorreta: a definição de isótonos assenta estritamente na igualdade do número de neutrões ($N = A - Z$) em elementos com diferentes valores de $Z$ e $A$ (ex.: 13C com 7n e 14N com 7n).",
      "Está incorreta: átomos com o mesmo número atómico Z são isótopos e não isótonos.",
      "Está incorreta: isótonos não são partículas mediadoras de forças (como os fotões) nem são necessariamente nuclídeos estáveis imutáveis; são categorias nucleares de classificação."
    ],
    "nursingApplication": "O enfermeiro consolida a taxonomia das espécies nucleares para interpretar a bibliografia avançada de biofísica e farmacocinética radionuclídica."
  },
  {
    "id": 8058,
    "topicId": 8,
    "question": "Na administração de radiofármacos e cuidados clínicos de enfermagem em medicina nuclear e oncologia, como se concretiza na prática o conceito de 'definição e características dos Isótonos (mesmo N)'?",
    "options": [
      "O profissional utiliza o conceito de isótonos para calcular a velocidade de gotejamento de soluções de hidratação venosa em doentes internados nas enfermarias gerais de medicina interna.",
      "O enfermeiro seleciona isótonos estáveis para substituir os antibióticos prescritos em doentes sépticos graves através de um mecanismo de saturação osmótica das membranas celulares bacterianas.",
      "O enfermeiro consolida a taxonomia das espécies nucleares (isótopos, isóbaros, isótonos e isómeros) para interpretar a literatura de biofísica das radiações e compreender a estabilidade das espécies radioativas.",
      "O enfermeiro presume que os isótonos emitem feixes contínuos de raios X superficiais que podem ser utilizados para esterilizar a roupa de cama dos doentes sem recorrer à lavandaria hospitalar."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para definição e características dos Isótonos (mesmo N) baseia-se no princípio: O enfermeiro consolida a taxonomia das espécies nucleares para interpretar a bibliografia avançada de biofísica e farmacocinética radionuclídica. Esta prática concilia a segurança radiológica com os cuidados de excelência ao utente.",
    "distractorAnalysis": [
      "Está incorreta: o cálculo de débitos de perfusão intravenosa rege-se pela fluidoterapia clínica e fórmulas hidrodinâmicas, sem qualquer conexão com o número de neutrões atómicos.",
      "Está incorreta: isótonos são entidades nucleares e não agentes antimicrobianos substitutos de antibioterapia em sépsis.",
      "Está incorreta: isótonos estáveis não emitem radiação e espécies nucleares não substituem o circuito de desinfeção e lavandaria hospitalar de têxteis."
    ],
    "nursingApplication": "O enfermeiro consolida a taxonomia das espécies nucleares para interpretar a bibliografia avançada de biofísica e farmacocinética radionuclídica."
  },
  {
    "id": 8059,
    "topicId": 8,
    "question": "Um enfermeiro analisa as grandezas físicas, semividas e vias de depuração em 'definição e características dos Isótonos (mesmo N)'. Qual das seguintes afirmações expressa com rigor a relação científica entre as variáveis?",
    "options": [
      "Dois núcleos isótonos partilham obrigatoriamente a mesma carga elétrica total no núcleo atómico, resultando em forças de repulsão eletrostática perfeitamente idênticas entre os seus nucleões constituintes.",
      "A igualdade do número de neutrões assegura que os isótonos apresentem exatamente a mesma taxa de absorção de raios X diagnósticos em qualquer espessura de tecido biológico mole examinado.",
      "A condição de isotonia anula a barreira de potencial coulombiana no núcleo atómico, permitindo a expulsão espontânea de protões sob a forma de radiação ionizante de baixa energia tecidual.",
      "A constância do número de neutrões (N = A - Z) em núcleos com diferentes números de protões Z altera a razão neutrão/protão, influenciando criticamente a energia de ligação nuclear e a estabilidade radioativa da espécie."
    ],
    "correctIndex": 3,
    "explanation": "A relação biofísica e farmacocinética rigorosa demonstra que Exemplos incluem o Carbono-13 (6p, 7n), o Azoto-14 (7p, 7n) e o Oxigénio-15 (8p, 7n), todos com N = 7 neutrões no núcleo. O domínio destas grandezas capacita o enfermeiro para a prestação de cuidados seguros e esclarecimento de dúvidas.",
    "distractorAnalysis": [
      "Está incorreta: como o número de protões $Z$ varia, a razão $N/Z$ é diferente em cada isótono, ditando diferentes posições face ao vale de estabilidade nuclear e diferentes modos de decaimento.",
      "Está incorreta: como pertencem a elementos distintos ($Z$ diferente), os isótonos possuem cargas nucleares diferentes ($+Z \\cdot e$) e forças repulsivas distintas.",
      "Está incorreta: a absorção de radiação na matéria depende do número atómico $Z$ do meio e da energia do feixe, variando entre elementos distintos independentemente de terem o mesmo $N$."
    ],
    "nursingApplication": "O enfermeiro consolida a taxonomia das espécies nucleares para interpretar a bibliografia avançada de biofísica e farmacocinética radionuclídica."
  },
  {
    "id": 8060,
    "topicId": 8,
    "question": "Na física nuclear e farmacocinética dos radioisótopos na terapêutica médica, em relação a 'definição e características dos Isómeros Nucleares (mesmo Z, N e A)', qual é a fundamentação científica exata?",
    "options": [
      "São nuclídeos que partilham o mesmo número de protões (Z) e de neutrões (N), mas diferem no estado quântico de energia interna nuclear, decaindo o estado metaestável ('m') por transição isomérica com emissão gama pura.",
      "São átomos do mesmo elemento químico que apresentam diferente número de neutrões no núcleo atómico, sofrendo decaimento beta de alta energia cinética com alteração imediata da sua identidade química.",
      "São núcleos que possuem a mesma massa atómica mas números atómicos distintos, formados através da captura de eletrões orbitais profundos da camada K por neutrões térmicos moderados.",
      "São moléculas orgânicas complexas que partilham a mesma fórmula estequiométrica bruta, diferindo unicamente na orientação espacial tridimensional das suas ligações covalentes periféricas."
    ],
    "correctIndex": 0,
    "explanation": "Em biofísica e medicina nuclear, definição e características dos Isómeros Nucleares (mesmo Z, N e A) explica-se pelo facto de que são nuclídeos com o mesmo número de protões e o mesmo número de neutrões, mas que se encontram em estados quânticos de energia interna diferentes. O estado metaestável de maior energia (indicado pela letra 'm') decai para o estado fundamental estável através de transição isomérica com emissão de um fotão gama puramente eletromagnético.",
    "distractorAnalysis": [
      "Está incorreta: átomos com o mesmo Z e diferente número de neutrões são isótopos; os isómeros nucleares possuem o mesmo Z e o mesmo N, diferindo no estado de excitação quântica.",
      "Está incorreta: núcleos com o mesmo número de massa A e diferente número atómico Z são isóbaros e não isómeros nucleares.",
      "Está incorreta: a descrição de moléculas com mesma fórmula molecular e arranjo espacial diferente refere-se a isómeros químicos (estereoisómeros) e não a isómeros nucleares."
    ],
    "nursingApplication": "O exemplo máximo na enfermagem é o Tecnécio-99m (⁹⁹ᵐTc), que transita para Tecnécio-99 fundamental emitindo o fotão gama diagnóstico de 140 keV."
  },
  {
    "id": 8061,
    "topicId": 8,
    "question": "Na administração de radiofármacos e cuidados clínicos de enfermagem em medicina nuclear e oncologia, como se concretiza na prática o conceito de 'definição e características dos Isómeros Nucleares (mesmo Z, N e A)'?",
    "options": [
      "O exemplo clássico é o iodo-131, que transita espontaneamente para tálio-201 com emissão de positrões de aniquilação aproveitados na cintigrafia óssea de corpo inteiro em regime de ambulatório.",
      "O exemplo de maior relevância na prática clínica é o tecnécio-99m (99mTc), que transita do estado metaestável para o estado fundamental estável emitindo o fotão gama diagnóstico de 140 keV quase sem radiação corpuscular.",
      "O enfermeiro identifica como isómero nuclear o chumbo metálico presente nos aventais protetores, o qual emite fotões contínuos para neutralizar a radiação dispersa na sala de exames de radiologia.",
      "O profissional assume que os isómeros nucleares só podem ser administrados em ambiente cirúrgico com anestesia geral devido ao risco de libertação imediata de feixes térmicos infravermelhos."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para definição e características dos Isómeros Nucleares (mesmo Z, N e A) baseia-se no princípio: O exemplo máximo na enfermagem é o Tecnécio-99m (⁹⁹ᵐTc), que transita para Tecnécio-99 fundamental emitindo o fotão gama diagnóstico de 140 keV. Esta prática concilia a segurança radiológica com os cuidados de excelência ao utente.",
    "distractorAnalysis": [
      "Está incorreta: o 131I decai por emissão $\\beta^-$ para o isóbaro 131Xe e não para tálio-201; não é uma simples transição isomérica entre estados do mesmo núcleo.",
      "Está incorreta: o chumbo dos aventais é um elemento absorvente passivo e não uma fonte radioativa emissora de fotões neutralizadores.",
      "Está incorreta: o 99mTc é administrado por via venosa periférica em ambulatório sem dor ou necessidade de anestesia, com excelente tolerabilidade biológica."
    ],
    "nursingApplication": "O exemplo máximo na enfermagem é o Tecnécio-99m (⁹⁹ᵐTc), que transita para Tecnécio-99 fundamental emitindo o fotão gama diagnóstico de 140 keV."
  },
  {
    "id": 8062,
    "topicId": 8,
    "question": "Um enfermeiro analisa as grandezas físicas, semividas e vias de depuração em 'definição e características dos Isómeros Nucleares (mesmo Z, N e A)'. Qual das seguintes afirmações expressa com rigor a relação científica entre as variáveis?",
    "options": [
      "A transição isomérica modifica o número de protões do núcleo atómico, transformando espontaneamente o elemento químico precursor num metal pesado tóxico durante a realização do exame imagiológico.",
      "A desexcitação isomérica consome neutrões do núcleo atómico para gerar ondas sonoras de alta frequência que se propagam pelos tecidos do doente até serem captadas pelos colimadores plúmbeos.",
      "O estado metaestável excitado ('m') apresenta uma semivida mensurável prolongada devido a regras de seleção de spin nuclear, desexcitando-se para o estado fundamental por transição isomérica com emissão fotónica eletromagnética.",
      "O estado metaestável atrai ativamente eletrões da nuvem atómica periférica, incorporando-os no núcleo até anular totalmente a carga elétrica positiva do átomo em menos de um milissegundo."
    ],
    "correctIndex": 2,
    "explanation": "A relação biofísica e farmacocinética rigorosa demonstra que O estado metaestável de maior energia (indicado pela letra 'm') decai para o estado fundamental estável através de transição isomérica com emissão de um fotão gama puramente eletromagnético. O domínio destas grandezas capacita o enfermeiro para a prestação de cuidados seguros e esclarecimento de dúvidas.",
    "distractorAnalysis": [
      "Está incorreta: na transição isomérica o número de protões $Z$ e de neutrões $N$ não se altera ($A$ e $Z$ constantes); o núcleo apenas liberta a energia excedente sob a forma de um fotão gama ou eletrão de conversão.",
      "Está incorreta: a transição isomérica não consome neutrões nem produz ondas acústicas; liberta radiação eletromagnética gama que interage com cristais cintiladores.",
      "Está incorreta: a captura de eletrões da camada K é outro tipo de decaimento (transforma um protão num neutrão), enquanto a transição isomérica não altera a carga nuclear."
    ],
    "nursingApplication": "O exemplo máximo na enfermagem é o Tecnécio-99m (⁹⁹ᵐTc), que transita para Tecnécio-99 fundamental emitindo o fotão gama diagnóstico de 140 keV."
  },
  {
    "id": 8063,
    "topicId": 8,
    "question": "Na física nuclear e farmacocinética dos radioisótopos na terapêutica médica, em relação a 'traçadores radioativos (radio-tracers) e a equivalência bioquímica dos isótopos', qual é a fundamentação científica exata?",
    "options": [
      "O organismo humano possui sensores enzimáticos na membrana celular que reconhecem a radioatividade e aceleram ativamente o transporte de átomos radioativos para o interior do núcleo mitocondrial.",
      "A administração de radiotraçadores altera profundamente a osmolaridade plasmática do doente, induzindo respostas farmacodinâmicas intensas que são indispensáveis para a obtenção das imagens diagnósticas.",
      "Os radiotraçadores acumulam-se exclusivamente em tecidos desprovidos de circulação sanguínea, utilizando mecanismos de difusão gasosa através das membranas das células necróticas do paciente.",
      "Como o organismo não distingue quimicamente um isótopo radioativo de um estável do mesmo elemento, o radiotraçador segue as vias metabólicas fisiológicas, permitindo mapear fluxos funcionais in vivo com doses ponderais ínfimas."
    ],
    "correctIndex": 3,
    "explanation": "Em biofísica e medicina nuclear, traçadores radioativos (radio-tracers) e a equivalência bioquímica dos isótopos explica-se pelo facto de que como o organismo humano não distingue quimicamente um isótopo radioativo de um estável do mesmo elemento, o radioisótopo segue exatamente as mesmas vias metabólicas normais. Isto permite mapear funções fisiológicas e fluxos moleculares in vivo sem perturbar a biologia do órgão através de doses ponderais ínfimas (escala picomolar).",
    "distractorAnalysis": [
      "Está incorreta: não existem 'sensores biológicos' de radioatividade a nível celular; o transporte e a biodistribuição dependem estritamente da estrutura química e molecular da substância.",
      "Está incorreta: as massas de radiofármaco administradas em diagnóstico são tão infinitesimais (submicrogramas) que não produzem qualquer efeito farmacológico ou alteração osmótica mensurável.",
      "Está incorreta: os traçadores dependem da perfusão vascular ativa e de transportadores biológicos funcionais para alcançarem e mapearem os órgãos de interesse."
    ],
    "nursingApplication": "O enfermeiro reconhece que a medicina nuclear é uma medicina estritamente funcional e metabólica, ao contrário da radiologia que é puramente anatómica e morfológica."
  },
  {
    "id": 8064,
    "topicId": 8,
    "question": "Na administração de radiofármacos e cuidados clínicos de enfermagem em medicina nuclear e oncologia, como se concretiza na prática o conceito de 'traçadores radioativos (radio-tracers) e a equivalência bioquímica dos isótopos'?",
    "options": [
      "O enfermeiro reconhece que a medicina nuclear é uma especialidade essencialmente funcional e metabólica celular, complementando a radiologia convencional e a tomografia computorizada, que são focadas na anatomia morfológica.",
      "O enfermeiro assume que a medicina nuclear substitui integralmente a necessidade de exames de sangue ou análises clínicas laboratoriais, visto que a radiação do radioisótopo quantifica a glicemia em tempo real.",
      "O profissional restringe o uso de radiofármacos apenas a doentes em coma induzido, dado que a consciência ativa interfere com o decaimento nuclear dos radiotraçadores administrados por via venosa.",
      "O enfermeiro presume que as imagens de medicina nuclear fornecem resolução espacial micrométrica superior à da microscopia eletrónica de varredura, dispensando biópsias teciduais na totalidade dos casos oncológicos."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para traçadores radioativos (radio-tracers) e a equivalência bioquímica dos isótopos baseia-se no princípio: O enfermeiro reconhece que a medicina nuclear é uma medicina estritamente funcional e metabólica, ao contrário da radiologia que é puramente anatómica e morfológica. Esta prática concilia a segurança radiológica com os cuidados de excelência ao utente.",
    "distractorAnalysis": [
      "Está incorreta: a medicina nuclear não substitui análises laboratoriais gerais; a glicemia, função renal e hemograma continuam a ser parâmetros essenciais de avaliação clínica.",
      "Está incorreta: o decaimento nuclear é um processo físico totalmente imune ao estado de consciência do doente; a grande maioria dos exames é realizada em doentes em ambulatório acordados.",
      "Está incorreta: as câmaras gama e tomógrafos de PET possuem resolução milimétrica (cerca de 3 a 8 mm) e não microscópica, servindo para estadiamento e não como substitutos diretos de biópsias teciduais."
    ],
    "nursingApplication": "O enfermeiro reconhece que a medicina nuclear é uma medicina estritamente funcional e metabólica, ao contrário da radiologia que é puramente anatómica e morfológica."
  },
  {
    "id": 8065,
    "topicId": 8,
    "question": "Um enfermeiro analisa as grandezas físicas, semividas e vias de depuração em 'traçadores radioativos (radio-tracers) e a equivalência bioquímica dos isótopos'. Qual das seguintes afirmações expressa com rigor a relação científica entre as variáveis?",
    "options": [
      "A massa física do radiofármaco administrado por via venosa aproxima-se de meio quilograma de substância ativa, sendo necessária a cateterização de uma veia central de grande calibre em todos os exames de rotina.",
      "As quantidades em massa administradas de radiofármaco situam-se na escala nanomolar a picomolar, exercendo efeitos biológicos exclusivamente radiofísicos sem produzir toxicidade farmacológica ou sobrecarga de solutos.",
      "A quantidade administrada requer a saturação completa de todos os recetores celulares do organismo para que um sinal mensurável consiga alcançar os detetores externos de cintilação do equipamento.",
      "O princípio do traçador exige a adição de corantes biológicos fluorescentes em doses ponderais elevadas para que a radiação gama emitida se torne visível aos sensores óticos da câmara de deteção."
    ],
    "correctIndex": 1,
    "explanation": "A relação biofísica e farmacocinética rigorosa demonstra que Isto permite mapear funções fisiológicas e fluxos moleculares in vivo sem perturbar a biologia do órgão através de doses ponderais ínfimas (escala picomolar). O domínio destas grandezas capacita o enfermeiro para a prestação de cuidados seguros e esclarecimento de dúvidas.",
    "distractorAnalysis": [
      "Está incorreta: administrar centenas de gramas de qualquer substância causaria sobrecarga circulatória maciça e toxicidade letal; as doses radiofarmacêuticas são invisíveis a olho nu.",
      "Está incorreta: a ocupação de recetores por radiotraçadores é habitualmente inferior a 1-5%, não saturando as vias fisiológicas do organismo.",
      "Está incorreta: os fotões gama não necessitam de corantes adicionais para deteção; são registados diretamente por conversão em impulsos elétricos nos cristais de iodeto de sódio dopados com tálio."
    ],
    "nursingApplication": "O enfermeiro reconhece que a medicina nuclear é uma medicina estritamente funcional e metabólica, ao contrário da radiologia que é puramente anatómica e morfológica."
  },
  {
    "id": 8066,
    "topicId": 8,
    "question": "Na física nuclear e farmacocinética dos radioisótopos na terapêutica médica, em relação a 'Lei Fundamental do Decaimento Radioativo (N(t) = N₀ · e^(-λt))', qual é a fundamentação científica exata?",
    "options": [
      "O decaimento radioativo segue uma taxa linear estrita constante: $N(t) = N_0 - k \\cdot t$, o que provoca a extinção abrupta e integral de toda a radiação da amostra ao fim de exatamente sessenta minutos de espera.",
      "A taxa de decaimento nuclear oscila de modo sinusoidal em sincronia com o ritmo circadiano do paciente, atingindo valores máximos ao meio-dia solar e valores nulos durante o período de sono profundo.",
      "O número de núcleos radioativos intactos e a atividade da amostra decrescem de forma puramente exponencial com o tempo decorrido: $N(t) = N_0 \\cdot e^{-\\lambda \\cdot t}$, onde $\\lambda$ representa a constante de decaimento específica do radioisótopo.",
      "O número de núcleos radioativos permanece invariável durante as primeiras vinte e quatro horas após a síntese química, iniciando um decaimento abrupto por degraus apenas quando administrado no sangue venoso."
    ],
    "correctIndex": 2,
    "explanation": "Em biofísica e medicina nuclear, Lei Fundamental do Decaimento Radioativo (N(t) = N₀ · e^(-λt)) explica-se pelo facto de que o número de núcleos radioativos intactos (N) e a taxa de desintegração decrescem exponencialmente com o tempo: $N(t) = N_0 \\cdot e^{-\\lambda \\cdot t}$, onde $\\lambda$ é a constante de decaimento específica do radioisótopo. A taxa de desintegração nunca é nula mas atinge valores praticamente impercetíveis com o decorrer das meias-vidas.",
    "distractorAnalysis": [
      "Está incorreta: a lei de decaimento radioativo é puramente estocástica e exponencial de primeira ordem ($N = N_0 e^{-\\lambda t}$), nunca decrescendo linearmente nem se extinguindo a um minuto fixo.",
      "Está incorreta: a cinética nuclear é um fenómeno físico independente de fatores ambientais, hora do dia, ritmo circadiano do doente ou ciclo biológico sono-vigília.",
      "Está incorreta: o decaimento inicia-se no momento exato da produção do radionuclídeo no ciclotrão ou reator e prossegue de forma contínua, quer o fármaco esteja no frasco quer esteja no corpo."
    ],
    "nursingApplication": "O enfermeiro aplica esta equação para compreender por que a dose recebida pelos profissionais diminui continuamente hora a hora após a administração ao doente."
  },
  {
    "id": 8067,
    "topicId": 8,
    "question": "Na administração de radiofármacos e cuidados clínicos de enfermagem em medicina nuclear e oncologia, como se concretiza na prática o conceito de 'Lei Fundamental do Decaimento Radioativo (N(t) = N₀ · e^(-λt))'?",
    "options": [
      "O enfermeiro assume que a taxa de dose emitida pelo doente permanece inalterada durante vários meses, proibindo a aproximação de qualquer profissional até à realização de lavagem gástrica no serviço.",
      "O profissional utiliza esta fórmula para calcular a quantidade de antibiótico necessária para neutralizar os fotões de radiação gama presentes na urina recolhida nas arrastadeiras da enfermaria.",
      "O enfermeiro infere que a administração fracionada da dose radioativa ao longo de três dias anula a constante de decaimento físico nuclear, mantendo o traçador ativo indefinidamente no corpo do doente.",
      "O enfermeiro aplica a lei do decaimento exponencial para antecipar a diminuição contínua da taxa de dose emitida pelo doente hora a hora, permitindo planear cuidados presenciais com menor exposição acumulada."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para Lei Fundamental do Decaimento Radioativo (N(t) = N₀ · e^(-λt)) baseia-se no princípio: O enfermeiro aplica esta equação para compreender por que a dose recebida pelos profissionais diminui continuamente hora a hora após a administração ao doente. Esta prática concilia a segurança radiológica com os cuidados de excelência ao utente.",
    "distractorAnalysis": [
      "Está incorreta: a atividade diminui continuamente em função da semivida física e da eliminação biológica, não permanecendo constante ao longo de meses em doentes com isótopos de curta semivida.",
      "Está incorreta: antibióticos atuam sobre agentes bacterianos e não neutralizam fotões de radiação gama nem alteram a física nuclear dos radionuclídeos.",
      "Está incorreta: fracionar a dose não altera a constante nuclear $\\lambda$, que é uma propriedade imutável de cada núcleo atómico radioativo."
    ],
    "nursingApplication": "O enfermeiro aplica esta equação para compreender por que a dose recebida pelos profissionais diminui continuamente hora a hora após a administração ao doente."
  },
  {
    "id": 8068,
    "topicId": 8,
    "question": "Um enfermeiro analisa as grandezas físicas, semividas e vias de depuração em 'Lei Fundamental do Decaimento Radioativo (N(t) = N₀ · e^(-λt))'. Qual das seguintes afirmações expressa com rigor a relação científica entre as variáveis?",
    "options": [
      "A probabilidade de decaimento por unidade de tempo ($\\lambda$) é constante para cada núcleo atómico individual, resultando num decréscimo estocástico contínuo da taxa de decaimento total que se aproxima assintoticamente de zero.",
      "A taxa de decaimento aumenta progressivamente à medida que a amostra envelhece, provocando uma libertação explosiva de radiação ionizante no final da última meia-vida física do radioisótopo.",
      "O decaimento radioativo é interrompido quando a amostra é protegida da luz solar direta, permitindo a conservação prolongada de radiofármacos em armários hospitalares escurecidos comuns.",
      "A constante de decaimento $\\lambda$ diminui para metade sempre que o volume da solução líquida do radiofármaco é diluído em soro fisiológico a noventa por cento de concentração salina."
    ],
    "correctIndex": 0,
    "explanation": "A relação biofísica e farmacocinética rigorosa demonstra que A taxa de desintegração nunca é nula mas atinge valores praticamente impercetíveis com o decorrer das meias-vidas. O domínio destas grandezas capacita o enfermeiro para a prestação de cuidados seguros e esclarecimento de dúvidas.",
    "distractorAnalysis": [
      "Está incorreta: a taxa de decaimento não se acelera com a idade da amostra e não há explosões de dose no final do decaimento; a curva é puramente decrescente.",
      "Está incorreta: a radiação nuclear independe da iluminação e não é travada por armários escuros; apenas o decaimento temporal rege a redução da atividade.",
      "Está incorreta: diluir o fármaco reduz a concentração volúmica ($MBq/mL$), mas a constante física nuclear $\\lambda$ de cada átomo permanece estritamente invariável."
    ],
    "nursingApplication": "O enfermeiro aplica esta equação para compreender por que a dose recebida pelos profissionais diminui continuamente hora a hora após a administração ao doente."
  },
  {
    "id": 8069,
    "topicId": 8,
    "question": "Na física nuclear e farmacocinética dos radioisótopos na terapêutica médica, em relação a 'conceito de Atividade Radioativa (A) e unidade SI Becquerel (Bq)', qual é a fundamentação científica exata?",
    "options": [
      "A Atividade mede a massa ponderal total em gramas de uma solução radioativa, sendo expressa no Sistema Internacional em quilogramas por decímetro cúbico de substância líquida administrada ao doente.",
      "A Atividade Radioativa ($A = \\lambda \\cdot N = -dN/dt$) quantifica o número de transformações nucleares espontâneas que ocorrem numa amostra por segundo, sendo o Becquerel (1 Bq = 1 dps) a unidade oficial do Sistema Internacional.",
      "A unidade Becquerel define a quantidade de energia térmica absorvida pelos tecidos biológicos por unidade de tempo, sendo rigorosamente equivalente a um joule por minuto na escala hospitalar de monitorização.",
      "A Atividade representa a voltagem elétrica gerada pelos elétrodos do tomógrafo de medicina nuclear durante a aquisição da imagem digital, sendo quantificada em amperes por segundo de rotação contínua."
    ],
    "correctIndex": 1,
    "explanation": "Em biofísica e medicina nuclear, conceito de Atividade Radioativa (A) e unidade SI Becquerel (Bq) explica-se pelo facto de que a Atividade (A = $\\lambda \\cdot N = -dN/dt$) mede o número de desintegrações nucleares espontâneas que ocorrem numa amostra por segundo. A unidade oficial no Sistema Internacional é o Becquerel (1 Bq = 1 desintegração por segundo, dps), sendo frequente o uso de múltiplos como o MegaBecquerel (1 MBq = 10⁶ Bq) e GigaBecquerel (1 GBq = 10⁹ Bq).",
    "distractorAnalysis": [
      "Está incorreta: a atividade não mede a massa ou densidade da amostra, mas sim a frequência de transições nucleares ($s^{-1}$).",
      "Está incorreta: a energia absorvida por unidade de massa é a Dose Absorvida, cuja unidade SI é o Gray ($1\\text{ Gy} = 1\\text{ J/kg}$), e não o Becquerel.",
      "Está incorreta: o Becquerel mede transformações nucleares na fonte e não a corrente elétrica ou voltagem nos circuitos de leitura do tomógrafo."
    ],
    "nursingApplication": "O enfermeiro confere na ficha do radiofármaco a atividade prescrita em MegaBecquerels (por exemplo, 740 MBq de ⁹⁹ᵐTc para cintigrafia óssea)."
  },
  {
    "id": 8070,
    "topicId": 8,
    "question": "Na administração de radiofármacos e cuidados clínicos de enfermagem em medicina nuclear e oncologia, como se concretiza na prática o conceito de 'conceito de Atividade Radioativa (A) e unidade SI Becquerel (Bq)'?",
    "options": [
      "O enfermeiro administra a medicação medindo o volume do líquido radioativo com uma colher de sopa de plástico comum, dispensando o recurso a ativímetros de poço ou calibradores de dose blindados.",
      "O enfermeiro presume que as prescrições em MegaBecquerels se referem à dosagem de comprimidos de paracetamol de libertação prolongada administrados por via oral no serviço.",
      "O enfermeiro confere na folha de prescrição terapêutica a atividade administrada expressa em MegaBecquerels (ex.: 740 MBq de 99mTc para cintigrafia óssea ou 3700 MBq de 131I para ablação tiroideia) e confirma no ativímetro calibrado.",
      "O profissional considera que qualquer atividade superior a cem Becquerels é letal de imediato, recusando a administração de doses diagnósticas prescritas na rotina de medicina nuclear."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para conceito de Atividade Radioativa (A) e unidade SI Becquerel (Bq) baseia-se no princípio: O enfermeiro confere na ficha do radiofármaco a atividade prescrita em MegaBecquerels (por exemplo, 740 MBq de ⁹⁹ᵐTc para cintigrafia óssea). Esta prática concilia a segurança radiológica com os cuidados de excelência ao utente.",
    "distractorAnalysis": [
      "Está incorreta: a atividade radioativa não pode ser dosada por colheres volumétricas; exige medição precisa em câmara de ionização calibrada (ativímetro).",
      "Está incorreta: o MegaBecquerel é a unidade de atividade radioativa ($10^6$ transformações por segundo) e não se relaciona com massas miligramadas de analgésicos comuns.",
      "Está incorreta: 100 Bq é uma atividade ínfima (a radioatividade natural do corpo humano por potássio-40 ronda os 4000 a 5000 Bq); as doses diagnósticas clínicas situam-se na gama dos MegaBecquerels sem toxicidade aguda."
    ],
    "nursingApplication": "O enfermeiro confere na ficha do radiofármaco a atividade prescrita em MegaBecquerels (por exemplo, 740 MBq de ⁹⁹ᵐTc para cintigrafia óssea)."
  },
  {
    "id": 8071,
    "topicId": 8,
    "question": "Um enfermeiro analisa as grandezas físicas, semividas e vias de depuração em 'conceito de Atividade Radioativa (A) e unidade SI Becquerel (Bq)'. Qual das seguintes afirmações expressa com rigor a relação científica entre as variáveis?",
    "options": [
      "A unidade Becquerel mede exclusivamente o número de fotões visíveis emitidos por segundo por uma lâmpada fluorescente instalada no teto do serviço de medicina nuclear de intervenção.",
      "Um Becquerel equivale matematicamente a dez milhões de Joules por segundo de calor emitido, correspondendo a uma potência energética suficiente para alimentar um acelerador de partículas.",
      "A unidade Becquerel é reservada exclusivamente para descrever a taxa de replicação de bactérias em meios de cultura enriquecidos com glucose radioativa em laboratórios de microbiologia.",
      "A unidade oficial no SI é o Becquerel (1 Bq = 1 transformação nuclear por segundo), recorrendo-se na clínica a múltiplos decimais como o MegaBecquerel (1 MBq = 10⁶ Bq) para diagnóstico e GigaBecquerel (1 GBq = 10⁹ Bq) para terapia."
    ],
    "correctIndex": 3,
    "explanation": "A relação biofísica e farmacocinética rigorosa demonstra que A unidade oficial no Sistema Internacional é o Becquerel (1 Bq = 1 desintegração por segundo, dps), sendo frequente o uso de múltiplos como o MegaBecquerel (1 MBq = 10⁶ Bq) e GigaBecquerel (1 GBq = 10⁹ Bq). O domínio destas grandezas capacita o enfermeiro para a prestação de cuidados seguros e esclarecimento de dúvidas.",
    "distractorAnalysis": [
      "Está incorreta: a emissão luminosa visível mede-se em lúmenes ou candelas e não em Becquerels.",
      "Está incorreta: 1 Bq corresponde a uma única transformação nuclear por segundo, libertando uma quantidade minúscula de energia na ordem dos picojoules e não milhões de Joules.",
      "Está incorreta: a replicação bacteriana não é medida em Becquerels; a unidade aplica-se à taxa de transição nuclear radioativa de espécies atómicas instáveis."
    ],
    "nursingApplication": "O enfermeiro confere na ficha do radiofármaco a atividade prescrita em MegaBecquerels (por exemplo, 740 MBq de ⁹⁹ᵐTc para cintigrafia óssea)."
  },
  {
    "id": 8072,
    "topicId": 8,
    "question": "Na física nuclear e farmacocinética dos radioisótopos na terapêutica médica, em relação a 'unidade histórica Curie (Ci) e conversão para Becquerel', qual é a fundamentação científica exata?",
    "options": [
      "O Curie (Ci) é a unidade histórica definida como a atividade de exatamente 1 grama de rádio-226 em equilíbrio: 1 Ci = 3,7 · 10¹⁰ Bq = 37 GBq, correspondendo 1 milicurie (1 mCi) a exatamente 37 MBq e 1 $\\mu$Ci a 37 kBq.",
      "O Curie é a unidade moderna do SI que substituiu o Becquerel em 2018, sendo definida como a atividade de um quilograma de urânio enriquecido puro armazenado à temperatura de zero graus Celsius.",
      "Um Curie equivale a exatamente uma transição nuclear por hora, sendo uma unidade muito mais pequena do que o Becquerel e utilizada apenas para quantificar a radiação cósmica de fundo.",
      "A conversão oficial estabelece que um Curie equivale rigorosamente a um Becquerel ($1\\text{ Ci} = 1\\text{ Bq}$), tendo a designação sido alterada unicamente por motivos de homenagem toponímica."
    ],
    "correctIndex": 0,
    "explanation": "Em biofísica e medicina nuclear, unidade histórica Curie (Ci) e conversão para Becquerel explica-se pelo facto de que o Curie (Ci) é a unidade tradicional definida como a atividade de exatamente 1 grama de Rádio-226 em repouso: 1 Ci = 3,7 · 10¹⁰ Bq = 37 GBq. Um milicurie (1 mCi) equivale a exatamente 37 MBq, e 1 microcurie (1 $\\mu$Ci) equivale a 37 kBq.",
    "distractorAnalysis": [
      "Está incorreta: o Becquerel é a unidade oficial do Sistema Internacional adotada pela CGPM em 1975, enquanto o Curie é uma unidade histórica anterior baseada no rádio-226.",
      "Está incorreta: o Curie é uma unidade imensa comparada com o Becquerel ($1\\text{ Ci} = 37.000.000.000\\text{ Bq}$), não correspondendo a uma transformação por hora.",
      "Está incorreta: o Curie e o Becquerel diferem por um fator de 37 mil milhões, sendo a correta conversão um conhecimento crítico para evitar erros graves de dosagem médica."
    ],
    "nursingApplication": "O enfermeiro converte com segurança prescrições antigas expressas em milicuries para a notação oficial moderna em MBq (ex: 10 mCi = 370 MBq)."
  },
  {
    "id": 8073,
    "topicId": 8,
    "question": "Na administração de radiofármacos e cuidados clínicos de enfermagem em medicina nuclear e oncologia, como se concretiza na prática o conceito de 'unidade histórica Curie (Ci) e conversão para Becquerel'?",
    "options": [
      "O enfermeiro divide o valor em milicuries por um milhão para obter o valor correspondente em MegaBecquerels antes de retirar a dose do frasco blindado colocado no ativímetro.",
      "O enfermeiro efetua conversões entre notações históricas e oficiais com segurança na administração de radiofármacos: multiplica o valor em milicuries por 37 para obter MegaBecquerels (ex.: 10 mCi = 370 MBq; 20 mCi = 740 MBq).",
      "O profissional assume que milicuries e MegaBecquerels são grandezas perfeitamente idênticas na proporção de 1 para 1, administrando 370 mCi sempre que a prescrição indicar 370 MBq.",
      "O enfermeiro converte milicuries para Becquerels adicionando 273 unidades ao valor prescrito, de acordo com as regras habituais de conversão de temperaturas na escala Kelvin."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para unidade histórica Curie (Ci) e conversão para Becquerel baseia-se no princípio: O enfermeiro converte com segurança prescrições antigas expressas em milicuries para a notação oficial moderna em MBq (ex: 10 mCi = 370 MBq). Esta prática concilia a segurança radiológica com os cuidados de excelência ao utente.",
    "distractorAnalysis": [
      "Está incorreta: dividir por um milhão conduziria a erros maciços de subdosagem diagnóstica com inutilização do exame imagiológico.",
      "Está incorreta: administrar 370 mCi em vez de 370 MBq significaria administrar 37 vezes mais radiação, o que constituiria um erro radiológico gravíssimo e potencialmente fatal de sobredosagem.",
      "Está incorreta: adicionar 273 é a fórmula de conversão de graus Celsius para Kelvin e não tem qualquer aplicabilidade à conversão de unidades de radioatividade."
    ],
    "nursingApplication": "O enfermeiro converte com segurança prescrições antigas expressas em milicuries para a notação oficial moderna em MBq (ex: 10 mCi = 370 MBq)."
  },
  {
    "id": 8074,
    "topicId": 8,
    "question": "Um enfermeiro analisa as grandezas físicas, semividas e vias de depuração em 'unidade histórica Curie (Ci) e conversão para Becquerel'. Qual das seguintes afirmações expressa com rigor a relação científica entre as variáveis?",
    "options": [
      "A equivalência métrica decorre da velocidade de sedimentação do rádio-226 em água destilada, correspondendo um Curie a dez mil vezes a constante gravitacional terrestre na superfície do mar.",
      "Um milicurie equivale a exactamente um milésimo de Becquerel ($1\\text{ mCi} = 0,001\\text{ Bq}$), sendo uma unidade ultrassensível aplicada unicamente na deteção de contaminações cutâneas residuais.",
      "A equivalência entre as unidades fundamenta-se na relação $1\\text{ Ci} = 3,7 \\times 10^{10}\\text{ Bq}$, o que determina que $1\\text{ mCi} = 37\\text{ MBq}$ e $1\\text{ }\\mu\\text{Ci} = 37\\text{ kBq}$, permitindo a interoperabilidade dosimétrica universal.",
      "A conversão de Curie para Becquerel varia diariamente consoante a pressão atmosférica e a altitude geográfica do centro hospitalar onde o radiofármaco é manipulado pelo enfermeiro."
    ],
    "correctIndex": 2,
    "explanation": "A relação biofísica e farmacocinética rigorosa demonstra que Um milicurie (1 mCi) equivale a exatamente 37 MBq, e 1 microcurie (1 $\\mu$Ci) equivale a 37 kBq. O domínio destas grandezas capacita o enfermeiro para a prestação de cuidados seguros e esclarecimento de dúvidas.",
    "distractorAnalysis": [
      "Está incorreta: a definição de Curie baseia-se na taxa de decaimento radioativo nuclear e não tem qualquer relação com constantes gravitacionais ou sedimentação em água.",
      "Está incorreta: $1\\text{ mCi} = 37\\text{ milhões de Bq}$ e não 0,001 Bq; o Becquerel é a unidade unitária elementar (1 dps).",
      "Está incorreta: a equivalência entre unidades de medida física é uma constante matemática universal invariável no espaço e no tempo."
    ],
    "nursingApplication": "O enfermeiro converte com segurança prescrições antigas expressas em milicuries para a notação oficial moderna em MBq (ex: 10 mCi = 370 MBq)."
  },
  {
    "id": 8075,
    "topicId": 8,
    "question": "Na física nuclear e farmacocinética dos radioisótopos na terapêutica médica, em relação a 'relação entre a constante de decaimento (λ) e a semivida física (T₁/₂)', qual é a fundamentação científica exata?",
    "options": [
      "A constante de decaimento e a semivida física são grandezas diretamente proporcionais ($\\lambda = T_{1/2} \\cdot \\ln(2)$), indicando que radionuclídeos com semivida de vários séculos sofrem decaimento radioativo mais rápido.",
      "A relação entre a constante $\\lambda$ e o tempo $T_{1/2}$ é governada pela temperatura do meio biológico, anulando-se a constante de decaimento sempre que a temperatura corporal do paciente atinge os 37 graus Celsius.",
      "A constante de decaimento independe matematicamente da semivida física, sendo um valor fixo e idêntico a 0,693 para todos os elementos químicos estáveis e radioativos da tabela periódica moderna.",
      "A constante de decaimento ($\\lambda$) e a semivida física ($T_{1/2}$) relacionam-se inversamente pela constante natural $\\ln(2)$: $\\lambda = \\frac{\\ln(2)}{T_{1/2}} \\approx \\frac{0,693}{T_{1/2}}$, ditando que meias-vidas mais curtas exibem maior taxa de decaimento."
    ],
    "correctIndex": 3,
    "explanation": "Em biofísica e medicina nuclear, relação entre a constante de decaimento (λ) e a semivida física (T₁/₂) explica-se pelo facto de que a constante de decaimento ($\\lambda$) e a semivida ($T_{1/2}$) relacionam-se inversamente pela constante natural $\\ln(2)$: $\\lambda = \\frac{\\ln(2)}{T_{1/2}} \\approx \\frac{0,693}{T_{1/2}}$. Radioisótopos com semivida muito curta (como o Flúor-18, T₁/₂ = 1,8 horas) possuem uma constante $\\lambda$ elevada, desintegrando-se a um ritmo frenético e emitindo alta taxa de radiação por unidade de massa.",
    "distractorAnalysis": [
      "Está incorreta: a relação é estritamente inversa e não direta; quanto mais curta for a semivida, maior é a constante de decaimento $\\lambda$ e maior a atividade específica.",
      "Está incorreta: a constante $\\lambda$ é uma propriedade nuclear intrínseca invariável com a temperatura fisiológica corporal.",
      "Está incorreta: a constante $\\lambda$ é específica de cada radionuclídeo instável (para nuclídeos estáveis $\\lambda = 0$ e $T_{1/2} \to \\infty$) e varia amplamente de fração de segundos a biliões de anos."
    ],
    "nursingApplication": "O enfermeiro reconhece que isótopos de semivida curta exigem administração imediata após a eluição ou entrega pelo ciclotrão."
  },
  {
    "id": 8076,
    "topicId": 8,
    "question": "Na administração de radiofármacos e cuidados clínicos de enfermagem em medicina nuclear e oncologia, como se concretiza na prática o conceito de 'relação entre a constante de decaimento (λ) e a semivida física (T₁/₂)'?",
    "options": [
      "O enfermeiro reconhece que radioisótopos com semivida física curta e constante de decaimento $\\lambda$ elevada exigem administração célere após a eluição do gerador hospitalar ou entrega externa pelo ciclotrão.",
      "O enfermeiro assume que radiofármacos de semivida curta podem ser preparados na véspera e conservados na gaveta da enfermaria comum sem qualquer perda mensurável da atividade prescrita para o exame.",
      "O profissional infere que radioisótopos de semivida curta são totalmente isentos de emissões ionizantes, dispensando a utilização de protetores plúmbeos de seringa durante a administração venosa.",
      "O enfermeiro programa a injeção do radioisótopo com um atraso propositado de doze horas para permitir que o fármaco atinja a temperatura corporal normal e aumente a sua reatividade química tecidual."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para relação entre a constante de decaimento (λ) e a semivida física (T₁/₂) baseia-se no princípio: O enfermeiro reconhece que isótopos de semivida curta exigem administração imediata após a eluição ou entrega pelo ciclotrão. Esta prática concilia a segurança radiológica com os cuidados de excelência ao utente.",
    "distractorAnalysis": [
      "Está incorreta: com uma constante $\\lambda$ elevada, a atividade decai rapidamente em poucas horas; atrasos na administração resultam em subdosagem e perda de qualidade diagnóstica.",
      "Está incorreta: mesmo com semivida curta, o radioisótopo emite radiações penetrantes que impõem o uso de blindagens adequadas de tungsténio ou chumbo para proteção do operador.",
      "Está incorreta: o decaimento nuclear independe da temperatura e aguardar doze horas consumiria várias meias-vidas, inutilizando a dose diagnóstica preparada."
    ],
    "nursingApplication": "O enfermeiro reconhece que isótopos de semivida curta exigem administração imediata após a eluição ou entrega pelo ciclotrão."
  },
  {
    "id": 8077,
    "topicId": 8,
    "question": "Um enfermeiro analisa as grandezas físicas, semividas e vias de depuração em 'relação entre a constante de decaimento (λ) e a semivida física (T₁/₂)'. Qual das seguintes afirmações expressa com rigor a relação científica entre as variáveis?",
    "options": [
      "Radioisótopos com semivida física curta apresentam uma constante $\\lambda$ praticamente nula, o que assegura que o seu ritmo de decaimento atómico seja cem vezes mais lento do que o do urânio estável.",
      "Radioisótopos com semivida física muito curta (como o flúor-18, T1/2 = 110 minutos) possuem uma constante $\\lambda$ elevada, decaindo a um ritmo intenso e emitindo alta taxa de fotões por unidade de massa ativa presente.",
      "A constante $\\lambda$ duplica de valor a cada dez minutos de exposição ao ar condicionado hospitalar, alterando a taxa de contagem dos detetores de cintilação do tomógrafo de medicina nuclear.",
      "A relação analítica entre a semivida física e a constante de decaimento decorre da multiplicação direta de ambas pela aceleração gravítica local expressa em metros por segundo ao quadrado."
    ],
    "correctIndex": 1,
    "explanation": "A relação biofísica e farmacocinética rigorosa demonstra que Radioisótopos com semivida muito curta (como o Flúor-18, T₁/₂ = 1,8 horas) possuem uma constante $\\lambda$ elevada, desintegrando-se a um ritmo frenético e emitindo alta taxa de radiação por unidade de massa. O domínio destas grandezas capacita o enfermeiro para a prestação de cuidados seguros e esclarecimento de dúvidas.",
    "distractorAnalysis": [
      "Está incorreta: como $\\lambda = 0,693/T_{1/2}$, semividas curtas implicam valores elevados de $\\lambda$ e ritmos intensos de transformações nucleares por unidade de tempo.",
      "Está incorreta: a temperatura ambiente e sistemas de ventilação não exercem qualquer efeito sobre a constante nuclear $\\lambda$ dos radioisótopos.",
      "Está incorreta: a relação é puramente quântica e matemática ($\\lambda = \\ln(2)/T_{1/2}$) e independe da aceleração gravítica ou de forças mecânicas externas."
    ],
    "nursingApplication": "O enfermeiro reconhece que isótopos de semivida curta exigem administração imediata após a eluição ou entrega pelo ciclotrão."
  },
  {
    "id": 8078,
    "topicId": 8,
    "question": "Na física nuclear e farmacocinética dos radioisótopos na terapêutica médica, em relação a 'atividade específica de uma amostra radioativa (Bq/g ou Bq/mol)', qual é a fundamentação científica exata?",
    "options": [
      "Define a velocidade mecânica de escoamento do líquido radioativo no interior da cânula do cateter venoso periférico, sendo expressa em mililitros por segundo de infusão contínua no doente.",
      "Consiste na proporção estequiométrica entre a quantidade de água destilada e o volume de etanol farmacêutico utilizado na desinfeção da pele do antebraço antes da punção venosa.",
      "Representa a atividade radioativa por unidade de massa ou por mole de substância; amostras com alta atividade específica permitem administrar atividades diagnósticas elevadas com massas moleculares mínimas sem toxicidade.",
      "Mede a percentagem de partículas alfa emitidas pela amostra que conseguem atravessar uma folha espessa de chumbo maciço sem sofrer absorção fotoelétrica ou dispersão Compton tecidual."
    ],
    "correctIndex": 2,
    "explanation": "Em biofísica e medicina nuclear, atividade específica de uma amostra radioativa (Bq/g ou Bq/mol) explica-se pelo facto de que é a atividade radioativa por unidade de massa ou por mole de substância química. Amostras com alta atividade específica permitem administrar uma dose de radiação diagnóstica com quantidades moleculares quase impercetíveis, evitando qualquer efeito farmacológico secundário ou toxicidade química no doente.",
    "distractorAnalysis": [
      "Está incorreta: o escoamento no cateter venoso é uma grandeza puramente hidrodinâmica de débito e não a atividade específica nuclear.",
      "Está incorreta: a atividade específica refere-se à propriedade radiométrica da amostra nuclear e não à composição de soluções desinfetantes de pele.",
      "Está incorreta: partículas alfa não atravessam folhas espessas de chumbo (são travadas por uma simples folha de papel) e a sua absorção não define a atividade específica."
    ],
    "nursingApplication": "O enfermeiro tranquiliza o utente alérgico explicando que a massa física do fármaco injetada na cintigrafia é da ordem de nanogramas, incapaz de induzir respostas alérgicas medicamentosas."
  },
  {
    "id": 8079,
    "topicId": 8,
    "question": "Na administração de radiofármacos e cuidados clínicos de enfermagem em medicina nuclear e oncologia, como se concretiza na prática o conceito de 'atividade específica de uma amostra radioativa (Bq/g ou Bq/mol)'?",
    "options": [
      "O profissional esclarece que a massa do radiofármaco administrada é tão elevada que substitui a alimentação enteral do doente durante todo o período de internamento no serviço de medicina nuclear.",
      "O enfermeiro aconselha o doente com antecedentes de alergia alimentar a tomar três doses profiláticas de antibióticos de largo espetro antes de receber o radioisótopo diagnóstico prescrito.",
      "O enfermeiro afirma que qualquer exame cintigráfico requer a infusão prévia de um litro de sangue total heterólogo para neutralizar as reações químicas da massa de radiofármaco injetada.",
      "O enfermeiro tranquiliza o utente alérgico explicando que a massa química do radiofármaco injetada na cintigrafia é da ordem de nanogramas a picogramas, incapaz de induzir respostas alérgicas ou efeitos farmacológicos adversos."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para atividade específica de uma amostra radioativa (Bq/g ou Bq/mol) baseia-se no princípio: O enfermeiro tranquiliza o utente alérgico explicando que a massa física do fármaco injetada na cintigrafia é da ordem de nanogramas, incapaz de induzir respostas alérgicas medicamentosas. Esta prática concilia a segurança radiológica com os cuidados de excelência ao utente.",
    "distractorAnalysis": [
      "Está incorreta: as doses radiofarmacêuticas não possuem qualquer valor calórico ou nutricional e não substituem o suporte alimentar do doente.",
      "Está incorreta: antibióticos não previnem reações alérgicas a contrastes e a sua administração profilática em exames de cintigrafia é desprovida de fundamento clínico.",
      "Está incorreta: a administração de traçadores não exige transfusões sanguíneas nem causa reações ponderais que necessitem de reposição de sangue."
    ],
    "nursingApplication": "O enfermeiro tranquiliza o utente alérgico explicando que a massa física do fármaco injetada na cintigrafia é da ordem de nanogramas, incapaz de induzir respostas alérgicas medicamentosas."
  },
  {
    "id": 8080,
    "topicId": 8,
    "question": "Um enfermeiro analisa as grandezas físicas, semividas e vias de depuração em 'atividade específica de uma amostra radioativa (Bq/g ou Bq/mol)'. Qual das seguintes afirmações expressa com rigor a relação científica entre as variáveis?",
    "options": [
      "A elevada atividade específica dos radiofármacos garante a biodistribuição fisiológica dos traçadores sem ocupar mais do que uma fração desprezível dos recetores celulares, preservando a homeostase do doente.",
      "Uma atividade específica reduzida é desejável em todos os exames diagnósticos de medicina nuclear porque permite administrar grandes volumes de metais pesados tóxicos nos tecidos do paciente.",
      "A atividade específica decresce linearmente com a profundidade do vaso sanguíneo puncionado, anulando-se por completo nas artérias coronárias profundas do miocárdio ventricular esquerdo.",
      "A atividade específica é uma propriedade exclusiva das soluções gasosas inalatórias, não podendo ser calculada para radionuclídeos formulados em solução líquida aquosa injetável."
    ],
    "correctIndex": 0,
    "explanation": "A relação biofísica e farmacocinética rigorosa demonstra que Amostras com alta atividade específica permitem administrar uma dose de radiação diagnóstica com quantidades moleculares quase impercetíveis, evitando qualquer efeito farmacológico secundário ou toxicidade química no doente. O domínio destas grandezas capacita o enfermeiro para a prestação de cuidados seguros e esclarecimento de dúvidas.",
    "distractorAnalysis": [
      "Está incorreta: atividades específicas baixas obrigariam a injetar grandes massas do elemento, aumentando o risco de toxicidade química de metais carreadores frios.",
      "Está incorreta: a atividade específica é uma propriedade intrínseca da preparação radiofarmacêutica no frasco e não se altera com a profundidade anatómica do vaso puncionado.",
      "Está incorreta: a atividade específica define-se para qualquer estado físico da matéria (sólido, líquido ou gasoso)."
    ],
    "nursingApplication": "O enfermeiro tranquiliza o utente alérgico explicando que a massa física do fármaco injetada na cintigrafia é da ordem de nanogramas, incapaz de induzir respostas alérgicas medicamentosas."
  },
  {
    "id": 8081,
    "topicId": 8,
    "question": "Na física nuclear e farmacocinética dos radioisótopos na terapêutica médica, em relação a 'definição rigorosa de Meia-Vida Física (T₁/₂ ou período de decaimento)', qual é a fundamentação científica exata?",
    "options": [
      "É o tempo necessário para que a temperatura biológica da solução radioativa arrefeça até atingir o equilíbrio térmico perfeito com o ar ambiente da sala de preparação da câmara quente.",
      "É o intervalo de tempo estatístico necessário para que exatamente metade (50%) dos núcleos atómicos instáveis de uma amostra radioativa decaiam, sendo uma constante física intrínseca de cada radionuclídeo.",
      "É o tempo de permanência obrigatório do doente no leito hospitalar antes de poder ser autorizada a realização do exame cintigráfico na unidade de medicina nuclear de intervenção.",
      "Consiste no período cronológico durante o qual o equipamento tomográfico necessita de permanecer ligado à rede elétrica antes de poder iniciar a aquisição de imagens clínicas digitais."
    ],
    "correctIndex": 1,
    "explanation": "Em biofísica e medicina nuclear, definição rigorosa de Meia-Vida Física (T₁/₂ ou período de semidesintegração) explica-se pelo facto de que é o intervalo de tempo estatístico necessário para que exatamente metade (50%) dos núcleos atómicos instáveis de uma amostra radioativa decaiam. É uma constante física intrínseca de cada nuclídeo, absolutamente independente de variações de temperatura, pressão atmosférica, estado físico ou reações químicas associadas.",
    "distractorAnalysis": [
      "Está incorreta: a semivida física ($T_{1/2}$) é uma constante probabilística nuclear característica de cada isótopo que define o tempo para a atividade decair para metade ($A = A_0/2$).",
      "Está incorreta: a semivida física independe de equilíbrios térmicos ou variações de temperatura física do frasco.",
      "Está incorreta: a semivida física é uma propriedade atómica nuclear e não um protocolo de repouso no leito ou tempo de ligação elétrica de aparelhos."
    ],
    "nursingApplication": "O enfermeiro sabe que cozinhar, congelar ou misturar um radiofármaco não altera em um único microssegundo a sua taxa de decaimento atómico."
  },
  {
    "id": 8082,
    "topicId": 8,
    "question": "Na administração de radiofármacos e cuidados clínicos de enfermagem em medicina nuclear e oncologia, como se concretiza na prática o conceito de 'definição rigorosa de Meia-Vida Física (T₁/₂ ou período de decaimento)'?",
    "options": [
      "O enfermeiro presume que aquecer a seringa de radiofármaco em banho-maria acelera o decaimento nuclear, permitindo reduzir a radiação recebida pelo doente antes da injeção venosa.",
      "O profissional considera que a colocação do radiofármaco no congelador a vinte graus negativos suspende totalmente o decaimento radioativo, permitindo armazenar doses por tempo indefinido.",
      "O enfermeiro sabe que cozinhar, congelar, dissolver ou misturar um radiofármaco não altera em um único microssegundo a sua taxa intrínseca de decaimento radioativo nuclear no organismo do paciente.",
      "O enfermeiro assume que agitar vigorosamente o frasco do radioisótopo neutraliza as forças atómicas e transforma a substância radioativa numa solução fisiológica inerte de água pura."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para definição rigorosa de Meia-Vida Física (T₁/₂ ou período de semidesintegração) baseia-se no princípio: O enfermeiro sabe que cozinhar, congelar ou misturar um radiofármaco não altera em um único microssegundo a sua taxa de decaimento atómico. Esta prática concilia a segurança radiológica com os cuidados de excelência ao utente.",
    "distractorAnalysis": [
      "Está incorreta: aquecer não acelera o decaimento radioativo nuclear e pode degradar quimicamente o vetor molecular orgânico do radiofármaco.",
      "Está incorreta: congelar não impede nem desacelera o decaimento dos átomos radioativos; a atividade decai rigorosamente ao mesmo ritmo.",
      "Está incorreta: forças mecânicas macroscópicas de agitação não têm magnitude para afetar os núcleos atómicos."
    ],
    "nursingApplication": "O enfermeiro sabe que cozinhar, congelar ou misturar um radiofármaco não altera em um único microssegundo a sua taxa de decaimento atómico."
  },
  {
    "id": 8083,
    "topicId": 8,
    "question": "Um enfermeiro analisa as grandezas físicas, semividas e vias de depuração em 'definição rigorosa de Meia-Vida Física (T₁/₂ ou período de decaimento)'. Qual das seguintes afirmações expressa com rigor a relação científica entre as variáveis?",
    "options": [
      "A semivida física varia proporcionalmente à densidade do material em que o radioisótopo é diluído, duplicando quando dissolvido em meios aquosos de elevada viscosidade molecular periférica.",
      "A constância da semivida resulta da absorção contínua de fotões de luz ambiente que mantêm o ritmo de decaimento dos átomos radioativos permanentemente sincronizado nos hospitais.",
      "A meia-vida física é diretamente dependente do volume total de líquido injetado, decaindo os frascos com menor volume de solução a um ritmo dez vezes mais acelerado na bancada clínica.",
      "A invariabilidade da semivida física perante fatores físico-químicos externos decorre da enorme magnitude das energias de ligação nuclear (MeV) face às energias das ligações químicas e agitação térmica (eV)."
    ],
    "correctIndex": 3,
    "explanation": "A relação biofísica e farmacocinética rigorosa demonstra que É uma constante física intrínseca de cada nuclídeo, absolutamente independente de variações de temperatura, pressão atmosférica, estado físico ou reações químicas associadas. O domínio destas grandezas capacita o enfermeiro para a prestação de cuidados seguros e esclarecimento de dúvidas.",
    "distractorAnalysis": [
      "Está incorreta: as energias que estabilizam o núcleo atómico situam-se na escala dos megaeletrão-volts (MeV), ordens de grandeza acima das energias térmicas e químicas habituais (eV).",
      "Está incorreta: a viscosidade ou densidade do solvente químico não exercem qualquer efeito sobre o núcleo atómico radioativo.",
      "Está incorreta: a luz visível não interage com as forças nucleares e o volume da solução altera apenas a concentração ($MBq/mL$) e nunca a semivida física."
    ],
    "nursingApplication": "O enfermeiro sabe que cozinhar, congelar ou misturar um radiofármaco não altera em um único microssegundo a sua taxa de decaimento atómico."
  },
  {
    "id": 8084,
    "topicId": 8,
    "question": "Na física nuclear e farmacocinética dos radioisótopos na terapêutica médica, em relação a 'regra prática das 10 meias-vidas para desclassificação de resíduos hospitalares', qual é a fundamentação científica exata?",
    "options": [
      "Após decorrerem 10 meias-vidas físicas, a fração residual de radioatividade decai para $(1/2)^{10} = 1/1024 \\approx 0,098\\%$ (menos de 0,1% da inicial), permitindo a desclassificação segura de resíduos hospitalares de isótopos de semivida curta.",
      "A regra das dez meias-vidas estabelece que a atividade residual diminui para exatamente dez por cento do valor original, exigindo a incineração imediata em fornos de alta temperatura no primeiro dia.",
      "Ao fim de dez meias-vidas, a atividade da amostra atinge valores rigorosamente nulos por destruição mecânica da totalidade dos eletrões orbitais periféricos presentes na matéria contaminada.",
      "A regra aplica-se exclusivamente a radionuclídeos com semivida física superior a cem anos geológicos, sendo proibida a sua utilização na gestão de resíduos de curta duração em medicina nuclear."
    ],
    "correctIndex": 0,
    "explanation": "Em biofísica e medicina nuclear, regra prática das 10 meias-vidas para desclassificação de resíduos hospitalares explica-se pelo facto de que após decorrerem 10 meias-vidas físicas ($t = 10 \\cdot T_{1/2}$), a fração residual de radioatividade na amostra é de $(1/2)^{10} = 1/1024 \\approx 0,098\\%$ (menos de 0,1% da atividade inicial). Na gestão ambiental e legal de resíduos hospitalares, materiais contaminados com radioisótopos de semivida curta são armazenados durante 10 meias-vidas no abrigo de decaimento até serem libertados como resíduos comuns não-radioativos.",
    "distractorAnalysis": [
      "Está incorreta: a redução não é para 10% (isso seria 1 TVL $\\approx 3,32$ meias-vidas), mas sim para menos de 0,1% ($0,098\\%$).",
      "Está incorreta: a curva exponencial aproxima-se assintoticamente de zero sem nunca atingir matematicamente o valor de atividade nula em tempo finito.",
      "Está incorreta: a regra das 10 meias-vidas aplica-se sobretudo a radionuclídeos de semivida curta (horas a semanas) para decaimento e eliminação em resíduo comum."
    ],
    "nursingApplication": "Para o Tecnécio-99m (T₁/₂ = 6 horas), 10 meias-vidas correspondem a exatamente 60 horas (2,5 dias): o enfermeiro sabe que seringas e algodões usados na segunda-feira podem ser descartados com segurança na quinta-feira."
  },
  {
    "id": 8085,
    "topicId": 8,
    "question": "Na administração de radiofármacos e cuidados clínicos de enfermagem em medicina nuclear e oncologia, como se concretiza na prática o conceito de 'regra prática das 10 meias-vidas para desclassificação de resíduos hospitalares'?",
    "options": [
      "Para o tecnécio-99m, o enfermeiro deve manter as seringas usadas em quarentena durante vinte anos consecutivos em abrigos subterrâneos antes de poder proceder ao seu descarte seguro no lixo comum.",
      "Para o tecnécio-99m (T1/2 = 6 horas), dez meias-vidas correspondem a exatamente 60 horas (2,5 dias): seringas e algodões usados na segunda-feira podem ser libertados com segurança na quinta-feira após medição.",
      "O enfermeiro presume que as agulhas contaminadas com tecnécio-99m deixam de emitir radiação após dez minutos de lavagem em água corrente com detergente enzimático hospitalar de uso geral.",
      "O profissional descarta os resíduos de tecnécio imediatamente no circuito comum de resíduos urbanos sem medição prévia, assumindo que o plástico da seringa absorve a totalidade da emissão gama."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para regra prática das 10 meias-vidas para desclassificação de resíduos hospitalares baseia-se no princípio: Para o Tecnécio-99m (T₁/₂ = 6 horas), 10 meias-vidas correspondem a exatamente 60 horas (2,5 dias): o enfermeiro sabe que seringas e algodões usados na segunda-feira podem ser descartados com segurança na quinta-feira. Esta prática concilia a segurança radiológica com os cuidados de excelência ao utente.",
    "distractorAnalysis": [
      "Está incorreta: 20 anos seria o período aplicável a isótopos de semivida muito longa, não ao Tc-99m cuja semivida é de apenas 6 horas.",
      "Está incorreta: lavar com água não acelera o decaimento nuclear e contamina o sistema de esgotos hospitalar com efluentes ativos.",
      "Está incorreta: o plástico das seringas é transparente aos fotões gama de 140 keV do 99mTc, exigindo retenção temporária até ao decaimento radiológico completo."
    ],
    "nursingApplication": "Para o Tecnécio-99m (T₁/₂ = 6 horas), 10 meias-vidas correspondem a exatamente 60 horas (2,5 dias): o enfermeiro sabe que seringas e algodões usados na segunda-feira podem ser descartados com segurança na quinta-feira."
  },
  {
    "id": 8086,
    "topicId": 8,
    "question": "Um enfermeiro analisa as grandezas físicas, semividas e vias de depuração em 'regra prática das 10 meias-vidas para desclassificação de resíduos hospitalares'. Qual das seguintes afirmações expressa com rigor a relação científica entre as variáveis?",
    "options": [
      "A libertação de resíduos ao fim de dez meias-vidas só é autorizada se o material tiver sido submetido previamente a esterilização por micro-ondas contínuas durante quarenta e oito horas consecutivas.",
      "O decaimento após dez meias-vidas transforma espontaneamente os átomos radioativos em partículas de chumbo pesado que precipitam no fundo dos sacos de plástico de recolha hospitalar.",
      "O armazenamento de materiais contaminados durante dez meias-vidas assegura que a atividade específica residual caia abaixo dos limites legais de isenção, permitindo a sua gestão como resíduos biológicos convencionais.",
      "A taxa de dose superficial dos resíduos ao fim de dez meias-vidas é rigorosamente idêntica à taxa de dose medida no instante inicial da preparação radiofarmacêutica do doente."
    ],
    "correctIndex": 2,
    "explanation": "A relação biofísica e farmacocinética rigorosa demonstra que Na gestão ambiental e legal de resíduos hospitalares, materiais contaminados com radioisótopos de semivida curta são armazenados durante 10 meias-vidas no abrigo de decaimento até serem libertados como resíduos comuns não-radioativos. O domínio destas grandezas capacita o enfermeiro para a prestação de cuidados seguros e esclarecimento de dúvidas.",
    "distractorAnalysis": [
      "Está incorreta: a desclassificação radiológica assenta na medição física da atividade residual com radiómetros calibrados e não em esterilização por micro-ondas.",
      "Está incorreta: os núcleos decaem para os respetivos produtos filhos estáveis (como 99Tc no caso do 99mTc) e não para chumbo pesado.",
      "Está incorreta: a taxa de dose reduz-se em mais de mil vezes ($1/1024$), tornando a emissão praticamente indistinguível da radiação natural de fundo."
    ],
    "nursingApplication": "Para o Tecnécio-99m (T₁/₂ = 6 horas), 10 meias-vidas correspondem a exatamente 60 horas (2,5 dias): o enfermeiro sabe que seringas e algodões usados na segunda-feira podem ser descartados com segurança na quinta-feira."
  },
  {
    "id": 8087,
    "topicId": 8,
    "question": "Na física nuclear e farmacocinética dos radioisótopos na terapêutica médica, em relação a 'cálculo da atividade residual ao fim de n meias-vidas', qual é a fundamentação científica exata?",
    "options": [
      "A atividade decai de acordo com uma regressão aritmética simples: $A(n) = A_0 - 0,1 \\cdot n$, reduzindo-se exatamente dez por cento da dose original a cada período decorrido no interior do hospital.",
      "A atividade remanescente ao fim de duas meias-vidas atinge o valor valor rigorosamente nulo em virtude da recombinação quântica dos fotões emitidos na matriz cristalina do invólucro protetor de chumbo.",
      "A quantidade de radiação remanescente duplica a cada meia-vida decorrida caso a amostra radioativa seja mantida em repouso mecânico no interior de um armário frigorífico a quatro graus Celsius.",
      "A atividade após n meias-vidas decai de acordo com uma progressão geométrica em base dois: $A(n) = \\frac{A_0}{2^n}$, restando 50% após 1 meia-vida, 25% após 2, 12,5% após 3, 6,25% após 4 e 3,125% após 5 meias-vidas."
    ],
    "correctIndex": 3,
    "explanation": "Em biofísica e medicina nuclear, cálculo da atividade residual ao fim de n meias-vidas explica-se pelo facto de que a atividade após n meias-vidas decai segundo a potência de dois: $A(n) = A_0 / 2^n$. Ao fim de 1 meia-vida sobra 50%, com 2 meias-vidas 25%, com 3 meias-vidas 12,5%, com 4 meias-vidas 6,25% e com 5 meias-vidas apenas 3,125%.",
    "distractorAnalysis": [
      "Está incorreta: o decaimento não é linear nem subtrai uma fração aritmética constante da dose inicial.",
      "Está incorreta: após 2 meias-vidas resta ainda 25% da atividade original ($1/2^2 = 1/4$); a atenuação atómica nunca atinge o valor zero em tempo finito.",
      "Está incorreta: o arrefecimento a 4°C não aumenta nem duplica a atividade radioativa; o decaimento é estritamente redutor e invariável com o frio."
    ],
    "nursingApplication": "Se uma seringa com 800 MBq de ⁹⁹ᵐTc ficar retida 12 horas (2 meias-vidas de 6h), o enfermeiro sabe que a atividade remanescente na seringa caiu para 200 MBq."
  },
  {
    "id": 8088,
    "topicId": 8,
    "question": "Na administração de radiofármacos e cuidados clínicos de enfermagem em medicina nuclear e oncologia, como se concretiza na prática o conceito de 'cálculo da atividade residual ao fim de n meias-vidas'?",
    "options": [
      "Se uma seringa com 800 MBq de 99mTc não for administrada e permanecer retida durante 12 horas (duas meias-vidas de 6h), o enfermeiro sabe que a atividade remanescente na seringa caiu para 200 MBq ($800/4 = 200$).",
      "Com duas meias-vidas decorridas, o enfermeiro calcula que a atividade na seringa caiu para metade do valor inicial, restando exatamente 400 MBq de tecnécio-99m prontos para administração diagnóstica.",
      "Ao fim de doze horas de retenção, o profissional assume que a totalidade da atividade de 800 MBq foi aniquilada, não restando qualquer fotão de radiação detetável no interior da seringa plástica.",
      "O enfermeiro presume que a atividade remanescente na seringa após 12 horas aumentou para 1600 MBq em virtude da acumulação espontânea de energia de decaimento atómico no líquido."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para cálculo da atividade residual ao fim de n meias-vidas baseia-se no princípio: Se uma seringa com 800 MBq de ⁹⁹ᵐTc ficar retida 12 horas (2 meias-vidas de 6h), o enfermeiro sabe que a atividade remanescente na seringa caiu para 200 MBq. Esta prática concilia a segurança radiológica com os cuidados de excelência ao utente.",
    "distractorAnalysis": [
      "Está incorreta: cair para metade (400 MBq) ocorre ao fim de 1 meia-vida (6 horas) e não de duas meias-vidas (12 horas).",
      "Está incorreta: a atividade residual (200 MBq) é ainda uma atividade clínica muito significativa e perigosa se manipulada sem blindagem adequada.",
      "Está incorreta: a atividade decai continuamente e nunca aumenta de forma espontânea numa amostra isolada sem novos radionuclídeos gerados."
    ],
    "nursingApplication": "Se uma seringa com 800 MBq de ⁹⁹ᵐTc ficar retida 12 horas (2 meias-vidas de 6h), o enfermeiro sabe que a atividade remanescente na seringa caiu para 200 MBq."
  },
  {
    "id": 8089,
    "topicId": 8,
    "question": "Um enfermeiro analisa as grandezas físicas, semividas e vias de depuração em 'cálculo da atividade residual ao fim de n meias-vidas'. Qual das seguintes afirmações expressa com rigor a relação científica entre as variáveis?",
    "options": [
      "A dependência temporal do decaimento baseia-se numa equação polinomial cúbica que atinge o seu valor mínimo na presença de oxigénio gasoso a cem por cento de saturação atmosférica.",
      "A relação geométrica das potências de dois expressa o carácter fracionário e estocástico do decaimento radioativo, permitindo prever a atividade residual através da relação: $\\frac{A(t)}{A_0} = 2^{-t/T_{1/2}} = e^{-\\lambda \\cdot t}$.",
      "O cálculo por potências de dois aplica-se unicamente a radiofármacos administrados por via oral, sendo as injeções intravenosas governadas por potências de dez de base decimal pura.",
      "A atividade remanescente varia com o quadrado do tempo decorrido, triplicando a taxa de emissão a cada período de três meias-vidas consecutivas assinaladas no cronómetro hospitalar."
    ],
    "correctIndex": 1,
    "explanation": "A relação biofísica e farmacocinética rigorosa demonstra que Ao fim de 1 meia-vida sobra 50%, com 2 meias-vidas 25%, com 3 meias-vidas 12,5%, com 4 meias-vidas 6,25% e com 5 meias-vidas apenas 3,125%. O domínio destas grandezas capacita o enfermeiro para a prestação de cuidados seguros e esclarecimento de dúvidas.",
    "distractorAnalysis": [
      "Está incorreta: a cinética nuclear de primeira ordem independe de concentrações de oxigénio gasoso ou modelos polinomiais cúbicos.",
      "Está incorreta: a via de administração não altera a lei fundamental de decaimento físico do radioisótopo, que é universal para qualquer formulação médica.",
      "Está incorreta: a atividade diminui monotonamente e nunca triplica com o tempo."
    ],
    "nursingApplication": "Se uma seringa com 800 MBq de ⁹⁹ᵐTc ficar retida 12 horas (2 meias-vidas de 6h), o enfermeiro sabe que a atividade remanescente na seringa caiu para 200 MBq."
  },
  {
    "id": 8090,
    "topicId": 8,
    "question": "Na física nuclear e farmacocinética dos radioisótopos na terapêutica médica, em relação a 'semivida do Iodo-131 e armazenamento de resíduos por 80 dias', qual é a fundamentação científica exata?",
    "options": [
      "O iodo-131 apresenta uma semivida física de apenas oito minutos, pelo que todos os resíduos contaminados na enfermaria podem ser descartados no contentor comum logo no final do mesmo turno de trabalho.",
      "A semivida de oito dias do iodo-131 permite que os lençóis de cama utilizados pelo doente sejam enviados imediatamente para a lavandaria urbana da cidade em sacos de tecido permeáveis comuns.",
      "O iodo-131 possui semivida física de 8 dias ($T_{1/2} = 8,02$ d); a regra das 10 meias-vidas exige que pensos e roupas contaminadas permaneçam retidos no abrigo de resíduos cerca de 80 dias antes da desclassificação.",
      "O período de decaimento do iodo-131 exige o enterro subterrâneo dos resíduos hospitalares em minas desativadas de sal durante mais de dez mil anos para evitar a contaminação da atmosfera."
    ],
    "correctIndex": 2,
    "explanation": "Em biofísica e medicina nuclear, semivida do Iodo-131 e armazenamento de resíduos por 80 dias explica-se pelo facto de que o Iodo-131 possui uma semivida física de 8 dias ($T_{1/2} = 8,02$ dias). A aplicação da regra das 10 meias-vidas para o I-131 exige que todos os sacos de roupa, fraldas e pensos contaminados fiquem retidos no expurgo radioativo durante pelo menos 80 dias (cerca de 2,5 a 3 meses) antes da incineração comum.",
    "distractorAnalysis": [
      "Está incorreta: a semivida do 131I é de 8 dias e não de 8 minutos; resíduos precoces contêm elevada radioatividade ionizante de penetração gama e beta.",
      "Está incorreta: os lençóis contaminados com fluidos corporais de doentes com 131I devem ficar confinados no expurgo radioativo até decaimento comprovado e nunca seguir para lavandarias urbanas comuns.",
      "Está incorreta: 10.000 anos aplicam-se ao combustível nuclear irradiado de centrais elétricas (como o plutónio-239) e não a resíduos médicos de iodo-131."
    ],
    "nursingApplication": "O enfermeiro rotula minuciosamente cada contentor de resíduos com a data da colheita, o isótopo envolvido e a data calculada para a medição final com o radiómetro e libertação."
  },
  {
    "id": 8091,
    "topicId": 8,
    "question": "Na administração de radiofármacos e cuidados clínicos de enfermagem em medicina nuclear e oncologia, como se concretiza na prática o conceito de 'semivida do Iodo-131 e armazenamento de resíduos por 80 dias'?",
    "options": [
      "O enfermeiro descarta os resíduos misturando-os com solventes orgânicos inflamáveis para acelerar a combustão espontânea dos radionuclídeos no interior do abrigo de decaimento temporário.",
      "O profissional guarda as fraldas contaminadas dos doentes nos armários de medicamentos da enfermaria para facilitar a consulta rápida das etiquetas de dosagem pelos colegas de equipa.",
      "O enfermeiro evita qualquer tipo de sinalização exterior nos contentores de resíduos radioativos para não assustar os profissionais de limpeza e os acompanhantes dos doentes internados.",
      "O enfermeiro rotula os contentores de resíduos com a data de fecho, o radioisótopo, a atividade inicial estimada e a data prevista para a medição radiométrica final antes da autorização de descarte formal."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para semivida do Iodo-131 e armazenamento de resíduos por 80 dias baseia-se no princípio: O enfermeiro rotula minuciosamente cada contentor de resíduos com a data da colheita, o isótopo envolvido e a data calculada para a medição final com o radiómetro e libertação. Esta prática concilia a segurança radiológica com os cuidados de excelência ao utente.",
    "distractorAnalysis": [
      "Está incorreta: misturar resíduos com solventes inflamáveis cria grave risco de incêndio ou explosão e dispersão de poeiras ativas.",
      "Está incorreta: materiais radioativos devem ser armazenados exclusivamente no expurgo quente ou abrigo de decaimento, sendo terminantemente proibido o armazenamento em áreas de medicação comum.",
      "Está incorreta: a sinalização regulamentar de perigo radiológico é obrigatória por lei para prevenir acessos inadvertidos e proteger os trabalhadores."
    ],
    "nursingApplication": "O enfermeiro rotula minuciosamente cada contentor de resíduos com a data da colheita, o isótopo envolvido e a data calculada para a medição final com o radiómetro e libertação."
  },
  {
    "id": 8092,
    "topicId": 8,
    "question": "Um enfermeiro analisa as grandezas físicas, semividas e vias de depuração em 'semivida do Iodo-131 e armazenamento de resíduos por 80 dias'. Qual das seguintes afirmações expressa com rigor a relação científica entre as variáveis?",
    "options": [
      "Ao fim de 80 dias de armazenamento temporário (10 meias-vidas de 8 dias), a atividade residual do iodo-131 cai para menos de um milésimo do valor inicial, permitindo a monitorização com contador Geiger e descarte regulamentar.",
      "A retenção de resíduos de iodo-131 durante 80 dias provoca a proliferação descontrolada de fungos termofílicos radioativos capazes de digerir os sacos de chumbo protetores colocados no expurgo.",
      "O período de 80 dias destina-se a permitir que o iodo-131 absorva neutrões do solo e se converta em iodo estável de grau alimentar para enriquecimento do sal de cozinha hospitalar.",
      "A atividade dos resíduos aumenta linearmente durante os primeiros 80 dias, após o que cessa de forma instantânea e definitiva em menos de um segundo por neutralização quântica."
    ],
    "correctIndex": 0,
    "explanation": "A relação biofísica e farmacocinética rigorosa demonstra que A aplicação da regra das 10 meias-vidas para o I-131 exige que todos os sacos de roupa, fraldas e pensos contaminados fiquem retidos no expurgo radioativo durante pelo menos 80 dias (cerca de 2,5 a 3 meses) antes da incineração comum. O domínio destas grandezas capacita o enfermeiro para a prestação de cuidados seguros e esclarecimento de dúvidas.",
    "distractorAnalysis": [
      "Está incorreta: fungos não digerem chumbo nem afetam a física nuclear dos radionuclídeos contidos nos resíduos.",
      "Está incorreta: resíduos radioativos hospitalares nunca são reutilizados na alimentação; o decaimento apenas visa a sua eliminação ambientalmente segura.",
      "Está incorreta: a atividade decai monotonamente desde o primeiro instante e não aumenta durante os 80 dias."
    ],
    "nursingApplication": "O enfermeiro rotula minuciosamente cada contentor de resíduos com a data da colheita, o isótopo envolvido e a data calculada para a medição final com o radiómetro e libertação."
  },
  {
    "id": 8093,
    "topicId": 8,
    "question": "Na física nuclear e farmacocinética dos radioisótopos na terapêutica médica, em relação a 'tempo de decaimento e dose ocupacional em visitas a doentes', qual é a fundamentação científica exata?",
    "options": [
      "A taxa de dose externa emitida pelo doente duplica continuamente hora a hora durante os primeiros cinco dias após a administração do radiofármaco, aumentando o perigo de irradiação para a equipa.",
      "À medida que as horas decorrem após a administração terapêutica, a taxa de dose externa emitida pelo doente diminui fortemente por decaimento físico e excreção biológica, reduzindo a exposição ocupacional nos cuidados diretos.",
      "O doente deixa de emitir qualquer radiação externa imediatamente após a deglutição do radiofármaco, visto que a mucosa gástrica atua como uma barreira impermeável aos fotões de radiação gama.",
      "A radiação emitida pelo doente permanece perfeitamente constante durante toda a vida do paciente, obrigando à interdição permanente do quarto de isolamento após a concessão da alta clínica."
    ],
    "correctIndex": 1,
    "explanation": "Em biofísica e medicina nuclear, tempo de decaimento e dose ocupacional em visitas a doentes explica-se pelo facto de que à medida que as horas passam após a administração do radiofármaco terapêutico, a taxa de dose emitida pelo doente cai drasticamente devido ao decaimento físico contínuo. No segundo dia após a dose de Iodo-131, a taxa de dose externa à cabeceira já é menos de metade da taxa inicial medida na primeira hora.",
    "distractorAnalysis": [
      "Está incorreta: a taxa de dose decresce de modo contínuo e progressivo, nunca duplicando ou aumentando com o decorrer das horas.",
      "Está incorreta: os fotões gama de 364 keV do 131I atravessam facilmente a espessura do corpo do doente, emitindo taxas de dose que exigem regras de proteção de tempo, distância e blindagem.",
      "Está incorreta: após o decaimento físico e a depuração biológica, a atividade atinge valores de base seguros, sendo o quarto descontaminado e reutilizado normalmente."
    ],
    "nursingApplication": "O enfermeiro programa os procedimentos de higiene e pensos mais demorados para o segundo ou terceiro dia de internamento, quando a emissão radioativa do doente já é substancialmente menor."
  },
  {
    "id": 8094,
    "topicId": 8,
    "question": "Na administração de radiofármacos e cuidados clínicos de enfermagem em medicina nuclear e oncologia, como se concretiza na prática o conceito de 'tempo de decaimento e dose ocupacional em visitas a doentes'?",
    "options": [
      "O enfermeiro concentra todas as intervenções presenciais demoradas na primeira hora após a administração oral do radioisótopo, aproveitando o momento em que a atividade gástrica está no seu pico máximo.",
      "O profissional recusa entrar no quarto de isolamento durante os primeiros sete dias, instruindo o doente a realizar os seus próprios curativos cirúrgicos e punções venosas no domicílio hospitalar.",
      "O enfermeiro programa os cuidados de higiene mais demorados e as trocas de pensos complexas para o segundo ou terceiro dia de internamento, aproveitando a substancial redução da taxa de dose corporal do doente.",
      "O enfermeiro transfere o doente tratado para a enfermaria geral de pediatria nas primeiras seis horas para beneficiar do efeito atenuador do ar condicionado central das enfermarias pediátricas."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para tempo de decaimento e dose ocupacional em visitas a doentes baseia-se no princípio: O enfermeiro programa os procedimentos de higiene e pensos mais demorados para o segundo ou terceiro dia de internamento, quando a emissão radioativa do doente já é substancialmente menor. Esta prática concilia a segurança radiológica com os cuidados de excelência ao utente.",
    "distractorAnalysis": [
      "Está incorreta: nas primeiras horas a taxa de dose externa é máxima e o risco de vómito e contaminação é mais elevado; as intervenções nessa fase devem ser breves e essenciais.",
      "Está incorreta: os cuidados essenciais de enfermagem nunca podem ser omitidos; devem ser realizados com segurança, planeamento prévio e tempo estritamente controlado.",
      "Está incorreta: transferir um doente radioativo para enfermarias comuns ou pediatria viola gravemente as normas de radioproteção e expõe populações altamente vulneráveis."
    ],
    "nursingApplication": "O enfermeiro programa os procedimentos de higiene e pensos mais demorados para o segundo ou terceiro dia de internamento, quando a emissão radioativa do doente já é substancialmente menor."
  },
  {
    "id": 8095,
    "topicId": 8,
    "question": "Um enfermeiro analisa as grandezas físicas, semividas e vias de depuração em 'tempo de decaimento e dose ocupacional em visitas a doentes'. Qual das seguintes afirmações expressa com rigor a relação científica entre as variáveis?",
    "options": [
      "A taxa de dose externa mantém-se inalterada a 500 milisieverts por hora durante todo o mês seguinte à toma da cápsula de radiofármaco, independentemente da diurese registada na folha clínica.",
      "A diminuição da dose ao longo do tempo decorre exclusivamente da evaporação transcutânea do iodo-131 sob a forma de vapor aquecido libertado pelos poros da pele durante a respiração normal.",
      "A dose emitida pelo paciente diminui unicamente quando este é submetido a banhos diários de imersão em água oxigenada concentrada na banheira privativa do quarto de isolamento hospitalar.",
      "A rápida depuração renal nas primeiras 48 horas associada à constante de decaimento físico reduz a taxa de dose externa a 1 metro para valores frequentemente inferiores a 20 microsieverts por hora na altura da alta."
    ],
    "correctIndex": 3,
    "explanation": "A relação biofísica e farmacocinética rigorosa demonstra que No segundo dia após a dose de Iodo-131, a taxa de dose externa à cabeceira já é menos de metade da taxa inicial medida na primeira hora. O domínio destas grandezas capacita o enfermeiro para a prestação de cuidados seguros e esclarecimento de dúvidas.",
    "distractorAnalysis": [
      "Está incorreta: taxas de 500 mSv/h seriam letais em poucas horas e não correspondem à realidade da radioiodoterapia; na alta a taxa situa-se abaixo de 20 $\\mu$Sv/h a 1 metro.",
      "Está incorreta: a via primordial de eliminação é a excreção urinária renal e não a evaporação transcutânea respiratória maciça.",
      "Está incorreta: o banho comum com água tépida e sabão neutro remove contaminações cutâneas superficiais sem necessidade de soluções agressivas de água oxigenada."
    ],
    "nursingApplication": "O enfermeiro programa os procedimentos de higiene e pensos mais demorados para o segundo ou terceiro dia de internamento, quando a emissão radioativa do doente já é substancialmente menor."
  },
  {
    "id": 8096,
    "topicId": 8,
    "question": "Na física nuclear e farmacocinética dos radioisótopos na terapêutica médica, em relação a 'conceito de Meia-Vida Biológica (Tb)', qual é a fundamentação científica exata?",
    "options": [
      "A Meia-Vida Biológica ($T_b$) é o tempo necessário para o organismo eliminar naturalmente metade da quantidade de um fármaco por vias fisiológicas de depuração (urina, fezes e suor), sendo independente do decaimento físico nuclear.",
      "A Meia-Vida Biológica é o tempo que um núcleo atómico radioativo demora a reduzir para metade a sua atividade radioativa quando colocado no interior de uma solução salina estéril em repouso no laboratório.",
      "Representa o intervalo de tempo necessário para que a célula tumoral duplique o seu volume molecular antes de sofrer apoptose induzida pela radiação gama do radioisótopo administrado ao doente.",
      "Consiste no período de tempo durante o qual o profissional de enfermagem pode trabalhar no serviço de medicina nuclear antes de atingir o limite regulamentar anual de exposição ocupacional autorizada."
    ],
    "correctIndex": 0,
    "explanation": "Em biofísica e medicina nuclear, conceito de Meia-Vida Biológica (Tb) explica-se pelo facto de que é o tempo necessário para que o organismo humano elimine naturalmente metade da quantidade de uma substância química ou radiofármaco através de processos biológicos e vias de excreção fisiológica (urina, fezes, suor, respiração e bílis). Depende exclusivamente do estado funcional dos órgãos excretores do doente (função renal, hepática e hidratação), sendo independente da semivida física do isótopo.",
    "distractorAnalysis": [
      "Está incorreta: a transformação nuclear física refere-se ao decaimento radioativo e não à semivida biológica do fármaco.",
      "Está incorreta: o tempo de duplicação tumoral é um parâmetro da cinética de proliferação celular neoplásica e não a meia-vida biológica de depuração.",
      "Está incorreta: a semivida biológica não se relaciona com os limites dosimétricos anuais dos trabalhadores profissionalmente expostos."
    ],
    "nursingApplication": "O enfermeiro avalia a função renal do doente através da taxa de filtração glomerular e da diurese para antecipar a taxa de eliminação biológica dos fármacos."
  },
  {
    "id": 8097,
    "topicId": 8,
    "question": "Na administração de radiofármacos e cuidados clínicos de enfermagem em medicina nuclear e oncologia, como se concretiza na prática o conceito de 'conceito de Meia-Vida Biológica (Tb)'?",
    "options": [
      "O enfermeiro suspende a hidratação oral em doentes com insuficiência renal com o objetivo de reter o radiofármaco durante mais tempo na circulação para melhorar a resolução ótica da cintigrafia.",
      "O enfermeiro monitoriza atentamente a função renal (creatinina sérica e taxa de filtração glomerular) e a diurese horária do doente, reconhecendo que a insuficiência renal prolonga a meia-vida biológica e aumenta a dose absorvida.",
      "O profissional presume que a via renal é irrelevante na eliminação de radiofármacos, baseando toda a vigilância clínica exclusivamente na contagem dos movimentos respiratórios por minuto.",
      "O enfermeiro assume que a meia-vida biológica de qualquer radiofármaco é rigorosamente igual a vinte e quatro horas em todos os seres humanos, independentemente da sua idade ou patologias renais prévias."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para conceito de Meia-Vida Biológica (Tb) baseia-se no princípio: O enfermeiro avalia a função renal do doente através da taxa de filtração glomerular e da diurese para antecipar a taxa de eliminação biológica dos fármacos. Esta prática concilia a segurança radiológica com os cuidados de excelência ao utente.",
    "distractorAnalysis": [
      "Está incorreta: a restrição hídrica em insuficiência renal aumentaria ainda mais a toxicidade e a dose absorvida na bexiga e nos órgãos saudáveis.",
      "Está incorreta: a grande maioria dos radiotraçadores diagnósticos é eliminada prioritariamente por via renal na urina.",
      "Está incorreta: a semivida biológica varia fortemente consoante a molécula, o estado de hidratação, a idade e as comorbilidades nefrológicas ou hepáticas do doente."
    ],
    "nursingApplication": "O enfermeiro avalia a função renal do doente através da taxa de filtração glomerular e da diurese para antecipar a taxa de eliminação biológica dos fármacos."
  },
  {
    "id": 8098,
    "topicId": 8,
    "question": "Um enfermeiro analisa as grandezas físicas, semividas e vias de depuração em 'conceito de Meia-Vida Biológica (Tb)'. Qual das seguintes afirmações expressa com rigor a relação científica entre as variáveis?",
    "options": [
      "A Meia-Vida Biológica é determinada unicamente pelo número de massa atómica do radioisótopo, sendo impossível que a hidratação oral ou diuréticos alterem o ritmo de excreção urinária do fármaco.",
      "A eliminação biológica acelera automaticamente a meia-vida física do radionuclídeo no núcleo do átomo através de um mecanismo de transferência de eletrões plasmáticos ativados.",
      "A Meia-Vida Biológica ($T_b$) depende estritamente das vias de transporte metabólico e da integridade funcional dos órgãos de eliminação do doente, sendo completamente independente da constante física de decaimento nuclear ($\\lambda$).",
      "A Meia-Vida Biológica atinge valores negativos sempre que o doente consome alimentos ricos em fibras insolúveis que acelerem o trânsito cólico no período pós-administração."
    ],
    "correctIndex": 2,
    "explanation": "A relação biofísica e farmacocinética rigorosa demonstra que Depende exclusivamente do estado funcional dos órgãos excretores do doente (função renal, hepática e hidratação), sendo independente da semivida física do isótopo. O domínio destas grandezas capacita o enfermeiro para a prestação de cuidados seguros e esclarecimento de dúvidas.",
    "distractorAnalysis": [
      "Está incorreta: a hidratação e os diuréticos aceleram significativamente a filtração urinária, encurtando a semivida biológica da fração livre de radiotraçadores.",
      "Está incorreta: a fisiologia corporal não altera as forças nucleares nem modifica a constante de decaimento físico nuclear $\\lambda$ dos radioisótopos.",
      "Está incorreta: períodos de semivida são grandezas temporais positivas e nunca assumem valores negativos."
    ],
    "nursingApplication": "O enfermeiro avalia a função renal do doente através da taxa de filtração glomerular e da diurese para antecipar a taxa de eliminação biológica dos fármacos."
  },
  {
    "id": 8099,
    "topicId": 8,
    "question": "Na física nuclear e farmacocinética dos radioisótopos na terapêutica médica, em relação a 'conceito e fórmula da Meia-Vida Efetiva (Te)', qual é a fundamentação científica exata?",
    "options": [
      "A Meia-Vida Efetiva calcula-se através da soma aritmética simples dos dois tempos de semivida envolvidos: $T_e = T_f + T_b$, o que resulta sempre num tempo de permanência corporal mais longo do que a semivida física isolada.",
      "A Meia-Vida Efetiva representa o produto dos dois tempos dividido pela constante pi ($T_e = \\frac{T_f \\cdot T_b}{\\pi}$), sendo aplicável unicamente a radiofármacos administrados sob a forma de microesferas de vidro.",
      "A Meia-Vida Efetiva expressa a duração do intervalo de tempo necessário para que a equipa de enfermagem consiga descontaminar a bancada da câmara quente após um derrame acidental de tecnécio.",
      "A Meia-Vida Efetiva ($T_e$) quantifica o ritmo real com que a radioatividade no organismo diminui pela ação conjunta simultânea do decaimento físico ($T_f$) e da depuração biológica ($T_b$): $\\frac{1}{T_e} = \\frac{1}{T_f} + \\frac{1}{T_b}$."
    ],
    "correctIndex": 3,
    "explanation": "Em biofísica e medicina nuclear, conceito e fórmula da Meia-Vida Efetiva (Te) explica-se pelo facto de que é o tempo real em que a radioatividade interna presente no corpo do doente diminui para metade pela ação combinada simultânea do decaimento radioativo físico e da eliminação biológica. Calcula-se pela relação harmónica: $\\frac{1}{T_e} = \\frac{1}{T_f} + \\frac{1}{T_b}$, o que equivale matematicamente a $T_e = \\frac{T_f \\cdot T_b}{T_f + T_b}$.",
    "distractorAnalysis": [
      "Está incorreta: as meias-vidas nunca se somam aritmeticamente; o tempo efetivo é sempre mais curto do que o tempo físico e biológico isolados.",
      "Está incorreta: a fórmula harmónica não envolve a constante $\\pi$, aplicando-se universalmente a qualquer radiofármaco no organismo vivo.",
      "Está incorreta: a meia-vida efetiva é uma grandeza biofísica de retenção radioativa no paciente e não o tempo de limpeza de bancadas laboratoriais."
    ],
    "nursingApplication": "A meia-vida efetiva é SEMPRE estritamente menor do que a menor das duas meias-vidas individuais ($T_e < T_f$ e $T_e < T_b$)."
  },
  {
    "id": 8100,
    "topicId": 8,
    "question": "Na administração de radiofármacos e cuidados clínicos de enfermagem em medicina nuclear e oncologia, como se concretiza na prática o conceito de 'conceito e fórmula da Meia-Vida Efetiva (Te)'?",
    "options": [
      "Em virtude da relação harmónica dos processos concorrentes de eliminação, a Meia-Vida Efetiva ($T_e$) é obrigatoriamente estritamente menor do que a menor das duas meias-vidas isoladas ($T_e < T_f$ e $T_e < T_b$).",
      "A Meia-Vida Efetiva é sempre rigorosamente igual à média aritmética simples entre a meia-vida física e a meia-vida biológica: $T_e = \\frac{T_f + T_b}{2}$, situando-se exactamente no ponto intermédio entre ambas.",
      "A Meia-Vida Efetiva excede sempre a semivida física do radionuclídeo porque a circulação sanguínea abriga os átomos radioativos e protege os núcleos atómicos do decaimento físico natural.",
      "A Meia-Vida Efetiva só pode ser calculada se a meia-vida física do radioisótopo for superior a dez anos, sendo nula para todos os radiofármacos de uso diagnóstico habitual em medicina nuclear."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para conceito e fórmula da Meia-Vida Efetiva (Te) baseia-se no princípio: A meia-vida efetiva é SEMPRE estritamente menor do que a menor das duas meias-vidas individuais ($T_e < T_f$ e $T_e < T_b$). Esta prática concilia a segurança radiológica com os cuidados de excelência ao utente.",
    "distractorAnalysis": [
      "Está incorreta: a média harmónica é sempre inferior à média aritmética; $T_e$ nunca é a média aritmética simples.",
      "Está incorreta: o organismo nunca abriga os núcleos nem impede o decaimento físico; a eliminação biológica acelera a redução da radioatividade retida.",
      "Está incorreta: a fórmula de $T_e$ aplica-se a qualquer radiofármaco, independentemente da magnitude das meias-vidas envolvidas."
    ],
    "nursingApplication": "A meia-vida efetiva é SEMPRE estritamente menor do que a menor das duas meias-vidas individuais ($T_e < T_f$ e $T_e < T_b$)."
  },
  {
    "id": 8101,
    "topicId": 8,
    "question": "Um enfermeiro analisa as grandezas físicas, semividas e vias de depuração em 'conceito e fórmula da Meia-Vida Efetiva (Te)'. Qual das seguintes afirmações expressa com rigor a relação científica entre as variáveis?",
    "options": [
      "A relação cinemática dita que a semivida efetiva resulta da subtração direta da depuração renal à meia-vida nuclear: $T_e = T_f - T_b$, atingindo valor zero se o doente apresentar função renal normal.",
      "A relação matemática exata estabelece que a taxa global de eliminação resulta da soma das taxas parciais: $\\frac{1}{T_e} = \\frac{1}{T_f} + \\frac{1}{T_b} \\implies T_e = \\frac{T_f \\cdot T_b}{T_f + T_b}$, operando a redução radioativa nos tecidos.",
      "O cálculo da meia-vida efetiva resulta da média aritmética simples dos dois períodos temporais: $T_e = \\frac{T_f + T_b}{2}$, sendo perfeitamente equidistante entre a componente física e a componente fisiológica.",
      "A semivida efetiva expressa o produto multiplicativo direto dos dois tempos de semivida: $T_e = T_f \\cdot T_b$, o que amplia grandemente o tempo de internamento do doente no quarto blindado de isolamento."
    ],
    "correctIndex": 1,
    "explanation": "A relação biofísica e farmacocinética rigorosa demonstra que Calcula-se pela relação harmónica: $\\frac{1}{T_e} = \\frac{1}{T_f} + \\frac{1}{T_b}$, o que equivale matematicamente a $T_e = \\frac{T_f \\cdot T_b}{T_f + T_b}$. O domínio destas grandezas capacita o enfermeiro para a prestação de cuidados seguros e esclarecimento de dúvidas.",
    "distractorAnalysis": [
      "Está incorreta: as meias-vidas nunca se subtraem linearmente; o modelo de eliminação simultânea assenta na soma das constantes de decaimento ($\\lambda_e = \\lambda_f + \\lambda_b$).",
      "Está incorreta: a meia-vida efetiva é uma média harmónica ponderada e não a média aritmética simples; $T_e$ é sempre estritamente menor do que $T_f$ e $T_b$.",
      "Está incorreta: multiplicar diretamente os tempos ($T_f \\cdot T_b$) geraria grandezas com dimensão de tempo ao quadrado e valores absurdamente dilatados de retenção biológica."
    ],
    "nursingApplication": "A meia-vida efetiva é SEMPRE estritamente menor do que a menor das duas meias-vidas individuais ($T_e < T_f$ e $T_e < T_b$)."
  },
  {
    "id": 8102,
    "topicId": 8,
    "question": "Na física nuclear e farmacocinética dos radioisótopos na terapêutica médica, em relação a 'exemplo de cálculo clínico da Meia-Vida Efetiva para o Iodo-131', qual é a fundamentação científica exata?",
    "options": [
      "Com $T_f = 8$ dias e $T_b = 2$ dias, a semivida efetiva no organismo é de 10 dias ($8 + 2 = 10$), uma vez que os processos biológicos de eliminação se somam aritmeticamente à retenção física no doente.",
      "Com esses valores de referência, a semivida efetiva é de exatamente 4 dias, visto que o organismo humano divide invariavelmente a semivida física do radioisótopo para metade logo após a deglutição oral.",
      "Com $T_f = 8$ dias e $T_b = 2$ dias por depuração renal rápida, a semivida efetiva resulta em $T_e = \\frac{8 \\times 2}{8 + 2} = \\frac{16}{10} = 1,6$ dias, demonstrando que a excreção limpa o corpo muito antes dos 8 dias físicos.",
      "A meia-vida efetiva calculada resulta em 16 dias ($8 \\times 2 = 16$), demonstrando que a passagem do radiofármaco pelos rins duplica o tempo de permanência da radiação ionizante no corpo do doente."
    ],
    "correctIndex": 2,
    "explanation": "Em biofísica e medicina nuclear, exemplo de cálculo clínico da Meia-Vida Efetiva para o Iodo-131 explica-se pelo facto de que o I-131 tem $T_f = 8$ dias; se a sua meia-vida biológica no doente for de $T_b = 2$ dias devido a rápida depuração renal, a meia-vida efetiva resulta em $T_e = (8 \\times 2) / (8 + 2) = 16 / 10 = 1,6$ dias. Isto demonstra que a eliminação biológica acelerada limpa a radioatividade do corpo muito antes dos 8 dias do decaimento puramente físico.",
    "distractorAnalysis": [
      "Está incorreta: somar diretamente os tempos ($8 + 2 = 10$) ignora a concorrência dos dois processos e violaria as equações cinéticas fundamentais.",
      "Está incorreta: o corpo não divide a meia-vida física por um fator arbitrário de 2; a redução para 1,6 dias decorre da relação harmónica dos processos cinéticos de primeira ordem.",
      "Está incorreta: a depuração renal reduz a retenção e nunca a prolonga para 16 dias."
    ],
    "nursingApplication": "O enfermeiro compreende porque o incentivo à ingestão de água protege o doente e reduz o período de internamento em isolamento radioativo."
  },
  {
    "id": 8103,
    "topicId": 8,
    "question": "Na administração de radiofármacos e cuidados clínicos de enfermagem em medicina nuclear e oncologia, como se concretiza na prática o conceito de 'exemplo de cálculo clínico da Meia-Vida Efetiva para o Iodo-131'?",
    "options": [
      "O enfermeiro restringe severamente a ingestão de água para manter o radioisótopo concentrado nos rins durante vários dias, evitando a contaminação prematura do sistema de esgotos hospitalar do serviço.",
      "O profissional orienta o doente a permanecer imóvel na cama sem urinar durante as primeiras quarenta e oito horas, permitindo que a meia-vida efetiva aumente para o dobro do seu valor basal calculado.",
      "O enfermeiro assume que a ingestão de líquidos apenas afeta o trânsito intestinal, sendo totalmente incapaz de modificar a cinética de retenção ou a taxa de dose externa emitida pelo paciente internado.",
      "O enfermeiro compreende que incentivar a ingestão abundante de água encurta a meia-vida biológica ($T_b$) e, consequentemente, reduz a meia-vida efetiva ($T_e$), permitindo antecipar a alta e diminuir a radiação acumulada."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para exemplo de cálculo clínico da Meia-Vida Efetiva para o Iodo-131 baseia-se no princípio: O enfermeiro compreende porque o incentivo à ingestão de água protege o doente e reduz o período de internamento em isolamento radioativo. Esta prática concilia a segurança radiológica com os cuidados de excelência ao utente.",
    "distractorAnalysis": [
      "Está incorreta: reter urina concentrada aumenta maciçamente a dose de radiação absorvida pela bexiga e gónadas, aumentando o risco de complicações radioinduzidas.",
      "Está incorreta: não urinar favorece a estagnação de grandes atividades radioativas na pelve; o doente deve ser incentivado a micções frequentes.",
      "Está incorreta: a via renal é a via primordial de excreção da fração livre do iodo radioativo, sendo amplamente acelerada pela hiper-hidratação."
    ],
    "nursingApplication": "O enfermeiro compreende porque o incentivo à ingestão de água protege o doente e reduz o período de internamento em isolamento radioativo."
  },
  {
    "id": 8104,
    "topicId": 8,
    "question": "Um enfermeiro analisa as grandezas físicas, semividas e vias de depuração em 'exemplo de cálculo clínico da Meia-Vida Efetiva para o Iodo-131'. Qual das seguintes afirmações expressa com rigor a relação científica entre as variáveis?",
    "options": [
      "A depuração biológica precoce elimina a fração majoritária de radiofármaco livre não incorporado nos tecidos-alvo, reduzindo a retenção radioativa total no organismo a um ritmo muito superior ao do decaimento físico isolado.",
      "A eliminação biológica do traçador destrói os átomos radioativos no interior do lúmen intestinal através da ação proteolítica das enzimas pancreáticas e da bílis concentrada segregada pelo fígado.",
      "A retenção radioativa corporal é estritamente independente das vias excretoras fisiológicas, mantendo-se inalterada até que a totalidade dos átomos sofra decaimento físico nuclear nos tecidos normais.",
      "A aceleração da depuração biológica é contraindicada porque provoca a perda imediata da eficácia terapêutica do iodo-131 já captado e organificado nos folículos tiroideus e metástases neoplásicas."
    ],
    "correctIndex": 0,
    "explanation": "A relação biofísica e farmacocinética rigorosa demonstra que Isto demonstra que a eliminação biológica acelerada limpa a radioatividade do corpo muito antes dos 8 dias do decaimento puramente físico. O domínio destas grandezas capacita o enfermeiro para a prestação de cuidados seguros e esclarecimento de dúvidas.",
    "distractorAnalysis": [
      "Está incorreta: enzimas digestivas degradam moléculas químicas mas não afetam a física nuclear dos átomos radioativos.",
      "Está incorreta: a excreção urinária e fecal remove fisicamente os átomos radioativos para fora do corpo, reduzindo ativamente a atividade retida.",
      "Está incorreta: o iodo organificado na tiroide fica retido com meia-vida biológica longa, enquanto a hidratação limpa apenas a fração livre circulante desnecessária e lesiva."
    ],
    "nursingApplication": "O enfermeiro compreende porque o incentivo à ingestão de água protege o doente e reduz o período de internamento em isolamento radioativo."
  },
  {
    "id": 8105,
    "topicId": 8,
    "question": "Na física nuclear e farmacocinética dos radioisótopos na terapêutica médica, em relação a 'hidratação forçada como intervenção autónoma de enfermagem para reduzir Tb', qual é a fundamentação científica exata?",
    "options": [
      "A prescrição de hidratação abundante tem como única finalidade diluir os eletrólitos séricos para induzir hiponatrémia terapêutica ligeira que desacelere a absorção óssea dos radiotraçadores metastáticos.",
      "Ao prescrever e incentivar a ingestão oral de 2,5 a 3 litros de água por dia no pós-exame, o enfermeiro acelera a filtração glomerular e a micção frequente, encurtando a meia-vida biológica ($T_b$) e a meia-vida efetiva ($T_e$).",
      "O enfermeiro promove a hidratação abundante exclusivamente para aquecer o trato urinário através da temperatura do líquido, promovendo a desinfeção térmica das paredes da bexiga do doente internado.",
      "O enfermeiro deve proibir qualquer consumo de água durante as primeiras quarenta e oito horas para impedir que o radiofármaco seja expelido antes de emitir a totalidade dos seus fotões diagnósticos."
    ],
    "correctIndex": 1,
    "explanation": "Em biofísica e medicina nuclear, hidratação forçada como intervenção autónoma de enfermagem para reduzir Tb explica-se pelo facto de que ao prescrever e incentivar a ingestão oral de 2,5 a 3 litros de água por dia no pós-exame de medicina nuclear, o enfermeiro acelera a taxa de filtração glomerular e a diurese. Isto encurta diretamente a meia-vida biológica ($T_b$), reduzindo consequentemente a meia-vida efetiva ($T_e$) da fração livre não ligada do radiofármaco.",
    "distractorAnalysis": [
      "Está incorreta: induzir hiponatrémia é um erro clínico grave e potencialmente perigoso, não tendo qualquer papel terapêutico em medicina nuclear.",
      "Está incorreta: a água não atua por desinfeção térmica de bexiga; atua como veículo de diluição hidrostática e transporte excretor rápido.",
      "Está incorreta: proibir a hidratação aumentaria severamente a dose de radiação absorvida na bexiga, violando as recomendações de boas práticas de enfermagem."
    ],
    "nursingApplication": "O resultado direto é uma redução drástica da dose de radiação absorvida desnecessariamente pela bexiga, gónadas e medula óssea."
  },
  {
    "id": 8106,
    "topicId": 8,
    "question": "Na administração de radiofármacos e cuidados clínicos de enfermagem em medicina nuclear e oncologia, como se concretiza na prática o conceito de 'hidratação forçada como intervenção autónoma de enfermagem para reduzir Tb'?",
    "options": [
      "O resultado imediato da hidratação abundante é o aumento substancial da dose de radiação acumulada na bexiga, visto que o volume urinário aumentado atrai magneticamente mais fotões de radiação gama.",
      "A hidratação do doente tem como efeito exclusivo a eliminação de resíduos alimentares no cólon descendente, não exercendo qualquer influência na retenção radioativa dos órgãos da cavidade pélvica.",
      "A intervenção de enfermagem de hidratação e micção frequente resulta numa redução drástica da dose de radiação absorvida desnecessariamente pelo epitélio da bexiga, pelas gónadas e pela medula óssea dos ossos pélvicos.",
      "A administração de água induz a precipitação do radioisótopo sob a forma de cálculos radioativos volumosos nos bacinilhos renais, exigindo cirurgia urológica de emergência em todos os casos."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para hidratação forçada como intervenção autónoma de enfermagem para reduzir Tb baseia-se no princípio: O resultado direto é uma redução drástica da dose de radiação absorvida desnecessariamente pela bexiga, gónadas e medula óssea. Esta prática concilia a segurança radiológica com os cuidados de excelência ao utente.",
    "distractorAnalysis": [
      "Está incorreta: urina não atrai fotões magneticamente; o maior volume e micção frequente reduzem a concentração e a dose cumulativa.",
      "Está incorreta: a hidratação afeta diretamente a depuração renal urinária, que é a via principal de excreção dos radiofármacos diagnósticos hidrossolúveis.",
      "Está incorreta: a hidratação abundante previne (em vez de induzir) a formação de cálculos e litíase, facilitando o fluxo livre da urina."
    ],
    "nursingApplication": "O resultado direto é uma redução drástica da dose de radiação absorvida desnecessariamente pela bexiga, gónadas e medula óssea."
  },
  {
    "id": 8107,
    "topicId": 8,
    "question": "Um enfermeiro analisa as grandezas físicas, semividas e vias de depuração em 'hidratação forçada como intervenção autónoma de enfermagem para reduzir Tb'. Qual das seguintes afirmações expressa com rigor a relação científica entre as variáveis?",
    "options": [
      "A diurese forçada aumenta a dose absorvida nos rins porque a passagem rápida do radiofármaco pelos glomérulos gera atrito mecânico ionizante nas membranas basais dos capilares glomerulares.",
      "O estímulo da micção frequente transfere a totalidade da atividade radioativa para os pulmões do doente, aumentando exponencialmente a probabilidade de fibrose intersticial bilateral aguda.",
      "A ingestão hídrica altera a frequência quântica dos fotões emitidos pelo tecnécio-99m, convertendo-os em partículas beta de longo alcance tecidual que penetram profundamente nos tecidos.",
      "A redução do tempo de retenção vesical através da diurese forçada diminui a integral da taxa de dose no tempo ($\\int \\dot{D} dt$), diminuindo a dose absorvida cumulativa nos órgãos críticos de excreção segundo o princípio ALARA."
    ],
    "correctIndex": 3,
    "explanation": "A relação biofísica e farmacocinética rigorosa demonstra que Isto encurta diretamente a meia-vida biológica ($T_b$), reduzindo consequentemente a meia-vida efetiva ($T_e$) da fração livre não ligada do radiofármaco. O domínio destas grandezas capacita o enfermeiro para a prestação de cuidados seguros e esclarecimento de dúvidas.",
    "distractorAnalysis": [
      "Está incorreta: não existe 'atrito mecânico ionizante' nos glomérulos; o fluxo urinário rápido diminui o tempo de exposição dos tecidos renais à radiação.",
      "Está incorreta: a diurese direciona o radiofármaco para a urina no exterior do corpo e não para os pulmões.",
      "Está incorreta: o decaimento nuclear do 99mTc emite fotões gama de 140 keV e a sua energia fotónica é imutável perante a ingestão de líquidos."
    ],
    "nursingApplication": "O resultado direto é uma redução drástica da dose de radiação absorvida desnecessariamente pela bexiga, gónadas e medula óssea."
  },
  {
    "id": 8108,
    "topicId": 8,
    "question": "Na física nuclear e farmacocinética dos radioisótopos na terapêutica médica, em relação a 'retenção prolongada de radiofármacos na insuficiência renal aguda', qual é a fundamentação científica exata?",
    "options": [
      "Em doentes anúricos ou com insuficiência renal severa (TFG < 15 mL/min), a meia-vida biológica tende para o infinito por falência excretora, tornando a meia-vida efetiva quase igual à física ($T_e \\approx T_f$) e multiplicando a dose interna.",
      "Na insuficiência renal aguda o organismo humano desvia a totalidade da excreção do radiofármaco para os alvéolos pulmonares, eliminando o produto na respiração normal em menos de dez minutos pós-injeção.",
      "A paragem da filtração glomerular acelera espontaneamente o decaimento nuclear do radioisótopo, reduzindo a sua semivida física para zero através de um mecanismo fisiológico compensatório.",
      "A insuficiência renal severa impede que o radiofármaco emita qualquer radiação ionizante nos tecidos, tornando desnecessária a utilização de dosímetros individuais pelos profissionais de diálise."
    ],
    "correctIndex": 0,
    "explanation": "Em biofísica e medicina nuclear, retenção prolongada de radiofármacos na insuficiência renal aguda explica-se pelo facto de que em doentes anúricos ou com insuficiência renal severa (TFG < 15 mL/min), a meia-vida biológica ($T_b$) tende para o infinito por incapacidade de excreção urinária. Nestas condições, a meia-vida efetiva passa a ser praticamente igual à meia-vida física total ($T_e \\approx T_f$), aumentando a dose interna de radiação em várias vezes.",
    "distractorAnalysis": [
      "Está incorreta: a grande maioria dos radiofármacos não voláteis não pode ser eliminada pelos pulmões; na ausência de função renal, acumulam-se no sangue e interstício.",
      "Está incorreta: falências de órgãos não alteram a física nuclear nem aceleram o decaimento intrínseco dos átomos radioativos.",
      "Está incorreta: a retenção no organismo mantém as emissões ativas durante muito mais tempo, exigindo monitorização radiológica rigorosa da equipa clínica e do circuito dialítico."
    ],
    "nursingApplication": "O enfermeiro sinaliza doentes oligúricos e coordena sessões de hemodiálise com a proteção radiológica para gerir os filtros de diálise contaminados."
  },
  {
    "id": 8109,
    "topicId": 8,
    "question": "Na administração de radiofármacos e cuidados clínicos de enfermagem em medicina nuclear e oncologia, como se concretiza na prática o conceito de 'retenção prolongada de radiofármacos na insuficiência renal aguda'?",
    "options": [
      "O enfermeiro descarta o dialisador e as linhas extracorporais contaminadas diretamente no lixo biológico comum da sala de hemodiálise, sem qualquer medição radiométrica prévia ou isolamento físico.",
      "O enfermeiro identifica doentes oligúricos ou dialíticos e articula com a Proteção Radiológica e hemodiálise a gestão dos efluentes radioativos, a monitorização das linhas do circuito e o descarte protegido dos filtros capilares.",
      "O profissional suspende a hemodiálise durante três meses consecutivos após a injeção do radiofármaco para evitar que as máquinas de diálise fiquem permanentemente danificadas pela radiação gama.",
      "O enfermeiro orienta a equipa de enfermagem da hemodiálise a desligar todos os alarmes dos monitores dosimétricos durante o tratamento para não perturbar o repouso dos doentes internados na sala."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para retenção prolongada de radiofármacos na insuficiência renal aguda baseia-se no princípio: O enfermeiro sinaliza doentes oligúricos e coordena sessões de hemodiálise com a proteção radiológica para gerir os filtros de diálise contaminados. Esta prática concilia a segurança radiológica com os cuidados de excelência ao utente.",
    "distractorAnalysis": [
      "Está incorreta: descartar filtros ativos no lixo comum viola as normas de proteção radiológica e causa contaminação ambiental e exposição de trabalhadores de recolha.",
      "Está incorreta: doentes com insuficiência renal terminal necessitam de hemodiálise vital periódica indispensável; a diálise é realizada com protocolos adaptados de radioproteção.",
      "Está incorreta: alarmes de taxa de dose e dosimetria são ferramentas de segurança operacional obrigatórias que nunca podem ser desligadas."
    ],
    "nursingApplication": "O enfermeiro sinaliza doentes oligúricos e coordena sessões de hemodiálise com a proteção radiológica para gerir os filtros de diálise contaminados."
  },
  {
    "id": 8110,
    "topicId": 8,
    "question": "Um enfermeiro analisa as grandezas físicas, semividas e vias de depuração em 'retenção prolongada de radiofármacos na insuficiência renal aguda'. Qual das seguintes afirmações expressa com rigor a relação científica entre as variáveis?",
    "options": [
      "A anúria completa protege a medula óssea da radiação ionizante porque o líquido acumulado no interstício atua como uma barreira maciça de chumbo biológico que bloqueia todos os fotões emitidos.",
      "A ausência de função renal impede a captação do radiofármaco pelos recetores celulares dos tecidos tumorais, tornando impossível qualquer administração diagnóstica ou terapêutica nestes doentes.",
      "A retenção prolongada em insuficiência renal altera drasticamente a farmacocinética dos traçadores, resultando num aumento acentuado da dose de radiação absorvida na medula óssea vermelha e tecidos corporais normais.",
      "A taxa de dose corporal de um doente renal terminal anúrico é estritamente nula ao fim de sessenta minutos de internamento, independentemente da atividade total administrada na preparação clínica."
    ],
    "correctIndex": 2,
    "explanation": "A relação biofísica e farmacocinética rigorosa demonstra que Nestas condições, a meia-vida efetiva passa a ser praticamente igual à meia-vida física total ($T_e \\approx T_f$), aumentando a dose interna de radiação em várias vezes. O domínio destas grandezas capacita o enfermeiro para a prestação de cuidados seguros e esclarecimento de dúvidas.",
    "distractorAnalysis": [
      "Está incorreta: o edema ou líquido intersticial não bloqueia fotões penetrantes de média/alta energia como uma blindagem de chumbo.",
      "Está incorreta: doentes renais podem realizar exames e tratamentos (ex.: 131I ou 177Lu), desde que haja ajuste posológico cuidadoso e protocolo estrito de radioproteção na diálise.",
      "Está incorreta: a taxa de dose permanece elevada durante muito mais tempo em doentes anúricos devido à ausência de depuração renal rápida."
    ],
    "nursingApplication": "O enfermeiro sinaliza doentes oligúricos e coordena sessões de hemodiálise com a proteção radiológica para gerir os filtros de diálise contaminados."
  },
  {
    "id": 8111,
    "topicId": 8,
    "question": "Na física nuclear e farmacocinética dos radioisótopos na terapêutica médica, em relação a 'emissão mista do Iodo-131: radiação beta e gama', qual é a fundamentação científica exata?",
    "options": [
      "O iodo-131 emite exclusivamente partículas alfa pesadas de curto alcance que não ultrapassam a membrana celular, associadas a radiação eletromagnética de baixa frequência utilizadas para sincronizar os aparelhos de ecografia.",
      "O iodo-131 decai por emissão de fotões gama de baixa energia sem qualquer componente corpuscular, dependendo a ablação celular do aquecimento térmico mecânico das células tiroideias estimuladas.",
      "A emissão mista do iodo-131 consiste na libertação simultânea de neutrões rápidos e feixes contínuos de luz laser verde que destroem os folículos glandulares através de reações fotoquímicas de superfície.",
      "O iodo-131 decai por emissão mista: partículas beta menos ($E_{max} = 0,61$ MeV, alcance de ~0,8 a 2 mm no tecido) que destroem o tecido tiroideu, e fotões gama penetrantes de 364 keV que permitem a obtenção de imagens cintigráficas."
    ],
    "correctIndex": 3,
    "explanation": "Em biofísica e medicina nuclear, emissão mista do Iodo-131: radiação beta e gama explica-se pelo facto de que o Iodo-131 decai por emissão de partículas $\\beta^-$ de média energia ($E_{max} = 0,61$ MeV, alcance de ~0,8 a 2 mm no tecido) acompanhadas de fotões gama penetrantes de 364 keV com semivida de 8,02 dias. A partícula beta é a responsável terapêutica pela destruição do tecido neoplásico da tiroide (ablação biológica local), enquanto o fotão gama permite a aquisição da imagem cintigráfica pós-dose.",
    "distractorAnalysis": [
      "Está incorreta: o 131I não emite partículas alfa nem radiações não-ionizantes de baixa frequência; é um emissor clássico beta-gama.",
      "Está incorreta: a ação terapêutica do 131I decorre das partículas beta carregadas que quebram o DNA celular e não de aquecimento térmico ou fotões gama puros.",
      "Está incorreta: decaimentos médicos de iodo não emitem neutrões nem luz laser; regem-se pela física nuclear de transição beta-gama."
    ],
    "nursingApplication": "O enfermeiro compreende que a mesma cápsula trata o cancro pela radiação beta e permite verificar metástases pela radiação gama."
  },
  {
    "id": 8112,
    "topicId": 8,
    "question": "Na administração de radiofármacos e cuidados clínicos de enfermagem em medicina nuclear e oncologia, como se concretiza na prática o conceito de 'emissão mista do Iodo-131: radiação beta e gama'?",
    "options": [
      "O enfermeiro compreende que a mesma dose oral de iodo-131 trata o carcinoma tiroideu através das partículas beta locais e permite pesquisar metástases à distância de corpo inteiro através da deteção dos fotões gama.",
      "O enfermeiro presume que as partículas beta servem exclusivamente para iluminar o quarto de isolamento do doente durante a noite, não apresentando qualquer risco ou utilidade terapêutica na clínica.",
      "O profissional assume que os fotões gama emitidos pelo iodo-131 são inteiramente absorvidos dentro da tiroide, dispensando a imposição de distanciamento físico ou blindagens plúmbeas para a equipa.",
      "O enfermeiro considera que a partícula beta se propaga por vários metros no ar hospitalar, sendo necessário evacuar os corredores sempre que o doente deglute a cápsula terapêutica de radioiodo."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para emissão mista do Iodo-131: radiação beta e gama baseia-se no princípio: O enfermeiro compreende que a mesma cápsula trata o cancro pela radiação beta e permite verificar metástases pela radiação gama. Esta prática concilia a segurança radiológica com os cuidados de excelência ao utente.",
    "distractorAnalysis": [
      "Está incorreta: as partículas beta são radiação ionizante de curto alcance tecidual que provocam morte celular tumoral e não luz visível de iluminação.",
      "Está incorreta: os fotões de 364 keV são altamente penetrantes e escapam do corpo do doente, exigindo estritas medidas de proteção radiológica para cuidadores e visitas.",
      "Está incorreta: o alcance das partículas beta no ar é de poucos metros e no tecido de apenas 1-2 mm; o risco a longa distância no quarto decorre dos fotões gama penetrantes."
    ],
    "nursingApplication": "O enfermeiro compreende que a mesma cápsula trata o cancro pela radiação beta e permite verificar metástases pela radiação gama."
  },
  {
    "id": 8113,
    "topicId": 8,
    "question": "Um enfermeiro analisa as grandezas físicas, semividas e vias de depuração em 'emissão mista do Iodo-131: radiação beta e gama'. Qual das seguintes afirmações expressa com rigor a relação científica entre as variáveis?",
    "options": [
      "A partícula beta atravessa vários centímetros de chumbo maciço com facilidade, constituindo o principal perigo de irradiação externa para os enfermeiros situados no exterior do quarto baritado.",
      "A partícula beta confere eficácia terapêutica local depositando alta densidade de ionização no raio de 1 a 2 mm do folículo, enquanto o fotão gama de 364 keV escapa do doente, possibilitando a imagem mas exigindo proteção externa.",
      "O fotão gama de 364 keV deposita a totalidade da sua energia no interior das células tumorais da tiroide por transferência linear de energia extrema, não emitindo qualquer taxa de dose mensurável no ar circundante.",
      "A emissão mista do iodo-131 perde a componente de partículas beta quando o radiofármaco é ingerido com água mineral com gás, convertendo a dose num exame puramente morfológico inofensivo."
    ],
    "correctIndex": 1,
    "explanation": "A relação biofísica e farmacocinética rigorosa demonstra que A partícula beta é a responsável terapêutica pela destruição do tecido neoplásico da tiroide (ablação biológica local), enquanto o fotão gama permite a aquisição da imagem cintigráfica pós-dose. O domínio destas grandezas capacita o enfermeiro para a prestação de cuidados seguros e esclarecimento de dúvidas.",
    "distractorAnalysis": [
      "Está incorreta: partículas beta são prontamente travadas por milímetros de plástico, vidro ou chumbo fino; não atravessam centenas de milímetros de chumbo.",
      "Está incorreta: fotões gama têm baixo LET e alta penetrabilidade, escapando do organismo e permitindo a cintigrafia pós-dose na gamacâmara.",
      "Está incorreta: a água com gás não altera a estrutura dos núcleos atómicos nem modifica o tipo de partículas emitidas no decaimento nuclear."
    ],
    "nursingApplication": "O enfermeiro compreende que a mesma cápsula trata o cancro pela radiação beta e permite verificar metástases pela radiação gama."
  },
  {
    "id": 8114,
    "topicId": 8,
    "question": "Na física nuclear e farmacocinética dos radioisótopos na terapêutica médica, em relação a 'mecanismo de captação tiroideia pelo simportador NIS (Na+/I-)', qual é a fundamentação científica exata?",
    "options": [
      "O transporte de iodeto para o interior da tiroide ocorre exclusivamente por difusão passiva facilitada através de poros lipídicos abertos espontaneamente pela pressão arterial diastólica no pescoço do doente.",
      "O iodo radioativo entra nas células foliculares através de fagocitose mecânica direta mediada por macrófagos alveolares pulmonares que migram pela circulação arterial carotídea até à glândula.",
      "O simportador de sódio-iodeto (NIS) na membrana basolateral das células tiroideias transporta ativamente o iodeto contra um forte gradiente eletroquímico, aproveitando o gradiente de sódio mantido pela bomba Na+/K+ ATPase.",
      "O simportador NIS funciona apenas na presença de doses maciças de heparina sódica administradas por via venosa contínua para impedir a coagulação do radiofármaco no interior do tecido tiroideu."
    ],
    "correctIndex": 2,
    "explanation": "Em biofísica e medicina nuclear, mecanismo de captação tiroideia pelo simportador NIS (Na+/I-) explica-se pelo facto de que as células foliculares da tiroide e as células do cancro diferenciado da tiroide expressam na sua membrana basolateral o simportador de sódio-iodeto (NIS). O NIS transporta ativamente o iodeto contra um forte gradiente eletroquímico para o interior da célula para sintetizar hormonas tiroideias (T3 e T4).",
    "distractorAnalysis": [
      "Está incorreta: a concentração intracelular de iodeto é muito superior à plasmática; o transporte é ativo secundário e não difusão passiva por poros lipídicos.",
      "Está incorreta: o mecanismo é molecular através de transportadores membranar basolaterais específicos e não por fagocitose por macrófagos pulmonares.",
      "Está incorreta: a heparina não atua no transportador NIS e não é necessária para a captação tiroideia do radioiodo."
    ],
    "nursingApplication": "Para aumentar a expressão do NIS e a avidez pelo ¹³¹I, o enfermeiro orienta a suspensão prévia de levotiroxina ou administra TSH recombinante humana (Thyrogen) conforme protocolo."
  },
  {
    "id": 8115,
    "topicId": 8,
    "question": "Na administração de radiofármacos e cuidados clínicos de enfermagem em medicina nuclear e oncologia, como se concretiza na prática o conceito de 'mecanismo de captação tiroideia pelo simportador NIS (Na+/I-)'?",
    "options": [
      "O enfermeiro administra doses elevadas de levotiroxina nas doze horas anteriores à toma da cápsula para suprimir por completo a TSH plasmática e evitar que a tiroide absorva qualquer átomo de radioiodo.",
      "O profissional recomenda ao doente que consuma diariamente suplementos de iodo concentrado e sal iodado na semana prévia ao tratamento para calibrar os recetores foliculares da glândula tiroide.",
      "O enfermeiro orienta o paciente a realizar lavagens gástricas repetidas com carvão ativado antes da administração da cápsula para acelerar a ligação do simportador NIS às proteínas plasmáticas circulantes.",
      "Para maximizar a expressão do NIS e a captação do 131I, o enfermeiro orienta a suspensão da levotiroxina (provocando elevação endógena de TSH > 30 mUI/L) ou administra TSH recombinante humana (Thyrogen) segundo prescrição."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para mecanismo de captação tiroideia pelo simportador NIS (Na+/I-) baseia-se no princípio: Para aumentar a expressão do NIS e a avidez pelo ¹³¹I, o enfermeiro orienta a suspensão prévia de levotiroxina ou administra TSH recombinante humana (Thyrogen) conforme protocolo. Esta prática concilia a segurança radiológica com os cuidados de excelência ao utente.",
    "distractorAnalysis": [
      "Está incorreta: suprimir a TSH com levotiroxina bloquearia o NIS e impediria a captação do iodo-131, anulando a eficácia terapêutica da dose ablativa.",
      "Está incorreta: a sobrecarga de iodo frio dietético satura os transportadores NIS e impede a captação do radioiodo; a regra é estrita carência prévia de iodo.",
      "Está incorreta: lavagens gástricas com carvão ativado removeriam o fármaco ou interfeririam com a absorção intestinal do radioiodo, sendo contraindicadas."
    ],
    "nursingApplication": "Para aumentar a expressão do NIS e a avidez pelo ¹³¹I, o enfermeiro orienta a suspensão prévia de levotiroxina ou administra TSH recombinante humana (Thyrogen) conforme protocolo."
  },
  {
    "id": 8116,
    "topicId": 8,
    "question": "Um enfermeiro analisa as grandezas físicas, semividas e vias de depuração em 'mecanismo de captação tiroideia pelo simportador NIS (Na+/I-)'. Qual das seguintes afirmações expressa com rigor a relação científica entre as variáveis?",
    "options": [
      "O transporte ativo secundário pelo NIS acumula o iodeto no citoplasma folicular com concentrações vinte a quarenta vezes superiores às plasmáticas, permitindo que a dose ablativa de radiação beta atinja níveis letais nas células tumorais.",
      "O simportador NIS expulsa ativamente o iodo para fora das células tiroideias, assegurando que o radiofármaco permaneça retido exclusivamente nos vasos capilares sanguíneos da glândula.",
      "A avidez do simportador NIS pelo iodo é anulada pela hormona estimulante da tiroide (TSH), devendo a TSH encontrar-se indetetável no momento da administração da cápsula terapêutica de radioiodo.",
      "O mecanismo NIS opera exclusivamente durante a infância, perdendo a capacidade de transporte celular em indivíduos com idade superior a dezoito anos em qualquer contexto clínico."
    ],
    "correctIndex": 0,
    "explanation": "A relação biofísica e farmacocinética rigorosa demonstra que O NIS transporta ativamente o iodeto contra um forte gradiente eletroquímico para o interior da célula para sintetizar hormonas tiroideias (T3 e T4). O domínio destas grandezas capacita o enfermeiro para a prestação de cuidados seguros e esclarecimento de dúvidas.",
    "distractorAnalysis": [
      "Está incorreta: o NIS é um influxador (transporta iodeto do sangue para o interior da célula folicular) e não um sistema de efluxo de rejeição.",
      "Está incorreta: a TSH é o principal estimulador da expressão e translocação do NIS para a membrana celular; níveis altos de TSH são essenciais.",
      "Está incorreta: o NIS expressa-se funcionalmente ao longo de toda a vida adulta em tecido tiroideu funcionante e na maioria dos carcinomas diferenciados da tiroide."
    ],
    "nursingApplication": "Para aumentar a expressão do NIS e a avidez pelo ¹³¹I, o enfermeiro orienta a suspensão prévia de levotiroxina ou administra TSH recombinante humana (Thyrogen) conforme protocolo."
  },
  {
    "id": 8117,
    "topicId": 8,
    "question": "Na física nuclear e farmacocinética dos radioisótopos na terapêutica médica, em relação a 'dieta pobre em iodo pré-tratamento com Iodo-131', qual é a fundamentação científica exata?",
    "options": [
      "A dieta pobre em iodo destina-se a provocar a desidratação maciça do doente, reduzindo o volume plasmático para metade para que a cápsula de iodo-131 não seja diluída nos vasos sanguíneos.",
      "O doente cumpre uma dieta rigorosa pobre em iodo durante 14 dias antes do tratamento (sem sal iodado, marisco, peixe de mar, algas ou lacticínios) para esgotar o pool corporal de iodeto e maximizar a captação do 131I pelo NIS.",
      "O protocolo alimentar exige a ingestão exclusiva de peixe cru e algas marinhas em todas as refeições durante as duas semanas anteriores ao internamento para saturar previamente a tiroide com iodo frio.",
      "A dieta pobre em iodo serve unicamente para evitar obstipação intestinal no pós-tratamento, não exercendo qualquer efeito sobre a captação tumoral do radiofármaco administrado por via oral."
    ],
    "correctIndex": 1,
    "explanation": "Em biofísica e medicina nuclear, dieta pobre em iodo pré-tratamento com Iodo-131 explica-se pelo facto de que o doente tem de cumprir uma dieta rigorosa isenta de sal iodado, marisco, peixe de mar, algas, lacticínios e corantes alimentares vermelhos durante 14 dias antes da dose. A carência de iodo dietético 'esfomeia' a tiroide, garantindo que quando a cápsula de ¹³¹I for ingerida, praticamente 100% dos recetores estejam livres para captar o radioisótopo.",
    "distractorAnalysis": [
      "Está incorreta: a dieta pobre em iodo não desidrata o doente; aliás, o estado de hidratação deve ser preservado e estimulado.",
      "Está incorreta: o consumo de marisco, peixe de mar e algas fornece excesso de iodo estável que satura os recetores NIS e bloqueia a captação do radioiodo, arruinando o tratamento.",
      "Está incorreta: a preparação nutricional é um pilar biofísico decisivo para o sucesso da terapia ablativa e não uma simples medida de regulação do trânsito intestinal."
    ],
    "nursingApplication": "O enfermeiro fornece um guia alimentar detalhado e verifica a adesão nutricional do utente no internamento para evitar o fracasso do tratamento ablativo."
  },
  {
    "id": 8118,
    "topicId": 8,
    "question": "Na administração de radiofármacos e cuidados clínicos de enfermagem em medicina nuclear e oncologia, como se concretiza na prática o conceito de 'dieta pobre em iodo pré-tratamento com Iodo-131'?",
    "options": [
      "O enfermeiro incentiva o consumo diário de sal refinado iodado e suplementos multivitamínicos ricos em iodo na véspera do internamento para garantir que o doente não sofra de carências nutricionais.",
      "O profissional autoriza o consumo livre de refeições de marisco e algas no quarto de isolamento, desde que o doente utilize talheres de plástico descartáveis durante o almoço.",
      "O enfermeiro fornece guia nutricional por escrito, clarifica alimentos permitidos e proibidos e confirma a adesão alimentar do utente no internamento (incluindo despiste de contrastes iodados recentes), prevenindo o fracasso terapêutico.",
      "O enfermeiro assume que a adesão à dieta é irrelevante, visto que o iodo-131 administrado em cápsula anula quimicamente qualquer átomo de iodo estável pré-existente no organismo do doente."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para dieta pobre em iodo pré-tratamento com Iodo-131 baseia-se no princípio: O enfermeiro fornece um guia alimentar detalhado e verifica a adesão nutricional do utente no internamento para evitar o fracasso do tratamento ablativo. Esta prática concilia a segurança radiológica com os cuidados de excelência ao utente.",
    "distractorAnalysis": [
      "Está incorreta: consumir sal iodado e multivitamínicos com iodo satura a tiroide com iodo frio, impedindo a entrada do 131I e exigindo o cancelamento do tratamento.",
      "Está incorreta: marisco e algas contêm concentrações massivas de iodo estável, sendo expressamente proibidos antes e durante a fase inicial da radioiodoterapia.",
      "Está incorreta: o radioiodo não destrói o iodo estável; compete diretamente com ele pelo mesmo transportador, pelo que o excesso de iodo dietético reduz drasticamente a dose absorvida tumoral."
    ],
    "nursingApplication": "O enfermeiro fornece um guia alimentar detalhado e verifica a adesão nutricional do utente no internamento para evitar o fracasso do tratamento ablativo."
  },
  {
    "id": 8119,
    "topicId": 8,
    "question": "Um enfermeiro analisa as grandezas físicas, semividas e vias de depuração em 'dieta pobre em iodo pré-tratamento com Iodo-131'. Qual das seguintes afirmações expressa com rigor a relação científica entre as variáveis?",
    "options": [
      "A carência de iodo dietético acelera a constante de decaimento físico nuclear $\\lambda$ do iodo-131, encurtando a semivida física do radioisótopo para menos de vinte e quatro horas.",
      "A restrição de iodo provoca a abertura de poros mecânicos de grandes dimensões nas membranas celulares que permitem a entrada desregulada de qualquer isótopo na circulação venosa.",
      "A depleção dietética de iodo visa diminuir a secreção ácida gástrica para impedir que a cápsula gelatinosa do radiofármaco se dissolva antes de atingir o cólon sigmoide do paciente.",
      "A depleção de iodo estável aumenta a expressão e avidez dos transportadores NIS e eleva a fração percentual de dose captada pelo tecido tiroideu residual, maximizando a dose absorvida interna em Grays depositada no alvo."
    ],
    "correctIndex": 3,
    "explanation": "A relação biofísica e farmacocinética rigorosa demonstra que A carência de iodo dietético 'esfomeia' a tiroide, garantindo que quando a cápsula de ¹³¹I for ingerida, praticamente 100% dos recetores estejam livres para captar o radioisótopo. O domínio destas grandezas capacita o enfermeiro para a prestação de cuidados seguros e esclarecimento de dúvidas.",
    "distractorAnalysis": [
      "Está incorreta: a dieta nutricional altera a farmacocinética biológica mas não tem qualquer efeito sobre a constante física nuclear $\\lambda$ do radionuclídeo.",
      "Está incorreta: a absorção é mediada pelo transportador membranar NIS específico e não por poros mecânicos inespecíficos desregulados.",
      "Está incorreta: a cápsula dissolve-se fisiologicamente no estômago e o iodeto é absorvido rapidamente no duodeno/jejuno proximal e não no cólon."
    ],
    "nursingApplication": "O enfermeiro fornece um guia alimentar detalhado e verifica a adesão nutricional do utente no internamento para evitar o fracasso do tratamento ablativo."
  },
  {
    "id": 8120,
    "topicId": 8,
    "question": "Na física nuclear e farmacocinética dos radioisótopos na terapêutica médica, em relação a 'administração oral da cápsula de Iodo-131 e prevenção do vómito', qual é a fundamentação científica exata?",
    "options": [
      "A dose terapêutica (1100 a 5550 MBq) é administrada oralmente em cápsula blindada; a ocorrência de vómito nas primeiras 2 a 4 horas pós-ingestão provocaria contaminação radioativa severa da via aérea, lençóis e quarto com perda da dose.",
      "A cápsula terapêutica de iodo-131 dissolve-se instantaneamente na boca e liberta vapor radioativo que queima as cordas vocais do doente se este não engolir a medicação com água tépida abundante.",
      "O vómito nas primeiras horas após a toma da cápsula é benéfico e incentivado pela equipa de enfermagem para assegurar a eliminação precoce de metade da dose administrada antes de ser absorvida.",
      "A cápsula de iodo-131 é revestida por chumbo maciço espesso que deve ser deglutido pelo doente para garantir que a radiação só seja libertada quando o invólucro for digerido no intestino grosso."
    ],
    "correctIndex": 0,
    "explanation": "Em biofísica e medicina nuclear, administração oral da cápsula de Iodo-131 e prevenção do vómito explica-se pelo facto de que a dose terapêutica (geralmente entre 1100 e 5550 MBq = 30 a 150 mCi) é administrada por via oral numa cápsula gelatinosa contida num vaso de chumbo blindado. Se o doente vomitar nas primeiras 2 a 4 horas pós-ingestão, o vómito altamente radioativo causará contaminação severa do quarto, lençóis e via aérea com perda da dose.",
    "distractorAnalysis": [
      "Está incorreta: a cápsula de gelatina é deglutida intacta com água tépida/fresca e dissolve-se apenas no estômago sem libertar vapores orais cáusticos.",
      "Está incorreta: o vómito compromete a dose absorvida tumoral e cria emergência de contaminação radiológica, devendo ser estritamente prevenido com antieméticos.",
      "Está incorreta: a cápsula de gelatina não contém chumbo; o chumbo é o recipiente externo de transporte (vaso de chumbo) do qual a cápsula é retirada para deglutição imediata."
    ],
    "nursingApplication": "O enfermeiro administra profilaticamente um antiemético potente (como ondansetrom) 30 a 60 minutos antes da cápsula para prevenir rigorosamente qualquer náusea ou emese."
  },
  {
    "id": 8121,
    "topicId": 8,
    "question": "Na administração de radiofármacos e cuidados clínicos de enfermagem em medicina nuclear e oncologia, como se concretiza na prática o conceito de 'administração oral da cápsula de Iodo-131 e prevenção do vómito'?",
    "options": [
      "O enfermeiro administra eméticos potentes antes da cápsula para forçar o esvaziamento gástrico completo e impedir que qualquer alimento permaneça no tubo digestivo durante a administração.",
      "O enfermeiro administra profilaticamente um antiemético potente (como o ondansetrom ou metoclopramida) 30 a 60 minutos antes da toma da cápsula, prevenindo rigorosamente episódios de náuseas ou emese no internamento.",
      "O profissional instrui o doente a mastigar demoradamente a cápsula de iodo-131 antes de engolir para que os princípios ativos sejam absorvidos pela mucosa da língua e gengivas.",
      "O enfermeiro posiciona o doente de cabeça para baixo em decúbito de Trendelenburg forçado durante três horas após a toma da cápsula para impedir que a gravidade empurre o radiofármaco para o estômago."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para administração oral da cápsula de Iodo-131 e prevenção do vómito baseia-se no princípio: O enfermeiro administra profilaticamente um antiemético potente (como ondansetrom) 30 a 60 minutos antes da cápsula para prevenir rigorosamente qualquer náusea ou emese. Esta prática concilia a segurança radiológica com os cuidados de excelência ao utente.",
    "distractorAnalysis": [
      "Está incorreta: administrar eméticos provocaria o vómito da dose radioativa, gerando contaminação severa e inutilizando o tratamento.",
      "Está incorreta: a cápsula nunca deve ser mastigada; deve ser engolida inteira com água para evitar contaminação e queimadura beta da mucosa oral e esofágica.",
      "Está incorreta: o doente deve permanecer sentado ou de pé para deglutir com facilidade e favorecer a passagem gástrica natural por gravidade."
    ],
    "nursingApplication": "O enfermeiro administra profilaticamente um antiemético potente (como ondansetrom) 30 a 60 minutos antes da cápsula para prevenir rigorosamente qualquer náusea ou emese."
  },
  {
    "id": 8122,
    "topicId": 8,
    "question": "Um enfermeiro analisa as grandezas físicas, semividas e vias de depuração em 'administração oral da cápsula de Iodo-131 e prevenção do vómito'. Qual das seguintes afirmações expressa com rigor a relação científica entre as variáveis?",
    "options": [
      "O vómito pós-administração é completamente isento de radiação ionizante porque o radioisótopo é absorvido pelas paredes gástricas no primeiro milissegundo de contacto com o estômago.",
      "O vómito emite radiação exclusivamente se for exposto a luz fluorescente na casa de banho privativa, podendo ser limpo com toalhas de pano comuns sem luvas pela equipa de enfermagem.",
      "Como a atividade administrada é muito elevada (GBq), a presença de iodo-131 no vómito emite elevadas taxas de dose gama e contamina extensamente superfícies com partículas beta, exigindo intervenção rápida de radioproteção.",
      "O principal perigo do vómito com iodo-131 reside na produção espontânea de campos magnéticos que descalibram os relógios de pulso dos profissionais de saúde presentes na enfermaria."
    ],
    "correctIndex": 2,
    "explanation": "A relação biofísica e farmacocinética rigorosa demonstra que Se o doente vomitar nas primeiras 2 a 4 horas pós-ingestão, o vómito altamente radioativo causará contaminação severa do quarto, lençóis e via aérea com perda da dose. O domínio destas grandezas capacita o enfermeiro para a prestação de cuidados seguros e esclarecimento de dúvidas.",
    "distractorAnalysis": [
      "Está incorreta: a dissolução e absorção demoram cerca de 30 a 60 minutos e o vómito inicial contém grande concentração líquida ativa do radioisótopo.",
      "Está incorreta: a radiação independe da luz; o vómito radioativo é uma emergência de radioproteção que exige EPI impermeável, pinças, absorventes e aviso imediato à Física Médica.",
      "Está incorreta: o risco é puramente radiológico por irradiação externa $\\gamma$ e contaminação $\\beta^-$, sem qualquer fenómeno de magnetismo."
    ],
    "nursingApplication": "O enfermeiro administra profilaticamente um antiemético potente (como ondansetrom) 30 a 60 minutos antes da cápsula para prevenir rigorosamente qualquer náusea ou emese."
  },
  {
    "id": 8123,
    "topicId": 8,
    "question": "Na física nuclear e farmacocinética dos radioisótopos na terapêutica médica, em relação a 'proteção das glândulas salivares: uso de rebuçados de limão ou azedos', qual é a fundamentação científica exata?",
    "options": [
      "As glândulas salivares são completamente impermeáveis ao iodo radioativo, sendo a recomendação de chupar rebuçados azedos destinada apenas a proporcionar conforto gustativo sem qualquer base biofísica.",
      "O uso de sumo de limão deve ser iniciado simultaneamente com a deglutição da cápsula para impedir que o iodo seja absorvido pelo estômago, desviando a dose para as glândulas salivares sublinguais.",
      "A estimulação salivar com rebuçados azedos serve para aumentar a retenção permanente do iodo-131 nas glândulas parótidas, promovendo a ablação das células salivares produtoras de amilase.",
      "As glândulas salivares concentram fisiologicamente o iodo via NIS; a estimulação salivar com rebuçados cítricos azedos ou sumo de limão após 24h promove a lavagem do radioiodo estagnado nos ductos, prevenindo sialoadenite e xerostomia."
    ],
    "correctIndex": 3,
    "explanation": "Em biofísica e medicina nuclear, proteção das glândulas salivares: uso de rebuçados de limão ou azedos explica-se pelo facto de que as glândulas salivares (parótidas e submandibulares) também concentram iodo fisiologicamente, estando sujeitas a sialoadenite dolorosa por radiação e boca seca crónica (xerostomia). A mastigação e sucção de rebuçados cítricos azedos ou sumo de limão a partir de 24 horas pós-dose estimula a salivação contínua e a lavagem rápida do iodo radioativo estagnado nos ductos salivares.",
    "distractorAnalysis": [
      "Está incorreta: as glândulas salivares concentram iodo ativamente (até concentrações superiores às do plasma), sofrendo risco real de atrofia ductal e boca seca permanente se não forem protegidas.",
      "Está incorreta: se iniciada precocemente (nas primeiras horas), a estimulação salivar aumentaria o fluxo sanguíneo e a captação de iodo nas glândulas; deve iniciar-se apenas 24h após a dose.",
      "Está incorreta: o objetivo é proteger as glândulas salivares e evitar a sua destruição ablativa indesejada."
    ],
    "nursingApplication": "O enfermeiro ensina o doente a chupar rebuçados de limão frequentes e a massajar suavemente as glândulas salivares para prevenir a inflamação permanente."
  },
  {
    "id": 8124,
    "topicId": 8,
    "question": "Na administração de radiofármacos e cuidados clínicos de enfermagem em medicina nuclear e oncologia, como se concretiza na prática o conceito de 'proteção das glândulas salivares: uso de rebuçados de limão ou azedos'?",
    "options": [
      "O enfermeiro ensina o doente a chupar rebuçados azedos com frequência (a cada 1 a 2 horas) e a realizar massagem suave das parótidas a partir das 24 horas pós-dose, assegurando hidratação contínua para prevenir sequelas salivares.",
      "O enfermeiro prescreve a mastigação contínua de pastilhas de chumbo puro durante as refeições para atenuar as radiações gama no interior da cavidade oral do paciente internado no quarto.",
      "O profissional recomenda evitar qualquer higiene oral ou bochechos com água durante os primeiros trinta dias após a alta para não dispersar o iodo radioativo fixado nos dentes incisivos.",
      "O enfermeiro orienta o utente a tomar medicamentos anticolinérgicos potentes que paralisem a produção de saliva e impeçam as glândulas salivares de funcionar durante todo o tratamento."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para proteção das glândulas salivares: uso de rebuçados de limão ou azedos baseia-se no princípio: O enfermeiro ensina o doente a chupar rebuçados de limão frequentes e a massajar suavemente as glândulas salivares para prevenir a inflamação permanente. Esta prática concilia a segurança radiológica com os cuidados de excelência ao utente.",
    "distractorAnalysis": [
      "Está incorreta: pastilhas de chumbo provocariam intoxicação grave por saturnismo e lesões mecânicas dentárias, sendo contraindicadas.",
      "Está incorreta: a higiene oral deve ser mantida com escovagem suave e bochechos frequentes para remover resíduos salivares radioativos com segurança.",
      "Está incorreta: fármacos anticolinérgicos secariam a boca e estagnariam o radioiodo nos ductos salivares, agravando drasticamente a necrose e a sialoadenite radioinduzida."
    ],
    "nursingApplication": "O enfermeiro ensina o doente a chupar rebuçados de limão frequentes e a massajar suavemente as glândulas salivares para prevenir a inflamação permanente."
  },
  {
    "id": 8125,
    "topicId": 8,
    "question": "Um enfermeiro analisa as grandezas físicas, semividas e vias de depuração em 'proteção das glândulas salivares: uso de rebuçados de limão ou azedos'. Qual das seguintes afirmações expressa com rigor a relação científica entre as variáveis?",
    "options": [
      "A salivação forçada destrói os núcleos atómicos do iodo-131 através da ação digestiva da enzima amilase salivar (ptialina) secretada em abundância pela mucosa lingual do doente.",
      "A estimulação do fluxo salivar aumenta a taxa de renovação e depuração biológica local ($T_b$) do iodo-131 excretado na saliva, diminuindo a dose absorvida cumulativa nas células acinares das parótidas e submandibulares.",
      "O aumento da secreção salivar neutraliza a emissão de partículas beta através da libertação de anticorpos secretores IgA que encapsulam os eletrões de radiação no interior dos ductos.",
      "A produção de saliva estimulada por rebuçados azedos serve unicamente para neutralizar o esmalte dentário contra a acidez da cápsula gelatinosa ingerida no início do internamento."
    ],
    "correctIndex": 1,
    "explanation": "A relação biofísica e farmacocinética rigorosa demonstra que A mastigação e sucção de rebuçados cítricos azedos ou sumo de limão a partir de 24 horas pós-dose estimula a salivação contínua e a lavagem rápida do iodo radioativo estagnado nos ductos salivares. O domínio destas grandezas capacita o enfermeiro para a prestação de cuidados seguros e esclarecimento de dúvidas.",
    "distractorAnalysis": [
      "Está incorreta: enzimas digestivas como a ptialina hidrolisam amido mas não alteram nem neutralizam núcleos atómicos de radioisótopos.",
      "Está incorreta: imunoglobulinas IgA conferem imunidade mucosa e não neutralizam partículas beta nem contêm radiação corpuscular.",
      "Está incorreta: a função dos rebuçados cítricos é o estímulo reflexo do fluxo salivar de lavagem ductal e não a proteção ácida do esmalte."
    ],
    "nursingApplication": "O enfermeiro ensina o doente a chupar rebuçados de limão frequentes e a massajar suavemente as glândulas salivares para prevenir a inflamação permanente."
  },
  {
    "id": 8126,
    "topicId": 8,
    "question": "Na física nuclear e farmacocinética dos radioisótopos na terapêutica médica, em relação a 'propriedades físicas ideais do Tecnécio-99m para cintigrafia', qual é a fundamentação científica exata?",
    "options": [
      "Possui uma semivida física de 30 dias com emissão de partículas beta de longo alcance tecidual, permitindo realizar exames com doses mínimas e armazenar as seringas preparadas durante semanas no frigorífico comum da enfermaria.",
      "Decai por fissão nuclear espontânea com emissão contínua de neutrões térmicos, os quais são captados pelos ossos do esqueleto através de reações exotérmicas que iluminam a matriz óssea cortical sob radiação ultravioleta.",
      "Apresenta semivida física de 6 horas, emissão gama monoenergética quase pura de 140 keV sem emissão corpuscular alfa ou beta, possuindo energia ideal para penetrar os tecidos e ser absorvida no cristal de NaI(Tl) da câmara gama.",
      "Emite fotões gama de ultra-alta energia (superiores a 10 MeV) associados a partículas alfa pesadas, sendo concebido prioritariamente para destruir carcinomas pulmonares inoperáveis por ablação fototérmica direta no tórax."
    ],
    "correctIndex": 2,
    "explanation": "Em biofísica e medicina nuclear, propriedades físicas ideais do Tecnécio-99m para cintigrafia explica-se pelo facto de que possui semivida física de 6,0 horas (suficiente para exames complexos mas curta para não deixar dose residual após 24 horas), emite fotão gama puro de 140 keV e não possui emissão de partículas alfa ou beta. O fotão de 140 keV tem a energia ótima para atravessar o corpo humano com pouca atenuação e ser absorvido eficientemente pelo fino cristal de iodeto de sódio (NaI:Tl) da câmara gama.",
    "distractorAnalysis": [
      "Está incorreta: o 99mTc decai por transição isomérica com semivida de ~6 horas e fotão gama de 140 keV quase puro (sem radiação beta ou alfa), minimizando a dose absorvida no doente.",
      "Está incorreta: a fissão nuclear espontânea e a emissão de neutrões não ocorrem no tecnécio-99m; a deteção em gamacâmara baseia-se em fotões gama de 140 keV.",
      "Está incorreta: o 99mTc é um radiofármaco diagnóstico de baixa energia (140 keV) e não um agente terapêutico ablativo de 10 MeV com partículas alfa."
    ],
    "nursingApplication": "O enfermeiro identifica o ⁹⁹ᵐTc como o radionuclídeo utilizado em mais de 80% de todas as cintigrafias hospitalares de diagnóstico."
  },
  {
    "id": 8127,
    "topicId": 8,
    "question": "Na administração de radiofármacos e cuidados clínicos de enfermagem em medicina nuclear e oncologia, como se concretiza na prática o conceito de 'propriedades físicas ideais do Tecnécio-99m para cintigrafia'?",
    "options": [
      "O enfermeiro considera que o tecnécio-99m foi totalmente proibido e descontinuado em meio hospitalar devido ao risco de libertação de gases radioativos inflamáveis nos quartos de internamento de doentes oncológicos.",
      "O profissional assume que o tecnécio-99m apenas pode ser administrado a doentes com mais de noventa anos de idade em virtude da sua extrema toxicidade para o sistema imunitário e medula óssea de indivíduos jovens.",
      "O enfermeiro programa as cintigrafias com tecnécio-99m para serem realizadas exclusivamente à meia-noite para evitar que os campos gravitacionais solares diurnos interfiram com a emissão gama dos cristais de NaI(Tl).",
      "O enfermeiro identifica o tecnécio-99m como o radioisótopo mais utilizado no mundo em medicina nuclear diagnóstica (> 80% dos exames), graças à sua disponibilidade contínua em geradores Mo-99/Tc-99m e versatilidade bioquímica."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para propriedades físicas ideais do Tecnécio-99m para cintigrafia baseia-se no princípio: O enfermeiro identifica o ⁹⁹ᵐTc como o radionuclídeo utilizado em mais de 80% de todas as cintigrafias hospitalares de diagnóstico. Esta prática concilia a segurança radiológica com os cuidados de excelência ao utente.",
    "distractorAnalysis": [
      "Está incorreta: o 99mTc continua em pleno uso clínico global diário e não liberta gases radioativos inflamáveis.",
      "Está incorreta: o 99mTc é amplamente seguro para todas as idades, incluindo recém-nascidos e pediatria (com ajuste estrito de atividade pela fórmula EANM).",
      "Está incorreta: a emissão nuclear e o funcionamento das câmaras gama são imunes a ciclos solares diurnos, operando de dia ou de noite com a mesma calibração física."
    ],
    "nursingApplication": "O enfermeiro identifica o ⁹⁹ᵐTc como o radionuclídeo utilizado em mais de 80% de todas as cintigrafias hospitalares de diagnóstico."
  },
  {
    "id": 8128,
    "topicId": 8,
    "question": "Um enfermeiro analisa as grandezas físicas, semividas e vias de depuração em 'propriedades físicas ideais do Tecnécio-99m para cintigrafia'. Qual das seguintes afirmações expressa com rigor a relação científica entre as variáveis?",
    "options": [
      "A energia fotónica de 140 keV situa-se na janela ótima de deteção: atravessa o corpo com atenuação moderada e sofre absorção fotoelétrica com elevada eficiência em cristais finos de iodeto de sódio dopados com tálio.",
      "A energia de 140 keV é tão fraca que é absorvida a cem por cento pela pele do doente, impedindo que qualquer fotão gama escape para o exterior sem a aplicação prévia de vácuo mecânico sobre o tórax do paciente.",
      "Os fotões de 140 keV atravessam a matéria sem sofrer qualquer interação física com os átomos dos tecidos ou dos cristais detetores, dependendo a formação da imagem exclusivamente de reflexões ópticas de superfície.",
      "A frequência de emissão do tecnécio-99m desestabiliza as membranas celulares por cavitação ultrassónica contínua, promovendo a fragmentação mecânica dos tumores durante a aquisição das projeções estáticas."
    ],
    "correctIndex": 0,
    "explanation": "A relação biofísica e farmacocinética rigorosa demonstra que O fotão de 140 keV tem a energia ótima para atravessar o corpo humano com pouca atenuação e ser absorvido eficientemente pelo fino cristal de iodeto de sódio (NaI:Tl) da câmara gama. O domínio destas grandezas capacita o enfermeiro para a prestação de cuidados seguros e esclarecimento de dúvidas.",
    "distractorAnalysis": [
      "Está incorreta: a penetração dos fotões de 140 keV no tecido mole é excelente (HVL em água/tecido de ~4,5 cm), permitindo imagens diagnósticas de órgãos profundos.",
      "Está incorreta: a deteção assenta exatamente na absorção fotoelétrica e dispersão Compton nos cristais cintiladores, que convertem a radiação gama em luz visível detetável por fotomultiplicadores.",
      "Está incorreta: o 99mTc diagnóstico não emite ondas sonoras nem provoca cavitação mecânica nos tecidos biológicos."
    ],
    "nursingApplication": "O enfermeiro identifica o ⁹⁹ᵐTc como o radionuclídeo utilizado em mais de 80% de todas as cintigrafias hospitalares de diagnóstico."
  },
  {
    "id": 8129,
    "topicId": 8,
    "question": "Na física nuclear e farmacocinética dos radioisótopos na terapêutica médica, em relação a 'cintigrafia óssea com ⁹⁹ᵐTc-MDP (Metilenodifosfonato)', qual é a fundamentação científica exata?",
    "options": [
      "O MDP liga-se covalentemente aos glóbulos vermelhos circulantes na medula óssea, avaliando o grau de anemia ferropénica através da quantificação do ferro radioativo depositado nos corpos vertebrais da coluna lombar.",
      "O metilenodifosfonato (MDP) é um fosfonato que se liga por quimiossorção aos cristais de hidroxiapatite nas superfícies ósseas em remodelação ativa, revelando hiperfixação focal intensa em metástases osteoblásticas e fraturas.",
      "O radiofármaco acumula-se preferencialmente no tecido cartilaginoso dos discos intervertebrais, sendo utilizado primordialmente para medir a elasticidade da cartilagem hialina em jovens desportistas de alta competição.",
      "O MDP atua como um potente contraste lipídico que se dissolve na gordura da medula amarela dos ossos longos, sendo a imagem óssea obtida pela reflexão de ondas de ultrassons nos ossos diafisários do fémur."
    ],
    "correctIndex": 1,
    "explanation": "Em biofísica e medicina nuclear, cintigrafia óssea com ⁹⁹ᵐTc-MDP (Metilenodifosfonato) explica-se pelo facto de que o MDP é um fosfonato sintético que se liga por quimiossorção aos cristais de hidroxiapatite nas superfícies ósseas em remodelação ativa. Áreas com metástases ósseas osteoblásticas, fraturas ocultas ou osteomielite apresentam hiperfixação focal intensa ('pontos quentes' ou hot spots).",
    "distractorAnalysis": [
      "Está incorreta: o MDP é um composto fosfonato e não avalia anemia nem se liga covalentemente à hemoglobina globular.",
      "Está incorreta: a fixação é estritamente óssea mineralizada e não cartilaginosa discal; a cartilagem avascular apresenta baixa ou nula captação fisiológica.",
      "Está incorreta: o MDP é hidrossolúvel e liga-se à matriz inorgânica de hidroxiapatite, sendo a imagem gerada por cintigrafia gama e não por ultrassons."
    ],
    "nursingApplication": "O enfermeiro orienta o doente a beber 1 a 1,5 litros de água nas 2 horas de intervalo entre a injeção e as imagens e a esvaziar a bexiga imediatamente antes de entrar na câmara gama."
  },
  {
    "id": 8130,
    "topicId": 8,
    "question": "Na administração de radiofármacos e cuidados clínicos de enfermagem em medicina nuclear e oncologia, como se concretiza na prática o conceito de 'cintigrafia óssea com ⁹⁹ᵐTc-MDP (Metilenodifosfonato)'?",
    "options": [
      "O enfermeiro restringe severamente a ingestão de líquidos para manter a bexiga distendida ao máximo com urina radioativa, servindo esta como referência anatómica para colimar as ancas e o fémur proximal.",
      "O profissional recomenda ao doente que permaneça em corrida vigorosa na passadeira durante o intervalo de espera para acelerar a fixação do radiofármaco nas extremidades dos membros inferiores.",
      "O enfermeiro orienta o doente a ingerir 1 a 1,5 litros de água nas duas horas de intervalo entre a injeção e o exame e a esvaziar a bexiga imediatamente antes de entrar na câmara gama para evitar que a urina oculte os ossos da pelve.",
      "O enfermeiro administra diuréticos potentes na primeira hora pós-injeção sem hidratação para forçar a desidratação tecidual do paciente antes da realização das projeções cintigráficas de corpo inteiro."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para cintigrafia óssea com ⁹⁹ᵐTc-MDP (Metilenodifosfonato) baseia-se no princípio: O enfermeiro orienta o doente a beber 1 a 1,5 litros de água nas 2 horas de intervalo entre a injeção e as imagens e a esvaziar a bexiga imediatamente antes de entrar na câmara gama. Esta prática concilia a segurança radiológica com os cuidados de excelência ao utente.",
    "distractorAnalysis": [
      "Está incorreta: uma bexiga repleta de urina radioativa satura os detetores e mascara completamente o osso pélvico circundante, impedindo a deteção de lesões osteoblásticas.",
      "Está incorreta: o exercício físico intenso causaria hiperemia muscular e hiperfixação de stress nos tendões, gerando falsos positivos na cintigrafia óssea.",
      "Está incorreta: desidratar o doente atrasaria a depuração em tecidos moles e aumentaria a radiação absorvida desnecessariamente no organismo."
    ],
    "nursingApplication": "O enfermeiro orienta o doente a beber 1 a 1,5 litros de água nas 2 horas de intervalo entre a injeção e as imagens e a esvaziar a bexiga imediatamente antes de entrar na câmara gama."
  },
  {
    "id": 8131,
    "topicId": 8,
    "question": "Um enfermeiro analisa as grandezas físicas, semividas e vias de depuração em 'cintigrafia óssea com ⁹⁹ᵐTc-MDP (Metilenodifosfonato)'. Qual das seguintes afirmações expressa com rigor a relação científica entre as variáveis?",
    "options": [
      "As metástases ósseas manifestam-se obrigatoriamente por ausência completa de captação de tecnécio em todas as incidências radiológicas, originando exclusivamente áreas brancas e vazias na imagem cintigráfica.",
      "A hiperfixação focal decorre da paragem estática da circulação sanguínea no interior do osso lesado, o que permite que o radiofármaco precipite sob a forma de cristais metálicos pesados insolúveis no periósteo.",
      "Os pontos quentes na cintigrafia óssea representam bolhas gasosas de oxigénio acumuladas nos canais de Havers devido à fermentação anaeróbia das bactérias comensais da medula óssea diafisária.",
      "Áreas com metástases ósseas osteoblásticas, osteomielite ativa ou fraturas de stress apresentam hiperfixação focal ('pontos quentes' ou hot spots) devido ao aumento acentuado do fluxo sanguíneo e da atividade de remodelação osteoblástica local."
    ],
    "correctIndex": 3,
    "explanation": "A relação biofísica e farmacocinética rigorosa demonstra que Áreas com metástases ósseas osteoblásticas, fraturas ocultas ou osteomielite apresentam hiperfixação focal intensa ('pontos quentes' ou hot spots). O domínio destas grandezas capacita o enfermeiro para a prestação de cuidados seguros e esclarecimento de dúvidas.",
    "distractorAnalysis": [
      "Está incorreta: a avidez pelo MDP decorre da elevada taxa de remodelação da hidroxiapatite e da hiperemia nos focos osteoblásticos, criando áreas de densa hipercaptação focal ('hot spots').",
      "Está incorreta: lesões puramente líticas podem ser frias (ex.: mieloma múltiplo), mas a imensa maioria das metástases ósseas (ex.: mama, próstata) induz resposta osteoblástica com pontos quentes intensos.",
      "Está incorreta: a captação requer circulação ativa funcionante; não há precipitação mecânica de metais pesados nem fermentação bacteriana em osso normal."
    ],
    "nursingApplication": "O enfermeiro orienta o doente a beber 1 a 1,5 litros de água nas 2 horas de intervalo entre a injeção e as imagens e a esvaziar a bexiga imediatamente antes de entrar na câmara gama."
  },
  {
    "id": 8132,
    "topicId": 8,
    "question": "Na física nuclear e farmacocinética dos radioisótopos na terapêutica médica, em relação a 'cintigrafia de perfusão miocárdica com ⁹⁹ᵐTc-Sestamibi ou Tetrofosmina', qual é a fundamentação científica exata?",
    "options": [
      "São compostos lipofílicos catiónicos que atravessam a membrana das células do miocárdio e fixam-se nas mitocôndrias viáveis proporcionalmente ao fluxo coronário; a comparação esforço versus repouso diferencia isquemia reversível de enfarte.",
      "São substâncias hidrofílicas aniónicas que permanecem retidas exclusivamente no lúmen do ventrículo esquerdo, quantificando o débito cardíaco através da medição da pressão diastólica final na aorta ascendente.",
      "Compostos que se ligam exclusivamente ao pericárdio parietal inflamado, sendo utilizados na medicina nuclear moderna unicamente para diagnosticar derrames pericárdicos graves em choque cardiogénico agudo.",
      "Substâncias que bloqueiam reversivelmente os canais de sódio no nódulo sinoauricular, provocando bradicardia profunda intencional para permitir a obtenção de ecocardiogramas transtorácicos estáticos."
    ],
    "correctIndex": 0,
    "explanation": "Em biofísica e medicina nuclear, cintigrafia de perfusão miocárdica com ⁹⁹ᵐTc-Sestamibi ou Tetrofosmina explica-se pelo facto de que compostos lipofílicos catiónicos que atravessam a membrana das células do miocárdio e acumulam-se no interior das mitocôndrias viáveis proporcionalmente ao fluxo coronário regional. A comparação entre imagens de esforço (prova de esforço em passadeira ou com dipiridamol) e imagens de repouso identifica isquemia miocárdica reversível e enfarte prévio.",
    "distractorAnalysis": [
      "Está incorreta: o traçador não permanece no sangue intraventricular; fixa-se avidamente no músculo miocárdico viável para avaliar a perfusão.",
      "Está incorreta: a cintigrafia com MIBI destina-se à perfusão e viabilidade miocárdica da cardiopatia isquémica e não a patologias pericárdicas isoladas.",
      "Está incorreta: os traçadores em doses nanomolares não têm efeitos farmacodinâmicos sobre os canais iónicos nem induzem bradicardia terapêutica."
    ],
    "nursingApplication": "O enfermeiro monitoriza o ECG e a pressão arterial durante o teste de stress e assegura uma refeição rica em gorduras após a injeção para acelerar o esvaziamento biliar da vesícula."
  },
  {
    "id": 8133,
    "topicId": 8,
    "question": "Na administração de radiofármacos e cuidados clínicos de enfermagem em medicina nuclear e oncologia, como se concretiza na prática o conceito de 'cintigrafia de perfusão miocárdica com ⁹⁹ᵐTc-Sestamibi ou Tetrofosmina'?",
    "options": [
      "O enfermeiro proíbe qualquer alimentação sólida durante as quarenta e oito horas seguintes à injeção para reter a bílis radioativa na vesícula e evitar a sua passagem para o lúmen do intestino delgado.",
      "O enfermeiro monitoriza o ECG e a pressão arterial durante o teste de esforço e orienta uma refeição rica em gorduras após a injeção do traçador para acelerar o esvaziamento biliar e desobstruir a parede inferior do coração.",
      "O profissional administra betabloqueantes em bólus rápido imediatamente antes do teste de esforço em passadeira para impedir que a frequência cardíaca do doente ultrapasse os quarenta batimentos por minuto.",
      "O enfermeiro instrui o doente a mastigar cubos de gelo durante a prova de esforço para induzir vasoconstrição periférica intensa que direcione todo o radiofármaco para os membros inferiores."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para cintigrafia de perfusão miocárdica com ⁹⁹ᵐTc-Sestamibi ou Tetrofosmina baseia-se no princípio: O enfermeiro monitoriza o ECG e a pressão arterial durante o teste de stress e assegura uma refeição rica em gorduras após a injeção para acelerar o esvaziamento biliar da vesícula. Esta prática concilia a segurança radiológica com os cuidados de excelência ao utente.",
    "distractorAnalysis": [
      "Está incorreta: o jejum prolongado reteria a bílis concentrada adjacente ao coração, gerando artefactos intensos que mascaram a parede miocárdica inferior.",
      "Está incorreta: betabloqueantes devem ser suspensos antes do teste de esforço (conforme protocolo) para permitir atingir a frequência cardíaca submáxima diagnóstica de stress.",
      "Está incorreta: mastigar gelo não tem fundamento clínico e provocaria artefactos motores e vasoconstrição indesejada durante a prova."
    ],
    "nursingApplication": "O enfermeiro monitoriza o ECG e a pressão arterial durante o teste de stress e assegura uma refeição rica em gorduras após a injeção para acelerar o esvaziamento biliar da vesícula."
  },
  {
    "id": 8134,
    "topicId": 8,
    "question": "Um enfermeiro analisa as grandezas físicas, semividas e vias de depuração em 'cintigrafia de perfusão miocárdica com ⁹⁹ᵐTc-Sestamibi ou Tetrofosmina'. Qual das seguintes afirmações expressa com rigor a relação científica entre as variáveis?",
    "options": [
      "A normalização do traçador no repouso é indicativa de enfarte transmural recente, enquanto defeitos irreversíveis em ambas as fases representam tecido cardíaco hipervascularizado de excelente prognóstico.",
      "A ausência de captação miocárdica em ambas as fases demonstra que o doente possui vasos coronários superdesenvolvidos que drenam o radiofármaco para a circulação venosa com velocidade extrema.",
      "Um defeito de perfusão visível nas imagens de esforço que normaliza na fase de repouso indica isquemia miocárdica reversível; um defeito persistente em ambas as fases corresponde habitualmente a enfarte prévio com necrose/fibrose.",
      "A cintigrafia miocárdica só é considerada clinicamente válida se o doente apresentar paragem cardiorrespiratória induzida por esforço no momento exato da injeção do radiofármaco."
    ],
    "correctIndex": 2,
    "explanation": "A relação biofísica e farmacocinética rigorosa demonstra que A comparação entre imagens de esforço (prova de esforço em passadeira ou com dipiridamol) e imagens de repouso identifica isquemia miocárdica reversível e enfarte prévio. O domínio destas grandezas capacita o enfermeiro para a prestação de cuidados seguros e esclarecimento de dúvidas.",
    "distractorAnalysis": [
      "Está incorreta: a normalização no repouso comprova reversibilidade e viabilidade, e não necrose transmural; defeitos persistentes indicam área infartada.",
      "Está incorreta: defeitos fixos extensos refletem enfarte miocárdico prévio ou miocárdio hibernado severo, com prognóstico clínico reservado.",
      "Está incorreta: o teste de esforço visa atingir a frequência cardíaca alvo com total segurança hemodinâmica, sendo interrompido na presença de angina ou arritmias graves."
    ],
    "nursingApplication": "O enfermeiro monitoriza o ECG e a pressão arterial durante o teste de stress e assegura uma refeição rica em gorduras após a injeção para acelerar o esvaziamento biliar da vesícula."
  },
  {
    "id": 8135,
    "topicId": 8,
    "question": "Na física nuclear e farmacocinética dos radioisótopos na terapêutica médica, em relação a 'cintigrafia renal diferencial com ⁹⁹ᵐTc-DMSA e ⁹⁹ᵐTc-DTPA', qual é a fundamentação científica exata?",
    "options": [
      "O 99mTc-DMSA avalia exclusivamente a motilidade dos ureteres em tempo real através de emissões beta de alta energia; o 99mTc-DTPA é um traçador estático que se incorpora no epitélio da bexiga urinária.",
      "Ambos os radiofármacos precipitam de imediato na cápsula de Bowman, sendo utilizados indistintamente para medir a pressão hidrostática intracraniana através de punção lombar sob controlo cintigráfico.",
      "O 99mTc-DMSA é um gás inalatório utilizado na avaliação pulmonar, enquanto o 99mTc-DTPA só pode ser administrado por via intratecal direta para o tratamento ablativo de meningiomas cranianos.",
      "O 99mTc-DMSA fixa-se nos túbulos contornados proximais do córtex renal (imagem estática para cicatrizes de pielonefrite e função diferencial); o 99mTc-DTPA é filtrado pelos glomérulos (imagem dinâmica para fluxo e desobstrução)."
    ],
    "correctIndex": 3,
    "explanation": "Em biofísica e medicina nuclear, cintigrafia renal diferencial com ⁹⁹ᵐTc-DMSA e ⁹⁹ᵐTc-DTPA explica-se pelo facto de que o ⁹⁹ᵐTc-DMSA fixa-se nos túbulos contornados proximais do córtex renal, avaliando a massa renal funcional e cicatrizes de pielonefrite crónica; o ⁹⁹ᵐTc-DTPA é filtrado exclusivamente por filtração glomerular, avaliando o fluxo e desobstrução das vias urinárias. Permitem calcular a percentagem exata de função renal de cada rim em separado (ex: 52% rim direito vs 48% rim esquerdo).",
    "distractorAnalysis": [
      "Está incorreta: o DMSA não emite partículas beta nem avalia ureteres; fixa-se no parênquima cortical para imagem estática de resolução.",
      "Está incorreta: traçadores renais não precipitam na cápsula glomerular nem se relacionam com pressão liquórica intracraniana.",
      "Está incorreta: DMSA e DTPA são soluções injetáveis intravenosas de nefrologia e urologia pediátrica e de adultos."
    ],
    "nursingApplication": "O enfermeiro garante que o doente esteja bem hidratado antes da injeção para evitar a estase tubular e falsos diagnósticos de obstrução ureteral."
  },
  {
    "id": 8136,
    "topicId": 8,
    "question": "Na administração de radiofármacos e cuidados clínicos de enfermagem em medicina nuclear e oncologia, como se concretiza na prática o conceito de 'cintigrafia renal diferencial com ⁹⁹ᵐTc-DMSA e ⁹⁹ᵐTc-DTPA'?",
    "options": [
      "O enfermeiro garante que o doente esteja bem hidratado antes da injeção do radiotraçador dinâmico renal para promover uma taxa adequada de filtração glomerular e prevenir falsos diagnósticos de obstrução ureteral por estase tubular.",
      "O enfermeiro restringe severamente os líquidos nas doze horas anteriores para que o rim desidratado retenha o radiofármaco na cortical, forçando os cálices renais a contraírem-se por espasmo reflexo.",
      "O profissional instrui o doente a permanecer de cabeça para baixo durante toda a aquisição das imagens na câmara gama para que a gravidade ajude a urina a subir dos ureteres para os rins.",
      "O enfermeiro administra antibióticos em bólus venoso rápido misturados na mesma seringa com o 99mTc-DTPA para esterilizar as vias urinárias durante o tempo de trânsito glomerular do exame."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para cintigrafia renal diferencial com ⁹⁹ᵐTc-DMSA e ⁹⁹ᵐTc-DTPA baseia-se no princípio: O enfermeiro garante que o doente esteja bem hidratado antes da injeção para evitar a estase tubular e falsos diagnósticos de obstrução ureteral. Esta prática concilia a segurança radiológica com os cuidados de excelência ao utente.",
    "distractorAnalysis": [
      "Está incorreta: a desidratação prolonga o tempo de trânsito intrarrenal e simula obstrução funcional em curvas renográficas, gerando erros diagnósticos.",
      "Está incorreta: o exame dinâmico realiza-se com o doente em decúbito dorsal ou sentado, respeitando o sentido fisiológico descendente do fluxo urinário.",
      "Está incorreta: radiofármacos não devem ser misturados com outros medicamentos na mesma seringa devido a riscos de incompatibilidade química e alteração da radiomarcação."
    ],
    "nursingApplication": "O enfermeiro garante que o doente esteja bem hidratado antes da injeção para evitar a estase tubular e falsos diagnósticos de obstrução ureteral."
  },
  {
    "id": 8137,
    "topicId": 8,
    "question": "Um enfermeiro analisa as grandezas físicas, semividas e vias de depuração em 'cintigrafia renal diferencial com ⁹⁹ᵐTc-DMSA e ⁹⁹ᵐTc-DTPA'. Qual das seguintes afirmações expressa com rigor a relação científica entre as variáveis?",
    "options": [
      "A função renal diferencial apenas consegue distinguir se o doente possui rins anatómicos ou se nasceu sem qualquer estrutura renal, sendo incapaz de calcular percentagens numéricas de desempenho funcional.",
      "A cintigrafia renal diferencial com DMSA permite quantificar com precisão milimétrica a percentagem de função renal de cada rim em separado (ex.: 50% rim direito versus 50% rim esquerdo, ou assimetrias significativas).",
      "O cálculo percentual da função renal é realizado exclusivamente através da pesagem da massa gorda corporal na balança clínica da enfermaria antes da entrada do doente na sala de medicina nuclear.",
      "A cintigrafia com DMSA altera permanentemente a função relativa dos rins, transferindo de forma forçada toda a filtração glomerular para o rim com maior número de cicatrizes infecciosas prévias."
    ],
    "correctIndex": 1,
    "explanation": "A relação biofísica e farmacocinética rigorosa demonstra que Permitem calcular a percentagem exata de função renal de cada rim em separado (ex: 52% rim direito vs 48% rim esquerdo). O domínio destas grandezas capacita o enfermeiro para a prestação de cuidados seguros e esclarecimento de dúvidas.",
    "distractorAnalysis": [
      "Está incorreta: o exame é altamente quantitativo e sensível, permitindo guiar decisões urológicas em nefrectomias parciais e cirurgias de estenose da junção pieloureteral.",
      "Está incorreta: o cálculo assenta nas contagens radiométricas captadas nos detetores e não na massa gorda ou pesagens mecânicas.",
      "Está incorreta: a dose traçadora de DMSA não produz efeitos farmacodinâmicos nem altera a função fisiológica dos rins."
    ],
    "nursingApplication": "O enfermeiro garante que o doente esteja bem hidratado antes da injeção para evitar a estase tubular e falsos diagnósticos de obstrução ureteral."
  },
  {
    "id": 8138,
    "topicId": 8,
    "question": "Na física nuclear e farmacocinética dos radioisótopos na terapêutica médica, em relação a 'cintigrafia cerebral com ⁹⁹ᵐTc-HMPAO e diagnóstico de morte cerebral', qual é a fundamentação científica exata?",
    "options": [
      "O 99mTc-HMPAO é um gás volátil que se difunde passivamente pelos ossos do crânio, sendo a confirmação de morte cerebral baseada na liquefação térmica das suturas cranianas parietais sob a ação da radiação.",
      "A ausência de captação encefálica do HMPAO é um achado habitual e normal em todos os indivíduos saudáveis durante o sono ligeiro, não apresentando qualquer relação com o fluxo arterial carotídeo.",
      "O 99mTc-HMPAO é lipofílico e atravessa a barreira hematoencefálica ficando retido no tecido cerebral viável; na suspeita de morte cerebral, a ausência de captação intracraniana ('sinal do crânio oco') confirma paragem circulatória.",
      "O radiofármaco liga-se com alta afinidade às membranas dos neurónios mortos, resultando a morte cerebral num padrão de hipercaptação cortical cintigráfica extrema de todo o córtex cerebral e cerebelo."
    ],
    "correctIndex": 2,
    "explanation": "Em biofísica e medicina nuclear, cintigrafia cerebral com ⁹⁹ᵐTc-HMPAO e diagnóstico de morte cerebral explica-se pelo facto de que o HMPAO é uma molécula neutra e lipofílica que atravessa a barreira hematoencefálica intacta e é retida no tecido cerebral vivo em proporção direta ao fluxo sanguíneo cerebral regional. No protocolo de confirmação de morte cerebral em cuidados intensivos, a ausência completa de captação de ⁹⁹ᵐTc em todo o encéfalo ('sinal do crânio oco' ou hollow skull) comprova a paragem circulatória cerebral irreversível.",
    "distractorAnalysis": [
      "Está incorreta: o HMPAO é uma molécula lipofílica injetável e não um gás que liquefaça ossos cranianos.",
      "Está incorreta: em indivíduos vivos normais há intensa captação simétrica em todo o córtex cerebral, gânglios basais e cerebelo; a ausência de captação é patológica e fatal.",
      "Está incorreta: a retenção requer fluxo sanguíneo arterial e viabilidade celular; na paragem circulatória não há qualquer chegada ou captação de traçador no encéfalo."
    ],
    "nursingApplication": "O enfermeiro de cuidados intensivos acompanha o transporte do doente com suporte ventilatório e inotrópico contínuo até à câmara gama para execução do exame confirmatório."
  },
  {
    "id": 8139,
    "topicId": 8,
    "question": "Na administração de radiofármacos e cuidados clínicos de enfermagem em medicina nuclear e oncologia, como se concretiza na prática o conceito de 'cintigrafia cerebral com ⁹⁹ᵐTc-HMPAO e diagnóstico de morte cerebral'?",
    "options": [
      "O enfermeiro desliga os ventiladores e suspende as perfusões de inotrópicos no trajeto entre a UCI e a câmara gama para evitar que os aparelhos de infusão sofram interferência electromagnética dos colimadores de chumbo.",
      "O profissional realiza o teste de morte cerebral sozinho na enfermaria, injetando o radiofármaco e avaliando visualmente se a cor da pele do rosto do doente muda para uma tonalidade violeta fosforescente.",
      "O enfermeiro administra o radiofármaco exclusivamente através de uma sonda nasogástrica entérica, assegurando que o produto seja absorvido pelo estômago antes de atingir o polígono vascular de Willis.",
      "O enfermeiro de cuidados intensivos garante a continuidade do suporte ventilatório, monitorização hemodinâmica invasiva e infusão contínua de drogas vasoativas durante o transporte e realização da cintigrafia confirmatória."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para cintigrafia cerebral com ⁹⁹ᵐTc-HMPAO e diagnóstico de morte cerebral baseia-se no princípio: O enfermeiro de cuidados intensivos acompanha o transporte do doente com suporte ventilatório e inotrópico contínuo até à câmara gama para execução do exame confirmatório. Esta prática concilia a segurança radiológica com os cuidados de excelência ao utente.",
    "distractorAnalysis": [
      "Está incorreta: desligar ventiladores ou inotrópicos provocaria hipóxia e paragem cardíaca antes da conclusão do protocolo formal de morte encefálica.",
      "Está incorreta: a confirmação de morte cerebral é um processo médico-legal complexo que exige testes clínicos rigorosos e exames complementares validados por equipa médica especializada.",
      "Está incorreta: o 99mTc-HMPAO é administrado por via intravenosa direta para avaliar o fluxo sanguíneo arterial encefálico imediato."
    ],
    "nursingApplication": "O enfermeiro de cuidados intensivos acompanha o transporte do doente com suporte ventilatório e inotrópico contínuo até à câmara gama para execução do exame confirmatório."
  },
  {
    "id": 8140,
    "topicId": 8,
    "question": "Um enfermeiro analisa as grandezas físicas, semividas e vias de depuração em 'cintigrafia cerebral com ⁹⁹ᵐTc-HMPAO e diagnóstico de morte cerebral'. Qual das seguintes afirmações expressa com rigor a relação científica entre as variáveis?",
    "options": [
      "A imagem de paragem circulatória encefálica caracteriza-se pela interrupção do fluxo carotídeo na base do crânio com persistência da perfusão nos tecidos moles pericranianos da carótida externa ('sinal do crânio oco').",
      "O sinal do crânio oco decorre da destruição instantânea de todos os ossos da calote craniana pela emissão fotónica do radioisótopo administrado pela via endovenosa periférica do doente.",
      "A ausência de perfusão encefálica é um artefacto comum provocado pela presença de pensos esterilizados de gaze sobre a testa do doente durante a aquisição na gamacâmara.",
      "O fluxo cerebral medido pelo HMPAO atinge valores máximos em situações de morte cerebral devido à dilatação reflexa permanente de todos os capilares cerebrais intraparenquimatosos."
    ],
    "correctIndex": 0,
    "explanation": "A relação biofísica e farmacocinética rigorosa demonstra que No protocolo de confirmação de morte cerebral em cuidados intensivos, a ausência completa de captação de ⁹⁹ᵐTc em todo o encéfalo ('sinal do crânio oco' ou hollow skull) comprova a paragem circulatória cerebral irreversível. O domínio destas grandezas capacita o enfermeiro para a prestação de cuidados seguros e esclarecimento de dúvidas.",
    "distractorAnalysis": [
      "Está incorreta: os ossos do crânio mantêm-se anatomicamente intactos; a designação 'crânio oco' refere-se à ausência de captação radiométrica no encéfalo.",
      "Está incorreta: pensos de gaze não atenuam fotões de 140 keV e não explicam a ausência completa de perfusão hemisférica cerebral.",
      "Está incorreta: na morte encefálica o fluxo sanguíneo cerebral é estritamente zero."
    ],
    "nursingApplication": "O enfermeiro de cuidados intensivos acompanha o transporte do doente com suporte ventilatório e inotrópico contínuo até à câmara gama para execução do exame confirmatório."
  },
  {
    "id": 8141,
    "topicId": 8,
    "question": "Na física nuclear e farmacocinética dos radioisótopos na terapêutica médica, em relação a 'mecanismo biofísico do Efeito Warburg na captação tumoral de FDG', qual é a fundamentação científica exata?",
    "options": [
      "O Efeito Warburg consiste na paragem completa do consumo de glicose pelas células cancerosas, as quais passam a metabolizar exclusivamente sais minerais de cálcio inorgânico do sangue circulante.",
      "O Efeito Warburg descreve a reprogramação metabólica tumoral para efetuar glicólise anaeróbia acelerada mesmo na presença de oxigénio, superexpressando transportadores GLUT e consumindo 10 a 20 vezes mais glicose que tecidos normais.",
      "O mecanismo assenta na conversão forçada de moléculas de água em glicose radioativa no interior das mitocôndrias das células malignas através da absorção de radiação cósmica ambiental.",
      "O fenómeno baseia-se na destruição espontânea da barreira hematoencefálica por toxinas bacterianas, permitindo que a glicose se acumule exclusivamente na cavidade ventricular cerebral."
    ],
    "correctIndex": 1,
    "explanation": "Em biofísica e medicina nuclear, mecanismo biofísico do Efeito Warburg na captação tumoral de FDG explica-se pelo facto de que células cancerígenas malignas reprogramam o seu metabolismo para efetuar glicólise anaeróbia acelerada mesmo na presença abundante de oxigénio, superexpressando transportadores GLUT-1 e GLUT-3. Consomem cerca de 10 a 20 vezes mais glicose do que as células normais adultas, originando uma avidez extrema pela ¹⁸F-FDG que se traduz em focos intensamente hipermetabólicos no PET.",
    "distractorAnalysis": [
      "Está incorreta: células tumorais aumentam avidamente (e não cessam) o consumo de glicose para sustentar a rápida proliferação e síntese de biomassa celular.",
      "Está incorreta: a FDG é um análogo da glicose sintetizado quimicamente com Flúor-18 em ciclotrão e não um produto de conversão mitocondrial de água.",
      "Está incorreta: o efeito Warburg é uma propriedade metabólica celular universal de tumores malignos e não uma complicação infecciosa da barreira hematoencefálica."
    ],
    "nursingApplication": "O enfermeiro sabe que o PET avalia o perfil metabólico do tumor, permitindo estadiamento inicial precoce, deteção de recidivas e avaliação da resposta à quimioterapia."
  },
  {
    "id": 8142,
    "topicId": 8,
    "question": "Na administração de radiofármacos e cuidados clínicos de enfermagem em medicina nuclear e oncologia, como se concretiza na prática o conceito de 'mecanismo biofísico do Efeito Warburg na captação tumoral de FDG'?",
    "options": [
      "O enfermeiro presume que o PET substitui a necessidade de administração de quimioterapia ou cirurgia, visto que a injeção diagnóstica de FDG destrói a totalidade das metástases tumorais no corpo.",
      "O profissional orienta o doente a realizar o exame de PET para verificar a presença de cáries dentárias superficiais e quantificar o teor de flúor presente no esmalte dos dentes molares.",
      "O enfermeiro compreende que o PET com 18F-FDG avalia a atividade metabólica celular, permitindo o estadiamento tumoral inicial precoce, a deteção precoce de recidivas ocultas e a avaliação da resposta precoce à terapêutica antineoplásica.",
      "O enfermeiro considera que o exame de PET com FDG só pode ser realizado em indivíduos sem qualquer historial oncológico prévio para evitar a reativação do crescimento tumoral pela glicose administrada."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para mecanismo biofísico do Efeito Warburg na captação tumoral de FDG baseia-se no princípio: O enfermeiro sabe que o PET avalia o perfil metabólico do tumor, permitindo estadiamento inicial precoce, deteção de recidivas e avaliação da resposta à quimioterapia. Esta prática concilia a segurança radiológica com os cuidados de excelência ao utente.",
    "distractorAnalysis": [
      "Está incorreta: o 18F-FDG é um radiotraçador puramente diagnóstico em doses mínimas sem efeito antineoplásico curativo.",
      "Está incorreta: a indicação primária do PET-FDG é oncológica, inflamatória/infeciosa ou neurológica e não a deteção de cáries dentárias.",
      "Está incorreta: a massa de glicose presente na injeção de FDG é de nanogramas e não estimula o crescimento de tumores."
    ],
    "nursingApplication": "O enfermeiro sabe que o PET avalia o perfil metabólico do tumor, permitindo estadiamento inicial precoce, deteção de recidivas e avaliação da resposta à quimioterapia."
  },
  {
    "id": 8143,
    "topicId": 8,
    "question": "Um enfermeiro analisa as grandezas físicas, semividas e vias de depuração em 'mecanismo biofísico do Efeito Warburg na captação tumoral de FDG'. Qual das seguintes afirmações expressa com rigor a relação científica entre as variáveis?",
    "options": [
      "A 18F-FDG é degradada instantaneamente em dióxido de carbono e água nas células tumorais, sendo expelida na respiração alveolar em menos de dois minutos após a injeção venosa periférica.",
      "A captação tumoral ocorre unicamente por adesão eletrostática da molécula de FDG às fibras de colagénio da derme cutânea profunda sem nunca penetrar no interior do citoplasma das células malignas.",
      "As células cancerosas rejeitam ativamente a 18F-FDG devido à sua carga radioativa, acumulando-se o radiofármaco exclusivamente nas células musculares esqueléticas normais em repouso.",
      "No interior da célula tumoral, a 18F-FDG é fosforilada pela hexocinase em 18F-FDG-6-fosfato; por não possuir o grupo 2'-hidroxilo, não prossegue na via glicolítica nem sai da célula, ficando metabolicamente retida ('metabolic trapping')."
    ],
    "correctIndex": 3,
    "explanation": "A relação biofísica e farmacocinética rigorosa demonstra que Consomem cerca de 10 a 20 vezes mais glicose do que as células normais adultas, originando uma avidez extrema pela ¹⁸F-FDG que se traduz em focos intensamente hipermetabólicos no PET. O domínio destas grandezas capacita o enfermeiro para a prestação de cuidados seguros e esclarecimento de dúvidas.",
    "distractorAnalysis": [
      "Está incorreta: a FDG não é oxidada a CO2 e água; permanece retida na forma fosforilada no citoplasma celular durante o tempo do exame.",
      "Está incorreta: a entrada celular dá-se por transporte facilitado via transportadores membranares de glicose (GLUT) e não por adesão passiva a colagénio dérmico.",
      "Está incorreta: as células tumorais captam avulsamente a FDG devido à superexpressão de GLUTs e da hexocinase."
    ],
    "nursingApplication": "O enfermeiro sabe que o PET avalia o perfil metabólico do tumor, permitindo estadiamento inicial precoce, deteção de recidivas e avaliação da resposta à quimioterapia."
  },
  {
    "id": 8144,
    "topicId": 8,
    "question": "Na física nuclear e farmacocinética dos radioisótopos na terapêutica médica, em relação a 'preparação pré-exame rigorosa: jejum absoluto e repouso físico', qual é a fundamentação científica exata?",
    "options": [
      "O doente tem de cumprir jejum calórico absoluto durante pelo menos 4 a 6 horas antes da injeção de 18F-FDG (permitida apenas água pura) e evitar exercício físico vigoroso nas 24-48 horas anteriores para não desviar o traçador para os músculos.",
      "O doente deve ingerir uma refeição rica em açúcares refinados e refrigerantes imediatamente antes da injeção para acelerar o trânsito do radiofármaco através das paredes gástricas na enfermaria.",
      "O protocolo exige que o doente permaneça a correr em passadeira rolante durante os sessenta minutos de captação da FDG para estimular a circulação arterial e dilatar as veias superficiais.",
      "O jejum alimentar deve ser prolongado durante pelo menos duas semanas consecutivas antes do exame de PET para assegurar a eliminação completa de todos os glóbulos brancos e plaquetas do sangue."
    ],
    "correctIndex": 0,
    "explanation": "Em biofísica e medicina nuclear, preparação pré-exame rigorosa: jejum absoluto e repouso físico explica-se pelo facto de que o doente tem de cumprir jejum calórico absoluto durante pelo menos 6 horas antes da injeção de ¹⁸F-FDG, sendo permitida apenas água pura não aromatizada. Exercício físico intenso (como correr ou carregar sacos pesados) deve ser evitado nas 24-48 horas anteriores para não direcionar a FDG para a musculatura esquelética dos membros.",
    "distractorAnalysis": [
      "Está incorreta: açúcares orais induzem hiperglicemia e pico de insulina, que desviam a FDG para o músculo e gordura e arruínam o contraste e sensibilidade do PET.",
      "Está incorreta: exercício físico pós-injeção causaria intensa captação muscular de FDG nos membros solicitados, mascarando adenopatias e metástases vizinhas.",
      "Está incorreta: jejum de semanas seria desnutrição grave e perigosa sem indicação clínica; o jejum padronizado é de apenas 4 a 6 horas."
    ],
    "nursingApplication": "O enfermeiro instrui o doente a não mascar pastilhas elásticas nem falar após a injeção, pois o movimento dos músculos masséteres e cordas vocais capta FDG e falseia a imagem da laringe."
  },
  {
    "id": 8145,
    "topicId": 8,
    "question": "Na administração de radiofármacos e cuidados clínicos de enfermagem em medicina nuclear e oncologia, como se concretiza na prática o conceito de 'preparação pré-exame rigorosa: jejum absoluto e repouso físico'?",
    "options": [
      "O enfermeiro incentiva o doente a cantar vigorosamente e a mastigar pastilhas elásticas durante a fase de captação da FDG para verificar a mobilidade das cordas vocais e músculos masséteres na câmara.",
      "O enfermeiro instrui o doente a permanecer em repouso físico e vocal absoluto no quarto escurecido e aquecido após a injeção: não falar, não ler e não mascar pastilha elástica para evitar artefactos de captação muscular na cabeça e pescoço.",
      "O profissional coloca o doente numa sala com ar condicionado a dez graus negativos para assegurar que o paciente permaneça a tremer de frio durante todo o período de repouso.",
      "O enfermeiro orienta o doente a realizar palavras cruzadas e leitura intensiva sob luz intensa para ativar o córtex cerebral occipital durante os sessenta minutos que antecedem a imagem de PET."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para preparação pré-exame rigorosa: jejum absoluto e repouso físico baseia-se no princípio: O enfermeiro instrui o doente a não mascar pastilhas elásticas nem falar após a injeção, pois o movimento dos músculos masséteres e cordas vocais capta FDG e falseia a imagem da laringe. Esta prática concilia a segurança radiológica com os cuidados de excelência ao utente.",
    "distractorAnalysis": [
      "Está incorreta: cantar ou mascar pastilha elástica ativam intensamente grupos musculares cervicofaciais, inviabilizando a avaliação de linfonodos cervicais em doentes com neoplasias de cabeça e pescoço.",
      "Está incorreta: a exposição ao frio ativa a gordura castanha (BAT) interescapular e cervical, criando hipercaptações que simulam metástases ganglionares.",
      "Está incorreta: a leitura ativa os centros visuais occipitais e musculatura ocular extrínseca, recomendando-se repouso em ambiente calmo e com pouca estimulação sensorial."
    ],
    "nursingApplication": "O enfermeiro instrui o doente a não mascar pastilhas elásticas nem falar após a injeção, pois o movimento dos músculos masséteres e cordas vocais capta FDG e falseia a imagem da laringe."
  },
  {
    "id": 8146,
    "topicId": 8,
    "question": "Um enfermeiro analisa as grandezas físicas, semividas e vias de depuração em 'preparação pré-exame rigorosa: jejum absoluto e repouso físico'. Qual das seguintes afirmações expressa com rigor a relação científica entre as variáveis?",
    "options": [
      "A realização de exercício muscular destrói quimicamente a molécula de 18F-FDG através da produção de ácido lático, convertendo o radiofármaco em fluoreto de sódio inerte antes de atingir os órgãos examinados.",
      "O repouso muscular é recomendado apenas para impedir que a temperatura corporal do doente aumente e faça explodir a cápsula de vidro do radiofármaco injetado por via endovenosa periférica.",
      "O exercício físico vigoroso ativa a translocação dos transportadores GLUT-4 para as membranas das fibras musculares esqueléticas por contração mecânica, desviando a 18F-FDG do tumor para os grupos musculares solicitados.",
      "O exercício físico nas 48 horas anteriores acelera a semivida física do flúor-18 para apenas dois minutos, impedindo a deteção de fotões na sala de exame de medicina nuclear."
    ],
    "correctIndex": 2,
    "explanation": "A relação biofísica e farmacocinética rigorosa demonstra que Exercício físico intenso (como correr ou carregar sacos pesados) deve ser evitado nas 24-48 horas anteriores para não direcionar a FDG para a musculatura esquelética dos membros. O domínio destas grandezas capacita o enfermeiro para a prestação de cuidados seguros e esclarecimento de dúvidas.",
    "distractorAnalysis": [
      "Está incorreta: o lactato muscular não destrói a 18F-FDG; o problema é a captação competitiva intensa no músculo esquelético.",
      "Está incorreta: a 18F-FDG é uma solução líquida intravenosa e não uma cápsula de vidro intracorporal que exploda com calor.",
      "Está incorreta: o esforço muscular não altera a constante nuclear $\\lambda$ nem a semivida física de 110 minutos do flúor-18."
    ],
    "nursingApplication": "O enfermeiro instrui o doente a não mascar pastilhas elásticas nem falar após a injeção, pois o movimento dos músculos masséteres e cordas vocais capta FDG e falseia a imagem da laringe."
  },
  {
    "id": 8147,
    "topicId": 8,
    "question": "Na física nuclear e farmacocinética dos radioisótopos na terapêutica médica, em relação a 'controlo glicémico no doente diabético candidato a PET', qual é a fundamentação científica exata?",
    "options": [
      "A glicemia elevada é um requisito obrigatório e benéfico para o exame de PET porque o excesso de glicose cristaliza o tumor e torna as células malignas cem vezes mais radioativas do que o tecido normal circundante.",
      "A administração de insulina rápida intravenosa imediatamente antes da injeção de 18F-FDG é a conduta padrão universal em todos os doentes para garantir que a glicose seja transportada exclusivamente para o cérebro.",
      "O nível de glicose plasmática não exerce qualquer influência na distribuição biológica da FDG, visto que o flúor-18 possui propriedades bioquímicas totalmente incompatíveis com o metabolismo dos hidratos de carbono.",
      "A hiperglicemia plasmática (> 180-200 mg/dL) compete com a 18F-FDG pelos transportadores GLUT reduzindo a captação tumoral; paralelamente, a insulina rápida recente empurra a FDG para o músculo e gordura, obscurecendo a imagem."
    ],
    "correctIndex": 3,
    "explanation": "Em biofísica e medicina nuclear, controlo glicémico no doente diabético candidato a PET explica-se pelo facto de que a hiperglicemia plasmática (> 180-200 mg/dL) satura os transportadores GLUT com glicose endógena, que compete com a ¹⁸F-FDG e impede a sua captação pelo tumor (falsos negativos). Por outro lado, a administração recente de insulina rápida empurra a FDG para o tecido muscular e adiposo, obscurecendo completamente a imagem tumoral.",
    "distractorAnalysis": [
      "Está incorreta: a glicose não cristaliza o tumor; hiperglicemia satura os GLUTs e arruína o contraste da lesão tumoral no PET.",
      "Está incorreta: a administração de insulina logo antes da FDG é expressamente contraindicada porque direciona a FDG para músculos esqueléticos e miocárdio, mascarando os tumores.",
      "Está incorreta: a 18F-FDG é um análogo da glicose que utiliza as mesmas vias fisiológicas e transportadores membranares da D-glicose endógena."
    ],
    "nursingApplication": "O enfermeiro mede a glicemia capilar à chegada: se estiver elevada, o exame pode ter de ser remarcado ou ajustado segundo protocolo específico sem uso de insulina nas últimas 4 horas."
  },
  {
    "id": 8148,
    "topicId": 8,
    "question": "Na administração de radiofármacos e cuidados clínicos de enfermagem em medicina nuclear e oncologia, como se concretiza na prática o conceito de 'controlo glicémico no doente diabético candidato a PET'?",
    "options": [
      "O enfermeiro mede a glicemia capilar à chegada: se estiver elevada (> 180-200 mg/dL), o exame pode ter de ser remarcado ou ajustado segundo protocolo específico da unidade, sem administração de insulina rápida nas últimas 4 horas.",
      "O enfermeiro administra cinquenta unidades de insulina rápida em bólus direto sempre que a glicemia do doente for superior a 120 mg/dL, encaminhando o paciente para a câmara de exame no mesmo instante.",
      "O enfermeiro instrui o doente diabético a ingerir um litro de refrigerante açucarado no momento da chegada para compensar a desidratação associada ao jejum da manhã.",
      "O enfermeiro dispensa a medição da glicemia em doentes com diabetes mellitus insulinotratada, assumindo que as bombas infusoras de insulina portáteis garantem a calibração automática do tomógrafo PET."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para controlo glicémico no doente diabético candidato a PET baseia-se no princípio: O enfermeiro mede a glicemia capilar à chegada: se estiver elevada, o exame pode ter de ser remarcado ou ajustado segundo protocolo específico sem uso de insulina nas últimas 4 horas. Esta prática concilia a segurança radiológica com os cuidados de excelência ao utente.",
    "distractorAnalysis": [
      "Está incorreta: bólus de insulina rápida provoca captação muscular difusa maciça e hipoglicemia aguda, sendo formalmente proibido imediatamente antes da FDG.",
      "Está incorreta: refrigerantes açucarados provocariam hiperglicemia aguda severa, saturando os transportadores e inviabilizando o exame de PET.",
      "Está incorreta: a glicemia tem de ser medida em todos os doentes para decidir com o Médico Nuclear se o exame pode prosseguir com qualidade diagnóstica."
    ],
    "nursingApplication": "O enfermeiro mede a glicemia capilar à chegada: se estiver elevada, o exame pode ter de ser remarcado ou ajustado segundo protocolo específico sem uso de insulina nas últimas 4 horas."
  },
  {
    "id": 8149,
    "topicId": 8,
    "question": "Um enfermeiro analisa as grandezas físicas, semividas e vias de depuração em 'controlo glicémico no doente diabético candidato a PET'. Qual das seguintes afirmações expressa com rigor a relação científica entre as variáveis?",
    "options": [
      "A insulina atua destruindo as células tumorais por apoptose instantânea durante o exame de imagem, impedindo que o tumor emita fotões de aniquilação para os detetores da gamacâmara de PET.",
      "A hiperinsulinemia e a hiperglicemia concorrem para desviar o radiotraçador do tumor: a glicose plasmática satura competitivamente os transportadores GLUT-1 tumorais, enquanto a insulina ativa os GLUT-4 no tecido muscular e adiposo.",
      "A glicemia elevada no sangue acelera a semivida física do flúor-18 através da oxidação rápida do anel de desoxirribose da molécula de FDG no interior dos capilares glomerulares renais.",
      "A administração de insulina no exame de PET converte os positrões emitidos em partículas alfa de alto LET que lesionam o cristal cintilador de óxido de lutécio instalado no gantry do tomógrafo."
    ],
    "correctIndex": 1,
    "explanation": "A relação biofísica e farmacocinética rigorosa demonstra que Por outro lado, a administração recente de insulina rápida empurra a FDG para o tecido muscular e adiposo, obscurecendo completamente a imagem tumoral. O domínio destas grandezas capacita o enfermeiro para a prestação de cuidados seguros e esclarecimento de dúvidas.",
    "distractorAnalysis": [
      "Está incorreta: a insulina não destrói células tumorais nem impede a aniquilação física do positrão ($\\beta^+$) com o eletrão ($e^-$).",
      "Está incorreta: o metabolismo glicídico não altera a semivida física nuclear de 110 minutos do 18F.",
      "Está incorreta: positrões aniquilam-se com eletrões gerando pares de fotões de 511 keV e nunca se transformam em partículas alfa."
    ],
    "nursingApplication": "O enfermeiro mede a glicemia capilar à chegada: se estiver elevada, o exame pode ter de ser remarcado ou ajustado segundo protocolo específico sem uso de insulina nas últimas 4 horas."
  },
  {
    "id": 8150,
    "topicId": 8,
    "question": "Na física nuclear e farmacocinética dos radioisótopos na terapêutica médica, em relação a 'prevenção da ativação da gordura castanha (Brown Adipose Tissue - BAT)', qual é a fundamentação científica exata?",
    "options": [
      "A gordura castanha é uma neoplasia maligna primária de proliferação agressiva que surge espontaneamente em doentes oncológicos submetidos a arrefecimento involuntário nas salas de espera não climatizadas da unidade de medicina nuclear.",
      "A estimulação deliberada pelo frio é recomendada no pré-exame de PET para que a gordura castanha ativada absorva a totalidade da dose de radiação ionizante e proteja os órgãos nobres torácicos e abdominais da irradiação interna tecidual.",
      "A gordura castanha (BAT) supraclavicular e paravertebral tem função termogénica e capta avidamente 18F-FDG sob estímulo do frio via sistema simpático; para evitar falsos positivos que simulem metástases ganglionares, o doente deve ser mantido confortavelmente aquecido.",
      "A gordura castanha hipermetabólica emite fotões contínuos de radiação laser infravermelha que descalibram os sensores ópticos e os fotomultiplicadores do anel de detetores de coincidência do tomógrafo computadorizado de PET de corpo inteiro."
    ],
    "correctIndex": 2,
    "explanation": "Em biofísica e medicina nuclear, prevenção da ativação da gordura castanha (Brown Adipose Tissue - BAT) explica-se pelo facto de que a gordura castanha interescapular e supraclavicular tem função termogénica e capta intensamente glicose sob estímulo do frio através do sistema nervoso simpático. A captação de FDG na gordura castanha cria falsos positivos que simulam gânglios linfáticos metastáticos no pescoço e tórax superior.",
    "distractorAnalysis": [
      "Está incorreta: a gordura castanha é um tecido adiposo termorregulador fisiológico normal e não uma neoplasia maligna.",
      "Está incorreta: o objetivo do PET é a visualização limpa de lesões tumorais; a captação na gordura castanha é um artefacto indesejado a ser evitado mantendo o doente num ambiente quente (22-24°C) e agasalhado.",
      "Está incorreta: o tecido emite fotões de 511 keV após a aniquilação do positrão e não raios laser infravermelhos."
    ],
    "nursingApplication": "O enfermeiro mantém a sala de injeção confortavelmente aquecida (22 a 24 °C) e fornece cobertores quentes ao doente para evitar o arrepio de frio e o consumo de glicose pelo tecido adiposo castanho."
  },
  {
    "id": 8151,
    "topicId": 8,
    "question": "Na administração de radiofármacos e cuidados clínicos de enfermagem em medicina nuclear e oncologia, como se concretiza na prática o conceito de 'prevenção da ativação da gordura castanha (Brown Adipose Tissue - BAT)'?",
    "options": [
      "O enfermeiro orienta o utente a realizar caminhadas vigorosas e exercícios respiratórios ao ar livre em ambiente frio para promover a sudorese cutânea e acelerar a metabolização aeróbia do radiofármaco antes da aquisição tomográfica.",
      "O profissional administra uma sobrecarga venosa de solução de glucose a cinquenta por cento trinta minutos após a injeção para saturar competitivamente o tecido adiposo castanho e preservar a captação fisiológica no miocárdio.",
      "O enfermeiro aplica compressas embebidas em água gelada sobre a região supraclavicular e paravertebral para forçar a vasoconstrição periférica e diminuir o fluxo sanguíneo local aos adipócitos durante a fase de biodistribuição.",
      "O enfermeiro mantém o doente em repouso físico e ambiente termicamente confortável (22 a 24 °C) com mantas térmicas antes e durante a captação de 18F-FDG, prevenindo a termogénese que desviaria a glicose radioativa para os depósitos adiposos cervicais."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para prevenção da ativação da gordura castanha (Brown Adipose Tissue - BAT) baseia-se no princípio: O enfermeiro mantém a sala de injeção confortavelmente aquecida (22 a 24 °C) e fornece cobertores quentes ao doente para evitar o arrepio de frio e o consumo de glicose pelo tecido adiposo castanho. Esta prática concilia a segurança radiológica com os cuidados de excelência ao utente.",
    "distractorAnalysis": [
      "Está incorreta: a exposição ao frio e o exercício físico ativam intensamente a gordura castanha mediada pelo sistema simpático e causam captação muscular espúria de FDG.",
      "Está incorreta: a administração de glicose exógena hiperglicemiante concorre diretamente com a 18F-FDG pelos recetores GLUT, arruinando a sensibilidade diagnóstica do exame.",
      "Está incorreta: a aplicação de frio tópico estimula localmente a termogénese do tecido adiposo castanho, agravando os artefactos hipermetabólicos em vez de os prevenir."
    ],
    "nursingApplication": "O enfermeiro mantém a sala de injeção confortavelmente aquecida (22 a 24 °C) e fornece cobertores quentes ao doente para evitar o arrepio de frio e o consumo de glicose pelo tecido adiposo castanho."
  },
  {
    "id": 8152,
    "topicId": 8,
    "question": "Um enfermeiro analisa as grandezas físicas, semividas e vias de depuração em 'prevenção da ativação da gordura castanha (Brown Adipose Tissue - BAT)'. Qual das seguintes afirmações expressa com rigor a relação científica entre as variáveis?",
    "options": [
      "A captação intensa de 18F-FDG na gordura castanha ativada pelo frio gera hipercaptações simétricas no pescoço e mediastino que podem mascarar lesões neoplásicas ou induzir falsos positivos de adenopatias ganglionares metastáticas.",
      "A estimulação da gordura castanha induz vasoconstrição capilar difusa que bloqueia a circulação sanguínea no mediastino superior, impedindo a perfusão tisular fisiológica e tornando os pulmões completamente invisíveis no exame tomográfico.",
      "O tecido adiposo castanho ativado converte quimicamente a fluorodesoxiglicose em metabolitos lipossolúveis que se depositam de forma irreversível nas glândulas salivares, destruindo a arquitetura acinar por efeito citotóxico direto.",
      "A ativação metabólica da gordura castanha acidifica o sangue circulante, provocando a inativação dos fotões de aniquilação emitidos antes de alcançarem os anéis de cristais cintiladores periféricos do equipamento PET."
    ],
    "correctIndex": 0,
    "explanation": "A relação biofísica e farmacocinética rigorosa demonstra que A captação de FDG na gordura castanha cria falsos positivos que simulam gânglios linfáticos metastáticos no pescoço e tórax superior. O domínio destas grandezas capacita o enfermeiro para a prestação de cuidados seguros e esclarecimento de dúvidas.",
    "distractorAnalysis": [
      "Está incorreta: a gordura castanha ativada não impede a perfusão pulmonar nem causa isquemia mediastínica, apenas capta intensamente a glicose radiomarcada.",
      "Está incorreta: a 18F-FDG sofre fosforilação pela hexocinase e retenção metabólica celular, não sendo convertida em compostos citotóxicos salivares.",
      "Está incorreta: os fotões de aniquilação de 511 keV resultam da aniquilação positrão-eletrão e interagem fisicamente por atenuação e dispersão Compton, sem interferência de pH sanguíneo."
    ],
    "nursingApplication": "O enfermeiro mantém a sala de injeção confortavelmente aquecida (22 a 24 °C) e fornece cobertores quentes ao doente para evitar o arrepio de frio e o consumo de glicose pelo tecido adiposo castanho."
  },
  {
    "id": 8153,
    "topicId": 8,
    "question": "Na física nuclear e farmacocinética dos radioisótopos na terapêutica médica, em relação a 'cuidados pós-PET e proteção de contactos domiciliários', qual é a fundamentação científica exata?",
    "options": [
      "Com uma semivida física de vinte e quatro horas para o flúor-18, o doente mantém mais de metade da dose injetada no final do primeiro dia, exigindo isolamento radiológico em quarto baritado hospitalar durante pelo menos três dias completos.",
      "Com uma semivida física de 110 minutos para o flúor-18, a atividade corporal decai para menos de 1,5% após cerca de 11 horas (seis semividas), sendo a eliminação urinária do radiofármaco livre promovida pela hidratação oral pós-exame.",
      "A totalidade do flúor-18 administrado é metabolizada pelo fígado e excretada por via biliar nas primeiras duas horas pós-exame, tornando a urina do paciente inteiramente livre de radioatividade desde o término imediato da injeção venosa.",
      "A taxa de decaimento do flúor-18 depende diretamente da temperatura corporal do doente, pelo que a aplicação de mantas de aquecimento térmico acelera a transformação atómica do radioisótopo em oxigénio-18 estável."
    ],
    "correctIndex": 1,
    "explanation": "Em biofísica e medicina nuclear, cuidados pós-PET e proteção de contactos domiciliários explica-se pelo facto de que devido à semivida física do Flúor-18 de 110 minutos, após 6 meias-vidas (cerca de 11 horas) a radioatividade no corpo decai para menos de 1,5% da dose inicial. O enfermeiro instrui o doente a ingerir água abundante e urinar antes da alta para limpar o excesso de radiofármaco acumulado na bexiga.",
    "distractorAnalysis": [
      "Está incorreta: a semivida física do flúor-18 é de 110 minutos (aproximadamente 1,83 horas) e não vinte e quatro horas, permitindo alta hospitalar rápida sem internamento em quarto blindado.",
      "Está incorreta: a 18F-FDG não sofre metabolização hepática primária nem excreção biliar expressiva; a via primária de depuração biológica rápida do fármaco não captado é estritamente renal.",
      "Está incorreta: as constantes de decaimento radioativo nuclear são propriedades nucleares intrínsecas invariáveis, totalmente imunes a alterações fisiológicas de temperatura ou pressão."
    ],
    "nursingApplication": "Recomenda manter distanciamento de segurança de crianças pequenas e mulheres grávidas durante as primeiras 12 a 24 horas pós-exame por precaução radiológica."
  },
  {
    "id": 8154,
    "topicId": 8,
    "question": "Na administração de radiofármacos e cuidados clínicos de enfermagem em medicina nuclear e oncologia, como se concretiza na prática o conceito de 'cuidados pós-PET e proteção de contactos domiciliários'?",
    "options": [
      "O profissional autoriza o contacto físico direto e continuado com lactentes e crianças de colo logo após a saída do equipamento, justificando que a radiação gama de 511 keV é totalmente absorvida pelas roupas de algodão do doente.",
      "O enfermeiro exige o internamento obrigatório do utente em câmara de isolamento durante uma semana, com queima e destruição de todos os utensílios domésticos e peças de vestuário utilizadas no trajeto de regresso a casa.",
      "O enfermeiro recomenda manter um distanciamento preventivo em relação a grávidas e crianças pequenas durante as primeiras 12 a 24 horas pós-exame e efetuar descarga dupla de água com tampa do autoclismo fechada para mitigar a exposição.",
      "O profissional instrui o doente a suspender o uso de instalações sanitárias comuns no domicílio durante quinze dias consecutivos, recorrendo obrigatoriamente a contentores de recolha biológica blindados com folha de tungsténio."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para cuidados pós-PET e proteção de contactos domiciliários baseia-se no princípio: Recomenda manter distanciamento de segurança de crianças pequenas e mulheres grávidas durante as primeiras 12 a 24 horas pós-exame por precaução radiológica. Esta prática concilia a segurança radiológica com os cuidados de excelência ao utente.",
    "distractorAnalysis": [
      "Está incorreta: os fotões de aniquilação de 511 keV possuem alto poder de penetração e atravessam facilmente roupas comuns, exigindo distanciamento temporal e espacial prudente junto de grupos vulneráveis.",
      "Está incorreta: a curta semivida física do 18F torna desnecessário o internamento prolongado ou a incineração de objetos pessoais, bastando cuidados básicos de higiene e distanciamento.",
      "Está incorreta: não há indicação para uso de contentores blindados de tungsténio domiciliares após um exame de PET de diagnóstico, bastando descargas duplas de água na sanita com boa higiene das mãos."
    ],
    "nursingApplication": "Recomenda manter distanciamento de segurança de crianças pequenas e mulheres grávidas durante as primeiras 12 a 24 horas pós-exame por precaução radiológica."
  },
  {
    "id": 8155,
    "topicId": 8,
    "question": "Um enfermeiro analisa as grandezas físicas, semividas e vias de depuração em 'cuidados pós-PET e proteção de contactos domiciliários'. Qual das seguintes afirmações expressa com rigor a relação científica entre as variáveis?",
    "options": [
      "A ingestão de água visa promover a hidratação plasmática para forçar a ligação covalente da 18F-FDG à hemoglobina eritrocitária, impedindo que os fotões de aniquilação atinjam os parênquimas nobres durante a fase circulatória.",
      "A hidratação do doente tem a finalidade exclusiva de diluir os iões cloreto do plasma de modo a desativar os mecanismos de transporte ativo tubular nos rins e suspender totalmente a filtração glomerular do radiotraçador.",
      "A ingestão de líquidos no pós-exame é estritamente desaconselhada porque a repleção da bexiga urinária gera campos elétricos estáticos que perturbam a deteção de coincidência eletrónica nos detetores cintiladores do PET.",
      "A ingestão hídrica abundante estimula a diurese frequente, reduzindo o tempo de retenção vesical da urina radioativa e diminuindo substancialmente a dose absorvida na parede da bexiga, que constitui o órgão crítico limitante do exame."
    ],
    "correctIndex": 3,
    "explanation": "A relação biofísica e farmacocinética rigorosa demonstra que O enfermeiro instrui o doente a ingerir água abundante e urinar antes da alta para limpar o excesso de radiofármaco acumulado na bexiga. O domínio destas grandezas capacita o enfermeiro para a prestação de cuidados seguros e esclarecimento de dúvidas.",
    "distractorAnalysis": [
      "Está incorreta: a FDG não se liga de forma covalente à hemoglobina nem a água neutraliza emissões de aniquilação positrónica no plasma.",
      "Está incorreta: o objetivo da hidratação é precisamente maximizar o débito urinário e a filtração glomerular, reduzindo o tempo de contacto do radiofármaco com o urotélio vesical.",
      "Está incorreta: a bexiga não gera campos eletrostáticos interferentes e as imagens pélvicas são frequentemente adquiridas após micção esvaziadora exatamente para evitar saturação de contagens e dosimetria elevada."
    ],
    "nursingApplication": "Recomenda manter distanciamento de segurança de crianças pequenas e mulheres grávidas durante as primeiras 12 a 24 horas pós-exame por precaução radiológica."
  },
  {
    "id": 8156,
    "topicId": 8,
    "question": "Na física nuclear e farmacocinética dos radioisótopos na terapêutica médica, em relação a 'Lutécio-177 (¹⁷⁷Lu) e terapia radionuclídica de recetores peptídicos (PRRT)', qual é a fundamentação científica exata?",
    "options": [
      "O lutécio-177 combina a emissão de partículas beta menos de baixa energia ($E_{max} = 0,5$ MeV) e curto alcance tecidular (~0,67 mm) com fotões gama de baixa energia (113 e 208 keV), permitindo terapia focal e dosimetria tomográfica por SPECT.",
      "O lutécio-177 é um emissor alfa puro de curto alcance celular ($< 0,05$ mm) sem emissão simultânea de fotões gama, sendo incapaz de produzir radiação corpuscular que ultrapasse as fronteiras da membrana citoplasmática da célula neoplásica.",
      "O radiofármaco emite exclusivamente positrões de 511 keV em coincidência temporal com semivida de trinta minutos, sendo utilizado apenas para o rastreio tridimensional de adenopatias benignas em equipamentos PET dedicados.",
      "O lutécio-177 emite fotões de radiação de travagem de alta energia sem qualquer componente de partículas carregadas, dependendo a sua ação terapêutica da indução de correntes galvânicas contínuas na matriz extracelular."
    ],
    "correctIndex": 0,
    "explanation": "Em biofísica e medicina nuclear, Lutécio-177 (¹⁷⁷Lu) e terapia radionuclídica de recetores peptídicos (PRRT) explica-se pelo facto de que o ¹⁷⁷Lu emite partículas $\\beta^-$ de baixo alcance tecidual (alcance médio de 0,67 mm) ideais para destruir micrometástases, acompanhadas de fotões gama de baixa energia (113 e 208 keV) com semivida de 6,6 dias. Ligado ao DOTA-TATE (Lutathera), fixa-se nos recetores de somatostatina de tumores neuroendócrinos; ligado ao PSMA-617 (Pluvicto), atua no cancro da próstata metastático resistente.",
    "distractorAnalysis": [
      "Está incorreta: o lutécio-177 é um emissor beta menos associado a gama, e não um emissor alfa puro.",
      "Está incorreta: o lutécio-177 não emite positrões nem possui semivida de 30 minutos (a sua semivida física é de aproximadamente 6,6 dias e presta-se a SPECT, não a PET).",
      "Está incorreta: a eficácia terapêutica do 177Lu assenta na transferência linear de energia das suas partículas beta menos ionizantes, e não em correntes galvânicas ou radiação de travagem pura."
    ],
    "nursingApplication": "O enfermeiro administra perfusão concomitante de aminoácidos (lisina e arginina) durante várias horas para bloquear a recaptação renal e proteger os rins da nefrotoxicidade por radiação."
  },
  {
    "id": 8157,
    "topicId": 8,
    "question": "Na administração de radiofármacos e cuidados clínicos de enfermagem em medicina nuclear e oncologia, como se concretiza na prática o conceito de 'Lutécio-177 (¹⁷⁷Lu) e terapia radionuclídica de recetores peptídicos (PRRT)'?",
    "options": [
      "O enfermeiro perfunde soluções hipertónicas de cloreto de sódio em bólus rápido para bloquear a filtração nos glomérulos renais, forçando a excreção total do lutécio-177 através das glândulas sudoríparas e secreções salivares.",
      "O enfermeiro administra uma perfusão intravenosa de aminoácidos básicos (L-lisina e L-arginina) antes e durante o radiofármaco para saturar os recetores de reabsorção no túbulo proximal renal, protegendo os rins da dose de radiação cumulativa.",
      "O profissional administra diuréticos de ansa em doses massivas associados a restrição hídrica absoluta para assegurar a precipitação do radiofármaco nos cálices renais antes que atinja a circulação sistémica profunda.",
      "O enfermeiro procede à infusão concomitante de gluconato de cálcio a dez por cento para precipitar os iões de lutécio nas paredes da veia de acesso, impedindo que o radioisótopo viaje até aos recetores das células neoplásicas."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para Lutécio-177 (¹⁷⁷Lu) e terapia radionuclídica de recetores peptídicos (PRRT) baseia-se no princípio: O enfermeiro administra perfusão concomitante de aminoácidos (lisina e arginina) durante várias horas para bloquear a recaptação renal e proteger os rins da nefrotoxicidade por radiação. Esta prática concilia a segurança radiológica com os cuidados de excelência ao utente.",
    "distractorAnalysis": [
      "Está incorreta: o radiofármaco não é excretado por via sudorípara nem o cloreto de sódio em bólus protege os néfrons da irradiação interna.",
      "Está incorreta: a restrição hídrica e diuréticos em altas doses causariam insuficiência renal aguda por desidratação e aumentariam perigosamente a toxicidade renal do radionuclídeo.",
      "Está incorreta: a precipitação intravascular com cálcio constituiria erro gravíssimo com risco de trombose, embolia e perda total do efeito terapêutico tumoral."
    ],
    "nursingApplication": "O enfermeiro administra perfusão concomitante de aminoácidos (lisina e arginina) durante várias horas para bloquear a recaptação renal e proteger os rins da nefrotoxicidade por radiação."
  },
  {
    "id": 8158,
    "topicId": 8,
    "question": "Um enfermeiro analisa as grandezas físicas, semividas e vias de depuração em 'Lutécio-177 (¹⁷⁷Lu) e terapia radionuclídica de recetores peptídicos (PRRT)'. Qual das seguintes afirmações expressa com rigor a relação científica entre as variáveis?",
    "options": [
      "O 177Lu-DOTATATE atua ligando-se especificamente aos recetores de insulina nos hepatócitos normais, enquanto o 177Lu-PSMA é formulado para ligar-se preferencialmente aos fosfolípidos de membrana das células do córtex cerebral.",
      "Ambos os fármacos são agentes teranósticos inespecíficos que atuam por absorção passiva na medula óssea através de filtração mecânica pura, sem mediação de qualquer recetor proteico de superfície ou molécula-alvo tumoral.",
      "Na teranóstica molecular, o 177Lu-DOTATATE liga-se a recetores de somatostatina hiperexpressos em tumores neuroendócrinos e o 177Lu-PSMA liga-se ao antigénio de membrana específico da próstata em neoplasias metastáticas resistentes à castração.",
      "O complexo 177Lu liga-se de modo seletivo aos canais de potássio dependentes de voltagem nas fibras musculares cardíacas, promovendo o relaxamento dos ventrículos em doentes com insuficiência circulatória grave."
    ],
    "correctIndex": 2,
    "explanation": "A relação biofísica e farmacocinética rigorosa demonstra que Ligado ao DOTA-TATE (Lutathera), fixa-se nos recetores de somatostatina de tumores neuroendócrinos; ligado ao PSMA-617 (Pluvicto), atua no cancro da próstata metastático resistente. O domínio destas grandezas capacita o enfermeiro para a prestação de cuidados seguros e esclarecimento de dúvidas.",
    "distractorAnalysis": [
      "Está incorreta: o DOTATATE visa recetores de somatostatina (SSTR) em tumores neuroendócrinos e o PSMA visa o antigénio prostático de membrana, não insulina ou tecido cerebral.",
      "Está incorreta: a base da teranóstica é exatamente a alta especificidade molecular ligante-recetor tumoral, não se tratando de filtração mecânica inespecífica.",
      "Está incorreta: o 177Lu ligado a estes péptidos/ligantes não tem ação nos canais miocárdicos de potássio nem função inotrópica cardiovascular."
    ],
    "nursingApplication": "O enfermeiro administra perfusão concomitante de aminoácidos (lisina e arginina) durante várias horas para bloquear a recaptação renal e proteger os rins da nefrotoxicidade por radiação."
  },
  {
    "id": 8159,
    "topicId": 8,
    "question": "Na física nuclear e farmacocinética dos radioisótopos na terapêutica médica, em relação a 'Estrôncio-89 (⁸⁹Sr, Metastron) na paliação analgésica de metástases ósseas', qual é a fundamentação científica exata?",
    "options": [
      "O estrôncio-89 é um emissor gama monoenergético de alta penetração tecidular com semivida física de seis horas, atuando como anestésico local através do bloqueio direto dos potenciais de ação nas fibras nociceptivas tipo C periosteais.",
      "O radiofármaco é um emissor alfa gasoso que se difunde passivamente pelos tecidos moles periarticulares, promovendo o arrefecimento térmico dos focos inflamatórios por redução da velocidade molecular local.",
      "O estrôncio-89 consiste num quelato de ferro sintético que se liga exclusivamente aos eritrócitos circulantes, induzindo a libertação sistémica de endorfinas através do estímulo de barorrecetores no seio carotídeo.",
      "O estrôncio-89 (Metastron) é um emissor beta menos puro ($E_{max} = 1,49$ MeV) com semivida de 50,5 dias; análogo metabólico do cálcio, incorpora-se na matriz de hidroxiapatite das metástases ósseas blásticas para paliação álgica prolongada."
    ],
    "correctIndex": 3,
    "explanation": "Em biofísica e medicina nuclear, Estrôncio-89 (⁸⁹Sr, Metastron) na paliação analgésica de metástases ósseas explica-se pelo facto de que o Estrôncio é um emissor $\\beta^-$ puro de alta energia ($E_{max} = 1,49$ MeV) com semivida de 50,5 dias que mimetiza o cálcio, incorporando-se na matriz óssea ao redor das metástases. Proporciona alívio sustentado da dor oncológica intratável durante 3 a 6 meses sem exigir irradiação externa diária repetida.",
    "distractorAnalysis": [
      "Está incorreta: o estrôncio-89 é um emissor beta menos puro com semivida longa (50,5 dias) e incorpora-se na matriz óssea, não sendo um bloqueador gama de ação em fibras C nem de semivida curta.",
      "Está incorreta: o estrôncio não é um emissor alfa gasoso nem exerce efeitos analgésicos através de arrefecimento térmico tecidual.",
      "Está incorreta: o estrôncio-89 é um análogo divalente do cálcio que se deposita na hidroxiapatite óssea, não se ligando a eritrócitos carotídeos."
    ],
    "nursingApplication": "O enfermeiro vigia a supressão medular hematológica (mielossupressão transitória com descida de plaquetas e leucócitos 4 a 6 semanas pós-injeção) e monitoriza o alívio na escala de dor."
  },
  {
    "id": 8160,
    "topicId": 8,
    "question": "Na administração de radiofármacos e cuidados clínicos de enfermagem em medicina nuclear e oncologia, como se concretiza na prática o conceito de 'Estrôncio-89 (⁸⁹Sr, Metastron) na paliação analgésica de metástases ósseas'?",
    "options": [
      "O enfermeiro avalia a escala de dor do utente e programa a monitorização hematológica seriada (hemograma com plaquetas e leucócitos), vigiando a mielossupressão cujo nadir atinge o ponto mais baixo cerca de 4 a 6 semanas após a administração.",
      "O enfermeiro dispensa o acompanhamento hematológico analítico pós-administração porque o estrôncio-89 emite apenas radiação não-ionizante de baixa energia, desprovida de qualquer toxicidade citopénica medular.",
      "O profissional orienta o doente a permanecer em repouso absoluto no leito sem qualquer movimentação corporal durante quatro semanas para evitar o deslocamento físico dos átomos de estrôncio para os tendões musculares.",
      "O enfermeiro suspende toda a terapêutica analgésica e opioide prévia no próprio dia da injeção venosa, garantindo ao utente que a analgesia radioisotópica proporciona alívio imediato e total nos primeiros trinta minutos."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para Estrôncio-89 (⁸⁹Sr, Metastron) na paliação analgésica de metástases ósseas baseia-se no princípio: O enfermeiro vigia a supressão medular hematológica (mielossupressão transitória com descida de plaquetas e leucócitos 4 a 6 semanas pós-injeção) e monitoriza o alívio na escala de dor. Esta prática concilia a segurança radiológica com os cuidados de excelência ao utente.",
    "distractorAnalysis": [
      "Está incorreta: a radiação beta do 89Sr atinge as trabéculas vizinhas da medula hematopoiética e acarreta risco documentado de trombocitopenia e leucopenia com nadir às 4-6 semanas.",
      "Está incorreta: a incorporação óssea da hidroxiapatite é de natureza química estável e não se descola para tendões com a mobilização normal do paciente.",
      "Está incorreta: o início do alívio analgésico do estrôncio-89 demora tipicamente 1 a 3 semanas a manifestar-se; a analgesia regular deve ser mantida e ajustada gradualmente, nunca suspensa subitamente."
    ],
    "nursingApplication": "O enfermeiro vigia a supressão medular hematológica (mielossupressão transitória com descida de plaquetas e leucócitos 4 a 6 semanas pós-injeção) e monitoriza o alívio na escala de dor."
  },
  {
    "id": 8161,
    "topicId": 8,
    "question": "Um enfermeiro analisa as grandezas físicas, semividas e vias de depuração em 'Estrôncio-89 (⁸⁹Sr, Metastron) na paliação analgésica de metástases ósseas'. Qual das seguintes afirmações expressa com rigor a relação científica entre as variáveis?",
    "options": [
      "O alívio doloroso resulta da paralisia química instantânea de todos os recetores sensitivos cutâneos nos dermátomos circundantes, operando através de um bloqueio neuromuscular motor despolarizante reversível.",
      "O efeito analgésico do estrôncio-89 decorre da supressão da proliferação de células tumorais e osteoclásticas na interface trabecular pela radiação beta local, diminuindo as pressões endósteas e a libertação de mediadores inflamatórios dolorosos.",
      "A redução da dor fundamenta-se na capacidade do estrôncio-89 para absorver e aniquilar os impulsos elétricos das vias espinotalâmicas antes que estes consigam transitar pelos gânglios da raiz dorsal da medula.",
      "O radiofármaco induz analgesia mediante a conversão de toda a água tecidular peritumoral em gel protetor inerte que isola mecanicamente as terminações nervosas dos estímulos mecânicos de carga esquelética."
    ],
    "correctIndex": 1,
    "explanation": "A relação biofísica e farmacocinética rigorosa demonstra que Proporciona alívio sustentado da dor oncológica intratável durante 3 a 6 meses sem exigir irradiação externa diária repetida. O domínio destas grandezas capacita o enfermeiro para a prestação de cuidados seguros e esclarecimento de dúvidas.",
    "distractorAnalysis": [
      "Está incorreta: o radiofármaco não causa bloqueio neuromuscular periférico nem tem propriedades de anestésico tópico despolarizante.",
      "Está incorreta: a radiação corpuscular não absorve sinais neuroelétricos na via espinotalâmica, atuando na biologia tumoral e óssea periosteal local.",
      "Está incorreta: a radiação ionizante não transforma a água tecidual em gel mecânico protetor nas trabéculas ósseas."
    ],
    "nursingApplication": "O enfermeiro vigia a supressão medular hematológica (mielossupressão transitória com descida de plaquetas e leucócitos 4 a 6 semanas pós-injeção) e monitoriza o alívio na escala de dor."
  },
  {
    "id": 8162,
    "topicId": 8,
    "question": "Na física nuclear e farmacocinética dos radioisótopos na terapêutica médica, em relação a 'Samário-153 (¹⁵³Sm-EDTMP, Quadramet) para dor óssea metastática', qual é a fundamentação científica exata?",
    "options": [
      "O samário-153 é um emissor alfa de alta energia acoplado a anticorpos monoclonais quiméricos que se destrói espontaneamente em dois minutos após contacto com o parênquima trabecular esponjoso.",
      "O produto consiste num radionuclídeo emissor de positrões puros com semivida de trinta dias, desenhado exclusivamente para medições hemodinâmicas da taxa de filtração glomerular em ambulatório.",
      "O samário-153 (153Sm-EDTMP) conjuga a emissão de partículas beta de energia média ($E_{max} = 0,81$ MeV) para terapêutica citotóxica óssea com fotões gama de 103 keV (29% de abundância), permitindo imagens cintigráficas confirmatórias pós-terapia.",
      "O complexo radioativo atua por via de emissão de neutrões térmicos secundários gerados pela interação do EDTMP com a gordura amarela da medula óssea diafisária nos ossos longos."
    ],
    "correctIndex": 2,
    "explanation": "Em biofísica e medicina nuclear, Samário-153 (¹⁵³Sm-EDTMP, Quadramet) para dor óssea metastática explica-se pelo facto de que o Samário-153 emite partículas $\\beta^-$ de energia intermédia ($E_{max} = 0,81$ MeV) e um fotão gama de 103 keV que permite obter imagens na câmara gama, com semivida de 46,3 horas (cerca de 2 dias). O complexo fosfonato EDTMP concentra-se com grande avidez nas lesões osteoblásticas, aliviando a dor óssea em 70 a 80% dos doentes em poucas semanas.",
    "distractorAnalysis": [
      "Está incorreta: o samário-153 emite beta menos e gama (com semivida física de 46,3 horas), não sendo um emissor alfa de destruição ultrarrápida.",
      "Está incorreta: o 153Sm não emite positrões nem possui semivida de 30 dias, nem é utilizado para estudo da taxa de filtração glomerular.",
      "Está incorreta: o radiofármaco não emite neutrões na sua transformação radioativa, assenta no decaimento beta menos clássico com componente gama acessório."
    ],
    "nursingApplication": "O enfermeiro educa o doente sobre o efeito 'flare' transitório (aumento passageiro da dor óssea nas primeiras 72 horas pós-injeção) que antecede a melhoria analgésica substancial."
  },
  {
    "id": 8163,
    "topicId": 8,
    "question": "Na administração de radiofármacos e cuidados clínicos de enfermagem em medicina nuclear e oncologia, como se concretiza na prática o conceito de 'Samário-153 (¹⁵³Sm-EDTMP, Quadramet) para dor óssea metastática'?",
    "options": [
      "O enfermeiro instrui o doente a suspender o consumo de qualquer líquido nas primeiras quarenta e oito horas pós-administração para impedir a eliminação urinária precoce do samário-153 antes de atingir as metástases.",
      "O profissional adverte o utente de que o aparecimento de dor nas primeiras setenta e duas horas indica falência terapêutica irreversível e necessidade urgente de amputação cirúrgica preventiva do membro afetado.",
      "O enfermeiro recomenda ao doente a aplicação de compressas de mostarda quente sobre todas as regiões ósseas dolorosas para acelerar a drenagem linfática da radiação beta depositada na matriz.",
      "O enfermeiro esclarece o utente sobre a eventual ocorrência de um agravamento transitório da dor óssea ('flare reaction') nos primeiros dias pós-injeção, assegurando a disponibilidade de medicação analgésica de resgate prescrita para controlo sintomático."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para Samário-153 (¹⁵³Sm-EDTMP, Quadramet) para dor óssea metastática baseia-se no princípio: O enfermeiro educa o doente sobre o efeito 'flare' transitório (aumento passageiro da dor óssea nas primeiras 72 horas pós-injeção) que antecede a melhoria analgésica substancial. Esta prática concilia a segurança radiológica com os cuidados de excelência ao utente.",
    "distractorAnalysis": [
      "Está incorreta: o doente deve ser incentivado a manter boa hidratação para reduzir a dose de radiação na bexiga urinária durante a excreção da fração não fixada ao osso.",
      "Está incorreta: o fenómeno de 'flare' é benigno, autolimitado e preditor frequente de resposta analgésica favorável subsequente, requerendo analgesia de resgate e tranquilização.",
      "Está incorreta: a aplicação de compressas irritantes ou térmicas não tem fundamentação biofísica e pode causar lesões cutâneas num tecido potencialmente fragilizado."
    ],
    "nursingApplication": "O enfermeiro educa o doente sobre o efeito 'flare' transitório (aumento passageiro da dor óssea nas primeiras 72 horas pós-injeção) que antecede a melhoria analgésica substancial."
  },
  {
    "id": 8164,
    "topicId": 8,
    "question": "Um enfermeiro analisa as grandezas físicas, semividas e vias de depuração em 'Samário-153 (¹⁵³Sm-EDTMP, Quadramet) para dor óssea metastática'. Qual das seguintes afirmações expressa com rigor a relação científica entre as variáveis?",
    "options": [
      "O ligante fosfonato EDTMP possui elevada afinidade de quelação pela hidroxiapatite em áreas de turnover ósseo aumentado, concentrando a emissão ionizante do samário-153 seletivamente nas margens osteoblásticas das lesões secundárias.",
      "O EDTMP atua como um potente inibidor seletivo da recaptação de serotonina nos corpos neuronais do corno posterior da medula espinhal, eliminando a sensibilidade central à dor por mecanismos neuroquímicos puros.",
      "A molécula de EDTMP dissolve as metástases ósseas por acidificação catalítica focal da matriz mineral, promovendo a descalcificação maciça de todo o esqueleto para neutralizar a pressão intraóssea.",
      "O complexo fosfonato fixa-se exclusivamente no colagénio tipo II das cartilagens articulares hialinas, protegendo os meniscos da degradação inflamatória sem interagir com as trabéculas ósseas."
    ],
    "correctIndex": 0,
    "explanation": "A relação biofísica e farmacocinética rigorosa demonstra que O complexo fosfonato EDTMP concentra-se com grande avidez nas lesões osteoblásticas, aliviando a dor óssea em 70 a 80% dos doentes em poucas semanas. O domínio destas grandezas capacita o enfermeiro para a prestação de cuidados seguros e esclarecimento de dúvidas.",
    "distractorAnalysis": [
      "Está incorreta: o EDTMP é um quelante fosfonato osteotrópico que atua como vetor esquelético da radiação, não atuando como inibidor de recaptação de serotonina no sistema nervoso central.",
      "Está incorreta: o objetivo do fármaco não é descalcificar o esqueleto nem dissolver a hidroxiapatite, mas sim ligar-se a ela para entregar radiação citotóxica local às células tumorais.",
      "Está incorreta: o radiofármaco deposita-se preferencialmente na hidroxiapatite óssea em remodelação blástica ativa e não na cartilagem meniscal hialina articular."
    ],
    "nursingApplication": "O enfermeiro educa o doente sobre o efeito 'flare' transitório (aumento passageiro da dor óssea nas primeiras 72 horas pós-injeção) que antecede a melhoria analgésica substancial."
  },
  {
    "id": 8165,
    "topicId": 8,
    "question": "Na física nuclear e farmacocinética dos radioisótopos na terapêutica médica, em relação a 'Ítrio-90 (⁹⁰Y) em Radioembolização Hepática Transarterial (SIRT)', qual é a fundamentação científica exata?",
    "options": [
      "O ítrio-90 é um emissor gama puro de baixa energia formulado em nanopartículas biodegradáveis que circulam livremente pelo sistema linfático antes de se degradarem no baço no prazo de seis minutos.",
      "O ítrio-90 é um emissor beta menos de alta energia ($E_{max} = 2,28$ MeV, alcance tecidular de até 11 mm) com semivida de 64,1 horas; microesferas de 20 a 30 $\\mu$m injetadas por via arterial encravam no leito capilar tumoral hepático.",
      "O radiofármaco é administrado por via inalatória sob a forma de aerossol com partículas de grande calibre que penetram na circulação hepática por difusão transpulmonar passiva durante o ciclo ventilatório.",
      "O ítrio-90 consiste num emissor alfa ultralongo com semivida de dez anos utilizado exclusivamente na esterilização bacteriana das superfícies cirúrgicas de intervenção percutânea em medicina nuclear."
    ],
    "correctIndex": 1,
    "explanation": "Em biofísica e medicina nuclear, Ítrio-90 (⁹⁰Y) em Radioembolização Hepática Transarterial (SIRT) explica-se pelo facto de que o Ítrio-90 é um emissor $\\beta^-$ puro de alta energia ($E_{max} = 2,28$ MeV, alcance de até 11 mm em tecido mole) com semivida de 64,1 horas (2,7 dias). Em milhões de microesferas microscópicas de resina ou vidro de 20 a 30 $\\mu$m injetadas por cateterismo da artéria hepática, encrava nos capilares tumorais do hepatocarcinoma, administrando doses tumoricidas extremas sem irradiar o fígado saudável.",
    "distractorAnalysis": [
      "Está incorreta: o 90Y é um emissor beta menos puro (sem emissões gama primárias significativas) com semivida de 64,1 horas e alcance tecidual milimétrico elevado, ideal para radioembolização tumoral.",
      "Está incorreta: o 90Y não é administrado por inalação em aerossol; as microesferas de resina ou vidro são infundidas por cateterismo superseletivo da artéria hepática.",
      "Está incorreta: o 90Y não emite partículas alfa nem possui semivida de dez anos, destinando-se ao tratamento de tumores hepáticos inoperáveis e não a desinfeção de superfícies."
    ],
    "nursingApplication": "O enfermeiro de angiografia monitoriza o local de punção femoral (hematoma e pulsos distais) e vigia queixas de dor abdominal e febre ligeira (síndrome pós-embolização)."
  },
  {
    "id": 8166,
    "topicId": 8,
    "question": "Na administração de radiofármacos e cuidados clínicos de enfermagem em medicina nuclear e oncologia, como se concretiza na prática o conceito de 'Ítrio-90 (⁹⁰Y) em Radioembolização Hepática Transarterial (SIRT)'?",
    "options": [
      "O enfermeiro incentiva o doente a levantar-se e a caminhar intensamente logo após a saída da sala de angiografia para desobstruir os vasos arteriais cateterizados e acelerar a dispersão periférica das microesferas de ítrio-90.",
      "O profissional procede à colocação imediata de sonda nasogástrica aberta para drenagem gástrica contínua durante duas semanas, com intuito de aspirar as partículas de ítrio-90 que migrem pelo tubo digestivo.",
      "No período pós-procedimento de SIRT, o enfermeiro vigia o penso compressivo e os pulsos pediosos no membro puncionado (artéria femoral), avaliando simultaneamente sinais de síndrome pós-embolização como dor abdominal, febre baixa e náuseas.",
      "O enfermeiro desliga os monitores eletrocardiográficos do paciente para evitar que os fotões de radiação de travagem gerados pelo ítrio-90 interfiram na calibragem das derivações bipolares periféricas."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para Ítrio-90 (⁹⁰Y) em Radioembolização Hepática Transarterial (SIRT) baseia-se no princípio: O enfermeiro de angiografia monitoriza o local de punção femoral (hematoma e pulsos distais) e vigia queixas de dor abdominal e febre ligeira (síndrome pós-embolização). Esta prática concilia a segurança radiológica com os cuidados de excelência ao utente.",
    "distractorAnalysis": [
      "Está incorreta: o doente deve permanecer em repouso absoluto no leito com o membro inferior estendido durante várias horas para prevenir hemorragias ou pseudoaneurismas na artéria femoral.",
      "Está incorreta: não há indicação para sonda nasogástrica de drenagem profilática; as microesferas ficam retidas mecanicamente no leito vascular tumoral hepático e não no lúmen do trato digestivo.",
      "Está incorreta: a monitorização clínica de sinais vitais nunca deve ser suspensa; a radiação de travagem emitida não danifica nem desregula os monitores cardíacos do serviço."
    ],
    "nursingApplication": "O enfermeiro de angiografia monitoriza o local de punção femoral (hematoma e pulsos distais) e vigia queixas de dor abdominal e febre ligeira (síndrome pós-embolização)."
  },
  {
    "id": 8167,
    "topicId": 8,
    "question": "Um enfermeiro analisa as grandezas físicas, semividas e vias de depuração em 'Ítrio-90 (⁹⁰Y) em Radioembolização Hepática Transarterial (SIRT)'. Qual das seguintes afirmações expressa com rigor a relação científica entre as variáveis?",
    "options": [
      "O mecanismo assenta na nutrição tumoral exclusiva através do ducto colédoco comum, sendo as microesferas radioativas administradas através de endoscopia digestiva retrógrada para provocar a lise ácida do parênquima neoplásico.",
      "A técnica justifica-se pela ausência completa de vasos sanguíneos no interior das metástases hepáticas, o que faz com que as microesferas de ítrio-90 penetrem no tumor através de um gradiente osmótico transcelular.",
      "O racional baseia-se na afinidade eletrostática única do ítrio-90 pelos hepatócitos centrilobulares normais, que captam todas as microesferas para proteger os focos neoplásicos de qualquer lesão estocástica.",
      "O princípio da radioembolização hepática baseia-se no facto de os tumores receberem cerca de 80 a 90% da sua vascularização a partir de ramos da artéria hepática, enquanto o parênquima hepático são é nutrido primariamente pela veia porta."
    ],
    "correctIndex": 3,
    "explanation": "A relação biofísica e farmacocinética rigorosa demonstra que Em milhões de microesferas microscópicas de resina ou vidro de 20 a 30 $\\mu$m injetadas por cateterismo da artéria hepática, encrava nos capilares tumorais do hepatocarcinoma, administrando doses tumoricidas extremas sem irradiar o fígado saudável. O domínio destas grandezas capacita o enfermeiro para a prestação de cuidados seguros e esclarecimento de dúvidas.",
    "distractorAnalysis": [
      "Está incorreta: os tumores hepáticos são altamente hipervascularizados pela artéria hepática, permitindo a entrega seletiva de doses terapêuticas ablativas preservando o parênquima portal.",
      "Está incorreta: as microesferas de SIRT são administradas por cateterismo intra-arterial e não por via biliar ou endoscópica digestiva.",
      "Está incorreta: os hepatócitos saudáveis são maioritariamente preservados pelo suprimento venoso portal; o tecido tumoral é que recebe o influxo arterial onde o radiofármaco encrava."
    ],
    "nursingApplication": "O enfermeiro de angiografia monitoriza o local de punção femoral (hematoma e pulsos distais) e vigia queixas de dor abdominal e febre ligeira (síndrome pós-embolização)."
  },
  {
    "id": 8168,
    "topicId": 8,
    "question": "Na física nuclear e farmacocinética dos radioisótopos na terapêutica médica, em relação a 'Rádio-223 (²²³Ra) e a era da radioterapia alfa sistémica', qual é a fundamentação científica exata?",
    "options": [
      "O rádio-223 (Xofigo) é um emissor alfa direcionado que mimetiza o cálcio, depositando uma alta densidade ionizante (elevado LET) ao longo de um alcance tecidual inferior a 100 $\\mu$m que causa quebras irreparáveis de cadeia dupla no DNA tumoral ósseo.",
      "O rádio-223 é um emissor beta puro de baixo LET que percorre vários centímetros nos tecidos biológicos, exercendo o seu benefício clínico unicamente através do aquecimento das articulações sinoviais pélvicas.",
      "O fármaco atua como um quelante lipossolúvel de sódio que se acumula no citoplasma de eritrócitos senescentes, promovendo o bloqueio da hematopoiese periférica para induzir imunossupressão terapêutica profunda.",
      "O rádio-223 emite exclusivamente raios X de travagem característicos gerados pela desaceleração de neutrões térmicos na cortical dos ossos longos, atuando como contraste radiológico intraoperatório."
    ],
    "correctIndex": 0,
    "explanation": "Em biofísica e medicina nuclear, Rádio-223 (²²³Ra) e a era da radioterapia alfa sistémica explica-se pelo facto de que como emissor de partículas alfa pesadas de alto LET, o ²²³Ra induz quebras letais irreparáveis de cadeia dupla de DNA nas células tumorais sem gerar resistência celular cruzada. Demonstrou aumento comprovado na sobrevida global e redução de eventos esqueléticos fraturários em ensaios clínicos fase III em homens com cancro da próstata metastático.",
    "distractorAnalysis": [
      "Está incorreta: o 223Ra é um emissor alfa (alto LET, alcance muito curto $< 100\\ \\mu$m), não sendo um emissor beta de longo alcance nem gerando efeitos térmicos articulares.",
      "Está incorreta: o rádio-223 é um análogo divalente do cálcio com tropismo ósseo eletivo, não se ligando a eritrócitos nem funcionando como imunossupressor celular.",
      "Está incorreta: o fármaco emite partículas alfa citotóxicas na sua cadeia de decaimento natural e não raios X diagnósticos ou emissão de neutrões."
    ],
    "nursingApplication": "O enfermeiro administra a injeção endovenosa lenta durante 1 minuto e vigia a contagem de neutrófilos e hemoglobina a cada ciclo mensal de tratamento."
  },
  {
    "id": 8169,
    "topicId": 8,
    "question": "Na administração de radiofármacos e cuidados clínicos de enfermagem em medicina nuclear e oncologia, como se concretiza na prática o conceito de 'Rádio-223 (²²³Ra) e a era da radioterapia alfa sistémica'?",
    "options": [
      "O enfermeiro administra o medicamento por injeção intramuscular profunda no glúteo maior e recomenda ao doente que permaneça em jejum oral absoluto durante trinta dias após cada ciclo terapêutico mensal.",
      "O enfermeiro administra o rádio-223 por injeção endovenosa lenta durante 1 minuto através de cateter periférico permeável, vigia os parâmetros hematológicos antes de cada ciclo e reforça as medidas higiénicas dada a excreção predominantemente fecal.",
      "O profissional exige que todas as urinas do doente sejam colhidas em garrafões de chumbo pesados durante dois meses, advertindo que o rádio-223 é eliminado exclusivamente através de vapores renais voláteis.",
      "O enfermeiro orienta o paciente a não lavar as mãos nem utilizar produtos de limpeza corporal após as evacuações intestinais para evitar a reação do radioisótopo com a água e sabão comum."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para Rádio-223 (²²³Ra) e a era da radioterapia alfa sistémica baseia-se no princípio: O enfermeiro administra a injeção endovenosa lenta durante 1 minuto e vigia a contagem de neutrófilos e hemoglobina a cada ciclo mensal de tratamento. Esta prática concilia a segurança radiológica com os cuidados de excelência ao utente.",
    "distractorAnalysis": [
      "Está incorreta: o rádio-223 é de administração estritamente intravenosa e lenta (cerca de 1 minuto) com lavagem salina, e o doente não deve efetuar jejum alimentar prolongado.",
      "Está incorreta: o rádio-223 é depurado principalmente por via fecal/gastrointestinal e não na forma de gases ou vapores renais voláteis em garrafões de chumbo.",
      "Está incorreta: as boas práticas de radioproteção exigem higiene rigorosa das mãos e lavagem abundante das instalações sanitárias após a evacuação, para prevenir contaminações fecais residuais."
    ],
    "nursingApplication": "O enfermeiro administra a injeção endovenosa lenta durante 1 minuto e vigia a contagem de neutrófilos e hemoglobina a cada ciclo mensal de tratamento."
  },
  {
    "id": 8170,
    "topicId": 8,
    "question": "Um enfermeiro analisa as grandezas físicas, semividas e vias de depuração em 'Rádio-223 (²²³Ra) e a era da radioterapia alfa sistémica'. Qual das seguintes afirmações expressa com rigor a relação científica entre as variáveis?",
    "options": [
      "A eficácia das partículas alfa depende estritamente de concentrações tecidulares elevadas de oxigénio molecular, cessando qualquer dano no DNA neoplásica sempre que as células tumorais se encontrem em ambientes de hipóxia relativa.",
      "As partículas alfa possuem um alcance tecidular superior a vinte centímetros no corpo humano, atravessando facilmente todos os órgãos abdominais até serem detetadas por câmaras gama convencionais exteriores.",
      "A transferência linear de energia das partículas alfa (~80 keV/$\\mu$m) produz aglomerados densos de ionizações que quebram ambas as cadeias da dupla hélice do DNA de forma letal, operando com eficácia mesmo em tecidos tumorais hipóxicos.",
      "O dano celular produzido pelas partículas alfa baseia-se exclusivamente na estimulação da apoptose por ativação de recetores hormonais de superfície, não existindo qualquer interação física com o material genético nuclear."
    ],
    "correctIndex": 2,
    "explanation": "A relação biofísica e farmacocinética rigorosa demonstra que Demonstrou aumento comprovado na sobrevida global e redução de eventos esqueléticos fraturários em ensaios clínicos fase III em homens com cancro da próstata metastático. O domínio destas grandezas capacita o enfermeiro para a prestação de cuidados seguros e esclarecimento de dúvidas.",
    "distractorAnalysis": [
      "Está incorreta: uma grande vantagem radiobiológica das partículas de alto LET (como as partículas alfa) é o baixo valor de OER (Oxygen Enhancement Ratio), conservando a eficácia citotóxica mesmo em tumores hipóxicos.",
      "Está incorreta: o alcance das partículas alfa em tecidos moles é submilimétrico (normalmente inferior a 100 micrómetros, equivalente a escassos diâmetros celulares), e não de 20 centímetros.",
      "Está incorreta: as partículas alfa induzem extensas e irreversíveis quebras de dupla cadeia (DSB) no DNA cromossómico pela enorme densidade de ionização microscópica depositada."
    ],
    "nursingApplication": "O enfermeiro administra a injeção endovenosa lenta durante 1 minuto e vigia a contagem de neutrófilos e hemoglobina a cada ciclo mensal de tratamento."
  },
  {
    "id": 8171,
    "topicId": 8,
    "question": "Na física nuclear e farmacocinética dos radioisótopos na terapêutica médica, em relação a 'função e funcionamento do Ativímetro (calibrador de dose)', qual é a fundamentação científica exata?",
    "options": [
      "O ativímetro é uma balança gravimétrica de alta sensibilidade que determina a radioatividade de uma solução medindo as variações de massa atómica ocorridas na seringa durante o tempo de repouso.",
      "O aparelho opera medindo a velocidade de propagação de ondas de ultrassons de alta frequência que atravessam o frasco de vidro, calculando a atividade a partir da atenuação acústica do líquido.",
      "O instrumento consiste num espetrofotómetro de luz visível que calcula a dose terapêutica através da observação das mudanças de coloração química e fluorescência na solução aquosa do radiofármaco.",
      "O ativímetro é uma câmara de ionização tipo poço preenchida com um gás inerte sob pressão (normalmente árgon) que mede a corrente contínua produzida pela radiação, quantificando com exatidão a atividade em Becquerels da dose a administrar."
    ],
    "correctIndex": 3,
    "explanation": "Em biofísica e medicina nuclear, função e funcionamento do Ativímetro (calibrador de dose) explica-se pelo facto de que é uma câmara de ionização tipo poço preenchida com gás árgon sob alta pressão, projetada para medir a atividade absoluta em Becquerels ou Curies de uma seringa ou frasco radioativo antes da injeção. O utilizador seleciona o botão do radioisótopo específico (que ajusta o fator de calibração eletrónico para a energia e rendimento dos fotões emitidos) e introduz a amostra no poço blindado com chumbo.",
    "distractorAnalysis": [
      "Está incorreta: a atividade nuclear mede o número de transformações por segundo (Bq) através de ionizações num gás e não por medição mecânica de massa gravimétrica numa balança.",
      "Está incorreta: o ativímetro não utiliza ondas de ultrassom nem baseia a sua calibração em parâmetros de atenuação acústica de fluidos.",
      "Está incorreta: a maioria dos radiofármacos administrados em medicina nuclear são transparentes e incolores; a medição baseia-se na ionização gasosa produzida pelos fotões gama emitidos e não em espetrofotometria ótica."
    ],
    "nursingApplication": "O enfermeiro ou técnico regista a leitura no ativímetro e anota na ficha de administração a atividade real injetada com a hora exata da medição."
  },
  {
    "id": 8172,
    "topicId": 8,
    "question": "Na administração de radiofármacos e cuidados clínicos de enfermagem em medicina nuclear e oncologia, como se concretiza na prática o conceito de 'função e funcionamento do Ativímetro (calibrador de dose)'?",
    "options": [
      "O profissional posiciona a seringa no suporte geométrico central do poço, seleciona a calibração específica do radionuclídeo prescrito, regista o valor líquido medido e o horário exato da medição no registo de administração do doente.",
      "O enfermeiro mede a atividade aproximando a ponta da agulha da seringa do ecrã do computador central e estima a dose visualmente de acordo com a velocidade do piscar da luz indicadora da consola.",
      "O profissional altera manualmente os fatores de resposta eletrónica da máquina para forçar o aparelho a exibir rigorosamente o número prescrito pelo médico, independentemente da solução aspirada.",
      "O enfermeiro dispensa o uso de suportes de plástico ou acrílico no poço, depositando a seringa sem proteção no fundo metálico para permitir que o líquido entre em contacto direto com os elétrodos de gás."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para função e funcionamento do Ativímetro (calibrador de dose) baseia-se no princípio: O enfermeiro ou técnico regista a leitura no ativímetro e anota na ficha de administração a atividade real injetada com a hora exata da medição. Esta prática concilia a segurança radiológica com os cuidados de excelência ao utente.",
    "distractorAnalysis": [
      "Está incorreta: a medição da dose requer a inserção da seringa no interior da cavidade do ativímetro e a leitura digital padronizada, nunca aproximação a ecrãs exteriores.",
      "Está incorreta: adulterar calibrações para falsear leituras constituiria violação ética e risco extremo de sobredoseamento ou subdoseamento iatrogénico grave no doente.",
      "Está incorreta: a geometria de medição com suporte centralizado é essencial para reprodutibilidade das leituras, e a câmara de ionização é hermética e selada, sem contacto com fluidos."
    ],
    "nursingApplication": "O enfermeiro ou técnico regista a leitura no ativímetro e anota na ficha de administração a atividade real injetada com a hora exata da medição."
  },
  {
    "id": 8173,
    "topicId": 8,
    "question": "Um enfermeiro analisa as grandezas físicas, semividas e vias de depuração em 'função e funcionamento do Ativímetro (calibrador de dose)'. Qual das seguintes afirmações expressa com rigor a relação científica entre as variáveis?",
    "options": [
      "A interação nuclear dos fotões no poço do ativímetro induz a fissão controlada do árgon com emissão em cadeia de neutrões térmicos, cuja contagem mecânica fornece diretamente a atividade em MegaBecquerels.",
      "A interação da radiação gama com os átomos de árgon na câmara gera pares de iões recolhidos sob um gradiente de alta tensão de saturação, originando uma corrente na ordem dos picoamperes ($10^{-12}$ A) proporcional à atividade da amostra.",
      "O sinal no ativímetro provém da reflexão de feixes de laser infravermelhos na superfície externa da seringa de plástico, medindo o diâmetro do êmbolo para calcular a radioatividade volumétrica.",
      "A câmara de ionização funciona registando a pressão barométrica atmosférica da sala quente através de uma membrana elástica, sendo a atividade estimada por comparação com as previsões meteorológicas locais."
    ],
    "correctIndex": 1,
    "explanation": "A relação biofísica e farmacocinética rigorosa demonstra que O utilizador seleciona o botão do radioisótopo específico (que ajusta o fator de calibração eletrónico para a energia e rendimento dos fotões emitidos) e introduz a amostra no poço blindado com chumbo. O domínio destas grandezas capacita o enfermeiro para a prestação de cuidados seguros e esclarecimento de dúvidas.",
    "distractorAnalysis": [
      "Está incorreta: a câmara de ionização funciona em regime de saturação (sem multiplicação de carga nem fissão nuclear de árgon), gerando correntes elétricas contínuas extremamente pequenas proporcionais à atividade.",
      "Está incorreta: a medição de dose radioativa não utiliza feixes de laser para medir o êmbolo plástico, assentando em processos de ionização da radiação penetrante no gás.",
      "Está incorreta: a medição da atividade radioativa é independente de variações barométricas externas nas câmaras seladas e pressurizadas com árgon."
    ],
    "nursingApplication": "O enfermeiro ou técnico regista a leitura no ativímetro e anota na ficha de administração a atividade real injetada com a hora exata da medição."
  },
  {
    "id": 8174,
    "topicId": 8,
    "question": "Na física nuclear e farmacocinética dos radioisótopos na terapêutica médica, em relação a 'trabalho na câmara quente sob campânula de fluxo laminar blindada', qual é a fundamentação científica exata?",
    "options": [
      "A manipulação de radiofármacos injetáveis deve ser efetuada ao ar livre junto a janelas abertas do serviço para que a circulação do vento ambiente remova de imediato os átomos radioativos em suspensão na sala.",
      "A campânula de fluxo laminar tem como único propósito aquecer os frascos de radiofármaco por infravermelhos a setenta graus Celsius para desativar os fotões gama antes da administração clínica ao doente.",
      "A preparação de radiofármacos estéreis decorre em campânulas de fluxo laminar blindadas que combinam filtros HEPA para garantia de ar estéril de classe A com blindagem de chumbo e visor de vidro plumbífero para radioproteção do operador.",
      "A câmara de preparação dispensa qualquer tipo de blindagem radiológica estrutural, assentando a proteção dos técnicos e enfermeiros unicamente no uso de óculos de sol convencionais de acetato."
    ],
    "correctIndex": 2,
    "explanation": "Em biofísica e medicina nuclear, trabalho na câmara quente sob campânula de fluxo laminar blindada explica-se pelo facto de que a preparação e eluição dos radiofármacos decorre no interior de capelas de fluxo laminar de ar filtrado por filtros HEPA com blindagem frontal de vidro plumbífero espesso. Garante em simultâneo a proteção do profissional contra a radiação ionizante e a esterilidade microbiológica estrita do produto que vai ser injetado por via intravenosa no doente.",
    "distractorAnalysis": [
      "Está incorreta: a preparação de produtos injetáveis exige controlo asséptico rigoroso em ambiente fechado de fluxo laminar e proteção radiológica, sendo inaceitável fazê-lo ao ar livre.",
      "Está incorreta: o fluxo laminar protege a esterilidade microbiológica do injetável e a blindagem atenua a radiação; o aquecimento térmico não atenua emissões gama e degradaria o radiofármaco.",
      "Está incorreta: óculos comuns não fornecem proteção contra radiação ionizante; são obrigatórias blindagens plumbíferas e visores de vidro de chumbo de alta densidade."
    ],
    "nursingApplication": "O enfermeiro realiza a desinfeção prévia com álcool a 70% estéril e manipula todos os frascos através dos orifícios de luvas plumbíferas integradas."
  },
  {
    "id": 8175,
    "topicId": 8,
    "question": "Na administração de radiofármacos e cuidados clínicos de enfermagem em medicina nuclear e oncologia, como se concretiza na prática o conceito de 'trabalho na câmara quente sob campânula de fluxo laminar blindada'?",
    "options": [
      "O enfermeiro manuseia os frascos multidose diretamente com as mãos desprotegidas sem luvas nem blindagens de seringa, sustentando que a rapidez gestual anula a dose de radiação transmitida à pele dos dedos.",
      "O profissional reutiliza agulhas e seringas descartáveis em múltiplos doentes diferentes após lavagem com água da torneira para reduzir os custos operacionais e o volume de resíduos radioativos gerados no hospital.",
      "O enfermeiro dispensa o uso de pinças de preensão ou protetores de seringa blindados durante a aspiração de radiofármacos terapêuticos de alta energia, justificando que a blindagem reduz a destreza manual cirúrgica.",
      "O profissional aplica técnica asséptica rigorosa na desinfeção de frascos e septos com álcool a 70% estéril, utiliza blindagens de seringa em tungsténio e pinças de manipulação à distância e monitoriza as mãos no final do procedimento."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para trabalho na câmara quente sob campânula de fluxo laminar blindada baseia-se no princípio: O enfermeiro realiza a desinfeção prévia com álcool a 70% estéril e manipula todos os frascos através dos orifícios de luvas plumbíferas integradas. Esta prática concilia a segurança radiológica com os cuidados de excelência ao utente.",
    "distractorAnalysis": [
      "Está incorreta: o contacto direto dos dedos com frascos sem blindagem gera doses de radiação extremamente elevadas nas extremidades (lei do inverso do quadrado da distância), sendo obrigatório o uso de pinças e blindagens.",
      "Está incorreta: a reutilização de materiais perfurocortantes descartáveis viola as regras universais de assepsia e biossegurança, acarretando risco de contaminação cruzada biológica e iatrogenia grave.",
      "Está incorreta: a perda ligeira de destreza manual é amplamente superada pela proteção radiológica essencial conferida pelas blindagens de seringa e pinças, que reduzem dramaticamente a dose nas mãos."
    ],
    "nursingApplication": "O enfermeiro realiza a desinfeção prévia com álcool a 70% estéril e manipula todos os frascos através dos orifícios de luvas plumbíferas integradas."
  },
  {
    "id": 8176,
    "topicId": 8,
    "question": "Um enfermeiro analisa as grandezas físicas, semividas e vias de depuração em 'trabalho na câmara quente sob campânula de fluxo laminar blindada'. Qual das seguintes afirmações expressa com rigor a relação científica entre as variáveis?",
    "options": [
      "O sistema garante em simultâneo a proteção do profissional contra a radiação ionizante externa através das blindagens plumbíferas e a proteção do produto injetável estéril contra partículas biológicas via fluxo de ar laminar filtrado por filtros HEPA.",
      "O sistema funciona através da pressurização estática com azoto líquido que congela instantaneamente os microrganismos ambientais, dispensando a necessidade de qualquer atenuação física de fotões gama pelo chumbo da estrutura envolvente da câmara.",
      "A campânula opera criando vácuo absoluto no seu interior durante toda a preparação do radiofármaco, sendo a radiação eletromagnética totalmente suprimida pela ausência de moléculas de oxigénio gasoso no espaço fechado de manipulação laboratorial.",
      "O fluxo de ar tem a função exclusiva de soprar feixes de neutrões em direção ao operador para desionizar a sua bata cirúrgica, enquanto o visor frontal impede a saída de odores desagradáveis libertados pelo solvente fisiológico da preparação."
    ],
    "correctIndex": 0,
    "explanation": "A relação biofísica e farmacocinética rigorosa demonstra que Garante em simultâneo a proteção do profissional contra a radiação ionizante e a esterilidade microbiológica estrita do produto que vai ser injetado por via intravenosa no doente. O domínio destas grandezas capacita o enfermeiro para a prestação de cuidados seguros e esclarecimento de dúvidas.",
    "distractorAnalysis": [
      "Está incorreta: a câmara de fluxo laminar opera com circulação de ar estéril purificado por filtros HEPA e blindagens de chumbo, não utilizando azoto líquido criogénico nem dispensando a atenuação plumbífera.",
      "Está incorreta: a campânula de manipulação não cria vácuo e os fotões gama propagam-se livremente no vácuo; a proteção assenta no chumbo e vidro plumbífero.",
      "Está incorreta: o fluxo de ar estéril não emite neutrões nem as batas acumulam ionizações que precisem de sopro desionizante; a função é estritamente asséptica e de contenção."
    ],
    "nursingApplication": "O enfermeiro realiza a desinfeção prévia com álcool a 70% estéril e manipula todos os frascos através dos orifícios de luvas plumbíferas integradas."
  },
  {
    "id": 8177,
    "topicId": 8,
    "question": "Na física nuclear e farmacocinética dos radioisótopos na terapêutica médica, em relação a 'procedimento de atuação perante derrame acidental de solução radioativa', qual é a fundamentação científica exata?",
    "options": [
      "O procedimento adequado consiste em lavar imediatamente o chão com mangueiras de alta pressão com água quente pressurizada para espalhar a solução radioativa por todos os ralos de modo a diluir os átomos em volume máximo na rede hospitalar.",
      "A contenção imediata com papel absorvente limita a dispersão líquida e a formação de aerossóis, enquanto a delimitação da área e o afastamento temporal permitem o decaimento radioativo de isótopos de semivida curta, reduzindo a taxa de dose e o risco de incorporação interna.",
      "A fundamentação assenta na combustão química do líquido derramado com solventes alcoólicos para que a radiação ionizante se transforme em cinzas inertes desprovidas de qualquer atividade atómica residual ou perigo biológico.",
      "O derrame deve ser neutralizado mediante a aplicação de fortes campos magnéticos permanentes sobre o solo para atrair os fotões gama para o interior de recipientes ferromagnéticos dispostos nas paredes da sala de exames."
    ],
    "correctIndex": 1,
    "explanation": "Em biofísica e medicina nuclear, procedimento de atuação perante derrame acidental de solução radioativa explica-se pelo facto de que em caso de quebra de frasco ou derrame líquido de radiofármaco, a prioridade imediata é: 1) Limitar a dispersão (cobrir o líquido com papel absorvente seco); 2) Alertar a equipa e evacuar a área imediata; 3) Descontaminar de fora para dentro usando luvas duplas e detergente quelante (como Decon 90). Todo o material de limpeza é descartado no contentor de lixo radioativo sob vigilância do radioprotecionista.",
    "distractorAnalysis": [
      "Está incorreta: a lavagem com mangueira de água sob pressão dispersaria a contaminação por todo o serviço e canalizações, amplificando o risco de exposição e contaminação ambiental.",
      "Está incorreta: a combustão química não neutraliza núcleos radioativos instáveis e criaria fumo radioativo inalável de altíssima perigosidade respiratória.",
      "Está incorreta: os fotões gama não possuem carga elétrica e não são desviados nem atraídos por campos magnéticos estáticos ou ímanes."
    ],
    "nursingApplication": "O enfermeiro monitoriza a bancada e as solas dos sapatos com um contador de contaminação de superfície antes de autorizar a reabertura do local."
  },
  {
    "id": 8178,
    "topicId": 8,
    "question": "Na administração de radiofármacos e cuidados clínicos de enfermagem em medicina nuclear e oncologia, como se concretiza na prática o conceito de 'procedimento de atuação perante derrame acidental de solução radioativa'?",
    "options": [
      "O enfermeiro utiliza um esfregão de algodão para esfregar vigorosamente o derrame em círculos concêntricos do centro para as extremidades da sala até que todo o piso fique homogeneamente húmido e sem resíduos visíveis a olho nu.",
      "O profissional sopra ar comprimido industrial sobre a poça de radiofármaco para acelerar a secagem do solvente e pulveriza desodorizante ambiental para disfarçar o odor antes de autorizar a entrada imediata de novos doentes.",
      "O enfermeiro calça luvas de proteção e cobre o líquido com papel absorvente sem fricção, delimita o perímetro impedindo acessos, notifica a proteção radiológica e procede à descontaminação limpando das margens periféricas para o centro do derrame.",
      "O enfermeiro evacua permanentemente todo o edifício hospitalar sem cobrir o derrame e aciona o alarme de incêndio geral antes de tentar identificar o radionuclídeo envolvido ou a quantidade de atividade derramada na sala."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para procedimento de atuação perante derrame acidental de solução radioativa baseia-se no princípio: O enfermeiro monitoriza a bancada e as solas dos sapatos com um contador de contaminação de superfície antes de autorizar a reabertura do local. Esta prática concilia a segurança radiológica com os cuidados de excelência ao utente.",
    "distractorAnalysis": [
      "Está incorreta: a limpeza deve ser realizada obrigatoriamente da periferia para o centro para evitar a expansão da área contaminada; esfregar do centro para fora alastra o derrame.",
      "Está incorreta: soprar ar comprimido suspende gotículas radioativas no ar na forma de aerossóis inaláveis altamente tóxicos para o trato respiratório dos presentes.",
      "Está incorreta: derrames de pequena ou média atividade requerem contenção local, delimitação e descontaminação orientada, sendo desproporcional a evacuação cega de todo o hospital."
    ],
    "nursingApplication": "O enfermeiro monitoriza a bancada e as solas dos sapatos com um contador de contaminação de superfície antes de autorizar a reabertura do local."
  },
  {
    "id": 8179,
    "topicId": 8,
    "question": "Um enfermeiro analisa as grandezas físicas, semividas e vias de depuração em 'procedimento de atuação perante derrame acidental de solução radioativa'. Qual das seguintes afirmações expressa com rigor a relação científica entre as variáveis?",
    "options": [
      "A monitorização com detetores de radiação é dispensável caso o líquido derramado se torne transparente após a secagem, uma vez que a evaporação da água elimina por completo os núcleos atómicos instáveis do radioisótopo derramado.",
      "O decaimento radioativo depende estritamente da intensidade luminosa na sala, pelo que manter as lâmpadas acesas na potência máxima durante duas horas reduz a semivida física do radionuclídeo em noventa e cinco por cento.",
      "A taxa de contaminação residual de superfície deve ser verificada mediante a pesagem gravimétrica diária do chão em balança analítica, sendo a atividade calculada pela variação de massa em gramas por metro quadrado.",
      "A monitorização da taxa de dose com contador de radiação confirma a eficácia da descontaminação e, no caso do tecnécio-99m ($T_{1/2} = 6$ h), a área pode ser interditada por 24 a 48 horas (4 a 8 semividas) para que o decaimento reduza a atividade a níveis de fundo."
    ],
    "correctIndex": 3,
    "explanation": "A relação biofísica e farmacocinética rigorosa demonstra que Todo o material de limpeza é descartado no contentor de lixo radioativo sob vigilância do radioprotecionista. O domínio destas grandezas capacita o enfermeiro para a prestação de cuidados seguros e esclarecimento de dúvidas.",
    "distractorAnalysis": [
      "Está incorreta: a evaporação do solvente aquoso deixa o sal radioativo depositado na superfície como contaminação seca facilmente transferível e inalável.",
      "Está incorreta: as grandezas e taxas de decaimento nuclear são totalmente invariáveis com a radiação luminosa ambiente visível.",
      "Está incorreta: as massas de radiofármacos envolvidas em medicina nuclear situam-se na escala dos picogramas ou nanogramas, impossíveis de aferir por pesagem gravimétrica direta de solos."
    ],
    "nursingApplication": "O enfermeiro monitoriza a bancada e as solas dos sapatos com um contador de contaminação de superfície antes de autorizar a reabertura do local."
  },
  {
    "id": 8180,
    "topicId": 8,
    "question": "Na física nuclear e farmacocinética dos radioisótopos na terapêutica médica, em relação a 'gerenciamento seguro de material perfurocortante radioativo', qual é a fundamentação científica exata?",
    "options": [
      "Agulhas e seringas usadas combinam o risco biológico clássico de transmissão de agentes patogénicos pelo sangue com o perigo radiológico de dose elevada por contacto cutâneo e incorporação interna acidental em caso de picada perfurante no profissional.",
      "O perigo dos perfurocortantes em medicina nuclear resulta unicamente do facto de o aço cirúrgico das agulhas sofrer fissão atómica espontânea quando entra em contacto com o plástico das seringas descartáveis de polipropileno hospitalares.",
      "Os materiais perfurocortantes perdem toda a sua radioatividade no instante exato em que são retirados da veia do doente, subsistindo unicamente o risco mecânico associado ao corte físico da epiderme do operador de enfermagem.",
      "A perfuração acidental com agulha radioativa não apresenta risco de dose interna porque as defesas fagocíticas e os macrófagos tecidulares neutralizam fisicamente as radiações ionizantes emitidas no ponto de inoculação."
    ],
    "correctIndex": 0,
    "explanation": "Em biofísica e medicina nuclear, gerenciamento seguro de material perfurocortante radioativo explica-se pelo facto de que agulhas de injeção, pontas de cateteres e seringas contaminadas com sangue e radiofármacos combinam risco biológico infeccioso com risco radiológico. Devem ser depositadas em contentores rígidos amarelos imperfuráveis colocados dentro de sobre-embalagens de chumbo blindadas dedicadas na câmara quente.",
    "distractorAnalysis": [
      "Está incorreta: o aço cirúrgico não sofre fissão atómica ao contactar com polímeros plásticos; o risco resulta do radionuclídeo residual na ponta e lúmen da agulha associado a sangue venoso.",
      "Está incorreta: a atividade residual presente na agulha e na seringa mantém-se ativa de acordo com a sua semivida física, mantendo o risco radioativo após a punção venosa.",
      "Está incorreta: as células imunitárias fagocitam partículas estranhas mas não têm capacidade para deter ou anular a emissão de fotões gama ou partículas beta ionizantes."
    ],
    "nursingApplication": "O enfermeiro nunca reencapa agulhas após a punção venosa, descartando o conjunto imediatamente no contentor de perfurocortantes blindado."
  },
  {
    "id": 8181,
    "topicId": 8,
    "question": "Na administração de radiofármacos e cuidados clínicos de enfermagem em medicina nuclear e oncologia, como se concretiza na prática o conceito de 'gerenciamento seguro de material perfurocortante radioativo'?",
    "options": [
      "O enfermeiro reencapa cuidadosamente todas as agulhas com as duas mãos antes de as dobrar manualmente com os dedos para verificar a resistência mecânica do metal antes de as colocar no saco de lixo doméstico comum.",
      "O enfermeiro descarta agulhas e seringas imediatamente após o uso em contentor rígido específico para perfurocortantes, devidamente sinalizado com o símbolo de trifólio radioativo e protegido por blindagem de chumbo, sem nunca reencapar as agulhas.",
      "O profissional recolhe as agulhas e seringas radioativas usadas num saco plástico fino suspenso no suporte de soros do corredor, mantendo-o aberto para facilitar a ventilação natural dos fotões residuais emitidos.",
      "O enfermeiro lava as agulhas contaminadas em água na pia da sala de repouso dos doentes e armazena-as em caixas de cartão abertas para reutilização nos exames de diagnóstico da manhã seguinte."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para gerenciamento seguro de material perfurocortante radioativo baseia-se no princípio: O enfermeiro nunca reencapa agulhas após a punção venosa, descartando o conjunto imediatamente no contentor de perfurocortantes blindado. Esta prática concilia a segurança radiológica com os cuidados de excelência ao utente.",
    "distractorAnalysis": [
      "Está incorreta: reencapar agulhas com as duas mãos ou dobrá-las manualmente constitui a principal causa de acidentes perfurantes com inoculação de material contaminado, sendo prática expressamente proibida.",
      "Está incorreta: perfurocortantes requerem recipientes rígidos resistentes à perfuração e com blindagem radiológica adequada, nunca sacos plásticos frágeis que rasgam com facilidade.",
      "Está incorreta: materiais perfurocortantes de uso intravenoso são rigorosamente descartáveis de uso único; a sua lavagem e reutilização viola todas as normas de assepsia e biossegurança."
    ],
    "nursingApplication": "O enfermeiro nunca reencapa agulhas após a punção venosa, descartando o conjunto imediatamente no contentor de perfurocortantes blindado."
  },
  {
    "id": 8182,
    "topicId": 8,
    "question": "Um enfermeiro analisa as grandezas físicas, semividas e vias de depuração em 'gerenciamento seguro de material perfurocortante radioativo'. Qual das seguintes afirmações expressa com rigor a relação científica entre as variáveis?",
    "options": [
      "Os resíduos perfurocortantes radioativos são incinerados no próprio serviço em recipiente aberto dez minutos após o uso para garantir que todos os fotões gama sejam convertidos em fumo inofensivo libertado na atmosfera.",
      "O tempo de armazenamento em sala de decaimento é estritamente o mesmo (três dias) para qualquer radioisótopo, independentemente de se tratar de tecnécio-99m com seis horas de semivida ou de rádio-226 com milénios de semivida.",
      "Os contentores de perfurocortantes com radiofármacos de semivida curta são armazenados em sala de decaimento blindada durante cerca de dez semividas físicas até a atividade atingir níveis de isenção, sendo depois geridos como resíduos biológicos do Grupo III.",
      "A taxa de decaimento dos resíduos nos contentores pode ser acelerada mediante a imersão das caixas em recipientes com água mineral quente durante vinte minutos antes do seu envio para aterro sanitário municipal."
    ],
    "correctIndex": 2,
    "explanation": "A relação biofísica e farmacocinética rigorosa demonstra que Devem ser depositadas em contentores rígidos amarelos imperfuráveis colocados dentro de sobre-embalagens de chumbo blindadas dedicadas na câmara quente. O domínio destas grandezas capacita o enfermeiro para a prestação de cuidados seguros e esclarecimento de dúvidas.",
    "distractorAnalysis": [
      "Está incorreta: a incineração aberta no serviço libertaria radionuclídeos para o ar e violaria gravemente as leis de segurança nuclear e proteção ambiental.",
      "Está incorreta: o tempo de armazenamento depende diretamente da semivida física de cada isótopo específico (regra das 10 semividas), não podendo aplicar-se um prazo uniforme para isótopos diferentes.",
      "Está incorreta: a semivida nuclear é uma propriedade atómica intrínseca que não se altera com tratamentos térmicos ou banhos de água quente."
    ],
    "nursingApplication": "O enfermeiro nunca reencapa agulhas após a punção venosa, descartando o conjunto imediatamente no contentor de perfurocortantes blindado."
  },
  {
    "id": 8183,
    "topicId": 8,
    "question": "Na física nuclear e farmacocinética dos radioisótopos na terapêutica médica, em relação a 'controlo periódico de contaminação e esfregaços de superfície (wipe tests)', qual é a fundamentação científica exata?",
    "options": [
      "Os testes de esfregaço servem exclusivamente para medir a temperatura termodinâmica das bancadas de chumbo, sendo a presença de contaminação radioativa calculada pela dilatação térmica do papel de filtro utilizado no teste.",
      "A técnica de esfregaço tem como objetivo detetar bactérias anaeróbias na câmara quente, uma vez que a radiação gama atrai microrganismos patogénicos que proliferam rapidamente na superfície dos tijolos de chumbo.",
      "O wipe test é realizado para remover fisicamente a totalidade dos eletrões das bancadas de manipulação, evitando que as superfícies metálicas acumulem cargas eletrostáticas que possam provocar faíscas aos operadores.",
      "Os testes de esfregaço (wipe tests) avaliam a contaminação radioativa removível ou transferível de superfícies de trabalho, distinguindo-a da contaminação fixa que apenas contribui para a taxa de dose de irradiação externa e não para o risco de incorporação."
    ],
    "correctIndex": 3,
    "explanation": "Em biofísica e medicina nuclear, controlo periódico de contaminação e esfregaços de superfície (wipe tests) explica-se pelo facto de que testes regulares onde pedaços de papel de filtro são friccionados sobre bancadas, puxadores de portas, telefones e chão da câmara quente e medidos num contador de poço de cintilação. Permitem detetar contaminações radioativas microscópicas invisíveis que passariam despercebidas à inspeção visual comum.",
    "distractorAnalysis": [
      "Está incorreta: o wipe test avalia a atividade radioativa de núcleos instáveis transferidos para o papel e não a temperatura ou dilatação térmica do material.",
      "Está incorreta: a radiação gama é bactericida em doses elevadas e o wipe test mede contaminação radiológica por contagem de radiação, não crescimento de colónias microbiológicas.",
      "Está incorreta: o teste de esfregaço remove pequenas frações de material radioativo solto para monitorização, não tendo relação com cargas eletrostáticas superficiais."
    ],
    "nursingApplication": "O enfermeiro colabora na manutenção rigorosa dos registos de descontaminação e garantia de qualidade do serviço de medicina nuclear."
  },
  {
    "id": 8184,
    "topicId": 8,
    "question": "Na administração de radiofármacos e cuidados clínicos de enfermagem em medicina nuclear e oncologia, como se concretiza na prática o conceito de 'controlo periódico de contaminação e esfregaços de superfície (wipe tests)'?",
    "options": [
      "O enfermeiro esfrega um papel de filtro sobre uma área padronizada de cerca de cem centímetros quadrados exercendo pressão uniforme, insere o esfregaço num tubo de ensaio e quantifica a atividade num contador de cintilação com poço blindado de alta sensibilidade.",
      "O enfermeiro passa a mão desprotegida sobre a bancada e avalia a contaminação sentindo se a pele dos dedos apresenta formigueiro térmico ou dormência nas zonas onde foram manipulados os radiofármacos durante o turno.",
      "O profissional utiliza uma esponja embebida em cera de limpeza para polir todas as superfícies da campânula de fluxo e conclui o procedimento sem efetuar qualquer medição física com detetores de radiação ionizante.",
      "O enfermeiro queima o papel de filtro numa lamparina de álcool no interior da sala quente e determina o nível de contaminação através da cor do fumo produzido pela combustão dos resíduos orgânicos na chama."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para controlo periódico de contaminação e esfregaços de superfície (wipe tests) baseia-se no princípio: O enfermeiro colabora na manutenção rigorosa dos registos de descontaminação e garantia de qualidade do serviço de medicina nuclear. Esta prática concilia a segurança radiológica com os cuidados de excelência ao utente.",
    "distractorAnalysis": [
      "Está incorreta: as doses habituais de contaminação superficial em medicina nuclear não provocam sensações táteis ou térmicas na pele; o contacto direto com a pele nua incorre em risco de contaminação cutânea grave.",
      "Está incorreta: polir bancadas com cera sem medição instrumental prévia e posterior mascara a contaminação e impede a verificação da conformidade radiológica das superfícies.",
      "Está incorreta: queimar o papel de filtro volatiliza os radioisótopos no ar da sala, criando um grave perigo de inalação interna radioativa em vez de quantificar a contaminação."
    ],
    "nursingApplication": "O enfermeiro colabora na manutenção rigorosa dos registos de descontaminação e garantia de qualidade do serviço de medicina nuclear."
  },
  {
    "id": 8185,
    "topicId": 8,
    "question": "Um enfermeiro analisa as grandezas físicas, semividas e vias de depuração em 'controlo periódico de contaminação e esfregaços de superfície (wipe tests)'. Qual das seguintes afirmações expressa com rigor a relação científica entre as variáveis?",
    "options": [
      "A taxa de contagem em cpm obtida no contador de poço é uma grandeza biológica pura que reflete a pressão arterial média do operador no momento exato da recolha do esfregaço na superfície da bancada de trabalho.",
      "A conversão das contagens por minuto (cpm) registadas no detetor para Becquerels (Bq) através da eficiência instrumental permite verificar o cumprimento dos limites regulamentares de contaminação removível e prevenir a contaminação cruzada interna.",
      "A contaminação removível de superfície não oferece qualquer perigo para a saúde dos profissionais, sendo as medições periódicas de wipe tests realizadas apenas para cumprir requisitos burocráticos sem base física ou clínica.",
      "Se o esfregaço revelar contagens acima dos limites de ação, a conduta correta é pintar a bancada com uma camada de verniz comum para selar definitivamente a radiação gama no interior do mobiliário da sala."
    ],
    "correctIndex": 1,
    "explanation": "A relação biofísica e farmacocinética rigorosa demonstra que Permitem detetar contaminações radioativas microscópicas invisíveis que passariam despercebidas à inspeção visual comum. O domínio destas grandezas capacita o enfermeiro para a prestação de cuidados seguros e esclarecimento de dúvidas.",
    "distractorAnalysis": [
      "Está incorreta: as cpm refletem a taxa de deteção de fotões na câmara do contador em função da atividade da amostra e da geometria de deteção, sem qualquer ligação a variáveis hemodinâmicas humanas.",
      "Está incorreta: a contaminação transferível apresenta risco significativo de passagem para as mãos, luvas e consequente ingestão ou inalação acidental de radioisótopos (contaminação interna).",
      "Está incorreta: a aplicação de verniz ou tinta não atenua a radiação gama penetrante e dificulta futuras ações de descontaminação física e química adequadas."
    ],
    "nursingApplication": "O enfermeiro colabora na manutenção rigorosa dos registos de descontaminação e garantia de qualidade do serviço de medicina nuclear."
  },
  {
    "id": 8186,
    "topicId": 8,
    "question": "Na física nuclear e farmacocinética dos radioisótopos na terapêutica médica, em relação a 'combate ao estigma e desmistificação de mitos populares da radiação', qual é a fundamentação científica exata?",
    "options": [
      "O receio dos doentes fundamenta-se no facto de qualquer dose diagnóstica de tecnécio provocar a destruição de cinquenta por cento dos órgãos abdominais e conferir propriedades magnéticas permanentes à corrente sanguínea do indivíduo examinado.",
      "O enfermeiro confirma ao doente que o corpo humano emite fluorescência esverdeada após a injeção de radiofármacos, recomendando o uso de óculos escuros pela família durante a noite para evitar lesões permanentes na retina dos familiares.",
      "Muitos utentes temem que a radiação os faça emitir luz visível, queime as suas roupas ou provoque calvície após um exame diagnóstico; o enfermeiro esclarece que a dose de 99mTc é comparável a exames radiológicos e decai em poucas horas sem efeitos estocásticos ou determinísticos imediatos.",
      "A desmistificação baseia-se na explicação de que os radioisótopos utilizados em medicina nuclear são compostos exclusivamente por vitaminas hidrossolúveis que não contêm qualquer tipo de energia ionizante ou instabilidade atómica intrínseca."
    ],
    "correctIndex": 2,
    "explanation": "Em biofísica e medicina nuclear, combate ao estigma e desmistificação de mitos populares da radiação explica-se pelo facto de que muitos doentes temem que a radiação os faça 'brilhar no escuro', queime as suas roupas ou provoque queda de cabelo instantânea após uma simples cintigrafia diagnóstica. O enfermeiro esclarece empaticamente que a dose diagnóstica de tecnécio é semelhante a exames de raio-X comuns, não tem cheiro nem cor e desaparece do corpo em poucas horas sem efeitos visíveis.",
    "distractorAnalysis": [
      "Está incorreta: as doses diagnósticas de tecnécio-99m são baixas (da ordem dos miliSieverts) e não causam destruição orgânica massiva nem alteram as propriedades magnéticas do sangue.",
      "Está incorreta: os doentes que realizam exames com radiofármacos não emitem luz visível nem brilham no escuro; a radiação gama emitida é invisível e impercetível aos sentidos.",
      "Está incorreta: os radioisótopos emitem radiação ionizante genuína com atividade atómica mensurável; negar a sua natureza física retira a credibilidade profissional e impede o esclarecimento rigoroso do utente."
    ],
    "nursingApplication": "Esta relação de ajuda reduz a ansiedade pré-exame e promove a adesão e confiança na equipa de saúde."
  },
  {
    "id": 8187,
    "topicId": 8,
    "question": "Na administração de radiofármacos e cuidados clínicos de enfermagem em medicina nuclear e oncologia, como se concretiza na prática o conceito de 'combate ao estigma e desmistificação de mitos populares da radiação'?",
    "options": [
      "O enfermeiro censura energicamente o utente por demonstrar receio da radiação, recusando-se a responder a perguntas e informando que a expressão de medo antes de procedimentos diagnósticos hospitalares é proibida no serviço.",
      "O profissional garante ao doente que a radiação ionizante cura instantaneamente todas as infeções bacterianas latentes do organismo e aconselha os familiares mais próximos a receberem uma dose profilática de radiofármaco.",
      "O enfermeiro aconselha o doente a abandonar o serviço caso sinta qualquer tipo de receio antes da administração, sustentando que os exames de medicina nuclear apenas devem ser executados em indivíduos destituídos de emoções.",
      "O enfermeiro pratica escuta ativa, valida as ansiedades do utente, explica os princípios de decaimento e eliminação urinária do radiofármaco em linguagem compreensível e promove a tranquilidade necessária para a cooperação e o consentimento informado."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para combate ao estigma e desmistificação de mitos populares da radiação baseia-se no princípio: Esta relação de ajuda reduz a ansiedade pré-exame e promove a adesão e confiança na equipa de saúde. Esta prática concilia a segurança radiológica com os cuidados de excelência ao utente.",
    "distractorAnalysis": [
      "Está incorreta: desvalorizar ou reprimir os medos do utente prejudica gravemente a aliança terapêutica, agrava o stresse e compromete a qualidade e a segurança do procedimento clínico.",
      "Está incorreta: doses de radiofármacos diagnósticos não têm indicação como antimicrobianos sistémicos e nunca se administram doses diagnósticas desnecessárias a familiares saudáveis.",
      "Está incorreta: a ansiedade perante a radiação é comum e deve ser gerida com intervenção pedagógica empática e rigor científico, e não pelo abandono dos cuidados necessários."
    ],
    "nursingApplication": "Esta relação de ajuda reduz a ansiedade pré-exame e promove a adesão e confiança na equipa de saúde."
  },
  {
    "id": 8188,
    "topicId": 8,
    "question": "Um enfermeiro analisa as grandezas físicas, semividas e vias de depuração em 'combate ao estigma e desmistificação de mitos populares da radiação'. Qual das seguintes afirmações expressa com rigor a relação científica entre as variáveis?",
    "options": [
      "A dose efetiva administrada em exames diagnósticos com tecnécio-99m situa-se habitualmente entre 2 e 6 mSv, com perfil de segurança favorável no qual o benefício clínico do diagnóstico precoce supera largamente o risco estocástico teórico associado à radiação.",
      "O risco estocástico de um exame de cintigrafia com tecnécio é incomparavelmente superior ao de qualquer grande intervenção cirúrgica a céu aberto, exigindo a assinatura de um termo de renúncia a direitos civis antes do procedimento.",
      "A dose efetiva recebida numa cintigrafia óssea com 99mTc-HDP é tão reduzida que se torna fisicamente impossível medi-la com aparelhos instrumentais existentes, equivalendo a caminhar na relva durante um décimo de segundo.",
      "Os doentes submetidos a cintigrafia diagnóstica tornam-se fontes radioativas permanentes ao longo de toda a sua vida adulta, emitindo fotões penetrantes que irradiam continuamente os vizinhos do mesmo prédio habitacional."
    ],
    "correctIndex": 0,
    "explanation": "A relação biofísica e farmacocinética rigorosa demonstra que O enfermeiro esclarece empaticamente que a dose diagnóstica de tecnécio é semelhante a exames de raio-X comuns, não tem cheiro nem cor e desaparece do corpo em poucas horas sem efeitos visíveis. O domínio destas grandezas capacita o enfermeiro para a prestação de cuidados seguros e esclarecimento de dúvidas.",
    "distractorAnalysis": [
      "Está incorreta: as doses diagnósticas acarretam um risco estocástico muito baixo e bem caracterizado, imensamente inferior ao benefício clínico diagnóstico do exame realizado.",
      "Está incorreta: as doses de medicina nuclear diagnóstica são perfeitamente mensuráveis através de ativímetros e câmaras de ionização calibradas, não sendo comparáveis a valores nulos.",
      "Está incorreta: a semivida do 99mTc é de apenas 6 horas; após 24 a 48 horas a radioatividade residual no organismo do doente reduz-se praticamente aos níveis basais naturais."
    ],
    "nursingApplication": "Esta relação de ajuda reduz a ansiedade pré-exame e promove a adesão e confiança na equipa de saúde."
  },
  {
    "id": 8189,
    "topicId": 8,
    "question": "Na física nuclear e farmacocinética dos radioisótopos na terapêutica médica, em relação a 'apoio psicológico ao doente em isolamento radioativo estrito', qual é a fundamentação científica exata?",
    "options": [
      "O confinamento prolongado num quarto com paredes de chumbo tem como intuito deliberado induzir apatia severa no doente para que a bradicardia resultante trave o fluxo sanguíneo do iodo radioativo na glândula tiroideia.",
      "O confinamento em quarto blindado de iodoterapia sem acompanhantes pode gerar sentimentos de solidão, estresse e claustrofobia; o enfermeiro fornece suporte emocional via interfone e telefone e encoraja atividades cognitivas e contactos digitais regulares com a família.",
      "Os doentes em isolamento hospitalar devem ser privados de aparelhos telefónicos e computadores pessoais porque os circuitos eletrónicos desviam a trajetória das partículas beta emitidas em direção ao exterior do quarto.",
      "O apoio psicológico é dispensável durante o internamento radioativo porque a radiação gama libertada atua no córtex cerebral como um modulador químico que elimina espontaneamente a angústia e a ansiedade do utente."
    ],
    "correctIndex": 1,
    "explanation": "Em biofísica e medicina nuclear, apoio psicológico ao doente em isolamento radioativo estrito explica-se pelo facto de que o confinamento obrigatório de vários dias num quarto fechado sem acompanhantes ou visitas diretas pode desencadear sentimentos de solidão, abandono e claustrofobia no doente com cancro. O enfermeiro estabelece comunicação frequente por telefone e intercomunicador, explica o motivo da proteção e incentiva distrações (leitura, televisão, contacto digital com a família).",
    "distractorAnalysis": [
      "Está incorreta: o isolamento tem propósitos estritos de radioproteção pública e de terceiros; a equipa deve minimizar ativamente o sofrimento psicológico e o isolamento emocional do doente.",
      "Está incorreta: dispositivos eletrónicos não interagem magneticamente com partículas beta emitidas pelo doente e representam instrumentos valiosos para manter o contacto social e o equilíbrio psíquico.",
      "Está incorreta: as radiações ionizantes não possuem propriedades ansiolíticas neurológicas; a solidão do quarto blindado requer suporte humanizado contínuo por parte da enfermagem."
    ],
    "nursingApplication": "A empatia e a presença atenta do enfermeiro mantêm o suporte emocional e minimizam o impacto psicológico do isolamento terapêutico."
  },
  {
    "id": 8190,
    "topicId": 8,
    "question": "Na administração de radiofármacos e cuidados clínicos de enfermagem em medicina nuclear e oncologia, como se concretiza na prática o conceito de 'apoio psicológico ao doente em isolamento radioativo estrito'?",
    "options": [
      "O enfermeiro tranca o doente no quarto no início da terapêutica e desliga o intercomunicador durante três dias consecutivos para não violar o isolamento acústico e radiológico preconizado pelas diretrizes clínicas.",
      "O profissional passa a totalidade do seu turno de trabalho sentado na cama do doente sem recorrer a qualquer tipo de blindagem ou dosímetro pessoal, sustentando que a proximidade física afasta o risco radiológico.",
      "O enfermeiro planeia visitas breves e focadas cumprindo o princípio ALARA com proteção de biombo móvel de chumbo, mantém diálogo empático através do intercomunicador e monitoriza ativamente as necessidades de conforto físico e equilíbrio emocional do utente.",
      "O enfermeiro exige que o doente permaneça vendado e em silêncio absoluto durante toda a sua estadia no quarto de isolamento para evitar que as expressões fisionómicas potenciem a dispersão de fotões gama no quarto."
    ],
    "correctIndex": 2,
    "explanation": "A aplicação de enfermagem para apoio psicológico ao doente em isolamento radioativo estrito baseia-se no princípio: A empatia e a presença atenta do enfermeiro mantêm o suporte emocional e minimizam o impacto psicológico do isolamento terapêutico. Esta prática concilia a segurança radiológica com os cuidados de excelência ao utente.",
    "distractorAnalysis": [
      "Está incorreta: desligar o intercomunicador constituiria negligência assistencial grave com risco para a segurança do doente perante complicações clínicas agudas.",
      "Está incorreta: o profissional deve otimizar o tempo e a distância mantendo as doses ocupacionais o mais baixas razoavelmente exequíveis (ALARA), usando dosimetria e blindagens adequadas.",
      "Está incorreta: manter o utente vendado ou em silêncio forçado carece de qualquer fundamento fisiológico ou biofísico e agravaria drasticamente o sofrimento psicológico."
    ],
    "nursingApplication": "A empatia e a presença atenta do enfermeiro mantêm o suporte emocional e minimizam o impacto psicológico do isolamento terapêutico."
  },
  {
    "id": 8191,
    "topicId": 8,
    "question": "Um enfermeiro analisa as grandezas físicas, semividas e vias de depuração em 'apoio psicológico ao doente em isolamento radioativo estrito'. Qual das seguintes afirmações expressa com rigor a relação científica entre as variáveis?",
    "options": [
      "A radioproteção hospitalar determina a substituição total de enfermeiros por autómatos mecânicos desprovidos de capacidade de diálogo afetivo com o paciente no quarto de terapia metabólica do serviço de oncologia.",
      "O isolamento deve ser mantido de forma ininterrupta até que os aparelhos de contagem exterior registem exatamente zero contagens no doente, mesmo que isso implique vários meses de internamento fechado.",
      "A taxa de ansiedade vivenciada pelo doente internado é puramente funcional e não guarda qualquer relação com a restrição espacial ou a ausência de visitas presenciais dos seus entes queridos no quarto.",
      "A otimização dos cuidados exige conciliar a prestação célere e estruturada de cuidados diretos para minimizar o tempo de exposição profissional com uma atitude empática, serena e atenta às necessidades psicossociais e ao bem-estar do doente."
    ],
    "correctIndex": 3,
    "explanation": "A relação biofísica e farmacocinética rigorosa demonstra que O enfermeiro estabelece comunicação frequente por telefone e intercomunicador, explica o motivo da proteção e incentiva distrações (leitura, televisão, contacto digital com a família). O domínio destas grandezas capacita o enfermeiro para a prestação de cuidados seguros e esclarecimento de dúvidas.",
    "distractorAnalysis": [
      "Está incorreta: os cuidados de enfermagem continuam a ser prestados por profissionais qualificados que aplicam os princípios de tempo, distância e blindagem para protegerem a sua saúde sem desumanizar o cuidado.",
      "Está incorreta: a alta é concedida assim que a taxa de dose residual desce abaixo dos limites regulamentares legalmente definidos (ex: $< 20-30\\ \\mu$Sv/h a 1 metro), não requerendo dose zero absoluta.",
      "Está incorreta: o isolamento físico estrito é uma fonte primária bem documentada de ansiedade, estresse e sentimentos de abandono, justificando intervenções de suporte relacional."
    ],
    "nursingApplication": "A empatia e a presença atenta do enfermeiro mantêm o suporte emocional e minimizam o impacto psicológico do isolamento terapêutico."
  },
  {
    "id": 8192,
    "topicId": 8,
    "question": "Na física nuclear e farmacocinética dos radioisótopos na terapêutica médica, em relação a 'educação para a alta do doente tratado com iodo radioativo no domicílio', qual é a fundamentação científica exata?",
    "options": [
      "As instruções de alta baseiam-se na taxa de dose residual ($< 20-30\\ \\mu$Sv/h a 1 metro) e na semivida do iodo-131 (8 dias), preconizando dormir em camas separadas, micção sentada com dupla descarga e lavagem separada de roupas para proteger os conviventes domiciliares.",
      "As recomendações de alta prescrevem que o utente passe a viver permanentemente numa cabana isolada na montanha durante cinco anos consecutivos para impedir que os átomos de iodo-131 contaminem os materiais da habitação.",
      "O doente recebe alta médica sem qualquer recomendação ou restrição de contacto físico, sendo encorajado a segurar lactentes ao colo durante várias horas consecutivas no próprio dia do tratamento ablativo.",
      "O utente é instruído a queimar todas as roupas que utilizou durante o internamento antes de sair do hospital e a caminhar descalço até casa para descarregar a radioatividade residual nas pedras da calçada."
    ],
    "correctIndex": 0,
    "explanation": "Em biofísica e medicina nuclear, educação para a alta do doente tratado com iodo radioativo no domicílio explica-se pelo facto de que o enfermeiro fornece um plano de cuidados escrito detalhado com regras claras: dormir em cama individual nas primeiras 7 noites, sentar-se na sanita para urinar e puxar o autoclismo duas vezes, lavar a roupa pessoal em ciclo separado e evitar transportar crianças ao colo. Após o decurso dos dias estipulados no relatório de alta, a vida social e familiar regressa à normalidade sem qualquer risco residual para os entes queridos.",
    "distractorAnalysis": [
      "Está incorreta: o isolamento prolongado por anos é desprovido de fundamento; após algumas semanas o iodo-131 remanescente decaiu quase na totalidade para níveis clinicamente irrelevantes.",
      "Está incorreta: o doente tratado com doses terapêuticas de 131I emite radiação gama penetrante e elimina resíduos pelo suor e urina, exigindo restrições de proximidade com crianças e grávidas.",
      "Está incorreta: queimar roupas e caminhar descalço são atitudes absurdas que violam as normas básicas de higiene e radioproteção; a roupa comum deve ser simplesmente lavada na máquina."
    ],
    "nursingApplication": "A clareza pedagógica do enfermeiro capacita o doente para o autocuidado seguro e previne situações de pânico familiar injustificado."
  },
  {
    "id": 8193,
    "topicId": 8,
    "question": "Na administração de radiofármacos e cuidados clínicos de enfermagem em medicina nuclear e oncologia, como se concretiza na prática o conceito de 'educação para a alta do doente tratado com iodo radioativo no domicílio'?",
    "options": [
      "O enfermeiro limita-se a comunicar verbalmente ao doente que este já não tem radioatividade no corpo e que pode partilhar a mesma cama com a sua esposa grávida logo na primeira noite após a saída do hospital.",
      "O enfermeiro fornece e explica um documento escrito individualizado com o período de distanciamento necessário relativamente a crianças e grávidas, regras de higiene sanitária e uma declaração médica de radiofármaco para controlo de segurança em viagens.",
      "O profissional orienta o doente a abster-se de tomar banho ou de lavar as mãos com água e sabão durante três semanas após a alta para não remover a película protetora cutânea que retém as partículas ionizantes.",
      "O enfermeiro retém permanentemente os documentos de identificação pessoal do doente e proíbe o seu regresso ao domicílio até que este concorde em mudar de residência para outra localidade geográfica distante."
    ],
    "correctIndex": 1,
    "explanation": "A aplicação de enfermagem para educação para a alta do doente tratado com iodo radioativo no domicílio baseia-se no princípio: A clareza pedagógica do enfermeiro capacita o doente para o autocuidado seguro e previne situações de pânico familiar injustificado. Esta prática concilia a segurança radiológica com os cuidados de excelência ao utente.",
    "distractorAnalysis": [
      "Está incorreta: instruir o doente a dormir com grávidas logo após alta de iodoterapia exporia o feto em desenvolvimento a doses inaceitáveis de radiação gama externa penetrante.",
      "Está incorreta: a higiene corporal regular com água e sabão remove a contaminação radioativa expelida pelo suor na pele, sendo essencial para reduzir a dose e o risco de transferência para terceiros.",
      "Está incorreta: reter documentos ou impor alterações de residência é ilegal e eticamente inaceitável; as orientações de radioproteção domiciliar integram-se no ambiente de vida habitual do doente."
    ],
    "nursingApplication": "A clareza pedagógica do enfermeiro capacita o doente para o autocuidado seguro e previne situações de pânico familiar injustificado."
  },
  {
    "id": 8194,
    "topicId": 8,
    "question": "Um enfermeiro analisa as grandezas físicas, semividas e vias de depuração em 'educação para a alta do doente tratado com iodo radioativo no domicílio'. Qual das seguintes afirmações expressa com rigor a relação científica entre as variáveis?",
    "options": [
      "O período de restrição domiciliar tem de ser rigorosamente o mesmo para todos os doentes (noventa dias corridos), independentemente da atividade administrada, da função renal ou da taxa de dose medida no momento da alta.",
      "A radioatividade presente no organismo do doente multiplica-se espontaneamente a cada semana decorrida no domicílio, exigindo o seu internamento de emergência decorrido um mês após o tratamento inicial.",
      "Decorrido o período estipulado no relatório de alta (habitualmente entre 7 a 14 dias), a conjugação do decaimento físico ($T_{1/2} = 8$ dias) com a excreção biológica urinária reduz a atividade residual a valores seguros, normalizando a convivência social.",
      "A taxa de emissão de radiação pelo doente cessa instantaneamente no segundo exato em que este atravessa a porta principal da sua habitação, sendo a radiação neutralizada pela atmosfera do lar familiar."
    ],
    "correctIndex": 2,
    "explanation": "A relação biofísica e farmacocinética rigorosa demonstra que Após o decurso dos dias estipulados no relatório de alta, a vida social e familiar regressa à normalidade sem qualquer risco residual para os entes queridos. O domínio destas grandezas capacita o enfermeiro para a prestação de cuidados seguros e esclarecimento de dúvidas.",
    "distractorAnalysis": [
      "Está incorreta: os períodos de restrição são individualizados em função da atividade administrada, da dosimetria de saída e do contexto familiar específico (presença de crianças ou grávidas no domicílio).",
      "Está incorreta: a atividade radioativa diminui de forma exponencial contínua no tempo segundo a lei do decaimento radioativo, nunca sofrendo multiplicação espontânea.",
      "Está incorreta: a emissão física de radiação é contínua e independente de fronteiras físicas residenciais, decaindo no tempo de forma progressiva pela eliminação biológica e pelo decaimento nuclear."
    ],
    "nursingApplication": "A clareza pedagógica do enfermeiro capacita o doente para o autocuidado seguro e previne situações de pânico familiar injustificado."
  },
  {
    "id": 8195,
    "topicId": 8,
    "question": "Na física nuclear e farmacocinética dos radioisótopos na terapêutica médica, em relação a 'cuidados especiais com a amamentação materna em medicina nuclear', qual é a fundamentação científica exata?",
    "options": [
      "Os radioisótopos são biologicamente incapazes de transitar para o leite materno devido à barreira hemato-mamária que impede a passagem de substâncias com massa atómica superior ao hidrogénio estável da água.",
      "O iodo-131 administrado à mãe converte as proteínas do leite em compostos ácidos cáusticos que perfuram o esófago e o estômago da criança de imediato no decurso da primeira amamentação pós-tratamento.",
      "A amamentação materna deve ser suspensa de forma definitiva durante vinte anos em qualquer puérpera que realize uma simples radiografia dentária ou ecografia pélvica de diagnóstico em ambulatório.",
      "Muitos radiofármacos passam ativamente para o leite materno através do tecido glandular mamário; o 131I impõe a cessação definitiva da amamentação para essa gravidez pelo risco de ablação tiroideia no lactente, enquanto o 99mTc requer suspensão de 24 horas."
    ],
    "correctIndex": 3,
    "explanation": "Em biofísica e medicina nuclear, cuidados especiais com a amamentação materna em medicina nuclear explica-se pelo facto de que muitos radiofármacos passam ativamente para o leite materno através das glândulas mamárias lactantes, podendo irradiar a tiroide e tecidos do lactente. Dependendo do isótopo, a amamentação tem de ser interrompida temporariamente (por exemplo, 24 a 48 horas para o ⁹⁹ᵐTc com descarte do leite extraído por bomba) ou permanentemente para aquela gravidez (no caso do Iodo-131).",
    "distractorAnalysis": [
      "Está incorreta: numerosos radionuclídeos passam livremente para o leite materno, podendo atingir concentrações que acarretam riscos sérios de irradiação interna para a criança se for amamentada.",
      "Está incorreta: o perigo do iodo-131 no lactente é a irradiação interna da tiroide pelas partículas beta e gama ionizantes com risco de hipotireoidismo severo ou neoplasia, não a causticidade química ácida do leite.",
      "Está incorreta: exames radiológicos convencionais externos (como raios X de tórax ou dentes) não depositam radioatividade no organismo nem no leite; a suspensão só se aplica a radiofármacos administrados."
    ],
    "nursingApplication": "O enfermeiro questiona obrigatoriamente todas as mulheres jovens sobre aleitamento materno e articula o suporte nutricional de fórmula artificial para o bebé durante o período de interrupção."
  },
  {
    "id": 8196,
    "topicId": 8,
    "question": "Na administração de radiofármacos e cuidados clínicos de enfermagem em medicina nuclear e oncologia, como se concretiza na prática o conceito de 'cuidados especiais com a amamentação materna em medicina nuclear'?",
    "options": [
      "O enfermeiro questiona sistematicamente todas as utentes em idade fértil sobre aleitamento materno antes da injeção, coordena o suporte alimentar alternativo com leite adaptado e ensina o descarte seguro do leite extraído mecanicamente durante a interrupção.",
      "O enfermeiro encoraja a mãe lactante a amamentar a criança logo após a injeção de radiofármaco, afirmando que os anticorpos maternos contidos no colostro neutralizam as partículas subatómicas na boca do lactente.",
      "O profissional orienta a mãe a armazenar o leite radioativo extraído na arca frigorífica de alimentos da família para o fornecer à criança quando esta atingir os cinco anos de idade.",
      "O enfermeiro omite qualquer questão sobre aleitamento materno na admissão clínica por entender que os padrões de alimentação infantil pertencem à esfera privada sem relevância na proteção radiológica."
    ],
    "correctIndex": 0,
    "explanation": "A aplicação de enfermagem para cuidados especiais com a amamentação materna em medicina nuclear baseia-se no princípio: O enfermeiro questiona obrigatoriamente todas as mulheres jovens sobre aleitamento materno e articula o suporte nutricional de fórmula artificial para o bebé durante o período de interrupção. Esta prática concilia a segurança radiológica com os cuidados de excelência ao utente.",
    "distractorAnalysis": [
      "Está incorreta: os anticorpos não protegem contra radiações ionizantes e o leite contaminado irradiaria intensamente os tecidos em rápido desenvolvimento da criança.",
      "Está incorreta: o leite extraído durante a fase de contaminação deve ser descartado no esgoto sanitário com água abundante ou armazenado em local próprio até decaimento, nunca congelado para consumo infantil.",
      "Está incorreta: o rastreio da gravidez e da lactação é uma etapa obrigatória de segurança em qualquer procedimento com fontes abertas para prevenir doses inadvertidas no feto ou bebé."
    ],
    "nursingApplication": "O enfermeiro questiona obrigatoriamente todas as mulheres jovens sobre aleitamento materno e articula o suporte nutricional de fórmula artificial para o bebé durante o período de interrupção."
  },
  {
    "id": 8197,
    "topicId": 8,
    "question": "Um enfermeiro analisa as grandezas físicas, semividas e vias de depuração em 'cuidados especiais com a amamentação materna em medicina nuclear'. Qual das seguintes afirmações expressa com rigor a relação científica entre as variáveis?",
    "options": [
      "Todos os radioisótopos exigem o mesmo intervalo temporal uniforme de suspensão da amamentação (rigorosamente sessenta dias), independentemente da atividade administrada ou da semivida física do elemento prescrito.",
      "O intervalo de interrupção da amamentação depende da semivida física do radioisótopo, da sua taxa de transferência biológica para o leite e da radiossensibilidade dos órgãos infantis, variando entre 12 a 24 horas para o 18F-FDG e definitiva para o 131I.",
      "A curta semivida física do flúor-18 (110 minutos) obriga a mãe a suspender a amamentação durante dois anos, enquanto a semivida longa do iodo-131 (8 dias) permite retomar a sucção do peito ao fim de quinze minutos.",
      "A concentração de substâncias atómicas no leite materno é controlada exclusivamente pelas condições meteorológicas exteriores, não guardando relação com a dose administrada ou com a farmacocinética da mãe."
    ],
    "correctIndex": 1,
    "explanation": "A relação biofísica e farmacocinética rigorosa demonstra que Dependendo do isótopo, a amamentação tem de ser interrompida temporariamente (por exemplo, 24 a 48 horas para o ⁹⁹ᵐTc com descarte do leite extraído por bomba) ou permanentemente para aquela gravidez (no caso do Iodo-131). O domínio destas grandezas capacita o enfermeiro para a prestação de cuidados seguros e esclarecimento de dúvidas.",
    "distractorAnalysis": [
      "Está incorreta: os tempos de interrupção são variáveis e específicos para cada radiofármaco (desde algumas horas a suspensão definitiva), em consonância com as recomendações da ICRP.",
      "Está incorreta: o raciocínio está invertido: o flúor-18 requer suspensão curta (cerca de 12-24 horas) devido à sua rápida semivida, ao passo que o iodo-131 terapêutico exige a paragem definitiva da amamentação.",
      "Está incorreta: a excreção mamária obedece a leis de transporte membranar e difusão biológica tecidual combinadas com a semivida física nuclear, não tendo relação com a meteorologia."
    ],
    "nursingApplication": "O enfermeiro questiona obrigatoriamente todas as mulheres jovens sobre aleitamento materno e articula o suporte nutricional de fórmula artificial para o bebé durante o período de interrupção."
  },
  {
    "id": 8198,
    "topicId": 8,
    "question": "Na física nuclear e farmacocinética dos radioisótopos na terapêutica médica, em relação a 'proteção do feto em trabalhadoras e enfermeiras grávidas', qual é a fundamentação científica exata?",
    "options": [
      "A legislação laboral determina que qualquer profissional de saúde que engravide seja compulsoriamente demitida do hospital sem remuneração, por ser proibida a presença de gestantes em ambientes hospitalares.",
      "O feto no interior do útero materno é impermeável à radiação ionizante externa por causa da proteção mecânica conferida pelo líquido amniótico, sendo desnecessário estabelecer limites de dose gestacionais.",
      "Uma vez comunicada a gravidez pela trabalhadora à medicina do trabalho, as suas funções são readaptadas de modo a que a dose equivalente ao feto não ultrapasse 1 mSv durante o resto da gestação, minimizando o risco de teratogénese e carcinogenicidade.",
      "O limite de dose fetal recomendado internacionalmente pela ICRP para a gravidez é de 500 mSv por mês, permitindo que a enfermeira grávida manipule livremente fontes abertas de alta atividade no serviço."
    ],
    "correctIndex": 2,
    "explanation": "Em biofísica e medicina nuclear, proteção do feto em trabalhadoras e enfermeiras grávidas explica-se pelo facto de que logo que a profissional de saúde ou enfermeira declare o estado de gravidez à medicina do trabalho, as suas condições de trabalho são readaptadas de modo a que a dose equivalente ao feto não exceda 1 mSv durante todo o resto da gestação. A enfermeira grávida é temporariamente transferida de tarefas que envolvam preparação de radiofármacos ou contacto direto com doentes em quartos de terapia metabólica.",
    "distractorAnalysis": [
      "Está incorreta: a trabalhadora tem direito à proteção da maternidade e à manutenção integral do seu emprego e remuneração, adaptando-se as tarefas para garantir a sua segurança dosimétrica.",
      "Está incorreta: as radiações penetrantes (raios X e fotões gama) atravessam facilmente os tecidos biológicos e o líquido amniótico; o embrião e feto são altamente radiossensíveis.",
      "Está incorreta: o limite regulamentar estipulado pela ICRP para o feto durante todo o período gestacional restante é de 1 mSv (e não quinhentos miliSieverts por mês, o que constituiria dose letal)."
    ],
    "nursingApplication": "Esta política institucional protege a gravidez com total dignidade profissional e conformidade com as diretrizes internacionais de radioproteção da ICRP."
  },
  {
    "id": 8199,
    "topicId": 8,
    "question": "Na administração de radiofármacos e cuidados clínicos de enfermagem em medicina nuclear e oncologia, como se concretiza na prática o conceito de 'proteção do feto em trabalhadoras e enfermeiras grávidas'?",
    "options": [
      "A administração hospitalar impõe uma redução de cinquenta por cento no salário base da profissional grávida durante o período em que esta se encontrar afastada da manipulação de radiofármacos no serviço.",
      "A instituição obriga a enfermeira grávida a trabalhar vestindo três aventais de chumbo sobrepostos de trinta quilos cada durante o turno inteiro para que continue a transportar seringas radioativas na câmara quente.",
      "O regulamento interno hospitalar proíbe a enfermeira de declarar a gravidez sob pena de sanções disciplinares, forçando-a a ocultar o seu estado clínico até ao momento do internamento para o parto.",
      "A instituição adapta temporariamente o posto de trabalho da enfermeira grávida para tarefas sem risco de exposição radiológica significativa ou contaminação interna, assegurando a progressão na carreira sem perda de remuneração nem qualquer discriminação."
    ],
    "correctIndex": 3,
    "explanation": "A aplicação de enfermagem para proteção do feto em trabalhadoras e enfermeiras grávidas baseia-se no princípio: Esta política institucional protege a gravidez com total dignidade profissional e conformidade com as diretrizes internacionais de radioproteção da ICRP. Esta prática concilia a segurança radiológica com os cuidados de excelência ao utente.",
    "distractorAnalysis": [
      "Está incorreta: a legislação de proteção à maternidade protege a trabalhadora contra qualquer penalização remuneratória decorrente da adaptação justificada de tarefas por razões de saúde e segurança.",
      "Está incorreta: impor cargas físicas excessivas de blindagens pesadas sobrecarregaria perigosamente o sistema musculoesquelético da grávida; a solução ética e técnica é a reatribuição para postos sem radiação.",
      "Está incorreta: a notificação voluntária precoce da gravidez deve ser incentivada ativamente pelas instituições para permitir a aplicação tempestiva das medidas preventivas de radioproteção fetal."
    ],
    "nursingApplication": "Esta política institucional protege a gravidez com total dignidade profissional e conformidade com as diretrizes internacionais de radioproteção da ICRP."
  },
  {
    "id": 8200,
    "topicId": 8,
    "question": "Um enfermeiro analisa as grandezas físicas, semividas e vias de depuração em 'proteção do feto em trabalhadoras e enfermeiras grávidas'. Qual das seguintes afirmações expressa com rigor a relação científica entre as variáveis?",
    "options": [
      "A readaptação afasta a enfermeira grávida do internamento de terapia metabólica com iodo-131 e da preparação de fontes abertas na câmara quente, onde o risco de contaminação e as taxas de dose são elevadas, reafetando-a a consultas externas ou triagem.",
      "A profissional grávida deve ser destacada preferencialmente para a eluição manual diária dos geradores de tecnécio e marcação de kits sem recurso a blindagens, argumentando-se que o contacto precoce estimula o embrião.",
      "As tarefas que acarretam o maior perigo para o feto são a realização de contactos telefónicos e o registo de dados informáticos no computador, devendo a grávida ser excluída prioritariamente do trabalho de secretária.",
      "O risco biológico para o conceito é uniforme em todos os postos de saúde, não existindo qualquer diferença nosimétrica entre trabalhar no interior da câmara quente ou prestar apoio na sala de reuniões gerais."
    ],
    "correctIndex": 0,
    "explanation": "A relação biofísica e farmacocinética rigorosa demonstra que A enfermeira grávida é temporariamente transferida de tarefas que envolvam preparação de radiofármacos ou contacto direto com doentes em quartos de terapia metabólica. O domínio destas grandezas capacita o enfermeiro para a prestação de cuidados seguros e esclarecimento de dúvidas.",
    "distractorAnalysis": [
      "Está incorreta: a eluição de geradores e a marcação de fontes abertas envolvem atividades elevadas e risco de contaminação interna, tarefas estritamente desaconselhadas durante a gravidez.",
      "Está incorreta: o trabalho de secretária ou atendimento telefónico não envolve qualquer fonte de radiação ionizante, constituindo precisamente as funções de menor risco para reatribuição temporária.",
      "Está incorreta: os níveis de exposição variam enormemente entre áreas controladas (câmara quente, quartos de iodoterapia) e áreas livres/administrativas, justificando a reafetação funcional seletiva."
    ],
    "nursingApplication": "Esta política institucional protege a gravidez com total dignidade profissional e conformidade com as diretrizes internacionais de radioproteção da ICRP."
  }
];
