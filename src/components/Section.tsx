import { type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionProps {
  id: string
  children: ReactNode
  className?: string
}

export function Section({ id, children, className }: SectionProps) {
  return (
    <section id={id} className={cn('scroll-mt-20 py-20 sm:py-24 md:py-32', className)}>
      <div className="mx-auto max-w-page px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  )
}
