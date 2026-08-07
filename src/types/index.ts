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
  slug: string
  title: string
  description: string
  details: string
  screenshots: string[]
  repo?: string
  liveUrl?: string
  tags: string[]
}

export interface Skill {
  name: string
  category: 'frontend' | 'backend' | 'tools' | 'QA' | 'other'
}

export type SectionId = 'hero' | 'about' | 'experience' | 'projects' | 'skills' | 'contact'
