import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { Reveal } from './Reveal'

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className,
  full = false,
}: {
  id: string
  eyebrow?: string
  title?: string
  intro?: ReactNode
  children: ReactNode
  className?: string
  full?: boolean
}) {
  return (
    <section
      id={id}
      className={cn(
        'relative mx-auto w-full px-6 py-24 md:py-32',
        full ? 'max-w-none' : 'max-w-6xl',
        className,
      )}
    >
      {(eyebrow || title) && (
        <header className="mb-12 md:mb-16">
          {eyebrow && (
            <Reveal>
              <p className="eyebrow flex items-center gap-3">
                <span className="h-px w-8 bg-accent/50" />
                {eyebrow}
              </p>
            </Reveal>
          )}
          {title && (
            <Reveal delay={0.05}>
              <h2 className="font-display mt-5 text-3xl font-semibold tracking-tight md:text-4xl">
                {title}
              </h2>
            </Reveal>
          )}
          {intro && (
            <Reveal delay={0.1}>
              <div className="mt-4 max-w-2xl text-muted">{intro}</div>
            </Reveal>
          )}
        </header>
      )}
      {children}
    </section>
  )
}
