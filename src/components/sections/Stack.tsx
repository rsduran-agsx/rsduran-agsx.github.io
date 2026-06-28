import { FiCloud, FiCode, FiBox, FiGitBranch, FiTerminal } from 'react-icons/fi'
import type { IconType } from 'react-icons'
import { Section } from '@/components/primitives/Section'
import { Reveal } from '@/components/primitives/Reveal'
import { Chip } from '@/components/primitives/Chip'
import { skillGroups, type SkillGroup } from '@/data/content'
import { cn } from '@/lib/cn'

const ICONS: Record<SkillGroup['icon'], IconType> = {
  cloud: FiCloud,
  code: FiCode,
  box: FiBox,
  gitbranch: FiGitBranch,
  terminal: FiTerminal,
}

export function Stack() {
  return (
    <Section
      id="stack"
      eyebrow="Stack"
      title="The tools I build with"
      intro="No proficiency bars. Just what I actually reach for in production."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((group, i) => {
          const Icon = ICONS[group.icon]
          return (
            <Reveal key={group.key} delay={i * 0.05}>
              <div
                className={cn(
                  'h-full rounded-lg border border-hairline bg-surface/40 p-6 transition-colors hover:border-accent/30',
                  group.key === 'cloud' && 'md:col-span-2',
                )}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className="h-4 w-4 text-accent" />
                  <h3 className="font-mono text-sm uppercase tracking-[0.1em] text-ink">
                    {group.label}
                  </h3>
                </div>
                {group.caption && (
                  <p className="mt-2.5 text-sm text-muted">{group.caption}</p>
                )}
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Chip key={item}>{item}</Chip>
                  ))}
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
