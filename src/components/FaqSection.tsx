import { FaqItem } from '@/lib/types';

interface FaqSectionProps {
  items?: FaqItem[];
}

export function FaqSection({ items }: FaqSectionProps) {
  if (!items || items.length === 0) return null;

  return (
    <section className="faq" aria-labelledby="faq-h">
      <h2 id="faq-h">Pertanyaan yang Sering Diajukan (FAQ)</h2>
      {items.map((qa, index) => (
        <details key={index} className="faq-item">
          <summary>{qa.q}</summary>
          <p>{qa.a}</p>
        </details>
      ))}
    </section>
  );
}
