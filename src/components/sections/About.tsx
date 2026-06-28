import { Section } from '@/components/primitives/Section'
import { Reveal } from '@/components/primitives/Reveal'
import { Terminal, type TermLine } from '@/components/primitives/Terminal'
import { about } from '@/data/content'

const FOCUS = [
  'Landing Zones',
  'Container Platforms',
  'CI/CD & GitOps',
  'FinOps',
  'Cloud Security',
  'AI / Data Infra',
]

const TERM: TermLine[] = [
  { kind: 'cmd', text: 'terraform apply -auto-approve' },
  { kind: 'out', text: 'Acquiring state lock...', tone: 'muted' },
  {
    kind: 'out',
    text: 'No changes. Infrastructure matches the configuration.',
    tone: 'muted',
  },
  {
    kind: 'out',
    text: 'Apply complete! Resources: 0 added, 0 changed, 0 destroyed.',
    tone: 'success',
  },
  { kind: 'out', text: '✓ 100% as code · zero drift', tone: 'accent' },
]

export function About() {
  return (
    <Section
      id="about"
      eyebrow="01 / About"
      title="From electronics engineering to the cloud"
    >
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <div className="space-y-4 text-base leading-relaxed text-muted">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <p className="mt-6 flex items-start gap-2 font-mono text-sm text-ink">
              <span className="mt-0.5 text-accent">▹</span>
              {about.now}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8">
              <p className="eyebrow">Focus areas</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {FOCUS.map((f) => (
                  <span
                    key={f}
                    className="rounded-md border border-hairline bg-surface/40 px-3 py-1.5 font-mono text-[0.78rem] text-ink/85"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <Terminal lines={TERM} title="bash · terraform" />
          <p className="mt-3 text-center font-mono text-xs text-muted/70">
            The thesis: if it isn't in version control, it isn't real.
          </p>
        </Reveal>
      </div>
    </Section>
  )
}
