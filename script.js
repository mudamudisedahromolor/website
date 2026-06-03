/* ==========================================================================
   13. MODUL ARSIP DATA LOMBA REAL-TIME (SISTEM PAGINATION MERAH TABEL FIX)
   ========================================================================== */
const SPREADSHEET_ID_LOMBA = '1oMdAVAlvfCH_KAmyT6y3PKteXFg5G9-X7al81rlvQtM';
const SHEET_NAME_LOMBA = 'Form Responses 1'; 

let semuaDataLomba = [], dataLombaTersaring = []; const BARIS_LOMBA_PER_HALAMAN = 5; let halamanLombaSaatIni = 1; 

function ambilDataGoogleSheets() {
    const url = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID_LOMBA}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(SHEET_NAME_LOMBA)}`;
    fetch(url).then(res => res.text()).then(data => {
        const jsonPembersihLomba = JSON.parse(data.substr(47).slice(0, -2)), barisDataLomba = jsonPembersihLomba.table.rows;
        semuaDataLomba = []; const setTahunLomba = new Set();
        for (let i = 1; i < barisDataLomba.length; i++) {
            const baris = barisDataLomba[i];
            if (baris && baris.c && baris.c[2]) {
                const tgl = String(baris.c[1] ? baris.c[1].f || baris.c[1].v : '-').trim();
                let thn = tgl.split('/')[2] || 'Umum';
                semuaDataLomba.push({ tanggal: tgl, tahun: thn, nama: String(baris.c[2].v), kategori: baris.c[3] ? String(baris.c[3].v) : 'Umum', urlDrive: baris.c[4] ? String(baris.c[4].v) : '' });
                if (thn !== 'Umum' && !isNaN(thn)) setTahunLomba.add(thn);
            }
        }
        semuaDataLomba.reverse(); dataLombaTersaring = [...semuaDataLomba];
        const selLomba = document.getElementById('filter-lomba-tahun');
        if (selLomba) { selLomba.innerHTML = '<option value="Semua">Semua Tahun</option>'; Array.from(setTahunLomba).sort().reverse().forEach(th => { let opt = document.createElement('option'); opt.value = th; opt.textContent = th; selLomba.appendChild(opt); }); }
        halamanLombaSaatIni = 1; tampilkanDataLombaKeTabel();
    }).catch(err => console.error(err));
}

function tampilkanDataLombaKeTabel() {
    const tbodyLomba = document.getElementById('data-tabel-lomba'); if (!tbodyLomba) return;
    if (dataLombaTersaring.length === 0) { tbodyLomba.innerHTML = `<tr><td colspan="4" style="text-align: center; padding: 20px;">Tidak ada berkas arsip lomba.</td></tr>`; return; }
    const startLomba = (halamanLombaSaatIni - 1) * BARIS_LOMBA_PER_HALAMAN, pageDataLomba = dataLombaTersaring.slice(startLomba, startLomba + BARIS_LOMBA_PER_HALAMAN);

    let htmlLomba = pageDataLomba.map(item => {
        let warnaBadge = item.kategori.toLowerCase().includes('anak') ? '#388E3C' : (item.kategori.toLowerCase().includes('remaja') ? '#F57C00' : '#0288D1');
        let btnLomba = item.urlDrive ? `<button class="btn-nav-aktif" onclick="bukaPdfViewer('${item.urlDrive}')" style="height:34px; padding:0 12px; font-size:12px;"><i class="fa-solid fa-eye"></i> Lihat PDF</button>` : `<i>Tidak tersedia</i>`;
        return `<tr><td>${item.tanggal}</td><td style="font-weight:bold;">${item.nama}</td><td><span style="background-color:${warnaBadge}; color:white; padding:5px 12px; border-radius:20px; font-size:11px; font-weight:bold;">${item.kategori}</span></td><td style="text-align:center;">${btnLomba}</td></tr>`;
    }).join('');

    const totalHalamanLomba = Math.ceil(dataLombaTersaring.length / BARIS_LOMBA_PER_HALAMAN);
    if (totalHalamanLomba > 1) {
        let navHTMLLomba = ""; 
        if (halamanLombaSaatIni === 1) {
            navHTMLLomba = `<td colspan="4" style="padding:15px; background:#f9f9f9; text-align:right;"><button class="btn-nav-aktif" onclick="window.navLombaManual(1)">Halaman Selanjutnya ></button></td>`;
        } else if (halamanLombaSaatIni === totalHalamanLomba) {
            navHTMLLomba = `<td colspan="4" style="padding:15px; background:#f9f9f9; text-align:left;"><button class="btn-nav-aktif" onclick="window.navLombaManual(-1)">< Halaman Sebelumnya</button></td>`;
        } else {
            navHTMLLomba = `<td colspan="4" style="padding:15px; background:#f9f9f9;"><div style="display:flex; justify-content:space-between; width:100%;"><button class="btn-nav-aktif" onclick="window.navLombaManual(-1)">< Halaman Sebelumnya</button><button class="btn-nav-aktif" onclick="window.navLombaManual(1)">Halaman Selanjutnya ></button></div></td>`;
        }
        htmlLomba += `<tr>${navHTMLLomba}</tr>`;
    }
    tbodyLomba.innerHTML = htmlLomba;
}
window.navLombaManual = function(dir) { halamanLombaSaatIni += dir; tampilkanDataLombaKeTabel(); };
window.halamanSebelumnya = function() { window.navLombaManual(1); };
window.halamanTerbaru = function() { window.navLombaManual(-1); };

window.terapkanFilterLomba = function() {
    const yearLomba = document.getElementById('filter-lomba-tahun')?.value || 'Semua', keyLomba = document.getElementById('input-cari-lomba')?.value.toLowerCase() || '';
    dataLombaTersaring = semuaDataLomba.filter(i => (yearLomba === 'Semua' || i.tahun === yearLomba) && (i.nama.toLowerCase().includes(keyLomba) || i.kategori.toLowerCase().includes(keyLomba)));
    halamanLombaSaatIni = 1; tampilkanDataLombaKeTabel();
};

window.bukaPdfViewer = function(urlAsli) {
    const urlEmbedLomba = konversiUrlDriveUntukEmbed(urlAsli); const iframeLomba = document.getElementById('pdf-iframe'); if (iframeLomba) iframeLomba.src = urlEmbedLomba;
    const panelViewerLomba = document.getElementById('pdf-viewer-section'); if (panelViewerLomba) { panelViewerLomba.style.display = 'block'; panelViewerLomba.scrollIntoView({ behavior: 'smooth' }); }
}
window.tutupPdfViewer = function() {
    const panelViewerLomba = document.getElementById('pdf-viewer-section'); const iframeLomba = document.getElementById('pdf-iframe');
    if (panelViewerLomba) panelViewerLomba.style.display = 'none'; if (iframeLomba) iframeLomba.src = '';
}


/* ==========================================================================
   14. MODUL KHUSUS: ARSIP DATA PROPOSAL REAL-TIME (SISTEM PAGINATION MERAH TABEL FIX)
   ========================================================================== */
const SPREADSHEET_ID_PROPOSAL = '1_kuBIdFvRYvtHvBFP7CtKqgONewIIU3A0XElDuc2cNA'; const SHEET_NAME_PROPOSAL = 'Form Responses 1'; 
let semuaDataProposal = [], dataProposalTersaring = []; const BARIS_PROPOSAL_PER_HALAMAN = 5; let halamanProposalSaatIni = 1; 

function ambilDataProposalGoogleSheets() {
    const url = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID_PROPOSAL}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(SHEET_NAME_PROPOSAL)}`;
    fetch(url).then(res => res.text()).then(data => {
        const jsonPembersihProp = JSON.parse(data.substr(47).slice(0, -2)), barisDataProp = jsonPembersihProp.table.rows;
        semuaDataProposal = []; const setTahunProp = new Set();
        for (let i = 1; i < barisDataProp.length; i++) {
            const baris = barisDataProp[i];
            if (baris && baris.c && baris.c[2]) {
                const tgl = String(baris.c[1] ? baris.c[1].f || baris.c[1].v : '-').trim();
                let thn = tgl.split('/')[2] ? tgl.split('/')[2].substring(0,4) : 'Umum';
                semuaDataProposal.push({ tanggal: tgl, tahun: thn, nama: String(baris.c[2].v), kategori: baris.c[3] ? String(baris.c[3].v) : 'Umum', urlDrive: baris.c[4] ? String(baris.c[4].v) : '' });
                if (thn !== 'Umum' && !isNaN(thn)) setTahunProp.add(thn);
            }
        }
        semuaDataProposal.reverse(); dataProposalTersaring = [...semuaDataProposal];
        const selProp = document.getElementById('filter-proposal-tahun');
        if (selProp) { selProp.innerHTML = '<option value="Semua">Semua Tahun</option>'; Array.from(setTahunProp).sort().reverse().forEach(th => { let opt = document.createElement('option'); opt.value = th; opt.textContent = th; selProp.appendChild(opt); }); }
        halamanProposalSaatIni = 1; tampilkanDataProposalKeTabel();
    }).catch(err => console.error(err));
}

