import { motion, useReducedMotion } from 'motion/react'
import { CinematicSection } from '@/components/primitives/CinematicSection'
import { Reveal } from '@/components/primitives/Reveal'
import { about, cinematic, profile } from '@/data/content'
import { cn } from '@/lib/cn'

export function About() {
  const reduce = useReducedMotion()
  const last = cinematic.manifesto.length - 1

  return (
    <CinematicSection id="about" bg={profile.aboutBg} dim={0.58} minScreen>
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="eyebrow flex items-center gap-3">
            <span className="h-px w-8 bg-accent/50" />
            About
          </p>
        </Reveal>

        <div className="mt-8 space-y-1.5">
          {cinematic.manifesto.map((line, i) => (
            <motion.p
              key={i}
              initial={reduce ? false : { opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-12%' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                'font-display text-[1.65rem] font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[2.9rem]',
                i === last ? 'text-accent' : 'text-ink',
              )}
            >
              {line}
            </motion.p>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-12 max-w-xl leading-relaxed text-muted">
            {about.paragraphs[1]}
          </p>
          <p className="mt-4 font-mono text-sm text-accent">{about.now}</p>
        </Reveal>
      </div>
    </CinematicSection>
  )
}
