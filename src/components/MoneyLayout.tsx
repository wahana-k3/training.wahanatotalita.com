import { Schema } from './Schema';
import { Breadcrumb } from './Breadcrumb';
import { FaqSection } from './FaqSection';
import { RelatedSection } from './RelatedSection';
import { ChainNav } from './ChainNav';
import { PageContentData, PageMeta } from '@/lib/types';

interface MoneyLayoutProps {
  page: PageMeta;
  content: PageContentData;
}

export function MoneyLayout({ page, content }: MoneyLayoutProps) {
  const isHome = page.key === 'home';

  return (
    <>
      <Schema page={page} faq={content.faq} updated={content.updated} />
      <div className={`money ${isHome ? 'is-home' : ''}`}>
        {!isHome && (
          <div className="wrap wrap-narrow">
            <Breadcrumb page={page} />
          </div>
        )}

        <div dangerouslySetInnerHTML={{ __html: content.html }} />

        <div className="wrap wrap-narrow">
          <FaqSection items={content.faq} />
          <RelatedSection page={page} />
          <ChainNav page={page} />
        </div>
      </div>
    </>
  );
}
