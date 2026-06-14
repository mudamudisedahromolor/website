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

// ==========================================================
// KONTROL AKORDION BERTINGKAT (AUTO CLOSE KOTAK LAIN)
// ==========================================================

// 1. Fungsi Mengatur Kotak Rumpun Waktu Utama (Present, Past, Future, Past Future)
function toggleAccordionBox(panelId) {
    let panel = document.getElementById(panelId);
    if (!panel) return;
    
    // Cek apakah kotak yang diklik saat ini statusnya sedang menutup/tersembunyi
    let isOpening = (panel.style.display === "none" || panel.style.display === "");

    // 🚀 INI KUNCI PINTARNYA: Cari dan paksa tutup semua kotak rumpun waktu lain terlebih dahulu
    let semuaKotakWaktu = [
        'act-box-present', 'act-box-past', 'act-box-future', 'act-box-pfuture',
        'pas-box-present', 'pas-box-past', 'pas-box-future', 'pas-box-pfuture'
    ];
    
    semuaKotakWaktu.forEach(id => {
        let p = document.getElementById(id);
        if (p) {
            p.style.display = "none"; // Tutup semua kotak
        }
    });

 // 🚀 Sembunyikan semua laci dan cabut semua warna penanda aktif saat kotak waktu berpindah
    document.querySelectorAll('.mms-sub-laci').forEach(laci => laci.style.display = "none");
    document.querySelectorAll('.btn-type-choice').forEach(btn => {
        btn.classList.remove('mms-btn-active-laci', 'mms-btn-active-laci-nominal');
    });

    // Jika kotak yang diklik tadi memang ingin dibuka, silakan jalankan sekarang
    if (isOpening) {
        panel.style.display = "flex";
    }
}

// 2. Fungsi Mengatur Laci Paling Dalam (Tombol Materi Verbal/Nominal)
function toggleSubLaci(idLaci) {
    let el = document.getElementById(idLaci);
    if (!el) return;
    
    let isOpening = (el.style.display === "none" || el.style.display === "");

    // Tutup semua sub-laci kecil lain di rumpun yang sama agar tidak tumpang tindih
    document.querySelectorAll('.mms-sub-laci').forEach(laci => {
        laci.style.display = "none";
    });

    // Buka laci kecil target lurus ke bawah
    if (isOpening) {
        el.style.display = "block";
    }
}

function resetTampilanDashboard() {
    document.getElementById("dashboard-menu").style.display = "block";
    document.getElementById("materi-body").style.display = "none";
    document.getElementById("vocab-body").style.display = "none";
    document.getElementById("quiz-body-wrapper").style.display = "none";
    
    if (document.getElementById("mms-accordion-konten-dasar")) {
        document.getElementById("mms-accordion-konten-dasar").style.display = "none";
    }
    if (document.getElementById("mms-box-penjelasan-dasar")) {
        document.getElementById("mms-box-penjelasan-dasar").style.display = "none";
    }
    document.querySelectorAll("#mms-grid-sub-tombol .btn-type-choice").forEach(b => b.classList.remove("mms-active-dasar"));

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
    document.getElementById("quiz-body-wrapper").style.display = "none";
    document.getElementById("materi-pembahasan-box").style.display = "none";
}

