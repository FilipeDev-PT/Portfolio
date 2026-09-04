# Personal Portfolio

Portfolio of **Filipe Cristovam**, a full-stack developer. React, TypeScript, Vite, Tailwind CSS, shadCN-style primitives, Motion, and react-i18next. **Bilingual (EN/PT)**. Visual direction: ivory editorial (light).

## Sections

- **Hero** — Name, specialty, specific line of work, CTAs
- **Work** — Selected projects with varied layouts and dedicated case pages
- **Experience** — Roles at Vize Solutions and FGR Incorporações SA
- **About** — How I work + stack as a definition list
- **Contact** — Form (`mailto:`) plus email, LinkedIn, and GitHub

## Tech stack

- **React 19** + **TypeScript**
- **Vite** — dev server and GitHub Pages build
- **Tailwind CSS** — semantic tokens (`background`, `primary`, `secondary`, …)
- **Motion** (`motion/react`) — nav indicator, reveals, carousel
- **react-i18next** — EN/PT
- **Path alias** — `@/` points to `src/`

## Commands

```bash
npm install
npm run dev       # http://localhost:5173
npm run lint
npm run build     # output in dist/
npm run preview
```

## GitHub Pages

Configured for **GitHub Pages** at `https://filipedev-pt.github.io/Portfolio/`.

- **`base: '/Portfolio/'`** in `vite.config.ts`
- Workflow `.github/workflows/deploy.yml` builds `dist/` on push to `main`

Set **Settings → Pages → Source** to **GitHub Actions**.

## Customization

1. **Site info, projects, skills** — `src/data/content.ts`
2. **Case bodies** — `src/data/cases.ts` (EN/PT, no invented metrics)
3. **UI copy** — `src/i18n/locales/en.json` and `pt.json`
4. **Tokens** — `src/index.css` and `docs/VISUAL-IDENTITY.md`
5. **QA script** — `docs/QA.md`

## License

Private / All rights reserved.
