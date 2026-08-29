import { notFound } from 'next/navigation';
import { generatePageMetadata } from '@/lib/metadata';
import { getPageMeta } from '@/lib/site';
import { getPageContent } from '@/content';
import { PageRenderer } from '@/components/PageRenderer';

export function generateMetadata() {
  return generatePageMetadata('home');
}

export default async function HomePage() {
  const page = getPageMeta('home');
  const content = await getPageContent('home');

  if (!page || !content) {
    notFound();
  }

  return <PageRenderer page={page} content={content} />;
}
