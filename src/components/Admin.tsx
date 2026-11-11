import { useEffect, useMemo, useState, type FormEvent } from 'react'
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import {
  ArrowLeft,
  ImagePlus,
  Loader2,
  Lock,
  LogOut,
  Plus,
  Save,
  Trash2,
  Upload,
} from 'lucide-react'
import {
  COURSE_CATEGORIES,
  PERMANENT_COURSES,
  type CourseCategory,
  type CourseMediaDoc,
} from '../data/courseCatalog'
import {
  ADMIN_EMAIL,
  ADMIN_PASSWORD,
  auth,
  isFirebaseConfigured,
} from '../lib/firebase'
import {
  removeCourseMedia,
  subscribeCourseMedia,
  uploadCourseImage,
  upsertCourseMedia,
} from '../lib/courseMedia'

const SESSION_KEY = 'ruqaya-admin-auth'

interface AdminProps {
  onBack: () => void
}

export function Admin({ onBack }: AdminProps) {
  const [authed, setAuthed] = useState(false)
  const [authReady, setAuthReady] = useState(false)
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState('')
  const [loggingIn, setLoggingIn] = useState(false)
  const [media, setMedia] = useState<Record<string, CourseMediaDoc>>({})
  const [busyId, setBusyId] = useState<string | null>(null)
  const [status, setStatus] = useState('')
  const [error, setError] = useState('')

  // Custom course form
  const [customTitle, setCustomTitle] = useState('')
  const [customCategory, setCustomCategory] = useState<CourseCategory>('management')
  const [customDesc, setCustomDesc] = useState('')

  useEffect(() => {
    if (!auth) {
      setAuthed(sessionStorage.getItem(SESSION_KEY) === '1')
      setAuthReady(true)
      return
    }
    const unsub = onAuthStateChanged(auth, (user) => {
      setAuthed(Boolean(user))
      if (user) sessionStorage.setItem(SESSION_KEY, '1')
      else sessionStorage.removeItem(SESSION_KEY)
      setAuthReady(true)
    })
    return () => unsub()
  }, [])

  useEffect(() => {
    if (!authed) return
    const unsub = subscribeCourseMedia(setMedia, (err) =>
      setError(err.message),
    )
    return () => unsub?.()
  }, [authed])

  const customCourses = useMemo(
    () =>
      Object.values(media).filter(
        (m) => m.custom && !PERMANENT_COURSES.some((p) => p.id === m.id),
      ),
    [media],
  )

  const onLogin = async (e: FormEvent) => {
    e.preventDefault()
    setLoginError('')
    setLoggingIn(true)
    try {
      if (auth && isFirebaseConfigured) {
        await signInWithEmailAndPassword(auth, ADMIN_EMAIL, password)
        sessionStorage.setItem(SESSION_KEY, '1')
        setAuthed(true)
        setPassword('')
        return
      }
      if (password === ADMIN_PASSWORD) {
        sessionStorage.setItem(SESSION_KEY, '1')
        setAuthed(true)
        setPassword('')
      } else {
        setLoginError('Incorrect password.')
      }
    } catch {
      setLoginError('Incorrect email/password for admin.')
    } finally {
      setLoggingIn(false)
    }
  }

  const logout = async () => {
    sessionStorage.removeItem(SESSION_KEY)
    setAuthed(false)
    if (auth) {
      try {
        await signOut(auth)
      } catch {
        // ignore
      }
    }
  }

  const handleUpload = async (courseId: string, file: File | null) => {
    if (!file) return
    setBusyId(courseId)
    setError('')
    setStatus('')
    try {
      const { imageUrl, imagePath } = await uploadCourseImage(courseId, file)
      const permanent = PERMANENT_COURSES.find((c) => c.id === courseId)
      await upsertCourseMedia(courseId, {
        title: permanent?.title || media[courseId]?.title,
        category: permanent?.category || media[courseId]?.category,
        description: media[courseId]?.description || '',
        imageUrl,
        imagePath,
        custom: media[courseId]?.custom || false,
        featured: media[courseId]?.featured || false,
      })
      setStatus(
        `Photo updated for ${permanent?.title || courseId} (free Firestore storage).`,
      )
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Upload failed')
    } finally {
      setBusyId(null)
    }
  }

  const handleSaveDescription = async (courseId: string, description: string) => {
    setBusyId(courseId)
    setError('')
    try {
      const permanent = PERMANENT_COURSES.find((c) => c.id === courseId)
      await upsertCourseMedia(courseId, {
        title: permanent?.title || media[courseId]?.title,
        category: permanent?.category || media[courseId]?.category,
        description,
        imageUrl: media[courseId]?.imageUrl,
        imagePath: media[courseId]?.imagePath,
        custom: media[courseId]?.custom || false,
      })
      setStatus('Description saved.')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Save failed')
    } finally {
      setBusyId(null)
    }
  }

  const handleRemoveImage = async (courseId: string) => {
    if (!confirm('Remove this course photo?')) return
    setBusyId(courseId)
    setError('')
    try {
      const existing = media[courseId]
      const permanent = PERMANENT_COURSES.find((c) => c.id === courseId)
      await upsertCourseMedia(courseId, {
        title: permanent?.title || existing?.title,
        category: permanent?.category || existing?.category,
        description: existing?.description || '',
        imageUrl: '',
        imagePath: '',
        custom: existing?.custom || false,
      })
      setStatus('Photo removed.')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Remove failed')
    } finally {
      setBusyId(null)
    }
  }

  const handleAddCustom = async (e: FormEvent) => {
    e.preventDefault()
    if (!customTitle.trim()) return
    const id = `custom-${Date.now()}`
    setBusyId(id)
    setError('')
    try {
      await upsertCourseMedia(id, {
        title: customTitle.trim(),
        category: customCategory,
        description: customDesc.trim(),
        custom: true,
        imageUrl: '',
        imagePath: '',
      })
      setCustomTitle('')
      setCustomDesc('')
      setStatus('Custom course added.')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add course')
    } finally {
      setBusyId(null)
    }
  }

  const handleDeleteCustom = async (courseId: string) => {
    if (!confirm('Delete this custom course permanently?')) return
    setBusyId(courseId)
    try {
      await removeCourseMedia(courseId)
      setStatus('Custom course deleted.')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Delete failed')
    } finally {
      setBusyId(null)
    }
  }

  if (!authReady) {
    return (
      <div className="min-h-screen bg-[#F8F7F4] flex items-center justify-center">
        <Loader2 className="w-6 h-6 animate-spin text-[#B8860B]" />
      </div>
    )
  }

  if (!authed) {
    return (
      <div className="min-h-screen bg-[#F8F7F4] flex items-center justify-center px-4">
        <form
          onSubmit={onLogin}
          className="w-full max-w-md bg-white border border-black/15 p-8 space-y-5"
        >
          <div className="flex items-center gap-2">
            <Lock className="w-5 h-5 text-[#B8860B]" />
            <h1 className="font-serif text-3xl text-[#1A1A1A]">Admin Login</h1>
          </div>
          <p className="text-sm text-[#1A1A1A]/70 font-light">
            Manage course photos and catalog content for the Courses page.
          </p>
          {isFirebaseConfigured && (
            <p className="text-xs font-mono text-[#1A1A1A]/55">{ADMIN_EMAIL}</p>
          )}
          <div>
            <label className="label-mono block mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-black/15 px-4 py-3 text-sm focus:outline-none focus:border-black/40"
              autoFocus
              disabled={loggingIn}
            />
          </div>
          {loginError && (
            <p className="text-sm text-red-600" role="alert">
              {loginError}
            </p>
          )}
          <div className="flex gap-3">
            <button
              type="button"
              onClick={onBack}
              className="flex-1 border border-black/20 font-mono text-xs uppercase tracking-[0.08em] py-3"
            >
              Back
            </button>
            <button
              type="submit"
              disabled={loggingIn}
              className="flex-1 bg-[#1A1A1A] text-[#F8F7F4] font-mono text-xs uppercase tracking-[0.08em] py-3 hover:bg-[#B8860B] transition-colors disabled:opacity-60"
            >
              {loggingIn ? 'Signing in…' : 'Enter'}
            </button>
          </div>
        </form>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F8F7F4]">
      <header className="border-b border-black/10 bg-[#F8F7F4]/95 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.08em] text-[#1A1A1A] hover:text-[#B8860B]"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Site
            </button>
            <h1 className="font-serif text-2xl sm:text-3xl text-[#1A1A1A]">
              Courses Admin
            </h1>
          </div>
          <button
            type="button"
            onClick={logout}
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.08em] border border-black/20 px-3 py-2 hover:border-black/40"
          >
            <LogOut className="w-3.5 h-3.5" />
            Logout
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-8 space-y-8">
        {!isFirebaseConfigured ? (
          <div className="p-4 border border-[#B8860B]/40 bg-[#B8860B]/10 text-sm">
            Firebase is not configured yet. Copy <code>.env.example</code> to{' '}
            <code>.env</code>, add your Firebase web app keys, then restart the
            dev server.
          </div>
        ) : (
          <div className="p-4 border border-black/10 bg-white text-sm text-[#1A1A1A]/80">
            <strong className="text-[#1A1A1A]">Free photo storage:</strong> use{' '}
            <em>Upload Photo</em> on any course. Images are compressed in the
            browser and saved in Firestore (Spark / free — no paid Storage
            needed). View docs at{' '}
            <a
              className="text-[#B8860B] underline"
              href="https://console.firebase.google.com/project/ruqaya-portfolio-app/firestore"
              target="_blank"
              rel="noopener noreferrer"
            >
              Firestore → courses
            </a>
            .
          </div>
        )}

        {status && (
          <p className="text-sm text-[#135D29]" role="status">
            {status}
          </p>
        )}
        {error && (
          <p className="text-sm text-red-600" role="alert">
            {error}
          </p>
        )}

        <section className="bg-white border border-black/15 p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Plus className="w-4 h-4 text-[#B8860B]" />
            <h2 className="font-serif text-2xl">Add Custom Course</h2>
          </div>
          <form
            onSubmit={handleAddCustom}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <div>
              <label className="label-mono block mb-2">Title</label>
              <input
                value={customTitle}
                onChange={(e) => setCustomTitle(e.target.value)}
                required
                className="w-full border border-black/15 px-3 py-2.5 text-sm"
              />
            </div>
            <div>
              <label className="label-mono block mb-2">Category</label>
              <select
                value={customCategory}
                onChange={(e) =>
                  setCustomCategory(e.target.value as CourseCategory)
                }
                className="w-full border border-black/15 px-3 py-2.5 text-sm bg-white"
              >
                {COURSE_CATEGORIES.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.titleEn}
                  </option>
                ))}
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="label-mono block mb-2">Description (optional)</label>
              <textarea
                value={customDesc}
                onChange={(e) => setCustomDesc(e.target.value)}
                rows={2}
                className="w-full border border-black/15 px-3 py-2.5 text-sm"
              />
            </div>
            <button
              type="submit"
              disabled={busyId !== null}
              className="inline-flex items-center justify-center gap-2 bg-[#1A1A1A] text-[#F8F7F4] font-mono text-xs uppercase tracking-[0.08em] px-5 py-3 hover:bg-[#B8860B] disabled:opacity-60"
            >
              <Plus className="w-3.5 h-3.5" />
              Add Course
            </button>
          </form>
        </section>

        {COURSE_CATEGORIES.map((cat) => {
          const permanent = PERMANENT_COURSES.filter((c) => c.category === cat.id)
          const customs = customCourses.filter((c) => c.category === cat.id)
          return (
            <section key={cat.id} className="space-y-4">
              <h2 className="font-serif text-3xl text-[#1A1A1A]">{cat.titleEn}</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {permanent.map((course) => (
                  <CourseAdminCard
                    key={course.id}
                    courseId={course.id}
                    title={course.title}
                    media={media[course.id]}
                    busy={busyId === course.id}
                    onUpload={(file) => handleUpload(course.id, file)}
                    onSaveDesc={(desc) => handleSaveDescription(course.id, desc)}
                    onRemoveImage={() => handleRemoveImage(course.id)}
                  />
                ))}
                {customs.map((course) => (
                  <CourseAdminCard
                    key={course.id}
                    courseId={course.id}
                    title={course.title || 'Custom course'}
                    media={course}
                    busy={busyId === course.id}
                    custom
                    onUpload={(file) => handleUpload(course.id, file)}
                    onSaveDesc={(desc) => handleSaveDescription(course.id, desc)}
                    onRemoveImage={() => handleRemoveImage(course.id)}
                    onDelete={() => handleDeleteCustom(course.id)}
                  />
                ))}
              </div>
            </section>
          )
        })}
      </div>
    </div>
  )
}

