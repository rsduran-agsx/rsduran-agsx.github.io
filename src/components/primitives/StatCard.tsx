import { useEffect, useRef, useState } from 'react'
import { animate, useInView, useReducedMotion } from 'motion/react'
import { cn } from '@/lib/cn'

export function StatCard({
  value,
  prefix = '',
  suffix = '',
  decimals = 0,
  label,
  sub,
  className,
  bare = false,
}: {
  value: number
  prefix?: string
  suffix?: string
  decimals?: number
  label: string
  sub?: string
  className?: string
  bare?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const reduce = useReducedMotion()
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (reduce) {
      setDisplay(value)
      return
    }
    if (!inView) return
    const controls = animate(0, value, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(v),
    })
    return () => controls.stop()
  }, [inView, value, reduce])

  const shown =
    decimals > 0 ? display.toFixed(decimals) : Math.round(display).toString()

  return (
    <div
      ref={ref}
      className={cn(
        bare
          ? 'text-center'
          : 'group relative rounded-lg border border-hairline bg-surface/60 p-5 transition-colors hover:border-accent/40',
        className,
      )}
    >
      <div
        className={cn(
          'font-display font-semibold tnum',
          bare
            ? 'text-5xl leading-none sm:text-6xl lg:text-7xl'
            : 'text-3xl md:text-[2.5rem] md:leading-none',
        )}
      >
        <span className="text-accent">{prefix}</span>
        {shown}
        <span className="text-accent">{suffix}</span>
      </div>
      <div
        className={cn(
          'font-mono uppercase tracking-[0.12em] text-muted',
          bare ? 'mt-4 text-xs' : 'mt-3 text-[0.7rem]',
        )}
      >
        {label}
      </div>
      {sub && (
        <div className={cn('text-xs text-muted/60', bare ? 'mt-1.5' : 'mt-1')}>
          {sub}
        </div>
      )}
    </div>
  )
}
