import { useState } from 'react'
import { skillGroups } from '../../data/site'
import { Section } from '../ui/Section'
import { cn } from '../../lib/cn'

export function Skills() {
  const [active, setActive] = useState<(typeof skillGroups)[number]['id']>(skillGroups[0].id)
  const group = skillGroups.find((g) => g.id === active) ?? skillGroups[0]

  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Tools in motion, not percentages."
      kicker="Status labels reflect where I actually am: learning, exploring, in use. No invented proficiency bars."
    >
      <div className="flex flex-wrap gap-2">
        {skillGroups.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActive(item.id)}
            className={cn(
              'rounded-full px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em]',
              active === item.id ? 'bg-paper text-void' : 'border border-white/10 text-fog',
            )}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {group.items.map((skill) => (
          <article key={skill.name} className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan/30">
            <div className="flex items-center justify-between">
              <h3 className="display text-2xl">{skill.name}</h3>
              <span className="rounded-full bg-cyan/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-cyan">
                {skill.status}
              </span>
            </div>
            <div className="mt-8 h-px overflow-hidden bg-white/10">
              <div className="h-full w-1/3 bg-linear-to-r from-cyan to-violet transition-all group-hover:w-2/3" />
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
