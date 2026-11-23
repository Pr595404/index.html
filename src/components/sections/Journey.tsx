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
