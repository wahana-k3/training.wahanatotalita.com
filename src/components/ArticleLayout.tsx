import Link from 'next/link';
import { Schema } from './Schema';
import { Breadcrumb } from './Breadcrumb';
import { TableOfContents } from './TableOfContents';
import { KeyTakeaways } from './KeyTakeaways';
import { LeadHunterSidebar } from './LeadHunterSidebar';
import { AuthorityBridge } from './AuthorityBridge';
import { FaqSection } from './FaqSection';
import { CtaBlock } from './CtaBlock';
import { RelatedSection } from './RelatedSection';
import { AuthorBox } from './AuthorBox';
import { ChainNav } from './ChainNav';
import { SITE, buildToc, imgPath, pageUrl, tglId } from '@/lib/site';
import { PageContentData, PageMeta } from '@/lib/types';

interface ArticleLayoutProps {
  page: PageMeta;
  content: PageContentData;
}

export function ArticleLayout({ page, content }: ArticleLayoutProps) {
  const toc = buildToc(content.html);
  const hubKey = SITE.hubPages[page.hub];
  const hubName = SITE.hubNames[page.hub];

  // Calculate estimated reading time
  const wordCount = content.html.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
  const readTimeMinutes = Math.max(3, Math.ceil(wordCount / 200));

  return (
    <>
      <Schema page={page} faq={content.faq} updated={content.updated} />

      <article className="editorial-layout">
        <div className="wrap-editorial">
          {/* 2-Column Grid starting from the very top to eliminate right whitespace */}
          <div className="editorial-grid">
            <div className="editorial-main">
              {/* Breadcrumb Trail */}
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
                  <span>Kategori: Pelatihan Korporat &amp; K3</span>
                </div>
              </header>

              {/* Featured Hero Visual */}
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

              {/* Executive Summary / Key Takeaways */}
              <KeyTakeaways page={page} />

              {/* Mobile / Inline TOC Switchboard */}
              <TableOfContents items={toc} variant="inline" />

              {/* Main Content Body */}
              <div
                className="article-body"
                dangerouslySetInnerHTML={{ __html: content.html }}
              />

              {/* Strategic Authority Bridge to wahanatotalita.com */}
              <AuthorityBridge currentTopic={page.h1} category={hubName} />

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

            {/* Desktop Sticky Sidebar starting at the top */}
            <div className="editorial-sidebar">
              {/* Sticky Lead Hunter */}
              <LeadHunterSidebar pageTitle={page.h1} />

              {/* Sticky Table of Contents Switch List */}
              <TableOfContents items={toc} variant="sidebar" />
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
