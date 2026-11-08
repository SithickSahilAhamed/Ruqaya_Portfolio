import { ArrowRight, CircleCheck, Linkedin } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

interface AboutProps {
  onOpenCourses: () => void
  onBookServices: () => void
}

export function About({ onOpenCourses, onBookServices }: AboutProps) {
  const { t } = useLanguage()

  const handleAction = (action?: 'courses' | 'contact') => {
    if (action === 'courses') onOpenCourses()
    else onBookServices()
  }

  return (
    <section
      id="about"
      className="pt-14 pb-8 sm:pb-10 lg:pt-16 lg:pb-12 bg-[#F8F7F4] border-b border-black/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div id="services" className="max-w-3xl mb-10 scroll-mt-24">
          <div className="label-mono mb-2">{t.about.eyebrow}</div>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#1A1A1A] tracking-[-0.02em] font-normal">
            {t.about.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 lg:mb-14">
          {t.about.tracks.map((track) => (
            <div
              key={track.id}
              className="p-6 bg-white border border-black/10 hover:border-black/30 transition-all flex flex-col justify-between shadow-xs min-h-[180px]"
            >
              <div>
                <div className="label-mono mb-3">{track.track}</div>
                <h3 className="font-serif text-2xl sm:text-[1.65rem] text-[#1A1A1A] font-normal leading-snug">
                  {track.title}
                </h3>
              </div>
              <div className="mt-6 flex flex-col gap-2">
                {track.primaryCta && (
                  <button
                    type="button"
                    onClick={() => handleAction(track.primaryAction)}
                    className={`inline-flex items-center justify-center gap-1.5 font-mono text-[0.68rem] uppercase tracking-[0.1em] px-3 py-2.5 transition-colors ${
                      track.primaryAction === 'courses'
                        ? 'bg-[#C7EB68] text-[#0C2B22] font-bold hover:brightness-95'
                        : 'bg-[#1A1A1A] text-[#F8F7F4] hover:bg-[#333]'
                    }`}
                  >
                    {track.primaryCta}
                    <ArrowRight className="w-3 h-3" />
                  </button>
                )}
                {track.secondaryCta && (
                  <button
                    type="button"
                    onClick={() => handleAction(track.secondaryAction)}
                    className="inline-flex items-center justify-center gap-1.5 bg-[#1A1A1A] text-[#F8F7F4] font-mono text-[0.68rem] uppercase tracking-[0.1em] px-3 py-2 hover:bg-[#333] transition-colors"
                  >
                    {track.secondaryCta}
                    <ArrowRight className="w-3 h-3" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div id="expert-profile" className="pt-9 border-t-2 border-[#1A1A1A] scroll-mt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
            <div>
              <div className="label-mono mb-1.5">{t.expert.eyebrow}</div>
              <h3 className="text-3xl sm:text-5xl font-normal text-[#1A1A1A] tracking-[-0.02em] font-serif">
                {t.expert.title}
              </h3>
              <p className="mt-1.5 text-base text-[#1A1A1A]/80 max-w-2xl font-light">
                {t.expert.subtitle}
              </p>
            </div>
          </div>

          <div className="bg-white border border-black/15 p-6 sm:p-8 lg:p-9 shadow-sm relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              <div className="lg:col-span-5 flex flex-col items-center sm:items-start text-center sm:text-left space-y-4 border-b lg:border-b-0 lg:border-r border-black/10 pb-6 lg:pb-0 lg:pr-8">
                <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-xl overflow-hidden border-2 border-black/15 shadow-sm bg-stone-100 shrink-0">
                  <img
                    src="/assets/profile.png"
                    alt={t.expert.name}
                    className="w-full h-full object-cover object-top filter contrast-[1.02] brightness-[1.01]"
                    loading="eager"
                  />
                </div>
                <div>
                  <h4 className="text-2xl sm:text-3xl font-normal text-[#1A1A1A] font-serif">
                    {t.expert.name}
                  </h4>
                  <div className="text-sm font-mono text-[#B8860B] mt-1 font-bold">
                    {t.expert.role}
                  </div>
                  <div className="text-xs text-[#1A1A1A]/80 mt-2 font-mono leading-relaxed bg-[#F8F7F4] p-3 border border-black/10">
                    {t.expert.credentials}
                  </div>
                </div>
                <div className="pt-1 flex flex-wrap items-center gap-2 justify-center sm:justify-start">
                  <a
                    href="https://www.linkedin.com/in/hammadhu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-mono bg-[#0A66C2] text-white hover:bg-[#004182] transition-colors shadow-xs"
                  >
                    <Linkedin className="w-3.5 h-3.5 fill-current" />
                    <span>{t.expert.linkedin}</span>
                  </a>
                  <span className="text-[0.65rem] font-mono text-[#1A1A1A] bg-[#F8F7F4] px-2.5 py-2 border border-black/10">
                    {t.expert.badge}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-5">
                <div className="label-mono">{t.expert.specializationLabel}</div>
                <p className="text-sm sm:text-base text-[#1A1A1A]/80 leading-relaxed font-light">
                  {t.expert.specialization}
                </p>
                <div className="p-4 bg-[#F8F7F4] border border-black/10 space-y-1.5">
                  <div className="text-xs font-mono font-bold text-[#B8860B] uppercase tracking-wider">
                    {t.expert.isoLabel}
                  </div>
                  <div className="text-xs font-mono text-[#1A1A1A] flex flex-wrap gap-2">
                    {t.expert.isoTags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-white px-2 py-0.5 border border-black/10 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                  {t.expert.highlights.map((item) => (
                    <div
                      key={item.title}
                      className="p-3.5 bg-[#F8F7F4] border border-black/10 flex items-start gap-2.5"
                    >
                      <CircleCheck className="w-4 h-4 text-[#B8860B] shrink-0 mt-0.5" />
                      <div className="text-xs text-[#1A1A1A]">
                        <span className="font-bold">{item.title}</span> {item.text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
