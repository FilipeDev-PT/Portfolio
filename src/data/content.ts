import type { Experience, Project, Skill } from '@/types'

export const site = {
  name: 'Filipe Cristovam',
  email: 'filipe.dev.contact@gmail.com',
  linkedIn: 'https://www.linkedin.com/in/filipe-cristovam-6b5b7031a/',
  github: 'https://github.com/FilipeDev-PT',
} as const

export const experiences: Experience[] = [
  {
    id: 'vize',
    company: 'Vize Solutions',
    tags: ['React', 'TypeScript', 'C#', 'SQL'],
  },
  {
    id: 'fgr',
    company: 'FGR Incorporações SA',
    tags: ['React', 'TypeScript', 'C#', 'SQL'],
  },
]

export const projects: Project[] = [
  {
    id: 'vize-conecta',
    slug: 'vize-conecta',
    title: 'Vize Conecta',
    layout: 'featured',
    screenshots: [
      'projects/vize-conecta/screen-1.png',
      'projects/vize-conecta/screen-2.png',
      'projects/vize-conecta/screen-3.png',
    ],
    tags: ['React', 'TypeScript', 'C#', 'SQL'],
  },
  {
    id: 'obrify',
    slug: 'obrify',
    title: 'Obrify',
    layout: 'inverted',
    screenshots: [
      'projects/obrify/screen-1-o.png',
      'projects/obrify/screen-2-o.png',
      'projects/obrify/screen-3-o.png',
    ],
    tags: ['React', 'TypeScript', 'C#', 'SQL'],
  },
  {
    id: 'vize-chat',
    slug: 'vize-chat',
    title: 'Vize Chat',
    layout: 'compact',
    screenshots: [
      'projects/vize-chat/screen-1.svg',
      'projects/vize-chat/screen-2.svg',
      'projects/vize-chat/screen-3.svg',
    ],
    tags: ['React', 'TypeScript', 'C#', 'SQL'],
  },
  {
    id: 'app-controle',
    slug: 'app-controle',
    title: 'App Controle',
    layout: 'compact',
    screenshots: [
      'projects/app-controle/screen-1.svg',
      'projects/app-controle/screen-2.svg',
    ],
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
