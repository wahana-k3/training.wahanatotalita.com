import { notFound } from 'next/navigation';
import { generatePageMetadata } from '@/lib/metadata';
import { allLivePages, getPageMeta } from '@/lib/site';
import { getPageContent } from '@/content';
import { PageRenderer } from '@/components/PageRenderer';

interface PillarPageProps {
  params: Promise<{ pillar: string }>;
}

const PILLAR_KEYS = [
  'jenis-pelatihan',
  'industri',
  'peran-jabatan',
  'kategori-pelatihan',
  'konsultasi-pengembangan-kompetensi',
];

export async function generateStaticParams() {
  return PILLAR_KEYS.map((pillar) => ({ pillar }));
}

export async function generateMetadata({ params }: PillarPageProps) {
  const { pillar } = await params;
  return generatePageMetadata(pillar);
}

export default async function PillarPage({ params }: PillarPageProps) {
  const { pillar } = await params;

  if (!PILLAR_KEYS.includes(pillar)) {
    notFound();
  }

  const page = getPageMeta(pillar);
  const content = await getPageContent(pillar);

  if (!page || !content) {
    notFound();
  }

  return <PageRenderer page={page} content={content} />;
}
