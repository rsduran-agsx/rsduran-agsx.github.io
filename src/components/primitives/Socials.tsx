import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { profile } from '@/data/content'
import { cn } from '@/lib/cn'

const links = [
  { href: profile.github, label: 'GitHub', Icon: FiGithub, external: true },
  { href: profile.linkedin, label: 'LinkedIn', Icon: FiLinkedin, external: true },
  { href: `mailto:${profile.email}`, label: 'Email', Icon: FiMail, external: false },
]

export function Socials({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      {links.map(({ href, label, Icon, external }) => (
        <a
          key={label}
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          aria-label={label}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-hairline text-muted transition-colors hover:border-accent/50 hover:text-accent"
        >
          <Icon className="h-[18px] w-[18px]" />
        </a>
      ))}
    </div>
  )
}