function tampilkanDataProposalKeTabel() {
    const tbodyProp = document.getElementById('data-tabel-proposal'); if (!tbodyProp) return;
    if (dataProposalTersaring.length === 0) { tbodyProp.innerHTML = `<tr><td colspan="4" style="text-align: center; padding: 20px;">Tidak ada berkas proposal.</td></tr>`; return; }
    const startProp = (halamanProposalSaatIni - 1) * BARIS_PROPOSAL_PER_HALAMAN, pageDataProp = dataProposalTersaring.slice(startProp, startProp + BARIS_PROPOSAL_PER_HALAMAN);

    let htmlProp = pageDataProp.map(item => {
        let warnaBadge = item.kategori.toLowerCase().includes('bantuan') ? '#388E3C' : '#F57C00';
        let btnProp = item.urlDrive ? `<button class="btn-nav-aktif" onclick="window.bukaProposalViewer('${item.urlDrive}')" style="height:34px; padding:0 12px; font-size:12px;"><i class="fa-solid fa-eye"></i> Lihat PDF</button>` : `<i>Tidak tersedia</i>`;
        return `<tr><td>${item.tanggal}</td><td style="font-weight:bold;">${item.nama}</td><td><span style="background-color:${warnaBadge}; color:white; padding:5px 12px; border-radius:20px; font-size:11px; font-weight:bold;">${item.kategori}</span></td><td style="text-align:center;">${btnProp}</td></tr>`;
    }).join('');

    const totalHalamanProp = Math.ceil(dataProposalTersaring.length / BARIS_PROPOSAL_PER_HALAMAN);
    if (totalHalamanProp > 1) {
        let navHTMLProp = ""; 
        if (halamanProposalSaatIni === 1) {
            navHTMLProp = `<td colspan="4" style="padding:15px; background:#f9f9f9; text-align:right;"><button class="btn-nav-aktif" onclick="window.navProposalManual(1)">Halaman Selanjutnya ></button></td>`;
        } else if (halamanProposalSaatIni === totalHalamanProp) {
            navHTMLProp = `<td colspan="4" style="padding:15px; background:#f9f9f9; text-align:left;"><button class="btn-nav-aktif" onclick="window.navProposalManual(-1)">< Halaman Sebelumnya</button></td>`;
        } else {
            navHTMLProp = `<td colspan="4" style="padding:15px; background:#f9f9f9;"><div style="display:flex; justify-content:space-between; width:100%;"><button class="btn-nav-aktif" onclick="window.navProposalManual(-1)">< Halaman Sebelumnya</button><button class="btn-nav-aktif" onclick="window.navProposalManual(1)">Halaman Selanjutnya ></button></div></td>`;
        }
        htmlProp += `<tr>${navHTMLProp}</tr>`;
    }
    tbodyProp.innerHTML = htmlProp;
}
window.navProposalManual = function(dir) { halamanProposalSaatIni += dir; tampilkanDataProposalKeTabel(); };
window.halamanSebelumnyaProposal = function() { window.navProposalManual(1); };
window.halamanTerbaruProposal = function() { window.navProposalManual(-1); };

