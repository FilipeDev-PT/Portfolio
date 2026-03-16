import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Section } from '@/components/Section'

export function About() {
  const { t } = useTranslation()
  return (
    <Section id="about">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl"
      >
        <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white sm:text-2xl md:text-3xl">
          {t('about.title')}
        </h2>
        <p className="mt-2 text-base font-medium text-slate-700 dark:text-slate-200 sm:text-lg">
          {t('about.heading')}
        </p>
        <p className="mt-4 text-sm text-slate-600 dark:text-slate-400 sm:text-base">{t('about.intro')}</p>
        <p className="mt-4 text-sm text-slate-600 dark:text-slate-400 sm:text-base">{t('about.bio')}</p>
      </motion.div>
    </Section>
  )
}
