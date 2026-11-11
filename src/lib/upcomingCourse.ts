import { doc, onSnapshot, setDoc, type Unsubscribe } from 'firebase/firestore'
import { db, isFirebaseConfigured } from './firebase'
import { uploadCourseImage } from './courseMedia'

export const UPCOMING_DOC_PATH = { collection: 'site', id: 'upcomingLive' } as const

export interface UpcomingSchedule {
  id: string
  dates: string
  time: string
  note: string
}

export interface UpcomingLiveCourse {
  flyerUrl?: string
  cohortMeta?: string
  registrationOpen?: string
  programmeMeta?: string
  courseTitle?: string
  courseSubtitle?: string
  courseTagline?: string
  courseDesc?: string
  learnTitle?: string
  learnItems?: string[]
  schedules?: UpcomingSchedule[]
  formatValue?: string
  formatCert?: string
  investmentMxn?: string
  investmentUsd?: string
  updatedAt?: number
}

export function subscribeUpcomingLive(
  onData: (data: UpcomingLiveCourse | null) => void,
  onError?: (err: Error) => void,
): Unsubscribe | null {
  if (!isFirebaseConfigured || !db) {
    onData(null)
    return null
  }
  return onSnapshot(
    doc(db, UPCOMING_DOC_PATH.collection, UPCOMING_DOC_PATH.id),
    (snap) => {
      if (!snap.exists()) {
        onData(null)
        return
      }
      onData(snap.data() as UpcomingLiveCourse)
    },
    (err) => onError?.(err),
  )
}

export async function saveUpcomingLive(
  data: UpcomingLiveCourse,
): Promise<void> {
  if (!isFirebaseConfigured || !db) {
    throw new Error('Firebase is not configured. Add keys to .env')
  }
  await setDoc(
    doc(db, UPCOMING_DOC_PATH.collection, UPCOMING_DOC_PATH.id),
    { ...data, updatedAt: Date.now() },
    { merge: true },
  )
}

export async function uploadUpcomingFlyer(file: File): Promise<string> {
  const { imageUrl } = await uploadCourseImage('upcoming-flyer', file)
  return imageUrl
}

/** Merge Firestore overrides onto static defaults (empty strings ignored). */
export function mergeUpcoming<T extends Record<string, unknown>>(
  defaults: T,
  override: UpcomingLiveCourse | null | undefined,
): T & {
  flyerUrl: string
  learnItems: string[]
  schedules: UpcomingSchedule[]
} {
  const pick = (key: keyof UpcomingLiveCourse, fallback: string) => {
    const v = override?.[key]
    return typeof v === 'string' && v.trim() ? v.trim() : fallback
  }

  const learnItems =
    override?.learnItems?.map((s) => s.trim()).filter(Boolean)?.length
      ? override.learnItems.map((s) => s.trim()).filter(Boolean)
      : ((defaults.learnItems as string[]) ?? [])

  const schedules =
    override?.schedules?.filter((s) => s.dates?.trim() || s.time?.trim())
      ?.length
      ? override.schedules.map((s, i) => ({
          id: s.id || String.fromCharCode(97 + i),
          dates: s.dates || '',
          time: s.time || '',
          note: s.note || '',
        }))
      : ((defaults.schedules as UpcomingSchedule[]) ?? [])

  return {
    ...defaults,
    flyerUrl: override?.flyerUrl?.trim() || '/assets/course-flyer.png',
    cohortMeta: pick('cohortMeta', String(defaults.cohortMeta ?? '')),
    registrationOpen: pick(
      'registrationOpen',
      String(defaults.registrationOpen ?? ''),
    ),
    programmeMeta: pick('programmeMeta', String(defaults.programmeMeta ?? '')),
    courseTitle: pick('courseTitle', String(defaults.courseTitle ?? '')),
    courseSubtitle: pick(
      'courseSubtitle',
      String(defaults.courseSubtitle ?? ''),
    ),
    courseTagline: pick('courseTagline', String(defaults.courseTagline ?? '')),
    courseDesc: pick('courseDesc', String(defaults.courseDesc ?? '')),
    learnTitle: pick('learnTitle', String(defaults.learnTitle ?? '')),
    learnItems,
    schedules,
    formatValue: pick('formatValue', String(defaults.formatValue ?? '')),
    formatCert: pick('formatCert', String(defaults.formatCert ?? '')),
    investmentMxn: pick('investmentMxn', String(defaults.investmentMxn ?? '')),
    investmentUsd: pick('investmentUsd', String(defaults.investmentUsd ?? '')),
  }
}
