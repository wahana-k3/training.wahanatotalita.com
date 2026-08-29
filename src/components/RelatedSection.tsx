import Link from 'next/link';
import { SITE, allLivePages, getPageMeta, pageUrl } from '@/lib/site';
import { PageMeta } from '@/lib/types';

interface RelatedSectionProps {
  page: PageMeta;
}

export function RelatedSection({ page }: RelatedSectionProps) {
  let relatedKeys = page.related || [];

  // Smart Dynamic Cross-Linking Fallback: if fewer than 4 related items, find relevant peer pages across pillars
  if (relatedKeys.length < 4) {
    const peerPages = allLivePages.filter((p) => {
      if (p.key === page.key || p.type !== 'article' || relatedKeys.includes(p.key)) return false;
      // Match by same hub OR keyword overlap in title
      const sameHub = p.hub === page.hub;
      const titleWords = page.title.toLowerCase().split(/\s+/).filter((w) => w.length > 4);
      const targetWords = p.title.toLowerCase();
      const hasKeywordMatch = titleWords.some((w) => targetWords.includes(w));
      return sameHub || hasKeywordMatch;
    });

    const needed = 4 - relatedKeys.length;
    const additional = peerPages.slice(0, needed).map((p) => p.key);
    relatedKeys = [...relatedKeys, ...additional];
  }

  const hubKey = page.hub !== 'money' ? SITE.hubPages[page.hub] : null;
  const moneyKey = page.money || 'kontak';

  const hubMeta = hubKey ? getPageMeta(hubKey) : null;
  const moneyMeta = moneyKey ? getPageMeta(moneyKey) : null;

  return (
    <section className="related" aria-labelledby="related-h">
      <h2 id="related-h">Panduan Terkait yang Direkomendasikan</h2>
      <div className="related-grid">
        {relatedKeys.map((rk) => {
          const rMeta = getPageMeta(rk);
          if (!rMeta) return null;
          const kicker =
            rMeta.hub === 'money'
              ? 'Layanan'
              : SITE.hubNames[rMeta.hub] || 'Topik';
          return (
            <Link key={rk} className="related-card" href={pageUrl(rk)}>
              <span className="related-kicker">{kicker}</span>
              <span className="related-title">{rMeta.h1}</span>
              <span style={{ marginTop: 'auto', fontSize: '0.88rem', color: 'var(--c-accent-dark)', fontWeight: 700 }}>
                Pelajari Selengkapnya →
              </span>
            </Link>
          );
        })}
      </div>
      <div className="related-links">
        {hubKey && hubKey !== page.key && hubMeta && (
          <p style={{ margin: '0 0 0.5rem' }}>
            📌 <strong>Kembali ke panduan utama:</strong>{' '}
            <Link href={pageUrl(hubKey)}>{hubMeta.h1}</Link>
          </p>
        )}
        {moneyKey !== page.key && moneyMeta && (
          <p style={{ margin: 0 }}>
            💬 <strong>Butuh pendampingan langsung?</strong>{' '}
            <Link href={pageUrl(moneyKey)}>{moneyMeta.h1}</Link>
          </p>
        )}
      </div>
    </section>
  );
}
