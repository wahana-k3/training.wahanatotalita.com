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
            {SITE.siteName} adalah portal panduan komprehensif pelatihan korporat dan pengembangan kompetensi SDM di Indonesia, dikelola oleh tim ahli {SITE.orgName}, {SITE.orgCity}. Untuk pemesanan in-house, jadwal publik, dan paket penawaran resmi, silakan hubungi tim konsultan kami melalui{' '}
            <Link
              href="/kontak/"
              style={{ color: '#38bdf8', textDecoration: 'underline', fontWeight: 600 }}
            >
              halaman konsultasi resmi kami
            </Link>.
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
          <h2 className="footer-h">Pilar &amp; Sektor</h2>
          <ul>
            {SITE.footerPillars.map((p) => (
              <li key={p.key}>
                <Link href={p.href}>{p.label}</Link>
              </li>
            ))}
            {SITE.footerIndustryRoles.map((r) => (
              <li key={r.key}>
                <Link href={r.href}>{r.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h2 className="footer-h">Platform &amp; Informasi</h2>
          <ul>
            {SITE.footerPlatform.map((p) => (
              <li key={p.key}>
                <Link href={p.href}>{p.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h2 className="footer-h">Sertifikasi &amp; Program Populer</h2>
          <ul>
            {SITE.footerPopularPrograms.map((prog) => (
              <li key={prog.key}>
                <Link href={prog.href}>{prog.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h2 className="footer-h">Wilayah In-House K3</h2>
          <ul>
            {SITE.footerRegional.map((reg) => (
              <li key={reg.key}>
                <Link href={reg.href}>{reg.label}</Link>
              </li>
            ))}
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
