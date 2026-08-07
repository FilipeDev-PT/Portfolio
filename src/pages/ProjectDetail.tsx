import { Link, Navigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ImageCarousel } from '@/components/ImageCarousel'
import { getProjectBySlug } from '@/data/content'
import ReactMarkdown from 'react-markdown'


export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const { t } = useTranslation()
  const project = slug ? getProjectBySlug(slug) : undefined

  if (!project) {
    return <Navigate to="/" replace />
  }

  return (
    <section className="scroll-mt-16 py-12 sm:scroll-mt-20 sm:py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            to="/"
            state={{ scrollTo: 'projects' }}
            className="inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-violet-600 transition hover:underline focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 dark:text-violet-400 dark:focus:ring-offset-slate-950"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t('projectDetail.backToProjects')}
          </Link>

          <h1 className="mt-6 font-display text-2xl font-semibold text-slate-900 dark:text-white sm:text-3xl md:text-4xl">
            {project.title}
          </h1>
          <p className="mt-3 max-w-3xl text-sm text-slate-600 dark:text-slate-400 sm:text-base">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5 sm:gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded bg-slate-200 px-2 py-0.5 text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-8 sm:mt-10">
            <h2 className="font-display text-lg font-semibold text-slate-900 dark:text-white sm:text-xl">
              {t('projectDetail.screenshots')}
            </h2>
            <div className="mt-4">
              <ImageCarousel images={project.screenshots} alt={project.title} />
            </div>
          </div>

          <div className="mt-8 sm:mt-10">
            <h2 className="font-display text-lg font-semibold text-slate-900 dark:text-white sm:text-xl">
              {t('projectDetail.aboutProject')}
            </h2>
            <ReactMarkdown
              components={{
                hr: (props) => (
                  <hr {...props} className="my-4 border-slate-500" />
                ),
                h2: ({ children, ...props }) => (
                  <h2 {...props} className="mt-4 mb-1">
                    {children}
                  </h2>
                ),
                h3: ({ children, ...props }) => (
                  <h3 {...props} className="mt-3">
                    {children}
                  </h3>
                ),
              }}
            >
              {project.details}
            </ReactMarkdown>
          </div>

          {(project.liveUrl || project.repo) && (
            <div className="mt-8 flex flex-wrap gap-3 sm:mt-10 sm:gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 dark:focus:ring-offset-slate-950"
                >
                  {t('projectDetail.liveDemo')}
                </a>
              )}
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-violet-600 transition hover:border-violet-300 hover:bg-violet-50 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 dark:border-slate-700 dark:text-violet-400 dark:hover:border-violet-500 dark:hover:bg-violet-500/10 dark:focus:ring-offset-slate-950"
                >
                  {t('projectDetail.repository')}
                </a>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
