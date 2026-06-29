import { lazy, Suspense } from 'react'
import { FiArrowRight, FiFileText } from 'react-icons/fi'
import { Reveal } from '@/components/primitives/Reveal'
import { StatCard } from '@/components/primitives/StatCard'
import { Socials } from '@/components/primitives/Socials'
import { heroStats, profile } from '@/data/content'

// Three.js globe is heavy, so code-split it.
const GlobeViz = lazy(() => import('@/components/visuals/GlobeViz'))

function GlobeFallback() {
  return (
    <div className="mx-auto grid aspect-square w-full max-w-[460px] place-items-center">
      <div className="h-3/4 w-3/4 animate-pulse rounded-full border border-hairline/40 [box-shadow:inset_0_0_90px_rgba(52,224,196,0.12)]" />
    </div>
  )
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pb-16 pt-28 lg:pt-24"
    >
      {/* ambient background */}
      <div className="grid-bg pointer-events-none absolute inset-0 -z-20 opacity-[0.5] [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(52,224,196,0.1),transparent)]" />

      <div className="mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* left, text */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="inline-flex items-center gap-2.5 rounded-full border border-hairline bg-surface/50 px-3.5 py-1.5 font-mono text-xs text-muted">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                Open to Cloud / DevOps / SRE roles
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="font-display mt-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.4rem]">
                I build the <span className="text-accent">AWS foundations</span>{' '}
                other teams ship on.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
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

          {/* right, globe */}
          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <div className="relative mx-auto w-full max-w-[300px] sm:max-w-[380px] lg:max-w-[440px]">
                <div className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-[radial-gradient(circle,rgba(52,224,196,0.14),transparent_62%)] blur-md" />
                <Suspense fallback={<GlobeFallback />}>
                  <GlobeViz />
                </Suspense>
                <p className="mt-3 text-center font-mono text-xs text-muted">
                  <span className="text-accent">◍</span> designed multi-region ·
                  7 AWS regions
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* stat strip */}
        <Reveal delay={0.1}>
          <div className="mt-16 grid grid-cols-2 gap-4 border-t border-hairline pt-10 md:grid-cols-4">
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
