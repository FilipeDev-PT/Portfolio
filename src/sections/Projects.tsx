import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Section } from '@/components/Section'

interface ProjectItem {
  id: string
  title: string
  description: string
  href?: string
  repo?: string
  tags: string[]
}

export function Projects() {
  const { t } = useTranslation()
  const projects = t('projects.list', { returnObjects: true }) as ProjectItem[]

  return (
    <Section id="projects">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-xl font-semibold text-slate-900 dark:text-white sm:text-2xl md:text-3xl"
      >
        {t('projects.title')}
      </motion.h2>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 sm:text-base">
        {t('projects.subtitle')}
      </p>
      <ul className="mt-8 grid gap-4 sm:mt-10 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.isArray(projects) &&
          projects.map((project: ProjectItem, i: number) => (
            <motion.li
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-slate-300 hover:shadow dark:border-slate-800 dark:bg-slate-900/50 dark:hover:border-slate-700 dark:hover:bg-slate-800/50 sm:p-5">
                <h3 className="font-display text-base font-semibold text-slate-900 dark:text-white sm:text-lg">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-xs text-slate-600 dark:text-slate-400 sm:text-sm">
                  {project.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5 sm:mt-4 sm:gap-2">
                  {project.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="rounded bg-slate-200 px-2 py-0.5 text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-3 flex flex-wrap gap-2 sm:mt-4 sm:gap-3">
                  {project.href && (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[44px] inline-flex items-center rounded text-sm font-medium text-violet-600 hover:underline focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 dark:text-violet-400 dark:focus:ring-offset-slate-900"
                    >
                      {t('projects.liveDemo')}
                    </a>
                  )}
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[44px] inline-flex items-center rounded text-sm font-medium text-violet-600 hover:underline focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 dark:text-violet-400 dark:focus:ring-offset-slate-900"
                    >
                      {t('projects.repository')}
                    </a>
                  )}
                </div>
              </article>
            </motion.li>
          ))}
      </ul>
    </Section>
  )
}
