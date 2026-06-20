import { state } from '../state.js';

export function eksekusiKlikDoubleBounce(namaMenu) {
    if (namaMenu === 'materi') {
        bukaMateriMenu();
    } else if (namaMenu === 'ensiklopedia') {
        bukaEnsiklopediaMenu();
    } else {
        document.getElementById("mms-lbl-dev-title").innerText = "Modul " + namaMenu.toUpperCase();
        document.getElementById("mms-modal-dev").style.display = "flex";
    }
}

export function bukaMateriMenu() {
    document.getElementById("dashboard-menu").style.display = "none";
    document.getElementById("materi-body").style.display = "block";
    document.getElementById("materi-pembahasan-box").style.display = "none";
}

export function bukaEnsiklopediaMenu() {
    let modal = document.getElementById("mms-modal-ensiklopedia");

    if (!modal) {
        modal = document.createElement("div");
        modal.id = "mms-modal-ensiklopedia";
        modal.style.cssText = "position:fixed; inset:0; background:rgba(15,23,42,0.55); backdrop-filter:blur(6px); z-index:9999; display:none; align-items:center; justify-content:center; padding:22px; box-sizing:border-box;";
        modal.innerHTML = `
            <div style="width:min(520px, 100%); background:#ffffff; border-radius:22px; padding:24px; box-shadow:0 18px 45px rgba(15,23,42,0.28); box-sizing:border-box; position:relative;">
                <button onclick="tutupEnsiklopediaMenu()" style="position:absolute; top:16px; right:16px; width:42px; height:42px; border:none; border-radius:50%; background:#f1f5f9; color:#64748b; font-size:20px; font-weight:800; cursor:pointer; display:flex; align-items:center; justify-content:center;">
                    <i class="fa-solid fa-xmark"></i>
                </button>
                <div style="display:flex; align-items:center; gap:12px; margin-bottom:18px; padding-right:48px;">
                    <div style="width:46px; height:46px; border-radius:14px; background:#fee2e2; color:#dc2626; display:flex; align-items:center; justify-content:center; font-size:22px;">
                        <i class="fa-solid fa-book-open"></i>
                    </div>
                    <div>
                        <div style="font-size:22px; font-weight:900; color:#0f172a; line-height:1.2;">Ensiklopedia</div>
                        <div style="font-size:13px; font-weight:700; color:#64748b; margin-top:3px;">Pilih database referensi bahasa Inggris</div>
                    </div>
                </div>

                <div style="display:grid; grid-template-columns:1fr; gap:12px;">
                    <button onclick="mmsBukaFiturEnsiklopedia('kamus')" style="width:100%; border:2px solid #bfdbfe; background:#eff6ff; color:#1d4ed8; border-radius:16px; padding:16px; cursor:pointer; text-align:left; display:flex; align-items:center; gap:14px; box-sizing:border-box;">
                        <div style="width:44px; height:44px; border-radius:12px; background:#dbeafe; display:flex; align-items:center; justify-content:center; font-size:20px; flex:0 0 auto;">
                            <i class="fa-solid fa-language"></i>
                        </div>
                        <div>
                            <div style="font-size:16px; font-weight:900; color:#0f172a;">Kamus / Vocabulary</div>
                            <div style="font-size:12.5px; font-weight:600; color:#475569; margin-top:3px;">Daftar kosakata, arti, dan referensi vocabulary.</div>
                        </div>
                    </button>

                    <button onclick="mmsBukaFiturEnsiklopedia('verb')" style="width:100%; border:2px solid #fed7aa; background:#fff7ed; color:#c2410c; border-radius:16px; padding:16px; cursor:pointer; text-align:left; display:flex; align-items:center; gap:14px; box-sizing:border-box;">
                        <div style="width:44px; height:44px; border-radius:12px; background:#ffedd5; display:flex; align-items:center; justify-content:center; font-size:20px; flex:0 0 auto;">
                            <i class="fa-solid fa-shuffle"></i>
                        </div>
                        <div>
                            <div style="font-size:16px; font-weight:900; color:#0f172a;">Bentuk Verb</div>
                            <div style="font-size:12.5px; font-weight:600; color:#475569; margin-top:3px;">Referensi Verb 1, Verb 2, Verb 3, dan arti kata kerja.</div>
                        </div>
                    </button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }

    modal.style.display = "flex";
}

export function tutupEnsiklopediaMenu() {
    let modal = document.getElementById("mms-modal-ensiklopedia");
    if (modal) modal.style.display = "none";
}

export function mmsBukaFiturEnsiklopedia(tipe) {
    tutupEnsiklopediaMenu();

    let judul = tipe === "verb" ? "BENTUK VERB" : "KAMUS / VOCABULARY";
    let modalDev = document.getElementById("mms-modal-dev");
    let labelDev = document.getElementById("mms-lbl-dev-title");

    if (labelDev) labelDev.innerText = judul;
    if (modalDev) modalDev.style.display = "flex";
}

window.toggleAccordionBox = toggleAccordionBox;
window.toggleSubLaci = toggleSubLaci;
window.toggleRumpunSmart = toggleRumpunSmart;
window.tampilkanMateriSpesifik = tampilkanMateriSpesifik;
window.tutupModalMateri = tutupModalMateri;
window.mmsToggleVideoSaja = mmsToggleVideoSaja;
window.kembaliKeDashboard = kembaliKeDashboard;
window.bukaEnsiklopediaMenu = bukaEnsiklopediaMenu;
window.tutupEnsiklopediaMenu = tutupEnsiklopediaMenu;
window.mmsBukaFiturEnsiklopedia = mmsBukaFiturEnsiklopedia;
