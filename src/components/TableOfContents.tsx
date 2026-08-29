import { TocItem } from '@/lib/types';

interface TableOfContentsProps {
  items: TocItem[];
  variant?: 'inline' | 'sidebar';
}

export function TableOfContents({ items, variant = 'inline' }: TableOfContentsProps) {
  if (!items || items.length <= 1) return null;

  if (variant === 'sidebar') {
    return (
      <div className="sidebar-box toc-sidebar-card">
        <div className="toc-sidebar-head">
          <span className="toc-sidebar-icon">📑</span>
          <h3 className="sidebar-box-title">Navigasi Panduan</h3>
        </div>
        <div className="toc-switch-list">
          {items.map((item, idx) => (
            <a key={item.id} href={`#${item.id}`} className="toc-switch-btn">
              <span className="toc-num">{String(idx + 1).padStart(2, '0')}</span>
              <span className="toc-title">{item.text}</span>
            </a>
          ))}
        </div>
      </div>
    );
  }

  return (
    <nav className="toc-board" aria-labelledby="toc-board-h">
      <div className="toc-board-head">
        <div className="toc-board-badge">
          <span className="pulse-dot-sm"></span>
          <span>NAVIGASI CEPAT</span>
        </div>
        <h2 id="toc-board-h" className="toc-board-title">Daftar Isi &amp; Pembahasan</h2>
      </div>

      <div className="toc-switch-grid">
        {items.map((item, idx) => (
          <a key={item.id} href={`#${item.id}`} className="toc-switch-card">
            <span className="toc-switch-num">{String(idx + 1).padStart(2, '0')}</span>
            <span className="toc-switch-text">{item.text}</span>
            <span className="toc-switch-arrow">→</span>
          </a>
        ))}
      </div>
    </nav>
  );
}
