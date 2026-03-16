import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import type { SectionId } from '@/types'
import { site } from '@/data/content'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'

const NAV_IDS: SectionId[] = ['about', 'experience', 'projects', 'skills', 'contact']

function scrollToSection(id: SectionId) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export function Navbar() {
  const { t } = useTranslation()
  const [active, setActive] = useState<SectionId>('hero')
  const [mobileOpen, setMobileOpen] = useState(false)

  function handleNavClick(id: SectionId) {
    scrollToSection(id)
    setMobileOpen(false)
    setActive(id)
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md dark:border-white/10 dark:bg-slate-950/90"
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between gap-2 px-4 py-3 sm:px-6 sm:py-4" aria-label="Main navigation">
        <button
          type="button"
          onClick={() => handleNavClick('hero')}
          className={`flex items-center gap-2 font-display text-base font-semibold transition sm:text-lg ${
            active === 'hero' ? 'text-violet-600 dark:text-violet-400' : 'text-slate-900 hover:text-violet-600 dark:text-white dark:hover:text-violet-400'
          }`}
        >
          <img
            src={`${import.meta.env.BASE_URL}favicon.svg`}
            alt=""
            width={28}
            height={27}
            className="flex-shrink-0"
          />
          <span>{site.name}</span>
        </button>
        <ul className="hidden items-center gap-6 md:flex lg:gap-8">
          {NAV_IDS.map((id) => (
            <li key={id}>
              <button
                type="button"
                onClick={() => handleNavClick(id)}
                className={`text-sm font-medium transition hover:text-violet-600 dark:hover:text-violet-400 ${
                  active === id ? 'text-violet-600 dark:text-violet-400' : 'text-slate-600 dark:text-slate-300'
                }`}
              >
                {t(`nav.${id}`)}
              </button>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-1">
          <LanguageSwitcher />
          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg text-slate-600 transition hover:bg-slate-200 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-white dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white dark:focus:ring-offset-slate-950 md:hidden"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? t('a11y.closeMenu') : t('a11y.openMenu')}
          >
          {mobileOpen ? (
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
        </div>
      </nav>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-slate-200 bg-white/95 backdrop-blur-md dark:border-white/10 dark:bg-slate-950/95 md:hidden"
          >
            <ul className="flex flex-col gap-0 px-4 py-3">
              {NAV_IDS.map((id) => (
                <li key={id}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(id)}
                    className={`block w-full rounded-lg px-4 py-3 text-left text-sm font-medium transition hover:bg-slate-100 dark:hover:bg-slate-800 ${
                      active === id ? 'text-violet-600 dark:text-violet-400' : 'text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    {t(`nav.${id}`)}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
