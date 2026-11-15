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
      className={`sticky top-0 z-40 border-b px-4 sm:px-8 lg:px-12 py-3.5 sm:py-4 transition-all ${
        scrolled
          ? 'bg-[#06281c]/95 backdrop-blur-md border-white/10 shadow-[0_8px_30px_rgba(6,40,28,0.35)]'
          : 'bg-[#06281c] border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 lg:gap-8">
        <button
          type="button"
          onClick={() => onNavigate('home')}
          className="flex items-center gap-3 shrink-0 text-left"
          aria-label="RUQAYA home"
        >
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-md overflow-hidden border border-white/20 bg-white shrink-0">
            <img
              src="/assets/logo.jpg"
              alt="RUQAYA Logo"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="min-w-0">
            <div className="font-serif text-xl sm:text-2xl leading-none tracking-tight text-white">
              RUQAYA
            </div>
            <div className="hidden sm:block text-[0.62rem] font-serif text-[#b7d478] leading-snug max-w-[14rem]">
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
              className={`font-mono text-[0.78rem] tracking-[0.04em] transition-colors inline-flex items-center gap-1.5 ${
                link.isCourses
                  ? 'text-[#b7d478] font-bold'
                  : link.accent
                    ? 'text-[#d4af37] font-bold'
                    : 'text-white/75 hover:text-white font-normal'
              } ${view === 'courses' && link.isCourses ? 'underline underline-offset-4' : ''}`}
            >
              {link.label}
              {link.isCourses && (
                <span className="bg-[#b7d478] text-[#0c2b22] text-[0.55rem] font-bold px-1.5 py-0.5 tracking-wider">
                  {t.nav.coursesNew}
                </span>
              )}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden sm:flex items-center gap-1.5 font-mono text-[0.7rem] font-bold text-white/80">
            <Globe className="w-3.5 h-3.5" aria-hidden />
            <button
              type="button"
              onClick={() => setLang('en')}
              className={`px-1.5 py-0.5 tracking-[0.04em] ${
                lang === 'en' ? 'bg-white text-[#06281c]' : 'text-white/60 hover:text-white'
              }`}
            >
              EN
            </button>
            <span className="text-white/30">|</span>
            <button
              type="button"
              onClick={() => setLang('es')}
              className={`px-1.5 py-0.5 tracking-[0.04em] ${
                lang === 'es' ? 'bg-white text-[#06281c]' : 'text-white/60 hover:text-white'
              }`}
            >
              ES
            </button>
          </div>

          <button
            type="button"
            onClick={onBookServices}
            className="hidden md:inline-flex items-center gap-1.5 bg-[#b7d478] text-[#0c2b22] font-mono text-[0.7rem] font-bold uppercase tracking-[0.12em] px-5 py-2.5 hover:bg-[#c6e08a] transition-colors"
          >
            {t.nav.bookServices}
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            type="button"
            className="lg:hidden p-2 text-white"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden mt-4 border-t border-white/10 pt-4 pb-2 max-w-7xl mx-auto">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => handleLink(link.id, link.isCourses)}
                className={`font-mono text-sm text-left tracking-[0.04em] inline-flex items-center gap-2 ${
                  link.isCourses
                    ? 'text-[#b7d478] font-bold'
                    : link.accent
                      ? 'text-[#d4af37] font-bold'
                      : 'text-white'
                }`}
              >
                {link.label}
                {link.isCourses && (
                  <span className="bg-[#b7d478] text-[#0c2b22] text-[0.55rem] font-bold px-1.5 py-0.5">
                    {t.nav.coursesNew}
                  </span>
                )}
              </button>
            ))}
            <div className="flex items-center gap-2 pt-2 font-mono text-xs font-bold text-white">
              <Globe className="w-3.5 h-3.5" />
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-2 py-1 ${lang === 'en' ? 'bg-white text-[#06281c]' : ''}`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLang('es')}
                className={`px-2 py-1 ${lang === 'es' ? 'bg-white text-[#06281c]' : ''}`}
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
              className="mt-1 inline-flex items-center justify-center gap-1.5 bg-[#b7d478] text-[#0c2b22] font-mono text-[0.7rem] font-bold uppercase tracking-[0.12em] px-5 py-3"
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
