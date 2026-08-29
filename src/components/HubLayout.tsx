import { Schema } from './Schema';
import { Breadcrumb } from './Breadcrumb';
import { TableOfContents } from './TableOfContents';
import { ClusterGrid } from './ClusterGrid';
import { FaqSection } from './FaqSection';
import { CtaBlock } from './CtaBlock';
import { RelatedSection } from './RelatedSection';
import { ChainNav } from './ChainNav';
import { buildToc, imgPath, tglId } from '@/lib/site';
import { PageContentData, PageMeta } from '@/lib/types';

interface HubLayoutProps {
  page: PageMeta;
  content: PageContentData;
}

export function HubLayout({ page, content }: HubLayoutProps) {
  const toc = buildToc(content.html);

  return (
    <>
      <Schema page={page} faq={content.faq} updated={content.updated} />
      <article className="article hub-page">
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

          <figure className="article-figure">
            <img
              src={imgPath(page.key)}
              alt={page.img_alt || page.h1}
              width={960}
              height={480}
              loading="eager"
              fetchPriority="high"
            />
          </figure>

          <TableOfContents items={toc} />

          <div
            className="article-body"
            dangerouslySetInnerHTML={{ __html: content.html }}
          />

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
