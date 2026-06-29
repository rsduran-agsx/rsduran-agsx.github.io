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
}: {
  value: number
  prefix?: string
  suffix?: string
  decimals?: number
  label: string
  sub?: string
  className?: string
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
        'group relative rounded-lg border border-hairline bg-surface/60 p-5 transition-colors hover:border-accent/40',
        className,
      )}
    >
      <div className="font-display text-3xl font-semibold tnum md:text-[2.5rem] md:leading-none">
        <span className="text-accent">{prefix}</span>
        {shown}
        <span className="text-accent">{suffix}</span>
      </div>
      <div className="mt-3 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-muted">
        {label}
      </div>
      {sub && <div className="mt-1 text-xs text-muted/60">{sub}</div>}
    </div>
  )
}
