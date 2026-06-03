/* ==========================================================================
   13. MODUL ARSIP DATA LOMBA REAL-TIME (BEBAS TABRAKAN)
   ========================================================================== */
const SPREADSHEET_ID_LOMBA = '1oMdAVAlvfCH_KAmyT6y3PKteXFg5G9-X7al81rlvQtM';
const SHEET_NAME_LOMBA = 'Form Responses 1'; 

let semuaDataLomba = [];
let dataLombaTersaring = []; 

const BARIS_LOMBA_PER_HALAMAN = 5;
let halamanLombaSaatIni = 1; 

function ambilDataGoogleSheets() {
    const url = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID_LOMBA}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(SHEET_NAME_LOMBA)}`;
    
    fetch(url)
        .then(res => res.text())
        .then(data => {
            const jsonPembersih = JSON.parse(data.substr(47).slice(0, -2));
            const barisData = jsonPembersih.table.rows;
            
            semuaDataLomba = [];
            const setTahun = new Set();

            for (let i = 1; i < barisData.length; i++) {
                const baris = barisData[i];
                
                if (baris && baris.c && baris.c[2]) {
                    const teksTanggalRaw = baris.c[1] ? String(baris.c[1].f || baris.c[1].v) : '-';
                    const teksTanggal = teksTanggalRaw.trim();
                    
                    let angkaTahun = 'Umum';
                    if (teksTanggal && teksTanggal !== '-') {
                        const pecahan = teksTanggal.split('/');
                        if (pecahan.length >= 3) {
                            angkaTahun = pecahan[2].trim(); 
                        }
                    }

                    const dataItem = {
                        tanggal: teksTanggal,
                        tahun: angkaTahun, 
                        nama: baris.c[2] ? String(baris.c[2].v) : '-',
                        kategori: (baris.c[3] && baris.c[3].v) ? String(baris.c[3].v) : 'Umum', 
                        urlDrive: baris.c[4] ? String(baris.c[4].v) : ''
                    };
                    
                    semuaDataLomba.push(dataItem);
                    if (angkaTahun && angkaTahun !== 'Umum' && !isNaN(angkaTahun)) {
                        setTahun.add(angkaTahun);
                    }
                }
            }

            semuaDataLomba.reverse();
            dataLombaTersaring = [...semuaDataLomba];

            const selectTahun = document.getElementById('filter-lomba-tahun');
            if (selectTahun) {
                selectTahun.innerHTML = '<option value="Semua">Semua Tahun</option>';
                Array.from(setTahun).sort().reverse().forEach(th => {
                    const opt = document.createElement('option');
                    opt.value = th;
                    opt.textContent = th;
                    selectTahun.appendChild(opt);
                });
            }

            halamanLombaSaatIni = 1;
            tampilkanDataLombaKeTabel();
        })
        .catch(err => {
            console.error("Gagal memuat arsip data lomba:", err);
            const tbody = document.getElementById('data-tabel-lomba');
            if (tbody) {
                tbody.innerHTML = `<tr><td colspan="4" style="text-align: center; padding: 20px; color: #d32f2f;"><i class="fa-solid fa-triangle-exclamation"></i> Gagal memuat data.</td></tr>`;
            }
        });
}

function tampilkanDataLombaKeTabel() {
    const tbody = document.getElementById('data-tabel-lomba');
    if (!tbody) return;
    
    tbody.innerHTML = '';

    if (dataLombaTersaring.length === 0) {
        tbody.innerHTML = `<tr><td colspan="4" style="text-align: center; padding: 20px; color: #777;">Tidak ada berkas arsip lomba yang cocok.</td></tr>`;
        perbaruiTombolNavigasiLomba(0);
        return;
    }

    const indeksAwal = (halamanLombaSaatIni - 1) * BARIS_LOMBA_PER_HALAMAN;
    const indeksAkhir = indeksAwal + BARIS_LOMBA_PER_HALAMAN;
    const dataHalamanAktif = dataLombaTersaring.slice(indeksAwal, indeksAkhir);

    dataHalamanAktif.forEach(item => {
        const tr = document.createElement('tr');
        
        let warnaBadge = '#0288D1'; 
        if(item.kategori.toLowerCase().includes('anak')) {
            warnaBadge = '#388E3C'; 
        } else if(item.kategori.toLowerCase().includes('remaja') || item.kategori.toLowerCase().includes('muda')) {
            warnaBadge = '#F57C00'; 
        }

        let tombolAksi = item.urlDrive ? `
            <button class="btn-cetak-mutasi" onclick="bukaPdfViewer('${item.urlDrive}')" style="height: 34px; padding: 0 12px; font-size: 12px;">
                <i class="fa-solid fa-eye"></i> Lihat PDF
            </button>
        ` : `<span style="font-size:11px; color:#999; font-style:italic;">File tidak tersedia</span>`;

        tr.innerHTML = `
            <td style="color: #666; font-size: 13px;">${item.tanggal}</td>
            <td style="font-weight: bold; color: #333;">${item.nama}</td>
            <td><span style="background-color: ${warnaBadge}; color: white; padding: 5px 12px; border-radius: 20px; font-size: 11px; font-weight: bold;">${item.kategori}</span></td>
            <td style="text-align: center;">${tombolAksi}</td>
        `;
        tbody.appendChild(tr);
    });

    perbaruiTombolNavigasiLomba(dataLombaTersaring.length);
}

function perbaruiTombolNavigasiLomba(totalData) {
    const totalHalaman = Math.ceil(totalData / BARIS_LOMBA_PER_HALAMAN) || 1;
    const infoHalaman = document.getElementById('info-halaman-tabel');
    if (infoHalaman) infoHalaman.textContent = `Halaman ${halamanLombaSaatIni} dari ${totalHalaman}`;

    const btnTerbaru = document.getElementById('btn-halaman-terbaru'); 
    const btnSebelumnya = document.getElementById('btn-halaman-sebelumnya'); 

    if (btnTerbaru) {
        btnTerbaru.style.backgroundColor = '#D32F2F'; 
        btnTerbaru.style.color = 'white';
        btnTerbaru.style.display = (halamanLombaSaatIni > 1) ? 'inline-flex' : 'none';
    }

    if (btnSebelumnya) {
        btnSebelumnya.style.backgroundColor = '#D32F2F'; 
        btnSebelumnya.style.color = 'white';
        btnSebelumnya.style.display = (halamanLombaSaatIni < totalHalaman) ? 'inline-flex' : 'none';
    }
}

window.halamanSebelumnya = function() {
    const totalHalaman = Math.ceil(dataLombaTersaring.length / BARIS_LOMBA_PER_HALAMAN);
    if (halamanLombaSaatIni < totalHalaman) {
        halamanLombaSaatIni++;
        tampilkanDataLombaKeTabel();
    }
}

window.halamanTerbaru = function() {
    if (halamanLombaSaatIni > 1) {
        halamanLombaSaatIni--;
        tampilkanDataLombaKeTabel();
    }
}

window.terapkanFilterLomba = function() {
    const selectTahun = document.getElementById('filter-lomba-tahun');
    const inputCari = document.getElementById('input-cari-lomba');
    
    const yearSelect = selectTahun ? selectTahun.value : 'Semua';
    const searchKeyword = inputCari ? inputCari.value.toLowerCase() : '';

    dataLombaTersaring = semuaDataLomba.filter(item => {
        const cocokTahun = (yearSelect === 'Semua' || item.tahun === yearSelect);
        const cocokKataKunci = item.nama.toLowerCase().includes(searchKeyword) || 
                              item.kategori.toLowerCase().includes(searchKeyword) ||
                              item.tanggal.toLowerCase().includes(searchKeyword) ||
                              item.tahun.includes(searchKeyword);
        return cocokTahun && cocokKataKunci;
    });

    halamanLombaSaatIni = 1;
    tampilkanDataLombaKeTabel();
}

window.bukaPdfViewer = function(urlAsli) {
    const urlEmbed = konversiUrlDriveUntukEmbed(urlAsli);
    const iframe = document.getElementById('pdf-iframe');
    const btnUnduh = document.getElementById('btn-unduh-pdf');
    const panelViewer = document.getElementById('pdf-viewer-section');
    
    if (iframe) iframe.src = urlEmbed;
    if (btnUnduh) btnUnduh.href = urlAsli;
    if (panelViewer) {
        panelViewer.style.display = 'block';
        panelViewer.scrollIntoView({ behavior: 'smooth' });
    }
}

window.tutupPdfViewer = function() {
    const panelViewer = document.getElementById('pdf-viewer-section');
    const iframe = document.getElementById('pdf-iframe');
    if (panelViewer) panelViewer.style.display = 'none';
    if (iframe) iframe.src = '';
}


/* ==========================================================================
   14. MODUL KHUSUS: ARSIP DATA PROPOSAL REAL-TIME (ISOLASI MANDIRI)
   ========================================================================== */
const SPREADSHEET_ID_PROPOSAL = '1_kuBIdFvRYvtHvBFP7CtKqgONewIIU3A0XElDuc2cNA'; 
const SHEET_NAME_PROPOSAL = 'Form Responses 1'; 

let semuaDataProposal = [];
let dataProposalTersaring = []; 

const BARIS_PROPOSAL_PER_HALAMAN = 5;
let halamanProposalSaatIni = 1; 

function ambilDataProposalGoogleSheets() {
    const url = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID_PROPOSAL}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(SHEET_NAME_PROPOSAL)}`;
    
    fetch(url)
        .then(res => res.text())
        .then(data => {
            const jsonPembersih = JSON.parse(data.substr(47).slice(0, -2));
            const barisData = jsonPembersih.table.rows;
            
            semuaDataProposal = [];
            const setTahun = new Set();

            for (let i = 1; i < barisData.length; i++) {
                const baris = barisData[i];
                
                if (baris && baris.c && baris.c[2]) {
                    const teksTanggalRaw = baris.c[1] ? String(baris.c[1].f || baris.c[1].v || '-') : '-';
                    const teksTanggal = teksTanggalRaw.trim();
                    
                    let angkaTahun = 'Umum';
                    if (teksTanggal && teksTanggal !== '-') {
                        const pecahan = teksTanggal.split('/');
                        if (pecahan.length >= 3) {
                            angkaTahun = pecahan[2].trim().substring(0, 4); 
                        }
                    }

                    const dataItem = {
                        tanggal: teksTanggal,
                        tahun: angkaTahun, 
                        nama: baris.c[2] ? String(baris.c[2].v) : '-',       
                        kategori: baris.c[3] ? String(baris.c[3].v) : 'Umum', 
                        urlDrive: baris.c[4] ? String(baris.c[4].v) : ''     
                    };
                    
                    semuaDataProposal.push(dataItem);
                    if (angkaTahun && angkaTahun !== 'Umum' && !isNaN(angkaTahun)) {
                        setTahun.add(angkaTahun);
                    }
                }
            }

            semuaDataProposal.reverse();
            dataProposalTersaring = [...semuaDataProposal];

            const selectTahun = document.getElementById('filter-proposal-tahun');
            if (selectTahun) {
                selectTahun.innerHTML = '<option value="Semua">Semua Tahun</option>';
                Array.from(setTahun).sort().reverse().forEach(th => {
                    const opt = document.createElement('option');
                    opt.value = th;
                    opt.textContent = th;
                    selectTahun.appendChild(opt);
                });
            }

            halamanProposalSaatIni = 1;
            tampilkanDataProposalKeTabel();
        })
        .catch(err => {
            console.error("Gagal memuat arsip data proposal:", err);
            const tbody = document.getElementById('data-tabel-proposal');
            if (tbody) {
                tbody.innerHTML = `<tr><td colspan="4" style="text-align: center; padding: 20px; color: #d32f2f;"><i class="fa-solid fa-triangle-exclamation"></i> Gagal memuat data proposal.</td></tr>`;
            }
        });
}

