import Link from 'next/link';
import { SITE, getPageMeta, pageUrl } from '@/lib/site';
import { PageMeta } from '@/lib/types';

interface RelatedSectionProps {
  page: PageMeta;
}

export function RelatedSection({ page }: RelatedSectionProps) {
  const relatedKeys = page.related || [];
  const hubKey = page.hub !== 'money' ? SITE.hubPages[page.hub] : null;
  const moneyKey = page.money || 'kontak';

  const hubMeta = hubKey ? getPageMeta(hubKey) : null;
  const moneyMeta = moneyKey ? getPageMeta(moneyKey) : null;

  return (
    <section className="related" aria-labelledby="related-h">
      <h2 id="related-h">Baca Juga</h2>
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
            </Link>
          );
        })}
      </div>
      <p className="related-links">
        {hubKey && hubKey !== page.key && hubMeta && (
          <>
            Kembali ke panduan utama:{' '}
            <Link href={pageUrl(hubKey)}>{hubMeta.h1}</Link>.{' '}
          </>
        )}
        {moneyKey !== page.key && moneyMeta && (
          <>
            Butuh bantuan langsung? Lihat{' '}
            <Link href={pageUrl(moneyKey)}>{moneyMeta.h1}</Link>.
          </>
        )}
      </p>
    </section>
  );
}
