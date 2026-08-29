'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SITE, waUrl } from '@/lib/site';

export function LeadHunterWidget() {
  const [format, setFormat] = useState('In-House Training (di Lokasi Perusahaan)');
  const [sector, setSector] = useState('K3 Keselamatan & Kesehatan Kerja');
  const [participants, setParticipants] = useState('10–25 Peserta');

  const formats = [
    'In-House Training (di Lokasi Perusahaan)',
    'Pelatihan Publik (Jadwal Terbuka)',
    'Sertifikasi Resmi BNSP / Kemnaker',
    'Konsultasi TNA & Desain Kurikulum',
  ];

  const sectors = [
    'K3 Keselamatan & Kesehatan Kerja',
    'Manufaktur & Rekayasa Operasional',
    'Konstruksi & Infrastruktur',
    'Pertambangan & Energi Migas',
    'Manajemen SDM & HR Strategy',
    'Kepemimpinan & Supervisor Development',
    'Keuangan & Akuntansi Praktis',
  ];

  const participantRanges = [
    '1–5 Peserta (Pelatihan Publik)',
    '6–15 Peserta (Small Group In-House)',
    '16–30 Peserta (Standard Class In-House)',
    '30+ Peserta (Batch / Multi-Class)',
  ];

  const generatedMessage = `Halo Wahana Totalita, saya ingin mendiskusikan rencana program pelatihan:
- Format: ${format}
- Bidang/Topik: ${sector}
- Estimasi Peserta: ${participants}
Mohon informasi silabus, profil instruktur, dan estimasi biaya penawaran resmi.`;

  return (
    <div className="lead-widget-card" id="kalkulator-pelatihan">
      <div className="lead-widget-header">
        <span className="lead-widget-badge">⚡ ESTIMATOR &amp; KONSULTASI CEPAT</span>
        <h3 className="lead-widget-title">Pilih Kebutuhan Pelatihan Perusahaan Anda</h3>
        <p className="lead-widget-subtitle">
          Konfigurasikan format, topik, dan estimasi jumlah peserta untuk mendapatkan rekomendasi silabus dan penawaran in-house gratis.
        </p>
      </div>

      <div className="lead-widget-form">
        {/* Step 1: Format */}
        <div className="lead-widget-group">
          <label className="lead-widget-label">
            <span className="step-num">1</span>
            <span>Format Penyelenggaraan:</span>
          </label>
          <select
            className="lead-widget-select"
            value={format}
            onChange={(e) => setFormat(e.target.value)}
          >
            {formats.map((f, i) => (
              <option key={i} value={f}>{f}</option>
            ))}
          </select>
        </div>

        {/* Step 2: Sektor / Topik */}
        <div className="lead-widget-group">
          <label className="lead-widget-label">
            <span className="step-num">2</span>
            <span>Rumpun Bidang / Sektor:</span>
          </label>
          <select
            className="lead-widget-select"
            value={sector}
            onChange={(e) => setSector(e.target.value)}
          >
            {sectors.map((s, i) => (
              <option key={i} value={s}>{s}</option>
            ))}
          </select>
        </div>

        {/* Step 3: Peserta */}
        <div className="lead-widget-group">
          <label className="lead-widget-label">
            <span className="step-num">3</span>
            <span>Estimasi Jumlah Peserta:</span>
          </label>
          <select
            className="lead-widget-select"
            value={participants}
            onChange={(e) => setParticipants(e.target.value)}
          >
            {participantRanges.map((p, i) => (
              <option key={i} value={p}>{p}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="lead-widget-footer">
        <div className="lead-widget-summary">
          <span className="summary-title">Rekomendasi Siap:</span>
          <span className="summary-desc">
            {format.split(' ')[0]} · {sector.split(' ')[0]} · {participants.split(' ')[0]}
          </span>
        </div>

        <div className="lead-widget-actions">
          <a
            className="btn btn-wa"
            href={waUrl(generatedMessage)}
            target="_blank"
            rel="noopener"
          >
            <svg width="20" height="20" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
              <path d="M16 3C9.4 3 4 8.3 4 14.9c0 2.6.8 5 2.3 7L4 29l7.3-2.3c1.5.8 3.1 1.2 4.7 1.2 6.6 0 12-5.3 12-11.9S22.6 3 16 3zm5.9 16.9c-.3.8-1.5 1.5-2.4 1.7-.6.1-1.4.2-4.1-.9-3.4-1.4-5.6-4.9-5.8-5.1-.2-.2-1.4-1.9-1.4-3.6s.9-2.5 1.2-2.9c.3-.3.7-.4.9-.4h.6c.2 0 .5-.1.7.6.3.8 1 2.7 1 2.9.1.2.1.4 0 .6-.1.2-.2.4-.4.6l-.6.7c-.2.2-.4.4-.2.8.2.4 1 1.7 2.2 2.7 1.5 1.3 2.8 1.7 3.2 1.9.4.2.6.2.9-.1.2-.3 1-1.2 1.3-1.6.3-.4.5-.3.9-.2.4.1 2.4 1.1 2.8 1.3.4.2.7.3.8.5.1.2.1 1-.2 1.5z"/>
            </svg>
            <span>Dapatkan Penawaran via WhatsApp</span>
          </a>

          <Link className="btn btn-outline" href="/kontak/">
            Ajukan via Formulir Resmi
          </Link>
        </div>
      </div>
    </div>
  );
}
