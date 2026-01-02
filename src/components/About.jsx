import { motion } from 'framer-motion'
import { timeline, groupStats } from '../data/companies'

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-900 dark:to-slate-900 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 dark:from-slate-300 dark:via-slate-200 dark:to-slate-100 bg-clip-text text-transparent">
            About ITNA
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
            Founded in the early 2000s, ITNA is a Level 1 BBBEE technology investment company 
            with solutions designed to advance the delivery of services in Local Government.
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg text-center">
            <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              {groupStats.companies}
            </div>
            <div className="text-gray-600 dark:text-gray-400">Group Companies</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg text-center">
            <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              {groupStats.saClients + groupStats.namibiaClients}+
            </div>
            <div className="text-gray-600 dark:text-gray-400">Active Clients</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg text-center">
            <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              {groupStats.countries}
            </div>
            <div className="text-gray-600 dark:text-gray-400">Countries</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg text-center">
            <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              {groupStats.yearsExperience}+
            </div>
            <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
          </div>
        </motion.div>

        {/* Story Section */}
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">
            Our Journey of Growth and Innovation
          </h3>
          <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400">
            <p className="mb-4">
              Founded with a vision to provide exceptional voice, continuity services and ICT support, 
              ITNA has evolved into a leading force in South African local government solutions.
            </p>
            <p className="mb-4">
              Our commitment to transforming municipal operations reached a milestone in August 2017 
              when ITNA acquired 100% shareholding in Munsoft, a major municipal financial management 
              system vendor. This acquisition created a South African local government powerhouse, 
              combining Munsoft's renowned financial management systems (FMS/ERP) with ITNA's advanced 
              information technology services.
            </p>
            <p className="mb-4">
              Established in 2001, Munsoft brought a rich heritage of success across municipalities 
              in South Africa, Namibia, and eSwatini. Together, we expanded our footprint dramatically—growing 
              from 30 to over 70 clients in South Africa and from 3 to 17 in Namibia.
            </p>
            <p>
              Our journey continues as we remain committed to transforming local government through 
              innovation, expertise, and dedicated service. Today, ITNA stands as a comprehensive 
              solution provider with deep expertise in municipal operations, cutting-edge technology, 
              and a proven track record of success across the Southern Africa region.
            </p>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-12">
            Our Timeline
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-teal-500 hidden md:block" />

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className={`flex flex-col md:flex-row items-center gap-4 md:gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                      <div className="text-sm font-bold text-blue-600 dark:text-blue-400 mb-2">
                        {item.year}
                      </div>
                      <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg z-10 hidden md:block" />

                  {/* Empty space for alignment */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Looking Forward */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-slate-700 to-slate-900 dark:from-slate-600 dark:to-slate-800 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Looking Forward</h3>
            <p className="text-lg text-slate-200 max-w-3xl mx-auto">
              Our journey continues as we remain committed to transforming local government 
              through innovation, expertise, and dedicated service. Today, ITNA stands as a 
              comprehensive solution provider with deep expertise in municipal operations, 
              cutting-edge technology, and a proven track record of success across the region.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

