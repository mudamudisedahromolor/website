import { MATERI_BAB_CONFIG } from "./materiBabConfig.js";

export function renderMenuMateriDinamis() {
    const materiBody = document.getElementById("materi-body");
    if (!materiBody) return;

    materiBody.innerHTML = `
        <div class="mms-materi-page">
            <div class="mms-materi-header">
                <button class="mms-materi-back-mini" onclick="kembaliKeDashboard()">
                    <i class="fa-solid fa-arrow-left"></i>
                </button>

                <div>
                    <h2>Ruang Belajar Mandiri</h2>
                    <p>Pilih BAB materi Bahasa Inggris yang ingin dipelajari</p>
                </div>
            </div>

            <div id="mms-materi-dynamic-menu"></div>

            <button class="materi-body-back-btn" onclick="kembaliKeDashboard()">
                <i class="fa-solid fa-arrow-left"></i>
                Kembali ke Dashboard
            </button>
        </div>
    `;

    const target = document.getElementById("mms-materi-dynamic-menu");

    target.innerHTML = MATERI_BAB_CONFIG.map(bab => `
        <div class="mms-learning-card">
            <div class="mms-learning-header" onclick="toggleBabMateri('${bab.id}')">
                <div class="mms-learning-icon" style="background:${bab.color}20; color:${bab.color};">
                    <i class="fa-solid ${bab.icon}"></i>
                </div>

                <div class="mms-learning-info">
                    <div class="mms-learning-title">
                        ${bab.title}
                    </div>

                    <div class="mms-learning-subtitle">
                        ${bab.level} • ${(bab.items || []).length} Materi
                    </div>
                </div>

                <i class="fa-solid fa-chevron-down" style="color:#94a3b8;"></i>
            </div>

            <div id="content-${bab.id}" class="mms-bab-content" style="display:none;">
               ${(bab.items || []).map(item => {
    const label = typeof item === "string" ? item : item.label;
    const id = typeof item === "string" ? item : item.id;

    return `
        <button class="mms-materi-item" onclick="bukaDetailMateriDinamis('${id}', '${label}')">
            ${label}
        </button>
    `;
}).join("")}
            
            </div>
        </div>
    `).join("");
}

window.renderMenuMateriDinamis = renderMenuMateriDinamis;

window.bukaMateriMenu = function () {
    const dashboard = document.getElementById("dashboard-menu");
    const materiBody = document.getElementById("materi-body");

    if (dashboard) dashboard.style.display = "none";
    if (materiBody) materiBody.style.display = "block";

    renderMenuMateriDinamis();
};

window.kembaliKeDashboard = function () {
    const dashboard = document.getElementById("dashboard-menu");
    const materiBody = document.getElementById("materi-body");

    if (materiBody) materiBody.style.display = "none";
    if (dashboard) dashboard.style.display = "block";
};


window.toggleBabMateri = function (babId) {
    document.querySelectorAll(".mms-bab-content").forEach(el => {
        if (el.id !== `content-${babId}`) {
            el.style.display = "none";
        }
    });

    const target = document.getElementById(`content-${babId}`);
    if (!target) return;

    target.style.display = target.style.display === "grid" ? "none" : "grid";
};

window.bukaDetailMateriDinamis = function (idMateri, judulMateri) {
    const materiBody = document.getElementById("materi-body");
    if (!materiBody) return;

    materiBody.innerHTML = `
        <div class="mms-materi-page">
            <div class="mms-materi-header">
                <button class="mms-materi-back-mini" onclick="renderMenuMateriDinamis()">
                    <i class="fa-solid fa-arrow-left"></i>
                </button>

                <div>
                    <h2>${judulMateri}</h2>
                    <p>ID Materi: ${idMateri}</p>
                </div>
            </div>

            <div class="mms-materi-detail-card">
                <h3>${judulMateri}</h3>
                <p>Konten materi akan disambungkan ke data asli.</p>
            </div>
        </div>
    `;
};