import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowUpRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { track } from '@/lib/analytics'
import { assetUrl } from '@/lib/assets'
import { cn } from '@/lib/utils'
import type { Project } from '@/types'

function padIndex(index: number) {
  return String(index).padStart(2, '0')
}

interface ProjectCopy {
  description: string
  role: string
  outcome: string
}

interface ProjectCardProps {
  project: Project
  index: number
  copy: ProjectCopy
}

export function ProjectCard({ project, index, copy }: ProjectCardProps) {
  const { t } = useTranslation()
  const cover = project.screenshots[0]
  const numbered = padIndex(index)

  if (project.layout === 'compact') {
    return (
      <Card className="group flex h-full flex-col overflow-hidden transition-[border-color] duration-200 hover:border-foreground/30">
        <Link
          to={`/projects/${project.slug}`}
          className="flex h-full flex-col focus-visible:outline-none"
          onClick={() => track('case_open', { project: project.slug })}
        >
          {cover ? (
            <div className="project-visual relative aspect-[16/10] overflow-hidden bg-muted">
              <img
                src={assetUrl(cover)}
                alt=""
                width={960}
                height={600}
                loading="lazy"
                className="h-full w-full object-cover object-top transition-transform duration-500 motion-reduce:transform-none [@media(hover:hover)]:group-hover:scale-[1.03]"
              />
            </div>
          ) : null}
          <div className="flex flex-1 flex-col p-5 sm:p-6">
            <div className="flex items-baseline justify-between gap-3">
              <span className="font-serif text-2xl text-secondary" aria-hidden>
                {numbered}
              </span>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none" />
            </div>
            <h3 className="mt-3 font-serif text-2xl font-medium tracking-tight text-foreground">
              {project.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
              {copy.description}
            </p>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <li key={tag}>
                  <Badge>{tag}</Badge>
                </li>
              ))}
            </ul>
            <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary">
              {t('projects.viewCase')}
            </span>
          </div>
        </Link>
      </Card>
    )
  }

  const inverted = project.layout === 'inverted'

  return (
    <article
      className={cn(
        'grid items-center gap-8 lg:grid-cols-12 lg:gap-12',
        inverted && 'lg:[&>*:first-child]:order-2',
      )}
    >
      <Link
        to={`/projects/${project.slug}`}
        aria-label={`${project.title} — ${t('projects.viewCase')}`}
        className="group project-visual relative block overflow-hidden border border-border bg-muted lg:col-span-7"
        onClick={() => track('case_open', { project: project.slug })}
      >
        {cover ? (
          <img
            src={assetUrl(cover)}
            alt=""
            width={1400}
            height={875}
            loading={index === 1 ? 'eager' : 'lazy'}
            fetchPriority={index === 1 ? 'high' : 'auto'}
            className="aspect-[16/10] h-full w-full object-cover object-top transition-transform duration-500 motion-reduce:transform-none [@media(hover:hover)]:group-hover:scale-[1.03]"
          />
        ) : null}
      </Link>

      <div className="lg:col-span-5">
        <p className="font-serif text-5xl leading-none text-secondary sm:text-6xl" aria-hidden>
          {numbered}
        </p>
        <h3 className="mt-4 font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
          {project.title}
        </h3>
        <p className="mt-4 text-[1.0625rem] leading-relaxed text-muted-foreground">
          {copy.description}
        </p>
        {copy.role ? (
          <p className="mt-5 text-sm leading-relaxed">
            <span className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-muted-foreground">
              {t('projects.roleLabel')}
            </span>
            <span className="mt-1 block text-foreground">{copy.role}</span>
          </p>
        ) : null}
        {copy.outcome ? (
          <p className="mt-4 text-sm leading-relaxed">
            <span className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-muted-foreground">
              {t('projects.outcomeLabel')}
            </span>
            <span className="mt-1 block text-foreground">{copy.outcome}</span>
          </p>
        ) : null}
        <ul className="mt-5 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <li key={tag}>
              <Badge>{tag}</Badge>
            </li>
          ))}
        </ul>
        <Link
          to={`/projects/${project.slug}`}
          onClick={() => track('case_open', { project: project.slug })}
          className="cta-motion group mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-primary"
        >
          {t('projects.viewCase')}
          <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none" />
        </Link>
      </div>
    </article>
  )
}
