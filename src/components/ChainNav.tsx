import Link from 'next/link';
import { getPageMeta, pageUrl } from '@/lib/site';
import { PageMeta } from '@/lib/types';

interface ChainNavProps {
  page: PageMeta;
}

export function ChainNav({ page }: ChainNavProps) {
  const prevKey = page.prev || '';
  const nextKey = page.next || '';

  if (!prevKey && !nextKey) return null;

  const prevMeta = prevKey ? getPageMeta(prevKey) : null;
  const nextMeta = nextKey ? getPageMeta(nextKey) : null;

  return (
    <nav className="chain-nav-container" aria-label="Navigasi urutan panduan pelatihan">
      <div className="chain-nav-grid">
        {prevMeta ? (
          <Link className="chain-card chain-prev" href={pageUrl(prevKey)} rel="prev">
            <span className="chain-icon-badge">←</span>
            <div className="chain-content">
              <span className="chain-label">PANDUAN SEBELUMNYA</span>
              <strong className="chain-title">{prevMeta.h1}</strong>
            </div>
          </Link>
        ) : (
          <div className="chain-card-empty"></div>
        )}

        {nextMeta && (
          <Link className="chain-card chain-next" href={pageUrl(nextKey)} rel="next">
            <div className="chain-content">
              <span className="chain-label">LANJUT MEMBACA</span>
              <strong className="chain-title">{nextMeta.h1}</strong>
            </div>
            <span className="chain-icon-badge">→</span>
          </Link>
        )}
      </div>
    </nav>
  );
}
