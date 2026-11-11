import { ArrowRight } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

interface FooterProps {
  onBookServices: () => void
}

export function Footer({ onBookServices }: FooterProps) {
  const { t } = useLanguage()

  return (
    <footer className="bg-[#F8F7F4] border-t-2 border-[#1A1A1A] py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
          <div className="flex items-start gap-3">
            <div className="w-11 h-11 rounded-md overflow-hidden border border-black/10 bg-white shrink-0">
              <img
                src="/assets/logo.jpg"
                alt="RUQAYA Logo"
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <div className="font-serif text-2xl text-[#1A1A1A]">RUQAYA</div>
              <p className="mt-1 text-sm text-[#1A1A1A]/70 font-light max-w-sm">
                {t.footer.tagline}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            <a
              href="mailto:hammadhu@ruqaya.org"
              className="text-sm text-[#1A1A1A]/80 hover:text-[#B8860B] transition-colors"
            >
              hammadhu@ruqaya.org
            </a>
            <a
              href="https://wa.me/525571986833"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#1A1A1A]/80 hover:text-[#B8860B] transition-colors"
            >
              +52 5571986833
            </a>
            <a
              href="https://www.linkedin.com/in/hammadhu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#1A1A1A]/80 hover:text-[#B8860B] transition-colors"
            >
              LinkedIn
            </a>
            <button
              type="button"
              onClick={onBookServices}
              className="inline-flex items-center gap-1.5 bg-[#1A1A1A] text-[#F8F7F4] font-mono text-[0.7rem] font-bold uppercase tracking-[0.12em] px-5 py-2.5 hover:bg-[#333] transition-colors"
            >
              {t.footer.bookServices}
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-black/10 flex flex-col sm:flex-row justify-between gap-2 text-xs font-mono text-[#1A1A1A]/50">
          <span>{t.footer.rights}</span>
          <span>{t.footer.regions}</span>
        </div>
      </div>
    </footer>
  )
}