function tampilkanDataProposalKeTabel() {
    const tbody = document.getElementById('data-tabel-proposal');
    if (!tbody) return;
    
    tbody.innerHTML = '';

    if (dataProposalTersaring.length === 0) {
        tbody.innerHTML = `<tr><td colspan="4" style="text-align: center; padding: 20px; color: #777;">Tidak ada berkas arsip proposal yang cocok.</td></tr>`;
        perbaruiTombolNavigasiProposal(0);
        return;
    }

    const indeksAwal = (halamanProposalSaatIni - 1) * BARIS_PROPOSAL_PER_HALAMAN;
    const indeksAkhir = indeksAwal + BARIS_PROPOSAL_PER_HALAMAN;
    const dataHalamanAktif = dataProposalTersaring.slice(indeksAwal, indeksAkhir);

    dataHalamanAktif.forEach(item => {
        const tr = document.createElement('tr');
        
        let warnaBadge = '#0288D1'; 
        if(item.kategori.toLowerCase().includes('bantuan') || item.kategori.toLowerCase().includes('dana')) {
            warnaBadge = '#388E3C'; 
        } else if(item.kategori.toLowerCase().includes('kegiatan') || item.kategori.toLowerCase().includes('acara')) {
            warnaBadge = '#F57C00'; 
        }

        let tombolAksi = item.urlDrive ? `
            <button class="btn-cetak-mutasi" onclick="bukaProposalViewer('${item.urlDrive}')" style="height: 34px; padding: 0 12px; font-size: 12px;">
                <i class="fa-solid fa-eye"></i> Lihat PDF
            </button>
        ` : `<span style="font-size:11px; color:#999; font-style:italic;">File tidak tersedia</span>`;

        tr.innerHTML = `
            <td style="color: #666; font-size: 13px;">${item.tanggal}</td>
            <td style="font-weight: bold; color: #333;">${item.nama}</td>
            <td><span style="background-color: ${warnaBadge}; color: white; padding: 5px 12px; border-radius: 20px; font-size: 11px; font-weight: bold;">${item.kategori}</span></td>
            <td style="text-align: center;">${tombolAksi}</td>
        `;
        tbody.appendChild(tr);
    });

    perbaruiTombolNavigasiProposal(dataProposalTersaring.length);
}

