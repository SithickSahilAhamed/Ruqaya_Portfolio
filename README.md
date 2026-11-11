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

1. Create a Firebase project and enable **Firestore** + **Storage**.
2. Copy `.env.example` → `.env` and fill in your web app config keys.
3. Set `VITE_ADMIN_PASSWORD` (default: `ruqaya-admin`).
4. In Firestore, create collection `courses` (docs are created automatically by Admin).
5. In Storage rules, allow authenticated or open write for `courses/` during setup (tighten for production).
6. Restart `npm run dev`, open `/admin`, log in, upload course photos.

Public Courses page shows permanent courses always; photos/descriptions from Firestore appear when configured.

## Assets

- `/public/assets/logo.jpg`
- `/public/assets/profile.png`
- `/public/assets/circular-economy-model.png`
- `/public/assets/course-flyer.png`
