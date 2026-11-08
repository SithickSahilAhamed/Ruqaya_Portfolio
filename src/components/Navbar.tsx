import { useEffect, useState } from 'react'
import { ArrowRight, Globe, Menu, X } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

interface NavbarProps {
  view: 'home' | 'courses'
  onNavigate: (target: string) => void
  onOpenCourses: () => void
  onBookServices: () => void
}

export function Navbar({
  view,
  onNavigate,
  onOpenCourses,
  onBookServices,
}: NavbarProps) {
  const { lang, setLang, t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { id: 'about', label: t.nav.about },
    { id: 'services', label: t.nav.services },
    { id: 'courses', label: t.nav.courses, isCourses: true },
    { id: 'resources', label: t.nav.resources },
    { id: 'contact', label: t.nav.contact, accent: true },
  ]

  const handleLink = (id: string, isCourses?: boolean) => {
    setMobileOpen(false)
    if (isCourses) {
      onOpenCourses()
      return
    }
    onNavigate(id)
  }

  return (
    <header
      className={`sticky top-0 z-40 bg-[#F8F7F4]/95 backdrop-blur-md border-b border-black/10 px-4 sm:px-8 lg:px-12 py-3.5 sm:py-4 transition-shadow ${
        scrolled ? 'shadow-sm' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 lg:gap-8">
        <button
          type="button"
          onClick={() => onNavigate('home')}
          className="flex items-center gap-3 shrink-0 text-left"
          aria-label="RUQAYA home"
        >
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-md overflow-hidden border border-black/10 bg-white shrink-0">
            <img
              src="/assets/logo.png"
              alt="RUQAYA Logo"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="min-w-0">
            <div className="font-serif text-xl sm:text-2xl leading-none tracking-tight text-[#1A1A1A]">
              RUQAYA
            </div>
            <div className="hidden sm:block text-[0.62rem] font-serif text-[#B8860B] leading-snug max-w-[14rem]">
              {t.nav.tagline}
            </div>
          </div>
        </button>

        <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
          {links.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => handleLink(link.id, link.isCourses)}
              className={`font-mono text-[0.8rem] tracking-[0.04em] transition-colors inline-flex items-center gap-1.5 ${
                link.isCourses
                  ? 'text-[#0D6B57] font-bold'
                  : link.accent
                    ? 'text-[#B8860B] font-bold'
                    : 'text-[#1A1A1A]/80 hover:text-[#1A1A1A] font-normal'
              } ${view === 'courses' && link.isCourses ? 'underline underline-offset-4' : ''}`}
            >
              {link.label}
              {link.isCourses && (
                <span className="bg-[#C7EB68] text-[#0C2B22] text-[0.55rem] font-bold px-1.5 py-0.5 rounded-sm tracking-wider">
                  {t.nav.coursesNew}
                </span>
              )}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden sm:flex items-center gap-1.5 font-mono text-[0.7rem] font-bold">
            <Globe className="w-3.5 h-3.5 text-[#1A1A1A]/70" aria-hidden />
            <button
              type="button"
              onClick={() => setLang('en')}
              className={`px-1.5 py-0.5 rounded-sm tracking-[0.04em] ${
                lang === 'en'
                  ? 'bg-[#1A1A1A] text-[#F8F7F4]'
                  : 'text-[#1A1A1A]/60 hover:text-[#1A1A1A]'
              }`}
            >
              EN
            </button>
            <span className="text-[#1A1A1A]/30">|</span>
            <button
              type="button"
              onClick={() => setLang('es')}
              className={`px-1.5 py-0.5 rounded-sm tracking-[0.04em] ${
                lang === 'es'
                  ? 'bg-[#1A1A1A] text-[#F8F7F4]'
                  : 'text-[#1A1A1A]/60 hover:text-[#1A1A1A]'
              }`}
            >
              ES
            </button>
          </div>

          <button
            type="button"
            onClick={onBookServices}
            className="hidden md:inline-flex items-center gap-1.5 bg-[#1A1A1A] text-[#F8F7F4] font-mono text-[0.7rem] font-bold uppercase tracking-[0.12em] px-5 py-2.5 hover:bg-[#B8860B] transition-colors"
          >
            {t.nav.bookServices}
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            type="button"
            className="lg:hidden p-2 text-[#1A1A1A]"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden mt-4 border-t border-black/10 pt-4 pb-2 max-w-7xl mx-auto">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => handleLink(link.id, link.isCourses)}
                className={`font-mono text-sm text-left tracking-[0.04em] inline-flex items-center gap-2 ${
                  link.isCourses
                    ? 'text-[#0D6B57] font-bold'
                    : link.accent
                      ? 'text-[#B8860B] font-bold'
                      : 'text-[#1A1A1A]'
                }`}
              >
                {link.label}
                {link.isCourses && (
                  <span className="bg-[#C7EB68] text-[#0C2B22] text-[0.55rem] font-bold px-1.5 py-0.5 rounded-sm">
                    {t.nav.coursesNew}
                  </span>
                )}
              </button>
            ))}
            <div className="flex items-center gap-2 pt-2 font-mono text-xs font-bold">
              <Globe className="w-3.5 h-3.5" />
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-2 py-1 rounded-sm ${lang === 'en' ? 'bg-[#1A1A1A] text-white' : ''}`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLang('es')}
                className={`px-2 py-1 rounded-sm ${lang === 'es' ? 'bg-[#1A1A1A] text-white' : ''}`}
              >
                ES
              </button>
            </div>
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false)
                onBookServices()
              }}
              className="mt-1 inline-flex items-center justify-center gap-1.5 bg-[#1A1A1A] text-[#F8F7F4] font-mono text-[0.7rem] font-bold uppercase tracking-[0.12em] px-5 py-3"
            >
              {t.nav.bookServices}
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
