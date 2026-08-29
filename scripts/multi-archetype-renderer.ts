import { ProgramDetail } from './master-batch1-data';

export interface MultiArchetypeProgramDetail extends ProgramDetail {
  hub?: string;
  path?: string;
  archetype?: 'role' | 'industry' | 'regional' | 'compliance_guide' | 'technical_cert';
  // Additional specialized fields for varied architectures
  caseStudy?: string;
  kpiMetrics?: string[];
  careerPath?: string[];
  legalPenalties?: string[];
  stepByStepGuide?: { step: string; desc: string }[];
  zoneHighlights?: { zone: string; hazard: string; control: string }[];
}

export function detectArchetype(prog: MultiArchetypeProgramDetail): 'role' | 'industry' | 'regional' | 'compliance_guide' | 'technical_cert' {
  if (prog.archetype) return prog.archetype;
  
  const key = prog.key || '';
  const path = prog.path || '';
  const hub = prog.hub || '';

  if (hub === 'peran-jabatan' || path.startsWith('peran-jabatan/')) {
    return 'role';
  }
  if (hub === 'industri' || path.startsWith('industri/')) {
    return 'industry';
  }
  if (path.startsWith('jenis-pelatihan/in-house-training-k3-') || key.startsWith('in-house-training-k3-')) {
    return 'regional';
  }
  if (
    key.startsWith('perbedaan-') ||
    key.startsWith('perpanjangan-') ||
    key.startsWith('pembentukan-') ||
    key.startsWith('kebutuhan-') ||
    key.startsWith('penanganan-klaim-') ||
    key.startsWith('penyusunan-') ||
    key.startsWith('tata-kelola-') ||
    key.startsWith('daftar-wajib-') ||
    key.startsWith('nilai-ambang-') ||
    key.startsWith('riksa-uji-') ||
    key.startsWith('matrix-') ||
    key.startsWith('syarat-operator-') ||
    key.startsWith('panduan-') ||
    key.startsWith('standar-') ||
    key.startsWith('prosedur-') ||
    key.startsWith('pengesahan-') ||
    key.startsWith('penerapan-') ||
    key.startsWith('penghargaan-')
  ) {
    return 'compliance_guide';
  }
  return 'technical_cert';
}

export function renderMultiArchetypeHtml(prog: MultiArchetypeProgramDetail): string {
  const archetype = detectArchetype(prog);

  switch (archetype) {
    case 'role':
      return renderRoleHtml(prog);
    case 'industry':
      return renderIndustryHtml(prog);
    case 'regional':
      return renderRegionalHtml(prog);
    case 'compliance_guide':
      return renderComplianceGuideHtml(prog);
    case 'technical_cert':
    default:
      return renderTechnicalCertHtml(prog);
  }
}

