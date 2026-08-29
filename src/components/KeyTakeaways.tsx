import { PageMeta } from '@/lib/types';
import { SITE } from '@/lib/site';

interface KeyTakeawaysProps {
  page: PageMeta;
}

export function KeyTakeaways({ page }: KeyTakeawaysProps) {
  const hubName = SITE.hubNames[page.hub] || 'Pelatihan Korporat';

  return (
    <section className="key-takeaways-card" aria-label="Ringkasan Eksekutif &amp; Poin Kunci">
      <div className="key-takeaways-head">
        <span className="key-takeaways-badge">💡 RINGKASAN EKSEKUTIF</span>
        <span className="key-takeaways-tag">Pilar: {hubName}</span>
      </div>

      <div className="key-takeaways-grid">
        <div className="takeaway-box">
          <span className="takeaway-icon">🎯</span>
          <div className="takeaway-content">
            <strong>Tujuan &amp; Esensi Kompetensi:</strong>
            <p>Panduan komprehensif implementasi {page.h1.toLowerCase()} untuk memenuhi standar operasional dan kepatuhan industri.</p>
          </div>
        </div>

        <div className="takeaway-box">
          <span className="takeaway-icon">📜</span>
          <div className="takeaway-content">
            <strong>Standar Acuan &amp; Regulasi:</strong>
            <p>Diselaraskan dengan regulasi ketenagakerjaan, standar BNSP, dan best practice industri nasional.</p>
          </div>
        </div>

        <div className="takeaway-box">
          <span className="takeaway-icon">👥</span>
          <div className="takeaway-content">
            <strong>Target Peserta &amp; Format:</strong>
            <p>Direkomendasikan untuk format In-House Training guna memaksimalkan relevansi studi kasus operasional tim Anda.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
