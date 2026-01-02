import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const clients = [
  'AbaQulusi Local Municipality',
  'Alfred Duma Local Municipality',
  'Alfred Nzo District Municipality',
  'Amathole Economic Development Agency',
  'Bela-Bela Local Municipality',
  'Collins Chabane Local Municipality',
  'Dannhauser Local Municipality',
  'Dawid Kruiper Local Municipality',
  'Dipaleseng Local Municipality',
  'Dr JS Moroka Local Municipality',
  'Dr Pixley Ka Isaka Seme Local Municipality',
  'Drakenstein Local Municipality',
  'Elias Motsoaledi Local Municipality',
  'Elundini Local Municipality',
  'Emakhazeni Local Municipality',
  'Emalahleni Local Municipality',
  'Endumeni Local Municipality',
  'Enterprise iLembe Development Agency',
  'Ephraim Mogale Local Municipality',
  'Fetakgomo Tubatse Local Municipality',
  'Ga-Segonyana Local Municipality',
  'Gert Sibande District Municipality',
  'Govan Mbeki Local Municipality',
  'Greater Kokstad Local Municipality',
  'Greater Letaba Local Municipality',
  'Grootfontein Town Council',
  'Helao Nafidi Town Council',
  'iLembe District Municipality',
  'Ingquza Hill Local Municipality',
  'Inkosi Langalibalele Local Municipality',
  'Karasburg Town Council',
  'Katima Mulilo Town Council',
  'Katima Town Council',
  'Keetmanshoop Town Council',
  'KwaDukuza Local Municipality',
  'Lekwa Local Municipality',
  'Lesedi Local Municipality',
  'Luderitz Town Council',
  'Mahikeng Local Municipality',
  'Makana Local Municipality',
  'Makhado Local Municipality',
  'Mamusa Local Municipality',
  'Maruleng Local Municipality',
  'Matatiele Local Municipality',
  'Mkhondo Local Municipality',
  'Modimolle-Mookgophong Local Municipality',
  'Mohokare Local Municipality',
  'Municipal Council of Mbabane',
  'Musina Local Municipality',
  'Ndlambe Local Municipality',
  'Nkangala District Municipality',
  'Nketoana Local Municipality',
  'Nyandeni Local Municipality',
  'Okahandja Town Council',
  'Ondangwa Town Council',
  'Ongwediva Town Council',
  'Oranjemund Town Council',
  'Oshakati Town Council',
  'Otjiwarongo Municipality',
  'Outapi Town Council',
  'Phokwane Local Municipality',
  'Polokwane Housing Association',
  'Polokwane Local Municipality',
  'Rand West City Local Municipality',
  'Ray Nkonyeni Local Municipality',
  'Rehoboth Town Council',
  'Richmond Local Municipality',
  'Rundu City Council',
  'Saldanha Bay Local Municipality',
  'Setsoto Local Municipality',
  'Steve Tshwete Local Municipality',
  'Thaba Chweu Local Municipality',
  'Thabazimbi Local Municipality',
  'Thembisile Hani Local Municipality',
  'Thulamela Local Municipality',
  'Tsumeb Town Council',
  'Tswelopele Local Municipality',
  'uMsinga Local Municipality',
  'uMuziwabantu Local Municipality',
  'uMzimkhulu Local Municipality',
  'uMzimvubu Local Municipality',
  'uMzinyathi Local Municipality',
  'uThukela District Municipality',
  'Vhembe District Municipality',
  'Victor Khanye Local Municipality',
  'Waterberg District Municipality',
  'West Rand District Municipality',
  'Winnie Madikizela-Mandela Local Municipality',
]

export default function Clients() {
  const scrollRef = useRef(null)
  const [isScrolling, setIsScrolling] = useState(true)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollPosition = 0
    // Doubled the scroll speed from 0.5 to 1.0
    const scrollSpeed = 1.0
    let animationId

    const scroll = () => {
      if (isScrolling) {
        scrollPosition += scrollSpeed
        scrollContainer.scrollLeft = scrollPosition

        if (scrollPosition >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollPosition = 0
        }
      }
      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)
    return () => cancelAnimationFrame(animationId)
  }, [isScrolling])

  return (
    <section id="clients" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-700 to-slate-900 dark:from-slate-300 dark:to-slate-100 bg-clip-text text-transparent">
            Our Clients
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Proudly servicing 87+ clients across Namibia, South Africa, and eSwatini
          </p>
        </motion.div>

        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsScrolling(false)}
          onMouseLeave={() => setIsScrolling(true)}
        >
          <div
            ref={scrollRef}
            className="flex space-x-4 overflow-x-hidden will-change-scroll"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* Duplicate for seamless loop - removed individual animations for performance */}
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${client}-${index}`}
                className="flex-shrink-0 bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-xl px-6 py-4 shadow-md hover:shadow-xl hover:scale-105 hover:-translate-y-1 transition-all duration-200 whitespace-nowrap will-change-transform"
              >
                <span className="text-gray-800 dark:text-gray-200 font-medium">
                  {client}
                </span>
              </div>
            ))}
          </div>

          {/* Gradient Fade */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white dark:from-gray-900 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white dark:from-gray-900 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  )
}
