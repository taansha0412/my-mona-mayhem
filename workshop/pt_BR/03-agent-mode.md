<!-- l10n-sync: source-file="workshop/03-agent-mode.md" -->
# Parte 3: Agent Mode — Construa o Jogo

---

O Agent Mode permite que o Copilot planeje e implemente alterações de forma autônoma em múltiplos arquivos. Em vez de escrever código linha por linha, você descreve o que deseja e o Copilot descobre quais arquivos criar ou modificar, implementando tudo de ponta a ponta.

## Tarefa 1: Conecte a Batalha

<!-- track:vscode:start -->
1. Mude para o modo **Agent** no Copilot Chat.
2. Insira este prompt:
<!-- track:vscode:end -->

<!-- track:cli:start -->
1. Volte ao fluxo padrão de programação do Copilot CLI (ou continue no modo autopilot para deixar o Copilot avançar até você interrompê-lo).
2. Se for útil, inclua o arquivo da página como contexto: `@src/pages/index.astro`.
3. Insira este prompt:
<!-- track:cli:end -->

   > Adicione JavaScript no lado do cliente à página de batalha para que:
   > 1. Ao clicar no botão Battle, obtenha os dois nomes de usuário dos campos.
   > 2. Valide se ambos foram preenchidos (e mostre um erro caso não tenham sido).
   > 3. Busque os dados de contribuições dos dois usuários em paralelo pela nossa API.
   > 4. Renderize os gráficos de contribuições em grades coloridas: cada dia será um quadrado com uma cor da paleta do GitHub.
   > 5. Mostre um emblema VS entre os dois usuários.
   > 6. Exiba o nome de usuário, o total de contribuições e o intervalo de datas de cada usuário.
   > 7. Trate os estados de carregamento e os erros.
   > 8. Acione a ação também ao pressionar Enter nos campos.
   >
   > Use interfaces do TypeScript para a estrutura de dados de contribuições.

<!-- track:vscode:start -->
3. Deixe o Agent Mode implementar as alterações em `index.astro`.
4. Revise as alterações propostas na visualização de diff antes de aceitá-las.
<!-- track:vscode:end -->

<!-- track:cli:start -->
4. Deixe o Copilot CLI trabalhar em `src/pages/index.astro`.
5. Use `/diff` para revisar as alterações geradas e aprová-las.
<!-- track:cli:end -->

## Tarefa 2: Teste a Batalha

> **⚠️ Não está vendo as alterações?** Se a página de batalha não tiver sido atualizada, pare o servidor de desenvolvimento (`Ctrl+C`), reinicie com `npm run dev` e atualize o navegador.

1. Insira `octocat` e `torvalds` como os dois nomes de usuário e clique em **Battle**.
2. Você deve ver ambos os gráficos de contribuição renderizados lado a lado com grids coloridos.
3. Teste os casos de erro:
   - Deixe um ou ambos os campos vazios e clique em Battle: deve aparecer um erro de validação.
   - Insira um nome de usuário inválido: o aplicativo deve exibir um erro da API.
4. Teste pressionando **Enter** em qualquer campo de entrada — deve disparar a batalha assim como clicar no botão.

## Tarefa 3: Itere com o Agent

<!-- track:vscode:start -->
Se algo não estiver totalmente correto, dê feedback ao Agent diretamente no chat. Por exemplo:

- *"Os quadrados de contribuição estão grandes demais; deixe-os com 12x12px."*
- *"Adicione uma dica ao passar o cursor que mostre a data e a quantidade de contribuições."*
- *"O estado de carregamento precisa de uma animação de pulsação."*

O Agent Mode lida com alterações em múltiplos arquivos e iterações de forma natural. Cada prompt de acompanhamento se baseia no contexto anterior, permitindo que você refine a implementação de forma incremental sem recomeçar do zero.
<!-- track:vscode:end -->

<!-- track:cli:start -->
As sessões do Copilot CLI preservam o histórico, então cada prompt de acompanhamento se baseia no anterior. Use `/session` ou `/context` para inspecionar o contexto atual e execute `/review` depois de uma iteração maior para fazer outra revisão de bugs ou melhorias.
<!-- track:cli:end -->

## Dicas para o Agent Mode

- **Seja específico sobre o que você quer** — requisitos claros levam a resultados melhores.
- **Divida tarefas grandes em prompts menores** se o Agent sair do rumo.
- **Revise as alterações antes de aceitar** — use a visualização de diff para entender o que foi modificado.
- **Se os resultados não forem perfeitos, forneça feedback e itere** — o Agent aprende com suas correções dentro da conversa.

## ✅ Parte 3 Concluída

Você aprendeu a:

- Usar o **Agent Mode** para implementações complexas em múltiplos arquivos
- **Iterar nos resultados** com feedback direcionado
- Lidar com o **ciclo de vida completo de uma funcionalidade** — da implementação ao teste e refinamento — em uma única conversa
