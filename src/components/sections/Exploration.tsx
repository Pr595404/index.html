import { exploration } from '../../data/site'
import { Section } from '../ui/Section'

export function Exploration() {
  return (
    <Section
      id="exploration"
      eyebrow="Engineering exploration"
      title="Current study. Future terrain."
      kicker="A map of interests, split honestly: what I am learning now, and what I want to grow into."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-[28px] border border-cyan/20 bg-cyan/5 p-6 md:p-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-cyan">Now</p>
          <ul className="mt-6 space-y-5">
            {exploration.current.map((item) => (
              <li key={item.title} className="border-t border-white/10 pt-5 first:border-0 first:pt-0">
                <h3 className="display text-2xl">{item.title}</h3>
                <p className="mt-2 text-sm text-fog">{item.note}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-[28px] border border-violet/25 bg-violet/5 p-6 md:p-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-violet">Next</p>
          <ul className="mt-6 space-y-5">
            {exploration.future.map((item) => (
              <li key={item.title} className="border-t border-white/10 pt-5 first:border-0 first:pt-0">
                <h3 className="display text-2xl">{item.title}</h3>
                <p className="mt-2 text-sm text-fog">{item.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
