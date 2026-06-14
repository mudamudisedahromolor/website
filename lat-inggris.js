const API_URL = "https://script.google.com/macros/s/AKfycbyVKLXjfulNsa7E_GaDoYv_TFz6ev2ZrM2TdEZJ3hRjPgXHfH8PWLlJ96wrJq1wrpib/exec";
const TSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTZdYtu7UisJXOIJIuQm8HzN1j-4aRCBzJ2BqTmRkXvzg42QV4jLVpj0tQkQIZmv5l7BsLl4QtXGJKr/pub?gid=976866681&single=true&output=tsv";

let userSession = null;
let bankSoal = [];
let bankMateri = []; 
let dataKamus = [];  
let indeksSoal = 0;
let jawabanTerpilih = "";
let nyawa = 5;

// 🚀 DATA RUMUS LOKAL: Tempat pengisian rumus Active & Passive Voice bertingkat
// Gunakan penulisan \n untuk enter baris baru agar tidak pecah/error di JavaScript
const bankMateriLokal = {
    "Simple Present": {
        active: "🟢 (+) S + V1 (s/es) + O\n🔴 (-) S + do/does + not + V1 + O\n🔵 (?) Do/Does + S + V1 + O?",
        passive: "🟢 (+) S + is/am/are + V3 + by + O\n🔴 (-) S + is/am/are + not + V3 + by + O\n🔵 (?) Is/Am/Are + S + V3 + by + O?"
    },
    "Simple Present Nominal": {
        active: "🟢 (+) S + is/am/are + Nominal (ANAV)\n🔴 (-) S + is/am/are + not + Nominal\n🔵 (?) Is/Am/Are + S + Nominal?",
        passive: "No Passive Form (Nominal/Dasar)."
    },
    "Present Continuous": {
        active: "🟢 (+) S + am/is/are + V-ing + O\n🔴 (-) S + am/is/are + not + V-ing + O\n🔵 (?) Am/Is/Are + S + V-ing + O?",
        passive: "🟢 (+) S + is/am/are + being + V3 + by + O\n🔴 (-) S + is/am/are + not + being + V3 + by + O\n🔵 (?) Is/Am/Are + S + being + V3 + by + O?"
    },
    "Present Perfect": {
        active: "🟢 (+) S + have/has + V3 + O\n🔴 (-) S + have/has + not + V3 + O\n🔵 (?) Have/Has + S + V3 + O?",
        passive: "🟢 (+) S + have/has + been + V3 + by + O\n🔴 (-) S + have/has + not + been + V3 + by + O\n🔵 (?) Have/Has + S + been + V3 + by + O?"
    },
    "Present Perfect Nominal": {
        active: "🟢 (+) S + have/has + been + Nominal\n🔴 (-) S + have/has + not + been + Nominal\n🔵 (?) Have/Has + S + been + Nominal?",
        passive: "No Passive Form (Nominal/Dasar)."
    },
    "Present Perfect Continuous": {
        active: "🟢 (+) S + have/has + been + V-ing + O\n🔴 (-) S + have/has + not + been + V-ing + O\n🔵 (?) Have/Has + S + been + V-ing + O?",
        passive: "🟢 (+) S + have/has + been + being + V3 + by + O"
    },
    "Simple Past": {
        active: "🟢 (+) S + V2 + O\n🔴 (-) S + did + not + V1 + O\n🔵 (?) Did + S + V1 + O?",
        passive: "🟢 (+) S + was/were + V3 + by + O\n🔴 (-) S + was/were + not + V3 + by + O\n🔵 (?) Was/Were + S + V3 + by + O?"
    },
    "Simple Past Nominal": {
        active: "🟢 (+) S + was/were + Nominal\n🔴 (-) S + was/were + not + Nominal\n🔵 (?) Was/Were + S + Nominal?",
        passive: "No Passive Form (Nominal/Dasar)."
    },
    "Past Continuous": {
        active: "🟢 (+) S + was/were + V-ing + O\n🔴 (-) S + was/were + not + V-ing + O\n🔵 (?) Was/Were + S + V-ing + O?",
        passive: "🟢 (+) S + was/were + being + V3 + by + O\n🔴 (-) S + was/were + not + being + V3 + by + O\n🔵 (?) Was/Were + S + being + V3 + by + O?"
    },
    "Past Perfect": {
        active: "🟢 (+) S + had + V3 + O\n🔴 (-) S + had + not + V3 + O\n🔵 (?) Had + S + V3 + O?",
        passive: "🟢 (+) S + had + been + V3 + by + O\n🔴 (-) S + had + not + been + V3 + by + O\n🔵 (?) Had + S + been + V3 + by + O?"
    },
    "Past Perfect Nominal": {
        active: "🟢 (+) S + had + been + Nominal\n🔴 (-) S + had + not + been + Nominal\n🔵 (?) Had + S + been + Nominal?",
        passive: "No Passive Form (Nominal/Dasar)."
    },
    "Past Perfect Continuous": {
        active: "🟢 (+) S + had + been + V-ing + O\n🔴 (-) S + had + not + been + V-ing + O\n🔵 (?) Had + S + been + V-ing + O?",
        passive: "🟢 (+) S + had + been + being + V3 + by + O"
    },
    "Simple Future": {
        active: "🟢 (+) S + will + V1 + O\n🔴 (-) S + will + not + V1 + O\n🔵 (?) Will + S + V1 + O?",
        passive: "🟢 (+) S + will + be + V3 + by + O\n🔴 (-) S + will + not + be + V3 + by + O\n🔵 (?) Will + S + be + V3 + by + O?"
    },
    "Simple Future Nominal": {
        active: "🟢 (+) S + will + be + Nominal\n🔴 (-) S + will + not + be + Nominal\n🔵 (?) Will + S + be + Nominal?",
        passive: "No Passive Form (Nominal/Dasar)."
    },
    "Future Continuous": {
        active: "🟢 (+) S + will + be + V-ing + O\n🔴 (-) S + will + not + be + V-ing + O\n🔵 (?) Will + S + be + V-ing + O?",
        passive: "🟢 (+) S + will + be + being + V3 + by + O"
    },
    "Future Perfect": {
        active: "🟢 (+) S + will + have + V3 + O\n🔴 (-) S + will + have + not + V3 + O\n🔵 (?) Will + S + have + V3 + O?",
        passive: "🟢 (+) S + will + have + been + V3 + by + O"
    },
    "Future Perfect Continuous": {
        active: "🟢 (+) S + will + have + been + V-ing + O\n🔴 (-) S + will + have + not + been + V-ing + O\n🔵 (?) Will + S + have + been + V-ing + O?",
        passive: "🟢 (+) S + will + have been + being + V3 + by + O"
    },
    "Simple Past Future": {
        active: "🟢 (+) S + would + V1 + O\n🔴 (-) S + would + not + V1 + O\n🔵 (?) Would + S + V1 + O?",
        passive: "🟢 (+) S + would + be + V3 + by + O"
    },
    "Simple Past Future Nominal": {
        active: "🟢 (+) S + would + be + Nominal\n🔴 (-) S + would + not + be + Nominal\n🔵 (?) Would + S + be + Nominal?",
        passive: "No Passive Form (Nominal/Dasar)."
    },
    "Past Future Continuous": {
        active: "🟢 (+) S + would + be + V-ing + O\n🔴 (-) S + would + not + be + V-ing + O\n🔵 (?) Would + S + be + V-ing + O?",
        passive: "🟢 (+) S + would + be + being + V3 + by + O"
    },
    "Past Future Perfect": {
        active: "🟢 (+) S + would + have + V3 + O\n🔴 (-) S + would + have + not + V3 + O\n🔵 (?) Would + S + have + V3 + O?",
        passive: "🟢 (+) S + would + have + been + V3 + by + O"
    },
    "Past Future Perfect Nominal": {
        active: "🟢 (+) S + would + have + been + Nominal\n🔴 (-) S + would + not + been + Nominal\n🔵 (?) Would + S + have + been + Nominal?",
        passive: "No Passive Form (Nominal/Dasar)."
    },
    "Past Future Perfect Continuous": {
        active: "🟢 (+) S + would + have + been + V-ing + O\n🔴 (-) S + would + have + not + been + V-ing + O\n🔵 (?) Would + S + have + been + V-ing + O?",
        passive: "🟢 (+) S + would + have + been + being + V3 + by + O"
    }
};

