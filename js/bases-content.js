/**
 * Bases de matemática e unidades para a Biofísica.
 *
 * Lições progressivas para estudantes que vêm de agrupamentos sem Física/Matemática A
 * (Economia, Línguas e Humanidades, …). Cada lição tem objetivo, explicação, exemplos
 * resolvidos passo a passo, erro comum, ligação à enfermagem e exercícios de verificação.
 * Os exercícios não entram no banco de perguntas nem nas estatísticas.
 */

const BASES_LESSONS = [
  // ------------------------------------------------------------------ 1
  {
    id: 'decimais',
    icon: '🔢',
    title: 'Decimais, frações e percentagens',
    goal: 'Ler números com vírgula e passar à vontade entre fração, número decimal e percentagem.',
    body: `
      <ul>
        <li><strong>Vírgula decimal:</strong> em Portugal a vírgula separa a parte inteira da parte decimal: 9,8 lê-se «nove vírgula oito». Para separar os milhares usa-se um espaço: 1&nbsp;500 mL.</li>
        <li><strong>Atenção à calculadora:</strong> calculadoras, telemóveis e folhas de cálculo em inglês usam o <em>ponto</em> no lugar da vírgula. Na calculadora escreves 9.8, mas no teste escreves 9,8.</li>
        <li><strong>Uma fração é uma divisão:</strong> 3/4 = 3 ÷ 4 = 0,75. O número de cima (numerador) divide-se pelo de baixo (denominador).</li>
        <li><strong>Percentagem quer dizer «por cada cem»:</strong> 25 % = 25/100 = 0,25. Para calcular x % de um valor, multiplica o valor por x/100.</li>
        <li><strong>De decimal para percentagem</strong> multiplica-se por 100 (0,6 = 60 %); <strong>de percentagem para decimal</strong> divide-se por 100 (5 % = 0,05).</li>
      </ul>`,
    examples: [
      {
        title: '20 % de um soro de 500 mL',
        steps: ['20 % = 20/100 = 0,20', '0,20 × 500 mL = 100 mL']
      },
      {
        title: 'Glicose num soro glicosado a 5 % (500 mL)',
        steps: ['5 % significa 5 g de glicose por cada 100 mL', '500 mL são 5 vezes 100 mL', '5 × 5 g = 25 g de glicose']
      }
    ],
    pitfall: 'Confundir 0,5 com 5 %. Na verdade 0,5 = 50 %, e 5 % = 0,05 (dez vezes menos).',
    nursing: 'O soro fisiológico a 0,9 % contém 0,9 g de cloreto de sódio por cada 100 mL; um saco de 500 mL tem, portanto, 4,5 g.',
    exercises: [
      {
        q: 'Quanto é 3/5 escrito como número decimal?',
        options: ['0,35', '0,6', '1,67', '0,15'],
        correctIndex: 1,
        explanation: '3/5 = 3 ÷ 5 = 0,6. O valor 1,67 resulta de dividir ao contrário (5 ÷ 3).'
      },
      {
        q: 'Quantos gramas de cloreto de sódio há em 1000 mL de soro fisiológico a 0,9 %?',
        options: ['0,9 g', '90 g', '9 g', '0,09 g'],
        correctIndex: 2,
        explanation: '0,9 % são 0,9 g por cada 100 mL. Em 1000 mL há 10 vezes mais: 10 × 0,9 g = 9 g.'
      },
      {
        q: 'Como se escreve 0,05 em percentagem?',
        options: ['0,05 %', '5 %', '50 %', '0,5 %'],
        correctIndex: 1,
        explanation: 'De decimal para percentagem multiplica-se por 100: 0,05 × 100 = 5 %.'
      }
    ]
  },

  // ------------------------------------------------------------------ 2
  {
    id: 'operacoes',
    icon: '🧩',
    title: 'Ordem das operações e parênteses',
    goal: 'Saber por que ordem se fazem as contas numa fórmula e escrevê-las corretamente na calculadora.',
    body: `
      <p>Numa expressão com várias operações, as contas fazem-se sempre por esta ordem:</p>
      <ol>
        <li><strong>Parênteses</strong> ( ): primeiro o que está dentro deles.</li>
        <li><strong>Potências</strong> (R<sup>2</sup>, R<sup>4</sup>).</li>
        <li><strong>Multiplicações e divisões</strong>, da esquerda para a direita.</li>
        <li><strong>Somas e subtrações</strong>, da esquerda para a direita.</li>
      </ol>
      <ul>
        <li><strong>O traço de fração funciona como parênteses:</strong> calcula-se tudo o que está em cima (numerador), tudo o que está em baixo (denominador) e só no fim se divide um pelo outro.</li>
        <li><strong>Na calculadora não há traço de fração:</strong> o denominador tem de ir entre parênteses. 600 / (2 × 0,03) escreve-se <code>600 ÷ ( 2 × 0.03 )</code>.</li>
        <li><strong>Alternativa segura:</strong> calcula o numerador, depois o denominador, escreve os dois resultados no papel e só então divide.</li>
      </ul>
      <div class="formula-box"><div class="formula-box-title">Exemplo rápido</div>
        <div class="formula-row"><code>20 + 6 ÷ 2 = 20 + 3 = 23</code><span>a divisão vem antes da soma (não dá 13)</span></div>
        <div class="formula-row"><code>(20 + 6) ÷ 2 = 26 ÷ 2 = 13</code><span>com parênteses, a soma faz-se primeiro</span></div>
      </div>`,
    examples: [
      {
        title: 'Somar antes de dividir (alavanca do antebraço)',
        steps: ['Momentos a equilibrar: 3,68 N·m (antebraço e mão) + 2,94 N·m (objeto) = 6,62 N·m', 'Braço da força do músculo: 0,08 m', 'F<sub>E</sub> = (3,68 + 2,94) / 0,08 = 6,62 / 0,08 = 82,75 N', 'Sem parênteses, 3,68 + 2,94 ÷ 0,08 daria 3,68 + 36,75 = 40,43 N (errado)']
      },
      {
        title: 'Um denominador com produtos (lei de Poiseuille)',
        steps: ['D = 3,14 × 120 × 0,2<sup>4</sup> / (8 × 0,004 × 10)', 'Numerador: primeiro a potência, 0,2<sup>4</sup> = 0,0016; depois 3,14 × 120 × 0,0016 = 0,602&nbsp;88', 'Denominador: 8 × 0,004 × 10 = 0,32', 'D = 0,602&nbsp;88 / 0,32 ≈ 1,88 cm³/s']
      },
      {
        title: 'O mesmo cálculo na calculadora',
        steps: ['Certo: <code>3.14 × 120 × 0.2^4 ÷ ( 8 × 0.004 × 10 )</code> → 1,884', 'Errado: <code>3.14 × 120 × 0.2^4 ÷ 8 × 0.004 × 10</code> → cerca de 0,003', 'Sem parênteses, a calculadora divide só por 8 e depois <em>multiplica</em> por 0,004 e por 10']
      }
    ],
    pitfall: 'Escrever na calculadora a ÷ b × c quando se quer a ÷ (b × c). Sem parênteses, o c passa a multiplicar o resultado em vez de ficar no denominador.',
    nursing: 'Ao confirmar de cabeça uma perfusão de 1000 mL em 8 h, 1000 / (8 × 60) ≈ 2,1 mL/min (= 125 mL/h, o valor a programar na bomba); sem parênteses, 1000 ÷ 8 × 60 daria 7500, um valor absurdo que uma estimativa rápida deteta.',
    exercises: [
      {
        q: 'Quanto é 10 + 20 ÷ 5?',
        options: ['6', '14', '30', '4'],
        correctIndex: 1,
        explanation: 'A divisão faz-se antes da soma: 20 ÷ 5 = 4 e 10 + 4 = 14. O valor 6 resulta de somar primeiro ((10 + 20) ÷ 5).'
      },
      {
        q: 'Quanto é 120 / (4 × 3)?',
        options: ['10', '90', '40', '360'],
        correctIndex: 0,
        explanation: 'O denominador calcula-se primeiro: 4 × 3 = 12, e 120 / 12 = 10. O valor 90 resulta de fazer 120 ÷ 4 × 3 sem parênteses; 40 de esquecer o 4.'
      },
      {
        q: 'Qual é a forma correta de introduzir 300 / (5 × 0,2) na calculadora?',
        options: ['<code>300 ÷ 5 × 0.2</code>', '<code>( 300 ÷ 5 ) × 0.2</code>', '<code>300 × 5 ÷ 0.2</code>', '<code>300 ÷ ( 5 × 0.2 )</code>'],
        correctIndex: 3,
        explanation: 'O denominador inteiro tem de ficar entre parênteses: 5 × 0,2 = 1 e 300 ÷ 1 = 300. As duas primeiras formas dão 12, porque dividem só por 5 e depois multiplicam por 0,2.'
      }
    ]
  },

  // ------------------------------------------------------------------ 3
  {
    id: 'fracoes',
    icon: '➗',
    title: 'Frações nas fórmulas: numerador e denominador',
    goal: 'Perceber o que acontece ao resultado de uma fórmula quando muda o que está em cima (numerador) ou em baixo (denominador) do traço de fração.',
    body: `
      <p>Muitas fórmulas da Biofísica são frações: p = F/A, σ = F/S, ε = ΔL/L<sub>0</sub>, D = V/t, Re = v · ρ · d / η. O que está em cima do traço chama-se <strong>numerador</strong>; o que está em baixo chama-se <strong>denominador</strong>.</p>
      <div class="formula-box"><div class="formula-box-title">Regra de ouro</div>
        <div class="formula-row"><code>numerador ↑ → resultado ↑</code><span>o que está em cima aumenta o resultado (relação direta)</span></div>
        <div class="formula-row"><code>denominador ↑ → resultado ↓</code><span>o que está em baixo diminui o resultado (relação inversa)</span></div>
      </div>
      <ul>
        <li><strong>Em cima:</strong> em p = F/A, o dobro da força dá o dobro da pressão.</li>
        <li><strong>Em baixo:</strong> em p = F/A, o dobro da área dá metade da pressão.</li>
        <li><strong>Dividir por um número menor do que 1 dá um resultado MAIOR:</strong> 6 / 0,5 = 12, porque 0,5 «cabe» 12 vezes em 6. Por isso, áreas pequenas em m² dão pressões e tensões grandes.</li>
        <li><strong>Dividir por uma fração é multiplicar pela fração invertida:</strong> 6 / (1/2) = 6 × 2 = 12.</li>
        <li><strong>Unidades iguais em cima e em baixo cancelam-se:</strong> em ε = ΔL/L<sub>0</sub> fica m/m, por isso a deformação não tem unidades (e pode escrever-se em %).</li>
        <li><strong>O denominador nunca pode ser zero:</strong> a divisão por zero não tem significado.</li>
      </ul>
      <div class="bases-table-wrap"><table class="bases-table">
        <thead><tr><th>Fórmula</th><th>Em cima (se aumentar, o resultado aumenta)</th><th>Em baixo (se aumentar, o resultado diminui)</th></tr></thead>
        <tbody>
          <tr><td>p = F / A</td><td>F</td><td>A</td></tr>
          <tr><td>σ = F / S</td><td>F</td><td>S</td></tr>
          <tr><td>ε = σ / E</td><td>σ</td><td>E</td></tr>
          <tr><td>D = V / t</td><td>V</td><td>t</td></tr>
          <tr><td>Re = v · ρ · d / η</td><td>v, ρ, d</td><td>η</td></tr>
          <tr><td>D = π · ΔP · R<sup>4</sup> / (8 · η · L)</td><td>ΔP, R (à 4.ª potência)</td><td>η, L</td></tr>
          <tr><td>R<sub>h</sub> = 8 · η · L / (π · R<sup>4</sup>)</td><td>η, L</td><td>R (à 4.ª potência)</td></tr>
        </tbody>
      </table></div>`,
    examples: [
      {
        title: 'Dividir por um número pequeno',
        steps: ['600 N sobre 0,02 m²: p = 600 / 0,02', '0,02 cabe 50 vezes em 1, logo 600 / 0,02 = 600 × 50', 'p = 30&nbsp;000 N/m² = 3 × 10<sup>4</sup> N/m² (maior do que 600, como esperado)']
      },
      {
        title: 'Ler a fórmula de Reynolds sem fazer contas',
        steps: ['Re = v · ρ · d / η', 'v, ρ e d estão em cima: se aumentarem, Re aumenta (mais tendência para a turbulência)', 'η está em baixo: se a viscosidade aumentar, Re diminui', 'Na anemia a viscosidade do sangue diminui, logo Re aumenta']
      },
      {
        title: 'Uma deformação sem unidades',
        steps: ['L<sub>0</sub> = 0,40 m; ΔL = 8 × 10<sup>−5</sup> m', 'ε = ΔL / L<sub>0</sub> = 8 × 10<sup>−5</sup> / 0,40 = 2 × 10<sup>−4</sup>', 'm/m cancelam-se: ε não tem unidades; em percentagem, 2 × 10<sup>−4</sup> × 100 = 0,02 %']
      }
    ],
    pitfall: 'Pensar que dividir torna sempre o número mais pequeno. Dividir por um número entre 0 e 1 aumenta o resultado: 3 / 0,1 = 30.',
    nursing: 'Para a mesma força de apoio, uma área de contacto menor (o calcanhar, em vez de toda a planta do pé) fica no denominador de p = F/A e dá uma pressão de interface maior.',
    exercises: [
      {
        q: 'Em σ = F/S, mantendo a força, a área da secção S passa para o triplo. O que acontece à tensão?',
        options: ['Fica 3 vezes maior', 'Fica igual', 'Fica 3 vezes menor', 'Fica 9 vezes menor'],
        correctIndex: 2,
        explanation: 'S está no denominador: o triplo da área dá um terço da tensão. Ficar 3 vezes maior seria o efeito de triplicar a força, que está no numerador.'
      },
      {
        q: 'Quanto é 12 / 0,4?',
        options: ['4,8', '30', '3', '0,03'],
        correctIndex: 1,
        explanation: '0,4 cabe 2,5 vezes em 1, logo 12 / 0,4 = 12 × 2,5 = 30. Como 0,4 é menor do que 1, o resultado é maior do que 12. O valor 4,8 resulta de multiplicar (12 × 0,4); 3 de ignorar a vírgula (12 / 4).'
      },
      {
        q: 'Na fórmula Re = v · ρ · d / η, qual das alterações faz DIMINUIR o número de Reynolds?',
        options: ['Aumentar a velocidade v', 'Aumentar o diâmetro d', 'Aumentar a densidade ρ', 'Aumentar a viscosidade η'],
        correctIndex: 3,
        explanation: 'η está no denominador: se aumentar, Re diminui. v, d e ρ estão no numerador: se aumentarem, Re aumenta.'
      }
    ]
  },

  // ------------------------------------------------------------------ 4
  {
    id: 'potencias',
    icon: '🔟',
    title: 'Potências de 10',
    goal: 'Perceber o que significa 10<sup>3</sup> ou 10<sup>−3</sup> e fazer contas simples com potências de 10.',
    body: `
      <ul>
        <li><strong>Expoente positivo:</strong> 10<sup>n</sup> é o número 1 seguido de n zeros. 10<sup>3</sup> = 10 × 10 × 10 = 1000.</li>
        <li><strong>Expoente zero:</strong> 10<sup>0</sup> = 1.</li>
        <li><strong>Expoente negativo:</strong> 10<sup>−n</sup> = 1/10<sup>n</sup>. É um número <em>pequeno, mas positivo</em>: 10<sup>−3</sup> = 1/1000 = 0,001.</li>
        <li><strong>Truque da vírgula:</strong> multiplicar por 10<sup>n</sup> anda com a vírgula n casas para a direita; multiplicar por 10<sup>−n</sup> anda n casas para a esquerda.</li>
      </ul>
      <div class="bases-table-wrap"><table class="bases-table">
        <thead><tr><th>Potência</th><th>Valor</th><th>Em palavras</th></tr></thead>
        <tbody>
          <tr><td>10<sup>9</sup></td><td>1&nbsp;000&nbsp;000&nbsp;000</td><td>mil milhões</td></tr>
          <tr><td>10<sup>6</sup></td><td>1&nbsp;000&nbsp;000</td><td>um milhão</td></tr>
          <tr><td>10<sup>3</sup></td><td>1000</td><td>mil</td></tr>
          <tr><td>10<sup>0</sup></td><td>1</td><td>um</td></tr>
          <tr><td>10<sup>−1</sup></td><td>0,1</td><td>um décimo</td></tr>
          <tr><td>10<sup>−3</sup></td><td>0,001</td><td>um milésimo</td></tr>
          <tr><td>10<sup>−6</sup></td><td>0,000&nbsp;001</td><td>um milionésimo</td></tr>
        </tbody>
      </table></div>
      <div class="formula-box"><div class="formula-box-title">Regras de cálculo</div>
        <div class="formula-row"><code>10<sup>a</sup> × 10<sup>b</sup> = 10<sup>a+b</sup></code><span>multiplicar: somam-se os expoentes</span></div>
        <div class="formula-row"><code>10<sup>a</sup> ÷ 10<sup>b</sup> = 10<sup>a−b</sup></code><span>dividir: subtraem-se os expoentes</span></div>
        <div class="formula-row"><code>(10<sup>a</sup>)<sup>b</sup> = 10<sup>a×b</sup></code><span>potência de potência: multiplicam-se</span></div>
      </div>
      <p>Em português de Portugal, 10<sup>9</sup> é «mil milhões» e 10<sup>12</sup> é «um bilião». Em textos brasileiros ou ingleses, «bilhão/billion» significa 10<sup>9</sup>.</p>`,
    examples: [
      {
        title: 'Multiplicar e dividir potências',
        steps: ['10<sup>3</sup> × 10<sup>4</sup> = 10<sup>3+4</sup> = 10<sup>7</sup>', '10<sup>5</sup> ÷ 10<sup>2</sup> = 10<sup>5−2</sup> = 10<sup>3</sup>', '10<sup>2</sup> × 10<sup>−5</sup> = 10<sup>2+(−5)</sup> = 10<sup>−3</sup>']
      }
    ],
    pitfall: 'Pensar que 10<sup>−3</sup> é um número negativo. Não é: 10<sup>−3</sup> = 0,001. Também é erro ler 10<sup>3</sup> como 10 × 3 = 30.',
    nursing: 'Num hemograma, os leucócitos aparecem como, por exemplo, 7 × 10<sup>9</sup>/L: há cerca de 7 mil milhões de leucócitos em cada litro de sangue.',
    exercises: [
      {
        q: 'Qual é o valor de 10<sup>−4</sup>?',
        options: ['0,0001', '−10&nbsp;000', '0,000&nbsp;01', '−0,0001'],
        correctIndex: 0,
        explanation: '10<sup>−4</sup> = 1/10<sup>4</sup> = 1/10&nbsp;000 = 0,0001 (a vírgula anda 4 casas para a esquerda). O resultado é positivo.'
      },
      {
        q: 'Quanto é 10<sup>6</sup> × 10<sup>−2</sup>?',
        options: ['10<sup>−12</sup>', '10<sup>8</sup>', '10<sup>4</sup>', '10<sup>−3</sup>'],
        correctIndex: 2,
        explanation: 'Na multiplicação somam-se os expoentes: 6 + (−2) = 4, logo 10<sup>4</sup>. O valor 10<sup>−12</sup> resulta de multiplicar os expoentes.'
      },
      {
        q: 'Quanto é 10<sup>8</sup> ÷ 10<sup>3</sup>?',
        options: ['10<sup>11</sup>', '10<sup>24</sup>', '10<sup>−5</sup>', '10<sup>5</sup>'],
        correctIndex: 3,
        explanation: 'Na divisão subtraem-se os expoentes, pela ordem certa: 8 − 3 = 5, logo 10<sup>5</sup>. Fazer 3 − 8 daria 10<sup>−5</sup>.'
      }
    ]
  },

  // ------------------------------------------------------------------ 5
  {
    id: 'quadrados',
    icon: '🟦',
    title: 'Quadrados, potências e raízes (R<sup>2</sup>, R<sup>4</sup>, √)',
    goal: 'Calcular quadrados e outras potências de qualquer número (como o R<sup>4</sup> da lei de Poiseuille) e usar a raiz quadrada.',
    body: `
      <ul>
        <li><strong>O expoente diz quantas vezes o número se multiplica por si próprio:</strong> 3<sup>2</sup> = 3 × 3 = 9; 2<sup>4</sup> = 2 × 2 × 2 × 2 = 16. Não é «3 × 2» nem «2 × 4».</li>
        <li><strong>Um número maior do que 1 cresce depressa:</strong> 2<sup>4</sup> = 16 e 3<sup>4</sup> = 81. É por isso que, na lei de Poiseuille, pequenas variações do raio mudam muito o caudal.</li>
        <li><strong>Um número entre 0 e 1 fica mais pequeno:</strong> 0,5<sup>2</sup> = 0,25 e 0,2<sup>4</sup> = 0,0016. Atenção quando o raio está em cm e é menor do que 1 cm.</li>
        <li><strong>Potência de uma fração:</strong> elevam-se o numerador e o denominador: (1/2)<sup>4</sup> = 1/16; (3/4)<sup>4</sup> = 81/256 ≈ 0,32.</li>
        <li><strong>A potência só se aplica ao número a que está colada:</strong> em 3,14 × 0,2<sup>4</sup>, só o 0,2 é elevado à 4.ª potência; (3,14 × 0,2)<sup>4</sup> é outra conta.</li>
        <li><strong>A raiz quadrada (√) desfaz o quadrado:</strong> √49 = 7, porque 7<sup>2</sup> = 49. Usa-se no teorema de Pitágoras, para somar forças perpendiculares.</li>
        <li><strong>Na calculadora:</strong> usa a tecla <code>x²</code> para quadrados e <code>^</code> (ou <code>x<sup>y</sup></code>) para as outras potências: 0,2<sup>4</sup> escreve-se <code>0.2 ^ 4</code>.</li>
      </ul>
      <div class="bases-table-wrap"><table class="bases-table">
        <thead><tr><th>Número</th><th>Quadrado (n<sup>2</sup>)</th><th>4.ª potência (n<sup>4</sup>)</th></tr></thead>
        <tbody>
          <tr><td>0,5</td><td>0,25</td><td>0,0625</td></tr>
          <tr><td>0,8</td><td>0,64</td><td>≈ 0,41</td></tr>
          <tr><td>1,2</td><td>1,44</td><td>≈ 2,07</td></tr>
          <tr><td>1,5</td><td>2,25</td><td>≈ 5,06</td></tr>
          <tr><td>2</td><td>4</td><td>16</td></tr>
          <tr><td>3</td><td>9</td><td>81</td></tr>
        </tbody>
      </table></div>`,
    examples: [
      {
        title: 'Calcular 0,2<sup>4</sup> à mão',
        steps: ['0,2 × 0,2 = 0,04', '0,04 × 0,2 = 0,008', '0,008 × 0,2 = 0,0016', 'Atalho: 2<sup>4</sup> = 16; cada fator 0,2 tem 1 casa decimal e são 4 fatores, logo 4 casas decimais → 0,0016']
      },
      {
        title: 'Raio a metade (lei de Poiseuille)',
        steps: ['O caudal é proporcional a R<sup>4</sup>', 'Raio a metade: (1/2)<sup>4</sup> = 1/16', 'O caudal fica 16 vezes menor (e não 2 vezes menor)']
      },
      {
        title: 'Raio 20 % maior',
        steps: ['Novo raio = 1,2 × R (aumentar 20 % é multiplicar por 1,2)', '1,2<sup>4</sup> = 1,2 × 1,2 × 1,2 × 1,2 ≈ 2,07', 'O caudal passa para cerca de 2,07 vezes o inicial (e não 1,2 vezes)']
      }
    ],
    pitfall: 'Confundir R<sup>2</sup> com 2 × R, ou R<sup>4</sup> com 4 × R. Com R = 3, R<sup>2</sup> = 9 (e não 6) e R<sup>4</sup> = 81 (e não 12).',
    nursing: 'Como o caudal depende de R<sup>4</sup>, um cateter de 14G, com raio interno maior do que o de um 22G, permite um caudal muitas vezes superior, mesmo que a diferença de raio pareça pequena.',
    exercises: [
      {
        q: 'Quanto é 3<sup>4</sup>?',
        options: ['81', '12', '27', '64'],
        correctIndex: 0,
        explanation: '3<sup>4</sup> = 3 × 3 × 3 × 3 = 81. 12 resulta de fazer 3 × 4; 27 é 3<sup>3</sup>; 64 é 4<sup>3</sup> (base e expoente trocados).'
      },
      {
        q: 'Quanto é 0,1<sup>4</sup>?',
        options: ['0,4', '0,001', '0,000&nbsp;4', '0,0001'],
        correctIndex: 3,
        explanation: '0,1 × 0,1 × 0,1 × 0,1 = 0,0001 (= 10<sup>−4</sup>): cada fator 0,1 acrescenta uma casa decimal. 0,4 resulta de fazer 0,1 × 4; 0,001 é 0,1<sup>3</sup>.'
      },
      {
        q: 'O raio de um vaso passa para 3/4 do valor inicial. Por quanto fica multiplicado R<sup>4</sup>?',
        options: ['0,75', '0,56', '0,32', '0,42'],
        correctIndex: 2,
        explanation: '(3/4)<sup>4</sup> = 3<sup>4</sup>/4<sup>4</sup> = 81/256 ≈ 0,32. 0,75 ignora o expoente; 0,56 é (3/4)<sup>2</sup>; 0,42 é (3/4)<sup>3</sup>.'
      }
    ]
  },

  // ------------------------------------------------------------------ 6
  {
    id: 'notacao',
    icon: '🔬',
    title: 'Notação científica',
    goal: 'Escrever números muito grandes ou muito pequenos na forma a × 10<sup>n</sup> e voltar à forma decimal.',
    body: `
      <p>Um número está em <strong>notação científica</strong> quando está escrito como</p>
      <div class="formula-box"><div class="formula-box-title">Forma geral</div>
        <div class="formula-row"><code>a × 10<sup>n</sup></code><span>com 1 ≤ a &lt; 10 e n número inteiro</span></div>
      </div>
      <p><strong>Como escrever um número em notação científica (3 passos):</strong></p>
      <ol>
        <li>Desloca a vírgula até ficar <strong>exatamente um algarismo antes dela, diferente de zero</strong> (o número resultante é o a, entre 1 e 10).</li>
        <li>Conta quantas casas a vírgula andou: esse é o valor de n (sem sinal).</li>
        <li>Se o número é <strong>maior ou igual a 10</strong> (a vírgula andou para a esquerda), n é <strong>positivo</strong>; se é <strong>menor do que 1</strong> (a vírgula andou para a direita), n é <strong>negativo</strong>; se já está entre 1 e 10, n = 0.</li>
      </ol>
      <p><strong>Para voltar à forma decimal</strong> faz o caminho inverso: n positivo, a vírgula anda n casas para a direita; n negativo, anda n casas para a esquerda (acrescentando zeros se for preciso).</p>`,
    examples: [
      {
        title: 'Um número grande: 340&nbsp;000',
        steps: ['A vírgula passa de 340&nbsp;000 para 3,40000: andou 5 casas para a esquerda', 'O número era grande, logo n = +5', '340&nbsp;000 = 3,4 × 10<sup>5</sup>']
      },
      {
        title: 'Um número pequeno: 0,000&nbsp;72',
        steps: ['A vírgula passa de 0,00072 para 7,2: andou 4 casas para a direita', 'O número era menor do que 1, logo n = −4', '0,000&nbsp;72 = 7,2 × 10<sup>−4</sup>']
      },
      {
        title: 'Voltar à forma decimal',
        steps: ['2,5 × 10<sup>3</sup>: a vírgula anda 3 casas para a direita → 2500', '6,0 × 10<sup>−2</sup>: a vírgula anda 2 casas para a esquerda → 0,06']
      }
    ],
    pitfall: 'Deixar o a fora do intervalo de 1 a 10. Por exemplo, 34 × 10<sup>4</sup> tem o valor certo, mas não está em notação científica: escreve-se 3,4 × 10<sup>5</sup>. Do mesmo modo, 0,5 × 10<sup>3</sup> escreve-se 5 × 10<sup>2</sup>.',
    nursing: 'Um eritrócito tem cerca de 7,5 × 10<sup>−6</sup> m de diâmetro e há cerca de 5 × 10<sup>12</sup> eritrócitos por litro de sangue: sem notação científica, estes números seriam difíceis de ler e de comparar.',
    exercises: [
      {
        q: 'Como se escreve 0,0035 m em notação científica?',
        options: ['3,5 × 10<sup>−3</sup> m', '3,5 × 10<sup>3</sup> m', '35 × 10<sup>−4</sup> m', '3,5 × 10<sup>−2</sup> m'],
        correctIndex: 0,
        explanation: 'A vírgula anda 3 casas para a direita (0,0035 → 3,5) e o número é menor do que 1, logo n = −3. A forma 35 × 10<sup>−4</sup> tem o mesmo valor, mas 35 não está entre 1 e 10.'
      },
      {
        q: 'Qual é o valor de 4,2 × 10<sup>4</sup> na forma decimal?',
        options: ['420', '42&nbsp;000', '4200', '0,000&nbsp;42'],
        correctIndex: 1,
        explanation: 'Com n = 4, a vírgula anda 4 casas para a direita: 4,2 → 42&nbsp;000.'
      },
      {
        q: 'Um vírus tem cerca de 0,000&nbsp;000&nbsp;1 m de diâmetro. Em notação científica, isto é:',
        options: ['1 × 10<sup>7</sup> m', '1 × 10<sup>−6</sup> m', '1 × 10<sup>−8</sup> m', '1 × 10<sup>−7</sup> m'],
        correctIndex: 3,
        explanation: 'O 1 está na 7.ª casa decimal: a vírgula anda 7 casas para a direita e o número é pequeno, logo 1 × 10<sup>−7</sup> m.'
      }
    ]
  },

  // ------------------------------------------------------------------ 7
  {
    id: 'calculos-nc',
    icon: '🧮',
    title: 'Contas com notação científica (e a calculadora)',
    goal: 'Multiplicar, dividir, somar e subtrair números em notação científica, à mão e na calculadora.',
    body: `
      <ul>
        <li><strong>Multiplicar:</strong> multiplicam-se os números da frente e <strong>somam-se</strong> os expoentes.</li>
        <li><strong>Dividir:</strong> dividem-se os números da frente e <strong>subtraem-se</strong> os expoentes.</li>
        <li><strong>Somar ou subtrair:</strong> primeiro põem-se os dois números com o <strong>mesmo expoente</strong>; só depois se somam os números da frente.</li>
        <li><strong>No fim, confirma:</strong> se o número da frente ficou igual ou maior do que 10 (ou menor do que 1), acerta-o e corrige o expoente.</li>
      </ul>
      <p><strong>Na calculadora</strong> usa a tecla <code>EXP</code>, <code>EE</code> ou <code>×10<sup>x</sup></code>, que já significa «vezes 10 elevado a». Para 3,2 × 10<sup>−4</sup> carrega: <code>3.2</code> <code>EXP</code> <code>(−)</code> <code>4</code>. Não escrevas «× 10» antes da tecla EXP: obterias um valor 10 vezes maior.</p>`,
    examples: [
      {
        title: 'Multiplicar',
        steps: ['(3 × 10<sup>4</sup>) × (2 × 10<sup>3</sup>)', '= (3 × 2) × 10<sup>4+3</sup>', '= 6 × 10<sup>7</sup>']
      },
      {
        title: 'Multiplicar e acertar o resultado',
        steps: ['(5 × 10<sup>3</sup>) × (4 × 10<sup>2</sup>) = 20 × 10<sup>5</sup>', '20 = 2,0 × 10<sup>1</sup>, logo 20 × 10<sup>5</sup> = 2,0 × 10<sup>6</sup>']
      },
      {
        title: 'Somar',
        steps: ['3 × 10<sup>4</sup> + 5 × 10<sup>3</sup>', '5 × 10<sup>3</sup> = 0,5 × 10<sup>4</sup>', '3 × 10<sup>4</sup> + 0,5 × 10<sup>4</sup> = 3,5 × 10<sup>4</sup>']
      },
      {
        title: 'Uma pressão (p = F/A)',
        steps: ['Dados: F = 600 N; A = 2 × 10<sup>−2</sup> m²', 'p = 600 / (2 × 10<sup>−2</sup>) = 300 × 10<sup>2</sup> N/m²', 'Resultado: p = 3 × 10<sup>4</sup> N/m²']
      }
    ],
    pitfall: 'Somar os números da frente quando se multiplica (3 × 10<sup>4</sup> vezes 2 × 10<sup>3</sup> não dá 5 × 10<sup>7</sup>) ou multiplicar os expoentes em vez de os somar.',
    nursing: 'O mesmo cálculo de p = F/A permite estimar a pressão de interface sobre o sacro de um utente acamado e perceber porque é que aumentar a área de apoio a reduz.',
    exercises: [
      {
        q: 'Quanto é (2 × 10<sup>3</sup>) × (4 × 10<sup>5</sup>)?',
        options: ['8 × 10<sup>15</sup>', '6 × 10<sup>8</sup>', '8 × 10<sup>8</sup>', '8 × 10<sup>2</sup>'],
        correctIndex: 2,
        explanation: '2 × 4 = 8 e 3 + 5 = 8, logo 8 × 10<sup>8</sup>. O 6 vem de somar 2 + 4; o 10<sup>15</sup> vem de multiplicar os expoentes.'
      },
      {
        q: 'Quanto é (9 × 10<sup>6</sup>) ÷ (3 × 10<sup>2</sup>)?',
        options: ['3 × 10<sup>4</sup>', '3 × 10<sup>3</sup>', '6 × 10<sup>4</sup>', '3 × 10<sup>8</sup>'],
        correctIndex: 0,
        explanation: '9 ÷ 3 = 3 e 6 − 2 = 4, logo 3 × 10<sup>4</sup>. Dividir os expoentes daria 10<sup>3</sup>; somá-los daria 10<sup>8</sup>.'
      },
      {
        q: 'Qual é o resultado de (5 × 10<sup>4</sup>) × (6 × 10<sup>3</sup>), escrito em notação científica?',
        options: ['30 × 10<sup>7</sup>', '3,0 × 10<sup>8</sup>', '3,0 × 10<sup>6</sup>', '1,1 × 10<sup>8</sup>'],
        correctIndex: 1,
        explanation: '5 × 6 = 30 e 4 + 3 = 7, dando 30 × 10<sup>7</sup>. Como 30 = 3,0 × 10<sup>1</sup>, o resultado é 3,0 × 10<sup>8</sup>. A forma 30 × 10<sup>7</sup> tem o mesmo valor, mas não está em notação científica.'
      }
    ]
  },

  // ------------------------------------------------------------------ 8
  {
    id: 'arredondar',
    icon: '🎯',
    title: 'Arredondar e verificar se o resultado faz sentido',
    goal: 'Arredondar corretamente e usar uma estimativa rápida para apanhar erros de cálculo.',
    body: `
      <ul>
        <li><strong>Regra de arredondamento:</strong> olha para o algarismo <em>logo a seguir</em> à última casa que queres manter. Se for 5 ou mais, a última casa sobe uma unidade; se for menos de 5, fica igual.</li>
        <li><strong>Arredonda só no fim.</strong> Guarda os valores intermédios completos (ou na memória da calculadora) e arredonda apenas o resultado final.</li>
        <li><strong>Arredonda uma só vez.</strong> 3,846 às décimas é 3,8 (o algarismo seguinte é 4). Arredondar primeiro para 3,85 e depois para 3,9 está errado.</li>
        <li><strong>Estima antes de confiar:</strong> arredonda os dados para números fáceis e faz a conta de cabeça. Se o resultado da calculadora estiver muito longe da estimativa, há um erro.</li>
      </ul>`,
    examples: [
      {
        title: 'Arredondar às décimas',
        steps: ['20 / 1,2 = 16,666…', 'O algarismo a seguir às décimas é 6 (≥ 5), logo as décimas sobem', 'Resultado: 16,7 (e não 16,6)']
      },
      {
        title: 'Estimar o peso de um adulto de 70 kg',
        steps: ['Estimativa: 70 × 10 = 700 N', 'Cálculo: P = 70 × 9,8 = 686 N', 'Os dois valores estão próximos: o resultado é plausível']
      }
    ],
    pitfall: 'Cortar os algarismos em vez de arredondar (16,666… escrito como 16,6) ou arredondar várias vezes seguidas ao longo do cálculo.',
    nursing: 'No cálculo de doses, uma estimativa prévia funciona como verificação de segurança: se a conta indicar, por exemplo, 30 comprimidos para uma única toma, há quase de certeza um erro de unidades ou de vírgula.',
    exercises: [
      {
        q: 'Qual é o valor de 3,846 arredondado às décimas?',
        options: ['3,9', '3,85', '3,8', '4,0'],
        correctIndex: 2,
        explanation: 'O algarismo a seguir às décimas é 4 (menor do que 5), logo fica 3,8. O valor 3,9 resulta de arredondar duas vezes (3,846 → 3,85 → 3,9).'
      },
      {
        q: 'Quanto é 45 / 3,5, arredondado às décimas?',
        options: ['12,8', '12,9', '13,0', '12,86'],
        correctIndex: 1,
        explanation: '45 / 3,5 = 12,857… O algarismo a seguir às décimas é 5, logo as décimas sobem: 12,9. O valor 12,8 resulta de cortar em vez de arredondar.'
      },
      {
        q: 'Qual destes valores é plausível para o peso de um adulto com 80 kg de massa (g = 9,8 m/s²)?',
        options: ['78,4 N', '80 N', '7840 N', '784 N'],
        correctIndex: 3,
        explanation: 'P = m · g = 80 × 9,8 = 784 N (estimativa: 80 × 10 = 800 N). O valor 80 N confunde massa com peso; 78,4 N e 7840 N têm a vírgula no sítio errado.'
      }
    ]
  },

  // ------------------------------------------------------------------ 9
  {
    id: 'si',
    icon: '📏',
    title: 'Grandezas físicas e unidades do SI',
    goal: 'Saber o que é uma grandeza física, conhecer as unidades do Sistema Internacional (SI) e escrevê-las corretamente.',
    body: `
      <ul>
        <li><strong>Grandeza física</strong> é tudo o que se pode medir: comprimento, massa, tempo, força… Um valor só tem significado com a sua <strong>unidade</strong>: «70» não diz nada; «70 kg» diz.</li>
        <li><strong>Sistema Internacional (SI):</strong> conjunto de unidades usado em ciência em todo o mundo. Há 7 unidades de base; todas as outras derivam delas.</li>
      </ul>
      <div class="bases-table-wrap"><table class="bases-table">
        <thead><tr><th>Grandeza de base</th><th>Unidade</th><th>Símbolo</th></tr></thead>
        <tbody>
          <tr><td>comprimento</td><td>metro</td><td>m</td></tr>
          <tr><td>massa</td><td>quilograma</td><td>kg</td></tr>
          <tr><td>tempo</td><td>segundo</td><td>s</td></tr>
          <tr><td>temperatura</td><td>kelvin</td><td>K</td></tr>
          <tr><td>quantidade de matéria</td><td>mole</td><td>mol</td></tr>
          <tr><td>intensidade de corrente elétrica</td><td>ampere</td><td>A</td></tr>
          <tr><td>intensidade luminosa</td><td>candela</td><td>cd</td></tr>
        </tbody>
      </table></div>
      <div class="bases-table-wrap"><table class="bases-table">
        <thead><tr><th>Grandeza derivada (exemplos)</th><th>Unidade SI</th></tr></thead>
        <tbody>
          <tr><td>área</td><td>m²</td></tr>
          <tr><td>volume</td><td>m³</td></tr>
          <tr><td>velocidade</td><td>m/s</td></tr>
          <tr><td>aceleração</td><td>m/s²</td></tr>
          <tr><td>força (e peso)</td><td>newton, N (1 N = 1 kg · m/s²)</td></tr>
          <tr><td>momento de uma força</td><td>N · m</td></tr>
          <tr><td>pressão e tensão</td><td>N/m²</td></tr>
          <tr><td>massa volúmica</td><td>kg/m³</td></tr>
        </tbody>
      </table></div>
      <ul>
        <li><strong>Massa ≠ peso.</strong> A massa mede-se em kg e é igual em qualquer lugar. O peso é uma força (a atração da Terra), mede-se em N e calcula-se com P = m · g, com g = 9,8 m/s².</li>
        <li><strong>Regras de escrita:</strong> deixa um espaço entre o número e a unidade (70 kg); os símbolos não têm plural nem ponto final (5 kg, e não «5 kgs» ou «5 kg.»); maiúsculas e minúsculas contam (kg e não Kg; N e não n).</li>
      </ul>`,
    examples: [
      {
        title: '«A Maria pesa 60 kg»',
        steps: ['Na linguagem do dia a dia, «60 kg» é a <strong>massa</strong>: m = 60 kg', 'O peso é uma força: P = m · g = 60 × 9,8', 'P = 588 N']
      }
    ],
    pitfall: 'Escrever forças em kg ou em «quilos». Diz-se «uma carga de 15 kg», cujo peso é 15 × 9,8 = 147 N.',
    nursing: 'As doses prescritas em mg/kg (por exemplo, 15 mg/kg de paracetamol) referem-se à massa corporal do utente em kg, e não ao seu peso em newtons.',
    exercises: [
      {
        q: 'Qual é a unidade SI de força?',
        options: ['N/m²', 'kg', 'J', 'N'],
        correctIndex: 3,
        explanation: 'A força mede-se em newtons (N). O kg é unidade de massa, o N/m² de pressão e o joule (J) de energia.'
      },
      {
        q: 'Qual destas formas de escrever está correta?',
        options: ['70 kg', '70 Kg', '70 kgs', '70 kg.'],
        correctIndex: 0,
        explanation: 'O símbolo do quilograma é kg (k minúsculo), sem plural e sem ponto final, separado do número por um espaço.'
      },
      {
        q: 'Um utente tem 50 kg de massa. Qual é o seu peso, em unidades SI (g = 9,8 m/s²)?',
        options: ['50 N', '5,1 N', '490 kg', '490 N'],
        correctIndex: 3,
        explanation: 'P = m · g = 50 × 9,8 = 490 N. O peso é uma força, por isso exprime-se em N e não em kg. O valor 5,1 resulta de dividir por g em vez de multiplicar.'
      }
    ]
  },

  // ------------------------------------------------------------------ 10
  {
    id: 'prefixos',
    icon: '🔠',
    title: 'Prefixos do SI (quilo, mili, micro…)',
    goal: 'Ler mg, µg, km ou dL e trocar um prefixo pela potência de 10 correspondente.',
    body: `
      <p>Um <strong>prefixo</strong> colado a uma unidade é só uma forma abreviada de escrever uma potência de 10: «mili» quer dizer 10<sup>−3</sup>, por isso 5 mg = 5 × 10<sup>−3</sup> g.</p>
      <div class="bases-table-wrap"><table class="bases-table">
        <thead><tr><th>Prefixo</th><th>Símbolo</th><th>Fator</th><th>Exemplo</th></tr></thead>
        <tbody>
          <tr><td>giga</td><td>G</td><td>10<sup>9</sup></td><td>1 GB = 10<sup>9</sup> bytes</td></tr>
          <tr><td>mega</td><td>M</td><td>10<sup>6</sup></td><td>1 MN = 10<sup>6</sup> N</td></tr>
          <tr><td>quilo</td><td>k</td><td>10<sup>3</sup></td><td>1 kg = 1000 g</td></tr>
          <tr><td>deci</td><td>d</td><td>10<sup>−1</sup></td><td>1 dL = 0,1 L</td></tr>
          <tr><td>centi</td><td>c</td><td>10<sup>−2</sup></td><td>1 cm = 0,01 m</td></tr>
          <tr><td>mili</td><td>m</td><td>10<sup>−3</sup></td><td>1 mL = 0,001 L</td></tr>
          <tr><td>micro</td><td>µ</td><td>10<sup>−6</sup></td><td>1 µm = 0,000&nbsp;001 m</td></tr>
          <tr><td>nano</td><td>n</td><td>10<sup>−9</sup></td><td>1 nm = 10<sup>−9</sup> m</td></tr>
        </tbody>
      </table></div>
      <ul>
        <li><strong>Maiúsculas contam:</strong> m (mili, 10<sup>−3</sup>) e M (mega, 10<sup>6</sup>) diferem num fator de mil milhões.</li>
        <li><strong>Cada degrau mili → micro → nano</strong> é um fator de 1000: 1 mg = 1000 µg; 1 µg = 1000 ng.</li>
        <li><strong>O kg é especial:</strong> é a unidade de base do SI, mas já tem prefixo. Para passar de g a kg divide-se por 1000.</li>
      </ul>`,
    examples: [
      {
        title: 'Trocar o prefixo pela potência de 10',
        steps: ['250 mg = 250 × 10<sup>−3</sup> g = 0,25 g', '2 µm = 2 × 10<sup>−6</sup> m', '1,5 kN = 1,5 × 10<sup>3</sup> N = 1500 N']
      },
      {
        title: 'De mg para µg',
        steps: ['1 mg = 1000 µg', '0,4 mg = 0,4 × 1000 µg = 400 µg']
      }
    ],
    pitfall: 'Confundir mg com µg: a diferença é de 1000 vezes. Um erro destes numa prescrição é um erro de dose de 1000×.',
    nursing: 'Nas prescrições recomenda-se escrever «microgramas» por extenso (ou «mcg») e não «µg», que, manuscrito, se confunde facilmente com «mg»; a hemoglobina aparece nas análises em g/dL.',
    exercises: [
      {
        q: 'Quanto são 500 mg, em gramas?',
        options: ['0,5 g', '5 g', '0,05 g', '500&nbsp;000 g'],
        correctIndex: 0,
        explanation: '500 mg = 500 × 10<sup>−3</sup> g = 0,5 g. O valor 500&nbsp;000 g resulta de multiplicar por 1000 em vez de dividir.'
      },
      {
        q: 'A quantos gramas corresponde 1 µg?',
        options: ['10<sup>−3</sup> g', '10<sup>−9</sup> g', '10<sup>6</sup> g', '10<sup>−6</sup> g'],
        correctIndex: 3,
        explanation: 'O prefixo micro (µ) vale 10<sup>−6</sup>, logo 1 µg = 10<sup>−6</sup> g. 10<sup>−3</sup> é mili e 10<sup>−9</sup> é nano.'
      },
      {
        q: 'Uma prescrição indica 0,25 mg. Quantos µg são?',
        options: ['2,5 µg', '25 µg', '250 µg', '0,000&nbsp;25 µg'],
        correctIndex: 2,
        explanation: '1 mg = 1000 µg, logo 0,25 mg = 0,25 × 1000 = 250 µg. O valor 0,000&nbsp;25 resulta de dividir por 1000 em vez de multiplicar.'
      }
    ]
  },

  // ------------------------------------------------------------------ 11
  {
    id: 'conversoes',
    icon: '🔁',
    title: 'Converter unidades',
    goal: 'Converter comprimentos, áreas, volumes e tempos sem perder fatores pelo caminho.',
    body: `
      <ul>
        <li><strong>Ideia-chave:</strong> converter é multiplicar por uma fração que vale 1, como (1 m / 100 cm). O valor físico não muda; muda só a forma de o escrever.</li>
        <li><strong>Regra de bolso:</strong> de uma unidade <em>maior</em> para uma <em>menor</em>, o número aumenta (multiplica-se); de uma menor para uma maior, o número diminui (divide-se).</li>
        <li><strong>Áreas e volumes são armadilhas:</strong> como 1 m = 100 cm, então 1 m² = 100 × 100 cm² = 10<sup>4</sup> cm² e 1 m³ = 100 × 100 × 100 cm³ = 10<sup>6</sup> cm³.</li>
      </ul>
      <div class="bases-table-wrap"><table class="bases-table">
        <thead><tr><th>Grandeza</th><th>Equivalências úteis</th></tr></thead>
        <tbody>
          <tr><td>comprimento</td><td>1 m = 100 cm = 1000 mm</td></tr>
          <tr><td>área</td><td>1 m² = 10<sup>4</sup> cm²; 1 cm² = 10<sup>−4</sup> m²</td></tr>
          <tr><td>volume</td><td>1 L = 1000 mL = 1000 cm³; 1 mL = 1 cm³; 1 m³ = 1000 L</td></tr>
          <tr><td>tempo</td><td>1 h = 60 min = 3600 s</td></tr>
          <tr><td>velocidade</td><td>1 m/s = 3,6 km/h (de km/h para m/s divide-se por 3,6)</td></tr>
          <tr><td>massa volúmica</td><td>1 g/cm³ = 1000 kg/m³</td></tr>
          <tr><td>força (c.g.s.)</td><td>1 N = 10<sup>5</sup> dyn</td></tr>
          <tr><td>pressão</td><td>1 N/m² = 10 dyn/cm²; 1 mmHg ≈ 133 N/m²</td></tr>
          <tr><td>viscosidade</td><td>1 poiseuille = 10 poise</td></tr>
        </tbody>
      </table></div>
      <p>No Tópico 3 (Hidrodinâmica) usam-se sobretudo unidades c.g.s. (centímetro, grama, segundo):</p>
      <ul>
        <li><strong>Número de Reynolds:</strong> v em cm/s, ρ em g/cm³, d em cm e η em poise. Assim, Re não tem unidades.</li>
        <li><strong>Lei de Poiseuille:</strong> com R e L em cm, o caudal sai em cm³/s, desde que ΔP e η venham do mesmo sistema: dyn/cm² com poise, ou N/m² com poiseuille (como no exercício da aula).</li>
        <li><strong>Diâmetro ou raio:</strong> Reynolds usa o diâmetro d; Poiseuille usa o raio R = d/2.</li>
      </ul>
      <p>Converte <strong>todos</strong> os dados antes de os pôr na fórmula.</p>`,
    examples: [
      {
        title: 'Uma área: 150 cm² em m²',
        steps: ['1 cm² = 10<sup>−4</sup> m²', '150 cm² = 150 × 10<sup>−4</sup> m²', '= 1,5 × 10<sup>−2</sup> m² (= 0,015 m²)']
      },
      {
        title: 'Um caudal (débito de perfusão): 500 mL em 4 h',
        steps: ['Em mL/h: 500 / 4 = 125 mL/h', 'Em cm³/s: 4 h = 4 × 3600 s = 14&nbsp;400 s', '500 cm³ / 14&nbsp;400 s ≈ 3,5 × 10<sup>−2</sup> cm³/s']
      },
      {
        title: 'Uma pressão arterial: 120 mmHg em N/m²',
        steps: ['1 mmHg ≈ 133 N/m²', '120 × 133 = 15&nbsp;960 N/m²', '≈ 1,6 × 10<sup>4</sup> N/m²']
      },
      {
        title: 'Uma velocidade: 72 km/h em m/s',
        steps: ['72 km/h = 72&nbsp;000 m em 3600 s', '72&nbsp;000 / 3600 = 20 m/s', 'Atalho: 72 / 3,6 = 20 m/s']
      },
      {
        title: 'Um diâmetro para a fórmula de Reynolds: 1,2 mm em cm',
        steps: ['1 cm = 10 mm: de mm (menor) para cm (maior) divide-se por 10', '1,2 mm = 1,2 / 10 = 0,12 cm', 'O raio correspondente, para a lei de Poiseuille, é R = 0,12 / 2 = 0,06 cm']
      }
    ],
    pitfall: 'Converter áreas com o fator do comprimento: 20 cm² não são 0,2 m² (isso seria dividir só por 100). São 20 × 10<sup>−4</sup> = 2 × 10<sup>−3</sup> m².',
    nursing: 'Programar uma bomba perfusora exige converter o volume prescrito e o tempo de perfusão para mL/h; um erro de conversão de horas para minutos altera o débito 60 vezes.',
    exercises: [
      {
        q: 'Quanto são 2,5 m, em centímetros?',
        options: ['0,025 cm', '25 cm', '250 cm', '2500 cm'],
        correctIndex: 2,
        explanation: 'De metros (unidade maior) para centímetros (menor) multiplica-se por 100: 2,5 × 100 = 250 cm. 2500 cm seria multiplicar por 1000 (o fator dos milímetros).'
      },
      {
        q: 'Uma área de contacto de 20 cm² corresponde a:',
        options: ['0,2 m²', '2 × 10<sup>−3</sup> m²', '2 × 10<sup>−5</sup> m²', '2 × 10<sup>3</sup> m²'],
        correctIndex: 1,
        explanation: '1 cm² = 10<sup>−4</sup> m², logo 20 cm² = 20 × 10<sup>−4</sup> = 2 × 10<sup>−3</sup> m². 0,2 m² resulta de dividir só por 100; 2 × 10<sup>−5</sup> m² de usar o fator dos volumes (10<sup>6</sup>).'
      },
      {
        q: 'Prescreve-se 1 L de soro a perfundir em 8 h. Qual é o débito, em mL/h?',
        options: ['125 mL/h', '8 mL/h', '12,5 mL/h', '0,125 mL/h'],
        correctIndex: 0,
        explanation: '1 L = 1000 mL; 1000 mL / 8 h = 125 mL/h. O valor 0,125 está em L/h e não em mL/h; 12,5 resulta de usar 1 L = 100 mL; 8 resulta de dividir o tempo pelo volume.'
      }
    ]
  },

  // ------------------------------------------------------------------ 12
  {
    id: 'variacoes',
    icon: '📈',
    title: 'Variações (Δ): valor final menos valor inicial',
    goal: 'Ler o símbolo Δ e calcular variações como ΔL, Δv ou ΔP, incluindo a variação relativa em percentagem.',
    body: `
      <ul>
        <li><strong>Δ (letra grega «delta») significa «variação»:</strong> a variação de uma grandeza é o valor final menos o valor inicial.</li>
        <li><strong>Exemplos do curso:</strong> alongamento ΔL = L<sub>f</sub> − L<sub>0</sub> (Tópico 2); variação de velocidade Δv, usada em a = Δv / Δt (Tópico 1); diferença de pressão ΔP entre os extremos de um tubo (Tópico 3).</li>
        <li><strong>O sinal tem significado:</strong> positivo, a grandeza aumentou (alongamento, aceleração); negativo, diminuiu (compressão, travagem). Quando se pede só a intensidade (o «módulo»), usa-se o valor sem sinal.</li>
        <li><strong>Variação relativa:</strong> compara a variação com o valor inicial, como em ε = ΔL / L<sub>0</sub>. As unidades cancelam-se, por isso pode escrever-se em percentagem (× 100).</li>
        <li><strong>Mesma unidade antes de subtrair:</strong> só se subtraem valores na mesma unidade (25 cm − 20 cm, e não 0,25 m − 20 cm).</li>
      </ul>
      <div class="formula-box"><div class="formula-box-title">Três fórmulas para reter</div>
        <div class="formula-row"><code>ΔX = X<sub>final</sub> − X<sub>inicial</sub></code><span>variação</span></div>
        <div class="formula-row"><code>ΔX / X<sub>inicial</sub></code><span>variação relativa (sem unidades)</span></div>
        <div class="formula-row"><code>(ΔX / X<sub>inicial</sub>) × 100</code><span>variação em percentagem</span></div>
      </div>`,
    examples: [
      {
        title: 'Alongamento de uma mola',
        steps: ['L<sub>0</sub> = 20 cm; L<sub>f</sub> = 25 cm', 'x = ΔL = 25 − 20 = 5 cm = 0,05 m', 'Com k = 200 N/m: F = k · x = 200 × 0,05 = 10 N']
      },
      {
        title: 'Deformação em percentagem',
        steps: ['L<sub>0</sub> = 40 cm; L<sub>f</sub> = 40,2 cm', 'ΔL = 40,2 − 40 = 0,2 cm', 'ε = 0,2 / 40 = 0,005; em percentagem, 0,005 × 100 = 0,5 %']
      },
      {
        title: 'Uma travagem (Δv negativo)',
        steps: ['Uma maca passa de 2 m/s para 0 m/s em 4 s', 'Δv = 0 − 2 = −2 m/s; Δt = 4 s', 'a = Δv / Δt = −2 / 4 = −0,5 m/s² (o sinal menos indica que a velocidade diminui)']
      }
    ],
    pitfall: 'Fazer valor inicial − valor final (troca o sinal) ou dividir pelo valor final em vez do inicial: em ε = ΔL / L<sub>0</sub> divide-se pelo comprimento inicial.',
    nursing: 'Na vigilância nutricional, a variação percentual da massa corporal (de 70 kg para 66,5 kg: −3,5 / 70 × 100 = −5 %) é mais informativa do que a diferença em kg.',
    exercises: [
      {
        q: 'Um tendão com 10 cm de comprimento inicial fica com 10,3 cm sob tração. Qual é a deformação relativa, em percentagem?',
        options: ['3 %', '0,3 %', '30 %', '0,03 %'],
        correctIndex: 0,
        explanation: 'ΔL = 10,3 − 10 = 0,3 cm; ε = 0,3 / 10 = 0,03; em percentagem, 0,03 × 100 = 3 %. 0,03 % esquece a multiplicação por 100; 0,3 % confunde o alongamento (0,3 cm) com a percentagem; 30 % multiplica por 1000.'
      },
      {
        q: 'Uma mola passa de 30 cm para 24 cm quando é comprimida. Qual é ΔL?',
        options: ['+6 cm', '−6 cm', '54 cm', '−24 cm'],
        correctIndex: 1,
        explanation: 'ΔL = L<sub>f</sub> − L<sub>0</sub> = 24 − 30 = −6 cm. O sinal menos indica que o comprimento diminuiu (compressão). +6 cm resulta de fazer inicial − final; 54 cm de somar.'
      },
      {
        q: 'Num tubo, a pressão é de 1200 N/m² numa extremidade e de 900 N/m² na outra. Qual é a diferença de pressão ΔP entre os extremos, em módulo?',
        options: ['2100 N/m²', '1,33 N/m²', '300 N/m²', '900 N/m²'],
        correctIndex: 2,
        explanation: 'ΔP = 1200 − 900 = 300 N/m². 2100 N/m² resulta de somar as pressões; 1,33 de dividir uma pela outra.'
      }
    ]
  },

  // ------------------------------------------------------------------ 13
  {
    id: 'proporcoes',
    icon: '⚖️',
    title: 'Proporções e regra de três simples',
    goal: 'Reconhecer relações diretas e inversas e resolver problemas com a regra de três simples.',
    body: `
      <ul>
        <li><strong>Diretamente proporcional:</strong> quando uma grandeza duplica, a outra também duplica. Exemplo: P = m · g (o dobro da massa tem o dobro do peso).</li>
        <li><strong>Inversamente proporcional:</strong> quando uma grandeza duplica, a outra passa para metade. Exemplo: em p = F/A, com a mesma força, o dobro da área dá metade da pressão.</li>
        <li><strong>Proporcional a uma potência:</strong> na lei de Poiseuille, mantendo ΔP, η e o comprimento, o caudal D é proporcional a R<sup>4</sup>. Se o raio passar para metade, D fica multiplicado por (1/2)<sup>4</sup> = 1/16.</li>
      </ul>
      <div class="formula-box"><div class="formula-box-title">Regra de três simples (relação direta)</div>
        <div class="formula-row"><code>a → b</code><span>valor conhecido</span></div>
        <div class="formula-row"><code>c → x</code><span>valor procurado</span></div>
        <div class="formula-row"><code>x = (b × c) / a</code><span>multiplica em cruz e divide</span></div>
      </div>
      <p>Antes de aplicar a regra de três, pergunta-te: «se uma aumenta, a outra aumenta ou diminui?». A regra de três direta só serve quando as duas são diretamente proporcionais (o dobro de uma dá o dobro da outra).</p>`,
    examples: [
      {
        title: 'Volume de medicamento a administrar',
        steps: ['A solução tem 250 mg em 5 mL; estão prescritos 400 mg', '250 mg → 5 mL; 400 mg → x', 'x = (400 × 5) / 250 = 8 mL']
      },
      {
        title: 'Mesma força, mais área',
        steps: ['600 N sobre 0,02 m²: p = 600 / 0,02 = 3 × 10<sup>4</sup> N/m²', 'A área triplica para 0,06 m²: p = 600 / 0,06 = 1 × 10<sup>4</sup> N/m²', 'A pressão passou para um terço (relação inversa)']
      }
    ],
    pitfall: 'Aplicar a regra de três direta a uma relação inversa (por exemplo, concluir que mais área dá mais pressão).',
    nursing: 'As superfícies de redistribuição de pressão aumentam a área de contacto com o corpo, o que reduz a pressão de interface sobre o sacro para o mesmo peso.',
    exercises: [
      {
        q: 'Um xarope tem 120 mg de fármaco em 5 mL. Que volume corresponde a uma dose de 300 mg?',
        options: ['2,5 mL', '2 mL', '125 mL', '12,5 mL'],
        correctIndex: 3,
        explanation: '120 mg → 5 mL; 300 mg → x. x = (300 × 5) / 120 = 12,5 mL. 2 mL resulta de inverter a proporção (120 × 5 / 300); 2,5 mL de esquecer o volume (300 / 120).'
      },
      {
        q: 'Mantendo a mesma força, a área de contacto duplica. O que acontece à pressão?',
        options: ['Duplica', 'Fica igual', 'Passa para metade', 'Passa para um quarto'],
        correctIndex: 2,
        explanation: 'Em p = F/A a pressão é inversamente proporcional à área: o dobro da área dá metade da pressão.'
      },
      {
        q: 'Pela lei de Poiseuille (D ∝ R<sup>4</sup>), se o raio de um cateter passar para metade, mantendo-se o resto igual, o caudal passa a ser:',
        options: ['1/2 do valor inicial', '1/16 do valor inicial', '1/4 do valor inicial', '1/8 do valor inicial'],
        correctIndex: 1,
        explanation: '(1/2)<sup>4</sup> = 1/2 × 1/2 × 1/2 × 1/2 = 1/16. 1/2 ignora o expoente; 1/4 usa R<sup>2</sup> e 1/8 usa R<sup>3</sup>.'
      }
    ]
  },

  // ------------------------------------------------------------------ 14
  {
    id: 'formulas',
    icon: '✏️',
    title: 'Fórmulas: substituir e isolar a incógnita',
    goal: 'Seguir uma rotina fixa para resolver qualquer exercício numérico e isolar a grandeza que se procura.',
    body: `
      <p><strong>Rotina para qualquer exercício numérico:</strong></p>
      <ol>
        <li><strong>Dados:</strong> escreve cada valor com a sua unidade e marca a incógnita com «?».</li>
        <li><strong>Conversão:</strong> põe todos os dados em unidades coerentes (SI, ou c.g.s. no Tópico 3).</li>
        <li><strong>Fórmula:</strong> escreve a fórmula que liga os dados à incógnita.</li>
        <li><strong>Isolar:</strong> deixa a incógnita sozinha de um dos lados.</li>
        <li><strong>Substituição e resultado:</strong> substitui os valores, calcula e escreve a unidade.</li>
      </ol>
      <p><strong>Como isolar:</strong> o que está a <em>multiplicar</em> passa para o outro lado a <em>dividir</em>, e vice-versa; o que está a <em>somar</em> passa a <em>subtrair</em>.</p>
      <p><strong>Se a incógnita está no denominador</strong> (como t em D = V / t), multiplica ambos os lados por t (D · t = V) e depois divide por D: t = V / D.</p>
      <div class="formula-box"><div class="formula-box-title">Exemplos de fórmulas isoladas</div>
        <div class="formula-row"><code>P = m · g</code><span>m = P / g&nbsp;&nbsp;·&nbsp;&nbsp;g = P / m</span></div>
        <div class="formula-row"><code>p = F / A</code><span>F = p · A&nbsp;&nbsp;·&nbsp;&nbsp;A = F / p</span></div>
        <div class="formula-row"><code>M = F · b</code><span>F = M / b&nbsp;&nbsp;·&nbsp;&nbsp;b = M / F</span></div>
        <div class="formula-row"><code>σ = F / S</code><span>F = σ · S&nbsp;&nbsp;·&nbsp;&nbsp;S = F / σ</span></div>
        <div class="formula-row"><code>F = k · x</code><span>k = F / x&nbsp;&nbsp;·&nbsp;&nbsp;x = F / k</span></div>
        <div class="formula-row"><code>D = V / t</code><span>V = D · t&nbsp;&nbsp;·&nbsp;&nbsp;t = V / D</span></div>
      </div>
      <p><strong>Verificação pelas unidades:</strong> se isolaste bem, as unidades do resultado batem certo. Em m = P / g: N ÷ (m/s²) = kg.</p>`,
    examples: [
      {
        title: 'Massa a partir do peso',
        steps: ['Dados: P = 735 N; g = 9,8 m/s²; m = ?', 'Fórmula: P = m · g, logo m = P / g', 'Substituição: m = 735 / 9,8', 'Resultado: m = 75 kg']
      },
      {
        title: 'Força a partir da pressão',
        steps: ['Dados: p = 2 × 10<sup>4</sup> N/m²; A = 0,03 m²; F = ?', 'Fórmula: p = F / A, logo F = p · A', 'Substituição: F = 2 × 10<sup>4</sup> × 0,03', 'Resultado: F = 600 N']
      },
      {
        title: 'Braço de uma força numa alavanca em equilíbrio',
        steps: ['Dados (exemplo da aula: levantar uma carga de 500 kg com uma alavanca): M<sub>Resis.</sub> = (500 × 9,8) × 0,3 = 1470 N·m; F<sub>Potente</sub> = peso de uma massa de 30 kg = 30 × 9,8 = 294 N; b<sub>Potente</sub> = ?', 'Fórmula: em equilíbrio, F<sub>Potente</sub> · b<sub>Potente</sub> = M<sub>Resis.</sub>, logo 294 × b<sub>Potente</sub> = 1470', 'O 294 está a multiplicar: passa para o outro lado a dividir, b<sub>Potente</sub> = 1470 / 294', 'Resultado: b<sub>Potente</sub> = 5 m (confirmação: N·m ÷ N = m)']
      }
    ],
    pitfall: 'Isolar ao contrário, por exemplo m = g / P. A verificação pelas unidades apanha o erro: (m/s²) ÷ N não dá kg.',
    nursing: 'A mesma rotina serve para doses: se dose = concentração × volume, então volume = dose / concentração, e as unidades (mg ÷ mg/mL = mL) confirmam a conta.',
    exercises: [
      {
        q: 'Partindo de p = F / A, como fica a área isolada?',
        options: ['A = p · F', 'A = F / p', 'A = p / F', 'A = F − p'],
        correctIndex: 1,
        explanation: 'Multiplicam-se ambos os lados por A (p · A = F) e divide-se por p: A = F / p. Confirmação: N ÷ (N/m²) = m².'
      },
      {
        q: 'O momento de uma força é M = 30 N·m e a força é F = 150 N. Qual é o braço b (M = F · b)?',
        options: ['4500 m', '5 m', '0,2 m', '0,02 m'],
        correctIndex: 2,
        explanation: 'b = M / F = 30 / 150 = 0,2 m. 4500 m resulta de multiplicar; 5 m de dividir ao contrário (150 / 30).'
      },
      {
        q: 'Um utente tem um peso de 490 N. Qual é a sua massa (g = 9,8 m/s²)?',
        options: ['50 kg', '4802 kg', '490 kg', '5,0 kg'],
        correctIndex: 0,
        explanation: 'm = P / g = 490 / 9,8 = 50 kg. 4802 resulta de multiplicar por g em vez de dividir; 490 kg confunde peso com massa.'
      }
    ]
  },

  // ------------------------------------------------------------------ 15
  {
    id: 'comparar',
    icon: '🔍',
    title: 'Quantas vezes maior? Comparar duas situações com a mesma fórmula',
    goal: 'Descobrir quantas vezes muda o resultado de uma fórmula quando alguns dados mudam, sem precisar de conhecer todos os valores.',
    body: `
      <p>Muitas perguntas dizem só «o raio passa para o dobro» ou «a velocidade triplica». Não é preciso saber os valores: basta seguir o <strong>fator</strong> de cada grandeza que muda.</p>
      <ol>
        <li><strong>Escreve o fator</strong> de cada grandeza que muda: dobro = × 2; metade = × 1/2; triplo = × 3; aumenta 20 % = × 1,2; diminui 20 % = × 0,8.</li>
        <li><strong>Se a grandeza tem expoente</strong> na fórmula, eleva o fator a esse expoente (R<sup>4</sup> com o raio a dobrar: 2<sup>4</sup> = 16).</li>
        <li><strong>Fatores do numerador multiplicam; fatores do denominador dividem.</strong></li>
        <li><strong>Grandezas que não mudam</strong> têm fator 1 e podem ignorar-se.</li>
      </ol>
      <div class="formula-box"><div class="formula-box-title">Fator total</div>
        <div class="formula-row"><code>fator = (fatores de cima) / (fatores de baixo)</code><span>maior do que 1: aumenta; menor do que 1: diminui; igual a 1: mantém-se</span></div>
      </div>`,
    examples: [
      {
        title: 'Reynolds: velocidade × 3 e diâmetro a metade',
        steps: ['Re = v · ρ · d / η: v e d estão em cima', 'Fator = 3 × 1/2 = 1,5', 'Re fica 1,5 vezes maior: se era 400, passa a 600']
      },
      {
        title: 'Poiseuille: o raio e o comprimento duplicam',
        steps: ['D = π · ΔP · R<sup>4</sup> / (8 · η · L): R<sup>4</sup> está em cima e L em baixo', 'Fator do raio: 2<sup>4</sup> = 16; fator do comprimento: 2 (divide)', 'Fator total = 16 / 2 = 8: o caudal fica 8 vezes maior']
      },
      {
        title: 'Resistência hidráulica: o raio diminui 20 %',
        steps: ['R<sub>h</sub> = 8 · η · L / (π · R<sup>4</sup>): R<sup>4</sup> está em baixo', 'Fator do raio: 0,8<sup>4</sup> ≈ 0,41', 'Fator total = 1 / 0,41 ≈ 2,44: a resistência fica cerca de 2,44 vezes maior']
      },
      {
        title: 'Tensão: a força duplica e a área quadruplica',
        steps: ['σ = F / S: F em cima, S em baixo', 'Fator = 2 / 4 = 0,5', 'A tensão passa para metade']
      }
    ],
    pitfall: 'Esquecer o expoente (o raio a dobrar não duplica o caudal: multiplica-o por 16) ou multiplicar por um fator que está no denominador, em vez de dividir por ele.',
    nursing: 'Ao trocar um cateter por outro com o dobro do raio interno (mesmo comprimento, mesma diferença de pressão e mesmo soro), o modelo de Poiseuille prevê um caudal 16 vezes maior, o que ajuda a perceber porque se escolhem calibres maiores para perfusões rápidas.',
    exercises: [
      {
        q: 'Em Re = v · ρ · d / η, a velocidade duplica e a viscosidade também duplica. O que acontece a Re?',
        options: ['Fica 4 vezes maior', 'Fica 2 vezes maior', 'Mantém-se', 'Fica 4 vezes menor'],
        correctIndex: 2,
        explanation: 'v está em cima (× 2) e η em baixo (÷ 2): fator = 2 / 2 = 1, logo Re mantém-se. «4 vezes maior» resulta de multiplicar os dois fatores, esquecendo que η está no denominador.'
      },
      {
        q: 'Na lei de Poiseuille, o raio e o comprimento do tubo passam ambos para o triplo. Por quanto fica multiplicado o caudal?',
        options: ['27', '81', '1', '3'],
        correctIndex: 0,
        explanation: 'R<sup>4</sup> está em cima: 3<sup>4</sup> = 81; L está em baixo: ÷ 3. Fator = 81 / 3 = 27. 81 esquece o comprimento; 3 usa R<sup>2</sup> em vez de R<sup>4</sup> (9 / 3); 1 supõe que os dois efeitos se anulam.'
      },
      {
        q: 'Em σ = F / S, a força passa para o dobro e a área da secção para metade. Como varia a tensão?',
        options: ['Mantém-se', 'Fica 2 vezes maior', 'Fica 4 vezes menor', 'Fica 4 vezes maior'],
        correctIndex: 3,
        explanation: 'F está em cima: × 2. S está em baixo: dividir por 1/2 é multiplicar por 2. Fator = 2 × 2 = 4. «Mantém-se» resulta de pensar que o dobro e a metade se anulam.'
      }
    ]
  },

  // ------------------------------------------------------------------ 16
  {
    id: 'vetores',
    icon: '➡️',
    title: 'Grandezas escalares e vetoriais',
    goal: 'Distinguir escalares de vetores e somar forças com a mesma direção ou perpendiculares.',
    body: `
      <ul>
        <li><strong>Grandeza escalar:</strong> fica definida por um número e uma unidade. Exemplos: massa, tempo, temperatura, volume, pressão.</li>
        <li><strong>Grandeza vetorial:</strong> precisa também de <strong>direção</strong> e <strong>sentido</strong> (e, nas forças, de ponto de aplicação). Exemplos: força, peso, velocidade, aceleração.</li>
        <li><strong>Representação:</strong> um vetor desenha-se como uma seta; o comprimento da seta representa a intensidade.</li>
        <li><strong>Direção e sentido não são a mesma coisa:</strong> a direção é a linha (horizontal, vertical…); o sentido diz para que lado da linha aponta (para a direita ou para a esquerda, para cima ou para baixo).</li>
      </ul>
      <div class="formula-box"><div class="formula-box-title">Somar duas forças</div>
        <div class="formula-row"><code>F<sub>R</sub> = F<sub>1</sub> + F<sub>2</sub></code><span>mesma direção, mesmo sentido</span></div>
        <div class="formula-row"><code>F<sub>R</sub> = F<sub>maior</sub> − F<sub>menor</sub></code><span>mesma direção, sentidos opostos (fica o sentido da maior)</span></div>
        <div class="formula-row"><code>F<sub>R</sub> = √(F<sub>1</sub>² + F<sub>2</sub>²)</code><span>forças perpendiculares (teorema de Pitágoras)</span></div>
      </div>`,
    examples: [
      {
        title: 'Forças com a mesma direção',
        steps: ['Mesmo sentido: 150 N + 100 N = 250 N', 'Sentidos opostos: 150 N − 100 N = 50 N, no sentido da força de 150 N']
      },
      {
        title: 'Forças perpendiculares (30 N e 40 N)',
        steps: ['F<sub>R</sub> = √(30² + 40²)', '= √(900 + 1600) = √2500', 'F<sub>R</sub> = 50 N (e não 70 N)']
      }
    ],
    pitfall: 'Somar forças perpendiculares como números simples: 30 N e 40 N perpendiculares dão 50 N, não 70 N.',
    nursing: 'Numa tração cutânea, o peso da carga suspensa (P = m · g, em N) define a intensidade da força aplicada ao membro, e a corda define a sua direção e sentido.',
    exercises: [
      {
        q: 'Qual destas grandezas é vetorial?',
        options: ['Peso', 'Massa', 'Temperatura', 'Volume'],
        correctIndex: 0,
        explanation: 'O peso é uma força: tem intensidade, direção (vertical), sentido (para baixo) e ponto de aplicação. Massa, temperatura e volume ficam definidos só por um número e uma unidade.'
      },
      {
        q: 'Sobre um corpo atuam 200 N para a direita e 120 N para a esquerda, na mesma direção. Qual é a força resultante?',
        options: ['320 N para a direita', '80 N para a esquerda', '80 N para a direita', '0 N'],
        correctIndex: 2,
        explanation: 'Sentidos opostos subtraem-se: 200 − 120 = 80 N, no sentido da força maior (para a direita). 320 N resulta de somar como se tivessem o mesmo sentido.'
      },
      {
        q: 'Duas forças perpendiculares de 60 N e 80 N atuam no mesmo ponto. Qual é a intensidade da resultante?',
        options: ['140 N', '100 N', '20 N', '4800 N'],
        correctIndex: 1,
        explanation: 'F<sub>R</sub> = √(60² + 80²) = √(3600 + 6400) = √10&nbsp;000 = 100 N. 140 N soma as intensidades como se tivessem o mesmo sentido; 20 N subtrai-as.'
      }
    ]
  }
];
