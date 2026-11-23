import { useState, type FormEvent, type ReactNode } from 'react'
import { Play, Download, Mail, X } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from '../ui/BrandIcons'
import { resumeAsset, videoAssets } from '../../data/assets'
import { navItems, person, workshops } from '../../data/site'
import { Section } from '../ui/Section'

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Professional experience"
      title="Internships are ahead."
      kicker="No formal employment is claimed here. Academic project work is the current practice; professional roles will occupy this space when they exist."
    >
      <div className="grid gap-5 md:grid-cols-2">
        <article className="rounded-[28px] border border-white/10 p-7">
          <p className="font-mono text-[11px] text-cyan">Academic practice</p>
          <h3 className="display mt-3 text-3xl">Arduino laboratory projects</h3>
          <p className="mt-4 text-sm leading-7 text-fog">
            Independent and course-adjacent hardware experiments: LED control, Bluetooth lighting, and ultrasonic
            sensing on the Arduino Uno. This is project experience, not a job title.
          </p>
        </article>
        <article className="rounded-[28px] border border-dashed border-white/15 p-7">
          <p className="font-mono text-[11px] text-fog">Open slot</p>
          <h3 className="display mt-3 text-3xl">Future internship</h3>
          <p className="mt-4 text-sm leading-7 text-fog">
            Role, organization, dates, and responsibilities will be added when an internship is confirmed. Until then
            this remains an honest empty state.
          </p>
        </article>
      </div>
    </Section>
  )
}