const kuisOffline = [
    { tanya: "Which one is an administrative tool used to store residents' data?", opsi: ["Database", "Invoice", "Schedule", "Letterhead"], benar: "Database", visual: "fa-database" }
];

function loginSistem() {
    let email = document.getElementById("user-email").value.trim().toLowerCase();
    if(!email) return alert("Email wajib diisi!");
    
    document.getElementById("login-panel").innerHTML = "<h3><i class='fa-solid fa-circle-notch fa-spin'></i> Menyinkronkan Akun...</h3>";
    
    fetch(`${API_URL}?aksi=login&email=${email}`)
    .then(r => r.json()).then(res => {
        userSession = res.data;
        document.getElementById("login-panel").style.display = "none";
        document.getElementById("main-panel").style.display = "block";
        document.getElementById("lbl-nama").innerText = userSession.nama;
        document.getElementById("lbl-xp").innerText = userSession.xp;
        
        resetTampilanDashboard();
        ambilAsetDataWeb();
        muatLeaderboard();
    }).catch(() => {
        alert("Membuka koneksi luring darurat!");
        userSession = { email: email, nama: email.split("@")[0], xp: 0 };
        document.getElementById("login-panel").style.display = "none";
        document.getElementById("main-panel").style.display = "block";
        
        bankSoal = kuisOffline;
        resetTampilanDashboard();
    });
}

