# ✦ Portfolio Template

A premium, dark-themed portfolio template built with **Next.js 16**, **TypeScript**, **Tailwind CSS 4**, and **Framer Motion**. Designed for creative developers, designers, and freelancers.

---

## ⚡ Quick Start

```bash
npm install
npm run dev
# Open http://localhost:3000
```

---

## 🎨 Customization Guide

All content lives in the **`/src/data/`** directory. Edit these files — never touch components.

### 1. Your Profile — `data/profile.ts`

| Field | What it controls |
|---|---|
| `name` | Hero, navbar, footer |
| `role` | Hero subtitle |
| `bio` | Hero intro text |
| `email` | Contact + footer |
| `location` / `availability` | Footer office info |
| `avatarUrl` | FAQ section portrait |
| `social.*` | Social links everywhere (empty = hidden) |
| `about.paragraphs` | About section bio paragraphs |
| `about.values` | About section value cards |

### 2. Site Settings — `data/site.ts`

| Field | What it controls |
|---|---|
| `navLinks` | Navigation bar links |
| `heroCta` | Hero call-to-action button |
| `stats` | Stats bar below hero |
| `contact.heading/subtitle` | Contact section copy |
| `footerVariant` | `"expanded"` (full) or `"minimal"` (compact) |
| `footer.ctaHeading/copyright` | Footer text |
| `footer.links` | Footer legal links |

### 3. Theme Colors — `data/theme.ts`

```ts
primaryColor: "#ffffff",      // Main text
accentColor: "#6366f1",       // Accent highlights
backgroundColor: "#050505",   // Page background
accentGradientFrom: "#0099ff", // Gradient start
accentGradientTo: "#a855f7",   // Gradient end
```

### 4. Projects — `data/projects.json`

Each project has a **detail page** at `/projects/[slug]`:

```json
{
    "slug": "my-project",
    "title": "My Project",
    "description": "Short card description",
    "longDescription": "Full case study text shown on detail page",
    "image": "/assets/projects/my-project.jpg",
    "tags": ["React", "Next.js"],
    "features": ["Feature 1", "Feature 2"],
    "link": "https://github.com/...",
    "liveUrl": "https://myproject.com",
    "year": "2024"
}
```

### 5. Other Data Files

| File | Section |
|---|---|
| `data/experience.json` | Experience timeline |
| `data/skills.json` | Skills grid |
| `data/faq.json` | FAQ accordion |
| `data/testimonials.json` | Testimonials marquee |

> **Tip:** Empty any array to hide that section automatically.

### 6. Images

| Path | Purpose |
|---|---|
| `public/assets/profile/avatar.png` | Portrait photo |
| `public/assets/projects/` | Project screenshots |
| `public/assets/logos/` | Your logo (optional) |

### 7. Footer Variants

In `data/site.ts`, set `footerVariant`:
- `"expanded"` — full footer with CTA, social links, office info (default)
- `"minimal"` — compact single-line footer

### 8. Fonts

Update Google Font imports in `src/app/layout.tsx`, then reference them in `data/theme.ts`.

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout + theme injection
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles + CSS variables
│   └── projects/[slug]/    # Project detail pages
│       └── page.tsx
├── data/                   # ✏️ EDIT THESE FILES
│   ├── profile.ts          # Identity, bio, social links
│   ├── site.ts             # Nav, stats, footer, contact
│   ├── theme.ts            # Colors, gradients, fonts
│   ├── projects.json       # Portfolio projects
│   ├── experience.json     # Work history
│   ├── skills.json         # Skills grid
│   ├── faq.json            # FAQ items
│   └── testimonials.json   # Client testimonials
├── config/                 # Re-exports (backward compat)
├── components/
│   ├── layout/             # Navbar, Footer, Section
│   ├── sections/           # Hero, About, Projects, etc.
│   └── ui/                 # Button, Input, Preloader, etc.
└── lib/                    # Utilities
```

---

## ✨ Premium Features

- **Animated Preloader** — sleek loading screen with name reveal
- **Custom Cursor** — smooth-following circle, scales on hover
- **Scroll Progress Bar** — gradient line at top of page
- **Testimonials Marquee** — infinite horizontal scroll
- **Project Detail Pages** — `/projects/[slug]` case studies
- **Tag Filters** — filter projects by technology
- **Footer Variants** — expanded or minimal layout
- **Noise Texture** — subtle grain overlay for depth
- **Interactive Globe** — 3D globe in hero section
- **Empty State Handling** — sections auto-hide when data is empty

---

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import in [vercel.com](https://vercel.com)
3. Deploy — zero config

### Netlify
1. Build command: `npm run build`
2. Publish directory: `.next`

---

## 🛠 Tech Stack

- **Next.js 16** — React framework with App Router
- **TypeScript** — Type safety
- **Tailwind CSS 4** — Utility-first styling
- **Framer Motion** — Smooth animations
- **Cobe** — Interactive 3D globe
- **Lucide Icons** — Icon library

---

## 📄 License

Licensed for personal and commercial use. You may use it for your own portfolio or client projects. Redistribution or resale of the template itself is not permitted.
