import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Numbers } from '@/components/sections/Numbers'
import { CaseStudies } from '@/components/sections/CaseStudies'
import { Stack } from '@/components/sections/Stack'
import { Credentials } from '@/components/sections/Credentials'
import { Contact } from '@/components/sections/Contact'

const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"

export default function App() {
  return (
    <>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-ground"
      >
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <About />
        <Numbers />
        <CaseStudies />
        <Stack />
        <Credentials />
        <Contact />
      </main>
      <Footer />

      {/* film grain */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[60] opacity-[0.045] mix-blend-soft-light"
        style={{ backgroundImage: GRAIN, backgroundSize: '140px 140px' }}
      />
    </>
  )
}
