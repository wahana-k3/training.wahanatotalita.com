import { SITE, waUrl } from '@/lib/site';

export function Topbar() {
  return (
    <div className="topbar">
      <div className="wrap topbar-inner">
        <span>Panduan Pelatihan Korporat &amp; Pengembangan Kompetensi</span>
        <span className="topbar-contact">
          <a href={waUrl()} rel="noopener" target="_blank">
            WA {SITE.waDisplay}
          </a>
          <span aria-hidden="true">·</span>
          <a href={SITE.orgUrl} target="_blank" rel="noopener">
            wahanatotalita.com
          </a>
        </span>
      </div>
    </div>
  );
}
