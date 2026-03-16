import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Section } from '@/components/Section'

interface ExpItem {
  id: string
  role: string
  company: string
  period: string
  description: string
  tags: string[]
}

export function Experience() {
  const { t } = useTranslation()
  const experiences = t('experience.experiences', { returnObjects: true }) as ExpItem[]

  return (
    <Section id="experience">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-xl font-semibold text-slate-900 dark:text-white sm:text-2xl md:text-3xl"
      >
        {t('experience.title')}
      </motion.h2>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 sm:text-base">
        {t('experience.subtitle')}
      </p>
      <ul className="mt-8 space-y-8 sm:mt-10 sm:space-y-10">
        {Array.isArray(experiences) &&
          experiences.map((exp: ExpItem, i: number) => (
            <motion.li
              key={exp.id}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative border-l-2 border-violet-500/50 pl-4 dark:border-violet-600/50 sm:pl-6 before:absolute before:left-[-5px] before:top-0 before:h-2 before:w-2 before:rounded-full before:bg-violet-500"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between">
                <h3 className="font-display text-base font-semibold text-slate-900 dark:text-white sm:text-lg">
                  {exp.role}
                </h3>
                <span className="text-xs text-slate-500 sm:text-sm">{exp.period}</span>
              </div>
              <p className="mt-0.5 text-sm font-medium text-violet-600 dark:text-violet-400 sm:text-base">
                {exp.company}
              </p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 sm:text-base">
                {exp.description}
              </p>
              {exp.tags?.length ? (
                <div className="mt-3 flex flex-wrap gap-1.5 sm:gap-2">
                  {exp.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-200 px-2.5 py-0.5 text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}
            </motion.li>
          ))}
      </ul>
    </Section>
  )
}
