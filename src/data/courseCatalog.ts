export type CourseCategory = 'management' | 'circular' | 'waste'

export interface CatalogCourse {
  id: string
  title: string
  category: CourseCategory
}

export interface CourseCategoryMeta {
  id: CourseCategory
  titleEn: string
  titleEs: string
}

export const COURSE_CATEGORIES: CourseCategoryMeta[] = [
  {
    id: 'management',
    titleEn: 'Management Courses',
    titleEs: 'Cursos de Gestión',
  },
  {
    id: 'circular',
    titleEn: 'Circular Economy Courses & Sustainability Courses',
    titleEs: 'Cursos de Economía Circular y Sostenibilidad',
  },
  {
    id: 'waste',
    titleEn: 'Waste Management Courses',
    titleEs: 'Cursos de Gestión de Residuos',
  },
]

/** Permanent course catalog — always shown on the public Courses page. */
export const PERMANENT_COURSES: CatalogCourse[] = [
  // Management
  {
    id: 'mgmt-lss-green',
    title: 'Lean Six Sigma Green Belt Certification',
    category: 'management',
  },
  {
    id: 'mgmt-lss-black',
    title: 'Lean Six Sigma Black Belt Certification',
    category: 'management',
  },
  {
    id: 'mgmt-lss-mbb',
    title: 'Lean Six Sigma Master Black Belt Certification',
    category: 'management',
  },
  {
    id: 'mgmt-fmea',
    title: 'Failure Mode And Effects Analysis (FMEA)',
    category: 'management',
  },
  {
    id: 'mgmt-5s',
    title: '5S Workplace Organization And Standardization',
    category: 'management',
  },
  {
    id: 'mgmt-pokayoke',
    title: 'Poka-Yoke: Mistake-Proofing And Error Prevention',
    category: 'management',
  },
  {
    id: 'mgmt-vsm',
    title: 'Value Stream Mapping',
    category: 'management',
  },
  {
    id: 'mgmt-pmp',
    title: 'Project Management Professional Training',
    category: 'management',
  },

  // Circular Economy & Sustainability
  {
    id: 'circ-iso-59004',
    title:
      'ISO 59004:2024 Circular Economy: Vocabulary, Principles And Guidance For Implementation',
    category: 'circular',
  },
  {
    id: 'circ-iso-59010',
    title:
      'ISO 59010:2024 Circular Economy: Guidance On The Transition Of Business Models And Value Networks',
    category: 'circular',
  },
  {
    id: 'circ-iso-59040',
    title:
      'ISO 59040:2025 Circular Economy: Product Circularity Data Sheet (PCDS)',
    category: 'circular',
  },
  {
    id: 'circ-iso-14001-auditor',
    title:
      'ISO 14001:2026 Environmental Management Systems: Internal Auditor Training',
    category: 'circular',
  },
  {
    id: 'circ-iso-14001-implementor',
    title:
      'ISO 14001:2026 Environmental Management Systems: Implementor Training',
    category: 'circular',
  },
  {
    id: 'circ-systems-thinking',
    title: 'Systems Thinking For Sustainability And Circular Economy',
    category: 'circular',
  },
  {
    id: 'circ-business-model',
    title: 'Circular Business Model',
    category: 'circular',
  },
  {
    id: 'circ-lca',
    title: 'Life Cycle Analysis',
    category: 'circular',
  },

  // Waste Management
  {
    id: 'waste-iswm',
    title: 'Integrated Solid Waste Management',
    category: 'waste',
  },
  {
    id: 'waste-cdw',
    title: 'Construction & Demolition Waste Management',
    category: 'waste',
  },
]

export interface CourseMediaDoc {
  id: string
  title?: string
  category?: CourseCategory
  description?: string
  imageUrl?: string
  imagePath?: string
  featured?: boolean
  custom?: boolean
  updatedAt?: number
}
