import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { assetUrl } from '@/lib/assets'
import { cn } from '@/lib/utils'

interface ImageCarouselProps {
  images: string[]
  alt: string
}

export function ImageCarousel({ images, alt }: ImageCarouselProps) {
  const { t } = useTranslation()
  const reduce = useReducedMotion()
  const [index, setIndex] = useState(0)
  const total = images.length

  function goTo(next: number) {
    setIndex((next + total) % total)
  }

  if (total === 0) return null

  return (
    <div className="overflow-hidden border border-border bg-card">
      <div className="relative aspect-[16/10] bg-muted">
        <AnimatePresence mode="wait">
          <motion.img
            key={images[index]}
            src={assetUrl(images[index])}
            alt={`${alt} — ${t('projectDetail.screenshot', { current: index + 1, total })}`}
            width={1400}
            height={875}
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
        </AnimatePresence>

        {total > 1 ? (
          <>
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card/95 text-foreground transition-colors hover:border-foreground/30"
              aria-label={t('projectDetail.previousScreenshot')}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card/95 text-foreground transition-colors hover:border-foreground/30"
              aria-label={t('projectDetail.nextScreenshot')}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        ) : null}
      </div>

      {total > 1 ? (
        <div className="flex items-center justify-center gap-2 border-t border-border px-4 py-3">
          {images.map((image, i) => (
            <button
              key={image}
              type="button"
              onClick={() => setIndex(i)}
              className={cn(
                'h-2 rounded-full transition-all',
                i === index ? 'w-6 bg-foreground' : 'w-2 bg-border hover:bg-muted-foreground',
              )}
              aria-label={t('projectDetail.goToScreenshot', { number: i + 1 })}
              aria-current={i === index}
            />
          ))}
        </div>
      ) : null}
    </div>
  )
}
