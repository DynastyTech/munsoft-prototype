import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useTheme } from '../contexts/ThemeContext'

function RotatingCube() {
  const { theme } = useTheme()
  const [rotation, setRotation] = useState([0, 0, 0])

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation([Math.random() * 0.1, Math.random() * 0.1, Math.random() * 0.1])
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.mesh
      rotation={rotation}
      animate={{
        rotation: [rotation[0] + Math.PI / 4, rotation[1] + Math.PI / 4, rotation[2]],
      }}
      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
    >
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial
        color={theme === 'dark' ? '#8b5cf6' : '#6366f1'}
        wireframe
        transparent
        opacity={0.6}
      />
    </motion.mesh>
  )
}

export default function Academy() {
  const [currentFace, setCurrentFace] = useState(0)
  const faces = [
    { icon: '🎓', title: 'Learning Management' },
    { icon: '📚', title: 'Course Tracking' },
    { icon: '📊', title: 'Progress Reports' },
    { icon: '✅', title: 'Certification' },
    { icon: '🌐', title: 'Online Access' },
    { icon: '👥', title: 'Team Management' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFace((prev) => (prev + 1) % faces.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="academy" className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Munsoft Academy
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
              Munsoft Learning Management System (MLMS)
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
              Designed and developed based on meeting your unique needs, a Learning Management System (LMS) is a software application for the management, documentation, tracking reporting and delivery of e-learning education courses or training programs.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Training content can be accessed, as well as complete course registration, course administration, progress and reports can be tracked, and the learning process of the company can be supervised as a whole.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Find out more</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.a>
          </motion.div>

          {/* 3D Visual */}
          <motion.div
            className="relative h-[400px]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0">
              <Canvas camera={{ position: [0, 0, 5] }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <RotatingCube />
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
              </Canvas>
            </div>

            {/* Feature Cards */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div
                key={currentFace}
                className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-6xl mb-4 text-center">{faces[currentFace].icon}</div>
                <h4 className="text-xl font-bold text-center text-gray-800 dark:text-gray-200">
                  {faces[currentFace].title}
                </h4>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

