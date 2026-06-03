/* ==========================================================================
   NAMA ORGANISASI : MUDA MUDI SEDAHROMO LOR 05
   BERKAS UTAMA    : SCRIPT.JS (LOGIKA INTERAKTIF & DATABASE REAL-TIME)
   ========================================================================== */

const namaBulanIndo = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "December"];

/* ==========================================================================
   1. SISTEM INISIALISASI UTAMA
   ========================================================================== */
document.addEventListener("DOMContentLoaded", function() {
    initNavigasiMobile();
    initCarouselOrganisasi();
    initHeroSlider(); 
    
    if (document.getElementById('data-tabel-keuangan')) loadKeuanganDariDrive();
    if (document.getElementById('data-tabel-rapat')) loadRapatDariDrive();
    if (document.getElementById('data-tabel-dokumentasi')) loadDokumentasiDariDrive();
    if (document.getElementById('data-tabel-anggota')) loadAnggotaDariDrive(); 
    if (document.getElementById('data-tabel-lomba')) ambilDataGoogleSheets(); 
    if (document.getElementById('data-tabel-proposal')) ambilDataProposalGoogleSheets(); 
    if (document.getElementById('data-tabel-surat')) ambilDataSuratGoogleSheets(); 
    if (document.getElementById('data-tabel-lpj')) ambilDataLpj(); 
});

/* ==========================================================================
   2. SISTEM NAVIGASI & MENU DROPDOWN MOBILE (HP)
   ========================================================================== */
function initNavigasiMobile() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const navBar = document.querySelector('.main-navbar');
    
    if (menuBtn && navBar) {
        menuBtn.addEventListener('click', function(e) {
            e.preventDefault();
            navBar.classList.toggle('aktif'); 
        });
    }

    const btnBulanan = document.getElementById('btn-bulanan');
    const menuRapat = document.getElementById('menu-rapat');
    const btnTahunan = document.getElementById('btn-tahunan');
    const menu17an = document.getElementById('menu-17an');

    if (btnBulanan && menuRapat) {
        btnBulanan.addEventListener('click', function(e) {
            e.preventDefault(); e.stopPropagation();
            if (menu17an) menu17an.classList.remove('buka'); 
            menuRapat.classList.toggle('buka');
        });
    }

    if (btnTahunan && menu17an) {
        btnTahunan.addEventListener('click', function(e) {
            e.preventDefault(); e.stopPropagation();
            if (menuRapat) menuRapat.classList.remove('buka'); 
            menu17an.classList.toggle('buka');
        });
    }
}

/* ==========================================================================
   3. SISTEM CAROUSEL & SLIDER GAMBAR
   ========================================================================== */
function initCarouselOrganisasi() {
    if (document.querySelector('.mySwiper') && typeof Swiper !== 'undefined') {
        new Swiper(".mySwiper", {
            slidesPerView: 1, 
            spaceBetween: 15,
            centeredSlides: true, 
            loop: true,
            initialSlide: 2, 
            observer: true,
            observeParents: true,
            breakpoints: { 768: { slidesPerView: 3, spaceBetween: 30 } }
        });
    }
}

const kegiatanData = [
    {
        gambar: "images/foto-tirakatan.jpg", 
        judul: "Malam Tirakatan 17 Agustus 2025",
        deskripsi: "Kegiatan rutin tahunan untuk memperingati Hari Kemerdekaan Indonesia. Warga berkumpul di madrasah dinniyah untuk doa bersama, refleksi perjuangan para pahlawan bangsa."
    },
    {
        gambar: "images/foto-lomba.jpg",
        judul: "Lomba Agustusan Tahun 2025",
        deskripsi: "Salah satu lomba anak yaitu pindah air dengan sendok untuk memperingati hari ulang tahun kemerdekaan Indonesia yang ke-80 Tahun."
    },
    {
        gambar: "images/momen-kebersamaan.jpg",
        judul: "Momen Kebersamaan di Evaluasi Kegiatan",
        deskripsi: "Momen indah di mana seluruh anggota organisasi berkumpul untuk mengevaluasi kegiatan dalam memperingati HUT-RI yang ke 80 tahun."
    }
];

let slideIndex = 1, slideTimer;

function initHeroSlider() {
    const sliderContainer = document.getElementById('slider-container');
    const dotsContainer = document.getElementById('dots-container');
    
    if (!sliderContainer || !dotsContainer) return;

    let slidesHTML = "", dotsHTML = "";
    kegiatanData.forEach((item, index) => {
        slidesHTML += `
            <div class="slide ${index === 0 ? 'aktif' : ''}">
                <img src="${item.gambar}" alt="${item.judul}" class="slide-img">
                <div class="slide-content">
                    <h3>${item.judul}</h3><p>${item.deskripsi}</p>
                </div>
            </div>`;
        dotsHTML += `<span class="dot ${index === 0 ? 'aktif' : ''}" onclick="currentSlide(${index + 1})"></span>`;
    });
    
    sliderContainer.innerHTML = slidesHTML;
    dotsContainer.innerHTML = dotsHTML;

    showSlides(slideIndex);
    autoSlide();
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (slides.length === 0) return;
    if (n > slides.length) slideIndex = 1;    
    if (n < 1) slideIndex = slides.length;
    Array.from(slides).forEach(s => s.classList.remove("aktif"));
    Array.from(dots).forEach(d => d.classList.remove("aktif"));
    slides[slideIndex-1].classList.add("aktif");  
    dots[slideIndex-1].classList.add("aktif");
}

function autoSlide() {
    slideTimer = setInterval(() => { slideIndex++; showSlides(slideIndex); }, 5000);
}

window.currentSlide = function(n) { 
    showSlides(slideIndex = n); 
    clearInterval(slideTimer);
    autoSlide();
}

/* ==========================================================================
   4. SISTEM TRANSPARANSI KAS KEUANGAN (GOOGLE SHEETS TSV)
   ========================================================================== */
const linkTsvKeuangan = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTqiCluDyXYQijRAElBYLeYPzrT7ENOPtbaxnoHfyZXFFMMxnO1pnZuOAKJaaVgSvFs6eKacEAd4w5I/pub?gid=1216205715&single=true&output=tsv";
let dataKeuanganGlobal = [];
let dataTersaringGlobal = [];
let halamanKeuanganSaatIni = 1; 
const barisKeuanganPerHalaman = 7;

function parseTanggalKeObjek(strTanggal) {
    if (!strTanggal) return new Date(0);
    const bagian = strTanggal.split("/");
    if (bagian.length !== 3) return new Date(0);
    return new Date(parseInt(bagian[2], 10), parseInt(bagian[1], 10) - 1, parseInt(bagian[0], 10));
}

function bersihkanNominal(teksNominal) {
    if (!teksNominal) return 0;
    let bersih = teksNominal.toString().replace(/Rp/gi, "").replace(/\s/g, "");
    bersih = bersih.replace(/[\.\,]/g, "");
    return parseInt(bersih, 10) || 0;
}

