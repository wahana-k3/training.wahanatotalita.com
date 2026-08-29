import { ProgramDetail } from './master-batch1-data';

export interface MultiArchetypeProgramDetail extends ProgramDetail {
  hub?: string;
  path?: string;
  archetype?: 'role' | 'industry' | 'regional' | 'compliance_guide' | 'technical_cert';
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
<p>Dalam ekosistem keselamatan kerja modern di industri manufaktur, pertambangan, energi, dan konstruksi, personil yang memegang posisi ini memikul mandat operasional harian untuk menegakkan standar K3 tanpa kompromi. Tanggung jawab harian mencakup pengawasan kepatuhan teknis, otorisasi izin kerja aman (Permit to Work), pelaksanaan safety briefing berkala (Toolbox Talk), investigasi potensi insiden nyaris celaka (Near Miss), serta koordinasi lintas departemen dengan manajemen puncak.</p>
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
<p>Program pengembangan kompetensi dirancang untuk memperkuat kemampuan manajerial, audit teknis, komunikasi persuasif pekerja, serta penguasaan tanggap darurat di fasilitas kerja:</p>
<div class="syllabus-modules">
${prog.modules
  .map(
    (m) => `<div class="module-card">
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
<p>Tabel berikut menguraikan parameter aktivitas rutin, frekuensi eksekusi di tempat kerja, serta tolak ukur kepatuhan yang harus dihasilkan untuk memenuhi audit SMK3 PP 50/2012:</p>
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

  html += `<h2 id="studi-kasus-lapangan-dan-rca">5. Studi Kasus Lapangan & Pembelajaran Insiden (Root Cause Analysis)</h2>
<p>Investigasi kecelakaan kerja di berbagai sektor industri menunjukkan bahwa 88% insiden fatal berakar dari kombinasi <em>Unsafe Action</em> (tindakan tidak aman akibat desakan waktu produksi) dan <em>Unsafe Condition</em> (kondisi alat atau lingkungan tidak laik). Pelatihan ini membekali peserta dengan metodologi <strong>Root Cause Analysis (RCA)</strong> menggunakan metode 5-Why dan Fishbone Diagram untuk mengidentifikasi kegagalan sistemik manajemen, bukan sekadar menyalahkan operator lini depan.</p>

<h2 id="peralatan-kerja-dan-inspeksi">6. Instrumen Kerja, Checklist & Tooling Spesifik</h2>
<p>Dalam menjalankan tugas pengawasan harian, personil dilengkapi dengan instrumen pengukuran terkalibrasi dan formulir standar berikut:</p>
<ul>
${prog.equipment.map((eq) => `  <li>${eq}</li>`).join('\n')}
</ul>

<h2 id="jenjang-karir-dan-profil-kandidat">7. Profil Sasaran Peserta, Prasyarat & Evaluasi Kelulusan</h2>
<p>Program pembinaan ini ditujukan bagi:</p>
<ul>
${prog.participants.map((part) => `  <li>${part}</li>`).join('\n')}
</ul>
<p>Evaluasi kelulusan dilaksanakan secara objektif melalui penilaian komprehensif yang mencakup ujian teori tertulis (Pre-Test & Post-Test), studi kasus manajemen risiko, simulasi presentasi safety talk, dan penyusunan laporan observasi lapangan mandiri.</p>

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
<p>Setiap sektor industri memiliki profil bahaya yang unik yang dipengaruhi oleh sifat bahan baku, kompleksitas mesin produksi, tekanan proses kimia/fisika, serta lingkungan kerja spesifik. Pengelolaan keselamatan menuntut integrasi antara Process Safety Management (PSM), Asset Integrity, dan disiplin operasional harian di seluruh lini fasilitas.</p>
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
<p>Kami merancang silabus khusus industri yang menyelaraskan materi pelatihan dengan Process Flow Diagram (PFD), Piping and Instrumentation Diagram (P&ID), serta tata letak fasilitas pabrik klien:</p>
<div class="syllabus-modules">
${prog.modules
  .map(
    (m) => `<div class="module-card">
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

  html += `<h2 id="analisis-mitigasi-bencana-industri">5. Protokol Tanggap Darurat & Mitigasi Bencana Industri</h2>
<p>Kesiapsiagaan menghadapi skenario darurat terburuk (seperti kebocoran gas beracun, ledakan uap, kebakaran skala besar, atau tumpahan bahan kimia ke lingkungan) membutuhkan pembentukan <strong>Emergency Response Team (ERT)</strong> terlatih. Pelatihan kami mencakup simulasi table-top drill, tata cara aktivasi alarm darurat, prosedur triase medis, komunikasi krisis ke instansi terkait, dan simulasi evakuasi terpadu (Mass Evacuation Drill).</p>

<h2 id="peralatan-proteksi-industri">6. Standar Alat Pelindung Diri & Fasilitas Tanggap Darurat</h2>
<p>Pekerja dan regu tanggap darurat di sektor ini wajib dilengkapi dengan perlengkapan berspesifikasi industri khusus:</p>
<ul>
${prog.equipment.map((eq) => `  <li>${eq}</li>`).join('\n')}
</ul>

<h2 id="sasaran-peserta-dan-manajemen">7. Sasaran Peserta Pelatihan & Tim Lintas Divisi</h2>
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
<p>Pertumbuhan fasilitas manufaktur, logistik, pengolahan kimia, dan hilirisasi energi di kawasan ini menuntut kepatuhan regulasi K3 yang ketat dari Pengawas Ketenagakerjaan Disnaker setempat dan audit prinsipal internasional. Layanan in-house training kami hadir langsung di lokasi pabrik/site untuk mengoptimalkan efisiensi waktu, memangkas biaya transportasi/akomodasi peserta, dan melatih staf langsung pada peralatan kerja sebenarnya.</p>
<p>Pelaksanaan pelatihan langsung di fasilitas operasional (on-site) memberikan keunggulan kompetitif bagi perusahaan: materi simulasi bahaya langsung disesuaikan dengan tata letak pabrik (plant layout), alur kerja (workflow) aktual, serta karakteristik bahaya kimia, mekanik, dan elektrik spesifik yang dihadapi tim di lapangan setiap hari.</p>
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
<p>Seluruh program pembinaan in-house yang kami selenggarakan terakreditasi penuh dan merujuk pada regulasi ketenagakerjaan resmi Republik Indonesia:</p>
<ul>
${prog.regulations.map((r) => `  <li>${r}</li>`).join('\n')}
</ul>

<h2 id="keunggulan-dan-skema-inhouse">3. Keunggulan Format In-House & Fleksibilitas Penjadwalan</h2>
<p>Kami menyusun skema pelaksanaan pelatihan yang fleksibel agar proses produksi harian perusahaan tetap berjalan lancar tanpa mengorbankan kualitas pelatihan:</p>
<div class="syllabus-modules">
${prog.modules
  .map(
    (m) => `<div class="module-card">
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
<p>Berikut adalah daftar program sertifikasi yang paling banyak diselenggarakan oleh perusahaan di kawasan ini beserta output kompetensi dan sertifikasi yang diterbitkan:</p>
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

  html += `<h2 id="tna-dan-custom-skenario">5. Metodologi Training Needs Analysis (TNA) & Audit Awal</h2>
<p>Sebelum pelaksanaan in-house training dimulai, tim konsultan dan instruktur senior kami melakukan asesmen awal (Training Needs Analysis) terhadap SOP perusahaan, catatan insiden historis, serta jenis mesin yang digunakan. Pendekatan ini menjamin bahwa studi kasus dan simulasi yang dibahas selama pelatihan 100% relevan dengan tantangan operasional harian yang dihadapi para peserta di pabrik Anda.</p>

<h2 id="protokol-pengawasan-disnaker-lokal">6. Koordinasi Pengawasan Disnaker & Penerbitan Sertifikat Resmi</h2>
<p>Setiap program pembinaan in-house yang mensyaratkan Lisensi K3 (SIO/SKP) dikoordinasikan langsung dengan Balai Pengawasan Ketenagakerjaan setempat. Ujian kompetensi diawasi secara resmi oleh Pengawas Ketenagakerjaan Spesialis K3 dari Kementerian Ketenagakerjaan RI, sehingga sertifikat dan lisensi yang diterima peserta terverifikasi keasliannya dan tercatat dalam database ketenagakerjaan nasional TemanK3.</p>

<h2 id="fasilitas-mobile-training-kit">7. Fasilitas Peraga Praktik Portabel & Tim Instruktur</h2>
<p>Tim instruktur kami membawa perangkat peraga uji terstandar ke fasilitas Anda:</p>
<ul>
${prog.equipment.map((eq) => `  <li>${eq}</li>`).join('\n')}
</ul>

<h2 id="alur-konsultasi-dan-proposal">8. Alur Permohonan In-House & Konsultasi Kebutuhan</h2>
<p>Program in-house training ini ditujukan untuk:</p>
<ul>
${prog.participants.map((part) => `  <li>${part}</li>`).join('\n')}
</ul>
<p>Tim kami menyediakan konsultasi dan penyusunan proposal penawaran resmi secara gratis. Hubungi konsultan kami via WhatsApp untuk mendapatkan rancangan silabus dan penawaran in-house training terbaik.</p>

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
<p>Kepatuhan terhadap standar teknis dan regulasi ini merupakan kewajiban hukum mutlak bagi setiap tempat kerja di wilayah hukum Republik Indonesia. Pengabaian terhadap pasal-pasal ketentuan keselamatan dapat memicu sanksi administratif berat, denda finansial, penghentian sementara operasional pabrik, hingga pertanggungjawaban pidana bagi pengurus perusahaan.</p>
<p>Sesuai amanat Undang-Undang No. 1 Tahun 1970 tentang Keselamatan Kerja dan regulasi turunannya, pengurus tempat kerja bertanggung jawab penuh menjamin kelaikan peralatan, kesehatan pekerja, serta pemenuhan batas ambang faktor bahaya lingkungan kerja di area operasional.</p>
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
<p>Ketentuan dalam panduan ini merujuk langsung pada dasar hukum ketenagakerjaan, standar nasional Indonesia (SNI), dan pedoman teknis kementerian terkait:</p>
<ul>
${prog.regulations.map((r) => `  <li>${r}</li>`).join('\n')}
</ul>

<h2 id="langkah-penerapan-dan-prosedur">3. Langkah demi Langkah Prosedur Penerapan di Perusahaan</h2>
<p>Berikut adalah tahapan teknis terstruktur untuk mengimplementasikan kepatuhan standar ini secara efektif dan efisien di lingkungan kerja Anda:</p>
<div class="syllabus-modules">
${prog.modules
  .map(
    (m) => `<div class="module-card">
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
<p>Gunakan tabel parameter resmi berikut sebagai acuan evaluasi pemenuhan standar dan verifikasi mandiri di tempat kerja:</p>
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

  html += `<h2 id="manajemen-audit-dan-pelaporan-disnaker">5. Prosedur Audit Internal & Pelaporan Berkala ke Disnaker</h2>
<p>Penerapan standar ini wajib didokumentasikan dalam sistem manajemen keselamatan kerja (SMK3) perusahaan. Pengurus wajib membuat laporan berkala kepada Pengawas Ketenagakerjaan di Dinas Tenaga Kerja setempat setiap 3 bulan sekali (triwulanan). Dokumentasi yang rapi meliputi notulen rapat P2K3, rekaman inspeksi harian, kalibrasi alat ukur, serta bukti pelaksanaan sertifikasi personil yang masih berlaku.</p>

<h2 id="penilaian-risiko-dan-tindakan-korektif">6. Metodologi Penilaian Risiko & Tindakan Korektif (CAPA)</h2>
<p>Setiap temuan ketidaksesuaian (non-conformance) wajib ditindaklanjuti dengan rencana perbaikan terstruktur (Corrective and Preventive Action / CAPA). Analisis dilakukan dengan meninjau hierarki pengendalian bahaya: Eliminasi sumber bahaya, Substitusi dengan bahan/alat yang lebih aman, Rekayasa Teknik (Engineering Controls), Pengendalian Administratif (SOP & Pelatihan), serta penyediaan APD terstandarisasi sebagai benteng perlindungan terakhir.</p>

<h2 id="checklist-dokumen-dan-perangkat">7. Checklist Dokumen Legal, Formulir & Alat Verifikasi</h2>
<p>Pastikan seluruh berkas administrasi dan instrumen verifikasi berikut telah siap sebelum dilakukan pemeriksaan resmi:</p>
<ul>
${prog.equipment.map((eq) => `  <li>${eq}</li>`).join('\n')}
</ul>

<h2 id="tanggung-jawab-manajemen-dan-tim">8. Pihak Penanggung Jawab & Alur Konsultasi Kepatuhan</h2>
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
<p>Pekerjaan operasional ini tergolong ke dalam aktivitas berisiko tinggi (High Risk Activity) di mana kelalaian prosedur atau kegagalan mekanis dapat menimbulkan kecelakaan fatal seketika, kerugian aset bernilai tinggi, dan penghentian total operasi fasilitas. Pemahaman menyeluruh terhadap mitigasi bahaya menjadi syarat mutlak sebelum personil diizinkan bertugas.</p>
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
<p>Program pembinaan dan sertifikasi ini diselenggarakan mengacu pada standar regulasi keselamatan kerja yang diakui pemerintah Republik Indonesia:</p>
<ul>
${prog.regulations.map((r) => `  <li>${r}</li>`).join('\n')}
</ul>

<h2 id="struktur-kurikulum-teori-dan-praktik">3. Silabus Pelatihan (Teori Teknis & Workshop Praktik Lapangan)</h2>
<p>Kurikulum pelatihan memadukan pendalaman teori regulasi keselamatan dengan porsi praktik lapangan menggunakan alat uji dan mesin operasional berstandar industri:</p>
<div class="syllabus-modules">
${prog.modules
  .map(
    (m) => `<div class="module-card">
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

  html += `<h2 id="checklist-sop-harian-dan-verifikasi">5. Checklist Inspeksi Pra-Operasional (Pre-Job Safety Check)</h2>
<p>Sebelum memulai pekerjaan, personil wajib melaksanakan pemeriksaan harian mencakup integritas visual alat, fungsi emergency stop, ketiadaan kebocoran fluida/energi, kebersihan area kerja, dan verifikasi kelengkapan dokumen Izin Kerja Aman (PTW & JSA). Formulir checklist ini menjadi rekaman legal saat terjadi audit kepatuhan.</p>

<h2 id="peralatan-praktik-dan-apd">6. Peralatan Praktik Terstandarisasi & Alat Pelindung Diri (APD)</h2>
<p>Selama sesi pelatihan praktik dan ujian kompetensi lapangan, peserta dibekali peralatan standar industri berikut:</p>
<ul>
${prog.equipment.map((eq) => `  <li>${eq}</li>`).join('\n')}
</ul>

<h2 id="profil-peserta-dan-syarat-sertifikasi">7. Profil Peserta, Prasyarat & Evaluasi Kelulusan</h2>
<p>Program sertifikasi ini ditujukan bagi:</p>
<ul>
${prog.participants.map((part) => `  <li>${part}</li>`).join('\n')}
</ul>
<p>Evaluasi kompetensi meliputi ujian teori tertulis, penilaian praktik pengoperasian mandiri, serta verifikasi kelengkapan dokumen persyaratan kelaikan oleh Pengawas Ketenagakerjaan / Asesor BNSP.</p>

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
