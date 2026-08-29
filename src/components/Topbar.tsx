import { SITE, waUrl } from '@/lib/site';

export function Topbar() {
  return (
    <div className="topbar">
      <div className="wrap topbar-inner">
        <div className="topbar-badge">
          <span className="topbar-dot" aria-hidden="true"></span>
          <span>Konsultasi Aktif Jam Kerja (Senin–Jumat, 08.00–17.00 WIB)</span>
        </div>
        <div className="topbar-contact">
          <a href={waUrl()} rel="noopener" target="_blank">
            WhatsApp: <strong>{SITE.waDisplay}</strong>
          </a>
          <span aria-hidden="true" style={{ opacity: 0.4 }}>|</span>
          <a href={SITE.orgUrl} target="_blank" rel="noopener">
            {SITE.orgUrl.replace(/^https?:\/\//, '')} ↗
          </a>
        </div>
      </div>
    </div>
  );
}
