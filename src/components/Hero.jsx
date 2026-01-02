import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import FloatingCards from './FloatingCards'
import { groupStats } from '../data/companies'

function AnimatedNumber({ value, duration = 2000, suffix = '+' }) {
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

  return <span ref={ref}>{count}{suffix}</span>
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-gray-100 to-slate-100 dark:from-gray-900 dark:via-slate-900 dark:to-gray-900" />
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
            {/* Badge */}
            <motion.div
              className="inline-block mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <span className="px-4 py-2 rounded-full bg-gradient-to-r from-slate-100 to-gray-200 dark:from-slate-800 dark:to-gray-800 text-slate-700 dark:text-slate-300 text-sm font-medium border border-slate-200 dark:border-slate-700">
                🏆 Level 1 BBBEE Technology Investment Company
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="block text-gray-700 dark:text-gray-300">Welcome to</span>
              <span className="block bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 dark:from-slate-300 dark:via-slate-200 dark:to-slate-100 bg-clip-text text-transparent">
                ITNA
              </span>
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Advancing the delivery of services in Local Government through a comprehensive 
              ecosystem of specialized technology companies across Southern Africa
            </motion.p>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-slate-200 dark:border-slate-700">
                <div className="text-3xl md:text-4xl font-bold text-slate-700 dark:text-slate-300">
                  <AnimatedNumber value={groupStats.companies} suffix="" />
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Group Companies</div>
              </div>
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-slate-200 dark:border-slate-700">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
                  <AnimatedNumber value={groupStats.saClients + groupStats.namibiaClients} />
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Active Clients</div>
              </div>
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-slate-200 dark:border-slate-700">
                <div className="text-3xl md:text-4xl font-bold text-teal-600 dark:text-teal-400">
                  <AnimatedNumber value={groupStats.countries} suffix="" />
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Countries</div>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.a
                href="#companies"
                className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-slate-700 to-slate-900 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Explore Our Companies</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.a>
              <motion.a
                href="#about"
                className="inline-flex items-center justify-center space-x-2 bg-white dark:bg-gray-800 text-slate-700 dark:text-slate-300 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Our Story</span>
              </motion.a>
            </motion.div>
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
          className="w-6 h-10 border-2 border-slate-400 dark:border-slate-600 rounded-full flex justify-center p-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-slate-400 dark:bg-slate-600 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
