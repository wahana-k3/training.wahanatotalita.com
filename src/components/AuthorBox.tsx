import { SITE } from '@/lib/site';

export function AuthorBox() {
  return (
    <aside className="author-box" aria-label="Tentang penulis dan lembaga">
      <img
        src="/assets/img/logo-wt.png"
        alt={SITE.orgName}
        width={52}
        height={52}
        loading="lazy"
      />
      <div className="author-info">
        <strong>
          <span>{SITE.orgName}</span>
          <span className="author-badge-verified">✓ Lembaga Resmi Terverifikasi</span>
        </strong>
        <p>
          Lembaga pelatihan dan konsultan pengembangan kompetensi SDM terkemuka di Indonesia. Melayani perusahaan nasional dan multinasional lintas industri (manufaktur, konstruksi, pertambangan-migas, perbankan, kesehatan, dan logistik) di Jakarta, Yogyakarta, Surabaya, Balikpapan, dan seluruh wilayah nusantara. Untuk jadwal, proposal silabus, dan daftar harga resmi, kunjungi{' '}
          <a href={SITE.orgUrl} target="_blank" rel="noopener">
            {SITE.orgUrl.replace(/^https?:\/\//, '')} ↗
          </a>.
        </p>
      </div>
    </aside>
  );
}
