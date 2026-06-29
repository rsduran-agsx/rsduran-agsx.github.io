import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Stack } from '@/components/sections/Stack'
import { Experience } from '@/components/sections/Experience'
import { CaseStudies } from '@/components/sections/CaseStudies'
import { Credentials } from '@/components/sections/Credentials'
import { Contact } from '@/components/sections/Contact'

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
        <Stack />
        <Experience />
        <CaseStudies />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
