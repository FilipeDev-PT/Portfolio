export interface Experience {
  id: string
  role: string
  company: string
  period: string
  description: string
  tags?: string[]
}

export interface Project {
  id: string
  title: string
  description: string
  href?: string
  repo?: string
  image?: string
  tags: string[]
}

export interface Skill {
  name: string
  category: 'frontend' | 'backend' | 'tools' | 'other'
}

export type SectionId = 'hero' | 'about' | 'experience' | 'projects' | 'skills' | 'contact'