async function loadKeuanganDariDrive() {
    try {
        const response = await fetch(`${linkTsvKeuangan}&cache=${new Date().getTime()}`);
        const teksData = await response.text();
        const baris = teksData.split(/\r?\n/);
        
        dataKeuanganGlobal = [];
        let daftarTahun = new Set(), daftarBulan = new Set();

        for (let i = 1; i < baris.length; i++) {
            const barisBersih = baris[i].trim();
            if (!barisBersih) continue; 
            const kolom = barisBersih.split("\t");
            if (kolom.length < 4) continue; 

            let tglRaw = kolom[0] ? kolom[0].trim() : "";       
            let ketTransaksi = kolom[1] ? kolom[1].trim() : ""; 
            let linkNotaRaw = kolom[5] ? kolom[5].trim() : "";  
            if (!tglRaw || tglRaw === "Tanggal" || ketTransaksi.toUpperCase() === "TOTAL") continue; 

            let nilaiC = kolom[2] ? bersihkanNominal(kolom[2]) : 0; 
            let nilaiD = kolom[3] ? bersihkanNominal(kolom[3]) : 0; 
            let statusTipe = "";
            let nominalFix = 0;

            if (nilaiC > 0 && nilaiD === 0) { statusTipe = "masuk"; nominalFix = nilaiC; }
            else if (nilaiD > 0 && nilaiC === 0) { statusTipe = "keluar"; nominalFix = nilaiD; }
            else continue;

            let tglSplit = tglRaw.split("/");
            let thn = tglSplit[2] ? tglSplit[2].trim() : "2026";
            let bln = namaBulanIndo[parseInt(tglSplit[1], 10) - 1] || "Semua";

            daftarTahun.add(thn);
            daftarBulan.add(bln);

            dataKeuanganGlobal.push({ tanggal: tglRaw, bulan: bln, tahun: thn, keterangan: ketTransaksi, tipe: statusTipe, jumlah: nominalFix.toString(), linkNota: linkNotaRaw });
        }

        dataKeuanganGlobal.sort((a, b) => parseTanggalKeObjek(b.tanggal) - parseTanggalKeObjek(a.tanggal));
        isiDropdown('filter-tahun', Array.from(daftarTahun).sort().reverse());
        isiDropdown('filter-bulan', Array.from(daftarBulan).sort((a,b) => namaBulanIndo.indexOf(a) - namaBulanIndo.indexOf(b)));
        terapkanFilter();
    } catch (e) {
        console.error("Gagal memuat data keuangan", e);
    }
}

window.terapkanFilter = function() {
    const thnInput = document.getElementById('filter-tahun');
    const blnInput = document.getElementById('filter-bulan');
    const katInput = document.getElementById('filter-kategori');
    const cariInput = document.getElementById('input-cari');
    if(!thnInput || !blnInput || !katInput || !cariInput) return;

    const thn = thnInput.value;
    const bln = blnInput.value;
    const kat = katInput.value;
    const cari = cariInput.value.toLowerCase();

    dataTersaringGlobal = dataKeuanganGlobal.filter(item => {
        return (thn === "Semua" || item.tahun === thn) && (bln === "Semua" || item.bulan === bln) && (kat === "Semua" || item.tipe === kat) && (item.keterangan.toLowerCase().includes(cari) || item.tanggal.toLowerCase().includes(cari));
    });

    let m = 0, k = 0;
    let dataUntukKartu = thn === "Semua" ? dataKeuanganGlobal : dataKeuanganGlobal.filter(item => item.tahun === thn);
    dataUntukKartu.forEach(i => { let n = parseInt(i.jumlah) || 0; i.tipe === 'masuk' ? m += n : k += n; });

    document.getElementById('total-masuk').innerText = formatRupiah(m);
    document.getElementById('total-keluar').innerText = formatRupiah(k);
    document.getElementById('saldo-akhir').innerText = formatRupiah(m - k);

    halamanKeuanganSaatIni = 1; 
    renderTabel();
}

function renderTabel() {
    const tbody = document.getElementById('data-tabel-keuangan'); if (!tbody) return;
    if (dataTersaringGlobal.length === 0) {
        tbody.innerHTML = `<tr><td colspan="4" style="text-align:center; padding:20px; color:#666;">Data transaksi tidak ditemukan.</td></tr>`;
        return;
    }
    const start = (halamanKeuanganSaatIni - 1) * barisKeuanganPerHalaman;
    const pageData = dataTersaringGlobal.slice(start, start + barisKeuanganPerHalaman);
    let html = pageData.map(i => `
        <tr>
            <td>${i.tanggal}</td>
            <td>${i.keterangan}${i.linkNota && i.linkNota !== "-" && i.linkNota.trim() !== "" ? `<br><a href="${i.linkNota}" target="_blank" style="color:#E53935; font-size:10px; font-weight:bold; text-decoration:underline;">[Lihat Nota]</a>` : ""}</td>
            <td style="font-weight:bold;">${i.tipe === 'masuk' ? '<span style="color:#2e7d32;"><i class="fa-solid fa-arrow-down"></i> Pemasukan</span>' : '<span style="color:#E53935;"><i class="fa-solid fa-arrow-up"></i> Pengeluaran</span>'}</td>
            <td><strong>${formatRupiah(parseInt(i.jumlah) || 0)}</strong></td>
        </tr>`).join('');

    const totalHal = Math.ceil(dataTersaringGlobal.length / barisKeuanganPerHalaman);
    if (totalHal > 1) {
        let tombolNav = "";
        const styleBtn = "padding:8px 16px; background:#D32F2F; color:white; border:none; border-radius:4px; cursor:pointer; font-weight:bold; font-size:12px;";
        if (halamanKeuanganSaatIni === 1) tombolNav = `<div style="text-align:right;"><button onclick="nav(1)" style="${styleBtn}">Halaman Selanjutnya <i class="fa-solid fa-chevron-right"></i></button></div>`;
        else if (halamanKeuanganSaatIni === totalHal) tombolNav = `<div style="text-align:left;"><button onclick="nav(-1)" style="${styleBtn}"><i class="fa-solid fa-chevron-left"></i> Halaman Sebelumnya</button></div>`;
        else tombolNav = `<div style="display:flex; justify-content:space-between;"><button onclick="nav(-1)" style="${styleBtn}"><i class="fa-solid fa-chevron-left"></i> Halaman Sebelumnya</button><button onclick="nav(1)" style="${styleBtn}">Halaman Selanjutnya <i class="fa-solid fa-chevron-right"></i></button></div>`;
        html += `<tr><td colspan="4" style="padding:15px; background:#f9f9f9; border-top:1px solid #eee;">${tombolNav}</td></tr>`;
    }
    tbody.innerHTML = html;
}
window.nav = (dir) => { halamanKeuanganSaatIni += dir; renderTabel(); };

/* ==========================================================================
   5. SISTEM NOTULEN & HASIL MUSYAWARAH RAPAT BULANAN
   ========================================================================== */
const linkTsvRapat = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRq9to0l-2kWwtGcTvwY70z_Ga8NAVmI-C_k4LYoDgTxGhqPY954gdkuRGmqRYe3wP-zSd6M9cUz-qC/pub?gid=1613608992&single=true&output=tsv";
let dataRapatGlobal = []; let dataRapatTersaring = []; let halRapatSaatIni = 1; const barisRapatPerHal = 5; 

async function loadRapatDariDrive() {
    try {
        const response = await fetch(`${linkTsvRapat}&cache=${new Date().getTime()}`);
        const teksData = await response.text();
        dataRapatGlobal = [];
        let daftarTahunRapat = new Set(), daftarBulanRapat = new Set(), baris = [], barisSaatIni = [], diDalamKutip = false, penampungTeks = "";

        for (let i = 0; i < teksData.length; i++) {
            let char = teksData[i], nextChar = teksData[i + 1];
            if (char === '"') diDalamKutip = !diDalamKutip; 
            else if (char === '\t' && !diDalamKutip) { barisSaatIni.push(penampungTeks.trim()); penampungTeks = ""; }
            else if ((char === '\n' || char === '\r') && !diDalamKutip) {
                if (char === '\r' && nextChar === '\n') i++; 
                barisSaatIni.push(penampungTeks.trim());
                if (barisSaatIni.length > 0) baris.push(barisSaatIni);
                barisSaatIni = []; penampungTeks = "";
            } else penampungTeks += char;
        }
        if (penampungTeks) { barisSaatIni.push(penampungTeks.trim()); baris.push(barisSaatIni); }

        for (let i = 1; i < baris.length; i++) {
            let kolom = baris[i]; if (kolom.length < 5) continue;
            let tglRaw = kolom[1] || "", agendaRaw = kolom[2] || "-", hasilRaw = kolom[3] || "-", lokasiRaw = kolom[4] || "-";
            let hasilFormatBaris = hasilRaw.replace(/\r\n/g, '<br>').replace(/\n/g, '<br>').replace(/\r/g, '<br>');
            let tglSplit = tglRaw.split("/");
            let thn = tglSplit[2] || "2026"; if(thn.length > 4) thn = thn.substring(0,4); 
            let bln = namaBulanIndo[parseInt(tglSplit[1], 10) - 1] || "Semua";

            if(thn && thn !== "") daftarTahunRapat.add(thn);
            if(bln && bln !== "Semua") daftarBulanRapat.add(bln);
            dataRapatGlobal.push({ tanggal: tglRaw, bulan: bln, tahun: thn, agenda: agendaRaw, hasil: hasilFormatBaris, lokasi: lokasiRaw });
        }
        isiDropdown('filter-rapat-tahun', Array.from(daftarTahunRapat).sort().reverse());
        isiDropdown('filter-rapat-bulan', Array.from(daftarBulanRapat).sort((a,b) => namaBulanIndo.indexOf(a) - namaBulanIndo.indexOf(b)));
        terapkanFilterRapat();
    } catch (e) { console.error(e); }
}

