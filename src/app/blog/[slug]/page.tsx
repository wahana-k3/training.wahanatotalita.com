import { notFound } from 'next/navigation';
import { generatePageMetadata } from '@/lib/metadata';
import { allLivePages, getPageMeta } from '@/lib/site';
import { getPageContent } from '@/content';
import { PageRenderer } from '@/components/PageRenderer';

interface BlogArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allLivePages
    .filter((p) => p.hub === 'blog' && p.type === 'article')
    .map((p) => ({
      slug: p.key.replace(/^blog\//, ''),
    }));
}

export async function generateMetadata({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  return generatePageMetadata(slug);
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const page = getPageMeta(slug);
  const content = await getPageContent(slug);

  if (!page || !content) {
    notFound();
  }

  return <PageRenderer page={page} content={content} />;
}
