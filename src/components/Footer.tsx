import Link from 'next/link';
import { SITE, waUrl } from '@/lib/site';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div className="footer-col footer-about">
          <div className="footer-logo-badge">
            <img
              src="/assets/img/logo-wt.png"
              alt=""
              aria-hidden="true"
              width={40}
              height={40}
              loading="lazy"
            />
            <strong className="footer-brand-text">{SITE.orgName}</strong>
          </div>
          <p style={{ lineHeight: 1.65 }}>
            {SITE.siteName} adalah portal panduan komprehensif pelatihan korporat dan pengembangan kompetensi SDM di Indonesia, dikelola oleh tim ahli {SITE.orgName}, {SITE.orgCity}. Untuk pemesanan in-house, jadwal publik, dan paket penawaran resmi, silakan akses portal komersial kami di{' '}
            <a
              href={SITE.orgUrl}
              target="_blank"
              rel="noopener"
              style={{ color: '#38bdf8', textDecoration: 'underline', fontWeight: 600 }}
            >
              {SITE.orgUrl.replace(/^https?:\/\//, '')}
            </a>.
          </p>
          <ul className="footer-contact">
            <li>
              WhatsApp:{' '}
              <a href={waUrl()} rel="noopener" target="_blank" style={{ color: '#ffffff', fontWeight: 600 }}>
                {SITE.waDisplay}
              </a>
            </li>
            <li>
              Email:{' '}
              <a href={`mailto:${SITE.email}`} style={{ color: '#ffffff' }}>
                {SITE.email}
              </a>
            </li>
            <li>Kantor: {SITE.orgCity}, {SITE.orgRegion}, Indonesia</li>
          </ul>
        </div>

        <div className="footer-col">
          <h2 className="footer-h">Pilar Panduan</h2>
          <ul>
            {SITE.footerPillars.map((p) => (
              <li key={p.key}>
                <Link href={p.href}>{p.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h2 className="footer-h">Platform Panduan</h2>
          <ul>
            {SITE.footerPlatform.map((p) => (
              <li key={p.key}>
                <Link href={p.href}>{p.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h2 className="footer-h">Layanan Utama (wahanatotalita.com)</h2>
          <ul>
            <li>
              <a href={SITE.external.wt_jadwal} target="_blank" rel="noopener">
                Jadwal Pelatihan Aktual ↗
              </a>
            </li>
            <li>
              <a href={SITE.external.wt_perusahaan} target="_blank" rel="noopener">
                Profil Perusahaan ↗
              </a>
            </li>
            <li>
              <a href={SITE.external.wt_klien} target="_blank" rel="noopener">
                Daftar Klien &amp; Portfolio ↗
              </a>
            </li>
            <li>
              <a href={SITE.external.wt_ak3u} target="_blank" rel="noopener">
                Pelatihan Ahli K3 Umum BNSP ↗
              </a>
            </li>
            <li>
              <a href={SITE.external.wt_iso} target="_blank" rel="noopener">
                Pelatihan ISO Series ↗
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="wrap footer-bottom">
        <p style={{ margin: 0 }}>
          &copy; {currentYear} {SITE.orgName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
