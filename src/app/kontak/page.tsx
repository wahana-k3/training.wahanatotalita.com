import { notFound } from 'next/navigation';
import { generatePageMetadata } from '@/lib/metadata';
import { getPageMeta } from '@/lib/site';
import { getPageContent } from '@/content';
import { PageRenderer } from '@/components/PageRenderer';

export function generateMetadata() {
  return generatePageMetadata('kontak');
}

export default async function KontakPage() {
  const page = getPageMeta('kontak');
  const content = await getPageContent('kontak');

  if (!page || !content) {
    notFound();
  }

  return <PageRenderer page={page} content={content} />;
}