window.terapkanFilterRapat = function() {
    const thn = document.getElementById('filter-rapat-tahun').value;
    const bln = document.getElementById('filter-rapat-bulan').value;
    const cari = document.getElementById('input-cari-rapat').value.toLowerCase();
    dataRapatTersaring = dataRapatGlobal.filter(item => {
        return (thn === "Semua" || item.tahun === thn) && (bln === "Semua" || item.bulan === bln) && (item.agenda.toLowerCase().includes(cari) || item.hasil.toLowerCase().includes(cari) || item.lokasi.toLowerCase().includes(cari));
    });
    halRapatSaatIni = 1; renderTabelRapat();
}

function renderTabelRapat() {
    const tbody = document.getElementById('data-tabel-rapat'); if (!tbody) return;
    if (dataRapatTersaring.length === 0) { tbody.innerHTML = `<tr><td colspan="4" style="text-align:center; padding:20px; color:#666;">Tidak ada arsip hasil rapat yang cocok.</td></tr>`; return; }
    const start = (halRapatSaatIni - 1) * barisRapatPerHal, pageData = dataRapatTersaring.slice(start, start + barisRapatPerHal);
    let html = pageData.map(i => `
        <tr>
            <td style="font-weight: 500; color: #333; vertical-align: top;"><i class="fa-regular fa-calendar-days" style="color:#E53935; margin-right:5px;"></i> ${i.tanggal}</td>
            <td style="font-weight: bold; color: #E53935; vertical-align: top;">${i.agenda}</td>
            <td style="vertical-align: top; padding-right:20px;"><div style="line-height: 1.6; text-align: left; color: #333; display: block; white-space: normal;">${i.hasil}</div></td>
            <td style="vertical-align: top;"><i class="fa-solid fa-location-dot" style="color: #666; margin-right:4px;"></i> ${i.lokasi}</td>
        </tr>`).join('');

    const totalHal = Math.ceil(dataRapatTersaring.length / barisRapatPerHal);
    if (totalHal > 1) {
        let tombolNav = ""; const styleBtn = "padding:8px 16px; background:#D32F2F; color:white; border:none; border-radius:4px; cursor:pointer; font-weight:bold;";
        if (halRapatSaatIni === 1) tombolNav = `<div style="text-align:right;"><button onclick="navRapat(1)" style="${styleBtn}">Halaman Selanjutnya <i class="fa-solid fa-chevron-right"></i></button></div>`;
        else if (halRapatSaatIni === totalHal) tombolNav = `<div style="text-align:left;"><button onclick="navRapat(-1)" style="${styleBtn}"><i class="fa-solid fa-chevron-left"></i> Halaman Sebelumnya</button></div>`;
        else tombolNav = `<div style="display:flex; justify-content:space-between;"><button onclick="navRapat(-1)" style="${styleBtn}"><i class="fa-solid fa-chevron-left"></i> Halaman Sebelumnya</button><button onclick="navRapat(1)" style="${styleBtn}">Halaman Selanjutnya <i class="fa-solid fa-chevron-right"></i></button></div>`;
        html += `<tr><td colspan="4" style="padding:15px; background:#f9f9f9;">${tombolNav}</td></tr>`;
    }
    tbody.innerHTML = html;
}
window.navRapat = (dir) => { halRapatSaatIni += dir; renderTabelRapat(); };

/* ==========================================================================
   6. SISTEM DOKUMENTASI & GALERI KEGIATAN
   ========================================================================== */
const linkTsvDokumentasi = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSGNBxjdguHX3DyMAm4824Cw9Nv6t83MDuqojSZUcwftKAKyuC2jRLtPGId7FdK7w1asPeEVVtdSqqN/pub?gid=600804245&single=true&output=tsv";
let dataDokumentasiGlobal = []; let dataDokumentasiTersaring = []; let halDokSaatIni = 1; const barisDokPerHal = 5; 

async function loadDokumentasiDariDrive() {
    try {
        const response = await fetch(`${linkTsvDokumentasi}&cache=${new Date().getTime()}`);
        const teksData = await response.text(); const baris = teksData.split("\n");
        dataDokumentasiGlobal = []; let daftarTahunDok = new Set(), daftarBulanDok = new Set();

        for (let i = 1; i < baris.length; i++) {
            const barisBersih = baris[i].trim(); if (!barisBersih) continue;
            const kolom = barisBersih.split("\t"); if (kolom.length < 5) continue; 
            let tglRaw = kolom[1] ? kolom[1].trim() : "", agendaRaw = kolom[2] ? kolom[2].trim() : "-", kegiatanRaw = kolom[3] ? kolom[3].trim() : "-", subjekRaw = kolom[4] ? kolom[4].trim() : "-", linkFotoAsli = kolom[5] ? kolom[5].trim() : ""; 
            if (!tglRaw) continue;
            let tglSplit = tglRaw.split("/");
            let thn = tglSplit[2] ? tglSplit[2].trim() : "2026"; if(thn.length > 4) thn = thn.substring(0,4);
            let bln = namaBulanIndo[parseInt(tglSplit[1], 10) - 1] || "Semua";
            if(thn && thn.trim() !== "") daftarTahunDok.add(thn);
            if(bln && bln !== "Semua") daftarBulanDok.add(bln);
            dataDokumentasiGlobal.push({ tanggal: tglRaw, bulan: bln, tahun: thn, agenda: agendaRaw, kegiatan: kegiatanRaw, subjek: subjekRaw, linkAsli: linkFotoAsli });
        }
        dataDokumentasiGlobal.sort((itemA, itemB) => { let splitA = itemA.tanggal.split("/"), splitB = itemB.tanggal.split("/"); return new Date(splitB[2], splitB[1]-1, splitB[0]) - new Date(splitA[2], splitA[1]-1, splitA[0]); });
        isiDropdown('filter-dok-tahun', Array.from(daftarTahunDok).sort().reverse());
        isiDropdown('filter-dok-bulan', Array.from(daftarBulanDok).sort((a,b) => namaBulanIndo.indexOf(a) - namaBulanIndo.indexOf(b)));
        terapkanFilterDokumentasi();
    } catch (e) { console.error(e); }
}

window.terapkanFilterDokumentasi = function() {
    const thn = document.getElementById('filter-dok-tahun').value;
    const bln = document.getElementById('filter-dok-bulan').value;
    const cari = document.getElementById('input-cari-dok').value.toLowerCase();
    dataDokumentasiTersaring = dataDokumentasiGlobal.filter(item => {
        return (thn === "Semua" || item.tahun === thn) && (bln === "Semua" || item.bulan === bln) && (item.agenda.toLowerCase().includes(cari) || item.kegiatan.toLowerCase().includes(cari) || item.subjek.toLowerCase().includes(cari));
    });
    halDokSaatIni = 1; renderTabelDokumentasi();
}

