import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function ParticleBackground() {
  const particlesRef = useRef()
  const particleCount = 2000

  const { positions } = useMemo(() => {
    const positions = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 200
    }
    return { positions }
  }, [])

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.05
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <points ref={particlesRef} position={[0, 0, -50]}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#3b82f6"
        size={0.5}
        transparent
        opacity={0.6}
      />
    </points>
  )
}

