import Link from 'next/link';
import { SITE, pageUrl, waUrl } from '@/lib/site';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div className="footer-col footer-about">
          <span className="footer-logo-badge">
            <img
              src="/assets/img/logo-wt.png"
              alt={SITE.orgName}
              width={40}
              height={40}
              loading="lazy"
            />
            <strong className="footer-brand-text">{SITE.orgName}</strong>
          </span>
          <p>
            {SITE.siteName} adalah pusat panduan pelatihan korporat dan
            pengembangan kompetensi yang dikelola tim {SITE.orgName},{' '}
            {SITE.orgCity}. Untuk jadwal, paket, dan harga pelatihan, kunjungi{' '}
            <a href={SITE.orgUrl} target="_blank" rel="noopener">
              wahanatotalita.com
            </a>
            .
          </p>
          <ul className="footer-contact">
            <li>
              WhatsApp:{' '}
              <a href={waUrl()} rel="noopener" target="_blank">
                {SITE.waDisplay}
              </a>
            </li>
            <li>
              Email: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </li>
            <li>{SITE.orgCity}, Indonesia</li>
          </ul>
        </div>

        <div className="footer-col">
          <h2 className="footer-h">Topik Panduan</h2>
          <ul>
            {SITE.footerPillars.map((p) => (
              <li key={p.key}>
                <Link href={p.href}>{p.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h2 className="footer-h">Platform</h2>
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
                Jadwal Pelatihan
              </a>
            </li>
            <li>
              <a href={SITE.external.wt_perusahaan} target="_blank" rel="noopener">
                Profil Perusahaan
              </a>
            </li>
            <li>
              <a href={SITE.external.wt_klien} target="_blank" rel="noopener">
                Klien Kami
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="wrap footer-bottom">
        <p>
          &copy; {currentYear} {SITE.orgName}. Konten bersifat edukasi untuk
          membantu perencanaan pengembangan kompetensi perusahaan Anda. Untuk
          pemesanan, jadwal, dan harga pelatihan, kunjungi{' '}
          <a href={SITE.orgUrl} target="_blank" rel="noopener">
            wahanatotalita.com
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