function renderTabelDokumentasi() {
    const tbody = document.getElementById('data-tabel-dokumentasi'); if (!tbody) return;
    if (dataDokumentasiTersaring.length === 0) { tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; padding:30px; color:#666;">Tidak ditemukan rekaman kegiatan yang cocok.</td></tr>`; return; }
    const start = (halDokSaatIni - 1) * barisDokPerHal, pageData = dataDokumentasiTersaring.slice(start, start + barisDokPerHal);

    let html = pageData.map(i => {
        let kolomMedia = "";
        if (i.linkAsli) {
            let daftarLink = i.linkAsli.split(",").map(link => link.trim()); kolomMedia = `<div style="display: flex; flex-direction: column; gap: 14px; align-items: center;">`;
            daftarLink.forEach((linkSingle, index) => {
                if (!linkSingle) return; let renderUrl = linkSingle, isImg = false;
                if (linkSingle.includes("id=")) { let idFile = linkSingle.split("id=")[1].split("&")[0]; renderUrl = `https://drive.google.com/thumbnail?id=${idFile}&sz=w800`; isImg = true; }
                else if (linkSingle.includes("/d/")) { let idFile = linkSingle.split("/d/")[1].split("/")[0]; renderUrl = `https://drive.google.com/thumbnail?id=${idFile}&sz=w800`; isImg = true; }
                if (isImg) kolomMedia += `<div style="text-align:center;"><a href="${linkSingle}" target="_blank"><img src="${renderUrl}" alt="${i.agenda}" style="max-width:260px; max-height:200px; object-fit:contain; border-radius:6px;"></a><br><a href="${linkSingle}" target="_blank" style="font-size:11px; color:#E53935; font-weight:600;">Foto ${index + 1} (Penuh)</a></div>`;
                else kolomMedia += `<a href="${linkSingle}" target="_blank" style="padding:6px 12px; background:#f5f5f5; border:1px solid #ccc; font-size:11px; font-weight:bold;"><i class="fa-solid fa-paperclip" style="color:#E53935;"></i> Berkas ${index + 1}</a>`;
            });
            kolomMedia += `</div>`;
        } else kolomMedia = `<div style="text-align:center; color:#999; font-style:italic; font-size:12px;">Tidak ada file</div>`;

        return `<tr><td>${i.tanggal}</td><td>${kolomMedia}</td><td style="font-weight:bold; color:#E53935;">${i.agenda}</td><td style="font-weight:600; color:#555;">${i.subjek}</td><td style="line-height:1.6; text-align:justify;">${i.kegiatan}</td></tr>`;
    }).join('');

    const totalHal = Math.ceil(dataDokumentasiTersaring.length / barisDokPerHal);
    if (totalHal > 1) {
        let tombolNav = ""; const styleBtn = "padding:8px 16px; background:#D32F2F; color:white; border:none; border-radius:4px; cursor:pointer; font-weight:bold;";
        if (halDokSaatIni === 1) tombolNav = `<div style="text-align:right;"><button onclick="navDok(1)" style="${styleBtn}">Halaman Selanjutnya <i class="fa-solid fa-chevron-right"></i></button></div>`;
        else if (halDokSaatIni === totalHal) tombolNav = `<div style="text-align:left;"><button onclick="navDok(-1)" style="${styleBtn}"><i class="fa-solid fa-chevron-left"></i> Halaman Sebelumnya</button></div>`;
        else tombolNav = `<div style="display:flex; justify-content:space-between;"><button onclick="navDok(-1)" style="${styleBtn}"><i class="fa-solid fa-chevron-left"></i> Halaman Sebelumnya</button><button onclick="navDok(1)" style="${styleBtn}">Halaman Selanjutnya <i class="fa-solid fa-chevron-right"></i></button></div>`;
        html += `<tr><td colspan="5" style="padding:15px; background:#f9f9f9;">${tombolNav}</td></tr>`;
    }
    tbody.innerHTML = html;
}
window.navDok = (dir) => { halDokSaatIni += dir; renderTabelDokumentasi(); };

/* ==========================================================================
   8. DATABASE ANGGOTA, UMUR JUJUR & FOTO POPUP
   ========================================================================== */
const linkTsvAnggota = "https://docs.google.com/spreadsheets/d/e/2PACX-1vR45-ysPdK4uVibwJQbXKvaGGA2zlX3m2GnAS2392fiSDwENSz9ABffImneI-u4ZGmErvHbdM5RJoDi/pub?gid=992968433&single=true&output=tsv";
let dataAnggotaGlobal = []; let dataAnggotaTersaring = []; let halAnggotaSaatIni = 1; const barisAnggotaPerHal = 7; 

async function loadAnggotaDariDrive() {
    try {
        const response = await fetch(`${linkTsvAnggota}&cache=${new Date().getTime()}`);
        const teksData = await response.text(); const baris = teksData.split("\n");
        dataAnggotaGlobal = [];
        for (let i = 1; i < baris.length; i++) {
            const barisBersih = baris[i].trim(); if (!barisBersih) continue;
            const kolom = barisBersih.split("\t");
            let nama = kolom[2] ? kolom[2].trim() : "-", nim = kolom[4] ? kolom[4].trim() : "-", tglLahirRaw = kolom[6] ? kolom[6].trim() : "", linkFotoRaw = kolom[13] ? kolom[13].trim() : ""; 
            let usiaTeks = "-", tahunLahirInt = 0;
            let matchTahun = tglLahirRaw.match(/\b(19\d{2}|20\d{2})\b/);
            if (matchTahun) tahunLahirInt = parseInt(matchTahun[0], 10);

            if (tahunLahirInt > 0) {
                let tglInggris = tglLahirRaw.toLowerCase().replace('mei', 'may').replace('agu', 'aug').replace('okt', 'oct').replace('des', 'dec');
                let tglLahirObj = new Date(tglInggris), hariIni = new Date(), umur = hariIni.getFullYear() - tahunLahirInt;
                if (!isNaN(tglLahirObj.getTime())) {
                    let bulanSelisih = hariIni.getMonth() - tglLahirObj.getMonth();
                    if (bulanSelisih < 0 || (bulanSelisih === 0 && hariIni.getDate() < tglLahirObj.getDate())) umur--; 
                }
                usiaTeks = umur + " Tahun";
            }
            if (tahunLahirInt > 0) dataAnggotaGlobal.push({ nim: nim, nama: nama, tahunLahirInt: tahunLahirInt, usia: usiaTeks, foto: linkFotoRaw });
        }
        terapkanFilterAnggota();
    } catch (e) { console.error(e); }
}

window.terapkanFilterAnggota = function() {
    const cariInput = document.getElementById('input-cari-anggota'); if(!cariInput) return;
    const cari = cariInput.value.toLowerCase();
    dataAnggotaTersaring = dataAnggotaGlobal.filter(item => item.nama.toLowerCase().includes(cari) || item.nim.toLowerCase().includes(cari));
    halAnggotaSaatIni = 1; renderTabelAnggota();
}

function renderTabelAnggota() {
    const tbody = document.getElementById('data-tabel-anggota'); if (!tbody) return;
    if (dataAnggotaTersaring.length === 0) { tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; padding:30px; color:#666;">Data anggota tidak ditemukan.</td></tr>`; return; }
    const start = (halAnggotaSaatIni - 1) * barisAnggotaPerHal, dataPerHalaman = dataAnggotaTersaring.slice(start, start + barisAnggotaPerHal);
    
    let html = dataPerHalaman.map(i => {
        let linkDefaultAvatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(i.nama)}&background=E53935&color=fff&size=150&bold=true`, urlFotoTampil = linkDefaultAvatar; 
        if (i.foto && i.foto !== "-" && i.foto !== "") {
            let idFile = ""; if (i.foto.includes("id=")) idFile = i.foto.split("id=")[1].split("&")[0]; else if (i.foto.includes("/d/")) idFile = i.foto.split("/d/")[1].split("/")[0];
            if (idFile !== "") urlFotoTampil = `https://drive.google.com/thumbnail?id=${idFile}&sz=w800`; else if (i.foto.startsWith("http")) urlFotoTampil = i.foto;
        }
        return `<tr style="height: 90px; vertical-align: middle;"><td>${i.nim}</td><td><img src="${urlFotoTampil}" style="width:75px; height:75px; object-fit:cover; border-radius:50%; border:3px solid #E53935;" onclick="window.bukaFotoFull('${urlFotoTampil}');"></td><td style="text-align:left; padding-left:20px;"><i class="fa-solid fa-user" style="color:#E53935; margin-right:8px;"></i> ${i.nama}</td><td>${i.usia}</td><td>Gen Z</td></tr>`;
    }).join('');

    const totalHal = Math.ceil(dataAnggotaTersaring.length / barisAnggotaPerHal);
    if (totalHal > 1) {
        let tombolNav = ""; const styleBtn = "padding:8px 16px; background:#D32F2F; color:white; border:none; border-radius:4px; cursor:pointer;";
        if (halAnggotaSaatIni === 1) tombolNav = `<div style="text-align:right;"><button onclick="window.navAnggota(1)" style="${styleBtn}">Selanjutnya ></button></div>`;
        else if (halAnggotaSaatIni === totalHal) tombolNav = `<div style="text-align:left;"><button onclick="window.navAnggota(-1)" style="${styleBtn}">< Sebelumnya</button></div>`;
        else tombolNav = `<div style="display:flex; justify-content:space-between;"><button onclick="window.navAnggota(-1)" style="${styleBtn}">< Sebelumnya</button><button onclick="window.navAnggota(1)" style="${styleBtn}">Selanjutnya ></button></div>`;
        html += `<tr><td colspan="5" style="padding:12px; background:#f9f9f9;">${tombolNav}</td></tr>`;
    }
    tbody.innerHTML = html;
}
window.navAnggota = (dir) => { halAnggotaSaatIni += dir; renderTabelAnggota(); };

