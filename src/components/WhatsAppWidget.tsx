'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SITE, waUrl } from '@/lib/site';

interface WhatsAppWidgetProps {
  pageTitle?: string;
}

export function WhatsAppWidget({ pageTitle }: WhatsAppWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);

  const customMessage = pageTitle
    ? `Halo, saya membaca halaman "${pageTitle}" dan ingin diskusi tentang kebutuhan pelatihan perusahaan kami.`
    : undefined;

  return (
    <div className="wa-widget" id="wa-widget">
      <button
        className="wa-fab"
        id="wa-fab"
        aria-expanded={isOpen}
        aria-controls="wa-card"
        aria-label="Buka konsultasi WhatsApp"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          viewBox="0 0 32 32"
          width="30"
          height="30"
          aria-hidden="true"
        >
          <path
            fill="#fff"
            d="M16 3C9.4 3 4 8.3 4 14.9c0 2.6.8 5 2.3 7L4 29l7.3-2.3c1.5.8 3.1 1.2 4.7 1.2 6.6 0 12-5.3 12-11.9S22.6 3 16 3zm5.9 16.9c-.3.8-1.5 1.5-2.4 1.7-.6.1-1.4.2-4.1-.9-3.4-1.4-5.6-4.9-5.8-5.1-.2-.2-1.4-1.9-1.4-3.6s.9-2.5 1.2-2.9c.3-.3.7-.4.9-.4h.6c.2 0 .5-.1.7.6.3.8 1 2.7 1 2.9.1.2.1.4 0 .6-.1.2-.2.4-.4.6l-.6.7c-.2.2-.4.4-.2.8.2.4 1 1.7 2.2 2.7 1.5 1.3 2.8 1.7 3.2 1.9.4.2.6.2.9-.1.2-.3 1-1.2 1.3-1.6.3-.4.5-.3.9-.2.4.1 2.4 1.1 2.8 1.3.4.2.7.3.8.5.1.2.1 1-.2 1.5z"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="wa-card" id="wa-card">
          <div className="wa-card-head">
            <strong>Tim Pengembangan SDM</strong>
            <span className="wa-online">● Online pada jam kerja</span>
          </div>
          <p>
            Ceritakan kebutuhan pelatihan perusahaan Anda — kami balas cepat,
            tanpa biaya konsultasi awal.
          </p>
          <a
            className="btn btn-wa"
            href={waUrl(customMessage)}
            target="_blank"
            rel="noopener"
          >
            Mulai Chat WhatsApp
          </a>
          <Link
            className="wa-alt"
            href="/kontak/"
            onClick={() => setIsOpen(false)}
          >
            atau kirim formulir konsultasi
          </Link>
        </div>
      )}
    </div>
  );
}
