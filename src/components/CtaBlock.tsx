import Link from 'next/link';
import { SITE, waUrl } from '@/lib/site';

interface CtaBlockProps {
  title?: string;
  description?: string;
  pageTitle?: string;
}

export function CtaBlock({
  title = 'Ingin Mendiskusikan Kebutuhan Pelatihan Perusahaan Anda?',
  description = 'Setiap perusahaan memiliki tantangan kompetensi unik. Konsultan kami siap membantu memetakan modul dan format pelatihan yang paling tepat untuk tim Anda — gratis untuk sesi konsultasi awal.',
  pageTitle,
}: CtaBlockProps) {
  const waMsg = pageTitle
    ? `Halo Tim Wahana K3, saya tertarik dengan materi "${pageTitle}" di training.wahanatotalita.com dan ingin meminta Proposal Silabus Resmi In-House Training untuk tim perusahaan kami.`
    : SITE.waPrefill;

  return (
    <aside className="cta-block" aria-label="Ajakan konsultasi pelatihan">
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="cta-actions">
        <a
          className="btn btn-wa"
          href={waUrl(waMsg)}
          target="_blank"
          rel="noopener"
        >
          <svg width="20" height="20" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
            <path d="M16 3C9.4 3 4 8.3 4 14.9c0 2.6.8 5 2.3 7L4 29l7.3-2.3c1.5.8 3.1 1.2 4.7 1.2 6.6 0 12-5.3 12-11.9S22.6 3 16 3zm5.9 16.9c-.3.8-1.5 1.5-2.4 1.7-.6.1-1.4.2-4.1-.9-3.4-1.4-5.6-4.9-5.8-5.1-.2-.2-1.4-1.9-1.4-3.6s.9-2.5 1.2-2.9c.3-.3.7-.4.9-.4h.6c.2 0 .5-.1.7.6.3.8 1 2.7 1 2.9.1.2.1.4 0 .6-.1.2-.2.4-.4.6l-.6.7c-.2.2-.4.4-.2.8.2.4 1 1.7 2.2 2.7 1.5 1.3 2.8 1.7 3.2 1.9.4.2.6.2.9-.1.2-.3 1-1.2 1.3-1.6.3-.4.5-.3.9-.2.4.1 2.4 1.1 2.8 1.3.4.2.7.3.8.5.1.2.1 1-.2 1.5z"/>
          </svg>
          <span>Chat WhatsApp: {SITE.waDisplay}</span>
        </a>
        <Link className="btn btn-outline-white" href="/kontak/">
          <span>Kirim Formulir Konsultasi</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </aside>
  );
}
