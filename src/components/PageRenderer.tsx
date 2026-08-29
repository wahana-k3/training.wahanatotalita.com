import { ArticleLayout } from './ArticleLayout';
import { HubLayout } from './HubLayout';
import { MoneyLayout } from './MoneyLayout';
import { UtilityLayout } from './UtilityLayout';
import { PageContentData, PageMeta } from '@/lib/types';

interface PageRendererProps {
  page: PageMeta;
  content: PageContentData;
}

export function PageRenderer({ page, content }: PageRendererProps) {
  switch (page.type) {
    case 'money':
      return <MoneyLayout page={page} content={content} />;
    case 'hub':
      return <HubLayout page={page} content={content} />;
    case 'utility':
      return <UtilityLayout page={page} content={content} />;
    case 'article':
    default:
      return <ArticleLayout page={page} content={content} />;
  }
}