// ----------------------------------------------------
// ARCHETYPE 1: JOB ROLES & PROFESSIONAL POSITIONS
// ----------------------------------------------------
function renderRoleHtml(prog: MultiArchetypeProgramDetail): string {
  let html = `<div class="program-editorial-content role-archetype">
<p class="section-lead">${prog.intro}</p>

<h2 id="wewenang-tugas-operasional">1. Deskripsi Tugas, Wewenang & Tanggung Jawab Operasional</h2>
<p>Dalam ekosistem keselamatan kerja modern, personil yang memegang posisi ini memikul mandat operasional harian untuk menegakkan standar K3 tanpa kompromi. Tanggung jawab harian mencakup pengawasan kepatuhan teknis, otorisasi izin kerja aman, pelaksanaan safety briefing berkala, serta koordinasi lintas departemen.</p>
`;

  if (prog.hazards && prog.hazards.length > 0) {
    html += `<div class="role-critical-responsibilities">
<h3>Tantangan Kritis & Titik Rawan di Lapangan:</h3>
<ul>
${prog.hazards.map((h) => `  <li>${h}</li>`).join('\n')}
</ul>
</div>\n`;
  }

  html += `<h2 id="kualifikasi-legalitas-kompetensi">2. Kualifikasi Legalitas & Standar Sertifikasi Kompetensi</h2>
<p>Untuk menjalankan tugas secara sah di wilayah hukum Republik Indonesia, pemegang jabatan wajib memenuhi kualifikasi kompetensi kerja dan mengantongi sertifikat pembinaan resmi sesuai dengan regulasi berikut:</p>
<ul>
${prog.regulations.map((r) => `  <li>${r}</li>`).join('\n')}
</ul>

<h2 id="struktur-kompetensi-dan-silabus">3. Struktur Modul Pembinaan & Pengembangan Keterampilan</h2>
<p>Program pengembangan kompetensi dirancang untuk memperkuat kemampuan manajerial, audit teknis, komunikasi persuasif pekerja, serta penguasaan tanggap darurat:</p>
<div class="syllabus-modules">
${prog.modules
  .map(
    (m, idx) => `<div class="module-card">
  <h3>${m.name}</h3>
  <p><strong>Fokus Penguasaan Teori & Regulasi:</strong> ${m.theory}</p>
  <p><strong>Praktik Lapangan & Studi Kasus:</strong> ${m.practical}</p>
</div>`
  )
  .join('\n')}
</div>
`;

  if (prog.tableData && prog.tableData.headers && prog.tableData.rows) {
    html += `<h2 id="matriks-aktivitas-dokumen-kerja">4. Matriks Aktivitas Harian & Dokumen Rekaman Kerja</h2>
<p>Tabel berikut menguraikan parameter aktivitas rutin, frekuensi eksekusi di tempat kerja, serta tolak ukur kepatuhan yang harus dihasilkan:</p>
<div class="table-responsive">
<table class="data-table">
  <thead>
    <tr>
      ${prog.tableData.headers.map((h) => `<th>${h}</th>`).join('')}
    </tr>
  </thead>
  <tbody>
    ${prog.tableData.rows
      .map(
        (row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join('')}</tr>`
      )
      .join('\n    ')}
  </tbody>
</table>
</div>\n`;
  }

  html += `<h2 id="peralatan-kerja-dan-inspeksi">5. Instrumen Kerja, Checklist & Tooling Spesifik</h2>
<p>Dalam menjalankan tugas pengawasan harian, personil dilengkapi dengan instrumen pengukuran terkalibrasi dan formulir standar:</p>
<ul>
${prog.equipment.map((eq) => `  <li>${eq}</li>`).join('\n')}
</ul>

<h2 id="jenjang-karir-dan-profil-kandidat">6. Profil Kandidat, Prasyarat & Evaluasi Kelulusan</h2>
<p>Program pembinaan ini ditujukan bagi:</p>
<ul>
${prog.participants.map((part) => `  <li>${part}</li>`).join('\n')}
</ul>
<p>Evaluasi kelulusan dilaksanakan melalui penilaian komprehensif yang mencakup ujian teori regulasi, evaluasi studi kasus, penyusunan laporan observasi lapangan, serta wawancara kelayakan.</p>

<div class="editorial-crosslinks">
<h3>Rekomendasi Jalur Karir & Topik Terkait:</h3>
<div class="button-chip-grid">
${prog.links
  .map(
    (l) =>
      `  <a href="${l.href}" class="btn-chip" title="${l.label}"><span>👉 ${l.label}</span></a>`
  )
  .join('\n')}
</div>
</div>
</div>`;
  return html;
}

// ----------------------------------------------------
// ARCHETYPE 2: INDUSTRY & SECTOR VERTICALS
// ----------------------------------------------------
function renderIndustryHtml(prog: MultiArchetypeProgramDetail): string {
  let html = `<div class="program-editorial-content industry-archetype">
<p class="section-lead">${prog.intro}</p>

<h2 id="profil-risiko-sektor-industri">1. Karakteristik Operasional & Lanskap Risiko Sektor Industri</h2>
<p>Setiap sektor industri memiliki profil bahaya yang unik yang dipengaruhi oleh sifat bahan baku, kompleksitas mesin produksi, tekanan proses kimia/fisika, serta lingkungan kerja lingkungan kerja spesifik. Pengelolaan keselamatan menuntut integrasi antara Process Safety Management (PSM) dan disiplin operasional harian.</p>
`;

  if (prog.hazards && prog.hazards.length > 0) {
    html += `<div class="industry-major-hazards">
