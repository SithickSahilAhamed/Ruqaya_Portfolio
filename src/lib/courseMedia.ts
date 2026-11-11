import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  setDoc,
  deleteDoc,
  type Unsubscribe,
} from 'firebase/firestore'
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from 'firebase/storage'
import {
  COURSES_COLLECTION,
  db,
  isFirebaseConfigured,
  storage,
} from './firebase'
import type { CourseMediaDoc } from '../data/courseCatalog'

export type UploadBackend = 'storage' | 'firestore'

export interface UploadResult {
  imageUrl: string
  imagePath: string
  via: UploadBackend
}

/** Cached after first probe so we don't retry a missing Storage bucket every upload. */
let storageAvailable: boolean | null = null

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
  // Allow larger files — we compress before Firestore write.
  if (file.size > 12 * 1024 * 1024) {
    throw new Error('Image must be under 12 MB.')
  }
}

/** Resize/compress so images fit Firestore's ~1 MiB doc limit when Storage is unavailable. */
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

async function tryStorageUpload(
  courseId: string,
  file: File,
): Promise<UploadResult | null> {
  if (!storage || storageAvailable === false) return null

  try {
    const ext = file.name.split('.').pop() || 'jpg'
    const imagePath = `courses/${courseId}/${Date.now()}.${ext}`
    const storageRef = ref(storage, imagePath)
    await uploadBytes(storageRef, file)
    const imageUrl = await getDownloadURL(storageRef)
    storageAvailable = true
    return { imageUrl, imagePath, via: 'storage' }
  } catch {
    storageAvailable = false
    return null
  }
}

export async function uploadCourseImage(
  courseId: string,
  file: File,
): Promise<UploadResult> {
  if (!isFirebaseConfigured) {
    throw new Error('Firebase is not configured. Add keys to .env')
  }

  assertImageFile(file)

  const fromStorage = await tryStorageUpload(courseId, file)
  if (fromStorage) return fromStorage

  if (!db) {
    throw new Error('Firebase is not configured. Add keys to .env')
  }

  // Spark-plan safe path: compress and store in Firestore course doc.
  const imageUrl = await fileToCompressedDataUrl(file)
  return { imageUrl, imagePath: '', via: 'firestore' }
}

export async function removeCourseMedia(courseId: string, imagePath?: string) {
  if (!isFirebaseConfigured || !db) {
    throw new Error('Firebase is not configured. Add keys to .env')
  }
  if (imagePath && storage) {
    try {
      await deleteObject(ref(storage, imagePath))
    } catch {
      // ignore missing file
    }
  }
  await deleteDoc(doc(db, COURSES_COLLECTION, courseId))
}
