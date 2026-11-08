import { useMemo, useState } from 'react'
import { ArrowUpRight, Expand, Search } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

export function Resources() {
  const { t } = useLanguage()
  const [filter, setFilter] = useState('all')
  const [query, setQuery] = useState('')
  const [expanded, setExpanded] = useState(false)
  const [lightbox, setLightbox] = useState(false)

  const filtered = useMemo(() => {
    return t.resources.publications.filter((pub) => {
      const matchesFilter =
        filter === 'all' ||
        (filter === 'journals' && pub.type === 'journal') ||
        (filter === 'policy' && pub.type === 'policy')
      const q = query.trim().toLowerCase()
      const matchesQuery =
        !q ||
        pub.title.toLowerCase().includes(q) ||
        pub.venue.toLowerCase().includes(q) ||
        pub.tags.some((tag) => tag.toLowerCase().includes(q)) ||
        pub.authors.toLowerCase().includes(q)
      return matchesFilter && matchesQuery
    })
  }, [filter, query, t.resources.publications])

  return (
    <section
      id="resources"
      className="py-20 lg:py-28 bg-[#F8F7F4] border-b border-black/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-3xl">
            <div className="label-mono mb-2">{t.resources.eyebrow}</div>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#1A1A1A] tracking-[-0.02em] font-normal">
              {t.resources.title}
            </h2>
            <p className="mt-3 text-base text-[#1A1A1A]/75 font-light leading-relaxed">
              {t.resources.subtitle}
            </p>
          </div>
          <div className="text-right">
            <div className="text-xs font-mono font-bold text-[#B8860B] uppercase tracking-wider">
              {t.resources.scholarBadge}
            </div>
            <div className="text-xs font-mono text-[#1A1A1A]/60 mt-1">
              {t.resources.scholarSub}
            </div>
          </div>
        </div>

        <div className="bg-white border border-black/15 p-6 sm:p-8 mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-[0.65rem] font-mono font-bold uppercase tracking-wider bg-[#1A1A1A] text-[#F8F7F4] px-2.5 py-1">
              {t.resources.modelBadge}
            </span>
            <span className="text-xs font-mono text-[#B8860B]">
              {t.resources.modelVenue}
            </span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#1A1A1A] font-normal leading-snug max-w-4xl">
            {t.resources.modelTitle}
          </h3>
          <p className="mt-3 text-sm sm:text-base text-[#1A1A1A]/75 font-light leading-relaxed max-w-4xl">
            {t.resources.modelDesc}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="inline-flex items-center gap-1.5 border border-black/20 font-mono text-xs uppercase tracking-[0.08em] px-4 py-2.5 hover:border-black/40 transition-colors"
            >
              <Expand className="w-3.5 h-3.5" />
              {t.resources.expandModel}
            </button>
            <a
              href="https://doi.org/10.1007/s11356-025-36768-8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#1A1A1A] text-[#F8F7F4] font-mono text-xs uppercase tracking-[0.08em] px-4 py-2.5 hover:bg-[#333] transition-colors"
            >
              {t.resources.readPaper}
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setLightbox(true)}
            className="group mt-8 block w-full text-left"
          >
            <img
              src="/assets/circular-economy-model.png"
              alt={t.resources.modelTitle}
              className="max-h-[500px] w-auto object-contain mx-auto transition-transform duration-300 group-hover:scale-[1.01]"
            />
            <div className="text-center text-xs font-mono text-[#1A1A1A]/50 mt-3">
              {t.resources.clickFullscreen}
            </div>
          </button>

          {expanded && (
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6 border-t border-black/10">
              {t.resources.phases.map((phase) => (
                <div key={phase.title} className="p-4 bg-[#F8F7F4] border border-black/10">
                  <div className="label-mono mb-3">{phase.title}</div>
                  <ul className="space-y-2">
                    {phase.items.map((item) => (
                      <li
                        key={item}
                        className="text-xs text-[#1A1A1A]/80 font-light flex gap-1.5"
                      >
                        <span className="text-[#B8860B]">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:items-center mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1A1A1A]/40" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.resources.searchPlaceholder}
              className="w-full bg-white border border-black/15 pl-10 pr-4 py-3 text-sm font-light focus:outline-none focus:border-black/40"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {t.resources.filters.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilter(f.id)}
                className={`font-mono text-xs tracking-[0.05em] uppercase px-4 py-2.5 transition-colors ${
                  filter === f.id
                    ? 'bg-[#1A1A1A] text-[#F8F7F4] font-bold'
                    : 'bg-white border border-black/10 text-[#1A1A1A]/70 hover:border-black/30'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {filtered.map((pub) => (
            <article
              key={pub.id}
              className="bg-white border border-black/10 hover:border-black/25 transition-colors p-5 sm:p-6"
            >
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#B8860B] mb-2">
                <span className="font-bold uppercase tracking-wider">{pub.venue}</span>
                <span className="text-[#1A1A1A]/30">·</span>
                <span>{pub.year}</span>
                <span className="text-[#1A1A1A]/30">·</span>
                <span className="text-[#1A1A1A]/60">{pub.meta}</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-[#1A1A1A] font-normal leading-snug">
                {pub.title}
              </h3>
              <div className="mt-2 text-xs font-mono text-[#1A1A1A]/60">{pub.authors}</div>
              <p className="mt-3 text-sm text-[#1A1A1A]/75 font-light leading-relaxed">
                {pub.summary}
              </p>
              <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {pub.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[0.65rem] font-mono bg-[#F8F7F4] border border-black/10 px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-mono text-xs font-bold uppercase tracking-[0.06em] text-[#1A1A1A] hover:text-[#B8860B] transition-colors"
                >
                  {t.resources.viewPaper}
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setLightbox(false)}
          role="dialog"
          aria-modal="true"
        >
          <img
            src="/assets/circular-economy-model.png"
            alt={t.resources.modelTitle}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