function ambilAsetDataWeb() {
    let cacheBusterUrl = TSV_URL + "&_cb=" + new Date().getTime();

    fetch(cacheBusterUrl)
    .then(r => r.text())
    .then(tsvText => {
        bankMateri = parseTSVMateri(tsvText);
        renderSubTombolKunciDasar();
    }).catch(err => {
        console.error("Gagal memuat materi TSV:", err);
        renderSubTombolKunciDasar();
    });

    fetch(`${API_URL}?aksi=getMateriDanSoal`)
    .then(r => r.json()).then(res => {
        bankSoal = res.soal && res.soal.length > 0 ? res.soal : kuisOffline;
        dataKamus = res.kamus ? res.kamus : [];
        renderKamusKeHalaman();
    }).catch(() => {
        bankSoal = kuisOffline;
    });
}

function parseTSVMateri(text) {
    if (!text) return [];
    let baris = text.split("\n");
    let hasil = [];
    for(let i = 1; i < baris.length; i++) {
        if(!baris[i].trim()) continue;
        let kolom = baris[i].split("\t");
        
        hasil.push({
            id: kolom[0] ? kolom[0].trim() : "",
            modals: kolom[1] ? kolom[1].trim() : "",
            namaMateri: kolom[2] ? kolom[2].trim() : "",
            tipeRumus: kolom[3] ? kolom[3].toLowerCase().trim() : "",
            rumus: kolom[4] ? kolom[4].trim() : "",
            pembahasan: kolom[5] ? kolom[5].trim() : "", 
            arti: kolom[6] ? kolom[6].trim() : "",
            visual: kolom[7] ? kolom[7].trim() : "",
            kolomI: kolom[8] ? kolom[8].trim() : "", 
            kolomJ: kolom[9] ? kolom[9].trim() : ""  
        });
    }
    return hasil;
}

function renderSubTombolKunciDasar() {
    let gridTombol = document.getElementById("mms-grid-sub-tombol");
    if (!gridTombol) return;
    gridTombol.innerHTML = "";

    try {
        if (!bankMateri || bankMateri.length === 0) {
            gridTombol.innerHTML = `<div style="grid-column: span 2; font-size:12px; color:#94a3b8; text-align:center; padding: 5px 0;">Menunggu koneksi data dari Sheets...</div>`;
            return;
        }

        let barisDasar = bankMateri.filter(m => {
            let cat = (m.namaMateri || "").toLowerCase().trim();
            return cat.includes("dasar");
        });

        if (barisDasar.length === 0) {
            gridTombol.innerHTML = `<div style="grid-column: span 2; font-size:12px; color:#94a3b8; text-align:center; padding: 5px 0;">Pastikan Kolom C di Sheets berisi kata 'Dasar'</div>`;
            return;
        }

        barisDasar.forEach((materi, index) => {
            let judulTombol = materi.kolomI || `Kata Kunci ${index + 1}`;
            let idUnik = materi.id || index;
            
            gridTombol.innerHTML += `
                <button class="btn-type-choice" id="mms-sub-btn-${idUnik}" 
                    style="border-color: var(--mms-accent); color: var(--mms-accent);" 
                    onclick="tampilkanParagrafDetailDasar('${idUnik}', this)">
                    ${judulTombol}
                </button>
            `;
        });
    } catch (e) {
        console.error("Error saat merender tombol dasar:", e);
        gridTombol.innerHTML = `<div style="grid-column: span 2; font-size:12px; color:var(--mms-red); text-align:center;">Gagal memuat daftar kata kunci.</div>`;
    }
}

