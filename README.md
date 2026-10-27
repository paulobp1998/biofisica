# 🩺 BioFísica Interativa para Enfermagem (1.º Ano)

Plataforma educativa interativa e **gratuita**, criada para os estudantes do 1.º ano da Licenciatura em Enfermagem praticarem os conteúdos da Unidade Curricular de **Biofísica Médica**.

Acesso online: **https://paulobp1998.github.io/biofisica/**

---

## 🎯 Conteúdos

Estado atual do banco de perguntas:

| Tópico | Conteúdo | Estado |
|---|---|---|
| 1 | Força, estado de equilíbrio, equilíbrio de forças e alavancas | 200 perguntas ativas |
| 2 | Elasticidade dos corpos, resistência dos materiais e sistema osteomedular | 200 perguntas ativas |
| 3 | Hidrodinâmica | 200 perguntas ativas |
| 4 | Hidrostática | Em preparação (bloqueado pelo docente) |
| 5 | Física atómica e nuclear | Em preparação (bloqueado pelo docente) |

Total atual: **600 perguntas** (todas ativas para os alunos, Tópicos 1 a 3). Os tópicos ativos definem-se em `UNLOCKED_TOPIC_IDS` (`js/questions-data.js`), de escolha múltipla com 4 opções e explicação científica e de aplicação em enfermagem.

**Tópico 1:** grandezas vetoriais, leis de Newton, força normal e atrito, condições de equilíbrio (∑F = 0 e ∑M = 0), centro de gravidade e base de sustentação, alavancas biomecânicas (1.ª, 2.ª e 3.ª classe) e momentos de força.

**Tópico 2:** reologia (sólidos de Hooke e de Euclides, corpos plásticos e viscoelásticos), as cinco deformações (compressão, tração, flexão, cisalhamento e torção), lei de Hooke, módulo de Young, composição do osso (hidroxiapatite e colagénio) e anisotropia mecânica do sistema osteomedular.

**Tópico 3:** viscosidade e viscosidade do sangue (hematócrito, anemia e desidratação), regimes laminar e turbulento, experiência e número de Reynolds, regimes no sistema circulatório, caudal e caudal crítico, lei de Poiseuille, resistência hidráulica, cateteres (gauge) e sons de Korotkoff.

---

## 💡 Funcionalidades

- **Modo Treino:** explicação imediata e detalhada após cada resposta.
- **Modo Simulação Real:** sem consulta durante a prova, temporizador configurável e classificação de 0 a 20 valores com revisão no final.
- **Caderno de Erros com revisão espaçada e ⭐ Favoritos:** as perguntas erradas ficam guardadas no navegador. Voltam a aparecer ao fim de alguns dias ("Hoje tens N perguntas para rever") e só saem depois de 2 respostas certas em dias diferentes.
- **Confiança (opcional) no Modo Treino:** o aluno indica se tem certeza, se acha que sim ou se está a adivinhar. Os resultados e as estatísticas mostram a confiança vs. os acertos, e os erros com certeza voltam logo ao caderno.
- **Repetição de erros na mesma sessão (Modo Treino):** uma pergunta errada volta a aparecer 4 perguntas depois, com as opções baralhadas (no máximo 10 por sessão). A repetição não conta para a nota nem para as métricas do docente.
- **Revisão dos resultados "primeiro os erros":** a revisão abre pelos erros e pelas respostas certas sem certeza; as respostas certas ficam recolhidas.
- **Esquemas nas perguntas:** nas perguntas em que o desenho ajuda a resolver (alavancas, momentos, plano inclinado, barras em tração ou compressão, vigas, tubos e cateteres), um esquema SVG mostra só os dados do enunciado (`js/question-figures.js`).
- **Esquemas dos conceitos:** 9 diagramas (vetor força, plano inclinado, alavancas, deformações, curva tensão–deformação…) em SVG no próprio código, sem imagens externas nem serviços (`js/study-figures.js`).
- **Teoria em conceitos** (Tópicos 1 a 3): fórmulas, erro comum e aplicação em enfermagem. A partir de qualquer pergunta há o botão "Rever esta parte da teoria", e cada conceito tem "Praticar este conceito". Conteúdo em `js/study-content.js`.
- **Resolução passo a passo** nas perguntas de cálculo: dados, conversões, fórmula, substituição e resultado, no feedback, na revisão e na ficha imprimível.
- **🚩 Reportar problema:** depois de responder, o aluno pode avisar o docente de um possível erro na pergunta (anónimo, com motivo e comentário opcional). Os reportes aparecem no painel de métricas.
- **Resultados e estatísticas com orientação:** ponto fraco da sessão, desempenho por conceito e evolução das notas.
- **Pesquisa rápida** (`Ctrl+K` ou `Cmd+K`) no glossário (definições curtas, sem distinção de acentos) e nas perguntas.
- **Atalhos no quiz:** `A`–`D` ou `1`–`4` para responder, `Enter` para avançar.
- **Sessões configuráveis:** 10, 25, 50 perguntas ou o tópico completo; exames de 20 ou 40 perguntas.
- **Ordem baralhada:** a ordem das perguntas e das opções muda em cada tentativa.
- **Ficha de trabalho imprimível** (A4 ou PDF através de `window.print()`).
- **Tamanho de letra ajustável** (A- / A+) e **modo escuro**.
- **Métricas do docente (área com PIN):** visitas diárias, perguntas respondidas, taxa de acerto por tópico, sessões e notas, e **Perguntas a rever** (acerto muito baixo ou muito alto, distratores que atraem mais do que a resposta certa, reportes dos alunos). Configuração em [`metrics-backend/README.md`](metrics-backend/README.md).
- **Modo Arena (sala de aula):** quiz em tempo real com equipas. O docente cria uma sala com um PIN; as equipas entram com o PIN ou com o QR code.

