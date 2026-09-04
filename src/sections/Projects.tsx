import { useTranslation } from 'react-i18next'
import { ProjectCard } from '@/components/ProjectCard'
import { Reveal } from '@/components/Reveal'
import { Section } from '@/components/Section'
import { SectionKicker } from '@/components/SectionKicker'
import { projects } from '@/data/content'

export function Projects() {
  const { t } = useTranslation()
  const featured = projects.filter((project) => project.layout !== 'compact')
  const compact = projects.filter((project) => project.layout === 'compact')

  return (
    <Section id="projects">
      <Reveal>
        <SectionKicker index="02">{t('projects.kicker')}</SectionKicker>
        <h2 className="max-w-3xl font-serif text-h2 font-medium text-foreground">
          {t('projects.title')}
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">{t('projects.subtitle')}</p>
      </Reveal>

      <div className="mt-14 flex flex-col gap-20 md:mt-20 md:gap-28">
        {featured.map((project, i) => (
          <Reveal key={project.id} delay={i * 0.05}>
            <ProjectCard
              project={project}
              index={i + 1}
              copy={{
                description: t(`projects.items.${project.id}.description`),
                role: t(`projects.items.${project.id}.role`),
                outcome: t(`projects.items.${project.id}.outcome`),
              }}
            />
          </Reveal>
        ))}
      </div>

      <ul className="mt-16 grid gap-6 md:mt-20 md:grid-cols-2">
        {compact.map((project, i) => (
          <li key={project.id}>
            <Reveal delay={i * 0.06}>
              <ProjectCard
                project={project}
                index={featured.length + i + 1}
                copy={{
                  description: t(`projects.items.${project.id}.description`),
                  role: t(`projects.items.${project.id}.role`),
                  outcome: t(`projects.items.${project.id}.outcome`),
                }}
              />
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  )
}
