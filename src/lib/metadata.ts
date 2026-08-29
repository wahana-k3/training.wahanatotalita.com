import { Metadata } from 'next';
import { SITE, fullImgUrl, fullPageUrl, getPageMeta } from './site';

export function generatePageMetadata(key: string): Metadata {
  const page = getPageMeta(key);
  if (!page) {
    return {
      title: `${SITE.siteName} — ${SITE.tagline}`,
      description: SITE.tagline,
    };
  }

  const url = fullPageUrl(page.key);
  const imgUrl = fullImgUrl(page.key);
  const fullTitle = `${page.title} | ${SITE.siteName}`;

  return {
    title: fullTitle,
    description: page.meta,
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
    openGraph: {
      locale: 'id_ID',
      type: page.type === 'money' ? 'website' : 'article',
      siteName: SITE.siteName,
      title: page.title,
      description: page.meta,
      url,
      images: [
        {
          url: imgUrl,
          alt: page.img_alt || page.h1,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.meta,
      images: [imgUrl],
    },
    icons: {
      icon: [
        { url: '/assets/img/favicon-32.png', sizes: '32x32', type: 'image/png' },
        { url: '/assets/img/favicon-16.png', sizes: '16x16', type: 'image/png' },
      ],
      apple: [{ url: '/assets/img/favicon-180.png', sizes: '180x180' }],
    },
  };
}
