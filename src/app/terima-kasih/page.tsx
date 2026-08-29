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
    'Halo, saya baru saja mengirim formulir konsultasi pelatihan dari website. Saya ingin melanjutkan diskusi.'
  );

  return (
    <div>
      <section className="hero">
        <div className="wrap">
          <h1>Terima Kasih — Pesan Anda Sudah Kami Terima</h1>
          <p>
            Tim kami akan menghubungi Anda melalui email atau telepon pada jam kerja.
            Ingin jawaban lebih cepat? Lanjutkan langsung lewat WhatsApp — biasanya kami
            merespons dalam hitungan menit.
          </p>
          <div className="cta-actions">
            <a
              className="btn btn-wa"
              href={wa}
              target="_blank"
              rel="noopener"
            >
              Lanjutkan via WhatsApp: {SITE.waDisplay}
            </a>
            <Link
              className="btn btn-outline"
              style={{ background: '#fff' }}
              href="/"
            >
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap wrap-narrow">
          <h2>Sambil Menunggu, Anda Mungkin Ingin Membaca:</h2>
          <ul>
            <li>
              <Link href="/jenis-pelatihan/">
                Jenis Pelatihan Korporat: In-House, Publik, dan Customized
              </Link>
            </li>
            <li>
              <Link href="/konsultasi-pengembangan-kompetensi/">
                Konsultasi &amp; Pengembangan Kompetensi
              </Link>
            </li>
            <li>
              <Link href="/faq/">FAQ Pelatihan Korporat</Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
