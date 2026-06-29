import { FiAward, FiBookOpen, FiExternalLink } from 'react-icons/fi'
import { Section } from '@/components/primitives/Section'
import { Reveal } from '@/components/primitives/Reveal'
import { credentials } from '@/data/content'

export function Credentials() {
  const { honor, certifications, education } = credentials
  return (
    <Section id="credentials" eyebrow="05 / Credentials" title="Credentials">
      {/* flagship honor */}
      <Reveal>
        <div className="rounded-xl border border-accent/30 bg-gradient-to-br from-accent/[0.08] to-transparent p-6 md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center">
            <div className="flex items-baseline gap-3">
              <span className="font-display text-6xl font-bold tnum text-accent md:text-7xl">
                {honor.metric}
              </span>
              <span className="font-mono text-xs leading-tight text-muted">
                nationally
                <br />
                {honor.metricSub.split('·')[0].trim()}
              </span>
            </div>
            <div className="md:border-l md:border-hairline md:pl-6">
              <p className="eyebrow">{honor.title}</p>
              <p className="mt-2.5 max-w-xl text-sm leading-relaxed text-ink">
                {honor.framing}
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {/* certifications */}
        <Reveal>
          <div className="h-full rounded-lg border border-hairline bg-surface/40 p-6">
            <p className="eyebrow">Certifications</p>
            {certifications.map((c) => (
              <div key={c.name} className="mt-5 flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-md border border-hairline bg-raised/60 text-accent">
                  <FiAward className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display text-base font-semibold">
                    {c.name}
                  </h4>
                  <p className="mt-0.5 font-mono text-xs text-muted">
                    {c.issuer} · {c.dates}
                  </p>
                  <a
                    href={c.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1.5 inline-flex items-center gap-1 font-mono text-xs text-accent hover:underline"
                  >
                    Verify <FiExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* education */}
        <Reveal delay={0.05}>
          <div className="h-full rounded-lg border border-hairline bg-surface/40 p-6">
            <p className="eyebrow">Education</p>
            <div className="mt-5 flex items-start gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-md border border-hairline bg-raised/60 text-accent">
                <FiBookOpen className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-display text-base font-semibold">
                  {education.degree}
                </h4>
                <p className="mt-0.5 font-mono text-xs text-muted">
                  {education.school}
                </p>
                <p className="mt-0.5 font-mono text-xs text-muted/70">
                  {education.dates}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
