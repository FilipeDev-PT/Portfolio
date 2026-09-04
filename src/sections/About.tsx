import { useTranslation } from 'react-i18next'
import { Reveal } from '@/components/Reveal'
import { Section } from '@/components/Section'
import { SectionKicker } from '@/components/SectionKicker'
import { skills } from '@/data/content'

const CATEGORY_KEYS = ['frontend', 'backend', 'QA', 'tools'] as const

export function About() {
  const { t } = useTranslation()
  const byCategory = skills.reduce<Record<string, string[]>>((acc, skill) => {
    const cat = skill.category
    if (!acc[cat]) acc[cat] = []
    acc[cat].push(skill.name)
    return acc
  }, {})

  return (
    <Section id="about">
      <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-7">
          <Reveal>
            <SectionKicker index="04">{t('about.kicker')}</SectionKicker>
            <h2 className="font-serif text-h2 font-medium text-foreground">{t('about.title')}</h2>
            <p className="mt-6 text-xl text-foreground">{t('about.heading')}</p>
            <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">{t('about.intro')}</p>
            <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">{t('about.bio')}</p>
          </Reveal>
        </div>

        <div id="skills" className="scroll-mt-24 lg:col-span-5">
          <h3 className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-muted-foreground">
            {t('skills.title')}
          </h3>
          <dl className="mt-8 space-y-8">
            {CATEGORY_KEYS.map((cat) => {
              const items = byCategory[cat]
              if (!items?.length) return null
              return (
                <div key={cat} className="grid grid-cols-[7rem_1fr] gap-4 border-t border-border pt-4">
                  <dt className="font-mono text-xs uppercase tracking-wider text-secondary">
                    {t(`skills.${cat}`)}
                  </dt>
                  <dd className="text-sm leading-relaxed text-foreground">{items.join(' · ')}</dd>
                </div>
              )
            })}
          </dl>
        </div>
      </div>
    </Section>
  )
}
