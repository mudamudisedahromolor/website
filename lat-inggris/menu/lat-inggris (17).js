// =========================================================================
// 1. KONFIGURASI UTAMA, VARIABEL GLOBAL & SINKRONISASI DATA TSV
// =========================================================================
const TSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTZdYtu7UisJXOIJIuQm8HzN1j-4aRCBzJ2BqTmRkXvzg42QV4jLVpj0tQkQIZmv5l7BsLl4QtXGJKr/pub?gid=976866681&single=true&output=tsv";

let bankMateri = []; 
let mmsKotakTerpilihSekarang = null; // Menampung ID icon aktif di dashboard depan

function ambilAsetDataWeb() {
    let cacheBusterUrl = TSV_URL + "&_cb=" + new Date().getTime();

    fetch(cacheBusterUrl)
    .then(r => r.text())
    .then(tsvText => {
        bankMateri = parseTSVMateri(tsvText);
        muatVideoPendahuluanOtomatis(); // Jalankan payung video pembuka di awal
    }).catch(err => {
        console.error("Gagal sinkronisasi data TSV:", err);
    });
}

// 🛠️ PEMBACAAN DATA SHEET DINAMIS 9 KOLOM (KOLOM A SAMPAI I)
function parseTSVMateri(text) {
    if (!text) return [];
    let baris = text.split("\n");
    let hasil = [];
    for(let i = 1; i < baris.length; i++) {
        if(!baris[i].trim()) continue;
        let kolom = baris[i].split("\t");
        
        hasil.push({
            no: kolom[0] ? kolom[0].trim() : "",                
            judulBab: kolom[1] ? kolom[1].trim() : "",          
            materi: kolom[2] ? kolom[2].trim() : "",            
            subMateri: kolom[3] ? kolom[3].trim() : "",         
            rumus: kolom[4] ? kolom[4].trim() : "",             
            contohKalimat: kolom[5] ? kolom[5].trim() : "",     
            arti: kolom[6] ? kolom[6].trim() : "",              
            visual: kolom[7] ? kolom[7].trim() : "",            // Kolom H: Link Video
            fungsi: kolom[8] ? kolom[8].trim() : ""             // Kolom I: Teks Fungsi Kalimat
        });
    }
    return hasil;
}


// =========================================================================
// 2. LOGIKA DOUBLE-CLICK SELEKSI & ANIMASI MEMBAL DASHBOARD TRANSPARAN
// =========================================================================
function eksekusiKlikDoubleBounce(idKotak, namaMenu) {
    if (event) event.stopPropagation();

    let gridContainer = document.getElementById("mms-container-grid-icon");
    let wrapperIcon = document.getElementById(`mms-item-box-${idKotak}`);

    if (mmsKotakTerpilihSekarang === idKotak) {
        if (namaMenu === 'materi') {
            bukaMateriMenu();
        } else {
            document.getElementById("mms-lbl-dev-title").innerText = "Modul " + namaMenu.toUpperCase();
            document.getElementById("mms-modal-dev").style.display = "flex";
        }
        resetSeleksiDashboardEsensial();
        return;
    }

    mmsKotakTerpilihSekarang = idKotak;
    document.querySelectorAll(".menu-icon-wrapper").forEach(el => el.classList.remove("mms-selected-bounce"));
    
    if (gridContainer) gridContainer.classList.add("has-selection");
    if (wrapperIcon) wrapperIcon.classList.add("mms-selected-bounce");
}

function resetSeleksiDashboardEksternal(e) {
    if (!e.target.closest('.menu-icon-wrapper')) {
        resetSeleksiDashboardEsensial();
    }
}

function resetSeleksiDashboardEsensial() {
    mmsKotakTerpilihSekarang = null;
    let gridContainer = document.getElementById("mms-container-grid-icon");
    if (gridContainer) gridContainer.classList.remove("has-selection");
    document.querySelectorAll(".menu-icon-wrapper").forEach(el => el.classList.remove("mms-selected-bounce"));
}


// =========================================================================
// 3. LOGIKA PAYUNG VIDEO PENDAHULUAN (KOLOM H - BARIS DATA KUSTOM)
// =========================================================================
function muatVideoPendahuluanOtomatis() {
    let containerVideo = document.getElementById("box-media-video-pembuka");
    let txtStatus = document.getElementById("mms-txt-status-video-pembuka");
    
    let dataVideoPencantar = bankMateri.find(m => (m.subMateri || "").toLowerCase().trim() === "video-pembuka");
    
    if (dataVideoPencantar && dataVideoPencantar.visual) {
        let linkVideo = dataVideoPencantar.visual.trim();
        containerVideo.innerHTML = `<video style="width:100%; height:100%; object-fit:cover;" controls>` +
                                        `<source src="${linkVideo}" type="video/mp4">` +
                                     `</video>`;
        txtStatus.style.display = "none";
    } else {
        if(txtStatus) txtStatus.innerText = "Buat baris di Sheet dengan Kolom D: 'video-pembuka' & Kolom H: Masukkan Link Video.";
    }
}

function toggleLaciVideoPendahuluan() {
    let laci = document.getElementById("mms-laci-video-pembuka");
    let iconVideo = document.getElementById("mms-icon-chevron-video");
    let vFrame = document.getElementById("box-media-video-pembuka");
    let videoEl = laci.querySelector("video");

    if (laci.style.display === "none" || laci.style.display === "") {
        laci.style.display = "block";
        if(vFrame.innerHTML !== "") vFrame.style.display = "flex";
        if (iconVideo) { iconVideo.classList.remove("fa-chevron-down"); iconVideo.classList.add("fa-chevron-up"); }
        if (videoEl) videoEl.play().catch(e => {});
    } else {
        laci.style.display = "none";
        if (iconVideo) { iconVideo.classList.remove("fa-chevron-up"); iconVideo.classList.add("fa-chevron-down"); }
        if (videoEl) videoEl.pause();
    }
}