function perbaruiTombolNavigasiProposal(totalData) {
    const totalHalaman = Math.ceil(totalData / BARIS_PROPOSAL_PER_HALAMAN) || 1;
    const infoHalaman = document.getElementById('info-halaman-proposal');
    if (infoHalaman) infoHalaman.textContent = `Halaman ${halamanProposalSaatIni} dari ${totalHalaman}`;

    const btnTerbaru = document.getElementById('btn-prop-terbaru'); 
    const btnSebelumnya = document.getElementById('btn-prop-sebelumnya'); 

    if (btnTerbaru) {
        btnTerbaru.style.backgroundColor = '#D32F2F'; 
        btnTerbaru.style.color = 'white';
        btnTerbaru.style.display = (halamanProposalSaatIni > 1) ? 'inline-flex' : 'none';
    }

    if (btnSebelumnya) {
        btnSebelumnya.style.backgroundColor = '#D32F2F'; 
        btnSebelumnya.style.color = 'white';
        btnSebelumnya.style.display = (halamanProposalSaatIni < totalHalaman) ? 'inline-flex' : 'none';
    }
}

window.halamanSebelumnyaProposal = function() {
    const totalHalaman = Math.ceil(dataProposalTersaring.length / BARIS_PROPOSAL_PER_HALAMAN);
    if (halamanProposalSaatIni < totalHalaman) {
        halamanProposalSaatIni++;
        tampilkanDataProposalKeTabel();
    }
}

