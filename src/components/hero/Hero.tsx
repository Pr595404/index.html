import { lazy, Suspense, type ReactNode } from 'react'
import { ArrowDownRight, Download, Mail } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from '../ui/BrandIcons'
import { person } from '../../data/site'
import { resumeAsset } from '../../data/assets'
import { HolographicPortrait } from './HolographicPortrait'
import { useMagnetic } from '../../hooks/useMagnetic'

const NeuralField = lazy(() =>
  import('./NeuralField').then((m) => ({ default: m.NeuralField })),
)

export function Hero() {
  const explore = useMagnetic(12)
  const resume = useMagnetic(12)

  return (
    <section id="home" className="relative min-h-svh overflow-hidden">
      <Suspense fallback={<div className="absolute inset-0 bg-void" />}>
        <NeuralField />
      </Suspense>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(77,141,255,0.16),transparent_42%),radial-gradient(ellipse_at_80%_80%,rgba(139,125,255,0.14),transparent_40%),linear-gradient(to_bottom,rgba(3,4,10,0.25),rgba(3,4,10,0.88))]" />

      <div className="relative mx-auto flex min-h-svh max-w-6xl flex-col justify-end px-5 pb-10 pt-28 md:px-8 md:pb-14">
        <div className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.32em] text-cyan">
          <span className="relative grid h-2 w-2 place-items-center">
            <span className="absolute h-2 w-2 rounded-full bg-cyan pulse-ring" />
            <span className="h-2 w-2 rounded-full bg-cyan" />
          </span>
          {person.title}
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h1 className="display text-[13vw] leading-[0.8] text-paper sm:text-[11vw] lg:text-[6.4rem]">
              <span className="block kinetic">
                <span className="translate-y-0">{person.firstName.toUpperCase()}</span>
              </span>
              <span className="block text-transparent [-webkit-text-stroke:1px_rgba(238,241,248,0.55)]">
                {person.lastName.toUpperCase()}
              </span>
            </h1>
            <p className="serif mt-6 max-w-xl text-xl italic text-cyan/90 md:text-2xl">{person.tagline}</p>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-fog md:text-base">
              First-semester B.Tech CSE (AI & ML) student at Manav Rachna University, exploring artificial intelligence,
              machine learning, and software development through structured programming and hands-on systems.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                ref={explore.ref as never}
                onPointerMove={explore.onPointerMove}
                onPointerLeave={explore.onPointerLeave}
                className="inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3 text-sm font-medium text-void transition-transform hover:bg-white"
              >
                Explore Projects
                <ArrowDownRight size={16} />
              </a>
              {resumeAsset.available ? (
                <a
                  href={resumeAsset.pdf}
                  download="Prince_Kumar_Sahu_Resume.pdf"
                  ref={resume.ref as never}
                  onPointerMove={resume.onPointerMove}
                  onPointerLeave={resume.onPointerLeave}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm text-paper hover:bg-white/10 hover:border-cyan/40 transition"
                >
                  <Download size={16} />
                  Download Resume
                </a>
              ) : (
                <a
                  href="#resume"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm text-paper"
                >
                  <Download size={16} />
                  Download Resume
                </a>
              )}
            </div>

            <div className="mt-8 flex items-center gap-3">
              <Social href={`mailto:${person.email}`} label="Email">
                <Mail size={16} />
              </Social>
              <Social href={person.github} label="GitHub">
                <GitHubIcon />
              </Social>
              <Social href={person.linkedin} label="LinkedIn">
                <LinkedInIcon />
              </Social>
              <span className="ml-2 font-mono text-[11px] text-fog/60">
                {person.githubHandle}
              </span>
            </div>
          </div>

          {/* Focal 3D Holographic Personal Portrait */}
          <div className="relative w-full">
            <HolographicPortrait className="w-full" />
          </div>
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-6 text-[11px] uppercase tracking-[0.22em] text-fog">
          <a href="#about" className="inline-flex items-center gap-3 hover:text-cyan transition-colors">
            <span className="h-10 w-px bg-cyan/70" />
            Scroll to enter the system
          </a>
          <span className="hidden font-mono md:inline">Manav Rachna University · Faridabad</span>
        </div>
      </div>
    </section>
  )
}

function Social({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: ReactNode
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      className="grid h-10 w-10 place-items-center rounded-full border border-white/12 text-paper/80 hover:border-cyan/40 hover:text-cyan"
    >
      {children}
    </a>
  )
}
