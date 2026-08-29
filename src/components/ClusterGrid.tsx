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
      <h2 id="cluster-h">Semua Artikel dalam Topik Ini</h2>
      <ol className="cluster-grid">
        {children.map((child) => (
          <li key={child.key}>
            <Link className="cluster-card" href={pageUrl(child.key)}>
              <span className="cluster-num">{child.n}</span>
              <span className="cluster-title">{child.h1}</span>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
}
