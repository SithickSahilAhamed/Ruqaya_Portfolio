import { useMemo, useState } from 'react'
import { ArrowUpRight, MapPin } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

export function Projects() {
  const { t } = useLanguage()
  const [filter, setFilter] = useState('all')

  const filtered = useMemo(() => {
    if (filter === 'all') return t.projects.items
    return t.projects.items.filter((p) => p.category === filter)
  }, [filter, t.projects.items])

  return (
    <section
      id="projects"
      className="pt-10 pb-16 lg:pt-14 lg:pb-24 bg-[#F8F7F4] border-b border-black/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="max-w-3xl mb-8">
          <div className="label-mono mb-2">{t.projects.eyebrow}</div>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#1A1A1A] tracking-[-0.02em] font-normal">
            {t.projects.title}
          </h2>
          <p className="mt-3 text-base text-[#1A1A1A]/75 font-light leading-relaxed">
            {t.projects.subtitle}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div className="text-xs font-mono text-[#1A1A1A]/60">
            {t.projects.showing(filtered.length, t.projects.items.length)}
          </div>
          <div className="flex flex-wrap gap-2">
            {t.projects.filters.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilter(f.id)}
                className={`font-mono text-xs tracking-[0.05em] uppercase px-4 py-2 transition-colors ${
                  filter === f.id
                    ? 'bg-[#1A1A1A] text-[#F8F7F4] font-bold'
                    : 'text-[#1A1A1A]/70 hover:text-[#1A1A1A] hover:bg-black/5'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {filtered.map((project) => (
            <article
              key={project.id}
              className="bg-white border border-black/10 hover:border-black/25 transition-colors p-6 sm:p-8"
            >
              <div className="flex flex-col lg:flex-row lg:gap-10">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="label-mono">{project.number}</span>
                    <span className="text-xs font-mono text-[#1A1A1A]/50">
                      {project.years}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#1A1A1A] font-normal leading-snug">
                    {project.title}
                  </h3>
                  <div className="mt-2 text-sm font-mono text-[#B8860B]">
                    {project.org}
                  </div>
                  <p className="mt-4 text-sm sm:text-base text-[#1A1A1A]/75 font-light leading-relaxed">
                    {project.summary}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {project.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="text-sm text-[#1A1A1A]/80 font-light flex gap-2"
                      >
                        <span className="text-[#B8860B] shrink-0">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 lg:mt-0 lg:w-72 shrink-0 space-y-4">
                  <div className="p-4 bg-[#F8F7F4] border border-black/10">
                    <div className="font-serif text-xl text-[#1A1A1A]">
                      {project.highlightValue}
                    </div>
                    <p className="mt-1 text-xs text-[#1A1A1A]/70 font-light leading-relaxed">
                      {project.highlightDesc}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[0.65rem] font-mono bg-[#F8F7F4] border border-black/10 px-2 py-1 text-[#1A1A1A]/80"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.moreTags > 0 && (
                      <span className="text-[0.65rem] font-mono text-[#1A1A1A]/50 px-1 py-1">
                        +{project.moreTags} more
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-between gap-3 pt-1">
                    <div className="flex items-start gap-1.5 text-xs text-[#1A1A1A]/60">
                      <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                      <span className="font-light leading-snug">{project.location}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        document
                          .getElementById('contact')
                          ?.scrollIntoView({ behavior: 'smooth' })
                      }
                      className="inline-flex items-center gap-1 font-mono text-xs font-bold uppercase tracking-[0.05em] text-[#1A1A1A] hover:text-[#B8860B] transition-colors"
                    >
                      {t.projects.dossier}
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
