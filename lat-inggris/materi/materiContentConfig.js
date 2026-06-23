


export const MATERI_CONTENT = {
    pos: {
        title: "Parts of Speech",
        description: "Parts of Speech adalah kelompok jenis kata dalam Bahasa Inggris. Setiap kata memiliki fungsi tertentu dalam kalimat, seperti menunjukkan orang/benda, aksi, sifat, keterangan, hubungan, atau penghubung.",

        formula: `
            <strong>Inti Materi:</strong><br>
            Sentence = Subject + Verb + Object/Complement/Adverb
        `,

        notes: [
            "Noun digunakan untuk menyebut orang, tempat, benda, atau ide.",
            "Pronoun digunakan untuk menggantikan noun.",
            "Verb menunjukkan aksi atau keadaan.",
            "Adjective menjelaskan noun.",
            "Adverb menjelaskan verb, adjective, atau adverb lain.",
            "Preposition menunjukkan hubungan tempat, waktu, atau arah.",
            "Conjunction menghubungkan kata, frasa, atau klausa.",
            "Interjection menunjukkan ekspresi singkat."
        ],

        patterns: [
            {
                group: "Kelas Kata Utama",
                items: [
                    {
                        label: "Noun",
                        formula: "Noun = person / place / thing / idea",
                        examples: [
                            "Rina reads a book.",
                            "Bandung is a beautiful city.",
                            "Happiness is important."
                        ]
                    },
                    {
                        label: "Pronoun",
                        formula: "Pronoun = I, you, he, she, it, we, they",
                        examples: [
                            "She is my sister.",
                            "They are students.",
                            "It is expensive."
                        ]
                    },
                    {
                        label: "Verb",
                        formula: "Verb = action / state",
                        examples: [
                            "He studies English.",
                            "They play football.",
                            "I am happy."
                        ]
                    },
                    {
                        label: "Adjective",
                        formula: "Adjective = describes noun",
                        examples: [
                            "She has a beautiful bag.",
                            "This is an easy lesson.",
                            "He is a smart student."
                        ]
                    }
                ]
            },
            {
                group: "Kelas Kata Pendukung",
                items: [
                    {
                        label: "Adverb",
                        formula: "Adverb = describes verb / adjective / adverb",
                        examples: [
                            "He runs quickly.",
                            "She is very kind.",
                            "They speak English well."
                        ]
                    },
                    {
                        label: "Preposition",
                        formula: "Preposition = in, on, at, under, beside, from, to",
                        examples: [
                            "The book is on the table.",
                            "I live in Indonesia.",
                            "She goes to school."
                        ]
                    },
                    {
                        label: "Conjunction",
                        formula: "Conjunction = and, but, because, or, so",
                        examples: [
                            "I like tea and coffee.",
                            "He is tired but happy.",
                            "She studies because she has a test."
                        ]
                    },
                    {
                        label: "Interjection",
                        formula: "Interjection = short expression",
                        examples: [
                            "Wow! That is amazing.",
                            "Oops! I made a mistake.",
                            "Hey! Listen to me."
                        ]
                    }
                ]
            }
        ],

        quiz: [
            {
                question: "Which word is a noun?",
                options: ["Run", "Beautiful", "School", "Quickly"],
                answer: "School"
            },
            {
                question: "Which word is a verb?",
                options: ["Eat", "Happy", "Table", "Blue"],
                answer: "Eat"
            },
            {
                question: "Which sentence contains an adjective?",
                options: [
                    "She runs.",
                    "He has a red car.",
                    "They eat rice.",
                    "I go home."
                ],
                answer: "He has a red car."
            },

            {
                question: "Which word is a pronoun?",
                options: ["Teacher", "Beautiful", "They", "Quickly"],
                answer: "They"
            },
            {
                question: "Which word is an adjective?",
                options: ["Blue", "Run", "School", "Slowly"],
                answer: "Blue"
            },
            {
                question: "Which word is an adverb?",
                options: ["Quickly", "Book", "Happy", "Teacher"],
                answer: "Quickly"
            },
            {
                question: "Which word is a preposition?",
                options: ["Because", "Under", "Wow", "Run"],
                answer: "Under"
            },
            {
                question: "Which word is a conjunction?",
                options: ["Beautiful", "And", "Quickly", "Table"],
                answer: "And"
            },
            {
                question: "Which word is an interjection?",
                options: ["Wow!", "Teacher", "Blue", "Run"],
                answer: "Wow!"
            },
            {
                question: "Which sentence contains a pronoun?",
                options: [
                            "The teacher is kind.",
                            "She is kind.",
                            "The book is new.",
                            "My school is big."
                        ],
                answer: "She is kind."
}
        ]
    },

    noun: {
    title: "Noun",
    description: "Noun adalah kata yang digunakan untuk menyebut orang, tempat, benda, hewan, atau ide. Dalam kalimat, noun sering berfungsi sebagai subject, object, atau complement.",

    formula: `
        <strong>Inti Materi:</strong><br>
        Noun = Person / Place / Thing / Animal / Idea
    `,

    notes: [
        "Noun dapat menjadi subject dalam kalimat.",
        "Noun dapat menjadi object setelah verb.",
        "Common noun adalah noun umum seperti student, city, school.",
        "Proper noun adalah nama khusus seperti Rina, Bandung, Indonesia.",
        "Countable noun dapat dihitung, misalnya book, chair, student.",
        "Uncountable noun tidak dihitung satuan langsung, misalnya water, rice, money.",
        "Singular noun berarti satu benda.",
        "Plural noun berarti lebih dari satu benda."
    ],

    patterns: [
        {
            group: "Fungsi Noun",
            items: [
                {
                    label: "Subject",
                    formula: "Noun + Verb + Object/Complement",
                    examples: [
                        "The student reads a book.",
                        "My father works every day.",
                        "Bandung is a beautiful city."
                    ]
                },
                {
                    label: "Object",
                    formula: "Subject + Verb + Noun",
                    examples: [
                        "She buys a bag.",
                        "They play football.",
                        "I drink water."
                    ]
                },
                {
                    label: "Complement",
                    formula: "Subject + to be + Noun",
                    examples: [
                        "He is a teacher.",
                        "She is my sister.",
                        "They are students."
                    ]
                }
            ]
        },
        {
            group: "Jenis Noun",
            items: [
                {
                    label: "Common Noun",
                    formula: "Common Noun = nama umum",
                    examples: [
                        "student",
                        "school",
                        "city"
                    ]
                },
                {
                    label: "Proper Noun",
                    formula: "Proper Noun = nama khusus",
                    examples: [
                        "Rina",
                        "Jakarta",
                        "Indonesia"
                    ]
                },
                {
                    label: "Countable Noun",
                    formula: "Countable Noun = bisa dihitung",
                    examples: [
                        "one book",
                        "two chairs",
                        "three students"
                    ]
                },
                {
                    label: "Uncountable Noun",
                    formula: "Uncountable Noun = tidak dihitung satuan langsung",
                    examples: [
                        "water",
                        "rice",
                        "money"
                    ]
                }
            ]
        },
        {
            group: "Jumlah Noun",
            items: [
                {
                    label: "Singular",
                    formula: "Singular Noun = satu",
                    examples: [
                        "one book",
                        "a student",
                        "an apple"
                    ]
                },
                {
                    label: "Plural",
                    formula: "Plural Noun = lebih dari satu",
                    examples: [
                        "two books",
                        "many students",
                        "three apples"
                    ]
                }
            ]
        }
    ],

    quiz: [
        {
            type: "Function",
            question: "What is the noun in this sentence: 'The student reads a book'?",
            options: ["Reads", "Student", "The", "A"],
            answer: "Student",
            explanation: "Student adalah noun karena menyebut orang."
        },
        {
            type: "Function",
            question: "What is the object noun in this sentence: 'She buys a bag'?",
            options: ["She", "Buys", "Bag", "A"],
            answer: "Bag",
            explanation: "Bag adalah object noun karena menjadi benda yang dibeli."
        },
        {
            type: "Type",
            question: "Which one is a proper noun?",
            options: ["city", "teacher", "Jakarta", "school"],
            answer: "Jakarta",
            explanation: "Jakarta adalah proper noun karena nama khusus tempat."
        },
        {
            type: "Type",
            question: "Which one is a common noun?",
            options: ["Indonesia", "Rina", "student", "Bandung"],
            answer: "student",
            explanation: "Student adalah common noun karena nama umum."
        },
        {
            type: "Count",
            question: "Which noun is countable?",
            options: ["water", "rice", "book", "money"],
            answer: "book",
            explanation: "Book bisa dihitung: one book, two books."
        },
        {
            type: "Count",
            question: "Which noun is uncountable?",
            options: ["chair", "student", "water", "apple"],
            answer: "water",
            explanation: "Water tidak dihitung langsung sebagai one water, two waters dalam penggunaan umum."
        },
        {
            type: "Number",
            question: "Choose the plural form of 'book'.",
            options: ["book", "books", "bookes", "bookies"],
            answer: "books",
            explanation: "Plural regular noun biasanya ditambah -s."
        },
        {
            type: "Number",
            question: "Choose the plural form of 'child'.",
            options: ["childs", "childes", "children", "childrens"],
            answer: "children",
            explanation: "Child memiliki bentuk plural tidak beraturan: children."
        },
        {
            type: "Article",
            question: "Which phrase is correct?",
            options: ["a apple", "an apple", "a apples", "an books"],
            answer: "an apple",
            explanation: "Gunakan 'an' sebelum bunyi vokal seperti apple."
        },
        {
            type: "Meaning",
            question: "Which word names an idea?",
            options: ["happiness", "table", "school", "cat"],
            answer: "happiness",
            explanation: "Happiness adalah abstract noun karena menyebut ide/perasaan."
        }
    ]
},

pronoun: {
    title: "Pronoun",
    description: "Pronoun adalah kata yang digunakan untuk menggantikan noun agar kalimat tidak terdengar berulang. Pronoun dapat menggantikan nama orang, benda, hewan, tempat, atau kelompok.",

    formula: `
        <strong>Inti Materi:</strong><br>
        Noun → Pronoun<br>
        Rina → She<br>
        Budi → He<br>
        The cat → It<br>
        Rina and Budi → They
    `,

    notes: [
        "Pronoun digunakan untuk menggantikan noun.",
        "Subject pronoun digunakan sebagai pelaku dalam kalimat.",
        "Object pronoun digunakan sebagai objek setelah verb atau preposition.",
        "Possessive adjective digunakan untuk menunjukkan kepemilikan sebelum noun.",
        "Possessive pronoun digunakan untuk menunjukkan kepemilikan tanpa noun setelahnya.",
        "Reflexive pronoun digunakan saat subject dan object merujuk pada orang yang sama.",
        "Jangan menggunakan noun dan pronoun sekaligus untuk subject yang sama."
    ],

    patterns: [
        {
            group: "Subject Pronoun",
            items: [
                {
                    label: "I / You / We / They",
                    formula: "Subject Pronoun + Verb + Object/Complement",
                    examples: [
                        "I study English.",
                        "You are my friend.",
                        "We play football.",
                        "They live in Bandung."
                    ]
                },
                {
                    label: "He / She / It",
                    formula: "He/She/It + Verb(s/es) + Object/Complement",
                    examples: [
                        "He studies English.",
                        "She reads a book.",
                        "It sleeps under the table."
                    ]
                }
            ]
        },
        {
            group: "Object Pronoun",
            items: [
                {
                    label: "Me / You / Us / Them",
                    formula: "Subject + Verb + Object Pronoun",
                    examples: [
                        "She helps me.",
                        "I know you.",
                        "He teaches us.",
                        "We meet them."
                    ]
                },
                {
                    label: "Him / Her / It",
                    formula: "Subject + Verb + him/her/it",
                    examples: [
                        "I call him.",
                        "They know her.",
                        "She likes it."
                    ]
                }
            ]
        },
        {
            group: "Possessive",
            items: [
                {
                    label: "Possessive Adjective",
                    formula: "my/your/his/her/its/our/their + Noun",
                    examples: [
                        "This is my book.",
                        "That is your bag.",
                        "His house is big.",
                        "Their school is clean."
                    ]
                },
                {
                    label: "Possessive Pronoun",
                    formula: "mine/yours/his/hers/ours/theirs",
                    examples: [
                        "This book is mine.",
                        "That bag is yours.",
                        "The red car is hers.",
                        "This classroom is ours."
                    ]
                }
            ]
        },
        {
            group: "Reflexive Pronoun",
            items: [
                {
                    label: "Singular",
                    formula: "myself / yourself / himself / herself / itself",
                    examples: [
                        "I do it myself.",
                        "He teaches himself.",
                        "She looks at herself."
                    ]
                },
                {
                    label: "Plural",
                    formula: "ourselves / yourselves / themselves",
                    examples: [
                        "We prepare ourselves.",
                        "You must help yourselves.",
                        "They introduce themselves."
                    ]
                }
            ]
        }
    ],

    quiz: [
        {
            type: "Subject",
            question: "Which pronoun can replace 'Rina'?",
            options: ["He", "She", "It", "They"],
            answer: "She",
            explanation: "Rina adalah nama perempuan, jadi subject pronoun yang tepat adalah She."
        },
        {
            type: "Subject",
            question: "Which pronoun can replace 'Budi'?",
            options: ["She", "He", "They", "We"],
            answer: "He",
            explanation: "Budi adalah nama laki-laki, jadi subject pronoun yang tepat adalah He."
        },
        {
            type: "Subject",
            question: "Which pronoun can replace 'The cat'?",
            options: ["It", "They", "We", "You"],
            answer: "It",
            explanation: "The cat dapat diganti dengan It jika merujuk pada satu hewan."
        },
        {
            type: "Subject",
            question: "Which pronoun can replace 'Budi and Rina'?",
            options: ["They", "He", "She", "It"],
            answer: "They",
            explanation: "Budi and Rina berarti lebih dari satu orang, jadi pronoun yang tepat adalah They."
        },
        {
            type: "Object",
            question: "I know ____.",
            options: ["she", "her", "they", "we"],
            answer: "her",
            explanation: "Setelah verb 'know', gunakan object pronoun. Object pronoun dari she adalah her."
        },
        {
            type: "Object",
            question: "She helps ____.",
            options: ["I", "me", "my", "mine"],
            answer: "me",
            explanation: "Setelah verb 'helps', gunakan object pronoun. Object pronoun dari I adalah me."
        },
        {
            type: "Possessive",
            question: "This is ____ book.",
            options: ["I", "me", "my", "mine"],
            answer: "my",
            explanation: "Sebelum noun 'book', gunakan possessive adjective. Bentuk yang benar adalah my book."
        },
        {
            type: "Possessive",
            question: "That bag is ____.",
            options: ["her", "hers", "she", "herself"],
            answer: "hers",
            explanation: "Karena tidak ada noun setelahnya, gunakan possessive pronoun: hers."
        },
        {
            type: "Reflexive",
            question: "He teaches ____.",
            options: ["him", "his", "himself", "he"],
            answer: "himself",
            explanation: "Subject dan object merujuk pada orang yang sama, jadi gunakan reflexive pronoun: himself."
        },
        {
            type: "Concept",
            question: "Pronouns are used to replace...",
            options: ["Verbs", "Nouns", "Adjectives", "Adverbs"],
            answer: "Nouns",
            explanation: "Pronoun digunakan untuk menggantikan noun agar kalimat tidak berulang."
        }
    ]
},

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








export const MATERI_BAB_CONFIG = [
    {
        id: "bab1",
        icon: "fa-key",
        title: "BAB 1: Kunci Dasar & Jenis Kata",
        level: "Beginner",
        color: "#ef4444",
        items: [
            { label: "Parts of Speech", id: "pos" },
            { label: "Noun", id: "noun" },
            { label: "Pronoun", id: "pronoun" }
        ]
    },
    {
        id: "bab2",
        icon: "fa-clock",
        title: "BAB 2: Kalimat Aktif",
        level: "Intermediate",
        color: "#f59e0b",
        items: [
            { label: "Simple Present", id: "simple-present" },
            { label: "Present Continuous", id: "present-continuous" },
            { label: "Present Perfect", id: "present-perfect" }
        ]
    },
    {
        id: "bab3",
        icon: "fa-code-branch",
        title: "BAB 3: Passive Voice",
        level: "Upper Intermediate",
        color: "#8b5cf6",
        items: [
            { label: "Passive Voice Basic", id: "passive-voice-basic" },
            { label: "Passive Modal", id: "passive-modal" },
            { label: "Passive Perfect", id: "passive-perfect" }
        ]
    },
    {
        id: "bab4",
        icon: "fa-graduation-cap",
        title: "BAB 4: Advanced Grammar",
        level: "Advanced",
        color: "#22c55e",
        items: [
            { label: "Modals", id: "modals" },
            { label: "Gerund & Infinitive", id: "gerund-infinitive" },
            { label: "Articles", id: "articles" }
        ]
    }
];