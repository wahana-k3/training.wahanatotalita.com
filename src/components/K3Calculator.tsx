'use client';

import React, { useState } from 'react';
import { SITE, waUrl } from '@/lib/site';

export function K3Calculator() {
  const [employees, setEmployees] = useState<number>(120);
  const [riskLevel, setRiskLevel] = useState<'tinggi' | 'sedang' | 'rendah'>('tinggi');
  const [buildingArea, setBuildingArea] = useState<number>(3500);
  const [floors, setFloors] = useState<number>(2);

  // Regulatory Logic
  // 1. AK3U Requirement (Permenaker 02/1992 & UU 1/1970)
  const isAk3uMandatory = employees > 100 || riskLevel === 'tinggi';
  const ak3uCount = isAk3uMandatory ? Math.max(1, Math.ceil(employees / 500)) : 0;

  // 2. P2K3 Requirement (Permenaker 04/1987)
  const isP2k3Mandatory = employees > 100 || riskLevel === 'tinggi';

  // 3. P3K First Aiders (Permenaker 15/2008)
  const p3kRatio = riskLevel === 'tinggi' ? 100 : 150;
  const p3kCount = Math.max(1, Math.ceil(employees / p3kRatio));
  const p3kBoxCount = Math.max(1, Math.ceil(employees / (riskLevel === 'tinggi' ? 50 : 100)));

  // 4. Fire Warden / Regu Damkar (Kepmenaker 186/1999)
  const fireUnitClass = riskLevel === 'tinggi' ? 'Kelas A / B (Tinggi)' : 'Kelas C / D (Sedang/Rendah)';
  const fireFloorCaptain = Math.max(floors, Math.ceil(employees / 50));
  const fireWardenCount = Math.max(2, Math.ceil(employees / 20));

  // 5. APAR Estimation (Permenaker 04/1980: 1 APAR per 15-20 meter radius, ~150-200m2 per unit)
  const aparCount = Math.max(floors * 2, Math.ceil(buildingArea / 175));

  // Generate customized WhatsApp message
  const waCustomText = `Halo Tim Konsultan Wahana K3, kami ingin konsultasi pemenuhan kepatuhan legalitas K3 untuk perusahaan kami dengan rincian data:
- Sektor Risiko: ${riskLevel.toUpperCase()}
- Jumlah Karyawan: ${employees} orang
- Luas Fasilitas: ${buildingArea} m² (${floors} lantai)

Hasil Kebutuhan Legalitas:
1. Ahli K3 Umum (AK3U): ${ak3uCount} personil (${isAk3uMandatory ? 'Wajib' : 'Rekomendasi'})
2. Panitia P2K3: ${isP2k3Mandatory ? 'Wajib Dibentuk' : 'Opsional'}
3. Petugas P3K Berlisensi: ${p3kCount} personil
4. Regu Damkar (Kelas D/C): ${fireWardenCount} personil
5. Estimasi Kebutuhan APAR: ±${aparCount} tabung

Mohon bantuan audit awal dan proposal in-house training resmi untuk perusahaan kami.`;

  return (
    <section className="k3-calc-card" style={{
      background: 'linear-gradient(135deg, #0d1b2a 0%, #1b263b 100%)',
      color: '#fff',
      borderRadius: '16px',
      padding: '2rem',
      margin: '2rem 0',
      boxShadow: '0 12px 30px rgba(0,0,0,0.25)',
      border: '1px solid rgba(255,255,255,0.1)'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
        <span style={{
          display: 'inline-block',
          background: 'rgba(230, 57, 70, 0.2)',
          color: '#ff6b6b',
          fontWeight: 700,
          fontSize: '0.85rem',
          padding: '0.35rem 0.85rem',
          borderRadius: '999px',
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
          marginBottom: '0.5rem'
        }}>
          🧮 Interactive Compliance Tool
        </span>
        <h2 style={{ fontSize: '1.65rem', margin: '0.25rem 0', color: '#fff' }}>
          Kalkulator Kebutuhan K3 &amp; Legalitas Perusahaan (Permenaker RI)
        </h2>
        <p style={{ color: '#cbd5e1', fontSize: '0.95rem', maxWidth: '650px', margin: '0.5rem auto 0' }}>
          Hitung estimasi jumlah personil bersertifikat (AK3U, P3K, Damkar) dan sarana tanggap darurat wajib berdasarkan profil tenaga kerja Anda.
        </p>
      </div>

      {/* Input Controls Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '1.25rem',
        background: 'rgba(255,255,255,0.05)',
        padding: '1.5rem',
        borderRadius: '12px',
        marginBottom: '1.75rem'
      }}>
        <div>
          <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem', color: '#94a3b8' }}>
            Tingkat Risiko Bahaya Tempat Kerja
          </label>
          <select
            value={riskLevel}
            onChange={(e) => setRiskLevel(e.target.value as any)}
            style={{
              width: '100%',
              padding: '0.65rem',
              borderRadius: '8px',
              border: '1px solid #334155',
              background: '#0f172a',
              color: '#fff',
              fontWeight: 600
            }}
          >
            <option value="tinggi">Risiko Tinggi (Migas, Tambang, Manufaktur, Kimia)</option>
            <option value="sedang">Risiko Sedang (Logistik, Percetakan, Tekstil)</option>
            <option value="rendah">Risiko Rendah (Perkantoran, Perbankan, Edukasi)</option>
          </select>
        </div>

        <div>
          <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem', color: '#94a3b8' }}>
            Jumlah Karyawan / Tenaga Kerja: <strong style={{ color: '#38bdf8' }}>{employees} orang</strong>
          </label>
          <input
            type="range"
            min="10"
            max="1500"
            step="10"
            value={employees}
            onChange={(e) => setEmployees(Number(e.target.value))}
            style={{ width: '100%', cursor: 'pointer' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem', color: '#94a3b8' }}>
            Luas Bangunan: <strong style={{ color: '#38bdf8' }}>{buildingArea} m²</strong>
          </label>
          <input
            type="range"
            min="200"
            max="20000"
            step="200"
            value={buildingArea}
            onChange={(e) => setBuildingArea(Number(e.target.value))}
            style={{ width: '100%', cursor: 'pointer' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem', color: '#94a3b8' }}>
            Jumlah Lantai Gedung: <strong style={{ color: '#38bdf8' }}>{floors} lantai</strong>
          </label>
          <input
            type="number"
            min="1"
            max="40"
            value={floors}
            onChange={(e) => setFloors(Math.max(1, Number(e.target.value)))}
            style={{
              width: '100%',
              padding: '0.65rem',
              borderRadius: '8px',
              border: '1px solid #334155',
              background: '#0f172a',
              color: '#fff',
              fontWeight: 600
            }}
          />
        </div>
      </div>

      {/* Realtime Output Results */}
      <h3 style={{ fontSize: '1.15rem', color: '#38bdf8', marginBottom: '0.75rem' }}>
        📋 Hasil Analisis Kebutuhan Kepatuhan Legal (Permenaker):
      </h3>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1rem',
        marginBottom: '1.75rem'
      }}>
        <div style={{ background: '#0f172a', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #38bdf8' }}>
          <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Ahli K3 Umum (AK3U)</div>
          <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff' }}>{ak3uCount} Personil</div>
          <div style={{ fontSize: '0.75rem', color: isAk3uMandatory ? '#4ade80' : '#cbd5e1' }}>
            {isAk3uMandatory ? '● Status: WAJIB (Permenaker 02/1992)' : '● Rekomendasi Pendampingan'}
          </div>
        </div>

        <div style={{ background: '#0f172a', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #a855f7' }}>
          <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Panitia Pembina K3 (P2K3)</div>
          <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff' }}>
            {isP2k3Mandatory ? 'Wajib Ada' : 'Opsional'}
          </div>
          <div style={{ fontSize: '0.75rem', color: '#cbd5e1' }}>Permenaker No. 04/1987</div>
        </div>

        <div style={{ background: '#0f172a', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #ef4444' }}>
          <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Petugas P3K Berlisensi</div>
          <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff' }}>{p3kCount} Personil</div>
          <div style={{ fontSize: '0.75rem', color: '#cbd5e1' }}>+ {p3kBoxCount} Kotak P3K (Permenaker 15/2008)</div>
        </div>

        <div style={{ background: '#0f172a', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #f59e0b' }}>
          <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Regu Pemadam Kebakaran</div>
          <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff' }}>{fireWardenCount} Personil</div>
          <div style={{ fontSize: '0.75rem', color: '#cbd5e1' }}>Kelas D/C (Kepmenaker 186/1999)</div>
        </div>

        <div style={{ background: '#0f172a', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #10b981' }}>
          <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Estimasi Kebutuhan APAR</div>
          <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff' }}>±{aparCount} Tabung</div>
          <div style={{ fontSize: '0.75rem', color: '#cbd5e1' }}>Permenaker No. 04/1980</div>
        </div>
      </div>

      {/* WhatsApp Conversion Action */}
      <div style={{ textAlign: 'center', background: 'rgba(56, 189, 248, 0.1)', padding: '1.25rem', borderRadius: '12px' }}>
        <p style={{ margin: '0 0 1rem', fontSize: '0.95rem', color: '#e2e8f0' }}>
          Ingin audit pemetaan gap kompetensi resmi dan penawaran in-house training bersertifikat Kemnaker?
        </p>
        <a
          href={waUrl(waCustomText)}
          target="_blank"
          rel="noopener"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: '#25D366',
            color: '#fff',
            fontWeight: 700,
            padding: '0.85rem 1.75rem',
            borderRadius: '999px',
            textDecoration: 'none',
            fontSize: '1rem',
            boxShadow: '0 4px 15px rgba(37, 211, 102, 0.4)'
          }}
        >
          <svg width="20" height="20" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
            <path d="M16 3C9.4 3 4 8.3 4 14.9c0 2.6.8 5 2.3 7L4 29l7.3-2.3c1.5.8 3.1 1.2 4.7 1.2 6.6 0 12-5.3 12-11.9S22.6 3 16 3zm5.9 16.9c-.3.8-1.5 1.5-2.4 1.7-.6.1-1.4.2-4.1-.9-3.4-1.4-5.6-4.9-5.8-5.1-.2-.2-1.4-1.9-1.4-3.6s.9-2.5 1.2-2.9c.3-.3.7-.4.9-.4h.6c.2 0 .5-.1.7.6.3.8 1 2.7 1 2.9.1.2.1.4 0 .6-.1.2-.2.4-.4.6l-.6.7c-.2.2-.4.4-.2.8.2.4 1 1.7 2.2 2.7 1.5 1.3 2.8 1.7 3.2 1.9.4.2.6.2.9-.1.2-.3 1-1.2 1.3-1.6.3-.4.5-.3.9-.2.4.1 2.4 1.1 2.8 1.3.4.2.7.3.8.5.1.2.1 1-.2 1.5z"/>
          </svg>
          <span>Kirim Hasil Analisis Kebutuhan K3 ke WhatsApp Konsultan</span>
        </a>
      </div>
    </section>
  );
}
