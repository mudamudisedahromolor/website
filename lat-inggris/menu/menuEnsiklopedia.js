// menuEnsiklopedia.js

/**
 * 🛠️ FUNGSI 1: MENGATUR NAVIGASI PERPINDAHAN TAB (KAMUS VS VERBS)
 */
export function switchEncyclopediaTab(targetTab) {
    const tabDictionary = document.getElementById("btn-tab-dictionary");
    const tabVerbs = document.getElementById("btn-tab-verbs");
    const panelDictionary = document.getElementById("panel-encyclopedia-dictionary");
    const panelVerbs = document.getElementById("panel-encyclopedia-verbs");
    const searchInput = document.getElementById("mms-encyclopedia-search");

    // Reset kolom pencarian saat berpindah menu agar tidak bingung
    if (searchInput) searchInput.value = "";

    if (targetTab === "dictionary") {
        tabDictionary.classList.add("active");
        tabVerbs.classList.remove("active");
        panelDictionary.style.display = "block";
        panelVerbs.style.display = "none";
        if (searchInput) searchInput.placeholder = "Cari kata benda, sifat, adverb, atau arti kosakata...";
    } else if (targetTab === "verbs") {
        tabVerbs.classList.add("active");
        tabDictionary.classList.remove("active");
        panelVerbs.style.display = "block";
        panelDictionary.style.display = "none";
        if (searchInput) searchInput.placeholder = "Cari berdasarkan bentuk V1, V2, V3, V-ing, atau arti kata kerja...";
    }
    
    // Kembalikan semua baris ke mode muncul setelah tab direset
    const semuaBaris = document.querySelectorAll(".searchable-row");
    semuaBaris.forEach(row => row.style.display = "");
}

/**
 * 🛠️ FUNGSI 2: LIVE FILTER SEARCH - MENCARI DATA SECARA INSTAN
 */
export function filterEncyclopediaData() {
    const input = document.getElementById("mms-encyclopedia-search");
    const filter = input.value.toLowerCase().trim();
    
    // Tentukan panel mana yang saat ini sedang aktif dibuka oleh user
    const panelDictionary = document.getElementById("panel-encyclopedia-dictionary");
    const targetPanelId = (panelDictionary && panelDictionary.style.display === "block") 
        ? "panel-encyclopedia-dictionary" 
        : "panel-encyclopedia-verbs";

    // Ambil baris data hanya pada panel yang sedang aktif dibuka
    const rows = document.querySelectorAll(`#${targetPanelId} .searchable-row`);

    rows.forEach(row => {
        const textContent = row.textContent.toLowerCase();
        // Cocokkan dengan input pencarian user
        if (textContent.includes(filter)) {
            row.style.display = ""; // Cocok -> Tampilkan
        } else {
            row.style.display = "none"; // Tidak cocok -> Sembunyikan
        }
    });
}
