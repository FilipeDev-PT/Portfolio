import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { site } from '@/data/content'
import { track } from '@/lib/analytics'

export function Hero() {
  const { t } = useTranslation()
  const reduce = useReducedMotion()
  const { scrollY } = useScroll()
  const markY = useTransform(scrollY, [0, 480], [0, 24])

  return (
    <section
      id="hero"
      className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-page flex-col justify-center px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
    >
      <motion.span
        aria-hidden
        style={reduce ? undefined : { y: markY }}
        className="pointer-events-none absolute right-4 top-10 hidden font-serif text-[clamp(5rem,18vw,12rem)] leading-none text-secondary/15 sm:right-8 sm:top-16 sm:block"
      >
        01
      </motion.span>

      <p className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-muted-foreground">
        {t('hero.kicker')}
      </p>
      <h1 className="mt-4 max-w-4xl font-serif text-display font-medium text-foreground">
        {site.name}
      </h1>
      <p className="mt-6 max-w-xl text-[1.125rem] leading-[1.6] text-muted-foreground sm:text-[1.25rem]">
        {t('hero.subtitle')}
      </p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
        <Button asChild size="lg">
          <a href="#projects">{t('hero.viewProjects')}</a>
        </Button>
        <Button asChild size="lg" variant="outline">
          <a
            href="#contact"
            onClick={() => track('contact_cta_click', { source: 'hero' })}
          >
            {t('hero.getInTouch')}
          </a>
        </Button>
      </div>
      <p className="mt-10 font-mono text-xs text-muted-foreground sm:text-sm">
        <a
          href={`mailto:${site.email}`}
          className="underline-offset-4 hover:text-foreground hover:underline"
          onClick={() => track('email_click', { source: 'hero' })}
        >
          {site.email}
        </a>
      </p>
    </section>
  )
}
