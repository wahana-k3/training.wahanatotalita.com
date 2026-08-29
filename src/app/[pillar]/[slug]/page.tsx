import { notFound } from 'next/navigation';
import { generatePageMetadata } from '@/lib/metadata';
import { allLivePages, getPageMeta } from '@/lib/site';
import { getPageContent } from '@/content';
import { PageRenderer } from '@/components/PageRenderer';

interface PillarArticlePageProps {
  params: Promise<{ pillar: string; slug: string }>;
}

const PILLAR_KEYS = [
  'jenis-pelatihan',
  'industri',
  'peran-jabatan',
  'kategori-pelatihan',
  'konsultasi-pengembangan-kompetensi',
];

export async function generateStaticParams() {
  const articlePages = allLivePages.filter((p) => {
    if (p.type !== 'article') return false;
    const parts = p.path.replace(/\/$/, '').split('/');
    return parts.length === 2 && PILLAR_KEYS.includes(parts[0]);
  });

  return articlePages.map((p) => {
    const parts = p.path.replace(/\/$/, '').split('/');
    return {
      pillar: parts[0],
      slug: parts[1],
    };
  });
}

export async function generateMetadata({ params }: PillarArticlePageProps) {
  const { slug } = await params;
  return generatePageMetadata(slug);
}

export default async function PillarArticlePage({
  params,
}: PillarArticlePageProps) {
  const { pillar, slug } = await params;
  const page = getPageMeta(slug);

  if (!page || page.hub !== pillar) {
    notFound();
  }

  const content = await getPageContent(slug);
  if (!content) {
    notFound();
  }

  return <PageRenderer page={page} content={content} />;
}
