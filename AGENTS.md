# Project Instructions

## Overview

Mona Mayhem is an Astro app for a GitHub contribution battle arena. The app lives in `src/` and uses Astro's server output with the `@astrojs/node` standalone adapter. The current app has a main page at `src/pages/index.astro` and a contribution API route at `src/pages/api/contributions/[username].ts`.

Keep changes focused on the app. Do not edit `workshop/` or its translations unless the task explicitly asks for workshop changes.

## Commands

- `npm install` installs dependencies.
- `npm run dev` starts the local Astro development server.
- `npm run build` builds the app into `dist/`.
- `npm run preview` serves the production build locally.

Run `npm run build` after app changes to catch Astro and TypeScript build errors.

## Astro Practices

- Follow Astro's file-based routing: pages and endpoints belong under `src/pages/`.
- Keep page data and server-only work in the Astro frontmatter or endpoint handlers; add client-side JavaScript only when browser interaction requires it.
- Use `.astro` components for markup and composition, and TypeScript for API route handlers and typed data.
- API endpoints should use Astro's `APIRoute` type, return explicit status codes and appropriate headers, and handle invalid input or upstream failures.
- Preserve the server output and Node standalone adapter in `astro.config.mjs` unless deployment requirements explicitly change.
- Put static assets in `public/` when they should be served unchanged from the site root.