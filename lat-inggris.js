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

        // 🎯 JALUR 1-A: LOGIKA TABEL PRONOUNS TABLE / POS-PRONOUN (KUSTOM SEPERTI GAMBAR REFERENSI)
        if (idLower === "bab1-pronouns" || idLower === "pos-pronoun") {
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

        // 🎯 FIX INSTAN: Menggunakan ID kustom #mms-panel-laci-bab14 dan pemanggil fungsi anonim lokal agar anti-bentrok
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
            boxVisualMateri.innerHTML = `<img src="${visual}" alt="visual-materi" style="max-height:100%; width:100%; object-fit:cover; border-radius:6px;">`;
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
        bv.style.display = "none"; if (vid) vid.pause();
        if (btn) btn.innerHTML = `<i class="fa-solid fa-circle-play"></i> <span>Ketuk untuk Lihat Penjelasan Video</span>`;
    } else {
        bv.style.display = "flex"; if (vid) { vid.currentTime = 0; vid.play().catch(e => {}); }
        if (btn) btn.innerHTML = `<i class="fa-solid fa-circle-minus"></i> <span>Ketuk untuk Sembunyikan Video Materi</span>`;
    }
}

window.addEventListener('DOMContentLoaded', () => { ambilAsetDataWeb(); });
