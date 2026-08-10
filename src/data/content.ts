import type { Experience, Project, Skill } from '@/types'

export const site = {
  name: 'Filipe Cristovam',
  tagline: 'Developer & problem solver',
  email: 'hello@example.com',
  linkedIn: 'https://linkedin.com/in/yourprofile',
  github: 'https://github.com/yourusername',
} as const

export const about = {
  title: 'About me',
  heading: 'Hi, I\'m Filipe',
  intro: 'I\'m a developer focused on building clear, maintainable solutions. I care about user experience, performance, and clean architecture.',
  bio: 'I\'ve been working across the stack — from front-end interfaces to backend services — and I enjoy turning ideas into reliable products. When I\'m not coding, I like to keep learning and exploring new tools and practices.',
} as const

export const experiences: Experience[] = [
  {
    id: '1',
    role: 'Fullstack Developer',
    company: 'Vize Solutions',
    period: 'May 2025 - Aug 2026',
    description: 'Developed and maintained web applications using React and C#',
    tags: ['React', 'TypeScript', 'C#', 'SQL'],
  },
  {
    id: '2',
    role: 'Engineering Assistant',
    company: 'FGR Incorporações SA',
    period: 'Aug 2023 - Feb 2026',
    description: 'Developed and maintained web applications using React and C#',
    tags: ['React', 'TypeScript', 'C#', 'SQL'],
  },
]

