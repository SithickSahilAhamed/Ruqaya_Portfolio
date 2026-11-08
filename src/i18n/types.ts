export type Lang = 'en' | 'es'

export interface Metric {
  value: string
  label: string
  description: string
}

export interface ServiceTrack {
  id: string
  track: string
  title: string
  primaryCta?: string
  primaryAction?: 'courses' | 'contact'
  secondaryCta?: string
  secondaryAction?: 'courses' | 'contact'
}

export interface Project {
  id: string
  number: string
  years: string
  title: string
  org: string
  summary: string
  bullets: string[]
  highlightValue: string
  highlightDesc: string
  tags: string[]
  moreTags: number
  location: string
  category: 'all' | 'audits' | 'municipal' | 'iso' | 'gis'
}

export interface Publication {
  id: string
  type: 'journal' | 'policy'
  venue: string
  year: string
  meta: string
  title: string
  authors: string
  summary: string
  tags: string[]
  url: string
}

export interface ModelPhase {
  title: string
  items: string[]
}

export interface Translations {
  nav: {
    about: string
    services: string
    courses: string
    coursesNew: string
    resources: string
    contact: string
    bookServices: string
    tagline: string
  }
  hero: {
    eyebrow: string
    subEyebrow: string
    title: string
    description: string
    trust: string[]
    bookServices: string
    upcomingCourse: string
    expertProfile: string
    metrics: Metric[]
  }
  about: {
    eyebrow: string
    title: string
    tracks: ServiceTrack[]
  }
  expert: {
    eyebrow: string
    title: string
    subtitle: string
    name: string
    role: string
    credentials: string
    linkedin: string
    badge: string
    specializationLabel: string
    specialization: string
    isoLabel: string
    isoTags: string[]
    highlights: { title: string; text: string }[]
  }
  projects: {
    eyebrow: string
    title: string
    subtitle: string
    showing: (shown: number, total: number) => string
    filters: { id: string; label: string }[]
    dossier: string
    items: Project[]
  }
  resources: {
    eyebrow: string
    title: string
    subtitle: string
    scholarBadge: string
    scholarSub: string
    modelBadge: string
    modelVenue: string
    modelTitle: string
    modelDesc: string
    expandModel: string
    readPaper: string
    clickFullscreen: string
    phases: ModelPhase[]
    searchPlaceholder: string
    filters: { id: string; label: string }[]
    viewPaper: string
    publications: Publication[]
  }
  contact: {
    eyebrow: string
    title: string
    subtitle: string
    regions: string
    emailLabel: string
    whatsappLabel: string
    linkedinLabel: string
    linkedinText: string
    nameLabel: string
    namePlaceholder: string
    emailFieldLabel: string
    emailPlaceholder: string
    messageLabel: string
    messagePlaceholder: string
    whatsappCta: string
    send: string
    success: string
    errorRequired: string
    errorEmail: string
    submitError: string
    sending: string
  }
  courses: {
    back: string
    cohortOpen: string
    cohortMeta: string
    eyebrow: string
    title: string
    description: string
    upcomingBadge: string
    registrationOpen: string
    fullscreen: string
    download: string
    ledBy: string
    ledByRole: string
    programmeMeta: string
    courseTitle: string
    courseSubtitle: string
    courseTagline: string
    courseDesc: string
    learnTitle: string
    learnItems: string[]
    chooseSchedule: string
    schedules: { id: string; dates: string; time: string; note: string }[]
    formatLabel: string
    formatValue: string
    formatCert: string
    investmentLabel: string
    investmentMxn: string
    investmentUsd: string
    interestedTitle: string
    selectedSchedule: string
    registerWhatsapp: string
    registerEmail: string
    quote: string
    formBadge: string
    formTitle: string
    formDirect: string
    fullName: string
    fullNamePlaceholder: string
    officialEmail: string
    emailPlaceholder: string
    organization: string
    orgPlaceholder: string
    phone: string
    phonePlaceholder: string
    currency: string
    reserve: string
    corporateEyebrow: string
    corporateTitle: string
    corporateDesc: string
    corporateWhatsapp: string
    corporateEmail: string
    formSuccess: string
  }
  footer: {
    tagline: string
    bookServices: string
    rights: string
    regions: string
  }
}
