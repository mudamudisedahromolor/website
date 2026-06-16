// =========================================================================
// /lat-inggris/menu/menuMateri.js - LOGIKA MENU MATERI & NAVIGASI DASHBOARD
// =========================================================================

// Import state global dari main.js agar sinkronisasi data tetap terjaga
import { bankMateri, mmsKotakTerpilihSekarang } from '/lat-inggris/main.js';

// Catatan: Fungsi tampilkanMateriSpesifik nantinya akan di-import dari file materi spesifik.
// Untuk tahap ini, kita satukan sementara pintunya di sini sebelum dipecah ke sub-bab.
import { tampilkanMateriSpesifik, toggleAccordionBox, toggleSubLaci, toggleRumpunSmart, mmsToggleVideoSaja } from '/lat-inggris/menu/menuMateri.js'; 

// 1. LOGIKA DOUBLE-CLICK SELEKSI & ANIMASI MEMBAL DASHBOARD
export function eksekusiKlikDoubleBounce(idKotak, namaMenu) {
    if (window.event) window.event.stopPropagation();

    let gridContainer = document.getElementById("mms-container-grid-icon");
    let wrapperIcon = document.getElementById(`mms-item-box-${idKotak}`);

    // Jika icon yang sama diklik dua kali
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

    // Set selection aktif
    mmsKotakTerpilihSekarang.id = idKotak;
    document.querySelectorAll(".menu-icon-wrapper").forEach(el => el.classList.remove("mms-selected-bounce"));
    
    if (gridContainer) gridContainer.classList.add("has-selection");
    if (wrapperIcon) wrapperIcon.classList.add("mms-selected-bounce");
}

export function resetSeleksiDashboardEksternal(e) {
    if (!e.target.closest('.menu-icon-wrapper')) {
        resetSeleksiDashboardEsensial();
    }
}

export function resetSeleksiDashboardEsensial() {
    mmsKotakTerpilihSekarang.id = null;
    let gridContainer = document.getElementById("mms-container-grid-icon");
    if (gridContainer) gridContainer.classList.remove("has-selection");
    document.querySelectorAll(".menu-icon-wrapper").forEach(el => el.classList.remove("mms-selected-bounce"));
}

// 2. ANIMASI INTERFACES NAVIGASI & WINDOW MANAGEMENT
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

export function kembaliKeDashboard() { 
    resetTampilanDashboard(); 
}

export function tutupModalMateri(e) { 
    let m = document.getElementById("materi-pembahasan-box"); 
    if (m && (!e || e.target.id === "materi-pembahasan-box")) {
        m.style.display = "none";
        let vidLokal = document.getElementById("mms-media-video-lokal");
        if (vidLokal) vidLokal.pause();
    } 
}

// 3. FUNGSI ACCORDION & LACO MANAGEMENT (UNTUK SUBMENU DI DALAM MATERI)
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

// Hubungkan fungsi-fungsi navigasi internal materi ke window agar onclick HTML tetap aman berjalan
window.toggleAccordionBox = toggleAccordionBox;
window.toggleSubLaci = toggleSubLaci;
window.toggleRumpunSmart = toggleRumpunSmart;
window.tutupModalMateri = tutupModalMateri;
window.mmsToggleVideoSaja = mmsToggleVideoSaja;

// KODE PANDUAN ANTARA: Sementara fungsi tampilkanMateriSpesifik ditaruh di sini, 
// langkah berikutnya fungsi ini akan kita pindahkan utuh dan pecah ke folder /materi/
export function tampilkanMateriSpesifik(namaMateriKolomC, subMateriKolomD) {
    // Logika tampilkanMateriSpesifik asli Anda sementara menjembatani tombol bab di HTML...
    // (Akan kita potong dan distribusikan ke file bab1.js s/d bab4.js pada langkah berikutnya)
}
window.tampilkanMateriSpesifik = tampilkanMateriSpesifik;