<h3>Potensi Bahaya Mayor & Major Accident Hazard (MAH):</h3>
<ul>
${prog.hazards.map((h) => `  <li>${h}</li>`).join('\n')}
</ul>
</div>\n`;
  }

  html += `<h2 id="kerangka-regulasi-sektoral">2. Kerangka Regulasi Sektoral & Standar Kepatuhan Kementerian</h2>
<p>Operasi industri ini diatur oleh regulasi multi-sektoral yang wajib dipenuhi oleh manajemen perusahaan guna menjamin izin usaha tetap valid dan terbebas dari sanksi hukum:</p>
<ul>
${prog.regulations.map((r) => `  <li>${r}</li>`).join('\n')}
</ul>

<h2 id="solusi-kurikulum-in-house-industri">3. Paket Kurikulum In-House Training Terintegrasi</h2>
<p>Kami merancang silabus khusus industri yang menyelaraskan materi pelatihan dengan Process Flow Diagram (PFD) dan tata letak fasilitas perusahaan:</p>
<div class="syllabus-modules">
${prog.modules
  .map(
    (m, idx) => `<div class="module-card">
  <h3>${m.name}</h3>
  <p><strong>Materi Analisis & Regulasi:</strong> ${m.theory}</p>
  <p><strong>Workshop Lapangan & Simulasi Tanggap Darurat:</strong> ${m.practical}</p>
</div>`
  )
  .join('\n')}
</div>
`;

  if (prog.tableData && prog.tableData.headers && prog.tableData.rows) {
    html += `<h2 id="matriks-bahaya-per-area-kerja">4. Matriks Titik Bahaya & Sistem Proteksi per Area Kerja</h2>
<p>Tabel berikut memetakan zonasi kerja utama, potensi risiko fatal spesifik, dan sistem pengendalian rekayasa serta APD wajib:</p>
<div class="table-responsive">
<table class="data-table">
  <thead>
    <tr>
      ${prog.tableData.headers.map((h) => `<th>${h}</th>`).join('')}
    </tr>
  </thead>
  <tbody>
    ${prog.tableData.rows
      .map(
        (row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join('')}</tr>`
      )
      .join('\n    ')}
  </tbody>
</table>
</div>\n`;
  }

  html += `<h2 id="peralatan-proteksi-industri">5. Standar Alat Pelindung Diri & Fasilitas Tanggap Darurat</h2>
<p>Pekerja dan regu tanggap darurat di sektor ini wajib dilengkapi dengan perlengkapan berspesifikasi industri khusus:</p>
<ul>
${prog.equipment.map((eq) => `  <li>${eq}</li>`).join('\n')}
</ul>

<h2 id="sasaran-peserta-dan-manajemen">6. Sasaran Peserta Pelatihan & Tim Lintas Divisi</h2>
<p>Program in-house training sektor ini dirancang untuk:</p>
<ul>
${prog.participants.map((part) => `  <li>${part}</li>`).join('\n')}
</ul>

<div class="editorial-crosslinks">
<h3>Jelajahi Program Sertifikasi Relevan:</h3>
<div class="button-chip-grid">
${prog.links
  .map(
    (l) =>
      `  <a href="${l.href}" class="btn-chip" title="${l.label}"><span>👉 ${l.label}</span></a>`
  )
  .join('\n')}
</div>
</div>
</div>`;
  return html;
}

