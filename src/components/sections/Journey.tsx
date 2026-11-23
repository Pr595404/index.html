import { journey, person } from '../../data/site'
import { Section } from '../ui/Section'

export function Journey() {
  return (
    <Section
      id="journey"
      eyebrow="Engineering journey"
      title="A timeline of firsts."
      kicker="Milestones without invented dates. Each step is a real beginning, not a finished credential."
    >
      <div className="relative">
        <div className="absolute left-[11px] top-3 bottom-3 w-px bg-linear-to-b from-cyan/70 via-violet/40 to-transparent md:left-1/2" />
        <ol className="space-y-8">
          {journey.map((item, index) => (
            <li
              key={item.id}
              className={`relative grid gap-4 md:grid-cols-2 ${index % 2 === 1 ? 'md:text-right' : ''}`}
            >
              <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                <div className="glass rounded-3xl p-6">
                  <p className="font-mono text-[11px] text-cyan">0{index + 1}</p>
                  <h3 className="display mt-3 text-2xl">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-fog">{item.body}</p>
                </div>
              </div>
              <span className="absolute left-0 top-8 h-6 w-6 rounded-full border border-cyan/50 bg-void md:left-1/2 md:-translate-x-1/2">
                <span className="absolute inset-1.5 rounded-full bg-cyan" />
              </span>
            </li>
          ))}
        </ol>
      </div>
      <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.2em] text-fog">
        {person.university} · {person.semester} · {person.academicYear}
      </p>
    </Section>
  )
}

export function Education() {
  return (
    <section className="px-5 md:px-10">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,rgba(77,141,255,0.12),rgba(3,4,10,0.4)_40%,rgba(139,125,255,0.12))] p-8 md:p-14">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-cyan">Education</p>
        <h2 className="display mt-4 text-4xl md:text-6xl">B.Tech CSE (AI & ML)</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <Edu label="University" value="Manav Rachna University" />
          <Edu label="Semester" value="First Semester" />
          <Edu label="Academic year" value="2026" />
        </div>
      </div>
    </section>
  )
}

function Edu({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-fog">{label}</p>
      <p className="mt-2 text-lg text-paper">{value}</p>
    </div>
  )
}
