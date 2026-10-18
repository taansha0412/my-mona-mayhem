<!-- l10n-sync: source-file="workshop/04-design-vibes.md" -->
# Parte 4: Tema Orientado a Design

---

Nesta parte, você vai usar o **Plan Mode** para projetar uma transformação visual completa e o **Agent Mode** para implementá-la. Isso é desenvolvimento orientado a design — comece com a visão, itere nos visuais e deixe o Copilot cuidar do trabalho pesado de CSS.

## Tarefa 1: Planeje o Tema Retrô

<!-- track:vscode:start -->
Mude para o modo **Plan** no GitHub Copilot Chat.
<!-- track:vscode:end -->

<!-- track:cli:start -->
Use `/plan` no GitHub Copilot CLI ou pressione **Shift+Tab** até ativar o plan mode.
<!-- track:cli:end -->

Insira este prompt:

> Quero transformar esta página em uma experiência completa de fliperama retrô. Planeje uma reformulação visual abrangente que inclua: efeitos de linhas de varredura CRT no fundo, brilho de neon pulsante no título, emblema VS animado com mudanças de gradiente, sobreposição de brilho e cintilação nos cartões de resultados dos usuários, animações de entrada flutuante nos campos, texto de carregamento que muda entre verde e roxo e efeitos de brilho ao passar o cursor sobre os quadrados de contribuição. Mantenha o fundo escuro (`#0a0a1a`) com as cores de destaque verde (`#5fed83`) e roxo (`#8a2be2`). Use um tema escuro com a fonte retrô Press Start 2P do Google Fonts.

O Copilot vai gerar um plano de implementação detalhado cobrindo todos os efeitos visuais. **Não aceite imediatamente** — revise o plano e itere:

- Sugira ajustes no tempo das animações (por exemplo, "Deixe a pulsação do neon mais lenta, com cerca de 3 segundos").
- Pergunte sobre efeitos específicos (por exemplo, "Como a sobreposição cintilante vai funcionar nos cartões?").
- Solicite mudanças na abordagem se algo não parecer correto

Quando estiver satisfeito com o plano, deixe o Copilot prosseguir com a implementação.

> **⚠️ Não está vendo as alterações?** Se o novo tema ou as animações não aparecerem, pare o servidor de desenvolvimento (`Ctrl+C`), reinicie com `npm run dev` e atualize a página sem usar o cache (`Ctrl+Shift+R`).

<!-- track:vscode:start -->
## Tarefa 2: Implemente o tema

Mude para o modo **Agent** e peça ao Copilot para implementar o plano:

> Implemente o plano do tema de fliperama retrô que acabamos de criar.

O Copilot vai adicionar múltiplas animações CSS, pseudo-elementos e transições na sua folha de estilos. Isso pode incluir:

- `@keyframes` para scanlines, pulso neon, shimmer e efeitos de float-in
- Pseudo-elementos (`::before`, `::after`) para efeitos de sobreposição
- CSS custom properties para as cores do tema
- Estados de transição e hover para elementos interativos

Depois que as alterações forem aplicadas, **verifique a pré-visualização no seu navegador** para ver a transformação completa do tema retrô arcade.
<!-- track:vscode:end -->

<!-- track:cli:start -->
## Tarefa 2: Implemente o tema

Quando estiver satisfeito com o plano, peça ao Copilot para implementá-lo:

> Implement the retro arcade theme plan we just designed.

Depois que as alterações forem feitas, use `/diff` para revisar o estilo antes de aprová-lo.
<!-- track:cli:end -->

## Tarefa 3: Ajuste Fino das Vibes

Mantenha a pré-visualização do navegador aberta e itere no design. Tente prompts como:

> O efeito de linhas de varredura está intenso demais; reduza a opacidade para 0.03.

> Adicione um leve efeito de oscilação elétrica ao texto do título.

> O emblema VS deve pulsar de forma mais intensa.

Isso é **desenvolvimento orientado a design** — você está iterando na saída visual em tempo real. Cada prompt refina a experiência até que fique perfeita. Não se contente com "bom o suficiente" — aperfeiçoe as vibes até que a página pareça pertencer a um gabinete de arcade.

<!-- track:vscode:start -->
## Tarefa 4: Atualize as instruções

Suas instruções de workspace devem refletir decisões importantes de design. Peça ao Copilot:

> Adicione uma seção de guia de design a copilot-instructions.md que descreva o tema de fliperama retrô: cores, fontes e estilo das animações.

Isso mantém futuras interações com o Copilot consistentes com a identidade visual que você estabeleceu. Qualquer nova funcionalidade ou componente seguirá automaticamente a estética retrô arcade.
<!-- track:vscode:end -->

<!-- track:cli:start -->
## Tarefa 4: Atualize as instruções

Atualize as instruções do repositório para documentar as principais decisões de design. Peça ao Copilot CLI:

> Atualize as instruções do repositório com um breve guia de design para o tema de fliperama retrô: cores, fontes, estilo das animações e a regra de que a nova interface mantenha a estética neon.

Faça commit das instruções e das alterações de design quando a página estiver como você deseja.
<!-- track:cli:end -->

Faça commit das instruções e das alterações de design quando a página estiver como você deseja.

## ✅ Parte 4 Concluída

**O que você aprendeu:**

- **Plan Mode para sistemas de design** — esboce uma reformulação visual completa antes de escrever qualquer código
- **Iterar na saída visual** — use prompts rápidos de acompanhamento para ajustar animações, cores e efeitos
- **Manter as instruções atualizadas com decisões de design** — documente seu tema para que o Copilot mantenha a consistência
- **Fluxo de desenvolvimento orientado a design** — comece com a visão, implemente com IA, refine até ficar perfeito
