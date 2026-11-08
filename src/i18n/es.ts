import type { Translations } from './types'

export const es: Translations = {
  nav: {
    about: 'Nosotros',
    services: 'Servicios',
    courses: 'Cursos',
    coursesNew: 'NUEVO',
    resources: 'Recursos',
    contact: 'Contacto',
    bookServices: 'Reservar Servicios',
    tagline: 'Liderazgo en economía circular y gestión de residuos',
  },
  hero: {
    eyebrow: 'RUQAYA · Asesoría Estratégica en Economía Circular',
    subEyebrow: 'Liderazgo en Economía Circular y Gestión de Residuos',
    title:
      'Asesoría en Residuos · Estrategia, Consultoría, Capacitación y Certificación, Ingeniería y Tecnología',
    description:
      'Ofrecemos consultoría especializada, capacitación y desarrollo de capacidades en economía circular y gestión de residuos. Nuestros servicios abarcan análisis de ciclo de vida (ACV), ESG, análisis de huella de carbono y asesoría en ingeniería para ayudar a las organizaciones a prevenir residuos, optimizar el uso de recursos e implementar soluciones circulares prácticas para industrias y ciudades sostenibles.',
    trust: [
      'Estándares ISO de Economía Circular (ISO 59004, 59010, 59014, 59020, 59040) · ISO 14001, 9001',
      'Certificación de Edificación Sustentable (LEED, IGBC, WELL)',
      'Servicios de análisis de ciclo de vida (ACV), ESG y huella de carbono',
    ],
    bookServices: 'Reservar Servicios',
    upcomingCourse: 'Próximo Curso (ISO 59004)',
    expertProfile: 'Perfil de Nuestra Experta',
    metrics: [
      {
        value: '39%',
        label: 'Reducción de Viajes',
        description: 'Modelos algorítmicos SIG de optimización de rutas',
      },
      {
        value: '33%',
        label: 'Ahorro de Combustible',
        description: 'Validado mediante simulaciones de logística de flotas',
      },
      {
        value: '10d → 1d',
        label: 'Tiempos de Laboratorio',
        description: 'Sistemas digitales de ensayo bajo normas ISO/IS',
      },
      {
        value: '100%',
        label: 'Cumplimiento Normativo',
        description:
          'Normas ISO, edificación sustentable y marcos de sostenibilidad',
      },
    ],
  },
  about: {
    eyebrow: 'Práctica Institucional y Líneas de Trabajo',
    title: 'Líneas de Servicio',
    tracks: [
      {
        id: '01',
        track: 'Línea 01',
        title: 'Desarrollo de Capacidades',
        primaryCta: 'Próximos Cursos',
        primaryAction: 'courses',
        secondaryCta: 'Solicitar Capacitación',
        secondaryAction: 'contact',
      },
      {
        id: '02',
        track: 'Línea 02',
        title: 'Consultoría Estratégica',
        primaryCta: 'Reservar Consultoría',
        primaryAction: 'contact',
      },
      {
        id: '03',
        track: 'Línea 03',
        title: 'Investigación Aplicada y Talleres',
        primaryCta: 'Reservar Investigación',
        primaryAction: 'contact',
      },
      {
        id: '04',
        track: 'Línea 04',
        title: 'Auditorías de Instalaciones y Sitios',
        primaryCta: 'Reservar Auditoría',
        primaryAction: 'contact',
      },
    ],
  },
  expert: {
    eyebrow: 'Liderazgo Ejecutivo',
    title: 'Perfil de Nuestra Experta',
    subtitle:
      'Fundamentado en ingeniería de economía circular, estándares ambientales internacionales y valorización estratégica de residuos.',
    name: 'Dra. Hammadhu Rukiya Jalva',
    role: 'Experta en Economía Circular',
    credentials:
      'Maestría en Ingeniería en Construcción y Gestión, Doctorado en Economía Circular, LEED GA, IGBC AP, Lean Six Sigma Black Belt',
    linkedin: 'Perfil de LinkedIn',
    badge: 'Asesoría Internacional',
    specializationLabel: 'Especialización Principal y Marcos',
    specialization:
      'Especializada en el cierre de ciclos de materiales en residuos de construcción y demolición (RCD) inertes y sistemas de residuos sólidos urbanos. Consultoría brindada para certificación de edificación sustentable IGBC, análisis de ciclo de vida (ACV), ESG, análisis de huella de carbono, desarrollo de capacidades y asesoría de ingeniería alineada con todos los estándares ISO de economía circular y marcos de sostenibilidad.',
    isoLabel: 'Estándares ISO de Economía Circular',
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
        title: 'IGBC y Edificación Sustentable:',
        text: 'Consultoría para certificación de edificación sustentable IGBC, circularidad de materiales y desvío de residuos.',
      },
      {
        title: 'ACV y ESG:',
        text: 'Servicios de análisis de ciclo de vida (ACV), ESG y huella de carbono en cadenas de suministro y materiales.',
      },
      {
        title: 'Modelación de Sistemas:',
        text: 'Modelos algorítmicos de rutas que reducen viajes de transporte en un 39% y recursos en un 33%.',
      },
    ],
  },
  projects: {
    eyebrow: 'Registro de Casos · Trayectoria Comprobada',
    title: 'Proyectos Ejecutados',
    subtitle:
      'Modelos de ingeniería demostrados, consultoría de certificación de edificación sustentable IGBC, asesoría en infraestructura municipal y proyectos técnicos certificados.',
    showing: (shown, total) => `Mostrando ${shown} de ${total} Proyectos`,
    filters: [
      { id: 'all', label: 'Todos los Proyectos (7)' },
      { id: 'audits', label: 'Auditorías y Cert. Verde' },
      { id: 'municipal', label: 'DPR Municipales' },
      { id: 'iso', label: 'Estándares ISO' },
      { id: 'gis', label: 'SIG y Optimización' },
    ],
    dossier: 'Expediente',
    items: [
      {
        id: 'p1',
        number: 'Project #01',
        years: '2025 – 2026',
        title:
          'Miembro, Grupo Técnico de Expertos en Estándares de Competencia en Economía Circular',
        org: 'CANACINTRA en alianza estratégica con Estrategia Circular MX (ECMX), México.',
        summary:
          'Participación como Miembro del Grupo Técnico de Expertos en Estándares de Competencia en Economía Circular convocado por CANACINTRA en alianza estratégica con Estrategia Circular MX (ECMX), México.',
        bullets: [
          'Contribución al desarrollo del primer Estándar de Competencia en Economía Circular de México bajo CONOCER (Consejo Nacional de Normalización y Certificación de Competencias Laborales).',
          'Definición de competencias laborales y criterios de desempeño para fortalecer la economía circular, producción sustentable y desarrollo de capacidades ambientales en la industria.',
          'Aporte técnico para alinear los requerimientos con el marco regulatorio emergente de economía circular y prioridades nacionales de sostenibilidad en México.',
        ],
        highlightValue: 'Estándar Nacional',
        highlightDesc:
          'Primer Estándar de Competencia en Economía Circular de México acreditado ante CONOCER',
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
          'Modelos de Flujo de Residuos Urbanos, Cuantificación y Optimización de Rutas SIG',
        org: 'Práctica de Ingeniería y Modelación de Sistemas RUQAYA',
        summary:
          'Desarrollo de modelos a escala de ciudad para cuantificación de materiales, mapas de flujos de residuos y optimización algorítmica de rutas basada en SIG para logística de RCD y RSU.',
        bullets: [
          'Spatial GIS network analysis and vehicle routing problem (VRP) heuristic modeling.',
          'AI-enabled detection frameworks for identifying unauthorized dumping hotspots and optimizing collection vectors.',
          'Techno-economic cost–benefit modeling balancing transport fuel, labor, and plant processing capacity.',
        ],
        highlightValue: 'Reducción del 39%',
        highlightDesc:
          'En viajes de transporte vehicular, logrando 33% de ahorro directo en combustible y recursos',
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
          'Consultoría para Certificación de Edificación Sustentable IGBC y Desvío de Residuos',
        org: 'Servicios de Consultoría en Edificación Sustentable / Sitios en Construcción',
        summary:
          'Asesoría y consultoría para certificación de edificación sustentable IGBC, orientando proyectos en segregación in situ, ratios de circularidad y desvío de escombros inertes.',
        bullets: [
          'Comprehensive advisory and consultation for IGBC green building certification credits.',
          'On-site mass-balance waste generation audits during structural and finishing phases.',
          'Material circularity accounting: percentage of salvaged, recycled, and regionally sourced components.',
        ],
        highlightValue: '100% Preparación',
        highlightDesc:
          'Cero no conformidades en puntos de verificación de circularidad de materiales',
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
          'Estrategia de Residuos Urbanos, Infraestructura e Informes Detallados de Proyecto (DPR)',
        org: 'Corporaciones Municipales y Gobiernos Locales',
        summary:
          'Asesoría técnica, analítica y estratégica en gestión integral de residuos sólidos urbanos, plantas de recuperación de materiales (MRF) y proyectos de desvío circular.',
        bullets: [
          'Synthesized inputs for circular economy, material recovery facility (MRF) design, and waste diversion rates.',
          'Feasibility studies, Detailed Project Report (DPR) preparation, and tender documentation reviews.',
          'Technical assessment of legacy landfill biomining, Refuse Derived Fuel (RDF) quality, and Waste-to-Energy (WtE) viability.',
        ],
        highlightValue: 'Entidades Multi-Estado',
        highlightDesc:
          'Jurisdicciones municipales que atienden a más de 3.5 millones de habitantes',
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
          'Asesoría Técnico-Económica y Estrategia de Biogás y Recuperación de Recursos',
        org: 'Programas Nacionales de Sostenibilidad / Actores de Energía Renovable',
        summary:
          'Planificación estratégica y asesoría técnica para proyectos descentralizados de biogás y valorización orgánica bajo programas nacionales de sustentabilidad.',
        bullets: [
          'Quantitative feedstock availability assessment (municipal wet waste, agro-residues, livestock manure).',
          'Anaerobic digestion technology screening (CSTR vs. dry fermentation) and biomethane yield calculations.',
          'Cost-benefit analysis, capital expenditure payback, and carbon offset quantification.',
        ],
        highlightValue: 'Bioenergía Circular',
        highlightDesc:
          'Modelo validado de conversión a bio-GNC con 85% de eficiencia de desvío orgánico',
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
          'Optimización de Procesos de Reciclaje, VSM y Diagnóstico Ishikawa',
        org: 'Instalaciones Industriales de Procesamiento de Residuos',
        summary:
          'Revisión y optimización de rendimiento operativo en plantas de reciclaje de materiales mediante Mapeo de Flujo de Valor (VSM) y análisis causa-raíz Ishikawa.',
        bullets: [
          'Value Stream Mapping from raw waste intake, primary crushing, magnetic separation, to sizing screens.',
          'Ishikawa root-cause analysis for sorting downtime, screen blinding, and contaminant carryover.',
          'Triple-bottom-line urban mining model balancing secondary market pricing, plant energy, and worker safety.',
        ],
        highlightValue: '+18% Pureza',
        highlightDesc:
          'Mejora en el grado de pureza de arena reciclada y áridos secundarios',
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
          'Sistema Digital de Gestión de Ensayos Analíticos y Recursos de Laboratorio ISO/IS',
        org: 'Infraestructura de Ingeniería Ambiental y Ensayos de Materiales',
        summary:
          'Diseño e implementación de un sistema digital para gestión de ensayos ambientales y caracterización de áridos bajo normas ISO e IS.',
        bullets: [
          'Standardized test protocols for sieve analysis, aggregate crushing value, water quality BOD/COD, and spectrophotometry.',
          'Automated calculation engines replacing manual paper-based calibration calculations.',
          'Real-time sample tracking from field delivery to certified test report issuance.',
        ],
        highlightValue: '90% Menos Tiempo',
        highlightDesc:
          'Tiempo de entrega de muestras reducido de 10 días a 1 día',
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
    eyebrow: 'Recursos y Expediente Científico',
    title: 'Publicaciones y Recursos',
    subtitle:
      'Modelos propios de economía circular, publicaciones en revistas indexadas con revisión por pares y acceso directo a artículos científicos.',
    scholarBadge: 'Indexado en Google Scholar',
    scholarSub: 'Investigación Verificada y Enlaces Directos',
    modelBadge: 'Marco Propio Patentado',
    modelVenue: 'Springer Nature · ESPR (2025)',
    modelTitle:
      'Modelo RUQAYA de Economía Circular para el Sector de la Construcción',
    modelDesc:
      'Estrategias en cada etapa del ciclo de vida de la edificación — publicado en Environmental Science and Pollution Research (Springer): "Advancing construction and demolition waste management through technology: a framework for integration and sustainable solutions".',
    expandModel: 'Ampliar Modelo',
    readPaper: 'Leer Artículo en Springer',
    clickFullscreen: 'Clic para ver en alta resolución',
    phases: [
      {
        title: '01. Fase de Diseño',
        items: [
          'Diseño para deconstrucción y desmontaje',
          'Selección de materiales de bajo impacto (ACV)',
          'Materiales durables y ecológicos certificados',
          'Diseño esbelto eco-amigable (minimización de insumos)',
        ],
      },
      {
        title: '02. Fase de Construcción',
        items: [
          'Materiales no peligrosos para segunda vida',
          'Ensamble mecánico y métodos sin adhesivos',
          'Materiales regionales y autóctonos',
          'Insumos reutilizados, reacondicionados y reciclados',
        ],
      },
      {
        title: '03. Fase de Uso',
        items: [
          'Protocolos de mantenimiento y reparación programada',
          'Reacondicionamiento de componentes y reuso adaptativo',
          'Reutilización de materiales en el propio sitio',
          'Ciclos segregados de reciclaje operativo',
        ],
      },
      {
        title: '04. Fase de Demolición',
        items: [
          'Reutilización estructural de alto valor',
          'Reacondicionamiento de componentes secundarios',
          'Reciclaje de áridos de alta calidad (IS 383)',
          'Valorización energética de fracciones no reciclables',
        ],
      },
    ],
    searchPlaceholder:
      'Buscar publicaciones por título, revista, palabras clave...',
    filters: [
      { id: 'all', label: 'Todas (5)' },
      { id: 'journals', label: 'Revistas Científicas' },
      { id: 'policy', label: 'Políticas y Ponencias' },
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
    eyebrow: 'Contacto Directo y Contratación',
    title: 'Contáctenos',
    subtitle: 'RUQAYA — Liderazgo en economía circular y gestión de residuos',
    regions: 'Latinoamérica (México) · India · Internacional',
    emailLabel: 'Correo Electrónico',
    whatsappLabel: 'WhatsApp',
    linkedinLabel: 'LinkedIn',
    linkedinText: 'Página de Perfil',
    nameLabel: 'Su Nombre *',
    namePlaceholder: 'ej. Dr. / Ing. Nombre',
    emailFieldLabel: 'Correo Electrónico *',
    emailPlaceholder: 'nombre@organizacion.com',
    messageLabel: 'Su Mensaje / Alcance del Proyecto *',
    messagePlaceholder:
      'Cuéntenos sobre sus requerimientos, ubicación del proyecto o dudas...',
    whatsappCta: 'WhatsApp (+52 5571986833)',
    send: 'Enviar Mensaje',
    success:
      'Gracias. Su mensaje está listo para enviarse por correo. Complete el envío en su cliente de correo, o contáctenos directamente por WhatsApp.',
    errorRequired: 'Por favor complete todos los campos obligatorios.',
    errorEmail: 'Por favor ingrese un correo electrónico válido.',
  },
  courses: {
    back: 'Volver al Sitio Principal',
    cohortOpen: 'Cohorte Próxima Abierta',
    cohortMeta: 'Sesiones En Línea en Vivo · Noviembre 2026',
    eyebrow: 'Academia Ejecutiva RUQAYA · Desarrollo de Capacidades',
    title: 'Cursos y Programas de Capacitación',
    description:
      'Más allá de seminarios introductorios superficiales. Impartimos capacitación práctica y fundamentada en normas internacionales, diseñada para equipar a ejecutivos, ingenieros y equipos de sostenibilidad con herramientas reales de implementación de economía circular.',
    upcomingBadge: 'Curso En Vivo Próximo',
    registrationOpen: 'Inscripciones Abiertas · Cupos Limitados',
    fullscreen: 'Folleto en Pantalla Completa',
    download: 'Descargar Folleto',
    ledBy: 'Impartido por Dra. Hammadhu Rukiya Jalva',
    ledByRole:
      'Experta en Economía Circular · Miembro de Estándares CONOCER/CANACINTRA',
    programmeMeta:
      'Programa Práctico En Línea · 2 Días · 8 Horas · Interactivo En Vivo',
    courseTitle: '¡Basta de cursos introductorios!',
    courseSubtitle: 'Domine ISO 59004:2024',
    courseTagline:
      'Economía circular — Vocabulario, principios y orientación para la implementación',
    courseDesc:
      'Vaya más allá de la teoría y aprenda a implementar la economía circular en alineación con el estándar ISO, generando valor real para su organización.',
    learnTitle: 'Aprenderá a',
    learnItems: [
      'Aplicar principios de economía circular',
      'Optimizar la eficiencia en recursos y reducir residuos',
      'Optimizar procesos e identificar oportunidades circulares de negocio',
      'Desarrollar un Plan de Acción de Economía Circular práctico',
    ],
    chooseSchedule: 'Elija Su Horario',
    schedules: [
      {
        id: 'a',
        dates: '3 y 4 de Noviembre',
        time: '8:30 AM – 12:30 PM CST',
        note: 'Cohorte A · Mañana entre semana',
      },
      {
        id: 'b',
        dates: '7 y 14 de Noviembre',
        time: '9:00 AM – 1:00 PM CST',
        note: 'Cohorte B · Intervalo de dos semanas',
      },
    ],
    formatLabel: 'Formato',
    formatValue: 'En línea · Inglés/Español · 8 horas',
    formatCert: 'Certificado de Finalización',
    investmentLabel: 'Inversión',
    investmentMxn: '4,500 MXN + 16% IVA',
    investmentUsd: '240 USD + 16% IVA',
    interestedTitle:
      '¿Interesado? Envíe un mensaje directo para registrarse o resolver dudas.',
    selectedSchedule: 'Horario seleccionado:',
    registerWhatsapp:
      'Inscribirme Directamente por WhatsApp (+52 5571986833)',
    registerEmail: 'Email: hammadhu@gmail.com',
    quote: '¡Convierta los principios de economía circular en acción práctica!',
    formBadge: 'Reservación de Cupo En Línea',
    formTitle: 'Reserve Su Lugar Directamente',
    formDirect: 'Confirmación Directa',
    fullName: 'Nombre Completo *',
    fullNamePlaceholder: 'e.g. Dr. / Ing. Carlos Mendoza',
    officialEmail: 'Correo Institucional *',
    emailPlaceholder: 'carlos@company.com',
    organization: 'Organización / Empresa',
    orgPlaceholder: 'Company or Institution',
    phone: 'Teléfono / WhatsApp',
    phonePlaceholder: '+52 / +91 ...',
    currency: 'Moneda de Facturación',
    reserve: 'Reservar Lugar para',
    corporateEyebrow: 'Capacitación Institucional y Corporativa',
    corporateTitle:
      '¿Requiere Capacitación para su Equipo o Cámara Industrial?',
    corporateDesc:
      'Impartimos programas corporativos a la medida para plantas de manufactura, constructoras, cámaras industriales (como CANACINTRA), universidades y organismos operadores. Módulos personalizados de implementación ISO 59004/59010/59014/59020, Lean Six Sigma Green a Master Black Belt, y caracterización de residuos de construcción.',
    corporateWhatsapp: 'Cotizar Capacitación Empresarial',
    corporateEmail: 'Solicitar Propuesta por Correo',
    formSuccess:
      'Gracias. Su solicitud de reservación está lista — complete el envío en su cliente de correo, o inscríbase directamente por WhatsApp.',
  },
  footer: {
    tagline: 'Asesoría Estratégica en Economía Circular y Gestión de Residuos',
    bookServices: 'Reservar Servicios',
    rights: '© 2026 RUQAYA. Todos los derechos reservados.',
    regions: 'Asesoría Global · Latinoamérica e India',
  },
}
