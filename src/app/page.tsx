import type { Metadata } from 'next';
import { getPageMeta } from '@/lib/site';
import { getPageContent } from '@/content';
import { Schema } from '@/components/Schema';
import { HomePortal } from '@/components/HomePortal';

import { generatePageMetadata } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata('home');

export default async function HomePage() {
  const meta = getPageMeta('home');
  const content = await getPageContent('home');

  if (!meta || !content) {
    return null;
  }

  return (
    <>
      <Schema page={meta} faq={content.faq} updated={content.updated} />
      <HomePortal faq={content.faq} />
    </>
  );
}
