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
    <section className="relative min-h-[92vh] overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 hero-mesh" aria-hidden="true" />
      <div
        className="absolute -right-16 top-10 h-[70%] w-[55%] rounded-full bg-[#b7d478]/15 blur-3xl ruqaya-glow"
        aria-hidden="true"
      />
      <div
        className="absolute left-[-10%] bottom-[-20%] h-[50%] w-[45%] rounded-full bg-[#06281c]/70 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-10 pb-16 lg:pt-14 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-end min-h-[70vh]">
          <div className="lg:col-span-7 text-white">
            <div className="ruqaya-rise flex items-center gap-4 mb-8">
              <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-xl overflow-hidden border border-white/25 bg-white/95 p-1.5 shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
                <img
                  src="/assets/logo.jpg"
                  alt="RUQAYA Logo"
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <div className="font-serif text-4xl sm:text-5xl tracking-tight leading-none">
                  RUQAYA
                </div>
                <div className="mt-1 text-sm sm:text-base text-[#b7d478] font-light">
                  {t.hero.subEyebrow}
                </div>
              </div>
            </div>

            <p className="ruqaya-rise ruqaya-rise-delay-1 label-mono !text-[#b7d478] mb-4">
              {t.hero.eyebrow}
            </p>

            <h1 className="ruqaya-rise ruqaya-rise-delay-1 font-serif text-3xl sm:text-4xl lg:text-[3.15rem] leading-[1.12] font-normal tracking-[-0.02em] max-w-2xl text-white">
              {t.hero.title}
            </h1>

            <p className="ruqaya-rise ruqaya-rise-delay-2 mt-6 text-base sm:text-lg text-white/75 font-light leading-relaxed max-w-2xl">
              {t.hero.description}
            </p>

            <div className="ruqaya-rise ruqaya-rise-delay-2 pt-5 mt-6 border-t border-white/15 flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.7rem] font-mono text-white/70">
              {t.hero.trust.map((item, i) => {
                const Icon = icons[i] ?? CircleCheck
                return (
                  <span key={item} className="inline-flex items-center gap-1.5 max-w-full">
                    <Icon className="w-3.5 h-3.5 text-[#b7d478] shrink-0" />
                    <span className="line-clamp-2">{item}</span>
                  </span>
                )
              })}
            </div>

            <div className="ruqaya-rise ruqaya-rise-delay-3 pt-7 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onBookServices}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-mono uppercase tracking-[0.12em] text-[#0c2b22] bg-[#b7d478] hover:bg-[#c6e08a] transition-colors"
              >
                <span>{t.hero.bookServices}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={onOpenCourses}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-mono uppercase tracking-[0.1em] text-white border border-white/30 hover:border-[#b7d478] hover:text-[#b7d478] transition-colors"
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
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-mono uppercase tracking-[0.1em] text-white/85 hover:text-white transition-colors"
              >
                {t.hero.expertProfile}
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 ruqaya-rise ruqaya-rise-delay-2">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-3 rounded-[1.5rem] border border-white/15 ruqaya-drift" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-[1.25rem] border border-white/20 shadow-[0_30px_80px_rgba(0,0,0,0.35)] aspect-[4/5] bg-[#0b3d2e]">
                <img
                  src="/assets/profile.png"
                  alt="Dr. Hammadhu Rukiya Jalva"
                  className="h-full w-full object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#06281c] via-[#06281c]/75 to-transparent p-5 sm:p-6">
                  <div className="font-serif text-2xl text-white leading-tight">
                    Dr. Hammadhu Rukiya Jalva
                  </div>
                  <div className="mt-1 text-xs font-mono uppercase tracking-[0.12em] text-[#b7d478]">
                    PhD · Circular Economy
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ruqaya-rise ruqaya-rise-delay-3 mt-12 lg:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8 pt-8 border-t border-white/15 text-white">
          {t.hero.metrics.map((metric) => (
            <div key={metric.label}>
              <div className="font-serif text-3xl sm:text-4xl tracking-tight text-[#b7d478]">
                {metric.value}
              </div>
              <div className="mt-2 text-[0.68rem] font-mono uppercase tracking-[0.1em] text-white/55">
                {metric.label}
              </div>
              <p className="mt-1.5 text-sm text-white/70 font-light leading-snug">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