window.halamanTerbaruProposal = function() {
    if (halamanProposalSaatIni > 1) {
        halamanProposalSaatIni--;
        tampilkanDataProposalKeTabel();
    }
}

window.terapkanFilterProposal = function() {
    const selectTahun = document.getElementById('filter-proposal-tahun');
    const inputCari = document.getElementById('input-cari-proposal');
    
    const yearSelect = selectTahun ? selectTahun.value : 'Semua';
    const searchKeyword = inputCari ? inputCari.value.toLowerCase() : '';

    dataProposalTersaring = semuaDataProposal.filter(item => {
        const cocokTahun = (yearSelect === 'Semua' || item.tahun === yearSelect);
        const cocokKataKunci = item.nama.toLowerCase().includes(searchKeyword) || 
                              item.kategori.toLowerCase().includes(searchKeyword) ||
                              item.tanggal.toLowerCase().includes(searchKeyword) ||
                              item.tahun.includes(searchKeyword);
        return cocokTahun && cocokKataKunci;
    });

    halamanProposalSaatIni = 1;
    tampilkanDataProposalKeTabel();
}

window.bukaProposalViewer = function(urlAsli) {
    const urlEmbed = konversiUrlDriveUntukEmbed(urlAsli);
    const iframe = document.getElementById('proposal-iframe');
    const btnUnduh = document.getElementById('btn-unduh-proposal');
    const panelViewer = document.getElementById('proposal-viewer-section');
    
    if (iframe) iframe.src = urlEmbed;
    if (btnUnduh) btnUnduh.href = urlAsli;
    if (panelViewer) {
        panelViewer.style.display = 'block';
        panelViewer.scrollIntoView({ behavior: 'smooth' });
    }
}

window.tutupProposalViewer = function() {
    const panelViewer = document.getElementById('proposal-viewer-section');
    const iframe = document.getElementById('proposal-iframe');
    if (panelViewer) panelViewer.style.display = 'none';
    if (iframe) iframe.src = '';
}


