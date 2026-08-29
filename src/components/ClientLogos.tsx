export function ClientLogos() {
  const clients = [
    { name: 'PT Pertamina (Persero)', sector: 'Energi & Migas', icon: '⚡' },
    { name: 'PT PLN (Persero)', sector: 'Ketenagalistrikan', icon: '💡' },
    { name: 'PT Wijaya Karya (WIKA)', sector: 'Konstruksi & EPC', icon: '🏗️' },
    { name: 'PT Astra International', sector: 'Otomotif & Manufaktur', icon: '⚙️' },
    { name: 'PT Telkom Indonesia', sector: 'Telekomunikasi', icon: '📡' },
    { name: 'PT Adhi Karya (Persero)', sector: 'Infrastruktur', icon: '🏢' },
    { name: 'PT Unilever Indonesia', sector: 'FMCG & Consumer Goods', icon: '📦' },
    { name: 'Bank Mandiri (Persero)', sector: 'Perbankan & Keuangan', icon: '🏦' },
  ];

  return (
    <section className="client-trust-section" aria-label="Klien dan Akreditasi Resmi">
      <div className="wrap">
        <div className="client-trust-header">
          <span className="client-trust-badge">REKAM JEJAK &amp; AKREDITASI</span>
          <h2 className="client-trust-title">
            Dipercaya 500+ Perusahaan Nasional &amp; Multinasional di Seluruh Indonesia
          </h2>
          <p className="client-trust-desc">
            Instruktur praktisi dan konsultan Wahana Totalita telah mendampingi ribuan profesional dan ratusan korporasi dalam program in-house training, sertifikasi K3, dan pengembangan manajemen SDM.
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="client-logo-grid">
          {clients.map((c, i) => (
            <div key={i} className="client-logo-card">
              <span className="client-icon" aria-hidden="true">{c.icon}</span>
              <div className="client-info">
                <span className="client-name">{c.name}</span>
                <span className="client-sector">{c.sector}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Accreditation Badges Strip */}
        <div className="accreditation-strip">
          <div className="accreditation-item">
            <span className="accreditation-icon">🇮🇩</span>
            <div className="accreditation-text">
              <strong>Kementerian Ketenagakerjaan RI</strong>
              <span>Program K3 &amp; Keselamatan Kerja Resmi</span>
            </div>
          </div>
          <div className="accreditation-item">
            <span className="accreditation-icon">📜</span>
            <div className="accreditation-text">
              <strong>Badan Nasional Sertifikasi Profesi (BNSP)</strong>
              <span>Skema Sertifikasi Kompetensi Nasional</span>
            </div>
          </div>
          <div className="accreditation-item">
            <span className="accreditation-icon">🏥</span>
            <div className="accreditation-text">
              <strong>Standar Kemenkes RI</strong>
              <span>K3 Rumah Sakit &amp; Fasilitas Kesehatan</span>
            </div>
          </div>
          <div className="accreditation-item">
            <span className="accreditation-icon">🌐</span>
            <div className="accreditation-text">
              <strong>ISO 9001 / 45001 / 14001</strong>
              <span>Standar Sistem Manajemen Mutu &amp; K3</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
