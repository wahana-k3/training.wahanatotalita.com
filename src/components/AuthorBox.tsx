import { SITE } from '@/lib/site';

export function AuthorBox() {
  return (
    <aside className="author-box" aria-label="Tentang penulis">
      <img
        src="/assets/img/logo-wt.png"
        alt={SITE.orgName}
        width={48}
        height={48}
        loading="lazy"
      />
      <div className="author-info">
        <strong>{SITE.orgName}</strong>
        <p>
          Lembaga pelatihan dan konsultasi pengembangan kompetensi SDM, melayani
          perusahaan lintas industri di seluruh Indonesia — manufaktur,
          konstruksi, migas, perbankan, kesehatan, dan logistik. Untuk jadwal
          dan paket pelatihan, kunjungi{' '}
          <a href={SITE.orgUrl} target="_blank" rel="noopener">
            {SITE.orgUrl}
          </a>
          .
        </p>
      </div>
    </aside>
  );
}
