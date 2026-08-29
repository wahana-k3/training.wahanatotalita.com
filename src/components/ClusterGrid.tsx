import Link from 'next/link';
import { getHubChildren, pageUrl } from '@/lib/site';

interface ClusterGridProps {
  hubSlug: string;
}

export function ClusterGrid({ hubSlug }: ClusterGridProps) {
  const children = getHubChildren(hubSlug);

  if (children.length === 0) return null;

  return (
    <section className="cluster" aria-labelledby="cluster-h">
      <h2 id="cluster-h">Daftar Lengkap Panduan dalam Topik Ini ({children.length} Panduan)</h2>
      <ol className="cluster-grid">
        {children.map((child) => (
          <li key={child.key}>
            <Link className="cluster-card" href={pageUrl(child.key)}>
              <span className="cluster-num">{child.n}</span>
              <div style={{ flex: 1 }}>
                <span className="cluster-title">{child.h1}</span>
                <span style={{ display: 'block', fontSize: '0.84rem', color: 'var(--c-accent-dark)', fontWeight: 700, marginTop: '0.2rem' }}>
                  Baca Panduan Lengkap →
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
}
