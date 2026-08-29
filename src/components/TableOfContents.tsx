import { TocItem } from '@/lib/types';

interface TableOfContentsProps {
  items: TocItem[];
  variant?: 'inline' | 'sidebar';
}

export function TableOfContents({ items, variant = 'inline' }: TableOfContentsProps) {
  if (!items || items.length <= 2) return null;

  if (variant === 'sidebar') {
    return (
      <div className="sidebar-box">
        <h3 className="sidebar-box-title">Daftar Isi Panduan</h3>
        <ol className="toc-list">
          {items.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`}>{item.text}</a>
            </li>
          ))}
        </ol>
      </div>
    );
  }

  return (
    <nav className="toc-mobile" aria-labelledby="toc-mobile-h">
      <h2 id="toc-mobile-h">Daftar Isi</h2>
      <ol className="toc-list">
        {items.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`}>{item.text}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
