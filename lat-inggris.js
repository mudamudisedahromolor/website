const API_URL = "https://script.google.com/macros/s/AKfycbyVKLXjfulNsa7E_GaDoYv_TFz6ev2ZrM2TdEZJ3hRjPgXHfH8PWLlJ96wrJq1wrpib/exec";
const TSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTZdYtu7UisJXOIJIuQm8HzN1j-4aRCBzJ2BqTmRkXvzg42QV4jLVpj0tQkQIZmv5l7BsLl4QtXGJKr/pub?gid=976866681&single=true&output=tsv";

let userSession = null;
let bankSoal = [];
let bankMateri = []; 
let dataKamus = [];  
let indeksSoal = 0;
let jawabanTerpilih = "";
let nyawa = 5;

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

// 🛠️ SEKARANG MEMBACA SAMPAI KOLOM I (9 KOLOM)
function parseTSVMateri(text) {
    if (!text) return [];
    let baris = text.split("\n");
    let hasil = [];
    for(let i = 1; i < baris.length; i++) {
        if(!baris[i].trim()) continue;
        let kolom = baris[i].split("\t");
        
        hasil.push({
            no: kolom[0] ? kolom[0].trim() : "",                // Kolom A
            judulBab: kolom[1] ? kolom[1].trim() : "",          // Kolom B
            materi: kolom[2] ? kolom[2].trim() : "",            // Kolom C
            subMateri: kolom[3] ? kolom[3].trim() : "",         // Kolom D
            rumus: kolom[4] ? kolom[4].trim() : "",             // Kolom E
            contohKalimat: kolom[5] ? kolom[5].trim() : "",     // Kolom F
            arti: kolom[6] ? kolom[6].trim() : "",              // Kolom G
            visual: kolom[7] ? kolom[7].trim() : "",            // Kolom H (TEMPAT LINK VIDEO / MEDIA)
            fungsi: kolom[8] ? kolom[8].trim() : ""             // Kolom I (TEMPAT PENJELASAN PENGGUNAAN)
        });
    }
    return hasil;
}

