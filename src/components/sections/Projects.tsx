import { useEffect, useState } from 'react'
import { X, Play, Cpu, CheckCircle2 } from 'lucide-react'
import { projects } from '../../data/site'
import type { ProjectId } from '../../data/site'
import { projectMedia } from '../../data/assets'
import { Section } from '../ui/Section'

export function Projects() {
  const [open, setOpen] = useState<ProjectId | null>(null)
  const active = projects.find((p) => p.id === open)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <Section
      id="projects"
      eyebrow="Academic projects"
      title="Four systems on the bench."
      kicker="Arduino experiments from first light to first sensing. Each project includes complete working principles and authentic demonstration video."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <button
            key={project.id}
            type="button"
            onClick={() => setOpen(project.id)}
            className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.02] text-left transition hover:border-cyan/40 hover:bg-white/[0.04]"
          >
            <Board vis={project.id} />
            <div className="absolute inset-0 bg-linear-to-t from-void via-void/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] text-cyan">{project.index}</span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan/30 bg-cyan/10 px-2.5 py-0.5 font-mono text-[10px] text-cyan">
                  <Play size={10} className="fill-cyan" /> Video Demo
                </span>
              </div>
              <h3 className="display mt-2 text-2xl md:text-3xl text-paper group-hover:text-cyan transition-colors">
                {project.title}
              </h3>
              <p className="mt-2 max-w-md text-sm text-fog line-clamp-2">{project.summary}</p>
              <div className="mt-4 flex items-center justify-between">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan">
                  Open case study & video →
                </p>
                <div className="flex gap-1">
                  {project.components.map((c) => (
                    <span key={c} className="rounded bg-white/5 px-2 py-0.5 text-[11px] text-fog">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-[80] grid place-items-center bg-void/85 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(null)
          }}
        >
          <div className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-[28px] border border-white/15 bg-[#090b14] p-6 md:p-10 shadow-2xl">
            <button
              type="button"
              className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full border border-white/15 text-paper hover:bg-white/10 hover:text-cyan transition"
              onClick={() => setOpen(null)}
              aria-label="Close project"
            >
              <X size={18} />
            </button>

            <div className="flex items-center gap-2 font-mono text-[11px] text-cyan">
              <span>{active.index} / 04</span>
              <span>·</span>
              <span>ENGINEERING EXPLORATION</span>
            </div>

            <h3 className="display mt-2 text-3xl md:text-5xl text-paper">{active.title}</h3>
            <p className="mt-3 text-base text-fog leading-relaxed">{active.summary}</p>

            {/* Video demonstration showcase */}
            <div className="mt-6 overflow-hidden rounded-2xl border border-white/15 bg-black/60 p-2">
              <div className="flex items-center justify-between px-3 py-2 text-xs font-mono text-cyan">
                <span className="flex items-center gap-2">
                  <Play size={12} className="fill-cyan" /> Live Hardware Demonstration
                </span>
                <span className="text-fog">Arduino Uno · Real bench capture</span>
              </div>
              <video
                controls
                preload="metadata"
                playsInline
                className="w-full rounded-xl max-h-[380px] bg-black object-contain"
                src={projectMedia[active.id]?.video}
              >
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <Block title="Objective" body={active.objective} />
              <Block title="Working principle" body={active.working} />
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan flex items-center gap-2">
                <Cpu size={14} /> Components Used
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {active.components.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-cyan/30 bg-cyan/10 px-3.5 py-1 text-xs font-mono text-paper"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-fog">Technologies & Tools</p>
              <p className="mt-2 text-sm text-paper">{active.technologies.join(' · ')}</p>
            </div>

            <div className="mt-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-fog">Learning outcomes</p>
              <ul className="mt-3 space-y-2 text-sm text-fog">
                {active.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-cyan shrink-0 mt-0.5" />
                    <span className="text-paper/90">{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : null}
    </Section>
  )
}

function Block({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan">{title}</p>
      <p className="mt-2 text-sm leading-relaxed text-paper/90">{body}</p>
    </div>
  )
}

function Board({ vis, tall }: { vis: ProjectId; tall?: boolean }) {
  const hues: Record<ProjectId, [string, string]> = {
    'led-blinking': ['#5ee7ff', '#123'],
    'bluetooth-led': ['#4d8dff', '#5ee7ff'],
    'multiple-led': ['#8b7dff', '#5ee7ff'],
    'radar-system': ['#5ee7ff', '#8b7dff'],
  }
  const [a, b] = hues[vis]
  return (
    <svg viewBox="0 0 640 420" className={`w-full ${tall ? 'h-56' : 'h-72'} bg-[#070914]`}>
      <defs>
        <radialGradient id={`${vis}-g`} cx="50%" cy="40%">
          <stop offset="0%" stopColor={a} stopOpacity="0.55" />
          <stop offset="100%" stopColor={b} stopOpacity="0.05" />
        </radialGradient>
      </defs>
      <rect width="640" height="420" fill={`url(#${vis}-g)`} />
      {Array.from({ length: 8 }).map((_, i) => (
        <circle
          key={i}
          cx={80 + i * 70}
          cy={210}
          r={vis === 'multiple-led' ? 14 : 8}
          fill={a}
          opacity={0.35 + (i % 3) * 0.15}
        />
      ))}
      {vis === 'radar-system'
        ? [40, 80, 120, 160].map((r) => (
            <circle key={r} cx="320" cy="360" r={r} fill="none" stroke={a} strokeOpacity="0.35" />
          ))
        : null}
      {vis === 'bluetooth-led' ? (
        <path d="M300 80 l40 50 -40 50 40 50" fill="none" stroke={a} strokeWidth="3" />
      ) : null}
    </svg>
  )
}
