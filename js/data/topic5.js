/**
 * BANCO DE QUESTÕES - TÓPICO 5
 * Física atómica e nuclear: modelos atómicos e postulados de Bohr, constituição do átomo,
 * número atómico e número de massa, forças nucleares, isótopos, isóbaros e isótonos,
 * radioatividade (emissões α, β e γ), ondas eletromagnéticas, raios X, efeitos biológicos
 * das radiações ionizantes e técnicas de imagem (TAC, cintigrafia, PET e ressonância magnética)
 * Total de Questões: 200 (IDs 5001 a 5200)
 */

const TOPIC_5_QUESTIONS = [
  {
    "id": 5001,
    "topicId": 5,
    "question": "Numa reação química, um estudante conclui que os átomos de cada elemento se reagrupam, mas não são criados nem destruídos, e têm todos a mesma massa para o mesmo elemento. A que modelo atómico corresponde esta ideia?",
    "options": [
      "Thomson: esfera positiva com os eletrões espalhados.",
      "Rutherford: núcleo denso rodeado de espaço quase vazio.",
      "Dalton: esfera sólida e indivisível.",
      "Schrödinger: nuvem de eletrões com localização provável."
    ],
    "correctIndex": 2,
    "explanation": "No modelo de Dalton (1808) o átomo é uma esfera sólida e indivisível; os átomos de um elemento têm massas idênticas e, nas reações, apenas se combinam de outra forma, sem serem criados nem destruídos.",
    "distractorAnalysis": [
      "Está incorreta: no modelo de Thomson já existem eletrões no interior do átomo, o que não condiz com a ideia de um átomo sem partes.",
      "Está incorreta: o modelo de Rutherford descreve um núcleo e eletrões à sua volta, ou seja, um átomo com estrutura interna.",
      "Está incorreta: o modelo de Schrödinger é quântico e probabilístico, muito posterior e sem relação com a conservação dos átomos nas reações."
    ],
    "nursingApplication": "Nas reações químicas do metabolismo, como a oxidação da glicose, os átomos reorganizam-se em novas substâncias, mas não se criam nem se destroem."
  },
  {
    "id": 5002,
    "topicId": 5,
    "question": "Um professor compara o átomo a um «pudim de passas». No modelo de Thomson, a que correspondem as «passas»?",
    "options": [
      "Aos eletrões, de carga negativa, espalhados pela esfera positiva.",
      "Aos protões, concentrados num pequeno núcleo central muito denso.",
      "Aos neutrões, sem carga, distribuídos pela esfera positiva.",
      "Aos fotões emitidos quando o eletrão muda de nível de energia."
    ],
    "correctIndex": 0,
    "explanation": "No modelo de Thomson (1897) o átomo é uma esfera de carga positiva onde os eletrões negativos estão distribuídos, como as passas num pudim.",
    "distractorAnalysis": [
      "Está incorreta: a carga positiva não está concentrada num núcleo, mas espalhada pela esfera; o núcleo denso só surge com Rutherford.",
      "Está incorreta: o modelo de Thomson não inclui neutrões; as «passas» são os eletrões, que têm carga negativa.",
      "Está incorreta: os fotões e os níveis de energia pertencem ao modelo de Bohr, que é posterior ao de Thomson."
    ],
    "nursingApplication": "Reconhecer que os eletrões fazem parte de todos os átomos ajuda a perceber como a radiação ionizante, ao arrancar eletrões aos átomos dos tecidos, os pode lesar."
  },
  {
    "id": 5003,
    "topicId": 5,
    "question": "Qual foi o primeiro modelo atómico a propor que a carga positiva e quase toda a massa se concentram num núcleo denso, sendo o átomo quase todo vazio?",
    "options": [
      "Dalton: esfera sólida e indivisível, sem espaços vazios.",
      "Thomson: esfera positiva com os eletrões espalhados.",
      "Bohr: eletrões em órbitas com níveis de energia.",
      "Rutherford: núcleo denso e positivo, átomo quase vazio."
    ],
    "correctIndex": 3,
    "explanation": "O modelo de Rutherford (1911) foi o primeiro a colocar a carga positiva num núcleo denso, com os eletrões espalhados à sua volta num átomo quase todo vazio.",
    "distractorAnalysis": [
      "Está incorreta: no modelo de Dalton o átomo é maciço e indivisível, não havendo núcleo nem espaço vazio.",
      "Está incorreta: no modelo de Thomson a carga positiva ocupa toda a esfera, em vez de se concentrar num núcleo.",
      "Está incorreta: o modelo de Bohr veio depois e acrescentou níveis de energia ao átomo nuclear de Rutherford; não foi o primeiro com núcleo."
    ],
    "nursingApplication": "Num serviço de medicina nuclear, o enfermeiro lida com radionuclídeos como o tecnécio-99m, cujo núcleo instável, no centro do átomo, é a origem da radiação emitida."
  },
  {
    "id": 5004,
    "topicId": 5,
    "question": "O hidrogénio, quando excitado, emite luz apenas em frequências bem definidas. Que modelo explica este espectro de emissão ao admitir órbitas com níveis de energia permitidos?",
    "options": [
      "Thomson: eletrões espalhados numa esfera positiva.",
      "Bohr: órbitas com níveis de energia permitidos.",
      "Dalton: esfera sólida e indivisível sem eletrões.",
      "Rutherford: núcleo denso e eletrões à sua volta."
    ],
    "correctIndex": 1,
    "explanation": "O modelo de Bohr (1913) explica o espectro de emissão do hidrogénio: o átomo só emite fotões com energias iguais às diferenças entre níveis permitidos.",
    "distractorAnalysis": [
      "Está incorreta: no modelo de Thomson não há níveis de energia, por isso não prevê frequências de emissão bem definidas.",
      "Está incorreta: o átomo de Dalton é maciço e não tem eletrões nem níveis de energia que permitam explicar o espectro.",
      "Está incorreta: o modelo de Rutherford tem núcleo e eletrões, mas sem níveis de energia permitidos; não explica as frequências discretas."
    ],
    "nursingApplication": "Na formação em proteção radiológica, perceber que os átomos só trocam energia em quantidades bem definidas é a base para compreender a interação da radiação com a matéria."
  },
  {
    "id": 5005,
    "topicId": 5,
    "question": "Um estudante pergunta onde está o eletrão do hidrogénio num dado instante. Segundo o modelo quântico de Schrödinger, o que se pode afirmar?",
    "options": [
      "Está numa órbita circular com raio bem definido, como um planeta.",
      "Está parado num ponto fixo dentro de uma esfera positiva.",
      "Só se pode indicar a região onde é mais provável encontrá-lo.",
      "Encontra-se dentro do núcleo, junto dos protões e neutrões."
    ],
    "correctIndex": 2,
    "explanation": "No modelo de Schrödinger (1926), com Heisenberg, o eletrão é descrito por uma nuvem eletrónica: regiões do espaço onde é mais provável encontrá-lo, e não uma trajetória definida.",
    "distractorAnalysis": [
      "Está incorreta: órbitas circulares bem definidas são características do modelo de Bohr; o modelo quântico é probabilístico.",
      "Está incorreta: a esfera positiva com eletrões espalhados é o modelo de Thomson, e o modelo quântico não descreve o eletrão como parado num ponto fixo.",
      "Está incorreta: no modelo de Schrödinger os eletrões formam uma nuvem à volta do núcleo e não no seu interior, onde estão os nucleões."
    ],
    "nursingApplication": "Esta descrição probabilística dos eletrões é a base dos modelos usados para calcular a interação dos raios X com os tecidos em radiologia."
  },
  {
    "id": 5006,
    "topicId": 5,
    "question": "Em relação ao modelo de Thomson, que alteração introduziu o modelo de Rutherford?",
    "options": [
      "A carga positiva ficou concentrada num núcleo denso.",
      "Os eletrões passaram a ocupar níveis de energia permitidos.",
      "Os eletrões passaram a ser descritos por uma nuvem de probabilidade.",
      "O átomo passou a ser uma esfera sólida e indivisível."
    ],
    "correctIndex": 0,
    "explanation": "Rutherford (1911) substituiu a esfera positiva por um núcleo pequeno, denso e positivo, com o resto do átomo quase vazio e os eletrões espalhados à volta.",
    "distractorAnalysis": [
      "Está incorreta: os níveis de energia permitidos foram introduzidos por Bohr, em 1913.",
      "Está incorreta: a nuvem de probabilidade é do modelo quântico de Schrödinger, em 1926.",
      "Está incorreta: a esfera sólida e indivisível é o modelo de Dalton, anterior ao de Thomson."
    ],
    "nursingApplication": "Quando o enfermeiro lê que um radionuclídeo tem núcleo instável, está a usar a ideia de Rutherford de que a identidade e a radioatividade do átomo estão no seu núcleo."
  },
  {
    "id": 5007,
    "topicId": 5,
    "question": "Que ideia nova acrescentou o modelo de Bohr ao átomo nuclear de Rutherford?",
    "options": [
      "O átomo é quase todo vazio, com um núcleo denso e positivo.",
      "O átomo é uma esfera positiva com eletrões espalhados.",
      "Os eletrões formam uma nuvem de localização probabilística.",
      "Os eletrões ficam em órbitas de energia permitida."
    ],
    "correctIndex": 3,
    "explanation": "Bohr (1913) manteve o núcleo de Rutherford e acrescentou que os eletrões só podem ocupar órbitas com certos níveis de energia, o que explica o espectro do hidrogénio.",
    "distractorAnalysis": [
      "Está incorreta: o núcleo denso e o átomo quase vazio já eram a ideia de Rutherford, não uma novidade de Bohr.",
      "Está incorreta: a esfera positiva com eletrões espalhados é o modelo de Thomson, anterior ao de Rutherford.",
      "Está incorreta: a nuvem de localização provável é do modelo quântico de Schrödinger, posterior ao de Bohr."
    ],
    "nursingApplication": "Perceber que os eletrões só mudam entre níveis de energia bem definidos ajuda o enfermeiro a compreender porque cada processo de absorção ou emissão envolve fotões com energias características."
  },
  {
    "id": 5008,
    "topicId": 5,
    "question": "Que diferença essencial separa o modelo de Schrödinger do modelo de Bohr quanto ao eletrão?",
    "options": [
      "O eletrão passa a poder emitir radiação continuamente numa órbita.",
      "Em vez de órbitas definidas, há regiões de maior probabilidade.",
      "Em vez de níveis de energia, o eletrão passa a ter energia qualquer.",
      "O eletrão passa a estar fixo no núcleo, junto dos nucleões."
    ],
    "correctIndex": 1,
    "explanation": "O modelo de Bohr usa órbitas circulares com níveis de energia; o modelo de Schrödinger, quântico e probabilístico, descreve uma nuvem eletrónica de regiões mais prováveis.",
    "distractorAnalysis": [
      "Está incorreta: a emissão contínua nunca foi postulada por Bohr, que defende que numa órbita estacionária não há emissão; e Schrödinger também não a introduz.",
      "Está incorreta: o modelo quântico mantém a ideia de energia em níveis permitidos; o que muda é a descrição da localização do eletrão.",
      "Está incorreta: os eletrões continuam a existir à volta do núcleo, em nuvem, e não fixos no seu interior."
    ],
    "nursingApplication": "A nuvem eletrónica do modelo quântico é a imagem do átomo usada hoje para descrever como os raios X interagem com os eletrões dos tecidos."
  },
  {
    "id": 5009,
    "topicId": 5,
    "question": "Qual das sequências ordena os modelos atómicos do mais antigo para o mais recente?",
    "options": [
      "Dalton, Thomson, Rutherford, Bohr, Schrödinger",
      "Thomson, Dalton, Rutherford, Bohr, Schrödinger",
      "Dalton, Rutherford, Thomson, Schrödinger, Bohr",
      "Dalton, Thomson, Bohr, Rutherford, Schrödinger"
    ],
    "correctIndex": 0,
    "explanation": "Os modelos surgiram por esta ordem: Dalton (1808), Thomson (1897), Rutherford (1911), Bohr (1913) e Schrödinger (1926), cada um corrigindo limitações do anterior.",
    "distractorAnalysis": [
      "Está incorreta: coloca Thomson antes de Dalton, mas o modelo de Dalton (1808) é anterior ao de Thomson (1897).",
      "Está incorreta: troca Rutherford com Thomson e Schrödinger com Bohr; Thomson (1897) vem antes de Rutherford (1911) e Bohr (1913) antes de Schrödinger (1926).",
      "Está incorreta: coloca Bohr (1913) antes de Rutherford (1911), mas o modelo de Bohr acrescenta níveis de energia ao átomo nuclear que Rutherford já tinha proposto."
    ],
    "nursingApplication": "Saber que o modelo atómico foi sendo refinado por novas observações mostra ao enfermeiro que as bases científicas da proteção radiológica evoluem com a evidência."
  },
  {
    "id": 5010,
    "topicId": 5,
    "question": "No átomo de hidrogénio, um eletrão passa do nível de energia −3,4 eV para o nível de energia −13,6 eV. Qual é a energia do fotão emitido?",
    "options": [
      "17,0 eV",
      "13,6 eV",
      "10,2 eV",
      "3,4 eV"
    ],
    "correctIndex": 2,
    "explanation": "A energia do fotão é igual ao módulo da diferença entre as energias dos dois níveis: |ΔE| = |E<sub>final</sub> − E<sub>inicial</sub>| = h·f.",
    "solution": [
      "Dados: E<sub>inicial</sub> = −3,4 eV; E<sub>final</sub> = −13,6 eV.",
      "Fórmula: |ΔE| = |E<sub>final</sub> − E<sub>inicial</sub>|.",
      "Substituição: |ΔE| = |−13,6 − (−3,4)| = |−10,2|.",
      "Resultado: 10,2 eV",
      "Conclusão: o eletrão desce de nível, por isso há emissão de um fotão com esta energia."
    ],
    "distractorAnalysis": [
      "Está incorreta: somou os módulos das duas energias (3,4 + 13,6) em vez de calcular a diferença.",
      "Está incorreta: tomou apenas a energia do nível final, em vez da diferença entre os dois níveis.",
      "Está incorreta: tomou apenas a energia do nível inicial, em vez da diferença entre os dois níveis."
    ],
    "nursingApplication": "Perceber que a energia de um fotão corresponde à diferença entre dois níveis atómicos ajuda o enfermeiro a interpretar a energia dos fotões usados em imagiologia."
  },
  {
    "id": 5011,
    "topicId": 5,
    "question": "Um átomo absorve um fotão cuja energia é igual à diferença entre dois níveis, ΔE = 3,3 × 10⁻¹⁹ J. Sendo h = 6,63 × 10⁻³⁴ J·s, qual é a frequência do fotão?",
    "options": [
      "4,98 × 10¹⁵ Hz",
      "4,98 × 10¹⁴ Hz",
      "2,01 × 10⁻¹⁵ Hz",
      "2,19 × 10⁻⁵² Hz"
    ],
    "correctIndex": 1,
    "explanation": "Como |ΔE| = h·f, a frequência obtém-se dividindo a energia do fotão por h: f = ΔE / h.",
    "solution": [
      "Dados: ΔE = 3,3 × 10⁻¹⁹ J; h = 6,63 × 10⁻³⁴ J·s.",
      "Fórmula: |ΔE| = h·f, logo f = ΔE / h.",
      "Substituição: f = 3,3 × 10⁻¹⁹ / 6,63 × 10⁻³⁴.",
      "Resultado: 4,98 × 10¹⁴ Hz"
    ],
    "distractorAnalysis": [
      "Está incorreta: erro de uma potência de dez: 3,3/6,63 = 0,498 e 10⁻¹⁹/10⁻³⁴ = 10¹⁵, pelo que o resultado é 0,498 × 10¹⁵ = 4,98 × 10¹⁴, e não 4,98 × 10¹⁵.",
      "Está incorreta: inverteu a divisão (h/ΔE) em vez de ΔE/h.",
      "Está incorreta: multiplicou ΔE por h em vez de dividir."
    ],
    "nursingApplication": "A frequência dos fotões determina a sua energia; o enfermeiro que trabalha com radiações pode assim relacionar maior frequência com maior energia por fotão."
  },
  {
    "id": 5012,
    "topicId": 5,
    "question": "Ao passar de um nível para outro, um eletrão emite um fotão de frequência f = 6,0 × 10¹⁴ Hz. Sendo h = 6,63 × 10⁻³⁴ J·s, qual é a diferença de energia entre os dois níveis?",
    "options": [
      "9,05 × 10⁴⁷ J",
      "1,11 × 10⁻⁴⁸ J",
      "3,98 × 10⁻²⁰ J",
      "3,98 × 10⁻¹⁹ J"
    ],
    "correctIndex": 3,
    "explanation": "A diferença de energia entre os níveis é igual à energia do fotão emitido: |ΔE| = h·f.",
    "solution": [
      "Dados: f = 6,0 × 10¹⁴ Hz; h = 6,63 × 10⁻³⁴ J·s.",
      "Fórmula: |ΔE| = h·f.",
      "Substituição: |ΔE| = 6,63 × 10⁻³⁴ × 6,0 × 10¹⁴.",
      "Resultado: 3,98 × 10⁻¹⁹ J"
    ],
    "distractorAnalysis": [
      "Está incorreta: dividiu f por h em vez de multiplicar.",
      "Está incorreta: dividiu h por f em vez de multiplicar os dois.",
      "Está incorreta: erro de uma potência de dez no produto: 6,63 × 6,0 = 39,8 e 10⁻³⁴ × 10¹⁴ = 10⁻²⁰, ou seja, 39,8 × 10⁻²⁰ = 3,98 × 10⁻¹⁹."
    ],
    "nursingApplication": "A energia de um fotão é proporcional à sua frequência: para o enfermeiro, radiações de maior frequência transportam mais energia por fotão."
  },
  {
    "id": 5013,
    "topicId": 5,
    "question": "Um eletrão sobe do nível de energia −3,4 eV para o nível −1,5 eV ao absorver um fotão. Sabendo que 1 eV = 1,6 × 10⁻¹⁹ J, qual é a energia do fotão em joules?",
    "options": [
      "3,04 × 10⁻¹⁹ J",
      "1,9 × 10⁻¹⁹ J",
      "1,19 × 10⁻¹⁹ J",
      "7,84 × 10⁻¹⁹ J"
    ],
    "correctIndex": 0,
    "explanation": "A energia do fotão absorvido é a diferença entre os níveis, 1,9 eV, que se converte para joules multiplicando por 1,6 × 10⁻¹⁹ J/eV.",
    "solution": [
      "Dados: E<sub>inicial</sub> = −3,4 eV; E<sub>final</sub> = −1,5 eV; 1 eV = 1,6 × 10⁻¹⁹ J.",
      "Fórmula: |ΔE| = |E<sub>final</sub> − E<sub>inicial</sub>|, depois ΔE (J) = ΔE (eV) × 1,6 × 10⁻¹⁹.",
      "Substituição: |ΔE| = |−1,5 − (−3,4)| = 1,9 eV; 1,9 × 1,6 × 10⁻¹⁹.",
      "Resultado: 3,04 × 10⁻¹⁹ J"
    ],
    "distractorAnalysis": [
      "Está incorreta: calculou 1,9 eV mas não converteu para joules.",
      "Está incorreta: dividiu 1,9 por 1,6 (mantendo 10⁻¹⁹) em vez de multiplicar a diferença em eV pelo fator de conversão.",
      "Está incorreta: somou os módulos dos níveis (3,4 + 1,5 = 4,9 eV) em vez de calcular a diferença."
    ],
    "nursingApplication": "Em física das radiações usam-se joules e eletrão-volts: o enfermeiro que consulta a ficha de um equipamento pode converter entre as duas unidades."
  },
  {
    "id": 5014,
    "topicId": 5,
    "question": "Um eletrão permanece durante muito tempo no mesmo nível de energia de um átomo. Segundo Bohr, o que acontece à radiação enquanto ele ali estiver?",
    "options": [
      "Emite radiação continuamente e perde energia aos poucos.",
      "Nem emite nem absorve radiação enquanto ali estiver.",
      "Absorve radiação continuamente e ganha energia aos poucos.",
      "Emite e absorve radiação alternadamente em cada volta."
    ],
    "correctIndex": 1,
    "explanation": "Nas órbitas estacionárias o eletrão não emite nem absorve radiação; só há troca de radiação quando muda de nível.",
    "distractorAnalysis": [
      "Está incorreta: se o eletrão emitisse continuamente perderia energia e cairia no núcleo; Bohr postula que em órbita estacionária não emite.",
      "Está incorreta: a absorção só ocorre quando o eletrão sobe de nível, não de forma contínua dentro de uma órbita estacionária.",
      "Está incorreta: não há emissão nem absorção por volta; a troca de fotões ocorre apenas nos saltos entre níveis."
    ],
    "nursingApplication": "Num serviço de radiologia, a ideia de que os átomos só trocam energia nos saltos entre níveis ajuda a perceber porque os fotões têm energias bem definidas."
  },
  {
    "id": 5015,
    "topicId": 5,
    "question": "Num átomo, o eletrão A ocupa a órbita mais próxima do núcleo e o eletrão B uma órbita mais afastada. Qual é a afirmação correta quanto aos níveis de energia?",
    "options": [
      "A tem energia mais elevada, por estar mais perto do núcleo.",
      "A e B têm a mesma energia, por serem do mesmo átomo.",
      "B tem energia mais baixa, por ter emitido mais radiação.",
      "B tem energia mais elevada, por estar mais longe do núcleo."
    ],
    "correctIndex": 3,
    "explanation": "Segundo Bohr, as órbitas privilegiadas correspondem a níveis de energia tanto mais elevados quanto mais afastados do núcleo.",
    "distractorAnalysis": [
      "Está incorreta: inverteu a relação; a energia do nível aumenta com a distância ao núcleo, não com a proximidade.",
      "Está incorreta: cada órbita permitida tem um nível de energia próprio, por isso eletrões em órbitas diferentes têm energias diferentes.",
      "Está incorreta: emitir radiação faz o eletrão descer de nível, e não o afasta do núcleo; o nível mais afastado é o de maior energia."
    ],
    "nursingApplication": "Saber que os eletrões mais afastados do núcleo estão em níveis de maior energia ajuda a perceber porque são estes os mais facilmente arrancados pela radiação ionizante."
  },
  {
    "id": 5016,
    "topicId": 5,
    "question": "Um eletrão salta do nível de energia 3 para o nível 1 de um átomo. O que acontece?",
    "options": [
      "Absorve um fotão com energia igual à diferença entre os dois níveis.",
      "Emite um fotão com energia igual à do nível 3.",
      "Emite um fotão com energia igual à diferença entre os dois níveis.",
      "Absorve um fotão com energia igual à do nível 1."
    ],
    "correctIndex": 2,
    "explanation": "Ao descer para um nível de menor energia o eletrão emite um fotão, cuja energia h·f é igual ao módulo da diferença entre os níveis.",
    "distractorAnalysis": [
      "Está incorreta: a absorção ocorre quando o eletrão sobe de nível; aqui ele desce.",
      "Está incorreta: a energia do fotão corresponde à diferença entre os dois níveis, e não à energia de um só deles.",
      "Está incorreta: o eletrão desce, logo emite; além disso a energia do fotão é a diferença entre níveis e não a energia do nível 1."
    ],
    "nursingApplication": "Na cintigrafia e noutras técnicas, a radiação detetada resulta da emissão de fotões quando um sistema passa para um estado de menor energia."
  },
  {
    "id": 5017,
    "topicId": 5,
    "question": "Que condição tem de cumprir um fotão para fazer um eletrão subir de um nível de energia para outro?",
    "options": [
      "A sua energia h·f tem de ser igual à diferença entre os dois níveis.",
      "A sua energia tem de ser igual à energia do nível final do eletrão.",
      "Qualquer fotão serve, desde que a sua energia seja superior à do nível inicial.",
      "A sua frequência tem de ser igual à da órbita onde o eletrão está."
    ],
    "correctIndex": 0,
    "explanation": "Para absorver um fotão e subir de nível, o eletrão precisa que h·f coincida com a diferença de energia entre os dois estados estacionários.",
    "distractorAnalysis": [
      "Está incorreta: o que conta é a diferença entre os dois níveis, e não a energia do nível final.",
      "Está incorreta: o eletrão não absorve qualquer fotão; só absorve aqueles cuja energia corresponde exatamente a um salto permitido.",
      "Está incorreta: as órbitas não têm uma frequência própria que determine a absorção; a condição é sobre a energia h·f do fotão."
    ],
    "nursingApplication": "Este princípio explica porque cada elemento absorve e emite luz apenas em frequências características, base da análise espetral usada em laboratório."
  },
  {
    "id": 5018,
    "topicId": 5,
    "question": "Qual das seguintes afirmações NÃO faz parte dos postulados de Bohr?",
    "options": [
      "As órbitas mais afastadas do núcleo têm energia mais elevada.",
      "Em órbitas estacionárias o eletrão não emite nem absorve radiação.",
      "A energia do fotão depende da massa do eletrão, e não dos níveis.",
      "O eletrão pode saltar de um estado estacionário para outro."
    ],
    "correctIndex": 2,
    "explanation": "Nos postulados de Bohr, a energia do fotão emitido ou absorvido é h·f = |ΔE|, a diferença entre os dois níveis envolvidos, e não depende da massa do eletrão.",
    "distractorAnalysis": [
      "Está incorreta: esta afirmação faz parte dos postulados de Bohr, por isso não é a pedida.",
      "Está incorreta: esta afirmação faz parte dos postulados de Bohr, por isso não é a pedida.",
      "Está incorreta: esta afirmação faz parte dos postulados de Bohr, por isso não é a pedida."
    ],
    "nursingApplication": "Interpretar corretamente uma explicação sobre fotões e níveis de energia evita confundir o que determina a energia da radiação usada em exames de imagem."
  },
  {
    "id": 5019,
    "topicId": 5,
    "question": "O núcleo de um átomo é formado por partículas fixas e pesadas. Que partículas são e como se designam em conjunto?",
    "options": [
      "Eletrões e protões, designados nucleões.",
      "Neutrões e eletrões, designados nucleões.",
      "Eletrões orbitais, designados nucleões.",
      "Protões e neutrões, designados nucleões."
    ],
    "correctIndex": 3,
    "explanation": "O núcleo contém protões e neutrões, que em conjunto se chamam nucleões; os eletrões orbitais são partículas móveis que giram à sua volta.",
    "distractorAnalysis": [
      "Está incorreta: os eletrões não fazem parte do núcleo; ocupam orbitais à sua volta.",
      "Está incorreta: o núcleo não contém eletrões; é formado por protões e neutrões.",
      "Está incorreta: os eletrões orbitais ocupam orbitais fora do núcleo e não são nucleões."
    ],
    "nursingApplication": "Quando se diz que um radionuclídeo tem um núcleo instável, o enfermeiro sabe que a instabilidade está nos nucleões (protões e neutrões) e não nos eletrões orbitais."
  },
  {
    "id": 5020,
    "topicId": 5,
    "question": "Um átomo neutro tem 15 eletrões orbitais. Que carga total tem o seu núcleo, em unidades da carga do protão?",
    "options": [
      "−15, igual à dos eletrões orbitais.",
      "+15, de sinal contrário à dos eletrões.",
      "0, porque o átomo é neutro.",
      "+1, que é a carga de um protão."
    ],
    "correctIndex": 1,
    "explanation": "No átomo neutro o número de protões é igual ao de eletrões; a carga positiva do núcleo é igual e de sinal contrário à soma das cargas dos eletrões.",
    "solution": [
      "Dados: 15 eletrões; átomo neutro.",
      "Fórmula: n.º de protões = n.º de eletrões; carga do núcleo = n.º de protões × (+1).",
      "Substituição: carga do núcleo = 15 × (+1).",
      "Resultado: +15, de sinal contrário à dos eletrões."
    ],
    "distractorAnalysis": [
      "Está incorreta: o núcleo contém protões (+1) e neutrões (0), pelo que a sua carga é positiva; a carga negativa é a dos eletrões.",
      "Está incorreta: o átomo é neutro como um todo, mas o núcleo, isolado, tem carga positiva igual ao número de protões.",
      "Está incorreta: +1 é a carga de um só protão; o núcleo tem tantos protões quantos eletrões, ou seja, 15."
    ],
    "nursingApplication": "Ao falar de radiação ionizante, o enfermeiro lembra que o átomo neutro só fica carregado quando ganha ou perde eletrões, e não protões."
  },
  {
    "id": 5021,
    "topicId": 5,
    "question": "Uma partícula tem 12 protões, 12 neutrões e 10 eletrões. Qual é a sua carga total, em unidades da carga do protão?",
    "options": [
      "+2, ião positivo",
      "−2, ião negativo",
      "+22, ião positivo",
      "0, átomo neutro"
    ],
    "correctIndex": 0,
    "explanation": "Cada protão contribui com +1, cada eletrão com −1 e os neutrões com 0. A carga total é 12 − 10 = +2.",
    "solution": [
      "Dados: 12 protões (+1 cada); 12 neutrões (0); 10 eletrões (−1 cada).",
      "Fórmula: carga total = n.º de protões − n.º de eletrões.",
      "Substituição: carga total = 12 − 10.",
      "Resultado: +2, ião positivo"
    ],
    "distractorAnalysis": [
      "Está incorreta: trocou o sinal da diferença; há mais protões do que eletrões, por isso a carga é positiva.",
      "Está incorreta: somou os protões e os eletrões (12 + 10) em vez de subtrair as cargas de sinal contrário.",
      "Está incorreta: só haveria neutralidade se o número de eletrões fosse igual ao de protões, o que aqui não acontece."
    ],
    "nursingApplication": "A carga de uma partícula determina como interage com campos elétricos; o enfermeiro encontra esta ideia, por exemplo, ao ouvir falar de iões em soluções."
  },
  {
    "id": 5022,
    "topicId": 5,
    "question": "Um átomo neutro com 8 protões recebe 2 eletrões. Que carga passa a ter, em unidades da carga do protão?",
    "options": [
      "+2, ião positivo",
      "0, átomo neutro",
      "−2, ião negativo",
      "−10, ião negativo"
    ],
    "correctIndex": 2,
    "explanation": "O átomo neutro tinha 8 eletrões; ao receber 2 fica com 10 eletrões e continua com 8 protões, pelo que a carga é 8 − 10 = −2.",
    "solution": [
      "Dados: 8 protões; átomo neutro, logo 8 eletrões; recebe 2 eletrões.",
      "Fórmula: carga total = n.º de protões − n.º de eletrões.",
      "Substituição: n.º de eletrões = 8 + 2 = 10; carga = 8 − 10.",
      "Resultado: −2, ião negativo"
    ],
    "distractorAnalysis": [
      "Está incorreta: trocou o sinal; ganhar eletrões, que são negativos, torna o átomo negativo e não positivo.",
      "Está incorreta: o átomo só é neutro quando o número de eletrões é igual ao de protões, e agora tem mais 2 eletrões.",
      "Está incorreta: contou apenas os 10 eletrões e esqueceu a carga positiva dos 8 protões."
    ],
    "nursingApplication": "Compreender que um átomo ganha ou perde carga ao ganhar ou perder eletrões ajuda o enfermeiro a perceber o que é a ionização provocada por radiação nos tecidos."
  },
  {
    "id": 5023,
    "topicId": 5,
    "question": "Onde está concentrada quase toda a massa de um átomo e porquê?",
    "options": [
      "Nas orbitais, porque os eletrões se movem a grande velocidade.",
      "No núcleo, porque os nucleões são muito mais pesados do que os eletrões.",
      "Nas orbitais, porque os eletrões são mais numerosos do que os nucleões.",
      "Distribuída por igual entre o núcleo e as orbitais."
    ],
    "correctIndex": 1,
    "explanation": "Cada protão e cada neutrão tem cerca de 1 u.m.a., enquanto um eletrão tem ≈ 1/1840 u.m.a.; por isso o núcleo concentra quase toda a massa do átomo.",
    "distractorAnalysis": [
      "Está incorreta: a velocidade dos eletrões não lhes dá massa; a sua massa é muito pequena (≈ 1/1840 u.m.a.).",
      "Está incorreta: o número de eletrões é igual ao de protões e, de qualquer modo, cada eletrão tem massa mínima comparada com um nucleão.",
      "Está incorreta: a massa dos eletrões é desprezável face à dos nucleões, pelo que a distribuição não é igual."
    ],
    "nursingApplication": "Ao manusear uma fonte radioativa selada num serviço de saúde, o enfermeiro lida com matéria cuja massa está praticamente toda nos núcleos dos átomos."
  },
  {
    "id": 5024,
    "topicId": 5,
    "question": "Porque é que um átomo, no seu conjunto, é eletricamente neutro?",
    "options": [
      "Porque os neutrões, sem carga, anulam a carga dos protões.",
      "Porque os eletrões orbitais se anulam entre si por repulsão.",
      "Porque só o núcleo tem carga e os eletrões são neutros.",
      "Porque a carga positiva do núcleo anula a carga negativa dos eletrões."
    ],
    "correctIndex": 3,
    "explanation": "No átomo neutro o número de protões é igual ao de eletrões, pelo que a carga positiva do núcleo é igual e de sinal contrário à soma das cargas dos eletrões.",
    "distractorAnalysis": [
      "Está incorreta: o neutrão não tem carga e, por isso, não pode anular a carga dos protões.",
      "Está incorreta: a repulsão entre eletrões não os anula; o que compensa a carga negativa é a carga positiva dos protões.",
      "Está incorreta: os eletrões têm carga −1; é a soma dessa carga com a dos protões que dá zero."
    ],
    "nursingApplication": "O enfermeiro que ouve falar de «radiação ionizante» pode recordar que ionizar é desfazer a neutralidade do átomo, arrancando-lhe eletrões."
  },
  {
    "id": 5025,
    "topicId": 5,
    "question": "Um átomo neutro tem 6 protões, 6 neutrões e 6 eletrões. Qual é a sua carga total, em unidades da carga do protão?",
    "options": [
      "0, as cargas anulam-se",
      "+6, só conta os protões",
      "+12, conta protões e neutrões",
      "−6, só conta os eletrões"
    ],
    "correctIndex": 0,
    "explanation": "Os protões contribuem com +6, os neutrões com 0 e os eletrões com −6: a soma é zero e o átomo é neutro.",
    "solution": [
      "Dados: 6 protões (+1 cada); 6 neutrões (0); 6 eletrões (−1 cada).",
      "Fórmula: carga total = (+1) × n.º de protões + 0 × n.º de neutrões + (−1) × n.º de eletrões.",
      "Substituição: carga total = (+1) × 6 + 0 × 6 + (−1) × 6.",
      "Resultado: 0, as cargas anulam-se"
    ],
    "distractorAnalysis": [
      "Está incorreta: considerou só a carga dos protões e esqueceu a dos eletrões.",
      "Está incorreta: tratou os neutrões como se tivessem carga +1, mas o neutrão não tem carga.",
      "Está incorreta: considerou só a carga dos eletrões e esqueceu a dos protões."
    ],
    "nursingApplication": "Num átomo neutro de um radionuclídeo usado em diagnóstico, a carga total é nula; só após a ionização, por exemplo, surgem iões nos tecidos."
  },
  {
    "id": 5026,
    "topicId": 5,
    "question": "Um neutrão é acrescentado ao núcleo de um átomo neutro, que mantém o mesmo número de eletrões. O que acontece à carga total do átomo?",
    "options": [
      "Fica negativa, porque o neutrão atrai um eletrão adicional.",
      "Fica positiva, porque o núcleo passa a ter mais massa.",
      "Mantém-se nula, porque o neutrão não tem carga elétrica.",
      "Fica positiva, porque o neutrão conta como nucleão com carga +1."
    ],
    "correctIndex": 2,
    "explanation": "O neutrão não tem carga elétrica, por isso acrescentá-lo ao núcleo muda a massa mas não altera a carga do átomo, que continua nula.",
    "distractorAnalysis": [
      "Está incorreta: o neutrão não tem carga e não atrai eletrões; a carga do átomo mantém-se nula.",
      "Está incorreta: a carga não depende da massa do núcleo, mas só do número de protões e de eletrões.",
      "Está incorreta: confunde nucleão com protão; só o protão tem carga +1, o neutrão tem carga 0."
    ],
    "nursingApplication": "Ao ler que dois nuclídeos diferem apenas no número de neutrões, o enfermeiro sabe que ambos continuam com a mesma carga elétrica total quando neutros."
  },
  {
    "id": 5027,
    "topicId": 5,
    "question": "Considere um protão e um neutrão, cada um isolado, fora de qualquer núcleo. Qual das afirmações é correta?",
    "options": [
      "Ambos são estáveis quando livres.",
      "Ambos são radioativos quando livres.",
      "O neutrão livre é estável e o protão livre é radioativo.",
      "O protão livre é estável e o neutrão livre é radioativo."
    ],
    "correctIndex": 3,
    "explanation": "Quando livre, o protão é estável, enquanto o neutrão livre é radioativo e desintegra-se espontaneamente.",
    "distractorAnalysis": [
      "Está incorreta: o neutrão livre não é estável; desintegra-se espontaneamente.",
      "Está incorreta: o protão livre é estável, apesar de poder transformar-se em certas condições energéticas.",
      "Está incorreta: inverteu os papéis; o estável é o protão e o radioativo é o neutrão."
    ],
    "nursingApplication": "Ao falar de radionuclídeos, o enfermeiro lembra que a radioatividade é uma propriedade de certos núcleos instáveis, e não de todas as partículas nucleares."
  },
  {
    "id": 5028,
    "topicId": 5,
    "question": "Um neutrão é libertado de um núcleo e fica isolado. O que lhe acontece espontaneamente?",
    "options": [
      "Desintegra-se num protão, num eletrão e num antineutrino.",
      "Mantém-se estável, por não ter carga elétrica.",
      "Transforma-se num neutrão e num positrão.",
      "Desintegra-se num protão, num positrão e num neutrino."
    ],
    "correctIndex": 0,
    "explanation": "O neutrão livre é radioativo: desintegra-se espontaneamente em protão, eletrão (negativo) e antineutrino.",
    "distractorAnalysis": [
      "Está incorreta: a ausência de carga não torna o neutrão estável; no estado livre é radioativo.",
      "Está incorreta: a transformação em neutrão e positrão é a que pode ocorrer a um protão, e não a um neutrão.",
      "Está incorreta: o neutrão origina um eletrão negativo (e um antineutrino), e não um positrão."
    ],
    "nursingApplication": "Na formação em proteção radiológica, perceber que partículas nucleares podem transformar-se explica porque certos núcleos emitem radiação."
  },
  {
    "id": 5029,
    "topicId": 5,
    "question": "Que partícula tem carga +1, massa próxima de 1 u.m.a. e encontra-se no núcleo do átomo?",
    "options": [
      "Eletrão",
      "Neutrão",
      "Protão",
      "Positrão"
    ],
    "correctIndex": 2,
    "explanation": "O protão tem carga +1 e massa ≈ 1 u.m.a. e localiza-se no núcleo; o neutrão tem a mesma massa mas não tem carga, e o eletrão tem carga −1 e massa ≈ 1/1840 u.m.a.",
    "distractorAnalysis": [
      "Está incorreta: o eletrão tem carga −1, massa ≈ 1/1840 u.m.a. e ocupa orbitais fora do núcleo.",
      "Está incorreta: o neutrão está no núcleo e tem massa ≈ 1 u.m.a., mas a sua carga é nula.",
      "Está incorreta: o positrão é um eletrão positivo, de massa muito pequena, e não é constituinte do núcleo atómico."
    ],
    "nursingApplication": "O iodo-131 usado em doenças da tiroide e o flúor-18 usado em PET diferem pelo número de protões; saber identificar o protão como partícula nuclear positiva é o ponto de partida."
  },
  {
    "id": 5030,
    "topicId": 5,
    "question": "Que tipo de forças mantém os eletrões ligados ao núcleo do átomo?",
    "options": [
      "Forças gravitacionais, devido à grande massa do núcleo.",
      "Forças eletromagnéticas, num campo elétrico atrativo do núcleo.",
      "Forças elétricas repulsivas, que empurram os eletrões para as órbitas.",
      "Forças nucleares, de curto alcance e independentes da carga."
    ],
    "correctIndex": 1,
    "explanation": "Os eletrões estão ligados ao núcleo por forças de interação eletromagnética: o núcleo, positivo, exerce um campo elétrico atrativo sobre os eletrões negativos.",
    "distractorAnalysis": [
      "Está incorreta: a atração gravítica entre o núcleo e um eletrão é desprezável face à atração elétrica entre cargas de sinal contrário.",
      "Está incorreta: entre o núcleo positivo e os eletrões negativos a força é atrativa, e não repulsiva.",
      "Está incorreta: as forças nucleares atuam entre nucleões, a distâncias muito curtas, e não ligam os eletrões orbitais ao núcleo."
    ],
    "nursingApplication": "O enfermeiro que ouve falar de ionização pode relacionar a energia necessária para arrancar um eletrão com a atração elétrica que o liga ao núcleo."
  },
  {
    "id": 5031,
    "topicId": 5,
    "question": "Um eletrão tem massa de 9,1 × 10⁻³¹ kg. Sabendo que a massa de um protão é cerca de 1840 vezes a do eletrão, qual é a massa aproximada do protão?",
    "options": [
      "4,95 × 10⁻³⁴ kg",
      "1,67 × 10⁻²⁷ kg",
      "1,67 × 10⁻²⁸ kg",
      "1,67 × 10⁻²⁶ kg"
    ],
    "correctIndex": 1,
    "explanation": "Como a massa do protão é cerca de 1840 vezes a do eletrão, multiplica-se a massa do eletrão por 1840.",
    "solution": [
      "Dados: m<sub>eletrão</sub> = 9,1 × 10⁻³¹ kg; m<sub>protão</sub> ≈ 1840 × m<sub>eletrão</sub>.",
      "Fórmula: m<sub>protão</sub> = 1840 × m<sub>eletrão</sub>.",
      "Substituição: m<sub>protão</sub> = 1840 × 9,1 × 10⁻³¹.",
      "Resultado: 1,67 × 10⁻²⁷ kg"
    ],
    "distractorAnalysis": [
      "Está incorreta: dividiu a massa do eletrão por 1840 em vez de a multiplicar.",
      "Está incorreta: erro de uma potência de dez; o resultado correto é dez vezes maior.",
      "Está incorreta: erro de uma potência de dez; o resultado correto é dez vezes menor."
    ],
    "nursingApplication": "A massa de um núcleo é muito superior à dos eletrões; para o enfermeiro, isto significa que a massa de um radionuclídeo é praticamente a do seu núcleo."
  },
  {
    "id": 5032,
    "topicId": 5,
    "question": "Aproximadamente quantos eletrões são necessários para igualar a massa de 3 protões, sabendo que a massa de um protão é cerca de 1840 vezes a do eletrão?",
    "options": [
      "613",
      "1843",
      "1840",
      "5520"
    ],
    "correctIndex": 3,
    "explanation": "Cada protão equivale a cerca de 1840 eletrões em massa; para 3 protões multiplica-se por 3: 3 × 1840 = 5520.",
    "solution": [
      "Dados: m<sub>protão</sub> ≈ 1840 × m<sub>eletrão</sub>; 3 protões.",
      "Fórmula: n.º de eletrões = 3 × 1840.",
      "Substituição: n.º de eletrões = 3 × 1840.",
      "Resultado: 5520"
    ],
    "distractorAnalysis": [
      "Está incorreta: dividiu 1840 por 3 em vez de multiplicar (1840 / 3 ≈ 613).",
      "Está incorreta: somou 3 a 1840 em vez de multiplicar por 3.",
      "Está incorreta: este valor corresponde a um só protão; esqueceu o fator 3."
    ],
    "nursingApplication": "Ordenar de grandeza a massa de um átomo (nucleões) face aos seus eletrões ajuda o enfermeiro a perceber porque a massa do átomo se atribui quase só ao núcleo."
  },
  {
    "id": 5033,
    "topicId": 5,
    "question": "Ao comparar as massas das partículas de um átomo, qual das conclusões é correta?",
    "options": [
      "O eletrão tem massa semelhante à do protão.",
      "O neutrão tem massa muito menor do que a do protão.",
      "Protão e neutrão têm massas próximas, muito superiores à do eletrão.",
      "O eletrão tem massa próxima de 1 u.m.a., como o neutrão."
    ],
    "correctIndex": 2,
    "explanation": "O protão e o neutrão têm massa próxima de 1 u.m.a. cada, enquanto o eletrão tem ≈ 1/1840 u.m.a.",
    "distractorAnalysis": [
      "Está incorreta: o protão tem massa cerca de 1840 vezes a do eletrão.",
      "Está incorreta: o neutrão e o protão têm massas próximas, ambas de cerca de 1 u.m.a.",
      "Está incorreta: a massa do eletrão é ≈ 1/1840 u.m.a., e não 1 u.m.a."
    ],
    "nursingApplication": "Quando um radionuclídeo é descrito pelo seu número de massa, o enfermeiro pode lembrar que são os nucleões que determinam a massa do átomo."
  },
  {
    "id": 5034,
    "topicId": 5,
    "question": "Em certas condições energéticas, um protão pode transformar-se. Em que partículas?",
    "options": [
      "Num neutrão e num positrão (eletrão positivo).",
      "Num neutrão e num eletrão negativo.",
      "Num protão, num eletrão e num antineutrino.",
      "Num eletrão e num positrão."
    ],
    "correctIndex": 0,
    "explanation": "Em certas condições energéticas, o protão pode transformar-se num neutrão e num positrão (eletrão positivo).",
    "distractorAnalysis": [
      "Está incorreta: o protão positivo não pode dar um eletrão negativo; a carga positiva é conservada com a emissão do positrão.",
      "Está incorreta: essa é a desintegração do neutrão livre e não a transformação do protão.",
      "Está incorreta: o protão transforma-se num neutrão e num positrão; não desaparece em duas partículas leves."
    ],
    "nursingApplication": "Esta transformação de um protão em neutrão com emissão de um positrão é a que ocorre no decaimento β⁺ do flúor-18, usado em PET."
  },
  {
    "id": 5035,
    "topicId": 5,
    "question": "Qual das afirmações sobre o eletrão NÃO é correta?",
    "options": [
      "É uma partícula móvel que gira à volta do núcleo.",
      "Faz parte do núcleo, onde se liga aos neutrões.",
      "Tem carga negativa e massa muito pequena.",
      "Liga-se ao núcleo por forças eletromagnéticas."
    ],
    "correctIndex": 1,
    "explanation": "Os eletrões são partículas móveis, de carga negativa e massa muito pequena, que ocupam orbitais à volta do núcleo, ligados a ele por forças eletromagnéticas; não fazem parte do núcleo.",
    "distractorAnalysis": [
      "Está incorreta: esta afirmação é correta (o eletrão é móvel e orbita o núcleo), por isso não é a pedida.",
      "Está incorreta: esta afirmação é correta (carga −1 e massa ≈ 1/1840 u.m.a.), por isso não é a pedida.",
      "Está incorreta: esta afirmação é correta (o núcleo exerce um campo elétrico atrativo), por isso não é a pedida."
    ],
    "nursingApplication": "Distinguir o que pertence ao núcleo e o que pertence às orbitais ajuda o enfermeiro a compreender que a radiação ionizante arranca eletrões, mas a radioatividade tem origem no núcleo."
  },
  {
    "id": 5036,
    "topicId": 5,
    "question": "Para arrancar um eletrão da sua camada e levá-lo a uma distância infinita do núcleo, sem energia cinética, é preciso fornecer uma certa energia. Como se designa?",
    "options": [
      "Energia do fotão emitido (h·f)",
      "Energia cinética do eletrão orbital",
      "Energia de ligação do eletrão",
      "Energia de repulsão entre protões"
    ],
    "correctIndex": 2,
    "explanation": "A energia necessária para arrancar um eletrão à sua camada, levando-o ao infinito sem energia cinética, é a energia de ligação do eletrão.",
    "distractorAnalysis": [
      "Está incorreta: h·f é a energia de um fotão e corresponde à diferença entre dois níveis, e não à energia necessária para remover o eletrão do átomo.",
      "Está incorreta: a energia cinética é a que o eletrão tem por estar em movimento, e não a energia necessária para o libertar.",
      "Está incorreta: a repulsão entre protões é uma interação do núcleo e não está relacionada com a ligação do eletrão ao núcleo."
    ],
    "nursingApplication": "O conceito de energia de ligação do eletrão é a base para compreender a ionização dos átomos dos tecidos por radiações com energia suficiente."
  },
  {
    "id": 5037,
    "topicId": 5,
    "question": "Porque é necessário fornecer energia para arrancar um eletrão a um átomo?",
    "options": [
      "Porque o campo elétrico do núcleo atrai o eletrão, que está ligado a ele.",
      "Porque os neutrões exercem sobre ele forças nucleares atrativas.",
      "Porque a gravidade do núcleo prende o eletrão à sua órbita.",
      "Porque o eletrão tem massa semelhante à do núcleo."
    ],
    "correctIndex": 0,
    "explanation": "O núcleo exerce sobre o eletrão um campo elétrico atrativo; para o levar até uma distância infinita é preciso realizar trabalho contra essa atração, ou seja, fornecer a energia de ligação.",
    "distractorAnalysis": [
      "Está incorreta: as forças nucleares atuam entre nucleões, a muito curta distância; não prendem os eletrões orbitais.",
      "Está incorreta: a atração gravítica é desprezável; o eletrão está ligado por forças eletromagnéticas.",
      "Está incorreta: a massa do eletrão é cerca de 1840 vezes menor do que a de um protão; o que o prende é a atração elétrica."
    ],
    "nursingApplication": "Saber que há energia de ligação a vencer ajuda o enfermeiro a perceber porque só radiações com energia suficiente ionizam os tecidos."
  },
  {
    "id": 5038,
    "topicId": 5,
    "question": "Um fotão fornece a um eletrão exatamente a sua energia de ligação. Como termina o processo?",
    "options": [
      "O eletrão salta para o nível de energia seguinte do átomo.",
      "O eletrão mantém-se na órbita, com energia cinética nula.",
      "O eletrão sai do átomo com grande energia cinética.",
      "O eletrão fica a distância infinita do núcleo, sem energia cinética."
    ],
    "correctIndex": 3,
    "explanation": "A energia de ligação é a necessária para levar o eletrão ao infinito sem energia cinética; fornecendo exatamente essa energia, o eletrão é arrancado e fica sem energia cinética.",
    "distractorAnalysis": [
      "Está incorreta: o salto para o nível seguinte exige uma energia igual à diferença entre níveis, e menor do que a energia de ligação.",
      "Está incorreta: a energia fornecida é suficiente para o libertar do átomo; ele não fica na órbita.",
      "Está incorreta: toda a energia fornecida é gasta a vencer a atração do núcleo, pelo que não resta energia cinética."
    ],
    "nursingApplication": "Em radiações ionizantes, a energia dos fotões usados deve ser comparada com a energia de ligação dos eletrões, que determina se há ionização."
  },
  {
    "id": 5039,
    "topicId": 5,
    "question": "Num átomo neutro, uma radiação transfere a um eletrão energia suficiente para o arrancar. Que carga fica o átomo, em unidades da carga do protão?",
    "options": [
      "Neutra, porque o número de protões se manteve.",
      "Positiva, +1, porque ficou com um eletrão a menos.",
      "Negativa, −1, porque o átomo ganhou energia.",
      "Positiva, +1, porque o núcleo ganhou um protão."
    ],
    "correctIndex": 1,
    "explanation": "Ao arrancar um eletrão, o átomo fica com um eletrão a menos do que protões, tornando-se um ião positivo: é a ionização.",
    "distractorAnalysis": [
      "Está incorreta: a carga depende do número de protões e de eletrões; ao perder um eletrão deixa de haver igualdade.",
      "Está incorreta: ganhar energia não torna o átomo negativo; a carga negativa viria de ganhar eletrões, e aqui perdeu um.",
      "Está incorreta: o número de protões não muda; a carga é +1 porque falta um eletrão."
    ],
    "nursingApplication": "A ionização dos átomos dos tecidos por radiação com energia suficiente é a razão pela qual o enfermeiro aplica os princípios de proteção radiológica."
  },
  {
    "id": 5040,
    "topicId": 5,
    "question": "Num átomo, o eletrão X ocupa a camada mais próxima do núcleo e o eletrão Y uma camada mais afastada. Qual deles precisa de mais energia para ser arrancado?",
    "options": [
      "Y, porque tem de percorrer maior distância até ao infinito.",
      "Os dois precisam da mesma energia, por irem ambos para o infinito.",
      "Y, porque está num nível de energia mais elevado.",
      "X, porque o núcleo o atrai com mais força."
    ],
    "correctIndex": 3,
    "explanation": "Quanto mais perto do núcleo, mais forte é a atração elétrica e maior é a energia de ligação; o eletrão de nível mais elevado e mais afastado está menos ligado.",
    "distractorAnalysis": [
      "Está incorreta: o caminho percorrido não é o que determina a energia; o que conta é a força de atração do núcleo, que é menor para o eletrão afastado.",
      "Está incorreta: o ponto final é o mesmo, mas a ligação inicial é diferente, pelo que as energias de ligação são diferentes.",
      "Está incorreta: o nível mais elevado corresponde a um eletrão menos ligado, por isso precisa de menos energia para ser arrancado."
    ],
    "nursingApplication": "Em radiações ionizantes, perceber que os eletrões internos são mais fortemente ligados ajuda a compreender porque a energia da radiação condiciona os seus efeitos sobre os átomos."
  },
  {
    "id": 5041,
    "topicId": 5,
    "question": "Um estudante ordena os elementos do quadro periódico por ordem crescente. Que grandeza do núcleo corresponde ao número de ordem de cada elemento?",
    "options": [
      "O número de massa A, que conta protões e neutrões.",
      "O número de neutrões N, que cresce com a massa.",
      "O número atómico Z, que é o número de protões.",
      "A massa do átomo em u.m.a., que é um valor decimal."
    ],
    "correctIndex": 2,
    "explanation": "O número atómico Z é o número de ordem do elemento no quadro periódico e corresponde ao número de protões do núcleo. É sempre um número inteiro.",
    "distractorAnalysis": [
      "Está incorreta: A conta nucleões e pode ser igual em elementos diferentes, por isso não serve de número de ordem.",
      "Está incorreta: N varia entre isótopos do mesmo elemento, por isso não identifica a posição no quadro periódico.",
      "Está incorreta: o número de ordem é um número inteiro, o número atómico, e não a massa do átomo."
    ],
    "nursingApplication": "Ao consultar o quadro periódico, o enfermeiro identifica o iodo pelo número atómico Z = 53, o elemento dos radiofármacos usados em doenças da tiroide."
  },
  {
    "id": 5042,
    "topicId": 5,
    "question": "No rótulo de um radiofármaco lê-se «gálio-67». O que representa o número 67 neste nome?",
    "options": [
      "O número de massa A: protões mais neutrões.",
      "O número de neutrões do núcleo, N.",
      "O número atómico Z, igual ao de protões.",
      "A massa exata do átomo, expressa em gramas."
    ],
    "correctIndex": 0,
    "explanation": "O número que acompanha o nome do elemento é o número de massa A, isto é, o número de nucleões (protões e neutrões) do núcleo.",
    "distractorAnalysis": [
      "Está incorreta: o número de neutrões obtém-se por N = A − Z; o 67 inclui também os protões.",
      "Está incorreta: Z identifica o elemento (31 no gálio) e não aparece no nome; o 67 é o número de massa.",
      "Está incorreta: o número de massa é um número inteiro sem unidades, apenas aproximadamente igual à massa em u.m.a."
    ],
    "nursingApplication": "Ao ler «gálio-67» no rótulo de um radiofármaco, o enfermeiro identifica o elemento (gálio) e o número de massa (67) do nuclídeo em causa."
  },
  {
    "id": 5043,
    "topicId": 5,
    "question": "Um átomo neutro de um radioisótopo tem 53 eletrões orbitais. Sem mais dados, o que se pode concluir sobre o seu núcleo?",
    "options": [
      "Tem 53 neutrões, isto é, N = 53.",
      "Tem 53 nucleões, isto é, A = 53.",
      "Tem 53 protões e 53 neutrões, isto é, A = 106.",
      "Tem 53 protões, isto é, Z = 53."
    ],
    "correctIndex": 3,
    "explanation": "No átomo neutro, o número de eletrões é igual ao número de protões, que é o número atómico Z. Os eletrões orbitais não informam sobre os neutrões.",
    "distractorAnalysis": [
      "Está incorreta: os eletrões orbitais não dão o número de neutrões; só se obtém N com o número de massa (N = A − Z).",
      "Está incorreta: o número de nucleões (A) inclui protões e neutrões e não se deduz do número de eletrões.",
      "Está incorreta: o número de neutrões não é conhecido; só se sabe que o número de protões é 53."
    ],
    "nursingApplication": "Saber que um átomo neutro tem 53 eletrões permite identificar o iodo (Z = 53), elemento dos radiofármacos usados em doenças da tiroide."
  },
  {
    "id": 5044,
    "topicId": 5,
    "question": "Sobre o número de massa A do flúor-18, utilizado na PET, qual das afirmações é correta?",
    "options": [
      "É a massa exata do átomo, expressa em gramas.",
      "É inteiro, sem unidades, e aproxima a massa em u.m.a.",
      "É igual ao número de protões, tal como Z.",
      "É um número decimal, expresso em u.m.a."
    ],
    "correctIndex": 1,
    "explanation": "O número de massa A = Z + N conta os nucleões, é inteiro e não tem unidades. Como protões e neutrões têm cerca de 1 u.m.a. cada, A aproxima a massa do nuclídeo em u.m.a.",
    "distractorAnalysis": [
      "Está incorreta: A é um número inteiro sem unidades; só aproxima a massa do nuclídeo em u.m.a.",
      "Está incorreta: Z é o número de protões (9 no flúor); A = Z + N conta também os neutrões.",
      "Está incorreta: o número de massa é sempre um número inteiro e não tem unidades."
    ],
    "nursingApplication": "No rótulo de um radiofármaco de flúor-18 para PET, o 18 é o número de massa do nuclídeo e não uma medida de quantidade."
  },
  {
    "id": 5045,
    "topicId": 5,
    "question": "Num acelerador, produz-se um núcleo que existe apenas durante uma fração de segundo. Este núcleo pode ser considerado um nuclídeo?",
    "options": [
      "Sim, porque nuclídeo é qualquer espécie nuclear definida por Z e A, mesmo transitória.",
      "Não, porque só são nuclídeos os núcleos estáveis, que existem indefinidamente.",
      "Não, porque só são nuclídeos os que existem na natureza.",
      "Sim, mas só depois de se conhecer o número de eletrões orbitais."
    ],
    "correctIndex": 0,
    "explanation": "Nuclídeo é qualquer espécie nuclear definida por Z e A capaz de existir, mesmo que transitoriamente. Não é preciso que seja estável nem natural.",
    "distractorAnalysis": [
      "Está incorreta: a definição inclui espécies que existem apenas transitoriamente.",
      "Está incorreta: a definição de nuclídeo não exige que ocorra na natureza, apenas que seja uma espécie nuclear definida por Z e A.",
      "Está incorreta: o nuclídeo é definido apenas por Z e A, características do núcleo; os eletrões não entram na definição."
    ],
    "nursingApplication": "Os radionuclídeos usados em medicina nuclear, como o tecnécio-99m, são nuclídeos instáveis que, mesmo assim, ficam bem definidos por Z e A."
  },
  {
    "id": 5046,
    "topicId": 5,
    "question": "Um aluno escreve que um elemento tem Z = 26,5. Porque é que este valor é impossível?",
    "options": [
      "Z tem de ser par, porque os protões se emparelham.",
      "Z é medido em u.m.a., e só se usam valores arredondados.",
      "Z conta protões, por isso é sempre um número inteiro.",
      "Z é igual ao número de neutrões, que tem de ser inteiro."
    ],
    "correctIndex": 2,
    "explanation": "O número atómico é o número de protões do núcleo e o número de ordem do elemento no quadro periódico. Como não existem frações de protão, Z é um número inteiro.",
    "distractorAnalysis": [
      "Está incorreta: Z pode ser ímpar (1, 9, 53, ...); o que Z tem de ser é um número inteiro.",
      "Está incorreta: Z é uma contagem de protões, sem unidades; o inteiro não resulta de qualquer arredondamento.",
      "Está incorreta: Z é o número de protões e, em geral, não é igual a N; o inteiro vem de contar protões."
    ],
    "nursingApplication": "Ao consultar a ficha de um radiofármaco, o enfermeiro encontra sempre números atómicos inteiros, como Z = 43 para o tecnécio."
  },
  {
    "id": 5047,
    "topicId": 5,
    "question": "O iodo-131 (Z = 53) e o xénon-131 (Z = 54) têm o mesmo número de massa, mas comportam-se quimicamente de forma muito diferente. Que grandeza do núcleo define as propriedades químicas de um elemento?",
    "options": [
      "O número de massa A, que é igual nos dois nuclídeos.",
      "O número atómico Z, igual ao de eletrões do átomo neutro.",
      "O número de neutrões N, que é 78 no iodo e 77 no xénon.",
      "A razão entre neutrões e protões, N/Z, do núcleo."
    ],
    "correctIndex": 1,
    "explanation": "O número atómico Z define o elemento e as suas propriedades químicas, pois no átomo neutro fixa o número de eletrões orbitais. Nuclídeos com o mesmo A mas Z diferente são elementos diferentes.",
    "distractorAnalysis": [
      "Está incorreta: se A definisse a química, estes dois nuclídeos (A = 131) comportar-se-iam igual, o que não acontece.",
      "Está incorreta: N não define o elemento; a química é determinada por Z, que fixa o número de eletrões.",
      "Está incorreta: N/Z depende dos neutrões; as propriedades químicas dependem de Z e dos eletrões orbitais."
    ],
    "nursingApplication": "Ao ler a ficha de um radiofármaco, o enfermeiro identifica o elemento pelo número atómico (Z = 53 no iodo) e não pelo número de massa."
  },
  {
    "id": 5048,
    "topicId": 5,
    "question": "Um núcleo de carbono-12 (Z = 6) ganha dois neutrões, sem que o número de protões se altere. Quais passam a ser Z e A?",
    "options": [
      "Z = 8 e A = 12",
      "Z = 8 e A = 14",
      "Z = 6 e A = 12",
      "Z = 6 e A = 14"
    ],
    "correctIndex": 3,
    "explanation": "Z é o número de protões e mantém-se em 6, pelo que o elemento continua a ser o carbono. O número de massa A = Z + N aumenta tanto quanto o número de neutrões, passando de 12 para 14.",
    "distractorAnalysis": [
      "Está incorreta: Z conta apenas protões, e os neutrões acrescentados não o alteram; além disso, A aumenta com os neutrões.",
      "Está incorreta: contou os dois neutrões como protões; o número atómico mantém-se em 6 porque o número de protões não muda.",
      "Está incorreta: A = Z + N conta os neutrões, por isso aumenta 2 unidades, passando a 14."
    ],
    "nursingApplication": "Ao comparar carbono-12 e carbono-14 numa ficha técnica, o enfermeiro reconhece o mesmo elemento (Z = 6), diferindo apenas em dois neutrões."
  },
  {
    "id": 5049,
    "topicId": 5,
    "question": "O tecnécio-99m (Z = 43; A = 99) é utilizado em cintigrafia. Quantos neutrões tem o núcleo?",
    "options": [
      "142 neutrões",
      "43 neutrões",
      "56 neutrões",
      "99 neutrões"
    ],
    "correctIndex": 2,
    "explanation": "O número de neutrões é a diferença entre o número de massa e o número atómico, N = A − Z.",
    "solution": [
      "Dados: Z = 43; A = 99.",
      "Fórmula: N = A − Z.",
      "Substituição: N = 99 − 43.",
      "Resultado: 56 neutrões"
    ],
    "distractorAnalysis": [
      "Está incorreta: somou A e Z (99 + 43); o número de neutrões obtém-se subtraindo, N = A − Z.",
      "Está incorreta: 43 é o número de protões (Z), não o de neutrões.",
      "Está incorreta: 99 é o número de massa, que conta protões e neutrões; é preciso subtrair Z."
    ],
    "nursingApplication": "Ao preparar um radiofármaco de tecnécio-99m para cintigrafia, o enfermeiro lê «99» como número de massa e sabe que o número de neutrões se obtém subtraindo Z."
  },
  {
    "id": 5050,
    "topicId": 5,
    "question": "Um átomo neutro de crómio-51 (Z = 24; A = 51), utilizado em imagens do baço, é formado por protões, neutrões e eletrões. Quantas partículas destes três tipos tem ao todo?",
    "options": [
      "75 partículas",
      "51 partículas",
      "99 partículas",
      "27 partículas"
    ],
    "correctIndex": 0,
    "explanation": "Os protões e os neutrões somam A = 51 nucleões, e o átomo neutro tem ainda tantos eletrões como protões (24).",
    "solution": [
      "Dados: Z = 24; A = 51; átomo neutro.",
      "Fórmula: N = A − Z; eletrões = protões = Z; total = protões + neutrões + eletrões.",
      "Substituição: N = 51 − 24 = 27; total = 24 + 27 + 24.",
      "Resultado: 75 partículas"
    ],
    "distractorAnalysis": [
      "Está incorreta: 51 é só o número de nucleões; esqueceu os 24 eletrões orbitais do átomo neutro.",
      "Está incorreta: contou os protões duas vezes (51 + 24 + 24); os protões já estão incluídos em A = 51.",
      "Está incorreta: 27 é apenas o número de neutrões; faltam os protões e os eletrões."
    ],
    "nursingApplication": "Num serviço de medicina nuclear, saber que o átomo neutro de crómio-51 tem 24 eletrões e 27 neutrões ajuda o enfermeiro a interpretar a ficha do radiofármaco usado nas imagens do baço."
  },
  {
    "id": 5051,
    "topicId": 5,
    "question": "Um nuclídeo de estrôncio (Z = 38), utilizado em imagens dos ossos, tem 47 neutrões. Qual é o seu número de massa A?",
    "options": [
      "9",
      "47",
      "123",
      "85"
    ],
    "correctIndex": 3,
    "explanation": "O número de massa é o número de nucleões: A = Z + N, somando protões e neutrões.",
    "solution": [
      "Dados: Z = 38; N = 47.",
      "Fórmula: A = Z + N.",
      "Substituição: A = 38 + 47.",
      "Resultado: 85"
    ],
    "distractorAnalysis": [
      "Está incorreta: subtraiu os valores (47 − 38); o número de massa é a soma de protões e neutrões, A = Z + N.",
      "Está incorreta: 47 é o número de neutrões; falta somar os 38 protões.",
      "Está incorreta: somou Z duas vezes (47 + 38 + 38); A = Z + N só conta cada protão uma vez."
    ],
    "nursingApplication": "O estrôncio-85 usado nas imagens dos ossos é identificado pelo seu número de massa (85), que o enfermeiro lê no rótulo do radiofármaco."
  },
  {
    "id": 5052,
    "topicId": 5,
    "question": "O iodo-123 (Z = 53; A = 123) é usado no diagnóstico de quistos e tumores da tiroide. Quantos neutrões tem o núcleo a mais do que protões?",
    "options": [
      "70",
      "17",
      "176",
      "53"
    ],
    "correctIndex": 1,
    "explanation": "Primeiro obtém-se o número de neutrões, N = A − Z, e depois compara-se com o número de protões, que é Z.",
    "solution": [
      "Dados: Z = 53; A = 123.",
      "Fórmula: N = A − Z; diferença = N − Z.",
      "Substituição: N = 123 − 53 = 70; diferença = 70 − 53.",
      "Resultado: 17"
    ],
    "distractorAnalysis": [
      "Está incorreta: 70 é o número de neutrões (123 − 53); a pergunta pede a diferença em relação aos 53 protões.",
      "Está incorreta: somou A e Z (123 + 53) em vez de calcular N − Z.",
      "Está incorreta: 53 é o número de protões, não a diferença pedida."
    ],
    "nursingApplication": "Ao ler a ficha do iodo-123 usado na tiroide, o enfermeiro percebe que o nome fornece o número de massa e que os neutrões se obtêm subtraindo o número atómico."
  },
  {
    "id": 5053,
    "topicId": 5,
    "question": "Um núcleo de rádio-226 tem A = 226 e 138 neutrões. Quantos eletrões orbitais tem o átomo neutro correspondente?",
    "options": [
      "88 eletrões",
      "138 eletrões",
      "364 eletrões",
      "226 eletrões"
    ],
    "correctIndex": 0,
    "explanation": "O número de protões é Z = A − N e, no átomo neutro, o número de eletrões orbitais é igual a Z.",
    "solution": [
      "Dados: A = 226; N = 138; átomo neutro.",
      "Fórmula: Z = A − N; eletrões = Z.",
      "Substituição: Z = 226 − 138.",
      "Resultado: 88 eletrões"
    ],
    "distractorAnalysis": [
      "Está incorreta: 138 é o número de neutrões; o número de eletrões é igual ao de protões.",
      "Está incorreta: somou A e N (226 + 138); o número de protões obtém-se subtraindo, Z = A − N.",
      "Está incorreta: 226 é o número de nucleões; os eletrões do átomo neutro são tantos como os protões."
    ],
    "nursingApplication": "Saber que o átomo neutro de rádio-226 tem 88 eletrões liga o nome do radionuclídeo ao seu lugar no quadro periódico (Z = 88)."
  },
  {
    "id": 5054,
    "topicId": 5,
    "question": "Um átomo neutro de carbono-14 (Z = 6; A = 14) é analisado. Quantos nucleões tem o núcleo e quantos eletrões orbitais tem o átomo?",
    "options": [
      "8 nucleões e 6 eletrões",
      "14 nucleões e 8 eletrões",
      "14 nucleões e 6 eletrões",
      "20 nucleões e 6 eletrões"
    ],
    "correctIndex": 2,
    "explanation": "O número de nucleões é o número de massa A e, no átomo neutro, o número de eletrões é igual a Z.",
    "solution": [
      "Dados: Z = 6; A = 14; átomo neutro.",
      "Fórmula: nucleões = A; eletrões = Z.",
      "Substituição: nucleões = 14; eletrões = 6.",
      "Resultado: 14 nucleões e 6 eletrões"
    ],
    "distractorAnalysis": [
      "Está incorreta: 8 é o número de neutrões; o número de nucleões é A, que inclui também os protões.",
      "Está incorreta: o número de eletrões do átomo neutro é igual ao de protões (6), e não ao de neutrões.",
      "Está incorreta: somou A e Z (14 + 6); o número de nucleões é o próprio número de massa."
    ],
    "nursingApplication": "Ao interpretar que o carbono-14 tem 14 nucleões e 6 eletrões no átomo neutro, o enfermeiro distingue o núcleo (A) da nuvem eletrónica (Z)."
  },
  {
    "id": 5055,
    "topicId": 5,
    "question": "Comparam-se dois radionuclídeos de medicina nuclear: o tecnécio-99m (Z = 43; A = 99) e o iodo-123 (Z = 53; A = 123). Qual deles tem mais neutrões e quantos a mais?",
    "options": [
      "Tecnécio-99m, com 14 neutrões a mais",
      "Iodo-123, com 14 neutrões a mais",
      "Iodo-123, com 24 neutrões a mais",
      "Iodo-123, com 10 neutrões a mais"
    ],
    "correctIndex": 1,
    "explanation": "Compara-se N = A − Z de cada nuclídeo: a diferença de A e a diferença de Z não dão diretamente a diferença de neutrões.",
    "solution": [
      "Dados: Tc: Z = 43, A = 99; I: Z = 53, A = 123.",
      "Fórmula: N = A − Z.",
      "Substituição: N(Tc) = 99 − 43 = 56; N(I) = 123 − 53 = 70; 70 − 56.",
      "Resultado: Iodo-123, com 14 neutrões a mais"
    ],
    "distractorAnalysis": [
      "Está incorreta: calculou bem a diferença, mas inverteu a comparação; o iodo-123 tem 70 neutrões e o tecnécio-99m tem 56.",
      "Está incorreta: 24 é a diferença entre os números de massa (123 − 99), e não a diferença entre os números de neutrões.",
      "Está incorreta: 10 é a diferença entre os números atómicos (53 − 43), e não entre os números de neutrões."
    ],
    "nursingApplication": "Ao comparar radiofármacos de tecnécio-99m e de iodo-123, o enfermeiro reconhece que são nuclídeos de elementos diferentes, com números de neutrões distintos."
  },
  {
    "id": 5056,
    "topicId": 5,
    "question": "Um colega afirma que o cobalto-60 (Z = 27; A = 60) tem 60 neutrões. Quantos neutrões tem realmente cada núcleo?",
    "options": [
      "60 neutrões",
      "87 neutrões",
      "27 neutrões",
      "33 neutrões"
    ],
    "correctIndex": 3,
    "explanation": "O número de neutrões obtém-se retirando ao número de massa o número de protões: N = A − Z.",
    "solution": [
      "Dados: Z = 27; A = 60.",
      "Fórmula: N = A − Z.",
      "Substituição: N = 60 − 27.",
      "Resultado: 33 neutrões"
    ],
    "distractorAnalysis": [
      "Está incorreta: 60 é o número de massa; inclui os 27 protões, que não são neutrões.",
      "Está incorreta: somou A e Z (60 + 27) em vez de os subtrair.",
      "Está incorreta: 27 é o número de protões (Z), não o de neutrões."
    ],
    "nursingApplication": "Ao ver «cobalto-60» no nome de uma fonte radioativa, o enfermeiro lembra que o 60 inclui protões e neutrões, e que não indica só os neutrões."
  },
  {
    "id": 5057,
    "topicId": 5,
    "question": "Uma amostra contém 3 átomos neutros de carbono-14 (Z = 6; A = 14). Quantos neutrões existem ao todo nos 3 núcleos?",
    "options": [
      "42 neutrões",
      "24 neutrões",
      "18 neutrões",
      "60 neutrões"
    ],
    "correctIndex": 1,
    "explanation": "Cada núcleo tem N = A − Z neutrões; o total é o triplo desse valor.",
    "solution": [
      "Dados: Z = 6; A = 14; 3 átomos.",
      "Fórmula: N = A − Z; total = 3 × N.",
      "Substituição: N = 14 − 6 = 8; total = 3 × 8.",
      "Resultado: 24 neutrões"
    ],
    "distractorAnalysis": [
      "Está incorreta: 42 = 3 × 14 conta todos os nucleões, incluindo os protões.",
      "Está incorreta: 18 = 3 × 6 conta os protões (Z) em vez dos neutrões.",
      "Está incorreta: 60 = 3 × (14 + 6) resulta de somar A e Z em vez de os subtrair."
    ],
    "nursingApplication": "Ao estudar o carbono-14, o enfermeiro aprende a contar as partículas do núcleo átomo a átomo, base para interpretar a constituição dos radionuclídeos."
  },
  {
    "id": 5058,
    "topicId": 5,
    "question": "Um átomo neutro de gálio, com A = 67, tem 31 eletrões orbitais. Quantos neutrões tem o núcleo?",
    "options": [
      "36 neutrões",
      "98 neutrões",
      "31 neutrões",
      "67 neutrões"
    ],
    "correctIndex": 0,
    "explanation": "No átomo neutro, o número de eletrões é igual a Z; depois, N = A − Z.",
    "solution": [
      "Dados: A = 67; eletrões = 31 (átomo neutro).",
      "Fórmula: Z = nº de eletrões; N = A − Z.",
      "Substituição: Z = 31; N = 67 − 31.",
      "Resultado: 36 neutrões"
    ],
    "distractorAnalysis": [
      "Está incorreta: somou A e o número de eletrões (67 + 31) em vez de os subtrair.",
      "Está incorreta: 31 é o número de eletrões e de protões, não o de neutrões.",
      "Está incorreta: 67 é o número de massa e inclui os 31 protões."
    ],
    "nursingApplication": "O gálio-67, usado na avaliação de tumores, tem 31 eletrões no átomo neutro e 36 neutrões, dados que o enfermeiro pode deduzir do nome e do número atómico."
  },
  {
    "id": 5059,
    "topicId": 5,
    "question": "No núcleo de um átomo de carbono-12 (6 protões e 6 neutrões), que interação tende a afastar os protões uns dos outros?",
    "options": [
      "A atração gravitacional entre as massas dos nucleões.",
      "A atração eletromagnética entre os protões e os eletrões.",
      "A repulsão entre protões e neutrões, por terem cargas opostas.",
      "A repulsão eletrostática entre cargas do mesmo sinal."
    ],
    "correctIndex": 3,
    "explanation": "Os protões têm carga positiva do mesmo sinal e repelem-se por forças eletrostáticas, que tendem a afastá-los. A coesão do núcleo é assegurada pelas forças nucleares.",
    "distractorAnalysis": [
      "Está incorreta: a força gravitacional é atrativa e de intensidade desprezável à escala nuclear.",
      "Está incorreta: essa atração liga os eletrões ao núcleo e não afasta os protões entre si.",
      "Está incorreta: os neutrões não têm carga, por isso não se repelem nem se atraem eletricamente com os protões."
    ],
    "nursingApplication": "Ao estudar os radionuclídeos, o enfermeiro compreende que o núcleo só se mantém coeso porque as forças nucleares vencem a repulsão entre protões."
  },
  {
    "id": 5060,
    "topicId": 5,
    "question": "Entre os nucleões do núcleo existe atração gravitacional, mas esta não explica a coesão do núcleo. Porquê?",
    "options": [
      "Atua apenas entre protões, que se repelem.",
      "É uma força repulsiva que separa os nucleões.",
      "A sua intensidade é desprezável à escala nuclear.",
      "Só existe entre os eletrões orbitais e o núcleo."
    ],
    "correctIndex": 2,
    "explanation": "A atração gravitacional entre as massas dos nucleões existe, mas é desprezável à escala nuclear. A coesão deve-se às forças nucleares, muito mais intensas.",
    "distractorAnalysis": [
      "Está incorreta: a força gravitacional atua entre todas as massas, incluindo neutrões; o problema é a sua intensidade.",
      "Está incorreta: a força gravitacional é atrativa; só que é demasiado fraca à escala nuclear.",
      "Está incorreta: a interação eletrão–núcleo é eletromagnética; a gravitacional existe entre as massas dos nucleões, mas é desprezável."
    ],
    "nursingApplication": "Ao perceber porque o núcleo se mantém ligado, o enfermeiro distingue a gravidade, desprezável à escala nuclear, das forças nucleares que dão coesão."
  },
  {
    "id": 5061,
    "topicId": 5,
    "question": "Um núcleo de hélio tem 2 protões muito próximos que se repelem eletricamente e, no entanto, o núcleo mantém-se coeso. Que força assegura a sua coesão?",
    "options": [
      "A força nuclear, de grande intensidade e curto alcance.",
      "A força gravitacional, de grande intensidade.",
      "A atração eletrostática entre os dois protões.",
      "A força eletromagnética exercida pelos eletrões orbitais."
    ],
    "correctIndex": 0,
    "explanation": "A repulsão entre protões é vencida pelas forças nucleares, que asseguram a coesão do núcleo e têm grande intensidade e curto alcance.",
    "distractorAnalysis": [
      "Está incorreta: a força gravitacional é atrativa, mas a sua intensidade é desprezável à escala nuclear.",
      "Está incorreta: cargas do mesmo sinal repelem-se; a interação eletrostática entre protões é repulsiva.",
      "Está incorreta: os eletrões estão fora do núcleo e são mantidos pela atração do núcleo; não seguram os nucleões entre si."
    ],
    "nursingApplication": "Ao estudar partículas α, que são núcleos de hélio, o enfermeiro compreende que a sua estabilidade se deve às forças nucleares."
  },
  {
    "id": 5062,
    "topicId": 5,
    "question": "Num núcleo grande, cada nucleão sente a força nuclear apenas dos nucleões mais próximos. Que característica da força nuclear explica este facto?",
    "options": [
      "O facto de só atuar entre protões, por terem carga.",
      "O curto alcance, da ordem de 10⁻¹³ cm.",
      "A intensidade desprezável, por ser gravitacional.",
      "A natureza repulsiva, que afasta os nucleões distantes."
    ],
    "correctIndex": 1,
    "explanation": "A força nuclear tem curto alcance, da ordem de 10⁻¹³ cm, por isso só atua entre nucleões muito próximos.",
    "distractorAnalysis": [
      "Está incorreta: a força nuclear é independente da carga; o seu alcance limitado é que explica a ação só entre vizinhos.",
      "Está incorreta: a força nuclear tem grande intensidade; a força desprezável é a gravitacional.",
      "Está incorreta: a força nuclear assegura a coesão do núcleo; não é repulsiva e o que a limita aos vizinhos é o curto alcance."
    ],
    "nursingApplication": "Perceber que a força nuclear atua só a distâncias minúsculas ajuda o enfermeiro a compreender porque a coesão do núcleo difere da ligação dos eletrões ao átomo."
  },
  {
    "id": 5063,
    "topicId": 5,
    "question": "O neutrão não tem carga elétrica e, mesmo assim, é retido no núcleo. Que característica das forças nucleares o permite?",
    "options": [
      "Atuam apenas sobre partículas com carga elétrica.",
      "Resultam da atração dos eletrões orbitais pelos neutrões.",
      "São gravitacionais e a massa do neutrão basta para o reter.",
      "São independentes da carga: atuam entre p-p, n-n e p-n."
    ],
    "correctIndex": 3,
    "explanation": "As forças nucleares são independentes da carga e atuam entre protões e protões, neutrões e neutrões, e protões e neutrões. É por isso que os neutrões, sem carga, ficam ligados ao núcleo.",
    "distractorAnalysis": [
      "Está incorreta: se dependessem da carga, o neutrão ficaria de fora; as forças nucleares são independentes da carga.",
      "Está incorreta: os eletrões estão fora do núcleo e não retêm os neutrões.",
      "Está incorreta: a força gravitacional é desprezável à escala nuclear; quem retém o neutrão é a força nuclear."
    ],
    "nursingApplication": "Ao estudar o núcleo, o enfermeiro percebe que os neutrões, sem carga elétrica, fazem parte da coesão do núcleo dos radioisótopos usados em medicina nuclear."
  },
  {
    "id": 5064,
    "topicId": 5,
    "question": "Em 1935, Yukawa propôs explicar a intensa força de ligação entre nucleões a distâncias muito pequenas. Que partícula introduziu nessa explicação?",
    "options": [
      "O positrão",
      "O fotão",
      "O mesão",
      "O antineutrino"
    ],
    "correctIndex": 2,
    "explanation": "Yukawa propôs que um mesão, a «saltar» entre dois nucleões, produz uma força de troca muito intensa que explica a ligação entre eles.",
    "distractorAnalysis": [
      "Está incorreta: o positrão é o eletrão positivo, emitido em decaimento β⁺, e não a partícula proposta por Yukawa.",
      "Está incorreta: o fotão é o quantum de radiação eletromagnética e não é a partícula trocada entre nucleões na proposta de Yukawa.",
      "Está incorreta: o antineutrino surge na desintegração do neutrão livre e não na explicação da força entre nucleões."
    ],
    "nursingApplication": "Conhecer a proposta de Yukawa mostra ao enfermeiro que a estabilidade dos núcleos usados em radiofármacos tem uma explicação física própria."
  },
  {
    "id": 5065,
    "topicId": 5,
    "question": "Segundo a proposta de Yukawa, qual é a carga elétrica dos mesões trocados entre os nucleões?",
    "options": [
      "Pode ser positiva, negativa ou nula.",
      "É sempre nula, como a do neutrão.",
      "É sempre positiva, como a do protão.",
      "É sempre negativa, como a do eletrão."
    ],
    "correctIndex": 0,
    "explanation": "O mesão proposto por Yukawa pode ter carga positiva, negativa ou nula, o que é coerente com forças nucleares independentes da carga.",
    "distractorAnalysis": [
      "Está incorreta: o mesão pode ter carga +, − ou 0, e não apenas nula.",
      "Está incorreta: o mesão pode ter carga +, − ou 0, e não apenas positiva.",
      "Está incorreta: o mesão pode ter carga +, − ou 0, e não apenas negativa."
    ],
    "nursingApplication": "Saber que a força de troca envolve partículas com diferentes cargas ajuda o enfermeiro a compreender que a coesão nuclear não depende da carga dos nucleões."
  },
  {
    "id": 5066,
    "topicId": 5,
    "question": "Qual das seguintes NÃO é uma característica das forças nucleares?",
    "options": [
      "Terem grande intensidade, que vence a repulsão entre protões.",
      "Atuarem apenas entre protões, por causa da sua carga.",
      "Terem curto alcance, da ordem de 10⁻¹³ cm.",
      "Serem independentes da carga elétrica das partículas."
    ],
    "correctIndex": 1,
    "explanation": "As forças nucleares têm grande intensidade, curto alcance e são independentes da carga: atuam entre protões, entre neutrões e entre protões e neutrões.",
    "distractorAnalysis": [
      "Está incorreta: a grande intensidade é de facto uma característica das forças nucleares, por isso não é a exceção pedida.",
      "Está incorreta: o curto alcance é uma característica das forças nucleares, por isso não é a exceção pedida.",
      "Está incorreta: a independência da carga é uma característica das forças nucleares, por isso não é a exceção pedida."
    ],
    "nursingApplication": "Ao rever o que mantém o núcleo coeso, o enfermeiro evita a ideia errada de que só os protões interagem, quando também os neutrões participam."
  },
  {
    "id": 5067,
    "topicId": 5,
    "question": "Um laboratório analisa três nuclídeos de carbono, <sup>12</sup>C, <sup>13</sup>C e <sup>14</sup>C (todos com Z = 6). Como se classificam entre si?",
    "options": [
      "Isótonos, porque têm o mesmo número de neutrões.",
      "Isóbaros, porque têm o mesmo número de massa.",
      "Isómeros nucleares, porque só diferem na energia.",
      "Isótopos, porque têm o mesmo número atómico."
    ],
    "correctIndex": 3,
    "explanation": "Nuclídeos com o mesmo Z (aqui 6) e números de massa diferentes são isótopos do mesmo elemento.",
    "distractorAnalysis": [
      "Está incorreta: os números de neutrões são 6, 7 e 8, todos diferentes.",
      "Está incorreta: os números de massa são 12, 13 e 14, todos diferentes.",
      "Está incorreta: os isómeros nucleares têm o mesmo Z e o mesmo A, o que aqui não acontece."
    ],
    "nursingApplication": "O carbono-14 e o carbono-12 são isótopos do mesmo elemento, o que o enfermeiro reconhece ao ver que partilham Z = 6."
  },
  {
    "id": 5068,
    "topicId": 5,
    "question": "Os nuclídeos <sup>90</sup>Sr (Z = 38), <sup>90</sup>Y (Z = 39) e <sup>90</sup>Zr (Z = 40) formam uma família nuclear. Qual é a família e quais são os números de neutrões?",
    "options": [
      "Isótopos: Z = 38 em todos e N = 52, 51 e 50.",
      "Isótonos: N = 52 em todos, porque A = 90 é igual.",
      "Isóbaros: A = 90 em todos e N = 52, 51 e 50.",
      "Isómeros nucleares: Z e A iguais, com N = 52."
    ],
    "correctIndex": 2,
    "explanation": "Nuclídeos com o mesmo número de massa e números atómicos diferentes são isóbaros. Com A = 90, o número de neutrões diminui à medida que Z aumenta.",
    "solution": [
      "Dados: A = 90 em todos; Z = 38, 39 e 40.",
      "Fórmula: N = A − Z.",
      "Substituição: 90 − 38 = 52; 90 − 39 = 51; 90 − 40 = 50.",
      "Resultado: Isóbaros: A = 90 em todos e N = 52, 51 e 50."
    ],
    "distractorAnalysis": [
      "Está incorreta: os números atómicos são 38, 39 e 40; isótopos teriam o mesmo Z.",
      "Está incorreta: os neutrões são 52, 51 e 50, diferentes; o que é igual é o número de massa.",
      "Está incorreta: os isómeros nucleares têm o mesmo Z e A, mas aqui Z é diferente (38, 39 e 40)."
    ],
    "nursingApplication": "Ao ver nuclídeos com o mesmo número de massa mas elementos diferentes, o enfermeiro reconhece-os como isóbaros, e não como isótopos do mesmo elemento."
  },
  {
    "id": 5069,
    "topicId": 5,
    "question": "Qual dos seguintes pares de nuclídeos é formado por isótonos?",
    "options": [
      "<sup>18</sup>F (Z = 9) e <sup>17</sup>O (Z = 8)",
      "<sup>18</sup>F (Z = 9) e <sup>18</sup>O (Z = 8)",
      "<sup>16</sup>O (Z = 8) e <sup>18</sup>O (Z = 8)",
      "<sup>16</sup>O (Z = 8) e <sup>18</sup>F (Z = 9)"
    ],
    "correctIndex": 0,
    "explanation": "Isótonos têm o mesmo número de neutrões, N = A − Z. O flúor-18 tem N = 18 − 9 = 9 e o oxigénio-17 tem N = 17 − 8 = 9.",
    "solution": [
      "Dados: <sup>18</sup>F: Z = 9; <sup>17</sup>O: Z = 8; <sup>18</sup>O e <sup>16</sup>O: Z = 8.",
      "Fórmula: N = A − Z.",
      "Substituição: <sup>18</sup>F: 18 − 9 = 9; <sup>17</sup>O: 17 − 8 = 9; <sup>18</sup>O: 10; <sup>16</sup>O: 8.",
      "Resultado: <sup>18</sup>F (Z = 9) e <sup>17</sup>O (Z = 8)"
    ],
    "distractorAnalysis": [
      "Está incorreta: têm o mesmo número de massa (isóbaros), mas N = 9 e N = 10, diferentes.",
      "Está incorreta: têm o mesmo número atómico (isótopos) e N = 8 e N = 10, diferentes.",
      "Está incorreta: N = 8 e N = 9, diferentes; também Z e A são diferentes."
    ],
    "nursingApplication": "O flúor-18 usado na PET partilha o número de neutrões com o oxigénio-17, o que ilustra como famílias nucleares agrupam nuclídeos de elementos diferentes."
  },
  {
    "id": 5070,
    "topicId": 5,
    "question": "Duas amostras contêm átomos neutros de iodo-123 e de iodo-131 (Z = 53). Que diferença existe entre os átomos das duas amostras?",
    "options": [
      "Diferem em 8 protões e em 8 eletrões.",
      "Diferem em 8 neutrões, com o mesmo número de eletrões.",
      "Diferem em 8 neutrões e em 8 eletrões.",
      "Diferem em 8 protões, com o mesmo número de neutrões."
    ],
    "correctIndex": 1,
    "explanation": "Dois isótopos de iodo têm o mesmo Z = 53 e, no átomo neutro, 53 eletrões. O número de neutrões é N = 123 − 53 = 70 num e N = 131 − 53 = 78 no outro.",
    "solution": [
      "Dados: Z = 53; A = 123 e A = 131.",
      "Fórmula: N = A − Z; eletrões = Z.",
      "Substituição: N = 123 − 53 = 70 e N = 131 − 53 = 78; diferença = 8; eletrões = 53 nos dois.",
      "Resultado: Diferem em 8 neutrões, com o mesmo número de eletrões."
    ],
    "distractorAnalysis": [
      "Está incorreta: o número de protões e de eletrões é 53 nos dois, pois Z é o mesmo.",
      "Está incorreta: as diferenças de neutrões estão certas, mas o átomo neutro de ambos tem 53 eletrões.",
      "Está incorreta: os dois são iodo (53 protões); o que difere é o número de neutrões (70 e 78)."
    ],
    "nursingApplication": "O iodo-123 e o iodo-131, usados em doenças da tiroide, são o mesmo elemento químico com 8 neutrões de diferença."
  },
  {
    "id": 5071,
    "topicId": 5,
    "question": "O carbono-14 (Z = 6) e o azoto-14 (Z = 7) são nuclídeos de elementos diferentes. Qual das grandezas seguintes é igual nos dois?",
    "options": [
      "O número de neutrões",
      "O número de eletrões do átomo neutro",
      "O número de massa",
      "O número atómico"
    ],
    "correctIndex": 2,
    "explanation": "Os dois nuclídeos têm A = 14, logo são isóbaros. Como Z é diferente (6 e 7), também diferem o número de neutrões (8 e 7) e o de eletrões do átomo neutro.",
    "solution": [
      "Dados: C-14: Z = 6, A = 14; N-14: Z = 7, A = 14.",
      "Fórmula: N = A − Z.",
      "Substituição: N(C) = 14 − 6 = 8; N(N) = 14 − 7 = 7.",
      "Resultado: O número de massa"
    ],
    "distractorAnalysis": [
      "Está incorreta: N = 14 − 6 = 8 no carbono-14 e N = 14 − 7 = 7 no azoto-14, valores diferentes.",
      "Está incorreta: o átomo neutro tem 6 eletrões no carbono e 7 no azoto, pois Z é diferente.",
      "Está incorreta: Z = 6 no carbono e Z = 7 no azoto; é a diferença de Z que torna os elementos distintos."
    ],
    "nursingApplication": "Ao ver o carbono-14 e o azoto-14 lado a lado numa tabela, o enfermeiro reconhece nuclídeos de elementos distintos que partilham o número de massa."
  },
  {
    "id": 5072,
    "topicId": 5,
    "question": "Os átomos neutros de crómio-51 e de crómio-52 (Z = 24) têm o mesmo comportamento químico. Qual é a razão?",
    "options": [
      "Têm o mesmo número de neutrões no núcleo.",
      "Têm o mesmo número de massa A.",
      "Têm o mesmo Z, mas diferente número de eletrões.",
      "Têm o mesmo Z e, no átomo neutro, o mesmo número de eletrões."
    ],
    "correctIndex": 3,
    "explanation": "Isótopos têm o mesmo Z e, no átomo neutro, o mesmo número de eletrões orbitais; por isso têm as mesmas propriedades químicas, embora difiram no número de neutrões.",
    "distractorAnalysis": [
      "Está incorreta: N = 27 e N = 28, diferentes; o comportamento químico não depende dos neutrões.",
      "Está incorreta: A = 51 e A = 52, diferentes; o que é igual é o número atómico.",
      "Está incorreta: no átomo neutro, o número de eletrões é igual a Z, por isso é o mesmo nos dois isótopos."
    ],
    "nursingApplication": "O crómio-51 usado nas imagens do baço comporta-se quimicamente como qualquer outro isótopo de crómio, porque partilha o número de eletrões orbitais."
  },
  {
    "id": 5073,
    "topicId": 5,
    "question": "Os nuclídeos <sup>13</sup>C (Z = 6), <sup>14</sup>N (Z = 7) e <sup>15</sup>O (Z = 8) têm algo em comum. O que é?",
    "options": [
      "O mesmo número de neutrões, N = 7.",
      "O mesmo número atómico, Z = 7.",
      "O mesmo número de massa, A = 14.",
      "O mesmo número de eletrões no átomo neutro."
    ],
    "correctIndex": 0,
    "explanation": "Calculando N = A − Z obtém-se 7 em todos os casos, logo são isótonos (mesmo número de neutrões).",
    "solution": [
      "Dados: <sup>13</sup>C: Z = 6; <sup>14</sup>N: Z = 7; <sup>15</sup>O: Z = 8.",
      "Fórmula: N = A − Z.",
      "Substituição: 13 − 6 = 7; 14 − 7 = 7; 15 − 8 = 7.",
      "Resultado: O mesmo número de neutrões, N = 7."
    ],
    "distractorAnalysis": [
      "Está incorreta: Z é 6, 7 e 8; só o azoto tem Z = 7.",
      "Está incorreta: os números de massa são 13, 14 e 15, diferentes.",
      "Está incorreta: o átomo neutro tem 6, 7 e 8 eletrões, pois Z é diferente."
    ],
    "nursingApplication": "Comparar o carbono-13, o azoto-14 e o oxigénio-15 mostra ao enfermeiro que elementos diferentes podem partilhar o número de neutrões."
  },
  {
    "id": 5074,
    "topicId": 5,
    "question": "Qual dos seguintes nuclídeos é isótopo do flúor-18 (Z = 9)?",
    "options": [
      "<sup>18</sup>O (Z = 8)",
      "<sup>19</sup>F (Z = 9)",
      "<sup>17</sup>O (Z = 8)",
      "<sup>15</sup>O (Z = 8)"
    ],
    "correctIndex": 1,
    "explanation": "Isótopos têm o mesmo número atómico. Só o flúor-19, com Z = 9, pertence ao mesmo elemento que o flúor-18.",
    "distractorAnalysis": [
      "Está incorreta: tem o mesmo número de massa (isóbaro), mas Z diferente.",
      "Está incorreta: tem o mesmo número de neutrões (N = 9), é isótono, mas Z é diferente.",
      "Está incorreta: Z = 8 e N = 7; não partilha com o flúor-18 nem Z, nem A, nem N."
    ],
    "nursingApplication": "O flúor-18 usado na PET e o flúor-19 são isótopos do mesmo elemento, com o mesmo número de eletrões no átomo neutro."
  },
  {
    "id": 5075,
    "topicId": 5,
    "question": "Qual dos seguintes nuclídeos é isóbaro do tecnécio-99 (Z = 43)?",
    "options": [
      "<sup>98</sup>Tc (Z = 43)",
      "<sup>98</sup>Mo (Z = 42)",
      "<sup>97</sup>Mo (Z = 42)",
      "<sup>99</sup>Mo (Z = 42)"
    ],
    "correctIndex": 3,
    "explanation": "Isóbaros têm o mesmo número de massa e número atómico diferente. O molibdénio-99 tem A = 99 e Z = 42, ao contrário do tecnécio-99 (Z = 43).",
    "distractorAnalysis": [
      "Está incorreta: tem o mesmo número atómico (isótopo) e A diferente.",
      "Está incorreta: tem N = 56, igual ao do tecnécio-99 (isótono), mas A = 98, diferente.",
      "Está incorreta: tem A = 97 e N = 55; não partilha com o tecnécio-99 nem Z, nem A, nem N."
    ],
    "nursingApplication": "No gerador usado em cintigrafia, o molibdénio-99 decai para tecnécio-99m, um nuclídeo com o mesmo número de massa (A = 99) mas de elemento diferente."
  },
  {
    "id": 5076,
    "topicId": 5,
    "question": "Um enfermeiro lê que o crómio-51 é um radioisótopo. O que significa este termo?",
    "options": [
      "Um isótopo estável, sem propriedades radioativas.",
      "Um isótopo com número de eletrões diferente do átomo neutro.",
      "Um isótopo instável, com propriedades radioativas.",
      "Um isótopo com número atómico diferente do elemento."
    ],
    "correctIndex": 2,
    "explanation": "Alguns isótopos são instáveis e apresentam propriedades radioativas: são os radioisótopos. Continuam a ser isótopos do mesmo elemento, com o mesmo Z.",
    "distractorAnalysis": [
      "Está incorreta: se fosse estável não emitiria radiação; o prefixo «radio» indica precisamente um núcleo instável.",
      "Está incorreta: o número de eletrões não define um radioisótopo; o que o define é a instabilidade do núcleo.",
      "Está incorreta: isótopos de um elemento têm o mesmo Z; o radioisótopo distingue-se por ser instável."
    ],
    "nursingApplication": "Ao manusear um radiofármaco de crómio-51, o enfermeiro sabe que o nuclídeo é instável e radioativo, e não um isótopo estável do crómio."
  },
  {
    "id": 5077,
    "topicId": 5,
    "question": "Para estudar o baço e medir o volume dos glóbulos vermelhos (hemácias), qual dos radioisótopos seguintes é indicado?",
    "options": [
      "Crómio-51",
      "Iodo-123",
      "Estrôncio-85",
      "Flúor-18"
    ],
    "correctIndex": 0,
    "explanation": "O crómio-51 é usado para obter imagens do baço e para medir o volume dos glóbulos vermelhos.",
    "distractorAnalysis": [
      "Está incorreta: o iodo-123 é usado no diagnóstico de quistos e tumores da tiroide.",
      "Está incorreta: o estrôncio-85 é usado em imagens dos ossos (fraturas, osteoporose).",
      "Está incorreta: o flúor-18 é usado na PET (tomografia por emissão de positrões)."
    ],
    "nursingApplication": "Numa avaliação do volume dos glóbulos vermelhos em medicina nuclear, o enfermeiro reconhece o crómio-51 como o radioisótopo indicado."
  },
  {
    "id": 5078,
    "topicId": 5,
    "question": "O gálio-67 é utilizado em medicina nuclear. Para qual das finalidades seguintes?",
    "options": [
      "Imagens do baço e volume dos glóbulos vermelhos",
      "Diagnóstico e avaliação de tumores",
      "Imagens dos ossos (fraturas, osteoporose)",
      "Diagnóstico de quistos e/ou tumores da tiroide"
    ],
    "correctIndex": 1,
    "explanation": "O gálio-67 é um radioisótopo usado no diagnóstico e avaliação de tumores.",
    "distractorAnalysis": [
      "Está incorreta: essa é a utilização do crómio-51.",
      "Está incorreta: essa é a utilização do estrôncio-85.",
      "Está incorreta: essa é a utilização do iodo-123; o gálio-67 não é o radioisótopo específico da tiroide."
    ],
    "nursingApplication": "Ao receber um pedido de exame com gálio-67, o enfermeiro sabe que o objetivo é o diagnóstico e a avaliação de tumores."
  },
  {
    "id": 5079,
    "topicId": 5,
    "question": "Entre os radioisótopos de uso médico estudados, qual é indicado para o diagnóstico de quistos e/ou tumores da tiroide?",
    "options": [
      "Crómio-51",
      "Estrôncio-85",
      "Tecnécio-99m",
      "Iodo-123"
    ],
    "correctIndex": 3,
    "explanation": "O iodo-123 é o radioisótopo associado ao diagnóstico de quistos e/ou tumores da tiroide.",
    "distractorAnalysis": [
      "Está incorreta: o crómio-51 é usado em imagens do baço e no volume dos glóbulos vermelhos.",
      "Está incorreta: o estrôncio-85 é usado em imagens dos ossos.",
      "Está incorreta: o tecnécio-99m é usado no estudo do cérebro, dos pulmões, do fígado e dos ossos."
    ],
    "nursingApplication": "Num exame da tiroide, o enfermeiro reconhece o iodo-123 como o radioisótopo de diagnóstico, distinto do iodo-131 usado no tratamento de doenças da tiroide."
  },
  {
    "id": 5080,
    "topicId": 5,
    "question": "Um serviço de medicina nuclear utiliza o mesmo radioisótopo para estudar o cérebro, os pulmões, o fígado e os ossos. Qual é?",
    "options": [
      "Crómio-51",
      "Gálio-67",
      "Tecnécio-99m",
      "Iodo-123"
    ],
    "correctIndex": 2,
    "explanation": "O tecnécio-99m é usado no estudo do cérebro, dos pulmões, do fígado e dos ossos.",
    "distractorAnalysis": [
      "Está incorreta: o crómio-51 é usado em imagens do baço e no volume dos glóbulos vermelhos.",
      "Está incorreta: o gálio-67 é usado no diagnóstico e avaliação de tumores.",
      "Está incorreta: o iodo-123 é usado no diagnóstico de quistos e/ou tumores da tiroide."
    ],
    "nursingApplication": "Em cintigrafias de órgãos diferentes, o enfermeiro reconhece o tecnécio-99m como o radioisótopo mais versátil, usado no cérebro, pulmões, fígado e ossos."
  },
  {
    "id": 5081,
    "topicId": 5,
    "question": "No final do século XIX, uma película fotográfica guardada numa gaveta, bem protegida da luz, apareceu impressionada junto de sais de urânio. Que conclusão se tirou desta observação?",
    "options": [
      "A película foi impressionada por luz visível que conseguiu atravessar a gaveta.",
      "Os sais de urânio emitem espontaneamente uma radiação penetrante, capaz de impressionar a película.",
      "Os sais de urânio só emitem radiação depois de serem aquecidos por uma fonte externa.",
      "A película emitiu radiação própria, que alterou a composição química dos sais de urânio."
    ],
    "correctIndex": 1,
    "explanation": "Saint-Victor e Becquerel observaram que os sais de urânio impressionavam películas fotográficas mesmo sem luz. A causa é uma radiação emitida pelo próprio urânio, que mais tarde se reconheceu ser radioativa.",
    "distractorAnalysis": [
      "Está incorreta: a gaveta estava protegida da luz, pelo que a luz visível não explica o escurecimento da película.",
      "Está incorreta: a emissão é espontânea e não exige aquecimento nem qualquer estímulo externo.",
      "Está incorreta: é a película que é afetada pela radiação, e não a fonte da radiação; os sais de urânio é que emitem."
    ],
    "nursingApplication": "Em serviços de medicina nuclear, o enfermeiro manipula fontes que emitem radiação por si próprias, sem qualquer estímulo, pelo que segue os procedimentos de proteção do serviço."
  },
  {
    "id": 5082,
    "topicId": 5,
    "question": "Ao estudar a radiação emitida pelo urânio, Marie Curie concluiu que o escurecimento das películas fotográficas se devia a uma radiação penetrante. Que substâncias emitem essa radiação?",
    "options": [
      "Apenas o urânio, sendo o polónio e o rádio isentos de emissão.",
      "O polónio e o rádio, mas não os sais de urânio estudados.",
      "Os sais de urânio, mas só quando expostos à luz solar durante algum tempo.",
      "O urânio, o polónio e o rádio emitem uma radiação penetrante."
    ],
    "correctIndex": 3,
    "explanation": "Marie Curie mostrou que a impressão das películas se devia a uma radiação penetrante emitida não só pelo urânio, mas também pelo polónio e pelo rádio. Estes elementos passaram a ser designados radioativos.",
    "distractorAnalysis": [
      "Está incorreta: o polónio e o rádio também emitem radiação penetrante; a emissão não é exclusiva do urânio.",
      "Está incorreta: o urânio foi precisamente o primeiro elemento em que esta emissão foi observada; os três emitem radiação penetrante.",
      "Está incorreta: a emissão é espontânea e ocorre no escuro; não depende de exposição à luz solar."
    ],
    "nursingApplication": "O rádio é um exemplo histórico de elemento radioativo; hoje, o enfermeiro de medicina nuclear lida com radioisótopos como o tecnécio-99m."
  },
  {
    "id": 5083,
    "topicId": 5,
    "question": "Após Rutherford ter distinguido a radiação α e a radiação β emitidas pelo urânio, Villard descobriu um terceiro tipo. Quantos tipos de radiação ficaram então identificados e quais são?",
    "options": [
      "Três tipos: radiação alfa, radiação beta e radiação gama.",
      "Dois tipos: radiação alfa e radiação beta, sendo a gama uma variante da beta.",
      "Quatro tipos: radiação alfa, beta, gama e raios X, todos emitidos pelo núcleo.",
      "Três tipos: radiação alfa, beta e luz visível, emitida pelo núcleo instável."
    ],
    "correctIndex": 0,
    "explanation": "Rutherford identificou as radiações α e β no urânio e Villard descobriu a radiação γ, perfazendo três tipos. A radiação γ é de natureza diferente das outras duas, pois é eletromagnética.",
    "distractorAnalysis": [
      "Está incorreta: a radiação gama foi descoberta por Villard como um terceiro tipo e não é uma variante da beta.",
      "Está incorreta: os raios X não têm origem no núcleo: provêm de eletrões que transitam entre orbitais ou são travados num alvo.",
      "Está incorreta: a luz visível não é emitida pelo núcleo radioativo; o terceiro tipo descoberto foi a radiação gama."
    ],
    "nursingApplication": "Num serviço de medicina nuclear, as fichas dos radiofármacos indicam o tipo de radiação emitida (α, β ou γ), o que orienta o enfermeiro nos cuidados a ter ao manipulá-los."
  },
  {
    "id": 5084,
    "topicId": 5,
    "question": "Numa amostra com milhares de núcleos instáveis do mesmo radionuclídeo, não é possível prever em que instante um núcleo em particular se vai desintegrar. Que característica do decaimento radioativo explica este facto?",
    "options": [
      "É um processo atómico, que envolve apenas os eletrões das orbitais exteriores.",
      "É um processo provocado, que só ocorre se o núcleo for bombardeado por partículas.",
      "É um processo que ocorre ao acaso, sem instante previsível para cada núcleo.",
      "É um processo sincronizado, em que todos os núcleos se desintegram em simultâneo."
    ],
    "correctIndex": 2,
    "explanation": "O decaimento é um processo nuclear, espontâneo e ao acaso. Por ser aleatório, não se sabe quando decai um dado núcleo, embora se saiba que o núcleo instável acabará por se transformar.",
    "distractorAnalysis": [
      "Está incorreta: o decaimento é um processo nuclear e não atómico: é o núcleo que se transforma, e não os eletrões orbitais.",
      "Está incorreta: o decaimento é espontâneo e não precisa de bombardeamento; é o acaso que impede prever o instante de cada núcleo.",
      "Está incorreta: se todos decaíssem em simultâneo, o instante seria previsível; o que se observa é que cada núcleo decai num instante aleatório."
    ],
    "nursingApplication": "Por o decaimento ser aleatório, a medicina nuclear trata a radiação emitida por um radiofármaco como um fenómeno estatístico, e não como um evento previsível núcleo a núcleo."
  },
  {
    "id": 5085,
    "topicId": 5,
    "question": "O cobalto-60 (Z = 27) decai para níquel-60 (Z = 28). Como se classificam estes dois núcleos e como se comparam em estabilidade?",
    "options": [
      "O cobalto-60 é o núcleo-pai, estável, e o níquel-60 é o núcleo-filho, menos estável.",
      "O níquel-60 é o núcleo-pai, instável, e o cobalto-60 é o núcleo-filho, mais estável.",
      "O cobalto-60 é o núcleo-pai, instável, e o níquel-60 é o núcleo-filho, mais estável.",
      "O níquel-60 é o núcleo-pai, estável, e o cobalto-60 é o núcleo-filho, menos estável."
    ],
    "correctIndex": 2,
    "explanation": "No decaimento, um núcleo-pai instável transforma-se num núcleo-filho mais estável. O núcleo que decai é o cobalto-60, pelo que o níquel-60 é o resultado da transformação.",
    "distractorAnalysis": [
      "Está incorreta: o decaimento nunca conduz a um núcleo menos estável: o núcleo-pai é que é instável e o filho mais estável.",
      "Está incorreta: o núcleo-pai é o que decai, ou seja, o cobalto-60, e não o níquel-60, que é o produto.",
      "Está incorreta: o núcleo-pai é o cobalto-60, que decai, e o filho é mais estável do que ele, e não menos."
    ],
    "nursingApplication": "Ao ler um registo de medicina nuclear, o enfermeiro reconhece que o radionuclídeo administrado é o núcleo-pai, que vai decaindo para um núcleo-filho mais estável."
  },
  {
    "id": 5086,
    "topicId": 5,
    "question": "Ao decair, o tecnécio-99m (Z = 43) passa a tecnécio-99 (Z = 43), emitindo apenas radiação γ. Esta transformação pode ser considerada um decaimento radioativo?",
    "options": [
      "Sim, pois um núcleo-pai instável passa a um núcleo-filho mais estável, emitindo radiação eletromagnética.",
      "Não, porque o decaimento exige a emissão de pelo menos uma partícula.",
      "Não, porque, sendo Z igual nos dois núcleos, não existe qualquer transformação nuclear.",
      "Sim, mas só se a radiação γ for acompanhada de uma variação do número atómico."
    ],
    "correctIndex": 0,
    "explanation": "O decaimento radioativo pode envolver a emissão de partículas e/ou de radiação eletromagnética. Aqui o núcleo liberta o excesso de energia sob a forma de fotões γ, sem alterar Z nem A, mas tornando-se mais estável.",
    "distractorAnalysis": [
      "Está incorreta: o decaimento pode ocorrer com emissão apenas de radiação eletromagnética, sem partículas.",
      "Está incorreta: mesmo com Z e A inalterados, o núcleo muda de estado de energia e torna-se mais estável, o que é uma transformação nuclear.",
      "Está incorreta: a emissão γ não altera Z nem A, e é, ainda assim, decaimento; não é necessário variar o número atómico."
    ],
    "nursingApplication": "O tecnécio-99m, usado em cintigrafias, liberta o excesso de energia sob a forma de radiação γ, que a gama-câmara regista para formar a imagem."
  },
  {
    "id": 5087,
    "topicId": 5,
    "question": "Um frasco de uma fonte radioativa, guardado num cofre escuro, à temperatura constante, continua a emitir radiação. Que característica do decaimento radioativo explica este facto?",
    "options": [
      "É um processo que depende da luz que incide sobre a fonte radioativa.",
      "É um processo que só ocorre quando a fonte é aquecida acima de certa temperatura.",
      "É um processo que resulta de reações químicas entre os eletrões orbitais da fonte.",
      "É um processo espontâneo, que não necessita de qualquer estímulo externo."
    ],
    "correctIndex": 3,
    "explanation": "O decaimento radioativo é espontâneo: ocorre no núcleo, sem luz, calor ou qualquer outro estímulo externo. Por isso a fonte continua a emitir mesmo isolada e fria.",
    "distractorAnalysis": [
      "Está incorreta: a emissão ocorre no escuro, pelo que não depende da luz incidente.",
      "Está incorreta: a fonte emite sem ser aquecida; a temperatura não é condição para o decaimento.",
      "Está incorreta: o decaimento é um processo nuclear, e não uma reação química entre eletrões orbitais."
    ],
    "nursingApplication": "As fontes radioativas usadas em serviços de saúde emitem continuamente, mesmo quando guardadas, razão pela qual são mantidas em recipientes e locais adequados."
  },
  {
    "id": 5088,
    "topicId": 5,
    "question": "Durante a emissão de radiação por um núcleo instável, o que acontece à energia do sistema?",
    "options": [
      "Há absorção de energia do meio, necessária para que o núcleo se desintegre.",
      "Há libertação de energia, sob a forma de partículas e/ou radiação eletromagnética.",
      "Não há qualquer troca de energia, pois só se transforma a identidade do núcleo.",
      "Há libertação de energia apenas quando é emitida radiação γ, e não com α ou β."
    ],
    "correctIndex": 1,
    "explanation": "As emissões radioativas são acompanhadas de libertação de energia. As partículas α e β transportam energia, tal como os fotões γ.",
    "distractorAnalysis": [
      "Está incorreta: o núcleo não precisa de absorver energia para decair: o decaimento é espontâneo e liberta energia.",
      "Está incorreta: o núcleo-filho é mais estável do que o núcleo-pai e a diferença é libertada sob a forma de energia.",
      "Está incorreta: as partículas α e β também transportam energia, pelo que a libertação não se limita à radiação γ."
    ],
    "nursingApplication": "A energia libertada no decaimento é a que permite aos detetores, como a gama-câmara usada em cintigrafia, registar a presença do radiofármaco no órgão."
  },
  {
    "id": 5089,
    "topicId": 5,
    "question": "Um núcleo instável de iodo-131 (Z = 53) emite radiação e transforma-se. Qual é o objetivo desta transformação?",
    "options": [
      "Atingir uma configuração mais estável, libertando energia sob a forma de radiação.",
      "Igualar o número de eletrões orbitais ao número de protões do núcleo.",
      "Aumentar o número de nucleões, para reforçar a coesão do núcleo.",
      "Absorver energia do meio, para ficar mais fortemente ligado."
    ],
    "correctIndex": 0,
    "explanation": "O objetivo do decaimento é atingir a estabilidade, através da emissão de energia radioativa. O núcleo-filho resultante é mais estável do que o núcleo-pai.",
    "distractorAnalysis": [
      "Está incorreta: o átomo neutro já tem tantos eletrões como protões; o decaimento resolve a instabilidade do núcleo.",
      "Está incorreta: a emissão de partículas e de radiação reduz a energia do núcleo e não aumenta o número de nucleões.",
      "Está incorreta: o decaimento liberta energia, e não a absorve; é assim que o núcleo ganha estabilidade."
    ],
    "nursingApplication": "O iodo-131 usado em doenças da tiroide é um núcleo instável que liberta energia ao decair, o que justifica o seu uso terapêutico sob indicação médica."
  },
  {
    "id": 5090,
    "topicId": 5,
    "question": "Qual dos seguintes NÃO é um fator que determina a estabilidade de um núcleo atómico?",
    "options": [
      "Uma relação N/Z favorável no núcleo.",
      "O emparelhamento dos nucleões do núcleo.",
      "Um número elevado de eletrões orbitais.",
      "Uma grande energia de ligação entre nucleões."
    ],
    "correctIndex": 2,
    "explanation": "A estabilidade nuclear depende da relação N/Z, do emparelhamento de nucleões e da energia de ligação entre os nucleões. Os eletrões orbitais não pertencem ao núcleo e não determinam a sua estabilidade.",
    "distractorAnalysis": [
      "Está incorreta: esta é uma condição de estabilidade, e a pergunta pede a opção que não é fator.",
      "Está incorreta: o emparelhamento de nucleões favorece a estabilidade, pelo que é um fator.",
      "Está incorreta: uma grande energia de ligação entre os nucleões é um dos fatores de estabilidade."
    ],
    "nursingApplication": "Perceber que a estabilidade é uma propriedade do núcleo ajuda o enfermeiro a compreender por que razão isótopos do mesmo elemento, como o carbono-12 e o carbono-14, se comportam de modo diferente."
  },
  {
    "id": 5091,
    "topicId": 5,
    "question": "O núcleo X tem maior energia de ligação por nucleão do que o núcleo Y. Considerando apenas este fator, que previsão se pode fazer sobre a estabilidade dos dois núcleos?",
    "options": [
      "X é menos estável e tem maior tendência a decair do que Y.",
      "X é mais estável e Y tem maior tendência a decair.",
      "Os dois são igualmente estáveis, pois a energia de ligação não influencia o decaimento.",
      "X é mais estável, mas só se tiver mais eletrões orbitais do que Y."
    ],
    "correctIndex": 1,
    "explanation": "Uma grande energia de ligação entre os nucleões (por nucleão) é um dos fatores de estabilidade nuclear. Considerando só este fator, o núcleo com menor energia de ligação por nucleão tende mais a decair.",
    "distractorAnalysis": [
      "Está incorreta: uma maior energia de ligação favorece a estabilidade, pelo que X decai menos.",
      "Está incorreta: a energia de ligação entre os nucleões é um dos fatores que determinam a estabilidade nuclear.",
      "Está incorreta: a estabilidade é uma propriedade do núcleo e não depende do número de eletrões orbitais."
    ],
    "nursingApplication": "Os radionuclídeos usados em cintigrafia são escolhidos por serem instáveis, pois só assim emitem a radiação que a gama-câmara regista."
  },
  {
    "id": 5092,
    "topicId": 5,
    "question": "O carbono-14 (Z = 6) tem 8 neutrões e é instável, ao passo que o carbono-12 (Z = 6) tem 6 neutrões e é estável. Que fator de estabilidade melhor explica a diferença?",
    "options": [
      "O carbono-14 tem um número de protões diferente do carbono-12.",
      "O carbono-14 tem mais eletrões orbitais do que o carbono-12.",
      "O carbono-14 tem menor carga elétrica nuclear do que o carbono-12.",
      "A relação N/Z do carbono-14 é desfavorável, por excesso de neutrões."
    ],
    "correctIndex": 3,
    "explanation": "Os dois nuclídeos têm o mesmo Z, mas o carbono-14 tem mais neutrões (N/Z = 8/6, contra 6/6). Esse excesso de neutrões torna a relação N/Z desfavorável e o núcleo instável.",
    "distractorAnalysis": [
      "Está incorreta: são isótopos do mesmo elemento, com Z = 6 em ambos, pelo que o número de protões é igual.",
      "Está incorreta: o átomo neutro tem tantos eletrões como protões, e Z é igual nos dois isótopos; a diferença está nos neutrões do núcleo.",
      "Está incorreta: a carga nuclear depende só dos protões, que são 6 nos dois núcleos; o que difere é o número de neutrões."
    ],
    "nursingApplication": "Ao ler que um radioisótopo é um isótopo instável de um elemento comum, o enfermeiro percebe que o núcleo difere pelo número de neutrões e não pelo elemento químico."
  },
  {
    "id": 5093,
    "topicId": 5,
    "question": "Qual das seguintes afirmações descreve corretamente um fator de estabilidade nuclear?",
    "options": [
      "A relação N/Z é favorável quando o número de eletrões iguala o de protões.",
      "A energia de ligação entre nucleões é a energia necessária para arrancar um eletrão.",
      "A estabilidade do núcleo depende apenas do seu número de protões.",
      "O emparelhamento de nucleões contribui para a estabilidade do núcleo."
    ],
    "correctIndex": 3,
    "explanation": "O emparelhamento de nucleões é um dos três fatores de estabilidade, a par da relação N/Z e da energia de ligação entre os nucleões. Estes fatores dizem respeito aos nucleões do núcleo e não aos eletrões orbitais.",
    "distractorAnalysis": [
      "Está incorreta: N/Z é a razão entre neutrões e protões do núcleo e não envolve os eletrões orbitais.",
      "Está incorreta: essa é a energia de ligação do eletrão ao núcleo; a energia de ligação nuclear refere-se aos nucleões entre si.",
      "Está incorreta: a estabilidade depende também dos neutrões, através da relação N/Z, do emparelhamento e da energia de ligação."
    ],
    "nursingApplication": "Perceber que a estabilidade depende do núcleo ajuda o enfermeiro a perceber por que razão só alguns isótopos de um elemento, como o iodo-131, são radioativos."
  },
  {
    "id": 5094,
    "topicId": 5,
    "question": "Numa desintegração, um núcleo emite primeiro uma partícula α e, de seguida, fotões γ. Como se classificam, respetivamente, estas duas emissões?",
    "options": [
      "Ambas são radiação corpuscular, formadas por partículas com massa.",
      "A partícula α é radiação corpuscular e os fotões γ são radiação eletromagnética.",
      "Ambas são radiação eletromagnética, formadas por fotões sem massa.",
      "A partícula α é radiação eletromagnética e os fotões γ são corpusculares."
    ],
    "correctIndex": 1,
    "explanation": "A radiação α é corpuscular (núcleos de hélio), ao passo que a radiação γ é eletromagnética (fotões). Neste caso, a emissão é do tipo α + γ.",
    "distractorAnalysis": [
      "Está incorreta: os fotões γ não têm massa e são radiação eletromagnética, e não corpuscular.",
      "Está incorreta: a partícula α é um núcleo de hélio, com massa, pelo que é radiação corpuscular.",
      "Está incorreta: as classificações estão trocadas: a α é corpuscular e a γ é eletromagnética."
    ],
    "nursingApplication": "Na ficha de um radiofármaco, distinguir a componente corpuscular da eletromagnética ajuda o enfermeiro a compreender que o detetor de uma gama-câmara regista apenas os fotões."
  },
  {
    "id": 5095,
    "topicId": 5,
    "question": "Um núcleo-filho fica com excesso de energia depois de uma desintegração α. Que emissão costuma libertar esse excesso de energia?",
    "options": [
      "Radiação γ, emitida sob a forma de fotões, sem alterar Z nem A.",
      "Uma partícula β⁺, que reduz o número atómico em uma unidade.",
      "Uma segunda partícula α, que acompanha a primeira.",
      "Raios X, emitidos pelos eletrões orbitais da camada mais interna."
    ],
    "correctIndex": 0,
    "explanation": "A emissão γ geralmente sucede a uma emissão α ou β, pois liberta o excesso de energia do núcleo depois da desintegração. Os fotões γ não alteram Z nem A.",
    "distractorAnalysis": [
      "Está incorreta: uma emissão β⁺ alteraria Z e não é a emissão que, por regra, liberta o excesso de energia do núcleo.",
      "Está incorreta: uma segunda emissão α não é obrigatória; o excesso de energia é libertado sob a forma de fotões γ.",
      "Está incorreta: os raios X têm origem em eletrões orbitais ou travados num alvo, e não no excesso de energia do núcleo."
    ],
    "nursingApplication": "A radiação γ que acompanha muitas desintegrações é a que atravessa o corpo do utente e é registada pela gama-câmara numa cintigrafia."
  },
  {
    "id": 5096,
    "topicId": 5,
    "question": "Uma fonte emite, em cada desintegração, uma partícula carregada e também fotões. Como se classifica este tipo de emissão?",
    "options": [
      "Emissão do tipo α ou β, com radiação apenas corpuscular.",
      "Emissão do tipo γ isolada, com radiação apenas eletromagnética.",
      "Emissão do tipo α + γ ou β + γ, com radiação corpuscular e eletromagnética.",
      "Emissão do tipo α + β, com duas radiações corpusculares."
    ],
    "correctIndex": 2,
    "explanation": "Há quatro tipos de emissão radioativa: α, β, α + γ e β + γ. Quando existem partículas e fotões em simultâneo, trata-se de radiação corpuscular mais eletromagnética.",
    "distractorAnalysis": [
      "Está incorreta: sem fotões, a emissão seria só corpuscular, mas aqui há também fotões, que são radiação eletromagnética.",
      "Está incorreta: uma emissão só de γ não inclui partícula carregada, ao passo que aqui existe uma em cada desintegração.",
      "Está incorreta: α + β não é um dos tipos de emissão, e os fotões, que existem aqui, não são corpusculares."
    ],
    "nursingApplication": "Quando um radiofármaco é descrito como emissor β + γ, o enfermeiro sabe que a parte γ é a que permite obter a imagem fora do corpo do utente."
  },
  {
    "id": 5097,
    "topicId": 5,
    "question": "Qual das opções contém apenas radiações corpusculares?",
    "options": [
      "As partículas β e a radiação γ.",
      "As partículas α e a radiação γ.",
      "A radiação γ e os raios X.",
      "As partículas α e as partículas β."
    ],
    "correctIndex": 3,
    "explanation": "As radiações α (núcleos de hélio) e β (eletrões ou positrões) são corpusculares. A radiação γ e os raios X são de natureza eletromagnética.",
    "distractorAnalysis": [
      "Está incorreta: a radiação γ é constituída por fotões e é eletromagnética, não corpuscular.",
      "Está incorreta: a radiação γ não é corpuscular; só a α o é, nesta opção.",
      "Está incorreta: a radiação γ e os raios X são ambas eletromagnéticas, não corpusculares."
    ],
    "nursingApplication": "Distinguir radiação corpuscular de eletromagnética ajuda o enfermeiro a interpretar as fichas dos radiofármacos de medicina nuclear."
  },
  {
    "id": 5098,
    "topicId": 5,
    "question": "Num estudo, identifica-se uma partícula emitida por um núcleo com carga +2 e quatro nucleões. De que partícula se trata e qual é a sua composição?",
    "options": [
      "Partícula α: um núcleo de hélio, com 2 protões e 2 eletrões.",
      "Partícula α: um núcleo de hélio, com 4 protões e nenhum neutrão.",
      "Partícula α: um núcleo de hélio, com 2 protões e 2 neutrões.",
      "Partícula β: um eletrão ligado a um núcleo de hélio."
    ],
    "correctIndex": 2,
    "explanation": "A partícula α é um núcleo de hélio, constituído por 2 protões e 2 neutrões, o que dá carga +2 e 4 nucleões. Os eletrões não fazem parte do núcleo.",
    "distractorAnalysis": [
      "Está incorreta: os eletrões não fazem parte do núcleo de hélio e a carga +2 viria só de 2 protões, sem eletrões.",
      "Está incorreta: quatro protões dariam carga +4; a carga +2 com 4 nucleões corresponde a 2 protões e 2 neutrões.",
      "Está incorreta: a partícula β é um eletrão ou um positrão, e não um eletrão ligado a um núcleo de hélio."
    ],
    "nursingApplication": "Reconhecer que a radiação α é um núcleo de hélio explica a sua massa e carga elevadas e a rápida perda de energia ao atravessar a matéria."
  },
  {
    "id": 5099,
    "topicId": 5,
    "question": "Um núcleo emite uma partícula α. Como varia o número de neutrões N = A − Z do núcleo?",
    "options": [
      "Diminui 4 unidades.",
      "Diminui 2 unidades.",
      "Mantém-se constante.",
      "Aumenta 2 unidades."
    ],
    "correctIndex": 1,
    "explanation": "Na emissão α, A diminui 4 e Z diminui 2. Como N = A − Z, vem ΔN = −4 − (−2) = −2, ou seja, o núcleo perde 2 neutrões e 2 protões.",
    "distractorAnalysis": [
      "Está incorreta: 4 é a variação de A e não a de N; o núcleo perde 2 protões e 2 neutrões e não 4 neutrões.",
      "Está incorreta: o núcleo perde 4 nucleões, dois dos quais são neutrões, pelo que N não se mantém.",
      "Está incorreta: o núcleo perde neutrões e não os ganha; N diminui."
    ],
    "nursingApplication": "Compreender que a emissão α reduz o núcleo em 2 protões e 2 neutrões ajuda a interpretar a transformação de um elemento noutro, como o rádio em radão."
  },
  {
    "id": 5100,
    "topicId": 5,
    "question": "Uma partícula α incide sobre a pele de um utente. O que acontece?",
    "options": [
      "É detida pela pele, devido ao seu fraco poder de penetração.",
      "Atravessa a pele e atinge os órgãos internos, tal como os fotões γ.",
      "Atravessa a pele por ter carga e massa elevadas, ficando retida só nos ossos.",
      "É detida pela pele, devido ao seu fraco poder ionizante."
    ],
    "correctIndex": 0,
    "explanation": "As partículas α têm fraco poder de penetração, sendo detidas por uma folha de papel e pela pele. Têm, porém, elevado poder ionizante, e não fraco.",
    "distractorAnalysis": [
      "Está incorreta: são os fotões γ que têm elevado poder de penetração; as partículas α ficam retidas na pele.",
      "Está incorreta: a carga e a massa elevadas fazem com que a partícula α ceda a energia num percurso muito curto, ficando retida.",
      "Está incorreta: o poder ionizante da partícula α é elevado; o que é fraco é o poder de penetração."
    ],
    "nursingApplication": "Em cuidados a utentes que receberam radiofármacos, o enfermeiro sabe que a radiação α externa seria detida pela pele, ao contrário da radiação γ que atravessa o corpo."
  },
  {
    "id": 5101,
    "topicId": 5,
    "question": "Porque é que uma partícula α, apesar de pouco penetrante, tem um poder ionizante muito elevado?",
    "options": [
      "Porque atravessa grandes espessuras de matéria, cedendo pouca energia em cada ponto.",
      "Porque é radiação eletromagnética, sem massa, e interage diretamente com os eletrões.",
      "Porque se move a velocidades próximas da velocidade da luz, o que a torna mais penetrante.",
      "Porque cede a sua energia num percurso muito curto."
    ],
    "correctIndex": 3,
    "explanation": "Uma partícula α cede a sua energia ao meio num percurso muito curto, o que lhe confere elevado poder ionizante e fraco poder de penetração. As duas propriedades estão ligadas.",
    "distractorAnalysis": [
      "Está incorreta: uma partícula que atravessasse grandes espessuras cederia pouca energia em cada ponto e seria pouco ionizante; a α é o contrário.",
      "Está incorreta: a radiação α é corpuscular, formada por núcleos de hélio com massa, e não eletromagnética.",
      "Está incorreta: as velocidades próximas da da luz são mencionadas para as partículas β⁻, e não para as α; além disso, ser mais penetrante não explica a ionização elevada."
    ],
    "nursingApplication": "Por a radiação α ser detida pela pele mas muito ionizante, o enfermeiro percebe que o maior risco de um emissor α surge se a fonte entrar no organismo."
  },
  {
    "id": 5102,
    "topicId": 5,
    "question": "Entre os núcleos seguintes, qual é o mais provável emissor de partículas α?",
    "options": [
      "Urânio-238 (Z = 92)",
      "Carbono-12 (Z = 6)",
      "Oxigénio-16 (Z = 8)",
      "Azoto-14 (Z = 7)"
    ],
    "correctIndex": 0,
    "explanation": "A emissão α ocorre em elementos com núcleos pesados, como o urânio. O carbono-12, o oxigénio-16 e o azoto-14 têm núcleos leves e estáveis.",
    "distractorAnalysis": [
      "Está incorreta: é um núcleo leve e estável, que não emite partículas α.",
      "Está incorreta: é um núcleo leve e estável, e a emissão α é típica de núcleos pesados.",
      "Está incorreta: é um núcleo leve e estável, pelo que não é emissor α."
    ],
    "nursingApplication": "Ao identificar que os emissores α são núcleos pesados, o enfermeiro percebe que elementos leves, como os constituintes habituais do corpo, não têm este tipo de emissão."
  },
  {
    "id": 5103,
    "topicId": 5,
    "question": "Num detetor, uma radiação identificada tem fraco poder de penetração e poder ionizante muito elevado. Qual é a radiação?",
    "options": [
      "Radiação β⁻",
      "Radiação β⁺",
      "Radiação α",
      "Radiação γ"
    ],
    "correctIndex": 2,
    "explanation": "A radiação α é detida por uma folha de papel e pela pele (fraca penetração) e é muito ionizante. A β tem penetração e ionização médias, e a γ tem penetração muito elevada.",
    "distractorAnalysis": [
      "Está incorreta: tem poder de penetração e de ionização médios, e não fraco e muito elevado.",
      "Está incorreta: tem, como a β⁻, penetração e ionização médias.",
      "Está incorreta: tem poder de penetração muito elevado e ionização indireta; é o oposto do descrito."
    ],
    "nursingApplication": "Ao comparar o poder de penetração das radiações, o enfermeiro percebe por que razão a cintigrafia usa radiação γ, que sai do corpo, e não radiação α."
  },
  {
    "id": 5104,
    "topicId": 5,
    "question": "Num detetor, observam-se as trajetórias de dois tipos de partículas emitidas por fontes radioativas: uma quase retilínea e outra muito desviada. A quais correspondem?",
    "options": [
      "A pouco divergente é de partículas β e a divergente é de partículas α.",
      "A pouco divergente é de partículas α e a divergente é de partículas β.",
      "Ambas são pouco divergentes, por serem partículas emitidas pelo núcleo.",
      "Ambas são divergentes, por serem partículas emitidas pelo núcleo."
    ],
    "correctIndex": 1,
    "explanation": "As partículas α têm trajetória pouco divergente, ao passo que as partículas β têm trajetória divergente. Esta diferença ajuda a distinguir os dois tipos de emissão corpuscular.",
    "distractorAnalysis": [
      "Está incorreta: as trajetórias estão trocadas: é a α que é pouco divergente e a β que é divergente.",
      "Está incorreta: as duas radiações não têm a mesma trajetória: a β é divergente e a α não.",
      "Está incorreta: as duas radiações não têm a mesma trajetória: a α é pouco divergente e a β é divergente."
    ],
    "nursingApplication": "Em medicina nuclear, conhecer o comportamento de cada tipo de radiação (α, β ou γ) ajuda o enfermeiro a perceber por que razão os cuidados de proteção variam consoante o radioisótopo."
  },
  {
    "id": 5105,
    "topicId": 5,
    "question": "Um núcleo com excesso de neutrões, em relação aos isótopos estáveis do mesmo elemento, tende a ganhar estabilidade. Que processo ocorre?",
    "options": [
      "Emite um positrão (β⁺), transformando um protão num neutrão.",
      "Emite uma partícula α, perdendo 2 protões e 2 neutrões.",
      "Emite radiação γ, que converte neutrões em protões.",
      "Emite um eletrão (β⁻), transformando um neutrão num protão."
    ],
    "correctIndex": 3,
    "explanation": "O excesso de neutrões corrige-se por emissão β⁻: um neutrão transforma-se num protão e é emitido um eletrão. O número atómico aumenta 1 e A mantém-se.",
    "distractorAnalysis": [
      "Está incorreta: a emissão β⁺ ocorre quando há excesso de protões, e não de neutrões.",
      "Está incorreta: a emissão α reduz Z e A e ocorre em núcleos pesados; não corrige especificamente o excesso de neutrões.",
      "Está incorreta: a radiação γ não altera Z nem A, pelo que não converte neutrões em protões."
    ],
    "nursingApplication": "Radioisótopos com excesso de neutrões, como o iodo-131 usado em doenças da tiroide, decaem por emissão β⁻ para núcleos mais estáveis."
  },
  {
    "id": 5106,
    "topicId": 5,
    "question": "O flúor-18 (Z = 9), usado na PET, tem excesso de protões em relação aos isótopos estáveis do flúor. Que transformação ocorre no núcleo quando este decai?",
    "options": [
      "Um neutrão transforma-se num protão e é emitido um eletrão.",
      "Um protão transforma-se num neutrão e é emitido um positrão.",
      "Um protão transforma-se num neutrão e é emitido um eletrão.",
      "Um protão e um neutrão formam uma partícula α, que é emitida."
    ],
    "correctIndex": 1,
    "explanation": "O excesso de protões corrige-se por emissão β⁺: um protão passa a neutrão com emissão de um positrão. Z diminui 1 e A mantém-se.",
    "distractorAnalysis": [
      "Está incorreta: essa transformação (neutrão em protão com emissão de eletrão) é a da emissão β⁻, que ocorre com excesso de neutrões.",
      "Está incorreta: a conversão de protão em neutrão acompanha-se da emissão de um positrão (carga +), e não de um eletrão.",
      "Está incorreta: a emissão α envolve 2 protões e 2 neutrões, e não corrige o excesso de protões neste processo."
    ],
    "nursingApplication": "O flúor-18 na FDG é um emissor β⁺: o positrão emitido é o que permite obter a imagem metabólica no exame PET."
  },
  {
    "id": 5107,
    "topicId": 5,
    "question": "Um radiofármaco usado na PET contém um núcleo com excesso de protões. Que partícula é emitida pelo núcleo e qual é a sua utilidade?",
    "options": [
      "Um eletrão, que é usado na tecnologia de imagem PET.",
      "Uma partícula α, que é usada na tecnologia de imagem PET.",
      "Um positrão, que é usado na tecnologia de imagem PET.",
      "Um fotão γ emitido diretamente pelo núcleo, base da imagem PET."
    ],
    "correctIndex": 2,
    "explanation": "No núcleo com excesso de protões, um protão transforma-se em neutrão e emite-se um positrão (β⁺). O positrão é utilizado na tecnologia de imagem PET.",
    "distractorAnalysis": [
      "Está incorreta: o eletrão (β⁻) é emitido quando há excesso de neutrões; com excesso de protões a partícula é o positrão.",
      "Está incorreta: a partícula α é emitida por núcleos pesados; a PET usa a emissão β⁺, e não a α.",
      "Está incorreta: o núcleo emite o positrão (β⁺); os fotões γ da PET resultam da aniquilação do positrão com um eletrão."
    ],
    "nursingApplication": "Num exame PET com flúor-18, o enfermeiro administra o radiofármaco sabendo que é o positrão emitido que dá origem à imagem metabólica."
  },
  {
    "id": 5108,
    "topicId": 5,
    "question": "Uma partícula emitida por um núcleo tem carga −1, massa cerca de 1/1840 da do protão e velocidade que pode aproximar-se da da luz. Que partícula é?",
    "options": [
      "Um eletrão, da emissão β⁻.",
      "Um positrão, da emissão β⁺.",
      "Um protão, da emissão de partículas α.",
      "Um núcleo de hélio, da emissão α."
    ],
    "correctIndex": 0,
    "explanation": "Uma partícula de carga −1 e massa muito pequena, com velocidades próximas da da luz, é o eletrão emitido na desintegração β⁻. O positrão tem a mesma massa mas carga +1.",
    "distractorAnalysis": [
      "Está incorreta: o positrão tem carga +1; aqui a carga é −1.",
      "Está incorreta: o protão tem carga +1 e uma massa cerca de 1840 vezes a do eletrão, o oposto do descrito.",
      "Está incorreta: o núcleo de hélio tem carga +2 e massa muito superior à do eletrão."
    ],
    "nursingApplication": "Perceber que a radiação β⁻ é um feixe de eletrões ajuda o enfermeiro a compreender o seu poder de penetração médio nos tecidos."
  },
  {
    "id": 5109,
    "topicId": 5,
    "question": "Qual é a ordem correta das radiações α, β e γ por poder de penetração crescente?",
    "options": [
      "β, depois α, depois γ.",
      "γ, depois β, depois α.",
      "α, depois γ, depois β.",
      "α, depois β, depois γ."
    ],
    "correctIndex": 3,
    "explanation": "A radiação α tem fraco poder de penetração, a β tem poder de penetração médio (alguns milímetros de alumínio e de tecidos vivos) e a γ tem penetração muito elevada.",
    "distractorAnalysis": [
      "Está incorreta: troca a α com a β: a α é a menos penetrante, sendo detida por papel e pela pele.",
      "Está incorreta: inverte a ordem: a γ é a mais penetrante e a α a menos penetrante.",
      "Está incorreta: coloca a γ abaixo da β, mas a γ é a mais penetrante das três."
    ],
    "nursingApplication": "Como a radiação γ é muito penetrante, é a que atravessa o corpo do utente e é detetada fora dele nos exames de imagem."
  },
  {
    "id": 5110,
    "topicId": 5,
    "question": "Que característica é comum às emissões β⁻ e β⁺ e as distingue da emissão α?",
    "options": [
      "O número de massa A varia uma unidade, e Z mantém-se.",
      "O número de massa A diminui 4 unidades, e Z diminui 2.",
      "O número de massa A e o número atómico Z mantêm-se.",
      "O número de massa A mantém-se, e Z varia uma unidade."
    ],
    "correctIndex": 3,
    "explanation": "Nas emissões β⁻ e β⁺, um neutrão passa a protão ou um protão a neutrão, pelo que A se mantém e Z varia uma unidade. Na emissão α, A diminui 4 e Z diminui 2.",
    "distractorAnalysis": [
      "Está incorreta: numa emissão β o número de nucleões não varia; só muda o seu tipo.",
      "Está incorreta: essa é a variação da emissão α, e não das emissões β.",
      "Está incorreta: na emissão β, Z não se mantém: aumenta (β⁻) ou diminui (β⁺) uma unidade; A e Z só se mantêm ambos na emissão γ."
    ],
    "nursingApplication": "Saber que na emissão β o número de massa não varia ajuda a prever o núcleo-filho, como no iodo-131 que decai para xénon-131."
  },
  {
    "id": 5111,
    "topicId": 5,
    "question": "Numa emissão β⁺, o que acontece ao número de neutrões N do núcleo?",
    "options": [
      "Aumenta uma unidade.",
      "Diminui uma unidade.",
      "Mantém-se constante.",
      "Diminui duas unidades."
    ],
    "correctIndex": 0,
    "explanation": "Na emissão β⁺ um protão transforma-se num neutrão: Z diminui 1 e A mantém-se. Como N = A − Z, o número de neutrões aumenta uma unidade.",
    "distractorAnalysis": [
      "Está incorreta: essa seria a variação de N numa emissão β⁻, em que um neutrão passa a protão.",
      "Está incorreta: como A se mantém e Z diminui 1, N = A − Z aumenta; não fica constante.",
      "Está incorreta: diminuir duas unidades corresponde à variação de N numa emissão α, e não numa emissão β⁺."
    ],
    "nursingApplication": "Compreender a conversão de um protão em neutrão ajuda o enfermeiro a perceber a transformação dos radioisótopos usados em PET."
  },
  {
    "id": 5112,
    "topicId": 5,
    "question": "Um neutrão livre desintegra-se espontaneamente. Quais são os produtos e a que emissão radioativa corresponde este processo?",
    "options": [
      "Protão, positrão e antineutrino, o mesmo processo da emissão β⁺.",
      "Eletrão e positrão, o mesmo processo da aniquilação da PET.",
      "Protão, eletrão e antineutrino, o mesmo processo da emissão β⁻.",
      "Partícula α e antineutrino, o mesmo processo da emissão α."
    ],
    "correctIndex": 2,
    "explanation": "No estado livre o neutrão é radioativo e desintegra-se em protão, eletrão (negativo) e antineutrino. É a mesma transformação neutrão → protão da emissão β⁻.",
    "distractorAnalysis": [
      "Está incorreta: a emissão β⁺ corresponde à transformação de um protão em neutrão, e não ao contrário.",
      "Está incorreta: a aniquilação do positrão com um eletrão ocorre na PET e não é a desintegração de um neutrão livre.",
      "Está incorreta: a partícula α tem 2 protões e 2 neutrões e não resulta da desintegração de um só neutrão."
    ],
    "nursingApplication": "A transformação do neutrão em protão no decaimento β⁻ explica por que razão o iodo-131 usado em doenças da tiroide muda de elemento ao decair."
  },
  {
    "id": 5113,
    "topicId": 5,
    "question": "O polónio-210 (Z = 84) decai por emissão α. Qual é o número atómico e o número de massa do núcleo-filho?",
    "options": [
      "Z = 86 e A = 214",
      "Z = 82 e A = 206",
      "Z = 82 e A = 210",
      "Z = 84 e A = 206"
    ],
    "correctIndex": 1,
    "explanation": "Na emissão α, Z diminui 2 e A diminui 4. O núcleo-filho tem, por isso, Z = 82 e A = 206, que corresponde ao chumbo-206.",
    "solution": [
      "Dados: polónio-210, Z = 84 e A = 210; emissão α.",
      "Fórmula: Z<sub>filho</sub> = Z − 2 e A<sub>filho</sub> = A − 4.",
      "Substituição: Z<sub>filho</sub> = 84 − 2 = 82 e A<sub>filho</sub> = 210 − 4 = 206.",
      "Resultado: Z = 82 e A = 206",
      "Conclusão: o núcleo-filho é o chumbo-206."
    ],
    "distractorAnalysis": [
      "Está incorreta: somou 2 a Z e 4 a A, em vez de subtrair.",
      "Está incorreta: subtraiu 2 a Z, mas esqueceu-se de subtrair 4 a A, mantendo A = 210.",
      "Está incorreta: subtraiu 4 a A, mas esqueceu-se de subtrair 2 a Z, mantendo Z = 84."
    ],
    "nursingApplication": "Um emissor α como o polónio-210 é pouco perigoso fora do corpo, porque a pele detém a radiação, mas torna-se perigoso se for ingerido ou inalado."
  },
  {
    "id": 5114,
    "topicId": 5,
    "question": "O radão-222 (Z = 86) decai por emissão α. Sabendo que Z = 82 é o chumbo, Z = 84 é o polónio e Z = 86 é o radão, qual é o núcleo-filho?",
    "options": [
      "Polónio-218",
      "Radão-218",
      "Chumbo-218",
      "Polónio-222"
    ],
    "correctIndex": 0,
    "explanation": "Na emissão α, Z diminui 2 e A diminui 4. O núcleo-filho tem Z = 84 e A = 218, ou seja, polónio-218.",
    "solution": [
      "Dados: radão-222, Z = 86 e A = 222; emissão α; Z = 84 é o polónio.",
      "Fórmula: Z<sub>filho</sub> = Z − 2 e A<sub>filho</sub> = A − 4.",
      "Substituição: Z<sub>filho</sub> = 86 − 2 = 84 e A<sub>filho</sub> = 222 − 4 = 218.",
      "Resultado: polónio-218",
      "Conclusão: com Z = 84 o elemento é o polónio, e A = 218."
    ],
    "distractorAnalysis": [
      "Está incorreta: subtraiu 4 a A, mas manteve Z = 86, pelo que o elemento continuaria a ser o radão.",
      "Está incorreta: subtraiu 4 a Z em vez de 2, obtendo Z = 82 (chumbo).",
      "Está incorreta: subtraiu 2 a Z, mas manteve A = 222."
    ],
    "nursingApplication": "O radão é um gás radioativo natural, e saber que o seu decaimento α dá origem a polónio mostra ao enfermeiro como um elemento se transforma noutro."
  },
  {
    "id": 5115,
    "topicId": 5,
    "question": "O estrôncio-90 (Z = 38) decai por emissão β⁻. Qual é o número atómico e o número de massa do núcleo-filho?",
    "options": [
      "Z = 37 e A = 90",
      "Z = 39 e A = 90",
      "Z = 39 e A = 91",
      "Z = 36 e A = 86"
    ],
    "correctIndex": 1,
    "explanation": "Na emissão β⁻, um neutrão passa a protão: Z aumenta 1 e A mantém-se. O núcleo-filho tem Z = 39 e A = 90, ou seja, ítrio-90.",
    "solution": [
      "Dados: estrôncio-90, Z = 38 e A = 90; emissão β⁻.",
      "Fórmula: Z<sub>filho</sub> = Z + 1 e A<sub>filho</sub> = A.",
      "Substituição: Z<sub>filho</sub> = 38 + 1 = 39 e A<sub>filho</sub> = 90.",
      "Resultado: Z = 39 e A = 90",
      "Conclusão: o núcleo-filho é o ítrio-90."
    ],
    "distractorAnalysis": [
      "Está incorreta: subtraiu 1 a Z, aplicando a variação da emissão β⁺ em vez da β⁻.",
      "Está incorreta: somou 1 a Z, mas também somou 1 a A, que se mantém na emissão β.",
      "Está incorreta: aplicou a variação da emissão α (Z − 2 e A − 4), em vez da emissão β⁻."
    ],
    "nursingApplication": "O ítrio-90, núcleo-filho do estrôncio-90, é também um emissor β⁻ e é usado em medicina nuclear no tratamento de alguns tumores do fígado."
  },
  {
    "id": 5116,
    "topicId": 5,
    "question": "O flúor-18 (Z = 9), usado na PET, transforma-se em oxigénio-18 (Z = 8). Que tipo de emissão radioativa ocorre?",
    "options": [
      "Emissão β⁻",
      "Emissão α",
      "Emissão γ",
      "Emissão β⁺"
    ],
    "correctIndex": 3,
    "explanation": "O número de massa mantém-se (18) e Z diminui 1 (de 9 para 8). Isto é característico da emissão β⁺, em que um protão se transforma num neutrão.",
    "solution": [
      "Dados: pai com Z = 9 e A = 18; filho com Z = 8 e A = 18.",
      "Fórmula: ΔZ = Z<sub>filho</sub> − Z<sub>pai</sub> e ΔA = A<sub>filho</sub> − A<sub>pai</sub>.",
      "Substituição: ΔZ = 8 − 9 = −1 e ΔA = 18 − 18 = 0.",
      "Resultado: emissão β⁺",
      "Conclusão: Z diminui 1 e A mantém-se, o que corresponde a β⁺."
    ],
    "distractorAnalysis": [
      "Está incorreta: na emissão β⁻ o número atómico aumentaria uma unidade, e aqui diminui.",
      "Está incorreta: na emissão α, Z diminuiria 2 e A diminuiria 4, mas aqui A não varia.",
      "Está incorreta: na emissão γ, Z e A não variam, e aqui Z passa de 9 para 8."
    ],
    "nursingApplication": "Num exame PET, o flúor-18 da FDG decai por emissão β⁺ para oxigénio-18, e o enfermeiro que acompanha o utente administra um radiofármaco com este núcleo instável."
  },
  {
    "id": 5117,
    "topicId": 5,
    "question": "O cobalto-60 (Z = 27, A = 60) decai por emissão β⁻ para níquel-60 (Z = 28). Quantos neutrões tem o núcleo-filho?",
    "options": [
      "33 neutrões",
      "34 neutrões",
      "32 neutrões",
      "31 neutrões"
    ],
    "correctIndex": 2,
    "explanation": "O núcleo-filho tem A = 60 e Z = 28, pelo que N = A − Z = 60 − 28 = 32 neutrões. O núcleo-pai tinha 33 neutrões e um deles passou a protão.",
    "solution": [
      "Dados: níquel-60, A = 60 e Z = 28.",
      "Fórmula: N = A − Z.",
      "Substituição: N = 60 − 28 = 32.",
      "Resultado: 32 neutrões",
      "Conclusão: o núcleo-pai tinha 60 − 27 = 33 neutrões e perdeu um (neutrão → protão)."
    ],
    "distractorAnalysis": [
      "Está incorreta: calculou N com o Z do núcleo-pai (60 − 27), e não com o do núcleo-filho.",
      "Está incorreta: usou Z = 26 (Z − 1 em vez de Z + 1), obtendo N = 60 − 26.",
      "Está incorreta: aplicou as variações da emissão α (A = 56 e Z = 25), em vez da emissão β⁻."
    ],
    "nursingApplication": "O cobalto-60, emissor β⁻ seguido de γ, foi usado em radioterapia, e o enfermeiro reconhece que a radiação γ que acompanha o decaimento exige proteção."
  },
  {
    "id": 5118,
    "topicId": 5,
    "question": "O rádio-226 (Z = 88) emite uma partícula α e o núcleo-filho emite outra partícula α. Qual é o número atómico e o número de massa do núcleo final?",
    "options": [
      "Z = 84 e A = 222",
      "Z = 84 e A = 218",
      "Z = 86 e A = 218",
      "Z = 80 e A = 218"
    ],
    "correctIndex": 1,
    "explanation": "Cada emissão α faz diminuir Z em 2 e A em 4. Após duas emissões, Z diminui 4 e A diminui 8, obtendo-se Z = 84 e A = 218 (polónio-218).",
    "solution": [
      "Dados: rádio-226, Z = 88 e A = 226; duas emissões α sucessivas.",
      "Fórmula: Z<sub>final</sub> = Z − 2 × 2 e A<sub>final</sub> = A − 4 × 2.",
      "Substituição: Z<sub>final</sub> = 88 − 4 = 84 e A<sub>final</sub> = 226 − 8 = 218.",
      "Resultado: Z = 84 e A = 218",
      "Conclusão: o núcleo final é o polónio-218."
    ],
    "distractorAnalysis": [
      "Está incorreta: só aplicou a redução de A numa das emissões, obtendo 226 − 4.",
      "Está incorreta: só aplicou a redução de Z numa das emissões, obtendo 88 − 2.",
      "Está incorreta: subtraiu 8 a Z (a variação total de A) em vez de 4."
    ],
    "nursingApplication": "A cadeia de decaimentos do rádio mostra ao enfermeiro que o núcleo-filho pode continuar instável e emitir de novo, até atingir um núcleo estável."
  },
  {
    "id": 5119,
    "topicId": 5,
    "question": "O estrôncio-90 (Z = 38) decai por emissão β⁻ para ítrio-90, que decai também por emissão β⁻ para um núcleo final. Qual é o número atómico e o número de massa do núcleo final?",
    "options": [
      "Z = 40 e A = 90",
      "Z = 39 e A = 90",
      "Z = 36 e A = 90",
      "Z = 40 e A = 92"
    ],
    "correctIndex": 0,
    "explanation": "Cada emissão β⁻ aumenta Z em 1 e mantém A. Após duas emissões, Z = 38 + 2 = 40 e A = 90, ou seja, zircónio-90.",
    "solution": [
      "Dados: estrôncio-90, Z = 38 e A = 90; duas emissões β⁻ sucessivas.",
      "Fórmula: Z<sub>final</sub> = Z + 2 e A<sub>final</sub> = A.",
      "Substituição: Z<sub>final</sub> = 38 + 2 = 40 e A<sub>final</sub> = 90.",
      "Resultado: Z = 40 e A = 90",
      "Conclusão: o núcleo final é o zircónio-90."
    ],
    "distractorAnalysis": [
      "Está incorreta: só aplicou uma emissão β⁻, parando no ítrio-90.",
      "Está incorreta: subtraiu 2 a Z em vez de somar, confundindo β⁻ com β⁺.",
      "Está incorreta: somou 1 a A em cada emissão, esquecendo que A se mantém na emissão β."
    ],
    "nursingApplication": "Ao acompanhar um utente tratado com ítrio-90, o enfermeiro sabe que este radioisótopo decai por emissão β⁻ para zircónio-90, um núcleo estável."
  },
  {
    "id": 5120,
    "topicId": 5,
    "question": "O molibdénio-99 (Z = 42) decai por emissão β⁻. Sabendo que Z = 41 é o nióbio, Z = 43 é o tecnécio e Z = 44 é o ruténio, qual é o elemento do núcleo-filho?",
    "options": [
      "Nióbio, com Z = 41 e A = 99",
      "Ruténio, com Z = 44 e A = 99",
      "Tecnécio, com Z = 43 e A = 99",
      "Zircónio, com Z = 40 e A = 95"
    ],
    "correctIndex": 2,
    "explanation": "Na emissão β⁻, Z aumenta 1 e A mantém-se. O núcleo-filho tem Z = 43 e A = 99, ou seja, é um núcleo de tecnécio.",
    "solution": [
      "Dados: molibdénio-99, Z = 42 e A = 99; emissão β⁻; Z = 43 é o tecnécio.",
      "Fórmula: Z<sub>filho</sub> = Z + 1 e A<sub>filho</sub> = A.",
      "Substituição: Z<sub>filho</sub> = 42 + 1 = 43 e A<sub>filho</sub> = 99.",
      "Resultado: tecnécio, com Z = 43 e A = 99",
      "Conclusão: o elemento do núcleo-filho é o tecnécio (Z = 43)."
    ],
    "distractorAnalysis": [
      "Está incorreta: subtraiu 1 a Z, aplicando a variação da emissão β⁺ em vez da β⁻.",
      "Está incorreta: somou 2 a Z em vez de 1, pois usou a variação de Z da emissão α com o sinal trocado.",
      "Está incorreta: aplicou as variações da emissão α (Z − 2 e A − 4), em vez da emissão β⁻."
    ],
    "nursingApplication": "O decaimento do molibdénio-99 origina tecnécio, o elemento do radioisótopo tecnécio-99m, usado em cintigrafias para estudar órgãos como pulmões e ossos."
  },
  {
    "id": 5121,
    "topicId": 5,
    "question": "Uma estação de rádio emite uma onda eletromagnética de frequência 150 MHz (1 MHz = 10⁶ Hz), que se propaga no vácuo. Com c = 3 × 10⁸ m/s, qual é o comprimento de onda?",
    "options": [
      "0,50 m",
      "2,0 × 10³ m",
      "2,0 m",
      "4,5 × 10¹⁶ m"
    ],
    "correctIndex": 2,
    "explanation": "Numa onda eletromagnética, a velocidade c é o produto do comprimento de onda pela frequência (c = λ·f). Logo, λ = c/f.",
    "solution": [
      "Dados: f = 150 MHz; c = 3 × 10⁸ m/s.",
      "Conversão: f = 150 × 10⁶ Hz = 1,5 × 10⁸ Hz.",
      "Fórmula: λ = c / f.",
      "Substituição: λ = 3 × 10⁸ / 1,5 × 10⁸.",
      "Resultado: 2,0 m"
    ],
    "distractorAnalysis": [
      "Está incorreta: inverteu a fórmula e calculou f/c = 1,5 × 10⁸ / 3 × 10⁸ = 0,50.",
      "Está incorreta: tomou 1 MHz como 10³ Hz (em vez de 10⁶ Hz), obtendo f = 1,5 × 10⁵ Hz e λ = 2000 m.",
      "Está incorreta: multiplicou c por f em vez de dividir; λ = c·f = 4,5 × 10¹⁶ não é um comprimento de onda possível."
    ],
    "nursingApplication": "O enfermeiro sabe que os sinais de rádio usados na telemetria, que transmitem o ECG do utente para a central de vigilância, são ondas eletromagnéticas e não precisam de meio material."
  },
  {
    "id": 5122,
    "topicId": 5,
    "question": "Uma lâmpada de radiação ultravioleta usada na desinfeção de superfícies emite radiação de comprimento de onda 250 nm (1 nm = 10⁻⁹ m). Com c = 3 × 10⁸ m/s, qual é a frequência dessa radiação?",
    "options": [
      "1,2 × 10¹⁵ Hz",
      "1,2 × 10¹⁶ Hz",
      "1,2 × 10¹² Hz",
      "8,3 × 10⁻¹⁶ Hz"
    ],
    "correctIndex": 0,
    "explanation": "A radiação ultravioleta é uma onda eletromagnética, pelo que c = λ·f e a frequência é f = c/λ. Convertendo λ para metros, f = 3 × 10⁸ / 2,5 × 10⁻⁷ Hz.",
    "solution": [
      "Dados: λ = 250 nm; c = 3 × 10⁸ m/s.",
      "Conversão: λ = 250 × 10⁻⁹ m = 2,5 × 10⁻⁷ m.",
      "Fórmula: f = c / λ.",
      "Substituição: f = 3 × 10⁸ / 2,5 × 10⁻⁷.",
      "Resultado: 1,2 × 10¹⁵ Hz"
    ],
    "distractorAnalysis": [
      "Está incorreta: tomou 1 nm como 10⁻¹⁰ m (confundiu com o ångström), o que dá λ = 2,5 × 10⁻⁸ m e f = 1,2 × 10¹⁶ Hz.",
      "Está incorreta: tomou 1 nm como 10⁻⁶ m (confundiu com micrómetro), o que dá λ = 2,5 × 10⁻⁴ m e f = 1,2 × 10¹² Hz.",
      "Está incorreta: dividiu o comprimento de onda pela velocidade (λ/c), o que dá o inverso de uma velocidade e não uma frequência."
    ],
    "nursingApplication": "Numa sala de isolamento, o enfermeiro sabe que a luz ultravioleta de uma lâmpada de desinfeção é radiação eletromagnética de comprimento de onda mais curto do que o da luz visível."
  },
  {
    "id": 5123,
    "topicId": 5,
    "question": "Um tubo de raios X produz radiação de frequência 6 × 10¹⁸ Hz. Com c = 3 × 10⁸ m/s, qual é o comprimento de onda dessa radiação?",
    "options": [
      "5 × 10⁻¹⁰ m",
      "2 × 10¹⁰ m",
      "1,8 × 10²⁷ m",
      "5 × 10⁻¹¹ m"
    ],
    "correctIndex": 3,
    "explanation": "Os raios X são ondas eletromagnéticas, pelo que λ = c/f. O valor obtido, da ordem de 10⁻¹¹ m, é muito inferior ao da luz visível.",
    "solution": [
      "Dados: f = 6 × 10¹⁸ Hz; c = 3 × 10⁸ m/s.",
      "Fórmula: λ = c / f.",
      "Substituição: λ = 3 × 10⁸ / 6 × 10¹⁸ = 0,5 × 10⁻¹⁰.",
      "Resultado: 5 × 10⁻¹¹ m"
    ],
    "distractorAnalysis": [
      "Está incorreta: dividiu 3 × 10⁸ por 6 × 10¹⁸ e obteve 0,5 × 10⁻¹⁰, mas escreveu 5 × 10⁻¹⁰ sem ajustar o expoente.",
      "Está incorreta: dividiu f por c (6 × 10¹⁸ / 3 × 10⁸), o que inverte a fórmula e dá um valor absurdo para um comprimento de onda.",
      "Está incorreta: multiplicou c por f em vez de dividir, obtendo 1,8 × 10²⁷."
    ],
    "nursingApplication": "Na sala de radiologia, o enfermeiro lembra que os raios X têm comprimento de onda muito inferior ao da luz visível, da ordem de 10⁻¹⁰ m."
  },
  {
    "id": 5124,
    "topicId": 5,
    "question": "Uma onda eletromagnética no vácuo tem período T = 2 × 10⁻⁸ s. Com c = 3 × 10⁸ m/s, qual é o seu comprimento de onda?",
    "options": [
      "0,6 m",
      "6 m",
      "1,5 × 10¹⁶ m",
      "6,7 × 10⁻¹⁷ m"
    ],
    "correctIndex": 1,
    "explanation": "A frequência é o inverso do período (f = 1/T = 5 × 10⁷ Hz) e o comprimento de onda é λ = c/f, o que equivale a λ = c·T.",
    "solution": [
      "Dados: T = 2 × 10⁻⁸ s; c = 3 × 10⁸ m/s.",
      "Fórmula: f = 1/T e λ = c / f.",
      "Substituição: f = 1 / 2 × 10⁻⁸ = 5 × 10⁷ Hz; λ = 3 × 10⁸ / 5 × 10⁷.",
      "Resultado: 6 m"
    ],
    "distractorAnalysis": [
      "Está incorreta: errou na potência de dez ao dividir 3 × 10⁸ por 5 × 10⁷ (ou ao multiplicar c por T): o resultado é 6 m, e não 0,6 m.",
      "Está incorreta: dividiu c por T, tratando o período como se fosse a frequência.",
      "Está incorreta: dividiu T por c, o que dá o inverso de uma velocidade e não um comprimento."
    ],
    "nursingApplication": "Um transmissor de telemetria de ECG emite ondas de rádio cujo período é o inverso da frequência de emissão (T = 1/f)."
  },
  {
    "id": 5125,
    "topicId": 5,
    "question": "Um feixe de luz visível de comprimento de onda 600 nm (1 nm = 10⁻⁹ m) propaga-se no vácuo. Com c = 3 × 10⁸ m/s, qual é o período da onda?",
    "options": [
      "5 × 10¹⁴ s",
      "2 × 10⁻¹⁵ s",
      "2 × 10⁻¹² s",
      "1,8 × 10² s"
    ],
    "correctIndex": 1,
    "explanation": "Primeiro calcula-se a frequência (f = c/λ = 5 × 10¹⁴ Hz) e depois o período, T = 1/f = 2 × 10⁻¹⁵ s. Também se pode usar T = λ/c.",
    "solution": [
      "Dados: λ = 600 nm; c = 3 × 10⁸ m/s.",
      "Conversão: λ = 600 × 10⁻⁹ m = 6 × 10⁻⁷ m.",
      "Fórmula: f = c / λ e T = 1 / f.",
      "Substituição: f = 3 × 10⁸ / 6 × 10⁻⁷ = 5 × 10¹⁴ Hz; T = 1 / 5 × 10¹⁴.",
      "Resultado: 2 × 10⁻¹⁵ s"
    ],
    "distractorAnalysis": [
      "Está incorreta: parou na frequência (5 × 10¹⁴ Hz) e escreveu-a como se fosse o período, sem inverter.",
      "Está incorreta: tomou 1 nm como 10⁻⁶ m, o que dá λ = 6 × 10⁻⁴ m e T = 2 × 10⁻¹² s.",
      "Está incorreta: multiplicou c por λ (3 × 10⁸ × 6 × 10⁻⁷ = 180) em vez de dividir."
    ],
    "nursingApplication": "Ao usar uma lanterna clínica para avaliar o reflexo pupilar, o enfermeiro utiliza radiação eletromagnética visível, cujo período é extremamente curto (da ordem de 10⁻¹⁵ s)."
  },
  {
    "id": 5126,
    "topicId": 5,
    "question": "Uma onda eletromagnética (micro-ondas) tem comprimento de onda 12 cm no vácuo. Com c = 3 × 10⁸ m/s, qual é a sua frequência?",
    "options": [
      "2,5 × 10¹⁰ Hz",
      "3,6 × 10⁷ Hz",
      "4,0 × 10⁻¹⁰ Hz",
      "2,5 × 10⁹ Hz"
    ],
    "correctIndex": 3,
    "explanation": "Convertendo o comprimento de onda para metros (0,12 m), f = c/λ = 3 × 10⁸ / 0,12 = 2,5 × 10⁹ Hz.",
    "solution": [
      "Dados: λ = 12 cm; c = 3 × 10⁸ m/s.",
      "Conversão: λ = 12 cm = 0,12 m.",
      "Fórmula: f = c / λ.",
      "Substituição: f = 3 × 10⁸ / 0,12.",
      "Resultado: 2,5 × 10⁹ Hz"
    ],
    "distractorAnalysis": [
      "Está incorreta: converteu 12 cm em 0,012 m (dividiu por 1000 em vez de por 100), o que multiplica a frequência por 10.",
      "Está incorreta: multiplicou c por λ (3 × 10⁸ × 0,12) em vez de dividir.",
      "Está incorreta: dividiu λ por c, obtendo o inverso de uma velocidade, que não é uma frequência."
    ],
    "nursingApplication": "O enfermeiro sabe que o telemóvel e o Wi-Fi da enfermaria usam micro-ondas, radiação eletromagnética de frequência da ordem de 10⁹ Hz e não ionizante."
  },
  {
    "id": 5127,
    "topicId": 5,
    "question": "Os astronautas de uma estação espacial recebem sinais de rádio enviados da Terra, apesar de não haver ar no espaço entre a Terra e a estação. Como se explica?",
    "options": [
      "As ondas de rádio são eletromagnéticas e propagam-se também no vácuo, sem meio material.",
      "Propagam-se pela vibração do ar residual que existe entre a Terra e a estação.",
      "São ondas sonoras de elevada frequência, que passam melhor no vazio do que no ar.",
      "São partículas materiais emitidas pela antena, que viajam no vazio até à estação."
    ],
    "correctIndex": 0,
    "explanation": "Uma onda eletromagnética transfere energia radiante de um ponto a outro sem necessitar de meio material, propagando-se também no vácuo. É o que permite que a luz do Sol e os sinais de rádio atravessem o espaço.",
    "distractorAnalysis": [
      "Está incorreta: as ondas eletromagnéticas não dependem de ar nem de outro meio; no espaço vazio, o ar residual é irrelevante para a sua propagação.",
      "Está incorreta: o som é uma onda mecânica e não se propaga no vácuo; os sinais de rádio são ondas eletromagnéticas.",
      "Está incorreta: as ondas de rádio não são partículas materiais, são perturbações eletromagnéticas que transportam energia."
    ],
    "nursingApplication": "Ao orientar um utente sobre a exposição solar, o enfermeiro pode explicar que a radiação do Sol, incluindo a ultravioleta, chega à Terra através do vazio por ser radiação eletromagnética."
  },
  {
    "id": 5128,
    "topicId": 5,
    "question": "Uma onda de rádio (λ ≈ 3 m), luz visível (λ ≈ 500 nm) e raios X (λ ≈ 0,1 nm) propagam-se no vácuo. Qual deles tem fotões de maior energia?",
    "options": [
      "A onda de rádio, porque tem o maior comprimento de onda.",
      "A luz visível, porque é a única que o olho humano deteta.",
      "Os raios X, porque têm o menor comprimento de onda.",
      "Todos iguais, porque todos se propagam à velocidade c."
    ],
    "correctIndex": 2,
    "explanation": "Quanto menor o comprimento de onda, maior a energia do fotão. Os raios X têm o menor comprimento de onda dos três e, por isso, os fotões mais energéticos.",
    "distractorAnalysis": [
      "Está incorreta: inverteu a relação: é o menor comprimento de onda, e não o maior, que corresponde à maior energia do fotão.",
      "Está incorreta: o facto de o olho humano detetar a luz visível não tem relação com a energia dos fotões.",
      "Está incorreta: a velocidade c é igual para todas no vácuo, mas a energia do fotão depende do comprimento de onda (ou da frequência)."
    ],
    "nursingApplication": "Por terem fotões de maior energia do que a luz visível, os raios X exigem cuidados de proteção do utente e do profissional na sala de radiologia, o que não acontece com a luz de uma lanterna clínica."
  },
  {
    "id": 5129,
    "topicId": 5,
    "question": "Num feixe de radiação eletromagnética no vácuo, a frequência passa para o dobro. O que acontece ao comprimento de onda?",
    "options": [
      "Duplica, porque o comprimento de onda é diretamente proporcional à frequência.",
      "Fica reduzido a metade, porque o produto λ·f é igual a c e c não muda.",
      "Mantém-se, porque o comprimento de onda só depende da amplitude da onda.",
      "Fica reduzido a um quarto, porque o comprimento de onda varia com 1/f²."
    ],
    "correctIndex": 1,
    "explanation": "No vácuo, c = λ·f com c constante. Se f duplica, λ tem de ficar reduzido a metade para o produto se manter.",
    "distractorAnalysis": [
      "Está incorreta: λ e f são inversamente proporcionais e não diretamente proporcionais, porque o produto λ·f é constante.",
      "Está incorreta: a amplitude é o valor máximo da perturbação e não determina o comprimento de onda, que está ligado à frequência por c = λ·f.",
      "Está incorreta: a relação é λ = c/f (e não c/f²), por isso duplicar f reduz λ a metade."
    ],
    "nursingApplication": "Ao comparar ondas de rádio e raios X numa explicação ao utente, o enfermeiro pode dizer que, quanto maior a frequência, menor o comprimento de onda."
  },
  {
    "id": 5130,
    "topicId": 5,
    "question": "Num esquema de uma onda eletromagnética, um estudante mede a distância entre dois máximos consecutivos. Que grandeza obteve?",
    "options": [
      "O período T",
      "A amplitude A",
      "A frequência f",
      "O comprimento de onda λ"
    ],
    "correctIndex": 3,
    "explanation": "O comprimento de onda é a distância entre dois máximos consecutivos. O período é a duração de uma oscilação, a frequência é o número de oscilações por segundo e a amplitude é o valor máximo da perturbação.",
    "distractorAnalysis": [
      "Está incorreta: o período é um intervalo de tempo (duração de uma oscilação, T = 1/f) e não uma distância.",
      "Está incorreta: a amplitude é o valor máximo da perturbação, medido a partir da posição de equilíbrio, e não a distância entre dois máximos.",
      "Está incorreta: a frequência conta oscilações por segundo (Hz) e não é uma distância."
    ],
    "nursingApplication": "Ao ler um traçado em papel, como o de um ECG, o enfermeiro distingue a amplitude (valor máximo da onda) da duração de uma oscilação (período), tal como numa onda eletromagnética."
  },
  {
    "id": 5131,
    "topicId": 5,
    "question": "Um núcleo excitado de tecnécio-99m (Z = 43, A = 99) liberta o seu excesso de energia emitindo um fotão γ. Quais são Z e A do núcleo depois da emissão?",
    "options": [
      "Z = 43 e A = 99",
      "Z = 41 e A = 95",
      "Z = 44 e A = 99",
      "Z = 42 e A = 99"
    ],
    "correctIndex": 0,
    "explanation": "A radiação γ é energia emitida sob a forma de fotões e não retira nem acrescenta nucleões ou protões. Por isso, Z e A não se alteram.",
    "distractorAnalysis": [
      "Está incorreta: aplicou a regra da emissão α (Z − 2 e A − 4), mas a emissão γ não expulsa partículas do núcleo.",
      "Está incorreta: aplicou a regra da emissão β⁻ (Z + 1), mas a emissão γ não transforma neutrões em protões.",
      "Está incorreta: aplicou a regra da emissão β⁺ (Z − 1), mas a emissão γ não transforma protões em neutrões."
    ],
    "nursingApplication": "No serviço de medicina nuclear, o enfermeiro sabe que o tecnécio-99m emite radiação γ e o núcleo continua a ser tecnécio, porque Z e A não mudam com essa emissão."
  },
  {
    "id": 5132,
    "topicId": 5,
    "question": "Um núcleo de cobalto-60 (Z = 27) decai por emissão β⁻ e o núcleo-filho fica com excesso de energia. Que radiação costuma libertar esse excesso a seguir?",
    "options": [
      "Partículas α, que reduzem a massa do núcleo.",
      "Raios X, originados no núcleo-filho.",
      "Radiação γ, emitida sob a forma de fotões.",
      "Luz visível, emitida pelos eletrões orbitais."
    ],
    "correctIndex": 2,
    "explanation": "Depois de uma emissão corpuscular (α ou β), o núcleo fica com excesso de energia e liberta-o geralmente sob a forma de fotões γ.",
    "distractorAnalysis": [
      "Está incorreta: o excesso de energia é libertado por fotões; uma nova partícula α não é a emissão que, em regra, se segue a uma β⁻.",
      "Está incorreta: os raios X têm origem na nuvem eletrónica (eletrões que mudam de orbital ou são travados), e não no núcleo.",
      "Está incorreta: a luz visível provém de transições dos eletrões orbitais e não do excesso de energia do núcleo."
    ],
    "nursingApplication": "Em serviços com fontes radioativas, o enfermeiro sabe que a emissão γ acompanha muitas desintegrações, o que justifica os cuidados de proteção radiológica."
  },
  {
    "id": 5133,
    "topicId": 5,
    "question": "Qual dos seguintes tipos de radiação tem a mesma natureza que a radiação γ?",
    "options": [
      "As partículas α, núcleos de átomos de hélio",
      "Os eletrões emitidos numa desintegração β⁻",
      "Os positrões emitidos numa desintegração β⁺",
      "Os raios X, de natureza eletromagnética"
    ],
    "correctIndex": 3,
    "explanation": "A radiação γ é eletromagnética, tal como a luz visível, a radiação ultravioleta e os raios X. As partículas α e β são radiação corpuscular.",
    "distractorAnalysis": [
      "Está incorreta: as partículas α são núcleos de hélio, ou seja, radiação corpuscular, e não fotões.",
      "Está incorreta: os eletrões β⁻ são partículas com massa e carga, ou seja, radiação corpuscular.",
      "Está incorreta: os positrões β⁺ são partículas (eletrões positivos), ou seja, radiação corpuscular."
    ],
    "nursingApplication": "Na imagiologia, o enfermeiro lida com raios X em radiologia e com radiação γ em medicina nuclear, ambas radiação eletromagnética."
  },
  {
    "id": 5134,
    "topicId": 5,
    "question": "Ensaiam-se três fontes radioativas. A radiação da fonte 1 é detida por uma folha de papel; a da fonte 2 atravessa o papel e alguns milímetros de alumínio; a da fonte 3 atravessa ainda grandes espessuras de matéria. Que radiação emite cada fonte?",
    "options": [
      "Fonte 1: γ; fonte 2: β; fonte 3: α",
      "Fonte 1: α; fonte 2: β; fonte 3: γ",
      "Fonte 1: β; fonte 2: α; fonte 3: γ",
      "Fonte 1: α; fonte 2: γ; fonte 3: β"
    ],
    "correctIndex": 1,
    "explanation": "O poder de penetração aumenta de α (fraco, detida por papel ou pele) para β (médio, alguns milímetros de alumínio ou de tecidos) e para γ (muito elevado).",
    "distractorAnalysis": [
      "Está incorreta: inverteu a ordem: a γ é a mais penetrante e não pode ser detida por uma folha de papel.",
      "Está incorreta: trocou α e β: a α é a menos penetrante, e a β atravessa o papel.",
      "Está incorreta: trocou β e γ: a γ é a mais penetrante de todas e é a que atravessa grandes espessuras de matéria."
    ],
    "nursingApplication": "Ao saber que a radiação α é detida pela pele e que a γ atravessa o corpo, o enfermeiro compreende por que razão a radiação γ de um radiofármaco pode ser detetada fora do corpo do utente."
  },
  {
    "id": 5135,
    "topicId": 5,
    "question": "Qual é a razão do elevado poder de penetração da radiação γ na matéria?",
    "options": [
      "Tem comprimento de onda reduzido, logo fotões de elevada energia.",
      "Tem massa elevada, pelo que empurra a matéria que encontra.",
      "Tem carga positiva, que a atrai para o interior dos tecidos.",
      "Tem comprimento de onda elevado, logo fotões de baixa energia."
    ],
    "correctIndex": 0,
    "explanation": "Quanto menor o comprimento de onda, maior a energia do fotão. É por transportar fotões de elevada energia que a radiação γ penetra bem na matéria.",
    "distractorAnalysis": [
      "Está incorreta: a radiação γ é constituída por fotões, que não são partículas com massa de repouso como os núcleos de hélio.",
      "Está incorreta: a radiação γ é eletromagnética e não tem carga elétrica positiva; as partículas α é que são positivas.",
      "Está incorreta: inverteu a relação: o comprimento de onda da γ é reduzido e os fotões têm elevada energia."
    ],
    "nursingApplication": "Por a radiação γ ter elevado poder de penetração, os cuidados de proteção na manipulação de radiofármacos não se limitam a proteger a pele."
  },
  {
    "id": 5136,
    "topicId": 5,
    "question": "Como é emitida a energia da radiação γ e que trajetória segue?",
    "options": [
      "Em núcleos de hélio, com trajetória pouco divergente.",
      "Em eletrões, com trajetória divergente.",
      "Em fotões, com trajetória em linha reta.",
      "Em fotões, com trajetória curva e divergente."
    ],
    "correctIndex": 2,
    "explanation": "A radiação γ transporta a energia sob a forma de fotões, que seguem trajetórias em linha reta.",
    "distractorAnalysis": [
      "Está incorreta: os núcleos de hélio são as partículas α e não a radiação γ.",
      "Está incorreta: os eletrões são as partículas β⁻ (radiação corpuscular) e não a radiação γ.",
      "Está incorreta: os fotões da radiação γ seguem uma trajetória em linha reta, e não curva."
    ],
    "nursingApplication": "Em medicina nuclear, o enfermeiro sabe que os fotões γ emitidos pelo radiofármaco seguem em linha reta até ao detetor."
  },
  {
    "id": 5137,
    "topicId": 5,
    "question": "Qual das seguintes afirmações NÃO é uma característica da radiação γ?",
    "options": [
      "É emitida geralmente após uma emissão α ou β.",
      "Transporta elevada energia por ter comprimento de onda reduzido.",
      "É radiação eletromagnética, como a luz visível e os raios X.",
      "É constituída por núcleos de hélio emitidos pelo núcleo."
    ],
    "correctIndex": 3,
    "explanation": "Os núcleos de hélio são as partículas α (radiação corpuscular). A radiação γ é eletromagnética, geralmente emitida após uma emissão α ou β, com comprimento de onda reduzido e elevada energia.",
    "distractorAnalysis": [
      "Está incorreta: esta afirmação é verdadeira: o núcleo fica com excesso de energia depois de uma emissão corpuscular e liberta-o em fotões γ.",
      "Está incorreta: esta afirmação é verdadeira: um comprimento de onda reduzido corresponde a fotões de elevada energia.",
      "Está incorreta: esta afirmação é verdadeira: a radiação γ tem a mesma natureza eletromagnética da luz visível e dos raios X."
    ],
    "nursingApplication": "Ao distinguir as partículas α, que são detidas pela pele, da radiação γ, o enfermeiro avalia melhor o risco de cada tipo de fonte radioativa."
  },
  {
    "id": 5138,
    "topicId": 5,
    "question": "Qual dos cientistas é considerado o pai da Radiologia e recebeu o Prémio Nobel da Física em 1901?",
    "options": [
      "Henri Becquerel",
      "Wilhelm Roentgen",
      "Ernest Rutherford",
      "Paul Villard"
    ],
    "correctIndex": 1,
    "explanation": "Wilhelm Roentgen, físico alemão, é considerado o pai da Radiologia e recebeu o Prémio Nobel da Física em 1901.",
    "distractorAnalysis": [
      "Está incorreta: Becquerel e Saint-Victor observaram que sais de urânio impressionavam películas fotográficas, mas não é o pai da Radiologia.",
      "Está incorreta: Rutherford mostrou que o urânio emite radiação alfa (α) e beta (β).",
      "Está incorreta: Villard descobriu um terceiro tipo de radiação, a radiação gama (γ)."
    ],
    "nursingApplication": "Ao encaminhar um utente para uma radiografia, o enfermeiro recorre a uma técnica cuja origem está no trabalho de Roentgen."
  },
  {
    "id": 5139,
    "topicId": 5,
    "question": "No tubo de raios X, eletrões acelerados chocam contra um alvo metálico (o ânodo). Que fenómeno origina os raios X nesse alvo?",
    "options": [
      "A travagem dos eletrões no alvo metálico, que liberta energia em fotões.",
      "A desintegração dos núcleos do metal, que emitem partículas α.",
      "A emissão de radiação γ pelos núcleos do metal, excitados pelo choque.",
      "A ionização do ar do tubo, que liberta luz visível."
    ],
    "correctIndex": 0,
    "explanation": "Os raios X resultam da energia emitida por eletrões que são travados num alvo metálico (ânodo do tubo) ou que transitam entre orbitais. Têm origem na nuvem eletrónica e não no núcleo.",
    "distractorAnalysis": [
      "Está incorreta: os raios X não resultam de desintegrações nucleares; as partículas α têm origem em núcleos pesados instáveis.",
      "Está incorreta: a radiação γ tem origem no núcleo após uma emissão α ou β; os raios X do tubo têm origem nos eletrões.",
      "Está incorreta: o que gera os raios X é a travagem dos eletrões no alvo, e não a ionização do ar nem a luz visível."
    ],
    "nursingApplication": "Na sala de radiologia, o enfermeiro sabe que os raios X só são produzidos enquanto o tubo está em funcionamento, porque dependem do choque de eletrões no ânodo."
  },
  {
    "id": 5140,
    "topicId": 5,
    "question": "Dois fotões de elevada energia são detetados. O fotão A foi emitido por eletrões que transitaram entre orbitais; o fotão B foi emitido por um núcleo excitado depois de uma desintegração. Como se designam?",
    "options": [
      "Ambos são raios X, por terem elevada energia.",
      "A é radiação γ e B é um raio X.",
      "A é um raio X e B é radiação γ.",
      "Ambos são radiação γ, por serem fotões."
    ],
    "correctIndex": 2,
    "explanation": "Os raios X têm origem na nuvem eletrónica (transições entre orbitais ou travagem de eletrões), enquanto a radiação γ tem origem no núcleo.",
    "distractorAnalysis": [
      "Está incorreta: a designação depende da origem do fotão e não apenas da energia: A vem dos eletrões e B do núcleo.",
      "Está incorreta: trocou as origens: os fotões de transições eletrónicas são raios X, e os do núcleo excitado são radiação γ.",
      "Está incorreta: ambos são fotões, mas a origem distingue-os: eletrões orbitais (raios X) e núcleo (radiação γ)."
    ],
    "nursingApplication": "O enfermeiro distingue os raios X de uma radiografia, produzidos por eletrões num tubo, da radiação γ de um radiofármaco, que vem do núcleo."
  },
  {
    "id": 5141,
    "topicId": 5,
    "question": "Qual das afirmações sobre a natureza dos raios X está correta?",
    "options": [
      "São partículas com carga negativa, como os eletrões β⁻.",
      "São núcleos de hélio de elevada energia.",
      "São ondas mecânicas que necessitam de um meio material.",
      "São radiação eletromagnética, como a luz visível."
    ],
    "correctIndex": 3,
    "explanation": "Os raios X são radiação eletromagnética, parecida com a luz visível, mas com menor comprimento de onda. Por isso, não necessitam de meio material e não são partículas.",
    "distractorAnalysis": [
      "Está incorreta: os eletrões β⁻ são partículas; os raios X são fotões, de natureza eletromagnética.",
      "Está incorreta: os núcleos de hélio são as partículas α, que são radiação corpuscular.",
      "Está incorreta: as ondas mecânicas necessitam de meio material; os raios X são ondas eletromagnéticas e propagam-se também no vácuo."
    ],
    "nursingApplication": "Antes de uma radiografia, o enfermeiro explica ao utente que os raios X são radiação como a luz, mas invisível e de menor comprimento de onda."
  },
  {
    "id": 5142,
    "topicId": 5,
    "question": "Para obter uma imagem do esqueleto de um utente sem recorrer a cirurgia, usam-se raios X. Que propriedade dos raios X torna isso possível?",
    "options": [
      "O fraco poder de penetração, que os faz parar à superfície.",
      "O elevado poder de penetração nos tecidos vivos.",
      "Um comprimento de onda superior ao da luz visível.",
      "A carga elétrica, que os atrai para os ossos."
    ],
    "correctIndex": 1,
    "explanation": "Os raios X são radiação eletromagnética de pequeno comprimento de onda e elevado poder de penetração nos tecidos vivos. Atravessam o corpo e permitem registar a imagem das estruturas internas.",
    "distractorAnalysis": [
      "Está incorreta: com fraco poder de penetração não atravessariam o corpo; os raios X penetram bem nos tecidos vivos.",
      "Está incorreta: os raios X têm comprimento de onda inferior ao da luz visível, e não superior.",
      "Está incorreta: os raios X são fotões e não têm carga elétrica que os atraia para os ossos."
    ],
    "nursingApplication": "O enfermeiro que acompanha um utente com suspeita de fratura sabe que os raios X atravessam os tecidos moles e permitem ver o osso."
  },
  {
    "id": 5143,
    "topicId": 5,
    "question": "Qual das situações seguintes pode originar raios X?",
    "options": [
      "A transição de eletrões entre orbitais eletrónicas de um elemento.",
      "A emissão de uma partícula α por um núcleo pesado.",
      "A transformação de um neutrão num protão no núcleo.",
      "A libertação do excesso de energia do núcleo após uma β."
    ],
    "correctIndex": 0,
    "explanation": "Os raios X resultam da energia emitida por eletrões que transitam entre orbitais ou que são travados num alvo metálico. A origem está na nuvem eletrónica.",
    "distractorAnalysis": [
      "Está incorreta: a emissão α é nuclear e produz um núcleo de hélio, e não raios X.",
      "Está incorreta: a transformação de um neutrão num protão é a base da emissão β⁻ e ocorre no núcleo; produz um eletrão e não raios X.",
      "Está incorreta: o excesso de energia do núcleo é libertado em radiação γ, que tem origem no núcleo e não na nuvem eletrónica."
    ],
    "nursingApplication": "Ao compreender que os raios X vêm da nuvem eletrónica e a radiação γ vem do núcleo, o enfermeiro associa corretamente cada técnica de imagem à sua fonte."
  },
  {
    "id": 5144,
    "topicId": 5,
    "question": "Um feixe de raios X e um feixe de luz visível propagam-se no vácuo. Qual das comparações é correta?",
    "options": [
      "Os raios X têm maior comprimento de onda, menor frequência e a mesma velocidade.",
      "Os raios X têm menor comprimento de onda, maior frequência e maior velocidade.",
      "Os raios X têm menor comprimento de onda, maior frequência e a mesma velocidade.",
      "Os raios X têm menor comprimento de onda, menor frequência e a mesma velocidade."
    ],
    "correctIndex": 2,
    "explanation": "No vácuo, toda a radiação eletromagnética tem a mesma velocidade c. Como c = λ·f, os raios X, com menor comprimento de onda do que a luz visível, têm maior frequência.",
    "distractorAnalysis": [
      "Está incorreta: inverteu a comparação: os raios X têm menor comprimento de onda do que a luz visível e, por isso, maior frequência.",
      "Está incorreta: no vácuo a velocidade é c para todas as ondas eletromagnéticas; a maior energia dos raios X deve-se à maior frequência e não à velocidade.",
      "Está incorreta: se o comprimento de onda é menor e a velocidade c é a mesma, a frequência é maior (c = λ·f) e não menor."
    ],
    "nursingApplication": "O enfermeiro pode explicar que a luz visível de uma lanterna clínica e os raios X de uma radiografia são radiação eletromagnética, diferindo no comprimento de onda e na energia dos fotões."
  },
  {
    "id": 5145,
    "topicId": 5,
    "question": "Depois de uma radiografia ao antebraço, o filme é revelado e mostra a imagem do osso fraturado. Que efeito dos raios X permite formar essa imagem?",
    "options": [
      "Efeito fluorescente",
      "Efeito fotográfico",
      "Efeito ionizante",
      "Efeito biológico"
    ],
    "correctIndex": 1,
    "explanation": "Os raios X formam uma imagem num filme fotográfico, visível após revelação. É o efeito fotográfico.",
    "distractorAnalysis": [
      "Está incorreta: o efeito fluorescente faz brilhar certas substâncias (ecrãs fluorescentes) e não forma uma imagem permanente num filme revelado.",
      "Está incorreta: o efeito ionizante é a remoção de eletrões dos átomos e não é o que forma a imagem no filme.",
      "Está incorreta: o efeito biológico é a alteração das características das células vivas e não forma a imagem."
    ],
    "nursingApplication": "Ao acompanhar um utente à radiologia, o enfermeiro sabe que a imagem do osso fraturado se forma no detetor (filme) porque os raios X impressionam o material fotográfico."
  },
  {
    "id": 5146,
    "topicId": 5,
    "question": "Numa demonstração, um ecrã revestido de uma certa substância começa a brilhar quando é atingido por raios X. Que efeito dos raios X é este?",
    "options": [
      "Efeito fotográfico",
      "Efeito ionizante",
      "Efeito biológico",
      "Efeito fluorescente"
    ],
    "correctIndex": 3,
    "explanation": "O efeito fluorescente consiste em os raios X fazerem brilhar certas substâncias, como os ecrãs fluorescentes.",
    "distractorAnalysis": [
      "Está incorreta: o efeito fotográfico forma a imagem num filme, visível após revelação, e não faz a substância brilhar.",
      "Está incorreta: o efeito ionizante é a remoção de eletrões dos átomos e não se traduz num brilho do ecrã.",
      "Está incorreta: o efeito biológico é a alteração das células vivas, e o ecrã não é matéria viva."
    ],
    "nursingApplication": "O enfermeiro pode explicar ao utente que os raios X são invisíveis, mas fazem brilhar certos ecrãs fluorescentes, o que permite detetá-los."
  },
  {
    "id": 5147,
    "topicId": 5,
    "question": "Um aparelho de controlo deteta os iões que se formam no ar quando este é atravessado por raios X. Que efeito dos raios X está na base desta deteção?",
    "options": [
      "Efeito fotográfico",
      "Efeito fluorescente",
      "Efeito ionizante",
      "Efeito biológico"
    ],
    "correctIndex": 2,
    "explanation": "Os raios X removem eletrões dos átomos (efeito ionizante) e os iões formados podem ser monitorizados e controlados com aparelhos.",
    "distractorAnalysis": [
      "Está incorreta: o efeito fotográfico refere-se à imagem formada num filme, e não à formação de iões no ar.",
      "Está incorreta: o efeito fluorescente é o brilho de certas substâncias e não a formação de iões.",
      "Está incorreta: o efeito biológico diz respeito às alterações nas células vivas, e a situação descrita refere-se ao ar."
    ],
    "nursingApplication": "Em serviços com equipamentos de raios X, o enfermeiro sabe que a monitorização da radiação se baseia na formação de iões, resultante do efeito ionizante."
  },
  {
    "id": 5148,
    "topicId": 5,
    "question": "Numa zona do corpo exposta a raios X, as células vivas apresentam alterações das suas características. Que efeito dos raios X explica a situação?",
    "options": [
      "Efeito biológico",
      "Efeito fotográfico",
      "Efeito fluorescente",
      "Efeito ionizante"
    ],
    "correctIndex": 0,
    "explanation": "O efeito biológico dos raios X é a interferência com a matéria viva, modificando e alterando as características das células vivas.",
    "distractorAnalysis": [
      "Está incorreta: o efeito fotográfico forma imagens em filmes e não altera células vivas.",
      "Está incorreta: o efeito fluorescente faz brilhar certas substâncias e não explica alterações nas células.",
      "Está incorreta: o efeito ionizante (remoção de eletrões) é o fenómeno físico de base, mas a alteração das células vivas descreve-se como efeito biológico."
    ],
    "nursingApplication": "O enfermeiro sabe que as alterações celulares causadas pelos raios X justificam limitar os exames com radiação aos que são clinicamente necessários."
  },
  {
    "id": 5149,
    "topicId": 5,
    "question": "Qual das associações entre o efeito dos raios X e a situação correspondente está correta?",
    "options": [
      "Efeito fluorescente: remoção de eletrões dos átomos do meio",
      "Efeito ionizante: remoção de eletrões dos átomos do meio",
      "Efeito fotográfico: brilho de uma substância atingida pelos raios X",
      "Efeito biológico: formação de imagem num filme, visível após revelação"
    ],
    "correctIndex": 1,
    "explanation": "O efeito ionizante consiste na remoção de eletrões dos átomos. O efeito fluorescente é o brilho de certas substâncias, o fotográfico é a imagem no filme e o biológico é a alteração das células vivas.",
    "distractorAnalysis": [
      "Está incorreta: a remoção de eletrões dos átomos é o efeito ionizante e não o fluorescente.",
      "Está incorreta: o brilho de substâncias é o efeito fluorescente; o efeito fotográfico é a imagem num filme.",
      "Está incorreta: a imagem num filme é o efeito fotográfico; o efeito biológico é a alteração das características das células vivas."
    ],
    "nursingApplication": "Ao ler a requisição de um exame, o enfermeiro distingue os efeitos físicos dos raios X (fotográfico, fluorescente, ionizante) do efeito biológico, que está na origem das preocupações de proteção."
  },
  {
    "id": 5150,
    "topicId": 5,
    "question": "Numa radiografia ao tórax, os raios X atravessam o corpo e chegam ao detetor. Que estrutura absorve mais raios X?",
    "options": [
      "Os pulmões cheios de ar, por ocuparem grande volume.",
      "Todas as estruturas por igual, pois os raios X atravessam tudo.",
      "Os tecidos menos densos, porque deixam passar menos radiação.",
      "As costelas, por serem um tecido mais denso."
    ],
    "correctIndex": 3,
    "explanation": "Os tecidos mais densos, como os ossos, absorvem mais raios X, enquanto os pulmões, cheios de ar, absorvem menos.",
    "distractorAnalysis": [
      "Está incorreta: o ar dos pulmões absorve pouca radiação; o volume ocupado não determina a absorção.",
      "Está incorreta: a absorção depende da densidade do tecido, e é por isso que há contraste na imagem.",
      "Está incorreta: os tecidos menos densos absorvem menos radiação e deixam passar mais."
    ],
    "nursingApplication": "Numa radiografia ao tórax, o enfermeiro compreende que as costelas se distinguem dos pulmões porque absorvem mais raios X."
  },
  {
    "id": 5151,
    "topicId": 5,
    "question": "Numa radiografia ao tórax, chega mais radiação ao detetor nas zonas dos pulmões do que nas das costelas. Qual é a explicação?",
    "options": [
      "Os pulmões são mais densos do que o osso, por isso deixam passar mais radiação.",
      "Os raios X só conseguem atravessar o ar e não o osso.",
      "Os pulmões contêm ar, que absorve menos raios X do que o osso.",
      "As costelas refletem os raios X de volta para o tubo."
    ],
    "correctIndex": 2,
    "explanation": "Os pulmões contêm ar e absorvem menos raios X; o osso, mais denso, absorve mais. Por isso, atrás dos pulmões chega mais radiação ao detetor.",
    "distractorAnalysis": [
      "Está incorreta: os pulmões, cheios de ar, são menos densos do que o osso, e não mais.",
      "Está incorreta: os raios X atravessam os tecidos vivos, incluindo o osso, embora o osso absorva mais.",
      "Está incorreta: o osso não reflete os raios X de volta para o tubo; o que acontece é absorvê-los mais do que o ar."
    ],
    "nursingApplication": "Ao acompanhar um utente numa radiografia ao tórax, o enfermeiro sabe que a diferença entre ossos e pulmões na imagem resulta da diferente absorção dos raios X."
  },
  {
    "id": 5152,
    "topicId": 5,
    "question": "Qual das descrições explica corretamente como se forma a imagem numa radiografia ao tórax?",
    "options": [
      "Os raios X atravessam o corpo e os tecidos absorvem-nos de modo diferente.",
      "Um radiofármaco injetado emite radiação γ, que é registada por uma gama-câmara.",
      "Um campo magnético alinha os protões, que emitem um sinal de rádio.",
      "O tubo roda à volta do doente e um computador reconstrói cortes."
    ],
    "correctIndex": 0,
    "explanation": "Na radiografia, os raios X atravessam o corpo e impressionam o detetor. Os tecidos mais densos absorvem mais radiação e os menos densos absorvem menos, o que cria o contraste da imagem.",
    "distractorAnalysis": [
      "Está incorreta: descreve a cintigrafia, em que a radiação γ é emitida a partir do interior do doente, e não uma radiografia.",
      "Está incorreta: descreve a ressonância magnética, que usa campos magnéticos e ondas de rádio e não raios X.",
      "Está incorreta: descreve a TAC, em que o tubo roda à volta do doente e se reconstroem cortes, e não uma radiografia simples."
    ],
    "nursingApplication": "O enfermeiro explica ao utente que, na radiografia, a imagem se forma pela radiação que atravessa o corpo e chega ao detetor, sem se injetar qualquer substância radioativa."
  },
  {
    "id": 5153,
    "topicId": 5,
    "question": "Numa radiografia, dois tecidos, A e B, são atravessados por raios X e A é mais denso do que B. O que se espera no detetor?",
    "options": [
      "Atrás de A chega mais radiação, porque os tecidos densos deixam passar mais.",
      "Atrás de A chega menos radiação do que atrás de B.",
      "Chega a mesma radiação atrás dos dois, porque a absorção não depende da densidade.",
      "Atrás de A não chega radiação nenhuma, porque absorve toda a radiação."
    ],
    "correctIndex": 1,
    "explanation": "Os tecidos mais densos absorvem mais raios X. Por isso, atrás do tecido A chega menos radiação ao detetor do que atrás do tecido B.",
    "distractorAnalysis": [
      "Está incorreta: inverteu a relação: os tecidos mais densos absorvem mais e deixam passar menos radiação.",
      "Está incorreta: a absorção depende da densidade do tecido; sem essa diferença não haveria contraste na imagem.",
      "Está incorreta: mesmo os tecidos densos, como o osso, deixam passar parte da radiação, que impressiona o detetor."
    ],
    "nursingApplication": "Ao ver uma radiografia, o enfermeiro sabe que as zonas onde chega menos radiação ao detetor correspondem a estruturas mais densas, como o osso."
  },
  {
    "id": 5154,
    "topicId": 5,
    "question": "Um texto antigo refere que um trabalhador recebeu 250 rad. Sabendo que 1 rad = 0,01 Gy, qual é essa dose em Gy?",
    "options": [
      "25 Gy",
      "25 000 Gy",
      "0,025 Gy",
      "2,5 Gy"
    ],
    "correctIndex": 3,
    "explanation": "Cada rad corresponde a 0,01 Gy, pelo que se multiplica o valor em rad por 0,01.",
    "solution": [
      "Dados: dose = 250 rad; 1 rad = 0,01 Gy.",
      "Fórmula: dose (Gy) = dose (rad) × 0,01.",
      "Substituição: dose = 250 × 0,01.",
      "Resultado: 2,5 Gy"
    ],
    "distractorAnalysis": [
      "Está incorreta: usou 1 rad = 0,1 Gy, em vez de 0,01 Gy.",
      "Está incorreta: multiplicou por 100 (1 rad = 100 Gy), em vez de por 0,01.",
      "Está incorreta: usou 1 rad = 0,0001 Gy, dividindo por 10 000 em vez de por 100."
    ],
    "nursingApplication": "Quando uma dose vem em rad num documento mais antigo, o enfermeiro consegue convertê-la para Gy com a relação 1 rad = 0,01 Gy."
  },
  {
    "id": 5155,
    "topicId": 5,
    "question": "Um relatório de acidente refere uma dose de 12 Gy. Sabendo que 1 rad = 0,01 Gy e que os efeitos sistémicos ocorrem entre 100 e 3000 rad, qual é a dose em rad e onde se situa em relação a esse intervalo?",
    "options": [
      "1200 rad, dentro do intervalo",
      "120 rad, dentro do intervalo",
      "12 000 rad, acima do intervalo",
      "0,12 rad, abaixo do intervalo"
    ],
    "correctIndex": 0,
    "explanation": "Como 1 rad = 0,01 Gy, o valor em rad obtém-se dividindo o valor em Gy por 0,01. Assim, 12 Gy correspondem a 1200 rad, valor entre 100 e 3000 rad.",
    "solution": [
      "Dados: dose = 12 Gy; 1 rad = 0,01 Gy; efeitos sistémicos entre 100 e 3000 rad.",
      "Fórmula: dose (rad) = dose (Gy) / 0,01.",
      "Substituição: dose = 12 / 0,01.",
      "Resultado: 1200 rad, dentro do intervalo",
      "Conclusão: 100 rad < 1200 rad < 3000 rad."
    ],
    "distractorAnalysis": [
      "Está incorreta: usou 1 Gy = 10 rad em vez de 100 rad, obtendo um valor dez vezes inferior ao correto.",
      "Está incorreta: usou 1 Gy = 1000 rad em vez de 100 rad, obtendo 12 000 rad, acima de 3000 rad.",
      "Está incorreta: multiplicou por 0,01 em vez de dividir, obtendo 0,12 rad, o que é um valor muito inferior ao correto."
    ],
    "nursingApplication": "Em documentos sobre exposição à radiação, o enfermeiro pode comparar doses em Gy e em rad com a relação 1 rad = 0,01 Gy."
  },
  {
    "id": 5156,
    "topicId": 5,
    "question": "Num artigo, a dose absorvida por um grupo de utentes é de 0,03 Gy. Sabendo que 1 rad = 0,01 Gy, qual é essa dose em rad?",
    "options": [
      "0,3 rad",
      "30 rad",
      "3 rad",
      "0,0003 rad"
    ],
    "correctIndex": 2,
    "explanation": "Para passar de Gy para rad divide-se por 0,01, ou seja, multiplica-se por 100: 0,03 × 100 = 3 rad.",
    "solution": [
      "Dados: dose = 0,03 Gy; 1 rad = 0,01 Gy.",
      "Fórmula: dose (rad) = dose (Gy) / 0,01.",
      "Substituição: dose = 0,03 / 0,01.",
      "Resultado: 3 rad"
    ],
    "distractorAnalysis": [
      "Está incorreta: usou 1 Gy = 10 rad, em vez de 100 rad.",
      "Está incorreta: usou 1 Gy = 1000 rad, em vez de 100 rad.",
      "Está incorreta: multiplicou por 0,01 em vez de dividir, convertendo no sentido errado."
    ],
    "nursingApplication": "Ao ler um artigo sobre doses de exames de imagem, o enfermeiro converte a dose de Gy para rad quando precisa de comparar com valores indicados em rad."
  },
  {
    "id": 5157,
    "topicId": 5,
    "question": "Após uma exposição a raios X, um utente apresenta vermelhidão e descamação da pele apenas na zona irradiada. Que tipo de efeito e de lesão se descreve?",
    "options": [
      "Efeito sistémico, com lesão de órgãos",
      "Efeito local, com lesão superficial",
      "Efeito sistémico, com lesão genética",
      "Efeito local, com lesão genética"
    ],
    "correctIndex": 1,
    "explanation": "Os efeitos nocivos dos raios X dividem-se em sistémicos e locais, e as lesões em lesões de órgãos, superficiais e genéticas. Uma alteração da pele só na zona irradiada é um efeito local, com lesão superficial.",
    "distractorAnalysis": [
      "Está incorreta: um efeito sistémico afeta o organismo no seu conjunto e não apenas uma zona da pele.",
      "Está incorreta: o efeito é restrito à zona irradiada, não é sistémico, e as alterações da pele não são lesões genéticas.",
      "Está incorreta: o efeito é local, mas a vermelhidão e a descamação da pele são lesões superficiais e não lesões genéticas."
    ],
    "nursingApplication": "Ao observar a pele de um utente após radioterapia, o enfermeiro reconhece as alterações limitadas à zona irradiada e regista-as para a equipa."
  },
  {
    "id": 5158,
    "topicId": 5,
    "question": "Num estudo sobre radiografias dentárias, 10 a 13 dias depois houve mais células da mucosa oral em apoptose. O que é a apoptose?",
    "options": [
      "Divisão celular acelerada",
      "Reparação perfeita do DNA",
      "Formação de micronúcleos",
      "Morte celular programada"
    ],
    "correctIndex": 3,
    "explanation": "A apoptose é a morte celular programada. No estudo, observou-se um aumento de 50 % no número de células em apoptose 10 a 13 dias depois das radiografias.",
    "distractorAnalysis": [
      "Está incorreta: a divisão celular é a multiplicação das células e não a sua morte programada.",
      "Está incorreta: a reparação do DNA é um processo de sobrevivência da célula, e a apoptose é a sua morte.",
      "Está incorreta: os micronúcleos são pequenos núcleos com fragmentos ou cromossomas; não são a morte celular programada."
    ],
    "nursingApplication": "Ao ouvir a notícia de que radiografias dentárias alteraram células da mucosa oral, o enfermeiro pode explicar ao utente o significado de apoptose, a morte celular programada."
  },
  {
    "id": 5159,
    "topicId": 5,
    "question": "No mesmo estudo observaram-se micronúcleos nas células da mucosa oral. O que são e o que sugerem?",
    "options": [
      "Pequenos núcleos com fragmentos ou cromossomas fora dos núcleos-filhos; sugerem dano no DNA.",
      "Núcleos normais das células-filhas; sugerem reparação perfeita do DNA.",
      "Fragmentos da membrana celular; sugerem ausência de dano no DNA.",
      "Células em apoptose; sugerem que só as células que não se dividem são lesadas."
    ],
    "correctIndex": 0,
    "explanation": "Os micronúcleos são pequenos núcleos com fragmentos ou cromossomas inteiros que não foram incorporados nos núcleos-filhos. Mesmo em baixa intensidade, os raios X podem lesar o DNA de células em divisão.",
    "distractorAnalysis": [
      "Está incorreta: os núcleos normais das células-filhas não são micronúcleos; os micronúcleos indicam fragmentos não incorporados.",
      "Está incorreta: os micronúcleos não são fragmentos de membrana; são fragmentos de cromossomas ou cromossomas inteiros.",
      "Está incorreta: os micronúcleos não são células em apoptose, e o estudo mostra dano em células em divisão."
    ],
    "nursingApplication": "O enfermeiro pode explicar que, mesmo com radiação de baixa intensidade, os raios X podem lesar o DNA de células em divisão, o que reforça a importância de só pedir os exames necessários."
  },
  {
    "id": 5160,
    "topicId": 5,
    "question": "Os pais de uma criança na urgência perguntam se a radiografia simples ao tórax pedida representa um grande risco. Qual é a resposta mais adequada?",
    "options": [
      "É totalmente inofensiva, por isso pode ser repetida as vezes que se pedir.",
      "Equivale a vários anos de radiação natural de fundo, por isso não deve fazer-se em crianças.",
      "Equivale a alguns dias de radiação natural de fundo, mas os exames desnecessários devem ser evitados.",
      "O risco existe só em adultos, porque as crianças têm menos células em divisão."
    ],
    "correctIndex": 2,
    "explanation": "Uma radiografia simples ao tórax corresponde, em dose, a alguns dias de radiação natural de fundo. Ainda assim, o uso desnecessário de exames com radiação ionizante, sobretudo em crianças, é um risco para a saúde.",
    "distractorAnalysis": [
      "Está incorreta: os exames com radiação ionizante não são inofensivos, e o uso desnecessário é um risco, sobretudo em crianças.",
      "Está incorreta: a dose de uma radiografia simples ao tórax corresponde a alguns dias de radiação natural, e não a anos.",
      "Está incorreta: as crianças têm tecidos com elevada divisão celular, que são mais sensíveis; o risco é sobretudo preocupante em crianças."
    ],
    "nursingApplication": "Perante os pais de uma criança, o enfermeiro explica que a radiografia pedida tem uma dose baixa, mas que repetir exames com radiação ionizante sem necessidade deve ser evitado."
  },
  {
    "id": 5161,
    "topicId": 5,
    "question": "Um tecido X renova as suas células por divisões frequentes, enquanto um tecido Y é formado por células que quase não se dividem. Perante a mesma exposição a radiação ionizante, o que é de esperar?",
    "options": [
      "O tecido Y é mais sensível, porque as suas células não se renovam e retêm o dano.",
      "O tecido X é mais sensível, por ter um elevado índice de divisão celular.",
      "Os dois tecidos são igualmente sensíveis, porque a radiação atua da mesma forma em todas as células.",
      "O tecido X é menos sensível, porque a divisão celular repara o dano antes de ele se manifestar."
    ],
    "correctIndex": 1,
    "explanation": "A radiossensibilidade é maior nos tecidos com elevada atividade reprodutiva e elevado índice de divisão celular. O tecido X, que se divide com frequência, é por isso mais sensível do que o tecido Y.",
    "distractorAnalysis": [
      "Está incorreta: o tecido Y tem baixa atividade de divisão celular, que é precisamente a característica de tecidos menos sensíveis; não se renovar não aumenta a sensibilidade.",
      "Está incorreta: a sensibilidade não é igual em todos os tecidos: depende da atividade reprodutiva e da divisão celular de cada um.",
      "Está incorreta: a divisão celular não protege do dano; os tecidos que se dividem muito são os mais sensíveis."
    ],
    "nursingApplication": "Ao planear uma radioterapia, a equipa tem em conta que tecidos de renovação rápida, como a medula óssea, são mais sensíveis à radiação."
  },
  {
    "id": 5162,
    "topicId": 5,
    "question": "Numa unidade de radiologia pergunta-se porque é que se tem especial cuidado ao expor crianças e embriões a exames com radiação ionizante. Qual é a razão?",
    "options": [
      "Têm tecidos já definitivamente diferenciados, pelo que qualquer dano na célula é permanente.",
      "Têm uma massa corporal menor, pelo que a radiação provoca nelas um tipo de ionização diferente.",
      "Têm menos moléculas de água nos tecidos, pelo que a radiação ionizante interage com mais intensidade.",
      "Têm tecidos com elevada divisão celular e morfologia e função ainda não definitivamente definidas."
    ],
    "correctIndex": 3,
    "explanation": "São mais sensíveis os tecidos com elevada divisão celular e cuja morfologia e função ainda não estão definitivamente definidas, o que é o caso das crianças e dos embriões. Por isso, o risco da radiação ionizante é maior e justifica mais cuidado.",
    "distractorAnalysis": [
      "Está incorreta: a sensibilidade é maior justamente nos tecidos que ainda não estão definitivamente diferenciados, e não nos que já o estão.",
      "Está incorreta: a radiação ionizante produz o mesmo tipo de ionização em qualquer pessoa; o que muda é a sensibilidade do tecido.",
      "Está incorreta: o aumento do risco não vem de terem menos água, mas de os tecidos se dividirem mais e ainda se estarem a definir."
    ],
    "nursingApplication": "Antes de um exame com radiação ionizante numa grávida ou numa criança, o enfermeiro confirma se a técnica é mesmo necessária e se existe alternativa sem radiação ionizante."
  },
  {
    "id": 5163,
    "topicId": 5,
    "question": "Um doente fez várias tomografias ao longo dos anos e não sentiu qualquer sintoma logo a seguir a cada exame. O que é correto afirmar sobre os efeitos da radiação?",
    "options": [
      "Os efeitos podem surgir mais tarde, pelo que a ausência de sintomas imediatos não os exclui.",
      "A ausência de sintomas imediatos prova que a radiação não teve qualquer efeito sobre as células.",
      "Os efeitos só surgem durante a exposição e desaparecem por completo logo que o exame termina.",
      "Cada exposição atua de forma independente e os seus efeitos não se acumulam ao longo do tempo."
    ],
    "correctIndex": 0,
    "explanation": "As radiações têm poder acumulativo: os efeitos podem surgir algum tempo depois da exposição. Não ter sintomas logo a seguir ao exame não significa que as células não tenham sido afetadas.",
    "distractorAnalysis": [
      "Está incorreta: a falta de sintomas imediatos não prova ausência de efeito, porque os efeitos podem surgir mais tarde.",
      "Está incorreta: os efeitos não se limitam ao momento da exposição; podem manifestar-se algum tempo depois.",
      "Está incorreta: as radiações têm poder acumulativo, ou seja, o efeito de exposições sucessivas pode somar-se."
    ],
    "nursingApplication": "Ao registar os exames de imagem com radiação ionizante de um utente, o enfermeiro contribui para que se evite repetir exames desnecessários, já que as exposições se vão acumulando."
  },
  {
    "id": 5164,
    "topicId": 5,
    "question": "Ao observar ao microscópio células de um tecido irradiado, um investigador deteta alterações nos cromossomas. Como se classifica este efeito da radiação?",
    "options": [
      "Uma mudança apenas na cor da célula, sem consequência na sua função.",
      "Uma alteração limitada à membrana da célula, que deixa o núcleo intacto.",
      "Uma alteração morfológica e funcional de estruturas celulares.",
      "Um efeito que só ocorre em tecidos cujas células já não se dividem de todo."
    ],
    "correctIndex": 2,
    "explanation": "Em algumas células a radiação provoca alterações morfológicas e funcionais de estruturas celulares, em particular dos cromossomas. Estas alterações podem comprometer o funcionamento da célula.",
    "distractorAnalysis": [
      "Está incorreta: os cromossomas estão no núcleo e as alterações referidas são morfológicas e funcionais, não apenas de cor.",
      "Está incorreta: os cromossomas fazem parte do núcleo da célula, pelo que o núcleo também é afetado.",
      "Está incorreta: as células que se dividem, e não as que não se dividem, são as mais afetadas."
    ],
    "nursingApplication": "Quando um utente em radioterapia é informado de que as células em divisão são as mais afetadas, o enfermeiro pode explicar que o objetivo é atingir as células do tumor."
  },
  {
    "id": 5165,
    "topicId": 5,
    "question": "Após radioterapia de uma zona do corpo que inclui medula óssea, um utente apresenta alterações nas células do sangue. Qual é a explicação mais adequada?",
    "options": [
      "A medula óssea é um tecido de baixa atividade, em que o dano se acumula sem qualquer reparação.",
      "O tecido ósseo compacto é o mais sensível do corpo à radiação, por ter elevada densidade.",
      "A medula óssea renova continuamente as células do sangue e as suas células estão em divisão rápida, sendo muito sensíveis.",
      "A radiação transforma diretamente as células do sangue já formadas em células de outro tipo."
    ],
    "correctIndex": 2,
    "explanation": "A medula óssea tem elevada atividade reprodutiva, com células em divisão rápida para renovar o sangue. Por isso é muito sensível à radiação ionizante.",
    "distractorAnalysis": [
      "Está incorreta: a medula óssea tem elevada atividade de divisão, e não baixa; é essa atividade que a torna sensível.",
      "Está incorreta: o tecido ósseo compacto tem baixa atividade de divisão celular e é pouco sensível; a densidade não determina a radiossensibilidade.",
      "Está incorreta: a explicação não passa por uma transformação direta das células do sangue, mas pelo dano nas células em divisão da medula."
    ],
    "nursingApplication": "Num utente a fazer radioterapia que atinge a medula óssea, o enfermeiro valoriza a vigilância dos resultados do hemograma pedidos pela equipa médica."
  },
  {
    "id": 5166,
    "topicId": 5,
    "question": "Qual das características seguintes NÃO contribui para tornar um tecido mais sensível à radiação ionizante?",
    "options": [
      "Ter células já diferenciadas, que quase não se dividem.",
      "Ter uma elevada atividade reprodutiva das suas células, que se renovam depressa.",
      "Ter um elevado índice de divisão celular, com muitas células a dividirem-se.",
      "Ter morfologia e função ainda não definitivamente definidas, como nos tecidos em formação."
    ],
    "correctIndex": 0,
    "explanation": "São mais sensíveis os tecidos com elevada atividade reprodutiva, elevado índice de divisão celular e morfologia e função ainda não definitivamente definidas. Células muito diferenciadas e que quase não se dividem correspondem a tecidos pouco sensíveis.",
    "distractorAnalysis": [
      "Está incorreta: a elevada atividade reprodutiva aumenta a sensibilidade do tecido; esta característica contribui, por isso não é a pedida.",
      "Está incorreta: o elevado índice de divisão celular aumenta a sensibilidade; também contribui, por isso não é a pedida.",
      "Está incorreta: uma morfologia e função ainda não definidas aumentam a sensibilidade; também contribui, por isso não é a pedida."
    ],
    "nursingApplication": "Ao explicar a um utente porque é que o tecido nervoso do adulto é menos afetado pela radioterapia do que a medula óssea, o enfermeiro relaciona a sensibilidade com a divisão celular."
  },
  {
    "id": 5167,
    "topicId": 5,
    "question": "Qual é a sequência correta de acontecimentos quando a radiação ionizante atravessa um tecido vivo?",
    "options": [
      "Alteração química das moléculas, cedência de energia ao meio e extração de eletrões.",
      "Extração de eletrões, alteração química das moléculas e cedência de energia ao meio.",
      "Cedência de energia ao meio, alteração química das moléculas e extração de eletrões.",
      "Cedência de energia ao meio, extração de eletrões e alteração química das moléculas."
    ],
    "correctIndex": 3,
    "explanation": "A radiação cede energia ao meio, o que permite extrair eletrões (ionização); a ionização provoca depois alterações químicas nas moléculas. A energia vem primeiro e a alteração química é a consequência final.",
    "distractorAnalysis": [
      "Está incorreta: a alteração química é a consequência da ionização, pelo que não pode ser o primeiro acontecimento.",
      "Está incorreta: a extração de eletrões só é possível depois de o meio receber energia da radiação; a alteração química vem depois da ionização.",
      "Está incorreta: a alteração química das moléculas resulta da extração de eletrões e não a precede."
    ],
    "nursingApplication": "Quando explica a um utente porque se usam proteções em radiologia, o enfermeiro pode referir que a radiação ionizante cede energia aos tecidos e pode alterar quimicamente as moléculas."
  },
  {
    "id": 5168,
    "topicId": 5,
    "question": "Uma radiação, ao atravessar a água do sangue, extrai eletrões das moléculas e altera-as quimicamente. Como se classifica esta radiação?",
    "options": [
      "Radiação não ionizante, porque apenas aquece o sangue sem alterar as moléculas.",
      "Radiação ionizante, porque tem energia capaz de extrair eletrões das moléculas.",
      "Radiação ionizante, porque acrescenta eletrões às moléculas e torna-as eletricamente neutras.",
      "Radiação não ionizante, porque a água do sangue não pode ser ionizada por nenhuma radiação."
    ],
    "correctIndex": 1,
    "explanation": "Radiação ionizante é a que tem energia suficiente para extrair eletrões, provocando alterações químicas nas moléculas. A água do sangue pode sofrer estes efeitos.",
    "distractorAnalysis": [
      "Está incorreta: se extrai eletrões e altera quimicamente as moléculas, a radiação é ionizante, e não um simples aquecimento.",
      "Está incorreta: a ionização consiste em extrair eletrões e não em acrescentá-los, e deixa a molécula alterada.",
      "Está incorreta: as soluções aquosas, como o sangue, podem ser afetadas pela radiação ionizante."
    ],
    "nursingApplication": "Num serviço de radioterapia, o enfermeiro sabe que a radiação usada é ionizante e que os efeitos nas moléculas dos tecidos justificam o planeamento rigoroso do tratamento."
  },
  {
    "id": 5169,
    "topicId": 5,
    "question": "O sangue é uma solução aquosa. Que consequências pode ter a radiação ionizante ao atravessá-lo?",
    "options": [
      "Ionização e reações com iões e moléculas neutras, podendo alterar vias metabólicas.",
      "Nenhuma, porque as soluções aquosas não podem ser ionizadas.",
      "Apenas um ligeiro aquecimento, sem reações químicas nem alteração de vias metabólicas.",
      "Apenas transferência de cargas para o exterior do corpo, sem reações no sangue."
    ],
    "correctIndex": 0,
    "explanation": "Entre os fenómenos físico-químicos associados à radiação ionizante estão a ionização, a excitação, as reações com iões e com moléculas neutras e os efeitos sobre soluções aquosas, como o sangue. Podem daí resultar alterações de vias metabólicas.",
    "distractorAnalysis": [
      "Está incorreta: os efeitos sobre soluções aquosas, como o sangue, fazem parte dos fenómenos associados à radiação ionizante.",
      "Está incorreta: a radiação ionizante provoca alterações químicas, e não apenas aquecimento.",
      "Está incorreta: a transferência de cargas acontece no meio irradiado, em conjunto com reações com iões e moléculas, e não para o exterior do corpo."
    ],
    "nursingApplication": "Ao acompanhar um utente após exposição a radiação ionizante, o enfermeiro tem presente que os efeitos físico-químicos nos fluidos do corpo podem ter consequências biológicas."
  },
  {
    "id": 5170,
    "topicId": 5,
    "question": "Uma molécula ionizada pela radiação é instável e parte-se em fragmentos sem intervenção de qualquer agente externo. Que fenómeno é este?",
    "options": [
      "Excitação.",
      "Transferência de cargas.",
      "Dissociação espontânea.",
      "Alteração de vias metabólicas."
    ],
    "correctIndex": 2,
    "explanation": "Quando uma molécula ionizada se parte sem intervenção externa, o fenómeno chama-se dissociação espontânea. É um dos fenómenos físico-químicos associados à radiação ionizante.",
    "distractorAnalysis": [
      "Está incorreta: a excitação corresponde a uma molécula com energia acrescida, e não a uma que se parte em fragmentos.",
      "Está incorreta: a transferência de cargas envolve passagem de carga entre espécies, e não a fragmentação de uma única molécula.",
      "Está incorreta: a alteração de vias metabólicas é uma consequência biológica de maior escala e não a fragmentação de uma molécula."
    ],
    "nursingApplication": "Numa ficha de formação sobre proteção radiológica, o enfermeiro pode usar a dissociação de moléculas como exemplo dos efeitos da radiação ionizante nos tecidos."
  },
  {
    "id": 5171,
    "topicId": 5,
    "question": "Após irradiação, uma célula sofre uma alteração química numa molécula que não é essencial ao seu funcionamento. Qual é a consequência mais provável?",
    "options": [
      "A célula morre, porque qualquer alteração química numa molécula é crítica.",
      "A célula continua a funcionar sem consequências relevantes, por a alteração não ser crítica.",
      "A célula passa a multiplicar-se de forma descontrolada, como uma célula tumoral.",
      "O dano propaga-se às células vizinhas, que também morrem de imediato."
    ],
    "correctIndex": 1,
    "explanation": "A alteração química de uma molécula pode ser crítica ou não crítica para a célula. Se não for crítica, a célula pode continuar a funcionar normalmente.",
    "distractorAnalysis": [
      "Está incorreta: nem toda a alteração química é crítica; só as que afetam moléculas essenciais comprometem a célula.",
      "Está incorreta: uma alteração não crítica não tem de originar multiplicação descontrolada.",
      "Está incorreta: uma alteração não crítica numa molécula não se propaga às células vizinhas nem as mata."
    ],
    "nursingApplication": "Ao explicar a um utente em radioterapia que nem todo o dano molecular compromete a célula, o enfermeiro ajuda a esclarecer dúvidas sem exagerar os riscos."
  },
  {
    "id": 5172,
    "topicId": 5,
    "question": "Que destinos pode ter uma célula depois de a radiação ionizante causar dano no seu DNA?",
    "options": [
      "Morrer ou ficar intacta, porque a reparação do dano só pode ser total ou não existir.",
      "Reparar perfeitamente ou imperfeitamente, sem que a célula possa morrer ou perder a capacidade de reprodução.",
      "Ficar radioativa e emitir radiação, ou ser eliminada, não existindo mecanismos de reparação.",
      "Não sobreviver ou não se reproduzir; reparar bem; ou reparar mal e ficar viável, mas modificada."
    ],
    "correctIndex": 3,
    "explanation": "Após dano no DNA, a célula pode não sobreviver ou não se reproduzir, pode reparar o dano perfeitamente ou pode repará-lo de forma imperfeita, ficando viável mas modificada. Existem, portanto, três destinos possíveis.",
    "distractorAnalysis": [
      "Está incorreta: a reparação pode ser imperfeita, o que dá uma célula viável mas modificada, e não apenas morte ou célula intacta.",
      "Está incorreta: o dano no DNA pode levar a que a célula não sobreviva nem se reproduza; esse destino existe.",
      "Está incorreta: a célula tem mecanismos de reparação do DNA e a radiação ionizante não a torna uma fonte de radiação."
    ],
    "nursingApplication": "Em educação para a saúde, o enfermeiro pode explicar que as células têm mecanismos de reparação do DNA, mas que o dano acumulado ao longo de várias exposições pode não ser totalmente reparado."
  },
  {
    "id": 5173,
    "topicId": 5,
    "question": "Numa célula irradiada, o dano no DNA é tão grave que a célula não o consegue reparar. Qual dos resultados é compatível com esta situação?",
    "options": [
      "A célula repara perfeitamente o dano e continua igual à original.",
      "A célula fica viável e modificada, por reparação imperfeita.",
      "A célula torna-se mais resistente à radiação por ter sido irradiada.",
      "A célula não sobrevive ou deixa de se reproduzir."
    ],
    "correctIndex": 3,
    "explanation": "Quando o dano no DNA não é reparado, a célula não sobrevive ou não se reproduz. A reparação, perfeita ou imperfeita, pressupõe que a célula consegue corrigir o dano, o que aqui não acontece.",
    "distractorAnalysis": [
      "Está incorreta: uma reparação perfeita exige que a célula consiga reparar o dano, o que contraria o enunciado.",
      "Está incorreta: a reparação imperfeita é um tipo de reparação, o que também contraria o facto de a célula não conseguir reparar o dano.",
      "Está incorreta: a irradiação não torna a célula mais resistente; o dano não reparado leva à morte ou à perda de reprodução."
    ],
    "nursingApplication": "Num tratamento de radioterapia, o objetivo é que as células do tumor sofram dano que não conseguem reparar, deixando de se reproduzir."
  },
  {
    "id": 5174,
    "topicId": 5,
    "question": "Um colega afirma: «Se a célula repara imperfeitamente o dano no DNA, morre necessariamente.» Qual é a resposta mais correta?",
    "options": [
      "É verdade: a reparação imperfeita impede a sobrevivência da célula, que é eliminada.",
      "Não é verdade: a célula pode ficar viável, embora modificada.",
      "Não é verdade: a reparação imperfeita é igual à reparação perfeita, sem modificação da célula.",
      "É verdade, mas só nas células que se dividem; as restantes ficam intactas."
    ],
    "correctIndex": 1,
    "explanation": "A reparação imperfeita do dano no DNA origina uma célula viável mas modificada, e não necessariamente a sua morte. A morte ou a perda de reprodução corresponde a outro destino, o de a célula não sobreviver ou não se reproduzir.",
    "distractorAnalysis": [
      "Está incorreta: a reparação imperfeita não implica morte; a célula pode manter-se viável, com modificações.",
      "Está incorreta: se a reparação é imperfeita, a célula fica modificada; só a reparação perfeita a deixa igual.",
      "Está incorreta: a célula com reparação imperfeita pode sobreviver, quer se divida quer não."
    ],
    "nursingApplication": "Ao esclarecer uma dúvida de um utente sobre os efeitos da radiação, o enfermeiro evita afirmações absolutas e explica que células modificadas podem sobreviver."
  },
  {
    "id": 5175,
    "topicId": 5,
    "question": "Um serviço hospitalar realiza angiografia digital, TAC, imagem com radioisótopos e tratamento de um tumor com radiação. Qual destes usos da radiação ionizante é terapêutico?",
    "options": [
      "A angiografia digital, para ver vasos.",
      "A TAC, para obter cortes do corpo.",
      "A radioterapia de um tumor.",
      "A imagem com radioisótopos de um órgão."
    ],
    "correctIndex": 2,
    "explanation": "A angiografia digital, a TAC e a imagem com radioisótopos são meios auxiliares de diagnóstico (imagiologia). A radioterapia é o uso terapêutico, aplicado ao tratamento de tumores.",
    "distractorAnalysis": [
      "Está incorreta: a angiografia digital é um meio de diagnóstico por imagem.",
      "Está incorreta: a TAC é um exame de imagem, usado para diagnosticar e não para tratar.",
      "Está incorreta: a imagem com radioisótopos serve para obter imagens e não para tratar o tumor."
    ],
    "nursingApplication": "Ao receber um utente para sessões de radioterapia, o enfermeiro explica que o objetivo é terapêutico e distingue-o dos exames de imagem que o utente já fez."
  },
  {
    "id": 5176,
    "topicId": 5,
    "question": "Que afirmação sobre o uso terapêutico da radiação ionizante é correta?",
    "options": [
      "Pode tratar alguns tumores malignos e alguns benignos.",
      "Aplica-se apenas ao tratamento de tumores malignos, e não de benignos.",
      "Aplica-se apenas ao tratamento de tumores benignos, e não de malignos.",
      "Não tem uso terapêutico, servindo só para fazer diagnóstico por imagem."
    ],
    "correctIndex": 0,
    "explanation": "A radiação ionizante é usada no tratamento de alguns tumores malignos (radioterapia) e também de alguns tumores benignos.",
    "distractorAnalysis": [
      "Está incorreta: também é usada em alguns tumores benignos.",
      "Está incorreta: é usada sobretudo em tumores malignos, e não só em benignos.",
      "Está incorreta: tem uso terapêutico, na radioterapia, além do uso em diagnóstico."
    ],
    "nursingApplication": "No acolhimento de um utente com indicação de radioterapia para um tumor benigno, o enfermeiro esclarece que a radiação ionizante não se usa só em tumores malignos."
  },
  {
    "id": 5177,
    "topicId": 5,
    "question": "Numa TAC, de que resultam as imagens em cortes do corpo?",
    "options": [
      "Da radiação γ emitida pelos núcleos de um radiofármaco acumulado no órgão.",
      "Da diferente atenuação dos raios X pelos vários tecidos do corpo.",
      "Dos sinais de rádio emitidos pelos protões ao relaxarem depois de um pulso.",
      "Da deteção simultânea de dois fotões de 511 keV originados numa aniquilação."
    ],
    "correctIndex": 1,
    "explanation": "Na TAC, os raios X atravessam o corpo e cada tecido atenua-os de forma diferente. É essa diferença de atenuação que cria o contraste da imagem.",
    "distractorAnalysis": [
      "Está incorreta: a radiação γ de um radiofármaco é o princípio da cintigrafia, e não o da TAC.",
      "Está incorreta: os sinais de rádio emitidos pelos protões são o princípio da ressonância magnética.",
      "Está incorreta: os dois fotões de 511 keV são o princípio da PET."
    ],
    "nursingApplication": "Quando prepara um utente para uma TAC, o enfermeiro explica que o exame usa raios X que atravessam o corpo e que as imagens dependem do modo como cada tecido os atenua."
  },
  {
    "id": 5178,
    "topicId": 5,
    "question": "Qual das opções descreve corretamente o funcionamento de um aparelho de TAC?",
    "options": [
      "O tubo de raios X roda à volta do doente, os detetores medem a radiação que o atravessa e um computador reconstrói cortes.",
      "O doente é injetado com um radiofármaco, e uma câmara fixa regista a radiação γ que sai do corpo.",
      "Um íman intenso alinha os spins e as bobines captam o sinal de rádio dos protões do doente.",
      "O tubo fica fixo por baixo do doente e os detetores rodam para formar uma imagem plana única."
    ],
    "correctIndex": 0,
    "explanation": "Na TAC, o tubo de raios X roda à volta do doente e os detetores medem a radiação que atravessa o corpo. Um computador reconstrói depois imagens em cortes.",
    "distractorAnalysis": [
      "Está incorreta: a injeção de radiofármaco e o registo de radiação γ descrevem a cintigrafia.",
      "Está incorreta: o campo magnético e as bobines descrevem a ressonância magnética.",
      "Está incorreta: na TAC o tubo roda à volta do doente e o computador reconstrói imagens em cortes, e não uma única imagem plana."
    ],
    "nursingApplication": "Ao posicionar um utente na mesa da TAC, o enfermeiro explica-lhe que a máquina vai rodar à volta do corpo e que deve manter-se imóvel durante o exame."
  },
  {
    "id": 5179,
    "topicId": 5,
    "question": "Numa imagem de TAC do tórax, uma estrutura aparece muito clara. A que corresponde esta zona clara?",
    "options": [
      "A ar dos pulmões, que absorve muito os raios X e por isso aparece claro.",
      "A osso, que absorve muito pouco os raios X e por isso é atravessado por quase todos.",
      "A tecido mole, que absorve mais do que o osso e aparece em branco.",
      "A osso, de elevada densidade e número atómico, que absorve muito os raios X."
    ],
    "correctIndex": 3,
    "explanation": "O osso tem elevada densidade e Z, pelo que absorve muito os raios X e aparece como zona clara. Os tecidos moles têm absorção intermédia e o ar absorve muito pouco.",
    "distractorAnalysis": [
      "Está incorreta: o ar dos pulmões absorve muito pouco os raios X e aparece como zona escura.",
      "Está incorreta: o osso absorve muito os raios X, e não pouco.",
      "Está incorreta: os tecidos moles têm absorção intermédia, menor do que a do osso, e aparecem em tons de cinzento."
    ],
    "nursingApplication": "Ao ver uma TAC torácica com o utente, o enfermeiro pode explicar que as costelas aparecem claras e os pulmões, cheios de ar, aparecem escuros."
  },
  {
    "id": 5180,
    "topicId": 5,
    "question": "Numa TAC torácica, os pulmões aparecem escuros. Qual é a explicação física?",
    "options": [
      "O ar absorve muito os raios X e quase nenhuma radiação chega aos detetores.",
      "Os pulmões emitem radiação γ própria, que se sobrepõe à dos raios X do aparelho.",
      "O ar absorve muito pouco os raios X, que chegam em maior quantidade aos detetores.",
      "O ar reflete todos os raios X de volta para o tubo, em vez de os deixar passar."
    ],
    "correctIndex": 2,
    "explanation": "Zonas que absorvem pouco os raios X, como o ar dos pulmões, deixam passar muita radiação e aparecem escuras. Zonas que absorvem muito, como o osso, aparecem claras.",
    "distractorAnalysis": [
      "Está incorreta: se o ar absorvesse muito, apareceria claro como o osso; o ar absorve muito pouco.",
      "Está incorreta: os pulmões não emitem radiação γ; na TAC a fonte é o tubo de raios X.",
      "Está incorreta: o ar não reflete os raios X para o tubo; a zona é escura porque os raios X o atravessam com pouca absorção."
    ],
    "nursingApplication": "Perante uma TAC com zonas escuras nos pulmões, o enfermeiro compreende que é a presença de ar, que absorve pouco os raios X, que as torna escuras."
  },
  {
    "id": 5181,
    "topicId": 5,
    "question": "Para o mesmo problema clínico, um médico hesita entre uma radiografia simples e uma TAC num doente. Que afirmação sobre a radiação envolvida é correta?",
    "options": [
      "A TAC usa ondas de rádio e campos magnéticos, pelo que não envolve radiação ionizante.",
      "A dose é igual nos dois exames, porque ambos usam raios X.",
      "A TAC usa radiação ionizante e a dose é superior à de uma radiografia simples.",
      "A dose da radiografia simples é superior, porque só há uma imagem em vez de vários cortes."
    ],
    "correctIndex": 2,
    "explanation": "A TAC usa raios X, que são radiação ionizante, e a dose é superior à de uma radiografia simples. O risco da radiação deve ser pesado face ao benefício clínico do exame.",
    "distractorAnalysis": [
      "Está incorreta: a TAC usa raios X; ondas de rádio e campos magnéticos são da ressonância magnética.",
      "Está incorreta: ambos usam raios X, mas a TAC obtém muitos cortes e a dose é superior.",
      "Está incorreta: a dose da TAC é superior à da radiografia simples, e não inferior."
    ],
    "nursingApplication": "Antes de uma TAC numa criança, o enfermeiro confirma com a equipa se o exame é necessário, porque a dose é superior à de uma radiografia simples."
  },
  {
    "id": 5182,
    "topicId": 5,
    "question": "Um doente cai e há suspeita de fratura do crânio. Que tipo de informação fornece principalmente uma TAC?",
    "options": [
      "Informação funcional, sobre como o órgão funciona e não sobre a sua forma.",
      "Informação metabólica, sobre o consumo de glicose pelas células.",
      "Informação sobre o spin dos núcleos de hidrogénio e os seus tempos de relaxação.",
      "Informação anatómica, com imagens da forma e da estrutura em cortes."
    ],
    "correctIndex": 3,
    "explanation": "A TAC obtém imagens em cortes do corpo e fornece informação anatómica. A informação funcional é da cintigrafia, a metabólica é da PET e o spin do hidrogénio é da ressonância magnética.",
    "distractorAnalysis": [
      "Está incorreta: a informação funcional é a que a cintigrafia fornece, e não a TAC.",
      "Está incorreta: a informação metabólica, ligada ao consumo de glicose, é a da PET.",
      "Está incorreta: o spin e os tempos de relaxação do hidrogénio pertencem à ressonância magnética."
    ],
    "nursingApplication": "Perante uma queda com traumatismo craniano, o enfermeiro prepara o utente para uma TAC cerebral, que fornece imagens anatómicas rápidas da cabeça."
  },
  {
    "id": 5183,
    "topicId": 5,
    "question": "Um médico pretende saber como funciona um órgão e não apenas qual é a sua forma. Que tipo de imagem fornece a cintigrafia?",
    "options": [
      "Uma imagem anatómica, que mostra apenas a forma e a estrutura do órgão.",
      "Uma imagem funcional, que mostra a distribuição do radiofármaco e o funcionamento do órgão.",
      "Uma imagem metabólica, obtida a partir da aniquilação de positrões.",
      "Uma imagem anatómica de tecidos moles, obtida com campo magnético e ondas de rádio."
    ],
    "correctIndex": 1,
    "explanation": "A cintigrafia é uma imagem funcional: mostra como o órgão funciona e não apenas a sua forma. A imagem resulta da distribuição do radiofármaco no órgão.",
    "distractorAnalysis": [
      "Está incorreta: a informação apenas anatómica é a da TAC; a cintigrafia mostra o funcionamento do órgão.",
      "Está incorreta: a imagem metabólica, com aniquilação de positrões, é a da PET.",
      "Está incorreta: o campo magnético e as ondas de rádio pertencem à ressonância magnética."
    ],
    "nursingApplication": "Perante um pedido de cintigrafia da tiroide, o enfermeiro explica ao utente que o exame avalia o funcionamento do órgão e não apenas o seu aspeto."
  },
  {
    "id": 5184,
    "topicId": 5,
    "question": "Antes de uma cintigrafia, injeta-se um radiofármaco com Tc-99m. Qual é a função deste radiofármaco?",
    "options": [
      "Acumular-se no órgão em estudo e emitir radiação γ a partir do núcleo.",
      "Absorver os raios X de um tubo externo para aumentar o contraste do órgão.",
      "Alinhar os spins dos protões do órgão com um campo magnético intenso.",
      "Emitir positrões que se aniquilam e originam dois fotões de 511 keV."
    ],
    "correctIndex": 0,
    "explanation": "O radiofármaco, por exemplo com Tc-99m, acumula-se no órgão em estudo e o seu núcleo emite radiação γ, que atravessa o corpo e sai. A gama-câmara regista essa radiação.",
    "distractorAnalysis": [
      "Está incorreta: na cintigrafia não existe tubo externo de raios X; a radiação vem do próprio radiofármaco.",
      "Está incorreta: o alinhamento de spins por um campo magnético é o princípio da ressonância magnética.",
      "Está incorreta: a emissão de positrões e os fotões de 511 keV pertencem à PET; o Tc-99m emite radiação γ."
    ],
    "nursingApplication": "Antes de injetar um radiofármaco para uma cintigrafia, o enfermeiro confirma a identificação do utente e o radiofármaco prescrito, sabendo que a radiação sai do corpo do utente depois da injeção."
  },
  {
    "id": 5185,
    "topicId": 5,
    "question": "Numa cintigrafia, onde se encontra a fonte da radiação γ que forma a imagem?",
    "options": [
      "Dentro do doente, no radiofármaco acumulado no órgão.",
      "Num tubo que roda à volta do doente durante o exame.",
      "Na gama-câmara, que emite fotões em direção ao doente.",
      "Numa bobine de radiofrequência colocada junto ao doente."
    ],
    "correctIndex": 0,
    "explanation": "Na cintigrafia, a radiação γ é emitida pelo núcleo do radionuclídeo que está dentro do doente, no radiofármaco acumulado no órgão. A gama-câmara apenas regista a radiação que sai do corpo.",
    "distractorAnalysis": [
      "Está incorreta: o tubo que roda à volta do doente é o da TAC, que emite raios X.",
      "Está incorreta: a gama-câmara é um detetor: regista os fotões e não os emite.",
      "Está incorreta: as bobines de radiofrequência são da ressonância magnética e captam sinais de rádio."
    ],
    "nursingApplication": "Depois de um exame de cintigrafia, o enfermeiro tem em conta que o utente é, durante algum tempo, a fonte da radiação, e segue as instruções de proteção dadas pela equipa."
  },
  {
    "id": 5186,
    "topicId": 5,
    "question": "Qual é o papel da gama-câmara numa cintigrafia?",
    "options": [
      "Emitir fotões γ que atravessam o doente e são absorvidos pelo órgão em estudo.",
      "Registar os fotões γ que saem do doente e formar a imagem da distribuição do radiofármaco.",
      "Gerar um campo magnético que alinha os spins dos protões do órgão.",
      "Medir a coincidência de dois fotões de 511 keV para localizar cada aniquilação."
    ],
    "correctIndex": 1,
    "explanation": "A gama-câmara regista os fotões γ emitidos pelo radiofármaco e forma a imagem da sua distribuição no órgão. Não emite radiação.",
    "distractorAnalysis": [
      "Está incorreta: a gama-câmara não é uma fonte de radiação; a radiação γ vem do radiofármaco no interior do doente.",
      "Está incorreta: gerar um campo magnético é função do equipamento da ressonância magnética.",
      "Está incorreta: medir coincidências de dois fotões de 511 keV é o método da PET."
    ],
    "nursingApplication": "Durante uma cintigrafia, o enfermeiro explica ao utente que a gama-câmara não emite radiação e apenas regista a que sai do seu corpo."
  },
  {
    "id": 5187,
    "topicId": 5,
    "question": "Porque é que na cintigrafia se usa radiação γ emitida pelo núcleo do radionuclídeo?",
    "options": [
      "Porque é travada pela pele e fica toda retida no órgão em estudo.",
      "Porque tem pouca penetração e só permite ver órgãos junto à superfície.",
      "Porque é muito penetrante, atravessa o corpo e sai, podendo ser detetada no exterior.",
      "Porque é emitida pelos eletrões do átomo e não pelo núcleo."
    ],
    "correctIndex": 2,
    "explanation": "A radiação γ é eletromagnética e tem muito elevado poder de penetração, pelo que atravessa o corpo e sai. Assim, a gama-câmara consegue detetá-la fora do doente.",
    "distractorAnalysis": [
      "Está incorreta: a radiação γ é muito penetrante e não fica retida; quem é travada pela pele é a radiação α.",
      "Está incorreta: a radiação γ tem elevado poder de penetração, e não pouco.",
      "Está incorreta: na cintigrafia a radiação γ é emitida pelo núcleo do radionuclídeo."
    ],
    "nursingApplication": "Ao acompanhar um utente numa cintigrafia óssea, o enfermeiro pode explicar que a radiação detetada vem do interior do corpo e sai, sem que seja necessário abrir o tecido."
  },
  {
    "id": 5188,
    "topicId": 5,
    "question": "Na PET usa-se frequentemente FDG, um análogo da glicose marcado com flúor-18. Porque é que a FDG ajuda a destacar tumores na imagem?",
    "options": [
      "Porque as células tumorais têm menor consumo de glicose e deixam a FDG circular livremente.",
      "Porque os tumores absorvem mais raios X do que os tecidos moles que os rodeiam.",
      "Porque a FDG emite radiação γ apenas quando entra em contacto com tecido tumoral.",
      "Porque as células tumorais têm, em geral, maior consumo de glicose e acumulam mais FDG."
    ],
    "correctIndex": 3,
    "explanation": "As células tumorais têm, em geral, maior consumo de glicose, pelo que acumulam mais FDG, que é análoga da glicose. Esta acumulação destaca-as numa imagem metabólica.",
    "distractorAnalysis": [
      "Está incorreta: as células tumorais têm, em geral, maior e não menor consumo de glicose.",
      "Está incorreta: a PET não usa raios X; o contraste vem da acumulação do radiofármaco emissor β⁺.",
      "Está incorreta: a FDG emite radiação por ser radioativa, quer esteja ou não em tecido tumoral; o contraste vem de acumular mais."
    ],
    "nursingApplication": "Antes de uma PET com FDG, o enfermeiro segue as indicações da equipa sobre a preparação do utente, sabendo que o radiofármaco se comporta como a glicose no organismo."
  },
  {
    "id": 5189,
    "topicId": 5,
    "question": "Na PET, um positrão encontra um eletrão e ambos se aniquilam. O que se forma e em que sentidos se propaga?",
    "options": [
      "Um único fotão γ de 1022 keV, numa direção qualquer.",
      "Dois fotões γ de 511 keV, na mesma direção e no mesmo sentido.",
      "Dois fotões γ de 511 keV, que formam entre si um ângulo de 90°.",
      "Dois fotões γ de 511 keV, em sentidos opostos (180°)."
    ],
    "correctIndex": 3,
    "explanation": "Na aniquilação positrão–eletrão, a massa do par converte-se em energia e conservam-se a energia e o momento. Formam-se dois fotões γ de 511 keV, que saem em sentidos opostos (180°).",
    "distractorAnalysis": [
      "Está incorreta: um único fotão não permite conservar o momento; formam-se dois fotões em sentidos opostos.",
      "Está incorreta: se saíssem no mesmo sentido, não se conservaria o momento; saem em sentidos opostos.",
      "Está incorreta: o momento só se conserva se os fotões saírem a 180°, e não a 90°."
    ],
    "nursingApplication": "Ao explicar a um utente o que se passa durante uma PET, o enfermeiro pode referir que o exame regista pares de fotões γ que saem em sentidos opostos."
  },
  {
    "id": 5190,
    "topicId": 5,
    "question": "Na PET, dois detetores opostos registam, ao mesmo tempo, fotões de 511 keV. Que conclusão se pode tirar?",
    "options": [
      "A fonte do radiofármaco encontra-se fora do doente, junto a um dos detetores.",
      "Cada fotão veio de um núcleo diferente, sem qualquer relação entre os dois.",
      "A aniquilação ocorreu algures na linha que une os dois detetores.",
      "O positrão foi emitido com 511 keV e atravessou o corpo sem se aniquilar."
    ],
    "correctIndex": 2,
    "explanation": "Os dois fotões resultam da mesma aniquilação e saem em sentidos opostos. A deteção em coincidência permite localizar a origem da emissão na linha entre os detetores.",
    "distractorAnalysis": [
      "Está incorreta: o radiofármaco está dentro do doente; a coincidência indica a linha onde ocorreu a aniquilação.",
      "Está incorreta: os dois fotões resultam da mesma aniquilação e não de núcleos diferentes.",
      "Está incorreta: o positrão aniquila-se com um eletrão; é dessa aniquilação que resultam os fotões de 511 keV."
    ],
    "nursingApplication": "Durante uma PET, o enfermeiro pede ao utente que fique imóvel, pois os pares de fotões detetados em coincidência são usados para localizar onde se concentra o radiofármaco."
  },
  {
    "id": 5191,
    "topicId": 5,
    "question": "Na aniquilação de um positrão com um eletrão em repouso, a energia total libertada é E = 2·m·c². Sabendo que m = 9,11 × 10⁻³¹ kg (massa do eletrão e do positrão) e c = 3,0 × 10⁸ m/s, qual é a energia total libertada?",
    "options": [
      "1,64 × 10⁻¹³ J",
      "8,20 × 10⁻¹⁴ J",
      "5,47 × 10⁻²² J",
      "3,28 × 10⁻¹³ J"
    ],
    "correctIndex": 0,
    "explanation": "A massa do par positrão–eletrão converte-se em energia segundo E = 2·m·c². Substituindo os valores obtém-se cerca de 1,64 × 10⁻¹³ J.",
    "solution": [
      "Dados: m = 9,11 × 10⁻³¹ kg (positrão e eletrão); c = 3,0 × 10⁸ m/s.",
      "Fórmula: E = 2·m·c².",
      "Substituição: E = 2 × 9,11 × 10⁻³¹ × (3,0 × 10⁸)² = 2 × 9,11 × 10⁻³¹ × 9,0 × 10¹⁶.",
      "Resultado: 1,64 × 10⁻¹³ J"
    ],
    "distractorAnalysis": [
      "Está incorreta: usou E = m·c², esquecendo-se de que a massa total é a do eletrão mais a do positrão (fator 2).",
      "Está incorreta: multiplicou 2·m por c em vez de c²: esqueceu-se de elevar a velocidade da luz ao quadrado.",
      "Está incorreta: duplicou duas vezes a massa (usou 4·m·c²), contando o fator 2 em duplicado."
    ],
    "nursingApplication": "Ao explicar a um utente porque é que a PET deteta fotões de energia tão bem definida, o enfermeiro pode dizer que essa energia vem da massa do par positrão–eletrão convertida em energia."
  },
  {
    "id": 5192,
    "topicId": 5,
    "question": "Numa aniquilação positrão–eletrão libertam-se 1,60 × 10⁻¹³ J, que se repartem igualmente por dois fotões γ idênticos. Sabendo que 1 eV = 1,6 × 10⁻¹⁹ J, qual é a energia de cada fotão, em keV?",
    "options": [
      "1000 keV",
      "500 keV",
      "5,0 × 10⁵ keV",
      "0,50 keV"
    ],
    "correctIndex": 1,
    "explanation": "Cada fotão leva metade da energia total: 0,80 × 10⁻¹³ J. Convertendo para eV (dividindo por 1,6 × 10⁻¹⁹ J/eV) obtém-se 5,0 × 10⁵ eV, ou seja, 500 keV.",
    "solution": [
      "Dados: E<sub>total</sub> = 1,60 × 10⁻¹³ J; 2 fotões idênticos; 1 eV = 1,6 × 10⁻¹⁹ J.",
      "Fórmula: E<sub>fotão</sub> = E<sub>total</sub> / 2, e E (eV) = E (J) / (1,6 × 10⁻¹⁹).",
      "Substituição: E<sub>fotão</sub> = 0,80 × 10⁻¹³ J = 8,0 × 10⁻¹⁴ J; 8,0 × 10⁻¹⁴ / 1,6 × 10⁻¹⁹ = 5,0 × 10⁵ eV = 500 keV.",
      "Resultado: 500 keV"
    ],
    "distractorAnalysis": [
      "Está incorreta: não dividiu a energia total por 2: calculou a energia dos dois fotões em conjunto.",
      "Está incorreta: converteu de joules para eV mas esqueceu-se de passar de eV para keV (dividir por 1000).",
      "Está incorreta: dividiu por 1000 duas vezes ao passar de eV para keV."
    ],
    "nursingApplication": "Numa sala de PET, o enfermeiro cumpre as regras de proteção do serviço sabendo que cada fotão da aniquilação tem energia da ordem das centenas de keV."
  },
  {
    "id": 5193,
    "topicId": 5,
    "question": "Um positrão aniquila-se com um eletrão em repouso. Com m = 9,11 × 10⁻³¹ kg para cada partícula, c = 3,0 × 10⁸ m/s e 1 eV = 1,6 × 10⁻¹⁹ J, qual é a energia total libertada, em keV?",
    "options": [
      "512 keV",
      "1,02 × 10³ keV",
      "1,02 × 10⁶ keV",
      "2,05 × 10³ keV"
    ],
    "correctIndex": 1,
    "explanation": "A energia total é E = 2·m·c² ≈ 1,64 × 10⁻¹³ J. Dividindo por 1,6 × 10⁻¹⁹ J obtém-se cerca de 1,02 × 10⁶ eV, ou seja, 1,02 × 10³ keV.",
    "solution": [
      "Dados: m = 9,11 × 10⁻³¹ kg; c = 3,0 × 10⁸ m/s; 1 eV = 1,6 × 10⁻¹⁹ J.",
      "Fórmula: E = 2·m·c²; E (keV) = E (J) / (1,6 × 10⁻¹⁹ × 10³).",
      "Substituição: E = 2 × 9,11 × 10⁻³¹ × (3,0 × 10⁸)² = 1,64 × 10⁻¹³ J; 1,64 × 10⁻¹³ / 1,6 × 10⁻¹⁶ ≈ 1,02 × 10³ keV.",
      "Resultado: 1,02 × 10³ keV"
    ],
    "distractorAnalysis": [
      "Está incorreta: usou E = m·c², esquecendo o fator 2 da massa total do par.",
      "Está incorreta: converteu para eV mas não passou de eV para keV (não dividiu por 1000).",
      "Está incorreta: usou 4·m·c², contando duas vezes o fator 2."
    ],
    "nursingApplication": "Quando um utente pergunta o que são os fotões de 511 keV da PET, o enfermeiro pode explicar que resultam da conversão em energia da massa de um positrão e de um eletrão."
  },
  {
    "id": 5194,
    "topicId": 5,
    "question": "Porque é que a ressonância magnética é especialmente adequada para estudar tecidos ricos em água e gordura?",
    "options": [
      "Porque a água e a gordura absorvem muito os raios X e aparecem como zonas claras.",
      "Porque a água e a gordura acumulam o Tc-99m e emitem radiação γ a partir do núcleo.",
      "Porque os eletrões da água e da gordura entram em ressonância com as ondas de rádio.",
      "Porque esses tecidos têm muitos núcleos de hidrogénio, cujo spin os faz comportarem-se como pequenos ímanes."
    ],
    "correctIndex": 3,
    "explanation": "A ressonância magnética usa os núcleos de hidrogénio (protões) da água e da gordura. O protão tem spin e comporta-se como um pequeno íman, que um campo magnético intenso alinha.",
    "distractorAnalysis": [
      "Está incorreta: a ressonância magnética não usa raios X; a água e a gordura interessam pelos núcleos de hidrogénio.",
      "Está incorreta: o Tc-99m e a radiação γ pertencem à cintigrafia.",
      "Está incorreta: o sinal da ressonância magnética vem do spin dos núcleos de hidrogénio e não dos eletrões."
    ],
    "nursingApplication": "Ao preparar um utente para uma ressonância magnética, o enfermeiro explica que o exame explora o hidrogénio da água e da gordura do corpo e que um campo magnético intenso está sempre ativo na sala."
  },
  {
    "id": 5195,
    "topicId": 5,
    "question": "Na ressonância magnética, a frequência de ressonância do hidrogénio é proporcional a B<sub>0</sub> e vale cerca de 64 MHz a 1,5 T. Qual é a frequência de ressonância num aparelho de 3,0 T?",
    "options": [
      "192 MHz",
      "32 MHz",
      "128 MHz",
      "67 MHz"
    ],
    "correctIndex": 2,
    "explanation": "Sendo a frequência proporcional a B<sub>0</sub>, ao duplicar o campo de 1,5 T para 3,0 T a frequência também duplica. Obtém-se 128 MHz.",
    "solution": [
      "Dados: f = 64 MHz para B<sub>0</sub> = 1,5 T; B<sub>0</sub>' = 3,0 T; f proporcional a B<sub>0</sub>.",
      "Fórmula: f' / f = B<sub>0</sub>' / B<sub>0</sub>.",
      "Substituição: f' = 64 × 3,0 / 1,5.",
      "Resultado: 128 MHz"
    ],
    "distractorAnalysis": [
      "Está incorreta: multiplicou 64 MHz por 3,0, ignorando que 64 MHz corresponde a 1,5 T e não a 1 T.",
      "Está incorreta: usou uma relação inversa (64 × 1,5 / 3,0), mas a frequência aumenta com B<sub>0</sub>.",
      "Está incorreta: somou o valor do campo (3 T) a 64 MHz, em vez de usar a proporcionalidade."
    ],
    "nursingApplication": "Perante a indicação de que um aparelho de 3,0 T exige uma frequência de ressonância diferente da de 1,5 T, o enfermeiro compreende porque cada equipamento tem a sua frequência de trabalho."
  },
  {
    "id": 5196,
    "topicId": 5,
    "question": "Dois tecidos têm tempos de relaxação T1 e T2 diferentes. Que consequência tem este facto na imagem de ressonância magnética?",
    "options": [
      "Os protões emitem sinais de rádio diferentes ao relaxarem, o que cria contraste entre os tecidos.",
      "Os tecidos atenuam de forma diferente os raios X, o que cria contraste entre eles.",
      "Os tecidos acumulam quantidades diferentes de radiofármaco, o que cria contraste entre eles.",
      "Os tecidos ficam com frequências de ressonância diferentes, o que impede a formação da imagem."
    ],
    "correctIndex": 0,
    "explanation": "Ao cessar o pulso de radiofrequência, os protões relaxam e emitem um sinal de rádio, captado por bobines. Como os tecidos têm tempos de relaxação T1 e T2 diferentes, o sinal difere e cria contraste.",
    "distractorAnalysis": [
      "Está incorreta: a atenuação dos raios X é o princípio de contraste da TAC e não da ressonância magnética.",
      "Está incorreta: a acumulação diferente de radiofármaco é o princípio da cintigrafia, e não o da ressonância magnética.",
      "Está incorreta: as diferenças de T1 e T2 não impedem a imagem; são a origem do contraste."
    ],
    "nursingApplication": "Ao ouvir o técnico falar de imagens em T1 e T2, o enfermeiro reconhece que se trata de formas de realçar tecidos diferentes na ressonância magnética."
  },
  {
    "id": 5197,
    "topicId": 5,
    "question": "Um aparelho de ressonância magnética tem B<sub>0</sub> = 0,5 T. Sabendo que a frequência de ressonância do hidrogénio é proporcional a B<sub>0</sub> e vale cerca de 64 MHz a 1,5 T, qual é a frequência de ressonância neste aparelho?",
    "options": [
      "21,3 MHz",
      "32 MHz",
      "192 MHz",
      "42,7 MHz"
    ],
    "correctIndex": 0,
    "explanation": "A frequência é proporcional a B<sub>0</sub>: como 0,5 T é um terço de 1,5 T, a frequência é um terço de 64 MHz, ou seja, 21,3 MHz.",
    "solution": [
      "Dados: f = 64 MHz para B<sub>0</sub> = 1,5 T; B<sub>0</sub>' = 0,5 T; f proporcional a B<sub>0</sub>.",
      "Fórmula: f' / f = B<sub>0</sub>' / B<sub>0</sub>.",
      "Substituição: f' = 64 × 0,5 / 1,5.",
      "Resultado: 21,3 MHz"
    ],
    "distractorAnalysis": [
      "Está incorreta: multiplicou 64 MHz por 0,5, esquecendo que 64 MHz corresponde a 1,5 T.",
      "Está incorreta: usou uma relação inversa (64 × 1,5 / 0,5), mas a frequência diminui quando B<sub>0</sub> diminui.",
      "Está incorreta: calculou a frequência por tesla (64 / 1,5) e não a multiplicou por 0,5 T."
    ],
    "nursingApplication": "Quando um serviço dispõe de aparelhos com campos diferentes, o enfermeiro percebe que o campo magnético e a frequência do pulso de radiofrequência variam em conjunto."
  },
  {
    "id": 5198,
    "topicId": 5,
    "question": "Porque é que a ressonância magnética não é considerada uma técnica de radiação ionizante?",
    "options": [
      "Porque o campo magnético intenso impede que os eletrões sejam extraídos das moléculas.",
      "Porque usa raios X de energia tão baixa que não conseguem extrair eletrões.",
      "Porque os fotões de radiofrequência têm energia insuficiente para ionizar.",
      "Porque os fotões de radiofrequência são absorvidos todos pela pele do doente."
    ],
    "correctIndex": 2,
    "explanation": "A ressonância magnética usa campos magnéticos e ondas de rádio. Os fotões de radiofrequência não têm energia suficiente para extrair eletrões, pelo que a técnica não é ionizante.",
    "distractorAnalysis": [
      "Está incorreta: o campo magnético não bloqueia a extração de eletrões; o que importa é a energia dos fotões usados.",
      "Está incorreta: a ressonância magnética não usa raios X; usa campos magnéticos e ondas de rádio.",
      "Está incorreta: a razão não é a absorção na pele, mas a energia insuficiente dos fotões de radiofrequência."
    ],
    "nursingApplication": "Quando uma grávida receia a ressonância magnética por pensar que envolve raios X, o enfermeiro explica que a técnica não usa radiação ionizante, mas que a decisão do exame cabe à equipa médica."
  },
  {
    "id": 5199,
    "topicId": 5,
    "question": "Qual dos pares técnica–tipo de informação está de acordo com a classificação habitual das técnicas de imagiologia?",
    "options": [
      "TAC – informação funcional do órgão.",
      "Cintigrafia – informação metabólica de aniquilação.",
      "PET – informação anatómica do osso.",
      "Ressonância magnética – informação anatómica dos tecidos moles."
    ],
    "correctIndex": 3,
    "explanation": "A TAC dá informação anatómica, a cintigrafia informação funcional, a PET informação metabólica e a ressonância magnética informação anatómica dos tecidos moles.",
    "distractorAnalysis": [
      "Está incorreta: a TAC fornece informação anatómica; a informação funcional é a da cintigrafia.",
      "Está incorreta: a cintigrafia fornece informação funcional; a informação metabólica, ligada à aniquilação, é a da PET.",
      "Está incorreta: a PET fornece informação metabólica, e não anatómica."
    ],
    "nursingApplication": "Ao ler um pedido de exame, o enfermeiro associa cada técnica ao tipo de informação que fornece (anatómica, funcional ou metabólica) para responder às dúvidas do utente."
  },
  {
    "id": 5200,
    "topicId": 5,
    "question": "Uma criança precisa de imagem dos tecidos moles do joelho e, se a pergunta clínica o permitir, a equipa quer evitar radiação ionizante. Que técnica é a mais indicada?",
    "options": [
      "TAC, que usa raios X com dose superior à de uma radiografia simples.",
      "Ressonância magnética, que usa campos magnéticos e ondas de rádio.",
      "PET, que usa fotões γ de 511 keV de um radiofármaco emissor β⁺.",
      "Cintigrafia, que usa radiação γ emitida por um radiofármaco injetado."
    ],
    "correctIndex": 1,
    "explanation": "A escolha da técnica depende da pergunta clínica e do risco da radiação. A ressonância magnética evita radiação ionizante e é boa para tecidos moles, o que a torna adequada neste caso.",
    "distractorAnalysis": [
      "Está incorreta: a TAC usa radiação ionizante, com dose superior à de uma radiografia simples, e a equipa quer evitá-la.",
      "Está incorreta: a PET usa radiação ionizante e fornece informação metabólica, não anatómica de tecidos moles.",
      "Está incorreta: a cintigrafia usa radiação ionizante e fornece informação funcional e não anatómica."
    ],
    "nursingApplication": "Na marcação de um exame de imagem a uma criança, o enfermeiro informa os pais de que a técnica é escolhida em função da pergunta clínica e do risco da radiação."
  }
];
