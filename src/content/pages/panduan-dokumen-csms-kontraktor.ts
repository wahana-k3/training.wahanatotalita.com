import { PageContentData } from '@/lib/types';

export const content: PageContentData = {
  key: "panduan-dokumen-csms-kontraktor",
  updated: "2026-08-30",
  faq: [
    {
      "q": "Berapa skor minimum pra-kualifikasi CSMS yang wajib dicapai kontraktor untuk pekerjaan kategori Risiko Tinggi (High Risk)?",
      "a": "Untuk pekerjaan berkategori Risiko Tinggi (seperti pekerjaan panas di kilang migas, lifting beban berat, konstruksi lepas pantai, atau pengeboran), kontraktor wajib meraih skor pra-kualifikasi minimal 70 hingga 80 poin (tergantung pedoman main contractor / SKK Migas) dengan nihil nilai nol pada elemen kritis manajemen risiko dan tanggap darurat."
    },
    {
      "q": "Berapa lama masa berlaku sertifikat pra-kualifikasi CSMS dan kapan audit ulang wajib dilakukan?",
      "a": "Sertifikat atau Surat Keterangan Lolos Pra-Kualifikasi CSMS umumnya berlaku selama 2 (dua) tahun. Namun, audit ulang atau evaluasi khusus wajib dilakukan lebih awal jika kontraktor mengalami kecelakaan kerja fatal (fatality), terjadi perubahan signifikan pada struktur manajemen K3, atau lingkup jasa yang ditawarkan meningkat tingkat risikonya."
    },
    {
      "q": "Apa perbedaan mendasar antara dokumen Pra-Kualifikasi CSMS dengan dokumen HSE Plan Kontrak?",
      "a": "Dokumen Pra-Kualifikasi CSMS mengevaluasi rekam jejak, sistem manajemen K3 formal, dan kebijakan umum perusahaan kontraktor secara korporat. Sedangkan dokumen HSE Plan Kontrak disusun khusus untuk satu proyek tertentu memuat analisis risiko JSA spesifik lokasi, nama personil K3 yang ditugaskan di lapangan, jadwal inspeksi proyek, dan prosedur darurat spesifik area kerja owner."
    }
  ],
  html: `<div class="program-editorial-content compliance-archetype">
<p class="section-lead"><strong>Contractor Safety Management System (CSMS)</strong> adalah sistem tata kelola keselamatan terstruktur yang wajib dipenuhi oleh seluruh vendor, kontraktor, dan subkontraktor dalam industri hulu/hilir migas (SKK Migas & Pertamina), pembangkitan listrik (PLN), industri petrokimia, pupuk, serta proyek infrastruktur BUMN. CSMS memastikan bahwa mitra kerja memiliki kompetensi, komitmen kepemimpinan, dan sistem mitigasi risiko yang setara dengan standar keselamatan perusahaan pemberi kerja.</p>

<h2 id="landasan-hukum-dan-urgensi">1. Landasan Hukum & Urgensi Kepatuhan Perusahaan</h2>
<p>Kelulusan pra-kualifikasi CSMS adalah syarat mutlak pintu masuk (<em>gateway requirement</em>) dalam proses pengadaan barang dan jasa bernilai tinggi. Kontraktor dengan sistem manajemen K3 yang lemah akan langsung dinyatakan gugur secara administratif pada tahap pra-kualifikasi sebelum dokumen penawaran komersial/harga dibuka.</p>
<p>Bagi kontraktor pelaksana, kegagalan mempertahankan kinerja keselamatan kerja selama kontrak berjalan dapat memicu penerbitan surat peringatan (Notice of Correction), denda penalti finansial, penghentian sepihak kontrak kerja, hingga penurunan grade nilai kualifikasi vendor dalam sistem e-procurement terpusat.</p>
<div class="compliance-risks-callout">
<h3>Dampak Negatif & Risiko Ketidakpatuhan Legal:</h3>
<ul>
  <li><strong>Gugur Otomatis pada Tahap Pra-Kualifikasi Tender:</strong> Kegagalan mengumpulkan bukti objektif (objective evidence) yang valid pada 6 elemen kuesioner menyebabkan skor pra-kualifikasi di bawah ambang batas kelulusan (>70 poin).</li>
  <li><strong>Pemberian Sanksi Blacklist / Penangguhan Rekanan:</strong> Terjadinya insiden kecelakaan fatal (fatality) atau pencemaran lingkungan berat akibat kelalaian kontraktor memicu sanksi pembekuan hak mengikuti tender selama 1 hingga 3 tahun.</li>
  <li><strong>Penahanan Pembayaran Tagihan Proyek (Invoice Hold):</strong> Ketiadaan laporan kinerja bulanan (HSE Monthly Report) atau ketidaklengkapan sertifikat personil di lapangan mengakibatkan penundaan persetujuan progress termin kerja.</li>
  <li><strong>Klaim Pertanggungjawaban Hukum Ganti Rugi:</strong> Kecelakaan kerja di area fasilitas operasional owner memicu audit investigasi bersama dan tuntutan ganti rugi aset fasilitas yang rusak.</li>
</ul>
</div>

<h2 id="referensi-pasal-dan-peraturan">2. Referensi Undang-Undang & Peraturan Menteri Terkait</h2>
<p>Penerapan CSMS merujuk secara legal pada regulasi ketenagakerjaan nasional, standar industri perminyakan, dan pedoman tata kerja resmi:</p>
<ul>
  <li><strong>Undang-Undang No. 1 Tahun 1970</strong> tentang Keselamatan Kerja (Pasal 2 dan Pasal 9 tentang Pembinaan K3 bagi Tenaga Kerja Kontraktor).</li>
  <li><strong>Peraturan Pemerintah No. 50 Tahun 2012</strong> tentang Penerapan Sistem Manajemen Keselamatan dan Kesehatan Kerja (SMK3).</li>
  <li><strong>Pedoman Tata Kerja SKK Migas No. PTK-005/SKKMA0000/2018/S0</strong> tentang Pengelolaan Keselamatan, Kesehatan Kerja, dan Lindungan Lingkungan (K3LL) Kontraktor.</li>
  <li><strong>Pedoman CSMS PT Pertamina (Persero)</strong> dan Keputusan Direksi Badan Usaha Milik Negara terkait Standar Rekanan.</li>
  <li><strong>Standar IOGP Report 423</strong> (HSE Management - Guidelines for Working Together in a Contract Environment).</li>
  <li><strong>Standar ISO 45001:2018</strong> tentang Sistem Manajemen Keselamatan dan Kesehatan Kerja.</li>
</ul>

<h2 id="langkah-penerapan-dan-prosedur">3. Langkah demi Langkah Prosedur Penerapan di Perusahaan</h2>
<p>Berikut adalah 4 langkah terstruktur bagi kontraktor untuk menyusun berkas, lolos audit verifikasi, dan mengelola implementasi CSMS:</p>
<div class="syllabus-modules">
<div class="module-card">
  <h3>Modul 1: Pemetaan 6 Tahapan Siklus CSMS & Matriks Risiko Kontrak</h3>
  <p><strong>Aspek Legal & Teori Prosedural:</strong> Pemahaman menyeluruh 6 tahapan siklus CSMS (1. Penilaian Risiko Kontrak, 2. Pra-Kualifikasi, 3. Seleksi Tender, 4. Pra-Pekerjaan, 5. Pelaksanaan Pekerjaan, 6. Evaluasi Akhir), kriteria penentuan tingkat risiko pekerjaan (Rendah, Sedang, Tinggi), dan penetapan bobot penilaian kuesioner.</p>
  <p><strong>Langkah Penerapan Lapangan & Verifikasi:</strong> Penilaian mandiri (self-assessment) profil risiko portofolio layanan perusahaan terhadap standar PTK-005 SKK Migas.</p>
</div>
<div class="module-card">
  <h3>Modul 2: Strategi Pemenuhan 6 Elemen Kuesioner & Bukti Objektif</h3>
  <p><strong>Aspek Legal & Teori Prosedural:</strong> Teknik pengisian dan penyusunan bukti objektif (objective evidence) 6 elemen inti: (1) Kepemimpinan & Komitmen Manajemen, (2) Kebijakan K3LL & Sasaran Strategis, (3) Organisasi, Tanggung Jawab, Sumber Daya & Standar, (4) Manajemen Risiko & HIRADC, (5) Perencanaan, Prosedur Kerja & ERP, (6) Pemantauan Kinerja, Audit & Pelaporan Insiden.</p>
  <p><strong>Langkah Penerapan Lapangan & Verifikasi:</strong> Kompilasi berkas pendukung: notulen Management Walkthrough (MWT), sertifikat Ahli K3 personil, logbook kalibrasi alat, dan statistik jam kerja selamat (TRIR / LTIFR).</p>
</div>
<div class="module-card">
  <h3>Modul 3: Penyusunan Dokumen HSE Plan Spesifik & Pre-Job Activity</h3>
  <p><strong>Aspek Legal & Teori Prosedural:</strong> Metodologi penyusunan dokumen HSE Plan khusus kontrak tender, prosedur Pre-Job Meeting, verifikasi kelaikan peralatan kerja (Bridging Document), pelaksanaan safety induction pekerja proyek, serta pengesahan Surat Izin Kerja Aman (PTW).</p>
  <p><strong>Langkah Penerapan Lapangan & Verifikasi:</strong> Simulasi presentasi HSE Plan di hadapan tim evaluasi tender owner dan pembuatan matriks integrasi tanggap darurat kontraktor-owner.</p>
</div>
<div class="module-card">
  <h3>Modul 4: Monitoring Kinerja Berjalan (WIP) & Penilaian Akhir Vendor</h3>
  <p><strong>Aspek Legal & Teori Prosedural:</strong> Pelaksanaan audit berkala di lapangan (Work in Progress Audit), pemantauan KPI keselamatan bulanan (Leading & Lagging Indicators), pengelolaan subkontraktor tier-2, serta prosedur rapat evaluasi akhir kontrak (Close-out HSE Performance Review).</p>
  <p><strong>Langkah Penerapan Lapangan & Verifikasi:</strong> Penyusunan laporan bulanan HSE Monthly Report dan lembar rekapitulasi evaluasi akhir kinerja keselamatan proyek.</p>
</div>
</div>

<h2 id="tabel-komparasi-dan-parameter">4. Tabel Parameter Standar, Kriteria Uji & Batas Ambang</h2>
<p>Ketentuan klasifikasi risiko kontrak, batas skor kelulusan pra-kualifikasi CSMS, dan instrumen pengendaliannya dirangkum dalam tabel berikut:</p>
<div class="table-responsive">
<table class="data-table">
  <thead>
    <tr>
      <th>Tingkat Risiko Kontrak</th>
      <th>Skor Minimum Pra-Kualifikasi</th>
      <th>Contoh Lingkup Pekerjaan</th>
      <th>Dokumen Wajib Tambahan</th>
      <th>Frekuensi Audit Lapangan</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Risiko Tinggi (High Risk)</td>
      <td>Skor minimal 70 hingga 80 Poin</td>
      <td>Hot work kilang, pengeboran sumur, heavy lifting crane, confined space</td>
      <td>HSE Plan terperinci, JSA tiap tugas, sertifikat personil K3 penuh</td>
      <td>Audit formal setiap bulan & inspeksi harian</td>
    </tr>
    <tr>
      <td>Risiko Sedang (Medium Risk)</td>
      <td>Skor minimal 55 hingga 69 Poin</td>
      <td>Pekerjaan sipil gedung, instalasi perpipaan air, pengecatan fasilitas</td>
      <td>HSE Plan standar, HIRADC pekerjaan, SOP kerja aman</td>
      <td>Audit formal setiap triwulan</td>
    </tr>
    <tr>
      <td>Risiko Rendah (Low Risk)</td>
      <td>Skor minimal 40 hingga 54 Poin</td>
      <td>Jasa katering kantor, pengadaan alat tulis, konsultansi IT non-lapangan</td>
      <td>Pakta integritas K3 & komitmen manajemen</td>
      <td>Evaluasi acak (sampling audit)</td>
    </tr>
  </tbody>
</table>
</div>

<h2 id="manajemen-audit-dan-pelaporan-disnaker">5. Prosedur Audit Internal & Pelaporan Berkala ke Disnaker</h2>
<p>Kontraktor wajib memelihara rekam jejak keselamatan seluruh proyek secara terpadu. Statistik keselamatan kerja—mencakup Total Recordable Incident Rate (TRIR), Lost Time Injury Frequency Rate (LTIFR), jam kerja selamat kumulatif, serta temuan inspeksi—wajib dilaporkan setiap bulan kepada project manager owner dan diintegrasikan ke dalam Laporan P2K3 triwulanan perusahaan kepada Dinas Tenaga Kerja setempat.</p>
<p>Audit internal kepatuhan CSMS wajib dilakukan secara mandiri minimal 6 bulan sekali untuk memastikan seluruh bukti dokumentasi tetap diperbarui sebelum audit perpanjangan sertifikat CSMS oleh auditor eksternal owner.</p>

<h2 id="penilaian-risiko-dan-tindakan-korektif">6. Metodologi Penilaian Risiko & Tindakan Korektif (CAPA)</h2>
<p>Setiap temuan audit lapangan (WIP Audit) atau laporan penghentian kerja sementara (Stop Work Authority) oleh pengawas owner wajib direspon dengan formulir Tindakan Korektif dan Pencegahan (CAPA) resmi dalam batas waktu maksimal 3x24 jam.</p>
<p>Kontraktor wajib melakukan analisis akar penyebab kegagalan prosedur, memperbaiki metode kerja lapangan, mengganti peralatan yang tidak laik pakai, memberikan pelatihan penyegaran kepada tenaga kerja, serta melaporkan bukti foto penyelesaian perbaikan kepada tim HSE owner.</p>

<h2 id="checklist-dokumen-dan-perangkat">7. Checklist Dokumen Legal, Formulir & Alat Verifikasi</h2>
<p>Sebelum mengunggah berkas pra-kualifikasi CSMS ke portal pengadaan owner, pastikan kelengkapan berkas telah memenuhi daftar periksa berikut:</p>
<ul>
  <li><strong>Kebijakan K3LL Tertulis & Bertanggal:</strong> Ditandatangani Direktur Utama, disosialisasikan kepada seluruh karyawan, dan ditinjau berkala dalam rentang 2 tahun terakhir.</li>
  <li><strong>Struktur Organisasi & Bukti Kompetensi HSE:</strong> SK penunjukan tim K3 perusahaan, salinan sertifikat Ahli K3 Umum / Ahli K3 Migas Kemnaker, dan sertifikat Auditor SMK3 yang masih berlaku.</li>
  <li><strong>Bukti Objective Evidence Kuesioner 6 Elemen:</strong> Foto dan notulen rapat keselamatan, laporan Management Walkthrough, daftar inventaris APD standar SNI/ANSI, sertifikat kalibrasi alat ukur, dan jadwal pelatihan K3 tahunan.</li>
  <li><strong>Manual Sistem Manajemen K3 & Prosedur Tanggap Darurat:</strong> SOP mitigasi kecelakaan kerja, diagram alur tanggap darurat medis, laporan simulasi drill evakuasi kebakaran tahun berjalan, dan MoU rumah sakit rujukan.</li>
  <li><strong>Statistik Kinerja K3LL Tiga Tahun Terakhir:</strong> Rekapitulasi jam kerja orang (man-hours), nihil fatality, data klaim BPJS Ketenagakerjaan, serta surat rekomendasi kinerja keselamatan dari klien sebelumnya.</li>
</ul>

<h2 id="tanggung-jawab-manajemen-dan-tim">8. Pihak Penanggung Jawab & Alur Konsultasi Kepatuhan</h2>
<p>Penyusunan berkas dan keberhasilan implementasi CSMS dikelola secara terpadu oleh:</p>
<ul>
  <li>Direktur Utama & Manajemen Puncak Kontraktor (Pemberi Komitmen & Anggaran K3).</li>
  <li>HSE Manager & Safety Specialist (Penyusun Dokumen CSMS & HSE Plan).</li>
  <li>Tender & Bidding Manager (Integrasi Berkas K3 ke dalam Dokumen Penawaran).</li>
  <li>Project Manager & Site Supervisor Lapangan (Eksekutor SOP & Verifikasi Pekerjaan).</li>
  <li>Tim Evaluator CSMS & Procurement Specialist Perusahaan Pemberi Kerja (Owner).</li>
</ul>

<div class="editorial-crosslinks">
<h3>Panduan Regulasi & Pelatihan Terkait:</h3>
<div class="button-chip-grid">
  <a href="/kategori-pelatihan/penyusunan-rkk-dan-smkk-pupr/" class="btn-chip" title="Penyusunan RKK dan SMKK PUPR"><span>👉 Penyusunan RKK & SMKK</span></a>
  <a href="/kategori-pelatihan/lead-auditor-iso-45001/" class="btn-chip" title="Lead Auditor ISO 45001"><span>👉 Lead Auditor ISO 45001</span></a>
  <a href="/kategori-pelatihan/job-safety-analysis-jsa-authoring/" class="btn-chip" title="Penyusunan Job Safety Analysis"><span>👉 Penyusunan JSA Proyek</span></a>
  <a href="/kategori-pelatihan/matrix-hiradc-dan-ibprp/" class="btn-chip" title="Penyusunan HIRADC dan IBPRP"><span>👉 Penyusunan HIRADC</span></a>
</div>
</div>
</div>`
};
