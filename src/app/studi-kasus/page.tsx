import { notFound } from 'next/navigation';
import { generatePageMetadata } from '@/lib/metadata';
import { getPageMeta } from '@/lib/site';
import { getPageContent } from '@/content';
import { PageRenderer } from '@/components/PageRenderer';

export function generateMetadata() {
  return generatePageMetadata('studi-kasus');
}

export default async function StudiKasusPage() {
  const page = getPageMeta('studi-kasus');
  const content = await getPageContent('studi-kasus');

  if (!page || !content) {
    notFound();
  }

  return <PageRenderer page={page} content={content} />;
}
