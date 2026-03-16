# Análise do projeto — Portfolio Pessoal

Análise feita para verificar conformidade com boas práticas e padrões. Ajustes aplicados onde necessário.

---

## 1. Estrutura e arquitetura

| Item | Estado | Notas |
|------|--------|--------|
| Estrutura de pastas | ✅ | `components/`, `sections/`, `hooks/`, `data/`, `types/`, `i18n/` — separação clara por responsabilidade |
| Path alias `@/` | ✅ | Configurado em `vite.config.ts` e `tsconfig.app.json` |
| Single-page com secções | ✅ | Navegação por âncoras (`#about`, `#projects`, etc.) e scroll suave |
| Dados vs. UI | ✅ | Conteúdo traduzível em `i18n/locales`; `data/content.ts` só para `site` (nome, email, links) e lista de `skills` |

---

## 2. Dependências (package.json)

| Pacote | Uso | Ação |
|--------|-----|------|
| react, react-dom | ✅ | Core |
| framer-motion | ✅ | Animações (Hero, secções, menu mobile) |
| i18next, react-i18next | ✅ | i18n EN/PT |
| ~~next-themes~~ | ❌ | Removido — lógica de tema foi retirada |
| ~~react-router-dom~~ | ❌ | Removido — SPA com âncoras, sem rotas |
| Vite, TypeScript, Tailwind, ESLint, etc. | ✅ | Build e tooling |

Nenhuma dependência órfã restante.

---

## 3. Configuração

- **Vite:** plugin React, alias `@` → `src/`. ✅
- **TypeScript:** `strict`, paths, ESNext. ✅
- **Tailwind:** `content` correto, `darkMode: 'class'` (mantido; html usa `class="dark"`). ✅
- **PostCSS:** tailwindcss + autoprefixer. ✅
- **ESLint:** recommended + React Hooks + React Refresh. ✅

---

## 4. HTML e acessibilidade

- **index.html**
  - `lang="en"` no `<html>`. ✅
  - `class="dark"` no `<html>` para tema escuro fixo. ✅ (corrigido se estivesse ausente)
  - Meta viewport, charset, title, description. ✅
  - Sem script de tema (removido). ✅

- **Acessibilidade**
  - Navbar: `aria-label="Main navigation"`, `aria-expanded` e `aria-label` no botão do menu mobile. ✅
  - LanguageSwitcher: `role="group"`, `aria-label={t('a11y.language')}`. ✅
  - Botões de navegação e links com área de toque adequada (ex.: `min-h-[44px]` onde aplicável). ✅
  - SVGs decorativos com `aria-hidden`. ✅

---

## 5. i18n (react-i18next)

- **Config:** namespace `translation`, recursos `en` e `pt` com estrutura correta. ✅
- **Persistência:** idioma em `localStorage` (`portfolio-lang`). ✅
- **Chave morta:** `a11y.themeToggle` removida dos locales após remoção do botão de tema. ✅
- **Uso:** `useTranslation()` e `t()` nas secções e na Navbar; listas (experiences, projects) via `returnObjects: true`. ✅

---

## 6. Componentes

- **Navbar**
  - Navegação por secções, menu mobile com AnimatePresence, destaque da secção ativa (`useActiveSection`). ✅
  - Sem referências a tema. ✅

- **Section**
  - Wrapper com `id`, `scroll-mt-*`, padding responsivo e container `max-w-5xl`. ✅

- **LanguageSwitcher**
  - EN/PT com estado ativo visível e estilos para tema escuro. ✅

---

## 7. Secções e conteúdo

- **Hero:** `t('hero.*')`, `site.name` de `content.ts`. ✅
- **About:** `t('about.*')`. ✅
- **Experience:** `t('experience.experiences', { returnObjects: true })` + tipagem local `ExpItem`. ✅
- **Projects:** `t('projects.list', { returnObjects: true })` + tipagem local `ProjectItem`. ✅
- **Skills:** categorias via `t('skills.*')`, lista de skills de `content.ts` (nomes não traduzidos). ✅
- **Contact:** `t('contact.*')`, links de `site` em `content.ts`. ✅

---

## 8. Estilos e tema

- **Tema único:** site apenas em modo escuro; sem contexto nem botão de tema. ✅
- **index.css:** fundo `#020617` no `html`, Tailwind directives, variáveis `--accent` / `--accent-muted`. ✅
- **Componentes:** uso de `dark:` no Tailwind; como `<html>` tem `class="dark"`, os estilos escuros aplicam-se. Variantes de modo claro continuam no markup mas não são ativadas (opcional remover no futuro para reduzir CSS). ✅

---

## 9. Hooks e tipos

- **useActiveSection:** IntersectionObserver, array `SECTION_IDS` alinhado com as secções. ✅
- **types/index.ts:** `Experience`, `Project`, `Skill`, `SectionId` exportados e usados. ✅

---

## 10. Boas práticas gerais

- **React:** componentes funcionais, hooks, sem prop drilling (i18n e dados via imports/hooks). ✅
- **TypeScript:** interfaces para props e dados i18n (ex.: `ExpItem`, `ProjectItem`). ✅
- **Responsividade:** breakpoints Tailwind (sm, md, lg), menu mobile, tap targets. ✅
- **Performance:** Framer Motion com `viewport={{ once: true }}` onde faz sentido. ✅
- **Conteúdo:** texto e listas traduzíveis centralizados nos JSON de locale; apenas `site` e lista de skills em `content.ts`. ✅

---

## 11. Ajustes realizados nesta análise

1. **package.json:** removidas dependências não utilizadas (`next-themes`, `react-router-dom`).
2. **index.html:** garantido `class="dark"` em `<html>` para o tema escuro.
3. **i18n:** removida a chave `a11y.themeToggle` de `en.json` e `pt.json`.

---

## 12. Sugestões opcioniais (não aplicadas)

- **README:** atualizar para referir i18n (EN/PT) e que experiências/projetos vêm dos ficheiros em `src/i18n/locales/`.
- **Tailwind:** remover `darkMode: 'class'` se no futuro se simplificarem os estilos apenas para escuro (sem variantes `dark:`).
- **Limpeza de classes:** remover variantes de modo claro (ex.: `bg-slate-50`, `text-slate-700`) dos componentes se quiser menos CSS e markup mais simples.

---

## Conclusão

O projeto está alinhado com boas práticas de estrutura, TypeScript, i18n, acessibilidade e configuração. As únicas correções necessárias (dependências não usadas, `class="dark"` no HTML e chave i18n morta) foram aplicadas. O restante está dentro do padrão esperado para um portfolio single-page em React + Vite.