/* ==========================================================================
   15. MODUL KHUSUS: ARSIP DATA AGENDA SURAT REAL-TIME (BEBAS BENTROK)
   ========================================================================== */
const SPREADSHEET_ID_SURAT = '1ILm2T8ed5oJ85cU2YzTiDHnHlGgtMjVoKYmhSxFF2PQ'; 
const SHEET_NAME_SURAT = 'Form Responses 1'; 

let semuaDataSurat = [];
let dataSuratTersaring = []; 

const BARIS_SURAT_PER_HALAMAN = 5;
let halamanSuratSaatIni = 1; 

function ambilDataSuratGoogleSheets() {
    const url = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID_SURAT}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(SHEET_NAME_SURAT)}`;
    
    fetch(url)
        .then(res => res.text())
        .then(data => {
            const jsonPembersih = JSON.parse(data.substr(47).slice(0, -2));
            const barisData = jsonPembersih.table.rows;
            
            semuaDataSurat = [];
            const setTahun = new Set();

            for (let i = 1; i < barisData.length; i++) {
                const baris = barisData[i];
                
                if (baris && baris.c && baris.c[2]) {
                    const teksTanggalRaw = baris.c[1] ? String(baris.c[1].f || baris.c[1].v) : '-';
                    const teksTanggal = teksTanggalRaw.trim();
                    
                    let angkaTahun = 'Umum';
                    if (teksTanggal && teksTanggal !== '-') {
                        const pecahan = teksTanggal.split('/');
                        if (pecahan.length >= 3) {
                            angkaTahun = pecahan[2].trim(); 
                        }
                    }

                    const dataItem = {
                        tanggal: teksTanggal,
                        tahun: angkaTahun, 
                        nama: baris.c[2] ? String(baris.c[2].v) : '-',
                        kategori: (baris.c[3] && baris.c[3].v) ? String(baris.c[3].v) : 'Umum', 
                        urlDrive: baris.c[4] ? String(baris.c[4].v) : ''
                    };
                    
                    semuaDataSurat.push(dataItem);
                    if (angkaTahun && angkaTahun !== 'Umum' && !isNaN(angkaTahun)) {
                        setTahun.add(angkaTahun);
                    }
                }
            }

            semuaDataSurat.reverse();
            dataSuratTersaring = [...semuaDataSurat];

            const selectTahun = document.getElementById('filter-surat-tahun');
            if (selectTahun) {
                selectTahun.innerHTML = '<option value="Semua">Semua Tahun</option>';
                Array.from(setTahun).sort().reverse().forEach(th => {
                    const opt = document.createElement('option');
                    opt.value = th;
                    opt.textContent = th;
                    selectTahun.appendChild(opt);
                });
            }

            halamanSuratSaatIni = 1;
            tampilkanDataSuratKeTabel();
        })
        .catch(err => {
            console.error("Gagal memuat arsip data surat:", err);
            const tbody = document.getElementById('data-tabel-surat');
            if (tbody) {
                tbody.innerHTML = `<tr><td colspan="4" style="text-align: center; padding: 20px; color: #d32f2f;"><i class="fa-solid fa-triangle-exclamation"></i> Gagal memuat data surat.</td></tr>`;
            }
        });
}

function tampilkanDataSuratKeTabel() {
    const tbody = document.getElementById('data-tabel-surat');
    if (!tbody) return;
    
    tbody.innerHTML = '';

    if (dataSuratTersaring.length === 0) {
        tbody.innerHTML = `<tr><td colspan="4" style="text-align: center; padding: 20px; color: #777;">Tidak ada log data surat yang ditemukan.</td></tr>`;
        perbaruiTombolNavigasiSurat(0);
        return;
    }

    const indeksAwal = (halamanSuratSaatIni - 1) * BARIS_SURAT_PER_HALAMAN;
    const indeksAkhir = indeksAwal + BARIS_SURAT_PER_HALAMAN;
    const dataHalamanAktif = dataSuratTersaring.slice(indeksAwal, indeksAkhir);

    dataHalamanAktif.forEach(item => {
        const tr = document.createElement('tr');
        
        let warnaBadge = '#0288D1'; 
        if(item.kategori.toLowerCase().includes('masuk') || item.kategori.toLowerCase().includes('in')) {
            warnaBadge = '#388E3C'; 
        } else if(item.kategori.toLowerCase().includes('keluar') || item.kategori.toLowerCase().includes('out')) {
            warnaBadge = '#D32F2F'; 
        }

        let tombolAksi = item.urlDrive ? `
            <button class="btn-cetak-mutasi" onclick="bukaSuratViewer('${item.urlDrive}')" style="height: 34px; padding: 0 12px; font-size: 12px;">
                <i class="fa-solid fa-eye"></i> Lihat PDF
            </button>
        ` : `<span style="font-size:11px; color:#999; font-style:italic;">File tidak tersedia</span>`;

        tr.innerHTML = `
            <td style="color: #666; font-size: 13px;">${item.tanggal}</td>
            <td style="font-weight: bold; color: #333;">${item.nama}</td>
            <td><span style="background-color: ${warnaBadge}; color: white; padding: 5px 12px; border-radius: 20px; font-size: 11px; font-weight: bold;">${item.kategori}</span></td>
            <td style="text-align: center;">${tombolAksi}</td>
        `;
        tbody.appendChild(tr);
    });

    perbaruiTombolNavigasiSurat(dataSuratTersaring.length);
}

function perbaruiTombolNavigasiSurat(totalData) {
    const totalHalaman = Math.ceil(totalData / BARIS_SURAT_PER_HALAMAN) || 1;
    const infoHalaman = document.getElementById('info-halaman-surat');
    if (infoHalaman) infoHalaman.textContent = `Halaman ${halamanSuratSaatIni} dari ${totalHalaman}`;

    const btnTerbaru = document.getElementById('btn-surat-terbaru'); 
    const btnSebelumnya = document.getElementById('btn-surat-sebelumnya'); 

    if (btnTerbaru) {
        btnTerbaru.style.backgroundColor = '#D32F2F'; 
        btnTerbaru.style.color = 'white';
        btnTerbaru.style.display = (halamanSuratSaatIni > 1) ? 'inline-flex' : 'none';
    }

    if (btnSebelumnya) {
        btnSebelumnya.style.backgroundColor = '#D32F2F'; 
        btnSebelumnya.style.color = 'white';
        btnSebelumnya.style.display = (halamanSuratSaatIni < totalHalaman) ? 'inline-flex' : 'none';
    }
}

window.halamanSebelumnyaSurat = function() {
    const totalHalaman = Math.ceil(dataSuratTersaring.length / BARIS_SURAT_PER_HALAMAN);
    if (halamanSuratSaatIni < totalHalaman) {
        halamanSuratSaatIni++;
        tampilkanDataSuratKeTabel();
    }
}

window.halamanTerbaruSurat = function() {
    if (halamanSuratSaatIni > 1) {
        halamanSuratSaatIni--;
        tampilkanDataSuratKeTabel();
    }
}

window.terapkanFilterSurat = function() {
    const selectTahun = document.getElementById('filter-surat-tahun');
    const inputCari = document.getElementById('input-cari-surat');
    
    const yearSelect = selectTahun ? selectTahun.value : 'Semua';
    const searchKeyword = inputCari ? inputCari.value.toLowerCase() : '';

    dataSuratTersaring = semuaDataSurat.filter(item => {
        const cocokTahun = (yearSelect === 'Semua' || item.tahun === yearSelect);
        const cocokKataKunci = item.nama.toLowerCase().includes(searchKeyword) || 
                              item.kategori.toLowerCase().includes(searchKeyword) ||
                              item.tanggal.toLowerCase().includes(searchKeyword) ||
                              item.tahun.includes(searchKeyword);
        return cocokTahun && cocokKataKunci;
    });

    halamanSuratSaatIni = 1;
    tampilkanDataSuratKeTabel();
}

window.bukaSuratViewer = function(urlAsli) {
    const urlEmbed = konversiUrlDriveUntukEmbed(urlAsli);
    const iframe = document.getElementById('surat-iframe');
    const btnUnduh = document.getElementById('btn-unduh-surat');
    const panelViewer = document.getElementById('surat-viewer-section');
    
    if (iframe) iframe.src = urlEmbed;
    if (btnUnduh) btnUnduh.href = urlAsli;
    if (panelViewer) {
        panelViewer.style.display = 'block';
        panelViewer.scrollIntoView({ behavior: 'smooth' });
    }
}

window.tutupSuratViewer = function() {
    const panelViewer = document.getElementById('surat-viewer-section');
    const iframe = document.getElementById('surat-iframe');
    if (panelViewer) panelViewer.style.display = 'none';
    if (iframe) iframe.src = '';
}
