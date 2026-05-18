# My Site

Personal website built with [Astro](https://astro.build) and deployed to GitHub Pages.

## ✏️ How to update content

You only ever need to edit markdown files. No code required.

### English content

| Page | File |
|---|---|
| About | `src/content/about.md` |
| CV | `src/content/cv.md` |
| Gallery | `src/content/gallery.md` |
| New blog post | Add a `.md` to `src/content/blog/` |

### Turkish content (`/tr/...`)

| Page | File |
|---|---|
| About | `src/content/tr/about.md` |
| CV | `src/content/tr/cv.md` |
| Gallery | `src/content/tr/gallery.md` |
| New blog post | Add a `.md` to `src/content/tr/blog/` |

A **TR / EN** button in the nav switches between languages, linking to the equivalent page automatically.

---

## 📝 Blog post format

Create a file in `src/content/blog/your-post-title.md`:

```markdown
---
title: Your Post Title
date: 2026-05-18
description: One sentence shown on the blog index.
---

Your post content here in Markdown.
```

The filename becomes the URL slug: `your-post-title.md` → `/blog/your-post-title/`

---

## 🖼️ Gallery

1. Put images in `public/images/gallery/`
2. Edit `src/content/gallery.md` and list them:

```yaml
---
- src: images/gallery/my-photo.jpg
  caption: Optional caption shown on hover
---
```

---

## 🚀 Setup (one-time)

1. **Fork or clone** this repo to your GitHub account.
2. Edit `astro.config.mjs`:
   - Set `site` to `https://YOUR-USERNAME.github.io`
   - Set `base` to `/YOUR-REPO-NAME`
   - (If using a custom domain: set `site` to your domain, remove `base`)
3. In GitHub repo settings → **Pages** → Source: **GitHub Actions**
4. Push to `main` — done!

---

## 🔧 Local preview (optional)

```bash
npm install
npm run dev
```
