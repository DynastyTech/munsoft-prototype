// ITNA Group Companies - Based on official ITNA website (www.itna.co.za)

export const companies = [
  {
    id: 'itna',
    name: 'ITNA (Pty) Ltd',
    shortName: 'ITNA',
    description: 'Level 1 BBBEE Technology Investment Company',
    longDescription: 'Founded in the early 2000s, ITNA is a Level 1 BBBEE technology investment company with solutions designed to advance the delivery of services in Local Government. ITNA acquired 100% shareholding in Munsoft in August 2017, creating a South African local government powerhouse.',
    website: 'https://www.itna.co.za',
    logo: 'ITNA',
    color: 'from-slate-700 to-slate-900',
    icon: '🏢',
    services: [
      'Strategic Investment',
      'Corporate Governance',
      'Group Leadership',
      'Technology Solutions',
      'Local Government Focus',
      'Business Development'
    ],
    founded: 'Early 2000s',
    isParent: true
  },
  {
    id: 'munsoft',
    name: 'Munsoft',
    shortName: 'Munsoft',
    description: 'Integrated Financial Management & Internal Control Systems for Municipalities',
    longDescription: 'Munsoft is the sales and relationship partner, delivering Integrated Financial Management and Internal Control Systems and Services to Municipalities. Established in 2001, Munsoft has a rich heritage of success across municipalities in South Africa, Namibia, and eSwatini.',
    website: 'https://www.munsoft.co.za',
    logo: 'M',
    color: 'from-blue-600 to-purple-600',
    icon: '💼',
    services: [
      'Financial Management Systems (FMS/ERP)',
      'Billing Software',
      'Payroll & Human Resources',
      'mSCOA Compliance',
      'Performance Management',
      'Asset Management',
      'Revenue Enhancement',
      'Business Intelligence Dashboards'
    ],
    stats: {
      clients: 70,
      namibiaClients: 17,
      countries: 3
    },
    established: '2001'
  },
  {
    id: 'aegams',
    name: '/AE//Gams Networks',
    shortName: 'Aegams',
    description: 'Leading FMS Provider in Namibia',
    longDescription: '/AE//Gams Networks is the leading provider of financial management systems and related services to local authorities in Namibia, with more than 25 years of experience. Acquired by ITNA in June 2025 to strengthen the group\'s commitment to the Southern Africa region.',
    website: 'https://www.aegams.com',
    logo: 'AG',
    color: 'from-amber-600 to-orange-600',
    icon: '🌍',
    services: [
      'Financial Management Systems',
      'Municipal Services',
      'Local Authority Solutions',
      'Technical Support',
      'System Implementation',
      'Training & Support'
    ],
    established: 'Over 25 years experience',
    acquired: 'June 2025 by ITNA'
  },
  {
    id: 'advisory',
    name: 'Municipal Advisory',
    shortName: 'Advisory',
    description: 'Expert Operational Process Support for Municipalities',
    longDescription: 'Municipal Advisory (formerly Munsoft Advisory, renamed November 2024) is a leading advisory firm providing municipalities with expert and specialist operational process support to address the ever-changing environment of municipal governance and compliance. Established in 2017.',
    website: 'https://www.advisory.co.za',
    logo: 'MA',
    color: 'from-teal-600 to-cyan-600',
    icon: '📋',
    services: [
      'Financial Management Advisory',
      'Asset Management Consulting',
      'Performance Management',
      'Revenue Management',
      'mSCOA Reform Guidance',
      'Process Optimization',
      'Compliance Support',
      'Change Management'
    ],
    established: '2017'
  },
  {
    id: '4gl',
    name: '4GL',
    shortName: '4GL',
    description: 'Core FMS Development & Compliance',
    longDescription: '4GL continues to improve the feature set of the core Financial Management System (FMS) for Munsoft & Aegams through development. 4GL drives the compliance and relevance aspects of the software, ensuring solutions meet evolving municipal requirements. Spun off from Munsoft in May 2024.',
    website: 'https://www.4gl.co.za',
    logo: '4GL',
    color: 'from-green-600 to-emerald-600',
    icon: '💻',
    services: [
      'Core FMS Development',
      'Software Compliance',
      'System Enhancement',
      'Feature Development',
      'Technical Innovation',
      'Quality Assurance'
    ],
    established: 'May 2024 (spin-off from Munsoft)'
  },
  {
    id: 'novus3',
    name: 'Novus3',
    shortName: 'Novus3',
    description: 'Capital Investment Planning & Advisory Software',
    longDescription: 'Novus3 develops and supports industry-leading software solutions such as CP3, Financial Spatial Reporting and BI Dashboards. This is further complemented by specialised advisory products such as Capital Expenditure Frameworks (CEFs) and Spatial Development Frameworks (SDFs). Acquired by ITNA in October 2021.',
    website: 'https://www.novus3.co.za',
    logo: 'N3',
    color: 'from-indigo-600 to-blue-600',
    icon: '📊',
    services: [
      'CP3 Software Platform',
      'Capital Investment Planning',
      'Financial Spatial Reporting',
      'BI & Dashboards',
      'Capital Expenditure Frameworks (CEFs)',
      'Spatial Development Frameworks (SDFs)',
      'IDP Process Planning',
      'Expenditure Prioritization'
    ],
    acquired: 'October 2021 by ITNA'
  },
  {
    id: 'rumas',
    name: 'Rumas',
    shortName: 'Rumas',
    description: 'Credit Control & Indigent Management Solutions',
    longDescription: 'Rumas continues to build out their core solutions in Collection Wise and Indi Reg, offering service support to both Munsoft and non-Munsoft clients. With over 20 years of specialised experience in credit control, indigent management, and supplier vetting. Acquired by ITNA in August 2022.',
    website: 'https://www.rumas.co.za',
    logo: 'R',
    color: 'from-pink-600 to-rose-600',
    icon: '💰',
    services: [
      'Collection Wise Platform',
      'Indi Reg System',
      'Credit Control Solutions',
      'Indigent Management',
      'Supplier Vetting',
      'Revenue Enhancement',
      'Debt Collection'
    ],
    established: 'Over 20 years experience',
    acquired: 'August 2022 by ITNA'
  },
  {
    id: 'intelo',
    name: 'Intelo',
    shortName: 'Intelo',
    description: 'Specialized ICT Services',
    longDescription: 'Intelo continues to deliver specialised ICT services to Munsoft clients, seeking to expand to non-Munsoft clients with generic ICT services. Intelo is also establishing a private sector footprint, first within the group and then looking at the ICT market at large. Spun off from Munsoft in May 2024.',
    website: 'https://www.intelo.co.za',
    logo: 'I',
    color: 'from-violet-600 to-purple-600',
    icon: '🔧',
    services: [
      'Specialized ICT Services',
      'IT Infrastructure',
      'Network Solutions',
      'Cloud Services',
      'Technical Support',
      'Private Sector ICT',
      'System Integration'
    ],
    established: 'May 2024 (spin-off from Munsoft)'
  },
  {
    id: 'sapsi',
    name: 'Sapsi',
    shortName: 'Sapsi',
    description: 'Training & Learning Solutions',
    longDescription: 'Sapsi is establishing a training business for the group focusing on system and process training for clients. Training includes: Classroom, Regional, Onsite and Online formats. Spun off from Munsoft in May 2024.',
    website: 'https://www.sapsi.co.za',
    logo: 'S',
    color: 'from-orange-600 to-red-600',
    icon: '🎓',
    services: [
      'Classroom Training',
      'Regional Training',
      'Onsite Training',
      'Online Training',
      'System Training',
      'Process Training',
      'Accredited Certifications'
    ],
    established: 'May 2024 (spin-off from Munsoft)'
  },
  {
    id: 'sunsoft',
    name: 'Sunsoft',
    shortName: 'Sunsoft',
    description: 'Internal Product & Solution Development',
    longDescription: 'Sunsoft is a dedicated product development company focused on internal product and solution development for the various businesses within the ITNA group. Established in April 2024.',
    website: 'https://www.sunsoft.co.za',
    logo: 'SS',
    color: 'from-yellow-500 to-amber-600',
    icon: '⚡',
    services: [
      'Product Development',
      'Solution Engineering',
      'Internal Tools',
      'Innovation R&D',
      'Technology Solutions',
      'Software Development'
    ],
    established: 'April 2024'
  }
]

