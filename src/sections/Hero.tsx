import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { site } from '@/data/content'

export function Hero() {
  const { t } = useTranslation()
  return (
    <section
      id="hero"
      className="flex min-h-[85vh] flex-col items-center justify-center px-4 pt-20 text-center sm:min-h-[90vh] sm:px-6 sm:pt-24"
    >
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-2 text-sm font-medium text-violet-600 dark:text-violet-400 sm:text-base"
      >
        {t('hero.tagline')}
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl lg:text-6xl"
      >
        {site.name}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="mt-3 max-w-xl text-base text-slate-600 dark:text-slate-400 sm:mt-4 sm:text-lg"
      >
        {t('hero.subtitle')}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.35 }}
        className="mt-8 flex w-full max-w-sm flex-col gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4"
      >
        <a
          href="#projects"
          className="min-h-[44px] rounded-lg bg-violet-600 px-6 py-3 font-medium text-white transition hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-slate-50 active:bg-violet-700 dark:focus:ring-offset-slate-950"
        >
          {t('hero.viewProjects')}
        </a>
        <a
          href="#contact"
          className="min-h-[44px] rounded-lg border border-slate-300 px-6 py-3 font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:border-slate-500 dark:hover:bg-slate-800/50 dark:focus:ring-slate-500 dark:focus:ring-offset-slate-950 active:bg-slate-200 dark:active:bg-slate-800"
        >
          {t('hero.getInTouch')}
        </a>
      </motion.div>
    </section>
  )
}
