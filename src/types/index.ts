export interface Experience {
  id: string
  company: string
  tags?: string[]
}

export type ProjectLayout = 'featured' | 'inverted' | 'compact'

export interface Project {
  id: string
  slug: string
  title: string
  layout: ProjectLayout
  screenshots: string[]
  tags: string[]
  liveUrl?: string
  repo?: string
}

export interface Skill {
  name: string
  category: 'frontend' | 'backend' | 'tools' | 'QA' | 'other'
}

export type SectionId = 'hero' | 'about' | 'experience' | 'projects' | 'skills' | 'contact'
