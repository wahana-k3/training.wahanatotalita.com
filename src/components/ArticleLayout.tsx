import { Schema } from './Schema';
import { Breadcrumb } from './Breadcrumb';
import { TableOfContents } from './TableOfContents';
import { FaqSection } from './FaqSection';
import { CtaBlock } from './CtaBlock';
import { RelatedSection } from './RelatedSection';
import { AuthorBox } from './AuthorBox';
import { ChainNav } from './ChainNav';
import { SITE, buildToc, imgPath, tglId } from '@/lib/site';
import { PageContentData, PageMeta } from '@/lib/types';

interface ArticleLayoutProps {
  page: PageMeta;
  content: PageContentData;
}

export function ArticleLayout({ page, content }: ArticleLayoutProps) {
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
                <time dateTime={content.updated}>
                  {tglId(content.updated)}
                </time>{' '}
                · Oleh <span className="article-author">{SITE.orgName}</span>
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

          <FaqSection items={content.faq} />

          <CtaBlock />

          <RelatedSection page={page} />

          <AuthorBox />

          <ChainNav page={page} />
        </div>
      </article>
    </>
  );
}
