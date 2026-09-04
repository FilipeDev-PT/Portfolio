import { useTranslation } from 'react-i18next'
import { site } from '@/data/content'

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-page flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p className="font-serif text-lg text-foreground">{site.name}</p>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {t('footer.rights')}
        </p>
      </div>
    </footer>
  )
}
