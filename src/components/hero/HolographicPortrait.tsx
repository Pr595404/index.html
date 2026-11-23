import { Canvas, useFrame } from '@react-three/fiber'
import { Suspense, useEffect, useMemo, useRef, useState } from 'react'
import {
  AdditiveBlending,
  BoxGeometry,
  DoubleSide,
  EdgesGeometry,
  Group,
  LinearFilter,
  Mesh,
  Points,
  RepeatWrapping,
  SRGBColorSpace,
  Texture,
  TextureLoader,
} from 'three'
import { Move3D, Pause, Play, RotateCcw } from 'lucide-react'
import { profileAssets } from '../../data/assets'
import { person } from '../../data/site'

interface HolographicPortraitProps {
  className?: string
}

export function HolographicPortrait({ className = '' }: HolographicPortraitProps) {
  const [autoRotate, setAutoRotate] = useState(true)
  const rotationSpeed = 0.5
  const [resetTrigger, setResetTrigger] = useState(0)
  const [isInteracting, setIsInteracting] = useState(false)

  return (
    <div className={`relative flex flex-col items-center select-none ${className}`}>
      {/* 3D WebGL Canvas */}
      <div className="relative h-[380px] w-full sm:h-[420px] md:h-[480px] overflow-hidden rounded-[32px] border border-cyan/20 bg-[radial-gradient(ellipse_at_50%_40%,rgba(94,231,255,0.08),rgba(12,16,32,0.95)_70%,#03040a)] shadow-[0_0_50px_rgba(94,231,255,0.08)]">
        {/* Hologram Corner HUD Brackets */}
        <div className="pointer-events-none absolute left-4 top-4 font-mono text-[9px] uppercase tracking-[0.25em] text-cyan/70 flex items-center gap-2 z-10">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
          </span>
          <span>HOLOPROJECTION // ID: 2026-AIML</span>
        </div>

        <div className="pointer-events-none absolute right-4 top-4 font-mono text-[9px] uppercase tracking-[0.2em] text-cyan/50 z-10">
          360° SPATIAL DISPLAY
        </div>

        <div className="pointer-events-none absolute left-4 bottom-4 font-mono text-[9px] uppercase tracking-[0.2em] text-fog/60 z-10">
          <span className="text-cyan">{person.fullName.toUpperCase()}</span> · BIOMETRIC PROJECTION
        </div>

        <Suspense fallback={<HoloFallback />}>
          <Canvas
            camera={{ position: [0, 0, 4.4], fov: 42 }}
            dpr={[1, 2]}
            gl={{ antialias: true, alpha: true }}
            onPointerDown={() => setIsInteracting(true)}
            onPointerUp={() => setIsInteracting(false)}
            onPointerLeave={() => setIsInteracting(false)}
          >
            <HoloScene
              autoRotate={autoRotate}
              rotationSpeed={rotationSpeed}
              resetTrigger={resetTrigger}
            />
          </Canvas>
        </Suspense>

        {/* Ambient Holographic Scanline Overlay on viewport */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(94,231,255,0.02)_1px,transparent_1px)] bg-[size:100%_4px] opacity-40 mix-blend-screen" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(3,4,10,0.85)_100%)]" />
      </div>

      {/* Futuristic Interactive Hologram Controls Bar */}
      <div className="mt-3 flex w-full max-w-md items-center justify-between rounded-2xl border border-white/10 bg-[#070914]/80 px-4 py-2.5 backdrop-blur-md text-xs font-mono text-fog">
        <div className="flex items-center gap-2">
          <Move3D size={14} className="text-cyan" />
          <span className="text-[11px] text-paper">
            {isInteracting ? 'Dragging 3D Hologram' : 'Drag to rotate 360°'}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setAutoRotate((v) => !v)}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] text-paper transition hover:border-cyan/40 hover:text-cyan"
            title={autoRotate ? 'Pause 360 rotation' : 'Resume 360 rotation'}
          >
            {autoRotate ? <Pause size={10} /> : <Play size={10} />}
            <span>{autoRotate ? 'Pause' : 'Auto-Spin'}</span>
          </button>

          <button
            type="button"
            onClick={() => setResetTrigger((n) => n + 1)}
            className="grid h-7 w-7 place-items-center rounded-full border border-white/10 bg-white/5 text-paper transition hover:border-cyan/40 hover:text-cyan"
            title="Reset Hologram Angle"
          >
            <RotateCcw size={11} />
          </button>
        </div>
      </div>
    </div>
  )
}

function HoloFallback() {
  return (
    <div className="grid h-full w-full place-items-center">
      <div className="flex flex-col items-center gap-3">
        <div className="h-12 w-12 animate-spin rounded-full border-2 border-cyan/30 border-t-cyan" />
        <p className="font-mono text-xs uppercase tracking-widest text-cyan">
          Initializing Hologram Projection...
        </p>
      </div>
    </div>
  )
}

