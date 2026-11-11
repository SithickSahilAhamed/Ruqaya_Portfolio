import { useCallback, useEffect, useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Resources } from './components/Resources'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Courses } from './components/Courses'
import { Admin } from './components/Admin'

type View = 'home' | 'courses' | 'admin'

function scrollToId(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function resolveView(): View {
  if (window.location.pathname === '/admin' || window.location.hash === '#admin') {
    return 'admin'
  }
  if (window.location.hash === '#courses') return 'courses'
  return 'home'
}

export default function App() {
  const [view, setView] = useState<View>(() => resolveView())

  const openCourses = useCallback(() => {
    setView('courses')
    window.history.replaceState(null, '', '/#courses')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const goHome = useCallback(() => {
    setView('home')
    window.history.replaceState(null, '', '/')
  }, [])

  const openAdmin = useCallback(() => {
    setView('admin')
    window.history.replaceState(null, '', '/admin')
    window.scrollTo(0, 0)
  }, [])

  const bookServices = useCallback(() => {
    if (view !== 'home') {
      setView('home')
      window.history.replaceState(null, '', '/#contact')
      requestAnimationFrame(() => {
        setTimeout(() => scrollToId('contact'), 50)
      })
      return
    }
    scrollToId('contact')
  }, [view])

  const navigate = useCallback(
    (target: string) => {
      const sectionIds = [
        'about',
        'services',
        'resources',
        'contact',
        'expert-profile',
        'projects',
      ] as const

      if (target === 'home') {
        if (view !== 'home') setView('home')
        window.history.replaceState(null, '', '/')
        window.scrollTo({ top: 0, behavior: 'smooth' })
        return
      }

      if ((sectionIds as readonly string[]).includes(target)) {
        if (view !== 'home') {
          setView('home')
          window.history.replaceState(null, '', `/#${target}`)
          requestAnimationFrame(() => {
            setTimeout(() => scrollToId(target), 50)
          })
          return
        }
        scrollToId(target)
        window.history.replaceState(null, '', `/#${target}`)
      }
    },
    [view],
  )

  useEffect(() => {
    const sync = () => setView(resolveView())
    window.addEventListener('hashchange', sync)
    window.addEventListener('popstate', sync)

    // Support direct /admin path on static hosts via hash fallback
    if (window.location.pathname === '/admin') {
      setView('admin')
    } else if (window.location.hash === '#courses') {
      setView('courses')
    } else if (window.location.hash && window.location.hash !== '#admin') {
      setView('home')
      setTimeout(() => scrollToId(window.location.hash.replace('#', '')), 100)
    }

    return () => {
      window.removeEventListener('hashchange', sync)
      window.removeEventListener('popstate', sync)
    }
  }, [])

  // Expose admin entry for convenience without cluttering public nav
  useEffect(() => {
    ;(window as Window & { openRuqayaAdmin?: () => void }).openRuqayaAdmin = openAdmin
  }, [openAdmin])

  if (view === 'admin') {
    return <Admin onBack={goHome} />
  }

  return (
    <div className="min-h-screen bg-[#F8F7F4] text-[#1A1A1A]">
      <Navbar
        view={view === 'courses' ? 'courses' : 'home'}
        onNavigate={navigate}
        onOpenCourses={openCourses}
        onBookServices={bookServices}
      />

      {view === 'courses' ? (
        <Courses onBack={goHome} />
      ) : (
        <main>
          <Hero
            onBookServices={bookServices}
            onOpenCourses={openCourses}
            onExpertProfile={() => navigate('expert-profile')}
          />
          <About onOpenCourses={openCourses} onBookServices={bookServices} />
          <Projects />
          <Resources />
          <Contact />
        </main>
      )}

      <Footer onBookServices={bookServices} />
    </div>
  )
}
