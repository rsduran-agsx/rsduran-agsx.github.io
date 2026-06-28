import { FiArrowUp } from 'react-icons/fi'
import { Socials } from '@/components/primitives/Socials'

export function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <a href="#home" className="font-mono text-sm">
            <span className="text-accent">{'>'}</span>{' '}
            <span className="font-semibold text-ink">rein.duran</span>
          </a>
          <p className="mt-3 font-mono text-xs text-muted">
            Cloud / DevOps Engineer · Manila, PH
          </p>
          <p className="mt-1 font-mono text-[0.7rem] text-muted/60">
            Built with React + Tailwind · deployed via GitHub Actions ·{' '}
            {new Date().getFullYear()}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Socials />
          <a
            href="#home"
            aria-label="Back to top"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-hairline text-muted transition-colors hover:border-accent/50 hover:text-accent"
          >
            <FiArrowUp className="h-[18px] w-[18px]" />
          </a>
        </div>
      </div>
    </footer>
  )
}