// 🚀 FUNGSI MENAMPILKAN MATERI DENGAN DUKUNGAN STRUKTUR KOLOM BARU
function tampilkanMateriSpesifik(namaMateriKolomC, subMateriKolomD) {
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

    let judulTense = document.getElementById("lbl-judul-tense-aktif");

    let dataCocok = bankMateri.find(m => {
        let matSheet = (m.materi || "").toLowerCase().trim();
        let subSheet = (m.subMateri || "").toLowerCase().trim();
        return matSheet === namaMateriKolomC.toLowerCase().trim() && subSheet === subMateriKolomD.toLowerCase().trim();
    });

    if (!dataCocok) {
        if (judulTense) judulTense.innerHTML = `Modul: <b>${namaMateriKolomC}</b>`;
        if(boxRumusAktif) boxRumusAktif.innerText = "Belum Ada Data";
        if(boxRumusPasif) boxRumusPasif.innerText = "Belum Ada Data";
        if(boxPembahasan) boxPembahasan.innerText = "Data tidak ditemukan di Google Sheets.";
        if(boxVisualMateri) boxVisualMateri.innerHTML = `<i class="fa-solid fa-photo-film fa-2xl" style="color:#94a3b8"></i>`;
        document.getElementById("materi-pembahasan-box").style.display = "flex";
        return;
    }

    let labelTipeTeks = subMateriKolomD.replace(/-/g, " ").toUpperCase();
    if (judulTense) judulTense.innerHTML = `Modul: <b>${namaMateriKolomC} (${labelTipeTeks})</b>`;
    if(boxSilabus) boxSilabus.innerText = dataCocok.judulBab || "MMS Ruang Literasi";

    let isiRumus = (dataCocok.rumus || "").replace(/\\n/g, "\n");
    let isiContoh = (dataCocok.contohKalimat || "").replace(/\\n/g, "\n");
    let isiArti = (dataCocok.arti || "").replace(/\\n/g, "\n");

    if (subMateriKolomD.toLowerCase().includes("passive") || (dataCocok.judulBab || "").toLowerCase().includes("passive") || (dataCocok.judulBab || "").toLowerCase().includes("pasif")) {
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
        if(document.getElementById("wrapper-box-pasif")) document.getElementById("wrapper-box-pasif").style.display = "block";
    } else {
        if(boxRumusAktif) boxRumusAktif.innerText = isiRumus; 
        if(boxRumusPasif) boxRumusPasif.innerText = "No Passive Form untuk tipe data ini.";
        
        if(boxArtiAktif) {
            boxArtiAktif.innerHTML = `
                <div style="font-style: italic; font-weight: 600; color: var(--mms-navy); margin-bottom: 5px; white-space: pre-line;"><i class="fa-solid fa-quote-left" style="font-size:10px; opacity:0.5; margin-right:4px;"></i>${isiContoh}</div>
                <div style="border-bottom: 1px dashed #cbd5e1; margin-bottom: 5px; width: 100%;"></div>
                <div style="font-size: 12.5px; color: #475569; font-weight: 500; white-space: pre-line;"><b>Artinya:</b> ${isiArti || 'Belum ada terjemahan.'}</div>
            `;
        }
        if(boxArtiPasif) boxArtiPasif.innerHTML = `<div style='color:#94a3b8; font-style:italic;'>Pilih menu Bab 3 untuk membuka struktur pasif.</div>`;
        if(document.getElementById("wrapper-box-pasif")) document.getElementById("wrapper-box-pasif").style.display = "none";
    }

    // 🚀 MENAMPILKAN PENJELASAN FUNGSI (KOLOM I) KE BOX PEMBAHASAN BAWAH MODAL
    if(boxPembahasan) {
        let isiFungsiKombinasi = dataCocok.fungsi ? dataCocok.fungsi.replace(/\\n/g, "\n") : `Menampilkan spesifikasi gramatikal rumpun ${dataCocok.judulBab}.`;
        boxPembahasan.innerText = isiFungsiKombinasi;
    }

    // 🚀 PROSES MEMBACA VIDEO ATAU MEDIA (KOLOM H)
    if(boxVisualMateri) {
        let visual = dataCocok.visual || "";
        if (visual.startsWith("fa-")) {
            boxVisualMateri.innerHTML = `<i class="fa-solid ${visual}" style="color:var(--mms-accent); font-size: 3em;"></i>`;
        } else if (visual && (visual.endsWith(".mp4") || visual.endsWith(".webm") || visual.includes("video/") || visual.startsWith("http"))) {
            // Jika kolom H berisi link URL video (baik mp4 lokal maupun link video online/hosting)
            boxVisualMateri.innerHTML = `<video id="mms-media-video-lokal" style="width:100%; height:100%; object-fit:cover; border-radius:8px;" controls>` +
                                            `<source src="${visual}" type="video/mp4">` +
                                            `Browser sampeyan tidak mendukung pemutaran elemen video.` +
                                         `</video>`;
        } else if (visual && visual.startsWith("images/")) {
            boxVisualMateri.innerHTML = `<img src="${visual}" alt="visual-materi" style="max-height:100%; width:100%; object-fit:cover; border-radius:6px;">`;
        } else {
            boxVisualMateri.innerHTML = `<i class="fa-solid fa-photo-film fa-2xl" style="color:#94a3b8"></i>`;
        }
    }

    document.getElementById("materi-pembahasan-box").style.display = "flex";
}

// ==========================================================================
// FUNGSI OPERASIONAL SELEBIHNYA (TETAP AMAN TIDAK BERUBAH)
// ==========================================================================
function toggleRumpunTense(panelId) {
    let targetPanel = document.getElementById(panelId);
    if (!targetPanel) return;
    let icon = targetPanel.previousElementSibling.querySelector(".fa-chevron-down, .fa-chevron-up");
    if (targetPanel.style.display === "flex") {
        targetPanel.style.display = "none";
        if (icon) { icon.classList.remove("fa-chevron-up"); icon.classList.add("fa-chevron-down"); }
    } else {
        targetPanel.style.display = "flex";
        if (icon) { icon.classList.remove("fa-chevron-down"); icon.classList.add("fa-chevron-up"); }
    }
}