window.bukaFotoFull = function(url) {
    const modal = document.getElementById('modal-foto-full'); const imgModal = document.getElementById('img-modal-tampil');
    if(modal && imgModal) { imgModal.src = url; modal.style.display = 'flex'; }
}
window.tutupFoto = function() { const modal = document.getElementById('modal-foto-full'); if(modal) modal.style.display = 'none'; }

/* ==========================================================================
   9. LOGIKA PWA & UTILLITAS UMUM
   ========================================================================== */
function isiDropdown(id, dataArray) { const el = document.getElementById(id); if (!el) return; el.innerHTML = el.options[0].outerHTML; dataArray.forEach(item => { let opt = document.createElement("option"); opt.value = item; opt.text = item; el.appendChild(opt); }); }
function formatRupiah(angka) { return 'Rp ' + Math.abs(angka).toLocaleString('id-ID'); }
window.closeModal = function() { const modal = document.getElementById('modalOverlay'); if (modal) modal.classList.remove('active'); };
window.tutupPopupInstal = function() { const popup = document.getElementById('pwa-install-popup'); if (popup) popup.style.display = 'none'; };

/* ==========================================================================
   11. ENGINE LIVE CHAT REAL-TIME
   ========================================================================== */
const URL_ENGINE_CHAT_MMS = "https://script.google.com/macros/s/AKfycbwVCoU1UZByMqIcQP3_wxI-fNk_q4PWh4zg3eOykC0KKbvRJhr-F7zK_Z2CKEMm0IgZZw/exec"; 
let loopPenyegarObrolan = null;
window.toggleKotakChatMMS = function() {
    const kotakChat = document.getElementById("mms-chat-box"); if (!kotakChat) return;
    if (kotakChat.style.display === "none" || kotakChat.style.display === "") {
        kotakChat.style.display = "flex"; ambilRiwayatChatMMS(); loopPenyegarObrolan = setInterval(ambilRiwayatChatMMS, 3000); 
    } else { kotakChat.style.display = "none"; clearInterval(loopPenyegarObrolan); }
};

async function ambilRiwayatChatMMS() {
    const wadahTubuhChat = document.getElementById("chat-box-body"); if (!wadahTubuhChat) return;
    try {
        const respon = await fetch(`${URL_ENGINE_CHAT_MMS}?aksi=ambil_chat`), arrayChat = await respon.json();
        if (arrayChat.length === 0) { wadahTubuhChat.innerHTML = `<div style="text-align:center; color:#7f8c8d; font-size:12px; margin-top:60px;">Belum ada obrolan hari ini.</div>`; return; }
        const posisiScrollSudahDiBawah = wadahTubuhChat.scrollHeight - wadahTubuhChat.clientHeight <= wadahTubuhChat.scrollTop + 70;
        wadahTubuhChat.innerHTML = arrayChat.map(item => `<div class="chat-bubble"><span class="chat-sender-name">${item.nama}</span><span class="chat-text">${item.pesan}</span><span class="chat-timestamp">${item.waktu}</span></div>`).join('');
        if (posisiScrollSudahDiBawah) wadahTubuhChat.scrollTop = wadahTubuhChat.scrollHeight;
    } catch (err) { console.error(err); }
}

window.kirimPesanChatMMS = async function() {
    const inputNama = document.getElementById("chat-input-nama"), inputPesan = document.getElementById("chat-input-pesan");
    if (!inputNama || !inputPesan) return; const stringNama = inputNama.value.trim(), stringPesan = inputPesan.value.trim();
    if (!stringNama) { alert("Ketikan nama panggilanmu dulu, Bro!"); inputNama.focus(); return; } if (!stringPesan) return;
    inputPesan.value = "Mengirim..."; inputPesan.disabled = true;
    try { await fetch(`${URL_ENGINE_CHAT_MMS}?aksi=kirimChat&nama=${encodeURIComponent(stringNama)}&pesan=${encodeURIComponent(stringPesan)}`, { method: "POST" }); inputPesan.value = ""; inputPesan.disabled = false; ambilRiwayatChatMMS(); inputPesan.focus(); }
    catch (error) { alert("Koneksi gagal!"); inputPesan.disabled = false; }
};
window.deteksiEnterChatMMS = function(event) { if (event.key === "Enter") window.kirimPesanChatMMS(); };

/* ==========================================================================
   12. FUNGSI GLOBAL PEMBANTU: ENCODER EMBED GOOGLE DRIVE
   ========================================================================== */
function konversiUrlDriveUntukEmbed(urlLama) {
    if (urlLama && urlLama.includes('drive.google.com')) {
        let idFile = '';
        if (urlLama.includes('/d/')) idFile = urlLama.split('/d/')[1].split('/')[0];
        else if (urlLama.includes('id=')) idFile = urlLama.split('id=')[1].split('&')[0];
        if (idFile) return `https://drive.google.com/file/d/${idFile}/preview`;
    }
    return urlLama; 
}

/* ==========================================================================
   13. MODUL ARSIP DATA LOMBA REAL-TIME (DUPLIKASI PERSIS KAS KEUANGAN)
   ========================================================================== */
const SPREADSHEET_ID_LOMBA = '1oMdAVAlvfCH_KAmyT6y3PKteXFg5G9-X7al81rlvQtM';
const SHEET_NAME_LOMBA = 'Form Responses 1'; 
let semuaDataLomba = [], dataLombaTersaring = []; const BARIS_LOMBA_PER_HALAMAN = 5; let halamanLombaSaatIni = 1; 

