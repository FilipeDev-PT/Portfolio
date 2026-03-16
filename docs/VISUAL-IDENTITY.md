# Identidade Visual — Portfolio Filipe Cristovam

**Documento de referência da identidade visual** do projeto. Todas as decisões de cor, tipografia, espaçamento e componentes devem seguir este guia para manter consistência e reconhecimento de marca.

---

## 1. Visão geral

- **Nome da marca:** Filipe Cristovam (portfolio pessoal)
- **Tom:** Profissional, limpo, técnico, acessível
- **Tema:** Escuro fixo (dark-only)
- **Palavras-chave:** Clareza, desempenho, confiança, modernidade

---

## 2. Paleta de cores

### 2.1 Cores principais

| Nome           | Uso                | Valor (hex)   | Tailwind / CSS        |
|----------------|--------------------|---------------|------------------------|
| **Background** | Fundo da página    | `#020617`     | `slate-950`            |
| **Surface**    | Cards, painéis     | —             | `slate-900/50`         |
| **Surface hover** | Cards ao hover  | —             | `slate-800/50`         |
| **Border**     | Contornos          | —             | `white/10`, `slate-800`|
| **Text primary**  | Títulos, nome  | `#ffffff`     | `white`                |
| **Text secondary**| Corpo, links    | —             | `slate-300`            |
| **Text muted** | Subtítulos, meta   | —             | `slate-400`, `slate-500`|
| **Accent**     | Destaque, CTA, ativo | `#8b5cf6`   | `violet-500` / `var(--accent)` |
| **Accent light** | Tagline, labels | —           | `violet-400`           |
| **Accent hover** | Botões, links   | —             | `violet-500`           |

### 2.2 Variáveis CSS (obrigatórias)

```css
:root {
  --accent: #8b5cf6;
  --accent-muted: rgba(139, 92, 246, 0.15);
}
```

- **Uso de `--accent`:** quando a cor de destaque precisar ser única no projeto (ex.: Tailwind `accent` custom).
- **Uso de `--accent-muted`:** fundos suaves de destaque (opcional).

### 2.3 Regras de uso

- Fundo global sempre escuro (`#020617`).
- Texto principal em branco ou `slate-300`; nunca texto claro sobre fundo escuro com contraste &lt; 4.5:1.
- Accent (violeta) apenas para: CTAs principais, link ativo na navegação, labels de secção (ex.: categorias em Skills), ícone/timeline em Experience.
- Bordes discretas: `border-white/10` ou `slate-800` para não competir com o conteúdo.

---

## 3. Tipografia

### 3.1 Famílias

| Nome no projeto | Fonte      | Uso                    | Fallback        |
|------------------|------------|------------------------|-----------------|
| **Display**      | Outfit     | Títulos (h1, h2, h3)   | system-ui, sans-serif |
| **Sans**         | DM Sans    | Corpo, UI, navegação   | system-ui, sans-serif |

**Import (Google Fonts):**

```html
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Outfit:wght@400;500;600;700&display=swap" rel="stylesheet" />
```

### 3.2 Escala e pesos

| Elemento        | Fonte    | Tamanho (Tailwind)     | Peso   | Uso |
|-----------------|----------|-------------------------|--------|-----|
| Hero h1         | Display  | `text-3xl` → `lg:text-6xl` | Bold   | Nome |
| Section title   | Display  | `text-xl` → `md:text-3xl`  | Semibold | Títulos de secção |
| Card title      | Display  | `text-base` → `sm:text-lg` | Semibold | Títulos de cards |
| Category label  | Display  | `text-xs` → `sm:text-sm`   | Semibold, uppercase, tracking-wider | Skills |
| Body            | Sans     | `text-sm` → `sm:text-base` | Normal | Parágrafos |
| Small / meta    | Sans     | `text-xs` → `text-sm`      | Normal | Datas, tags |
| Nav / buttons   | Sans     | `text-sm`, `text-base`     | Medium / Semibold | Navegação, botões |

### 3.3 Regras

