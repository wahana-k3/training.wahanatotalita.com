import Link from 'next/link';
import { SITE, waUrl } from '@/lib/site';

export function CtaBlock() {
  return (
    <aside className="cta-block" aria-label="Ajakan konsultasi">
      <h2>Ingin Mendiskusikan Kebutuhan Pelatihan Perusahaan Anda?</h2>
      <p>
        Setiap perusahaan punya tantangan kompetensi yang berbeda. Tim kami bisa
        membantu memetakan program yang paling relevan untuk tim Anda — tanpa
        biaya untuk sesi diskusi awal.
      </p>
      <div className="cta-actions">
        <a
          className="btn btn-wa"
          href={waUrl()}
          target="_blank"
          rel="noopener"
        >
          Chat WhatsApp: {SITE.waDisplay}
        </a>
        <Link className="btn btn-outline" href="/kontak/">
          Kirim Pertanyaan via Formulir
        </Link>
      </div>
    </aside>
  );
}
