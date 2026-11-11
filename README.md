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

1. Firebase project: `ruqaya-portfolio-app` (Firestore in `asia-south1`).
2. Copy `.env.example` → `.env` and fill in your web app config keys.
3. Set `VITE_ADMIN_EMAIL` / `VITE_ADMIN_PASSWORD` (defaults: `admin@ruqaya.org` / `ruqaya-admin`).
4. Auth: Email/Password is enabled; Admin signs in with Firebase Auth.
5. Deploy rules: `npx firebase deploy --only firestore:rules` (add `,storage` after Storage is provisioned).
6. Open `/admin`, sign in, upload course photos.

### Free image upload (no paid Storage)

Photos are compressed in the browser and stored in Firestore `courses` docs (`imageUrl`).  
This uses the free Spark plan — **Firebase Storage / Blaze is not required**.

View: https://console.firebase.google.com/project/ruqaya-portfolio-app/firestore

### Admin URL

- Local: `http://127.0.0.1:5173/admin`
- Production: `https://ruqaya-portfolio.vercel.app/admin` (also `https://ruqaya.org/admin`)

## Assets

- `/public/assets/logo.jpg`
- `/public/assets/profile.png`
- `/public/assets/circular-economy-model.png`
- `/public/assets/course-flyer.png`
