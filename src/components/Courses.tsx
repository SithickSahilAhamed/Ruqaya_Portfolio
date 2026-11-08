import { useMemo, useState, type FormEvent } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Download,
  Expand,
  Mail,
  MessageCircle,
} from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

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

  const selected = useMemo(
    () => t.courses.schedules.find((s) => s.id === scheduleId) ?? t.courses.schedules[0],
    [scheduleId, t.courses.schedules],
  )

  const currencyLabel =
    currency === 'MXN' ? t.courses.investmentMxn : t.courses.investmentUsd

  const scheduleLabel = `${selected.dates} (${selected.time})`

  const whatsappRegister = useMemo(() => {
    const text = encodeURIComponent(
      `Hello Dr. Hammadhu / RUQAYA Team,\n\nI would like to register for the upcoming practical online programme:\n*Master ISO 59004:2024: Circular Economy Implementation*\n\nPreferred Schedule: ${scheduleLabel}\nParticipant Name: [My Name]\nOrganization: [My Organization]\nCurrency: ${currencyLabel}\n\nPlease share enrollment and payment details. Thank you!`,
    )
    return `https://wa.me/525571986833?text=${text}`
  }, [scheduleLabel, currencyLabel])

  const emailRegister = useMemo(() => {
    const subject = encodeURIComponent(
      `Course Registration: Master ISO 59004:2024 (${scheduleLabel})`,
    )
    const body = encodeURIComponent(
      `Hello Dr. Hammadhu / RUQAYA Team,\n\nI would like to register for the upcoming practical online programme:\nMaster ISO 59004:2024: Circular Economy Implementation\n\nPreferred Schedule: ${scheduleLabel}\nParticipant Name: [My Name]\nEmail: [My Email]\nPhone / WhatsApp: [My Phone]\nOrganization: [My Organization]\nCurrency: ${currencyLabel}\n\nPlease send invoice / registration confirmation.`,
    )
    return `mailto:hammadhu@gmail.com?subject=${subject}&body=${body}`
  }, [scheduleLabel, currencyLabel])

  const onReserve = (e: FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !email.trim()) return
    const subject = encodeURIComponent(
      `Seat Reservation: Master ISO 59004:2024 (${scheduleLabel})`,
    )
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nOrganization: ${org || '—'}\nPhone: ${phone || '—'}\nSchedule: ${scheduleLabel}\nCurrency: ${currencyLabel}\nLanguage: ${lang.toUpperCase()}`,
    )
    window.location.href = `mailto:hammadhu@gmail.com?subject=${subject}&body=${body}`
    setSuccess(t.courses.formSuccess)
  }

  return (
    <div className="bg-[#F8F7F4] min-h-screen">
      <div className="border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.08em] text-[#1A1A1A] hover:text-[#B8860B] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            {t.courses.back}
          </button>
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C7EB68] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C7EB68]" />
            </span>
            <span className="text-[#B8860B] font-bold">{t.courses.cohortOpen}</span>
            <span className="text-[#1A1A1A]/40">·</span>
            <span className="text-[#1A1A1A]/60">{t.courses.cohortMeta}</span>
          </div>
        </div>
      </div>

      <section className="pt-10 pb-8 lg:pt-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="label-mono mb-2">{t.courses.eyebrow}</div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1A1A1A] font-normal tracking-[-0.02em] max-w-4xl">
            {t.courses.title}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#1A1A1A]/75 font-light leading-relaxed max-w-3xl">
            {t.courses.description}
          </p>
        </div>
      </section>

      <section className="pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-[#135D29] text-[#F8F7F4] font-mono text-[0.7rem] font-bold uppercase tracking-[0.08em] px-3 py-2">
              {t.courses.upcomingBadge}
            </span>
            <span className="text-xs font-mono text-[#1A1A1A]/50">
              {t.courses.registrationOpen}
            </span>
          </div>

          <div className="border border-[#1A1A1A]/80 bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-black/10 p-4 sm:p-5">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <button
                    type="button"
                    onClick={() => setLightbox(true)}
                    className="inline-flex items-center gap-1.5 font-mono text-[0.65rem] uppercase tracking-wider text-[#1A1A1A]/70 hover:text-[#1A1A1A]"
                  >
                    <Expand className="w-3 h-3" />
                    {t.courses.fullscreen}
                  </button>
                  <a
                    href="/assets/course-flyer.png"
                    download
                    className="inline-flex items-center gap-1.5 font-mono text-[0.65rem] uppercase tracking-wider text-[#1A1A1A]/70 hover:text-[#1A1A1A]"
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
                    src="/assets/course-flyer.png"
                    alt="Course Flyer: Master ISO 59004:2024 Circular Economy Implementation"
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </button>
                <div className="mt-4 flex items-center gap-3 p-3 bg-[#F8F7F4] border border-black/10">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-black/15 shrink-0">
                    <img
                      src="/assets/profile.png"
                      alt={t.courses.ledBy}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-[#1A1A1A]">
                      {t.courses.ledBy}
                    </div>
                    <div className="text-[0.7rem] font-mono text-[#1A1A1A]/60 mt-0.5">
                      {t.courses.ledByRole}
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 p-6 sm:p-8">
                <div className="label-mono mb-3">{t.courses.programmeMeta}</div>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1A1A] font-normal">
                  {t.courses.courseTitle}
                </h2>
                <div className="mt-1 font-serif text-2xl sm:text-3xl text-[#135D29]">
                  {t.courses.courseSubtitle}
                </div>
                <p className="mt-2 text-sm italic text-[#1A1A1A]/70 font-serif">
                  {t.courses.courseTagline}
                </p>
                <p className="mt-4 text-sm sm:text-base text-[#1A1A1A]/75 font-light leading-relaxed">
                  {t.courses.courseDesc}
                </p>

                <div className="mt-6 p-5 bg-[#135D29] text-[#F8F7F4]">
                  <div className="font-mono text-xs font-bold uppercase tracking-[0.1em] mb-4 text-[#C7EB68]">
                    {t.courses.learnTitle}
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {t.courses.learnItems.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm font-light">
                        <Check className="w-4 h-4 text-[#C7EB68] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <div className="label-mono mb-3">{t.courses.chooseSchedule}</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {t.courses.schedules.map((s) => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setScheduleId(s.id)}
                        className={`text-left p-4 border transition-colors ${
                          scheduleId === s.id
                            ? 'border-[#135D29] bg-[#135D29]/5'
                            : 'border-black/15 hover:border-black/30'
                        }`}
                      >
                        <div className="font-serif text-xl text-[#1A1A1A]">{s.dates}</div>
                        <div className="text-xs font-mono text-[#B8860B] mt-1">{s.time}</div>
                        <div className="text-xs text-[#1A1A1A]/60 mt-1 font-light">
                          {s.note}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-[#F8F7F4] border border-black/10">
                    <div className="label-mono mb-1">{t.courses.formatLabel}</div>
                    <div className="text-sm text-[#1A1A1A]">{t.courses.formatValue}</div>
                    <div className="text-xs text-[#1A1A1A]/60 mt-1">
                      {t.courses.formatCert}
                    </div>
                  </div>
                  <div className="p-4 bg-[#F8F7F4] border border-black/10">
                    <div className="label-mono mb-1">{t.courses.investmentLabel}</div>
                    <div className="text-sm text-[#1A1A1A]">{t.courses.investmentMxn}</div>
                    <div className="text-sm text-[#1A1A1A]">{t.courses.investmentUsd}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5 space-y-4">
              <h3 className="font-serif text-2xl sm:text-3xl text-[#1A1A1A] font-normal">
                {t.courses.interestedTitle}
              </h3>
              <p className="text-sm font-mono text-[#B8860B]">
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
                className="flex items-center gap-2 p-4 bg-white border border-black/15 font-mono text-xs uppercase tracking-[0.06em] hover:border-black/30 transition-colors"
              >
                <Mail className="w-4 h-4" />
                {t.courses.registerEmail}
              </a>
              <blockquote className="font-serif italic text-xl text-[#135D29] pt-2">
                “{t.courses.quote}”
              </blockquote>
            </div>

            <form
              onSubmit={onReserve}
              className="lg:col-span-7 bg-white border border-black/15 p-6 sm:p-8 space-y-4"
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="label-mono mb-1">{t.courses.formBadge}</div>
                  <h3 className="font-serif text-2xl text-[#1A1A1A]">
                    {t.courses.formTitle}
                  </h3>
                </div>
                <span className="text-[0.65rem] font-mono bg-[#C7EB68] text-[#0C2B22] px-2 py-1 font-bold">
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
                    className="w-full border border-black/15 px-3 py-2.5 text-sm focus:outline-none focus:border-black/40"
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
                    className="w-full border border-black/15 px-3 py-2.5 text-sm focus:outline-none focus:border-black/40"
                  />
                </div>
                <div>
                  <label className="label-mono block mb-2">{t.courses.organization}</label>
                  <input
                    value={org}
                    onChange={(e) => setOrg(e.target.value)}
                    placeholder={t.courses.orgPlaceholder}
                    className="w-full border border-black/15 px-3 py-2.5 text-sm focus:outline-none focus:border-black/40"
                  />
                </div>
                <div>
                  <label className="label-mono block mb-2">{t.courses.phone}</label>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={t.courses.phonePlaceholder}
                    className="w-full border border-black/15 px-3 py-2.5 text-sm focus:outline-none focus:border-black/40"
                  />
                </div>
              </div>

              <div>
                <label className="label-mono block mb-2">{t.courses.currency}</label>
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value as 'MXN' | 'USD')}
                  className="w-full border border-black/15 px-3 py-2.5 text-sm focus:outline-none focus:border-black/40 bg-white"
                >
                  <option value="MXN">{t.courses.investmentMxn}</option>
                  <option value="USD">{t.courses.investmentUsd}</option>
                </select>
              </div>

              {success && (
                <p className="text-sm text-[#135D29] font-light" role="status">
                  {success}
                </p>
              )}

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#1A1A1A] text-[#F8F7F4] font-mono text-xs font-bold uppercase tracking-[0.08em] px-4 py-3.5 hover:bg-[#333] transition-colors"
              >
                {t.courses.reserve} {scheduleLabel}
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

          <div className="mt-14 p-6 sm:p-8 border border-black/15 bg-white">
            <div className="label-mono mb-2">{t.courses.corporateEyebrow}</div>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1A1A] font-normal max-w-3xl">
              {t.courses.corporateTitle}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#1A1A1A]/75 font-light leading-relaxed max-w-4xl">
              {t.courses.corporateDesc}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://wa.me/525571986833?text=Hello%20RUQAYA,%20we%20would%20like%20to%20inquire%20about%20an%20in-house%20corporate%20training%20programme."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1A1A1A] text-[#F8F7F4] font-mono text-xs uppercase tracking-[0.08em] px-5 py-3 hover:bg-[#333] transition-colors"
              >
                {t.courses.corporateWhatsapp}
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="mailto:hammadhu@gmail.com?subject=Inquiry:%20Corporate%20In-House%20Circular%20Economy%20Training"
                className="inline-flex items-center gap-2 border border-black/20 font-mono text-xs uppercase tracking-[0.08em] px-5 py-3 hover:border-black/40 transition-colors"
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
            src="/assets/course-flyer.png"
            alt="Course Flyer"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  )
}
