import { MATERI_BAB_CONFIG } from "./materiBabConfig.js";

export function renderMenuMateriDinamis() {
    const target = document.getElementById("mms-materi-dynamic-menu");
    if (!target) return;

    target.innerHTML = MATERI_BAB_CONFIG.map(bab => `
        <div class="mms-learning-card">
            <div class="mms-learning-header">
                <div class="mms-learning-icon" style="background:${bab.color}20; color:${bab.color};">
                    <i class="fa-solid ${bab.icon}"></i>
                </div>

                <div class="mms-learning-info">
                    <div class="mms-learning-title">
                        ${bab.title}
                    </div>

                    <div class="mms-learning-subtitle">
                        ${bab.level} • 0 Materi
                    </div>
                </div>

                <i class="fa-solid fa-chevron-down" style="color:#94a3b8;"></i>
            </div>
        </div>
    `).join("");
}

window.renderMenuMateriDinamis = renderMenuMateriDinamis;

document.addEventListener("DOMContentLoaded", () => {
    renderMenuMateriDinamis();
});