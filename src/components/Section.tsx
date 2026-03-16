import { type ReactNode } from 'react'

interface SectionProps {
  id: string
  children: ReactNode
  className?: string
}

export function Section({ id, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-16 py-12 sm:scroll-mt-20 sm:py-16 md:py-24 ${className}`}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6">{children}</div>
    </section>
  )
}