window.terapkanFilterProposal = function() {
    const yearProp = document.getElementById('filter-proposal-tahun')?.value || 'Semua', keyProp = document.getElementById('input-cari-proposal')?.value.toLowerCase() || '';
    dataProposalTersaring = semuaDataProposal.filter(i => (yearProp === 'Semua' || i.tahun === yearProp) && (i.nama.toLowerCase().includes(keyProp) || i.kategori.toLowerCase().includes(keyProp)));
    halamanProposalSaatIni = 1; tampilkanDataProposalKeTabel();
};

window.bukaProposalViewer = function(urlAsli) { 
    const urlEmbedProp = konversiUrlDriveUntukEmbed(urlAsli); const iframeProp = document.getElementById('proposal-iframe'); if (iframeProp) iframeProp.src = urlEmbedProp; 
    const panelProp = document.getElementById('proposal-viewer-section'); if (panelProp) { panelProp.style.display = 'block'; panelProp.scrollIntoView({ behavior: 'smooth' }); } 
}
window.tutupProposalViewer = function() { 
    const panelProp = document.getElementById('proposal-viewer-section'); if (panelProp) panelProp.style.display = 'none'; 
    const iframeProp = document.getElementById('proposal-iframe'); if (iframeProp) iframeProp.src = ''; 
}


