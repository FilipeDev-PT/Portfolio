import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

interface ImageCarouselProps {
  images: string[]
  alt: string
}

function assetUrl(path: string) {
  return `${import.meta.env.BASE_URL}${path}`
}

export function ImageCarousel({ images, alt }: ImageCarouselProps) {
  const { t } = useTranslation()
  const [index, setIndex] = useState(0)
  const total = images.length

  function goTo(next: number) {
    setIndex((next + total) % total)
  }

  if (total === 0) return null

  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900/50">
      <div className="relative aspect-video bg-slate-100 dark:bg-slate-900">
        <AnimatePresence mode="wait">
          <motion.img
            key={images[index]}
            src={assetUrl(images[index])}
            alt={`${alt} — ${t('projectDetail.screenshot', { current: index + 1, total })}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="h-full w-full object-cover"
          />
        </AnimatePresence>

        {total > 1 && (
          <>
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-700 shadow-sm transition hover:border-violet-300 hover:text-violet-600 focus:outline-none focus:ring-2 focus:ring-violet-400 dark:border-slate-700 dark:bg-slate-900/90 dark:text-slate-200 dark:hover:border-violet-500 dark:hover:text-violet-400 sm:left-3"
              aria-label={t('projectDetail.previousScreenshot')}
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-700 shadow-sm transition hover:border-violet-300 hover:text-violet-600 focus:outline-none focus:ring-2 focus:ring-violet-400 dark:border-slate-700 dark:bg-slate-900/90 dark:text-slate-200 dark:hover:border-violet-500 dark:hover:text-violet-400 sm:right-3"
              aria-label={t('projectDetail.nextScreenshot')}
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>

      {total > 1 && (
        <div className="flex items-center justify-center gap-2 border-t border-slate-200 px-4 py-3 dark:border-slate-800">
          {images.map((image, i) => (
            <button
              key={image}
              type="button"
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition ${
                i === index ? 'w-6 bg-violet-600 dark:bg-violet-400' : 'w-2 bg-slate-300 hover:bg-slate-400 dark:bg-slate-700 dark:hover:bg-slate-600'
              }`}
              aria-label={t('projectDetail.goToScreenshot', { number: i + 1 })}
              aria-current={i === index}
            />
          ))}
        </div>
      )}
    </div>
  )
}
