import { Mail } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from '../ui/BrandIcons'
import { intro, person } from '../../data/site'
import { Portrait } from '../ui/Portrait'
import { Section } from '../ui/Section'

export function About() {
  return (
    <Section
      id="about"
      eyebrow="Personal introduction"
      title="A student of systems, not a finished product."
      kicker="First-semester CSE (AI & ML). Curious, methodical, and building in public from the first circuit and the first program."
    >
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="overflow-hidden rounded-[28px] border border-white/10">
          <Portrait className="h-[420px] w-full" />
        </div>
        <div className="space-y-6">
          {intro.long.split('\n\n').map((para) => (
            <p key={para.slice(0, 24)} className="text-[17px] leading-8 text-fog">
              {para}
            </p>
          ))}
          <blockquote className="serif border-l border-cyan/50 pl-5 text-2xl italic text-paper">
            {intro.philosophy}
          </blockquote>
          <dl className="grid gap-4 sm:grid-cols-2">
            <Fact label="Education" value={person.degree} />
            <Fact label="University" value={person.university} />
            <Fact label="Semester" value={`${person.semester} · ${person.academicYear}`} />
            <Fact label="Based in" value={person.location} />
          </dl>
          <div className="flex flex-wrap gap-2">
            {intro.interests.map((item) => (
              <span key={item} className="rounded-full border border-white/10 px-3 py-1 text-xs text-fog">
                {item}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 pt-2 font-mono text-xs text-cyan">
            <a href={`mailto:${person.email}`} className="inline-flex items-center gap-2">
              <Mail size={14} /> {person.email}
            </a>
            <a href={person.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
              <GitHubIcon /> {person.githubHandle}
            </a>
            <a href={person.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
              <LinkedInIcon /> {person.linkedinHandle}
            </a>
          </div>
        </div>
      </div>
    </Section>
  )
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
      <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-fog">{label}</dt>
      <dd className="mt-2 text-sm leading-6 text-paper">{value}</dd>
    </div>
  )
}
