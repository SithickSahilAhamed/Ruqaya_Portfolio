import { ArrowRight, CircleCheck, FileCheck } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

interface HeroProps {
  onBookServices: () => void
  onOpenCourses: () => void
  onExpertProfile: () => void
}

export function Hero({ onBookServices, onOpenCourses, onExpertProfile }: HeroProps) {
  const { t } = useLanguage()
  const icons = [CircleCheck, FileCheck, CircleCheck]

  return (
    <section className="relative pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-black/10 bg-[#F8F7F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="max-w-5xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 rounded-2xl overflow-hidden border border-black/15 shadow-sm flex items-center justify-center bg-white p-2 shrink-0">
              <img
                src="/assets/logo.png"
                alt="RUQAYA Logo"
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <div className="label-mono mb-1">{t.hero.eyebrow}</div>
              <div className="text-sm sm:text-base text-[#B8860B] font-light">
                {t.hero.subEyebrow}
              </div>
            </div>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.75rem] leading-[1.12] font-normal text-[#1A1A1A] tracking-[-0.02em]">
            {t.hero.title}
          </h1>

          <p className="mt-6 text-base sm:text-lg text-[#1A1A1A]/75 font-light leading-relaxed max-w-3xl">
            {t.hero.description}
          </p>

          <div className="pt-4 border-t border-black/10 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-mono text-[#1A1A1A]/70 mt-8">
            {t.hero.trust.map((item, i) => {
              const Icon = icons[i] ?? CircleCheck
              return (
                <span key={item} className="flex items-center gap-x-5">
                  {i > 0 && (
                    <span aria-hidden="true" className="text-black/30">
                      /
                    </span>
                  )}
                  <span className="flex items-center gap-1.5">
                    <Icon className="w-4 h-4 text-[#B8860B] shrink-0" />
                    {item}
                  </span>
                </span>
              )
            })}
          </div>

          <div className="pt-4 flex flex-wrap items-center gap-4 mt-2">
            <button
              type="button"
              onClick={onBookServices}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-mono uppercase tracking-[0.12em] text-[#F8F7F4] bg-[#1A1A1A] hover:bg-[#B8860B] transition-colors shadow-sm"
            >
              <span>{t.hero.bookServices}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={onOpenCourses}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-mono uppercase tracking-[0.1em] text-[#0C2B22] bg-[#C7EB68] hover:bg-[#b5dc4e] transition-colors shadow-sm font-bold"
            >
              <span>{t.hero.upcomingCourse}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="#expert-profile"
              onClick={(e) => {
                e.preventDefault()
                onExpertProfile()
              }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-mono uppercase tracking-[0.1em] text-[#1A1A1A] border border-black/20 hover:border-black/50 transition-colors"
            >
              {t.hero.expertProfile}
            </a>
          </div>
        </div>

        <div className="mt-14 lg:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pt-8 border-t border-black/10">
          {t.hero.metrics.map((metric) => (
            <div key={metric.label}>
              <div className="font-serif text-3xl sm:text-4xl text-[#1A1A1A] tracking-tight">
                {metric.value}
              </div>
              <div className="label-mono mt-2 mb-1.5">{metric.label}</div>
              <p className="text-sm text-[#1A1A1A]/65 font-light leading-snug">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