function ambilDataGoogleSheets() {
    const url = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID_LOMBA}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(SHEET_NAME_LOMBA)}`;
    fetch(url).then(res => res.text()).then(data => {
        const jsonPembersih = JSON.parse(data.substr(47).slice(0, -2)), barisData = jsonPembersih.table.rows;
        semuaDataLomba = []; const setTahun = new Set();
        for (let i = 1; i < barisData.length; i++) {
            const baris = barisData[i];
            if (baris && baris.c && baris.c[2]) {
                const tgl = String(baris.c[1] ? baris.c[1].f || baris.c[1].v : '-').trim();
                let thn = tgl.split('/')[2] || 'Umum';
                semuaDataLomba.push({ tanggal: tgl, tahun: thn, nama: String(baris.c[2].v), kategori: baris.c[3] ? String(baris.c[3].v) : 'Umum', urlDrive: baris.c[4] ? String(baris.c[4].v) : '' });
                if (thn !== 'Umum' && !isNaN(thn)) setTahun.add(thn);
            }
        }
        semuaDataLomba.reverse(); dataLombaTersaring = [...semuaDataLomba];
        const sel = document.getElementById('filter-lomba-tahun');
        if (sel) { sel.innerHTML = '<option value="Semua">Semua Tahun</option>'; Array.from(setTahun).sort().reverse().forEach(th => { let opt = document.createElement('option'); opt.value = th; opt.textContent = th; sel.appendChild(opt); }); }
        halamanLombaSaatIni = 1; tampilkanDataLombaKeTabel();
    }).catch(err => console.error(err));
}

function tampilkanDataLombaKeTabel() {
    const tbody = document.getElementById('data-tabel-lomba'); if (!tbody) return;
    if (dataLombaTersaring.length === 0) { tbody.innerHTML = `<tr><td colspan="4" style="text-align:center; padding:20px; color:#666;">Data transaksi tidak ditemukan.</td></tr>`; return; }
    
    const start = (halamanLombaSaatIni - 1) * BARIS_LOMBA_PER_HALAMAN;
    const pageData = dataLombaTersaring.slice(start, start + BARIS_LOMBA_PER_HALAMAN);
    
    let html = pageData.map(i => {
        let warnaBadge = i.kategori.toLowerCase().includes('anak') ? '#388E3C' : (i.kategori.toLowerCase().includes('remaja') ? '#F57C00' : '#0288D1');
        let btn = i.urlDrive ? `<button class="btn-cetak-mutasi" onclick="bukaPdfViewer('${i.urlDrive}')" style="height: 34px; padding: 0 12px; font-size: 12px;"><i class="fa-solid fa-eye"></i> Lihat PDF</button>` : `<i>Tidak tersedia</i>`;
        return `<tr><td>${i.tanggal}</td><td><strong>${i.nama}</strong></td><td><span style="background-color:${warnaBadge}; color:white; padding:5px 12px; border-radius:20px; font-size:11px; font-weight:bold;">${i.kategori}</span></td><td style="text-align:center;">${btn}</td></tr>`;
    }).join('');

    const totalHal = Math.ceil(dataLombaTersaring.length / BARIS_LOMBA_PER_HALAMAN);
    if (totalHal > 1) {
        let tombolNav = ""; const styleBtn = "padding:8px 16px; background:#E53935; color:white; border:none; border-radius:4px; cursor:pointer; font-weight:bold; font-size:12px;";
        if (halamanLombaSaatIni === 1) tombolNav = `<div style="text-align:right;"><button onclick="window.navLombaManual(1)" style="${styleBtn}">Halaman Selanjutnya <i class="fa-solid fa-chevron-right"></i></button></div>`;
        else if (halamanLombaSaatIni === totalHal) tombolNav = `<div style="text-align:left;"><button onclick="window.navLombaManual(-1)" style="${styleBtn}"><i class="fa-solid fa-chevron-left"></i> Halaman Sebelumnya</button></div>`;
        else tombolNav = `<div style="display:flex; justify-content:space-between;"><button onclick="window.navLombaManual(-1)" style="${styleBtn}"><i class="fa-solid fa-chevron-left"></i> Halaman Sebelumnya</button><button onclick="window.navLombaManual(1)" style="${styleBtn}">Halaman Selanjutnya <i class="fa-solid fa-chevron-right"></i></button></div>`;
        html += `<tr><td colspan="4" style="padding:15px; background:#f9f9f9; border-top:1px solid #eee;">${tombolNav}</td></tr>`;
    }
    tbody.innerHTML = html;
}
window.navLombaManual = (dir) => { halamanLombaSaatIni += dir; tampilkanDataLombaKeTabel(); };


/* ==========================================================================
   14. MODUL KHUSUS: ARSIP DATA PROPOSAL REAL-TIME (DUPLIKASI PERSIS KAS KEUANGAN)
   ========================================================================== */
const SPREADSHEET_ID_PROPOSAL = '1_kuBIdFvRYvtHvBFP7CtKqgONewIIU3A0XElDuc2cNA'; const SHEET_NAME_PROPOSAL = 'Form Responses 1'; 
let semuaDataProposal = [], dataProposalTersaring = []; const BARIS_PROPOSAL_PER_HALAMAN = 5; let halamanProposalSaatIni = 1; 

function ambilDataProposalGoogleSheets() {
    const url = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID_PROPOSAL}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(SHEET_NAME_PROPOSAL)}`;
    fetch(url).then(res => res.text()).then(data => {
        const jsonPembersih = JSON.parse(data.substr(47).slice(0, -2)), barisData = jsonPembersih.table.rows;
        semuaDataProposal = []; const setTahun = new Set();
        for (let i = 1; i < barisData.length; i++) {
            const baris = barisData[i];
            if (baris && baris.c && baris.c[2]) {
                const tgl = String(baris.c[1] ? baris.c[1].f || baris.c[1].v : '-').trim();
                let thn = tgl.split('/')[2] ? tgl.split('/')[2].substring(0,4) : 'Umum';
                semuaDataProposal.push({ tanggal: tgl, tahun: thn, nama: String(baris.c[2].v), kategori: baris.c[3] ? String(baris.c[3].v) : 'Umum', urlDrive: baris.c[4] ? String(baris.c[4].v) : '' });
                if (thn !== 'Umum' && !isNaN(thn)) setTahun.add(thn);
            }
        }
        semuaDataProposal.reverse(); dataProposalTersaring = [...semuaDataProposal];
        const sel = document.getElementById('filter-proposal-tahun');
        if (sel) { sel.innerHTML = '<option value="Semua">Semua Tahun</option>'; Array.from(setTahun).sort().reverse().forEach(th => { let opt = document.createElement('option'); opt.value = th; opt.textContent = th; sel.appendChild(opt); }); }
        halamanProposalSaatIni = 1; tampilkanDataProposalKeTabel();
    }).catch(err => console.error(err));
}