// =========================================================================
// 4. ROUTER LAYER 5: PROSES SINKRONISASI DINAMIS GANDA (FIX RECOVERY MUTLAK)
// =========================================================================
function tampilkanMateriSpesifik(namaMateriKolomC, subMateriKolomD) {
    if (subMateriKolomD === undefined) {
        subMateriKolomD = namaMateriKolomC;
    }

    let boxVisualMateri = document.getElementById("box-media-materi");
    let boxRumusAktif = document.getElementById("box-txt-rumus-aktif");
    let boxRumusPasif = document.getElementById("box-txt-rumus-pasif");
    let boxArtiAktif = document.getElementById("box-txt-arti-aktif");
    let boxArtiPasif = document.getElementById("box-txt-arti-pasif");
    let boxPembahasan = document.getElementById("box-txt-pembahasan");
    let boxSilabus = document.getElementById("box-txt-silabus");
    let btnVideo = document.getElementById("mms-btn-buka-video");

    let elementBoxAktifUtama = document.getElementById("box-txt-rumus-aktif") ? document.getElementById("box-txt-rumus-aktif").closest('.info-box-item') : null;
    let elementBoxPasifUtama = document.getElementById("wrapper-box-pasif");
    let elementBoxTipsUtama = document.getElementById("wrapper-box-tips-pintar");
    let panelTipsTabel = document.getElementById('panel-tips-tabel');

    let idLower = subMateriKolomD.toLowerCase().trim();

    // 🎯 URUTAN PALING ATAS UTAMA JALUR BAB 1 & BAB 4: LENYAPKAN TOTAL KOTAK RUMUS AKTIF, PASIF & KATA BANTU DEFAULT
    if (!idLower.startsWith("pasif-") && !idLower.startsWith("aktif-")) {
        if (elementBoxAktifUtama) elementBoxAktifUtama.style.display = "none";  
        if (elementBoxPasifUtama) elementBoxPasifUtama.style.display = "none";  
        if (elementBoxTipsUtama) elementBoxTipsUtama.style.display = "none";   
    }

    if (boxVisualMateri) boxVisualMateri.style.display = "none";
    
    if (btnVideo) {
        btnVideo.innerHTML = `<i class="fa-solid fa-circle-play"></i> <span>Ketuk untuk Lihat Penjelasan Video</span>`;
        btnVideo.style.background = "#eff6ff"; btnVideo.style.color = "var(--mms-accent)"; btnVideo.style.borderColor = "var(--mms-accent)";
    }

    if(document.getElementById('panel-aktif-contoh')) document.getElementById('panel-aktif-contoh').style.display = "none";
    if(document.getElementById('panel-pasif-contoh')) document.getElementById('panel-pasif-contoh').style.display = "none";
    if(panelTipsTabel) panelTipsTabel.style.display = "none"; 

    let judulTense = document.getElementById("lbl-judul-tense-aktif");

    let dataCocok = bankMateri.find(m => {
        let matSheet = (m.materi || "").toLowerCase().trim();
        let subSheet = (m.subMateri || "").toLowerCase().trim();
        return matSheet === namaMateriKolomC.toLowerCase().trim() && subSheet === subMateriKolomD.toLowerCase().trim();
    });

    if (!dataCocok) {
        dataCocok = bankMateri.find(m => (m.subMateri || "").toLowerCase().trim() === subMateriKolomD.toLowerCase().trim());
    }

    if (!dataCocok) {
        if (judulTense) judulTense.innerHTML = `Modul: <b>${namaMateriKolomC}</b>`;
        if(boxRumusAktif) boxRumusAktif.innerText = "Belum Ada Data";
        if(boxPembahasan) boxPembahasan.innerText = "Data tidak ditemukan. Silakan periksa kembali Kolom D di Google Sheets.";
        document.getElementById("materi-pembahasan-box").style.display = "flex";
        return;
    }

    let labelTipeTeks = subMateriKolomD.replace(/-/g, " ").toUpperCase();
    if (judulTense) judulTense.innerHTML = `Modul: <b>${dataCocok.materi || namaMateriKolomC} (${labelTipeTeks})</b>`;
    if(boxSilabus) boxSilabus.innerText = dataCocok.judulBab || "MMS Ruang Literasi";

    let isiRumus = (dataCocok.rumus || "").replace(/\\n/g, "\n");
    let isiContoh = (dataCocok.contohKalimat || "").replace(/\\n/g, "\n");
    let isiArti = (dataCocok.arti || "").replace(/\\n/g, "\n");

    // Pembersih sisa render laci kustom lama agar saat ganti modul tidak tumpat tindih
    let laciCustomLama = document.getElementById("mms-laci-tutup-sembunyi-bab14");
    if (laciCustomLama) laciCustomLama.remove();

    // 🔲 BLOK LOGIKA DISTRIBUSI RUMPUN MATERI
    if (!idLower.startsWith("pasif-") && !idLower.startsWith("aktif-")) {
        
        let isiKontenLaci = "";

        // 1. LOGIKA TABEL PRONOUNS TABLE / POS-PRONOUN
        if (idLower === "bab1-pronowns" || idLower === "bab1-pronouns" || idLower === "pos-pronoun") {
            isiKontenLaci = `
                <div style="color: #b45309; font-weight: bold; font-size: 12px; text-transform: uppercase; margin-bottom: 8px; display: flex; align-items: center; gap: 6px;">
                    <i class="fa-solid fa-table"></i> Klasifikasi Jenis Pronoun
                </div>
                <div style="overflow-x:auto;">
                    <table style="width:100%; border-collapse:collapse; background:#fff; font-size:13px; border-radius:6px; overflow:hidden; border: 1px solid #cbd5e1;">
                        <thead>
                            <tr style="background:#fef08a; color:#0f172a; border-bottom:2px solid #fde047;">
                                <th style="padding:10px; text-align:left; font-weight:700; border-right:1px solid #cbd5e1; width:35%;">Jenis Pronoun</th>
                                <th style="padding:10px; text-align:left; font-weight:700;">Pengertian &amp; Contoh</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom:1px solid #cbd5e1;">
                                <td style="padding:9px 10px; color:#0f172a; font-weight:700; border-right:1px solid #cbd5e1; background:#f8fafc;">Personal Pronouns</td>
                                <td style="padding:9px 10px; color:#475569; line-height:1.5;">
                                    Kata ganti yang menggantikan orang, hewan, atau benda tertentu. Dibedakan menjadi subjek dan objek.<br>
                                    <span style="color:#2563eb; font-weight:600; font-style:italic;">Contoh Subjek:</span> I, you, he, she, they, we, it.<br>
                                    <span style="color:#16a34a; font-weight:600; font-style:italic;">Contoh Objek:</span> me, you, him, her, them, us, it.
                                </td>
                            </tr>
                            <tr style="border-bottom:1px solid #cbd5e1;">
                                <td style="padding:9px 10px; color:#0f172a; font-weight:700; border-right:1px solid #cbd5e1; background:#f8fafc;">Possessive Pronouns</td>
                                <td style="padding:9px 10px; color:#475569; line-height:1.5;">
                                    Kata ganti untuk menunjukkan kepemilikan.<br>
                                        <span style="color:#b45309; font-weight:600; font-style:italic;">Contoh:</span> mine, yours, his, her, theirs, ours, its.
                                </td>
                            </tr>
                            <tr style="border-bottom:1px solid #cbd5e1;">
                                <td style="padding:9px 10px; color:#0f172a; font-weight:700; border-right:1px solid #cbd5e1; background:#f8fafc;">Demonstrative Pronouns</td>
                                <td style="padding:9px 10px; color:#475569; line-height:1.5;">
                                    Kata ganti untuk menunjukkan lokasi, jarak, atau jumlah suatu benda.<br>
                                        <span style="color:#b45309; font-weight:600; font-style:italic;">Contoh:</span> this, that, these, those.
                                </td>
                            </tr>
                            <tr style="border-bottom:1px solid #cbd5e1;">
                                <td style="padding:9px 10px; color:#0f172a; font-weight:700; border-right:1px solid #cbd5e1; background:#f8fafc;">Reflexive Pronouns</td>
                                <td style="padding:9px 10px; color:#475569; line-height:1.5;">
                                    Kata ganti yang digunakan ketika subjek dan objek dalam kalimat adalah orang yang sama.<br>
                                        <span style="color:#b45309; font-weight:600; font-style:italic;">Contoh:</span> myself, yourself, himself, themselves.
                                </td>
                            </tr>
                            <tr style="border-bottom:1px solid #cbd5e1;">
                                <td style="padding:9px 10px; color:#0f172a; font-weight:700; border-right:1px solid #cbd5e1; background:#f8fafc;">Indefinite Pronouns</td>
                                <td style="padding:9px 10px; color:#475569; line-height:1.5;">
                                    Kata ganti untuk orang atau benda yang jumlah atau identitasnya tidak spesifik.<br>
                                        <span style="color:#b45309; font-weight:600; font-style:italic;">Contoh:</span> someone, anyone, everyone, everything.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `;
        } else if (idLower === "pos-noun" || idLower === "bab1-noun") {
            // 2. LOGIKA MATERI NOUN
            isiKontenLaci = `
                <div style="color: #b45309; font-weight: bold; font-size: 12px; text-transform: uppercase; margin-bottom: 8px; display: flex; align-items: center; gap: 6px;">
                    <i class="fa-solid fa-bookmark"></i> 1. Jenis-Jenis Noun (Kata Benda)
                </div>
                <div style="overflow-x:auto; margin-bottom: 18px;">
                    <table style="width:100%; border-collapse:collapse; background:#fff; font-size:13px; border-radius:6px; overflow:hidden; border: 1px solid #cbd5e1;">
                        <thead>
                            <tr style="background:#fef08a; color:#0f172a; border-bottom:2px solid #fde047;">
                                <th style="padding:10px; text-align:left; font-weight:700; border-right:1px solid #cbd5e1; width:35%;">Kelompok Noun</th>
                                <th style="padding:10px; text-align:left; font-weight:700;">Perbandingan &amp; Contoh Kata</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom:1px solid #cbd5e1;">
                                <td style="padding:9px 10px; color:#0f172a; font-weight:700; border-right:1px solid #cbd5e1; background:#f8fafc;">Proper vs Common Noun</td>
                                <td style="padding:9px 10px; color:#475569; line-height:1.5;">
                                    <span style="font-weight:600; color:#0f172a;">Proper (Spesifik &amp; Huruf Kapital):</span> London, Budi.<br>
                                    <span style="font-weight:600; color:#0f172a;">Common (Umum):</span> city, book.
                                </td>
                            </tr>
                            <tr style="border-bottom:1px solid #cbd5e1;">
                                <td style="padding:9px 10px; color:#0f172a; font-weight:700; border-right:1px solid #cbd5e1; background:#f8fafc;">Countable vs Uncountable</td>
                                <td style="padding:9px 10px; color:#475569; line-height:1.5;">
                                    <span style="font-weight:600; color:#0f172a;">Countable (Bisa Dihitung Pasti):</span> an apple, three chairs.<br>
                                    <span style="font-weight:600; color:#0f172a;">Uncountable (Tidak Bisa Dihitung Satuan):</span> water, money.
                                </td>
                            </tr>
                            <tr style="border-bottom:1px solid #cbd5e1;">
                                <td style="padding:9px 10px; color:#0f172a; font-weight:700; border-right:1px solid #cbd5e1; background:#f8fafc;">Concrete vs Abstract Noun</td>
                                <td style="padding:9px 10px; color:#475569; line-height:1.5;">
                                    <span style="font-weight:600; color:#0f172a;">Concrete (Berwujud &amp; Bisa Disentuh):</span> laptop, table.<br>
                                    <span style="font-weight:600; color:#0f172a;">Abstract (Konsep, Ide, Perasaan):</span> happiness, courage.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div style="color: #b45309; font-weight: bold; font-size: 12px; text-transform: uppercase; margin-bottom: 8px; display: flex; align-items: center; gap: 6px;">
                    <i class="fa-solid fa-star"></i> 2. Fungsi Utama dalam Kalimat
                </div>
                <div style="overflow-x:auto;">
                    <table style="width:100%; border-collapse:collapse; background:#fff; font-size:13px; border-radius:6px; overflow:hidden; border: 1px solid #cbd5e1;">
                        <thead>
                            <tr style="background:#fef08a; color:#0f172a; border-bottom:2px solid #fde047;">
                                <th style="padding:10px; text-align:left; font-weight:700; border-right:1px solid #cbd5e1; width:35%;">Peran Noun</th>
                                <th style="padding:10px; text-align:left; font-weight:700;">Pengertian &amp; Contoh</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom:1px solid #cbd5e1;">
                                <td style="padding:9px 10px; color:#0f172a; font-weight:700; border-right:1px solid #cbd5e1; background:#f8fafc;">Subjek</td>
                                <td style="padding:9px 10px; color:#475569; line-height:1.5;">
                                    Pelaku dari sebuah tindakan atau aktivitas.<br>
                                    <span style="color:#2563eb; font-weight:600; font-style:italic;">Contoh:</span> "<span style="color:#0f172a; font-weight:700;">The cat</span> sleeps."
                                </td>
                            </tr>
                            <tr style="border-bottom:1px solid #cbd5e1;">
                                <td style="padding:9px 10px; color:#0f172a; font-weight:700; border-right:1px solid #cbd5e1; background:#f8fafc;">Objek Langsung</td>
                                <td style="padding:9px 10px; color:#475569; line-height:1.5;">
                                    Pihak atau benda yang dikenai tindakan langsung oleh kata kerja.<br>
                                    <span style="color:#2563eb; font-weight:600; font-style:italic;">Contoh:</span> "I ate <span style="color:#0f172a; font-weight:700;">an apple</span>."
                                </td>
                            </tr>
                            <tr style="border-bottom:1px solid #cbd5e1;">
                                <td style="padding:9px 10px; color:#0f172a; font-weight:700; border-right:1px solid #cbd5e1; background:#f8fafc;">Objek Preposisi</td>
                                <td style="padding:9px 10px; color:#475569; line-height:1.5;">
                                    Kata benda yang mengikuti kata depan atau preposisi.<br>
                                    <span style="color:#2563eb; font-weight:600; font-style:italic;">Contoh:</span> "She is studying in <span style="color:#0f172a; font-weight:700;">the library</span>."
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `;
        } else if (idLower === "pos-verb") {
            // 3. LOGIKA MATERI VERB
            isiKontenLaci = `
                <div style="color: #b45309; font-weight: bold; font-size: 12px; text-transform: uppercase; margin-bottom: 8px; display: flex; align-items: center; gap: 6px;">
                    <i class="fa-solid fa-bookmark"></i> 1. Kategori Utama Verb (Berdasarkan Makna)
                </div>
                <div style="overflow-x:auto; margin-bottom: 18px;">
                    <table style="width:100%; border-collapse:collapse; background:#fff; font-size:13px; border-radius:6px; overflow:hidden; border: 1px solid #cbd5e1;">
                        <thead>
                            <tr style="background:#fef08a; color:#0f172a; border-bottom:2px solid #fde047;">
                                <th style="padding:10px; text-align:left; font-weight:700; border-right:1px solid #cbd5e1; width:35%;">Bentuk Dasar</th>
                                <th style="padding:10px; text-align:left; font-weight:700;">Pengertian &amp; Contoh Kata</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom:1px solid #cbd5e1;">
                                <td style="padding:9px 10px; color:#0f172a; font-weight:700; border-right:1px solid #cbd5e1; background:#f8fafc;">Tindakan (Action)</td>
                                <td style="padding:9px 10px; color:#475569; line-height:1.5;">
                                    Kata kerja yang menunjukkan aktivitas fisik atau mental.<br>
                                    <span style="color:#2563eb; font-weight:600; font-style:italic;">Contoh:</span> Run (lari), read (membaca), think (berpikir), write (menulis).
                                </td>
                            </tr>
                            <tr style="border-bottom:1px solid #cbd5e1;">
                                <td style="padding:9px 10px; color:#0f172a; font-weight:700; border-right:1px solid #cbd5e1; background:#f8fafc;">Keadaan (State)</td>
                                <td style="padding:9px 10px; color:#475569; line-height:1.5;">
                                    Kata kerja yang tidak menggambarkan suatu aktivitas, melainkan kondisi atau keberadaan.<br>
                                    <span style="color:#2563eb; font-weight:600; font-style:italic;">Contoh:</span> Seem (tampak), exist (ada), be (adalah).
                                </td>
                            </tr>
                            <tr style="border-bottom:1px solid #cbd5e1;">
                                <td style="padding:9px 10px; color:#0f172a; font-weight:700; border-right:1px solid #cbd5e1; background:#f8fafc;">Kejadian (Occurrence)</td>
                                <td style="padding:9px 10px; color:#475569; line-height:1.5;">
                                    Kata kerja yang menunjukkan suatu proses atau peristiwa yang terjadi.<br>
                                    <span style="color:#2563eb; font-weight:600; font-style:italic;">Contoh:</span> Die (meninggal), grow (tumbuh), happen (terjadi).
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div style="color: #b45309; font-weight: bold; font-size: 12px; text-transform: uppercase; margin-bottom: 8px; display: flex; align-items: center; gap: 6px;">
                    <i class="fa-solid fa-star"></i> 2. Jenis-Jenis Umum Verb (Dalam Penggunaan)
                </div>
                <div style="overflow-x:auto;">
                    <table style="width:100%; border-collapse:collapse; background:#fff; font-size:13px; border-radius:6px; overflow:hidden; border: 1px solid #cbd5e1;">
                        <thead>
                            <tr style="background:#fef08a; color:#0f172a; border-bottom:2px solid #fde047;">
                                <th style="padding:10px; text-align:left; font-weight:700; border-right:1px solid #cbd5e1; width:35%;">Jenis Verb</th>
                                <th style="padding:10px; text-align:left; font-weight:700;">Pengertian &amp; Contoh Kata</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom:1px solid #cbd5e1;">
                                <td style="padding:9px 10px; color:#0f172a; font-weight:700; border-right:1px solid #cbd5e1; background:#f8fafc;">Action Verbs</td>
                                <td style="padding:9px 10px; color:#475569; line-height:1.5;">
                                    Kata kerja yang secara langsung menyatakan tindakan aksi.
                                </td>
                            </tr>
                            <tr style="border-bottom:1px solid #cbd5e1;">
                                <td style="padding:9px 10px; color:#0f172a; font-weight:700; border-right:1px solid #cbd5e1; background:#f8fafc;">Auxiliary Verbs (Helping Verbs)</td>
                                <td style="padding:9px 10px; color:#475569; line-height:1.5;">
                                    Kata kerja bantu yang mendampingi kata kerja utama.<br>
                                    <span style="color:#2563eb; font-weight:600; font-style:italic;">Contoh:</span> is, am, are, do, have, will, can.
                                </td>
                            </tr>
                            <tr style="border-bottom:1px solid #cbd5e1;">
                                <td style="padding:9px 10px; color:#0f172a; font-weight:700; border-right:1px solid #cbd5e1; background:#f8fafc;">Transitive &amp; Intransitive Verbs</td>
                                <td style="padding:9px 10px; color:#475569; line-height:1.5;">
                                    Transitive membutuhkan objek langsung untuk melengkapi makna, sedangkan Intransitive tidak memerlukan objek langsung.
                                </td>
                            </tr>
                            <tr style="border-bottom:1px solid #cbd5e1;">
                                <td style="padding:9px 10px; color:#0f172a; font-weight:700; border-right:1px solid #cbd5e1; background:#f8fafc;">Regular &amp; Irregular Verbs</td>
                                <td style="padding:9px 10px; color:#475569; line-height:1.5;">
                                     Regular berubah bentuk dengan menambah -d/-ed di akhir kata, sedangkan Irregular berubah bentuk secara tidak beraturan.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `;
        } else if (idLower === "pos-adjective") {
            // 4. LOGIKA MATERI ADJECTIVE
            isiKontenLaci = `
                <div style="color: #b45309; font-weight: bold; font-size: 12px; text-transform: uppercase; margin-bottom: 8px; display: flex; align-items: center; gap: 6px;">
                    <i class="fa-solid fa-bookmark"></i> 1. Fungsi Utama dalam Kalimat
                </div>
                <div style="overflow-x:auto; margin-bottom: 18px;">
                    <table style="width:100%; border-collapse:collapse; background:#fff; font-size:13px; border-radius:6px; overflow:hidden; border: 1px solid #cbd5e1;">
                        <thead>
                            <tr style="background:#fef08a; color:#0f172a; border-bottom:2px solid #fde047;">
                                <th style="padding:10px; text-align:left; font-weight:700; border-right:1px solid #cbd5e1; width:35%;">Posisi Adjective</th>
                                <th style="padding:10px; text-align:left; font-weight:700;">Pengertian &amp; Contoh</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom:1px solid #cbd5e1;">
                                <td style="padding:9px 10px; color:#0f172a; font-weight:700; border-right:1px solid #cbd5e1; background:#f8fafc;">Attributive Adjective</td>
                                <td style="padding:9px 10px; color:#475569; line-height:1.5;">
                                    Diletakkan tepat <span style="font-weight:700;">sebelum</span> kata benda (noun).<br>
                                    <span style="color:#2563eb; font-weight:600; font-style:italic;">Contoh:</span> "She wore a <span style="color:#cc0202; font-weight:700;">red</span> dress." (Dia memakai gaun merah).
                                </td>
                            </tr>
                            <tr style="border-bottom:1px solid #cbd5e1;">
                                <td style="padding:9px 10px; color:#0f172a; font-weight:700; border-right:1px solid #cbd5e1; background:#f8fafc;">Predicative Adjective</td>
                                <td style="padding:9px 10px; color:#475569; line-height:1.5;">
                                    Diletakkan <span style="font-weight:700;">setelah</span> linking verb (seperti is, am, are, was, were, become, feel, look).<br>
                                    <span style="color:#2563eb; font-weight:600; font-style:italic;">Contoh:</span> "The sky is <span style="color:#3b82f6; font-weight:700;">blue</span>." (Langit itu biru).
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div style="color: #b45309; font-weight: bold; font-size: 12px; text-transform: uppercase; margin-bottom: 8px; display: flex; align-items: center; gap: 6px;">
                    <i class="fa-solid fa-star"></i> 2. Jenis-Jenis Adjective (Kategori Umum)
                </div>
                <div style="overflow-x:auto; margin-bottom: 18px;">
                    <table style="width:100%; border-collapse:collapse; background:#fff; font-size:13px; border-radius:6px; overflow:hidden; border: 1px solid #cbd5e1;">
                        <thead>
                            <tr style="background:#fef08a; color:#0f172a; border-bottom:2px solid #fde047;">
                                <th style="padding:10px; text-align:left; font-weight:700; border-right:1px solid #cbd5e1; width:35%;">Kategori</th>
                                <th style="padding:10px; text-align:left; font-weight:700;">Penjelasan &amp; Contoh Kata</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom:1px solid #cbd5e1;">
                                <td style="padding:9px 10px; color:#0f172a; font-weight:700; border-right:1px solid #cbd5e1; background:#f8fafc;">Descriptive Adjective</td>
                                <td style="padding:9px 10px; color:#475569; line-height:1.5;">
                                    Menjelaskan sifat atau keadaan fisik/karakter.<br>
                                    <span style="color:#2563eb; font-weight:600; font-style:italic;">Contoh:</span> beautiful, tall, lazy, smart.
                                </td>
                            </tr>
                            <tr style="border-bottom:1px solid #cbd5e1;">
                                <td style="padding:9px 10px; color:#0f172a; font-weight:700; border-right:1px solid #cbd5e1; background:#f8fafc;">Quantitative Adjective</td>
                                <td style="padding:9px 10px; color:#475569; line-height:1.5;">
                                    Menjelaskan jumlah benda.<br>
                                    <span style="color:#2563eb; font-weight:600; font-style:italic;">Contoh:</span> many, some, little, enough.
                                </td>
                            </tr>
                            <tr style="border-bottom:1px solid #cbd5e1;">
                                <td style="padding:9px 10px; color:#0f172a; font-weight:700; border-right:1px solid #cbd5e1; background:#f8fafc;">Demonstrative Adjective</td>
                                <td style="padding:9px 10px; color:#475569; line-height:1.5;">
                                    Menunjuk benda secara spesifik.<br>
                                    <span style="color:#2563eb; font-weight:600; font-style:italic;">Contoh:</span> this, that, these, those.
                                </td>
                            </tr>
                            <tr style="border-bottom:1px solid #cbd5e1;">
                                <td style="padding:9px 10px; color:#0f172a; font-weight:700; border-right:1px solid #cbd5e1; background:#f8fafc;">Possessive Adjective</td>
                                <td style="padding:9px 10px; color:#475569; line-height:1.5;">
                                    Menunjukkan kepemilikan.<br>
                                    <span style="color:#2563eb; font-weight:600; font-style:italic;">Contoh:</span> my, your, his, her, their.
                                </td>
                            </tr>
                            <tr style="border-bottom:1px solid #cbd5e1;">
                                <td style="padding:9px 10px; color:#0f172a; font-weight:700; border-right:1px solid #cbd5e1; background:#f8fafc;">Numeral Adjective</td>
                                <td style="padding:9px 10px; color:#475569; line-height:1.5;">
                                    Menunjukkan angka atau urutan/tingkat.<br>
                                    <span style="color:#2563eb; font-weight:600; font-style:italic;">Contoh:</span> two, first, double.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div style="color: #b45309; font-weight: bold; font-size: 12px; text-transform: uppercase; margin-bottom: 8px; display: flex; align-items: center; gap: 6px;">
                    <i class="fa-solid fa-arrow-down-short-wide"></i> 3. Posisi Berurutan (Adjective Order)
                </div>
                <div style="background:#fff; border: 1px solid #cbd5e1; padding: 12px; border-radius: 6px; box-sizing: border-box; line-height: 1.6;">
                    <div style="font-size: 12.5px; color:#475569; margin-bottom: 8px;">Jika ada lebih dari satu kata sifat untuk menjelaskan satu kata benda, gunakan urutan penempatan standar internasional berikut:</div>
                    <div style="overflow-x:auto; background: var(--mms-blue-light, #eef2ff); padding: 10px; border-radius: 6px; font-weight: bold; color: var(--mms-navy); font-size: 12px; text-align: center; white-space: nowrap; border: 1px solid #bfdbfe;">
                        Quantity ➔ Quality ➔ Size ➔ Age ➔ Shape ➔ Color ➔ Origin ➔ Material ➔ Purpose
                    </div>
                    <div style="margin-top: 10px; font-size: 13px; color: #0f172a; line-height: 1.5;">
                        <span style="color:#cc0202; font-weight:700; font-style:italic;">🔹 Contoh Gabungan Kalimat:</span><br>
                        "A <span style="font-weight:600; color:#2563eb;">beautiful</span>, <span style="font-weight:600; color:#2563eb;">small</span>, <span style="font-weight:600; color:#2563eb;">old</span>, <span style="font-weight:600; color:#2563eb;">round</span>, <span style="font-weight:600; color:#2563eb;">red</span>, <span style="font-weight:600; color:#2563eb;">Italian</span>, <span style="font-weight:600; color:#2563eb;">wooden</span> table."
                    </div>
                </div>
            `;
        } else if (idLower === "pos-adverb") {
            // [ 🔒 JALUR UTUH MATERI ADVERB - TIDAK DISENTUH ]
            isiKontenLaci = `
                <div style="color: #b45309; font-weight: bold; font-size: 12px; text-transform: uppercase; margin-bottom: 8px; display: flex; align-items: center; gap: 6px;">
                    <i class="fa-solid fa-bookmark"></i> Jenis-Jenis Adverb yang Paling Umum
                </div>
                <div style="overflow-x:auto;">
                    <table style="width:100%; border-collapse:collapse; background:#fff; font-size:13px; border-radius:6px; overflow:hidden; border: 1px solid #cbd5e1;">
                        <thead>
                            <tr style="background:#fef08a; color:#0f172a; border-bottom:2px solid #fde047;">
                                <th style="padding:10px; text-align:left; font-weight:700; border-right:1px solid #cbd5e1; width:35%;">Jenis Adverb</th>
                                <th style="padding:10px; text-align:left; font-weight:700;">Pengertian &amp; Contoh Kata</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom:1px solid #cbd5e1;">
                                <td style="padding:9px 10px; color:#0f172a; font-weight:700; border-right:1px solid #cbd5e1; background:#f8fafc;">Adverb of Manner</td>
                                <td style="padding:9px 10px; color:#475569; line-height:1.5;">
                                    Menjelaskan bagaimana suatu tindakan atau peristiwa dilakukan.<br>
                                    <span style="color:#2563eb; font-weight:600; font-style:italic;">Contoh:</span> quickly, slowly, happily, beautifully, well, hard.
                                </td>
                            </tr>
                            <tr style="border-bottom:1px solid #cbd5e1;">
                                <td style="padding:9px 10px; color:#0f172a; font-weight:700; border-right:1px solid #cbd5e1; background:#f8fafc;">Adverb of Place</td>
                                <td style="padding:9px 10px; color:#475569; line-height:1.5;">
                                    Menunjukkan lokasi atau tempat terjadinya suatu tindakan.<br>
                                    <span style="color:#2563eb; font-weight:600; font-style:italic;">Contoh:</span> here, there, everywhere, nearby, inside, outside.
                                </td>
                            </tr>
                            <tr style="border-bottom:1px solid #cbd5e1;">
                                <td style="padding:9px 10px; color:#0f172a; font-weight:700; border-right:1px solid #cbd5e1; background:#f8fafc;">Adverb of Time</td>
                                <td style="padding:9px 10px; color:#475569; line-height:1.5;">
                                    Menunjukkan kapan suatu tindakan atau peristiwa terjadi.<br>
                                    <span style="color:#2563eb; font-weight:600; font-style:italic;">Contoh:</span> now, yesterday, tomorrow, soon, late, already.
                                </td>
                            </tr>
                            <tr style="border-bottom:1px solid #cbd5e1;">
                                <td style="padding:9px 10px; color:#0f172a; font-weight:700; border-right:1px solid #cbd5e1; background:#f8fafc;">Adverb of Frequency</td>
                                <td style="padding:9px 10px; color:#475569; line-height:1.5;">
                                    Menunjukkan seberapa sering suatu tindakan dilakukan.<br>
                                    <span style="color:#2563eb; font-weight:600; font-style:italic;">Contoh:</span> always, usually, often, sometimes, rarely, never.
                                </td>
                            </tr>
                            <tr style="border-bottom:1px solid #cbd5e1;">
                                <td style="padding:9px 10px; color:#0f172a; font-weight:700; border-right:1px solid #cbd5e1; background:#f8fafc;">Adverb of Degree</td>
                                <td style="padding:9px 10px; color:#475569; line-height:1.5;">
                                    Menjelaskan tingkat, intensitas, atau sejauh mana suatu sifat atau tindakan berlaku.<br>
                                    <span style="color:#2563eb; font-weight:600; font-style:italic;">Contoh:</span> very, extremely, quite, too, enough, almost.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `;
        } else if (idLower === "pos-preposition" || idLower === "bab1-preposition") {
            // [ 🔒 JALUR UTUH MATERI PREPOSITION - TIDAK DISENTUH ]
            isiKontenLaci = `
                <div style="color: #b45309; font-weight: bold; font-size: 12px; text-transform: uppercase; margin-bottom: 8px; display: flex; align-items: center; gap: 6px;">
                    <i class="fa-solid fa-bookmark"></i> 1. Jenis-Jenis Preposition Utama
                </div>
                <div style="overflow-x:auto; margin-bottom: 18px;">
                    <table style="width:100%; border-collapse:collapse; background:#fff; font-size:13px; border-radius:6px; overflow:hidden; border: 1px solid #cbd5e1;">
                        <thead>
                            <tr style="background:#fef08a; color:#0f172a; border-bottom:2px solid #fde047;">
                                <th style="padding:10px; text-align:left; font-weight:700; border-right:1px solid #cbd5e1; width:35%;">Kategori Preposition</th>
                                <th style="padding:10px; text-align:left; font-weight:700;">Penggunaan &amp; Contoh Kata</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom:1px solid #cbd5e1;">
                                <td style="padding:9px 10px; color:#0f172a; font-weight:700; border-right:1px solid #cbd5e1; background:#f8fafc;">Preposition of Time (Waktu)</td>
                                <td style="padding:9px 10px; color:#475569; line-height:1.5;">
                                    Digunakan untuk menunjukkan kapan suatu kejadian berlangsung.<br>
                                    🔹 <span style="font-weight:600; color:#0f172a;">In</span> (bulan/tahun): <i>in May, in 2026</i><br>
                                    🔹 <span style="font-weight:600; color:#0f172a;">On</span> (hari/tanggal): <i>on Monday, on October 1st</i><br>
                                    🔹 <span style="font-weight:600; color:#0f172a;">At</span> (jam/waktu spesifik): <i>at 09:00 AM, at night</i>
                                </td>
                            </tr>
                            <tr style="border-bottom:1px solid #cbd5e1;">
                                <td style="padding:9px 10px; color:#0f172a; font-weight:700; border-right:1px solid #cbd5e1; background:#f8fafc;">Preposition of Place (Tempat/Posisi)</td>
                                <td style="padding:9px 10px; color:#475569; line-height:1.5;">
                                    Digunakan untuk menunjukkan letak atau lokasi suatu objek.<br>
                                    🔹 <span style="font-weight:600; color:#0f172a;">In</span> (di dalam ruang tertutup): <i>in the box</i><br>
                                    🔹 <span style="font-weight:600; color:#0f172a;">On</span> (di atas permukaan): <i>on the table</i><br>
                                    🔹 <span style="font-weight:600; color:#0f172a;">At</span> (di titik tertentu): <i>at the bus stop</i>
                                </td>
                            </tr>
                            <tr style="border-bottom:1px solid #cbd5e1;">
                                <td style="padding:9px 10px; color:#0f172a; font-weight:700; border-right:1px solid #cbd5e1; background:#f8fafc;">Preposition of Direction (Arah)</td>
                                <td style="padding:9px 10px; color:#475569; line-height:1.5;">
                                    Digunakan untuk menunjukkan pergerakan atau ke mana suatu objek mengarah.<br>
                                    🔹 <span style="font-weight:600; color:#0f172a;">To</span> (menuju): <i>I go to school</i><br>
                                    🔹 <span style="font-weight:600; color:#0f172a;">Into</span> (ke dalam): <i>He jumps into the pool</i><br>
                                    🔹 <span style="font-weight:600; color:#0f172a;">From</span> (dari): <i>He came from London</i>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div style="color: #b45309; font-weight: bold; font-size: 12px; text-transform: uppercase; margin-bottom: 8px; display: flex; align-items: center; gap: 6px;">
                    <i class="fa-solid fa-star"></i> 2. Contoh Penggunaan dalam Kalimat
                </div>
                <div style="overflow-x:auto;">
                    <table style="width:100%; border-collapse:collapse; background:#fff; font-size:13px; border-radius:6px; overflow:hidden; border: 1px solid #cbd5e1;">
                        <thead>
                            <tr style="background:#fef08a; color:#0f172a; border-bottom:2px solid #fde047;">
                                <th style="padding:10px; text-align:left; font-weight:700; border-right:1px solid #cbd5e1; width:35%;">Kalimat Contoh</th>
                                <th style="padding:10px; text-align:left; font-weight:700;">Arti &amp; Hubungan Kata</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom:1px solid #cbd5e1;">
                                <td style="padding:9px 10px; color:#0f172a; font-weight:600; font-style:italic; border-right:1px solid #cbd5e1;">The book is <span style="color:#2563eb; font-weight:700; font-style:normal;">on</span> the table.</td>
                                <td style="padding:9px 10px; color:#475569; line-height:1.5;">
                                    Buku itu ada <span style="font-weight:700; color:#0f172a;">di atas</span> meja.<br>
                                    <span style="font-size:12px; color:#71717a;">*Kata <b>on</b> menghubungkan posisi buku (book) dengan meja (table).</span>
                                </td>
                            </tr>
                             <tr style="border-bottom:1px solid #cbd5e1;">
                                <td style="padding:9px 10px; color:#0f172a; font-weight:600; font-style:italic; border-right:1px solid #cbd5e1;">She was born <span style="color:#2563eb; font-weight:700; font-style:normal;">in</span> London <span style="color:#2563eb; font-weight:700; font-style:normal;">in</span> 1997.</td>
                                <td style="padding:9px 10px; color:#475569; line-height:1.5;">
                                    Dia lahir <span style="font-weight:700; color:#0f172a;">di</span> London <span style="font-weight:700; color:#0f172a;">pada</span> tahun 1997.<br> 
                                    <span style="font-size:12px; color:#71717a;">*Dua kata <b>in</b> memiliki fungsi berbeda: satu untuk lokasi (London), satu untuk waktu (1997).</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `;
        } else if (idLower === "pos-conjunction" || idLower === "bab1-conjunction") {
            // [ 🔒 JALUR UTUH MATERI CONJUNCTION - TIDAK DISENTUH ]
            isiKontenLaci = `
                <div style="color: #b45309; font-weight: bold; font-size: 12px; text-transform: uppercase; margin-bottom: 8px; display: flex; align-items: center; gap: 6px;">
                    <i class="fa-solid fa-bookmark"></i> 1. Jenis-Jenis Conjunction Utama
                </div>
                <div style="overflow-x:auto; margin-bottom: 18px;">
                    <table style="width:100%; border-collapse:collapse; background:#fff; font-size:13px; border-radius:6px; overflow:hidden; border: 1px solid #cbd5e1;">
                        <thead>
                            <tr style="background:#fef08a; color:#0f172a; border-bottom:2px solid #fde047;">
                                <th style="padding:10px; text-align:left; font-weight:700; border-right:1px solid #cbd5e1; width:35%;">Tipe Conjunction</th>
                                <th style="padding:10px; text-align:left; font-weight:700;">Pengertian &amp; Contoh Kata</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom:1px solid #cbd5e1;">
                                <td style="padding:9px 10px; color:#0f172a; font-weight:700; border-right:1px solid #cbd5e1; background:#f8fafc;">Coordinating Conjunction</td>
                                <td style="padding:9px 10px; color:#475569; line-height:1.5;">
                                    Menghubungkan kata, frasa, atau klausa yang setara secara tata bahasa.<br>
                                    💡 <span style="font-weight:600; color:#b45309;">Metode Jembatan Keledai:</span> <b>FANBOYS</b><br>
                                    🔹 <span style="font-weight:600; color:#0f172a;">For, And, Nor, But, Or, Yet, So</span>
                                </td>
                            </tr>
                            <tr style="border-bottom:1px solid #cbd5e1;">
                                <td style="padding:9px 10px; color:#0f172a; font-weight:700; border-right:1px solid #cbd5e1; background:#f8fafc;">Subordinating Conjunction</td>
                                <td style="padding:9px 10px; color:#475569; line-height:1.5;">
                                    Menghubungkan anak kalimat (dependent clause) ke induk kalimatnya (independent clause).<br>
                                    🔹 <span style="font-weight:600; color:#0f172a;">Contoh Kata:</span> Because, although, since, until, if, while, after.
                                </td>
                            </tr>
                            <tr style="border-bottom:1px solid #cbd5e1;">
                                <td style="padding:9px 10px; color:#0f172a; font-weight:700; border-right:1px solid #cbd5e1; background:#f8fafc;">Correlative Conjunction</td>
                                <td style="padding:9px 10px; color:#475569; line-height:1.5;">
                                    Kata hubung yang selalu digunakan berpasangan untuk menghubungkan elemen kalimat yang setara.<br>
                                    🔹 <span style="font-weight:600; color:#0f172a;">Contoh Pasangan:</span> Either...or, Neither...nor, Both...and, Not only...but also.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div style="color: #b45309; font-weight: bold; font-size: 12px; text-transform: uppercase; margin-bottom: 8px; display: flex; align-items: center; gap: 6px;">
                    <i class="fa-solid fa-star"></i> 2. Contoh Penggunaan dalam Kalimat
                </div>
                <div style="overflow-x:auto;">
                    <table style="width:100%; border-collapse:collapse; background:#fff; font-size:13px; border-radius:6px; overflow:hidden; border: 1px solid #cbd5e1;">
                        <thead>
                            <tr style="background:#fef08a; color:#0f172a; border-bottom:2px solid #fde047;">
                                <th style="padding:10px; text-align:left; font-weight:700; border-right:1px solid #cbd5e1; width:35%;">Jenis Hubungan</th>
                                <th style="padding:10px; text-align:left; font-weight:700;">Contoh Kalimat &amp; Arti</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom:1px solid #cbd5e1;">
                                <td style="padding:9px 10px; color:#0f172a; font-weight:700; border-right:1px solid #cbd5e1; background:#f8fafc;">Setara (Coordinating)</td>
                                <td style="padding:9px 10px; color:#475569; line-height:1.5;">
                                    "I wanted to go, <span style="color:#2563eb; font-weight:700;">but</span> it started to rain."<br>
                                    <span style="font-size:12.5px; color:#71717a;"><i>Artinya: Saya ingin pergi, <b>tetapi</b> hujan mulai turun.</i></span>
                                </td>
                            </tr>
                            <tr style="border-bottom:1px solid #cbd5e1;">
                                <td style="padding:9px 10px; color:#0f172a; font-weight:700; border-right:1px solid #cbd5e1; background:#f8fafc;">Sebab-Akibat (Subordinating)</td>
                                <td style="padding:9px 10px; color:#475569; line-height:1.5;">
                                    "He stayed home <span style="color:#2563eb; font-weight:700;">because</span> he was sick."<br>
                                    <span style="font-size:12.5px; color:#71717a;"><i>Artinya: Dia tinggal di rumah <b>karena</b> dia sakit.</i></span>
                                </td>
                            </tr>
                            <tr style="border-bottom:1px solid #cbd5e1;">
                                <td style="padding:9px 10px; color:#0f172a; font-weight:700; border-right:1px solid #cbd5e1; background:#f8fafc;">Berpasangan (Correlative)</td>
                                <td style="padding:9px 10px; color:#475569; line-height:1.5;">
                                    "She is <span style="color:#2563eb; font-weight:700;">not only</span> smart, <span style="color:#2563eb; font-weight:700;">but also</span> kind."<br>
                                    <span style="font-size:12.5px; color:#71717a;"><i>Artinya: Dia <b>tidak hanya</b> pintar, <b>tetapi juga</b> baik hati.</i></span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `;
        } else if (idLower === "pos-interjection" || idLower === "bab1-interjection") {
            // 🎯 JALUR KUSTOM BARU MAS ARDYAN: RENDER STRUKTUR TABEL SEKAT GANDA KHUSUS MATERI INTERJECTION (KATA SERU)
            isiKontenLaci = `
                <div style="color: #b45309; font-weight: bold; font-size: 12px; text-transform: uppercase; margin-bottom: 8px; display: flex; align-items: center; gap: 6px;">
                    <i class="fa-solid fa-bookmark"></i> 1. Karakteristik Utama Interjection
                </div>
                <div style="overflow-x:auto; margin-bottom: 18px;">
                    <table style="width:100%; border-collapse:collapse; background:#fff; font-size:13px; border-radius:6px; overflow:hidden; border: 1px solid #cbd5e1;">
                        <thead>
                            <tr style="background:#fef08a; color:#0f172a; border-bottom:2px solid #fde047;">
                                <th style="padding:10px; text-align:left; font-weight:700; border-right:1px solid #cbd5e1; width:35%;">Karakteristik</th>
                                <th style="padding:10px; text-align:left; font-weight:700;">Penjelasan Sifat Penggunaan</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom:1px solid #cbd5e1;">
                                <td style="padding:9px 10px; color:#0f172a; font-weight:700; border-right:1px solid #cbd5e1; background:#f8fafc;">Spontan</td>
                                <td style="padding:9px 10px; color:#475569; line-height:1.5;">
                                    Diucapkan secara tiba-tiba untuk merespons sesuatu kejadian atau perasaan.
                                </td>
                            </tr>
                            <tr style="border-bottom:1px solid #cbd5e1;">
                                <td style="padding:9px 10px; color:#0f172a; font-weight:700; border-right:1px solid #cbd5e1; background:#f8fafc;">Ekspresif</td>
                                <td style="padding:9px 10px; color:#475569; line-height:1.5;">
                                    Mewakili berbagai macam emosi manusia seperti senang, marah, terkejut, sedih, atau rasa sakit.
                                </td>
                            </tr>
                            <tr style="border-bottom:1px solid #cbd5e1;">
                                <td style="padding:9px 10px; color:#0f172a; font-weight:700; border-right:1px solid #cbd5e1; background:#f8fafc;">Mandiri</td>
                                <td style="padding:9px 10px; color:#475569; line-height:1.5;">
                                    Meskipun berdiri sendiri tanpa kalimat panjang, pendengar bisa langsung memahami emosi yang disampaikan.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div style="color: #b45309; font-weight: bold; font-size: 12px; text-transform: uppercase; margin-bottom: 8px; display: flex; align-items: center; gap: 6px;">
                    <i class="fa-solid fa-star"></i> 2. Jenis &amp; Contoh Kata (Dalam Bahasa Inggris)
                </div>
                <div style="overflow-x:auto;">
                    <table style="width:100%; border-collapse:collapse; background:#fff; font-size:13px; border-radius:6px; overflow:hidden; border: 1px solid #cbd5e1;">
                        <thead>
                            <tr style="background:#fef08a; color:#0f172a; border-bottom:2px solid #fde047;">
                                <th style="padding:10px; text-align:left; font-weight:700; border-right:1px solid #cbd5e1; width:35%;">Ekspresi Emosi</th>
                                <th style="padding:10px; text-align:left; font-weight:700;">Contoh Kata Seru &amp; Arti Konteks</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom:1px solid #cbd5e1;">
                                <td style="padding:9px 10px; color:#0f172a; font-weight:700; border-right:1px solid #cbd5e1; background:#f8fafc;">Keterkejutan (Surprise)</td>
                                <td style="padding:9px 10px; color:#475569; line-height:1.5;">
                                    <span style="color:#2563eb; font-weight:600;">Wow!</span> (Wah!), <span style="color:#2563eb; font-weight:600;">Oh!</span> (Oh!), <span style="color:#2563eb; font-weight:600;">Really?</span> (Benarkah?)
                                </td>
                            </tr>
                            <tr style="border-bottom:1px solid #cbd5e1;">
                                <td style="padding:9px 10px; color:#0f172a; font-weight:700; border-right:1px solid #cbd5e1; background:#f8fafc;">Kegembiraan (Joy)</td>
                                <td style="padding:9px 10px; color:#475569; line-height:1.5;">
                                    <span style="color:#2563eb; font-weight:600;">Hurrah!</span> (Hore!), <span style="color:#2563eb; font-weight:600;">Yay!</span> (Yey!)
                                </td>
                            </tr>
                            <tr style="border-bottom:1px solid #cbd5e1;">
                                <td style="padding:9px 10px; color:#0f172a; font-weight:700; border-right:1px solid #cbd5e1; background:#f8fafc;">Kekecewaan / Rasa Sakit</td>
                                <td style="padding:9px 10px; color:#475569; line-height:1.5;">
                                    <span style="color:#2563eb; font-weight:600;">Ouch!</span> (Aduh!), <span style="color:#2563eb; font-weight:600;">Oops!</span> (Aduh/Ups!), <span style="color:#2563eb; font-weight:600;">Oh no!</span> (Gawat!)
                                </td>
                            </tr>
                            <tr style="border-bottom:1px solid #cbd5e1;">
                                <td style="padding:9px 10px; color:#0f172a; font-weight:700; border-right:1px solid #cbd5e1; background:#f8fafc;">Keraguan / Penundaan</td>
                                <td style="padding:9px 10px; color:#475569; line-height:1.5;">
                                    <span style="color:#2563eb; font-weight:600;">Erm...</span>, <span style="color:#2563eb; font-weight:600;">Well...</span>, <span style="color:#2563eb; font-weight:600;">Hmm...</span>
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            `;
        } else {
            // 🎯 JALUR 1-B: UNIVERSAL MATERI BAB 1 & 4 LAINNYA (TABEL BIASA DENGAN PEMISAH KOMA)
            let arrayContoh = isiContoh.split(",");
            let arrayArti = isiArti.split(",");

            isiKontenLaci = `
                <div style="color: #b45309; font-weight: bold; font-size: 12px; text-transform: uppercase; margin-bottom: 8px; display: flex; align-items: center; gap: 6px;">
                    <i class="fa-solid fa-list"></i> Contoh ${idLower.startsWith('pos-') ? 'Kata' : 'Kalimat'}
                </div>
                <div style="overflow-x:auto;">
                    <table style="width:100%; border-collapse:collapse; background:#fff; font-size:13px; border-radius:6px; overflow:hidden; border: 1px solid #cbd5e1;">
                        <thead>
                            <tr style="background:#fef08a; color:#0f172a; border-bottom:2px solid #fde047;">
                                <th style="padding:10px; text-align:left; font-weight:700; border-right:1px solid #cbd5e1;">Contoh Kalimat</th>
                                <th style="padding:10px; text-align:left; font-weight:700;">Arti / Terjemahan</th>
                            </tr>
                        </thead>
                        <tbody>
            `;

            let batasBaris = Math.min(Math.max(arrayContoh.length, 3), 5);
            for (let j = 0; j < batasBaris; j++) {
                let itemC = arrayContoh[j] ? arrayContoh[j].trim() : "";
                let itemA = arrayArti[j] ? arrayArti[j].trim() : "";
                if (itemC !== "" || itemA !== "") {
                    isiKontenLaci += `
                                <tr style="border-bottom:1px solid #cbd5e1;">
                                    <td style="padding:9px 10px; color:#0f172a; font-weight:600; font-style:italic; border-right:1px solid #cbd5e1;">${itemC}</td>
                                    <td style="padding:9px 10px; color:#475569;">${itemA}</td>
                                </tr>
                    `;
                }
            }

            isiKontenLaci += `
                                <tr style="background:#fefce8;">
                                    <td style="padding:10px; color:#a1a1aa; font-style:italic; font-weight:600; border-right:1px solid #cbd5e1;">etc.</td>
                                    <td style="padding:10px; color:#a1a1aa; font-size:12px; font-style:italic;">Dan lain-lain</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            `;
        }

        // 🎯 MERAKIT STRUKTUR UTUH LACI TUTUP-SEMBUNYI (ACCORDION WINDOW) UNTUK BAB 1 & 4
        let htmlLaciSembunyi = `
            <div id="mms-laci-tutup-sembunyi-bab14" class="info-box-item" style="border-left: 4px solid #eab308; background: #fffdf5; padding: 14px; border-radius: 10px; width: 100%; box-sizing: border-box; margin-top: 14px;">
                <div class="info-box-header" style="color: #b45309; font-weight: bold; font-size: 12px; text-transform: uppercase; margin-bottom: 8px; display: flex; align-items: center; gap: 6px;">
                    <i class="fa-solid fa-lightbulb"></i> Referensi Data &amp; Contoh:
                </div>
                <button class="mms-toggle-trigger-btn" style="border-color: #eab308; color: #b45309; background: #fff; margin-top: 4px; width: 100%; padding: 8px 12px; border-radius: 6px; font-size: 12px; font-weight: bold; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; transition: all 0.15s ease;" 
                    onclick="let laci = document.getElementById('mms-panel-laci-bab14'); laci.style.display = (laci.style.display === 'none' || laci.style.display === '') ? 'block' : 'none';">
                    <i class="fa-solid fa-folder-open"></i> Ketuk untuk Buka / Sembunyikan Tabel
                </button>
                <div id="mms-panel-laci-bab14" style="display: none; margin-top: 10px; background: #fffdf5; padding: 4px; border-radius: 6px;">
                    ${isiKontenLaci}
                </div>
            </div>
        `;

        let pembungkusUtama = document.querySelector(".mms-vertical-layout-stack");
        if (pembungkusUtama) {
            pembungkusUtama.insertAdjacentHTML('beforeend', htmlLaciSembunyi);
        }

    } else if (idLower.startsWith("pasif-")) {
        // [ 🔒 JALUR 2: BAB 3 PASIF - UTUH SAMA SEKALI TIDAK DISENTUH ]
        if (elementBoxTipsUtama) {
            elementBoxTipsUtama.style.display = "block";
            let btnTriggerAsli = elementBoxTipsUtama.querySelector('.mms-toggle-trigger-btn');
            let headerAsli = elementBoxTipsUtama.querySelector('.info-box-header');
            if(btnTriggerAsli) btnTriggerAsli.style.display = "flex";
            if(headerAsli) headerAsli.style.display = "flex";
        }
        if (elementBoxAktifUtama) elementBoxAktifUtama.style.display = "none";
        if (elementBoxPasifUtama) elementBoxPasifUtama.style.display = "block";
        
        if(boxRumusAktif) boxRumusAktif.innerText = "Sistem Kalimat Pasif Aktif.";
        if(boxRumusPasif) boxRumusPasif.innerText = isiRumus; 
        
        if(boxArtiAktif) boxArtiAktif.innerHTML = `<div style='color:#94a3b8; font-style:italic;'>Membuka lembar materi kalimat pasif.</div>`;
        if(boxArtiPasif) {
            boxArtiPasif.innerHTML = `
                <div style="font-style: italic; font-weight: 600; color: var(--mms-navy); margin-bottom: 5px; white-space: pre-line;"><i class="fa-solid fa-quote-left" style="font-size:10px; opacity:0.5; margin-right:4px;"></i>${isiContoh}</div>
                <div style="border-bottom: 1px dashed #cbd5e1; margin-bottom: 5px; width: 100%;"></div>
                <div style="font-size: 12.5px; color: #475569; font-weight: 500; white-space: pre-line;"><b>Artinya:</b> ${isiArti || 'Belum ada terjemahan.'}</div>
            `;
        }

    } else if (idLower.startsWith("aktif-")) {
        // [ 🔒 JALUR 3: BAB 2 AKTIF - UTUH SAMA SEKALI TIDAK DISENTUH ]
        if (elementBoxTipsUtama) {
            elementBoxTipsUtama.style.display = "block";
            let btnTriggerAsli = elementBoxTipsUtama.querySelector('.mms-toggle-trigger-btn');
            let headerAsli = elementBoxTipsUtama.querySelector('.info-box-header');
            if(btnTriggerAsli) btnTriggerAsli.style.display = "flex";
            if(headerAsli) headerAsli.style.display = "flex";
        }
        if (elementBoxPasifUtama) elementBoxPasifUtama.style.display = "none";
        if (elementBoxAktifUtama) elementBoxAktifUtama.style.display = "block";
        
        if(boxRumusAktif) {
            boxRumusAktif.classList.add("mms-txt-rumus-glow");
            boxRumusAktif.innerText = isiRumus; 
        }
        if(boxRumusPasif) boxRumusPasif.innerText = "No Passive Form untuk tipe data ini.";
        
        if(boxArtiAktif) {
            boxArtiAktif.innerHTML = `
                <div style="font-style: italic; font-weight: 600; color: var(--mms-navy); margin-bottom: 5px; white-space: pre-line;"><i class="fa-solid fa-quote-left" style="font-size:10px; opacity:0.5; margin-right:4px;"></i>${isiContoh}</div>
                <div style="border-bottom: 1px dashed #cbd5e1; margin-bottom: 5px; width: 100%;"></div>
                <div style="font-size: 12.5px; color: #475569; font-weight: 500; white-space: pre-line;"><b>Artinya:</b> ${isiArti || 'Belum ada terjemahan.'}</div>
            `;
        }
        if(boxArtiPasif) boxArtiPasif.innerHTML = `<div style='color:#94a3b8; font-style:italic;'>Pilih menu Bab 3 untuk membuka struktur pasif.</div>`;
    }

    if(boxPembahasan) {
        boxPembahasan.innerText = dataCocok.fungsi ? dataCocok.fungsi.replace(/\\n/g, "\n") : `Menampilkan spesifikasi gramatikal rumpun ${dataCocok.judulBab}.`;
    }

    if(boxVisualMateri) {
        let visual = dataCocok.visual || "";
        if (visual.startsWith("fa-")) {
            boxVisualMateri.innerHTML = `<i class="fa-solid ${visual}" style="color:var(--mms-accent); font-size: 3em;"></i>`;
        } else if (visual && (visual.endsWith(".mp4") || visual.endsWith(".webm") || visual.includes("video/") || visual.startsWith("http"))) {
            boxVisualMateri.innerHTML = `<video id="mms-media-video-lokal" style="width:100%; height:100%; object-fit:cover; border-radius:8px;" controls>` +
                                            `<source src="${visual}" type="video/mp4">` +
                                         `</video>`;
        } else if (visual && visual.startsWith("images/")) {
            boxVisualMateri.innerHTML = `<img src="images/verb-categories-classification.png" alt="visual-materi" style="max-height:100%; width:100%; object-fit:cover; border-radius:6px;">`;
        } else {
            boxVisualMateri.innerHTML = `<i class="fa-solid fa-photo-film fa-2xl" style="color:#94a3b8"></i>`;
        }
    }

    document.getElementById("materi-pembahasan-box").style.display = "flex";
}


