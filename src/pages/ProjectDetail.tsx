import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import ReactMarkdown from 'react-markdown'
import { ImageCarousel } from '@/components/ImageCarousel'
import { Badge } from '@/components/ui/badge'
import { getCaseBody } from '@/data/cases'
import { getProjectBySlug } from '@/data/content'
import { track } from '@/lib/analytics'

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const { t, i18n } = useTranslation()
  const project = slug ? getProjectBySlug(slug) : undefined

  useEffect(() => {
    if (project) track('project_view', { project: project.slug })
  }, [project])

  if (!project) {
    return <Navigate to="/" replace />
  }

  const details = getCaseBody(project.slug, i18n.language)
  const role = t(`projects.items.${project.id}.role`)
  const description = t(`projects.items.${project.id}.description`)

  return (
    <article className="mx-auto max-w-page px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <Link
        to="/"
        state={{ scrollTo: 'projects' }}
        className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        {t('projectDetail.backToProjects')}
      </Link>

      <header className="mt-10 max-w-3xl">
        <p className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-muted-foreground">
          {t('projects.kicker')}
        </p>
        <h1 className="mt-3 font-serif text-display font-medium text-foreground">{project.title}</h1>
        <p className="mt-5 text-[1.125rem] leading-relaxed text-muted-foreground">{description}</p>
        {role ? (
          <p className="mt-6 text-sm">
            <span className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-muted-foreground">
              {t('projectDetail.roleLabel')}
            </span>
            <span className="mt-1 block text-foreground">{role}</span>
          </p>
        ) : null}
        <ul className="mt-6 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <li key={tag}>
              <Badge>{tag}</Badge>
            </li>
          ))}
        </ul>
      </header>

      {project.screenshots.length > 0 ? (
        <section className="mt-12 sm:mt-16">
          <h2 className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-muted-foreground">
            {t('projectDetail.screenshots')}
          </h2>
          <div className="mt-4">
            <ImageCarousel images={project.screenshots} alt={project.title} />
          </div>
        </section>
      ) : null}

      <section className="mt-12 max-w-2xl sm:mt-16">
        <h2 className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-muted-foreground">
          {t('projectDetail.aboutProject')}
        </h2>
        <div className="prose prose-neutral mt-6 max-w-none prose-headings:font-serif prose-headings:font-medium prose-headings:tracking-tight prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground">
          <ReactMarkdown
            components={{
              h2: ({ children }) => (
                <h3 className="mb-2 mt-10 font-serif text-2xl text-foreground first:mt-0">{children}</h3>
              ),
              h3: ({ children }) => (
                <h4 className="mb-2 mt-6 text-lg font-medium text-foreground">{children}</h4>
              ),
              hr: () => <hr className="my-8 border-border" />,
            }}
          >
            {details}
          </ReactMarkdown>
        </div>
      </section>

      {(project.liveUrl || project.repo) && (
        <div className="mt-12 flex flex-wrap gap-3">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-motion inline-flex min-h-11 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground"
            >
              {t('projectDetail.liveDemo')}
            </a>
          ) : null}
          {project.repo ? (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-motion inline-flex min-h-11 items-center rounded-md border border-border px-5 text-sm font-medium"
            >
              {t('projectDetail.repository')}
            </a>
          ) : null}
        </div>
      )}
    </article>
  )
}
