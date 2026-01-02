import { motion } from 'framer-motion'
import { companies } from '../data/companies'
import logoITNA from '../Logos/ITNA_LOGO_WHITE.webp'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    quick: [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
      { name: 'Companies', href: '#companies' },
      { name: 'Solutions', href: '#solutions' },
      { name: 'Clients', href: '#clients' },
      { name: 'Contact', href: '#contact' },
    ],
    legal: [
      { name: 'Terms of Use', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'B-BBEE Certificate', href: '#' },
    ],
  }

  // Split companies into two columns
  const halfLength = Math.ceil(companies.length / 2)
  const companiesCol1 = companies.slice(0, halfLength)
  const companiesCol2 = companies.slice(halfLength)

  return (
    <footer className="bg-slate-900 dark:bg-black text-gray-300 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Logo & Description */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-white/10 p-2">
                <img
                  src={logoITNA}
                  alt="ITNA Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-2xl font-bold text-white">ITNA (Pty) Ltd</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Founded in the early 2000s, ITNA is a Level 1 BBBEE technology investment company 
              with solutions designed to advance the delivery of services in Local Government 
              across Southern Africa.
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <span className="px-3 py-1 bg-green-600/20 text-green-400 rounded-full">
                Level 1 BBBEE
              </span>
              <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full">
                Since 2000s
              </span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.quick.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Group Companies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-4">Group Companies</h4>
            <div className="grid grid-cols-2 gap-x-4">
              <ul className="space-y-2">
                {companiesCol1.map((company) => (
                  <li key={company.id}>
                    <a
                      href={company.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                    >
                      {company.shortName}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2">
                {companiesCol2.map((company) => (
                  <li key={company.id}>
                    <a
                      href={company.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                    >
                      {company.shortName}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start space-x-2">
                <span className="text-blue-400">📧</span>
                <a href="mailto:info@itna.co.za" className="hover:text-blue-400 transition-colors">
                  info@itna.co.za
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-400">🌐</span>
                <a href="https://www.itna.co.za" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                  www.itna.co.za
                </a>
              </li>
            </ul>
            
            <h4 className="text-white font-semibold mt-6 mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-slate-800 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <p>Copyright © ITNA (Pty) Ltd ({currentYear}). All Rights Reserved</p>
            <div className="flex items-center space-x-4">
              <span>🇿🇦 South Africa</span>
              <span>🇳🇦 Namibia</span>
              <span>🇸🇿 eSwatini</span>
            </div>
          </div>
          <div className="text-center mt-6 pt-6 border-t border-slate-800">
            <p className="text-gray-500 text-sm">
              Designed & Developed by{' '}
              <a 
                href="https://dynasty-tech.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
              >
                DynastyTech
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
