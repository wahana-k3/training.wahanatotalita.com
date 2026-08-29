import { Schema } from './Schema';
import { Breadcrumb } from './Breadcrumb';
import { TableOfContents } from './TableOfContents';
import { KeyTakeaways } from './KeyTakeaways';
import { LeadHunterSidebar } from './LeadHunterSidebar';
import { ClusterGrid } from './ClusterGrid';
import { FaqSection } from './FaqSection';
import { CtaBlock } from './CtaBlock';
import { RelatedSection } from './RelatedSection';
import { AuthorBox } from './AuthorBox';
import { ChainNav } from './ChainNav';
import { SITE, buildToc, getHubChildren, imgPath, tglId } from '@/lib/site';
import { PageContentData, PageMeta } from '@/lib/types';

interface HubLayoutProps {
  page: PageMeta;
  content: PageContentData;
}

export function HubLayout({ page, content }: HubLayoutProps) {
  const toc = buildToc(content.html);
  const children = getHubChildren(page.hub);
  const hubName = SITE.hubNames[page.hub] || page.h1;

  return (
    <>
      <Schema page={page} faq={content.faq} updated={content.updated} />
      <article className="editorial-layout hub-page">
        <div className="wrap-editorial">
          {/* 2-Column Grid starting from the top to eliminate right-side whitespace */}
          <div className="editorial-grid">
            <div className="editorial-main">
              <Breadcrumb page={page} />

              <header className="editorial-header">
                <div className="editorial-badge-row">
                  <span className="pillar-badge">
                    🏛️ Pilar Utama
                  </span>
                  <span className="read-time-badge">
                    📚 {children.length} Panduan Komprehensif
                  </span>
                </div>

                <h1>{page.h1}</h1>

                <div className="editorial-meta-bar">
                  {content.updated && (
                    <span>
                      Diperbarui: <time dateTime={content.updated}>{tglId(content.updated)}</time>
                    </span>
                  )}
                  <span>·</span>
                  <span>Dikelola: <strong>{SITE.orgName}</strong></span>
                  <span>·</span>
                  <span>Kategori: Pelatihan Korporat &amp; K3</span>
                </div>
              </header>

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

              {/* Executive Summary Box */}
              <KeyTakeaways page={page} />

              {/* Mobile Table of Contents */}
              <TableOfContents items={toc} variant="inline" />

              {/* Main Hub Body */}
              <div
                className="article-body"
                dangerouslySetInnerHTML={{ __html: content.html }}
              />

              {/* Complete Cluster Curriculum Grid */}
              <ClusterGrid hubSlug={page.hub} />

              <FaqSection items={content.faq} />

              <CtaBlock />

              <RelatedSection page={page} />

              <AuthorBox />

              <ChainNav page={page} />
            </div>

            {/* Desktop Sticky Sidebar (Lead Hunter + TOC) starting from top */}
            <div className="editorial-sidebar">
              <LeadHunterSidebar pageTitle={page.h1} />
              <TableOfContents items={toc} variant="sidebar" />
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
