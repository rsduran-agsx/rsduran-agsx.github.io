import { Section } from '@/components/primitives/Section'
import { Reveal } from '@/components/primitives/Reveal'
import { Chip } from '@/components/primitives/Chip'
import { Diagram } from '@/components/visuals/diagrams'
import { caseStudies, selectedWork } from '@/data/content'
import { cn } from '@/lib/cn'

function PAI({
  label,
  text,
  accent,
}: {
  label: string
  text: string
  accent?: boolean
}) {
  return (
    <div>
      <div
        className={cn(
          'font-mono text-[0.7rem] uppercase tracking-[0.14em]',
          accent ? 'text-accent' : 'text-muted/60',
        )}
      >
        {label}
      </div>
      <p
        className={cn(
          'mt-1.5 text-sm leading-relaxed',
          accent ? 'text-ink' : 'text-muted',
        )}
      >
        {text}
      </p>
    </div>
  )
}

export function CaseStudies() {
  return (
    <Section
      id="work"
      eyebrow="Selected work"
      title="Infrastructure work, made visible"
      intro="DevOps has no app screenshots. So here are four problems, what I shipped, and what changed. Architecture included."
    >
      <div className="space-y-6">
        {caseStudies.map((cs, i) => (
          <Reveal key={cs.id}>
            <article className="rounded-xl border border-hairline bg-surface/40 p-6 md:p-8">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm text-accent/60">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="rounded-full border border-hairline px-2.5 py-1 font-mono text-[0.68rem] uppercase tracking-wider text-muted">
                    {cs.category}
                  </span>
                </div>
                <div className="text-right">
                  <div className="font-display text-2xl font-semibold tnum text-accent md:text-3xl">
                    {cs.badge}
                  </div>
                  <div className="font-mono text-[0.68rem] text-muted">
                    {cs.badgeSub}
                  </div>
                </div>
              </div>

              <h3 className="font-display mt-4 text-xl font-semibold md:text-2xl">
                {cs.title}
              </h3>

              <div className="mt-7 grid gap-8 lg:grid-cols-2 lg:items-center">
                <div className="order-2 space-y-4 lg:order-1">
                  <PAI label="Problem" text={cs.problem} />
                  <PAI label="Action" text={cs.action} />
                  <PAI label="Impact" text={cs.impact} accent />
                  <div className="flex flex-wrap gap-2 pt-1">
                    {cs.tech.map((t) => (
                      <Chip key={t}>{t}</Chip>
                    ))}
                  </div>
                </div>
                <div className="order-1 rounded-lg border border-hairline bg-ground/50 p-4 lg:order-2">
                  <Diagram name={cs.diagram} />
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {/* selected work */}
      <Reveal>
        <p className="eyebrow mt-16 flex items-center gap-3">
          <span className="h-px w-8 bg-accent/50" />
          Also shipped
        </p>
      </Reveal>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {selectedWork.map((w, i) => (
          <Reveal key={w.title} delay={i * 0.05}>
            <div className="h-full rounded-lg border border-hairline bg-surface/40 p-5 transition-colors hover:border-accent/40">
              <h4 className="font-display text-base font-semibold leading-snug">
                {w.title}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-muted">{w.desc}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {w.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded border border-hairline px-2 py-0.5 font-mono text-[0.68rem] text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
