import { SITE } from '@/lib/site';

interface AuthorityBridgeProps {
  currentTopic?: string;
  category?: string;
}

export function AuthorityBridge({ currentTopic, category }: AuthorityBridgeProps) {
  return (
    <aside className="authority-bridge-card" aria-label="Portal Layanan Resmi Wahana Totalita">
      <div className="authority-bridge-badge">
        <span>🏢 PORTAL KOMERSIAL RESMI</span>
      </div>

      <div className="authority-bridge-content">
        <h3>Layanan Pelatihan Resmi &amp; Penawaran In-House Wahana Totalita</h3>
        <p>
          Halaman ini merupakan portal panduan dan materi edukasi resmi. Untuk pendaftaran pelatihan publik jadwal terdekat, permintaan proposal penawaran in-house, dan profil lengkap lembaga penyelenggara, silakan kunjungi portal komersial utama kami di{' '}
          <a href={SITE.orgUrl} target="_blank" rel="noopener">
            <strong>{SITE.orgUrl.replace(/^https?:\/\//, '')}</strong> ↗
          </a>.
        </p>

        <div className="authority-links-grid">
          <a
            className="authority-link-item"
            href={SITE.external.wt_jadwal}
            target="_blank"
            rel="noopener"
          >
            <span className="icon">📅</span>
            <div className="info">
              <strong>Jadwal Training Aktual</strong>
              <span>Lihat jadwal running pelatihan publik bulan ini</span>
            </div>
            <span className="arrow">↗</span>
          </a>

          <a
            className="authority-link-item"
            href={SITE.external.wt_ak3u}
            target="_blank"
            rel="noopener"
          >
            <span className="icon">🦺</span>
            <div className="info">
              <strong>Sertifikasi Ahli K3 Umum Kemnaker</strong>
              <span>Program sertifikasi dan penunjukan resmi AK3U</span>
            </div>
            <span className="arrow">↗</span>
          </a>

          <a
            className="authority-link-item"
            href={SITE.external.wt_iso}
            target="_blank"
            rel="noopener"
          >
            <span className="icon">🌐</span>
            <div className="info">
              <strong>Pelatihan &amp; Konsultasi ISO</strong>
              <span>ISO 9001, ISO 45001, ISO 14001, ISO 27001</span>
            </div>
            <span className="arrow">↗</span>
          </a>

          <a
            className="authority-link-item"
            href={SITE.external.wt_klien}
            target="_blank"
            rel="noopener"
          >
            <span className="icon">🏆</span>
            <div className="info">
              <strong>Daftar Klien &amp; Testimoni</strong>
              <span>Dokumentasi dan portfolio ratusan perusahaan</span>
            </div>
            <span className="arrow">↗</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
