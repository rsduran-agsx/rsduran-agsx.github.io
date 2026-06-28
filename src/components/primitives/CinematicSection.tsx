import { useRef, type ReactNode } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { cn } from '@/lib/cn'

/**
 * Full-bleed section with an optional cinematic background image:
 * slow Ken-Burns drift + scroll parallax + dark legibility overlay +
 * top/bottom gradients that melt into the page (seamless section blends).
 */
export function CinematicSection({
  id,
  bg,
  children,
  className,
  minScreen = false,
  dim = 0.5,
}: {
  id?: string
  bg?: string
  children: ReactNode
  className?: string
  minScreen?: boolean
  dim?: number
}) {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])

  return (
    <section
      ref={ref}
      id={id}
      className={cn(
        'relative flex w-full flex-col justify-center overflow-hidden px-6 py-28 md:py-36',
        minScreen && 'min-h-screen',
        className,
      )}
    >
      {bg && (
        <div className="pointer-events-none absolute inset-0 -z-10">
          <motion.img
            src={bg}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full scale-125 object-cover"
            style={reduce ? undefined : { y }}
          />
          <div
            className="absolute inset-0 bg-black"
            style={{ opacity: dim }}
          />
          <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(to_bottom,var(--color-ground),transparent)]" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-[linear-gradient(to_top,var(--color-ground),transparent)]" />
        </div>
      )}
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  )
}
