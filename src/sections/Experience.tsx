import { useTranslation } from 'react-i18next'
import { Badge } from '@/components/ui/badge'
import { Reveal } from '@/components/Reveal'
import { Section } from '@/components/Section'
import { SectionKicker } from '@/components/SectionKicker'
import { experiences } from '@/data/content'

export function Experience() {
  const { t } = useTranslation()

  return (
    <Section id="experience" className="bg-muted/60">
      <Reveal>
        <SectionKicker index="03">{t('experience.kicker')}</SectionKicker>
        <h2 className="max-w-3xl font-serif text-h2 font-medium text-foreground">
          {t('experience.title')}
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">{t('experience.subtitle')}</p>
      </Reveal>

      <ol className="mt-14 divide-y divide-border border-y border-border">
        {experiences.map((exp, i) => (
          <li key={exp.id} className="grid gap-4 py-10 md:grid-cols-12 md:gap-8">
            <p className="font-serif text-4xl text-secondary md:col-span-2" aria-hidden>
              {String(i + 1).padStart(2, '0')}
            </p>
            <div className="md:col-span-6">
              <h3 className="font-serif text-2xl font-medium tracking-tight text-foreground">
                {t(`experience.items.${exp.id}.role`)}
              </h3>
              <p className="mt-1 text-foreground">{exp.company}</p>
              <p className="mt-4 max-w-xl text-muted-foreground">
                {t(`experience.items.${exp.id}.description`)}
              </p>
              {exp.tags?.length ? (
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {exp.tags.map((tag) => (
                    <li key={tag}>
                      <Badge>{tag}</Badge>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground md:col-span-4 md:text-right">
              {t(`experience.items.${exp.id}.period`)}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