function toggleAccordionBox(panelId) {
    let panel = document.getElementById(panelId);
    if (!panel) return;
    let isOpening = (panel.style.display === "none" || panel.style.display === "");
    let semuaKotakWaktu = ['act-box-present', 'act-box-past', 'act-box-future', 'act-box-pfuture','pas-box-present', 'pas-box-past', 'pas-box-future', 'pas-box-pfuture'];
    semuaKotakWaktu.forEach(id => {
        let p = document.getElementById(id); if (p) p.style.display = "none";
    });
    document.querySelectorAll('.mms-sub-laci').forEach(laci => laci.style.display = "none");
    document.querySelectorAll('.mms-rumpun-content .btn-type-choice').forEach(btn => {
        btn.classList.remove('mms-btn-active-laci', 'mms-btn-active-laci-nominal');
    });
    if (isOpening) panel.style.display = "flex";
    else panel.style.display = "none";
}

function toggleSubLaci(idLaci) {
    let el = document.getElementById(idLaci);
    if (!el) return;
    let isOpening = (el.style.display === "none" || el.style.display === "");
    let pemicuKlik = event ? event.currentTarget : null; 
    document.querySelectorAll('.mms-sub-laci').forEach(laci => { if (laci.id !== idLaci) laci.style.display = "none"; });
    document.querySelectorAll('.mms-rumpun-content .btn-type-choice').forEach(btn => { if (btn !== pemicuKlik) btn.classList.remove('mms-btn-active-laci', 'mms-btn-active-laci-nominal'); });
    if (isOpening) {
        el.style.display = "block";
        if (pemicuKlik && pemicuKlik.classList.contains('btn-mms-nominal')) pemicuKlik.classList.add('mms-btn-active-laci-nominal');
        else if (pemicuKlik) pemicuKlik.classList.add('mms-btn-active-laci');
    } else {
        el.style.display = "none";
        if (pemicuKlik) pemicuKlik.classList.remove('mms-btn-active-laci', 'mms-btn-active-laci-nominal');
    }
}

function resetTampilanDashboard() {
    document.getElementById("dashboard-menu").style.display = "block";
    document.getElementById("materi-body").style.display = "none";
    document.getElementById("vocab-body").style.display = "none";
    if (document.getElementById("mms-accordion-konten-dasar")) document.getElementById("mms-accordion-konten-dasar").style.display = "none";
    if (document.getElementById("mms-box-penjelasan-dasar")) document.getElementById("mms-box-penjelasan-dasar").style.display = "none";
    document.querySelectorAll("#mms-grid-sub-tombol .btn-type-choice").forEach(b => b.classList.remove("mms-active-dasar"));
    document.querySelectorAll('.mms-rumpun-card').forEach(card => card.classList.remove('mms-bab-active-card'));
    document.querySelectorAll(".mms-rumpun-content").forEach(p => p.style.display = "none");
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
    let container = document.getElementById("box-daftar-vocab"); if (!container) return; container.innerHTML = "";
    let filtered = dataKamus.filter(item => {
        let kata = (item.kata || item.Kata || "").toLowerCase();
        let arti = (item.arti || item.Arti || "").toLowerCase();
        return kata.includes(filterText) || arti.includes(filterText);
    });
    if(filtered.length === 0) { container.innerHTML = `<div style="text-align:center; padding:20px; color:#94a3b8; font-size:13px;">Kosakata tidak ditemukan...</div>`; return; }
    filtered.forEach(item => {
        let c = item.contoh || item.Contoh || "Belum tersedia contoh kalimat.";
        container.innerHTML += `<div class="vocab-item">
            <div style="font-weight: bold; color: var(--mms-navy); font-size: 14px;"><i class="fa-solid fa-language" style="color:var(--mms-green); margin-right:5px;"></i> ${item.kata || item.Kata}</div>
            <div style="color: #475569; font-size: 13px; margin-top:4px; padding-left:20px;"><b>Arti:</b> ${item.arti || item.Arti}</div>
            <div style="color: #64748b; font-size: 12px; margin-top:5px; padding:6px 10px; background:#fff; border-left:3px solid var(--mms-green); font-style:italic; padding-left:15px;"><b>Contoh:</b> ${c}</div>
        </div>`;
    });
}

