import { BookOpen, Calendar, MapPin } from 'lucide-react'
import { universityAssets } from '../../data/assets'
import { Section } from '../ui/Section'

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Academic Foundation"
      title="Manav Rachna University."
      kicker="Where engineering rigor meets artificial intelligence exploration. Dedicated CSE (AI & ML) study in Faridabad, India."
    >
      <div className="relative overflow-hidden rounded-[36px] border border-white/15 bg-[radial-gradient(ellipse_at_80%_20%,rgba(94,231,255,0.1),transparent_50%),linear-gradient(145deg,#0c1020,#04050a)] p-6 sm:p-10 md:p-14 shadow-2xl">
        {/* Top Header: Logo + Verification Badge */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-white/10 pb-8">
          <div className="flex items-center gap-5">
            <div className="rounded-2xl border border-white/15 bg-white p-3 shadow-lg flex items-center justify-center">
              <img
                src={universityAssets.logo}
                alt="Manav Rachna University Official Logo"
                className="h-10 sm:h-12 w-auto object-contain"
                loading="lazy"
              />
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-cyan">Official Institution</p>
              <h3 className="display text-2xl sm:text-3xl text-paper">MANAV RACHNA UNIVERSITY</h3>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 self-start rounded-full border border-cyan/30 bg-cyan/10 px-4 py-1.5 font-mono text-xs text-cyan">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
            </span>
            <span>Accredited NAAC 'A' Grade</span>
          </div>
        </div>

        {/* Center Grid: Campus Photo Showcase + Degree Details Card */}
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.25fr_1fr] items-center">
          {/* Large Campus Architectural Visual Anchor */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/15 bg-black">
            <img
              src={universityAssets.campus}
              alt="Manav Rachna University Campus Architectural View"
              className="w-full aspect-[2/1] object-cover object-center transition duration-700 group-hover:scale-105 filter brightness-95 contrast-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-linear-to-t from-void via-void/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-cyan">
                  School of Engineering & Technology
                </p>
                <p className="mt-1 text-sm font-medium text-paper">Manav Rachna Campus View</p>
              </div>
              <span className="rounded-full bg-void/80 border border-white/15 px-3 py-1 font-mono text-[10px] text-fog">
                Faridabad, Haryana
              </span>
            </div>
          </div>

          {/* Academic Information Card */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-cyan/20 bg-cyan/5 p-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan">Degree Program</span>
              <h4 className="display mt-2 text-2xl sm:text-3xl text-paper">
                B.Tech — Computer Science & Engineering
              </h4>
              <div className="mt-3 inline-block rounded-xl border border-violet/30 bg-violet/10 px-3 py-1 text-xs font-mono text-violet">
                Specialization: Artificial Intelligence & Machine Learning
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-fog">
                  <Calendar size={12} className="text-cyan" /> Current Term
                </span>
                <p className="mt-2 text-base font-semibold text-paper">First Semester</p>
                <p className="text-xs text-fog">Foundation Year</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-fog">
                  <BookOpen size={12} className="text-cyan" /> Academic Year
                </span>
                <p className="mt-2 text-base font-semibold text-paper">2026</p>
                <p className="text-xs text-fog">Four-Year B.Tech Track</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs text-fog font-mono">
              <MapPin size={14} className="text-cyan shrink-0" />
              <span>Campus: Delhi-Surajkund Road, Sector 43, Faridabad, Haryana</span>
            </div>
          </div>
        </div>

        {/* Bottom Highlights */}
        <div className="mt-10 pt-8 border-t border-white/10 grid gap-4 sm:grid-cols-3 text-sm">
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-4">
            <p className="font-mono text-[10px] uppercase tracking-wider text-cyan">Coursework Exploration</p>
            <p className="mt-2 text-xs leading-relaxed text-fog">
              Foundations in structured programming (C), algorithmic logic, mathematical thinking, and hands-on laboratory circuits.
            </p>
          </div>
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-4">
            <p className="font-mono text-[10px] uppercase tracking-wider text-cyan">AI & ML Track</p>
            <p className="mt-2 text-xs leading-relaxed text-fog">
              Curriculum tailored towards computational intelligence, data patterns, predictive models, and modern machine learning frameworks.
            </p>
          </div>
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-4">
            <p className="font-mono text-[10px] uppercase tracking-wider text-cyan">Engineering Labs</p>
            <p className="mt-2 text-xs leading-relaxed text-fog">
              Practical bench experiments with Arduino microcontrollers, digital sensors, serial telemetry, and hardware interfaces.
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
