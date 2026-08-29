import { Schema } from './Schema';
import { Breadcrumb } from './Breadcrumb';
import { TableOfContents } from './TableOfContents';
import { FaqSection } from './FaqSection';
import { RelatedSection } from './RelatedSection';
import { buildToc, tglId } from '@/lib/site';
import { PageContentData, PageMeta } from '@/lib/types';

interface UtilityLayoutProps {
  page: PageMeta;
  content: PageContentData;
}

export function UtilityLayout({ page, content }: UtilityLayoutProps) {
  const toc = buildToc(content.html);

  return (
    <>
      <Schema page={page} faq={content.faq} updated={content.updated} />
      <article className="editorial-layout utility-page">
        <div className="wrap wrap-narrow">
          <Breadcrumb page={page} />

          <header className="editorial-header">
            <div className="editorial-badge-row">
              <span className="pillar-badge">
                📖 Pusat Informasi &amp; Referensi
              </span>
            </div>

            <h1>{page.h1}</h1>

            {content.updated && (
              <div className="editorial-meta-bar">
                <span>
                  Diperbarui: <time dateTime={content.updated}>{tglId(content.updated)}</time>
                </span>
              </div>
            )}
          </header>

          <TableOfContents items={toc} variant="inline" />

          <div
            className="article-body"
            dangerouslySetInnerHTML={{ __html: content.html }}
          />

          <FaqSection items={content.faq} />

          <RelatedSection page={page} />
        </div>
      </article>
    </>
  );
}
