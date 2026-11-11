# RUQAYA Portfolio

Faithful reconstruction of [ruqaya.ai.studio](https://ruqaya.ai.studio/) — Leadership in Circular Economy & Waste Management.

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- Lucide React
- Firebase (Firestore + Storage for course photos)

## Run locally

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (default `http://127.0.0.1:5173/`).

## Build

```bash
npm run build
npm run preview
```

## Features

- Homepage: Hero, Service Tracks, Expert Profile, Projects, Resources, Contact (Web3Forms)
- Courses page with featured ISO cohort + permanent catalogue:
  - Management Courses
  - Circular Economy & Sustainability Courses
  - Waste Management Courses
- EN / ES language switch
- Contact email: `hammadhu@ruqaya.org`
- Admin page at `/admin` (or `#admin`) for course photo/description management

## Firebase Admin setup

1. Firebase project: `ruqaya-portfolio-app` (Firestore in `asia-south1` + Storage).
2. Copy `.env.example` → `.env` and fill in your web app config keys.
3. Set `VITE_ADMIN_PASSWORD` (default: `ruqaya-admin`).
4. Deploy rules: `npx firebase deploy --only firestore:rules,storage`.
5. Open `/admin`, log in with the admin password, upload course photos.

### Remaining (Console)

- **Authentication**: Enable Email/Password in Firebase Console → Authentication → Get started, then create `admin@ruqaya.org` (or your `VITE_ADMIN_EMAIL`). After that, tighten Firestore/Storage write rules to `request.auth != null` and wire Admin login to `signInWithEmailAndPassword`.
- **Storage**: If uploads fail, finish Storage bucket setup in Console (default bucket `ruqaya-portfolio-app.firebasestorage.app`) and redeploy `storage` rules.
- **Vercel**: Add all `VITE_*` keys from `.env.example` as project env vars (Production + Preview), then redeploy.

Public Courses page shows permanent courses always; photos/descriptions from Firestore appear when configured.

### Admin URL

- Local: `http://127.0.0.1:5173/admin`
- Production: `https://ruqaya-portfolio.vercel.app/admin`

## Assets

- `/public/assets/logo.jpg`
- `/public/assets/profile.png`
- `/public/assets/circular-economy-model.png`
- `/public/assets/course-flyer.png`
