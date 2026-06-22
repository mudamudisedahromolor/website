import { MATERI_BAB_CONFIG } from "./materiBabConfig.js";
import { MATERI_CONTENT } from "../materi/materiContentConfig.js";

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
        <button class="mms-materi-item" onclick="bukaDetailMateriDinamis('${encodeURIComponent(id)}', '${encodeURIComponent(label)}')">
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

window.togglePatternDetail = function (index) {
    document.querySelectorAll(".mms-pattern-detail-card").forEach((el, i) => {
        el.style.display = i === index && el.style.display === "none" ? "block" : "none";
    });
};

window.kembaliKeDashboard = function () {
    const dashboard = document.getElementById("dashboard-menu");
    const materiBody = document.getElementById("materi-body");

    if (materiBody) materiBody.style.display = "none";
    if (dashboard) dashboard.style.display = "block";
};


window.bukaDetailMateriDinamis = function (idMateri, judulMateri) {
    const materiBody = document.getElementById("materi-body");
    if (!materiBody) return;

    const materi = MATERI_CONTENT[idMateri];

    materiBody.innerHTML = `
        <div class="mms-materi-page">
            <div class="mms-materi-header">
                <button class="mms-materi-back-mini" onclick="renderMenuMateriDinamis()">
                    <i class="fa-solid fa-arrow-left"></i>
                </button>

                <div>
                    <h2>${materi?.title || judulMateri}</h2>
                    <p>ID Materi: ${idMateri}</p>
                </div>
            </div>

            <div class="mms-materi-detail-card">
                <h3>${materi?.title || judulMateri}</h3>
                <p>${materi?.description || "Konten materi belum tersedia."}</p>

                ${materi?.formula ? `
                    <div class="mms-formula-box">
                        ${materi.formula}
                    </div>
                ` : ""}


${materi?.notes?.length ? `
    <div class="mms-notes-box">
        <h4>Catatan Penting</h4>
        ${materi.notes.map(note => `
            <div class="mms-note-item">
                <i class="fa-solid fa-circle-check"></i>
                <span>${note}</span>
            </div>
        `).join("")}
    </div>
` : ""}

${materi?.patterns?.length ? `
    <div class="mms-pattern-section">
        <h4>Pola Kalimat</h4>

        <div class="mms-pattern-chip-row">
            ${materi.patterns.map((item, index) => `
                <button class="mms-pattern-chip" onclick="togglePatternDetail(${index})">
                    ${item.label}
                </button>
            `).join("")}
        </div>

        ${materi.patterns.map((item, index) => `
            <div id="pattern-detail-${index}" class="mms-pattern-detail-card" style="display:none;">
                <div class="mms-pattern-label">${item.label}</div>
                <div class="mms-pattern-formula">${item.formula}</div>
                <div class="mms-pattern-example">${item.example}</div>
            </div>
        `).join("")}
    </div>
` : ""}



               ${materi?.examples?.length ? `
    <div class="mms-example-box">
        <h4>Contoh Kalimat</h4>

        ${materi.examples.map((contoh, index) => {
            const english = typeof contoh === "string" ? contoh : contoh.english;
            const indonesia = typeof contoh === "string" ? "" : contoh.indonesia;
            const audio = typeof contoh === "string" ? "" : contoh.audio;
            const breakdown = typeof contoh === "string" ? [] : (contoh.breakdown || []);

            return `
                <div class="mms-example-item" onclick="toggleExampleDetail(${index})">
                    ${english}
                </div>

                <div id="example-detail-${index}" class="mms-example-detail" style="display:none;">
                    ${indonesia ? `<div class="mms-example-translation">${indonesia}</div>` : ""}

                    ${audio ? `
                        <audio controls style="width:100%; margin-top:10px;">
                            <source src="${audio}">
                        </audio>
                    ` : ""}

                    ${breakdown.length ? `
                        <div class="mms-breakdown-list">
                            ${breakdown.map(part => `
                                <div class="mms-breakdown-item">
                                    <strong>${part.label}</strong>
                                    <span>${part.value}</span>
                                </div>
                            `).join("")}
                        </div>
                    ` : ""}
                </div>
            `;
        }).join("")}
    </div>
` : ""}
            </div>
        </div>
    `;
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

window.toggleExampleDetail = function (index) {
    const el = document.getElementById(`example-detail-${index}`);
    if (!el) return;

    el.style.display = el.style.display === "none" ? "block" : "none";
};