import { notFound } from 'next/navigation';
import { generatePageMetadata } from '@/lib/metadata';
import { getPageMeta } from '@/lib/site';
import { getPageContent } from '@/content';
import { PageRenderer } from '@/components/PageRenderer';

export function generateMetadata() {
  return generatePageMetadata('blog');
}

export default async function BlogPage() {
  const page = getPageMeta('blog');
  const content = await getPageContent('blog');

  if (!page || !content) {
    notFound();
  }

  return <PageRenderer page={page} content={content} />;
}