/* ==========================================================================
   15. MODUL KHUSUS: ARSIP DATA AGENDA SURAT REAL-TIME (SISTEM PAGINATION MERAH TABEL FIX)
   ========================================================================== */
const SPREADSHEET_ID_SURAT = '1ILm2T8ed5oJ85cU2YzTiDHnHlGgtMjVoKYmhSxFF2PQ'; const SHEET_NAME_SURAT = 'Form Responses 1'; 
let semuaDataSurat = [], dataSuratTersaring = []; const BARIS_SURAT_PER_HALAMAN = 5; let halamanSuratSaatIni = 1; 

function ambilDataSuratGoogleSheets() {
    const url = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID_SURAT}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(SHEET_NAME_SURAT)}`;
    fetch(url).then(res => res.text()).then(data => {
        const jsonPembersihSurat = JSON.parse(data.substr(47).slice(0, -2)), barisDataSurat = jsonPembersihSurat.table.rows;
        semuaDataSurat = []; const setTahunSurat = new Set();
        for (let i = 1; i < barisDataSurat.length; i++) {
            const baris = barisDataSurat[i];
            if (baris && baris.c && baris.c[2]) {
                const tgl = String(baris.c[1] ? baris.c[1].f || baris.c[1].v : '-').trim();
                let thn = tgl.split('/')[2] || 'Umum';
                semuaDataSurat.push({ tanggal: tgl, tahun: thn, nama: String(baris.c[2].v), kategori: baris.c[3] ? String(baris.c[3].v) : 'Umum', urlDrive: baris.c[4] ? String(baris.c[4].v) : '' });
                if (thn !== 'Umum' && !isNaN(thn)) setTahunSurat.add(thn);
            }
        }
        semuaDataSurat.reverse(); dataSuratTersaring = [...semuaDataSurat];
        const selSurat = document.getElementById('filter-surat-tahun');
        if (selSurat) { selSurat.innerHTML = '<option value="Semua">Semua Tahun</option>'; Array.from(setTahunSurat).sort().reverse().forEach(th => { let opt = document.createElement('option'); opt.value = th; opt.textContent = th; selSurat.appendChild(opt); }); }
        halamanSuratSaatIni = 1; tampilkanDataSuratKeTabel();
    }).catch(err => console.error(err));
}

function tampilkanDataSuratKeTabel() {
    const tbodySurat = document.getElementById('data-tabel-surat'); if (!tbodySurat) return;
    if (dataSuratTersaring.length === 0) { tbodySurat.innerHTML = `<tr><td colspan="4" style="text-align: center; padding: 20px;">Tidak ada log data surat.</td></tr>`; return; }
    const startSurat = (halamanSuratSaatIni - 1) * BARIS_SURAT_PER_HALAMAN, pageDataSurat = dataSuratTersaring.slice(startSurat, startSurat + BARIS_SURAT_PER_HALAMAN);

    let htmlSurat = pageDataSurat.map(item => {
        let warnaBadge = (item.kategori.toLowerCase().includes('masuk') || item.kategori.toLowerCase().includes('in')) ? '#388E3C' : '#D32F2F';
        let btnSurat = item.urlDrive ? `<button class="btn-nav-aktif" onclick="window.bukaSuratViewer('${item.urlDrive}')" style="height:34px; padding:0 12px; font-size:12px;"><i class="fa-solid fa-eye"></i> Lihat PDF</button>` : `<i>Tidak tersedia</i>`;
        return `<tr><td>${item.tanggal}</td><td style="font-weight:bold;">${item.nama}</td><td><span style="background-color:${warnaBadge}; color:white; padding:5px 12px; border-radius:20px; font-size:11px; font-weight:bold;">${item.kategori}</span></td><td style="text-align:center;">${btnSurat}</td></tr>`;
    }).join('');

    const totalHalamanSurat = Math.ceil(dataSuratTersaring.length / BARIS_SURAT_PER_HALAMAN);
    if (totalHalamanSurat > 1) {
        let navHTMLSurat = ""; 
        if (halamanSuratSaatIni === 1) {
            navHTMLSurat = `<td colspan="4" style="padding:15px; background:#f9f9f9; text-align:right;"><button class="btn-nav-aktif" onclick="window.navSuratManual(1)">Halaman Selanjutnya ></button></td>`;
        } else if (halamanSuratSaatIni === totalHalamanSurat) {
            navHTMLSurat = `<td colspan="4" style="padding:15px; background:#f9f9f9; text-align:left;"><button class="btn-nav-aktif" onclick="window.navSuratManual(-1)">< Halaman Sebelumnya</button></td>`;
        } else {
            navHTMLSurat = `<td colspan="4" style="padding:15px; background:#f9f9f9;"><div style="display:flex; justify-content:space-between; width:100%;"><button class="btn-nav-aktif" onclick="window.navSuratManual(-1)">< Halaman Sebelumnya</button><button class="btn-nav-aktif" onclick="window.navSuratManual(1)">Halaman Selanjutnya ></button></div></td>`;
        }
        htmlSurat += `<tr>${navHTMLSurat}</tr>`;
    }
    tbodySurat.innerHTML = htmlSurat;
}
window.navSuratManual = function(dir) { halamanSuratSaatIni += dir; tampilkanDataSuratKeTabel(); };
window.halamanSebelumnyaSurat = function() { window.navSuratManual(1); };
window.halamanTerbaruSurat = function() { window.navSuratManual(-1); };

window.terapkanFilterSurat = function() {
    const yearSurat = document.getElementById('filter-surat-tahun')?.value || 'Semua', keySurat = document.getElementById('input-cari-surat')?.value.toLowerCase() || '';
    dataSuratTersaring = semuaDataSurat.filter(i => (yearSurat === 'Semua' || i.tahun === yearSurat) && (i.nama.toLowerCase().includes(keySurat) || i.kategori.toLowerCase().includes(keySurat)));
    halamanSuratSaatIni = 1; tampilkanDataSuratKeTabel();
};

window.bukaSuratViewer = function(urlAsli) { 
    const urlEmbedSurat = konversiUrlDriveUntukEmbed(urlAsli); const iframeSurat = document.getElementById('surat-iframe'); if (iframeSurat) iframeSurat.src = urlEmbedSurat; 
    const panelSurat = document.getElementById('surat-viewer-section'); if (panelSurat) { panelSurat.style.display = 'block'; panelSurat.scrollIntoView({ behavior: 'smooth' }); } 
}
window.tutupSuratViewer = function() { 
    const panelSurat = document.getElementById('surat-viewer-section'); if (panelSurat) panelSurat.style.display = 'none'; 
    const iframeSurat = document.getElementById('surat-iframe'); if (iframeSurat) iframeSurat.src = ''; 
}


/* ==========================================================================
   16. MODUL KHUSUS: ARSIP DATA LPJ REAL-TIME (SISTEM PAGINATION MERAH TABEL FIX)
   ========================================================================== */
const SPREADSHEET_ID_LPJ = '1oMdAVAlvfCH_KAmyT6y3PKteXFg5G9-X7al81rlvQtM'; const SHEET_NAME_LPJ = 'Form Responses 4'; 
let semuaDataLpj = [], dataLpjTersaring = []; const BARIS_LPJ_PER_HALAMAN = 5; let halamanLpjSaatIni = 1; 

function ambilDataLpjGoogleSheets() {
    const url = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID_LPJ}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(SHEET_NAME_LPJ)}`;
    fetch(url).then(res => res.text()).then(data => {
        const jsonPembersihLpj = JSON.parse(data.substr(47).slice(0, -2)), barisDataLpj = jsonPembersihLpj.table.rows;
        semuaDataLpj = []; const setTahunLpj = new Set();
        for (let i = 1; i < barisDataLpj.length; i++) {
            const baris = barisDataLpj[i];
            if (baris && baris.c && baris.c[2]) {
                const tgl = String(baris.c[1] ? baris.c[1].f || baris.c[1].v : '-').trim();
                let thn = tgl.split('/')[2] || 'Umum';
                semuaDataLpj.push({ tanggal: tgl, tahun: thn, nama: String(baris.c[2].v), kategori: baris.c[3] ? String(baris.c[3].v) : 'Umum', urlDrive: baris.c[4] ? String(baris.c[4].v) : '' });
                if (thn !== 'Umum' && !isNaN(thn)) setTahunLpj.add(thn);
            }
        }
        semuaDataLpj.reverse(); dataLpjTersaring = [...semuaDataLpj];
        const selLpj = document.getElementById('filter-lpj-tahun');
        if (selLpj) { selLpj.innerHTML = '<option value="Semua">Semua Tahun</option>'; Array.from(setTahunLpj).sort().reverse().forEach(th => { let opt = document.createElement('option'); opt.value = th; opt.textContent = th; selLpj.appendChild(opt); }); }
        halamanLpjSaatIni = 1; tampilkanDataLpjKeTabel();
    }).catch(err => console.error(err));
}

