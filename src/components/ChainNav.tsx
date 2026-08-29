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
    <nav className="chain" aria-label="Navigasi urutan panduan">
      {prevMeta ? (
        <Link className="chain-prev" href={pageUrl(prevKey)} rel="prev">
          <span className="chain-label">← Panduan Sebelumnya</span>
          <span className="chain-title">{prevMeta.h1}</span>
        </Link>
      ) : (
        <div></div>
      )}
      {nextMeta && (
        <Link className="chain-next" href={pageUrl(nextKey)} rel="next">
          <span className="chain-label">Lanjut Membaca →</span>
          <span className="chain-title">{nextMeta.h1}</span>
        </Link>
      )}
    </nav>
  );
}
