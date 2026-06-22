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

    const progress = JSON.parse(localStorage.getItem(`mms_materi_quiz_${id}`) || "null");

return `
    <button class="mms-materi-item" onclick="bukaDetailMateriDinamis('${encodeURIComponent(id)}', '${encodeURIComponent(label)}')">
        <span>${label}</span>

        ${progress ? `
            <span class="mms-item-progress">
                <i class="fa-solid fa-circle-check"></i>
                ${progress.percent}%
            </span>
        ` : ""}
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

window.togglePatternGroup = function (groupIndex) {
    document.querySelectorAll(".mms-pattern-group-content").forEach((el, i) => {
        el.style.display = i === groupIndex && el.style.display === "none" ? "block" : "none";
    });

    document.querySelectorAll(".mms-pattern-group-chip").forEach((chip, i) => {
        const groupEl = document.getElementById(`pattern-group-${i}`);
        const aktif = groupEl && groupEl.style.display === "block";

        chip.classList.toggle("mms-pattern-group-active", aktif);
    });

    document.querySelectorAll(".mms-pattern-detail-card").forEach(el => {
        el.style.display = "none";
    });

    document.querySelectorAll(".mms-pattern-chip").forEach(chip => {
        chip.classList.remove("mms-pattern-chip-active");
    });
};

window.togglePatternDetail = function (groupIndex, itemIndex) {
    document.querySelectorAll(".mms-pattern-detail-card").forEach(el => {
        el.style.display = "none";
    });

    document.querySelectorAll(".mms-pattern-chip").forEach(chip => {
        chip.classList.remove("mms-pattern-chip-active");
    });

    const detail = document.getElementById(`pattern-detail-${groupIndex}-${itemIndex}`);
    if (detail) detail.style.display = "block";

    const group = document.getElementById(`pattern-group-${groupIndex}`);
    const chips = group.querySelectorAll(".mms-pattern-chip");
    if (chips[itemIndex]) chips[itemIndex].classList.add("mms-pattern-chip-active");
};


window.kembaliKeDashboard = function () {
    const dashboard = document.getElementById("dashboard-menu");
    const materiBody = document.getElementById("materi-body");

    if (materiBody) materiBody.style.display = "none";
    if (dashboard) dashboard.style.display = "block";
};


window.bukaDetailMateriDinamis = function (idMateri, judulMateri) {

    idMateri = decodeURIComponent(idMateri);

    judulMateri = decodeURIComponent(judulMateri);

    window.mmsMateriAktifId = idMateri;

    const materiBody = document.getElementById("materi-body");

    if (!materiBody) return;

    const materi = MATERI_CONTENT[idMateri];

materiBody.innerHTML = `
    <div class="mms-detail-loading">
        <i class="fa-solid fa-spinner"></i>
        <span>Membuka materi...</span>
    </div>
