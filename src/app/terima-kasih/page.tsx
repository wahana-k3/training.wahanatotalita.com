import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE, waUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: `Pesan Terkirim — Terima Kasih | ${SITE.siteName}`,
  robots: {
    index: false,
    follow: false,
  },
};

export default function TerimaKasihPage() {
  const wa = waUrl(
    'Halo Tim Wahana Totalita, saya baru saja mengirim formulir permohonan konsultasi pelatihan korporat. Mohon informasi tindak lanjut dan penawarannya.'
  );

  return (
    <div>
      <section className="home-hero">
        <div className="wrap">
          <div className="hero-pill-badge">
            <span>🛡️ KONFIRMASI FORMULIR KONSULTASI</span>
          </div>
          <h1>Terima Kasih — Pesan Anda Sudah Kami Terima</h1>
          <p>
            Tim konsultan pengembangan SDM {SITE.orgName} akan menelaah kebutuhan perusahaan Anda dan menghubungi Anda melalui email atau telepon pada jam kerja.
          </p>
          <div className="hero-cta-group">
            <a
              className="btn btn-wa"
              href={wa}
              target="_blank"
              rel="noopener"
            >
              <svg width="20" height="20" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
                <path d="M16 3C9.4 3 4 8.3 4 14.9c0 2.6.8 5 2.3 7L4 29l7.3-2.3c1.5.8 3.1 1.2 4.7 1.2 6.6 0 12-5.3 12-11.9S22.6 3 16 3zm5.9 16.9c-.3.8-1.5 1.5-2.4 1.7-.6.1-1.4.2-4.1-.9-3.4-1.4-5.6-4.9-5.8-5.1-.2-.2-1.4-1.9-1.4-3.6s.9-2.5 1.2-2.9c.3-.3.7-.4.9-.4h.6c.2 0 .5-.1.7.6.3.8 1 2.7 1 2.9.1.2.1.4 0 .6-.1.2-.2.4-.4.6l-.6.7c-.2.2-.4.4-.2.8.2.4 1 1.7 2.2 2.7 1.5 1.3 2.8 1.7 3.2 1.9.4.2.6.2.9-.1.2-.3 1-1.2 1.3-1.6.3-.4.5-.3.9-.2.4.1 2.4 1.1 2.8 1.3.4.2.7.3.8.5.1.2.1 1-.2 1.5z"/>
              </svg>
              <span>Respon Lebih Cepat: Lanjutkan via WhatsApp</span>
            </a>
            <Link
              className="btn btn-outline-white"
              href="/"
            >
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ padding: '3.5rem 0' }}>
        <div className="wrap wrap-narrow">
          <span className="kicker">SUMBER DAYA REKOMENDASI</span>
          <h2>Sambil Menunggu Balasan, Anda Mungkin Ingin Mempelajari:</h2>
          <div className="bento-grid" style={{ marginTop: '1.2rem' }}>
            <Link className="bento-card" href="/jenis-pelatihan/">
              <div className="bento-icon">🏢</div>
              <span className="kicker">Format Training</span>
              <h3>Jenis Pelatihan Korporat</h3>
              <p>In-house, publik, atau customized untuk tim Anda.</p>
              <span className="bento-action">Baca Panduan →</span>
            </Link>
            <Link className="bento-card" href="/konsultasi-pengembangan-kompetensi/">
              <div className="bento-icon">📊</div>
              <span className="kicker">Layanan Konsultasi</span>
              <h3>Konsultasi Kompetensi</h3>
              <p>TNA, kurikulum, competency mapping, dan ROI pelatihan.</p>
              <span className="bento-action">Baca Panduan →</span>
            </Link>
            <Link className="bento-card" href="/faq/">
              <div className="bento-icon">💡</div>
              <span className="kicker">Tanya Jawab</span>
              <h3>FAQ Pelatihan</h3>
              <p>Jawaban cepat pertanyaan umum seputar program pelatihan.</p>
              <span className="bento-action">Lihat FAQ →</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
