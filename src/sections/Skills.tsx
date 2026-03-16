import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Section } from '@/components/Section'
import { skills } from '@/data/content'

const CATEGORY_KEYS = ['frontend', 'backend', 'tools', 'other'] as const

export function Skills() {
  const { t } = useTranslation()
  const byCategory = skills.reduce<Record<string, typeof skills>>((acc, skill) => {
    const cat = skill.category
    if (!acc[cat]) acc[cat] = []
    acc[cat].push(skill)
    return acc
  }, {})

  return (
    <Section id="skills">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-xl font-semibold text-slate-900 dark:text-white sm:text-2xl md:text-3xl"
      >
        {t('skills.title')}
      </motion.h2>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 sm:text-base">
        {t('skills.subtitle')}
      </p>
      <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-6 md:gap-8 sm:grid-cols-2">
        {CATEGORY_KEYS.map((cat, i) => {
          const items = byCategory[cat]
          if (!items?.length) return null
          return (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/50 sm:p-5"
            >
              <h3 className="font-display text-xs font-semibold uppercase tracking-wider text-violet-600 dark:text-violet-400 sm:text-sm">
                {t(`skills.${cat}`)}
              </h3>
              <ul className="mt-2 flex flex-wrap gap-1.5 sm:mt-3 sm:gap-2">
                {items.map((s) => (
                  <li key={s.name}>
                    <span className="rounded-lg bg-slate-200 px-2.5 py-1 text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-300 sm:px-3 sm:py-1.5 sm:text-sm">
                      {s.name}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}
