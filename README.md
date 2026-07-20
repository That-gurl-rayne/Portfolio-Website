# Yoanna Udunna — Portfolio

## Run locally
```bash
npm install
npm run dev
```
Opens at http://localhost:5173

## Build for production
```bash
npm run build
```
Outputs to `dist/`

## Push to GitHub
```bash
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

## Deploy to Vercel
1. Go to vercel.com, sign in with GitHub
2. "Add New Project" → import this repo
3. Vercel auto-detects Vite — no config needed
4. Click Deploy

No database or backend needed for this site — it's fully static.

## To add your photo
Replace the "YOUR PHOTO HERE" placeholder block in `src/App.jsx` (Home component,
hero section) with an `<img src="..." />` tag. Drop the image file in a `public/`
folder and reference it as `/your-photo.jpg`.
