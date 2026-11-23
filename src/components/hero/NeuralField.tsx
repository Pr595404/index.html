import { Canvas, useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import { Color, Group, Mesh, Vector3 } from 'three'
import { useMedia, useReducedMotion } from '../../hooks/useMedia'

function Graph() {
  const group = useRef<Group>(null)
  const pointer = useRef({ x: 0, y: 0 })

  const { positions, linkPositions } = useMemo(() => {
    const nodes: Vector3[] = []
    const layers = [4, 7, 9, 7, 4]
    layers.forEach((count, layer) => {
      for (let i = 0; i < count; i += 1) {
        const y = (i - (count - 1) / 2) * 0.55
        const x = (layer - (layers.length - 1) / 2) * 0.95
        const z = Math.sin(i * 1.3 + layer) * 0.35
        nodes.push(new Vector3(x, y, z))
      }
    })
    const segs: number[] = []
    let offset = 0
    for (let layer = 0; layer < layers.length - 1; layer += 1) {
      const a = layers[layer]
      const b = layers[layer + 1]
      for (let i = 0; i < a; i += 1) {
        for (let j = 0; j < b; j += 1) {
          if ((i + j + layer) % 2 === 0) {
            segs.push(...nodes[offset + i].toArray(), ...nodes[offset + a + j].toArray())
          }
        }
      }
      offset += a
    }
    return { positions: nodes, linkPositions: new Float32Array(segs) }
  }, [])

  useFrame((state) => {
    if (!group.current) return
    const t = state.clock.elapsedTime
    pointer.current.x += (state.pointer.x * 0.45 - pointer.current.x) * 0.06
    pointer.current.y += (state.pointer.y * 0.3 - pointer.current.y) * 0.06
    group.current.rotation.y = pointer.current.x + Math.sin(t * 0.18) * 0.12
    group.current.rotation.x = -pointer.current.y * 0.4
  })

  return (
    <group ref={group}>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linkPositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#5ee7ff" transparent opacity={0.22} />
      </lineSegments>
      {positions.map((p, i) => (
        <PulseNode key={i} position={p} delay={i * 0.12} />
      ))}
    </group>
  )
}

function PulseNode({ position, delay }: { position: Vector3; delay: number }) {
  const ref = useRef<Mesh>(null)
  const color = useMemo(() => new Color(delay % 0.24 > 0.12 ? '#5ee7ff' : '#8b7dff'), [delay])

  useFrame((state) => {
    if (!ref.current) return
    const s = 0.85 + Math.sin(state.clock.elapsedTime * 2.1 + delay) * 0.18
    ref.current.scale.setScalar(s)
  })

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[0.07, 16, 16]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.4} />
    </mesh>
  )
}

function Dust() {
  const ref = useRef<Group>(null)
  const positions = useMemo(() => {
    const arr = new Float32Array(450)
    for (let i = 0; i < 150; i += 1) {
      arr[i * 3] = (Math.random() - 0.5) * 8
      arr[i * 3 + 1] = (Math.random() - 0.5) * 6
      arr[i * 3 + 2] = (Math.random() - 0.5) * 4
    }
    return arr
  }, [])

  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.y = state.clock.elapsedTime * 0.03
  })

  return (
    <group ref={ref}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.018} color="#5ee7ff" transparent opacity={0.45} />
      </points>
    </group>
  )
}

export function NeuralField() {
  const reduced = useReducedMotion()
  const desktop = useMedia('(min-width: 768px)')

  if (reduced || !desktop) {
    return <NeuralFallback />
  }

  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 6.2], fov: 42 }}
        dpr={[1, 1.6]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[2, 2, 4]} intensity={18} color="#5ee7ff" />
        <pointLight position={[-3, -2, 2]} intensity={10} color="#8b7dff" />
        <Graph />
        <Dust />
      </Canvas>
    </div>
  )
}

function NeuralFallback() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#03040a]">
      <div className="grid-fade absolute inset-0" />
      <svg className="h-full w-full opacity-70" viewBox="0 0 800 700" preserveAspectRatio="xMidYMid slice">
        {Array.from({ length: 36 }).map((_, i) => (
          <g key={i}>
            <circle
              cx={120 + (i % 6) * 110}
              cy={90 + Math.floor(i / 6) * 100}
              r={i % 4 === 0 ? 5 : 3}
              fill={i % 2 ? '#5ee7ff' : '#8b7dff'}
              opacity="0.75"
            />
            {i % 6 < 5 ? (
              <line
                x1={120 + (i % 6) * 110}
                y1={90 + Math.floor(i / 6) * 100}
                x2={120 + ((i % 6) + 1) * 110}
                y2={90 + Math.floor(i / 6) * 100}
                stroke="rgba(94,231,255,0.18)"
              />
            ) : null}
          </g>
        ))}
      </svg>
    </div>
  )
}
