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

const logoMap = {
  'munsoft': logoMunsoft,
  '4gl': logo4GL,
  'sapsi': logoSAPSI,
  'novus3': logoNovus3,
  'rumas': logoRumas,
  'advisory': logoAdvisory,
  'intelo': logoIntelo,
  'itna': logoITNA,
}

export default function Companies() {
  const [selectedCompany, setSelectedCompany] = useState(null)

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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 dark:from-gray-300 dark:via-gray-200 dark:to-gray-100 bg-clip-text text-transparent">
            Our Companies
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            ITNA oversees a comprehensive ecosystem of specialized companies working together to deliver integrated solutions for local government and public sector
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {companies.map((company, index) => (
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
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">
                  {company.shortName}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {company.description}
                </p>

                {/* Services Preview */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {company.services.slice(0, 2).map((service, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300"
                    >
                      {service.split(' ')[0]}
                    </span>
                  ))}
                  {company.services.length > 2 && (
                    <span className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300">
                      +{company.services.length - 2}
                    </span>
                  )}
                </div>

                {/* Visit Website Link */}
                <div className="flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
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

        {/* Detailed Company Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {companies.slice(0, 4).map((company, index) => (
            <motion.div
              key={`detail-${company.id}`}
              className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-white dark:bg-gray-800 p-2 flex-shrink-0 shadow-md">
                  {logoMap[company.id] ? (
                    <img
                      src={logoMap[company.id]}
                      alt={`${company.name} logo`}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className={`w-full h-full rounded-lg bg-gradient-to-br ${company.color} flex items-center justify-center text-white font-bold text-lg`}>
                      {company.logo}
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                    {company.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {company.longDescription}
                  </p>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Key Services:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {company.services.slice(0, 4).map((service, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={company.website}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center space-x-2 bg-gradient-to-r ${company.color} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}
              >
                <span>Learn More</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

