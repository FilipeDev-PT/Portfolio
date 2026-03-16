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
    role: 'Senior Developer',
    company: 'Company Name',
    period: '2022 – Present',
    description: 'Leading features and improvements for web products. Working with React, TypeScript, and modern tooling. Collaborating with design and product to deliver accessible, performant UIs.',
    tags: ['React', 'TypeScript', 'Node.js'],
  },
  {
    id: '2',
    role: 'Full Stack Developer',
    company: 'Previous Company',
    period: '2020 – 2022',
    description: 'Built and maintained customer-facing and internal applications. Contributed to APIs, databases, and front-end interfaces.',
    tags: ['JavaScript', 'Python', 'PostgreSQL'],
  },
  {
    id: '3',
    role: 'Junior Developer',
    company: 'First Company',
    period: '2018 – 2020',
    description: 'Started my career building small features and fixing bugs. Learned best practices in version control, code review, and teamwork.',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
]

export const projects: Project[] = [
  {
    id: '1',
    title: 'Project Alpha',
    description: 'A web app that helps users manage tasks and collaborate. Built with React and a REST API.',
    href: 'https://example.com',
    repo: 'https://github.com/you/alpha',
    tags: ['React', 'TypeScript', 'Node.js'],
  },
  {
    id: '2',
    title: 'Project Beta',
    description: 'Dashboard for analytics and reporting. Real-time data and responsive layout.',
    href: 'https://example.com',
    tags: ['React', 'Tailwind', 'REST'],
  },
  {
    id: '3',
    title: 'Project Gamma',
    description: 'Open-source CLI tool for local development workflows. Used by several teams internally.',
    repo: 'https://github.com/you/gamma',
    tags: ['Node.js', 'TypeScript', 'CLI'],
  },
]

export const skills: Skill[] = [
  { name: 'React', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'JavaScript', category: 'frontend' },
  { name: 'HTML & CSS', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'REST APIs', category: 'backend' },
  { name: 'Git', category: 'tools' },
  { name: 'Vite', category: 'tools' },
  { name: 'Figma', category: 'tools' },
]
