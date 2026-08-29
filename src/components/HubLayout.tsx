import { Schema } from './Schema';
import { Breadcrumb } from './Breadcrumb';
import { TableOfContents } from './TableOfContents';
import { ClusterGrid } from './ClusterGrid';
import { AuthorityBridge } from './AuthorityBridge';
import { FaqSection } from './FaqSection';
import { CtaBlock } from './CtaBlock';
import { RelatedSection } from './RelatedSection';
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
        <div className="wrap wrap-narrow">
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

          <TableOfContents items={toc} variant="inline" />

          <div
            className="article-body"
            dangerouslySetInnerHTML={{ __html: content.html }}
          />

          {/* Strategic Authority Bridge to wahanatotalita.com */}
          <AuthorityBridge currentTopic={page.h1} category={hubName} />

          {/* Complete Cluster Curriculum Grid */}
          <ClusterGrid hubSlug={page.hub} />

          <FaqSection items={content.faq} />

          <CtaBlock />

          <RelatedSection page={page} />

          <ChainNav page={page} />
        </div>
      </article>
    </>
  );
}
