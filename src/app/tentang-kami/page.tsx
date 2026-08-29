import { notFound } from 'next/navigation';
import { generatePageMetadata } from '@/lib/metadata';
import { getPageMeta } from '@/lib/site';
import { getPageContent } from '@/content';
import { PageRenderer } from '@/components/PageRenderer';

export function generateMetadata() {
  return generatePageMetadata('tentang-kami');
}

export default async function TentangKamiPage() {
  const page = getPageMeta('tentang-kami');
  const content = await getPageContent('tentang-kami');

  if (!page || !content) {
    notFound();
  }

  return <PageRenderer page={page} content={content} />;
}
