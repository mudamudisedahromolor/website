/* ==========================================================================
   13. MODUL ARSIP DATA LOMBA REAL-TIME (SISTEM PAGINATION MERAH TABEL FIX)
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
    if (dataLombaTersaring.length === 0) { tbody.innerHTML = `<tr><td colspan="4" style="text-align: center; padding: 20px;">Tidak ada berkas arsip lomba.</td></tr>`; return; }
    const start = (halamanLombaSaatIni - 1) * BARIS_LOMBA_PER_HALAMAN, pageData = dataLombaTersaring.slice(start, start + BARIS_LOMBA_PER_HALAMAN);

    let html = pageData.map(item => {
        let warnaBadge = item.kategori.toLowerCase().includes('anak') ? '#388E3C' : (item.kategori.toLowerCase().includes('remaja') ? '#F57C00' : '#0288D1');
        let btn = item.urlDrive ? `<button class="btn-nav-aktif" onclick="bukaPdfViewer('${item.urlDrive}')" style="height:34px; padding:0 12px; font-size:12px;"><i class="fa-solid fa-eye"></i> Lihat PDF</button>` : `<i>Tidak tersedia</i>`;
        return `<tr><td>${item.tanggal}</td><td style="font-weight:bold;">${item.nama}</td><td><span style="background-color:${warnaBadge}; color:white; padding:5px 12px; border-radius:20px; font-size:11px; font-weight:bold;">${item.kategori}</span></td><td style="text-align:center;">${btn}</td></tr>`;
    }).join('');

    const totalHalaman = Math.ceil(dataLombaTersaring.length / BARIS_LOMBA_PER_HALAMAN);
    if (totalHalaman > 1) {
        let navHTML = ""; 
        if (halamanLombaSaatIni === 1) {
            navHTML = `<td colspan="4" style="padding:15px; background:#f9f9f9; text-align:right;"><button class="btn-nav-aktif" onclick="window.navLombaManual(1)">Halaman Selanjutnya ></button></td>`;
        } else if (halamanLombaSaatIni === totalHalaman) {
            navHTML = `<td colspan="4" style="padding:15px; background:#f9f9f9; text-align:left;"><button class="btn-nav-aktif" onclick="window.navLombaManual(-1)">< Halaman Sebelumnya</button></td>`;
        } else {
            navHTML = `<td colspan="4" style="padding:15px; background:#f9f9f9;"><div style="display:flex; justify-content:space-between; width:100%;"><button class="btn-nav-aktif" onclick="window.navLombaManual(-1)">< Halaman Sebelumnya</button><button class="btn-nav-aktif" onclick="window.navLombaManual(1)">Halaman Selanjutnya ></button></div></td>`;
        }
        html += `<tr>${navHTML}</tr>`;
    }
    tbody.innerHTML = html;
}
window.navLombaManual = function(dir) { halamanLombaSaatIni += dir; tampilkanDataLombaKeTabel(); };
window.halamanSebelumnya = function() { window.navLombaManual(1); };
window.halamanTerbaru = function() { window.navLombaManual(-1); };

window.terapkanFilterLomba = function() {
    const year = document.getElementById('filter-lomba-tahun')?.value || 'Semua', key = document.getElementById('input-cari-lomba')?.value.toLowerCase() || '';
    dataLombaTersaring = semuaDataLomba.filter(i => (year === 'Semua' || i.tahun === year) && (i.nama.toLowerCase().includes(key) || i.kategori.toLowerCase().includes(key)));
    halamanLombaSaatIni = 1; tampilkanDataLombaKeTabel();
};

window.bukaPdfViewer = function(urlAsli) {
    const urlEmbed = konversiUrlDriveUntukEmbed(urlAsli); const iframe = document.getElementById('pdf-iframe'); if (iframe) iframe.src = urlEmbed;
    const panelViewer = document.getElementById('pdf-viewer-section'); if (panelViewer) { panelViewer.style.display = 'block'; panelViewer.scrollIntoView({ behavior: 'smooth' }); }
}
window.tutupPdfViewer = function() {
    const panelViewer = document.getElementById('pdf-viewer-section'); const iframe = document.getElementById('pdf-iframe');
    if (panelViewer) panelViewer.style.display = 'none'; if (iframe) iframe.src = '';
}


/* ==========================================================================
   14. MODUL KHUSUS: ARSIP DATA PROPOSAL REAL-TIME (SISTEM PAGINATION MERAH TABEL FIX)
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
    if (dataProposalTersaring.length === 0) { tbody.innerHTML = `<tr><td colspan="4" style="text-align: center; padding: 20px;">Tidak ada berkas proposal.</td></tr>`; return; }
    const start = (halamanProposalSaatIni - 1) * BARIS_PROPOSAL_PER_HALAMAN, pageData = dataProposalTersaring.slice(start, start + BARIS_PROPOSAL_PER_HALAMAN);

    let html = pageData.map(item => {
        let warnaBadge = item.kategori.toLowerCase().includes('bantuan') ? '#388E3C' : '#F57C00';
        let btn = item.urlDrive ? `<button class="btn-nav-aktif" onclick="window.bukaProposalViewer('${item.urlDrive}')" style="height:34px; padding:0 12px; font-size:12px;"><i class="fa-solid fa-eye"></i> Lihat PDF</button>` : `<i>Tidak tersedia</i>`;
        return `<tr><td>${item.tanggal}</td><td style="font-weight:bold;">${item.nama}</td><td><span style="background-color:${warnaBadge}; color:white; padding:5px 12px; border-radius:20px; font-size:11px; font-weight:bold;">${item.kategori}</span></td><td style="text-align:center;">${btn}</td></tr>`;
    }).join('');

    const totalHalaman = Math.ceil(dataProposalTersaring.length / BARIS_PROPOSAL_PER_HALAMAN);
    if (totalHalaman > 1) {
        let navHTML = ""; 
        if (halamanProposalSaatIni === 1) {
            navHTML = `<td colspan="4" style="padding:15px; background:#f9f9f9; text-align:right;"><button class="btn-nav-aktif" onclick="window.navProposalManual(1)">Halaman Selanjutnya ></button></td>`;
        } else if (halamanProposalSaatIni === totalHalaman) {
            navHTML = `<td colspan="4" style="padding:15px; background:#f9f9f9; text-align:left;"><button class="btn-nav-aktif" onclick="window.navProposalManual(-1)">< Halaman Sebelumnya</button></td>`;
        } else {
            navHTML = `<td colspan="4" style="padding:15px; background:#f9f9f9;"><div style="display:flex; justify-content:space-between; width:100%;"><button class="btn-nav-aktif" onclick="window.navProposalManual(-1)">< Halaman Sebelumnya</button><button class="btn-nav-aktif" onclick="window.navProposalManual(1)">Halaman Selanjutnya ></button></div></td>`;
        }
        html += `<tr>${navHTML}</tr>`;
    }
    tbody.innerHTML = html;
}
window.navProposalManual = function(dir) { halamanProposalSaatIni += dir; tampilkanDataProposalKeTabel(); };
window.halamanSebelumnyaProposal = function() { window.navProposalManual(1); };
window.halamanTerbaruProposal = function() { window.navProposalManual(-1); };

window.terapkanFilterProposal = function() {
    const year = document.getElementById('filter-proposal-tahun')?.value || 'Semua', key = document.getElementById('input-cari-proposal')?.value.toLowerCase() || '';
    dataProposalTersaring = semuaDataProposal.filter(i => (year === 'Semua' || i.tahun === year) && (i.nama.toLowerCase().includes(key) || i.kategori.toLowerCase().includes(key)));
    halamanProposalSaatIni = 1; tampilkanDataProposalKeTabel();
};

window.bukaProposalViewer = function(urlAsli) { 
    const urlEmbed = konversiUrlDriveUntukEmbed(urlAsli); const iframe = document.getElementById('proposal-iframe'); if (iframe) iframe.src = urlEmbed; 
    const panel = document.getElementById('proposal-viewer-section'); if (panel) { panel.style.display = 'block'; panel.scrollIntoView({ behavior: 'smooth' }); } 
}
window.tutupProposalViewer = function() { 
    const panel = document.getElementById('proposal-viewer-section'); if (panel) panel.style.display = 'none'; 
    const iframe = document.getElementById('proposal-iframe'); if (iframe) iframe.src = ''; 
}


/* ==========================================================================
   15. MODUL KHUSUS: ARSIP DATA AGENDA SURAT REAL-TIME (SISTEM PAGINATION MERAH TABEL FIX)
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
    if (dataSuratTersaring.length === 0) { tbody.innerHTML = `<tr><td colspan="4" style="text-align: center; padding: 20px;">Tidak ada log data surat.</td></tr>`; return; }
    const start = (halamanSuratSaatIni - 1) * BARIS_SURAT_PER_HALAMAN, pageData = dataSuratTersaring.slice(start, start + BARIS_SURAT_PER_HALAMAN);

    let html = pageData.map(item => {
        let warnaBadge = (item.kategori.toLowerCase().includes('masuk') || item.kategori.toLowerCase().includes('in')) ? '#388E3C' : '#D32F2F';
        let btn = item.urlDrive ? `<button class="btn-nav-aktif" onclick="window.bukaSuratViewer('${item.urlDrive}')" style="height:34px; padding:0 12px; font-size:12px;"><i class="fa-solid fa-eye"></i> Lihat PDF</button>` : `<i>Tidak tersedia</i>`;
        return `<tr><td>${item.tanggal}</td><td style="font-weight:bold;">${item.nama}</td><td><span style="background-color:${warnaBadge}; color:white; padding:5px 12px; border-radius:20px; font-size:11px; font-weight:bold;">${item.kategori}</span></td><td style="text-align:center;">${btn}</td></tr>`;
    }).join('');

    const totalHalaman = Math.ceil(dataSuratTersaring.length / BARIS_SURAT_PER_HALAMAN);
    if (totalHalaman > 1) {
        let navHTML = ""; 
        if (halamanSuratSaatIni === 1) {
            navHTML = `<td colspan="4" style="padding:15px; background:#f9f9f9; text-align:right;"><button class="btn-nav-aktif" onclick="window.navSuratManual(1)">Halaman Selanjutnya ></button></td>`;
        } else if (halamanSuratSaatIni === totalHalaman) {
            navHTML = `<td colspan="4" style="padding:15px; background:#f9f9f9; text-align:left;"><button class="btn-nav-aktif" onclick="window.navSuratManual(-1)">< Halaman Sebelumnya</button></td>`;
        } else {
            navHTML = `<td colspan="4" style="padding:15px; background:#f9f9f9;"><div style="display:flex; justify-content:space-between; width:100%;"><button class="btn-nav-aktif" onclick="window.navSuratManual(-1)">< Halaman Sebelumnya</button><button class="btn-nav-aktif" onclick="window.navSuratManual(1)">Halaman Selanjutnya ></button></div></td>`;
        }
        html += `<tr>${navHTML}</tr>`;
    }
    tbody.innerHTML = html;
}
window.navSuratManual = function(dir) { halamanSuratSaatIni += dir; tampilkanDataSuratKeTabel(); };
window.halamanSebelumnyaSurat = function() { window.navSuratManual(1); };
window.halamanTerbaruSurat = function() { window.navSuratManual(-1); };

window.terapkanFilterSurat = function() {
    const year = document.getElementById('filter-surat-tahun')?.value || 'Semua', key = document.getElementById('input-cari-surat')?.value.toLowerCase() || '';
    dataSuratTersaring = semuaDataSurat.filter(i => (year === 'Semua' || i.tahun === year) && (i.nama.toLowerCase().includes(key) || i.kategori.toLowerCase().includes(key)));
    halamanSuratSaatIni = 1; tampilkanDataSuratKeTabel();
};

window.bukaSuratViewer = function(urlAsli) { 
    const urlEmbed = konversiUrlDriveUntukEmbed(urlAsli); const iframe = document.getElementById('surat-iframe'); if (iframe) iframe.src = urlEmbed; 
    const panel = document.getElementById('surat-viewer-section'); if (panel) { panel.style.display = 'block'; panel.scrollIntoView({ behavior: 'smooth' }); } 
}
window.tutupSuratViewer = function() { 
    const panel = document.getElementById('surat-viewer-section'); if (panel) panel.style.display = 'none'; 
    const iframe = document.getElementById('surat-iframe'); if (iframe) iframe.src = ''; 
}


/* ==========================================================================
   16. MODUL KHUSUS: ARSIP DATA LPJ REAL-TIME (SISTEM PAGINATION MERAH TABEL FIX)
   ========================================================================== */
