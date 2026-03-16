# Personal Portfolio

A single-page portfolio built with React, TypeScript, Vite, Tailwind CSS, Framer Motion, and react-i18next. **Bilingual (EN/PT)** via language switcher; theme is fixed dark.

## Sections

- **Hero** — Name, tagline, and primary CTAs (View projects, Get in touch)
- **About** — Short intro and bio
- **Experience** — Career timeline with roles, companies, and descriptions
- **Projects** — Project cards with title, description, tags, and links (live demo / repo)
- **Skills** — Grouped by category (Front-end, Back-end, Tools)
- **Contact** — Email, LinkedIn, and GitHub links

## Tech stack

- **React 19** + **TypeScript**
- **Vite** — dev server and build
- **Tailwind CSS** — styling (dark theme)
- **Framer Motion** — scroll and entrance animations
- **react-i18next** — EN/PT translations
- **Path alias** — `@/` points to `src/`

## Project structure

```
src/
├── components/     # Navbar, Section, LanguageSwitcher
├── data/           # content.ts — site (name, email, links), skills list
├── hooks/          # useActiveSection (navbar highlight)
├── i18n/           # config + locales (en.json, pt.json) — all translatable copy
├── sections/       # Hero, About, Experience, Projects, Skills, Contact
├── types/          # Experience, Project, Skill, SectionId
├── App.tsx
├── main.tsx
└── index.css
```

## Commands

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # output in dist/
npm run preview   # preview production build locally
npm run preview:gh   # build + preview (simulates GitHub Pages)
```

## GitHub Pages

The project is configured to run on **GitHub Pages** (including project sites like `https://<user>.github.io/<repo>/`).

- **`base: '/Portfolio/'`** in `vite.config.ts` so assets load at `https://filipedev-pt.github.io/Portfolio/`.
- **Workflow** `.github/workflows/deploy.yml`: on push to `main`, it builds and deploys the `dist/` folder to GitHub Pages.

**Porque a página fica em branco:** Se Source for "Deploy from a branch" com pasta root, o GitHub serve o código-fonte; o browser tenta carregar ficheiros como `/src/main.tsx` em vez do bundle → página em branco. A solução é publicar o build (pasta `dist/`), o que o workflow faz.


**Configuração:**

1. No repo: **Settings → Pages**.
2. Em **Build and deployment**, escolhe **Source** = **GitHub Actions** (not “Deploy from a branch”).
3. Guarda. No próximo push para `main`, o workflow corre e o site fica em `https://filipedev-pt.github.io/Portfolio/`.

If your default branch is `master` instead of `main`, change `branches: [main]` to `branches: [master]` in `.github/workflows/deploy.yml`.

## Visual identity

The design system and visual identity (colors, typography, spacing, components) are documented in **`docs/VISUAL-IDENTITY.md`**. Use it as the single source of truth for any UI or branding change.

## Customization

1. **Site info and skills** — Edit `src/data/content.ts`: `site` (name, email, LinkedIn, GitHub), `skills` list.
2. **Translatable copy** — Edit `src/i18n/locales/en.json` and `pt.json`: nav, hero, about, experience (including experiences array), projects (including list), skills labels, contact, footer, a11y.
3. **Styling** — Tailwind in components; accent in `src/index.css` (`--accent`).
4. **Sections** — Add/remove in `App.tsx` and `src/components/Navbar.tsx` (NAV_IDS).

## License

Private / All rights reserved.