`;

setTimeout(() => {
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

                ${materi?.video?.url ? `
                    <div class="mms-video-trigger" onclick="bukaVideoMateri('${encodeURIComponent(materi.video.url)}', '${materi.video.type}')">
                        <i class="fa-solid fa-circle-play"></i>
                        <div class="mms-video-trigger-text">
                            <strong>Video Penjelasan</strong>
                            <span>Klik untuk membuka video materi</span>
                        </div>
                    </div>
                ` : ""}

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

                        <div class="mms-pattern-group-row">
                            ${materi.patterns.map((group, groupIndex) => `
                                <button class="mms-pattern-group-chip" onclick="togglePatternGroup(${groupIndex})">
                                    <i class="fa-solid ${group.group === "Verbal" ? "fa-pen" : "fa-user"}"></i>
                                    ${group.group}
                                </button>
                            `).join("")}
                        </div>

                        ${materi.patterns.map((group, groupIndex) => `
                            <div id="pattern-group-${groupIndex}" class="mms-pattern-group-content" style="display:none;">
                                <div class="mms-pattern-chip-row">
                                    ${(group.items || []).map((item, itemIndex) => `
                                        <button class="mms-pattern-chip" onclick="togglePatternDetail(${groupIndex}, ${itemIndex})">
                                            ${item.label}
                                        </button>
                                    `).join("")}
                                </div>

                                ${(group.items || []).map((item, itemIndex) => `
                                    <div id="pattern-detail-${groupIndex}-${itemIndex}" class="mms-pattern-detail-card" style="display:none;">
                                        <div class="mms-pattern-label">${item.label}</div>
                                        <div class="mms-pattern-formula">${item.formula}</div>

                                        ${item.examples?.length ? `
                                            <div class="mms-pattern-examples">
                                                <h5>Contoh Kalimat</h5>
                                                ${item.examples.map(sentence => `
                                                    <div class="mms-example-item">
                                                        <span>${sentence}</span>
                                                    </div>
                                                `).join("")}
                                            </div>
                                        ` : ""}
                                    </div>
                                `).join("")}
                            </div>
                        `).join("")}
                    </div>
                ` : ""}

                ${materi?.quiz?.length ? `
                    <div class="mms-mini-quiz">
                        <div class="mms-mini-quiz-head" onclick="toggleMiniQuiz()">
                            <div>
                                <h4>Mini Quiz</h4>
                                <p>Uji pemahaman singkat sebelum lanjut materi.</p>
                            </div>
                            <i class="fa-solid fa-chevron-down"></i>
                        </div>


<div class="mms-quiz-progress-wrap">
    <div class="mms-quiz-progress-info">
        <span>Progress Quiz</span>
        <strong id="mms-quiz-progress-text">0/${materi.quiz.length}</strong>
    </div>

    <div class="mms-quiz-progress-bar">
        <div id="mms-quiz-progress-fill"></div>
    </div>
</div>


                        <div id="mms-mini-quiz-content" class="mms-mini-quiz-content" style="display:none;">
                            ${materi.quiz.map((q, index) => `
                                <div class="mms-quiz-card">
                                    <div class="mms-quiz-type">
                                        <i class="fa-solid ${q.type === "Verbal" ? "fa-pen" : "fa-user"}"></i>
                                        ${q.type}
                                    </div>

                                    <div class="mms-quiz-question">
                                        <div class="mms-quiz-number">${index + 1}</div>
                                        <span>${q.question}</span>
                                    </div>

                                    <div class="mms-quiz-options">
                                        ${q.options.map(opt => `
                                            <button onclick="cekMiniQuiz(this, '${opt}', '${q.answer}', '${q.explanation}')">
                                                ${opt}
                                            </button>
                                        `).join("")}
                                    </div>

                                    <div class="mms-quiz-explanation" style="display:none;"></div>
                                </div>
                            `).join("")}

                            <div id="mms-mini-quiz-score" class="mms-mini-quiz-score" style="display:none;"></div>
                        </div>
                    </div>
                ` : ""}
            </div>
        </div>
    `;
}, 180);
            
};

window.toggleBabMateri = function (babId) {
    document.querySelectorAll(".mms-bab-content").forEach(el => {
        if (el.id !== `content-${babId}`) {
            el.style.display = "none";
        }
    });

    document.querySelectorAll(".mms-learning-card").forEach(card => {
        card.classList.remove("mms-learning-active");
    });

    const target = document.getElementById(`content-${babId}`);
    if (!target) return;

    const isOpen = target.style.display === "grid";
    target.style.display = isOpen ? "none" : "grid";

    if (!isOpen) {
        target.closest(".mms-learning-card")?.classList.add("mms-learning-active");
    }
};



window.bukaVideoMateri = function (url, type) {
    url = decodeURIComponent(url);

    const popup = document.createElement("div");
    popup.className = "mms-video-popup";
    popup.innerHTML = `
        <div class="mms-video-popup-card">
            <button class="mms-video-close" onclick="this.closest('.mms-video-popup').remove()">
                <i class="fa-solid fa-xmark"></i>
            </button>

            ${type === "embed" ? `
                <iframe src="${url}" allowfullscreen></iframe>
            ` : `
                <video controls autoplay>
                    <source src="${url}">
                </video>
            `}
        </div>
    `;

    document.body.appendChild(popup);
};

window.toggleMiniQuiz = function () {
    const el = document.getElementById("mms-mini-quiz-content");
    if (!el) return;

    const isOpen = el.style.display === "block";
    el.style.display = isOpen ? "none" : "block";

    if (!isOpen) {
        setTimeout(() => {
            const firstCard = el.querySelector(".mms-quiz-card");

            if (firstCard) {
                firstCard.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
            }
        }, 180);
    }
};

window.cekMiniQuiz = function (btn, pilihan, jawaban, explanation) {
    const card = btn.closest(".mms-quiz-card");
    const parent = btn.closest(".mms-quiz-options");
    const explainBox = card.querySelector(".mms-quiz-explanation");

    parent.querySelectorAll("button").forEach(b => {
        b.disabled = true;

        if (b.textContent.trim() === jawaban) {
            b.classList.add("mms-quiz-correct");
        }
    });

    if (pilihan !== jawaban) {
    btn.classList.add("mms-quiz-wrong");
    explainBox.className = "mms-quiz-explanation mms-quiz-explanation-wrong";
    explainBox.innerHTML = `<strong>Belum tepat.</strong><span>${explanation}</span>`;
} else {
    explainBox.className = "mms-quiz-explanation mms-quiz-explanation-correct";
    explainBox.innerHTML = `<strong>Benar.</strong><span>${explanation}</span>`;
}

    explainBox.style.display = "block";
    card.classList.add("mms-quiz-answered");

if (pilihan === jawaban) {
    card.classList.add("mms-quiz-correct-card");
}

updateMiniQuizProgress();
updateMiniQuizScore();
simpanProgressMateriQuiz();


const nextCard = card.nextElementSibling;
const scoreBox = document.getElementById("mms-mini-quiz-score");

if (nextCard && nextCard.classList.contains("mms-quiz-card")) {
    setTimeout(() => {
        nextCard.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }, 350);
} else if (scoreBox && scoreBox.style.display === "block") {
    setTimeout(() => {
        scoreBox.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }, 50);
}

};


window.updateMiniQuizScore = function () {
    const cards = document.querySelectorAll(".mms-quiz-card");
    const answered = document.querySelectorAll(".mms-quiz-card.mms-quiz-answered");
    const correct = document.querySelectorAll(".mms-quiz-card.mms-quiz-correct-card");
    const scoreBox = document.getElementById("mms-mini-quiz-score");

    if (!scoreBox || answered.length !== cards.length) return;

    const score = correct.length;
    const total = cards.length;
    const percent = score / total;

    let badge = "Keep Learning";
    let icon = "fa-book-open";
    let message = "Pelajari lagi bagian pola kalimat di atas.";

    if (percent === 1) {
        badge = "Excellent";
        icon = "fa-trophy";
        message = "Mantap, semua benar.";
    } else if (percent >= 0.7) {
        badge = "Good Job";
        icon = "fa-medal";
        message = "Bagus, tinggal sedikit lagi.";
    }

    scoreBox.style.display = "block";
    scoreBox.innerHTML = `
        <div class="mms-score-badge">
            <i class="fa-solid ${icon}"></i>
            ${badge}
        </div>

        <div class="mms-score-title">Hasil Quiz</div>
        <div class="mms-score-number">${score}/${total}</div>
        <div class="mms-score-message">${message}</div>

        <button class="mms-reset-quiz-btn" onclick="resetMiniQuiz()">
            <i class="fa-solid fa-rotate-right"></i>
            Ulangi Quiz
        </button>

        <button class="mms-next-materi-btn" onclick="bukaMateriBerikutnya(window.mmsMateriAktifId)">
            <i class="fa-solid fa-arrow-right"></i>
            Lanjut Materi Berikutnya
        </button>
    `;
    if (percent === 1) {
    tampilkanQuizConfetti(3);
}
};

window.resetMiniQuiz = function () {
    document.querySelectorAll(".mms-quiz-card").forEach(card => {
        card.classList.remove("mms-quiz-answered", "mms-quiz-correct-card");

        card.querySelectorAll(".mms-quiz-options button").forEach(btn => {
            btn.disabled = false;
            btn.classList.remove("mms-quiz-correct", "mms-quiz-wrong");
        });

        const explainBox = card.querySelector(".mms-quiz-explanation");
        if (explainBox) {
            explainBox.style.display = "none";
            explainBox.innerHTML = "";
            explainBox.className = "mms-quiz-explanation";
        }
    });

    const scoreBox = document.getElementById("mms-mini-quiz-score");
if (scoreBox) {
    scoreBox.style.display = "none";
    scoreBox.innerHTML = "";
}

updateMiniQuizProgress();

const firstCard = document.querySelector(".mms-quiz-card");
if (firstCard) {
    setTimeout(() => {
        firstCard.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }, 120);
}
};

window.bukaMateriBerikutnya = function (idMateriSekarang) {
    const semuaMateri = MATERI_BAB_CONFIG.flatMap(bab => bab.items || []);
    const indexSekarang = semuaMateri.findIndex(item => item.id === idMateriSekarang);

    if (indexSekarang === -1) {
        renderMenuMateriDinamis();
        return;
    }

    const materiBerikutnya = semuaMateri[indexSekarang + 1];

    if (!materiBerikutnya) {
        renderMenuMateriDinamis();
        return;
    }

    bukaDetailMateriDinamis(
        encodeURIComponent(materiBerikutnya.id),
        encodeURIComponent(materiBerikutnya.label)
    );
};

window.updateMiniQuizProgress = function () {
    const total = document.querySelectorAll(".mms-quiz-card").length;
    const answered = document.querySelectorAll(".mms-quiz-card.mms-quiz-answered").length;

    const text = document.getElementById("mms-quiz-progress-text");
    const fill = document.getElementById("mms-quiz-progress-fill");

    if (text) text.textContent = `${answered}/${total}`;
    if (fill) fill.style.width = total ? `${(answered / total) * 100}%` : "0%";
};

window.tampilkanQuizConfetti = function (repeat = 1) {
    let count = 0;

    const run = () => {
        const scoreBox = document.getElementById("mms-mini-quiz-score");
        if (!scoreBox) return;

        const box = document.createElement("div");
        box.className = "mms-confetti-box";

        box.innerHTML = Array.from({ length: 22 }).map(() => `
            <span style="
                --x:${Math.random() * 260 - 130}px;
                --y:${Math.random() * -170 - 30}px;
                --r:${Math.random() * 360}deg;
                --d:${Math.random() * .25}s;
            "></span>
        `).join("");

        scoreBox.appendChild(box);
        setTimeout(() => box.remove(), 1200);

        count++;
        if (count < repeat) setTimeout(run, 350);
    };

    run();
};

window.simpanProgressMateriQuiz = function () {
    const materiId = window.mmsMateriAktifId;
    if (!materiId) return;

    const total = document.querySelectorAll(".mms-quiz-card").length;
    const answered = document.querySelectorAll(".mms-quiz-card.mms-quiz-answered").length;
    const correct = document.querySelectorAll(".mms-quiz-card.mms-quiz-correct-card").length;

    if (answered !== total) return;

    const data = {
        materiId,
        total,
        correct,
        percent: Math.round((correct / total) * 100),
        finishedAt: new Date().toISOString()
    };

    localStorage.setItem(`mms_materi_quiz_${materiId}`, JSON.stringify(data));
};