function bukaVocab() {
    document.getElementById("dashboard-menu").style.display = "none";
    document.getElementById("materi-body").style.display = "none";
    document.getElementById("vocab-body").style.display = "block";
    document.getElementById("quiz-body-wrapper").style.display = "none";
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

function bukaQuiz() {
    document.getElementById("dashboard-menu").style.display = "none";
    document.getElementById("materi-body").style.display = "none";
    document.getElementById("vocab-body").style.display = "none";
    document.getElementById("quiz-body-wrapper").style.display = "block";
    tampilkanSoalDinamis();
}

function tampilkanSoalDinamis() {
    jawabanTerpilih = "";
    let quizBody = document.getElementById("quiz-body");
    if (!quizBody) return;

    if (indeksSoal >= bankSoal.length) {
        quizBody.innerHTML = `<div class='question-box' style='color:var(--mms-red); padding:30px 0;'><i class='fa-solid fa-trophy fa-3xl' style='margin-bottom:15px; color:var(--mms-accent)'></i><br>CONGRATULATIONS!<br>Kamu menyelesaikan kuis evaluasi hari ini!</div>`;
        document.getElementById("quiz-progress").style.width = "100%";
        return;
    }

    let pct = (indeksSoal / bankSoal.length) * 100;
    let progressElement = document.getElementById("quiz-progress");
    if (progressElement) progressElement.style.width = pct + "%";

    let s = bankSoal[indeksSoal];
    let lblPertanyaan = document.getElementById("lbl-pertanyaan");
    if (lblPertanyaan) lblPertanyaan.innerText = s.tanya || s.Pertanyaan;
    
    let frame = document.getElementById("box-visual");
    if (frame) {
        let kodeVisual = s.visual || s.Kode_Visual || s.visual_code;
        if(kodeVisual && kodeVisual.startsWith("fa-")) {
            frame.innerHTML = `<i class="fa-solid ${kodeVisual} fa-4x" style="color:var(--mms-accent)"></i>`;
        } else if(kodeVisual) {
            frame.innerHTML = `<img src="${kodeVisual}" alt="visual">`;
        } else {
            frame.innerHTML = `<i class="fa-solid fa-language fa-4x" style="color:#94a3b8"></i>`;
        }
    }

    let grid = document.getElementById("grid-opsi");
    if (grid) {
        grid.innerHTML = "";
        let arrayOpsi = s.opsi || [s.Opsi_A, s.Opsi_B, s.Opsi_C, s.Opsi_D];
        arrayOpsi.forEach(o => {
            if(o) {
                grid.innerHTML += `
                    <div class="img-option-card" onclick="pilihOpsiCard(this, '${o}')">
                        <div class="img-box"><i class="fa-solid fa-cube fa-xl"></i></div>
                        <div class="img-label">${o}</div>
                    </div>`;
            }
        });
    }
}

function pilihOpsiCard(el, teks) {
    document.querySelectorAll(".img-option-card").forEach(c => c.classList.remove("selected"));
    el.classList.add("selected");
    jawabanTerpilih = teks;
}

function periksaJawabanUser() {
    if(!jawabanTerpilih) return alert("Pilih salah satu opsi jawaban terlebih dahulu!");
    let s = bankSoal[indeksSoal];
    let jawabanBenar = s.benar || s.Jawaban_Benar;
    
    if (jawabanTerpilih === jawabanBenar) {
        alert("🎉 Excellent! Jawabanmu Benar (+10 XP)");
        indeksSoal++;
        kirimPoinKeServer(10);
    } else {
        nyawa--;
        let heartsElement = document.getElementById("lbl-hearts");
        if (heartsElement) heartsElement.innerText = nyawa;
        
        let hb = document.getElementById("header-bar");
        if (hb) {
            hb.className = "duo-header shake-effect";
            setTimeout(() => hb.className = "duo-header", 400);
        }
        
        alert(`❌ Oops! Kurang tepat. Jawaban benar: ${jawabanBenar}`);
        if(nyawa <= 0) {
            alert("⚔️ Game Over! Nyawa habis.");
            location.reload();
            return;
        }
        indeksSoal++;
        tampilkanSoalDinamis();
    }
}

function kirimPoinKeServer(poin) {
    if (userSession) {
        userSession.xp += poin;
        let xpElement = document.getElementById("lbl-xp");
        if (xpElement) xpElement.innerText = userSession.xp;
    }
    tampilkanSoalDinamis();
    
    if (userSession) {
        fetch(API_URL, {
            method: "POST",
            body: JSON.stringify({ aksi: "updateXP", email: userSession.email, tambahanXP: poin })
        }).then(() => muatLeaderboard());
    }
}

function muatLeaderboard() {
    fetch(`${API_URL}?aksi=getLeaderboard`)
    .then(r => r.json()).then(data => {
        let box = document.getElementById("list-leaderboard");
        if (!box) return;
        box.innerHTML = "";
        
        if(!data || !Array.isArray(data) || data.length === 0) {
            box.innerHTML = `<div style="text-align:center; padding:15px; color:#94a3b8; font-size:14px;">Belum ada data skor kompetisi.</div>`;
            return;
        }

        data.slice(0, 10).forEach((u, i) => {
            let medal = i === 0 ? "🥇" : (i === 1 ? "🥈" : (i === 2 ? "🥉" : `<span style='color:#64748b;'>#${i+1}</span>`));
            box.innerHTML += `
                <div class="rank-item" style="${i===0 ? 'border-color:var(--mms-red); background:#fff5f5;' : ''}">
                    <div class="rank-left">
                        <span>${medal}</span>
                        <span style="color:#334155;">${u.nama}</span>
                    </div>
                    <span style="color:var(--mms-red); font-size:14px;">${u.xp} XP</span>
                </div>`;
        });
    }).catch(e => {
        console.error("Gagal memuat leaderboard:", e);
        let box = document.getElementById("list-leaderboard");
        if(box) box.innerHTML = `<div style="text-align:center; padding:15px; color:var(--mms-red); font-size:14px;">Gagal memuat data kompetisi server.</div>`;
    });
}

function kembaliKeDashboard() {
    resetTampilanDashboard();
}

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

    let dataCocok = bankMateri.find(m => {
        let namaDiSheet = (m.namaMateri || "").toLowerCase().trim();
        let tipeDiSheet = (m.tipeRumus || "").toLowerCase().trim();
        return namaDiSheet.includes(namaTense.toLowerCase().trim()) && tipeDiSheet === tipeRumusGabungan.toLowerCase().trim();
    });

    if (!dataCocok) {
        if(boxRumusAktif) boxRumusAktif.innerText = "Belum Ada Data";
        if(boxRumusPasif) boxRumusPasif.innerText = "Belum Ada Data";
        if(boxPembahasan) boxPembahasan.innerText = "Silakan isi baris materi ini di Google Sheets.";
        if(boxVisualMateri) boxVisualMateri.innerHTML = `<i class="fa-solid fa-photo-film fa-2xl" style="color:#94a3b8"></i>`;
        document.getElementById("materi-pembahasan-box").style.display = "flex";
        return;
    }

    if(boxSilabus) boxSilabus.innerText = dataCocok.modals || "Tidak ada kata kunci khusus.";

    let teksRumusGabungan = dataCocok.rumus || "";
    let rumusAktif = "Tidak ada rumus aktif.";
    let rumusPasif = "No Passive Form (Nominal/Dasar)."; 

    if (teksRumusGabungan.includes("[Pasif]") || teksRumusGabungan.includes("Pasif")) {
        let pemisah = teksRumusGabungan.includes("[Pasif]") ? "[Pasif]" : "Pasif";
        let bagianRumus = teksRumusGabungan.split(pemisah);
        rumusAktif = bagianRumus[0].replace("[Aktif]", "").replace("Aktif", "").trim();
        rumusPasif = bagianRumus[1].trim();
        if(document.getElementById("wrapper-box-pasif")) document.getElementById("wrapper-box-pasif").style.display = "block"; 
    } else {
        rumusAktif = teksRumusGabungan.replace("[Aktif]", "").replace("Aktif", "").trim();
        if(document.getElementById("wrapper-box-pasif")) document.getElementById("wrapper-box-pasif").style.display = "none"; 
    }
    if(boxRumusAktif) boxRumusAktif.innerText = rumusAktif;
    if(boxRumusPasif) boxRumusPasif.innerText = rumusPasif;

    let kolomF = dataCocok.pembahasan || ""; 
    let kolomG = dataCocok.arti || "";       

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
            <div style="font-style: italic; font-weight: 600; color: var(--mms-navy); margin-bottom: 5px;"><i class="fa-solid fa-quote-left" style="font-size:10px; opacity:0.5; margin-right:4px;"></i>${inggrisAktif}</div>
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

    if(boxPembahasan) boxPembahasan.innerText = `Pola karakter rumpun waktu ${namaTense} digunakan untuk mengekspresikan struktur tata bahasa sesuai dengan fungsi gramatikal yang berlaku.`;

    if(boxVisualMateri) {
        let visual = dataCocok.visual || "";
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
    if (!e) {
        document.getElementById("materi-pembahasan-box").style.display = "none";
        return;
    }
    if (e.target.id === "materi-pembahasan-box") {
        document.getElementById("materi-pembahasan-box").style.display = "none";
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

// 3. Fungsi Buka-Tutup Akordion Utama Bab (Bab 1 - 4)
function toggleRumpunSmart(idBab) {
    let semuaBab = ['mms-bab-1-content', 'mms-bab-2-content', 'mms-bab-3-content', 'mms-bab-4-content'];
    
    semuaBab.forEach(id => {
        let el = document.getElementById(id);
        if (!el) return;
        
        let header = el.previousElementSibling; 
        let icon = header ? header.querySelector('.fa-chevron-down, .fa-chevron-up') : null;

        if (id === idBab) {
            if (el.style.display === "none" || el.style.display === "") {
                el.style.display = "flex";
                if (icon) { icon.classList.remove('fa-chevron-down'); icon.classList.add('fa-chevron-up'); }
            } else {
                el.style.display = "none";
                if (icon) { icon.classList.remove('fa-chevron-up'); icon.classList.add('fa-chevron-down'); }
            }
        } else {
            el.style.display = "none";
            if (icon) { icon.classList.remove('fa-chevron-up'); icon.classList.add('fa-chevron-down'); }
        }
    });
}

// 4. Fungsi Kontrol Buka-Tutup Sub-Laci Kategori Vertikal (1 Kolom)
// Fungsi Mengatur Laci Paling Dalam (Tombol Kategori 1 Kolom Vertikal)
function toggleSubLaci(idLaci) {
    let el = document.getElementById(idLaci);
    if (!el) return;
    
    let isOpening = (el.style.display === "none" || el.style.display === "");
    let pemicuKlik = event.currentTarget; // Menangkap tombol yang sedang diklik user

    // 🚀 1. Bersihkan status aktif dan tutup semua laci lain terlebih dahulu
    document.querySelectorAll('.mms-sub-laci').forEach(laci => {
        laci.style.display = "none";
    });
    document.querySelectorAll('.btn-type-choice').forEach(btn => {
        btn.classList.remove('mms-btn-active-laci', 'mms-btn-active-laci-nominal');
    });

    // 🚀 2. Jika statusnya membuka, aktifkan laci dan beri warna penanda pada tombolnya
    if (isOpening) {
        el.style.display = "block";
        
        // Cek apakah tombol yang diklik adalah tipe nominal atau verbal murni
        if (pemicuKlik.classList.contains('btn-mms-nominal')) {
            pemicuKlik.classList.add('mms-btn-active-laci-nominal');
        } else {
            pemicuKlik.classList.add('mms-btn-active-laci');
        }
    }
}

// 5. PENYATUAN GLOBAL EVENT LISTENER: Aman, Cerdas, Bebas Blokir Login
document.addEventListener('click', function(event) {
    // PENGAMAN ABSOLUT: Jika user beraktivitas di form login/input email, matikan fungsi tutup luar!
    if (event.target.closest('form') || event.target.id === 'user-email' || event.target.closest('#login-panel')) {
        return; 
    }

    // Jika yang diklik area pemicu bab utama atau sub-laci, jangan ditutup otomatis
    if (event.target.closest('.mms-rumpun-header') || event.target.closest('.mms-rumpun-content') || event.target.closest('button[onclick^="toggleSubLaci"]') || event.target.closest('.mms-sub-laci')) {
        return;
    }
    
    // Klik di area kosong luar: Tutup Akordion Bab Utama
    let semuaBab = ['mms-bab-1-content', 'mms-bab-2-content', 'mms-bab-3-content', 'mms-bab-4-content'];
    semuaBab.forEach(id => {
        let el = document.getElementById(id);
        if (el && el.style.display === "flex") {
            el.style.display = "none";
            let header = el.previousElementSibling;
            let icon = header ? header.querySelector('.fa-chevron-up') : null;
            if (icon) { icon.classList.remove('fa-chevron-up'); icon.classList.add('fa-chevron-down'); }
        }
    });

    // Klik di area kosong luar: Tutup Laci-laci Kecil Vertikal
    document.querySelectorAll('.mms-sub-laci').forEach(laci => {
        laci.style.display = "none";
    });
});