- Títulos de secção sempre com `font-display` (Outfit).
- Corpo e UI com fonte padrão (DM Sans via Tailwind).
- Evitar mais de dois pesos na mesma linha; hierarquia clara entre título e subtítulo.

---

## 4. Espaçamento e layout

### 4.1 Container

- **Largura máxima do conteúdo:** `max-w-5xl` (1024px).
- **Margem:** `mx-auto` para centralizar.
- **Padding horizontal:** `px-4` (mobile), `sm:px-6` (desktop).

### 4.2 Secções

- **Padding vertical:** `py-12` (mobile), `sm:py-16`, `md:py-24`.
- **Scroll margin (âncoras):** `scroll-mt-16` (mobile), `sm:scroll-mt-20`.
- **Conteúdo interno (ex.: About):** `max-w-2xl` quando o bloco for texto corrido.

### 4.3 Gaps e margens

- **Entre elementos relacionados:** `gap-2`, `gap-3`, `gap-4`, `gap-6`.
- **Entre secções visuais:** `mt-8`, `mt-10`; entre título e subtítulo: `mt-2`; entre bloco e parágrafo: `mt-4`.
- **Listas (Experience):** `space-y-8` a `space-y-10`.
- **Grids (Projects, Skills):** `gap-4` a `md:gap-8`.

### 4.4 Área de toque (acessibilidade)

- **Mínimo para botões e links clicáveis:** `min-h-[44px]` (44px).
- **Botões de ícone (menu, etc.):** `h-10 w-10` (40px) com área de toque adequada.

---

## 5. Superfícies e bordas

### 5.1 Cards e painéis

- **Borda:** `border border-slate-800`.
- **Fundo:** `bg-slate-900/50`.
- **Hover:** `hover:border-slate-700`, `hover:bg-slate-800/50`.
- **Sombra:** `shadow-sm` (opcional).
- **Border radius:** `rounded-xl` (cards), `rounded-2xl` (bloco Contact).

### 5.2 Tags e chips

- **Pill (Experience):** `rounded-full bg-slate-800 px-2.5 py-0.5 text-xs text-slate-300`.
- **Tag rectangular (Projects, Skills):** `rounded bg-slate-800 px-2 py-0.5 text-xs text-slate-300` ou `rounded-lg` para skills.

### 5.3 Navbar e header

- **Fundo:** `bg-slate-950/90` com `backdrop-blur-md`.
- **Borda inferior:** `border-b border-white/10`.

---

## 6. Componentes de interface

### 6.1 Botão primário (CTA)

- **Estilo:** `rounded-lg bg-violet-600 px-6 py-3 font-medium text-white`.
- **Hover:** `hover:bg-violet-500`.
- **Active:** `active:bg-violet-700`.
- **Focus:** `focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-slate-950`.
- **Altura mínima:** `min-h-[44px]`.

### 6.2 Botão secundário (outline)

- **Estilo:** `rounded-lg border border-slate-600 px-6 py-3 font-medium text-slate-300`.
- **Hover:** `hover:border-slate-500 hover:bg-slate-800/50`.
- **Focus:** `focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-950`.
- **Altura mínima:** `min-h-[44px]`.

### 6.3 Link de texto (inline)

- **Estilo:** `text-sm font-medium text-violet-400` (ou `violet-600` em contextos claros).
- **Hover:** `hover:underline`.
- **Focus:** anel de focus consistente com o restante da UI.

### 6.4 Language switcher

- **Container:** `rounded-lg border border-slate-600 bg-slate-800 p-0.5`, `role="group"`, `aria-label` de a11y.
- **Botão ativo:** `bg-violet-600 text-white` (ou `dark:bg-violet-500`).
- **Botão inativo:** `text-slate-400 hover:bg-slate-700`.
- **Botões:** `rounded-md`, `min-w-[2.25rem]`, `px-2 py-1.5`.

### 6.5 Ícones

- **Tamanho padrão:** `h-5 w-5` (20px).
- **Estilo:** `stroke="currentColor"`, `fill="none"`, `strokeWidth={2}`, traços arredondados.
- **Acessibilidade:** `aria-hidden` quando decorativos; botões com `aria-label` ou `aria-expanded` conforme o caso.

