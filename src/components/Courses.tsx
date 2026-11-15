import { useEffect, useMemo, useState, type FormEvent } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CreditCard,
  Download,
  Expand,
  Mail,
  MessageCircle,
  ShieldCheck,
} from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import {
  COURSE_CATEGORIES,
  PERMANENT_COURSES,
  type CourseMediaDoc,
} from '../data/courseCatalog'
import { subscribeCourseMedia } from '../lib/courseMedia'
import {
  mergeUpcoming,
  subscribeUpcomingLive,
  type UpcomingLiveCourse,
} from '../lib/upcomingCourse'

interface CoursesProps {
  onBack: () => void
}

export function Courses({ onBack }: CoursesProps) {
  const { t, lang } = useLanguage()
  const [scheduleId, setScheduleId] = useState('a')
  const [currency, setCurrency] = useState<'MXN' | 'USD'>('MXN')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [org, setOrg] = useState('')
  const [phone, setPhone] = useState('')
  const [lightbox, setLightbox] = useState(false)
  const [success, setSuccess] = useState('')
  const [media, setMedia] = useState<Record<string, CourseMediaDoc>>({})
  const [upcomingOverride, setUpcomingOverride] =
    useState<UpcomingLiveCourse | null>(null)

  useEffect(() => {
    const unsubMedia = subscribeCourseMedia(setMedia)
    const unsubUpcoming = subscribeUpcomingLive(setUpcomingOverride)
    return () => {
      unsubMedia?.()
      unsubUpcoming?.()
    }
  }, [])

  const featured = useMemo(
    () =>
      mergeUpcoming(
        {
          cohortMeta: t.courses.cohortMeta,
          registrationOpen: t.courses.registrationOpen,
          programmeMeta: t.courses.programmeMeta,
          courseTitle: t.courses.courseTitle,
          courseSubtitle: t.courses.courseSubtitle,
          courseTagline: t.courses.courseTagline,
          courseDesc: t.courses.courseDesc,
          learnTitle: t.courses.learnTitle,
          learnItems: t.courses.learnItems,
          schedules: t.courses.schedules,
          formatValue: t.courses.formatValue,
          formatCert: t.courses.formatCert,
          investmentMxn: t.courses.investmentMxn,
          investmentUsd: t.courses.investmentUsd,
        },
        upcomingOverride,
      ),
    [t.courses, upcomingOverride],
  )

  useEffect(() => {
    if (!featured.schedules.some((s) => s.id === scheduleId)) {
      setScheduleId(featured.schedules[0]?.id || 'a')
    }
  }, [featured.schedules, scheduleId])

  const selected = useMemo(
    () =>
      featured.schedules.find((s) => s.id === scheduleId) ??
      featured.schedules[0],
    [scheduleId, featured.schedules],
  )

  const currencyLabel =
    currency === 'MXN' ? featured.investmentMxn : featured.investmentUsd

  const scheduleLabel = selected
    ? `${selected.dates} (${selected.time})`
    : ''

  const courseNameForMail =
    [featured.courseSubtitle, featured.courseTitle]
      .filter(Boolean)
      .join(' — ') || 'Ongoing RUQAYA Course'

  const whatsappRegister = useMemo(() => {
    const text = encodeURIComponent(
      `Hello Dr. Hammadhu / RUQAYA Team,\n\nI would like to register for the ongoing practical online programme:\n*${courseNameForMail}*\n\nPreferred Schedule: ${scheduleLabel}\nParticipant Name: [My Name]\nOrganization: [My Organization]\nCurrency: ${currencyLabel}\n\nPlease share enrollment and secure payment details. Thank you!`,
    )
    return `https://wa.me/525571986833?text=${text}`
  }, [scheduleLabel, currencyLabel, courseNameForMail])

  const whatsappPayment = useMemo(() => {
    const text = encodeURIComponent(
      `Hello Dr. Hammadhu / RUQAYA Team,\n\nPlease send a secure payment link for:\n*${courseNameForMail}*\n\nPreferred Schedule: ${scheduleLabel}\nCurrency: ${currencyLabel}\nParticipant Name: [My Name]\nEmail: [My Email]\n\nThank you!`,
    )
    return `https://wa.me/525571986833?text=${text}`
  }, [scheduleLabel, currencyLabel, courseNameForMail])

  const emailRegister = useMemo(() => {
    const subject = encodeURIComponent(
      `Course Registration: ${courseNameForMail} (${scheduleLabel})`,
    )
    const body = encodeURIComponent(
      `Hello Dr. Hammadhu / RUQAYA Team,\n\nI would like to register for the ongoing practical online programme:\n${courseNameForMail}\n\nPreferred Schedule: ${scheduleLabel}\nParticipant Name: [My Name]\nEmail: [My Email]\nPhone / WhatsApp: [My Phone]\nOrganization: [My Organization]\nCurrency: ${currencyLabel}\n\nPlease send invoice / secure payment link / registration confirmation.`,
    )
    return `mailto:hammadhu@ruqaya.org?subject=${subject}&body=${body}`
  }, [scheduleLabel, currencyLabel, courseNameForMail])

  const onReserve = (e: FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !email.trim()) return
    const subject = encodeURIComponent(
      `Seat Reservation: ${courseNameForMail} (${scheduleLabel})`,
    )
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nOrganization: ${org || '—'}\nPhone: ${phone || '—'}\nCourse: ${courseNameForMail}\nSchedule: ${scheduleLabel}\nCurrency: ${currencyLabel}\nLanguage: ${lang.toUpperCase()}`,
    )
    window.location.href = `mailto:hammadhu@ruqaya.org?subject=${subject}&body=${body}`
    setSuccess(t.courses.formSuccess)
  }

  return (
    <div className="bg-[#eef4f0] min-h-screen section-grain">
      <div className="border-b border-[#0b3d2e]/10 bg-[#06281c] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.08em] text-white/85 hover:text-[#b7d478] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            {t.courses.back}
          </button>
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#b7d478] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#b7d478]" />
            </span>
            <span className="text-[#b7d478] font-bold">{t.courses.cohortOpen}</span>
            <span className="text-white/40">·</span>
            <span className="text-white/65">{featured.cohortMeta}</span>
          </div>
        </div>
      </div>

      <section className="pt-10 pb-8 lg:pt-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="label-mono mb-2">{t.courses.eyebrow}</div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#0f1f18] font-normal tracking-[-0.02em] max-w-4xl">
            {t.courses.title}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#0f1f18]/75 font-light leading-relaxed max-w-3xl">
            {t.courses.description}
          </p>
        </div>
      </section>

      <section className="pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-[#0b3d2e] text-[#f7faf8] font-mono text-[0.7rem] font-bold uppercase tracking-[0.08em] px-3 py-2">
              {t.courses.upcomingBadge}
            </span>
            <span className="text-xs font-mono text-[#0f1f18]/50">
              {featured.registrationOpen}
            </span>
          </div>

          <div className="border border-[#0b3d2e]/40 bg-[#f7faf8]">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-[#0b3d2e]/10 p-4 sm:p-5">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <button
                    type="button"
                    onClick={() => setLightbox(true)}
                    className="inline-flex items-center gap-1.5 font-mono text-[0.65rem] uppercase tracking-wider text-[#0f1f18]/70 hover:text-[#0f1f18]"
                  >
                    <Expand className="w-3 h-3" />
                    {t.courses.fullscreen}
                  </button>
                  <a
                    href={featured.flyerUrl}
                    download
                    className="inline-flex items-center gap-1.5 font-mono text-[0.65rem] uppercase tracking-wider text-[#0f1f18]/70 hover:text-[#0f1f18]"
                  >
                    <Download className="w-3 h-3" />
                    {t.courses.download}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => setLightbox(true)}
                  className="group block w-full overflow-hidden"
                >
                  <img
                    src={featured.flyerUrl}
                    alt={`Course Flyer: ${featured.courseSubtitle || featured.courseTitle}`}
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </button>
                <div className="mt-4 flex items-center gap-3 p-3 bg-[#eef4f0] border border-[#0b3d2e]/10">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-[#0b3d2e]/15 shrink-0">
                    <img
                      src="/assets/profile.png"
                      alt={t.courses.ledBy}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-[#0f1f18]">
                      {t.courses.ledBy}
                    </div>
                    <div className="text-[0.7rem] font-mono text-[#0f1f18]/60 mt-0.5">
                      {t.courses.ledByRole}
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 p-6 sm:p-8">
                <div className="label-mono mb-3">{featured.programmeMeta}</div>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#0f1f18] font-normal">
                  {featured.courseTitle}
                </h2>
                <div className="mt-1 font-serif text-2xl sm:text-3xl text-[#145c45]">
                  {featured.courseSubtitle}
                </div>
                <p className="mt-2 text-sm italic text-[#0f1f18]/70 font-serif">
                  {featured.courseTagline}
                </p>
                <p className="mt-4 text-sm sm:text-base text-[#0f1f18]/75 font-light leading-relaxed">
                  {featured.courseDesc}
                </p>

                <div className="mt-6 p-5 bg-[#0b3d2e] text-[#f7faf8]">
                  <div className="font-mono text-xs font-bold uppercase tracking-[0.1em] mb-4 text-[#b7d478]">
                    {featured.learnTitle}
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {featured.learnItems.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm font-light">
                        <Check className="w-4 h-4 text-[#b7d478] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <div className="label-mono mb-3">{t.courses.chooseSchedule}</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {featured.schedules.map((s) => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setScheduleId(s.id)}
                        className={`text-left p-4 border transition-colors ${
                          scheduleId === s.id
                            ? 'border-[#145c45] bg-[#145c45]/8'
                            : 'border-[#0b3d2e]/15 hover:border-[#0b3d2e]/30'
                        }`}
                      >
                        <div className="font-serif text-xl text-[#0f1f18]">{s.dates}</div>
                        <div className="text-xs font-mono text-[#145c45] mt-1">{s.time}</div>
                        <div className="text-xs text-[#0f1f18]/60 mt-1 font-light">
                          {s.note}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-[#eef4f0] border border-[#0b3d2e]/10">
                    <div className="label-mono mb-1">{t.courses.formatLabel}</div>
                    <div className="text-sm text-[#0f1f18]">{featured.formatValue}</div>
                    <div className="text-xs text-[#0f1f18]/60 mt-1">
                      {featured.formatCert}
                    </div>
                  </div>
                  <div className="p-4 bg-[#eef4f0] border border-[#0b3d2e]/10">
                    <div className="label-mono mb-1">{t.courses.investmentLabel}</div>
                    <div className="text-sm text-[#0f1f18]">{featured.investmentMxn}</div>
                    <div className="text-sm text-[#0f1f18]">{featured.investmentUsd}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5 space-y-4">
              <h3 className="font-serif text-2xl sm:text-3xl text-[#0f1f18] font-normal">
                {t.courses.interestedTitle}
              </h3>
              <p className="text-sm font-mono text-[#145c45]">
                {t.courses.selectedSchedule} {scheduleLabel}
              </p>
              <a
                href={whatsappRegister}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-4 bg-[#25D366] text-white font-mono text-xs uppercase tracking-[0.06em] hover:brightness-95 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                {t.courses.registerWhatsapp}
              </a>
              <a
                href={emailRegister}
                className="flex items-center gap-2 p-4 bg-[#f7faf8] border border-[#0b3d2e]/15 font-mono text-xs uppercase tracking-[0.06em] hover:border-[#0b3d2e]/30 transition-colors"
              >
                <Mail className="w-4 h-4" />
                {t.courses.registerEmail}
              </a>

              <div className="p-5 bg-[#06281c] text-white space-y-3">
                <div className="flex items-center gap-2 text-[#b7d478]">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="font-mono text-[0.68rem] uppercase tracking-[0.1em] font-bold">
                    {t.courses.paymentTitle}
                  </span>
                </div>
                <p className="text-sm text-white/75 font-light leading-relaxed">
                  {t.courses.paymentSubtitle}
                </p>
                <div className="text-sm font-mono text-[#b7d478]">
                  {currencyLabel}
                </div>
                <a
                  href={whatsappPayment}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#b7d478] text-[#0c2b22] font-mono text-[0.7rem] font-bold uppercase tracking-[0.08em] px-4 py-3 hover:bg-[#c6e08a] transition-colors"
                >
                  <CreditCard className="w-4 h-4" />
                  {t.courses.paymentPrimary}
                </a>
                <p className="text-[0.68rem] font-mono text-white/50">
                  {t.courses.paymentNote}
                </p>
              </div>

              <blockquote className="font-serif italic text-xl text-[#145c45] pt-2">
                “{t.courses.quote}”
              </blockquote>
            </div>

            <form
              onSubmit={onReserve}
              className="lg:col-span-7 bg-[#f7faf8] border border-[#0b3d2e]/15 p-6 sm:p-8 space-y-4"
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="label-mono mb-1">{t.courses.formBadge}</div>
                  <h3 className="font-serif text-2xl text-[#0f1f18]">
                    {t.courses.formTitle}
                  </h3>
                </div>
                <span className="text-[0.65rem] font-mono bg-[#b7d478] text-[#0c2b22] px-2 py-1 font-bold">
                  {t.courses.formDirect}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="label-mono block mb-2">{t.courses.fullName}</label>
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t.courses.fullNamePlaceholder}
                    className="w-full border border-[#0b3d2e]/15 px-3 py-2.5 text-sm focus:outline-none focus:border-[#0b3d2e]/40"
                  />
                </div>
                <div>
                  <label className="label-mono block mb-2">{t.courses.officialEmail}</label>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t.courses.emailPlaceholder}
                    className="w-full border border-[#0b3d2e]/15 px-3 py-2.5 text-sm focus:outline-none focus:border-[#0b3d2e]/40"
                  />
                </div>
                <div>
                  <label className="label-mono block mb-2">{t.courses.organization}</label>
                  <input
                    value={org}
                    onChange={(e) => setOrg(e.target.value)}
                    placeholder={t.courses.orgPlaceholder}
                    className="w-full border border-[#0b3d2e]/15 px-3 py-2.5 text-sm focus:outline-none focus:border-[#0b3d2e]/40"
                  />
                </div>
                <div>
                  <label className="label-mono block mb-2">{t.courses.phone}</label>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={t.courses.phonePlaceholder}
                    className="w-full border border-[#0b3d2e]/15 px-3 py-2.5 text-sm focus:outline-none focus:border-[#0b3d2e]/40"
                  />
                </div>
              </div>

              <div>
                <label className="label-mono block mb-2">{t.courses.currency}</label>
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value as 'MXN' | 'USD')}
                  className="w-full border border-[#0b3d2e]/15 px-3 py-2.5 text-sm focus:outline-none focus:border-[#0b3d2e]/40 bg-[#f7faf8]"
                >
                  <option value="MXN">{featured.investmentMxn}</option>
                  <option value="USD">{featured.investmentUsd}</option>
                </select>
              </div>

              {success && (
                <p className="text-sm text-[#145c45] font-light" role="status">
                  {success}
                </p>
              )}

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#0b3d2e] text-[#f7faf8] font-mono text-xs font-bold uppercase tracking-[0.08em] px-4 py-3.5 hover:bg-[#145c45] transition-colors"
              >
                {t.courses.reserve} {scheduleLabel}
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

          <div id="course-catalogue" className="mt-16 lg:mt-24 pt-12 border-t border-[#0b3d2e]/10 space-y-12">
            <div className="max-w-3xl">
              <div className="label-mono mb-2">{t.courses.catalogEyebrow}</div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#0f1f18] tracking-[-0.02em] font-normal">
                {t.courses.catalogTitle}
              </h2>
              <p className="mt-3 text-base text-[#0f1f18]/75 font-light leading-relaxed">
                {t.courses.catalogSubtitle}
              </p>
            </div>

            {COURSE_CATEGORIES.map((cat) => {
              const permanent = PERMANENT_COURSES.filter((c) => c.category === cat.id)
              const customs = Object.values(media).filter(
                (m) =>
                  m.custom &&
                  m.category === cat.id &&
                  !PERMANENT_COURSES.some((p) => p.id === m.id),
              )
              const rows = [
                ...permanent.map((course) => ({
                  id: course.id,
                  title: course.title,
                  description: media[course.id]?.description,
                  imageUrl: media[course.id]?.imageUrl,
                })),
                ...customs.map((course) => ({
                  id: course.id,
                  title: course.title || 'Course',
                  description: course.description,
                  imageUrl: course.imageUrl,
                })),
              ]

              return (
                <div key={cat.id}>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#0f1f18] mb-1">
                    {lang === 'es' ? cat.titleEs : cat.titleEn}
                  </h3>
                  <p className="font-mono text-[0.7rem] uppercase tracking-[0.08em] text-[#0f1f18]/45 mb-4">
                    {rows.length} {lang === 'es' ? 'programas' : 'programmes'}
                  </p>
                  <ul className="bg-[#f7faf8] border border-[#0b3d2e]/10 divide-y divide-black/10">
                    {rows.map((course, index) => (
                      <li
                        key={course.id}
                        className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 sm:p-5 hover:bg-[#eef4f0]/80 transition-colors"
                      >
                        {course.imageUrl ? (
                          <div className="w-full sm:w-28 shrink-0 aspect-[16/10] sm:aspect-square overflow-hidden bg-[#eef4f0]">
                            <img
                              src={course.imageUrl}
                              alt={course.title}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </div>
                        ) : (
                          <span className="hidden sm:flex w-8 shrink-0 font-mono text-xs text-[#145c45] tabular-nums">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                        )}
                        <div className="min-w-0 flex-1">
                          <h4 className="font-serif text-lg sm:text-xl text-[#0f1f18] leading-snug">
                            {course.title}
                          </h4>
                          {course.description && (
                            <p className="mt-1.5 text-sm text-[#0f1f18]/65 font-light leading-relaxed">
                              {course.description}
                            </p>
                          )}
                        </div>
                        <a
                          href={`mailto:hammadhu@ruqaya.org?subject=${encodeURIComponent(`Course Inquiry: ${course.title}`)}`}
                          className="shrink-0 inline-flex items-center gap-1.5 font-mono text-[0.7rem] uppercase tracking-[0.08em] text-[#145c45] hover:text-[#0f1f18] transition-colors"
                        >
                          {t.courses.inquireCourse}
                          <ArrowRight className="w-3 h-3" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>

          <div className="mt-14 p-6 sm:p-8 border border-[#0b3d2e]/15 bg-[#f7faf8]">
            <div className="label-mono mb-2">{t.courses.corporateEyebrow}</div>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#0f1f18] font-normal max-w-3xl">
              {t.courses.corporateTitle}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#0f1f18]/75 font-light leading-relaxed max-w-4xl">
              {t.courses.corporateDesc}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://wa.me/525571986833?text=Hello%20RUQAYA,%20we%20would%20like%20to%20inquire%20about%20an%20in-house%20corporate%20training%20programme."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0b3d2e] text-[#f7faf8] font-mono text-xs uppercase tracking-[0.08em] px-5 py-3 hover:bg-[#145c45] transition-colors"
              >
                {t.courses.corporateWhatsapp}
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="mailto:hammadhu@ruqaya.org?subject=Inquiry:%20Corporate%20In-House%20Circular%20Economy%20Training"
                className="inline-flex items-center gap-2 border border-[#0b3d2e]/20 font-mono text-xs uppercase tracking-[0.08em] px-5 py-3 hover:border-[#0b3d2e]/40 transition-colors"
              >
                {t.courses.corporateEmail}
              </a>
            </div>
          </div>
        </div>
      </section>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4"
          onClick={() => setLightbox(false)}
          role="dialog"
          aria-modal="true"
        >
          <img
            src={featured.flyerUrl}
            alt={`Course Flyer: ${featured.courseSubtitle || featured.courseTitle}`}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  )
}
