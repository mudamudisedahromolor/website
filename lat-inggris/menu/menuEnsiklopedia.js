// menuEnsiklopedia.js

/**
 * 📚 FUNGSI 1: MEMUAT DATA ENSIKLOPEDIA LANGSUNG DARI GOOGLE SHEETS
 * Silakan panggil fungsi ini saat inisialisasi halaman ensiklopedia dibuka.
 */
export async function loadEncyclopediaFromSheets(urlSpreadsheet) {
    try {
        const response = await fetch(urlSpreadsheet);
        const jsonText = await response.text();
        
        // Membersihkan data JSON Google Sheets API standard
        const rawData = JSON.parse(jsonText.substring(47, jsonText.length - 2));
        const rows = rawData.table.rows;

        const tbodyDictionary = document.getElementById("tbody-dictionary-data");
        const tbodyVerbs = document.getElementById("tbody-verbs-data");

        if (!tbodyDictionary || !tbodyVerbs) return;

        // Reset container tabel sebelum diisi data fresh
        tbodyDictionary.innerHTML = "";
        tbodyVerbs.innerHTML = "";

        rows.forEach(row => {
            const cells = row.c;
            
            // 📝 Mapping Jalur Tab Kamus (Vocab)
            // Asumsi Kolom: A = Word, B = Part of Speech, C = Meaning, D = Example Context
            if (cells[0] && cells[1] && cells[2]) {
                const word = cells[0].v || "";
                const pos = cells[1].v || "Noun";
                const meaning = cells[2].v || "";
                const context = cells[3] ? cells[3].v : "-";

                // Menentukan warna badge badge Part of Speech demi keindahan visual
                let badgeColor = "background: #e0f2fe; color: #0369a1;"; // Default Verb
                if (pos.toLowerCase().includes("adj")) badgeColor = "background: #fef9c3; color: #854d0e;";
                if (pos.toLowerCase().includes("noun")) badgeColor = "background: #f0fdf4; color: #166534;";
                if (pos.toLowerCase().includes("adv")) badgeColor = "background: #fae8ff; color: #86198f;";

                const trKamus = document.createElement("tr");
                trKamus.className = "searchable-row";
                trKamus.style.borderBottom = "1px solid #e2e8f0";
                trKamus.innerHTML = `
                    <td style="padding: 11px 14px; font-weight: 700; color: #0f172a;">${word}</td>
                    <td style="padding: 11px 14px;"><span style="${badgeColor} padding: 2px 6px; border-radius: 4px; font-size: 11px; font-weight: 600;">${pos}</span></td>
                    <td style="padding: 11px 14px; color: #334155;">${meaning}</td>
                    <td style="padding: 11px 14px; font-style: italic; color: #64748b;">${context}</td>
                `;
                tbodyDictionary.appendChild(trKamus);
            }

            // 👟 Mapping Jalur Tab Matriks Verb (V1, V2, V3, V-ing)
            // Asumsi Kolom: E = V1, F = V2, G = V3, H = V-ing, I = Type, J = Indonesian Meaning
            if (cells[4] && cells[5] && cells[6]) {
                const v1 = cells[4].v || "";
                const v2 = cells[5].v || "";
                const v3 = cells[6].v || "";
                const vImg = cells[7] ? cells[7].v : "";
                const type = cells[8] ? cells[8].v : "Regular";
                const arti = cells[9] ? cells[9].v : "";

                let typeBadge = type.toLowerCase().includes("irreg")
                    ? "background: #fff1f2; color: #991b1b;"
                    : "background: #f0fdf4; color: #166534;";

                const trVerb = document.createElement("tr");
                trVerb.className = "searchable-row";
                trVerb.style.borderBottom = "1px solid #e2e8f0";
                trVerb.innerHTML = `
                    <td style="padding: 11px 10px; font-weight: 700; color: #0f172a; border-right: 1px solid #f1f5f9;">${v1}</td>
                    <td style="padding: 11px 10px; color: #2563eb; font-weight: 600; border-right: 1px solid #f1f5f9;">${v2}</td>
                    <td style="padding: 11px 10px; color: #16a34a; font-weight: 600; border-right: 1px solid #f1f5f9;">${v3}</td>
                    <td style="padding: 11px 10px; color: #ea580c; font-weight: 600; border-right: 1px solid #f1f5f9;">${vImg}</td>
                    <td style="padding: 11px 10px; border-right: 1px solid #f1f5f9;"><span style="${typeBadge} padding: 2px 6px; border-radius: 4px; font-size: 11px; font-weight: 600;">${type}</span></td>
                    <td style="padding: 11px 10px; color: #64748b;">${arti}</td>
                `;
                tbodyVerbs.appendChild(trVerb);
            }
        });

    } catch (error) {
        console.error("Gagal melakukan sinkronisasi data Google Sheets Ensiklopedia:", error);
    }
}

/**
 * 🛠️ FUNGSI 2: MENGATUR NAVIGASI PERPINDAHAN TAB (KAMUS VS VERBS)
 */
export function switchEncyclopediaTab(targetTab) {
    const tabDictionary = document.getElementById("btn-tab-dictionary");
    const tabVerbs = document.getElementById("btn-tab-verbs");
    const panelDictionary = document.getElementById("panel-encyclopedia-dictionary");
    const panelVerbs = document.getElementById("panel-encyclopedia-verbs");
    const searchInput = document.getElementById("mms-encyclopedia-search");

    if (searchInput) searchInput.value = "";

    if (targetTab === "dictionary") {
        tabDictionary.classList.add("active");
        tabVerbs.classList.remove("active");
        if (panelDictionary) panelDictionary.style.display = "block";
        if (panelVerbs) panelVerbs.style.display = "none";
        if (searchInput) searchInput.placeholder = "Cari kata benda, sifat, adverb, atau arti kosakata...";
    } else if (targetTab === "verbs") {
        tabVerbs.classList.add("active");
        tabDictionary.classList.remove("active");
        if (panelVerbs) panelVerbs.style.display = "block";
        if (panelDictionary) panelDictionary.style.display = "none";
        if (searchInput) searchInput.placeholder = "Cari berdasarkan bentuk V1, V2, V3, V-ing, atau arti kata kerja...";
    }
    
    const semuaBaris = document.querySelectorAll(".searchable-row");
    semuaBaris.forEach(row => row.style.display = "");
}

/**
 * 🛠️ FUNGSI 3: LIVE FILTER SEARCH - MENCARI DATA SECARA INSTAN TANPA LAG
 */
export function filterEncyclopediaData() {
    const input = document.getElementById("mms-encyclopedia-search");
    if (!input) return;
    const filter = input.value.toLowerCase().trim();
    
    const panelDictionary = document.getElementById("panel-encyclopedia-dictionary");
    const targetPanelId = (panelDictionary && panelDictionary.style.display === "block") 
        ? "panel-encyclopedia-dictionary" 
        : "panel-encyclopedia-verbs";

    const rows = document.querySelectorAll(`#${targetPanelId} .searchable-row`);

    rows.forEach(row => {
        const textContent = row.textContent.toLowerCase();
        if (textContent.includes(filter)) {
            row.style.display = ""; 
        } else {
            row.style.display = "none"; 
        }
    });
}