export const projects: Project[] = [
  {
    id: '1',
    slug: 'vize-conecta',
    title: 'Vize Conecta',
    description:
      'A construction management SuperApp that centralizes workflows, communication, and operational processes for engineering teams.',
    details: `
 
  ## 📋 Visão Geral
  
  O **Vize Conecta** é um SuperApp desenvolvido para o setor da construção civil, projetado para centralizar processos operacionais, comunicação e gestão em uma única plataforma.

  ---
  
  ## 💼 Minha Atuação
  
  Atuei como **Desenvolvedor Full Stack**, participando da evolução contínua da plataforma, desde a implementação de novas funcionalidades até a integração entre frontend, backend e serviços externos.
  
  ### Principais responsabilidades
  
  - Desenvolvimento de interfaces modernas utilizando **React** e **TypeScript**
  - Desenvolvimento de APIs REST com **C#** e **ASP.NET Core**
  - Integração entre frontend, backend e banco de dados
  - Consumo de APIs internas e externas
  - Correção de bugs e refatoração
  - Participação em cerimônias **Scrum**
  - Aplicação de **Clean Code** e **SOLID**
  
  ---
  
  ## ✅ Engenharia de Qualidade
  
  Além do desenvolvimento, participei das atividades de QA.
  
  ### Atividades
  
  - Testes funcionais
  - Testes de API
  - Testes de integração
  - Testes de regressão
  - Validação de requisitos
  - Shift Left
  
  ---
  
  ## 🚀 Resultados
  
  - Evolução contínua do SuperApp
  - Interfaces modernas
  - Integrações entre diversos serviços
  - Maior qualidade nas entregas
  
  ---
  
  ## 🛠️ Tecnologias
  
  ### **Frontend:**
  
  - React
  - TypeScript
  - JavaScript
  
  ### **Backend:**
  
  - C#
  - ASP.NET Core
  
  ### **Banco de Dados:**
  
  - SQL Server

  ### **Qualidade:**

- Testes Manuais
- Testes Funcionais
- Testes de API
- Testes de Integração
- Testes de Regressão
- Validação de Requisitos
- Shift Left

### **Boas Práticas:**

- Clean Code
- SOLID
- CQRS
- Arquitetura em Camadas
- Domain-Driven Design (DDD)
- Git
- Scrum
  `,
    screenshots: [
      'projects/vize-conecta/screen-1.png',
      'projects/vize-conecta/screen-2.png',
      'projects/vize-conecta/screen-3.png',
    ],
    tags: ['React', 'TypeScript', 'Tailwind', 'C#', 'SQL'],
  },
  {
    id: '2',
    slug: 'vize-chat',
    title: 'Vize Chat',
    description: 'An AI-powered omnichannel platform that centralizes customer interactions across multiple channels, streamlining communication, automation, and support operations.',
    details:
      `
## 📋 Visão Geral

O **Vize Chat** é uma plataforma **Omnichannel** desenvolvida para centralizar e otimizar o atendimento ao cliente em diferentes canais de comunicação. A solução reúne conversas provenientes de canais como WhatsApp, chat web e outros meios digitais em uma única interface, permitindo que empresas gerenciem atendimentos, automatizem processos e ofereçam uma experiência mais eficiente e integrada aos seus clientes.

Além da centralização dos canais, a plataforma conta com recursos de automação, integrações com sistemas corporativos e funcionalidades apoiadas por Inteligência Artificial para aumentar a produtividade das equipes de atendimento e melhorar a experiência do usuário.

---

## 💼 Minha Atuação

Atuei como **Desenvolvedor Full Stack**, participando da evolução contínua da plataforma, implementando novas funcionalidades, integrações e melhorias tanto no frontend quanto no backend, sempre aplicando uma forte cultura de qualidade durante todo o ciclo de desenvolvimento.

### Principais responsabilidades

- Desenvolvimento de interfaces modernas, responsivas e reutilizáveis utilizando **React** e **TypeScript**.
- Implementação de novas funcionalidades voltadas para atendimento omnichannel, automação e experiência do usuário.
- Desenvolvimento e manutenção de **APIs REST** utilizando **C#** e **ASP.NET Core**.
- Integração entre frontend, backend e bancos de dados para garantir comunicação eficiente entre os módulos da plataforma.
- Consumo e integração de APIs de serviços internos, externos e plataformas de mensageria.
- Correção de bugs, refatoração de código e evolução contínua da aplicação.
- Colaboração com equipes de Produto, UX/UI e Backend durante levantamento de requisitos, refinamentos e planejamento das entregas.
- Participação ativa em cerimônias ágeis utilizando **Scrum**.
- Aplicação de boas práticas como **Clean Code**, **SOLID** e arquitetura em camadas para desenvolvimento de soluções escaláveis e de fácil manutenção.

---

## ✅ Engenharia de Qualidade

Além do desenvolvimento, participei ativamente das atividades relacionadas à qualidade do software, contribuindo para entregas mais confiáveis, estáveis e alinhadas às regras de negócio.

### Atividades de QA

- Validação de requisitos antes da implementação.
- Execução de testes funcionais.
- Testes de APIs REST.
- Testes de regressão antes das publicações.
- Testes de integração entre módulos.
- Identificação, documentação e acompanhamento da resolução de defeitos.
- Aplicação da abordagem **Shift Left**, promovendo qualidade desde as etapas iniciais do desenvolvimento.

---

## 🚀 Principais Resultados

- Evolução contínua da plataforma Omnichannel com implementação de novas funcionalidades.
- Desenvolvimento de interfaces modernas e intuitivas voltadas para operações de atendimento.
- Integração entre múltiplos serviços e APIs para comunicação em tempo real.
- Melhoria da estabilidade e confiabilidade da aplicação por meio da aplicação contínua de práticas de qualidade.
- Colaboração em todas as etapas do ciclo de desenvolvimento, desde o refinamento até a entrega em produção.

---

## 🛠️ Tecnologias Utilizadas

### **Frontend:**

- React
- TypeScript
- JavaScript

### **Backend:**

- C#
- ASP.NET Core
- REST APIs

### **Banco de Dados:**

- SQL Server

### **Qualidade:**

- Testes Manuais
- Testes Funcionais
- Testes de API
- Testes de Integração
- Testes de Regressão

### **Boas Práticas:**

- Clean Code
- SOLID
- Git
- Scrum
- Arquitetura em Camadas
`,
    screenshots: [
      'projects/vize-chat/screen-1.svg',
      'projects/vize-chat/screen-2.svg',
      'projects/vize-chat/screen-3.svg',
    ],
    tags: ['React', 'TypeScript', 'Tailwind', 'C#', 'SQL'],
  },
  {
    id: '3',
    slug: 'obrify',
    title: 'Project Obrify',
    description: 'A field management platform for construction projects, designed to streamline on-site execution, progress tracking, and team collaboration.',
    details:
    `
## 📋 Visão Geral

O **Obrify** é uma plataforma web para gestão de obras, desenvolvida para centralizar processos operacionais da construção civil em um ambiente multi-tenant. A solução reúne funcionalidades de planejamento, acompanhamento de execução, medição, controle de custos, qualidade, produtividade e indicadores estratégicos, proporcionando maior visibilidade e controle sobre todas as etapas da obra.

---

## 💼 Minha Atuação

Atuei como **Desenvolvedor Full Stack**, sendo responsável pelo desenvolvimento e evolução contínua da plataforma, desde a implementação de novas funcionalidades até a integração entre frontend, backend, banco de dados e sistemas externos, sempre aplicando boas práticas de arquitetura e qualidade de software.

### Principais responsabilidades

- Desenvolvimento de interfaces modernas, responsivas e reutilizáveis utilizando **React**, **TypeScript** e **Tailwind CSS**.
- Desenvolvimento e manutenção de **APIs REST** utilizando **C#** e **ASP.NET Core 8**.
- Implementação de arquitetura em camadas (**Domain**, **Application**, **Infrastructure** e **API**), aplicando padrões como **CQRS** e **FluentValidation**.
- Integração entre frontend e backend utilizando **TanStack React Query**, autenticação **JWT**, **MFA** e controle de permissões baseado em papéis.
- Desenvolvimento de módulos para gestão de obras, programação semanal, acompanhamento de execução, mapas sinópticos, medições, custos, mão de obra, materiais, qualidade, ocorrências e dashboards.
- Integração com sistemas **ERP** e implementação de processos assíncronos utilizando **Background Workers**.
- Correção de bugs, refatoração de código e evolução contínua da plataforma.
- Colaboração com equipes de Produto e Design durante levantamento de requisitos, refinamentos e planejamento das entregas.
- Participação ativa em cerimônias ágeis utilizando **Scrum**.
- Aplicação de boas práticas como **Clean Code**, **SOLID** e arquitetura orientada a domínio para desenvolvimento de soluções escaláveis e de fácil manutenção.

---

## ✅ Engenharia de Qualidade

Além do desenvolvimento, participei ativamente das atividades relacionadas à qualidade do software, contribuindo para entregas mais confiáveis, estáveis e alinhadas às regras de negócio.

### Atividades de QA

- Validação de requisitos funcionais antes da implementação.
- Execução de testes funcionais em módulos de obras, planejamento, medições, custos e contratos.
- Testes de APIs REST utilizando **Swagger**, validação de autenticação, autorização e regras de negócio.
- Testes de integração entre frontend, backend e banco de dados.
- Testes de regressão em funcionalidades críticas da plataforma.
- Identificação, documentação e acompanhamento da resolução de defeitos.
- Aplicação da abordagem **Shift Left**, promovendo qualidade desde as etapas iniciais do desenvolvimento.

---

## 🚀 Principais Resultados

- Desenvolvimento contínuo de uma plataforma completa para gestão de obras.
- Implementação de interfaces responsivas com foco em usabilidade, feedback visual e experiência do usuário.
- Criação de programação semanal interativa com calendário, feriados e previsão de atrasos.
- Desenvolvimento de acompanhamento de execução por meio de mapas sinópticos, timeline e gestão de anexos.
- Construção de dashboards operacionais e executivos para análise de produtividade, custos, qualidade e indicadores estratégicos.
- Integração com ERP por meio de sincronização assíncrona utilizando Background Workers.
- Aplicação de boas práticas de arquitetura e qualidade, aumentando a confiabilidade, escalabilidade e manutenibilidade da aplicação.

---

## 🛠️ Tecnologias Utilizadas

### **Frontend:**

- React 19
- TypeScript
- Vite
- Tailwind CSS
- TanStack React Query
- React Router
- React Hook Form
- Axios
- Recharts
- i18next

### **Backend:**

- C#
- ASP.NET Core 8
- Entity Framework Core
- OpenIddict
- FluentValidation
- Polly

### **Banco de Dados:**

- SQL Server

### **Qualidade:**

- Testes Manuais
- Testes Funcionais
- Testes de API
- Testes de Integração
- Testes de Regressão
- Validação de Requisitos
- Shift Left

### **Boas Práticas:**

- Clean Code
- SOLID
- CQRS
- Arquitetura em Camadas
- Domain-Driven Design (DDD)
- Git
- Scrum
`,
    screenshots: [
      'projects/obrify/screen-1-o.png',
      'projects/obrify/screen-2-o.png',
      'projects/obrify/screen-3-o.png',
    ],
    repo: 'https://github.com/you/gamma',
    tags: ['React', 'TypeScript', 'Tailwind', 'C#', 'SQL'],
  },
  {
    id: '4',
    slug: 'app-controle',
    title: 'Project App Controle',
    description: 'A construction management platform that centralizes project tracking, contract management, and operational workflows through modern web technologies and data-driven insights.',
    details:
      'App Controle provides a centralized view of construction projects, contracts, and operational indicators. It was designed to give stakeholders clear visibility into project health and streamline day-to-day management tasks.',
    screenshots: [
      'projects/app-controle/screen-1.svg',
      'projects/app-controle/screen-2.svg',
    ],
    repo: 'https://github.com/you/gamma',
    tags: ['React', 'JavaScript', 'C#', 'SQL'],
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export const skills: Skill[] = [
  { name: 'React', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'JavaScript', category: 'frontend' },
  { name: 'HTML & CSS', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'C#', category: 'backend' },
  { name: 'SQL', category: 'backend' },
  { name: 'REST APIs', category: 'backend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'Playwright', category: 'QA' },
  { name: 'Postman', category: 'QA' },
  { name: 'Testes Manuais', category: 'QA' },
  { name: 'Testes Automatizados', category: 'QA' },
  { name: 'Git', category: 'tools' },
  { name: 'Vite', category: 'tools' },
  { name: 'Figma', category: 'tools' },
  { name: 'Pencil', category: 'tools' },
]
