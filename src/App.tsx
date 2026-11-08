import { useCallback, useEffect, useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Resources } from './components/Resources'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Courses } from './components/Courses'

type View = 'home' | 'courses'

function scrollToId(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function App() {
  const [view, setView] = useState<View>(() =>
    window.location.hash === '#courses' ? 'courses' : 'home',
  )

  const openCourses = useCallback(() => {
    setView('courses')
    window.history.replaceState(null, '', '#courses')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const goHome = useCallback(() => {
    setView('home')
    window.history.replaceState(null, '', '#')
  }, [])

  const bookServices = useCallback(() => {
    if (view !== 'home') {
      setView('home')
      window.history.replaceState(null, '', '#contact')
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
        window.history.replaceState(null, '', '#')
        window.scrollTo({ top: 0, behavior: 'smooth' })
        return
      }

      if ((sectionIds as readonly string[]).includes(target)) {
        if (view !== 'home') {
          setView('home')
          window.history.replaceState(null, '', `#${target}`)
          requestAnimationFrame(() => {
            setTimeout(() => scrollToId(target), 50)
          })
          return
        }
        scrollToId(target)
        window.history.replaceState(null, '', `#${target}`)
      }
    },
    [view],
  )

  useEffect(() => {
    const onHash = () => {
      if (window.location.hash === '#courses') {
        setView('courses')
        return
      }
      setView('home')
      const id = window.location.hash.replace('#', '')
      if (id) {
        setTimeout(() => scrollToId(id), 80)
      }
    }
    window.addEventListener('hashchange', onHash)
    if (window.location.hash && window.location.hash !== '#courses') {
      setTimeout(() => scrollToId(window.location.hash.replace('#', '')), 100)
    }
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  return (
    <div className="min-h-screen bg-[#F8F7F4] text-[#1A1A1A]">
      <Navbar
        view={view}
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
