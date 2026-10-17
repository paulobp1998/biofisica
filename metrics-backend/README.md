# Métricas de utilização — configuração (gratuita)

Os dados ficam numa folha do Google Sheets da conta do docente, através de um Google Apps Script. Não há custos nem serviços pagos.

Os alunos enviam apenas dados **anónimos**: um identificador aleatório por navegador, a data, o tópico, o modo, as perguntas respondidas (número e identificador) e se acertaram. Não são recolhidos nomes nem dados pessoais. O painel fica na área do docente, protegida pelo PIN.

## Passos (uma só vez, ≈ 5 minutos)

1. Em [sheets.new](https://sheets.new) crie uma folha de cálculo com a conta Google do docente (chame-lhe, por exemplo, "Métricas Biofísica").
2. No menu **Extensões → Apps Script** abra o editor. Apague o conteúdo existente e cole o ficheiro [`Code.gs`](Code.gs).
3. Em `READ_KEY` troque `TROQUE-ESTA-CHAVE-SECRETA` por uma chave sua, e em `SHEET_ID` coloque o ID da sua folha (o trecho entre `/d/` e `/edit` no URL). Esta chave é a que o docente escreve no painel para ver os dados; não a partilhe.
4. Guarde (💾) e clique em **Implementar → Nova implementação**:
   - Tipo: **Aplicação Web**
   - Executar como: **Eu**
   - Quem tem acesso: **Qualquer pessoa**
5. Autorize o acesso quando o Google pedir (é a sua própria conta). Copie o **URL da aplicação Web** (termina em `/exec`).
6. Em `js/metrics.js`, substitua a linha `const METRICS_ENDPOINT = '';` por:
   ```js
   const METRICS_ENDPOINT = 'COLE-AQUI-O-URL-TERMINADO-EM-/exec';
   ```
7. Publique a alteração no GitHub Pages (commit e push). A partir daí, as visitas e as sessões começam a ser registadas.

Para ver o painel: área do docente (PIN) → **📊 Métricas de Utilização** → introduza a chave do passo 3. Fica guardada só no seu computador (botão **🔑 Alterar chave** para a mudar).

## Notas

- Os dados em bruto estão também diretamente na folha `eventos`, se quiser exportar para Excel.
- As suas próprias sessões não são contabilizadas enquanto a sessão do docente estiver aberta no navegador.
- Após alterar `Code.gs`, faça **Implementar → Gerir implementações → Editar → Nova versão** para que a alteração entre em vigor (o URL mantém-se).
- Como os dados são pseudónimos mas individuais, convém informar os alunos de que a plataforma regista a utilização de forma anónima para acompanhamento da unidade curricular.
