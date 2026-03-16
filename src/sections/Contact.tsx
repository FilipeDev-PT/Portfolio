import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Section } from '@/components/Section'
import { site } from '@/data/content'

export function Contact() {
  const { t } = useTranslation()
  return (
    <Section id="contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900/50 sm:p-8 md:p-12"
      >
        <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white sm:text-2xl md:text-3xl">
          {t('contact.title')}
        </h2>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 sm:text-base">
          {t('contact.subtitle')}
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4 md:gap-6">
          <a
            href={`mailto:${site.email}`}
            className="min-h-[44px] rounded-lg bg-violet-600 px-6 py-3 font-medium text-white transition hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-white active:bg-violet-700 dark:focus:ring-offset-slate-900"
          >
            {t('contact.emailMe')}
          </a>
          <a
            href={site.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[44px] rounded-lg border border-slate-300 px-6 py-3 font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-white dark:border-slate-600 dark:text-slate-300 dark:hover:border-slate-500 dark:hover:bg-slate-800/50 dark:focus:ring-offset-slate-900"
          >
            LinkedIn
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[44px] rounded-lg border border-slate-300 px-6 py-3 font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-white dark:border-slate-600 dark:text-slate-300 dark:hover:border-slate-500 dark:hover:bg-slate-800/50 dark:focus:ring-offset-slate-900"
          >
            GitHub
          </a>
        </div>
      </motion.div>
    </Section>
  )
}
