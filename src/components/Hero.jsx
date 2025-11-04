import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import FloatingCards from './FloatingCards'

function AnimatedNumber({ value, duration = 2000 }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const startTime = Date.now()
          const startValue = 0
          const endValue = value

          const animate = () => {
            const now = Date.now()
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            
            // Easing function
            const easeOutQuart = 1 - Math.pow(1 - progress, 4)
            const currentValue = Math.floor(startValue + (endValue - startValue) * easeOutQuart)
            
            setCount(currentValue)

            if (progress < 1) {
              requestAnimationFrame(animate)
            } else {
              setCount(endValue)
            }
          }

          animate()
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [value, duration, hasAnimated])

  return <span ref={ref}>{count}+</span>
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iNiIgY3k9IjYiIHI9IjMiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20 dark:opacity-10" />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="block text-gray-700 dark:text-gray-300">Welcome to</span>
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Munsoft
              </span>
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Integrated Financial Management & Internal Control System for Local Government
            </motion.p>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl p-4 shadow-lg">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
                  <AnimatedNumber value={88} />
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Active Clients</div>
              </div>
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl p-4 shadow-lg">
                <div className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400">
                  <AnimatedNumber value={3} />
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Countries</div>
              </div>
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl p-4 shadow-lg">
                <div className="text-3xl md:text-4xl font-bold text-pink-600 dark:text-pink-400">
                  <AnimatedNumber value={12} />
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Solutions</div>
              </div>
            </motion.div>

            <motion.a
              href="#contact"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Contact Us</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.a>
          </motion.div>

          {/* 3D Visual */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <FloatingCards />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center p-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