function tampilkanParagrafDetailDasar(idMateri, btnElement) {
    let panelPenjelasan = document.getElementById("mms-box-penjelasan-dasar");
    let textParagrafJ = document.getElementById("mms-txt-paragraf-j");

    if (btnElement.classList.contains("mms-active-dasar") && panelPenjelasan.style.display === "block") {
        panelPenjelasan.style.display = "none";
        btnElement.classList.remove("mms-active-dasar");
        return;
    }

    document.querySelectorAll("#mms-grid-sub-tombol .btn-type-choice").forEach(b => b.classList.remove("mms-active-dasar"));

    let cocok = bankMateri.find(m => m.id === idMateri);

    if (!cocok || !cocok.kolomJ) {
        textParagrafJ.innerText = "Teks penjelasan pada kolom J kosong.";
        panelPenjelasan.style.display = "block";
        btnElement.classList.add("mms-active-dasar");
        return;
    }

    textParagrafJ.innerText = cocok.kolomJ;
    panelPenjelasan.style.display = "block";
    btnElement.classList.add("mms-active-dasar");
}

function toggleRumpunTense(panelId) {
    let targetPanel = document.getElementById(panelId);
    if (!targetPanel) return;

    let icon = targetPanel.previousElementSibling.querySelector(".fa-chevron-down, .fa-chevron-up");

    if (targetPanel.style.display === "flex") {
        targetPanel.style.display = "none";
        if (icon) {
            icon.classList.remove("fa-chevron-up");
            icon.classList.add("fa-chevron-down");
        }
    } else {
        targetPanel.style.display = "flex";
        if (icon) {
            icon.classList.remove("fa-chevron-down");
            icon.classList.add("fa-chevron-up");
        }
    }
}

function toggleAccordionBox(panelId) {
    let panel = document.getElementById(panelId);
    if (!panel) return;
    
    let isOpening = (panel.style.display === "none" || panel.style.display === "");

    let semuaKotakWaktu = [
        'act-box-present', 'act-box-past', 'act-box-future', 'act-box-pfuture',
        'pas-box-present', 'pas-box-past', 'pas-box-future', 'pas-box-pfuture'
    ];
    
    semuaKotakWaktu.forEach(id => {
        if (id !== panelId) {
            let p = document.getElementById(id);
            if (p) p.style.display = "none";
        }
    });

    document.querySelectorAll('.mms-sub-laci').forEach(laci => laci.style.display = "none");
    document.querySelectorAll('.mms-rumpun-content .btn-type-choice').forEach(btn => {
        btn.classList.remove('mms-btn-active-laci', 'mms-btn-active-laci-nominal');
    });

    if (isOpening) {
        panel.style.display = "flex";
    } else {
        panel.style.display = "none";
    }
}

function toggleSubLaci(idLaci) {
    let el = document.getElementById(idLaci);
    if (!el) return;
    
    let isOpening = (el.style.display === "none" || el.style.display === "");
    let pemicuKlik = event ? event.currentTarget : null; 

    document.querySelectorAll('.mms-sub-laci').forEach(laci => {
        if (laci.id !== idLaci) laci.style.display = "none";
    });
    
    document.querySelectorAll('.mms-rumpun-content .btn-type-choice').forEach(btn => {
        if (btn !== pemicuKlik) btn.classList.remove('mms-btn-active-laci', 'mms-btn-active-laci-nominal');
    });

    if (isOpening) {
        el.style.display = "block";
        if (pemicuKlik && pemicuKlik.classList.contains('btn-mms-nominal')) {
            pemicuKlik.classList.add('mms-btn-active-laci-nominal');
        } else if (pemicuKlik) {
            pemicuKlik.classList.add('mms-btn-active-laci');
        }
    } else {
        el.style.display = "none";
        if (pemicuKlik) pemicuKlik.classList.remove('mms-btn-active-laci', 'mms-btn-active-laci-nominal');
    }
}

function toggleModalSubAccordion(subPanelId) {
    let subPanel = document.getElementById(subPanelId);
    if (!subPanel) return;

    if (subPanel.style.display === "block" || subPanel.style.display === "flex") {
        subPanel.style.display = "none";
    } else {
        subPanel.style.display = "block";
    }
}

