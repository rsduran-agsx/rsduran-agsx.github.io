import { Section } from '@/components/primitives/Section'
import { Reveal } from '@/components/primitives/Reveal'
import { experiences } from '@/data/content'

export function Experience() {
  return (
    <Section id="experience" eyebrow="03 / Experience" title="Experience">
      <div className="space-y-6">
        {experiences.map((exp, i) => (
          <Reveal key={i}>
            <article className="relative overflow-hidden rounded-xl border border-hairline bg-surface/40 p-6 md:p-8">
              <span className="absolute inset-y-0 left-0 w-[3px] bg-accent/60" />
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                <div>
                  <h3 className="font-display text-xl font-semibold md:text-2xl">
                    {exp.title}{' '}
                    <span className="text-accent">@ {exp.company}</span>
                  </h3>
                  {exp.companyNote && (
                    <p className="mt-1 font-mono text-xs text-muted">
                      {exp.companyNote}
                    </p>
                  )}
                </div>
                <div className="text-left font-mono text-xs text-muted sm:text-right">
                  <div>{exp.dates}</div>
                  <div className="mt-0.5">{exp.location}</div>
                </div>
              </div>

              <ul className="mt-6 space-y-3.5">
                {exp.bullets.map((b, j) => (
                  <li
                    key={j}
                    className="flex gap-3 text-sm leading-relaxed text-muted"
                  >
                    <span className="mt-[0.35rem] shrink-0 text-accent">▹</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