const SPREADSHEET_ID_LPJ = '1oMdAVAlvfCH_KAmyT6y3PKteXFg5G9-X7al81rlvQtM'; const SHEET_NAME_LPJ = 'Form Responses 4'; 
let semuaDataLpj = [], dataLpjTersaring = []; const BARIS_LPJ_PER_HALAMAN = 5; let halamanLpjSaatIni = 1; 

function ambilDataLpjGoogleSheets() {
    const url = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID_LPJ}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(SHEET_NAME_LPJ)}`;
    fetch(url).then(res => res.text()).then(data => {
        const jsonPembersih = JSON.parse(data.substr(47).slice(0, -2)), barisData = jsonPembersih.table.rows;
        semuaDataLpj = []; const setTahun = new Set();
        for (let i = 1; i < barisData.length; i++) {
            const baris = barisData[i];
            if (baris && baris.c && baris.c[2]) {
                const tgl = String(baris.c[1] ? baris.c[1].f || baris.c[1].v : '-').trim();
                let thn = tgl.split('/')[2] || 'Umum';
                semuaDataLpj.push({ tanggal: tgl, tahun: thn, nama: String(baris.c[2].v), kategori: baris.c[3] ? String(baris.c[3].v) : 'Umum', urlDrive: baris.c[4] ? String(baris.c[4].v) : '' });
                if (thn !== 'Umum' && !isNaN(thn)) setTahun.add(thn);
            }
        }
        semuaDataLpj.reverse(); dataLpjTersaring = [...semuaDataLpj];
        const sel = document.getElementById('filter-lpj-tahun');
        if (sel) { sel.innerHTML = '<option value="Semua">Semua Tahun</option>'; Array.from(setTahun).sort().reverse().forEach(th => { let opt = document.createElement('option'); opt.value = th; opt.textContent = th; sel.appendChild(opt); }); }
        halamanLpjSaatIni = 1; tampilkanDataLpjKeTabel();
    }).catch(err => console.error(err));
}

function tampilkanDataLpjKeTabel() {
    const tbody = document.getElementById('data-tabel-lpj'); if (!tbody) return;
    if (dataLpjTersaring.length === 0) { tbody.innerHTML = `<tr><td colspan="4" style="text-align: center; padding: 20px;">Tidak ada log berkas LPJ yang ditemukan.</td></tr>`; return; }
    const start = (halamanLpjSaatIni - 1) * BARIS_LPJ_PER_HALAMAN, pageData = dataLpjTersaring.slice(start, start + BARIS_LPJ_PER_HALAMAN);

    let html = pageData.map(item => {
        let warnaBadge = item.kategori.toLowerCase().includes('panitia') ? '#F57C00' : '#0288D1';
        let btn = item.urlDrive ? `<button class="btn-nav-aktif" onclick="window.bukaLpjViewer('${item.urlDrive}')" style="height:34px; padding:0 12px; font-size:12px;"><i class="fa-solid fa-eye"></i> Lihat PDF</button>` : `<i>Tidak tersedia</i>`;
        return `<tr><td>${item.tanggal}</td><td style="font-weight:bold;">${item.nama}</td><td><span style="background-color:${warnaBadge}; color:white; padding:5px 12px; border-radius:20px; font-size:11px; font-weight:bold;">${item.kategori}</span></td><td style="text-align:center;">${btn}</td></tr>`;
    }).join('');

    const totalHalaman = Math.ceil(dataLpjTersaring.length / BARIS_LPJ_PER_HALAMAN);
    if (totalHalaman > 1) {
        let navHTML = ""; 
        if (halamanLpjSaatIni === 1) {
            navHTML = `<td colspan="4" style="padding:15px; background:#f9f9f9; text-align:right;"><button class="btn-nav-aktif" onclick="window.navLpjManual(1)">Halaman Selanjutnya ></button></td>`;
        } else if (halamanLpjSaatIni === totalHalaman) {
            navHTML = `<td colspan="4" style="padding:15px; background:#f9f9f9; text-align:left;"><button class="btn-nav-aktif" onclick="window.navLpjManual(-1)">< Halaman Sebelumnya</button></td>`;
        } else {
            navHTML = `<td colspan="4" style="padding:15px; background:#f9f9f9;"><div style="display:flex; justify-content:space-between; width:100%;"><button class="btn-nav-aktif" onclick="window.navLpjManual(-1)">< Halaman Sebelumnya</button><button class="btn-nav-aktif" onclick="window.navLpjManual(1)">Halaman Selanjutnya ></button></div></td>`;
        }
        html += `<tr>${navHTML}</tr>`;
    }
    tbody.innerHTML = html;
}
window.navLpjManual = function(dir) { halamanLpjSaatIni += dir; tampilkanDataLpjKeTabel(); };
window.halamanSebelumnyaLpj = function() { window.navLpjManual(1); };
window.halamanTerbaruLpj = function() { window.navLpjManual(-1); };

window.terapkanFilterLpj = function() {
    const year = document.getElementById('filter-lpj-tahun')?.value || 'Semua', key = document.getElementById('input-cari-lpj')?.value.toLowerCase() || '';
    dataLpjTersaring = semuaDataLpj.filter(i => (year === 'Semua' || i.tahun === year) && (i.nama.toLowerCase().includes(key) || i.kategori.toLowerCase().includes(key)));
    halamanLpjSaatIni = 1; tampilkanDataLpjKeTabel();
};

window.bukaLpjViewer = function(urlAsli) { 
    const urlEmbed = konversiUrlDriveUntukEmbed(urlAsli); const iframe = document.getElementById('lpj-iframe'); if (iframe) iframe.src = urlEmbed; 
    const panel = document.getElementById('lpj-viewer-section'); if (panel) { panel.style.display = 'block'; panel.scrollIntoView({ behavior: 'smooth' }); } 
}
window.tutupLpjViewer = function() { 
    const panel = document.getElementById('lpj-viewer-section'); if (panel) panel.style.display = 'none'; 
    const iframe = document.getElementById('lpj-iframe'); if (iframe) iframe.src = ''; 
}
