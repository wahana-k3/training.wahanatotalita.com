import { SITE, fullImgUrl, fullPageUrl, pageUrl } from '@/lib/site';
import { FaqItem, PageMeta } from '@/lib/types';

interface SchemaProps {
  page: PageMeta;
  faq?: FaqItem[];
  updated?: string | null;
}

export function Schema({ page, faq, updated }: SchemaProps) {
  const url = fullPageUrl(page.key);
  const imgUrl = fullImgUrl(page.key);
  const orgId = `${SITE.baseUrl}/#organization`;
  const siteId = `${SITE.baseUrl}/#website`;

  const graph: any[] = [];

  // Organization
  graph.push({
    '@type': 'Organization',
    '@id': orgId,
    name: SITE.orgName,
    url: SITE.orgUrl,
    email: SITE.email,
    telephone: `+${SITE.waNumber}`,
    foundingDate: '2010',
    numberOfEmployees: { '@type': 'QuantitativeValue', value: 25 },
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE.orgCity,
      addressRegion: SITE.orgRegion,
      addressCountry: SITE.orgCountry,
    },
    sameAs: [
      SITE.orgUrl,
      'https://ahlik3umum.wahanatotalita.com/',
      'https://smk3.wahanatotalita.com/',
    ],
    knowsAbout: [
      'Pelatihan Korporat',
      'Pengembangan Kompetensi SDM',
      'SMK3',
      'Training Needs Analysis',
      'Sertifikasi BNSP',
    ],
  });

  // WebSite
  graph.push({
    '@type': 'WebSite',
    '@id': siteId,
    name: `${SITE.siteName} — ${SITE.tagline}`,
    url: `${SITE.baseUrl}/`,
    inLanguage: 'id-ID',
    publisher: { '@id': orgId },
  });

  // Breadcrumbs
  const crumbs: any[] = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Beranda',
      item: `${SITE.baseUrl}/`,
    },
  ];

  let pos = 2;
  if (page.hub !== 'money' && page.hub !== 'utility' && page.type !== 'hub') {
    const hubKey = SITE.hubPages[page.hub];
    crumbs.push({
      '@type': 'ListItem',
      position: pos++,
      name: SITE.hubNames[page.hub],
      item: fullPageUrl(hubKey),
    });
  }

  if (page.key !== 'home') {
    crumbs.push({
      '@type': 'ListItem',
      position: pos,
      name: page.h1,
      item: url,
    });
  }

  graph.push({
    '@type': 'BreadcrumbList',
    '@id': `${url}#breadcrumb`,
    itemListElement: crumbs,
  });

  // ImageObject
  graph.push({
    '@type': 'ImageObject',
    '@id': `${url}#primaryimage`,
    url: imgUrl,
    caption: page.img_alt || page.h1,
  });

  // WebPage
  const webpage: any = {
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: page.title,
    description: page.meta,
    inLanguage: 'id-ID',
    isPartOf: { '@id': siteId },
    breadcrumb: { '@id': `${url}#breadcrumb` },
    primaryImageOfPage: { '@id': `${url}#primaryimage` },
  };

  if (page.type === 'hub' || page.type === 'money') {
    webpage.speakable = {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.section-lead', 'h1', '.article-body > p:first-child'],
    };
  }

  graph.push(webpage);

  // Article (non-money pages)
  if (page.type !== 'money') {
    const article: any = {
      '@type': 'Article',
      '@id': `${url}#article`,
      headline: page.h1,
      description: page.meta,
      inLanguage: 'id-ID',
      image: { '@id': `${url}#primaryimage` },
      author: { '@id': orgId },
      publisher: { '@id': orgId },
      mainEntityOfPage: { '@id': `${url}#webpage` },
    };

    if (page.published) {
      article.datePublished = page.published;
    }
    if (updated) {
      article.dateModified = updated;
    } else if (page.published) {
      article.dateModified = page.published;
    }

    graph.push(article);
  }

  // Service for money pages (except kontak/home)
  if (page.type === 'money' && page.key !== 'kontak' && page.key !== 'home') {
    graph.push({
      '@type': 'Service',
      '@id': `${url}#service`,
      name: page.h1,
      description: page.meta,
      provider: { '@id': orgId },
      areaServed: [
        'Jakarta', 'Yogyakarta', 'Surabaya', 'Bandung',
        'Balikpapan', 'Batam', 'Medan', 'Makassar', 'Indonesia',
      ],
      serviceType: 'Pelatihan Korporat dan Konsultasi Pengembangan Kompetensi',
    });
  }

  // LocalBusiness for kontak
  if (page.key === 'kontak') {
    graph.push({
      '@type': 'ProfessionalService',
      '@id': `${url}#localbusiness`,
      name: SITE.orgName,
      url: SITE.orgUrl,
      email: SITE.email,
      telephone: `+${SITE.waNumber}`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: SITE.orgCity,
        addressRegion: SITE.orgRegion,
        addressCountry: SITE.orgCountry,
      },
      areaServed: 'Indonesia',
    });
  }

  // HowTo
  if (page.howto && page.type === 'article') {
    const steps = page.howto.map((step, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: step.name,
      text: step.text,
    }));

    graph.push({
      '@type': 'HowTo',
      '@id': `${url}#howto`,
      name: page.h1,
      description: page.meta,
      step: steps,
    });
  }

  // FAQPage
  if (faq && faq.length > 0) {
    const items = faq.map((qa) => ({
      '@type': 'Question',
      name: qa.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: qa.a,
      },
    }));

    graph.push({
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      mainEntity: items,
    });
  }

  // Course / EducationalOccupationalProgram Schema for training and role programs
  if (
    page.type === 'article' &&
    (page.hub === 'kategori-pelatihan' ||
      page.hub === 'jenis-pelatihan' ||
      page.hub === 'peran-jabatan' ||
      page.hub === 'industri')
  ) {
    graph.push({
      '@type': 'Course',
      '@id': `${url}#course`,
      name: page.title,
      description: page.meta,
      provider: {
        '@type': 'Organization',
        name: SITE.orgName,
        sameAs: SITE.orgUrl,
      },
      educationalCredentialAwarded: 'Sertifikat Kompetensi Resmi Kemnaker RI / BNSP',
      occupationalCredentialAwarded: 'Lisensi K3 / SKP Resmi Republik Indonesia',
      hasCourseInstance: {
        '@type': 'CourseInstance',
        courseMode: ['In-Person', 'Onsite', 'Blended'],
        location: {
          '@type': 'Place',
          name: 'In-House Onsite & Training Center Wahana K3',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'ID',
          },
        },
      },
      offers: {
        '@type': 'Offer',
        category: 'Corporate In-House & Public Training Proposal',
        availability: 'https://schema.org/InStock',
        priceCurrency: 'IDR',
        price: '0',
        url: `${url}`,
        seller: { '@id': orgId },
      },
    });
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
