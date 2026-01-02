import { motion } from 'framer-motion'
import { useState } from 'react'
import { companies } from '../data/companies'

// Import logos
import logoMunsoft from '../Logos/munsoft-logo.png'
import logo4GL from '../Logos/4gl-logo-white.svg'
import logoSAPSI from '../Logos/SAPSI-LOGO.png'
import logoNovus3 from '../Logos/Novus3-logo.png'
import logoRumas from '../Logos/rumas-logo.svg'
import logoAdvisory from '../Logos/Advisory-logo.png'
import logoIntelo from '../Logos/Intelo-white-logo.png'
import logoITNA from '../Logos/ITNA_LOGO_WHITE.webp'
import logoSunsoft from '../Logos/sunsoft-logo.png'
import logoAegams from '../Logos/aegams-logo.png'

const logoMap = {
  'munsoft': logoMunsoft,
  '4gl': logo4GL,
  'sapsi': logoSAPSI,
  'novus3': logoNovus3,
  'rumas': logoRumas,
  'advisory': logoAdvisory,
  'intelo': logoIntelo,
  'itna': logoITNA,
  'sunsoft': logoSunsoft,
  'aegams': logoAegams,
}

export default function Companies() {
  const [selectedCompany, setSelectedCompany] = useState(null)

  // Separate parent company from subsidiaries
  const parentCompany = companies.find(c => c.isParent)
  const subsidiaries = companies.filter(c => !c.isParent)

  return (
    <section id="companies" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 dark:from-slate-300 dark:via-slate-200 dark:to-slate-100 bg-clip-text text-transparent">
            Meet The Group
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            ITNA oversees a comprehensive ecosystem of specialized companies working together 
            to deliver integrated solutions for local government across Southern Africa
          </p>
        </motion.div>

        {/* Parent Company Card */}
        {parentCompany && (
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl p-8 md:p-12 shadow-2xl cursor-pointer transform hover:scale-[1.02] transition-all duration-300"
              onClick={() => window.open(parentCompany.website, '_blank')}
            >
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl flex items-center justify-center bg-white/10 p-4 flex-shrink-0">
                  {logoMap[parentCompany.id] ? (
                    <img
                      src={logoMap[parentCompany.id]}
                      alt={`${parentCompany.name} logo`}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className="text-white font-bold text-3xl">
                      {parentCompany.logo}
                    </div>
                  )}
                </div>
                <div className="text-center md:text-left flex-1">
                  <div className="text-sm text-slate-300 mb-2">Parent Company</div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                    {parentCompany.name}
                  </h3>
                  <p className="text-slate-300 mb-4 text-lg">
                    {parentCompany.longDescription}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    {parentCompany.services.slice(0, 4).map((service, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 bg-white/20 text-white rounded-full"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center text-white">
                  <span className="mr-2 text-sm font-semibold">Visit Website</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Subsidiary Companies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {subsidiaries.map((company, index) => (
            <motion.div
              key={company.id}
              className="group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setSelectedCompany(company.id)}
              onMouseLeave={() => setSelectedCompany(null)}
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => window.open(company.website, '_blank')}
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${company.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />

              <div className="relative z-10">
                {/* Logo */}
                <div className="flex items-center justify-center mb-4">
                  <motion.div
                    className="w-20 h-20 rounded-xl flex items-center justify-center shadow-lg bg-white dark:bg-gray-800 p-2"
                    animate={{
                      rotate: selectedCompany === company.id ? [0, 5, -5, 0] : 0,
                      scale: selectedCompany === company.id ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {logoMap[company.id] ? (
                      <img
                        src={logoMap[company.id]}
                        alt={`${company.name} logo`}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <div className={`w-full h-full rounded-lg bg-gradient-to-br ${company.color} flex items-center justify-center text-white font-bold text-xl`}>
                        {company.logo}
                      </div>
                    )}
                  </motion.div>
                </div>

                {/* Company Info */}
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200 text-center">
                  {company.shortName}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 text-center">
                  {company.description}
                </p>

                {/* Services Preview */}
                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                  {company.services.slice(0, 2).map((service, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300"
                    >
                      {service.split(' ').slice(0, 2).join(' ')}
                    </span>
                  ))}
                  {company.services.length > 2 && (
                    <span className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300">
                      +{company.services.length - 2}
                    </span>
                  )}
                </div>

                {/* Acquired/Established Badge */}
                {(company.acquired || company.established) && (
                  <div className="text-xs text-center text-gray-500 dark:text-gray-500 mb-3">
                    {company.acquired || `Est. ${company.established}`}
                  </div>
                )}

                {/* Visit Website Link */}
                <div className="flex items-center justify-center text-sm font-semibold text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                  <span>Visit Website</span>
                  <svg
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </motion.div>
          ))}
        </div>

        {/* Regions Served */}
        <motion.div
          className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-200 mb-6">
            Serving Local Government Across Southern Africa
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-2">🇿🇦</div>
              <div className="font-bold text-gray-800 dark:text-gray-200">South Africa</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">70+ Municipal Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🇳🇦</div>
              <div className="font-bold text-gray-800 dark:text-gray-200">Namibia</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">17+ Local Authorities</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🇸🇿</div>
              <div className="font-bold text-gray-800 dark:text-gray-200">eSwatini</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Municipal Partners</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
