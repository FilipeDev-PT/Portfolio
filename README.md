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
npm run dev    # http://localhost:5173
npm run build
npm run preview
```

## Visual identity

The design system and visual identity (colors, typography, spacing, components) are documented in **`docs/VISUAL-IDENTITY.md`**. Use it as the single source of truth for any UI or branding change.

## Customization

1. **Site info and skills** — Edit `src/data/content.ts`: `site` (name, email, LinkedIn, GitHub), `skills` list.
2. **Translatable copy** — Edit `src/i18n/locales/en.json` and `pt.json`: nav, hero, about, experience (including experiences array), projects (including list), skills labels, contact, footer, a11y.
3. **Styling** — Tailwind in components; accent in `src/index.css` (`--accent`).
4. **Sections** — Add/remove in `App.tsx`, `src/hooks/useActiveSection.ts` (SECTION_IDS), and `src/components/Navbar.tsx` (NAV_IDS).

## License

Private / All rights reserved.
