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
          <Link href="/">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ marginRight: '4px', verticalAlign: '-1px' }}
              aria-hidden="true"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            <span>Beranda</span>
          </Link>
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
          <li aria-current="page" title={page.h1}>{page.h1}</li>
        )}
      </ol>
    </nav>
  );
}