// =========================================================================
// 5. ANIMASI INTERFACES NAVIGASI (ACCORDION WINDOW MANAGEMENT)
// =========================================================================
function toggleAccordionBox(panelId) {
    let panel = document.getElementById(panelId); if (!panel) return;
    if (panelId === 'panel-aktif-contoh' || panelId === 'panel-pasif-contoh' || panelId === 'panel-tips-tabel') {
        panel.style.display = (panel.style.display === "none" || panel.style.display === "") ? "block" : "none"; return;
    }
    let isOpening = (panel.style.display === "none" || panel.style.display === "");
    let semuaKotakWaktu = ['act-box-present', 'pas-box-present'];
    semuaKotakWaktu.forEach(id => { let p = document.getElementById(id); if (p) p.style.display = "none"; });
    document.querySelectorAll('.mms-sub-laci').forEach(laci => laci.style.display = "none");
    if (isOpening) panel.style.display = "flex";
    else panel.style.display = "none";
}

function toggleSubLaci(idLaci) {
    let el = document.getElementById(idLaci); if (!el) return;
    let isOpening = (el.style.display === "none" || el.style.display === "");
    document.querySelectorAll('.mms-sub-laci').forEach(laci => { if (laci.id !== idLaci) laci.style.display = "none"; });
    if (isOpening) el.style.display = "block";
    else el.style.display = "none";
}

