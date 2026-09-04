import { useTranslation } from 'react-i18next'
import { cn } from '@/lib/utils'

const LANGS = [
  { code: 'en', label: 'EN' },
  { code: 'pt-BR', label: 'BR' },
] as const

export function LanguageSwitcher() {
  const { i18n, t } = useTranslation()
  const current = i18n.language.toLowerCase().startsWith('pt') ? 'pt-BR' : 'en'

  return (
    <div
      className="flex items-center rounded-md border border-border p-0.5"
      role="group"
      aria-label={t('a11y.language')}
    >
      {LANGS.map(({ code, label }) => {
        const active = current === code
        return (
          <button
            key={code}
            type="button"
            onClick={() => void i18n.changeLanguage(code)}
            aria-pressed={active}
            className={cn(
              'min-h-8 min-w-9 rounded-sm px-2 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
              active
                ? 'bg-foreground text-background'
                : 'text-muted-foreground hover:text-foreground',
            )}
          >
            {label}
          </button>
        )
      })}
    </div>
  )
}
