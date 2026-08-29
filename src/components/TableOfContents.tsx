import { TocItem } from '@/lib/types';

interface TableOfContentsProps {
  items: TocItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  if (!items || items.length <= 2) return null;

  return (
    <nav className="toc" aria-labelledby="toc-h">
      <h2 id="toc-h">Daftar Isi</h2>
      <ol>
        {items.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`}>{item.text}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
