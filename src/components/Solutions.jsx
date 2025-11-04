import { motion } from 'framer-motion'
import { useState } from 'react'

const solutions = [
  { icon: '💼', title: 'Financial Management & Billing', description: 'Comprehensive financial management solutions tailored for local government' },
  { icon: '👨‍💼', title: 'Payroll and Human Resources', description: 'Advanced HR and payroll software for efficient workforce management' },
  { icon: '📋', title: 'mSCOA & Consulting', description: 'Expert consulting services for MSCOA compliance and implementation' },
  { icon: '📈', title: 'Performance Management', description: 'Solutions to track and improve organizational performance' },
  { icon: '🏢', title: 'Asset Management', description: 'Complete asset verification and management solutions' },
  { icon: '📏', title: 'Metering Solutions', description: 'Advanced metering technology for accurate utility management' },
  { icon: '💻', title: 'ICT Services', description: 'Essential ICT services to keep your systems running smoothly' },
  { icon: '🛡️', title: 'Disaster Recovery', description: 'Robust disaster recovery solutions to protect your data' },
  { icon: '🗺️', title: 'Geographic Information Systems', description: 'GIS solutions for spatial data management and analysis' },
  { icon: '🧹', title: 'Data Cleansing & Revenue Enhancement', description: 'Services to optimize data quality and increase revenue' },
  { icon: '🎓', title: 'Training Solutions', description: 'Accredited training programs for your team' },
  { icon: '📊', title: 'Business Intelligence Dashboards', description: 'Real-time insights and analytics for informed decision-making' },
]

export default function Solutions() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <section id="solutions" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Munsoft Solutions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">What we do, best!</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className="group relative bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Gradient Background on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />
              
              <div className="relative z-10">
                <motion.div
                  className="text-5xl mb-4"
                  animate={{
                    rotate: hoveredIndex === index ? [0, -10, 10, -10, 0] : 0,
                    scale: hoveredIndex === index ? 1.2 : 1,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {solution.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">
                  {solution.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {solution.description}
                </p>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

