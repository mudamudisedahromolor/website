export const MATERI_CONTENT = {
    "simple-present": {
        title: "Simple Present",
        description: "Simple Present digunakan untuk kebiasaan, fakta umum, dan rutinitas.",

        video: {
            type: "embed",
            url: "https://www.youtube.com/embed/xxxx"
        },

        formula: "Subject + V1 / V1(s/es)",

        notes: [
            "Gunakan V1 biasa untuk I, You, We, They.",
            "Tambahkan s/es untuk He, She, It.",
            "Biasanya memakai keterangan waktu seperti every day, always, usually."
        ],

        patterns: [
    {
        group: "Verbal",
        items: [
            {
                label: "Positive",
                formula: "Subject + V1 / V1(s/es)",
                examples: ["I study English.", "She studies English."]
            },
            {
                label: "Negative",
                formula: "Subject + do/does + not + V1",
                examples: ["I do not study English.", "She does not study English."]
            },
            {
                label: "Question",
                formula: "Do/Does + Subject + V1?",
                examples: ["Do you study English?", "Does she study English?"]
            }
        ]
    },
    {
        group: "Nominal",
        items: [
            {
                label: "Positive",
                formula: "Subject + am/is/are + Complement",
                examples: ["I am a student.", "She is happy."]
            },
            {
                label: "Negative",
                formula: "Subject + am/is/are + not + Complement",
                examples: ["I am not a student.", "She is not happy."]
            },
            {
                label: "Question",
                formula: "Am/Is/Are + Subject + Complement?",
                examples: ["Are you a student?", "Is she happy?"]
            }
        ]
    }
],

quiz: [
    {
        type: "Verbal",
        question: "She ___ English every day.",
        options: ["study", "studies", "studying"],
        answer: "studies",
        explanation: "Karena subject-nya She, verb Simple Present ditambah s/es."
    },
    {
        type: "Verbal",
        question: "She ___ not study English.",
        options: ["is", "do", "does"],
        answer: "does",
        explanation: "Untuk subject She, kalimat negatif Simple Present memakai does not + V1."
    },
    {
        type: "Verbal",
        question: "___ she study English?",
        options: ["Is", "Do", "Does"],
        answer: "Does",
        explanation: "Untuk pertanyaan dengan subject She, gunakan Does + subject + V1."
    },

    {
        type: "Nominal",
        question: "She ___ happy.",
        options: ["is", "am", "are"],
        answer: "is",
        explanation: "Untuk subject She, kalimat nominal Simple Present memakai is."
    },
    {
        type: "Nominal",
        question: "They ___ students.",
        options: ["is", "am", "are"],
        answer: "are",
        explanation: "Untuk subject They, kalimat nominal Simple Present memakai are."
    },
    {
        type: "Nominal",
        question: "___ he a teacher?",
        options: ["Is", "am", "Are"],
        answer: "Is",
        explanation: "Untuk pertanyaan nominal dengan subject He, gunakan Is + subject + complement."
    }
]
    }
};