function resetTampilanDashboard() {
    document.getElementById("dashboard-menu").style.display = "block";
    document.getElementById("materi-body").style.display = "none";
    document.getElementById("vocab-body").style.display = "none";
    
    if (document.getElementById("mms-accordion-konten-dasar")) {
        document.getElementById("mms-accordion-konten-dasar").style.display = "none";
    }
    if (document.getElementById("mms-box-penjelasan-dasar")) {
        document.getElementById("mms-box-penjelasan-dasar").style.display = "none";
    }
    document.querySelectorAll("#mms-grid-sub-tombol .btn-type-choice").forEach(b => b.classList.remove("mms-active-dasar"));

    document.querySelectorAll('.mms-rumpun-card').forEach(card => card.classList.remove('mms-bab-active-card'));
    document.querySelectorAll(".mms-rumpun-content").forEach(p => p.style.display = "none");
    document.querySelectorAll(".mms-rumpun-header .fa-chevron-up").forEach(i => {
        i.classList.remove("fa-chevron-up");
        i.classList.add("fa-chevron-down");
    });
}

function bukaMateriMenu() {
    document.getElementById("dashboard-menu").style.display = "none";
    document.getElementById("materi-body").style.display = "block";
    document.getElementById("vocab-body").style.display = "none";
    document.getElementById("materi-pembahasan-box").style.display = "none";
}

function bukaVocab() {
    document.getElementById("dashboard-menu").style.display = "none";
    document.getElementById("materi-body").style.display = "none";
    document.getElementById("vocab-body").style.display = "block";
    renderKamusKeHalaman();
}

function renderKamusKeHalaman(filterText = "") {
    let container = document.getElementById("box-daftar-vocab");
    if (!container) return;
    container.innerHTML = "";
    
    let filtered = dataKamus.filter(item => {
        let kata = (item.kata || item.Kata || "").toLowerCase();
        let arti = (item.arti || item.Arti || "").toLowerCase();
        return kata.includes(filterText) || arti.includes(filterText);
    });

    if(filtered.length === 0) {
        container.innerHTML = `<div style="text-align:center; padding:20px; color:#94a3b8; font-size:13px;">Kosakata tidak ditemukan...</div>`;
        return;
    }

    filtered.forEach(item => {
        let c = item.contoh || item.Contoh || "Belum tersedia contoh kalimat.";
        container.innerHTML += `
            <div class="vocab-item">
                <div style="font-weight: bold; color: var(--mms-navy); font-size: 14px;"><i class="fa-solid fa-language" style="color:var(--mms-green); margin-right:5px;"></i> ${item.kata || item.Kata}</div>
                <div style="color: #475569; font-size: 13px; margin-top:4px; padding-left:20px;"><b>Arti:</b> ${item.arti || item.Arti}</div>
                <div style="color: #64748b; font-size: 12px; margin-top:5px; padding:6px 10px; background:#fff; border-left:3px solid var(--mms-green); font-style:italic; padding-left:15px;"><b>Contoh:</b> ${c}</div>
            </div>`;
    });
}

function filterKamusUser() {
    let txt = document.getElementById("vocab-search").value.toLowerCase().trim();
    renderKamusKeHalaman(txt);
}

function kembaliKeDashboard() {
    resetTampilanDashboard();
}

