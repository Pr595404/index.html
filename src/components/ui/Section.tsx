import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

type Props = {
  id: string
  eyebrow?: string
  title: string
  kicker?: string
  children: ReactNode
  className?: string
}

export function Section({ id, eyebrow, title, kicker, children, className }: Props) {
  return (
    <section id={id} className={cn('relative scroll-mt-24 px-5 py-24 md:px-10 lg:py-32', className)}>
      <div className="mx-auto max-w-6xl">
        <header className="mb-14 max-w-3xl">
          {eyebrow ? (
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.28em] text-cyan/80">{eyebrow}</p>
          ) : null}
          <h2 className="display text-4xl leading-[0.95] text-paper md:text-6xl">{title}</h2>
          {kicker ? <p className="mt-5 max-w-xl text-base leading-relaxed text-fog">{kicker}</p> : null}
        </header>
        {children}
      </div>
    </section>
  )
}
