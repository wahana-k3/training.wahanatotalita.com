import Link from 'next/link';
import { Schema } from './Schema';
import { Breadcrumb } from './Breadcrumb';
import { TableOfContents } from './TableOfContents';
import { FaqSection } from './FaqSection';
import { CtaBlock } from './CtaBlock';
import { RelatedSection } from './RelatedSection';
import { AuthorBox } from './AuthorBox';
import { ChainNav } from './ChainNav';
import { SITE, buildToc, imgPath, pageUrl, tglId, waUrl } from '@/lib/site';
import { PageContentData, PageMeta } from '@/lib/types';

interface ArticleLayoutProps {
  page: PageMeta;
  content: PageContentData;
}

export function ArticleLayout({ page, content }: ArticleLayoutProps) {
  const toc = buildToc(content.html);
  const hubKey = SITE.hubPages[page.hub];
  const hubName = SITE.hubNames[page.hub];

  // Calculate estimated reading time (approx 200 words per minute)
  const wordCount = content.html.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
  const readTimeMinutes = Math.max(3, Math.ceil(wordCount / 200));

  return (
    <>
      <Schema page={page} faq={content.faq} updated={content.updated} />

      <article className="editorial-layout">
        <div className="wrap-editorial">
          {/* Breadcrumbs */}
          <Breadcrumb page={page} />

          {/* Article Header */}
          <header className="editorial-header">
            <div className="editorial-badge-row">
              {hubKey && (
                <Link href={pageUrl(hubKey)} className="pillar-badge">
                  <span>📁 {hubName}</span>
                </Link>
              )}
              <span className="read-time-badge">⏱️ ±{readTimeMinutes} menit membaca</span>
            </div>

            <h1>{page.h1}</h1>

            <div className="editorial-meta-bar">
              {content.updated && (
                <span>
                  Diperbarui: <time dateTime={content.updated}>{tglId(content.updated)}</time>
                </span>
              )}
              <span>·</span>
              <span>
                Penyusun: <strong className="editorial-author">{SITE.orgName}</strong>
              </span>
              <span>·</span>
              <span>Kategori: Pelatihan Korporat</span>
            </div>
          </header>

          {/* Featured Image */}
          <figure className="article-hero-figure">
            <img
              src={imgPath(page.key)}
              alt={page.img_alt || page.h1}
              width={960}
              height={480}
              loading="eager"
              fetchPriority="high"
            />
          </figure>

          {/* 2-Column Editorial Grid on Desktop */}
          <div className="editorial-grid">
            <div className="editorial-main">
              {/* Mobile / Inline TOC */}
              <TableOfContents items={toc} variant="inline" />

              {/* Main Content Body */}
              <div
                className="article-body"
                dangerouslySetInnerHTML={{ __html: content.html }}
              />

              {/* FAQ Accordion */}
              <FaqSection items={content.faq} />

              {/* CTA Consultation Banner */}
              <CtaBlock />

              {/* Recommended Related Articles */}
              <RelatedSection page={page} />

              {/* E-E-A-T Author & Organization Trust Box */}
              <AuthorBox />

              {/* Closed-Loop Prev/Next Crawler Navigator */}
              <ChainNav page={page} />
            </div>

            {/* Desktop Sticky Sidebar */}
            <aside className="editorial-sidebar" aria-label="Navigasi cepat dan bantuan">
              <TableOfContents items={toc} variant="sidebar" />

              <div className="sidebar-box" style={{ background: 'linear-gradient(145deg, #0a4444 0%, #052424 100%)', color: '#ffffff' }}>
                <h3 className="sidebar-box-title" style={{ color: '#ffffff', borderColor: 'rgba(255,255,255,0.15)' }}>
                  Konsultasi Program
                </h3>
                <p style={{ fontSize: '0.88rem', color: '#d1e7e5', marginBottom: '0.9rem', lineHeight: 1.5 }}>
                  Butuh rekomendasi modul in-house atau TNA untuk perusahaan Anda?
                </p>
                <a
                  className="btn btn-wa"
                  style={{ width: '100%', fontSize: '0.88rem', padding: '0.6em 0.8em' }}
                  href={waUrl(`Halo, saya membaca panduan "${page.h1}" dan ingin konsultasi program pelatihan.`)}
                  target="_blank"
                  rel="noopener"
                >
                  Tanya via WhatsApp
                </a>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </>
  );
}
