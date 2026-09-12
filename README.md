# 🩺 BioFísica Interativa para Enfermagem (1.º Ano)

Plataforma educativa online, interativa, moderna e **100% gratuita**, concebida especificamente para estudantes do 1.º ano da Licenciatura em Enfermagem praticarem e consolidarem os conteúdos de **Biofísica Médica**.

---

## 🎯 Conteúdos Programáticos (8 Tópicos Certificados)

Todos os tópicos e perguntas foram concebidos com base estrita no programa curricular oficial, sem alucinações e com fundamentação física comprovada ligada à prática clínica diária de enfermagem:

1. **Força, Estado de Equilíbrio e Equilíbrio de Forças:** Leis de Newton, vetores, condições de repouso e Movimento Retilíneo e Uniforme, relação entre força e área na pressão mecânica ($P = F/A$) e prevenção de lesões por pressão (escaras).
2. **Alavancas, Elasticidade dos Corpos e Resistência dos Materiais:** Alavancas anatómicas (1ª, 2ª e 3ª classe), vantagem mecânica, Lei de Hooke, Módulo de Young e reologia de materiais.
3. **Aplicação da Elasticidade e Resistência ao Sistema Osteomuscular:** Estrutura bifásica do osso (hidroxiapatite inorgânica vs colagénio orgânico), tração/compressão/torção, ossos tubulares ocos, fratura do colo do fémur na osteoporose e transformação de energia muscular (ATP).
4. **Hidrodinâmica e Aplicações ao Sistema Circulatório:** Regime laminar e turbulento, Número de Reynolds, viscosidade e hematócrito, Lei de Poiseuille, ruídos de Korotkoff na medição da PA e sopros vasculares.
5. **Radiações, Raios X, Aplicações Terapêuticas e Diagnóstico:** Natureza eletromagnética dos raios X, efeitos ionizantes, meios imagiológicos (Rx e TC), radiossensibilidade celular (Lei de Bergonié-Tribondeau) e radioproteção em enfermagem (Princípio ALARA).
6. **Núcleo Atómico e Propriedades das Forças Nucleares:** Estrutura nuclear, força nuclear forte vs repulsão eletrostática, estabilidade $N/Z$, energia de ligação nuclear e postulados de Bohr.
7. **Partículas $\alpha$, $\beta$ e Radiações Gama:** Propriedades físicas, massa, carga, poderes de ionização e penetração, tipos de blindagem (papel, acrílico e chumbo) e cuidados de enfermagem.
8. **Isótopos, Isóbaros, Isótonos e Aplicações Terapêuticas:** Definições das famílias nucleares, radioisótopos clínicos (Iodo-131 na tiroide, Tecnécio-99m em cintigrafias, Flúor-18 no PET) e biossegurança.

---

## 💡 Funcionalidades Pedagógicas

- **Escolha Múltipla Rigorosa:** 4 opções ($A, B, C, D$) com apenas uma correta inequívoca.
- **Feedback Científico Imediato:**
  - Justificação do porquê de a resposta correta estar certa.
  - Análise dos distratores (porque estão erradas as restantes opções).
  - **💡 Aplicação Prática na Enfermagem:** Caixa destacada a explicar como aquele princípio físico se aplica a um procedimento de enfermagem na enfermaria ou bloco operatório.
- **Modos de Estudo:**
  - *Prática por Tópico Específico:* Permite ao aluno estudar a matéria dada em cada semana de aulas.
  - *Simulação Global de Exame:* Conjunto de questões aleatórias de todos os tópicos, com cálculo de nota na escala portuguesa de **0 a 20 valores** e classificação universitária.
  - *Resumos Teóricos & Fórmulas:* Síntese em acordeão para revisão rápida antes dos testes.
- **Estatísticas Locais:** Registo das últimas tentativas e evolução guardadas localmente no browser (`localStorage`), sem necessidade de registo ou contas.
- **Acessibilidade:** Suporte total a Modo Escuro (Dark Mode), controlo de som sintetizado via Web Audio API e interface 100% responsiva para telemóveis e computadores.

---

## 🚀 Como Usar Localmente

A plataforma é autónoma e não precisa de instalação nem de servidores:

1. Dê um duplo clique no ficheiro `index.html` para abrir diretamente em qualquer navegador (Safari, Chrome, Firefox ou Edge).
2. Em alternativa, se pretender partilhar na rede local via terminal:
   ```bash
   ruby -run -ehttpd /Users/paulopereira/.gemini/antigravity/scratch/biofisica-enfermagem -p8000
   ```
   E aceda no navegador a `http://localhost:8000`.

---

## 🌐 Como Publicar Online Gratuitamente (100% Custo Zero Permanente)

Para disponibilizar o link aos seus alunos de enfermagem através de um endereço web gratuito (ex: `https://o-seu-utilizador.github.io/biofisica-enfermagem`):

### Opção 1: GitHub Pages (Recomendado - 2 Minutos)
1. Crie uma conta gratuita em [github.com](https://github.com) se ainda não tiver.
2. Crie um novo repositório (ex: `biofisica-enfermagem`) público.
3. Carregue os ficheiros desta pasta (`index.html`, pasta `css/`, pasta `js/`).
4. Nas definições do repositório (**Settings** > **Pages**):
   - Em *Branch*, selecione `main` e a pasta `/ (root)`.
   - Clique em **Save**.
5. Em cerca de 1 minuto, o GitHub fornece o link público e gratuito ativo para sempre com HTTPS seguro!

### Opção 2: Netlify Drop ou Vercel (Arrastar e Largar)
1. Aceda a [app.netlify.com/drop](https://app.netlify.com/drop).
2. Arraste a pasta `biofisica-enfermagem` para a página.
3. O site fica imediatamente online com um link público gratuito.
