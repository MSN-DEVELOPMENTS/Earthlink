# Blog + Sanity guide

This explains how the blog works, how to connect Sanity (the CMS), and how
anyone on the team can write and publish a blog post — no coding required.

---

## 1. How the blog works now

- The blog lives at **`/blog`** (the listing) and each article at **`/blog/<slug>`**.
- Two articles are already published and live:
  - `/blog/dubai-real-estate-market-report-2026`
  - `/blog/is-dubai-real-estate-in-a-bubble`
- Right now those two come from **built-in content** shipped with the site
  (`lib/data.ts`). This is the safety net so the blog always works.
- The blog is **Sanity-ready**: the moment you connect a Sanity project (below)
  and publish posts in it, **Sanity becomes the source of truth** and the
  built-in two are no longer shown. Until then, the built-in two display.

So: connecting Sanity is what lets your team add/edit blogs themselves, in a
friendly editor, without touching code.

---

## 2. Connect Sanity (one-time setup)

You don't have a Sanity project yet. Here's how to create and connect one.

1. **Create a project** at <https://www.sanity.io> (free tier is fine).
   Note the **Project ID** it gives you and the dataset name (use `production`).

2. **Add the keys** to the site. Create a file named **`.env.local`** in the
   project root (copy `.env.local.example`) and fill in:

   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=your_read_token   # optional; only needed for private datasets
   ```

3. **Allow the Studio URL.** In the Sanity project dashboard → API →
   **CORS origins**, add `http://localhost:3000` (for local) and your live
   site URL (e.g. `https://eregroup.ae`). Tick "Allow credentials".

4. **Restart** the dev server (`npm run dev`). That's it — the site now reads
   blogs from Sanity.

The blog post **content type** (title, slug, cover image, body, FAQs, SEO
fields) is already built into the project, so it shows up in the Studio
automatically.

---

## 3. How to add a blog post (the part your team uses every day)

1. Go to the **Studio** at **`/studio`** on the site (e.g.
   `https://eregroup.ae/studio`). Log in with your Sanity account.

2. Click **"Blog Post" → "Create new"**.

3. Fill in the fields:
   - **Title** — the headline.
   - **Slug** — click **Generate** to build the URL from the title (this is
     what appears after `/blog/`).
   - **Category** — pick one of the four (Market Intelligence, Neighbourhood
     Guides, Investor Notes, Buyer & Tenant Guides).
   - **Excerpt** — 1–2 sentence summary. Shows on the blog listing card.
   - **Cover image** — upload a **landscape, high-resolution photo (2400px wide
     or more)** for best 4K quality. You can drag to set the focal point.
     Add **Alt text** describing the image.
   - **Body** — write the article. Use **Normal** text for paragraphs,
     **H2** for section headings, and the **bullet-list** button for lists.
     Select text and use **Bold** / link buttons as needed.
   - **FAQs** — optional. Add question/answer pairs; they show in a styled
     section at the end of the article.
   - **SEO title** and **Meta description** — optional overrides for Google.
     Keep the SEO title under ~60 characters and the description under ~160.

4. Click **Publish**. The article appears on `/blog` immediately (it may take a
   few seconds, or a redeploy on production).

That's the whole workflow. No code, no developer needed.

---

## 4. Images — getting the best Dubai 4K look

- Always upload **landscape** photos at **2400px wide or larger**. Sanity and
  the site automatically generate smaller responsive sizes; starting from a big,
  sharp source is what keeps it crisp on 4K screens.
- Free, commercial-use Dubai photos: <https://unsplash.com/s/photos/dubai>.
  The two built-in articles use Unsplash Dubai skyline shots as their covers;
  you can replace them with your own once Sanity is connected.

---

## 5. The two existing articles

They are currently built-in. Once Sanity is connected, recreate them in the
Studio (copy the text from `lib/data.ts`, or ask the developer to import them)
so they live alongside any new posts you write. Their slugs cross-link to each
other, so keep the slugs the same:

- `dubai-real-estate-market-report-2026`
- `is-dubai-real-estate-in-a-bubble`