// 🚀 UPGRADE FUNGSI PENAMPIL MATERI: Sinkronisasi Otomatis dengan Object Rumus Lokal Pemuda
function tampilkanMateriSpesifik(namaTense, tipeRumusGabungan) {
    let boxVisualMateri = document.getElementById("box-media-materi");
    let boxRumusAktif = document.getElementById("box-txt-rumus-aktif");
    let boxRumusPasif = document.getElementById("box-txt-rumus-pasif");
    let boxArtiAktif = document.getElementById("box-txt-arti-aktif");
    let boxArtiPasif = document.getElementById("box-txt-arti-pasif");
    let boxPembahasan = document.getElementById("box-txt-pembahasan");
    let boxSilabus = document.getElementById("box-txt-silabus");
    let btnVideo = document.getElementById("mms-btn-buka-video");

    if (boxVisualMateri) boxVisualMateri.style.display = "none";
    
    if (btnVideo) {
        btnVideo.innerHTML = `<i class="fa-solid fa-circle-play"></i> <span>Ketuk untuk Lihat Penjelasan Video</span>`;
        btnVideo.style.background = "#eff6ff";
        btnVideo.style.color = "var(--mms-accent)";
        btnVideo.style.borderColor = "var(--mms-accent)";
    }

    if(document.getElementById('panel-aktif-contoh')) document.getElementById('panel-aktif-contoh').style.display = "none";
    if(document.getElementById('panel-pasif-contoh')) document.getElementById('panel-pasif-contoh').style.display = "none";
    if(document.getElementById('panel-tips-tabel')) document.getElementById('panel-tips-tabel').style.display = "none"; 

    let labelTipe = tipeRumusGabungan.replace("-", " [").toUpperCase() + "]";
    let judulTense = document.getElementById("lbl-judul-tense-aktif");
    if (judulTense) judulTense.innerHTML = `Modul: <b>${namaTense} ${labelTipe}</b>`;

    let tipsPintar = document.getElementById("wrapper-box-tips-pintar");
    if (tipsPintar) {
        if (namaTense === 'Dasar') {
            tipsPintar.style.display = "none";
        } else {
            tipsPintar.style.display = "block";
        }
    }

    // 1. Ambil data silabus/pembahasan/visual dasar dari Google Sheets
    let dataCocok = bankMateri.find(m => {
        let namaDiSheet = (m.namaMateri || "").toLowerCase().trim();
        let tipeDiSheet = (m.tipeRumus || "").toLowerCase().trim();
        return namaDiSheet.includes(namaTense.toLowerCase().trim()) && tipeDiSheet === tipeRumusGabungan.toLowerCase().trim();
    });

    if(boxSilabus) boxSilabus.innerText = dataCocok ? (dataCocok.modals || "Tidak ada kata kunci khusus.") : "Tidak ada kata kunci khusus.";
    if(boxPembahasan) boxPembahasan.innerText = `Pola karakter rumpun waktu ${namaTense} digunakan untuk mengekspresikan struktur tata bahasa sesuai dengan fungsi gramatikal yang berlaku.`;

    // 🚀 2. SINKRONISASI LOGIKA MANDIRI: Tarik rumus dari object lokal biar enter (\n) berfungsi 100%
    let rumusLokal = bankMateriLokal[namaTense];
    if (rumusLokal) {
        if(boxRumusAktif) boxRumusAktif.innerText = rumusLokal.active;
        if(boxRumusPasif) boxRumusPasif.innerText = rumusLokal.passive;
        
        // Memunculkan kontainer pembungkus pasif jika tenses tersebut memiliki bentuk pasif
        if (rumusLokal.passive.toLowerCase().includes("no passive")) {
            if(document.getElementById("wrapper-box-pasif")) document.getElementById("wrapper-box-pasif").style.display = "none";
        } else {
            if(document.getElementById("wrapper-box-pasif")) document.getElementById("wrapper-box-pasif").style.display = "block";
        }
    } else {
        if(boxRumusAktif) boxRumusAktif.innerText = "Belum ada rumus aktif.";
        if(boxRumusPasif) boxRumusPasif.innerText = "Belum ada rumus pasif.";
    }

    // 3. Tarik data Contoh Kalimat & Arti dari Sheets (Kolom F & G)
    let kolomF = dataCocok ? (dataCocok.pembahasan || "") : ""; 
    let kolomG = dataCocok ? (dataCocok.arti || "") : "";       

    let inggrisAktif = "Belum ada contoh kalimat.", inggrisPasif = "No Passive Example.";
    let artiAktif = "", artiPasif = "";

    if (kolomF.includes("[Pasif]") || kolomF.includes("Pasif")) {
        let pemisahF = kolomF.includes("[Pasif]") ? "[Pasif]" : "Pasif";
        let bagianF = kolomF.split(pemisahF);
        inggrisAktif = bagianF[0].replace("[Aktif]", "").replace("Aktif", "").trim();
        inggrisPasif = bagianF[1].trim();
    } else {
        inggrisAktif = kolomF.replace("[Aktif]", "").replace("Aktif", "").trim();
    }

    if (kolomG.includes("[Pasif]") || kolomG.includes("Pasif")) {
        let pemisahG = kolomG.includes("[Pasif]") ? "[Pasif]" : "Pasif";
        let bagianG = kolomG.split(pemisahG);
        artiAktif = bagianG[0].replace("[Aktif]", "").replace("Aktif", "").trim();
        artiPasif = bagianG[1].trim();
    } else {
        artiAktif = kolomG.replace("[Aktif]", "").replace("Aktif", "").trim();
    }

    if(boxArtiAktif) {
        boxArtiAktif.innerHTML = `
            <div style="font-style: italic; font-weight: 600; color: var(--mms-navy); margin-bottom: 5px;"><i class="fa-solid fa-quote-left" style="font-size:10px; opacity:0.5; margin-right:4px;"></i>${inggrisAktif || 'Belum ada contoh.'}</div>
            <div style="border-bottom: 1px dashed #cbd5e1; margin-bottom: 5px; width: 100%;"></div>
            <div style="font-size: 12.5px; color: #475569; font-weight: 500;"><b>Artinya:</b> ${artiAktif || 'Belum ada terjemahan.'}</div>
        `;
    }

    if(boxArtiPasif) {
        boxArtiPasif.innerHTML = `
            <div style="font-style: italic; font-weight: 600; color: var(--mms-navy); margin-bottom: 5px;"><i class="fa-solid fa-quote-left" style="font-size:10px; opacity:0.5; margin-right:4px;"></i>${inggrisPasif}</div>
            <div style="border-bottom: 1px dashed #cbd5e1; margin-bottom: 5px; width: 100%;"></div>
            <div style="font-size: 12.5px; color: #475569; font-weight: 500;"><b>Artinya:</b> ${artiPasif || 'Belum ada terjemahan Pasif.'}</div>
        `;
    }

    if(boxVisualMateri) {
        let visual = dataCocok ? (dataCocok.visual || "") : "";
        if (visual.startsWith("fa-")) {
            boxVisualMateri.innerHTML = `<i class="fa-solid ${visual}" style="color:var(--mms-accent); font-size: 3em;"></i>`;
        } 
        else if (visual && (visual.endsWith(".mp4") || visual.endsWith(".webm") || visual.includes("video/"))) {
            boxVisualMateri.innerHTML = `<video id="mms-media-video-lokal" style="width:100%; height:100%; object-fit:cover; border-radius:8px;" controls>` +
                                            `<source src="${visual}" type="video/mp4">` +
                                            `Browser kamu tidak mendukung pemutar video.` +
                                         `</video>`;
        } else if (visual && (visual.startsWith("http") || visual.startsWith("images/"))) {
            boxVisualMateri.innerHTML = `<img src="${visual}" alt="visual-materi" style="max-height:100%; width:100%; object-fit:cover; border-radius:6px;">`;
        } else {
            boxVisualMateri.innerHTML = `<i class="fa-solid fa-photo-film fa-2xl" style="color:#94a3b8"></i>`;
        }
    }

    document.getElementById("materi-pembahasan-box").style.display = "flex";
}

