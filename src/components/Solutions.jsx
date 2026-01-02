import { motion } from 'framer-motion'
import { useState } from 'react'

const solutions = [
  { 
    icon: '💼', 
    title: 'Financial Management Systems', 
    description: 'Integrated FMS/ERP solutions for municipalities including billing, budgeting, and financial reporting',
    companies: ['Munsoft', '4GL', 'Aegams']
  },
  { 
    icon: '📊', 
    title: 'Capital Investment Planning', 
    description: 'CP3 platform, Capital Expenditure Frameworks (CEFs), and Spatial Development Frameworks (SDFs)',
    companies: ['Novus3']
  },
  { 
    icon: '💰', 
    title: 'Credit Control & Revenue', 
    description: 'Collection Wise and Indi Reg platforms for credit control, indigent management, and revenue enhancement',
    companies: ['Rumas']
  },
  { 
    icon: '📋', 
    title: 'Advisory & Consulting', 
    description: 'Expert operational process support for municipal governance, compliance, and mSCOA reform',
    companies: ['Advisory']
  },
  { 
    icon: '🎓', 
    title: 'Training & Development', 
    description: 'Comprehensive training programs including classroom, regional, onsite, and online learning',
    companies: ['Sapsi']
  },
  { 
    icon: '💻', 
    title: 'ICT Services', 
    description: 'Specialized IT infrastructure, network solutions, cloud services, and technical support',
    companies: ['Intelo']
  },
  { 
    icon: '⚡', 
    title: 'Product Development', 
    description: 'Internal product and solution development for the ITNA group of companies',
    companies: ['Sunsoft']
  },
  { 
    icon: '📈', 
    title: 'Business Intelligence', 
    description: 'Real-time dashboards, analytics, and financial spatial reporting for informed decision-making',
    companies: ['Novus3', 'Munsoft']
  },
  { 
    icon: '🏢', 
    title: 'Asset Management', 
    description: 'Complete asset verification, tracking, and lifecycle management solutions',
    companies: ['Munsoft', 'Advisory']
  },
  { 
    icon: '👨‍💼', 
    title: 'Payroll & HR', 
    description: 'Advanced payroll processing and human resources management for municipalities',
    companies: ['Munsoft']
  },
  { 
    icon: '🗺️', 
    title: 'Geographic Information', 
    description: 'GIS solutions for spatial data management, mapping, and infrastructure planning',
    companies: ['Munsoft', 'Novus3']
  },
  { 
    icon: '🛡️', 
    title: 'Performance Management', 
    description: 'IDP process planning, performance tracking, and organizational development',
    companies: ['Novus3', 'Advisory']
  },
]

export default function Solutions() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <section id="solutions" className="py-20 bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-800 dark:to-slate-900 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 dark:from-slate-300 dark:via-slate-200 dark:to-slate-100 bg-clip-text text-transparent">
            Our Solutions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Comprehensive technology solutions delivered across the ITNA group to transform local government operations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className="group relative bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Gradient Background on Hover */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-slate-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              
              <div className="relative z-10">
                <motion.div
                  className="text-5xl mb-4 grayscale contrast-125 brightness-110"
                  style={{ filter: 'grayscale(100%) contrast(1.2)' }}
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
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                  {solution.description}
                </p>
                
                {/* Company Tags */}
                <div className="flex flex-wrap gap-2">
                  {solution.companies.map((company, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full"
                    >
                      {company}
                    </span>
                  ))}
                </div>
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
