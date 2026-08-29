export function TrustMarquee() {
  // Real training photos from /media/
  const photos = [
    '/media/pelatihan-001.webp',
    '/media/pelatihan-002.webp',
    '/media/pelatihan-003.webp',
    '/media/pelatihan-004.webp',
    '/media/pelatihan-006.webp',
    '/media/pelatihan-008.webp',
    '/media/pelatihan-012.webp',
    '/media/pelatihan-018.webp',
    '/media/pelatihan-019.webp',
    '/media/pelatihan-022.webp',
    '/media/pelatihan-025.webp',
    '/media/pelatihan-030.webp',
    '/media/pelatihan-037.webp',
    '/media/pelatihan-041.webp',
    '/media/pelatihan-053.webp',
    '/media/pelatihan-063.webp',
  ];

  // Real client logos from /media/clients/
  const clientLogos = [
    { src: '/media/clients/78a55-pertamina.png', name: 'Pertamina' },
    { src: '/media/clients/58303-pln-persero.png', name: 'PLN' },
    { src: '/media/clients/1bbc3-wika.png', name: 'WIKA' },
    { src: '/media/clients/5147b-waskita.png', name: 'Waskita' },
    { src: '/media/clients/1c571-total-bangun-persada.png', name: 'Total Bangun Persada' },
    { src: '/media/clients/83141-unilever.png', name: 'Unilever' },
    { src: '/media/clients/78168-pt-antam.png', name: 'Antam' },
    { src: '/media/clients/46e2f-petrokimia.png', name: 'Petrokimia Gresik' },
    { src: '/media/clients/c306e-adaro.png', name: 'Adaro Energy' },
    { src: '/media/clients/d23da-samsung-cnt.png', name: 'Samsung C&T' },
    { src: '/media/clients/b5c3d-telkomsel-logo-capi.png', name: 'Telkomsel' },
    { src: '/media/clients/48046-kai.png', name: 'KAI' },
    { src: '/media/clients/76c17-logo-alfamart.png', name: 'Alfamart' },
    { src: '/media/clients/9c87b-pamapersada-1-.jpg', name: 'Pamapersada' },
    { src: '/media/clients/d9f47-petrochina.jpg', name: 'PetroChina' },
  ];

  return (
    <section className="trust-marquee-section" aria-label="Dokumentasi Pelatihan &amp; Klien Kami">
      <div className="marquee-header">
        <span className="marquee-kicker">DOKUMENTASI PELATIHAN &amp; KLIEN NASIONAL</span>
      </div>

      {/* Row 1: Training Session Photos Marquee */}
      <div className="marquee-container marquee-photos">
        <div className="marquee-track">
          {photos.concat(photos).map((src, idx) => (
            <div key={`photo-${idx}`} className="marquee-photo-card">
              <img
                src={src}
                alt="Dokumentasi Pelatihan In-House &amp; Sertifikasi Wahana Totalita"
                loading="lazy"
                width={220}
                height={130}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Client Logos Marquee */}
      <div className="marquee-container marquee-logos">
        <div className="marquee-track marquee-track-slow">
          {clientLogos.concat(clientLogos).map((client, idx) => (
            <div key={`client-${idx}`} className="marquee-logo-card">
              <img
                src={client.src}
                alt={`Klien Pelatihan: ${client.name}`}
                loading="lazy"
                height={38}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
