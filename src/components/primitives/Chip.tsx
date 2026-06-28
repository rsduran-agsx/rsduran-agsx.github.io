import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

export function Chip({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-md border border-hairline bg-raised/50 px-3 py-1.5 font-mono text-[0.8rem] text-ink/85 transition-colors hover:border-accent/50 hover:text-accent',
        className,
      )}
    >
      {children}
    </span>
  )
}
