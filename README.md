# StudyEdge — B.Tech CSE (AI) Study App

An installable app (phone + laptop) covering Supriya's complete **Gurugram University B.Tech CSE (AI)** syllabus, **Semesters 1–8**, plus **15 skill tracks** for placements.

| Tab | What it does |
|---|---|
| **Learn** | 8 semester tracks (every subject → unit → term from the syllabus, incl. labs and electives) + 15 skill tracks: DSA, OOP, C/C++, Python, JavaScript, HTML, CSS, AI & ML, APIs & Networking, Build Tools, Accessibility, Web Security, Performance, PWA & Mobile, Git/CI/CD/Deployment. **3,746 terms**, each with a one-liner. Every term card has the tabs **Learn · Syntax & Code · Interview Q&A · Coding Qs**. |
| **Mock** | Quick offline MCQs (timed + review), **AI mock** (MCQ / university exam pattern / interview theory / coding round, any subject or semester), **company patterns** (TCS, Infosys, Wipro, Accenture, Amazon, Google…), flashcards. |
| **AI Mentor** | Gemini-powered tutor: doubts, numericals, study plans; every answer links to the right term cards. Works as offline search without a key. |
| **News** | Live trending articles (DEV.to) by topic + a release watch (C23, C++26, Python 3.14, ES2025…). |
| **Progress** | Mastered terms per semester/track, streak, mock history, “revise next”, saved terms, settings, export/import progress. |

**Full lessons:** Semester 1 C Programming core, core DSA and OOP terms are fully written. Every other term has a **✦ Generate full lesson** button: Gemini writes the complete card (explanation, syntax/code, interview Q&A, coding questions) and it is saved on the device.

---

## 1. Run it on the laptop (VS Code — Supriya profile)

1. Install **Node.js 20 or 22 LTS** from nodejs.org (check: `node -v`).
2. Open this `studyedge` folder in VS Code, open the terminal (**Ctrl + `**):
   ```bash
   npm install
   npm run dev
   ```
   Open http://localhost:5173. (AI Mentor/News show “offline” here — that's expected.)
3. To test AI locally: create a file **`.env.local`** next to `package.json`:
   ```
   GEMINI_API_KEY=AIza...your key...
   ```
   then run `npm i -g vercel` and `vercel dev` → open http://localhost:3000.

**Gemini key:** https://aistudio.google.com/apikey → *Create API key* → copy it (starts with `AIza`). Never paste it in code or commit it — `.env.local` is already in `.gitignore`.

## 2. Push to Supriya's GitHub (supriya-suman)

1. In the browser (logged in as **supriya-suman**): github.com → **New repository** → name `studyedge` → Public or Private → **don't** add README → *Create*.
2. In the VS Code terminal inside the project folder — set Supriya's identity **for this repo only** (this folder is outside her `GitCommits` folder, so the automatic identity rule may not apply):
   ```bash
   git init
   git config user.name "supriya-suman"
   git config user.email "<Supriya's GitHub email>"
   git add .
   git commit -m "StudyEdge: B.Tech CSE (AI) study app"
   git branch -M main
   git remote add origin https://github.com/supriya-suman/studyedge.git
   git push -u origin main
   ```
3. If the push asks to sign in (or pushes as the wrong account), sign in as **supriya-suman** in the Git Credential Manager pop-up. If Windows already remembers another account: *Control Panel → Credential Manager → Windows Credentials →* remove `git:https://github.com`, then push again.

## 3. Deploy on Vercel

1. vercel.com → sign up/log in **with GitHub (supriya-suman)**.
2. **Add New → Project** → import `studyedge`. Framework: **Vite** (auto-detected). Build `npm run build`, output `dist`.
3. **Environment Variables:** add `GEMINI_API_KEY` = your key. (Optional `GEMINI_MODEL` if Google renames models; default tries `gemini-flash-latest`, then `gemini-2.5-flash`.)
4. **Deploy.** You get a URL like `https://studyedge-xxxx.vercel.app`. Every future `git push` redeploys automatically.

## 4. Install on phone and laptop

- **Android (Chrome):** open the URL → tap **⇩ Install app** on the home screen (or ⋮ → *Install app*).
- **iPhone (Safari):** Share → **Add to Home Screen**.
- **Windows/Mac (Chrome or Edge):** click the install icon in the address bar (or ⋮ → *Install StudyEdge*). It opens in its own window like a desktop app.
- Works offline for all written content after the first visit. Progress is stored per device — use **Progress → Export / Import** to move it.

## 5. Optional: Play Store / App Store

- **Play Store:** https://www.pwabuilder.com → enter the Vercel URL → Android package (TWA) → upload the `.aab` in Play Console (one-time $25 fee); put the generated `assetlinks.json` in `public/.well-known/`.
- **App Store:** wrap with Capacitor (`npm i @capacitor/core @capacitor/cli @capacitor/ios`, `npx cap init`, `npx cap add ios`, `webDir: "dist"`), build in Xcode on a Mac (Apple Developer account needed).

---

## Adding or editing content

- Syllabus terms: `src/data/sem/sem1.js … sem8.js` and `src/data/skills/*.js` — format `['key', 'Name', 'One-liner', 'optional.alias-id']`.
- Full lessons: `src/data/lessons/*.js` — keyed by term id (`'c-prog.pointers'`). Copy an existing lesson as a template.
- Offline MCQs & company profiles: `src/data/mock.js`.
- New files are picked up automatically.

**Before sharing the URL publicly,** add rate limiting to `api/chat.js` (e.g. Upstash Redis or Vercel Firewall rules) so nobody can run up the Gemini bill. Company round patterns are commonly reported ones and change often.