function tutupModalMateri(e) {
    let modalBox = document.getElementById("materi-pembahasan-box");
    if (!modalBox) return;

    if (!e) {
        modalBox.style.display = "none";
        return;
    }
    
    if (e.target.id === "materi-pembahasan-box") {
        modalBox.style.display = "none";
    }
}

function mmsToggleVideoSaja() {
    let boxVisual = document.getElementById("box-media-materi");
    let btnVideo = document.getElementById("mms-btn-buka-video");
    if (!boxVisual) return;

    let videoLokal = document.getElementById("mms-media-video-lokal");

    if (boxVisual.style.display === "flex") {
        boxVisual.style.display = "none";
        if (videoLokal) videoLokal.pause();
        
        if (btnVideo) {
            btnVideo.innerHTML = `<i class="fa-solid fa-circle-play"></i> <span>Ketuk untuk Lihat Penjelasan Video</span>`;
            btnVideo.style.background = "#eff6ff";
            btnVideo.style.color = "var(--mms-accent)";
            btnVideo.style.borderColor = "var(--mms-accent)";
        }
    } else {
        boxVisual.style.display = "flex";
        if (videoLokal) {
            videoLokal.currentTime = 0;
            videoLokal.play().catch(err => console.log("Autoplay ditolak browser:", err));
        }
        
        if (btnVideo) {
            btnVideo.innerHTML = `<i class="fa-solid fa-circle-minus"></i> <span>Ketuk untuk Sembunyikan Video Materi</span>`;
            btnVideo.style.background = "#f1f5f9";
            btnVideo.style.color = "#64748b";
            btnVideo.style.borderColor = "#cbd5e1";
        }
    }
}