---

## 7. Motion e animação

### 7.1 Princípios

- Animações curtas e discretas; não atrasar a leitura.
- Entrada de secções com `once: true` para não repetir ao scroll.
- Stagger leve em listas (ex.: cards, itens de experiência).

### 7.2 Parâmetros (Framer Motion)

| Contexto        | initial           | animate / whileInView | transition      |
|-----------------|-------------------|------------------------|-----------------|
| Hero            | opacity 0, y 12–16| opacity 1, y 0         | duration 0.4, delay escalonado |
| Navbar          | y -80, opacity 0  | y 0, opacity 1         | duration 0.4    |
| Section title   | opacity 0, y 16   | opacity 1, y 0         | —               |
| Cards / list items | opacity 0, y 20 ou x -16 | opacity 1, y 0 ou x 0 | duration 0.4, delay i * 0.06–0.08 |
| Menu mobile     | opacity 0, height 0 | opacity 1, height auto | duration 0.2    |

### 7.3 Viewport (scroll)

- **Títulos de secção:** `viewport={{ once: true }}`.
- **Cards/listas:** `viewport={{ once: true, margin: '-40px' }}` ou `-80px` para disparar um pouco antes de entrar na viewport.

---

## 8. Ícones e SVG

- **Menu (hamburger):** 3 linhas horizontais, stroke 2, round caps.
- **Fechar (X):** duas linhas cruzadas, mesmo estilo.
- **Estilo único:** outline only, sem preenchimento; espessura de traço consistente.

*(Não há biblioteca de ícones externa; SVGs inline com `currentColor` para herdar a cor do texto.)*

---

## 9. Responsividade

### 9.1 Breakpoints (Tailwind)

- **sm:** 640px
- **md:** 768px
- **lg:** 1024px

### 9.2 Comportamento

- **Navbar:** links em linha a partir de `md`; abaixo disso, menu hamburger e painel expansível.
- **Hero:** título de `text-3xl` a `lg:text-6xl`; botões em coluna no mobile, linha a partir de `sm`.
- **Secções:** padding e gaps aumentam com o breakpoint (ex.: `py-12` → `md:py-24`).
- **Projects:** 1 coluna → `sm:grid-cols-2` → `lg:grid-cols-3`.
- **Skills:** 1 coluna → `sm:grid-cols-2`.

---

## 10. Acessibilidade

- **Contraste:** texto claro sobre fundo escuro; accent (violeta) em superfícies escuras mantém legibilidade.
- **Focus:** todos os controles com `focus:ring-2` e `focus:ring-offset-2` (offset escuro: `focus:ring-offset-slate-950`).
- **Navegação por teclado:** botões e links focáveis; ordem lógica.
- **ARIA:** `aria-label` em navegação principal, botão do menu (abrir/fechar), grupo de idioma; `aria-expanded` no menu mobile; `aria-hidden` em SVGs decorativos.
- **Semântica:** `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>` onde aplicável.

---

## 11. Resumo de tokens (referência rápida)

```
Background:     #020617 (slate-950)
Surface:       slate-900/50
Border:        white/10, slate-800
Text:          white, slate-300, slate-400, slate-500
Accent:        #8b5cf6 (violet-500)
Accent hover:  violet-500

Font display:  Outfit (400, 500, 600, 700)
Font body:     DM Sans (400, 500, 600, 700)

Container:     max-w-5xl, px-4 sm:px-6
Section py:    py-12 sm:py-16 md:py-24
Radius:        rounded-lg, rounded-xl, rounded-2xl
Touch target:  min-h-[44px]
```

---

## 12. Ficheiros de implementação

| Recurso           | Ficheiro(s) |
|-------------------|-------------|
| Variáveis de cor  | `src/index.css` |
| Tailwind theme    | `tailwind.config.js` |
| Fontes            | `index.html` (link Google Fonts) |
| Componentes       | `src/components/*`, `src/sections/*` |

Qualquer alteração à identidade visual deve ser refletida neste documento e, quando possível, nos tokens (CSS e Tailwind) para manter uma única fonte de verdade.
