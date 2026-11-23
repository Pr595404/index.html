import { useRef } from 'react'
import type { PointerEvent } from 'react'

export function useMagnetic(strength = 18) {
  const ref = useRef<HTMLElement | null>(null)

  function onPointerMove(event: PointerEvent<HTMLElement>) {
    const node = ref.current
    if (!node) return
    const rect = node.getBoundingClientRect()
    const x = event.clientX - rect.left - rect.width / 2
    const y = event.clientY - rect.top - rect.height / 2
    node.style.transform = `translate(${x / strength}px, ${y / strength}px)`
  }

  function onPointerLeave() {
    const node = ref.current
    if (!node) return
    node.style.transform = 'translate(0, 0)'
  }

  return { ref, onPointerMove, onPointerLeave }
}