// ----------------------------------------------------
// ARCHETYPE 3: REGIONAL HUBS & IN-HOUSE DELIVERY
// ----------------------------------------------------
function renderRegionalHtml(prog: MultiArchetypeProgramDetail): string {
  let html = `<div class="program-editorial-content regional-archetype">
<p class="section-lead">${prog.intro}</p>

<h2 id="profil-kawasan-dan-urgensi-k3">1. Profil Kawasan Industri & Kebutuhan Pelatihan On-Site</h2>
<p>Pertumbuhan fasilitas manufaktur, logistik, dan hilirisasi energi di kawasan ini menuntut kepatuhan regulasi K3 yang ketat dari Dinas Ketenagakerjaan setempat dan audit prinsipal internasional. Layanan in-house training kami hadir langsung di lokasi pabrik/site untuk mengoptimalkan efisiensi waktu dan biaya perusahaan.</p>
`;

  if (prog.hazards && prog.hazards.length > 0) {
    html += `<div class="regional-pain-points">
<h3>Kendala Umum Pelatihan Eksternal & Solusi In-House:</h3>
<ul>
${prog.hazards.map((h) => `  <li>${h}</li>`).join('\n')}
</ul>
</div>\n`;
  }

  html += `<h2 id="dasar-regulasi-dan-legalitas">2. Dasar Hukum Kepatuhan & Standar Sertifikasi Resmi</h2>
<p>Seluruh program pembinaan in-house yang kami selenggarakan terakreditasi penuh dan merujuk pada regulasi ketenagakerjaan resmi:</p>
<ul>
${prog.regulations.map((r) => `  <li>${r}</li>`).join('\n')}
</ul>

<h2 id="keunggulan-dan-skema-inhouse">3. Keunggulan Format In-House & Fleksibilitas Penjadwalan</h2>
<p>Kami menyusun skema pelaksanaan pelatihan yang fleksibel agar proses produksi harian perusahaan tetap berjalan lancar:</p>
<div class="syllabus-modules">
${prog.modules
  .map(
    (m, idx) => `<div class="module-card">
  <h3>${m.name}</h3>
  <p><strong>Kurikulum Disesuaikan (Tailored):</strong> ${m.theory}</p>
  <p><strong>Praktik Lapangan Menggunakan Mesin Klien:</strong> ${m.practical}</p>
</div>`
  )
  .join('\n')}
</div>
`;

  if (prog.tableData && prog.tableData.headers && prog.tableData.rows) {
    html += `<h2 id="matriks-program-terpopuler-kawasan">4. Matriks Program Pelatihan Terpopuler di Kawasan Ini</h2>
<p>Berikut adalah daftar program sertifikasi yang paling banyak diselenggarakan oleh perusahaan di kawasan ini beserta output kompetensinya:</p>
<div class="table-responsive">
<table class="data-table">
  <thead>
    <tr>
      ${prog.tableData.headers.map((h) => `<th>${h}</th>`).join('')}
    </tr>
  </thead>
  <tbody>
    ${prog.tableData.rows
      .map(
        (row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join('')}</tr>`
      )
      .join('\n    ')}
  </tbody>
</table>
</div>\n`;
  }

  html += `<h2 id="fasilitas-mobile-training-kit">5. Fasilitas Peraga Praktik Portabel & Tim Instruktur</h2>
<p>Tim instruktur kami membawa perangkat peraga uji terstandar ke fasilitas Anda:</p>
<ul>
${prog.equipment.map((eq) => `  <li>${eq}</li>`).join('\n')}
</ul>

<h2 id="alur-konsultasi-dan-proposal">6. Alur Permohonan In-House & Konsultasi Kebutuhan</h2>
<p>Program in-house training ini ditujukan untuk:</p>
<ul>
${prog.participants.map((part) => `  <li>${part}</li>`).join('\n')}
</ul>
<p>Tim kami menyediakan asesmen awal (Training Needs Analysis) secara gratis untuk menyusun rancangan proposal penawaran yang sesuai dengan target kompetensi dan jadwal shift kerja perusahaan Anda.</p>

<div class="editorial-crosslinks">
<h3>Jelajahi Wilayah Layanan & Program Lain:</h3>
<div class="button-chip-grid">
${prog.links
  .map(
    (l) =>
      `  <a href="${l.href}" class="btn-chip" title="${l.label}"><span>👉 ${l.label}</span></a>`
  )
  .join('\n')}
</div>
</div>
</div>`;
  return html;
}

// ----------------------------------------------------
// ARCHETYPE 4: COMPLIANCE & TECHNICAL STANDARDS GUIDES
// ----------------------------------------------------
function renderComplianceGuideHtml(prog: MultiArchetypeProgramDetail): string {
  let html = `<div class="program-editorial-content compliance-archetype">
<p class="section-lead">${prog.intro}</p>

