import { Reveal } from '@/components/primitives/Reveal'
import { StatCard } from '@/components/primitives/StatCard'
import { heroStats } from '@/data/content'

export function Numbers() {
  return (
    <section className="relative px-6 py-24 md:py-28">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-x-8 gap-y-14 md:grid-cols-4">
        {heroStats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <StatCard
              bare
              value={s.value}
              prefix={s.prefix}
              suffix={s.suffix}
              decimals={s.decimals}
              label={s.label}
              sub={s.sub}
            />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
