import { useRef, type MouseEvent } from 'react'
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  useSpring,
} from 'motion/react'
import { FiArrowRight, FiFileText } from 'react-icons/fi'
import { Reveal } from '@/components/primitives/Reveal'
import { StatCard } from '@/components/primitives/StatCard'
import { Socials } from '@/components/primitives/Socials'
import { heroStats, profile } from '@/data/content'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const meshY = useTransform(scrollYProgress, [0, 1], ['0%', '22%'])
  const meshOpacity = useTransform(scrollYProgress, [0, 1], [0.6, 0.05])

  // subtle 3D tilt on the portrait
  const rx = useSpring(0, { stiffness: 110, damping: 14 })
  const ry = useSpring(0, { stiffness: 110, damping: 14 })
  function onMove(e: MouseEvent<HTMLDivElement>) {
    if (reduce) return
    const r = e.currentTarget.getBoundingClientRect()
    ry.set(((e.clientX - r.left) / r.width - 0.5) * 10)
    rx.set((((e.clientY - r.top) / r.height - 0.5) * -10))
  }
  function onLeave() {
    rx.set(0)
    ry.set(0)
  }

  return (
    <section
      ref={ref}
      id="home"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pb-16 pt-28 lg:pt-24"
    >
      {/* AI mesh backdrop (parallax) */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={reduce ? undefined : { y: meshY }}
      >
        <motion.img
          src={profile.heroMesh}
          alt=""
          className="absolute right-0 top-0 h-[118%] w-full object-cover object-right"
          style={reduce ? { opacity: 0.4 } : { opacity: meshOpacity }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(100deg,var(--color-ground)_32%,transparent_82%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--color-ground),transparent_55%)]" />
      </motion.div>
      <div className="grid-bg pointer-events-none absolute inset-0 -z-20 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />

      <div className="mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-6">
          {/* text */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="inline-flex items-center gap-2.5 rounded-full border border-hairline bg-surface/60 px-3.5 py-1.5 font-mono text-xs text-muted backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                Open to Cloud / DevOps / SRE roles
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="font-display mt-6 text-5xl font-bold leading-[0.98] tracking-tight sm:text-6xl lg:text-[4.4rem]">
                I build the <span className="text-accent">cloud</span>
                <br />
                other teams ship on.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
                {profile.valueProp}
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#work"
                  className="group inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 font-mono text-sm font-medium text-ground transition-transform hover:-translate-y-0.5"
                >
                  View work
                  <FiArrowRight className="transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-hairline px-5 py-3 font-mono text-sm text-ink transition-colors hover:border-accent/50 hover:text-accent"
                >
                  <FiFileText /> Résumé
                </a>
                <Socials className="ml-1" />
              </div>
            </Reveal>
          </div>

          {/* portrait */}
          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <motion.div
                onMouseMove={onMove}
                onMouseLeave={onLeave}
                style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
                className="relative mx-auto w-full max-w-[320px] sm:max-w-[360px]"
              >
                <div className="pointer-events-none absolute inset-0 -z-10 translate-y-8 scale-90 rounded-[40%] bg-[radial-gradient(circle,rgba(52,224,196,0.2),transparent_62%)] blur-2xl" />
                <img
                  src={profile.photo}
                  alt="Rein Duran, Cloud / DevOps Engineer"
                  className="w-full select-none"
                  draggable={false}
                />
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-hairline bg-ground/70 px-3 py-1 font-mono text-[0.7rem] text-muted backdrop-blur">
                  <span className="text-accent">●</span> Rein Duran · Manila
                </div>
              </motion.div>
            </Reveal>
          </div>
        </div>

        {/* stat strip */}
        <Reveal delay={0.1}>
          <div className="mt-14 grid grid-cols-2 gap-4 border-t border-hairline pt-10 md:grid-cols-4">
            {heroStats.map((s) => (
              <StatCard
                key={s.label}
                value={s.value}
                prefix={s.prefix}
                suffix={s.suffix}
                decimals={s.decimals}
                label={s.label}
                sub={s.sub}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
