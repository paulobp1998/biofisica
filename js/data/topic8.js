/**
 * Tópico 8: Isótopos, Isóbaros, Isótonos e Respetivas Aplicações Terapêuticas
 * 50 Questões Científicas Rigorosas para o 1.º Ano de Enfermagem
 */

const TOPIC_8_QUESTIONS = [
  {
    id: 801,
    topicId: 8,
    question: "Dois nuclídeos são classificados como 'Isótopos' quando possuem:",
    options: [
      "O mesmo Número Atómico Z (mesmo número de protões, pertencendo rigorosamente ao mesmo elemento químico), mas diferentes Números de Massa A (diferente número de neutrões N).",
      "O mesmo número de massa A, mas diferentes números atómicos Z.",
      "O mesmo número de neutrões N, mas diferentes números de protões Z.",
      "A mesma temperatura de ebulição e a mesma densidade mecânica."
    ],
    correctIndex: 0,
    explanation: "Isótopos (do grego isos = igual, topos = lugar na tabela periódica) são átomos que possuem o mesmo número atómico Z (mesmo número de protões e mesma configuração eletrónica externa), mas diferem no número de neutrões N (logo, têm massas atómicas A diferentes). Como a reatividade química depende exclusivamente da eletrosfera eletrónica governada por Z, todos os isótopos do mesmo elemento exibem propriedades bioquímicas e metabólicas rigorosamente IDÊNTICAS no organismo humano. Exemplos: ¹²⁷₅₃I (iodo estável) e ¹³¹₅₃I (iodo radioativo); ¹²₆C e ¹⁴₆C.",
    distractorAnalysis: [
      "Opção B é a definição estrita de Isóbaros.",
      "Opção C é a definição estrita de Isótonos.",
      "Opção D descreve propriedades macroscópicas termodinâmicas sem relação com a definição nuclear."
    ],
    nursingApplication: "A identidade bioquímica perfeita dos isótopos é a pedra filosofal da medicina nuclear: as células foliculares da glândula tiroide do doente não conseguem distinguir o iodo radioativo (¹³¹I) do iodo estável da alimentação (¹²⁷I), absorvendo e concentrando avidamente o radioisótopo através do simporte de sódio-iodeto (NIS), permitindo a destruição seletiva do tumor."
  },
  {
    id: 802,
    topicId: 8,
    question: "Dois átomos são denominados 'Isóbaros' quando partilham qual característica em comum?",
    options: [
      "O mesmo Número de Massa A (mesma soma total de protões e neutrões, A = Z + N), mas diferentes Números Atómicos Z (sendo elementos químicos completamente distintos com propriedades químicas e biológicas diferentes).",
      "O mesmo número atómico Z e o mesmo número de neutrões N.",
      "Apenas o mesmo número de eletrões de valência na camada externa.",
      "A mesma velocidade de propagação do som no seu interior."
    ],
    correctIndex: 0,
    explanation: "Isóbaros (do grego barys = pesado) são nuclídeos que partilham a mesma massa atómica A, mas têm números atómicos Z diferentes e números de neutrões N diferentes. Por possuírem Z diferente, são elementos químicos totalmente distintos na Tabela Periódica, com propriedades químicas, afinidades farmacológicas e destinos biológicos no corpo humano completamente diferentes. Exemplo: Potássio-40 (⁴⁰₁₉K, metal alcalino) e Cálcio-40 (⁴⁰₂₀Ca, metal alcalino-terroso); Iodo-131 (¹³¹₅₃I, halogéneo) e Xénon-131 (¹³¹₅₄Xe, gás nobre).",
    distractorAnalysis: [
      "Opção B descreveria núcleos estritamente idênticos do mesmo nuclídeo.",
      "Opção C descreve elementos da mesma família/grupo da Tabela Periódica, não isóbaros.",
      "Opção D é uma propriedade acústica sem fundamento nuclear."
    ],
    nursingApplication: "No decaimento beta do Iodo-131 (¹³¹₅₃I -> ¹³¹₅₄Xe + β⁻ + ν̄), o elemento radioativo ligado aos tecidos corporais transforma-se no seu isóbaro Xénon-131: sendo o xénon um gás nobre quimicamente inerte, desliga-se de imediato da tiroide e difunde-se pela corrente sanguínea, sendo eliminado de forma inócua pela expiração pulmonar do doente."
  },
  {
    id: 803,
    topicId: 8,
    question: "Dois nuclídeos são classificados como 'Isótonos' quando apresentam:",
    options: [
      "O mesmo Número de Neutrões N (N = A - Z), mas diferentes Números Atómicos Z e diferentes Números de Massa A.",
      "O mesmo número de protões e o mesmo estado de energia metaestável.",
      "A mesma cor quando iluminados por luz ultravioleta.",
      "O mesmo número de eletrões em todas as camadas orbitais."
    ],
    correctIndex: 0,
    explanation: "Isótonos (o 'n' na palavra mnemónica lembra Neutrões) são nuclídeos que contêm exatamente o mesmo número de neutrões N no seu núcleo (N = A - Z), mas diferem no número de protões Z e no número de massa A. Por terem Z diferente, são elementos químicos distintos. Exemplos: Silício-30 (³⁰₁₄Si, onde N = 30 - 14 = 16) e Fósforo-31 (³¹₁₅P, onde N = 31 - 15 = 16); Carbono-13 (¹³₆C, N = 7) e Azoto-14 (¹⁴₇N, N = 7).",
    distractorAnalysis: [
      "Opção B refere-se a isótopos ou isómeros nucleares idênticos.",
      "Opção C confunde propriedades nucleares com espectroscopia de fluorescência química.",
      "Opção D descreve espécies isoeletrónicas, não isótonos nucleares."
    ],
    nursingApplication: "O estudo das séries de isótonos e isóbaros é utilizado pela física médica e radioquímica na síntese de novos radioisótopos em reatores e cíclotrons, permitindo prever a estabilidade nuclear e os canais de desintegração de fármacos experimentais."
  },
  {
    id: 804,
    topicId: 8,
    question: "Na farmacocinética e radioproteção de radiofármacos hospitalares, qual é a definição e relação matemática exata entre a Meia-Vida Física (T_p), a Meia-Vida Biológica (T_b) e a 'Meia-Vida Efetiva' (T_e)?",
    options: [
      "1/T_e = 1/T_p + 1/T_b  =>  T_e = (T_p · T_b) / (T_p + T_b), sendo a Meia-Vida Efetiva a taxa real com que a radioatividade diminui dentro do corpo do doente devido à ação simultânea do decaimento físico nuclear e da depuração biológica (excreção renal/fecal).",
      "T_e = T_p + T_b, sendo a soma aritmética simples das duas meias-vidas.",
      "T_e = T_p · T_b · 100.",
      "T_e = T_p / T_b², não tendo dependência com a excreção urinária."
    ],
    correctIndex: 0,
    explanation: "A eliminação da radiação do corpo de um doente decorre de dois processos independentes que ocorrem em paralelo: 1) O decaimento radioativo físico espontâneo dos núcleos (constante λ_p = ln(2)/T_p); 2) A depuração metabólica fisiológica do fármaco pelo fígado e rins (constante λ_b = ln(2)/T_b). A taxa de desaparecimento efetiva total é a soma das constantes: λ_e = λ_p + λ_b. Como λ = ln(2)/T, tem-se 1/T_e = 1/T_p + 1/T_b, o que resulta em T_e = (T_p · T_b) / (T_p + T_b). Consequentemente, T_e é SEMPRE menor do que o menor dos valores de T_p ou T_b.",
    distractorAnalysis: [
      "Opção B somaria os tempos, prevendo absurdamente que o radiofármaco demoraria MAIS tempo a sair do corpo quando excretado pelos rins do que se ficasse retido.",
      "Opção C propõe uma multiplicação dimensional errónea (horas ao quadrado).",
      "Opção D inventa uma relação sem correspondência com a cinética farmacológica compartimental."
    ],
    nursingApplication: "A meia-vida efetiva governa a segurança clínica: se um radiofármaco tem T_p de 6 horas (⁹⁹ᵐTc) e o doente o excreta na urina com T_b de 3 horas, a meia-vida efetiva no corpo é T_e = (6 × 3) / (6 + 3) = 18 / 9 = 2 horas! O enfermeiro incentiva a hidratação abundante porque quanto mais rápido o doente urinar (menor T_b), menor será a meia-vida efetiva T_e e menor a dose de radiação absorvida pelo organismo."
  },
  {
    id: 805,
    topicId: 8,
    question: "Um doente recebe um radiofármaco que possui uma Meia-Vida Física T_p = 8 dias e uma Meia-Vida Biológica de eliminação corporal T_b = 8 dias. Qual é a Meia-Vida Efetiva (T_e) desse radiofármaco no organismo do doente?",
    options: [
      "4 dias (T_e = (8 · 8) / (8 + 8) = 64 / 16 = 4 dias).",
      "16 dias.",
      "8 dias.",
      "64 dias."
    ],
    correctIndex: 0,
    explanation: "Aplicando a equação biofísica da meia-vida efetiva: T_e = (T_p · T_b) / (T_p + T_b). Substituindo os valores dados: T_e = (8 × 8) / (8 + 8) = 64 / 16 = 4 dias. Quando a meia-vida física é rigorosamente igual à meia-vida biológica (T_p = T_b), a meia-vida efetiva total no corpo humano é exatamente igual a METADE desse valor (T_e = T / 2).",
    distractorAnalysis: [
      "Opção B (16 dias) somou erroneamente as meias-vidas (8 + 8 = 16), o que é um erro clássico.",
      "Opção C (8 dias) assumiu erroneamente que uma das vias anula a outra.",
      "Opção D (64 dias) multiplicou os valores sem dividir pela sua soma."
    ],
    nursingApplication: "Este cálculo simples permite ao enfermeiro estimar o tempo necessário para desclassificar o quarto de isolamento de radioiodoterapia: ao fim de 4 dias (1 meia-vida efetiva), a atividade de Iodo-131 no corpo do doente desceu para 50%; ao fim de 8 dias (2 meias-vidas efetivas), resta apenas 25% da dose originalmente administrada."
  },
  {
    id: 806,
    topicId: 8,
    question: "Antes da realização de um exame de Tomografia por Emissão de Positrões com ¹⁸F-FDG (Fluorodesoxiglicose), qual é a preparação clínica e verificação prioritária que o enfermeiro deve realizar junto do doente para evitar o insucesso diagnóstico do exame?",
    options: [
      "Garantir jejum calórico prévio de pelo menos 4 a 6 horas (permitida apenas água pura sem açúcar), confirmar repouso muscular físico absoluto (sem falar, mastigar pastilha ou caminhar) e verificar que a Glicemia capilar se encontra rigorosamente abaixo de 150 a 180 mg/dL.",
      "Administrar 500 mL de glicose hipertónica a 30% imediatamente antes da injeção para acordar as células.",
      "Incentivar o doente a fazer corrida e ginástica intensa antes de entrar no aparelho para ativar os músculos.",
      "Manter o doente em hipotermia gelada sem cobertores durante duas horas."
    ],
    correctIndex: 0,
    explanation: "A ¹⁸F-FDG é uma molécula de glicose marcada com Flúor-18 que entra nas células através dos transportadores GLUT e é fosforilada pela hexoquinase (ficando metabolicamente retida nas células com alto consumo glicídico). Se o doente estiver hiperglicémico (glicose > 180 mg/dL), a glicose endógena fria do sangue compete com a ¹⁸F-FDG e satura os transportadores GLUT, impedindo a captação do radiofármaco pelo tumor e gerando imagens falsamente negativas. Se o doente falar ou fizer exercício, a FDG é avidamente captada pelas cordas vocais e músculos esqueléticos ativos, gerando falsos positivos.",
    distractorAnalysis: [
      "Opção B arruinaria por completo o exame imagiológico e exporia o doente a hiperglicemia severa.",
      "Opção C desviaria toda a ¹⁸F-FDG para a massa muscular esquelética das pernas e braços em esforço.",
      "Opção D ativaria a gordura castanha hipermetabólica no pescoço e tórax, gerando focos artefactuais de captação maciça que obscurecem gânglios tumorais."
    ],
    nursingApplication: "O protocolo de acolhimento em enfermagem no PET é minuciosamente padronizado: medição da glicemia à chegada, canulação venosa atraumática, injeção da ¹⁸F-FDG e acomodação do doente num cadeirão confortável em sala individual aquecida e em penumbra durante 60 minutos de repouso absoluto em silêncio antes da aquisição de imagens."
  },
  {
    id: 807,
    topicId: 8,
    question: "Na profilaxia médica de populações civis perante o risco iminente de acidente em reator nuclear com libertação de plumas de fissão atmosféricas contendo Iodo-131 radioativo, qual é a intervenção de saúde pública administrada?",
    options: [
      "Distribuição e administração imediata de comprimidos de Iodeto de Potássio estável (KI, 'iodo frio'), que satura rapidamente a capacidade máxima dos transportadores NIS da glândula tiroide, impedindo a absorção e fixação posterior do Iodo-131 inalado ou ingerido.",
      "Administração de antibióticos de largo espetro como amoxicilina.",
      "Injeção intramuscular de heparina de baixo peso molecular a toda a população.",
      "Aplicação de pomadas de zinco nas narinas."
    ],
    correctIndex: 0,
    explanation: "A glândula tiroide humana tem uma capacidade limitada de captação e armazenamento de iodo (cerca de 10 a 15 mg no total). Perante a fuga nuclear de iodo radioativo volátil (¹³¹I e ¹³³I): a toma de uma dose elevada de Iodeto de Potássio estável (130 mg de KI para adultos) satura 100% dos simportadores de iodo (mecanismo de bloqueio de Wolff-Chaikoff). Quando a nuvem radioativa passa, o Iodo-131 inalado não encontra recetores livres na tiroide, sendo rapidamente excretado pelos rins na urina, reduzindo a dose tiroideia em mais de 95% e prevenindo o cancro da tiroide infantil.",
    distractorAnalysis: [
      "Opção B confunde contaminação radiológica física com infeções bacterianas biológicas.",
      "Opção C causaria risco hemorrágico sistémico sem qualquer efeito protetor sobre a tiroide.",
      "Opção D não oferece barreira contra a absorção alveolar de gases inalados."
    ],
    nursingApplication: "O enfermeiro em planos de catástrofe e saúde pública conhece a janela de ouro do Iodeto de Potássio: o KI deve ser tomado idealmente algumas horas antes ou até 2 a 4 horas após a exposição à nuvem radioativa. Administrar o KI mais de 24 horas depois da inalação é ineficaz e pode ser prejudicial, pois o iodo radioativo já se fixou no parênquima tiroideu."
  },
  {
    id: 808,
    topicId: 8,
    question: "O radioisótopo Tecnécio-99m (⁹⁹ᵐTc) é considerado mundialmente o radioisótopo de eleição (padrão de ouro) para diagnósticos de cintigrafia em Medicina Nuclear. Quais são as suas QUATRO propriedades biofísicas ideais que justificam essa hegemonia?",
    options: [
      "1) Emissão Gama quase pura sem partículas beta lesivas; 2) Energia fotónica ideal de 140 keV (excelente penetração nos tecidos com alta eficiência de deteção em cristais de NaI); 3) Semivida física perfeita de cerca de 6 horas; 4) Química de coordenação versátil que permite marcar múltiplos órgãos e facilidade de obtenção em gerador hospitalar Mo-99/Tc-99m.",
      "1) Emissão alfa pura; 2) Semivida de 50 anos; 3) Cor verde fosforescente; 4) Baixo custo elétrico.",
      "1) Toxicidade letal para bactérias; 2) Emissão de neutrões pesados; 3) Solubilidade em gasolina; 4) Semivida de 1 segundo.",
      "O tecnécio não tem propriedades ideais e é utilizado unicamente porque é proibido usar outros elementos."
    ],
    correctIndex: 0,
    explanation: "O Tecnécio-99m reúne características radiofísicas incomparáveis: 1) Desexcita-se por transição isomérica emitindo fotões gama de 140 keV (99% de penetrância com pouca dispersão e facilmente colimável por furos finos de chumbo); 2) Ausência de partículas beta, reduzindo drasticamente a dose absorvida pelo doente; 3) A semivida de 6 horas é suficientemente longa para procedimentos clínicos e curta para desaparecer do organismo em 24h (4 meias-vidas); 4) O gerador Mo-99/Tc-99m dura uma semana no serviço hospitalar, disponibilizando tecnécio fresco diariamente por eluição.",
    distractorAnalysis: [
      "Opções B, C e D são invenções absurdas que contrariam a farmacopeia de medicina nuclear internacional."
    ],
    nursingApplication: "O enfermeiro administra dezenas de radiofármacos baseados em ⁹⁹ᵐTc: ⁹⁹ᵐTc-DMSA (para avaliação de cicatrizes renais de pielonefrite em pediatria), ⁹⁹ᵐTc-HIDA (para vias biliares e colecistite aguda) e ⁹⁹ᵐTc-Nanocoloide (para mapeamento linfático de gânglio sentinela), reconhecendo a segurança proporcionada pela ausência de radiação beta."
  },
  {
    id: 809,
    topicId: 8,
    question: "Na 'Braquiterapia de Alta Taxa de Dose' (HDR - High Dose Rate) utilizada no cancro do colo do útero e endométrio, o radioisótopo Irídio-192 (¹⁹²Ir, T₁/₂ ≈ 73,8 dias) é introduzido no aplicador ginecológico através de um sistema robotizado de pós-carregamento remoto (afterloading). Qual é o cuidado de enfermagem crítico antes de autorizar a saída da doente da sala de tratamento blindada?",
    options: [
      "Monitorizar a doente e a sala com um detetor de radiação portátil para confirmar formalmente que a fonte selada de Irídio-192 recolheu integralmente para o interior do cofre blindado do projetor e que a doente não transporta qualquer fonte radioativa consigo.",
      "Dar um banho de lixívia à doente para lavar a radiação.",
      "Deixar a fonte de irídio dentro do útero da doente durante três semanas em casa.",
      "Mandar a doente para a paragem de autocarro com o aplicador metálico ligado ao robô."
    ],
    correctIndex: 0,
    explanation: "Na braquiterapia HDR ginecológica, uma minúscula semente sólida selada de Irídio-192 com altíssima atividade (~370 GBq / 10 Ci) é impulsionada por um cabo flexível acionado por motor até ao interior dos aplicadores uterinos (sondas tandem/anel), permanecendo poucos minutos para entregar a dose prescrita e recolhendo depois automaticamente para o cofre de chumbo do projetor. Se o cabo encravar e a fonte não recolher (emergência radiológica), a doente sofrerá necrose pélvica massiva em horas e contaminará o hospital. A verificação física da recolha da fonte com monitor de radiação é mandante antes de tocar na doente.",
    distractorAnalysis: [
      "Opção B é absurda; fontes seladas não deixam resíduos químicos laváveis na pele.",
      "Opções C e D são negligências fatais gravíssimas que provocariam morte por radiação e desastre radiológico público."
    ],
    nursingApplication: "O enfermeiro de braquiterapia está treinado em protocolos de emergência de recolha de fonte: se o monitor de radiação acusar que o Irídio-192 não recolheu para o cofre, o enfermeiro utiliza pinças longas de emergência para remover manualmente o aplicador e deposita a fonte no contentor de blindagem de emergência existente na sala, prestando assistência imediata à doente."
  },
  {
    id: 810,
    topicId: 8,
    question: "O radioisótopo Rádio-223 (²²³Ra, comercializado como Xofigo, sob a forma de dicloreto de rádio) foi o primeiro 'Emissor de Partículas Alfa' aprovado internacionalmente para o tratamento de metástases ósseas dolorosas no cancro da próstata resistente à castração. Qual é o fundamento biofísico e fisiológico da sua eficácia?",
    options: [
      "O Rádio pertence ao Grupo 2 da Tabela Periódica (metal alcalino-terroso análogo químico do Cálcio), ligando-se avidamente à hidroxiapatite nas zonas de metástases osteoblásticas; aí chegado, emite partículas alfa de altíssimo LET com alcance microscópico (<100 μm), provocando quebras duplas irreparáveis no DNA das células tumorais com irradiação mínima da medula óssea saudável circundante.",
      "O rádio arrefece os ossos a -50 °C congelando o tumor.",
      "O rádio transforma as células cancerígenas em glóbulos brancos de defesa.",
      "O rádio dissolve o esqueleto permitindo ao doente flutuar sem dor."
    ],
    correctIndex: 0,
    explanation: "Como membro da família dos metais alcalino-terrosos (junto com Ca, Mg e Sr), o catião Ra²⁺ mimetiza perfeitamente o cálcio, sendo incorporado seletivamente nos locais de turnover ósseo acelerado induzido pelas metástases da próstata. A sua cadeia de decaimento emite 4 partículas alfa altamente energéticas (energia total > 28 MeV): devido ao curtíssimo alcance tecidual das partículas alfa (menos de 100 micrómetros, equivalente a 2 a 10 diâmetros celulares), as células tumorais e os osteoblastos/osteoclastos vizinhos são destruídos por quebras duplas de DNA, enquanto a medula óssea hematopoética situada a mais de 100 μm de distância é amplamente poupada, resultando em sobrevida prolongada com excelente perfil de segurança.",
    distractorAnalysis: [
      "Opções B, C e D são afirmações fantásticas sem respaldo na oncologia ou radiofísica moderna."
    ],
    nursingApplication: "O enfermeiro administra o ²²³Ra por injeção endovenosa lenta ao longo de 1 minuto através de linha com soro fisiológico. Como o rádio é excretado primariamente pelo trato gastrointestinal nas fezes (eliminação fecal), o enfermeiro educa o doente e os cuidadores sobre o manuseamento seguro de fezes durante os 7 dias seguintes (usar luvas descartáveis ao limpar a sanita, fechar a tampa e dar dupla descarga)."
  },
  {
    id: 811,
    topicId: 8,
    question: "O Criptónio-81m (⁸¹ᵐKr, T₁/₂ ≈ 13 segundos) e o Xénon-133 (¹³³Xe, T₁/₂ ≈ 5,2 dias) são gases radioativos utilizados em Medicina Nuclear para qual exame funcional pulmonar?",
    options: [
      "Estudo da Cintigrafia de Ventilação Pulmonar (frequentemente acoplado à cintigrafia de perfusão com ⁹⁹ᵐTc-MAA) para o diagnóstico de Tromboembolismo Pulmonar (TEP) agudo através da pesquisa de incompatibilidade ventilação/perfusão (mismatch V/Q).",
      "Medição da capacidade auditiva de doentes surdos.",
      "Tratamento de pneumonia bacteriana por inalação de gás fervente.",
      "Avaliação da dilatação do estômago após ingestão de feijão."
    ],
    correctIndex: 0,
    explanation: "No diagnóstico do TEP: o doente inala o gás radioativo (⁸¹ᵐKr ou ¹³³Xe) através de um bocal com máscara valvulada fechada, permitindo à câmara gama desenhar o mapa de VENTILAÇÃO alveolar (V). De seguida, injetam-se macroagregados de albumina marcados com tecnécio (⁹⁹ᵐTc-MAA) para mapear a PERFUSÃO capilar pulmonar (Q). A presença de zonas com ventilação normal mas com ausência de fluxo sanguíneo perfusional ('mismatch V/Q') confirma a oclusão embólica da artéria pulmonar correspondente com altíssima precisão.",
    distractorAnalysis: [
      "Opções B, C e D são invenções desconexas sem qualquer relação com a fisiologia cardiorrespiratória ou nuclear médica."
    ],
    nursingApplication: "Na realização da cintigrafia de ventilação, o enfermeiro garante o acoplamento estanque da máscara facial ou bocal de inalação: se o doente soltar a máscara ou tossir descontroladamente, o gás radioativo escapa para o ar da sala, exigindo sistemas hospitalares de exaustão com pressão negativa e filtros de carvão ativado para capturar o gás exalado."
  },
  {
    id: 812,
    topicId: 8,
    question: "O Gálio-68 (⁶⁸Ga, T₁/₂ ≈ 68 minutos) é obtido a partir de um gerador hospitalar autónomo de Germânio-68/Gálio-68 (⁶⁸Ge/⁶⁸Ga). Qual é a enorme vantagem clínica deste sistema para centros de PET que não possuem um Cíclotron próprio nas suas instalações?",
    options: [
      "Permite a produção local sob demanda de um radioisótopo emissor de positrões de altíssima qualidade diagnóstica para PET (como ⁶⁸Ga-PSMA e ⁶⁸Ga-DOTATOC), com um gerador que tem uma vida útil de quase um ano (já que o pai Germânio-68 tem semivida longa de 271 dias), sem o investimento multimilionário de um acelerador cíclotron.",
      "Elimina a necessidade de qualquer máquina de imagem de PET no hospital.",
      "Permite curar a gripe comum em menos de 10 minutos.",
      "Gera eletricidade suficiente para abastecer todos os computadores do bloco operatório."
    ],
    correctIndex: 0,
    explanation: "Instalar e operar um cíclotron médico exige edifícios com bunkers especiais e custos astronómicos. O gerador ⁶⁸Ge/⁶⁸Ga replica para o PET o sucesso que o gerador Mo-99/Tc-99m trouxe para o SPECT: o pai ⁶⁸Ge tem semivida de cerca de 9 meses (271 dias) e decai continuamente por captura eletrónica para o filho ⁶⁸Ga (T_1/2 = 68 min, emissor β⁺ a 89%). O enfermeiro e radiofarmacêutico eluem o gerador com ácido clorídrico diluído (0,1 M HCl), obtendo Gálio-68 fresco à cabeceira para marcar peptídeos diagnósticos sem necessidade de cíclotron no hospital.",
    distractorAnalysis: [
      "Opção B confunde a fonte geradora de radioisótopos com o tomógrafo de deteção tomográfica PET.",
      "Opções C e D são afirmações absurdas sem base médica ou física."
    ],
    nursingApplication: "O uso crescente de ⁶⁸Ga-PSMA (antigénio de membrana específico da próstata) revolucionou a oncologia urológica: permite ao enfermeiro e equipa multidisciplinar detetar recidivas bioquímicas de cancro da próstata com valores de PSA sérico extremamente baixos (<0,5 ng/mL), localizando micrometástases ganglionares precoces com sensibilidade inalcançável por TAC ou RMN convencionais."
  },
  {
    id: 813,
    topicId: 8,
    question: "Na terapia de doentes com Tumores Neuroendócrinos metastáticos com Lutécio-177 (¹⁷⁷Lu-Dotatate), a toxicidade renal constitui o principal fator limitante de dose. Qual é a intervenção de enfermagem obrigatória durante a infusão para proteger os rins do doente?",
    options: [
      "Administrar uma perfusão intravenosa de solução de aminoácidos específicos (L-lisina e L-arginina a 2,5%) iniciada 30 a 60 minutos antes do radiofármaco e mantida durante 3 a 4 horas, para saturar competitivamente a reabsorção tubular renal proximal do peptídeo radiomarcado.",
      "Administrar 5 litros de café com açúcar em bólus rápido.",
      "Suspender toda a água e fluidos ao doente durante 48 horas seguidas.",
      "Colocar sacos de gelo sobre a coluna lombar para anestesiar os rins."
    ],
    correctIndex: 0,
    explanation: "Os peptídeos radiomarcados (como o Dotatate) são filtrados pelos glomérulos e sofrem reabsorção ativa por endocitose mediada pelo complexo megalina/cubilina nos túbulos contornados proximais renais. Sem proteção, o ¹⁷⁷Lu ficaria retido nas células tubulares durante a sua meia-vida de 6,7 dias, depositando radiação beta que induziria insuficiência renal crónica tardia. A perfusão de aminoácidos básicos carregados positivamente (lisina/arginina) satura os sítios de ligação da megalina: o ¹⁷⁷Lu-Dotatate não é reabsorvido e passa livremente para a bexiga, sendo rapidamente eliminado na urina e poupando o parênquima renal.",
    distractorAnalysis: [
      "Opção B provocaria taquicardia severa e diurese desregulada sem qualquer proteção tubular renal específica.",
      "Opção C causaria choque hipovolémico e insuficiência renal aguda catastrófica.",
      "Opção D não altera a fisiologia da filtração e reabsorção tubular macromolecular nos néfrons."
    ],
    nursingApplication: "A solução concentrada de aminoácidos frequentemente desencadeia náuseas e vómitos reflexos nos primeiros 30 a 60 minutos devido à estimulação central. O enfermeiro administra antieméticos profiláticos específicos (como ondansetron ou aprepitant) 30 minutos antes do início dos aminoácidos, garantindo o conforto do doente e a tolerância da perfusão nefroprotetora."
  },
  {
    id: 814,
    topicId: 8,
    question: "O Iodo-123 (¹²³₅₃I, T₁/₂ ≈ 13,2 horas) é um radioisótopo amplamente utilizado em cintigrafias da tiroide e no estudo de transportadores de dopamina no cérebro (DaTscan em doença de Parkinson). Qual é a sua principal vantagem biofísica sobre o Iodo-131 para fins puramente DIAGNÓSTICOS?",
    options: [
      "O Iodo-123 decai exclusivamente por Captura Eletrónica com emissão Gama pura de 159 keV (energia ideal para câmaras gama), SEM emitir partículas beta lesivas, resultando numa dose de radiação absorvida para o doente até 100 vezes inferior à do Iodo-131 para o mesmo estudo imagiológico.",
      "O Iodo-123 cura a doença de Parkinson em 1 única injeção.",
      "O Iodo-123 é um elemento gasoso que é inalado sem necessidade de agulhas.",
      "O Iodo-123 permanece no corpo do doente durante 10 anos consecutivos."
    ],
    correctIndex: 0,
    explanation: "Para exames imagiológicos onde se pretende apenas mapear o órgão sem destruir células, o Iodo-131 é muito desfavorável porque 90% da sua energia é emitida sob forma de partículas beta que irradiam e lesam a tiroide sem sair do corpo. O Iodo-123 não tem radiação beta: decai por captura eletrónica emitindo um fotão gama ideal de 159 keV (muito próximo dos 140 keV do tecnécio), compatível com colimadores padrão de baixa energia e alta resolução. A sua meia-vida de 13 horas é perfeita para estudos metabólicos de 24 horas com mínima carga dosimétrica.",
    distractorAnalysis: [
      "Opção B é falsa; o DaTscan é um exame puramente diagnóstico de imagem dos gânglios da base, sem efeito curativo neurológico.",
      "Opção C confunde a solução aquosa injetável de ioflupano (¹²³I) com anestésicos gasosos inalatórios.",
      "Opção D é incorreta; com meia-vida de 13 horas, ao fim de 5 dias a radioatividade do ¹²³I é virtualmente nula."
    ],
    nursingApplication: "No exame de DaTscan para diferenciação entre Doença de Parkinson e tremor essencial, o enfermeiro administra previamente gotas de Solução de Lugol (ou perclorato de potássio) para bloquear a tiroide do doente: como o Iodo-123 está ligado à molécula que estuda o cérebro, o bloqueio tiroideu impede que o iodo livre se fixe na tiroide, protegendo a glândula contra a radiação desnecessária."
  },
  {
    id: 815,
    topicId: 8,
    question: "O radioisótopo Tálio-201 (²⁰¹Tl, T₁/₂ ≈ 73 horas) atua como um análogo biológico de qual catião intracelular fisiológico na realização de cintigrafias de perfusão e viabilidade miocárdica?",
    options: [
      "Do Potássio (K⁺), penetrando ativamente nas células musculares viáveis do miocárdio através da bomba de sódio-potássio ATPase (Na⁺/K⁺ ATPase) dependente de ATP e oxigénio.",
      "Do Ferro (Fe²⁺) da hemoglobina.",
      "Do Bicarbonato (HCO₃⁻) dos pulmões.",
      "Do ião magnésio do esmalte dentário."
    ],
    correctIndex: 0,
    explanation: "O Tálio (²⁰¹Tl, metal pesado do grupo 13) possui um raio iónico hidratado (1,44 Å) muito próximo do ião Potássio K⁺ (1,33 Å). O miócito cardíaco viável possui milhões de bombas ativas de Na⁺/K⁺ ATPase que transportam avidamente o Tálio-201 para o citoplasma intracelular. Áreas de enfarte miocárdico com necrose celular e fibrose (células mortas sem ATP e sem bombas funcionais) não conseguem captar o ²⁰¹Tl, surgindo como áreas 'frias' (defeitos de captação) na cintigrafia de viabilidade miocárdica.",
    distractorAnalysis: [
      "Opção B confunde a fixação miocárdica por bombas de transporte iónico com o transporte de oxigénio pelas hemácias.",
      "Opção C refere um anião tampão sem relação com o transporte de catiões metálicos pesados.",
      "Opção D refere um mineral de suporte dentário inerte."
    ],
    nursingApplication: "O exame de viabilidade com ²⁰¹Tl ajuda a responder a uma questão clínica crucial: o músculo cardíaco após enfarte está morto (tecido cicatricial) ou apenas 'hibernado' e reversível por cirurgia de revascularização coronária? O enfermeiro apoia a aquisição das imagens tardias de redistribuição (feitas 4 a 24 horas pós-injeção), instruindo o doente a permanecer em repouso e sem refeições pesadas."
  },
  {
    id: 816,
    topicId: 8,
    question: "A terapia com 'Iodo-131 MIBG' (metaiodobenzilguanidina radiomarcada) é utilizada no tratamento de quais tipos específicos de neoplasias malignas de origem neuroectodérmica?",
    options: [
      "Feocromocitomas, Paragangliomas e Neuroblastomas pediátricos avançados, onde o radiofármaco mimetiza a noradrenalina e é ativamente captado pelo transportador vesicular de monoaminas (VMAT).",
      "Cancro da próstata em idosos exclusivamente.",
      "Melanoma cutâneo superficial de estádio inicial.",
      "Carcinoma espinocelular da língua provocado por tabaco."
    ],
    correctIndex: 0,
    explanation: "A MIBG é um análogo molecular da guanetidina que partilha estreita homologia estrutural com a noradrenalina (norepinefrina). Tumores derivados da crista neural e sistema neuroendócrino (como o neuroblastoma na infância e o feocromocitoma na medula suprarrenal) superexpressam os transportadores de recaptação de noradrenalina (NET e VMAT): captam e armazenam ativamente a ¹³¹I-MIBG em vesículas citoplasmáticas neurosecretoras, permitindo irradiar e destruir o tumor internamente com a radiação beta do Iodo-131.",
    distractorAnalysis: [
      "Opção B utiliza terapias dirigidas a recetores de androgénios e PSMA (como Lu-177 e Ra-223), não MIBG.",
      "Opção C utiliza imunoterapia e cirurgia de excisão local ampla.",
      "Opção D não expressa transportadores adrenérgicos vesiculares específicos."
    ],
    nursingApplication: "Durante a infusão endovenosa de altas doses de ¹³¹I-MIBG em crianças com neuroblastoma na unidade de transplante e medicina nuclear, a infusão lenta (ao longo de 1 a 2 horas) com monitorização contínua de ECG e pressão arterial é mandatória pelo enfermeiro: a MIBG pode deslocar temporariamente catecolaminas endógenas das vesículas adrenérgicas, provocando picos hipertensivos súbitos ou taquicardia que exigem intervenção imediata."
  },
  {
    id: 817,
    topicId: 8,
    question: "No contexto da dosimetria e proteção de acompanhantes de doentes submetidos a exames de PET com ¹⁸F-FDG, qual é a 'Taxa de Dose' típica emitida pelo doente logo após a injeção do radiofármaco e qual a conduta recomendada pelo enfermeiro?",
    options: [
      "Aproximadamente 20 a 40 μSv/hora a 1 metro de distância; o enfermeiro orienta que os acompanhantes (especialmente crianças pequenas e grávidas) aguardem na sala de espera geral não-radioativa durante o período de captação e repouso do doente, minimizando a sua exposição desnecessária.",
      "Mais de 100 Sieverts por hora, exigindo evacuação imediata do bairro.",
      "Zero absoluto, pois os positrões não saem do corpo.",
      "A dose é tão insignificante que os familiares devem deitar-se na mesma maca do doente durante todo o exame."
    ],
    correctIndex: 0,
    explanation: "Após a injeção de cerca de 250 a 370 MBq de ¹⁸F-FDG, a aniquilação contínua dos positrões gera triliões de pares de fotões gama de 511 keV que escapam livremente do corpo do doente. A 1 metro do tórax do doente, a taxa de dose situa-se entre 20 e 40 μSv/h: embora segura para exposições curtas da equipa de saúde com EPI, o princípio de Otimização e Limitação de Dose (limite de 1 mSv/ano para o público) exige que familiares desnecessários permaneçam afastados na sala de espera comum.",
    distractorAnalysis: [
      "Opção B causaria morte imediata por síndrome de radiação aguda em todos os presentes.",
      "Opção C confunde a retenção do positrão no tecido (<1 mm) com os dois fotões de 511 keV altamente penetrantes gerados pela aniquilação.",
      "Opção D violaria abertamente o princípio ALARA expondo familiares a irradiação externa desnecessária."
    ],
    nursingApplication: "O enfermeiro acolhe e educa os familiares com sensibilidade e clareza: explicar que o distanciamento físico durante as 2 a 3 horas de permanência no serviço de PET é uma medida de prudência protetora padrão, tranquilizando que após o decaimento rápido do Flúor-18 (meia-vida de 1,8h) o doente regressará a casa em segurança radiológica plena."
  },
  {
    id: 818,
    topicId: 8,
    question: "Qual das seguintes substâncias químicas radiofármacas é utilizada pela enfermagem para realizar a 'Linfocintigrafia' pré-operatória no mapeamento anatómico do gânglio sentinela?",
    options: [
      "Nanocoloide de Albumina Humana marcado com Tecnécio-99m (⁹⁹ᵐTc-nanocoloide), com partículas de diâmetro calibrado entre 10 e 80 nanómetros que migram lentamente pelos canais linfáticos até serem fagocitadas pelos macrófagos do primeiro gânglio linfático regional.",
      "Ácido sulfúrico concentrado quente.",
      "Suspensão de pedras de cal viva em pó.",
      "Solução alcoólica de iodo a 50% em bólus arterial."
    ],
    correctIndex: 0,
    explanation: "Para mapear os canais linfáticos com precisão microscópica, a dimensão das partículas é um parâmetro reológico crítico: partículas muito pequenas (<5 nm) entrariam na circulação venosa capilar e não parariam nos gânglios; partículas muito grandes (>200-500 nm) ficariam presas no local da injeção dérmica sem migrar. Os nanocolóides de albumina humana radiomarcados com ⁹⁹ᵐTc (tamanho ótimo de 10 a 80 nm) são drenados exclusivamente pelos vasos linfáticos aferentes e são retidos nos seios subcapsulares do primeiro gânglio linfático sentinela por filtração mecânica e fagocitose macrófaga.",
    distractorAnalysis: [
      "Opções B e C provocariam necrose tecidual cáustica destrutiva letal imediata.",
      "Opção D provocaria trombose química de artérias com perda isquémica do membro."
    ],
    nursingApplication: "Na injeção subdérmica ou periareolar do ⁹⁹ᵐTc-nanocoloide, o enfermeiro realiza uma massagem suave e circular durante 1 a 2 minutos com compressa sobre o local da punção: a pressão mecânica suave estimula a drenagem nos canais linfáticos da derme superficial, acelerando a progressão do radiofármaco até ao gânglio sentinela axilar ou inguinal antes da cirurgia."
  },
  {
    id: 819,
    topicId: 8,
    question: "O Cobre-64 (⁶⁴Cu, T₁/₂ ≈ 12,7 horas) apresenta uma particularidade única de decaimento nuclear na física médica. Como decai este radionuclídeo de transição?",
    options: [
      "Decai por três vias concorrentes em simultâneo: emissão de positrões (β⁺, 18%), decaimento beta negativo (β⁻, 38%) e captura eletrónica (44%), tornando-o um radionuclídeo híbrido com potencial simultâneo para imagem PET e para terapia radioisotópica dirigida.",
      "Decai exclusivamente por emissão de partículas alfa gigantescas de 500 MeV.",
      "Não decai e transforma-se espontaneamente em água líquida.",
      "Decai emitindo apenas ondas sonoras de baixa frequência."
    ],
    correctIndex: 0,
    explanation: "O Cobre-64 é um nuclídeo fascinante: encontra-se num estado intermédio singular que lhe permite decair tanto por emissão beta positiva (β⁺) para o Níquel-64 (permitindo a aquisição de imagens de alta resolução em scanners PET), como por emissão beta negativa (β⁻) para o Zinco-64 (permitindo terapia celular tumoral com elétrons de curto alcance), além de captura eletrónica acompanhada de elétrons Auger citotóxicos. A sua meia-vida de 12,7 horas é ideal para estudar a farmacocinética lenta de anticorpos monoclonais e nanopartículas.",
    distractorAnalysis: [
      "Opção B é impossível; o cobre (Z=29) é um elemento médio que não sofre emissão alfa de actinídeos pesados.",
      "Opções C e D violam as leis de conservação de energia e transmutações nucleares atómicas."
    ],
    nursingApplication: "O enfermeiro envolvido em ensaios clínicos com ⁶⁴Cu participa na vanguarda da nanomedicina oncológica: o acompanhamento de doentes que recebem imunoconjugados de cobre permite diagnosticar a localização tumoral e iniciar a terapia citotóxica numa única preparação radiofarmacêutica."
  },
  {
    id: 820,
    topicId: 8,
    question: "Na alta de um doente submetido a cirurgia de colocação de 'Sementes Permanentes de Iodo-125' na próstata (braquiterapia de baixa taxa de dose - LDR), qual é a recomendação de enfermagem quanto ao risco de migração acidental de sementes?",
    options: [
      "Instruir o doente a utilizar preservativo nas relações sexuais nas primeiras semanas e a filtrar a urina através de uma rede/filtro fornecido pelo hospital caso note a saída de corpos estranhos milimétricos dourados/metálicos na micção, não tocando nas sementes com as mãos e contactando o serviço de radioterapia.",
      "Exigir que o doente permaneça deitado de barriga para baixo durante seis meses.",
      "Mandar o doente retirar as sementes com uma pinça de sobrancelhas em casa.",
      "Proibir o doente de beber água durante todo o resto da vida."
    ],
    correctIndex: 0,
    explanation: "Na braquiterapia prostática permanente, cerca de 60 a 100 sementes de titânio (medindo 4,5 mm de comprimento por 0,8 mm de diâmetro) contendo Iodo-125 selado no seu interior são implantadas no parênquima da próstata sob guia ecográfica transretal. Nas primeiras semanas, existe uma pequena probabilidade de migração ou ejeção espontânea de uma semente através da uretra na urina ou durante a ejaculação seminal. O doente é instruído a usar preservativo e a recuperar qualquer semente expelida com uma pinça de metal (nunca com os dedos!) colocando-a num recipiente de vidro selado e informando o hospital.",
    distractorAnalysis: [
      "Opção B seria uma imobilização patológica desnecessária que causaria escaras e trombose venosa.",
      "Opção C provocaria lesões uretrais gravíssimas e perfuração da bexiga.",
      "Opção D provocaria desidratação letal e falência renal em escassos dias."
    ],
    nursingApplication: "O enfermeiro entrega o cartão de portador de implante radioativo de Iodo-125 ao doente: este documento oficial é crucial ao passar em detetores de radiação de aeroportos e fronteiras internacionais (que disparam facilmente com a emissão residual de raios X de 27 keV das sementes), justificando a presença de radioisótopos medicinais implantados."
  },
  {
    id: 821,
    topicId: 8,
    question: "O Xenon-133 (¹³³Xe, gás radioativo com T₁/₂ ≈ 5,2 dias) tem grande afinidade lipofílica, acumulando-se preferencialmente em quais tecidos corporais com elevado teor de gordura?",
    options: [
      "No tecido adiposo subcutâneo e visceral e na mielina lipídica do cérebro, onde se dissolve avidamente com uma taxa de depuração biológica muito mais lenta do que no sangue aquoso.",
      "No esmalte dos dentes e unhas duras.",
      "No ar dos seios perinasais exclusivamente.",
      "Nas lágrimas oculares transparentes."
    ],
    correctIndex: 0,
    explanation: "O Xénon é um gás nobre de elevado peso atómico que exibe altíssima solubilidade lipídica (elevado coeficiente de partição óleo/água). Quando inalado para estudos de ventilação pulmonar ou perfusão cerebral, difunde-se rapidamente através da barreira hematoencefálica dissolvendo-se na bainha de mielina rica em lípidos dos neurónios e no tecido adiposo periférico. Esta lipofilia prolonga a sua meia-vida biológica em doentes obesos, exigindo tempos de decaimento e ventilação ligeiramente mais longos.",
    distractorAnalysis: [
      "Opção B confunde matriz inorgânica de queratina e apatite com lípidos neutros.",
      "Opções C e D não possuem densidade lipídica capaz de dissolver gases nobres pesados."
    ],
    nursingApplication: "Em doentes obesos que realizam estudos respiratórios com gases radioativos, o enfermeiro sabe que a depuração do traçador é mais demorada: reforçar a ventilação do quarto de internamento e garantir períodos de repouso antes de alta assegura que a concentração residual de gás radioativo exalado no ar ambiente permaneça dentro dos limites de higiene do trabalho."
  },
  {
    id: 822,
    topicId: 8,
    question: "No contexto da 'Lei do Decaimento Exponencial', o que representa a 'Vida Média' (τ, tau) de um radioisótopo em comparação com o seu tempo de meia-vida física (T₁/₂)?",
    options: [
      "A Vida Média (τ = 1 / λ = T₁/₂ / ln(2) ≈ 1,443 · T₁/₂) é a esperança de vida temporal média de um núcleo atómico radioativo individual da amostra antes de decair, sendo cerca de 44% superior ao tempo de meia-vida.",
      "A vida média é exatamente igual a metade do tempo de meia-vida.",
      "A vida média mede quantos anos o doente vai viver após o exame.",
      "A vida média é uma constante de zero segundos em todos os radiofármacos."
    ],
    correctIndex: 0,
    explanation: "Enquanto a Meia-Vida (T₁/₂) é a mediana temporal da população de átomos (tempo para 50% dos núcleos se desintegrarem), a Vida Média (τ, tau) é a média aritmética estatística do tempo de sobrevivência de todos os átomos da amostra: τ = 1 / λ. Como λ = ln(2)/T₁/₂, tem-se τ = T₁/₂ / 0,693 ≈ 1,44 · T₁/₂. A integral da atividade ao longo do tempo de decaimento completo infinito é simplesmente A_total = A₀ · τ, fórmula fundamental utilizada pelos físicos médicos e dosimetristas para calcular a dose total acumulada em Joules ou Grays entregue a um tumor ao longo de toda a vida do implante.",
    distractorAnalysis: [
      "Opção B confunde a vida média com frações arbitrárias da curva exponencial.",
      "Opção C confunde a esperança de vida de partículas subatómicas quânticas com a longevidade clínica do doente humano.",
      "Opção D nega a existência do parâmetro central das integrais de decaimento exponencial."
    ],
    nursingApplication: "O conhecimento da Vida Média (τ = 1,44 · T₁/₂) é indispensável na braquiterapia de implantes permanentes (como sementes de Iodo-125 na próstata com T_1/2 = 60 dias, onde τ ≈ 86,6 dias): permite ao enfermeiro explicar ao doente que a dose terapêutica total prescrita pelo oncologista é entregue de forma contínua e suave ao longo de cerca de 3 meses, minimizando o estresse e esclarecendo o plano terapêutico."
  },
  {
    id: 823,
    topicId: 8,
    question: "Em caso de paragem cardiorrespiratória (PCR) de um doente internado num quarto blindado de isolamento após ter recebido uma dose terapêutica muito elevada de Iodo-131 (ex: 5550 MBq / 150 mCi) algumas horas antes, qual é a prioridade ética e operacional da equipa de enfermagem de reanimação?",
    options: [
      "A REANIMAÇÃO DO DOENTE (Suporte Avançado de Vida) TEM SEMPRE PRIORIDADE ABSOLUTA sobre a proteção radiológica: a equipa inicia compressões torácicas e desfibrilhação de imediato, aplicando medidas de radioproteção práticas rápidas (luvas duplas, avental impermeável, rotação rápida de reanimadores nas compressões e uso de máscara com filtro para ventilação mecânica sem contacto boca-a-boca).",
      "Abandonar o doente no quarto e deixá-lo falecer para que os enfermeiros não recebam qualquer microSievert de radiação.",
      "Esperar 80 dias do lado de fora do quarto até que a radiação decaia a 100% antes de iniciar compressões cardíacas.",
      "Dar um banho de ácido ao doente no chão antes de tentar desfibrilhar."
    ],
    correctIndex: 0,
    explanation: "Princípio deontológico e de radioproteção universal (ICRP 103 e regulamentos internacionais): A vida humana e as manobras de reanimação de emergência médica têm prioridade indiscutível sobre qualquer restrição radiológica rotineira. A dose que a equipa de emergência recebe durante 15 a 30 minutos de reanimação vigorosa (frações de mSv) está muito abaixo dos limites de emergência de salvamento de vidas humanas (que admitem doses ocupacionais de até 100 ou 500 mSv). Medidas simples de barreira (luvas duplas para evitar contacto com saliva/suor radioativo e saco reanimador com válvula / ventilador sem boca-a-boca) garantem a segurança dos reanimadores.",
    distractorAnalysis: [
      "Opção B e C constituem crimes gravíssimos de omissão de auxílio e negligência médica e deontológica inaceitável.",
      "Opção D provocaria queimaduras químicas cáusticas horríveis sem qualquer efeito na paragem cardíaca."
    ],
    nursingApplication: "O enfermeiro lidera a resposta serena perante uma PCR em quartos de medicina nuclear: toca o alarme de paragem cardíaca, coloca as luvas e avental plástico de intervenção rápida, inicia compressões torácicas e intubação orotraqueal imediatamente, e orienta a rotação dos profissionais a cada 2 minutos para dividir o esforço físico e a modesta taxa de radiação externa."
  },
  {
    id: 824,
    topicId: 8,
    question: "O radioisótopo Césio-137 e o Iodo-131 têm como órgãos-alvo preferenciais no corpo humano quais estruturas biológicas, respetivamente?",
    options: [
      "O Césio-137 distribui-se uniformemente por toda a massa muscular e tecidos moles (análogo do potássio); o Iodo-131 concentra-se de forma altamente seletiva na glândula Tiroide (via transportador NIS).",
      "O Césio vai exclusivamente para os cabelos e o Iodo para as unhas das mãos.",
      "Ambos se fixam exclusivamente no interior dos globos oculares.",
      "Ambos são rejeitados pelo corpo e eliminados em 1 segundo pela transpiração."
    ],
    correctIndex: 0,
    explanation: "A biodistribuição dos radionuclídeos decorre da sua afinidade química celular: 1) O Iodo-131 é concentrado ativamente pelas células foliculares da glândula tiroide por transporte ativo através do simporte de Na⁺/I⁻ (onde a concentração de iodeto atinge valores de 20 a 100 vezes superiores aos do plasma); 2) O Césio-137 (Z=55), sendo um metal alcalino quimicamente idêntico ao potássio (K⁺), é transportado para o espaço intracelular de todas as células do corpo pela bomba de sódio-potássio ATPase, acumulando-se preferencialmente no músculo estriado esquelético (que representa cerca de 40% da massa corporal humana).",
    distractorAnalysis: [
      "Opções B, C e D descrevem distribuições anatómicas falsas e absurdas sem qualquer base fisiológica."
    ],
    nursingApplication: "Conhecer a organotropia (órgão-alvo) dos radioisótopos dita as intervenções de enfermagem: em doentes que receberam Iodo-131, o enfermeiro monitoriza o pescoço e orienta a ingestão de rebuçados ácidos de limão (ácido cítrico) 24h após a toma para estimular a salivação e 'lavar' as glândulas salivares, prevenindo a sialoadenite radioinduzida crónica."
  },
  {
    id: 825,
    topicId: 8,
    question: "Na cintigrafia renal, qual é a diferença clínica e biofísica fundamental entre o uso do ⁹⁹ᵐTc-MAG3 e do ⁹⁹ᵐTc-DMSA administrados por enfermagem?",
    options: [
      "O ⁹⁹ᵐTc-MAG3 é um radiofármaco dinâmico excretado quase a 100% por secreção tubular renal na urina (ideal para avaliar a função de excreção e diagnosticar hidronefrose / estenose da junção pieloureteral); o ⁹⁹ᵐTc-DMSA é um radiofármaco estático que se fixa no parênquima do córtex renal proximal (ideal para detetar cicatrizes renais de pielonefrite crónica e calcular a função renal relativa percentual de cada rim).",
      "O MAG3 é um anestésico e o DMSA um antibiótico comum.",
      "O MAG3 destina-se a curar o cancro renal e o DMSA é administrado na veia jugular para dormir.",
      "Ambos são o mesmo fármaco com nomes diferentes para fins puramente comerciais."
    ],
    correctIndex: 0,
    explanation: "Em nefrologia e urologia nuclear: 1) Renograma Dinâmico com ⁹⁹ᵐTc-MAG3 (mercaptoacetiltriglicina): a câmara gama filma em tempo real a chegada rápida do radiofármaco aos rins, a sua passagem pelo parênquima e a sua drenagem ureteral para a bexiga (com prova de furosemida/Lasix para distinguir obstruções mecânicas de dilatações hipotónicas); 2) Cintigrafia Renal Estática com ⁹⁹ᵐTc-DMSA (ácido dimercaptosuccínico): as moléculas fixam-se firmemente nas células dos túbulos contornados proximais do córtex renal (retenção estática parenquimatosa sem lavagem urinária rápida), desenhando a anatomia do córtex e quantificando se o rim esquerdo e direito funcionam na proporção esperada de 50%/50%.",
    distractorAnalysis: [
      "Opções B e C confundem agentes imagiológicos de diagnóstico radiológico com classes terapêuticas farmacológicas de antibióticos ou anestésicos.",
      "Opção D ignora a composição molecular completamente diferente dos quelatos de DMSA e MAG3."
    ],
    nursingApplication: "Ao preparar uma criança para cintigrafia renal com DMSA para investigar refluxo vesicoureteral e cicatrizes pós-infeção urinária, o enfermeiro sabe que as imagens estáticas são adquiridas apenas 2 a 3 horas após a injeção (tempo necessário para a fixação cortical máxima), mantendo a criança calma e hidratada durante o intervalo de espera."
  },
  {
    id: 826,
    topicId: 8,
    question: "O conceito de 'Teranóstica' (teranostics, fusão de Terapia com Diagnóstico) representa o paradigma mais moderno da medicina nuclear personalizada. Como se define este conceito biofísico?",
    options: [
      "O uso do mesmo vetor molecular biológico (como um peptídeo ou anticorpo monoclonal dirigido a um recetor tumoral específico), emparelhado primeiro com um radioisótopo emissor gama ou de positrões para DIAGNÓSTICO e estadiamento molecular por imagem (ex: ⁶⁸Ga-PSMA no PET), e subsequentemente marcado com um radioisótopo emissor de partículas beta ou alfa para TERAPIA seletiva e destruição do tumor (ex: ¹⁷⁷Lu-PSMA ou ²²⁵Ac-PSMA).",
      "A prática de tratar todas as doenças humanas exclusivamente com orações e chás de ervas.",
      "O uso de bisturis de aço cirúrgico aquecidos a 1000 °C.",
      "A proibição total de exames de imagem e substituição por testes de sangue simples."
    ],
    correctIndex: 0,
    explanation: "O lema da teranóstica é: 'Vemos o que tratamos e tratamos o que vemos' (We see what we treat, we treat what we see). Baseia-se em emparelhar um par de radioisótopos com a mesma afinidade biológica: 1) Na fase diagnóstica, injeta-se o vetor marcado com um emissor de imagem (como ⁶⁸Ga para PET ou ⁹⁹ᵐTc para SPECT) para comprovar visualmente que o tumor do doente expressa avidamente os recetores-alvo; 2) Se o tumor for positivo na imagem, injeta-se exatamente a mesma molécula carreadora mas ligada a uma ogiva radioativa destruidora (emissor beta de alta energia como ¹⁷⁷Lu ou emissor alfa como ²²⁵Ac), bombardeando as células tumorais a nível nanométrico.",
    distractorAnalysis: [
      "Opções B, C e D são invenções absurdas que não têm qualquer correlação com o avanço tecnológico da oncologia molecular nuclear de precisão."
    ],
    nursingApplication: "O enfermeiro atua no coração da revolução teranóstica: acompanha o doente desde o acolhimento para o exame PET com ⁶⁸Ga-PSMA (confirmando a indicação tumoral) até à internação na enfermaria especializada para os ciclos terapêuticos de perfusão de ¹⁷⁷Lu-PSMA, monitorizando a eficácia clínica da remissão tumoral e gerindo os efeitos secundários com segurança radiológica."
  },
  {
    id: 827,
    topicId: 8,
    question: "Em caso de extravasamento periférico de uma injeção de ¹⁸F-FDG no braço do doente durante o procedimento de preparação para o exame PET, qual é a implicação biofísica imediata na qualidade do exame imagiológico e na segurança do doente?",
    options: [
      "Grande parte da dose de atividade radioativa fica retida nos tecidos moles do braço, gerando um artefacto de hipercaptação focal maciça que distorce a calibração do tomógrafo e reduz a quantidade de radiofármaco biodisponível na circulação sistémica (comprometendo a deteção de metástases no resto do corpo), além de depositar uma dose de radiação local desnecessária no tecido subcutâneo do membro.",
      "O braço do doente explode instantaneamente como uma bomba atómica.",
      "A imagem do PET transforma-se numa fotografia a cores normal de família.",
      "O doente fica curado de todos os cancros conhecidos em 2 segundos."
    ],
    correctIndex: 0,
    explanation: "A ¹⁸F-FDG destina-se a distribuir-se equitativamente por via intravascular por todo o organismo. Se ocorrer extravasamento perivenoso no local da punção: 1) Uma fração colossal da radioatividade permanece confinada ao tecido celular subcutâneo do antebraço, emitindo uma densidade absurda de fotões de aniquilação de 511 keV que gera artefactos de saturação nos detetores do PET; 2) A concentração plasmática sistémica cai, reduzindo os valores de captação padronizada (SUV - Standardized Uptake Value) nos tumores e provocando falsos negativos no estadiamento; 3) A dose absorvida localmente na pele do braço pode atingir vários Grays determinísticos.",
    distractorAnalysis: [
      "Opção B é uma fantasia destrutiva absurda desprovida de base científica.",
      "Opções C e D são formulações cómicas e falsas."
    ],
    nursingApplication: "A punção venosa periférica para administração de radiofármacos de PET e terapia metabólica exige excelência técnica do enfermeiro: garantir cateter venoso periférico calibroso e seguro, testar vigorosamente o retorno venoso e a lavagem prévia com soro fisiológico sem resistência e aspirar antes de injetar, prevenindo extravasamentos radioativos lesivos."
  },
  {
    id: 828,
    topicId: 8,
    question: "O radioisótopo Iridio-192 (¹⁹²Ir) decai com semivida de aproximadamente 74 dias por emissão beta e fotões gama com energia média de cerca de 380 keV. Qual é a principal vantagem do Irídio-192 sobre o Césio-137 em procedimentos de braquiterapia moderna?",
    options: [
      "O Irídio-192 pode ser fabricado com uma Atividade Específica extremamente elevada, permitindo produzir fontes radioativas miniaturizadas minúsculas (cilindros de apenas 0,6 mm de diâmetro por 3,5 mm de comprimento) capazes de navegar através de cateteres flexíveis finos diretamente até ao interior de tumores profundos.",
      "O irídio é um líquido que se bebe em chá morno.",
      "O irídio não emite qualquer tipo de radiação ionizante.",
      "O irídio dura eternamente durante 1 milhão de anos sem necessidade de substituição."
    ],
    correctIndex: 0,
    explanation: "O Césio-137 possui atividade específica moderada, exigindo fontes volumosas e pesadas que necessitam de canais aplicadores calibrosos e rígidos. O Irídio-192 obtido por irradiação neutrónica de Irídio-191 tem altíssima secção eficaz, alcançando atividades específicas monumentais: uma semente cilíndrica de irídio com dimensões submilimétricas concentra dezenas de Curies de atividade, permitindo a sua passagem suave por tubos plásticos flexíveis ultrafinos em braquiterapia intersticial de tumores da cabeça e pescoço, mama, próstata e brônquios (braquiterapia endobrônquica).",
    distractorAnalysis: [
      "Opções B, C e D descrevem propriedades absurdas e contrárias à radiofísica dos actinídeos e metais do grupo da platina."
    ],
    nursingApplication: "Como o Irídio-192 tem semivida de cerca de 74 dias (~2 meses e meio), a sua atividade radioativa decai progressivamente cerca de 1% por dia: a equipa de física médica atualiza semanalmente os tempos de irradiação no computador de tratamento, e a fonte é substituída trimestralmente no equipamento sob rigoroso protocolo de segurança de enfermagem e proteção radiológica."
  },
  {
    id: 829,
    topicId: 8,
    question: "Na gestão de segurança hospitalar, se um doente internado no quarto de radioiodoterapia com Iodo-131 falecer subitamente durante o período de alta atividade corporal residual (primeiras 24 horas pós-dose), qual é o procedimento biofísico e legal mandatório?",
    options: [
      "Notificar imediatamente o Serviço de Proteção Radiológica e o Físico Médico para avaliar a taxa de dose corporal e orientar a preparação do cadáver com saco impermeável estanque selado de espessura reforçada e rotulagem expressa de perigo de radiação, sendo a autópsia convencional terminantemente adiada ou realizada sob estritas barreiras de radioproteção em sala especializada.",
      "Realizar a preparação do corpo sem luvas e mandar o cadáver imediatamente para o velório público com caixão aberto.",
      "Cremar o corpo num forno de padaria comum em menos de 1 hora.",
      "Atirar o corpo ao mar sem qualquer registo hospitalar."
    ],
    correctIndex: 0,
    explanation: "A morte de um doente retendo Gigabecquerels de radioisótopos no organismo (como ¹³¹I, ¹⁷⁷Lu ou fontes de braquiterapia não removidas) constitui uma ocorrência radiológica que exige procedimentos especiais: 1) O cadáver emite radiação penetrante contínua; 2) Os fluidos cadavéricos (sangue, urina, fezes) contêm contaminação biológica e radioativa massiva. O corpo tem de ser acondicionado em saco impermeável estanque, rotulado com o trifólio de radiação com a atividade estimada e mantido em câmara frigorífica mortuária isolada até que o decaimento permita o sepultamento ou cremação em conformidade com as normas legais de dose pública.",
    distractorAnalysis: [
      "Opções B, C e D violam as leis penais, sanitárias e de proteção radiológica internacionais, submetendo profissionais funerários, famílias e o meio ambiente a riscos inaceitáveis de contaminação."
    ],
    nursingApplication: "O enfermeiro desempenha papel primordial na dignifiedade do cuidado pós-morte seguro: aplicar o saco fúnebre impermeável reforçado, identificar externamente com etiqueta de 'Cadáver Radioativo - Risco de Radiação', documentar a atividade administrada e hora do óbito, e acompanhar a transferência com o técnico de proteção radiológica para a morgue hospitalar."
  },
  {
    id: 830,
    topicId: 8,
    question: "O Carbono-11 (¹¹C, emissor de positrões com T₁/₂ ≈ 20,4 minutos) é um dos radioisótopos mais versáteis da investigação biomédica molecular em PET. Qual é a principal limitação logística que restringe o seu uso clínico de rotina na maioria dos hospitais gerais?",
    options: [
      "A sua semivida física ultracurta de apenas 20 minutos exige que o Cíclotron de produção de radiofármacos esteja localizado nas próprias instalações do hospital ou a escassos metros da sala de exames de PET, inviabilizando qualquer transporte rodoviário ou aéreo a longas distâncias.",
      "O carbono-11 explode espontaneamente em contacto com o ar hospitalar.",
      "O carbono-11 é radioativo durante 1000 anos e destrói o chão da sala de exames.",
      "O elemento carbono é tóxico para os seres humanos e causa envenenamento imediato."
    ],
    correctIndex: 0,
    explanation: "Com uma semivida de apenas 20,4 minutos: após 1 hora (3 meias-vidas) resta apenas 12,5% da atividade original; após 2 horas (6 meias-vidas) resta apenas 1,5% da dose sintetizada! Este decaimento físico vertiginoso impossibilita a distribuição comercial a partir de centros externos distantes. O uso de ¹¹C (como em ¹¹C-Colina ou ¹¹C-PIB para diagnóstico precoce da Doença de Alzheimer) exige a presença integrada de um cíclotron no subsolo do próprio hospital, módulos robotizados de radiossíntese química rápida e uma equipa multidisciplinar de químicos e enfermeiros trabalhando em sincronia ao segundo.",
    distractorAnalysis: [
      "Opção B é falsa; o carbono-11 é estável em termos químicos e não é combustível espontâneo em microdosagens de traçador.",
      "Opção C inverte a sua meia-vida física que é de apenas 20 minutos, não 1000 anos.",
      "Opção D é absurda; o carbono é o elemento químico mais abundante e basilar de toda a matéria orgânica viva humana."
    ],
    nursingApplication: "A logística do Carbono-11 ensina a disciplina de tempo na enfermagem de medicina nuclear: o doente tem de estar já cateterizado na sala de exames, o posicionamento no scanner calibrado e a aquisição pronta a iniciar no exato minuto em que a seringa sai do laboratório de radiofarmácia, garantindo o aproveitamento pleno da atividade fotónica antes do seu decaimento total."
  },
  {
    id: 831,
    topicId: 8,
    question: "O Cloreto de Estrôncio-89 (⁸⁹Sr, T₁/₂ ≈ 50,5 dias) é um emissor beta puro (E_max = 1,49 MeV). Por não emitir fotões gama significativos, qual é o impacto no isolamento hospitalar do doente após a sua administração?",
    options: [
      "O doente NÃO necessita de isolamento hospitalar em quarto blindado de chumbo (pode receber o tratamento em regime de ambulatório e regressar a casa no mesmo dia), porque a radiação beta é quase 100% absorvida dentro do próprio osso e tecidos moles do doente, sendo a taxa de radiação externa através da pele insignificante para os familiares.",
      "O doente tem de ficar fechado num cofre de chumbo durante três anos seguidos.",
      "O doente tem de ser transferido para outro país por razões de segurança internacional.",
      "O estrôncio queima a roupa do doente se ele sair à rua."
    ],
    correctIndex: 0,
    explanation: "Diferença crucial de radioproteção entre emissores gama e emissores beta puros: fotões gama escapam facilmente do corpo e irradiam quem estiver perto, exigindo quartos blindados (como no Iodo-131). As partículas beta do Estrôncio-89 têm um alcance máximo nos tecidos corporais de apenas cerca de 6 a 7 mm: quase 100% da radiação é absorvida nos próprios ossos do doente. A taxa de radiação emitida externamente para o exterior é virtualmente nula, permitindo a administração segura em hospital de dia com regresso imediato à residência familiar.",
    distractorAnalysis: [
      "Opções B, C e D são invenções exageradas que não têm qualquer correspondência com os protocolos internacionais de tratamento ambulatório com emissores beta puros."
    ],
    nursingApplication: "O enfermeiro foca a educação de alta do doente tratado com Estrôncio-89 na higiene com as excreções biológicas: como parte do radiofármaco é eliminado na urina e fezes nas primeiras semanas, o enfermeiro instrui o doente a usar sempre a sanita sentado, lavar cuidadosamente as mãos e trocar imediatamente qualquer roupa de cama molhada com urina utilizando luvas descartáveis."
  },
  {
    id: 832,
    topicId: 8,
    question: "Na avaliação de doentes com suspeita de demência e Doença de Alzheimer, qual é o princípio da imagem PET com radiotraçadores de Placas Amilóides (como o ¹⁸F-Florbetapir ou ¹⁸F-Florbetaben)?",
    options: [
      "As moléculas do radiofármaco atravessam a barreira hematoencefálica e ligam-se especificamente com altíssima afinidade aos agregados fibrilares insolúveis de proteína Beta-Amilóide no córtex cerebral, permitindo visualizar in vivo a patologia molecular da doença anos antes do declínio cognitivo terminal.",
      "O radiofármaco dissolve todos os neurónios do cérebro para curar a memória.",
      "O exame serve para medir o tamanho físico das orelhas do doente.",
      "A radiação do flúor substitui os pensamentos negativos do doente por pensamentos alegres."
    ],
    correctIndex: 0,
    explanation: "A Doença de Alzheimer caracteriza-se microscopicamente pela acumulação de placas extracelulares de peptídeo beta-amilóide (Aβ) e tranças neurofibrilares de proteína tau hiperfosforilada. Os traçadores de PET amilóide radiomarcados com Flúor-18 cruzam a barreira hematoencefálica e ligam-se às folhas plissadas beta das placas amilóides corticais. Um exame negativo afasta com altíssima probabilidade a Doença de Alzheimer como causa do défice cognitivo, orientando o diagnóstico diferencial neurológico.",
    distractorAnalysis: [
      "Opções B, C e D são formulações fantasiosas e incorretas que não têm fundamento científico na neuroimagiologia moderna."
    ],
    nursingApplication: "No acolhimento a doentes com défice cognitivo e às suas famílias angustiadas, o enfermeiro explica o procedimento com empatia e tranquilidade: o exame é não-invasivo, indolor, exige apenas uma pequena punção venosa para a injeção do traçador e 90 minutos de repouso confortável antes da digitalização no scanner PET, orientando os familiares sobre a relevância do diagnóstico precoce."
  },
  {
    id: 833,
    topicId: 8,
    question: "O conceito de 'Equilíbrio Secular' (Secular Equilibrium) ocorre num sistema de decaimento pai-filho quando qual condição de semividas físicas é satisfeita?",
    options: [
      "Quando a semivida física do radionuclídeo pai (T_pai) é extraordinariamente muito superior à semivida do filho (T_filho, por exemplo, por um fator de centenas ou milhares de vezes, como no sistema Rádio-226 com T₁/₂ = 1600 anos gerando Rádon-222 com T₁/₂ = 3,8 dias), atingindo-se um estado em que a atividade do filho se torna rigorosamente igual à atividade do pai (A_filho = A_pai).",
      "Quando o filho decai mais depressa do que a velocidade da luz.",
      "Quando pai e filho possuem o mesmo número de eletrões em todas as camadas.",
      "Quando o núcleo não tem qualquer energia interna."
    ],
    correctIndex: 0,
    explanation: "No Equilíbrio Secular (λ_pai << λ_filho, ou T_pai >> T_filho): como o núcleo pai decai a um ritmo quase impercetível ao longo de décadas ou milénios (sua atividade permanece essencialmente constante durante a observação clínica), a taxa de produção de núcleos filhos equilibra-se exatamente com a sua taxa de desintegração: λ_pai · N_pai = λ_filho · N_filho => A_pai = A_filho. Uma vez atingido o equilíbrio secular (após cerca de 7 meias-vidas do filho), a atividade do radionuclídeo filho permanece constante e igual à do pai.",
    distractorAnalysis: [
      "Opção B violaria a relatividade restrita de Einstein.",
      "Opções C e D são incorretas porque os estados químicos e energéticos de elementos diferentes são distintos."
    ],
    nursingApplication: "O equilíbrio secular é a base da calibração de fontes padrão de referência utilizadas no controlo diário de qualidade dos ativímetros de dose pelos serviços hospitalares: fontes de Césio-137 (T_1/2 = 30 anos) em equilíbrio com Bário-137m (T_1/2 = 2,55 min) fornecem uma taxa de atividade perfeitamente estável e previsível ano após ano para o enfermeiro aferir a precisão dos instrumentos de medição."
  },
  {
    id: 834,
    topicId: 8,
    question: "Qual é o mecanismo biofísico pelo qual o radioisótopo Carbono-14 (¹⁴C, T₁/₂ ≈ 5730 anos) é incorporado em todos os tecidos dos seres vivos e por que motivo cessa essa assimilação após a morte biológica?",
    options: [
      "O Carbono-14 é continuamente produzido na alta atmosfera pela colisão de neutrões cósmicos com o Azoto-14, oxidando-se em ¹⁴CO₂ que é assimilado pelas plantas na fotossíntese e incorporado na cadeia alimentar por animais e humanos em proporção constante; após a morte biológica, a ingestão e respiração cessam e a fração de ¹⁴C decai espontaneamente por emissão beta negativa segundo a lei exponencial sem reposição.",
      "O Carbono-14 entra no corpo exclusivamente através de vacinas aplicadas na infância.",
      "O carbono radioativo é fabricado pelos rins durante a digestão de carne bovina.",
      "A absorção ocorre unicamente enquanto o indivíduo está a dormir na cama."
    ],
    correctIndex: 0,
    explanation: "Na alta atmosfera, a radiação cósmica gera neutrões térmicos que transmutam o azoto: ¹⁴₇N + n -> ¹⁴₆C + p. O ¹⁴C incorpora-se no dióxido de carbono atmosférico (¹⁴CO₂). Todos os seres vivos que respiram e se alimentam mantêm uma razão ¹⁴C/¹²C em equilíbrio dinâmico constante com a biosfera (~1 átomo de ¹⁴C por cada 10¹² átomos de ¹²C). No instante da morte, o organismo cessa as trocas metabólicas com o meio ambiente: o 'relógio radiométrico' começa a contar, com a atividade de ¹⁴C a decair para metade a cada 5730 anos (técnica de datação por radiocarbono desenvolvida por Willard Libby, Prémio Nobel de 1960).",
    distractorAnalysis: [
      "Opções B, C e D são invenções absurdas que desconhecem os ciclos biogeoquímicos globais do carbono e a radioecologia fundamental."
    ],
    nursingApplication: "Compreender o ciclo natural do Carbono-14 e a incorporação de traçadores nos ciclos metabólicos é o fundamento dos testes respiratórios com Carbono (como o teste respiratório da Ureia marcada com ¹³C ou ¹⁴C que o enfermeiro realiza para diagnosticar com alta precisão a infeção gástrica por Helicobacter pylori)."
  },
  {
    id: 835,
    topicId: 8,
    question: "Na utilização do Teste Respiratório com Ureia marcada com Carbono-14 (¹⁴C-Urea Breath Test) para diagnóstico da infeção por Helicobacter pylori no estômago, como funciona o princípio biofísico de deteção pelo enfermeiro?",
    options: [
      "A bactéria H. pylori produz em abundância a enzima Urease no estômago, a qual hidrolisa a cápsula de ¹⁴C-ureia ingerida pelo doente, libertando amónia e ¹⁴CO₂ gasoso; este dióxido de carbono marcado é absorvido pelos capilares gástricos, viaja pela corrente sanguínea e é exalado nos pulmões, sendo capturado num bocal com líquido de cintilação e medido num contador de cintilação líquida.",
      "O teste mede a cor da língua do doente após mastigar comprimidos de carvão.",
      "O teste consiste em auscultar o estômago com um estetoscópio acústico comum.",
      "A bactéria emite raios laser visíveis que saem pela boca do doente."
    ],
    correctIndex: 0,
    explanation: "A bactéria Helicobacter pylori sobrevive no meio ácido do estômago sintetizando grandes quantidades da enzima urease. No teste clínico: o doente em jejum ingere uma microcápsula com urease marcada com dose diminuta de ¹⁴C (cerca de 37 kBq = 1 μCi, dose de radiação inofensiva equivalente a menos de 1 dia de radiação natural). Se houver infeção ativa por H. pylori, a urease bacteriana quebra a molécula: (¹⁴NH₂)₂CO + H₂O -> 2 NH₃ + ¹⁴CO₂. O ¹⁴CO₂ é absorvido no sangue e expelido pelos pulmões em 10 a 20 minutos: o doente sopra para dentro de um cartucho ou frasco com solução captadora de CO₂ que é depois lido num contador beta com precisão diagnóstica superior a 95%.",
    distractorAnalysis: [
      "Opções B, C e D são descrições incorretas e estapafúrdias sem qualquer correspondência com o teste respiratório da urease."
    ],
    nursingApplication: "O teste da ureia marcada é um procedimento não-invasivo de rotina conduzido por enfermeiros em ambulatório e gastroenterologia: o enfermeiro orienta o doente a suspender antibióticos e inibidores da bomba de protões (omeprazol) com semanas de antecedência para evitar falsos negativos, e recolhe a amostra respiratória cronometrada com segurança e rapidez."
  },
  {
    id: 836,
    topicId: 8,
    question: "O radioisótopo Zinco-65 (⁶⁵Zn, T₁/₂ ≈ 244 dias) é amplamente utilizado como radiotraçador em investigação do metabolismo de micronutrientes. Do ponto de vista de famílias nucleares, como se relaciona o Zinco-65 (⁶⁵₃₀Zn) com o Cobre-65 (⁶⁵₂₉Cu)?",
    options: [
      "São Isóbaros (possuem o mesmo número de massa A = 65, mas diferentes números atómicos Z = 30 e Z = 29).",
      "São Isótopos perfeitos do mesmo elemento químico.",
      "São Isótonos com o mesmo número de neutrões.",
      "São moléculas idênticas de água pura."
    ],
    correctIndex: 0,
    explanation: "O Zinco-65 possui Z = 30 protões e A = 65 nucleões (número de neutrões N = 65 - 30 = 35). O Cobre-65 possui Z = 29 protões e A = 65 nucleões (número de neutrões N = 65 - 29 = 36). Como partilham rigorosamente o mesmo número de massa A = 65 mas diferem nos números atómicos Z e no número de neutrões N, classificam-se inequivocamente como ISÓBAROS. Quando o ⁶⁵Zn decai por captura eletrónica ou emissão β⁺, transmuta-se no seu isóbaro estável ⁶⁵Cu.",
    distractorAnalysis: [
      "Opção B é falsa; têm números atómicos diferentes (Z=30 vs Z=29), sendo elementos químicos completamente distintos.",
      "Opção C é falsa; têm número de neutrões diferente (N=35 vs N=36).",
      "Opção D é uma afirmação sem qualquer sentido atómico."
    ],
    nursingApplication: "O conhecimento das relações isobáricas e dos produtos de transmutação é a base da farmacocinética de radioisótopos: permite antecipar a transformação metabólica dos elementos e a sua eliminação segura pelos órgãos em estudos nutricionais e toxicológicos."
  },
  {
    id: 837,
    topicId: 8,
    question: "O Iodo-125 (¹²⁵I) e o Iodo-131 (¹³¹I) são ambos isótopos radioativos do mesmo elemento químico iodo. Contudo, em braquiterapia da próstata utilizam-se sementes de ¹²⁵I e NUNCA de ¹³¹I. Qual é a razão biofísica e dosimétrica determinante para esta escolha?",
    options: [
      "O Iodo-125 emite fotões de baixíssima energia (~27 a 35 keV por captura eletrónica) com uma semivida mais longa (T₁/₂ ≈ 60 dias), o que permite uma entrega lenta e contínua de dose confinada à próstata com alcance tecidual de poucos milímetros; o Iodo-131 emite radiação beta de alta energia e fotões gama de 364 keV muito penetrantes que destruiriam a bexiga e o reto vizinhos e irradiariam familiares à distância.",
      "O Iodo-125 é um líquido potável e o Iodo-131 é um pó sólido.",
      "O Iodo-131 custa dez milhões de euros por grama e o Iodo-125 é gratuito.",
      "O Iodo-125 é feito de plástico biodegradável inofensivo."
    ],
    correctIndex: 0,
    explanation: "Na braquiterapia prostática permanente com implante de sementes definitivas: o objetivo clínico é depositar uma dose curativa colossal (~145 Gy) dentro da cápsula prostática, com queda abrupta da dose a zero na parede anterior do reto e no esfíncter uretral situados a escassos milímetros. Os fotões de baixa energia do ¹²⁵I (~28 keV) têm uma Camada Hemirredutora tecidual de apenas ~2 cm, sendo atenuados quase integralmente no interior da próstata. Se fossem usadas sementes de ¹³¹I, os fotões gama penetrantes de 364 keV atravessariam a bacia do doente, causando proctite actínica hemorrágica severa e irradiando o ambiente domiciliar.",
    distractorAnalysis: [
      "Opção B confunde as formas de encapsulamento farmacêutico com propriedades físicas dos nuclídeos.",
      "Opção C inventa justificações comerciais falsas.",
      "Opção D é incorreta; as sementes de ¹²⁵I são cápsulas estanques de titânio metálico biocompatível lacradas a laser."
    ],
    nursingApplication: "O conhecimento da baixa energia e penetração confinada do Iodo-125 permite ao enfermeiro tranquilizar os doentes e cuidadores na alta pós-braquiterapia prostática: a radiação que escapa do corpo para o exterior da pele é mínima (<2-5 μSv/h em contacto pélvico), exigindo apenas cuidados simples de precaução temporária com crianças ao colo nas primeiras semanas."
  },
  {
    id: 838,
    topicId: 8,
    question: "O radioisótopo Criptónio-81m (⁸¹ᵐKr) possui uma semivida física ultracurta de apenas 13 segundos. Como é possível utilizar clinicamente um radiofármaco que decai para metade em 13 segundos num hospital?",
    options: [
      "É obtido de forma contínua a partir de um gerador hospitalar de Rubídio-81/Criptónio-81m (⁸¹Rb/⁸¹ᵐKr, com o pai ⁸¹Rb a ter semivida de 4,6 horas): o gás ⁸¹ᵐKr é eluído continuamente por um fluxo de ar ou oxigénio que passa diretamente pela coluna do gerador para a máscara inalatória do doente em tempo real durante a aquisição de imagem na câmara gama.",
      "O gás é encomendado congelado em blocos de gelo transportados de avião da Austrália.",
      "O doente corre para dentro do reator nuclear a cada 5 segundos para respirar.",
      "O criptónio não é radioativo quando inalado com água benta."
    ],
    correctIndex: 0,
    explanation: "Seria impossível transportar e armazenar um isótopo de 13 segundos de meia-vida. A solução da física nuclear é o gerador ⁸¹Rb/⁸¹ᵐKr: o Rubídio-81 (T_1/2 = 4,58 h) decai continuamente na coluna geradora para o isómero metaestável Criptónio-81m (T_1/2 = 13 s). Ao conectar uma linha de ar medicinal ou oxigénio a passar pela coluna, o gás nobre ⁸¹ᵐKr é arrastado no fluxo respiratório diretamente para as vias aéreas do doente: atinge o equilíbrio de ventilação instantâneo nos alvéolos e decai para o estado fundamental estável (⁸¹Kr) em menos de 1 minuto, permitindo imagens de ventilação perfeitas com dose de radiação quase nula para o doente.",
    distractorAnalysis: [
      "Opções B, C e D são afirmações hilariantes e totalmente divorciadas da engenharia biomédica de radiofármacos hospitalares."
    ],
    nursingApplication: "O sistema de ventilação com ⁸¹ᵐKr ilustra o pico da segurança em enfermagem: a semivida de 13 segundos garante que, no segundo em que o doente retira a máscara inalatória, a radioatividade residual nos seus pulmões e no ar do quarto desvanece-se em escassos minutos, permitindo a transição imediata para a fase seguinte do exame sem qualquer contaminação do ambiente de trabalho."
  },
  {
    id: 839,
    topicId: 8,
    question: "A eficácia biológica da Terapia com Radionuclídeos Alvo (Targeted Radionuclide Therapy - TRT) baseia-se no conceito de 'Vetor e Carga Útil' (Vector and Payload). Qual é o papel desempenhado pelo 'Vetor' biológico?",
    options: [
      "Reconhecer com altíssima especificidade e afinidade química antigénios, recetores de membrana celular ou vias metabólicas exclusivas das células tumorais malignas (como o PSMA, recetores de somatostatina ou recetores HER2), transportando o radioisótopo citotóxico diretamente para o interior do tumor e poupando os tecidos saudáveis normais.",
      "Aumentar o peso corporal do doente em 20 quilogramas.",
      "Eliminar a necessidade de fazer a higiene do doente no leito.",
      "Atuar como um anestésico geral para o doente adormecer durante a injeção."
    ],
    correctIndex: 0,
    explanation: "Na farmacologia nuclear moderna, a molécula teranóstica é desenhada como um míssil guiado molecular composto por três partes: 1) O VETOR (um anticorpo monoclonal, peptídeo ou pequena molécula ligante) que procura e tranca-se especificamente no recetor superexpresso na superfície das células cancerígenas; 2) O QUELANTE (como o DOTA ou NOTA), uma 'gaiola química' que aprisiona firmemente o ião metálico radioativo; 3) A CARGA ÚTIL (payload), que é o radionuclídeo emissor de radiação citotóxica (como o ¹⁷⁷Lu ou ²²⁵Ac) que destrói o DNA do tumor a partir de dentro.",
    distractorAnalysis: [
      "Opções B, C e D misturam conceitos clínicos e de enfermagem triviais sem qualquer relevância para a bioquímica molecular da terapia dirigida com radiofármacos."
    ],
    nursingApplication: "A especificidade do vetor molecular confere à teranóstica uma seletividade extraordinária incomparável com a quimioterapia clássica convencional: os doentes toleram habitualmente os ciclos de Lutécio-177 ou Actínio-225 sem queda de cabelo (alopecia) e com muito menor incidência de náuseas graves, cabendo ao enfermeiro reforçar a adesão ao tratamento e a hidratação profilática."
  },
  {
    id: 840,
    topicId: 8,
    question: "Na gestão de doentes idosos internados que realizam exames de Medicina Nuclear e que se encontram medicados com Diuréticos de ansa (como a furosemida), como interage este fármaco com a biodistribuição de radioisótopos de excreção renal (como o ⁹⁹ᵐTc-MDP ou ⁹⁹ᵐTc-MAG3)?",
    options: [
      "Acelera a taxa de filtração e excreção urinária do radiofármaco livre não-ligado, reduzindo a Meia-Vida Biológica (T_b) e diminuindo a radioatividade de fundo (background) nos tecidos moles, mas exigindo vigilância acrescida do enfermeiro para prevenir episódios de incontinência urinária radioativa, desidratação e hipotensão postural.",
      "Bloqueia completamente os rins impedindo a saída de urina durante um mês.",
      "Transforma o tecnécio em chumbo metálico dentro da bexiga.",
      "Anula o efeito da radiação tornando o exame 100% invisível."
    ],
    correctIndex: 0,
    explanation: "A furosemida atua na ansa de Henle inibindo o cotransportador Na⁺-K⁺-2Cl⁻, provocando uma diurese aquosa e salina massiva rápida. Isto tem um duplo impacto: 1) Efeito hidrodinâmico favorável: o fluxo urinário acelerado lava rapidamente o radiofármaco livre residual que não se fixou nos tecidos, diminuindo a dose absorvida pela bexiga e aumentando a relação sinal/ruído da imagem cintigráfica; 2) Risco clínico de enfermagem: a diurese copiosa enche a bexiga em minutos, podendo provocar episódios súbitos de incontinência em doentes com mobilidade reduzida, além de desidratação e hipotensão arterial.",
    distractorAnalysis: [
      "Opção B descreve anúria obstrutiva oposta ao efeito diurético clássico da furosemida.",
      "Opção C confunde a fisiologia tubular renal com transmutações nucleares industriais.",
      "Opção D é incorreta porque a diurese melhora a qualidade da imagem cintigráfica ao reduzir o ruído de fundo."
    ],
    nursingApplication: "No protocolo de renograma com furosemida (MAG3-Furosemida), o enfermeiro programa a administração do diurético no minuto exato prescrito (habitualmente 15 a 20 minutos após o radiofármaco), garante acesso imediato à arrastadeira ou casa de banho e apoia o doente no levante para prevenir quedas por hipotensão ortostática."
  },
  {
    id: 841,
    topicId: 8,
    question: "Qual das seguintes famílias de radionuclídeos inclui o Hidrogénio-1 (¹₁H, prótio estável), o Hidrogénio-2 (²₁H, deutério estável) e o Hidrogénio-3 (³₁H, trítio radioativo)?",
    options: [
      "São Isótopos do elemento Hidrogénio (todos possuem Z = 1 protão, diferindo apenas na presença de 0, 1 e 2 neutrões no núcleo, respetivamente).",
      "São Isóbaros com o mesmo número de massa A = 1.",
      "São Isótonos com exatamente o mesmo número de neutrões N = 3.",
      "São metais alcalinos sólidos extraídos de minas de sal."
    ],
    correctIndex: 0,
    explanation: "O hidrogénio é o exemplo clássico da física atómica: 1) Prótio (¹H): Z=1, A=1, N=0 (um protão isolado com um elétrão, compõe 99,98% de todo o hidrogénio natural); 2) Deutério (²H ou D): Z=1, A=2, N=1 (estável, utilizado na água pesada D₂O como moderador em reatores nucleares); 3) Trítio (³H ou T): Z=1, A=3, N=2 (radioativo, emissor beta puro de muito baixa energia com T₁/₂ ≈ 12,3 anos). Por possuírem todos rigorosamente Z = 1 protão, são inequivocamente ISÓTOPOS do elemento químico Hidrogénio.",
    distractorAnalysis: [
      "Opção B é falsa; têm massas diferentes (A = 1, A = 2 e A = 3).",
      "Opção C é falsa; têm números de neutrões diferentes (N = 0, N = 1 e N = 2).",
      "Opção D confunde o elemento gasoso não-metálico hidrogénio com metais alcalinos pesados da crosta."
    ],
    nursingApplication: "O trítio (³H) é amplamente utilizado em investigação biomédica molecular na rotulagem de timidina tritiada para quantificar a proliferação de células estaminais e cicatrização de feridas em modelos experimentais de enfermagem baseada na evidência."
  },
  {
    id: 842,
    topicId: 8,
    question: "Na determinação do volume sanguíneo circulante e da volemia em doentes críticos com choque hipovolémico ou queimaduras extensas, qual é o método radioisotópico de 'Diluição de Traçadores' clássico utilizado em medicina nuclear?",
    options: [
      "Injeção de uma atividade conhecida de hemácias autólogas marcadas com Crómio-51 (⁵¹Cr-eritrócitos) para medir a massa globular eritrocitária, ou Albumina Humana marcada com Iodo-125 (¹²⁵I-HSA) para medir o volume plasmático, baseando-se no princípio de conservação de massa: V_total = Atividade_injetada / Concentração_amostrada.",
      "Pesagem do doente numa balança e divisão do peso por 10.",
      "Medição da circunferência da cabeça com fita métrica inextensível.",
      "Aspiração de 5 litros de sangue para uma bacia para ver quanto sobra no doente."
    ],
    correctIndex: 0,
    explanation: "O princípio da diluição de traçadores de George de Hevesy (Prémio Nobel de 1943) é a forma mais precisa e elegante de medir volumes corporais inacessíveis: injeta-se uma quantidade estritamente conhecida de radiofármaco marcador intravascular (C₁ · V₁). Deixa-se o traçador homogeneizar-se perfeitamente em toda a circulação sanguínea durante 10 a 20 minutos e colhe-se uma amostra de sangue periférico medindo a sua concentração radioativa (C₂). Pela conservação da atividade: C₁ · V₁ = C₂ · V_total => V_total = (C₁ · V₁) / C₂. Permite determinar a volemia real com exatidão milimétrica sem estimativas empíricas.",
    distractorAnalysis: [
      "Opção B é uma estimativa antropométrica grosseira que não reflete a perda volémica aguda.",
      "Opção C mede o perímetro cefálico pediátrico sem qualquer relação com a volemia sistémica.",
      "Opção D seria um procedimento iatrogénico letal e absurdo que causaria choque hipovolémico mortal imediato."
    ],
    nursingApplication: "O enfermeiro garante a colheita precisa da amostra de sangue cronometrada no braço CONTRALATERAL ao da injeção do radiotraçador (para evitar colher sangue contaminado com o bólus local inicial) e registra o valor exato do hematócrito para cálculo da volemia circulante na gestão intensiva de fluidoterapia do doente crítico."
  },
  {
    id: 843,
    topicId: 8,
    question: "O radioisótopo Actínio-225 (²²⁵Ac, T₁/₂ ≈ 9,9 dias) está na vanguarda da terapia oncológica como um 'Nanogerador Alfa Atómico'. Por que motivo o Actínio-225 é considerado tão potente contra micrometástases tumorais?",
    options: [
      "Porque a sua cascata de decaimento nuclear gera sucessivamente quatro partículas Alfa altamente energéticas por cada átomo inicial de ²²⁵Ac desintegrado (libertando quase 28 MeV de energia de destruição biológica por quebras duplas de DNA no raio microscópico do tumor).",
      "Porque emite raios laser ultravioleta que queimam o sangue.",
      "Porque atua como um veneno químico idêntico ao cianeto de potássio.",
      "Porque o actínio é um íman gigante que atrai os tumores para o estômago."
    ],
    correctIndex: 0,
    explanation: "O Actínio-225 é denominado um 'nanogerador de partículas alfa': decai através de uma cadeia radioativa rápida gerando Frâncio-221 (emissor alfa), Ástato-217 (emissor alfa), Bismuto-213 (emissor alfa/beta) e Polónio-213 (emissor alfa). No total, a cadeia de desintegração de um único núcleo de ²²⁵Ac dispara 4 partículas alfa consecutivas de altíssimo LET (~6 a 8 MeV cada), depositando uma dose concentrada avassaladora de quase 28 MeV em escassos diâmetros celulares. É capaz de erradicar micrometástases de cancro da próstata resistentes a todas as outras modalidades terapêuticas.",
    distractorAnalysis: [
      "Opções B, C e D são invenções fantasiosas sem base física ou radiobiológica."
    ],
    nursingApplication: "Na administração de ²²⁵Ac-PSMA pelo enfermeiro em unidades de oncologia de precisão, o controlo da toxicidade nas glândulas salivares (xerostomia / boca seca provocada pela fixação fisiológica do PSMA nas parótidas) é uma intervenção prioritária: aplicar gelo local (crioterapia com bolsas térmicas nas bochechas durante e após a infusão) para provocar vasoconstrição e diminuir a captação do radiofármaco na saliva."
  },
  {
    id: 844,
    topicId: 8,
    question: "O conceito de 'Meia-Vida Física' (T_1/2) de um radioisótopo é uma propriedade nuclear intrínseca e imutável. Quais são os fatores externos (temperatura, pressão atmosférica, gravidade ou reações químicas) que conseguem alterar ou acelerar o tempo de meia-vida física de um núcleo radioativo?",
    options: [
      "NENHUM fator físico ou químico convencional humano: a constante de decaimento nuclear (λ) e a meia-vida física são absolutamente invariáveis perante variações de temperatura, pressão, gravidade, estado físico ou reações químicas ordinárias na Terra.",
      "O calor extremo de uma fogueira faz a meia-vida reduzir para metade em 5 minutos.",
      "A pressão hidrostática no fundo do mar desativa a radioatividade para sempre.",
      "O congelamento a -20 °C no congelador hospitalar paralisa o decaimento nuclear."
    ],
    correctIndex: 0,
    explanation: "A desintegração radioativa espontânea é um processo governado pelas forças nucleares profunda no interior do núcleo atómico (energias de escala de MeV). As energias das reações químicas mais violentas ou de variações de temperatura biológica (0 a 100 °C) situam-se na escala microscópica de poucos eletrão-volts (eV) na nuvem eletrónica periférica — uma diferença de escala energética de um milhão de vezes! Portanto, ferver, queimar, congelar, pressurizar ou combinar quimicamente o radioisótopo com qualquer ácido ou base NÃO altera em rigorosamente nada a sua meia-vida física.",
    distractorAnalysis: [
      "Opções B, C e D são erros conceituais graves que contrariam a independência quântica das forças nucleares perante variáveis termodinâmicas macroscópicas ordinárias."
    ],
    nursingApplication: "Este princípio é basilar na gestão de resíduos hospitalares pelo enfermeiro: nunca tentar esterilizar resíduos radioativos na autoclave com o intuito de 'eliminar a radioatividade'. A autoclave destrói bactérias biológicas, mas a radioatividade continuará a decair no seu ritmo natural invariável, devendo o tempo de armazenamento ser rigorosamente cumprido."
  },
  {
    id: 845,
    topicId: 8,
    question: "Na cintigrafia pulmonar de perfusão, os 'Macroagregados de Albumina Humana marcados com Tecnécio-99m' (⁹⁹ᵐTc-MAA) são injetados por via intravenosa. Qual é o mecanismo biofísico de fixação destas partículas nos pulmões?",
    options: [
      "As partículas possuem diâmetro milimétrico calibrado (10 a 90 micrómetros) ligeiramente superior ao lúmen dos capilares pulmonares normais (~8 μm), ficando temporariamente retidas por microembolização mecânica capilar transitória benigna em proporção direta ao fluxo sanguíneo regional da artéria pulmonar.",
      "As partículas de albumina fundem-se no osso das costelas por atração magnética.",
      "O radiofármaco é inalado pelo nariz como fumo gasoso.",
      "As partículas dissolvem a parede dos alvéolos pulmonares."
    ],
    correctIndex: 0,
    explanation: "O ⁹⁹ᵐTc-MAA baseia-se numa microembolização biológica transitória perfeitamente segura e controlada: o organismo humano possui cerca de 280 mil milhões de capilares pulmonares. Ao injetar cerca de 200.000 a 500.000 partículas microscópicas de albumina calibradas com 10 a 90 μm, menos de 1 em cada 100.000 capilares fica momentaneamente ocluído na primeira passagem pelo leito vascular pulmonar. A distribuição das partículas reflete com precisão matemática a perfusão arterial pulmonar. Ao fim de 4 a 8 horas, as enzimas plasmáticas degradam a albumina biodegradável, desobstruindo os capilares sem qualquer sequela respiratória.",
    distractorAnalysis: [
      "Opção B confunde perfusão pulmonar com mineralização óssea torácica.",
      "Opção C confunde a injeção endovenosa de MAA com a fase inalatória gasosa da cintigrafia de ventilação.",
      "Opção D descreveria uma catástrofe histológica incompatível com a vida."
    ],
    nursingApplication: "Ao administrar ⁹⁹ᵐTc-MAA em doentes acamados, o enfermeiro sabe que a gravidade afeta a perfusão pulmonar (zonas de West): o doente deve permanecer em decúbito dorsal horizontal durante a injeção para assegurar uma distribuição uniforme do fluxo sanguíneo dos ápices às bases pulmonares, e nunca agitar a seringa com sangue aspirado para não criar macrocoágulos antes da injeção."
  },
  {
    id: 846,
    topicId: 8,
    question: "O radioisótopo Ouro-198 (¹⁹⁸Au, T₁/₂ ≈ 2,7 dias, emissor beta e gama) foi amplamente utilizado no tratamento de derrames cavitários malignos (ascite carcinomatosa e derrame pleural neoplásico). Como era administrado este coloide radioativo pela equipa de enfermagem e médica?",
    options: [
      "Por instilação intracavitária direta na cavidade peritoneal ou pleural (após paracentese ou toracocentese de alívio), mobilizando o doente em várias posições de decúbito para garantir a distribuição uniforme do coloide radioativo sobre toda a superfície serosa para ablação tumoral local.",
      "Por via oral misturado na sopa do jantar.",
      "Por injeção intradérmica na ponta do nariz.",
      "Em spray aerossol espalhado no teto do quarto de isolamento."
    ],
    correctIndex: 0,
    explanation: "O Ouro-198 coloidal foi o precursor histórico da terapia intracavitária: o coloide de ouro não atravessa a membrana serosa para a circulação sistémica, permanecendo confinado à cavidade peritoneal ou pleural. A emissão de partículas beta negativas de alta energia irradiava a superfície das células neoplásicas e mesoteliais disseminadas, induzindo fibrose e esclerose da serosa, cessando a produção exsudativa contínua de líquido ascítico ou pleural carcinomatoso refratário.",
    distractorAnalysis: [
      "Opção B causaria irradiação desnecessária de todo o tubo digestivo sem atingir a cavidade peritoneal fechada.",
      "Opções C e D são vias anatomicamente estapafúrdias e perigosas de dispersão ambiental descontrolada."
    ],
    nursingApplication: "Na instilação de radiofármacos intracavitários, o enfermeiro executa o protocolo de rotação postural do doente no leito a cada 15 a 30 minutos (decúbito dorsal, decúbito lateral direito, decúbito lateral esquerdo e posição semi-sentada): esta mobilização sequencial permite que o líquido radioativo banhe por gravidade todas as goteiras e recessos da cavidade serosa de forma perfeitamente homogénea."
  },
  {
    id: 847,
    topicId: 8,
    question: "A 'Câmara Quente' de um serviço de Medicina Nuclear é o laboratório altamente especializado e protegido onde se processam e preparam as doses de radiofármacos. Quais são os equipamentos de segurança e radioproteção primários manipulados pelo enfermeiro nesta área?",
    options: [
      "Câmara de fluxo laminar blindada com vidro plumbífero e castelo de chumbo integrado, ativímetro calibrador de doses de poço, pinças de manipulação à distância, protetores de seringa e contentores de transporte blindados de tungsténio/chumbo e monitores de contaminação de mãos e pés na saída da sala.",
      "Fornos micro-ondas industriais e baldes de plástico abertos.",
      "Aparelhos de ar condicionado sem filtros especiais.",
      "Apenas luvas de pano e toalhas de papel simples."
    ],
    correctIndex: 0,
    explanation: "A câmara quente (radiopharmacy hot lab) é o coração da proteção radiológica em medicina nuclear: combina a proteção asséptica do fármaco injetável (fluxo laminar estéril Classe A) com a blindagem física pesada contra radiações para os profissionais (biombos frontais de vidro plumbífero espesso de 5 cm e blocos de tijolo de chumbo intertravados). Todas as manipulações de frascos com atividades de Gigabecquerels são realizadas com pinças mecânicas longas para maximizar a distância (d² na Lei do Inverso do Quadrado), e cada profissional monitoriza obrigatoriamente as mãos e calçado no portal radiométrico à saída da câmara quente.",
    distractorAnalysis: [
      "Opções B, C e D descrevem instalações domésticas vulgares sem qualquer capacidade de contenção radiológica ou assepsia farmacêutica hospitalar."
    ],
    nursingApplication: "O trabalho seguro na câmara quente exige rigor quase cirúrgico e destreza do enfermeiro: planear antecipadamente todos os movimentos com fontes cegas para executar a eluição, marcação do kit, dosagem no ativímetro e rotulagem no menor tempo possível (princípio do Tempo) mantendo a maior distância possível das fontes abertas."
  },
  {
    id: 848,
    topicId: 8,
    question: "O radioisótopo Rádio-226 (²²⁶Ra, emissor alfa e gama com T₁/₂ ≈ 1600 anos) foi historicamente utilizado por Marie Curie e médicos pioneiros no tratamento de tumores em tubos de agulha ('curieterapia'). Por que motivo o Rádio-226 foi totalmente abandonado e descontinuado na medicina moderna?",
    options: [
      "Devido à sua semivida física excessivamente longa (1600 anos) que tornava o armazenamento e descarte de resíduos um perigo geológico crónico permanente, e porque decai num gás radioativo perigoso (Rádon-222) que podia vazar de agulhas fissuradas, tendo sido completamente substituído por radioisótopos modernos mais seguros de meia-vida curta (como ¹⁹²Ir, ¹³⁷Cs e ¹²⁵I).",
      "Porque o rádio se transformou em ouro e acabou em todo o planeta.",
      "Porque o rádio deixou de emitir radiação no ano 2000.",
      "Porque o rádio curava todas as doenças em 1 segundo e os hospitais perderam clientes."
    ],
    correctIndex: 0,
    explanation: "O Rádio-226 foi o primeiro elemento radioativo usado em braquiterapia clínica. Contudo, apresentava gravíssimos problemas de radioproteção: 1) A sua meia-vida de 1600 anos impossibilita qualquer desclassificação biológica de resíduos a curto prazo; 2) O seu produto filho imediato é o gás Rádon-222: a acumulação contínua de gás radioativo pressurizado dentro das agulhas de platina seladas provocava microfissuras e vazamento de gás letal nas enfermarias; 3) A emissão de fotões gama ultra-energéticos de até 2,2 MeV causava doses ocupacionais pesadíssimas em enfermeiros e cirurgiões. A medicina moderna substituiu-o integralmente por fontes de média/curta semivida com decaimento limpo.",
    distractorAnalysis: [
      "Opções B, C e D são invenções absurdas e fantasiosas sem base histórica, física ou económica."
    ],
    nursingApplication: "O estudo da história da curieterapia com Rádio-226 é uma lição permanente de radioproteção em enfermagem: demonstra como a evolução da física médica permitiu substituir agentes perigosos por radioisótopos biocompatíveis de alta precisão que salvam vidas minimizando a toxicidade ambiental."
  },
  {
    id: 849,
    topicId: 8,
    question: "No pós-tratamento de um doente submetido a cirurgia oncológica de tireoidectomia total seguida de radioiodoterapia com Iodo-131, qual é o biomarcador tumoral sérico que o enfermeiro monitoriza na consulta de seguimento para avaliar a remissão ou recidiva do cancro?",
    options: [
      "A Tiroglobulina sérica (Tg), que deve encontrar-se indetetável (<0,1 a 0,2 ng/mL) num doente curado cuja tiroide e células neoplásicas foram totalmente erradicadas pela cirurgia e pelo Iodo-131.",
      "A concentração de glicose na lágrima ocular.",
      "O nível de ácido lático no suor das mãos.",
      "A contagem de fios de cabelo que caem por semana."
    ],
    correctIndex: 0,
    explanation: "A Tiroglobulina (Tg) é uma grande glicoproteína precursora sintetizada exclusivamente pelas células foliculares da glândula tiroide (normais ou malignas). Se o doente foi submetido a cirurgia de remoção total da tiroide seguida da ablação radioisotópica dos restos tiroidianos com Iodo-131, não resta no organismo qualquer célula capaz de produzir tiroglobulina: o valor da Tg sérica deve cair para níveis indetetáveis. Qualquer elevação posterior da tiroglobulina no sangue do doente sinaliza a recidiva do cancro ou o crescimento de metástases à distância, indicando a necessidade de nova cintigrafia de corpo inteiro com ¹³¹I.",
    distractorAnalysis: [
      "Opções B, C e D referem parâmetros laboratoriais ou clínicos sem qualquer especificidade para a fisiopatologia do cancro da tiroide."
    ],
    nursingApplication: "Na consulta de enfermagem de seguimento ao doente com cancro da tiroide, o enfermeiro verifica os níveis de Tiroglobulina e anticorpos anti-tiroglobulina (anti-Tg), monitoriza a adesão à terapêutica de substituição hormonal com levotiroxina (para manter a TSH suprimida) e educa o doente a reconhecer precocemente qualquer nódulo palpável no pescoço."
  },
  {
    id: 850,
    topicId: 8,
    question: "A síntese biofísica de todos os radioisótopos utilizados na terapêutica médica assenta no princípio de que a matéria, nas suas menores escalas atómicas, é governada pela equivalência massa-energia e pelas forças nucleares. Qual é a principal missão do enfermeiro na administração destas terapias do século XXI?",
    options: [
      "Garantir a convergência entre o rigor técnico da radioproteção (aplicação estrita dos princípios de Justificação, Otimização ALARA e Limitação de Dose) e a excelência do cuidado humano centrado no doente, desmistificando medos infundados, monitorizando toxicidades precoces e proporcionando apoio clínico e psicológico seguro durante todo o processo de tratamento radioisotópico.",
      "Substituir todos os médicos e físicos do hospital por robôs de inteligência artificial.",
      "Proibir todos os doentes de falar sobre a sua doença com a família.",
      "Manter o hospital às escuras durante a noite para poupar eletricidade nuclear."
    ],
    correctIndex: 0,
    explanation: "A enfermagem em medicina nuclear e radioterapia é a ponte viva e indispensável entre a alta tecnologia física nuclear e o ser humano vulnerável que enfrenta uma patologia grave: o enfermeiro domina as grandezas dosimétricas, os tempos de decaimento, as propriedades de blindagem e as vias de excreção biológica para proteger a si próprio, à equipa e à sociedade contra a irradiação indevida, enquanto acolhe, escuta, esclarece as dúvidas do doente e da família, administra com perícia asséptica os radiofármacos e vigia com competência científica a resposta clínica e o conforto do doente.",
    distractorAnalysis: [
      "Opções B, C e D são formulações absurdas e antiéticas que contrariam a essência da profissão de enfermagem e da prestação de cuidados de saúde humanizados."
    ],
    nursingApplication: "Esta síntese coroa a formação de Biofísica para o 1.º Ano de Enfermagem: a ciência das radiações, forças nucleares, fluidos e mecânica dos materiais não é uma teoria abstrata de laboratório, mas sim o alicerce científico diário que capacita o futuro enfermeiro a salvar vidas com competência, rigor e humanismo em qualquer hospital do mundo."
  }
];
