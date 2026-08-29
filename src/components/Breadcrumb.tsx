import Link from 'next/link';
import { SITE, pageUrl } from '@/lib/site';
import { PageMeta } from '@/lib/types';

interface BreadcrumbProps {
  page: PageMeta;
}

export function Breadcrumb({ page }: BreadcrumbProps) {
  const hubKey = SITE.hubPages[page.hub];
  const hubName = SITE.hubNames[page.hub];

  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <ol>
        <li>
          <Link href="/">Beranda</Link>
        </li>
        {page.hub !== 'money' && page.hub !== 'utility' && page.type !== 'hub' && hubKey && (
          <li>
            <Link href={pageUrl(hubKey)}>{hubName}</Link>
          </li>
        )}
        {page.type === 'hub' && (
          <li aria-current="page">{hubName}</li>
        )}
        {page.type !== 'hub' && page.key !== 'home' && (
          <li aria-current="page">{page.h1}</li>
        )}
      </ol>
    </nav>
  );
}
