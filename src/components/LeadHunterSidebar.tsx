import Link from 'next/link';
import { SITE, waUrl } from '@/lib/site';

interface LeadHunterSidebarProps {
  pageTitle: string;
}

export function LeadHunterSidebar({ pageTitle }: LeadHunterSidebarProps) {
  const waMessage = `Halo Wahana Totalita, saya membaca materi "${pageTitle}" di training.wahanatotalita.com dan ingin berdiskusi mengenai kebutuhan pelatihan tim/perusahaan kami.`;

  return (
    <aside className="lead-hunter-card" aria-label="Asisten Konsultasi Pelatihan">
      <div className="lead-hunter-top">
        <span className="lead-hunter-pulse-dot" aria-hidden="true"></span>
        <span className="lead-hunter-status">Konsultan SDM &amp; K3 Online</span>
      </div>

      <div className="lead-hunter-head">
        <h3 className="lead-hunter-title">
          Butuh Pelatihan In-House untuk Tim Perusahaan Anda?
        </h3>
        <p className="lead-hunter-desc">
          Konsultan Wahana Totalita siap membantu memetakan gap kompetensi, menyusun modul customized, dan memberikan estimasi anggaran resmi tanpa biaya konsultasi awal.
        </p>
      </div>

      <ul className="lead-hunter-points">
        <li>
          <span className="icon">✓</span>
          <span>Analisis Kebutuhan (TNA) Bebas Biaya</span>
        </li>
        <li>
          <span className="icon">✓</span>
          <span>Instruktur Praktisi &amp; Asesor BNSP</span>
        </li>
        <li>
          <span className="icon">✓</span>
          <span>Pelaksanaan di Fasilitas Perusahaan</span>
        </li>
      </ul>

      <div className="lead-hunter-buttons">
        <a
          className="btn btn-wa"
          href={waUrl(waMessage)}
          target="_blank"
          rel="noopener"
        >
          <svg width="18" height="18" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
            <path d="M16 3C9.4 3 4 8.3 4 14.9c0 2.6.8 5 2.3 7L4 29l7.3-2.3c1.5.8 3.1 1.2 4.7 1.2 6.6 0 12-5.3 12-11.9S22.6 3 16 3zm5.9 16.9c-.3.8-1.5 1.5-2.4 1.7-.6.1-1.4.2-4.1-.9-3.4-1.4-5.6-4.9-5.8-5.1-.2-.2-1.4-1.9-1.4-3.6s.9-2.5 1.2-2.9c.3-.3.7-.4.9-.4h.6c.2 0 .5-.1.7.6.3.8 1 2.7 1 2.9.1.2.1.4 0 .6-.1.2-.2.4-.4.6l-.6.7c-.2.2-.4.4-.2.8.2.4 1 1.7 2.2 2.7 1.5 1.3 2.8 1.7 3.2 1.9.4.2.6.2.9-.1.2-.3 1-1.2 1.3-1.6.3-.4.5-.3.9-.2.4.1 2.4 1.1 2.8 1.3.4.2.7.3.8.5.1.2.1 1-.2 1.5z"/>
          </svg>
          <span>Chat WhatsApp Langsung</span>
        </a>

        <Link className="btn btn-outline" href="/kontak/">
          Ajukan Proposal In-House
        </Link>
      </div>

      <div className="lead-hunter-trust-footer">
        <span>⚡ Respon Rata-Rata &lt; 5 Menit (Jam Kerja)</span>
      </div>
    </aside>
  );
}
