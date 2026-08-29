# training.wahanatotalita.com — Next.js Enterprise Hub

Official Next.js production platform for **training.wahanatotalita.com** (Pelatihan Korporat Indonesia), managed by **Wahana Totalita Konsultan**.

---

## 🏗️ Architecture & Core Principles

1. **Zero SEO Drift Migration**:
   - 100% parity with legacy PHP URLs, slugs, canonical tags, H1/H2/H3 tags, title tags, meta descriptions, image alt texts, OpenGraph/Twitter cards, and JSON-LD schema graphs.
   - Preserves all 37 pillar, cluster, utility, and conversion pages.
2. **Individual Content Modules**:
   - Each page has its own dedicated content file in `src/content/pages/[key].ts`.
   - Scalable to 1,000+ individual high-quality articles without monolithic files.
   - Zero programmatic keyword-swapping or thin templated content.
3. **Master Topic Queue (`content/topic-queue.json`)**:
   - Central publishing registry and status tracker.
   - Contains:
     - `sections.live`: Array of all currently live pages.
     - `sections.next_batch`: Array of approved topics ready for the next writing cycle.
     - `sections.backlog`: Unscheduled future ideas.

---

## 🚦 Permanent Quality & Safety Gate

Before any commit or push, run:

```bash
npm run validate
npm run build
```

The validation pipeline enforces:
- **Topic Queue Integrity**: Checks that all live pages and next batch arrays are well-formed.
- **Duplicate Prevention**: Guarantees zero duplicate keys, paths, or canonical URLs.
- **Metadata Parity**: Validates that all pages have non-empty titles, descriptions, H1 headings, and valid canonical URLs.
- **Broken Link Scanner**: Verifies every internal link resolves to an existing page.
- **Sitemap & Robots Coverage**: Confirms sitemap.xml includes all 37 pages and robots.txt protects thank-you pages.
- **TypeScript & SSG Verification**: Guarantees zero build errors.

---

## 🔄 Future Batch Workflow

When adding new high-quality articles:

1. **Add Approved Topics to Queue**: Add 10 topics to `content/topic-queue.json` under `sections.next_batch`.
2. **Execute Writing & Development**: Research and write each individual article into `src/content/pages/[slug].ts`.
3. **Run Safety Gate**: Run `npm run validate && npm run build`.
4. **Deploy**: Update status from `next_batch` to `live` in `content/topic-queue.json` and push to GitHub.

---

## 💻 Tech Stack

- **Framework**: Next.js 15 (App Router, Server Components)
- **Language**: TypeScript
- **UI & Styling**: Vanilla CSS tokens matching corporate brand design
- **Deployment**: Vercel ready
