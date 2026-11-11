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

export async function uploadCourseImage(
  courseId: string,
  file: File,
): Promise<{ imageUrl: string; imagePath: string }> {
  if (!isFirebaseConfigured || !storage) {
    throw new Error('Firebase is not configured. Add keys to .env')
  }
  const ext = file.name.split('.').pop() || 'jpg'
  const imagePath = `courses/${courseId}/${Date.now()}.${ext}`
  const storageRef = ref(storage, imagePath)
  await uploadBytes(storageRef, file)
  const imageUrl = await getDownloadURL(storageRef)
  return { imageUrl, imagePath }
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
