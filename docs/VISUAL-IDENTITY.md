# Identidade Visual — Portfolio Filipe Cristovam

Fonte de verdade para cor, tipo, espaço e movimento após o redesign editorial.

## Direção

**Opção A — Marfim editorial.** Claro, tipográfico, com espaço negativo e números de case em serif. Feito para recrutadores e clientes, não para parecer um template SaaS escuro.

Motivos recorrentes (apenas estes):

1. Índices em Fraunces (`01`, `02`…)
2. Labels em monoespaco, uppercase, tracking largo

## Tokens (não usar HEX nos componentes)

Definidos em `src/index.css` e expostos pelo Tailwind:

| Token | HEX de origem | Uso |
|---|---|---|
| `background` | `#F7F4EE` | Página |
| `card` | `#FFFFFF` | Superfícies |
| `foreground` | `#161616` | Texto principal |
| `muted-foreground` | `#666159` | Corpo secundário, meta |
| `primary` | `#315CFF` | CTA, links |
| `secondary` / `accent` | `#C96A4A` | Índices, ênfase editorial |
| `border` | `#DDD7CC` | Filetes |

Secondary/accent não é texto pequeno: o contraste sobre o fundo é suficiente para números grandes e filetes, não para body 16px.

## Tipo

- **Geist Variable** — UI e corpo
- **Fraunces Variable** — H1, H2, títulos de projeto, índices

Hierarquia: `text-display` (H1), `text-h2` (H2), 1.25–1.75rem (H3), body ~1.0625rem / line-height 1.62.

## Motion

`MotionConfig reducedMotion="user"`. Reveals só em títulos de bloco e grupos de projetos. CTA hover/press em CSS (`.cta-motion`) com `prefers-reduced-motion`. Parallax só no índice decorativo do hero.

## Layout

Container `max-w-page` (72rem). Navbar sticky. Homepage: Hero → Trabalho → Experiência → Sobre (stack) → Contacto.
