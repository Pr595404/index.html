import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navItems, person } from '../../data/site'
import { useActiveSection } from '../../hooks/useActiveSection'
import { cn } from '../../lib/cn'

export function Navbar() {
  const active = useActiveSection()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors',
        scrolled || open ? 'glass' : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#home" className="group flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/5 font-mono text-[11px] text-cyan">
            PK
          </span>
          <span className="display text-sm tracking-tight md:text-base">{person.fullName}</span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                'rounded-full px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors',
                active === item.id ? 'bg-white/10 text-paper' : 'text-fog hover:text-paper',
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full border border-white/10 lg:hidden"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open ? (
        <nav className="border-t border-white/10 px-6 py-8 lg:hidden" aria-label="Mobile">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'block rounded-2xl px-4 py-3 display text-2xl',
                    active === item.id ? 'text-cyan' : 'text-paper',
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  )
}
