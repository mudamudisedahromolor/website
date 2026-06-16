// =========================================================================
// /lat-inggris/menu/menuMateri.js - LOGIKA EVALUASI SELEKSI TERISOLASI
// =========================================================================

import { bankMateri, mmsKotakTerpilihSekarang } from '/lat-inggris/main.js';
import { prosesMateriNonTenses } from '/lat-inggris/materi/materiNonTenses.js';
import { prosesMateriTenses } from '/lat-inggris/materi/materiTenses.js';

export function eksekusiKlikDoubleBounce(idKotak, namaMenu) {
    if (window.event) window.event.stopPropagation();

    let gridContainer = document.getElementById("mms-container-grid-icon");
    let wrapperIcon = document.getElementById(`mms-item-box-${idKotak}`);

    if (mmsKotakTerpilihSekarang.id === idKotak) {
        if (namaMenu === 'materi') {
            bukaMateriMenu();
        } else {
            document.getElementById("mms-lbl-dev-title").innerText = "Modul " + namaMenu.toUpperCase();
            document.getElementById("mms-modal-dev").style.display = "flex";
        }
        resetSeleksiDashboardEsensial();
        return;
    }

    mmsKotakTerpilihSekarang.id = idKotak;
    document.querySelectorAll(".menu-icon-wrapper").forEach(el => el.classList.remove("mms-selected-bounce"));
    
    if (gridContainer) gridContainer.classList.add("has-selection");
    if (wrapperIcon) wrapperIcon.classList.add("mms-selected-bounce");
}

// SINKRONISASI BARU: Mencegah bentrok dengan klik pada elemen navbar universal di luar kontainer aplikasi
export function resetSeleksiDashboardEksternal(e) {
    const rootAplikasi = document.getElementById("mms-app-root");
    if (rootAplikasi && rootAplikasi.contains(e.target) && !e.target.closest('.menu-icon-wrapper')) {
        resetSeleksiDashboardEsensial();
    }
}

export function resetSeleksiDashboardEsensial() {
    mmsKotakTerpilihSekarang.id = null;
    let gridContainer = document.getElementById("mms-container-grid-icon");
    if (gridContainer) gridContainer.classList.remove("has-selection");
    document.querySelectorAll(".menu-icon-wrapper").forEach(el => el.classList.remove("mms-selected-bounce"));
}

// ... Sisa fungsi navigasi materi (tampilkanMateriSpesifik, toggleAccordionBox, dll) tetap persis seperti Langkah 5 sebelumnya ...
export function tampilkanMateriSpesifik(namaMateriKolomC, subMateriKolomD) {
    if (subMateriKolomD === undefined) subMateriKolomD = namaMateriKolomC;
    let boxVisualMateri = document.getElementById("box-media-materi");
    let boxRumusAktif = document.getElementById("box-txt-rumus-aktif");
    let boxRumusPasif = document.getElementById("box-txt-rumus-pasif");
    let boxPembahasan = document.getElementById("box-txt-pembahasan");
    let btnVideo = document.getElementById("mms-btn-buka-video");
    let elementBoxAktifUtama = document.getElementById("box-txt-rumus-aktif") ? document.getElementById("box-txt-rumus-aktif").closest('.info-box-item') : null;
    let elementBoxPasifUtama = document.getElementById("wrapper-box-pasif");
    let elementBoxTipsUtama = document.getElementById("wrapper-box-tips-pintar");
    let panelTipsTabel = document.getElementById('panel-tips-tabel');
    let idLower = subMateriKolomD.toLowerCase().trim();

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
    let laciCustomLama = document.getElementById("mms-laci-tutup-sembunyi-bab14");
    if (laciCustomLama) laciCustomLama.remove();

    let dataCocok = bankMateri.find(m => (m.materi || "").toLowerCase().trim() === namaMateriKolomC.toLowerCase().trim() && (m.subMateri || "").toLowerCase().trim() === subMateriKolomD.toLowerCase().trim());
    if (!dataCocok) dataCocok = bankMateri.find(m => (m.subMateri || "").toLowerCase().trim() === idLower);

    if (!dataCocok) {
        let judulTense = document.getElementById("lbl-judul-tense-aktif");
        if (judulTense) judulTense.innerHTML = `Modul: <b>${namaMateriKolomC}</b>`;
        if (boxRumusAktif) boxRumusAktif.innerText = "Belum Ada Data";
        if (boxPembahasan) boxPembahasan.innerText = "Data tidak ditemukan. Silakan periksa kembali Kolom D di Google Sheets.";
        document.getElementById("materi-pembahasan-box").style.display = "flex";
        return;
    }

    if (!idLower.startsWith("pasif-") && !idLower.startsWith("aktif-")) {
        prosesMateriNonTenses(namaMateriKolomC, subMateriKolomD, idLower, dataCocok);
    } else {
        prosesMateriTenses(namaMateriKolomC, subMateriKolomD, idLower, dataCocok);
    }
    document.getElementById("materi-pembahasan-box").style.display = "flex";
}

export function toggleAccordionBox(panelId) {
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

export function toggleSubLaci(idLaci) {
    let el = document.getElementById(idLaci); if (!el) return;
    let isOpening = (el.style.display === "none" || el.style.display === "");
    document.querySelectorAll('.mms-sub-laci').forEach(laci => { if (laci.id !== idLaci) laci.style.display = "none"; });
    if (isOpening) el.style.display = "block";
    else el.style.display = "none";
}

export function toggleRumpunSmart(idBab) {
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

export function resetTampilanDashboard() {
    document.getElementById("dashboard-menu").style.display = "block";
    document.getElementById("materi-body").style.display = "none";
    resetSeleksiDashboardEsensial();
}

export function bukaMateriMenu() {
    document.getElementById("dashboard-menu").style.display = "none";
    document.getElementById("materi-body").style.display = "block";
    document.getElementById("materi-pembahasan-box").style.display = "none";
}

export function kembaliKeDashboard() { resetTampilanDashboard(); }
export function tutupModalMateri(e) { 
    let m = document.getElementById("materi-pembahasan-box"); 
    if (m && (!e || e.target.id === "materi-pembahasan-box")) {
        m.style.display = "none";
        let vidLokal = document.getElementById("mms-media-video-lokal");
        if (vidLokal) vidLokal.pause();
    } 
}

export function mmsToggleVideoSaja() {
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

window.toggleAccordionBox = toggleAccordionBox;
window.toggleSubLaci = toggleSubLaci;
window.toggleRumpunSmart = toggleRumpunSmart;
window.tampilkanMateriSpesifik = tampilkanMateriSpesifik;
window.tutupModalMateri = tutupModalMateri;
window.mmsToggleVideoSaja = mmsToggleVideoSaja;
