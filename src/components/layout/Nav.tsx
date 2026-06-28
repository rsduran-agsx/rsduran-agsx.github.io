import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { FiMenu, FiX, FiFileText } from 'react-icons/fi'
import { navItems, profile } from '@/data/content'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { cn } from '@/lib/cn'

const NAV_IDS = navItems.map((n) => n.id)

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const ids = useMemo(() => NAV_IDS, [])
  const active = useScrollSpy(ids)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled
          ? 'border-b border-hairline bg-ground/80 backdrop-blur-md'
          : 'border-b border-transparent',
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#home"
          className="flex items-center gap-1.5 font-mono text-sm"
          aria-label="Rein Duran — home"
        >
          <span className="text-accent">{'>'}</span>
          <span className="font-semibold text-ink">
            rein<span className="text-muted">.</span>duran
          </span>
          <span className="ml-0.5 inline-block h-3.5 w-[7px] translate-y-[1px] animate-pulse bg-accent/70" />
        </a>

        <ul className="hidden items-center gap-0.5 md:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={cn(
                  'rounded px-3 py-2 font-mono text-[0.8rem] transition-colors',
                  active === item.id ? 'text-accent' : 'text-muted hover:text-ink',
                )}
              >
                <span className="text-accent/40">/</span>
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-flex items-center gap-1.5 rounded-md border border-accent/40 bg-accent/10 px-3 py-1.5 font-mono text-[0.8rem] text-accent transition-colors hover:bg-accent/20"
            >
              <FiFileText className="h-3.5 w-3.5" /> Resume
            </a>
          </li>
        </ul>

        <button
          className="inline-flex items-center justify-center rounded-md border border-hairline p-2 text-ink transition-colors hover:border-accent/50 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-b border-hairline bg-ground/95 backdrop-blur-md md:hidden"
          >
            <ul className="mx-auto flex max-w-6xl flex-col px-6 py-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'block rounded px-3 py-3 font-mono text-sm',
                      active === item.id ? 'text-accent' : 'text-muted',
                    )}
                  >
                    <span className="text-accent/40">/</span> {item.label}
                  </a>
                </li>
              ))}
              <li className="px-3 pt-2">
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-1.5 rounded-md border border-accent/40 bg-accent/10 px-3 py-2 font-mono text-sm text-accent"
                >
                  <FiFileText className="h-4 w-4" /> Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