function HoloScene({
  autoRotate,
  rotationSpeed,
  resetTrigger,
}: {
  autoRotate: boolean
  rotationSpeed: number
  resetTrigger: number
}) {
  const groupRef = useRef<Group>(null)
  const isDragging = useRef(false)
  const previousPointer = useRef({ x: 0, y: 0 })
  const targetTilt = useRef({ x: 0, y: 0 })

  // Texture state for 100% authentic photograph
  const [frontTexture, setFrontTexture] = useState<Texture | null>(null)
  const [backTexture, setBackTexture] = useState<Texture | null>(null)

  useEffect(() => {
    const loader = new TextureLoader()
    loader.load(profileAssets.portrait, (tex) => {
      tex.colorSpace = SRGBColorSpace
      tex.minFilter = LinearFilter
      tex.magFilter = LinearFilter
      setFrontTexture(tex)

      // Back texture cloned and unmirrored so face is 100% anatomically identical from behind
      const back = tex.clone()
      back.colorSpace = SRGBColorSpace
      back.wrapS = RepeatWrapping
      back.repeat.x = -1
      back.offset.x = 1
      back.needsUpdate = true
      setBackTexture(back)
    })
  }, [])

  // Reset angle when trigger changes
  useEffect(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = 0
      groupRef.current.rotation.x = 0
      targetTilt.current = { x: 0, y: 0 }
    }
  }, [resetTrigger])

  // Mouse drag handlers on window
  useEffect(() => {
    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging.current) return
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY

      const dx = clientX - previousPointer.current.x
      const dy = clientY - previousPointer.current.y
      previousPointer.current = { x: clientX, y: clientY }

      if (groupRef.current) {
        groupRef.current.rotation.y += dx * 0.008
        groupRef.current.rotation.x = Math.max(
          -0.4,
          Math.min(0.4, groupRef.current.rotation.x + dy * 0.005),
        )
      }
    }

    const onUp = () => {
      isDragging.current = false
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
    window.addEventListener('touchmove', onMove)
    window.addEventListener('touchend', onUp)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
      window.removeEventListener('touchmove', onMove)
      window.removeEventListener('touchend', onUp)
    }
  }, [])

  // Smooth frame loop: continuous 360 rotation + parallax damping
  useFrame((state, delta) => {
    if (!groupRef.current) return

    // If auto-rotating and not dragging, spin 360° continuously
    if (autoRotate && !isDragging.current) {
      groupRef.current.rotation.y += delta * rotationSpeed
    }

    // Subtle cursor parallax
    targetTilt.current.x += (state.pointer.y * 0.15 - targetTilt.current.x) * 0.05
    targetTilt.current.y += (state.pointer.x * 0.2 - targetTilt.current.y) * 0.05

    groupRef.current.rotation.z = -targetTilt.current.y * 0.2
  })

  const onPointerDownHandler = (e: { clientX: number; clientY: number }) => {
    isDragging.current = true
    previousPointer.current = { x: e.clientX, y: e.clientY }
  }

  return (
    <>
      {/* Lighting for Hologram: Cyan key, violet rim, balanced fill */}
      <ambientLight intensity={1.2} color="#101830" />
      <directionalLight position={[3, 4, 3]} intensity={2.2} color="#5ee7ff" />
      <directionalLight position={[-3, -2, -3]} intensity={2.8} color="#8b7dff" />
      <pointLight position={[0, 2, 1.5]} intensity={1.8} color="#5ee7ff" distance={6} />
      <pointLight position={[0, -2, -1.5]} intensity={2.0} color="#8b7dff" distance={6} />

      {/* Main Holographic Assembly */}
      <group
        ref={groupRef}
        onPointerDown={(e) => onPointerDownHandler(e)}
        position={[0, 0.1, 0]}
      >
        {/* 1. Futuristic Beveled Glass / Cybernetic Tablet Frame */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[2.3, 2.5, 0.08]} />
          <meshPhysicalMaterial
            color="#071020"
            transparent
            opacity={0.35}
            roughness={0.1}
            metalness={0.2}
            transmission={0.65}
            ior={1.45}
            reflectivity={0.6}
          />
        </mesh>

        {/* Emissive cyan outer edges of frame */}
        <lineSegments>
          <edgesGeometry args={[useMemo(() => new EdgesGeometry(new Mesh(new BoxGeometry(2.3, 2.5, 0.08)).geometry), [])]} />
          <lineBasicMaterial color="#5ee7ff" transparent opacity={0.6} />
        </lineSegments>

        {/* 2. FRONT FACE: Authentic Personal Photograph of Prince Kumar Sahu */}
        {frontTexture ? (
          <group position={[0, 0, 0.042]}>
            <mesh>
              <planeGeometry args={[2.18, 2.38]} />
              <meshBasicMaterial map={frontTexture} transparent opacity={0.98} />
            </mesh>
            {/* Subtle holographic cyan rim frame */}
            <mesh position={[0, 0, 0.002]}>
              <planeGeometry args={[2.18, 2.38]} />
              <meshBasicMaterial
                color="#5ee7ff"
                transparent
                opacity={0.06}
                blending={AdditiveBlending}
              />
            </mesh>
          </group>
        ) : null}

        {/* 3. BACK FACE: 100% UNMIRRORED Photograph + Futuristic Biometric HUD Layer */}
        {backTexture ? (
          <group position={[0, 0, -0.042]} rotation={[0, Math.PI, 0]}>
            <mesh>
              <planeGeometry args={[2.18, 2.38]} />
              <meshBasicMaterial map={backTexture} transparent opacity={0.96} />
            </mesh>
            {/* Subtle holographic cyber-grid overlay on back face */}
            <mesh position={[0, 0, 0.002]}>
              <planeGeometry args={[2.18, 2.38]} />
              <meshBasicMaterial
                color="#8b7dff"
                transparent
                opacity={0.1}
                blending={AdditiveBlending}
              />
            </mesh>
          </group>
        ) : null}

        {/* 4. Top Holographic Projector Rings */}
        <group position={[0, 1.48, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh>
            <ringGeometry args={[1.0, 1.05, 32]} />
            <meshBasicMaterial color="#5ee7ff" transparent opacity={0.65} side={DoubleSide} />
          </mesh>
          <mesh rotation={[0, 0, Math.PI / 4]}>
            <ringGeometry args={[1.15, 1.18, 24]} />
            <meshBasicMaterial color="#8b7dff" transparent opacity={0.4} side={DoubleSide} />
          </mesh>
        </group>

        {/* 5. Bottom Holographic Projector Rings & Pedestal Emitter */}
        <group position={[0, -1.48, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh>
            <ringGeometry args={[1.0, 1.05, 32]} />
            <meshBasicMaterial color="#5ee7ff" transparent opacity={0.65} side={DoubleSide} />
          </mesh>
          <mesh rotation={[0, 0, -Math.PI / 6]}>
            <ringGeometry args={[1.2, 1.24, 24]} />
            <meshBasicMaterial color="#4d8dff" transparent opacity={0.45} side={DoubleSide} />
          </mesh>
        </group>

        {/* Corner guide laser brackets */}
        <LaserBracket x={1.15} y={1.25} />
        <LaserBracket x={-1.15} y={1.25} />
        <LaserBracket x={1.15} y={-1.25} />
        <LaserBracket x={-1.15} y={-1.25} />
      </group>

      {/* Hologram Base Projector Floor Discs (stationary world space) */}
      <group position={[0, -1.85, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh>
          <ringGeometry args={[0.2, 1.6, 32]} />
          <meshBasicMaterial color="#5ee7ff" transparent opacity={0.08} side={DoubleSide} />
        </mesh>
        <mesh>
          <ringGeometry args={[1.58, 1.62, 48]} />
          <meshBasicMaterial color="#5ee7ff" transparent opacity={0.5} side={DoubleSide} />
        </mesh>
        <mesh>
          <ringGeometry args={[1.75, 1.78, 48]} />
          <meshBasicMaterial color="#8b7dff" transparent opacity={0.3} side={DoubleSide} />
        </mesh>
      </group>

      {/* Controlled Floating Particle Spores */}
      <HoloParticles />
    </>
  )
}

function LaserBracket({ x, y }: { x: number; y: number }) {
  const sx = Math.sign(x)
  const sy = Math.sign(y)
  const pts = useMemo(() => {
    return new Float32Array([
      x, y - sy * 0.25, 0,
      x, y, 0,
      x, y, 0,
      x - sx * 0.25, y, 0,
    ])
  }, [x, y, sx, sy])

  return (
    <lineSegments>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[pts, 3]} />
      </bufferGeometry>
      <lineBasicMaterial color="#5ee7ff" transparent opacity={0.85} linewidth={2} />
    </lineSegments>
  )
}

function HoloParticles() {
  const ref = useRef<Points>(null)
  const count = 120

  const [positions, speeds] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const spd = new Float32Array(count)
    for (let i = 0; i < count; i += 1) {
      pos[i * 3] = (Math.random() - 0.5) * 3.2
      pos[i * 3 + 1] = (Math.random() - 0.5) * 3.6
      pos[i * 3 + 2] = (Math.random() - 0.5) * 2.2
      spd[i] = 0.2 + Math.random() * 0.4
    }
    return [pos, spd]
  }, [])

  useFrame((_, delta) => {
    if (!ref.current) return
    const pos = ref.current.geometry.attributes.position.array as Float32Array
    for (let i = 0; i < count; i += 1) {
      pos[i * 3 + 1] += delta * speeds[i]
      if (pos[i * 3 + 1] > 2.0) {
        pos[i * 3 + 1] = -2.0
      }
    }
    ref.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#5ee7ff"
        size={0.035}
        transparent
        opacity={0.65}
        blending={AdditiveBlending}
      />
    </points>
  )
}
