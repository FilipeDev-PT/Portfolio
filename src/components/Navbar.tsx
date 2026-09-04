import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'motion/react'
import { Menu } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import type { SectionId } from '@/types'
import { site } from '@/data/content'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { useActiveSection } from '@/hooks/useActiveSection'
import { cn } from '@/lib/utils'

const NAV_ITEMS: { id: SectionId; key: string }[] = [
  { id: 'projects', key: 'nav.projects' },
  { id: 'experience', key: 'nav.experience' },
  { id: 'about', key: 'nav.about' },
  { id: 'contact', key: 'nav.contact' },
]

const SECTION_IDS: SectionId[] = ['hero', 'projects', 'experience', 'about', 'contact']

function scrollToSection(id: SectionId) {
  document.getElementById(id)?.scrollIntoView()
}

export function Navbar() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()
  const isHome = location.pathname === '/'
  const activeSection = useActiveSection(SECTION_IDS)
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const active = isHome ? activeSection : undefined

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function handleNavClick(id: SectionId) {
    setMobileOpen(false)
    if (isHome) {
      scrollToSection(id)
      return
    }
    navigate('/', { state: { scrollTo: id } })
  }

  return (
    <header
      className={cn(
        'sticky top-0 z-40 border-b bg-background/95 backdrop-blur-sm transition-colors',
        scrolled ? 'border-border' : 'border-transparent',
      )}
    >
      <nav
        className="mx-auto flex h-16 max-w-page items-center justify-between gap-4 px-4 sm:px-6 lg:px-8"
        aria-label={t('a11y.mainNav')}
      >
        <Link
          to="/"
          className="font-serif text-lg tracking-tight text-foreground transition-colors hover:text-primary sm:text-xl"
          onClick={() => {
            setMobileOpen(false)
            if (isHome) scrollToSection('hero')
          }}
        >
          <span className="sr-only">{site.name}</span>
          <span aria-hidden>FC</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map(({ id, key }) => {
            const isActive = active === id
            return (
              <li key={id} className="relative">
                <button
                  type="button"
                  onClick={() => handleNavClick(id)}
                  aria-current={isActive ? 'location' : undefined}
                  className={cn(
                    'relative px-3 py-2 text-sm font-medium transition-colors',
                    isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground',
                  )}
                >
                  {t(key)}
                  {isActive ? (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-3 -bottom-0.5 h-px bg-secondary"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  ) : null}
                </button>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground hover:bg-muted md:hidden"
                aria-label={t('a11y.openMenu')}
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent closeLabel={t('a11y.closeMenu')}>
              <SheetHeader>
                <SheetTitle className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {t('nav.menu')}
                </SheetTitle>
              </SheetHeader>
              <ul className="flex flex-col gap-1">
                {NAV_ITEMS.map(({ id, key }) => {
                  const isActive = active === id
                  return (
                    <li key={id}>
                      <button
                        type="button"
                        onClick={() => handleNavClick(id)}
                        aria-current={isActive ? 'location' : undefined}
                        className={cn(
                          'flex min-h-11 w-full items-center rounded-md px-3 text-left text-base font-medium',
                          isActive ? 'bg-muted text-foreground' : 'text-muted-foreground hover:bg-muted hover:text-foreground',
                        )}
                      >
                        {t(key)}
                      </button>
                    </li>
                  )
                })}
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
