# Brandon Venegas Cervantes — Portfolio

Personal portfolio built with [Astro](https://astro.build). Fully static, zero client-side JavaScript, self-hosted fonts, type-safe content.

## Quick start

```bash
npm install
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build → dist/
npm run preview  # preview the production build
npm run check    # type-check .astro files
```

## Before deploying — 3 things to update

1. **Production URL** — set your real domain in `astro.config.mjs` (`site`) and `src/site.config.ts` (`SITE.url`). It drives canonical URLs, Open Graph and the sitemap.
2. **LinkedIn** — replace the placeholder in `src/site.config.ts` (`PROFILE.linkedin`).
3. **robots.txt** — update the sitemap URL in `public/robots.txt` to match your domain.

## Project structure

```
src/
├── site.config.ts        # Single source of truth: name, contact, SEO metadata
├── content.config.ts     # Content collection schemas (zod-validated)
├── data/
│   ├── experience.json   # Work history — add a job here, the UI updates
│   ├── projects.json     # Selected projects
│   └── skills.ts         # Skill groups
├── layouts/
│   └── BaseLayout.astro  # <head>: SEO, Open Graph, JSON-LD Person schema
├── components/           # One component per concern, scoped styles
├── pages/
│   └── index.astro       # Assembles the sections
└── styles/
    └── global.css        # Design tokens + base styles
```

## How to add content

- **New job:** append an object to `src/data/experience.json`. The schema in `src/content.config.ts` validates it at build time — a typo in a field name fails the build instead of silently rendering wrong.
- **New project:** same pattern in `src/data/projects.json`. Add a `link` field to make the title clickable.
- **New page:** drop a `.astro` file in `src/pages/` and wrap it in `BaseLayout` — it's picked up by the sitemap automatically.

## Architecture decisions

- **Zero JS shipped** — every section is static HTML/CSS, so Lighthouse performance stays at 100 with nothing to hydrate.
- **Content collections** — data lives in JSON validated by zod schemas, keeping content separate from presentation and safe to edit.
- **Self-hosted fonts via Fontsource** — no third-party requests, no layout shift from late-loading Google Fonts.
- **Design tokens in CSS custom properties** — change the palette or type scale in one place (`global.css`).
- **Scoped component styles** — Astro scopes each component's `<style>` block, so there are no specificity collisions.
- **Accessibility floor** — skip link, visible focus rings, semantic landmarks, `prefers-reduced-motion` respected.

## Deploying

The build output in `dist/` is plain static files — deploy to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages, or AWS Amplify, which you already know from CTF).