function mmsToggleDinamisMediaMateri(e) {
    let boxVisual = document.getElementById("box-media-materi");
    let btnVideo = document.getElementById("mms-btn-buka-video");
    if (!boxVisual) return;

    if (!boxVisual.contains(e.target) && !document.getElementById("mms-btn-buka-video").contains(e.target)) {
        boxVisual.style.display = "none";
        
        let videoLokal = document.getElementById("mms-media-video-lokal");
        if (videoLokal) {
            videoLokal.pause();
        }

        if (btnVideo) {
            btnVideo.innerHTML = `<i class="fa-solid fa-circle-play"></i> <span>Ketuk untuk Lihat Penjelasan Video</span>`;
            btnVideo.style.background = "#eff6ff";
            btnVideo.style.color = "var(--mms-accent)";
            btnVideo.style.borderColor = "var(--mms-accent)";
        }
    }
}

function toggleRumpunSmart(idBab) {
    let semuaBab = ['mms-bab-1-content', 'mms-bab-2-content', 'mms-bab-3-content', 'mms-bab-4-content'];
    
    semuaBab.forEach(id => {
        let el = document.getElementById(id);
        if (!el) return;
        
        let cardUtama = el.closest('.mms-rumpun-card'); 
        let header = el.previousElementSibling; 
        let icon = header ? header.querySelector('.fa-chevron-down, .fa-chevron-up') : null;

        if (id === idBab) {
            if (el.style.display === "none" || el.style.display === "") {
                el.style.display = "flex";
                if (icon) { icon.classList.remove('fa-chevron-down'); icon.classList.add('fa-chevron-up'); }
                if (cardUtama) cardUtama.classList.add('mms-bab-active-card');
            } else {
                el.style.display = "none";
                if (icon) { icon.classList.remove('fa-chevron-up'); icon.classList.add('fa-chevron-down'); }
                if (cardUtama) cardUtama.classList.remove('mms-bab-active-card');
                mmsResetSemuaLaciInterior();
            }
        } else {
            el.style.display = "none";
            if (icon) { icon.classList.remove('fa-chevron-up'); icon.classList.add('fa-chevron-down'); }
            if (cardUtama) cardUtama.classList.remove('mms-bab-active-card');
        }
    });
}

function mmsResetSemuaLaciInterior() {
    let semuaKotakWaktu = [
        'act-box-present', 'act-box-past', 'act-box-future', 'act-box-pfuture',
        'pas-box-present', 'pas-box-past', 'pas-box-future', 'pas-box-pfuture'
    ];
    semuaKotakWaktu.forEach(id => {
        let p = document.getElementById(id);
        if (p) p.style.display = "none";
    });
    document.querySelectorAll('.mms-sub-laci').forEach(laci => {
        laci.style.display = "none";
    });
    document.querySelectorAll('.btn-type-choice').forEach(btn => {
        btn.classList.remove('mms-btn-active-laci', 'mms-btn-active-laci-nominal');
    });
}

document.addEventListener('click', function(event) {
    if (event.target.closest('form') || event.target.id === 'user-email' || event.target.closest('#login-panel')) {
        return; 
    }

    if (event.target.closest('.mms-rumpun-header') || event.target.closest('.mms-rumpun-content') || event.target.closest('button[onclick^="toggleSubLaci"]') || event.target.closest('.mms-sub-laci') || event.target.closest('#materi-pembahasan-box')) {
        return;
    }
    
    let semuaBab = ['mms-bab-1-content', 'mms-bab-2-content', 'mms-bab-3-content', 'mms-bab-4-content'];
    semuaBab.forEach(id => {
        let el = document.getElementById(id);
        if (el && el.style.display === "flex") {
            el.style.display = "none";
            let cardUtama = el.closest('.mms-rumpun-card');
            if (cardUtama) cardUtama.classList.remove('mms-bab-active-card');
            let header = el.previousElementSibling;
            let icon = header ? header.querySelector('.fa-chevron-up') : null;
            if (icon) { icon.classList.remove('fa-chevron-up'); icon.classList.add('fa-chevron-down'); }
        }
    });

    mmsResetSemuaLaciInterior();
});

window.addEventListener('DOMContentLoaded', () => {
    ambilAsetDataWeb();
});
