import { BackToTop, Cursor, ProgressBar } from './components/layout/Chrome'
import { Navbar } from './components/layout/Navbar'
import { Hero } from './components/hero/Hero'
import { About } from './components/sections/About'
import { Journey } from './components/sections/Journey'
import { Education } from './components/sections/Education'
import { Skills } from './components/sections/Skills'
import { Exploration } from './components/sections/Exploration'
import { Projects } from './components/sections/Projects'
import {
  Contact,
  Experience,
  Footer,
  Resume,
  Videos,
  Workshops,
} from './components/sections/Rest'

export default function App() {
  return (
    <>
      <div className="noise" aria-hidden />
      <ProgressBar />
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <div className="overflow-hidden border-y border-white/8 py-4">
          <div className="marquee flex w-max gap-10 font-mono text-[11px] uppercase tracking-[0.35em] text-fog">
            {Array.from({ length: 2 }).map((_, i) => (
              <p key={i} className="flex gap-10">
                <span>Exploring Intelligence</span>
                <span>Engineering Possibilities</span>
                <span>AI & ML</span>
                <span>Manav Rachna University</span>
                <span>First Semester 2026</span>
              </p>
            ))}
          </div>
        </div>
        <About />
        <Journey />
        <Education />
        <Skills />
        <Exploration />
        <Projects />
        <Experience />
        <Workshops />
        <Videos />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
