export const MATERI_CONTENT = {
    "simple-present": {
    title: "Simple Present",
    description: "Simple Present digunakan untuk kebiasaan, fakta umum, dan rutinitas.",
    formula: "Subject + V1 / V1(s/es)",
    notes: [
        "Gunakan V1 biasa untuk I, You, We, They.",
        "Tambahkan s/es untuk He, She, It.",
        "Biasanya memakai keterangan waktu seperti every day, always, usually."
    ],
   examples: [
    {
        english: "I study English every day.",
        indonesia: "Saya belajar Bahasa Inggris setiap hari.",
        audio: "",
        breakdown: [
            { label: "Subject", value: "I" },
            { label: "Verb", value: "study" },
            { label: "Time", value: "every day" }
        ]
    },
    {
        english: "She goes to school.",
        indonesia: "Dia pergi ke sekolah.",
        audio: "",
        breakdown: [
            { label: "Subject", value: "She" },
            { label: "Verb", value: "goes" },
            { label: "Object", value: "to school" }
        ]
    }
    ],
    patterns: [
    {
        label: "Positive",
        formula: "Subject + V1 / V1(s/es)",
        example: "She studies English."
    },
    {
        label: "Negative",
        formula: "Subject + do/does + not + V1",
        example: "She does not study English."
    },
    {
        label: "Question",
        formula: "Do/Does + Subject + V1?",
        example: "Does she study English?"
    }
]
}
};