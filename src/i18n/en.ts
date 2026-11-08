import type { Translations } from './types'

export const en: Translations = {
  nav: {
    about: 'About Us',
    services: 'Services',
    courses: 'Courses',
    coursesNew: 'NEW',
    resources: 'Resources',
    contact: 'Contact Us',
    bookServices: 'Book Services',
    tagline: 'Leadership in circular economy & waste management',
  },
  hero: {
    eyebrow: 'RUQAYA · Strategic Circular Advisory',
    subEyebrow: 'Leadership in Circular Economy & Waste Management',
    title:
      'Waste Advisory · Strategy, Consulting, Training & Certification, Engineering & Technology',
    description:
      'We provide expert consulting, training, and capacity building in circular economy and waste management. Our services include life cycle assessment (LCA), ESG, carbon footprint analysis, and engineering advisory to help organizations prevent waste, use resources efficiently, and implement practical circular solutions for sustainable industries and cities.',
    trust: [
      'ISO Circular Economy Standards (ISO 59004, 59010, 59014, 59020, 59040) · ISO 14001, 9001',
      'Green Building Certification (LEED, IGBC, WELL)',
      'Life cycle analysis and ESG, carbon footprint analysis services',
    ],
    bookServices: 'Book Services',
    upcomingCourse: 'Upcoming Course (ISO 59004)',
    expertProfile: "Our Expert's Profile",
    metrics: [
      {
        value: '39%',
        label: 'Transport Trip Reduction',
        description: 'Algorithmic GIS route optimization models',
      },
      {
        value: '33%',
        label: 'Resource & Fuel Savings',
        description: 'Validated through fleet logistics simulations',
      },
      {
        value: '10d → 1d',
        label: 'Lab Turnaround Cut',
        description: 'Digital testing systems under ISO/IS standards',
      },
      {
        value: '100%',
        label: 'Protocol Compliance',
        description: 'ISO standards, green building & sustainability frameworks',
      },
    ],
  },
  about: {
    eyebrow: 'Institutional Practice & Engagement Tracks',
    title: 'Service Tracks',
    tracks: [
      {
        id: '01',
        track: 'Track 01',
        title: 'Capacity Building',
        primaryCta: 'Upcoming Courses',
        primaryAction: 'courses',
        secondaryCta: 'Book Custom Training',
        secondaryAction: 'contact',
      },
      {
        id: '02',
        track: 'Track 02',
        title: 'Strategic Consulting',
        primaryCta: 'Book Consulting',
        primaryAction: 'contact',
      },
      {
        id: '03',
        track: 'Track 03',
        title: 'Applied Research & Workshops',
        primaryCta: 'Book Research',
        primaryAction: 'contact',
      },
      {
        id: '04',
        track: 'Track 04',
        title: 'Facility & Site Audits',
        primaryCta: 'Book Audit',
        primaryAction: 'contact',
      },
    ],
  },
  expert: {
    eyebrow: 'Executive Leadership',
    title: "Our Expert's Profile",
    subtitle:
      'Grounded in circular economy engineering, international environmental standards, and strategic waste resource recovery.',
    name: 'Dr. Hammadhu Rukiya Jalva',
    role: 'Circular Economy Expert',
    credentials:
      'Master of Engineering in Construction Engineering & Management, PhD in Circular Economy, LEED GA, IGBC AP, Lean Six Sigma Black Belt',
    linkedin: 'LinkedIn Profile',
    badge: 'International Advisory',
    specializationLabel: 'Core Specialization & Frameworks',
    specialization:
      'Specialized in closing material loops across inert Construction and Demolition Waste (CDW) and municipal solid waste systems. Provided consultation for IGBC green building certification, Life cycle analysis and ESG, carbon footprint analysis services, workforce capacity building, and engineering advisory aligned with all ISO Circular Economy Standards and sustainability rating frameworks.',
    isoLabel: 'ISO Circular Economy Standards',
    isoTags: [
      'ISO 59004',
      'ISO 59010',
      'ISO 59014',
      'ISO 59020',
      'ISO 59040',
      'ISO 14001',
      'ISO 9001',
    ],
    highlights: [
      {
        title: 'IGBC & Green Building:',
        text: 'Provided consultation for IGBC green building certification, material circularity, and waste diversion.',
      },
      {
        title: 'LCA & ESG:',
        text: 'Life cycle analysis and ESG, carbon footprint analysis services across supply chains and materials.',
      },
      {
        title: 'Systems Modeling:',
        text: 'Algorithmic route models cutting transport trips by 39% & resources by 33%.',
      },
    ],
  },
  projects: {
    eyebrow: 'Case Registry · Proven Track Record',
    title: 'Executed Projects',
    subtitle:
      'Demonstrated engineering models, IGBC green building certification consultation, municipal infrastructure advisory, and certified technical projects.',
    showing: (shown, total) => `Showing ${shown} of ${total} Projects`,
    filters: [
      { id: 'all', label: 'All Engagements (7)' },
      { id: 'audits', label: 'Audits & Green Cert' },
      { id: 'municipal', label: 'Municipal DPRs' },
      { id: 'iso', label: 'ISO Standards' },
      { id: 'gis', label: 'GIS & Optimization' },
    ],
    dossier: 'Dossier',
    items: [
      {
        id: 'p1',
        number: 'Project #01',
        years: '2025 – 2026',
        title:
          'Member, Technical Expert Group on Circular Economy Competency Standards',
        org: 'CANACINTRA (National Chamber of the Transformation Industry) in strategic partnership with Estrategia Circular MX (ECMX), Mexico.',
        summary:
          'Serving as Member of the Technical Expert Group on Circular Economy Competency Standards convened by CANACINTRA (National Chamber of the Transformation Industry) in strategic partnership with Estrategia Circular MX (ECMX), Mexico.',
        bullets: [
          "Contributing to the development of Mexico's first Circular Economy Competency Standard under CONOCER (National Council for Standardization and Certification of Labour Competencies).",
          'Supporting the definition of professional competencies and performance criteria to strengthen circular economy implementation, sustainable production, and environmental capacity building across the industrial sector.',
          "Providing technical expertise to align competency requirements with Mexico's emerging circular economy regulatory framework and national sustainability priorities.",
        ],
        highlightValue: 'National Standard',
        highlightDesc:
          "Mexico's first accredited Circular Economy Competency Standard under CONOCER",
        tags: [
          'CONOCER Circular Competency Standard',
          'CANACINTRA Industrial Framework',
        ],
        moreTags: 2,
        location: 'Mexico / International',
        category: 'iso',
      },
      {
        id: 'p2',
        number: 'Project #02',
        years: '2021 – 2026',
        title:
          'Urban Waste Flow, Material Quantification & Fleet Route Optimization Models',
        org: 'RUQAYA Systems Modeling & Engineering Practice',
        summary:
          'Developed city-scale material quantification models, urban waste flow maps, and GIS-based algorithmic route optimization for inert Construction and Demolition Waste (CDW) and Municipal Solid Waste (MSW) logistics.',
        bullets: [
          'Spatial GIS network analysis and vehicle routing problem (VRP) heuristic modeling.',
          'AI-enabled detection frameworks for identifying unauthorized dumping hotspots and optimizing collection vectors.',
          'Techno-economic cost–benefit modeling balancing transport fuel, labor, and plant processing capacity.',
        ],
        highlightValue: '39% Reduction',
        highlightDesc:
          'In vehicular transport trips, yielding 33% direct fuel and resource savings',
        tags: ['CPCB C&D Waste Rules', 'ISO 14040 LCA Framework'],
        moreTags: 1,
        location: 'Urban Municipal Corridors',
        category: 'gis',
      },
      {
        id: 'p3',
        number: 'Project #03',
        years: '2023 – 2026',
        title:
          'Consultation for IGBC Green Building Certification & Construction Waste Minimisation',
        org: 'Green Building Advisory Services / Client Construction Sites',
        summary:
          'Provided consultation for IGBC green building certification, guiding construction projects on on-site waste segregation, material circularity ratios, and sustainable inert debris diversion.',
        bullets: [
          'Comprehensive advisory and consultation for IGBC green building certification credits.',
          'On-site mass-balance waste generation audits during structural and finishing phases.',
          'Material circularity accounting: percentage of salvaged, recycled, and regionally sourced components.',
        ],
        highlightValue: '100% Audit Readiness',
        highlightDesc:
          'Zero non-conformances on IGBC material circularity evaluation checkpoints',
        tags: ['IGBC Green Building Certification', 'LEED Rating System'],
        moreTags: 2,
        location: 'Regional Construction Projects & Industrial Portfolios',
        category: 'audits',
      },
      {
        id: 'p4',
        number: 'Project #04',
        years: '2022 – 2025',
        title:
          'Municipal Solid Waste Strategy, Infrastructure & Detailed Project Reports (DPR)',
        org: 'Municipal Corporations & Urban Local Bodies (ULBs)',
        summary:
          'Provided technical, analytical, and strategic advisory on integrated municipal solid waste management, material recovery facilities (MRF), and circular diversion projects.',
        bullets: [
          'Synthesized inputs for circular economy, material recovery facility (MRF) design, and waste diversion rates.',
          'Feasibility studies, Detailed Project Report (DPR) preparation, and tender documentation reviews.',
          'Technical assessment of legacy landfill biomining, Refuse Derived Fuel (RDF) quality, and Waste-to-Energy (WtE) viability.',
        ],
        highlightValue: 'Multi-State ULB',
        highlightDesc:
          'Covered municipal jurisdictions serving over 3.5 million residents',
        tags: ['SBM-Urban 2.0 Guidelines', 'CPHEEO Solid Waste Manual'],
        moreTags: 1,
        location: 'Multiple Municipal Corporations & Regional Authorities',
        category: 'municipal',
      },
      {
        id: 'p5',
        number: 'Project #05',
        years: '2023 – 2025',
        title:
          'Strategic Feedstock & Techno-Economic Advisory for Biogas & Resource Recovery',
        org: 'National Sustainability Programs / Renewable Energy Stakeholders',
        summary:
          'Assisted in strategic planning and advisory for decentralized biogas and organic resource recovery projects under national sustainability schemes (including SATAT-aligned programs).',
        bullets: [
          'Quantitative feedstock availability assessment (municipal wet waste, agro-residues, livestock manure).',
          'Anaerobic digestion technology screening (CSTR vs. dry fermentation) and biomethane yield calculations.',
          'Cost-benefit analysis, capital expenditure payback, and carbon offset quantification.',
        ],
        highlightValue: 'Closed-Loop Bioenergy',
        highlightDesc:
          'Model validated bio-CNG conversion with 85% organic diversion efficiency',
        tags: ['SATAT Guidelines', 'MNRE Bio-methanation Standards'],
        moreTags: 1,
        location: 'Agricultural & Municipal Belts',
        category: 'municipal',
      },
      {
        id: 'p6',
        number: 'Project #06',
        years: '2022 – 2024',
        title:
          'Recycling Facility Process Optimization, VSM & Ishikawa Diagnostics',
        org: 'Industrial Waste Processing Facilities',
        summary:
          'Conducted process improvement and operational performance reviews for material recycling plants using Value Stream Mapping (VSM) and Ishikawa (fishbone) root-cause analysis.',
        bullets: [
          'Value Stream Mapping from raw waste intake, primary crushing, magnetic separation, to sizing screens.',
          'Ishikawa root-cause analysis for sorting downtime, screen blinding, and contaminant carryover.',
          'Triple-bottom-line urban mining model balancing secondary market pricing, plant energy, and worker safety.',
        ],
        highlightValue: '+18% Purity',
        highlightDesc:
          'Improvement in recycled sand & secondary aggregate purity grade',
        tags: ['Lean Six Sigma VSM', 'ISO 9001 Quality Framework'],
        moreTags: 1,
        location: 'Tamil Nadu & Regional Facilities',
        category: 'audits',
      },
      {
        id: 'p7',
        number: 'Project #07',
        years: '2022 – 2025',
        title:
          'Web-Based Laboratory Resource Management & ISO/IS Analytical Testing System',
        org: 'Environmental Engineering & Materials Testing Infrastructure',
        summary:
          'Designed and deployed a specialized digital laboratory resource and testing management system for environmental and aggregate characterization under ISO and IS standards.',
        bullets: [
          'Standardized test protocols for sieve analysis, aggregate crushing value, water quality BOD/COD, and spectrophotometry.',
          'Automated calculation engines replacing manual paper-based calibration calculations.',
          'Real-time sample tracking from field delivery to certified test report issuance.',
        ],
        highlightValue: '90% Time Cut',
        highlightDesc: 'Sample turnaround time reduced from 10 days to 1 day',
        tags: [
          'ISO/IEC 17025 Laboratory Standard',
          'IS 2386 Aggregate Testing',
        ],
        moreTags: 1,
        location: 'Advanced Testing Facilities',
        category: 'iso',
      },
    ],
  },
  resources: {
    eyebrow: 'Resources & Scientific Dossier',
    title: 'Publications & Resources',
    subtitle:
      'Proprietary circular economy models, peer-reviewed journal publications, and direct scientific paper access.',
    scholarBadge: 'Google Scholar Indexed',
    scholarSub: 'Verified Research & Direct Links',
    modelBadge: 'Proprietary Framework',
    modelVenue: 'Springer Nature · ESPR (2025)',
    modelTitle: 'RUQAYA Circular Economy Model for the Construction Sector',
    modelDesc:
      'Strategies at each phase of the building lifecycle — published in Environmental Science and Pollution Research (Springer): "Advancing construction and demolition waste management through technology: a framework for integration and sustainable solutions".',
    expandModel: 'Expand Model',
    readPaper: 'Read Full Paper',
    clickFullscreen: 'Click to view full resolution',
    phases: [
      {
        title: '01. Design Phase',
        items: [
          'Design for Deconstruction & Disassembly',
          'Low-impact material selection (LCA)',
          'Durable & certified green materials',
          'Eco-friendly lean design (material minimization)',
        ],
      },
      {
        title: '02. Construction Phase',
        items: [
          'Non-hazardous materials for secondary life',
          'Mechanical assembly & no-glue methods',
          'Regionally sourced indigenous materials',
          'Reused, refurbished & recycled inputs',
        ],
      },
      {
        title: '03. Use Phase',
        items: [
          'Scheduled maintenance & repair protocols',
          'Component refurbishment & adaptive reuse',
          'On-site material repurposing',
          'Segregated operational recycling loops',
        ],
      },
      {
        title: '04. Demolition Phase',
        items: [
          'High-value structural material reuse',
          'Secondary component refurbishment',
          'High-grade aggregate recycling (IS 383)',
          'Energy recovery for non-recyclable fractions',
        ],
      },
    ],
    searchPlaceholder: 'Search publications by title, journal, keywords...',
    filters: [
      { id: 'all', label: 'All (5)' },
      { id: 'journals', label: 'Journals' },
      { id: 'policy', label: 'Policy' },
    ],
    viewPaper: 'View Paper',
    publications: [
      {
        id: 'pub1',
        type: 'journal',
        venue: 'Springer Nature Journal',
        year: '2025',
        meta: 'Environ Sci Pollut Res 32, 27541–27558 (2025)',
        title:
          'Advancing construction and demolition waste management through technology: a framework for integration and sustainable solutions',
        authors:
          'HaitherAli, H., Gopakumar, A. — Environ Sci Pollut Res 32, 27541–27558 (Springer)',
        summary:
          'Advancing construction and demolition waste management through technology: a framework for integration and sustainable solutions. Introduces the RUQAYA Circular Economy Model for the Construction Sector across design, construction, use, and demolition phases.',
        tags: [
          'C&D Waste Management',
          'Technology Framework',
          'Circular Economy Model',
          'Lifecycle Strategies',
          'Springer ESPR',
        ],
        url: 'https://doi.org/10.1007/s11356-025-36768-8',
      },
      {
        id: 'pub2',
        type: 'journal',
        venue: 'Springer Nature Journal',
        year: '2026',
        meta: 'DOI: 10.1007/s42452-025-08187-4',
        title:
          'Characterisation and evaluation of construction and demolition waste for sustainable reuse',
        authors:
          'Hammadhu Rukiya Jalva Haitherali, Salman Shooshtarian, Anjali Gopakumar — Discover Applied Sciences (Springer Nature)',
        summary:
          'Experimental characterisation, material composition diagnostics, and quality standards for secondary aggregates to enable circular recycling and sustainable reuse in the built environment.',
        tags: [
          'C&D Waste Reuse',
          'Material Characterisation',
          'Circular Economy',
          'Built Environment',
        ],
        url: 'https://doi.org/10.1007/s42452-025-08187-4',
      },
      {
        id: 'pub3',
        type: 'journal',
        venue: 'Elsevier Journal',
        year: '2025',
        meta: 'Volume 26, 105688',
        title:
          'Identification of construction and demolition waste: Leveraging deep learning and open-source imagery for advanced monitoring in developing economies',
        authors:
          'Hammadhu Rukiya Jalva Haitherali, J. M. Shakeel, Sivagami M., Anjali G. — Results in Engineering (Elsevier)',
        summary:
          'Convolutional neural networks and computer vision architecture developed for automated spatial identification and monitoring of construction waste dumps using open-source satellite imagery.',
        tags: [
          'Deep Learning',
          'Computer Vision',
          'Waste Monitoring',
          'Open-Source Imagery',
        ],
        url: 'https://doi.org/10.1016/j.rineng.2025.105688',
      },
      {
        id: 'pub4',
        type: 'policy',
        venue: 'Springer Policy Monograph',
        year: '2023',
        meta: 'Global Policy Framework',
        title:
          'Circular Economy in Construction Sector—a Guideline for Policy Makers from Global Perspective',
        authors:
          'Hammadhu Rukiya Jalva Haitherali & International Collaborators — Circular Economy and Sustainability (Springer)',
        summary:
          'Strategic guidelines, regulatory instruments, and global benchmarks for policymakers seeking to implement circular economy principles and material loop closure across the construction sector.',
        tags: [
          'Policy Guidelines',
          'Global Perspective',
          'Circular Economy',
          'Regulatory Levers',
        ],
        url: 'https://doi.org/10.1007/s43615-023-00326-y',
      },
      {
        id: 'pub5',
        type: 'journal',
        venue: 'Engineering Research Journal',
        year: '2018',
        meta: 'Volume 6, Issue III',
        title: 'Study on Methods to Implement Lean Technology in Construction',
        authors:
          'Hammadhu Rukiya Jalva Haitherali — International Journal for Research in Applied Science & Engineering Technology (IJRASET)',
        summary:
          'Investigates the implementation of Lean principles, Value Stream Mapping (VSM), waste elimination vectors, and operational productivity enhancements on construction and industrial sites.',
        tags: [
          'Lean Construction',
          'Lean Six Sigma',
          'Value Stream Mapping',
          'Productivity',
        ],
        url: 'https://www.ijraset.com/fileserve.php?FID=13346',
      },
    ],
  },
  contact: {
    eyebrow: 'Direct Contact & Commissioning',
    title: 'Contact Us',
    subtitle: 'RUQAYA — Leadership in circular economy & waste management',
    regions: 'Latin America (Mexico) · India · International',
    emailLabel: 'Email',
    whatsappLabel: 'WhatsApp',
    linkedinLabel: 'LinkedIn',
    linkedinText: 'Profile Page',
    nameLabel: 'Your Name *',
    namePlaceholder: 'e.g. Dr. / Eng. Name',
    emailFieldLabel: 'Email Address *',
    emailPlaceholder: 'name@organization.com',
    messageLabel: 'Your Message / Project Scope *',
    messagePlaceholder:
      'Tell us about your requirements, project location, or questions...',
    whatsappCta: 'WhatsApp (+52 5571986833)',
    send: 'Send Message',
    success: 'Thank you. Your message has been sent successfully. We will get back to you soon.',
    errorRequired: 'Please fill in all required fields.',
    errorEmail: 'Please enter a valid email address.',
    submitError: 'Something went wrong while sending your message. Please try again or contact us via WhatsApp.',
    sending: 'Sending...',
  },
  courses: {
    back: 'Back to Main Site',
    cohortOpen: 'Upcoming Cohort Open',
    cohortMeta: 'November 2026 Live Online Sessions',
    eyebrow: 'RUQAYA Executive Academy · Capacity Building',
    title: 'Courses & Training Programmes',
    description:
      'Go beyond superficial introductory webinars. We deliver actionable, standards-grounded training designed to equip executives, engineers, and sustainability teams with real circular economy implementation tools.',
    upcomingBadge: 'Upcoming Live Course',
    registrationOpen: 'Registration Open · Limited Cohort Seats',
    fullscreen: 'Fullscreen Flyer',
    download: 'Download Flyer',
    ledBy: 'Led by Dr. Hammadhu Rukiya Jalva',
    ledByRole: 'Circular Economy Expert · CONOCER/CANACINTRA Standards Member',
    programmeMeta:
      'Practical Online Programme · 2 Days · 8 Hours · Live Interactive',
    courseTitle: 'No more introductory courses!',
    courseSubtitle: 'Master ISO 59004:2024',
    courseTagline:
      'Circular economy — Vocabulary, principles and guidance for implementation',
    courseDesc:
      'Go beyond theory and learn how to implement the circular economy in alignment with the ISO standard and create real value for your organization.',
    learnTitle: 'You Will Learn How To',
    learnItems: [
      'Apply circular economy principles',
      'Improve resource efficiency and reduce waste',
      'Optimize processes and identify circular business opportunities',
      'Develop a practical Circular Economy Action Plan',
    ],
    chooseSchedule: 'Choose Your Schedule',
    schedules: [
      {
        id: 'a',
        dates: 'Nov 3 & 4',
        time: '8:30 AM – 12:30 PM CST',
        note: 'Cohort A · Weekday Morning',
      },
      {
        id: 'b',
        dates: 'Nov 7 & 14',
        time: '9:00 AM – 1:00 PM CST',
        note: 'Cohort B · Two-Week Interval',
      },
    ],
    formatLabel: 'Format',
    formatValue: 'Online · English/Spanish · 8 hours',
    formatCert: 'Certificate of Completion',
    investmentLabel: 'Investment',
    investmentMxn: '4,500 MXN + 16% VAT',
    investmentUsd: '240 USD + 16% VAT',
    interestedTitle:
      'Interested? Send a direct message to register or for clarification.',
    selectedSchedule: 'Selected schedule:',
    registerWhatsapp: 'Register Directly via WhatsApp (+52 5571986833)',
    registerEmail: 'Email: hammadhu@gmail.com',
    quote: 'Turn circular economy principles into practical action!',
    formBadge: 'Online Seat Reservation',
    formTitle: 'Reserve Your Seat Directly',
    formDirect: 'Direct Confirmation',
    fullName: 'Full Name *',
    fullNamePlaceholder: 'e.g. Dr. / Ing. Carlos Mendoza',
    officialEmail: 'Official Email *',
    emailPlaceholder: 'carlos@company.com',
    organization: 'Organization / Company',
    orgPlaceholder: 'Company or Institution',
    phone: 'Phone / WhatsApp',
    phonePlaceholder: '+52 / +91 ...',
    currency: 'Billing Currency',
    reserve: 'Reserve Seat for',
    corporateEyebrow: 'Institutional & Corporate Capacity Building',
    corporateTitle:
      'Need In-House Training for Your Team or Industrial Association?',
    corporateDesc:
      'We deliver tailored corporate cohorts for manufacturing plants, construction contractors, industrial chambers (like CANACINTRA), universities, and Urban Local Bodies (ULBs). Custom modules include ISO 59004/59010/59014/59020 implementation, Lean Six Sigma Green to Master Black Belt, and construction waste characterisation.',
    corporateWhatsapp: 'Inquire for Corporate Cohort',
    corporateEmail: 'Email RFP / Syllabus Request',
    formSuccess:
      'Thank you. Your reservation request is ready — please complete sending via your email client, or register directly on WhatsApp.',
  },
  footer: {
    tagline: 'Circular Economy & Waste Management Strategic Advisory',
    bookServices: 'Book Services',
    rights: '© 2026 RUQAYA. All rights reserved.',
    regions: 'Global Advisory · Latin America & India',
  },
}