export function Workshops() {
  return (
    <section className="px-5 py-20 md:px-10">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-cyan">Workshops and activities</p>
        <h2 className="display mt-3 text-4xl md:text-5xl">Campus, still being documented.</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {workshops.map((item) => (
            <article key={item.title} className="rounded-3xl border border-white/10 p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-fog">{item.status}</p>
              <h3 className="display mt-3 text-2xl">{item.title}</h3>
              <p className="mt-3 text-sm text-fog">{item.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Videos() {
  const [activeModalVideo, setActiveModalVideo] = useState<(typeof videoAssets)[number] | null>(null)

  return (
    <section id="videos" className="px-5 py-20 md:px-10 border-t border-white/10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-cyan">Video showcase</p>
            <h2 className="display mt-3 text-4xl md:text-5xl text-paper">Hardware in action.</h2>
            <p className="mt-2 max-w-xl text-sm text-fog">
              Authentic video demonstrations from first-semester Engineering Exploration labs, testing digital pins,
              Bluetooth serial commands, and acoustic distance reflection.
            </p>
          </div>
          <span className="font-mono text-xs text-cyan border border-cyan/30 rounded-full px-4 py-1.5 self-start md:self-auto bg-cyan/5">
            {videoAssets.length} Recorded Demonstrations
          </span>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {videoAssets.map((v) => (
            <VideoCard key={v.id} video={v} onOpenModal={() => setActiveModalVideo(v)} />
          ))}
        </div>

        {/* Video Player Lightbox Modal */}
        {activeModalVideo ? (
          <div
            className="fixed inset-0 z-[90] grid place-items-center bg-void/90 p-4 backdrop-blur-md"
            role="dialog"
            aria-modal
            onClick={(e) => {
              if (e.target === e.currentTarget) setActiveModalVideo(null)
            }}
          >
            <div className="relative w-full max-w-4xl overflow-hidden rounded-[28px] border border-white/20 bg-[#090b14] p-6 shadow-2xl">
              <button
                type="button"
                className="absolute right-5 top-5 z-10 grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-black/60 text-paper hover:bg-white/20 hover:text-cyan transition"
                onClick={() => setActiveModalVideo(null)}
                aria-label="Close video"
              >
                <X size={18} />
              </button>
              <div className="flex items-center gap-2 font-mono text-[11px] text-cyan">
                <span>{activeModalVideo.tag}</span>
                <span>·</span>
                <span>FULL VIEW</span>
              </div>
              <h3 className="display mt-2 text-2xl md:text-3xl text-paper">{activeModalVideo.title}</h3>
              <p className="mt-1 text-sm text-fog">{activeModalVideo.description}</p>
              <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-black">
                <video
                  controls
                  autoPlay
                  playsInline
                  className="w-full max-h-[65vh] object-contain"
                  src={activeModalVideo.src}
                />
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}

function VideoCard({
  video,
  onOpenModal,
}: {
  video: (typeof videoAssets)[number]
  onOpenModal: () => void
}) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-4 transition hover:border-cyan/40 hover:bg-white/[0.04] flex flex-col justify-between">
      <div>
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black">
          <video
            className="h-full w-full object-cover"
            src={video.src}
            preload="metadata"
            muted
            playsInline
            controls
          />
          <button
            type="button"
            onClick={onOpenModal}
            className="absolute top-2 right-2 rounded-lg bg-black/60 px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-cyan border border-white/10 hover:bg-cyan hover:text-void transition"
          >
            Expand ↗
          </button>
        </div>
        <div className="mt-4">
          <span className="font-mono text-[10px] uppercase tracking-widest text-cyan">
            {video.tag}
          </span>
          <h3 className="display mt-1 text-xl text-paper group-hover:text-cyan transition-colors">
            {video.title}
          </h3>
          <p className="mt-2 text-xs leading-relaxed text-fog">{video.description}</p>
        </div>
      </div>
      <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-fog">
        <span>MP4 · Hardware Lab</span>
        <button
          type="button"
          onClick={onOpenModal}
          className="text-cyan hover:underline inline-flex items-center gap-1"
        >
          <Play size={10} className="fill-cyan" /> Watch expanded
        </button>
      </div>
    </article>
  )
}

export function Resume() {
  const [showPreview, setShowPreview] = useState(false)

  return (
    <section id="resume" className="px-5 py-20 md:px-10 border-t border-white/10">
      <div className="mx-auto max-w-6xl rounded-[32px] border border-white/10 bg-white/[0.02] p-8 md:flex md:items-center md:justify-between md:p-14">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-cyan">Curriculum Vitae</p>
          <h2 className="display mt-3 text-4xl md:text-5xl text-paper">Documented trajectory.</h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-fog">
            Authentic academic background, programming practice in C and Python, web foundations, and four verified
            Arduino hardware systems built at Manav Rachna University.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-4 md:mt-0">
          <button
            type="button"
            onClick={() => setShowPreview(true)}
            className="inline-flex items-center gap-2 rounded-full border border-cyan/40 bg-cyan/10 px-6 py-3.5 text-sm font-medium text-cyan hover:bg-cyan hover:text-void transition"
          >
            Preview Resume
          </button>
          <a
            href={resumeAsset.pdf}
            download="Prince_Kumar_Sahu_Resume.pdf"
            className="inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3.5 text-sm font-medium text-void hover:bg-white transition"
          >
            <Download size={16} /> Download PDF
          </a>
        </div>
      </div>

      {/* Interactive Resume Modal */}
      {showPreview ? (
        <div
          className="fixed inset-0 z-[90] grid place-items-center bg-void/90 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowPreview(false)
          }}
        >
          <div className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-[28px] border border-white/20 bg-[#090b14] p-8 md:p-12 shadow-2xl">
            <button
              type="button"
              className="absolute right-6 top-6 z-10 grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-black/60 text-paper hover:bg-white/20 hover:text-cyan transition"
              onClick={() => setShowPreview(false)}
              aria-label="Close preview"
            >
              <X size={18} />
            </button>

            <div className="border-b border-white/10 pb-6">
              <h3 className="display text-3xl md:text-4xl text-paper">{person.fullName.toUpperCase()}</h3>
              <p className="font-mono text-xs text-cyan mt-1">{person.title} · {person.degree}</p>
              <p className="mt-2 text-xs text-fog">
                {person.university} · {person.location} · {person.email}
              </p>
            </div>

            <div className="mt-6 space-y-6 text-sm">
              <div>
                <h4 className="font-mono text-[11px] uppercase tracking-wider text-cyan">Education</h4>
                <div className="mt-2 text-paper">
                  <p className="font-semibold">{person.degree}</p>
                  <p className="text-fog text-xs">{person.university} · {person.semester} ({person.academicYear})</p>
                </div>
              </div>

              <div>
                <h4 className="font-mono text-[11px] uppercase tracking-wider text-cyan">Technical Skills</h4>
                <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-fog">
                  <p><strong className="text-paper">Languages:</strong> C (Learning), Python (Beginner / Learning)</p>
                  <p><strong className="text-paper">Web:</strong> HTML, CSS, Responsive Layouts</p>
                  <p><strong className="text-paper">Embedded / Hardware:</strong> Arduino Uno, Digital I/O, Bluetooth, Ultrasonic</p>
                  <p><strong className="text-paper">Developer Tools:</strong> VS Code, Git, GitHub, Claude, ChatGPT</p>
                </div>
              </div>

              <div>
                <h4 className="font-mono text-[11px] uppercase tracking-wider text-cyan">Hardware & Engineering Projects</h4>
                <ul className="mt-2 space-y-3 text-xs text-fog">
                  <li className="border-l-2 border-cyan/40 pl-3">
                    <strong className="text-paper block text-sm">Arduino LED Blinking System</strong>
                    Controlled digital outputs on Arduino Uno to establish microcontroller timing loops.
                  </li>
                  <li className="border-l-2 border-cyan/40 pl-3">
                    <strong className="text-paper block text-sm">Bluetooth-Controlled LED System</strong>
                    Paired wireless serial communication module with Arduino for remote trigger actions.
                  </li>
                  <li className="border-l-2 border-cyan/40 pl-3">
                    <strong className="text-paper block text-sm">Multiple LED Blinking System</strong>
                    Orchestrated synchronized multi-channel pin states across breadboard circuit.
                  </li>
                  <li className="border-l-2 border-cyan/40 pl-3">
                    <strong className="text-paper block text-sm">Arduino-Based Radar System</strong>
                    Acoustic wave distance sensing with ultrasonic transducer for spatial detection.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-mono text-[11px] uppercase tracking-wider text-cyan">Philosophy & Aim</h4>
                <blockquote className="mt-2 border-l border-white/20 pl-4 italic text-xs text-paper/80">
                  "{person.tagline}"
                </blockquote>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => window.print()}
                className="rounded-full border border-white/15 px-5 py-2.5 text-xs font-mono text-fog hover:text-paper"
              >
                Print CV
              </button>
              <a
                href={resumeAsset.pdf}
                download="Prince_Kumar_Sahu_Resume.pdf"
                className="rounded-full bg-paper px-5 py-2.5 text-xs font-mono text-void font-semibold"
              >
                Download PDF
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  )
}

export function Contact() {
  const [state, setState] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [note, setNote] = useState('')

  function validate() {
    const next: Record<string, string> = {}
    if (!state.name.trim()) next.name = 'Name is required.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) next.email = 'Enter a valid email.'
    if (!state.subject.trim()) next.subject = 'Subject is required.'
    if (state.message.trim().length < 12) next.message = 'Write a slightly longer message.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!validate()) {
      setNote('')
      return
    }
    const mailto = `mailto:${person.email}?subject=${encodeURIComponent(state.subject)}&body=${encodeURIComponent(
      `From: ${state.name} <${state.email}>\n\n${state.message}`,
    )}`
    setNote(
      'This site is not connected to a message server. Your email client can open with the draft, or copy the message and send it directly.',
    )
    window.location.href = mailto
  }

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Start a conversation."
      kicker="For internships, collaborations, or academic questions. Messages are not silently sent from this page."
    >
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-4">
          <a href={`mailto:${person.email}`} className="flex items-center gap-3 text-paper">
            <Mail size={16} className="text-cyan" /> {person.email}
          </a>
          <a href={person.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-paper">
            <GitHubIcon /> {person.githubHandle}
          </a>
          <a href={person.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-paper">
            <LinkedInIcon /> {person.linkedinHandle}
          </a>
        </div>
        <form onSubmit={onSubmit} className="space-y-4" noValidate>
          <Field label="Name" error={errors.name}>
            <input
              value={state.name}
              onChange={(e) => setState({ ...state, name: e.target.value })}
              className="w-full bg-transparent outline-none"
              autoComplete="name"
            />
          </Field>
          <Field label="Email" error={errors.email}>
            <input
              type="email"
              value={state.email}
              onChange={(e) => setState({ ...state, email: e.target.value })}
              className="w-full bg-transparent outline-none"
              autoComplete="email"
            />
          </Field>
          <Field label="Subject" error={errors.subject}>
            <input
              value={state.subject}
              onChange={(e) => setState({ ...state, subject: e.target.value })}
              className="w-full bg-transparent outline-none"
            />
          </Field>
          <Field label="Message" error={errors.message}>
            <textarea
              rows={5}
              value={state.message}
              onChange={(e) => setState({ ...state, message: e.target.value })}
              className="w-full resize-y bg-transparent outline-none"
            />
          </Field>
          <button type="submit" className="rounded-full bg-paper px-6 py-3 text-sm font-medium text-void">
            Compose message
          </button>
          {note ? <p className="text-sm text-fog">{note}</p> : null}
        </form>
      </div>
    </Section>
  )
}

function Field({
  label,
  error,
  children,
}: {
  label: string
  error?: string
  children: ReactNode
}) {
  return (
    <label className="block rounded-2xl border border-white/10 px-4 py-3">
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-fog">{label}</span>
      <div className="mt-1">{children}</div>
      {error ? <p className="mt-1 text-xs text-cyan">{error}</p> : null}
    </label>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-12 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:justify-between">
        <div>
          <p className="display text-2xl">{person.fullName}</p>
          <p className="serif mt-2 italic text-fog">{person.tagline}</p>
        </div>
        <nav className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-fog">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="hover:text-paper">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="mx-auto mt-10 flex max-w-6xl flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-fog">
        <p>© {new Date().getFullYear()} {person.fullName}. All rights reserved.</p>
        <div className="flex gap-4">
          <a href={person.github}>GitHub</a>
          <a href={person.linkedin}>LinkedIn</a>
          <a href={`mailto:${person.email}`}>Email</a>
        </div>
      </div>
    </footer>
  )
}
