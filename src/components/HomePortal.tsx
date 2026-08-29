import Link from 'next/link';
import { SITE, waUrl } from '@/lib/site';
import { LeadHunterWidget } from './LeadHunterWidget';
import { ClientLogos } from './ClientLogos';
import { FaqSection } from './FaqSection';
import { FaqItem } from '@/lib/types';

interface HomePortalProps {
  faq?: FaqItem[];
}

export function HomePortal({ faq }: HomePortalProps) {
  return (
    <div className="home-portal">
      {/* 1. HERO SECTION */}
      <section className="home-hero">
        <div className="wrap">
          <div className="hero-pill-badge">
            <span>🛡️ PUSAT PANDUAN RESMI PELATIHAN K3 &amp; PENGEMBANGAN SDM</span>
          </div>

          <h1>Pusat Pelatihan K3 &amp; Pengembangan Kompetensi SDM Korporat</h1>

          <p>
            Portal referensi resmi dan layanan konsultasi peningkatan kompetensi tenaga kerja Indonesia. Temukan panduan silabus, sertifikasi BNSP &amp; Kemnaker, dan solusi in-house training terstandarisasi untuk perusahaan Anda.
          </p>

          <div className="hero-cta-group">
            <a
              className="btn btn-wa"
              href={waUrl('Halo Wahana Totalita, saya ingin konsultasi mengenai program pelatihan K3 / corporate training untuk perusahaan kami.')}
              target="_blank"
              rel="noopener"
            >
              <svg width="20" height="20" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
                <path d="M16 3C9.4 3 4 8.3 4 14.9c0 2.6.8 5 2.3 7L4 29l7.3-2.3c1.5.8 3.1 1.2 4.7 1.2 6.6 0 12-5.3 12-11.9S22.6 3 16 3zm5.9 16.9c-.3.8-1.5 1.5-2.4 1.7-.6.1-1.4.2-4.1-.9-3.4-1.4-5.6-4.9-5.8-5.1-.2-.2-1.4-1.9-1.4-3.6s.9-2.5 1.2-2.9c.3-.3.7-.4.9-.4h.6c.2 0 .5-.1.7.6.3.8 1 2.7 1 2.9.1.2.1.4 0 .6-.1.2-.2.4-.4.6l-.6.7c-.2.2-.4.4-.2.8.2.4 1 1.7 2.2 2.7 1.5 1.3 2.8 1.7 3.2 1.9.4.2.6.2.9-.1.2-.3 1-1.2 1.3-1.6.3-.4.5-.3.9-.2.4.1 2.4 1.1 2.8 1.3.4.2.7.3.8.5.1.2.1 1-.2 1.5z"/>
              </svg>
              <span>Konsultasi WhatsApp Langsung (Gratis TNA)</span>
            </a>

            <Link className="btn btn-outline-white" href="#kalkulator-pelatihan">
              <span>Konfigurasi Pelatihan Tim Anda ↓</span>
            </Link>
          </div>

          <div className="trust-proof-strip">
            <div className="trust-proof-item">
              <span className="trust-proof-num">500+</span>
              <span className="trust-proof-label">Perusahaan Didampingi</span>
            </div>
            <div className="trust-proof-item">
              <span className="trust-proof-num">15+ Th</span>
              <span className="trust-proof-label">Pengalaman Praktisi &amp; Konsultan</span>
            </div>
            <div className="trust-proof-item">
              <span className="trust-proof-num">100%</span>
              <span className="trust-proof-label">Kepatuhan Regulasi &amp; Standar BNSP</span>
            </div>
            <div className="trust-proof-item">
              <span className="trust-proof-num">Nasional</span>
              <span className="trust-proof-label">Layanan di Seluruh Wilayah Indonesia</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE LEAD HUNTER ESTIMATOR WIDGET */}
      <section className="section" style={{ paddingTop: '2.5rem', paddingBottom: '1.5rem' }}>
        <div className="wrap">
          <LeadHunterWidget />
        </div>
      </section>

      {/* 3. CLIENT LOGOS & TRUST ACCREDITATION */}
      <ClientLogos />

      {/* 4. PILAR PANDUAN (BENTO MATRIX) */}
      <section className="section" id="pilar-panduan">
        <div className="wrap">
          <span className="kicker">STRUKTUR MODUL PELATIHAN</span>
          <h2>5 Pilar Utama Pengembangan Kompetensi Korporat</h2>
          <p className="section-lead">
            Pilih jalur panduan sesuai kebutuhan organisasi Anda — mulai dari format pelaksanaan, spesifikasi industri, peran jabatan, hingga perancangan kurikulum customized.
          </p>

          <div className="bento-grid">
            <Link className="bento-card" href="/jenis-pelatihan/">
              <div className="bento-icon">🏢</div>
              <span className="kicker">Pilar 1</span>
              <h3>Jenis &amp; Format Pelatihan</h3>
              <p>In-House Training di lokasi perusahaan, pelatihan publik terjadwal, dan customized corporate training.</p>
              <span className="bento-action">Pelajari 3 Panduan Format →</span>
            </Link>

            <Link className="bento-card" href="/kategori-pelatihan/">
              <div className="bento-icon">🦺</div>
              <span className="kicker">Pilar 2</span>
              <h3>Kategori Pelatihan &amp; K3</h3>
              <p>Pelatihan K3 Keselamatan Kerja, Sertifikasi BNSP, Kepemimpinan, Manajemen SDM, Keuangan, dan Soft Skills.</p>
              <span className="bento-action">Pelajari 6 Rumpun Topik →</span>
            </Link>

            <Link className="bento-card" href="/industri/">
              <div className="bento-icon">🏭</div>
              <span className="kicker">Pilar 3</span>
              <h3>Spesifikasi Sektor Industri</h3>
              <p>Kurikulum khusus untuk industri manufaktur, konstruksi, pertambangan-migas, perbankan, kesehatan, dan logistik.</p>
              <span className="bento-action">Pelajari 6 Sektor Industri →</span>
            </Link>

            <Link className="bento-card" href="/peran-jabatan/">
              <div className="bento-icon">👔</div>
              <span className="kicker">Pilar 4</span>
              <h3>Peran &amp; Jenjang Jabatan</h3>
              <p>Jalur kompetensi terarah untuk HRD Manager, Safety Officer K3, Supervisor / Team Leader, hingga Staf Onboarding.</p>
              <span className="bento-action">Pelajari 5 Jalur Peran →</span>
            </Link>

            <Link className="bento-card" href="/konsultasi-pengembangan-kompetensi/" style={{ gridColumn: 'span 2' }}>
              <div className="bento-icon">📊</div>
              <span className="kicker">Pilar 5</span>
              <h3>Konsultasi &amp; Desain Kurikulum (TNA)</h3>
              <p>Layanan konsultasi Training Needs Analysis (TNA), perancangan kurikulum korporat, competency mapping, dan evaluasi ROI pasca-pelatihan.</p>
              <span className="bento-action">Pelajari 5 Panduan Metodologi →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. TANTANGAN VS SOLUSI PELATIHAN */}
      <section className="section section-alt">
        <div className="wrap">
          <span className="kicker">SOLUSI TERUJI</span>
          <h2>Mengapa Perusahaan Memilih Pendekatan Kami?</h2>
          <p className="section-lead">
            Kami memahami kendala umum yang sering dihadapi divisi HR dan pimpinan operasional saat menyelenggarakan program pelatihan tenaga kerja.
          </p>

          <div className="pain-grid">
            <div className="pain-card">
              <span className="pain-icon">⚠️</span>
              <h3>Kepatuhan Regulasi K3</h3>
              <p>Menghindari sanksi dan risiko kecelakaan kerja dengan pelatihan K3 resmi bersertifikasi Kemnaker &amp; BNSP.</p>
            </div>

            <div className="pain-card">
              <span className="pain-icon">🎯</span>
              <h3>Materi Tepat Sasaran</h3>
              <p>Menghilangkan training sia-sia melalui analisis TNA mendalam sebelum kurikulum dan silabus disusun.</p>
            </div>

            <div className="pain-card">
              <span className="pain-icon">⏰</span>
              <h3>Jadwal &amp; Lokasi Fleksibel</h3>
              <p>Pelatihan in-house diselenggarakan langsung di fasilitas pabrik, kantor, atau proyek tanpa mengganggu operasional.</p>
            </div>

            <div className="pain-card">
              <span className="pain-icon">📈</span>
              <h3>Dampak ROI Terukur</h3>
              <p>Evaluasi 4 tingkat Kirkpatrick untuk memastikan peningkatan produktivitas dan perubahan perilaku kerja yang nyata.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. METHODOLOGY ROADMAP */}
      <section className="section">
        <div className="wrap wrap-narrow">
          <span className="kicker">METODOLOGI KONSULTASI</span>
          <h2>4 Langkah Alur Penyelenggaraan Pelatihan Korporat</h2>
          <p className="section-lead">
            Proses terstruktur yang kami terapkan untuk memastikan setiap rupiah investasi pengembangan SDM menghasilkan dampak optimal.
          </p>

          <ol className="steps">
            <li>
              <strong>Konsultasi &amp; Diagnosa Awal (TNA)</strong>
              <p style={{ margin: '0.4rem 0 0', color: 'var(--c-ink-soft)', fontSize: '0.96rem' }}>
                Konsultan kami berdiskusi dengan tim HR/Manajemen untuk memetakan gap kompetensi, profil peserta, dan target spesifik perusahaan.
              </p>
            </li>
            <li>
              <strong>Penyusunan Silabus &amp; Penawaran Resmi</strong>
              <p style={{ margin: '0.4rem 0 0', color: 'var(--c-ink-soft)', fontSize: '0.96rem' }}>
                Menyiapkan proposal silabus komprehensif, profil instruktur praktisi, modul kerja, dan rincian biaya yang transparan.
              </p>
            </li>
            <li>
              <strong>Pelaksanaan Pelatihan Interaktif</strong>
              <p style={{ margin: '0.4rem 0 0', color: 'var(--c-ink-soft)', fontSize: '0.96rem' }}>
                Training diselenggarakan dengan metode studi kasus riil industri, simulasi kerja, diskusi kelompok, dan asesmen pemahaman.
              </p>
            </li>
            <li>
              <strong>Evaluasi, Sertifikasi &amp; Laporan Pasca-Training</strong>
              <p style={{ margin: '0.4rem 0 0', color: 'var(--c-ink-soft)', fontSize: '0.96rem' }}>
                Penerbitan sertifikat resmi (Lembaga / BNSP / Kemnaker) disertai laporan evaluasi menyeluruh dan rekomendasi tindak lanjut bagi HR.
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* 8. SECTOR STRIP */}
      <section className="section section-alt">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <span className="kicker">CAKUPAN SEKTOR</span>
          <h2>Melayani Kebutuhan Pelatihan Lintas Industri</h2>
          <p className="section-lead" style={{ margin: '0 auto 1.5rem' }}>
            Kurikulum dan studi kasus disesuaikan dengan karakteristik unik operasional masing-masing sektor:
          </p>
          <div className="sector-strip">
            <span className="sector-badge">🏭 Manufaktur &amp; Fabrikasi</span>
            <span className="sector-badge">🏗️ Konstruksi &amp; Infrastruktur</span>
            <span className="sector-badge">⚡ Pertambangan &amp; Energi Migas</span>
            <span className="sector-badge">🏦 Perbankan &amp; Institusi Keuangan</span>
            <span className="sector-badge">🏥 Layanan Kesehatan &amp; RS</span>
            <span className="sector-badge">📦 Logistik, Supply Chain &amp; Gudang</span>
          </div>
        </div>
      </section>

      {/* 9. FAQ SECTION */}
      <div className="wrap wrap-narrow">
        <FaqSection items={faq} />
      </div>

      {/* 10. FAST CONSULTATION CTA BANNER */}
      <div className="wrap wrap-narrow">
        <aside className="cta-block" style={{ margin: '2rem 0 4rem' }}>
          <h2>Siap Meningkatkan Standar Kompetensi Tim Anda?</h2>
          <p>
            Hubungi konsultan kami sekarang untuk mendiskusikan kebutuhan pelatihan in-house, jadwal publik terdekat, atau perancangan TNA perusahaan Anda.
          </p>
          <div className="cta-actions">
            <a
              className="btn btn-wa"
              href={waUrl('Halo Wahana Totalita, saya ingin mendiskusikan rencana pelatihan karyawan perusahaan kami.')}
              target="_blank"
              rel="noopener"
            >
              Konsultasi WhatsApp Langsung
            </a>
            <Link className="btn btn-outline-white" href="/kontak/">
              Isi Formulir Penawaran
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
