import { useTranslation } from 'react-i18next'

const LANGS = [
  { code: 'en', label: 'EN' },
  { code: 'pt', label: 'PT' },
] as const

export function LanguageSwitcher() {
  const { i18n, t } = useTranslation()

  return (
    <div className="flex items-center gap-0.5 rounded-lg border border-slate-300 bg-slate-100 p-0.5 dark:border-slate-600 dark:bg-slate-800" role="group" aria-label={t('a11y.language')}>
      {LANGS.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          onClick={() => i18n.changeLanguage(code)}
          className={`min-w-[2.25rem] rounded-md px-2 py-1.5 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 dark:focus:ring-offset-slate-950 ${
            i18n.language === code
              ? 'bg-violet-600 text-white dark:bg-violet-500'
              : 'text-slate-600 hover:bg-slate-200 dark:text-slate-400 dark:hover:bg-slate-700'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