<h2 id="landasan-hukum-dan-urgensi">1. Landasan Hukum & Urgensi Kepatuhan Perusahaan</h2>
<p>Kepatuhan terhadap standar teknis dan regulasi ini merupakan kewajiban hukum mutlak bagi setiap tempat kerja di Indonesia. Kegagalan memahami pasal-pasal ketentuan dapat memicu sanksi administratif, pembekuan izin operasi, hingga konsekuensi hukum ketenagakerjaan.</p>
`;

  if (prog.hazards && prog.hazards.length > 0) {
    html += `<div class="compliance-risks-callout">
<h3>Dampak Negatif & Risiko Ketidakpatuhan Legal:</h3>
<ul>
${prog.hazards.map((h) => `  <li>${h}</li>`).join('\n')}
</ul>
</div>\n`;
  }

  html += `<h2 id="referensi-pasal-dan-peraturan">2. Referensi Undang-Undang & Peraturan Menteri Terkait</h2>
<p>Ketentuan dalam panduan ini merujuk langsung pada dasar hukum ketenagakerjaan dan standar nasional berikut:</p>
<ul>
${prog.regulations.map((r) => `  <li>${r}</li>`).join('\n')}
</ul>

<h2 id="langkah-penerapan-dan-prosedur">3. Langkah demi Langkah Prosedur Penerapan di Perusahaan</h2>
<p>Berikut adalah tahapan teknis terstruktur untuk mengimplementasikan kepatuhan standar ini secara efektif di lingkungan kerja:</p>
<div class="syllabus-modules">
${prog.modules
  .map(
    (m, idx) => `<div class="module-card">
  <h3>${m.name}</h3>
  <p><strong>Aspek Legal & Teori Prosedural:</strong> ${m.theory}</p>
  <p><strong>Langkah Penerapan Lapangan & Verifikasi:</strong> ${m.practical}</p>
</div>`
  )
  .join('\n')}
</div>
`;

  if (prog.tableData && prog.tableData.headers && prog.tableData.rows) {
    html += `<h2 id="tabel-komparasi-dan-parameter">4. Tabel Parameter Standar, Kriteria Uji & Batas Ambang</h2>
<p>Gunakan tabel parameter resmi berikut sebagai acuan evaluasi pemenuhan standar di perusahaan Anda:</p>
<div class="table-responsive">
<table class="data-table">
  <thead>
    <tr>
      ${prog.tableData.headers.map((h) => `<th>${h}</th>`).join('')}
    </tr>
  </thead>
  <tbody>
    ${prog.tableData.rows
      .map(
        (row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join('')}</tr>`
      )
      .join('\n    ')}
  </tbody>
</table>
</div>\n`;
  }

  html += `<h2 id="checklist-dokumen-dan-perangkat">5. Checklist Dokumen Legal, Formulir & Alat Verifikasi</h2>
<p>Pastikan seluruh berkas administrasi dan instrumen verifikasi berikut telah siap sebelum dilakukan pemeriksaan:</p>
<ul>
${prog.equipment.map((eq) => `  <li>${eq}</li>`).join('\n')}
</ul>

<h2 id="tanggung-jawab-manajemen-dan-tim">6. Pihak Penanggung Jawab & Alur Konsultasi Kepatuhan</h2>
<p>Panduan ini wajib dipahami dan dieksekusi oleh:</p>
<ul>
${prog.participants.map((part) => `  <li>${part}</li>`).join('\n')}
</ul>

<div class="editorial-crosslinks">
<h3>Panduan Regulasi & Pelatihan Terkait:</h3>
<div class="button-chip-grid">
${prog.links
  .map(
    (l) =>
      `  <a href="${l.href}" class="btn-chip" title="${l.label}"><span>👉 ${l.label}</span></a>`
  )
  .join('\n')}
</div>
</div>
</div>`;
  return html;
}

