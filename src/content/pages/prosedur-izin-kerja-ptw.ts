import { PageContentData } from '@/lib/types';

export const content: PageContentData = {
  key: "prosedur-izin-kerja-ptw",
  updated: "2026-08-30",
  faq: [
    {
      "q": "Berapa lama masa berlaku normal satu lembar formulir Permit to Work (PTW)?",
      "a": "Masa berlaku normal dokumen PTW adalah 1 (satu) shift kerja operasional (antara 8 hingga 12 jam). Izin kerja dapat diperpanjang maksimal hingga 24 jam dengan syarat dilakukan pemeriksaan ulang kondisi lingkungan kerja (re-validasi gas dan isolasi energi) serta ditandatangani ulang oleh Area Authority dan Performing Authority yang bertugas pada shift berikutnya."
    },
    {
      "q": "Apakah pekerjaan panas (Hot Work) boleh dimulai jika formulir PTW sudah ditandatangani tetapi Fire Watcher belum berada di lokasi?",
      "a": "Tidak boleh. Keberadaan petugas pengawas api (Fire Watcher) yang terlatih dengan APAR siap pakai adalah syarat mutlak pelaksanaan izin kerja panas. Jika Fire Watcher meninggalkan lokasi kerja karena alasan apapun, pekerjaan panas wajib dihentikan seketika sampai petugas pengawas kembali ke posnya."
    },
    {
      "q": "Apa yang harus dilakukan dengan lembar dokumen PTW setelah pekerjaan selesai dilaksanakan?",
      "a": "Setelah pekerjaan selesai, seluruh peralatan dibereskan, dan area kerja dibersihkan, dilakukan inspeksi bersama (joint handback inspection) oleh Area Authority dan Performing Authority. Keduanya menandatangani kolom 'Work Completed / Handback' pada seluruh rangkap formulir PTW untuk mencabut status izin kerja dan mengembalikan area ke status operasional normal."
    }
  ],
  html: `<div class="program-editorial-content compliance-archetype">
<p class="section-lead">Sistem <strong>Izin Kerja Aman (Permit to Work / PTW)</strong> adalah otorisasi formal tertulis yang mengendalikan seluruh aktivitas pekerjaan berisiko tinggi dan pekerjaan non-rutin di lingkungan industri perminyakan, petrokimia, pembangkit listrik, manufaktur, dan konstruksi. Sistem PTW memastikan bahwa seluruh potensi bahaya telah diidentifikasi, sumber energi telah diisolasi secara fisik (LOTO), dan langkah pencegahan telah diverifikasi di lapangan sebelum pekerjaan diizinkan dimulai.</p>

<h2 id="landasan-hukum-dan-urgensi">1. Landasan Hukum & Urgensi Kepatuhan Perusahaan</h2>
<p>Penerapan sistem Permit to Work merupakan elemen inti dari Sistem Manajemen Keselamatan dan Kesehatan Kerja (SMK3) yang diwajibkan oleh hukum perburuhan Indonesia. Menjalankan pekerjaan berisiko tinggi tanpa izin kerja yang sah merupakan pelanggaran keselamatan kerja berat yang sering kali menjadi akar penyebab terjadinya kebakaran kilang, ledakan bejana, atau kecelakaan fatal di ruang terbatas.</p>
<p>Sistem PTW bukan sekadar formalitas pengisian formulir di atas kertas (paper safety), melainkan media koordinasi formal antara penanggung jawab area operasi pabrik dengan tim kontraktor pelaksana guna mencegah terjadinya konflik antar-pekerjaan yang berlangsung bersamaan (Simultaneous Operations / SIMOPS).</p>
<div class="compliance-risks-callout">
<h3>Dampak Negatif & Risiko Ketidakpatuhan Legal:</h3>
<ul>
  <li><strong>Pekerjaan Panas Menyulut Gas Hidrokarbon Aktif:</strong> Pelaksanaan pengelasan atau penggerindaan tanpa Hot Work Permit dan uji gas LEL yang memicu ledakan pipa gas aktif di sekitar area kerja.</li>
  <li><strong>Kecelakaan SIMOPS (Simultaneous Operations Conflict):</strong> Dua pekerjaan bertolak belakang (misalnya pekerjaan panas pengelasan tepat di atas pekerjaan penyemprotan cat pelarut mudah terbakar) terjadi tanpa koordinasi Area Authority.</li>
  <li><strong>Pekerja Terjebak Akibat Isolasi Energi Palsu:</strong> Teknisi mekanik memperbaiki mesin berputar tanpa verifikasi formulir Electrical Isolation & LOTO Permit sehingga mesin menyala tiba-tiba dari ruang kendali pusat.</li>
  <li><strong>Pembatalan Klaim Asuransi Kerusakan Properti:</strong> Perusahaan asuransi menolak klaim kerugian kebakaran industri jika investigasi membuktikan pekerjaan panas dilakukan tanpa izin PTW resmi.</li>
</ul>
</div>

<h2 id="referensi-pasal-dan-peraturan">2. Referensi Undang-Undang & Peraturan Menteri Terkait</h2>
<p>Tata kelola sistem perizinan kerja aman diatur dalam standar keselamatan kerja nasional dan internasional:</p>
<ul>
  <li><strong>Undang-Undang No. 1 Tahun 1970</strong> tentang Keselamatan Kerja (Pasal 2, Pasal 3, dan Pasal 9 tentang Syarat Keselamatan Kerja dan Otorisasi Tugas).</li>
  <li><strong>Peraturan Pemerintah No. 50 Tahun 2012</strong> tentang Penerapan Sistem Manajemen K3 (Kriteria 6.5.4 tentang Sistem Izin Kerja Aman).</li>
  <li><strong>Permenaker No. 11 Tahun 2023</strong> tentang K3 di Ruang Terbatas (Kewajiban Permit-Required Confined Space).</li>
  <li><strong>Permenaker No. 12 Tahun 2015</strong> tentang K3 Listrik di Tempat Kerja (Izin Kerja Instalasi Listrik dan LOTO).</li>
  <li><strong>Permenaker No. 9 Tahun 2016</strong> tentang K3 dalam Pekerjaan pada Ketinggian.</li>
  <li><strong>Standar OSHA 29 CFR 1910.119</strong> (Process Safety Management of Highly Hazardous Chemicals - Hot Work Permits).</li>
</ul>

<h2 id="langkah-penerapan-dan-prosedur">3. Langkah demi Langkah Prosedur Penerapan di Perusahaan</h2>
<p>Berikut adalah 4 tahapan teknis terstruktur dalam alur siklus otorisasi dan penerbitan izin kerja aman (PTW Lifecycle):</p>
<div class="syllabus-modules">
<div class="module-card">
  <h3>Modul 1: Struktur Otoritas & Peran 4 Pihak Penanggung Jawab PTW</h3>
  <p><strong>Aspek Legal & Teori Prosedural:</strong> Batasan wewenang dan akuntabilitas: (1) Performing Authority (PA / Pemohon Izin Pelaksana), (2) Area Authority (AA / Penguasa Area Operasi / Custodian), (3) Safety Officer / HSE Inspector (Verifikator Analisis Bahaya), dan (4) Approving Authority / Plant Manager (Pemberi Otorisasi Akhir).</p>
  <p><strong>Langkah Penerapan Lapangan & Verifikasi:</strong> Simulasi proses permohonan izin kerja dari kontraktor mekanik kepada pengawas shift area kilang minyak.</p>
</div>
<div class="module-card">
  <h3>Modul 2: Klasifikasi Jenis Izin Khusus & Sertifikat Lampiran</h3>
  <p><strong>Aspek Legal & Teori Prosedural:</strong> Pembagian formulir izin kerja multi-copy berwarna: Hot Work (Merah), Confined Space (Kuning), Electrical Isolation & LOTO (Biru), Working at Height (Oranye), Cold Work (Hijau); serta dokumen pendukung wajib: Job Safety Analysis (JSA), sertifikat uji gas, sertifikat isolasi mekanik/listrik, dan sertifikat penutupan jalan (road closure).</p>
  <p><strong>Langkah Penerapan Lapangan & Verifikasi:</strong> Praktek pemilihan jenis formulir PTW dan penyusunan lampiran JSA terpadu untuk pekerjaan penggantian katup pipa uap panas.</p>
</div>
<div class="module-card">
  <h3>Modul 3: Verifikasi Lokasi Bersama (Joint Site Inspection) & Mitigasi SIMOPS</h3>
  <p><strong>Aspek Legal & Teori Prosedural:</strong> Pelaksanaan audit fisik bersama di lokasi kerja (pre-job site walk) sebelum izin ditandatangani, verifikasi pemasangan gembok LOTO pada pemutus arus, pengujian kadar gas LEL/toksik, penempatan terpal tahan api (fire blanket) dan APAR, serta pengecekan peta matriks konflik pekerjaan bersamaan (SIMOPS Matrix).</p>
  <p><strong>Langkah Penerapan Lapangan & Verifikasi:</strong> Pelaksanaan simulasi joint site visit di fasilitas unit proses dan penandatanganan pengesahan di lokasi kerja (sign at site rule).</p>
</div>
<div class="module-card">
  <h3>Modul 4: Manajemen Shift, Re-Validasi & Prosedur Serah Terima (Handback)</h3>
  <p><strong>Aspek Legal & Teori Prosedural:</strong> Prosedur penggantian shift kerja (shift handover), pembatalan izin otomatis saat alarm darurat pabrik berbunyi, prosedur perpanjangan izin (permit extension), inspeksi kebersihan paska kerja (housekeeping check), pelepasan gembok isolasi LOTO, dan penandatanganan penutupan izin (Handback Close-out).</p>
  <p><strong>Langkah Penerapan Lapangan & Verifikasi:</strong> Praktek penutupan formulir PTW pada papan display perizinan (Permit Board) dan pengarsipan logbook perizinan.</p>
</div>
</div>

<h2 id="tabel-komparasi-dan-parameter">4. Tabel Parameter Standar, Kriteria Uji & Batas Ambang</h2>
<p>Klasifikasi jenis izin kerja khusus, warna formulir standar, potensi bahaya kritis, dan dokumen lampiran wajib dirangkum dalam tabel berikut:</p>
<div class="table-responsive">
<table class="data-table">
  <thead>
    <tr>
      <th>Jenis Izin Kerja Khusus (PTW)</th>
      <th>Warna Lembar Standar</th>
      <th>Potensi Bahaya Kritis</th>
      <th>Dokumen Lampiran Wajib</th>
      <th>Masa Berlaku Maksimal</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Hot Work Permit (Izin Kerja Panas)</td>
      <td>MERAH</td>
      <td>Percikan api las, suhu tinggi, ledakan gas uap hidrokarbon</td>
      <td>Sertifikat Uji Gas (LEL 0%), Checklist Fire Watcher, APAR</td>
      <td>1 Shift Kerja (Maksimal 12 Jam)</td>
    </tr>
    <tr>
      <td>Confined Space Entry Permit</td>
      <td>KUNING</td>
      <td>Asfiksia O2, keracunan gas H2S/CO, terperangkap</td>
      <td>Gas Testing Log Sheet 4-Gas, Standby Person Log, Rescue Plan</td>
      <td>1 Shift Kerja (Maksimal 8 Jam)</td>
    </tr>
    <tr>
      <td>Electrical & LOTO Isolation Permit</td>
      <td>BIRU</td>
      <td>Sengatan arus listrik tegangan tinggi, busur api Arc Flash</td>
      <td>Electrical Isolation Certificate, Daftar Gembok LOTO, Voltage Test Log</td>
      <td>Durasi pekerjaan pemeliharaan</td>
    </tr>
    <tr>
      <td>Working at Height Permit</td>
      <td>ORANYE</td>
      <td>Jatuh dari ketinggian > 1,8 meter, tertimpa barang jatuh</td>
      <td>Scafftag Hijau / Cherry Picker Pre-Check, 100% Tie-Off Plan</td>
      <td>1 Shift Kerja (Maksimal 12 Jam)</td>
    </tr>
    <tr>
      <td>Cold Work Permit (Kerja Dingin)</td>
      <td>HIJAU</td>
      <td>Titik jepit mekanik, tertimpa beban, kebocoran fluida dingin</td>
      <td>Job Safety Analysis (JSA) & Bukti Toolbox Meeting</td>
      <td>1 Shift Kerja (Maksimal 12 Jam)</td>
    </tr>
  </tbody>
</table>
</div>

<h2 id="manajemen-audit-dan-pelaporan-disnaker">5. Prosedur Audit Internal & Pelaporan Berkala ke Disnaker</h2>
<p>Seluruh berkas dokumen formulir PTW yang telah ditutup (closed-out) wajib diarsipkan secara terpusat oleh Departemen HSE minimal selama 12 bulan untuk keperluan audit kepatuhan. Papan kontrol perizinan terpusat (Central Permit Board) wajib dipelihara di ruang kendali utama (Control Room) untuk memantau seluruh izin kerja yang sedang aktif secara realtime.</p>
<p>Kepatuhan prosedur PTW dievaluasi secara berkala dalam audit internal SMK3 PP 50/2012 dan dilaporkan sebagai bagian dari pemenuhan kriteria operasi kerja aman dalam Laporan Triwulanan P2K3 kepada Dinas Tenaga Kerja setempat.</p>

<h2 id="penilaian-risiko-dan-tindakan-korektif">6. Metodologi Penilaian Risiko & Tindakan Korektif (CAPA)</h2>
<p>Pelanggaran prosedur perizinan kerja—seperti memulai pekerjaan sebelum izin ditandatangani atau ketiadaan APD khusus yang dipersyaratkan—dikenai tindakan penghentian kerja seketika (Stop Work Authority) dan penerbitan formulir Tindakan Korektif (CAPA).</p>
<p>Penyelidikan dilakukan untuk mengetahui mengapa izin diterbitkan tanpa verifikasi lapangan, memberikan teguran disipliner kepada pemohon dan penguasa area, serta menyelenggarakan sesi pelatihan penyegaran sistem PTW sebelum izin baru dapat diterbitkan kembali.</p>

<h2 id="checklist-dokumen-dan-perangkat">7. Checklist Dokumen Legal, Formulir & Alat Verifikasi</h2>
<p>Sebelum pekerjaan di lapangan dimulai, tim pelaksana dan pengawas wajib memeriksa daftar periksa verifikasi berikut:</p>
<ul>
  <li><strong>Keabsahan Tanda Tangan Seluruh Pihak Otoritas:</strong> Formulir PTW telah ditandatangani lengkap oleh Performing Authority, Area Authority, Safety Officer, dan Approving Authority.</li>
  <li><strong>Verifikasi Dokumen JSA Terlampir:</strong> Analisis Keselamatan Pekerjaan (JSA) telah ditinjau dan disosialisasikan kepada seluruh pekerja dalam briefing Toolbox Meeting harian.</li>
  <li><strong>Pemeriksaan Fisik Isolasi Energi (LOTO Box):</strong> Gembok pengunci dan label penanda isolasi terpasang pada saklar pemutus listrik utama atau katup pipa fluida.</li>
  <li><strong>Pengujian Gas Atmosfer Valid (Khusus Hot Work / Confined Space):</strong> Hasil pengujian gas menunjukkan kondisi aman dan dicatat kurang dari 30 menit sebelum pekerjaan dimulai.</li>
  <li><strong>Penempatan Lembar Izin Kerja Asli di Lokasi:</strong> Salinan dokumen PTW asli terbungkus plastik kedap air dan digantungkan secara jelas di titik lokasi kerja aktif.</li>
</ul>

<h2 id="tanggung-jawab-manajemen-dan-tim">8. Pihak Penanggung Jawab & Alur Konsultasi Kepatuhan</h2>
<p>Sistem otorisasi dan penegakan disiplin Izin Kerja Aman (PTW) dijalankan oleh personil kunci fasilitas industri:</p>
<ul>
  <li>Facility Manager / Plant Manager (Approving Authority Tertinggi).</li>
  <li>Area Authority / Operations Supervisor (Penguasa Fisik Area Kerja).</li>
  <li>Performing Authority / Contractor Supervisor (Pemohon Izin & Pimpinan Pelaksana).</li>
  <li>Safety Officer / HSE Inspector (Verifikator Keselamatan Lapangan).</li>
  <li>Authorized Gas Tester (AGT) & Fire Watcher (Petugas Pendukung Teknis).</li>
</ul>

<div class="editorial-crosslinks">
<h3>Panduan Regulasi & Pelatihan Terkait:</h3>
<div class="button-chip-grid">
  <a href="/kategori-pelatihan/prosedur-uji-gas-ruang-terbatas/" class="btn-chip" title="Prosedur Uji Gas Ruang Terbatas"><span>👉 Prosedur Uji Gas Ruang Terbatas</span></a>
  <a href="/kategori-pelatihan/penerapan-loto-8-langkah/" class="btn-chip" title="Penerapan LOTO 8 Langkah"><span>👉 Penerapan LOTO 8 Langkah</span></a>
  <a href="/kategori-pelatihan/job-safety-analysis-jsa-authoring/" class="btn-chip" title="Penyusunan Job Safety Analysis"><span>👉 Penyusunan JSA Proyek</span></a>
  <a href="/kategori-pelatihan/standar-inspeksi-scafftag-hijau-merah/" class="btn-chip" title="Standar Inspeksi Scafftag"><span>👉 Standar Scafftag Perancah</span></a>
</div>
</div>
</div>`
};