function tampilkanDataLpjKeTabel() {
    const tbodyLpj = document.getElementById('data-tabel-lpj'); if (!tbodyLpj) return;
    if (dataLpjTersaring.length === 0) { tbodyLpj.innerHTML = `<tr><td colspan="4" style="text-align: center; padding: 20px;">Tidak ada log berkas LPJ yang ditemukan.</td></tr>`; return; }
    const startLpj = (halamanLpjSaatIni - 1) * BARIS_LPJ_PER_HALAMAN, pageDataLpj = dataLpjTersaring.slice(startLpj, startLpj + BARIS_LPJ_PER_HALAMAN);

    let htmlLpj = pageDataLpj.map(item => {
        let warnaBadge = item.kategori.toLowerCase().includes('panitia') ? '#F57C00' : '#0288D1';
        let btnLpj = item.urlDrive ? `<button class="btn-nav-aktif" onclick="window.bukaLpjViewer('${item.urlDrive}')" style="height:34px; padding:0 12px; font-size:12px;"><i class="fa-solid fa-eye"></i> Lihat PDF</button>` : `<i>Tidak tersedia</i>`;
        return `<tr><td>${item.tanggal}</td><td style="font-weight:bold;">${item.nama}</td><td><span style="background-color:${warnaBadge}; color:white; padding:5px 12px; border-radius:20px; font-size:11px; font-weight:bold;">${item.kategori}</span></td><td style="text-align:center;">${btnLpj}</td></tr>`;
    }).join('');

    const totalHalamanLpj = Math.ceil(dataLpjTersaring.length / BARIS_LPJ_PER_HALAMAN);
    if (totalHalamanLpj > 1) {
        let navHTMLLpj = ""; 
        if (halamanLpjSaatIni === 1) {
            navHTMLLpj = `<td colspan="4" style="padding:15px; background:#f9f9f9; text-align:right;"><button class="btn-nav-aktif" onclick="window.navLpjManual(1)">Halaman Selanjutnya ></button></td>`;
        } else if (halamanLpjSaatIni === totalHalamanLpj) {
            navHTMLLpj = `<td colspan="4" style="padding:15px; background:#f9f9f9; text-align:left;"><button class="btn-nav-aktif" onclick="window.navLpjManual(-1)">< Halaman Sebelumnya</button></td>`;
        } else {
            navHTMLLpj = `<td colspan="4" style="padding:15px; background:#f9f9f9;"><div style="display:flex; justify-content:space-between; width:100%;"><button class="btn-nav-aktif" onclick="window.navLpjManual(-1)">< Halaman Sebelumnya</button><button class="btn-nav-aktif" onclick="window.navLpjManual(1)">Halaman Selanjutnya ></button></div></td>`;
        }
        htmlLpj += `<tr>${navHTMLLpj}</tr>`;
    }
    tbodyLpj.innerHTML = htmlLpj;
}
window.navLpjManual = function(dir) { halamanLpjSaatIni += dir; tampilkanDataLpjKeTabel(); };
window.halamanSebelumnyaLpj = function() { window.navLpjManual(1); };
window.halamanTerbaruLpj = function() { window.navLpjManual(-1); };

