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
      <article className="article">
        <div className="wrap wrap-narrow">
          <Breadcrumb page={page} />

          <header className="article-head">
            <h1>{page.h1}</h1>
            {content.updated && (
              <p className="article-meta">
                Diperbarui:{' '}
                <time dateTime={content.updated}>{tglId(content.updated)}</time>
              </p>
            )}
          </header>

          <TableOfContents items={toc} />

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
