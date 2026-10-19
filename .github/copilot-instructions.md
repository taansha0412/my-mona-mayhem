# Mona Mayhem Copilot Instructions

## Architecture

- The Astro app is under `src/`: `src/pages/index.astro` serves `/`, and `src/pages/api/contributions/[username].ts` serves each user's contribution endpoint. Astro's file-based routing defines these URLs.
- The contribution endpoint fetches GitHub's `/{username}.contribs` JSON server-side and uses a bounded, in-memory TTL cache. Keep upstream requests and secrets on the server; do not move them into browser code.
- `astro.config.mjs` configures server output with the `@astrojs/node` standalone adapter. Preserve this for app changes unless deployment requirements explicitly change.
- `docs/` and `workshop/` are a separate static experience: `.github/workflows/deploy.yml` publishes those directories to GitHub Pages, not the Astro app in `src/`.
- Follow the root `AGENTS.md` for the app's scope and Astro implementation practices. Keep unrelated workshop content and translations unchanged unless the task explicitly includes them.

## Commands

- `npm install` — install dependencies.
- `npm run dev` — start the Astro development server (normally at `http://localhost:4321`).
- `npm run build` — build the server app into `dist/`; run this after app changes.
- `npm run preview` — serve the production build locally.
- `npm run lint` — lint `src/` and `astro.config.mjs`.
- To lint one file, run `npx eslint 'src/pages/api/contributions/[username].ts'` (or substitute the target file).
- There is currently no test script or test suite in the repository, so no single-test command is configured.

## Conventions

- Put pages and API routes under `src/pages/`; use `.astro` for page markup and TypeScript with Astro's `APIRoute` type for endpoints.
- Keep page/server data work in Astro frontmatter or endpoint handlers; add browser-side JavaScript only for interactions that require it.
- API handlers should validate route input, return explicit HTTP status codes and JSON headers, and report upstream failures. The contribution endpoint's error payload is `{ error: { code, message } }`.
- ESLint enforces tabs, single quotes, semicolons, trailing commas on multiline constructs, and spaces inside object braces.
- Put files served unchanged from the site root in `public/`.

## Design Guide

- Keep the battle page in a dark retro arcade style. Use `#0a0a1a` for the page background, `#5fed83` as the neon green accent, and `#8a2be2` as the purple accent. Use pale text for readable contrast.
- Use Press Start 2P from Google Fonts for arcade display text, with a system sans-serif fallback for supporting text and controls.
- Favor restrained neon glows, CRT scanlines, and green-to-purple gradients. Animation should feel like an arcade cabinet: slow neon pulses, brief entrance motion, subtle shimmer, and small hover responses rather than constant rapid movement.
- Keep decorative effects from obscuring content or blocking interaction. Preserve visible keyboard focus and respect `prefers-reduced-motion` by reducing or disabling non-essential animations.