function tampilkanDataProposalKeTabel() {
    const tbody = document.getElementById('data-tabel-proposal'); if (!tbody) return;
    if (dataProposalTersaring.length === 0) { tbody.innerHTML = `<tr><td colspan="4" style="text-align:center; padding:20px; color:#666;">Data transaksi tidak ditemukan.</td></tr>`; return; }
    
    const start = (halamanProposalSaatIni - 1) * BARIS_PROPOSAL_PER_HALAMAN;
    const pageData = dataProposalTersaring.slice(start, start + BARIS_PROPOSAL_PER_HALAMAN);
    
    let html = pageData.map(i => {
        let warnaBadge = i.kategori.toLowerCase().includes('bantuan') ? '#388E3C' : '#F57C00';
        let btn = i.urlDrive ? `<button class="btn-cetak-mutasi" onclick="window.bukaProposalViewer('${i.urlDrive}')" style="height: 34px; padding: 0 12px; font-size: 12px;"><i class="fa-solid fa-eye"></i> Lihat PDF</button>` : `<i>Tidak tersedia</i>`;
        return `<tr><td>${i.tanggal}</td><td><strong>${i.nama}</strong></td><td><span style="background-color:${warnaBadge}; color:white; padding:5px 12px; border-radius:20px; font-size:11px; font-weight:bold;">${i.kategori}</span></td><td style="text-align:center;">${btn}</td></tr>`;
    }).join('');

    const totalHal = Math.ceil(dataProposalTersaring.length / BARIS_PROPOSAL_PER_HALAMAN);
    if (totalHal > 1) {
        let tombolNav = ""; const styleBtn = "padding:8px 16px; background:#E53935; color:white; border:none; border-radius:4px; cursor:pointer; font-weight:bold; font-size:12px;";
        if (halamanProposalSaatIni === 1) tombolNav = `<div style="text-align:right;"><button onclick="window.navProposalManual(1)" style="${styleBtn}">Halaman Selanjutnya <i class="fa-solid fa-chevron-right"></i></button></div>`;
        else if (halamanProposalSaatIni === totalHal) tombolNav = `<div style="text-align:left;"><button onclick="window.navProposalManual(-1)" style="${styleBtn}"><i class="fa-solid fa-chevron-left"></i> Halaman Sebelumnya</button></div>`;
        else tombolNav = `<div style="display:flex; justify-content:space-between;"><button onclick="window.navProposalManual(-1)" style="${styleBtn}"><i class="fa-solid fa-chevron-left"></i> Halaman Sebelumnya</button><button onclick="window.navProposalManual(1)" style="${styleBtn}">Halaman Selanjutnya <i class="fa-solid fa-chevron-right"></i></button></div>`;
        html += `<tr><td colspan="4" style="padding:15px; background:#f9f9f9; border-top:1px solid #eee;">${tombolNav}</td></tr>`;
    }
    tbody.innerHTML = html;
}
window.navProposalManual = (dir) => { halamanProposalSaatIni += dir; tampilkanDataProposalKeTabel(); };


/* ==========================================================================
   15. MODUL KHUSUS: ARSIP DATA AGENDA SURAT REAL-TIME (DUPLIKASI PERSIS KAS KEUANGAN)
   ========================================================================== */
const SPREADSHEET_ID_SURAT = '1ILm2T8ed5oJ85cU2YzTiDHnHlGgtMjVoKYmhSxFF2PQ'; const SHEET_NAME_SURAT = 'Form Responses 1'; 
let semuaDataSurat = [], dataSuratTersaring = []; const BARIS_SURAT_PER_HALAMAN = 5; let halamanSuratSaatIni = 1; 

function ambilDataSuratGoogleSheets() {
    const url = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID_SURAT}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(SHEET_NAME_SURAT)}`;
    fetch(url).then(res => res.text()).then(data => {
        const jsonPembersih = JSON.parse(data.substr(47).slice(0, -2)), barisData = jsonPembersih.table.rows;
        semuaDataSurat = []; const setTahun = new Set();
        for (let i = 1; i < barisData.length; i++) {
            const baris = barisData[i];
            if (baris && baris.c && baris.c[2]) {
                const tgl = String(baris.c[1] ? baris.c[1].f || baris.c[1].v : '-').trim();
                let thn = tgl.split('/')[2] || 'Umum';
                semuaDataSurat.push({ tanggal: tgl, tahun: thn, nama: String(baris.c[2].v), kategori: baris.c[3] ? String(baris.c[3].v) : 'Umum', urlDrive: baris.c[4] ? String(baris.c[4].v) : '' });
                if (thn !== 'Umum' && !isNaN(thn)) setTahun.add(thn);
            }
        }
        semuaDataSurat.reverse(); dataSuratTersaring = [...semuaDataSurat];
        const sel = document.getElementById('filter-surat-tahun');
        if (sel) { sel.innerHTML = '<option value="Semua">Semua Tahun</option>'; Array.from(setTahun).sort().reverse().forEach(th => { let opt = document.createElement('option'); opt.value = th; opt.textContent = th; sel.appendChild(opt); }); }
        halamanSuratSaatIni = 1; tampilkanDataSuratKeTabel();
    }).catch(err => console.error(err));
}

function tampilkanDataSuratKeTabel() {
    const tbody = document.getElementById('data-tabel-surat'); if (!tbody) return;
    if (dataSuratTersaring.length === 0) { tbody.innerHTML = `<tr><td colspan="4" style="text-align:center; padding:20px; color:#666;">Data transaksi tidak ditemukan.</td></tr>`; return; }
    
    const start = (halamanSuratSaatIni - 1) * BARIS_SURAT_PER_HALAMAN;
    const pageData = dataSuratTersaring.slice(start, start + BARIS_SURAT_PER_HALAMAN);

    let html = pageData.map(i => {
        let warnaBadge = (i.kategori.toLowerCase().includes('masuk') || i.kategori.toLowerCase().includes('in')) ? '#388E3C' : '#D32F2F';
        let btn = i.urlDrive ? `<button class="btn-cetak-mutasi" onclick="window.bukaSuratViewer('${i.urlDrive}')" style="height: 34px; padding: 0 12px; font-size: 12px;"><i class="fa-solid fa-eye"></i> Lihat PDF</button>` : `<i>Tidak tersedia</i>`;
        return `<tr><td>${i.tanggal}</td><td><strong>${i.nama}</strong></td><td><span style="background-color:${warnaBadge}; color:white; padding:5px 12px; border-radius:20px; font-size:11px; font-weight:bold;">${i.kategori}</span></td><td style="text-align:center;">${btn}</td></tr>`;
    }).join('');

    const totalHal = Math.ceil(dataSuratTersaring.length / BARIS_SURAT_PER_HALAMAN);
    if (totalHal > 1) {
        let tombolNav = ""; const styleBtn = "padding:8px 16px; background:#E53935; color:white; border:none; border-radius:4px; cursor:pointer; font-weight:bold; font-size:12px;";
        if (halamanSuratSaatIni === 1) tombolNav = `<div style="text-align:right;"><button onclick="window.navSuratManual(1)" style="${styleBtn}">Halaman Selanjutnya <i class="fa-solid fa-chevron-right"></i></button></div>`;
        else if (halamanSuratSaatIni === totalHal) tombolNav = `<div style="text-align:left;"><button onclick="window.navSuratManual(-1)" style="${styleBtn}"><i class="fa-solid fa-chevron-left"></i> Halaman Sebelumnya</button></div>`;
        else tombolNav = `<div style="display:flex; justify-content:space-between;"><button onclick="window.navSuratManual(-1)" style="${styleBtn}"><i class="fa-solid fa-chevron-left"></i> Halaman Sebelumnya</button><button onclick="window.navSuratManual(1)" style="${styleBtn}">Halaman Selanjutnya <i class="fa-solid fa-chevron-right"></i></button></div>`;
        html += `<tr><td colspan="4" style="padding:15px; background:#f9f9f9; border-top:1px solid #eee;">${tombolNav}</td></tr>`;
    }
    tbody.innerHTML = html;
}
window.navSuratManual = (dir) => { halamanSuratSaatIni += dir; tampilkanDataSuratKeTabel(); };


/* ==========================================================================
   16. MODUL KHUSUS: ARSIP DATA LPJ REAL-TIME (DUPLIKASI PERSIS KAS KEUANGAN / SURAT)
   ========================================================================== */
const SPREADSHEET_ID_LPJ = '1e/2PACX-1vRCcy-y43aT5NF5OoB_dGBnQPS13egQCamJiF4adN9VwNKQnEMSo_eQIQD7re5eV6j4c3yTzmfgAaTV'; 
const SHEET_NAME_LPJ = '292952199'; // Menggunakan GID/Sheet Name yang sesuai dari publish URL Anda
let semuaDataLpj = [], dataLpjTersaring = []; 
const BARIS_LPJ_PER_HALAMAN = 5; 
let halamanLpjSaatIni = 1; 

function ambilDataLpjGoogleSheets() {
    // Menggunakan URL gviz/tq untuk pembacaan JSON real-time, jika menggunakan link publikasi tsv, sesuaikan URL-nya.
    // Di bawah ini diset menggunakan format gviz tq agar pembacaan JSON persis dengan Modul 15:
    const url = `https://docs.google.com/spreadsheets/d/1e/2PACX-1vRCcy-y43aT5NF5OoB_dGBnQPS13egQCamJiF4adN9VwNKQnEMSo_eQIQD7re5eV6j4c3yTzmfgAaTV/gviz/tq?tqx=out:json&gid=${SHEET_NAME_LPJ}`;
    
    fetch(url).then(res => res.text()).then(data => {
        const jsonPembersih = JSON.parse(data.substr(47).slice(0, -2)), barisData = jsonPembersih.table.rows;
        semuaDataLpj = []; const setTahun = new Set();
        
        for (let i = 1; i < barisData.length; i++) {
            const baris = barisData[i];
            if (baris && baris.c && baris.c[2]) {
                const tgl = String(baris.c[1] ? baris.c[1].f || baris.c[1].v : '-').trim();
                let thn = tgl.split('/')[2] || 'Umum';
                
                semuaDataLpj.push({ 
                    tanggal: tgl, 
                    tahun: thn, 
                    nama: String(baris.c[2].v), 
                    kategori: baris.c[3] ? String(baris.c[3].v) : 'Umum', 
                    urlDrive: baris.c[4] ? String(baris.c[4].v) : '' 
                });
                if (thn !== 'Umum' && !isNaN(thn)) setTahun.add(thn);
            }
        }
        semuaDataLpj.reverse(); 
        dataLpjTersaring = [...semuaDataLpj];
        
        // Mengisi pilihan filter tahun di HTML
        const sel = document.getElementById('filter-lpj-tahun');
        if (sel) { 
            sel.innerHTML = '<option value="Semua">Semua Tahun</option>'; 
            Array.from(setTahun).sort().reverse().forEach(th => { 
                let opt = document.createElement('option'); 
                opt.value = th; 
                opt.textContent = th; 
                sel.appendChild(opt); 
            }); 
        }
        halamanLpjSaatIni = 1; 
        tampilkanDataLpjKeTabel();
    }).catch(err => {
        console.error(err);
        const tbody = document.getElementById('data-tabel-lpj');
        if (tbody) tbody.innerHTML = `<tr><td colspan="4" style="text-align:center; padding:20px; color:#666;">Gagal memuat data dari Google Sheets.</td></tr>`;
    });
}