// ----------------------------------------------------
// ARCHETYPE 5: TECHNICAL OPERATIONAL CERTIFICATIONS
// ----------------------------------------------------
function renderTechnicalCertHtml(prog: MultiArchetypeProgramDetail): string {
  let html = `<div class="program-editorial-content technical-archetype">
<p class="section-lead">${prog.intro}</p>

<h2 id="analisis-bahaya-dan-titik-kritis">1. Urgensi Keselamatan & Analisis Titik Bahaya Operasional</h2>
<p>Pekerjaan operasional ini tergolong ke dalam aktivitas berisiko tinggi (High Risk Activity) di mana kelalaian prosedur atau kegagalan mekanis dapat menimbulkan kecelakaan fatal seketika. Pemahaman menyeluruh terhadap mitigasi bahaya menjadi syarat mutlak sebelum personil diizinkan bertugas.</p>
`;

  if (prog.hazards && prog.hazards.length > 0) {
    html += `<div class="hazard-callout">
<h3>Potensi Kegagalan Kritis & Skenario Bahaya Lapangan:</h3>
<ul>
${prog.hazards.map((h) => `  <li>${h}</li>`).join('\n')}
</ul>
</div>\n`;
  }

  html += `<h2 id="kerangka-hukum-dan-lisensi-sio">2. Landasan Hukum & Lisensi Kewenangan Resmi (SIO/SKP)</h2>
<p>Program pembinaan dan sertifikasi ini diselenggarakan mengacu pada standar regulasi keselamatan kerja yang diakui pemerintah:</p>
<ul>
${prog.regulations.map((r) => `  <li>${r}</li>`).join('\n')}
</ul>

<h2 id="struktur-kurikulum-teori-dan-praktik">3. Silabus Pelatihan (Teori Teknis & Workshop Praktik Lapangan)</h2>
<p>Kurikulum pelatihan memadukan pendalaman teori regulasi keselamatan dengan porsi praktik lapangan menggunakan alat uji berstandar industri:</p>
<div class="syllabus-modules">
${prog.modules
  .map(
    (m, idx) => `<div class="module-card">
  <h3>${m.name}</h3>
  <p><strong>Materi Teori & Prosedur Aman:</strong> ${m.theory}</p>
  <p><strong>Praktik Lapangan & Field Drill:</strong> ${m.practical}</p>
</div>`
  )
  .join('\n')}
</div>
`;

  if (prog.tableData && prog.tableData.headers && prog.tableData.rows) {
    html += `<h2 id="spesifikasi-parameter-teknis">4. Matriks Spesifikasi Teknis & Kriteria Kelaikan</h2>
<p>Tabel parameter teknis berikut merupakan standar acuan kelaikan operasi dan batas toleransi aman di tempat kerja:</p>
<div class="table-responsive">
<table class="data-table">
  <thead>
    <tr>
      ${prog.tableData.headers.map((h) => `<th>${h}</th>`).join('')}
    </tr>
  </thead>
  <tbody>
    ${prog.tableData.rows
      .map(
        (row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join('')}</tr>`
      )
      .join('\n    ')}
  </tbody>
</table>
</div>\n`;
  }

  html += `<h2 id="peralatan-praktik-dan-apd">5. Peralatan Praktik Terstandarisasi & Alat Pelindung Diri (APD)</h2>
<p>Selama sesi pelatihan praktik dan ujian kompetensi lapangan, peserta dibekali peralatan standar berikut:</p>
<ul>
${prog.equipment.map((eq) => `  <li>${eq}</li>`).join('\n')}
</ul>

<h2 id="profil-peserta-dan-syarat-sertifikasi">6. Profil Peserta, Prasyarat & Evaluasi Kelulusan</h2>
<p>Program sertifikasi ini ditujukan bagi:</p>
<ul>
${prog.participants.map((part) => `  <li>${part}</li>`).join('\n')}
</ul>
<p>Evaluasi kompetensi meliputi ujian teori tertulis, penilaian praktik pengoperasian mandiri, serta verifikasi kelengkapan dokumen persyaratan kelaikan.</p>

<div class="editorial-crosslinks">
<h3>Program Pelatihan Terkait:</h3>
<div class="button-chip-grid">
${prog.links
  .map(
    (l) =>
      `  <a href="${l.href}" class="btn-chip" title="${l.label}"><span>👉 ${l.label}</span></a>`
  )
  .join('\n')}
</div>
</div>
</div>`;
  return html;
}