function CourseAdminCard({
  courseId,
  title,
  media,
  busy,
  custom,
  onUpload,
  onSaveDesc,
  onRemoveImage,
  onDelete,
}: {
  courseId: string
  title: string
  media?: CourseMediaDoc
  busy: boolean
  custom?: boolean
  onUpload: (file: File | null) => void
  onSaveDesc: (desc: string) => void
  onRemoveImage: () => void
  onDelete?: () => void
}) {
  const [desc, setDesc] = useState(media?.description || '')

  useEffect(() => {
    setDesc(media?.description || '')
  }, [media?.description])

  return (
    <article className="bg-white border border-black/10 p-4 flex flex-col sm:flex-row gap-4">
      <div className="w-full sm:w-36 h-28 bg-[#F8F7F4] border border-black/10 overflow-hidden shrink-0 flex items-center justify-center">
        {media?.imageUrl ? (
          <img
            src={media.imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <ImagePlus className="w-8 h-8 text-[#1A1A1A]/25" />
        )}
      </div>
      <div className="flex-1 min-w-0 space-y-3">
        <div>
          <div className="text-[0.65rem] font-mono text-[#B8860B] uppercase tracking-wider">
            {courseId}
            {custom ? ' · Custom' : ' · Permanent'}
          </div>
          <h3 className="font-serif text-lg text-[#1A1A1A] leading-snug">{title}</h3>
        </div>
        <textarea
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          rows={2}
          placeholder="Optional short description shown on Courses page"
          className="w-full border border-black/15 px-3 py-2 text-xs"
        />
        <div className="flex flex-wrap gap-2">
          <label className="inline-flex items-center gap-1.5 bg-[#1A1A1A] text-[#F8F7F4] font-mono text-[0.65rem] uppercase tracking-[0.08em] px-3 py-2 cursor-pointer hover:bg-[#B8860B]">
            {busy ? (
              <Loader2 className="w-3 h-3 animate-spin" />
            ) : (
              <Upload className="w-3 h-3" />
            )}
            Upload Photo
            <input
              type="file"
              accept="image/*"
              className="hidden"
              disabled={busy}
              onChange={(e) => {
                onUpload(e.target.files?.[0] || null)
                e.target.value = ''
              }}
            />
          </label>
          <button
            type="button"
            disabled={busy}
            onClick={() => onSaveDesc(desc)}
            className="inline-flex items-center gap-1.5 border border-black/20 font-mono text-[0.65rem] uppercase tracking-[0.08em] px-3 py-2 hover:border-black/40 disabled:opacity-60"
          >
            <Save className="w-3 h-3" />
            Save Text
          </button>
          {media?.imageUrl && (
            <button
              type="button"
              disabled={busy}
              onClick={onRemoveImage}
              className="inline-flex items-center gap-1.5 border border-red-200 text-red-700 font-mono text-[0.65rem] uppercase tracking-[0.08em] px-3 py-2 disabled:opacity-60"
            >
              <Trash2 className="w-3 h-3" />
              Remove Photo
            </button>
          )}
          {custom && onDelete && (
            <button
              type="button"
              disabled={busy}
              onClick={onDelete}
              className="inline-flex items-center gap-1.5 bg-red-700 text-white font-mono text-[0.65rem] uppercase tracking-[0.08em] px-3 py-2 disabled:opacity-60"
            >
              <Trash2 className="w-3 h-3" />
              Delete Course
            </button>
          )}
        </div>
      </div>
    </article>
  )
}
