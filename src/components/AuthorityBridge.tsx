import Link from 'next/link';
import { SITE } from '@/lib/site';

interface AuthorityBridgeProps {
  currentTopic?: string;
  category?: string;
}

export function AuthorityBridge({ currentTopic, category }: AuthorityBridgeProps) {
  return (
    <aside className="authority-bridge-card" aria-label="Portal Layanan Resmi">
      <div className="authority-bridge-badge">
        <span>🏢 PUSAT KONSULTASI KORPORAT</span>
      </div>

      <div className="authority-bridge-content">
        <h3>Layanan Pelatihan Resmi &amp; Penawaran In-House Training</h3>
        <p>
          Halaman ini merupakan portal panduan dan materi silabus resmi. Untuk permintaan proposal silabus in-house, jadwal pelatihan terdekat, dan konsultasi kebutuhan perusahaan Anda, silakan hubungi tim spesialis kami melalui{' '}
          <Link href="/kontak/">
            <strong>Halaman Konsultasi &amp; Penawaran</strong> ↗
          </Link>.
        </p>

        <div className="authority-links-grid">
          <Link
            className="authority-link-item"
            href={SITE.external.wt_jadwal}
          >
            <span className="icon">📅</span>
            <div className="info">
              <strong>Jadwal Training Aktual</strong>
              <span>Lihat jadwal running pelatihan publik bulan ini</span>
            </div>
            <span className="arrow">↗</span>
          </Link>

          <Link
            className="authority-link-item"
            href={SITE.external.wt_ak3u}
          >
            <span className="icon">🦺</span>
            <div className="info">
              <strong>Sertifikasi Ahli K3 Umum Kemnaker</strong>
              <span>Program sertifikasi dan penunjukan resmi AK3U</span>
            </div>
            <span className="arrow">↗</span>
          </Link>

          <Link
            className="authority-link-item"
            href={SITE.external.wt_iso}
          >
            <span className="icon">🌐</span>
            <div className="info">
              <strong>Pelatihan &amp; Konsultasi ISO</strong>
              <span>ISO 9001, ISO 45001, ISO 14001, ISO 27001</span>
            </div>
            <span className="arrow">↗</span>
          </Link>

          <Link
            className="authority-link-item"
            href={SITE.external.wt_klien}
          >
            <span className="icon">🏆</span>
            <div className="info">
              <strong>Studi Kasus &amp; Klien</strong>
              <span>Dokumentasi dan portfolio ratusan perusahaan</span>
            </div>
            <span className="arrow">↗</span>
          </Link>
        </div>
      </div>
    </aside>
  );
}

