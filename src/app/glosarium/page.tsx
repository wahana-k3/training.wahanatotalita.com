import { notFound } from 'next/navigation';
import { generatePageMetadata } from '@/lib/metadata';
import { getPageMeta } from '@/lib/site';
import { getPageContent } from '@/content';
import { PageRenderer } from '@/components/PageRenderer';

export function generateMetadata() {
  return generatePageMetadata('glosarium');
}

export default async function GlosariumPage() {
  const page = getPageMeta('glosarium');
  const content = await getPageContent('glosarium');

  if (!page || !content) {
    notFound();
  }

  return <PageRenderer page={page} content={content} />;
}
