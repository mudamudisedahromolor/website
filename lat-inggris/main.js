// =========================================================================
// 1. KONFIGURASI UTAMA, VARIABEL GLOBAL & SINKRONISASI DATA TSV
// =========================================================================
import { state } from './state.js';
import { eksekusiKlikDoubleBounce, resetSeleksiDashboardEksternal } from './menu/menuMateri.js';

const TSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTZdYtu7UisJXOIJIuQm8HzN1j-4aRCBzJ2BqTmRkXvzg42QV4jLVpj0tQkQIZmv5l7BsLl4QtXGJKr/pub?gid=976866681&single=true&output=tsv";

function ambilAsetDataWeb() {
    let cacheBusterUrl = TSV_URL + "&_cb=" + new Date().getTime();

    fetch(cacheBusterUrl)
    .then(r => r.text())
    .then(tsvText => {
        state.bankMateri = parseTSVMateri(tsvText);
        muatVideoPendahuluanOtomatis(); 
    }).catch(err => {
        console.error("Gagal sinkronisasi data TSV:", err);
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
            no: kolom[0] ? kolom[0].trim() : "",                
            judulBab: kolom[1] ? kolom[1].trim() : "",          
            materi: kolom[2] ? kolom[2].trim() : "",            
            subMateri: kolom[3] ? kolom[3].trim() : "",         
            rumus: kolom[4] ? kolom[4].trim() : "",             
            contohKalimat: kolom[5] ? kolom[5].trim() : "",     
            arti: kolom[6] ? kolom[6].trim() : "",              
            visual: kolom[7] ? kolom[7].trim() : "",            
            fungsi: kolom[8] ? kolom[8].trim() : ""             
        });
    }
    return hasil;
}

// =========================================================================
// 3. LOGIKA PAYUNG VIDEO PENDAHULUAN (KOLOM H - BARIS DATA KUSTOM)
// =========================================================================
function muatVideoPendahuluanOtomatis() {
    let containerVideo = document.getElementById("box-media-video-pembuka");
    let txtStatus = document.getElementById("mms-txt-status-video-pembuka");
    
    let dataVideoPencantar = state.bankMateri.find(m => (m.subMateri || "").toLowerCase().trim() === "video-pembuka");
    
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

// Inisialisasi pengikatan global ke window
ambilAsetDataWeb();
window.eksekusiKlikDoubleBounce = eksekusiKlikDoubleBounce;
window.toggleLaciVideoPendahuluan = toggleLaciVideoPendahuluan;
window.resetSeleksiDashboardEksternal = resetSeleksiDashboardEksternal;
