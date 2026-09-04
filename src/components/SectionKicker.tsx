import { type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionKickerProps {
  index?: string
  children: ReactNode
  className?: string
}

export function SectionKicker({ index, children, className }: SectionKickerProps) {
  return (
    <div className={cn('mb-5 flex items-baseline gap-4', className)}>
      {index ? (
        <span className="font-serif text-3xl leading-none text-secondary sm:text-4xl" aria-hidden>
          {index}
        </span>
      ) : null}
      <span className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-muted-foreground">
        {children}
      </span>
    </div>
  )
}
