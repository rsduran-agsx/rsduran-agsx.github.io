import { useRef, type MouseEvent } from 'react'
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  useSpring,
} from 'motion/react'
import { FiArrowRight, FiFileText } from 'react-icons/fi'
import { Socials } from '@/components/primitives/Socials'
import { profile, cinematic } from '@/data/content'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '16%'])
  const fade = useTransform(scrollYProgress, [0, 1], [1, 0.15])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const textFade = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  // mouse parallax on the core
  const mx = useSpring(0, { stiffness: 60, damping: 18 })
  const my = useSpring(0, { stiffness: 60, damping: 18 })
  function onMove(e: MouseEvent<HTMLElement>) {
    if (reduce) return
    const r = e.currentTarget.getBoundingClientRect()
    mx.set(((e.clientX - r.left) / r.width - 0.5) * -30)
    my.set(((e.clientY - r.top) / r.height - 0.5) * -30)
  }

  return (
    <section
      ref={ref}
      id="home"
      onMouseMove={onMove}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      {/* data-core background */}
      <motion.div
        className="pointer-events-none absolute inset-0 -z-10"
        style={reduce ? undefined : { y: bgY, opacity: fade }}
      >
        <motion.img
          src={profile.heroBg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full scale-125 object-cover"
          style={reduce ? undefined : { x: mx, y: my }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_28%,rgba(4,6,10,0.72)_72%)]" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-[linear-gradient(to_top,var(--color-ground),transparent)]" />
      </motion.div>

      {/* content */}
      <motion.div
        className="relative z-10 mx-auto max-w-4xl text-center"
        style={reduce ? undefined : { y: textY, opacity: textFade }}
      >
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="eyebrow"
        >
          {profile.eyebrow}
        </motion.p>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-display mt-5 text-6xl font-bold leading-[0.92] tracking-tight sm:text-7xl lg:text-[8rem]"
        >
          Rein Duran
        </motion.h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.38 }}
          className="mx-auto mt-6 max-w-xl text-lg text-ink/85 sm:text-xl"
        >
          {cinematic.heroLine}{' '}
          <span className="text-muted">{cinematic.roleLine}</span>
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.52 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-mono text-sm font-medium text-ground transition-transform hover:-translate-y-0.5"
          >
            View work
            <FiArrowRight className="transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-mono text-sm text-ink backdrop-blur transition-colors hover:border-accent/50 hover:text-accent"
          >
            <FiFileText /> Résumé
          </a>
          <Socials className="ml-1" />
        </motion.div>
      </motion.div>

      {/* scroll cue */}
      <motion.div
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[0.7rem] uppercase tracking-[0.3em] text-muted"
        animate={reduce ? undefined : { opacity: [0.3, 1, 0.3], y: [0, 6, 0] }}
        transition={{ duration: 2.4, repeat: Infinity }}
      >
        scroll
      </motion.div>
    </section>
  )
}