function terapkanFilterLpj() {
    const filterTahun = document.getElementById('filter-lpj-tahun') ? document.getElementById('filter-lpj-tahun').value : 'Semua';
    const cariKata = document.getElementById('input-cari-lpj') ? document.getElementById('input-cari-lpj').value.toLowerCase() : '';

    dataLpjTersaring = semuaDataLpj.filter(i => {
        const cocokTahun = (filterTahun === 'Semua' || i.tahun === filterTahun);
        const cocokKata = (i.nama.toLowerCase().includes(cariKata) || i.kategori.toLowerCase().includes(cariKata));
        return cocokTahun && cocokKata;
    });

    halamanLpjSaatIni = 1;
    tampilkanDataLpjKeTabel();
}

function tampilkanDataLpjKeTabel() {
    const tbody = document.getElementById('data-tabel-lpj'); if (!tbody) return;
    if (dataLpjTersaring.length === 0) { tbody.innerHTML = `<tr><td colspan="4" style="text-align:center; padding:20px; color:#666;">Data dokumen LPJ tidak ditemukan.</td></tr>`; itungHalamanLpj(0); return; }
    
    const start = (halamanLpjSaatIni - 1) * BARIS_LPJ_PER_HALAMAN;
    const pageData = dataLpjTersaring.slice(start, start + BARIS_LPJ_PER_HALAMAN);

    let html = pageData.map(i => {
        // Logika warna badge kategori (Kepanitiaan vs Rutin/Lainnya)
        let warnaBadge = (i.kategori.toLowerCase().includes('panitia')) ? '#F57C00' : '#0288D1';
        let btn = i.urlDrive ? `<button class="btn-cetak-mutasi" onclick="window.bukaLpjViewer('${i.urlDrive}')" style="height: 34px; padding: 0 12px; font-size: 12px;"><i class="fa-solid fa-eye"></i> Lihat PDF</button>` : `<i>Tidak tersedia</i>`;
        return `<tr><td>${i.tanggal}</td><td><strong>${i.nama}</strong></td><td><span style="background-color:${warnaBadge}; color:white; padding:5px 12px; border-radius:20px; font-size:11px; font-weight:bold;">${i.kategori}</span></td><td style="text-align:center;">${btn}</td></tr>`;
    }).join('');

    const totalHal = Math.ceil(dataLpjTersaring.length / BARIS_LPJ_PER_HALAMAN);
    itungHalamanLpj(totalHal);

    if (totalHal > 1) {
        let tombolNav = ""; const styleBtn = "padding:8px 16px; background:#E53935; color:white; border:none; border-radius:4px; cursor:pointer; font-weight:bold; font-size:12px;";
        if (halamanLpjSaatIni === 1) tombolNav = `<div style="text-align:right;"><button onclick="window.navLpjManual(1)" style="${styleBtn}">Halaman Selanjutnya <i class="fa-solid fa-chevron-right"></i></button></div>`;
        else if (halamanLpjSaatIni === totalHal) tombolNav = `<div style="text-align:left;"><button onclick="window.navLpjManual(-1)" style="${styleBtn}"><i class="fa-solid fa-chevron-left"></i> Halaman Sebelumnya</button></div>`;
        else tombolNav = `<div style="display:flex; justify-content:space-between;"><button onclick="window.navLpjManual(-1)" style="${styleBtn}"><i class="fa-solid fa-chevron-left"></i> Halaman Sebelumnya</button><button onclick="window.navLpjManual(1)" style="${styleBtn}">Halaman Selanjutnya <i class="fa-solid fa-chevron-right"></i></button></div>`;
        html += `<tr><td colspan="4" style="padding:15px; background:#f9f9f9; border-top:1px solid #eee;">${tombolNav}</td></tr>`;
    }
    tbody.innerHTML = html;
}

function itungHalamanLpj(totalHal) {
    const infoHal = document.getElementById('info-halaman-lpj');
    if (infoHal) {
        infoHal.textContent = `Halaman ${totalHal === 0 ? 0 : halamanLpjSaatIni} dari ${totalHal}`;
    }
}

window.navLpjManual = (dir) => { halamanLpjSaatIni += dir; tampilkanDataLpjKeTabel(); };

/* ==========================================================================
   FUNGSI KONTROL LIVE EMBED VIEWER LPJ
   ========================================================================== */
window.bukaLpjViewer = (url) => {
    const viewerSection = document.getElementById('lpj-viewer-section');
    const iframe = document.getElementById('lpj-iframe');
    const btnUnduh = document.getElementById('btn-unduh-lpj');
    
    if(viewerSection && iframe) {
        // Mengubah URL file biasa menjadi format preview embed Google Drive jika diperlukan
        let embedUrl = url;
        if(url.includes('file/d/')) {
            embedUrl = url.replace('/view?usp=sharing', '/preview').replace('/view', '/preview');
        }
        
        iframe.src = embedUrl;
        if(btnUnduh) btnUnduh.href = url;
        viewerSection.style.display = 'block';
        viewerSection.scrollIntoView({ behavior: 'smooth' });
    }
};

window.tutupLpjViewer = () => {
    const viewerSection = document.getElementById('lpj-viewer-section');
    const iframe = document.getElementById('lpj-iframe');
    if(viewerSection && iframe) {
        iframe.src = '';
        viewerSection.style.display = 'none';
    }
};

// Pemicu inisialisasi awal saat dokumen dimuat
document.addEventListener("DOMContentLoaded", () => {
    if(document.getElementById('data-tabel-lpj')) {
        ambilDataLpjGoogleSheets();
    }
});
