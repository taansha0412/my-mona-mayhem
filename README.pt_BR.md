<!-- l10n-sync: source-file="README.md" -->

<div align="center">

# 🎮 Mona Mayhem

### Aperte iniciar. Escolha um rival. Que comece a batalha de contribuições.

Crie uma arena de fliperama retrô que transforma a atividade de contribuições do GitHub em um confronto direto, com o **GitHub Copilot** como seu copiloto de programação.

<a href="workshop/pt_BR/00-overview.md"><strong>▶ Comece o workshop</strong></a>
&nbsp; · &nbsp;
<a href="#escolha-sua-trilha">Escolha sua trilha</a>
&nbsp; · &nbsp;
<a href="#execute-localmente">Execute localmente</a>

</div>

<p align="center">
  <img src="https://github.com/user-attachments/assets/5eca79e2-cb9f-4e93-aa0d-23666ebde3b7" alt="Prévia da arena retrô de batalha de contribuições Mona Mayhem" width="900" />
</p>

> **Projeto inicial do workshop:** A imagem mostra a arena que você vai criar durante o workshop. O aplicativo deste repositório é o ponto de partida, não o jogo concluído.

🌐 [English](README.md) | [Español](README.es.md) | Português (Brasil) | [한국어](README.ko.md)

## Sua próxima missão de programação

Mona Mayhem é um workshop prático para criar um aplicativo Astro que compara a atividade de contribuições do GitHub de dois usuários. Vá do projeto inicial a uma experiência inspirada em fliperamas enquanto aprende a planejar, fornecer contexto útil a um agente de programação com IA, desenvolver de forma iterativa e aprimorar um projeto real.

### Escolha sua trilha

As duas trilhas criam o mesmo projeto. Escolha o fluxo de trabalho que preferir e siga a [visão geral do workshop](workshop/pt_BR/00-overview.md).

| 🧑‍💻 VS Code | 💻 GitHub Copilot CLI |
| --- | --- |
| Trabalhe no editor com Chat, Plan Mode, Agent Mode, agentes em segundo plano e ciclos de revisão. | Desenvolva pelo terminal com `copilot`, contexto `@file`, `/plan`, `/fleet`, `/delegate` e `/review`. |

[Abra a visão geral do workshop para escolher sua trilha →](workshop/pt_BR/00-overview.md)

### O registro de missões

<details>
<summary>Veja todos os níveis do workshop</summary>

| Parte | Nível | O que você vai fazer |
| --- | --- | --- |
| [00](workshop/pt_BR/00-overview.md) | Visão geral | Escolher uma trilha e descobrir o que vai aprender |
| [01](workshop/pt_BR/01-setup.md) | Configuração e engenharia de contexto | Preparar o ambiente e fornecer contexto útil ao Copilot |
| [02](workshop/pt_BR/02-plan-and-scaffold.md) | Planejamento e scaffold | Definir a API e a arquitetura da página |
| [03](workshop/pt_BR/03-agent-mode.md) | Construção do jogo | Implementar a arena com ajuda agêntica |
| [04](workshop/pt_BR/04-design-vibes.md) | Tema com foco no design | Dar ao aplicativo o visual de um fliperama retrô |
| [05](workshop/pt_BR/05-polish.md) | Aprimoramento e trabalho paralelo | Refinar a experiência e trabalhar em paralelo |
| [06](workshop/pt_BR/06-bonus.md) | Bônus e extensões | Experimentar recursos extras e testar o Copilot |

</details>

## Comece a jogar

1. **Crie sua própria cópia** usando **Use this template** no GitHub ou faça um fork deste repositório.
2. **Clone sua cópia** e abra no VS Code — ou abra um terminal para a trilha CLI.
3. **Escolha sua trilha** na [visão geral do workshop](workshop/pt_BR/00-overview.md) e avance para o nível 01.

### Requisitos

- GitHub Copilot (Pro, Business ou Enterprise)
- Git e Node.js
- **Trilha VS Code:** VS Code v1.107+ e a extensão GitHub Copilot, com login feito
- **Trilha CLI:** GitHub Copilot CLI (`copilot`). A instalação com `npm install -g @github/copilot` requer Node.js 22+; Homebrew e WinGet também são opções.

## Execute localmente

```sh
npm install
npm run dev
```

Abra a URL local exibida pelo Astro. Para verificar o aplicativo antes de compartilhar suas alterações:

```sh
npm run lint
npm run build
```

<details>
<summary>Notas sobre a stack e a implantação</summary>

- **Framework:** Astro v6 com o [adaptador Node](https://docs.astro.build/en/guides/integrations-guide/node/)
- **Linguagem:** TypeScript
- **Fonte de arcade:** Press Start 2P
- **Dados:** gráficos de contribuições do GitHub

A rota `GET /api/contributions/:username` busca o JSON de contribuições no servidor. As respostas bem-sucedidas ficam em cache na memória por uma hora, com limite de 100 usuários por processo do servidor; as entradas do cache não são compartilhadas entre instâncias.

O workflow atual em `.github/workflows/deploy.yml` publica no GitHub Pages o conteúdo estático do workshop e da documentação em `docs/` e `workshop/`. Ele **não** compila nem implanta o aplicativo Astro em `src/`.

Para implantar o aplicativo Astro no GitHub Pages, mude o Astro para saída estática, remova o adaptador Node e atualize o workflow para compilar e publicar `dist/`. Se for uma página de projeto em `https://<user>.github.io/<repo>/`, configure também `site` e `base` em `astro.config.mjs`.

Se quiser manter as rotas de API em execução na produção, use uma plataforma de servidor como Vercel, Netlify ou um host Node em vez do GitHub Pages.

</details>

## Licença

MIT
