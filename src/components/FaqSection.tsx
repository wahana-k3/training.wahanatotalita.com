import { FaqItem } from '@/lib/types';

interface FaqSectionProps {
  items?: FaqItem[];
  title?: string;
}

export function FaqSection({ items, title = 'Pertanyaan yang Sering Diajukan (FAQ)' }: FaqSectionProps) {
  if (!items || items.length === 0) return null;

  return (
    <section className="faq-mastermind-section" aria-labelledby="faq-h">
      <div className="faq-section-head">
        <div className="faq-badge">
          <span className="pulse-dot-sm"></span>
          <span>PANDUAN &amp; JAWABAN KONSULTAN</span>
        </div>
        <h2 id="faq-h" className="faq-main-title">{title}</h2>
        <p className="faq-subtitle">
          Informasi esensial seputar kurikulum, legalitas sertifikasi, hingga estimasi investasi pelatihan korporat.
        </p>
      </div>

      <div className="faq-accordion-list">
        {items.map((qa, index) => (
          <details key={index} className="faq-card" open={index === 0}>
            <summary className="faq-summary">
              <span className="faq-q-num">Q{index + 1}</span>
              <span className="faq-question-text">{qa.q}</span>
              <span className="faq-toggle-icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </span>
            </summary>
            <div className="faq-answer-wrapper">
              <div className="faq-answer-content">
                <div className="faq-answer-indicator">
                  <span className="ans-tag">JAWABAN</span>
                </div>
                <p>{qa.a}</p>
              </div>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
