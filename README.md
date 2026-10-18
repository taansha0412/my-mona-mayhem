<div align="center">

# 🎮 Mona Mayhem

### Press start. Pick a rival. Let the contributions battle.

Build a retro arcade arena that turns GitHub contribution activity into a head-to-head showdown—with **GitHub Copilot** as your coding co-pilot.

<a href="workshop/00-overview.md"><strong>▶ Start the workshop</strong></a>
&nbsp; · &nbsp;
<a href="#choose-your-player">Choose your track</a>
&nbsp; · &nbsp;
<a href="#run-it-locally">Run it locally</a>

</div>

<p align="center">
  <img src="https://github.com/user-attachments/assets/5eca79e2-cb9f-4e93-aa0d-23666ebde3b7" alt="Preview of the Mona Mayhem retro arcade contribution battle arena" width="900" />
</p>

> **Workshop starter:** The image previews the arena you’ll build through the workshop. The app in this repository is the starting point—not the finished game.

🌐 English | [Español](README.es.md) | [Português (Brasil)](README.pt_BR.md) | [한국어](README.ko.md)

## Your next coding side quest

Mona Mayhem is a hands-on workshop for building an Astro app that compares the GitHub contribution activity of two users. Go from starter project to arcade-inspired experience while practicing how to plan, give an AI coding agent useful context, build iteratively, and polish a real project.

### Choose your player

Both tracks build the same project. Pick the workflow that feels right and follow the [workshop overview](workshop/00-overview.md).

| 🧑‍💻 VS Code | 💻 GitHub Copilot CLI |
| --- | --- |
| Work in the editor with Chat, Plan Mode, Agent Mode, background agents, and review loops. | Build from your terminal with `copilot`, `@file` context, `/plan`, `/fleet`, `/delegate`, and `/review`. |

[Open the workshop overview to choose your track →](workshop/00-overview.md)

### The quest log

<details>
<summary>See all workshop levels</summary>

| Part | Level | What you’ll do |
| --- | --- | --- |
| [00](workshop/00-overview.md) | Overview | Choose a track and see what you’ll learn |
| [01](workshop/01-setup.md) | Setup & Context Engineering | Prepare your environment and give Copilot useful context |
| [02](workshop/02-plan-and-scaffold.md) | Plan & Scaffold | Shape the API and page architecture |
| [03](workshop/03-agent-mode.md) | Build the Game | Implement the arena with agentic help |
| [04](workshop/04-design-vibes.md) | Design-First Theming | Give the app its retro arcade look |
| [05](workshop/05-polish.md) | Polish & Parallel Work | Refine the experience and work in parallel |
| [06](workshop/06-bonus.md) | Bonus & Extensions | Try extra features and Copilot experiments |

</details>

## Start playing

1. **Create your own copy** with **Use this template** on GitHub, or fork this repository.
2. **Clone your copy** and open it in VS Code—or open a terminal for the CLI track.
3. **Choose your track** in the [workshop overview](workshop/00-overview.md) and jump into Level 01.

### What you’ll need

- GitHub Copilot (Pro, Business, or Enterprise)
- Git and Node.js
- **VS Code track:** VS Code v1.107+ and the GitHub Copilot extension, signed in
- **CLI track:** GitHub Copilot CLI (`copilot`). Installing it with `npm install -g @github/copilot` requires Node.js 22+; Homebrew and WinGet are also options.

## Run it locally

```sh
npm install
npm run dev
```

Then open the local URL printed by Astro. To check the app before sharing your changes:

```sh
npm run lint
npm run build
```

<details>
<summary>Tech stack & deployment notes</summary>

- **Framework:** [Astro](https://astro.build/) v6 with the [Node adapter](https://docs.astro.build/en/guides/integrations-guide/node/)
- **Language:** TypeScript
- **Arcade typeface:** Press Start 2P
- **Data:** GitHub contribution graphs

The `GET /api/contributions/:username` route fetches contribution JSON server-side. Successful responses are cached in memory for one hour, with a 100-user limit per server process; cache entries are not shared across instances.

The current workflow in `.github/workflows/deploy.yml` publishes static workshop and documentation content from `docs/` and `workshop/` to GitHub Pages. It does **not** build or deploy the Astro app in `src/`.

To deploy the Astro app to GitHub Pages, switch Astro to static output, remove the Node adapter, and update the workflow to build and publish `dist/`. For a project page at `https://<user>.github.io/<repo>/`, also configure `site` and `base` in `astro.config.mjs`.

If you want to keep API routes running in production, use a server platform such as Vercel, Netlify, or a Node host instead of GitHub Pages.

</details>

## License

MIT
