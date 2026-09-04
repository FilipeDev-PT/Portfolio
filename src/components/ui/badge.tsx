import { type HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-sm border border-border bg-transparent px-2 py-0.5 font-mono text-[0.6875rem] uppercase tracking-wider text-muted-foreground',
        className,
      )}
      {...props}
    />
  )
}
