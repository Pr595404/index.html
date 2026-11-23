import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useMedia } from '../../hooks/useMedia'

export function ProgressBar() {
  const [width, setWidth] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setWidth(max > 0 ? (window.scrollY / max) * 100 : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px] bg-white/5">
      <div className="h-full bg-linear-to-r from-cyan via-blue to-violet" style={{ width: `${width}%` }} />
    </div>
  )
}

export function BackToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  if (!show) return null
  return (
    <a
      href="#home"
      className="fixed bottom-6 right-6 z-40 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-night/80 text-paper backdrop-blur"
      aria-label="Back to top"
    >
      <ArrowUp size={16} />
    </a>
  )
}

export function Cursor() {
  const fine = useMedia('(pointer: fine)')
  const [pos, setPos] = useState({ x: -100, y: -100 })
  useEffect(() => {
    if (!fine) return
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [fine])
  if (!fine) return null
  return (
    <div
      className="pointer-events-none fixed z-[70] hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan/50 mix-blend-difference md:block"
      style={{ left: pos.x, top: pos.y }}
    />
  )
}