function filterKamusUser() { renderKamusKeHalaman(document.getElementById("vocab-search").value.toLowerCase().trim()); }
function kembaliKeDashboard() { resetTampilanDashboard(); }
function tutupModalMateri(e) { let m = document.getElementById("materi-pembahasan-box"); if (m && (!e || e.target.id === "materi-pembahasan-box")) m.style.display = "none"; }

function mmsToggleVideoSaja() {
    let bv = document.getElementById("box-media-materi"); let btn = document.getElementById("mms-btn-buka-video"); if (!bv) return;
    let vid = document.getElementById("mms-media-video-lokal");
    if (bv.style.display === "flex") {
        bv.style.display = "none"; if (vid) vid.pause();
        if (btn) { btn.innerHTML = `<i class="fa-solid fa-circle-play"></i> <span>Ketuk untuk Lihat Penjelasan Video</span>`; btn.style.background = "#eff6ff"; btn.style.color = "var(--mms-accent)"; }
    } else {
        bv.style.display = "flex"; if (vid) { vid.currentTime = 0; vid.play().catch(e => {}); }
        if (btn) { btn.innerHTML = `<i class="fa-solid fa-circle-minus"></i> <span>Ketuk untuk Sembunyikan Video Materi</span>`; btn.style.background = "#f1f5f9"; btn.style.color = "#64748b"; }
    }
}

function toggleRumpunSmart(idBab) {
    let semuaBab = ['mms-bab-1-content', 'mms-bab-2-content', 'mms-bab-3-content', 'mms-bab-4-content'];
    semuaBab.forEach(id => {
        let el = document.getElementById(id); if (!el) return;
        let cardUtama = el.closest('.mms-rumpun-card'); let h = el.previousElementSibling; let icon = h ? h.querySelector('.fa-chevron-down, .fa-chevron-up') : null;
        if (id === idBab) {
            if (el.style.display === "none" || el.style.display === "") {
                el.style.display = "flex"; if (icon) { icon.classList.remove('fa-chevron-down'); icon.classList.add('fa-chevron-up'); }
                if (cardUtama) cardUtama.classList.add('mms-bab-active-card');
            } else {
                el.style.display = "none"; if (icon) { icon.classList.remove('fa-chevron-up'); icon.classList.add('fa-chevron-down'); }
                if (cardUtama) cardUtama.classList.remove('mms-bab-active-card');
            }
        } else {
            el.style.display = "none"; if (icon) { icon.classList.remove('fa-chevron-up'); icon.classList.add('fa-chevron-down'); }
            if (cardUtama) cardUtama.classList.remove('mms-bab-active-card');
        }
    });
}

document.addEventListener('click', function(event) {
    if (event.target.closest('form') || event.target.id === 'user-email' || event.target.closest('#login-panel') || event.target.closest('.mms-rumpun-header') || event.target.closest('.mms-rumpun-content') || event.target.closest('button[onclick^="toggleSubLaci"]') || event.target.closest('.mms-sub-laci') || event.target.closest('#materi-pembahasan-box')) return;
    let semuaBab = ['mms-bab-1-content', 'mms-bab-2-content', 'mms-bab-3-content', 'mms-bab-4-content'];
    semuaBab.forEach(id => {
        let el = document.getElementById(id);
        if (el && el.style.display === "flex") {
            el.style.display = "none"; let cu = el.closest('.mms-rumpun-card'); if (cu) cu.classList.remove('mms-bab-active-card');
            let h = el.previousElementSibling; let ic = h ? h.querySelector('.fa-chevron-up') : null; if (ic) { ic.classList.remove('fa-chevron-up'); ic.classList.add('fa-chevron-down'); }
        }
    });
});

window.addEventListener('DOMContentLoaded', () => { ambilAsetDataWeb(); });