// Company timeline for About section
export const timeline = [
  {
    year: 'Early 2000s',
    title: 'ITNA Founded',
    description: 'ITNA (Pty) Ltd founded with a vision to provide exceptional voice, continuity services and ICT support.'
  },
  {
    year: 'March 2010',
    title: 'CCS Africa Merger',
    description: 'Merged with CCS Africa, specialists in telephony (voice) and connectivity solutions, creating a comprehensive ICT provider.'
  },
  {
    year: 'Early 2012',
    title: 'Focus on Local Government',
    description: 'Strategic realignment from private sector to public service, addressing unique technological challenges facing local government.'
  },
  {
    year: 'August 2017',
    title: 'Munsoft Acquisition',
    description: 'Acquired 100% shareholding in Munsoft, creating a South African local government powerhouse combining FMS/ERP with advanced IT services.'
  },
  {
    year: '2017',
    title: 'Advisory Division Established',
    description: 'Supported Munsoft in establishing a dedicated Advisory and Training division for mSCOA reform and municipal financial processes.'
  },
  {
    year: 'October 2021',
    title: 'Novus3 Acquisition',
    description: 'Acquired Novus3, enhancing capabilities in metropolitan municipalities with expertise in IDP, expenditure planning, and capital expenditure frameworks.'
  },
  {
    year: 'August 2022',
    title: 'Rumas Acquisition',
    description: 'Welcomed Rumas to the ITNA family, bringing over 20 years of specialized experience in credit control and indigent management.'
  },
  {
    year: 'April 2024',
    title: 'Sunsoft Established',
    description: 'Established Sunsoft as a dedicated product development company focused on internal product and solution development.'
  },
  {
    year: 'May 2024',
    title: 'Strategic Spin-offs',
    description: 'Strategic spin-off of 4GL, Sapsi, and Intelo from Munsoft to focus exclusively on their specialized areas.'
  },
  {
    year: 'November 2024',
    title: 'Municipal Advisory Rebrand',
    description: 'Renamed Munsoft Advisory to Municipal Advisory, reflecting expanded focus on comprehensive municipal services.'
  },
  {
    year: 'June 2025',
    title: '/AE//Gams Networks Acquisition',
    description: 'Finalized acquisition of /AE//Gams Networks in Namibia, the leading FMS provider with 25+ years of experience.'
  }
]

// Group statistics
export const groupStats = {
  companies: '10+',
  saClients: 70,
  namibiaClients: 17,
  countries: 3,
  yearsExperience: 20,
  founded: 'Early 2000s'
}
