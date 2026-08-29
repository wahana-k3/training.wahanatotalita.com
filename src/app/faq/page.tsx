import { notFound } from 'next/navigation';
import { generatePageMetadata } from '@/lib/metadata';
import { getPageMeta } from '@/lib/site';
import { getPageContent } from '@/content';
import { PageRenderer } from '@/components/PageRenderer';

export function generateMetadata() {
  return generatePageMetadata('faq');
}

export default async function FaqPage() {
  const page = getPageMeta('faq');
  const content = await getPageContent('faq');

  if (!page || !content) {
    notFound();
  }

  return <PageRenderer page={page} content={content} />;
}
