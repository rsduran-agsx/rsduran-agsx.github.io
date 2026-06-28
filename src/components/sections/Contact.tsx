import { FiArrowUpRight } from 'react-icons/fi'
import { Reveal } from '@/components/primitives/Reveal'
import { Socials } from '@/components/primitives/Socials'
import { contact, profile } from '@/data/content'

const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
  "Let's talk infrastructure",
)}`

export function Contact() {
  return (
    <section id="contact" className="relative mx-auto w-full max-w-6xl px-6 py-28 md:py-36">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <p className="eyebrow flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-accent/50" />
            06 / Contact
            <span className="h-px w-8 bg-accent/50" />
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display mt-5 text-3xl font-semibold tracking-tight md:text-4xl">
            {contact.headline}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-4 max-w-lg text-muted">{contact.blurb}</p>
        </Reveal>

        <Reveal delay={0.16}>
          <a
            href={mailto}
            className="group mt-9 inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3.5 font-mono text-sm font-medium text-ground transition-transform hover:-translate-y-0.5"
          >
            {profile.email}
            <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </Reveal>

        <Reveal delay={0.22}>
          <Socials className="mt-9 justify-center" />
        </Reveal>

        <Reveal delay={0.28}>
          <p className="mt-10 inline-flex items-center gap-2 font-mono text-xs text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {contact.availability}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
