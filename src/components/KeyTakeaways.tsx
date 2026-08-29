import { PageMeta } from '@/lib/types';
import { SITE } from '@/lib/site';

interface KeyTakeawaysProps {
  page: PageMeta;
}

export function KeyTakeaways({ page }: KeyTakeawaysProps) {
  const hubName = SITE.hubNames[page.hub] || 'Pelatihan Korporat';

  return (
    <div className="key-takeaways-card" aria-label="Poin Kunci Panduan">
      <div className="key-takeaways-head">
        <span>💡 Ringkasan Eksekutif &amp; Poin Kunci</span>
      </div>
      <ul className="key-takeaways-list">
        <li>
          <strong>Fokus Utama:</strong> Panduan operasional implementasi {page.h1.toLowerCase()} untuk peningkatan kompetensi kerja dan pemenuhan standar industri.
        </li>
        <li>
          <strong>Kategori Topik:</strong> Termasuk dalam rumpun <strong>{hubName}</strong> yang disesuaikan dengan regulasi ketenagakerjaan dan standar keselamatan nasional.
        </li>
        <li>
          <strong>Rekomendasi Implementasi:</strong> Disarankan dilakukan asesmen kebutuhan awal (TNA) agar kurikulum, studi kasus, dan durasi pelatihan tepat sasaran untuk target peserta.
        </li>
      </ul>
    </div>
  );
}
