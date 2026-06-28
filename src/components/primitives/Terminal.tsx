import { useEffect, useState } from 'react'
import { useReducedMotion } from 'motion/react'
import { cn } from '@/lib/cn'

export type TermLine =
  | { kind: 'cmd'; text: string }
  | {
      kind: 'out'
      text: string
      tone?: 'muted' | 'success' | 'accent' | 'amber'
    }

type RenderedLine = TermLine & { typed: string; done: boolean }

function toneClass(tone?: string) {
  switch (tone) {
    case 'success':
      return 'text-subnet-green'
    case 'accent':
      return 'text-accent'
    case 'amber':
      return 'text-amber'
    default:
      return 'text-muted'
  }
}

function Cursor() {
  return (
    <span className="ml-0.5 inline-block h-[1.05em] w-[0.5em] translate-y-[0.18em] animate-pulse bg-accent/80" />
  )
}

export function Terminal({
  lines,
  title = 'bash',
  className,
  startDelay = 400,
}: {
  lines: TermLine[]
  title?: string
  className?: string
  startDelay?: number
}) {
  const reduce = useReducedMotion()
  const [rendered, setRendered] = useState<RenderedLine[]>(
    reduce ? lines.map((l) => ({ ...l, typed: l.text, done: true })) : [],
  )

  useEffect(() => {
    if (reduce) return
    let cancelled = false
    const timers: ReturnType<typeof setTimeout>[] = []
    const out: RenderedLine[] = []
    const wait = (ms: number) =>
      new Promise<void>((r) => timers.push(setTimeout(r, ms)))

    async function run() {
      await wait(startDelay)
      for (const line of lines) {
        if (cancelled) return
        if (line.kind === 'cmd') {
          out.push({ ...line, typed: '', done: false })
          for (let i = 1; i <= line.text.length; i++) {
            if (cancelled) return
            out[out.length - 1] = {
              ...line,
              typed: line.text.slice(0, i),
              done: i === line.text.length,
            }
            setRendered([...out])
            await wait(26 + Math.random() * 34)
          }
          await wait(280)
        } else {
          out.push({ ...line, typed: line.text, done: true })
          setRendered([...out])
          await wait(160)
        }
      }
    }
    run()
    return () => {
      cancelled = true
      timers.forEach(clearTimeout)
    }
  }, [lines, reduce, startDelay])

  return (
    <div
      className={cn(
        'overflow-hidden rounded-lg border border-hairline bg-[#0d141d]',
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-hairline bg-surface/80 px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]/80" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]/80" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]/80" />
        <span className="ml-2 font-mono text-xs text-muted">{title}</span>
      </div>
      <div className="px-4 py-4 font-mono text-[0.82rem] leading-relaxed">
        {rendered.map((l, i) => {
          const isLast = i === rendered.length - 1
          if (l.kind === 'cmd') {
            return (
              <div
                key={i}
                className="flex gap-2 whitespace-pre-wrap break-words"
              >
                <span className="select-none text-accent">$</span>
                <span className="text-ink">
                  {l.typed}
                  {isLast && <Cursor />}
                </span>
              </div>
            )
          }
          return (
            <div
              key={i}
              className={cn(
                'whitespace-pre-wrap break-words pl-4',
                toneClass(l.tone),
              )}
            >
              {l.typed}
            </div>
          )
        })}
      </div>
    </div>
  )
}
