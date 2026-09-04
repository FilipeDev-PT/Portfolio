# QA — Portfólio Filipe Cristovam

Tarefas curtas para validar se o site cumpre o trabalho de um portfolio: clareza, prova, contato e acesso.

## Tarefas de usabilidade

### A. Primeira impressão

**Instrução:** Depois de observar a página brevemente, quem é esta pessoa e o que ela faz?

**Esperado:** Filipe Cristovam, desenvolvedor full-stack. Constrói plataformas React e C# para operações (gestão de obras, atendimento omnichannel, ferramentas internas).

### B. Projeto relevante

**Instrução:** Encontre um trabalho que demonstre bem as capacidades desta pessoa.

**Esperado:** Chegar a Obrify ou Vize Conecta (screenshots reais, papel e resultado) sem passar por seções secundárias primeiro.

### C. Case

**Instrução:** Explique o problema, o papel desta pessoa e o resultado.

**Esperado:** Abrir um case. Conseguir citar contexto, papel (full-stack) e resultado a partir do texto existente — sem métricas inventadas. App Controle tem menos detalhe; isso é intencional.

### D. Contato

**Instrução:** Você deseja conversar com esta pessoa sobre um trabalho. Faça o que faria.

**Esperado:** Usar o formulário (nome, e-mail, mensagem) ou `filipe.dev.contact@gmail.com` / LinkedIn. O envio abre o cliente de e-mail; não há backend.

### E. Acessibilidade

**Instrução:** Navegue pelos elementos principais somente com teclado; depois avalie o site com preferência de reduced motion.

**Esperado:** Skip link visível no primeiro Tab; ordem header → main → footer; anel de foco visível; Sheet fecha com Escape e retorna o foco; reduced motion remove parallax e deslocamentos grandes, sem esconder conteúdo.

## Métricas a acompanhar

Não há analytics instalado. `track()` emite eventos via `gtag` **se** o GA4 for adicionado mais tarde. Eventos: `case_open`, `project_view`, `contact_cta_click`, `contact_submit`, `email_click`, `linkedin_click`. Não gravar o corpo do formulário.

| Métrica | Como |
|---|---|
| Tempo médio de engagement | GA4 / Search Console, depois de existir medição |
| Taxa de conversão de contato | `contact_submit` + `email_click` / sessões |
| Engagement de projetos | `case_open` + `project_view` |
| Cliques no CTA de contato | `contact_cta_click` |
| Conclusão das tarefas A–E | Notas deste guia (pass / fail + obstáculos) |
| Erros observados | Console, 404 de rotas, falhas de formulário |
| Core Web Vitals | LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1 (CrUX / Lighthouse p75) |
| NPS | Apenas complementar, depois de conversas reais |

## Limitações conhecidas

- Sem servidor de e-mail: o formulário usa `mailto:`.
- App Controle e Vize Chat têm menos prova visual (SVG) do que Vize Conecta e Obrify (PNG).
- Experiências em Vize e FGR compartilham a mesma descrição factual — não foi inventado detalhe extra.
- Sem Playwright/Cypress neste repositório.