window.terapkanFilterLpj = function() {
    const yearLpj = document.getElementById('filter-lpj-tahun')?.value || 'Semua', keyLpj = document.getElementById('input-cari-lpj')?.value.toLowerCase() || '';
    dataLpjTersaring = semuaDataLpj.filter(i => (yearLpj === 'Semua' || i.tahun === yearLpj) && (i.nama.toLowerCase().includes(keyLpj) || i.kategori.toLowerCase().includes(keyLpj)));
    halamanLpjSaatIni = 1; tampilkanDataLpjKeTabel();
};

window.bukaLpjViewer = function(urlAsli) { 
    const urlEmbedLpj = konversiUrlDriveUntukEmbed(urlAsli); const iframeLpj = document.getElementById('lpj-iframe'); if (iframeLpj) iframeLpj.src = urlEmbedLpj; 
    const panelLpj = document.getElementById('lpj-viewer-section'); if (panelLpj) { panelLpj.style.display = 'block'; panelLpj.scrollIntoView({ behavior: 'smooth' }); } 
}
window.tutupLpjViewer = function() { 
    const panelLpj = document.getElementById('lpj-viewer-section'); if (panelLpj) panelLpj.style.display = 'none'; 
    const iframeLpj = document.getElementById('lpj-iframe'); if (iframeLpj) iframeLpj.src = ''; 
}
