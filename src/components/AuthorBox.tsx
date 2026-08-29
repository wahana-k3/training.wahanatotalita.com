import { SITE } from '@/lib/site';

export function AuthorBox() {
  return (
    <aside className="author-box" aria-label="Tentang penyusun dan lembaga">
      <div className="author-box-inner">
        <div className="author-logo-wrapper">
          <img
            src="/assets/img/logo-wt.png"
            alt={SITE.orgName}
            width={54}
            height={54}
            loading="lazy"
          />
        </div>
        <div className="author-info">
          <div className="author-head">
            <strong className="author-name">{SITE.orgName}</strong>
            <span className="author-badge-verified">✓ Lembaga Resmi Terverifikasi</span>
          </div>
          <p className="author-desc">
            Lembaga pelatihan dan konsultan pengembangan kompetensi SDM terkemuka di Indonesia. Melayani perusahaan nasional dan multinasional lintas industri (manufaktur, konstruksi, pertambangan-migas, perbankan, kesehatan, dan logistik) di Jakarta, Yogyakarta, Surabaya, Balikpapan, dan seluruh wilayah nusantara.
          </p>
          <div className="author-cta-row">
            <a
              href={SITE.orgUrl}
              target="_blank"
              rel="noopener"
              className="author-portal-btn"
            >
              <span>Kunjungi Portal Resmi: {SITE.orgUrl.replace(/^https?:\/\//, '')}</span>
              <span className="arrow">↗</span>
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
