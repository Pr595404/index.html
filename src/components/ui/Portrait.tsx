import { useState } from 'react'
import { person } from '../../data/site'
import { profileAssets } from '../../data/assets'

export function Portrait({ className = '' }: { className?: string }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(94,231,255,0.28),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(139,125,255,0.3),transparent_42%),linear-gradient(160deg,#0b1020,#05060c)]" />
        <svg className="absolute inset-0 h-full w-full opacity-40" viewBox="0 0 400 500">
          {Array.from({ length: 18 }).map((_, i) => (
            <circle
              key={i}
              cx={80 + (i % 6) * 48}
              cy={90 + Math.floor(i / 6) * 90}
              r={3 + (i % 3)}
              fill={i % 2 ? '#5ee7ff' : '#8b7dff'}
            />
          ))}
          {Array.from({ length: 12 }).map((_, i) => (
            <line
              key={`l-${i}`}
              x1={80 + (i % 5) * 55}
              y1={90}
              x2={140 + (i % 4) * 50}
              y2={380}
              stroke="rgba(94,231,255,0.25)"
              strokeWidth="0.6"
            />
          ))}
        </svg>
        <div className="absolute inset-x-0 bottom-0 p-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-cyan">Portrait slot</p>
          <p className="display mt-2 text-3xl">{person.firstName}</p>
          <p className="text-sm text-fog">Add portrait.jpg in public/assets/profile</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`relative overflow-hidden bg-[#090b14] flex items-center justify-center ${className}`}>
      <img
        src={profileAssets.portrait}
        alt={`Portrait of ${person.fullName}`}
        className="h-full w-full object-cover object-top filter contrast-[1.05]"
        onError={() => setFailed(true)}
      />
      <div className="absolute inset-0 bg-linear-to-t from-void via-void/25 to-transparent pointer-events-none" />
      <div className="absolute inset-0 border border-white/10 rounded-[inherit] pointer-events-none" />
    </div>
  )
}