function toggleRumpunSmart(idBab) {
    let semuaBab = ['mms-bab-1-content', 'mms-bab-2-content', 'mms-bab-3-content', 'mms-bab-4-content'];
    semuaBab.forEach(id => {
        let el = document.getElementById(id); if (!el) return;
        if (id === idBab) {
            el.style.display = (el.style.display === "none" || el.style.display === "") ? "flex" : "none";
        } else {
            el.style.display = "none";
        }
    });
}

function resetTampilanDashboard() {
    document.getElementById("dashboard-menu").style.display = "block";
    document.getElementById("materi-body").style.display = "none";
    resetSeleksiDashboardEsensial();
}

function bukaMateriMenu() {
    document.getElementById("dashboard-menu").style.display = "none";
    document.getElementById("materi-body").style.display = "block";
    document.getElementById("materi-pembahasan-box").style.display = "none";
}

function kembaliKeDashboard() { resetTampilanDashboard(); }
function tutupModalMateri(e) { 
    let m = document.getElementById("materi-pembahasan-box"); 
    if (m && (!e || e.target.id === "materi-pembahasan-box")) {
        m.style.display = "none";
        let vidLokal = document.getElementById("mms-media-video-lokal");
        if (vidLokal) vidLokal.pause();
    } 
}

function mmsToggleVideoSaja() {
    let bv = document.getElementById("box-media-materi"); let btn = document.getElementById("mms-btn-buka-video"); if (!bv) return;
    let vid = document.getElementById("mms-media-video-lokal");
    if (bv.style.display === "flex") {
        bv.style.display = "none"; 
        if (vid) vid.pause();
        if (btn) btn.innerHTML = `<i class="fa-solid fa-circle-play"></i> <span>Ketuk untuk Lihat Penjelasan Video</span>`;
    } else {
        bv.style.display = "flex"; 
        if (vid) { vid.currentTime = 0; vid.play().catch(e => {}); }
        if (btn) btn.innerHTML = `<i class="fa-solid fa-circle-minus"></i> <span>Ketuk untuk Sembunyikan Video Materi</span>`;
    }
}

window.addEventListener('DOMContentLoaded', () => { ambilAsetDataWeb(); });