---

## 🚀 Como usar

### Online (recomendado para os alunos)
Basta abrir **https://paulobp1998.github.io/biofisica/** no computador ou no telemóvel.

### No próprio computador (sem internet)
1. Descarregue ou clone este repositório.
2. Abra o ficheiro `index.html` no navegador (Safari, Chrome, Firefox ou Edge).

---

## 🌐 Gratuitidade

O site é estático (HTML, CSS e JavaScript). Não tem servidor próprio nem chaves de API:

- **Alojamento:** GitHub Pages, gratuito para repositórios públicos. Não usar serviços com plano pago nem planos de teste com validade.
- **Modo Arena:** usa os brokers MQTT públicos e gratuitos **HiveMQ** e **EMQX**. São serviços partilhados, sem garantia de disponibilidade. Se algum deixar de existir, a app tenta automaticamente o seguinte. Se ambos falharem, o modo Arena deixa de funcionar, mas o resto do site continua a funcionar.
- **Métricas:** Google Sheets + Google Apps Script, da conta Google do docente, sem custos (ver `metrics-backend/README.md`).
- **QR code:** gerado no próprio navegador (biblioteca `js/lib/qrcode-generator.js`, MIT). Não há chamadas a serviços externos.

---

## 🔒 Privacidade e segurança

- **Modo Arena:** as mensagens (nomes das equipas e respostas) passam por um broker público. Quem conhecer o PIN da sala pode ver e participar nessa sala. **Recomenda-se que os alunos usem apenas alcunhas de equipa, nunca nomes reais.** Para um uso mais restrito, deve usar-se um broker MQTT privado com autenticação.
- **PIN do docente:** protege o painel de gestão de perguntas e o acesso ao modo Arena do docente. Como o site é estático, a verificação acontece no navegador e serve apenas para evitar uso acidental. **Não use um PIN curto e não reutilize um PIN já publicado.**

  Para mudar o PIN do docente, gere o hash e substitua a constante `ARENA_HOST_PIN_HASH` em `js/arena-ui.js`:

  ```bash
  echo -n "O_SEU_NOVO_PIN" | shasum -a 256
  ```


---

## 🛠️ Estrutura do projeto

```
index.html              Interface principal
css/style.css           Estilos (inclui modo escuro e impressão)
js/data/topic*.js       Banco de perguntas por tópico
js/questions-data.js    Ligação dos tópicos ao motor de quiz
js/quiz-engine.js       Lógica do quiz (treino e simulação)
js/app.js               Navegação, caderno de erros, medalhas e pesquisa
js/arena-*.js           Modo Arena (rede, motor e interface)
js/teacher-manager.js   Gestão de perguntas pelo docente
js/lib/                 Bibliotecas de terceiros (Paho MQTT, QR code)
```

Os ficheiros `verify_app_health.py` e `master_audit.py` são ferramentas de apoio para auditoria do banco de perguntas.

