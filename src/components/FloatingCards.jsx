import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useTheme } from '../contexts/ThemeContext'

function RotatingCube() {
  const { theme } = useTheme()
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5
    }
  })
  
  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial
        color={theme === 'dark' ? '#6366f1' : '#3b82f6'}
        wireframe
        transparent
        opacity={0.8}
      />
    </mesh>
  )
}

function FloatingCard({ icon, text, delay, className }) {
  return (
    <motion.div
      className={`absolute ${className} bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 1, 
        y: [0, -20, 0],
        rotate: [0, 5, -5, 0]
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      whileHover={{ scale: 1.1, zIndex: 10 }}
    >
      <div className="text-4xl mb-2">{icon}</div>
      <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">{text}</div>
    </motion.div>
  )
}

export default function FloatingCards() {
  return (
    <div className="relative h-[500px]">
      {/* 3D Cube */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <RotatingCube />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
        </Canvas>
      </div>

      {/* Floating Cards */}
      <FloatingCard
        icon="💰"
        text="Financial Management"
        delay={0}
        className="top-10 left-10"
      />
      <FloatingCard
        icon="👥"
        text="HR & Payroll"
        delay={1}
        className="bottom-20 right-10"
      />
      <FloatingCard
        icon="📊"
        text="Business Intelligence"
        delay={2}
        className="top-1/2 left-0"
      />
    </div>
  )
}

