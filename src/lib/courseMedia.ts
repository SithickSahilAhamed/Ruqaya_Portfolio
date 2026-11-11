import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  setDoc,
  deleteDoc,
  type Unsubscribe,
} from 'firebase/firestore'
import { COURSES_COLLECTION, db, isFirebaseConfigured } from './firebase'
import type { CourseMediaDoc } from '../data/courseCatalog'

export type UploadBackend = 'firestore'

export interface UploadResult {
  imageUrl: string
  imagePath: string
  via: UploadBackend
}

export async function fetchCourseMedia(): Promise<Record<string, CourseMediaDoc>> {
  if (!isFirebaseConfigured || !db) return {}
  const snap = await getDocs(collection(db, COURSES_COLLECTION))
  const map: Record<string, CourseMediaDoc> = {}
  snap.forEach((d) => {
    map[d.id] = { id: d.id, ...(d.data() as Omit<CourseMediaDoc, 'id'>) }
  })
  return map
}

export function subscribeCourseMedia(
  onData: (map: Record<string, CourseMediaDoc>) => void,
  onError?: (err: Error) => void,
): Unsubscribe | null {
  if (!isFirebaseConfigured || !db) {
    onData({})
    return null
  }
  return onSnapshot(
    collection(db, COURSES_COLLECTION),
    (snap) => {
      const map: Record<string, CourseMediaDoc> = {}
      snap.forEach((d) => {
        map[d.id] = { id: d.id, ...(d.data() as Omit<CourseMediaDoc, 'id'>) }
      })
      onData(map)
    },
    (err) => onError?.(err),
  )
}

export async function upsertCourseMedia(
  id: string,
  data: Omit<CourseMediaDoc, 'id'>,
): Promise<void> {
  if (!isFirebaseConfigured || !db) {
    throw new Error('Firebase is not configured. Add keys to .env')
  }
  await setDoc(
    doc(db, COURSES_COLLECTION, id),
    { ...data, updatedAt: Date.now() },
    { merge: true },
  )
}

function assertImageFile(file: File) {
  if (!file.type.startsWith('image/')) {
    throw new Error('Please choose an image file (JPG, PNG, WebP, etc.).')
  }
  if (file.size > 12 * 1024 * 1024) {
    throw new Error('Image must be under 12 MB.')
  }
}

/**
 * Free upload path (no Firebase Storage / Blaze):
 * compress image client-side and store inside the Firestore course document.
 * Spark plan includes Firestore — no card required.
 */
async function fileToCompressedDataUrl(file: File): Promise<string> {
  const bitmap = await createImageBitmap(file)
  const maxEdge = 1200
  const scale = Math.min(1, maxEdge / Math.max(bitmap.width, bitmap.height))
  const width = Math.max(1, Math.round(bitmap.width * scale))
  const height = Math.max(1, Math.round(bitmap.height * scale))
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')
  if (!ctx) throw new Error('Could not process image')
  ctx.drawImage(bitmap, 0, 0, width, height)
  bitmap.close()

  let quality = 0.72
  let dataUrl = canvas.toDataURL('image/jpeg', quality)
  while (dataUrl.length > 700_000 && quality > 0.35) {
    quality -= 0.1
    dataUrl = canvas.toDataURL('image/jpeg', quality)
  }
  if (dataUrl.length > 900_000) {
    throw new Error('Image is too large even after compression. Try a smaller photo.')
  }
  return dataUrl
}

export async function uploadCourseImage(
  _courseId: string,
  file: File,
): Promise<UploadResult> {
  if (!isFirebaseConfigured || !db) {
    throw new Error('Firebase is not configured. Add keys to .env')
  }

  assertImageFile(file)
  const imageUrl = await fileToCompressedDataUrl(file)
  return { imageUrl, imagePath: '', via: 'firestore' }
}

export async function removeCourseMedia(courseId: string) {
  if (!isFirebaseConfigured || !db) {
    throw new Error('Firebase is not configured. Add keys to .env')
  }
  await deleteDoc(doc(db, COURSES_COLLECTION, courseId))
}
