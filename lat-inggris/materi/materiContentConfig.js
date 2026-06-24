


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
                question: "Kata mana yang merupakan noun?",
                options: ["Run", "Beautiful", "School", "Quickly"],
                answer: "School"
            },
            {
                question: "Kata mana yang merupakan verb?",
                options: ["Eat", "Happy", "Table", "Blue"],
                answer: "Eat"
            },
            {
                question: "Kalimat mana yang mengandung adjective?",
                options: [
                    "She runs.",
                    "He has a red car.",
                    "They eat rice.",
                    "I go home."
                ],
                answer: "He has a red car."
            },

            {
                question: "Kata mana yang merupakan pronoun?",
                options: ["Teacher", "Beautiful", "They", "Quickly"],
                answer: "They"
            },
            {
                question: "Kata mana yang merupakan adjective?",
                options: ["Blue", "Run", "School", "Slowly"],
                answer: "Blue"
            },
            {
                question: "Kata mana yang merupakan adverb?",
                options: ["Quickly", "Book", "Happy", "Teacher"],
                answer: "Quickly"
            },
            {
                question: "Kata mana yang merupakan preposition?",
                options: ["Because", "Under", "Wow", "Run"],
                answer: "Under"
            },
            {
                question: "Kata mana yang merupakan conjunction?",
                options: ["Beautiful", "And", "Quickly", "Table"],
                answer: "And"
            },
            {
                question: "Kata mana yang merupakan interjection?",
                options: ["Wow!", "Teacher", "Blue", "Run"],
                answer: "Wow!"
            },
            {
                question: "Kalimat mana yang mengandung pronoun?",
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
            question: "Dari kalimat berikut, yang manakah noun: 'The student reads a book'?",
            options: ["Reads", "Student", "The", "A"],
            answer: "Student",
            explanation: "Student adalah noun karena menyebut orang."
        },
        {
            type: "Function",
            question: "Dari kalimat berikut, yang manakah object noun: 'She buys a bag'?",
            options: ["She", "Buys", "Bag", "A"],
            answer: "Bag",
            explanation: "Bag adalah object noun karena menjadi benda yang dibeli."
        },
        {
            type: "Type",
            question: "Kata mana yang merupakan proper noun?",
            options: ["city", "teacher", "Jakarta", "school"],
            answer: "Jakarta",
            explanation: "Jakarta adalah proper noun karena nama khusus tempat."
        },
        {
            type: "Type",
            question: "Kata mana yang merupakan common noun?",
            options: ["Indonesia", "Rina", "student", "Bandung"],
            answer: "student",
            explanation: "Student adalah common noun karena nama umum."
        },
        {
            type: "Count",
            question: "Manakah yang merupakan countable noun?",
            options: ["water", "rice", "book", "money"],
            answer: "book",
            explanation: "Book bisa dihitung: one book, two books."
        },
        {
            type: "Count",
            question: "Manakah yang merupakan uncountable noun?",
            options: ["chair", "student", "water", "apple"],
            answer: "water",
            explanation: "Water tidak dihitung langsung sebagai one water, two waters dalam penggunaan umum."
        },
        {
            type: "Number",
            question: "Pilih bentuk jamak (plural) dari 'book'.",
            options: ["book", "books", "bookes", "bookies"],
            answer: "books",
            explanation: "Plural regular noun biasanya ditambah -s."
        },
        {
            type: "Number",
            question: "Pilih bentuk jamak (plural) dari 'child'.",
            options: ["childs", "childes", "children", "childrens"],
            answer: "children",
            explanation: "Child memiliki bentuk plural tidak beraturan: children."
        },
        {
            type: "Article",
            question: "Frasa (phrase) mana yang paling tepat?",
            options: ["a apple", "an apple", "a apples", "an books"],
            answer: "an apple",
            explanation: "Gunakan 'an' sebelum bunyi vokal seperti apple."
        },
        {
            type: "Meaning",
            question: "Manakah yang merupakan idea?",
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
            question: "Pronoun mana yang bisa menggantikan 'Rina'?",
            options: ["He", "She", "It", "They"],
            answer: "She",
            explanation: "Rina adalah nama perempuan, jadi subject pronoun yang tepat adalah She."
        },
        {
            type: "Subject",
            question: "Pronoun mana yang bisa menggantikan 'Budi'?",
            options: ["She", "He", "They", "We"],
            answer: "He",
            explanation: "Budi adalah nama laki-laki, jadi subject pronoun yang tepat adalah He."
        },
        {
            type: "Subject",
            question: "Pronoun mana yang bisa menggantikan 'The cat'?",
            options: ["It", "They", "We", "You"],
            answer: "It",
            explanation: "The cat dapat diganti dengan It jika merujuk pada satu hewan."
        },
        {
            type: "Subject",
            question: "Pronoun mana yang bisa menggantikan 'Budi & Rina'?",
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
            question: "Pronouns digunakan untuk menggantikan...",
            options: ["Verbs", "Nouns", "Adjectives", "Adverbs"],
            answer: "Nouns",
            explanation: "Pronoun digunakan untuk menggantikan noun agar kalimat tidak berulang."
        }
    ]
},

verb: {
    title: "Verb",
    description: "Verb adalah kata yang menunjukkan aksi, aktivitas, kejadian, atau keadaan. Verb merupakan inti dari hampir semua kalimat Bahasa Inggris.",

    formula: `
        <strong>Inti Materi:</strong><br>
        Subject + Verb + Object/Complement
    `,

    notes: [
        "Verb adalah kata kerja atau kata yang menunjukkan keadaan.",
        "Setiap kalimat umumnya membutuhkan verb.",
        "Action Verb menunjukkan tindakan.",
        "Linking Verb menghubungkan subject dengan informasi tambahan.",
        "Helping Verb membantu verb utama membentuk tenses atau struktur tertentu.",
        "Verb dapat berubah bentuk sesuai tense."
    ],

    patterns: [
        {
            group: "Action Verb",
            items: [
                {
                    label: "Action",
                    formula: "Subject + Action Verb + Object",
                    examples: [
                        "I eat rice.",
                        "She reads a book.",
                        "They play football."
                    ]
                }
            ]
        },

        {
            group: "Linking Verb",
            items: [
                {
                    label: "Be Verb",
                    formula: "Subject + am/is/are + Complement",
                    examples: [
                        "I am happy.",
                        "She is smart.",
                        "They are students."
                    ]
                }
            ]
        },

        {
            group: "Helping Verb",
            items: [
                {
                    label: "Auxiliary",
                    formula: "Subject + Helping Verb + Main Verb",
                    examples: [
                        "I am studying English.",
                        "She has finished her homework.",
                        "They will come tomorrow."
                    ]
                }
            ]
        }
    ],

    quiz: [
        {
            type: "Action",
            question: "Kata mana yang merupakan verb?",
            options: ["Run", "Blue", "Book", "School"],
            answer: "Run",
            explanation: "Run adalah action verb karena menunjukkan aktivitas."
        },
        {
            type: "Action",
            question: "Kalimat mana yang mengandung action verb?",
            options: [
                "She reads a book.",
                "She is smart.",
                "They are students.",
                "The car is red."
            ],
            answer: "She reads a book.",
            explanation: "Reads adalah action verb."
        },
        {
            type: "Linking",
            question: "Verb mana yang merupakan linking verb?",
            options: ["Run", "Eat", "Is", "Play"],
            answer: "Is",
            explanation: "Is menghubungkan subject dengan informasi tambahan."
        },
        {
            type: "Linking",
            question: "She ___ happy.",
            options: ["run", "eat", "is", "play"],
            answer: "is",
            explanation: "Kalimat nominal menggunakan linking verb."
        },
        {
            type: "Helping",
            question: "Kalimat mana yang mengandung helping verb?",
            options: [
                "I am studying.",
                "She reads.",
                "They play football.",
                "We eat rice."
            ],
            answer: "I am studying.",
            explanation: "Am adalah helping verb untuk Present Continuous."
        },
        {
            type: "Helping",
            question: "Kata mana yang merupakan helping verb?",
            options: ["Have", "Book", "Blue", "School"],
            answer: "Have",
            explanation: "Have dapat berfungsi sebagai helping verb."
        },
        {
            type: "Concept",
            question: "Apa fungsi dari verb?",
            options: [
                "Menjelaskan kata benda (noun)",
                "Menunjukkan aksi atau keadaan",
                "Menghubungkan ide",
                "Menunjukkan Emosi"
            ],
            answer: "Menunjukkan aksi atau keadaan",
            explanation: "Verb menunjukkan aksi atau keadaan."
        },
        {
            type: "Concept",
            question: "Setiap kalimat yang lengkap biasanya membutuhkan...",
            options: ["A verb", "An adjective", "An adverb", "A conjunction"],
            answer: "A verb",
            explanation: "Verb merupakan inti dari sebagian besar kalimat."
        },
        {
            type: "Action",
            question: "kata manakah yang merupakan verb pada 'They play football'?",
            options: ["They", "Play", "Football", "The"],
            answer: "Play",
            explanation: "Play adalah kata kerja pada kalimat tersebut."
        },
        {
            type: "Concept",
            question: "Kata 'study' masuk kategori verb apa?",
            options: [
                "Action Verb",
                "Linking Verb",
                "Helping Verb",
                "Pronoun"
            ],
            answer: "Action Verb",
            explanation: "Study menunjukkan aktivitas."
        }
    ]
},

adjective: {
    title: "Adjective",
    description: "Adjective adalah kata yang digunakan untuk menjelaskan noun atau pronoun. Adjective memberi informasi tentang sifat, warna, ukuran, bentuk, jumlah, atau kondisi suatu benda/orang.",

    formula: `
        <strong>Inti Materi:</strong><br>
        Adjective + Noun<br>
        Subject + to be + Adjective
    `,

    notes: [
        "Adjective menjelaskan noun atau pronoun.",
        "Adjective sering berada sebelum noun.",
        "Adjective juga bisa berada setelah to be.",
        "Adjective menjawab pertanyaan: seperti apa?",
        "Adjective dapat menjelaskan warna, ukuran, sifat, jumlah, atau kondisi."
    ],

    patterns: [
        {
            group: "Before Noun",
            items: [
                {
                    label: "Adjective + Noun",
                    formula: "Adjective + Noun",
                    examples: [
                        "She has a beautiful bag.",
                        "He drives a red car.",
                        "They live in a big house."
                    ]
                }
            ]
        },
        {
            group: "After To Be",
            items: [
                {
                    label: "To Be + Adjective",
                    formula: "Subject + am/is/are + Adjective",
                    examples: [
                        "She is smart.",
                        "The room is clean.",
                        "They are happy."
                    ]
                }
            ]
        },
        {
            group: "Kinds of Adjective",
            items: [
                {
                    label: "Quality",
                    formula: "Quality Adjective = describes condition/character",
                    examples: ["smart student", "kind teacher", "clean room"]
                },
                {
                    label: "Color",
                    formula: "Color Adjective = describes color",
                    examples: ["red car", "blue bag", "white shirt"]
                },
                {
                    label: "Size",
                    formula: "Size Adjective = describes size",
                    examples: ["big house", "small cat", "tall building"]
                }
            ]
        }
    ],

    quiz: [
        {
            type: "Concept",
            question: "adjective menjelaskan tentang apa?",
            options: ["Noun", "Verb", "Adverb", "Conjunction"],
            answer: "Noun",
            explanation: "Adjective digunakan untuk menjelaskan noun."
        },
        {
            type: "Identify",
            question: "kata mana yang merupakan adjective?",
            options: ["Beautiful", "Run", "Quickly", "School"],
            answer: "Beautiful",
            explanation: "Beautiful adalah adjective karena menjelaskan sifat."
        },
        {
            type: "Sentence",
            question: "Kalimat mana yang mengandung adjective?",
            options: [
                "She runs fast.",
                "He has a red car.",
                "They eat rice.",
                "I go home."
            ],
            answer: "He has a red car.",
            explanation: "Red adalah adjective karena menjelaskan noun car."
        },
        {
            type: "Position",
            question: "Pilih frasa yang tepat.",
            options: ["car red", "red car", "run red", "quickly car"],
            answer: "red car",
            explanation: "Adjective biasanya berada sebelum noun."
        },
        {
            type: "To Be",
            question: "She is ____.",
            options: ["smart", "student", "quickly", "run"],
            answer: "smart",
            explanation: "Setelah to be dapat memakai adjective."
        },
        {
            type: "Color",
            question: "Kata mana yang merupakan color adjective?",
            options: ["Blue", "Eat", "Teacher", "Slowly"],
            answer: "Blue",
            explanation: "Blue menjelaskan warna."
        },
        {
            type: "Size",
            question: "Frasa mana yang menggunakan adjective of size?",
            options: ["big house", "run fast", "go home", "eat rice"],
            answer: "big house",
            explanation: "Big adalah adjective yang menjelaskan ukuran."
        },
        {
            type: "Meaning",
            question: "Apa adjective pada 'The room is clean'?",
            options: ["The", "Room", "Is", "Clean"],
            answer: "Clean",
            explanation: "Clean menjelaskan kondisi room."
        },
        {
            type: "Concept",
            question: "Adjective menjawab tentang pertanyaan...",
            options: ["How is it?", "When?", "Where?", "Why?"],
            answer: "How is it?",
            explanation: "Adjective menjelaskan seperti apa noun tersebut."
        },
        {
            type: "Identify",
            question: "Kata mana yang menjelaskan tentang student?",
            options: ["Smart", "Study", "School", "Very"],
            answer: "Smart",
            explanation: "Smart dapat menjelaskan student."
        }
    ]
},

adverb: {
    title: "Adverb",
    description: "Adverb adalah kata yang menjelaskan verb, adjective, atau adverb lain. Adverb sering memberi informasi tentang cara, waktu, tempat, frekuensi, atau tingkat.",

    formula: `
        <strong>Inti Materi:</strong><br>
        Verb + Adverb<br>
        Adverb + Adjective<br>
        Adverb + Adverb
    `,

    notes: [
        "Adverb dapat menjelaskan verb.",
        "Adverb dapat menjelaskan adjective.",
        "Adverb dapat menjelaskan adverb lain.",
        "Banyak adverb berakhiran -ly, seperti quickly dan slowly.",
        "Adverb dapat menjelaskan cara, waktu, tempat, frekuensi, atau tingkat."
    ],

    patterns: [
        {
            group: "Adverb of Manner",
            items: [
                {
                    label: "How",
                    formula: "Subject + Verb + Adverb",
                    examples: [
                        "He runs quickly.",
                        "She speaks clearly.",
                        "They work carefully."
                    ]
                }
            ]
        },
        {
            group: "Adverb of Frequency",
            items: [
                {
                    label: "How Often",
                    formula: "Subject + Frequency Adverb + Verb",
                    examples: [
                        "I always study English.",
                        "She usually wakes up early.",
                        "They often play football."
                    ]
                }
            ]
        },
        {
            group: "Adverb of Degree",
            items: [
                {
                    label: "How Much",
                    formula: "Adverb + Adjective",
                    examples: [
                        "She is very smart.",
                        "This lesson is really easy.",
                        "He is too tired."
                    ]
                }
            ]
        }
    ],

    quiz: [
        {
            type: "Concept",
            question: "adverb menjelaskan tentang apa?",
            options: ["Verb", "Noun only", "Pronoun only", "Article"],
            answer: "Verb",
            explanation: "Adverb dapat menjelaskan verb."
        },
        {
            type: "Identify",
            question: "Kata mana yang termasuk adverb?",
            options: ["Quickly", "Book", "Happy", "Teacher"],
            answer: "Quickly",
            explanation: "Quickly adalah adverb karena menjelaskan cara melakukan aksi."
        },
        {
            type: "Manner",
            question: "Apa adverb pada 'He runs quickly'?",
            options: ["He", "Runs", "Quickly", "The"],
            answer: "Quickly",
            explanation: "Quickly menjelaskan bagaimana he runs."
        },
        {
            type: "Frequency",
            question: "Kata mana yang merupakan adverb of frequency?",
            options: ["Always", "Beautiful", "School", "Under"],
            answer: "Always",
            explanation: "Always menunjukkan seberapa sering aksi dilakukan."
        },
        {
            type: "Degree",
            question: "She is very smart. kata 'very' merupakan?",
            options: ["Adverb", "Noun", "Verb", "Conjunction"],
            answer: "Adverb",
            explanation: "Very menjelaskan adjective smart."
        },
        {
            type: "Sentence",
            question: "Kalimat mana yang mengandung adverb?",
            options: [
                "She has a red bag.",
                "He runs slowly.",
                "This is a book.",
                "They are students."
            ],
            answer: "He runs slowly.",
            explanation: "Slowly adalah adverb."
        },
        {
            type: "Manner",
            question: "Pilih adverb yang tepat.",
            options: ["Carefully", "Careful", "Care", "Cares"],
            answer: "Carefully",
            explanation: "Carefully adalah adverb of manner."
        },
        {
            type: "Concept",
            question: "Kebanyakan adverbs of manner berakhir dengan...",
            options: ["-ly", "-s", "-ing", "-ed"],
            answer: "-ly",
            explanation: "Banyak adverb of manner berakhiran -ly."
        },
        {
            type: "Position",
            question: "Frasa mana yang tepat?",
            options: ["runs quickly", "quickly student", "book quickly", "red quickly"],
            answer: "runs quickly",
            explanation: "Adverb dapat muncul setelah verb."
        },
        {
            type: "Degree",
            question: "Kata mana yang bisa melengkapi: 'This lesson is ____ easy'?",
            options: ["very", "school", "eat", "under"],
            answer: "very",
            explanation: "Very adalah adverb of degree."
        }
    ]
},


preposition: {
    title: "Preposition",
    description: "Preposition adalah kata yang menunjukkan hubungan antara noun/pronoun dengan kata lain dalam kalimat. Preposition sering menunjukkan tempat, waktu, arah, atau hubungan posisi.",

    formula: `
        <strong>Inti Materi:</strong><br>
        Preposition + Noun/Pronoun<br>
        on the table • at 7 PM • to school
    `,

    notes: [
        "Preposition biasanya diikuti noun atau pronoun.",
        "Preposition dapat menunjukkan tempat.",
        "Preposition dapat menunjukkan waktu.",
        "Preposition dapat menunjukkan arah.",
        "Preposition membantu menjelaskan hubungan antar kata dalam kalimat."
    ],

    patterns: [
        {
            group: "Place",
            items: [
                {
                    label: "Position",
                    formula: "Preposition + Place",
                    examples: [
                        "The book is on the table.",
                        "The cat is under the chair.",
                        "She is in the room."
                    ]
                }
            ]
        },
        {
            group: "Time",
            items: [
                {
                    label: "Time Marker",
                    formula: "at / on / in + Time",
                    examples: [
                        "I wake up at 6 AM.",
                        "We study on Monday.",
                        "She was born in 2010."
                    ]
                }
            ]
        },
        {
            group: "Direction",
            items: [
                {
                    label: "Movement",
                    formula: "to / from / into + Place",
                    examples: [
                        "She goes to school.",
                        "He comes from Jakarta.",
                        "They walk into the room."
                    ]
                }
            ]
        }
    ],

    quiz: [
        {
            type: "Place",
            question: "Kata mana yang merupakan preposition?",
            options: ["Under", "Beautiful", "Run", "Wow"],
            answer: "Under",
            explanation: "Under adalah preposition karena menunjukkan posisi."
        },
        {
            type: "Place",
            question: "The book is ___ the table.",
            options: ["on", "and", "wow", "quickly"],
            answer: "on",
            explanation: "On menunjukkan posisi benda di atas permukaan."
        },
        {
            type: "Time",
            question: "I wake up ___ 6 AM.",
            options: ["at", "on", "in", "to"],
            answer: "at",
            explanation: "Gunakan at untuk waktu jam tertentu."
        },
        {
            type: "Time",
            question: "We study ___ Monday.",
            options: ["at", "on", "in", "from"],
            answer: "on",
            explanation: "Gunakan on untuk nama hari."
        },
        {
            type: "Direction",
            question: "She goes ___ school.",
            options: ["to", "under", "at", "in"],
            answer: "to",
            explanation: "To menunjukkan arah atau tujuan."
        },
        {
            type: "Place",
            question: "The cat is ___ the chair.",
            options: ["under", "because", "happy", "eat"],
            answer: "under",
            explanation: "Under menunjukkan posisi di bawah sesuatu."
        },
        {
            type: "Concept",
            question: "preposition biasanya datang sebelum...",
            options: ["Noun or pronoun", "Verb only", "Adjective only", "Interjection"],
            answer: "Noun or pronoun",
            explanation: "Preposition biasanya diikuti noun atau pronoun."
        },
        {
            type: "Identify",
            question: "Kalimat mana yang mengandung preposition?",
            options: [
                "She is smart.",
                "The bag is on the chair.",
                "They are happy.",
                "Wow! Amazing."
            ],
            answer: "The bag is on the chair.",
            explanation: "On adalah preposition."
        },
        {
            type: "Direction",
            question: "He comes ___ Bandung.",
            options: ["from", "and", "very", "blue"],
            answer: "from",
            explanation: "From menunjukkan asal."
        },
        {
            type: "Concept",
            question: "Apa yang preposition tunjukkan?",
            options: ["Relationship", "Emotion", "Action only", "Name only"],
            answer: "Relationship",
            explanation: "Preposition menunjukkan hubungan tempat, waktu, arah, atau posisi."
        }
    ]
},

conjunction: {
    title: "Conjunction",
    description: "Conjunction adalah kata yang digunakan untuk menghubungkan kata, frasa, atau klausa. Conjunction membantu membuat kalimat lebih lengkap dan hubungan antar ide menjadi jelas.",

    formula: `
        <strong>Inti Materi:</strong><br>
        Word + Conjunction + Word<br>
        Clause + Conjunction + Clause
    `,

    notes: [
        "Conjunction menghubungkan dua kata.",
        "Conjunction menghubungkan dua frasa.",
        "Conjunction menghubungkan dua klausa atau ide.",
        "And digunakan untuk menambahkan informasi.",
        "But digunakan untuk menunjukkan pertentangan.",
        "Because digunakan untuk menunjukkan alasan.",
        "So digunakan untuk menunjukkan akibat."
    ],

    patterns: [
        {
            group: "Addition",
            items: [
                {
                    label: "And",
                    formula: "Word/Clause + and + Word/Clause",
                    examples: [
                        "I like tea and coffee.",
                        "She reads and writes.",
                        "Budi and Rina are students."
                    ]
                }
            ]
        },
        {
            group: "Contrast",
            items: [
                {
                    label: "But",
                    formula: "Clause + but + Clause",
                    examples: [
                        "He is tired but happy.",
                        "I like English but I dislike math.",
                        "She is young but smart."
                    ]
                }
            ]
        },
        {
            group: "Reason & Result",
            items: [
                {
                    label: "Because / So",
                    formula: "Clause + because/so + Clause",
                    examples: [
                        "I study because I have a test.",
                        "It rains, so I stay at home.",
                        "She is hungry, so she eats."
                    ]
                }
            ]
        }
    ],

    quiz: [
        {
            type: "Identify",
            question: "Which word is a conjunction?",
            options: ["And", "Quickly", "School", "Beautiful"],
            answer: "And",
            explanation: "And adalah conjunction karena menghubungkan kata atau ide."
        },
        {
            type: "Addition",
            question: "I like tea ___ coffee.",
            options: ["and", "but", "because", "under"],
            answer: "and",
            explanation: "And digunakan untuk menambahkan informasi."
        },
        {
            type: "Contrast",
            question: "He is tired ___ happy.",
            options: ["but", "and", "so", "in"],
            answer: "but",
            explanation: "But digunakan untuk menunjukkan pertentangan."
        },
        {
            type: "Reason",
            question: "She studies ___ she has a test.",
            options: ["because", "but", "and", "on"],
            answer: "because",
            explanation: "Because menunjukkan alasan."
        },
        {
            type: "Result",
            question: "It rains, ___ I stay at home.",
            options: ["so", "because", "but", "or"],
            answer: "so",
            explanation: "So menunjukkan akibat atau hasil."
        },
        {
            type: "Choice",
            question: "You can choose tea ___ coffee.",
            options: ["or", "because", "under", "quickly"],
            answer: "or",
            explanation: "Or digunakan untuk pilihan."
        },
        {
            type: "Concept",
            question: "What is the function of a conjunction?",
            options: [
                "Connect words or ideas",
                "Describe a noun",
                "Show emotion",
                "Replace a noun"
            ],
            answer: "Connect words or ideas",
            explanation: "Conjunction menghubungkan kata, frasa, atau klausa."
        },
        {
            type: "Identify",
            question: "Which sentence uses a conjunction?",
            options: [
                "She is smart.",
                "I like apples and oranges.",
                "The book is on the table.",
                "Wow! Great."
            ],
            answer: "I like apples and oranges.",
            explanation: "And adalah conjunction."
        },
        {
            type: "Contrast",
            question: "Choose the best conjunction: 'I am hungry ___ I have no food.'",
            options: ["but", "and", "so", "because"],
            answer: "but",
            explanation: "But menunjukkan pertentangan antara hungry dan no food."
        },
        {
            type: "Reason",
            question: "Which word shows reason?",
            options: ["Because", "And", "Or", "Wow"],
            answer: "Because",
            explanation: "Because digunakan untuk menyatakan alasan."
        }
    ]
},

interjection: {
    title: "Interjection",
    description: "Interjection adalah kata atau ungkapan singkat yang menunjukkan emosi, reaksi, atau perasaan secara langsung. Interjection sering berdiri sendiri dan biasanya diikuti tanda seru.",

    formula: `
        <strong>Inti Materi:</strong><br>
        Interjection + !<br>
        Wow! • Oops! • Hey! • Ouch!
    `,

    notes: [
        "Interjection menunjukkan ekspresi atau emosi singkat.",
        "Interjection sering memakai tanda seru.",
        "Interjection dapat berdiri sendiri.",
        "Wow digunakan untuk rasa kagum.",
        "Oops digunakan saat terjadi kesalahan kecil.",
        "Ouch digunakan saat merasa sakit.",
        "Hey digunakan untuk memanggil perhatian."
    ],

    patterns: [
        {
            group: "Surprise",
            items: [
                {
                    label: "Wow",
                    formula: "Wow! + Sentence",
                    examples: [
                        "Wow! That is amazing.",
                        "Wow! You are very smart.",
                        "Wow! This place is beautiful."
                    ]
                }
            ]
        },
        {
            group: "Mistake",
            items: [
                {
                    label: "Oops",
                    formula: "Oops! + Sentence",
                    examples: [
                        "Oops! I made a mistake.",
                        "Oops! I forgot my book.",
                        "Oops! That was wrong."
                    ]
                }
            ]
        },
        {
            group: "Attention",
            items: [
                {
                    label: "Hey / Ouch",
                    formula: "Interjection! + Sentence",
                    examples: [
                        "Hey! Listen to me.",
                        "Hey! Wait for me.",
                        "Ouch! My hand hurts."
                    ]
                }
            ]
        }
    ],

    quiz: [
        {
            type: "Identify",
            question: "Kata mana yang merupakan interjection?",
            options: ["Wow!", "School", "Run", "Beautiful"],
            answer: "Wow!",
            explanation: "Wow! adalah interjection karena menunjukkan rasa kagum."
        },
        {
            type: "Emotion",
            question: "interjection mana yang menunjukkan surprise/keterkejutan?",
            options: ["Wow!", "And", "Under", "Book"],
            answer: "Wow!",
            explanation: "Wow! digunakan untuk menunjukkan rasa kagum atau terkejut."
        },
        {
            type: "Mistake",
            question: "interjection mana yang digunakan untuk kesalahan kecil?",
            options: ["Oops!", "Because", "Quickly", "They"],
            answer: "Oops!",
            explanation: "Oops! digunakan saat terjadi kesalahan kecil."
        },
        {
            type: "Pain",
            question: "interjection mana yang menunjukkan kesakitan?",
            options: ["Ouch!", "And", "Happy", "School"],
            answer: "Ouch!",
            explanation: "Ouch! digunakan saat merasa sakit."
        },
        {
            type: "Attention",
            question: "interjection mana yang digunakan untuk mendapat/menarik perhatian?",
            options: ["Hey!", "Book", "Slowly", "Red"],
            answer: "Hey!",
            explanation: "Hey! digunakan untuk menarik perhatian."
        },
        {
            type: "Punctuation",
            question: "Interjections sering menggunakan...",
            options: ["Tanda Seru!", "Hanya Coma,", "Hanya Tanda tanya", "Hanya titik"],
            answer: "Tanda Seru!",
            explanation: "Interjection sering diikuti tanda seru."
        },
        {
            type: "Concept",
            question: "Apa yang interjection ekspresikan/ungkapkan?",
            options: ["Emosi or reaksi", "Tempat", "Kepemilikan", "Angka"],
            answer: "Emotion or reaction",
            explanation: "Interjection mengekspresikan emosi atau reaksi."
        },
        {
            type: "Sentence",
            question: "Kalimat mana yang mengandung interjection?",
            options: [
                "Wow! That is great.",
                "She reads a book.",
                "The cat is under the table.",
                "I like tea and coffee."
            ],
            answer: "Wow! That is great.",
            explanation: "Wow! adalah interjection."
        },
        {
            type: "Concept",
            question: "Bisakah interjection berdiri sendiri?",
            options: ["Ya,bisa", "Tidak", "Hanya setelah noun", "Hanya sebelum verb"],
            answer: "Ya,bisa",
            explanation: "Interjection bisa berdiri sendiri sebagai ekspresi."
        },
        {
            type: "Identify",
            question: "Manakah yang bukan interjection?",
            options: ["Wow!", "Oops!", "Ouch!", "Table"],
            answer: "Table",
            explanation: "Table adalah noun, bukan interjection."
        }
    ]
},

"present-tense": {
    title: "Present Tense",
    description: "Present Tense digunakan untuk membicarakan kebiasaan, fakta umum, aktivitas yang sedang berlangsung, dan kejadian yang sudah terjadi tetapi masih berhubungan dengan sekarang.",

    formula: `
        <strong>Inti Materi:</strong><br>
        Simple Present = Subject + V1/V1(s/es)<br>
        Present Continuous = Subject + am/is/are + V-ing<br>
        Present Perfect = Subject + have/has + V3
    `,

    notes: [
        "Simple Present digunakan untuk kebiasaan, rutinitas, dan fakta umum.",
        "Present Continuous digunakan untuk aktivitas yang sedang terjadi sekarang.",
        "Present Perfect digunakan untuk pengalaman atau kejadian yang sudah terjadi dan masih relevan.",
        "He, She, It pada Simple Present memakai V1+s/es.",
        "Present Continuous selalu memakai am/is/are + V-ing.",
        "Present Perfect memakai have/has + V3."
    ],

    patterns: [
    {
        group: "Simple Present",
        items: [
            {
                label: "Verbal Positive",
                formula: "Subject + V1/V1(s/es) + Object/Adverb",
                examples: [
                    "I study English every day.",
                    "She studies English every day.",
                    "They play football."
                ]
            },
            {
                label: "Verbal Negative",
                formula: "Subject + do/does + not + V1",
                examples: [
                    "I do not study English.",
                    "She does not study English.",
                    "They do not play football."
                ]
            },
            {
                label: "Verbal Question",
                formula: "Do/Does + Subject + V1?",
                examples: [
                    "Do you study English?",
                    "Does she study English?",
                    "Do they play football?"
                ]
            },
            {
                label: "Nominal Positive",
                formula: "Subject + am/is/are + Complement",
                examples: [
                    "I am a student.",
                    "She is happy.",
                    "They are teachers."
                ]
            },
            {
                label: "Nominal Negative",
                formula: "Subject + am/is/are + not + Complement",
                examples: [
                    "I am not a student.",
                    "She is not happy.",
                    "They are not teachers."
                ]
            },
            {
                label: "Nominal Question",
                formula: "Am/Is/Are + Subject + Complement?",
                examples: [
                    "Are you a student?",
                    "Is she happy?",
                    "Are they teachers?"
                ]
            }
        ]
    },
    {
        group: "Present Continuous",
        items: [
            {
                label: "Verbal Positive",
                formula: "Subject + am/is/are + V-ing",
                examples: [
                    "I am studying English now.",
                    "She is reading a book.",
                    "They are playing football."
                ]
            },
            {
                label: "Verbal Negative",
                formula: "Subject + am/is/are + not + V-ing",
                examples: [
                    "I am not studying now.",
                    "She is not reading a book.",
                    "They are not playing football."
                ]
            },
            {
                label: "Verbal Question",
                formula: "Am/Is/Are + Subject + V-ing?",
                examples: [
                    "Are you studying now?",
                    "Is she reading a book?",
                    "Are they playing football?"
                ]
            },
        ]
    },

    {
    group: "Present Perfect",
    items: [
        {
            label: "Verbal Positive",
            formula: "Subject + have/has + V3",
            examples: [
                "I have finished my homework.",
                "She has eaten breakfast.",
                "They have visited Bali."
            ]
        },
        {
            label: "Verbal Negative",
            formula: "Subject + have/has + not + V3",
            examples: [
                "I have not finished my homework.",
                "She has not eaten breakfast.",
                "They have not visited Bali."
            ]
        },
        {
            label: "Verbal Question",
            formula: "Have/Has + Subject + V3?",
            examples: [
                "Have you finished your homework?",
                "Has she eaten breakfast?",
                "Have they visited Bali?"
            ]
        },
        {
            label: "Nominal Positive",
            formula: "Subject + have/has + been + Complement",
            examples: [
                "I have been busy.",
                "She has been sick.",
                "They have been students."
            ]
        },
        {
            label: "Nominal Negative",
            formula: "Subject + have/has + not + been + Complement",
            examples: [
                "I have not been busy.",
                "She has not been sick.",
                "They have not been students."
            ]
        },
        {
            label: "Nominal Question",
            formula: "Have/Has + Subject + been + Complement?",
            examples: [
                "Have you been busy?",
                "Has she been sick?",
                "Have they been students?"
            ]
        }
    ]
}
],

    quiz: [
        {
            type: "Simple",
            question: "She ___ English every day.",
            options: ["study", "studies", "studying", "studied"],
            answer: "studies",
            explanation: "Simple Present untuk subject She memakai V1+s/es."
        },
        {
            type: "Simple",
            question: "They ___ football every Sunday.",
            options: ["plays", "play", "playing", "played"],
            answer: "play",
            explanation: "Subject They memakai V1 biasa."
        },
        {
            type: "Simple",
            question: "She ___ not study English.",
            options: ["do", "does", "is", "has"],
            answer: "does",
            explanation: "Kalimat negatif Simple Present untuk She memakai does not + V1."
        },
        {
            type: "Continuous",
            question: "She ___ reading a book now.",
            options: ["is", "are", "am", "has"],
            answer: "is",
            explanation: "Present Continuous untuk She memakai is + V-ing."
        },
        {
            type: "Continuous",
            question: "They ___ playing football now.",
            options: ["is", "am", "are", "have"],
            answer: "are",
            explanation: "Present Continuous untuk They memakai are + V-ing."
        },
        {
            type: "Continuous",
            question: "I am ___ English now.",
            options: ["study", "studies", "studying", "studied"],
            answer: "studying",
            explanation: "Present Continuous memakai V-ing."
        },
        {
            type: "Perfect",
            question: "She ___ finished her homework.",
            options: ["have", "has", "is", "does"],
            answer: "has",
            explanation: "Present Perfect untuk She memakai has + V3."
        },
        {
            type: "Perfect",
            question: "They ___ visited Bali.",
            options: ["has", "have", "are", "do"],
            answer: "have",
            explanation: "Present Perfect untuk They memakai have + V3."
        },
        {
            type: "Perfect",
            question: "I have ___ breakfast.",
            options: ["eat", "eats", "eating", "eaten"],
            answer: "eaten",
            explanation: "Present Perfect memakai verb bentuk ketiga atau V3."
        },
        {
            type: "Concept",
            question: "Which tense uses am/is/are + V-ing?",
            options: ["Simple Present", "Present Continuous", "Present Perfect", "Simple Past"],
            answer: "Present Continuous",
            explanation: "Present Continuous memakai am/is/are + V-ing."
        },
{
    type: "Simple Nominal",
    question: "She ___ a student.",
    options: ["am", "is", "are", "do"],
    answer: "is",
    explanation: "Simple Present nominal untuk subject She memakai is."
},
{
    type: "Simple Nominal",
    question: "They ___ not teachers.",
    options: ["is", "am", "are", "does"],
    answer: "are",
    explanation: "Simple Present nominal untuk subject They memakai are not."
},
{
    type: "Simple Nominal",
    question: "___ you happy?",
    options: ["Do", "Does", "Are", "Is"],
    answer: "Are",
    explanation: "Pertanyaan nominal Simple Present memakai am/is/are di depan subject."
},
{
    type: "Perfect Nominal",
    question: "She ___ been sick.",
    options: ["have", "has", "is", "does"],
    answer: "has",
    explanation: "Present Perfect Nominal untuk subject She memakai has been + complement."
},
{
    type: "Perfect Nominal",
    question: "They have ___ students.",
    options: ["be", "been", "being", "are"],
    answer: "been",
    explanation: "Present Perfect Nominal memakai have/has + been + complement."
},
{
    type: "Perfect Nominal",
    question: "___ you been busy?",
    options: ["Do", "Are", "Have", "Has"],
    answer: "Have",
    explanation: "Pertanyaan Present Perfect Nominal memakai Have/Has + subject + been + complement."
},
{
    type: "Continuous",
    question: "She ___ reading a book now.",
    options: ["is", "are", "am", "has"],
    answer: "is",
    explanation: "Subject She menggunakan is + V-ing pada Present Continuous."
},
{
    type: "Continuous",
    question: "They ___ playing football now.",
    options: ["is", "am", "are", "has"],
    answer: "are",
    explanation: "Subject They menggunakan are + V-ing."
},
{
    type: "Continuous",
    question: "___ you studying English now?",
    options: ["Do", "Have", "Are", "Does"],
    answer: "Are",
    explanation: "Pertanyaan Present Continuous memakai Am/Is/Are di depan subject."
},
{
    type: "Perfect",
    question: "She has ___ her homework.",
    options: ["finish", "finished", "finishing", "finishes"],
    answer: "finished",
    explanation: "Present Perfect memakai have/has + V3."
}



    ]
},

"past-tense": {
    title: "Past Tense",
    description: "Past Tense digunakan untuk membicarakan kejadian, aktivitas, keadaan, atau pengalaman yang terjadi di masa lampau. Dalam modul ini, kamu mempelajari Simple Past, Past Continuous, dan Past Perfect.",

    formula: `
        <strong>Inti Materi:</strong><br>
        Simple Past = Subject + V2<br>
        Past Continuous = Subject + was/were + V-ing<br>
        Past Perfect = Subject + had + V3
    `,

    notes: [
        "Simple Past digunakan untuk kejadian yang selesai di masa lampau.",
        "Past Continuous digunakan untuk aktivitas yang sedang berlangsung pada waktu tertentu di masa lampau.",
        "Past Perfect digunakan untuk kejadian yang sudah selesai sebelum kejadian lain di masa lampau.",
        "Simple Past verbal memakai V2.",
        "Simple Past nominal memakai was/were + complement.",
        "Past Continuous selalu memakai was/were + V-ing.",
        "Past Perfect memakai had + V3.",
        "Past Perfect nominal memakai had been + complement."
    ],

    patterns: [
        {
            group: "Simple Past",
            items: [
                {
                    label: "Verbal Positive",
                    formula: "Subject + V2 + Object/Adverb",
                    examples: [
                        "I studied English yesterday.",
                        "She watched a movie last night.",
                        "They played football two days ago."
                    ]
                },
                {
                    label: "Verbal Negative",
                    formula: "Subject + did + not + V1",
                    examples: [
                        "I did not study English yesterday.",
                        "She did not watch a movie.",
                        "They did not play football."
                    ]
                },
                {
                    label: "Verbal Question",
                    formula: "Did + Subject + V1?",
                    examples: [
                        "Did you study English yesterday?",
                        "Did she watch a movie?",
                        "Did they play football?"
                    ]
                },
                {
                    label: "Nominal Positive",
                    formula: "Subject + was/were + Complement",
                    examples: [
                        "I was tired yesterday.",
                        "She was happy last night.",
                        "They were students."
                    ]
                },
                {
                    label: "Nominal Negative",
                    formula: "Subject + was/were + not + Complement",
                    examples: [
                        "I was not tired yesterday.",
                        "She was not happy.",
                        "They were not students."
                    ]
                },
                {
                    label: "Nominal Question",
                    formula: "Was/Were + Subject + Complement?",
                    examples: [
                        "Were you tired yesterday?",
                        "Was she happy?",
                        "Were they students?"
                    ]
                }
            ]
        },
        {
            group: "Past Continuous",
            items: [
                {
                    label: "Verbal Positive",
                    formula: "Subject + was/were + V-ing",
                    examples: [
                        "I was studying English at 8 PM.",
                        "She was reading a book.",
                        "They were playing football."
                    ]
                },
                {
                    label: "Verbal Negative",
                    formula: "Subject + was/were + not + V-ing",
                    examples: [
                        "I was not studying at 8 PM.",
                        "She was not reading a book.",
                        "They were not playing football."
                    ]
                },
                {
                    label: "Verbal Question",
                    formula: "Was/Were + Subject + V-ing?",
                    examples: [
                        "Were you studying at 8 PM?",
                        "Was she reading a book?",
                        "Were they playing football?"
                    ]
                }
            ]
        },
        {
            group: "Past Perfect",
            items: [
                {
                    label: "Verbal Positive",
                    formula: "Subject + had + V3",
                    examples: [
                        "I had finished my homework before dinner.",
                        "She had eaten breakfast before school.",
                        "They had visited Bali before 2020."
                    ]
                },
                {
                    label: "Verbal Negative",
                    formula: "Subject + had + not + V3",
                    examples: [
                        "I had not finished my homework.",
                        "She had not eaten breakfast.",
                        "They had not visited Bali."
                    ]
                },
                {
                    label: "Verbal Question",
                    formula: "Had + Subject + V3?",
                    examples: [
                        "Had you finished your homework?",
                        "Had she eaten breakfast?",
                        "Had they visited Bali?"
                    ]
                },
                {
                    label: "Nominal Positive",
                    formula: "Subject + had + been + Complement",
                    examples: [
                        "I had been busy before you called.",
                        "She had been sick before the exam.",
                        "They had been students before they worked."
                    ]
                },
                {
                    label: "Nominal Negative",
                    formula: "Subject + had + not + been + Complement",
                    examples: [
                        "I had not been busy.",
                        "She had not been sick.",
                        "They had not been students."
                    ]
                },
                {
                    label: "Nominal Question",
                    formula: "Had + Subject + been + Complement?",
                    examples: [
                        "Had you been busy?",
                        "Had she been sick?",
                        "Had they been students?"
                    ]
                }
            ]
        }
    ],

    quiz: [
        {
            type: "Simple Verbal",
            question: "She ___ English yesterday.",
            options: ["study", "studies", "studied", "studying"],
            answer: "studied",
            explanation: "Simple Past verbal memakai V2. Bentuk past dari study adalah studied."
        },
        {
            type: "Simple Verbal",
            question: "They ___ football last week.",
            options: ["play", "plays", "played", "playing"],
            answer: "played",
            explanation: "Simple Past memakai verb bentuk kedua atau V2."
        },
        {
            type: "Simple Verbal",
            question: "She ___ not watch TV last night.",
            options: ["do", "does", "did", "was"],
            answer: "did",
            explanation: "Negative Simple Past verbal memakai did not + V1."
        },
        {
            type: "Simple Verbal",
            question: "___ you study English yesterday?",
            options: ["Do", "Does", "Did", "Were"],
            answer: "Did",
            explanation: "Question Simple Past verbal memakai Did + subject + V1."
        },
        {
            type: "Simple Nominal",
            question: "She ___ happy yesterday.",
            options: ["is", "are", "was", "were"],
            answer: "was",
            explanation: "Simple Past nominal untuk subject She memakai was."
        },
        {
            type: "Simple Nominal",
            question: "They ___ students last year.",
            options: ["is", "are", "was", "were"],
            answer: "were",
            explanation: "Simple Past nominal untuk subject They memakai were."
        },
        {
            type: "Simple Nominal",
            question: "She ___ not tired yesterday.",
            options: ["was", "were", "did", "does"],
            answer: "was",
            explanation: "Negative Simple Past nominal memakai was/were not + complement."
        },
        {
            type: "Simple Nominal",
            question: "___ they at school yesterday?",
            options: ["Was", "Were", "Did", "Do"],
            answer: "Were",
            explanation: "Question Simple Past nominal memakai Was/Were di depan subject."
        },
        {
            type: "Continuous",
            question: "She ___ reading a book at 8 PM.",
            options: ["is", "are", "was", "were"],
            answer: "was",
            explanation: "Past Continuous untuk subject She memakai was + V-ing."
        },
        {
            type: "Continuous",
            question: "They ___ playing football yesterday afternoon.",
            options: ["is", "are", "was", "were"],
            answer: "were",
            explanation: "Past Continuous untuk subject They memakai were + V-ing."
        },
        {
            type: "Continuous",
            question: "I was ___ English when you called.",
            options: ["study", "studies", "studying", "studied"],
            answer: "studying",
            explanation: "Past Continuous memakai was/were + V-ing."
        },
        {
            type: "Continuous",
            question: "___ she watching TV at 9 PM?",
            options: ["Did", "Was", "Were", "Does"],
            answer: "Was",
            explanation: "Question Past Continuous memakai Was/Were + subject + V-ing."
        },
        {
            type: "Continuous",
            question: "They were not ___ football.",
            options: ["play", "plays", "playing", "played"],
            answer: "playing",
            explanation: "Negative Past Continuous memakai was/were not + V-ing."
        },
        {
            type: "Perfect Verbal",
            question: "She had ___ breakfast before school.",
            options: ["eat", "eats", "eating", "eaten"],
            answer: "eaten",
            explanation: "Past Perfect memakai had + V3."
        },
        {
            type: "Perfect Verbal",
            question: "They ___ visited Bali before 2020.",
            options: ["has", "have", "had", "were"],
            answer: "had",
            explanation: "Past Perfect untuk semua subject memakai had + V3."
        },
        {
            type: "Perfect Verbal",
            question: "She had not ___ her homework.",
            options: ["finish", "finished", "finishing", "finishes"],
            answer: "finished",
            explanation: "Past Perfect negative memakai had not + V3."
        },
        {
            type: "Perfect Verbal",
            question: "___ you finished your homework before dinner?",
            options: ["Have", "Has", "Had", "Did"],
            answer: "Had",
            explanation: "Question Past Perfect memakai Had + subject + V3."
        },
        {
            type: "Perfect Nominal",
            question: "She had ___ sick before the exam.",
            options: ["be", "been", "being", "was"],
            answer: "been",
            explanation: "Past Perfect nominal memakai had been + complement."
        },
        {
            type: "Perfect Nominal",
            question: "They had not ___ students before.",
            options: ["be", "been", "being", "were"],
            answer: "been",
            explanation: "Negative Past Perfect nominal memakai had not been + complement."
        },
        {
            type: "Concept",
            question: "Which tense uses Subject + was/were + V-ing?",
            options: ["Simple Past", "Past Continuous", "Past Perfect", "Simple Present"],
            answer: "Past Continuous",
            explanation: "Past Continuous memakai was/were + V-ing."
        }
    ]
},

"future-tense": {
    title: "Future Tense",
    description: "Future Tense digunakan untuk membicarakan rencana, prediksi, janji, keputusan, atau kejadian yang akan terjadi di masa depan. Dalam modul ini, kamu mempelajari Simple Future, Future Continuous, dan Future Perfect.",

    formula: `
        <strong>Inti Materi:</strong><br>
        Simple Future = Subject + will + V1<br>
        Future Continuous = Subject + will be + V-ing<br>
        Future Perfect = Subject + will have + V3
    `,

    notes: [
        "Simple Future digunakan untuk kejadian yang akan terjadi.",
        "Simple Future verbal memakai will + V1.",
        "Simple Future nominal memakai will be + complement.",
        "Future Continuous digunakan untuk aktivitas yang sedang berlangsung pada waktu tertentu di masa depan.",
        "Future Continuous memakai will be + V-ing.",
        "Future Perfect digunakan untuk kejadian yang akan sudah selesai sebelum waktu tertentu di masa depan.",
        "Future Perfect memakai will have + V3.",
        "Future Perfect nominal memakai will have been + complement."
    ],

    patterns: [
        {
            group: "Simple Future",
            items: [
                {
                    label: "Verbal Positive",
                    formula: "Subject + will + V1",
                    examples: [
                        "I will study English tomorrow.",
                        "She will visit her grandmother.",
                        "They will play football next week."
                    ]
                },
                {
                    label: "Verbal Negative",
                    formula: "Subject + will + not + V1",
                    examples: [
                        "I will not study English tomorrow.",
                        "She will not visit her grandmother.",
                        "They will not play football next week."
                    ]
                },
                {
                    label: "Verbal Question",
                    formula: "Will + Subject + V1?",
                    examples: [
                        "Will you study English tomorrow?",
                        "Will she visit her grandmother?",
                        "Will they play football next week?"
                    ]
                },
                {
                    label: "Nominal Positive",
                    formula: "Subject + will be + Complement",
                    examples: [
                        "I will be busy tomorrow.",
                        "She will be a teacher.",
                        "They will be ready soon."
                    ]
                },
                {
                    label: "Nominal Negative",
                    formula: "Subject + will + not + be + Complement",
                    examples: [
                        "I will not be busy tomorrow.",
                        "She will not be a teacher.",
                        "They will not be ready soon."
                    ]
                },
                {
                    label: "Nominal Question",
                    formula: "Will + Subject + be + Complement?",
                    examples: [
                        "Will you be busy tomorrow?",
                        "Will she be a teacher?",
                        "Will they be ready soon?"
                    ]
                }
            ]
        },
        {
            group: "Future Continuous",
            items: [
                {
                    label: "Verbal Positive",
                    formula: "Subject + will be + V-ing",
                    examples: [
                        "I will be studying at 8 PM.",
                        "She will be reading a book tonight.",
                        "They will be playing football tomorrow afternoon."
                    ]
                },
                {
                    label: "Verbal Negative",
                    formula: "Subject + will + not + be + V-ing",
                    examples: [
                        "I will not be studying at 8 PM.",
                        "She will not be reading a book tonight.",
                        "They will not be playing football tomorrow afternoon."
                    ]
                },
                {
                    label: "Verbal Question",
                    formula: "Will + Subject + be + V-ing?",
                    examples: [
                        "Will you be studying at 8 PM?",
                        "Will she be reading a book tonight?",
                        "Will they be playing football tomorrow afternoon?"
                    ]
                }
            ]
        },

        {
            group: "Future Perfect",
            items: [
                {
                    label: "Verbal Positive",
                    formula: "Subject + will have + V3",
                    examples: [
                        "I will have finished my homework by 8 PM.",
                        "She will have eaten dinner before you arrive.",
                        "They will have completed the project by Monday."
                    ]
                },
                {
                    label: "Verbal Negative",
                    formula: "Subject + will + not + have + V3",
                    examples: [
                        "I will not have finished my homework by 8 PM.",
                        "She will not have eaten dinner before you arrive.",
                        "They will not have completed the project by Monday."
                    ]
                },
                {
                    label: "Verbal Question",
                    formula: "Will + Subject + have + V3?",
                    examples: [
                        "Will you have finished your homework by 8 PM?",
                        "Will she have eaten dinner before you arrive?",
                        "Will they have completed the project by Monday?"
                    ]
                },
                {
                    label: "Nominal Positive",
                    formula: "Subject + will have been + Complement",
                    examples: [
                        "I will have been ready before the meeting.",
                        "She will have been busy for two hours.",
                        "They will have been students for three years."
                    ]
                },
                {
                    label: "Nominal Negative",
                    formula: "Subject + will + not + have + been + Complement",
                    examples: [
                        "I will not have been ready before the meeting.",
                        "She will not have been busy for two hours.",
                        "They will not have been students for three years."
                    ]
                },
                {
                    label: "Nominal Question",
                    formula: "Will + Subject + have + been + Complement?",
                    examples: [
                        "Will you have been ready before the meeting?",
                        "Will she have been busy for two hours?",
                        "Will they have been students for three years?"
                    ]
                }
            ]
        }
    ],

    quiz: [
        {
            type: "Simple Verbal",
            question: "She ___ visit her grandmother tomorrow.",
            options: ["will", "is", "has", "did"],
            answer: "will",
            explanation: "Simple Future verbal memakai will + V1."
        },
        {
            type: "Simple Verbal",
            question: "They will ___ football next week.",
            options: ["play", "plays", "playing", "played"],
            answer: "play",
            explanation: "Setelah will, verb harus kembali ke V1."
        },
        {
            type: "Simple Verbal",
            question: "She will not ___ English tomorrow.",
            options: ["studies", "studying", "study", "studied"],
            answer: "study",
            explanation: "Negative Simple Future memakai will not + V1."
        },
        {
            type: "Simple Verbal",
            question: "___ you study English tomorrow?",
            options: ["Do", "Did", "Will", "Have"],
            answer: "Will",
            explanation: "Question Simple Future memakai Will + subject + V1."
        },
        {
            type: "Simple Nominal",
            question: "She will ___ a teacher.",
            options: ["is", "are", "be", "been"],
            answer: "be",
            explanation: "Simple Future nominal memakai will be + complement."
        },
        {
            type: "Simple Nominal",
            question: "They will ___ ready soon.",
            options: ["be", "are", "were", "been"],
            answer: "be",
            explanation: "Setelah will, bentuk be tetap be."
        },
        {
            type: "Simple Nominal",
            question: "She will not ___ busy tomorrow.",
            options: ["is", "be", "been", "being"],
            answer: "be",
            explanation: "Negative Simple Future nominal memakai will not be + complement."
        },
        {
            type: "Simple Nominal",
            question: "___ they be ready soon?",
            options: ["Do", "Did", "Will", "Have"],
            answer: "Will",
            explanation: "Question Simple Future nominal memakai Will + subject + be + complement."
        },
        {
            type: "Continuous",
            question: "She will be ___ a book tonight.",
            options: ["read", "reads", "reading", "readed"],
            answer: "reading",
            explanation: "Future Continuous memakai will be + V-ing."
        },
        {
            type: "Continuous",
            question: "They will be ___ football tomorrow afternoon.",
            options: ["play", "plays", "playing", "played"],
            answer: "playing",
            explanation: "Future Continuous memakai will be + V-ing."
        },
        {
            type: "Continuous",
            question: "I ___ be studying at 8 PM.",
            options: ["will", "am", "have", "did"],
            answer: "will",
            explanation: "Future Continuous memakai will be + V-ing."
        },
        {
            type: "Continuous",
            question: "Will she be ___ a book tonight?",
            options: ["read", "reads", "reading", "readed"],
            answer: "reading",
            explanation: "Question Future Continuous tetap memakai be + V-ing setelah subject."
        },
        {
            type: "Continuous",
            question: "They will not be ___ football.",
            options: ["play", "plays", "playing", "played"],
            answer: "playing",
            explanation: "Negative Future Continuous memakai will not be + V-ing."
        },
        {
            type: "Perfect Verbal",
            question: "She will have ___ dinner before you arrive.",
            options: ["eat", "eats", "eating", "eaten"],
            answer: "eaten",
            explanation: "Future Perfect memakai will have + V3."
        },
        {
            type: "Perfect Verbal",
            question: "They will have ___ the project by Monday.",
            options: ["complete", "completed", "completing", "completes"],
            answer: "completed",
            explanation: "Future Perfect memakai will have + V3."
        },
        {
            type: "Perfect Verbal",
            question: "I will not have ___ my homework by 8 PM.",
            options: ["finish", "finished", "finishing", "finishes"],
            answer: "finished",
            explanation: "Negative Future Perfect memakai will not have + V3."
        },
        {
            type: "Perfect Verbal",
            question: "___ you have finished your homework by 8 PM?",
            options: ["Do", "Did", "Will", "Have"],
            answer: "Will",
            explanation: "Question Future Perfect memakai Will + subject + have + V3."
        },
        {
            type: "Perfect Nominal",
            question: "She will have ___ busy for two hours.",
            options: ["be", "been", "being", "is"],
            answer: "been",
            explanation: "Future Perfect nominal memakai will have been + complement."
        },
        {
            type: "Perfect Nominal",
            question: "They will not have ___ students for three years.",
            options: ["be", "been", "being", "are"],
            answer: "been",
            explanation: "Negative Future Perfect nominal memakai will not have been + complement."
        },
        {
            type: "Concept",
            question: "Which tense uses Subject + will be + V-ing?",
            options: ["Simple Future", "Future Continuous", "Future Perfect", "Simple Present"],
            answer: "Future Continuous",
            explanation: "Future Continuous memakai will be + V-ing."
        }
    ]
},

"past-future-tense": {
    title: "Past Future Tense",
    description: "Past Future Tense digunakan untuk membicarakan rencana, prediksi, niat, atau kejadian masa depan yang dilihat dari sudut pandang masa lampau. Dalam modul ini, kamu mempelajari Simple Past Future, Past Future Continuous, dan Past Future Perfect.",

    formula: `
        <strong>Inti Materi:</strong><br>
        Simple Past Future = Subject + would + V1<br>
        Past Future Continuous = Subject + would be + V-ing<br>
        Past Future Perfect = Subject + would have + V3
    `,

    notes: [
        "Simple Past Future memakai would + V1.",
        "Simple Past Future nominal memakai would be + complement.",
        "Past Future Continuous memakai would be + V-ing.",
        "Past Future Perfect memakai would have + V3.",
        "Past Future Perfect nominal memakai would have been + complement.",
        "Past Future sering digunakan dalam reported speech atau kalimat pengandaian."
    ],

    patterns: [
        {
            group: "Simple Past Future",
            items: [
                {
                    label: "Verbal Positive",
                    formula: "Subject + would + V1",
                    examples: [
                        "I would study English.",
                        "She would visit her grandmother.",
                        "They would play football."
                    ]
                },
                {
                    label: "Verbal Negative",
                    formula: "Subject + would + not + V1",
                    examples: [
                        "I would not study English.",
                        "She would not visit her grandmother.",
                        "They would not play football."
                    ]
                },
                {
                    label: "Verbal Question",
                    formula: "Would + Subject + V1?",
                    examples: [
                        "Would you study English?",
                        "Would she visit her grandmother?",
                        "Would they play football?"
                    ]
                },
                {
                    label: "Nominal Positive",
                    formula: "Subject + would be + Complement",
                    examples: [
                        "I would be busy.",
                        "She would be a teacher.",
                        "They would be ready."
                    ]
                },
                {
                    label: "Nominal Negative",
                    formula: "Subject + would + not + be + Complement",
                    examples: [
                        "I would not be busy.",
                        "She would not be a teacher.",
                        "They would not be ready."
                    ]
                },
                {
                    label: "Nominal Question",
                    formula: "Would + Subject + be + Complement?",
                    examples: [
                        "Would you be busy?",
                        "Would she be a teacher?",
                        "Would they be ready?"
                    ]
                }
            ]
        },
        {
            group: "Past Future Continuous",
            items: [
                {
                    label: "Verbal Positive",
                    formula: "Subject + would be + V-ing",
                    examples: [
                        "I would be studying at that time.",
                        "She would be reading a book.",
                        "They would be playing football."
                    ]
                },
                {
                    label: "Verbal Negative",
                    formula: "Subject + would + not + be + V-ing",
                    examples: [
                        "I would not be studying at that time.",
                        "She would not be reading a book.",
                        "They would not be playing football."
                    ]
                },
                {
                    label: "Verbal Question",
                    formula: "Would + Subject + be + V-ing?",
                    examples: [
                        "Would you be studying at that time?",
                        "Would she be reading a book?",
                        "Would they be playing football?"
                    ]
                }
            ]
        },
        {
            group: "Past Future Perfect",
            items: [
                {
                    label: "Verbal Positive",
                    formula: "Subject + would have + V3",
                    examples: [
                        "I would have finished my homework.",
                        "She would have eaten dinner.",
                        "They would have completed the project."
                    ]
                },
                {
                    label: "Verbal Negative",
                    formula: "Subject + would + not + have + V3",
                    examples: [
                        "I would not have finished my homework.",
                        "She would not have eaten dinner.",
                        "They would not have completed the project."
                    ]
                },
                {
                    label: "Verbal Question",
                    formula: "Would + Subject + have + V3?",
                    examples: [
                        "Would you have finished your homework?",
                        "Would she have eaten dinner?",
                        "Would they have completed the project?"
                    ]
                },
                {
                    label: "Nominal Positive",
                    formula: "Subject + would have been + Complement",
                    examples: [
                        "I would have been ready.",
                        "She would have been busy.",
                        "They would have been students."
                    ]
                },
                {
                    label: "Nominal Negative",
                    formula: "Subject + would + not + have + been + Complement",
                    examples: [
                        "I would not have been ready.",
                        "She would not have been busy.",
                        "They would not have been students."
                    ]
                },
                {
                    label: "Nominal Question",
                    formula: "Would + Subject + have + been + Complement?",
                    examples: [
                        "Would you have been ready?",
                        "Would she have been busy?",
                        "Would they have been students?"
                    ]
                }
            ]
        }
    ],

    quiz: [
        {
            type: "Simple Verbal",
            question: "She ___ visit her grandmother.",
            options: ["would", "is", "has", "did"],
            answer: "would",
            explanation: "Simple Past Future verbal memakai would + V1."
        },
        {
            type: "Simple Verbal",
            question: "They would ___ football.",
            options: ["play", "plays", "playing", "played"],
            answer: "play",
            explanation: "Setelah would, verb harus kembali ke V1."
        },
        {
            type: "Simple Verbal",
            question: "She would not ___ English.",
            options: ["studies", "studying", "study", "studied"],
            answer: "study",
            explanation: "Negative Simple Past Future memakai would not + V1."
        },
        {
            type: "Simple Verbal",
            question: "___ you study English?",
            options: ["Do", "Did", "Would", "Have"],
            answer: "Would",
            explanation: "Question Simple Past Future memakai Would + subject + V1."
        },
        {
            type: "Simple Nominal",
            question: "She would ___ a teacher.",
            options: ["is", "are", "be", "been"],
            answer: "be",
            explanation: "Simple Past Future nominal memakai would be + complement."
        },
        {
            type: "Simple Nominal",
            question: "They would ___ ready.",
            options: ["be", "are", "were", "been"],
            answer: "be",
            explanation: "Setelah would, bentuk be tetap be."
        },
        {
            type: "Simple Nominal",
            question: "She would not ___ busy.",
            options: ["is", "be", "been", "being"],
            answer: "be",
            explanation: "Negative Simple Past Future nominal memakai would not be + complement."
        },
        {
            type: "Simple Nominal",
            question: "___ they be ready?",
            options: ["Do", "Did", "Would", "Have"],
            answer: "Would",
            explanation: "Question Simple Past Future nominal memakai Would + subject + be + complement."
        },
        {
            type: "Continuous",
            question: "She would be ___ a book.",
            options: ["read", "reads", "reading", "readed"],
            answer: "reading",
            explanation: "Past Future Continuous memakai would be + V-ing."
        },
        {
            type: "Continuous",
            question: "They would be ___ football.",
            options: ["play", "plays", "playing", "played"],
            answer: "playing",
            explanation: "Past Future Continuous memakai would be + V-ing."
        },
        {
            type: "Continuous",
            question: "I ___ be studying at that time.",
            options: ["would", "am", "have", "did"],
            answer: "would",
            explanation: "Past Future Continuous memakai would be + V-ing."
        },
        {
            type: "Continuous",
            question: "Would she be ___ a book?",
            options: ["read", "reads", "reading", "readed"],
            answer: "reading",
            explanation: "Question Past Future Continuous tetap memakai be + V-ing setelah subject."
        },
        {
            type: "Continuous",
            question: "They would not be ___ football.",
            options: ["play", "plays", "playing", "played"],
            answer: "playing",
            explanation: "Negative Past Future Continuous memakai would not be + V-ing."
        },
        {
            type: "Perfect Verbal",
            question: "She would have ___ dinner.",
            options: ["eat", "eats", "eating", "eaten"],
            answer: "eaten",
            explanation: "Past Future Perfect memakai would have + V3."
        },
        {
            type: "Perfect Verbal",
            question: "They would have ___ the project.",
            options: ["complete", "completed", "completing", "completes"],
            answer: "completed",
            explanation: "Past Future Perfect memakai would have + V3."
        },
        {
            type: "Perfect Verbal",
            question: "I would not have ___ my homework.",
            options: ["finish", "finished", "finishing", "finishes"],
            answer: "finished",
            explanation: "Negative Past Future Perfect memakai would not have + V3."
        },
        {
            type: "Perfect Verbal",
            question: "___ you have finished your homework?",
            options: ["Do", "Did", "Would", "Have"],
            answer: "Would",
            explanation: "Question Past Future Perfect memakai Would + subject + have + V3."
        },
        {
            type: "Perfect Nominal",
            question: "She would have ___ busy.",
            options: ["be", "been", "being", "is"],
            answer: "been",
            explanation: "Past Future Perfect nominal memakai would have been + complement."
        },
        {
            type: "Perfect Nominal",
            question: "They would not have ___ students.",
            options: ["be", "been", "being", "are"],
            answer: "been",
            explanation: "Negative Past Future Perfect nominal memakai would not have been + complement."
        },
        {
            type: "Concept",
            question: "Which tense uses Subject + would be + V-ing?",
            options: [
                "Simple Past Future",
                "Past Future Continuous",
                "Past Future Perfect",
                "Simple Past"
            ],
            answer: "Past Future Continuous",
            explanation: "Past Future Continuous memakai would be + V-ing."
        }
    ]
},

"present-passive": {
    title: "Present Passive",
    description: "Present Passive digunakan ketika fokus kalimat berada pada objek yang menerima aksi, bukan pada pelaku aksi. Dalam bentuk present, passive voice mengikuti pola be + V3 sesuai tense-nya.",

    formula: `
        <strong>Inti Materi:</strong><br>
        Simple Present Passive = Subject + am/is/are + V3<br>
        Present Continuous Passive = Subject + am/is/are + being + V3<br>
        Present Perfect Passive = Subject + have/has + been + V3
    `,

    notes: [
        "Passive voice digunakan saat fokus kalimat adalah penerima aksi.",
        "Object pada active voice menjadi subject pada passive voice.",
        "Verb passive selalu menggunakan V3.",
        "Simple Present Passive memakai am/is/are + V3.",
        "Present Continuous Passive memakai am/is/are + being + V3.",
        "Present Perfect Passive memakai have/has + been + V3.",
        "Pelaku aksi dapat ditambahkan dengan by, tetapi tidak selalu wajib."
    ],

    patterns: [
        {
            group: "Simple Present Passive",
            items: [
                {
                    label: "Positive",
                    formula: "Subject + am/is/are + V3",
                    examples: [
                        "English is spoken worldwide.",
                        "The room is cleaned every day.",
                        "The books are arranged neatly."
                    ]
                },
                {
                    label: "Negative",
                    formula: "Subject + am/is/are + not + V3",
                    examples: [
                        "English is not spoken here.",
                        "The room is not cleaned every day.",
                        "The books are not arranged neatly."
                    ]
                },
                {
                    label: "Question",
                    formula: "Am/Is/Are + Subject + V3?",
                    examples: [
                        "Is English spoken worldwide?",
                        "Is the room cleaned every day?",
                        "Are the books arranged neatly?"
                    ]
                },
                {
                    label: "Active to Passive",
                    formula: "Active: Subject + V1(s/es) + Object → Passive: Object + am/is/are + V3",
                    examples: [
                        "Active: She writes a letter.",
                        "Passive: A letter is written by her.",
                        "Active: They clean the room.",
                        "Passive: The room is cleaned by them."
                    ]
                }
            ]
        },
        {
            group: "Present Continuous Passive",
            items: [
                {
                    label: "Positive",
                    formula: "Subject + am/is/are + being + V3",
                    examples: [
                        "The house is being painted.",
                        "The food is being prepared.",
                        "The rooms are being cleaned."
                    ]
                },
                {
                    label: "Negative",
                    formula: "Subject + am/is/are + not + being + V3",
                    examples: [
                        "The house is not being painted.",
                        "The food is not being prepared.",
                        "The rooms are not being cleaned."
                    ]
                },
                {
                    label: "Question",
                    formula: "Am/Is/Are + Subject + being + V3?",
                    examples: [
                        "Is the house being painted?",
                        "Is the food being prepared?",
                        "Are the rooms being cleaned?"
                    ]
                },
                {
                    label: "Active to Passive",
                    formula: "Active: Subject + am/is/are + V-ing + Object → Passive: Object + am/is/are + being + V3",
                    examples: [
                        "Active: She is writing a letter.",
                        "Passive: A letter is being written by her.",
                        "Active: They are cleaning the rooms.",
                        "Passive: The rooms are being cleaned by them."
                    ]
                }
            ]
        },
        {
            group: "Present Perfect Passive",
            items: [
                {
                    label: "Positive",
                    formula: "Subject + have/has + been + V3",
                    examples: [
                        "The work has been finished.",
                        "The report has been submitted.",
                        "The letters have been sent."
                    ]
                },
                {
                    label: "Negative",
                    formula: "Subject + have/has + not + been + V3",
                    examples: [
                        "The work has not been finished.",
                        "The report has not been submitted.",
                        "The letters have not been sent."
                    ]
                },
                {
                    label: "Question",
                    formula: "Have/Has + Subject + been + V3?",
                    examples: [
                        "Has the work been finished?",
                        "Has the report been submitted?",
                        "Have the letters been sent?"
                    ]
                },
                {
                    label: "Active to Passive",
                    formula: "Active: Subject + have/has + V3 + Object → Passive: Object + have/has + been + V3",
                    examples: [
                        "Active: She has written a letter.",
                        "Passive: A letter has been written by her.",
                        "Active: They have sent the letters.",
                        "Passive: The letters have been sent by them."
                    ]
                }
            ]
        }
    ],

    quiz: [
        {
            type: "Simple Passive",
            question: "English ___ spoken worldwide.",
            options: ["is", "are", "am", "has"],
            answer: "is",
            explanation: "Simple Present Passive memakai am/is/are + V3. Subject English memakai is."
        },
        {
            type: "Simple Passive",
            question: "The rooms ___ cleaned every day.",
            options: ["is", "are", "am", "has"],
            answer: "are",
            explanation: "Subject plural 'The rooms' memakai are + V3."
        },
        {
            type: "Simple Passive",
            question: "The letter is ___ by her.",
            options: ["write", "writes", "written", "writing"],
            answer: "written",
            explanation: "Passive voice selalu memakai V3. V3 dari write adalah written."
        },
        {
            type: "Simple Passive",
            question: "Which sentence is Simple Present Passive?",
            options: [
                "She writes a letter.",
                "A letter is written by her.",
                "She is writing a letter.",
                "She has written a letter."
            ],
            answer: "A letter is written by her.",
            explanation: "Simple Present Passive memakai is/am/are + V3."
        },
        {
            type: "Simple Passive",
            question: "Active: They clean the room. Passive form is...",
            options: [
                "The room is cleaned by them.",
                "The room are cleaned by them.",
                "The room is cleaning by them.",
                "The room has cleaned by them."
            ],
            answer: "The room is cleaned by them.",
            explanation: "Object 'the room' menjadi subject, lalu memakai is + V3."
        },
        {
            type: "Continuous Passive",
            question: "The house ___ being painted.",
            options: ["is", "are", "has", "have"],
            answer: "is",
            explanation: "Present Continuous Passive memakai am/is/are + being + V3."
        },
        {
            type: "Continuous Passive",
            question: "The rooms are being ___.",
            options: ["clean", "cleans", "cleaning", "cleaned"],
            answer: "cleaned",
            explanation: "Setelah being dalam passive voice, verb harus V3."
        },
        {
            type: "Continuous Passive",
            question: "Which sentence is Present Continuous Passive?",
            options: [
                "The food is being prepared.",
                "The food is prepared.",
                "She is preparing the food.",
                "The food has been prepared."
            ],
            answer: "The food is being prepared.",
            explanation: "Present Continuous Passive memakai is/am/are + being + V3."
        },
        {
            type: "Continuous Passive",
            question: "Active: She is writing a letter. Passive form is...",
            options: [
                "A letter is written by her.",
                "A letter is being written by her.",
                "A letter has been written by her.",
                "A letter was written by her."
            ],
            answer: "A letter is being written by her.",
            explanation: "Present Continuous Passive memakai is + being + V3."
        },
        {
            type: "Continuous Passive",
            question: "The report is not being ___.",
            options: ["prepare", "prepares", "preparing", "prepared"],
            answer: "prepared",
            explanation: "Negative Present Continuous Passive tetap memakai being + V3."
        },
        {
            type: "Perfect Passive",
            question: "The work has ___ finished.",
            options: ["be", "been", "being", "is"],
            answer: "been",
            explanation: "Present Perfect Passive memakai has/have + been + V3."
        },
        {
            type: "Perfect Passive",
            question: "The letters have been ___.",
            options: ["send", "sends", "sending", "sent"],
            answer: "sent",
            explanation: "Passive voice memakai V3. V3 dari send adalah sent."
        },
        {
            type: "Perfect Passive",
            question: "Which sentence is Present Perfect Passive?",
            options: [
                "The report is submitted.",
                "The report is being submitted.",
                "The report has been submitted.",
                "She has submitted the report."
            ],
            answer: "The report has been submitted.",
            explanation: "Present Perfect Passive memakai has/have been + V3."
        },
        {
            type: "Perfect Passive",
            question: "Active: She has written a letter. Passive form is...",
            options: [
                "A letter is written by her.",
                "A letter is being written by her.",
                "A letter has been written by her.",
                "A letter was written by her."
            ],
            answer: "A letter has been written by her.",
            explanation: "Present Perfect Passive memakai has been + V3."
        },
        {
            type: "Perfect Passive",
            question: "Have the letters ___ sent?",
            options: ["be", "been", "being", "are"],
            answer: "been",
            explanation: "Question Present Perfect Passive memakai Have/Has + subject + been + V3."
        },
        {
            type: "Concept",
            question: "Passive voice focuses on...",
            options: [
                "The receiver of the action",
                "The action only",
                "The adjective",
                "The conjunction"
            ],
            answer: "The receiver of the action",
            explanation: "Passive voice menekankan penerima aksi."
        },
        {
            type: "Concept",
            question: "Passive voice always uses...",
            options: ["V1", "V2", "V3", "V-ing"],
            answer: "V3",
            explanation: "Passive voice selalu memakai past participle atau V3."
        },
        {
            type: "Concept",
            question: "The word 'by' is used to show...",
            options: ["The doer of the action", "The place", "The time", "The adjective"],
            answer: "The doer of the action",
            explanation: "By digunakan untuk menunjukkan pelaku aksi dalam passive voice."
        },
        {
            type: "Transform",
            question: "Active: They prepare the food. Passive form is...",
            options: [
                "The food is prepared by them.",
                "The food are prepared by them.",
                "The food is preparing by them.",
                "The food has prepared by them."
            ],
            answer: "The food is prepared by them.",
            explanation: "Object 'the food' menjadi subject, lalu memakai is + V3."
        },
        {
            type: "Transform",
            question: "Active: They are cleaning the rooms. Passive form is...",
            options: [
                "The rooms are cleaned by them.",
                "The rooms are being cleaned by them.",
                "The rooms have been cleaned by them.",
                "The rooms were cleaned by them."
            ],
            answer: "The rooms are being cleaned by them.",
            explanation: "Present Continuous Passive memakai are being + V3."
        }
    ]
},

"past-passive": {
    title: "Past Passive",
    description: "Past Passive digunakan ketika fokus kalimat berada pada penerima aksi yang terjadi di masa lampau. Bentuk passive ini memakai was/were, was/were being, atau had been + V3 sesuai bentuk past tense-nya.",

    formula: `
        <strong>Inti Materi:</strong><br>
        Simple Past Passive = Subject + was/were + V3<br>
        Past Continuous Passive = Subject + was/were + being + V3<br>
        Past Perfect Passive = Subject + had + been + V3
    `,

    notes: [
        "Simple Past Passive memakai was/were + V3.",
        "Past Continuous Passive memakai was/were + being + V3.",
        "Past Perfect Passive memakai had been + V3.",
        "Object pada active voice menjadi subject pada passive voice.",
        "Verb passive selalu memakai V3.",
        "Pelaku aksi bisa ditambahkan dengan by."
    ],

    patterns: [
        {
            group: "Simple Past Passive",
            items: [
                {
                    label: "Positive",
                    formula: "Subject + was/were + V3",
                    examples: [
                        "The letter was written by her.",
                        "The room was cleaned yesterday.",
                        "The books were arranged neatly."
                    ]
                },
                {
                    label: "Negative",
                    formula: "Subject + was/were + not + V3",
                    examples: [
                        "The letter was not written by her.",
                        "The room was not cleaned yesterday.",
                        "The books were not arranged neatly."
                    ]
                },
                {
                    label: "Question",
                    formula: "Was/Were + Subject + V3?",
                    examples: [
                        "Was the letter written by her?",
                        "Was the room cleaned yesterday?",
                        "Were the books arranged neatly?"
                    ]
                },
                {
                    label: "Active to Passive",
                    formula: "Active: Subject + V2 + Object → Passive: Object + was/were + V3",
                    examples: [
                        "Active: She wrote a letter.",
                        "Passive: A letter was written by her.",
                        "Active: They cleaned the rooms.",
                        "Passive: The rooms were cleaned by them."
                    ]
                }
            ]
        },
        {
            group: "Past Continuous Passive",
            items: [
                {
                    label: "Positive",
                    formula: "Subject + was/were + being + V3",
                    examples: [
                        "The letter was being written.",
                        "The house was being painted.",
                        "The rooms were being cleaned."
                    ]
                },
                {
                    label: "Negative",
                    formula: "Subject + was/were + not + being + V3",
                    examples: [
                        "The letter was not being written.",
                        "The house was not being painted.",
                        "The rooms were not being cleaned."
                    ]
                },
                {
                    label: "Question",
                    formula: "Was/Were + Subject + being + V3?",
                    examples: [
                        "Was the letter being written?",
                        "Was the house being painted?",
                        "Were the rooms being cleaned?"
                    ]
                },
                {
                    label: "Active to Passive",
                    formula: "Active: Subject + was/were + V-ing + Object → Passive: Object + was/were + being + V3",
                    examples: [
                        "Active: She was writing a letter.",
                        "Passive: A letter was being written by her.",
                        "Active: They were cleaning the rooms.",
                        "Passive: The rooms were being cleaned by them."
                    ]
                }
            ]
        },
        {
            group: "Past Perfect Passive",
            items: [
                {
                    label: "Positive",
                    formula: "Subject + had + been + V3",
                    examples: [
                        "The work had been finished before dinner.",
                        "The report had been submitted before the meeting.",
                        "The letters had been sent before noon."
                    ]
                },
                {
                    label: "Negative",
                    formula: "Subject + had + not + been + V3",
                    examples: [
                        "The work had not been finished before dinner.",
                        "The report had not been submitted before the meeting.",
                        "The letters had not been sent before noon."
                    ]
                },
                {
                    label: "Question",
                    formula: "Had + Subject + been + V3?",
                    examples: [
                        "Had the work been finished before dinner?",
                        "Had the report been submitted before the meeting?",
                        "Had the letters been sent before noon?"
                    ]
                },
                {
                    label: "Active to Passive",
                    formula: "Active: Subject + had + V3 + Object → Passive: Object + had been + V3",
                    examples: [
                        "Active: She had written a letter.",
                        "Passive: A letter had been written by her.",
                        "Active: They had sent the letters.",
                        "Passive: The letters had been sent by them."
                    ]
                }
            ]
        }
    ],

    quiz: [
        {
            type: "Simple Passive",
            question: "The letter ___ written by her.",
            options: ["is", "was", "were", "has"],
            answer: "was",
            explanation: "Simple Past Passive memakai was/were + V3. Subject 'The letter' memakai was."
        },
        {
            type: "Simple Passive",
            question: "The rooms ___ cleaned yesterday.",
            options: ["is", "are", "was", "were"],
            answer: "were",
            explanation: "Subject plural 'The rooms' memakai were + V3."
        },
        {
            type: "Simple Passive",
            question: "The book was ___ by John.",
            options: ["write", "writes", "written", "writing"],
            answer: "written",
            explanation: "Passive voice selalu memakai V3. V3 dari write adalah written."
        },
        {
            type: "Simple Passive",
            question: "Which sentence is Simple Past Passive?",
            options: [
                "She wrote a letter.",
                "A letter was written by her.",
                "She was writing a letter.",
                "A letter had been written by her."
            ],
            answer: "A letter was written by her.",
            explanation: "Simple Past Passive memakai was/were + V3."
        },
        {
            type: "Simple Passive",
            question: "Active: They cleaned the room. Passive form is...",
            options: [
                "The room is cleaned by them.",
                "The room was cleaned by them.",
                "The room was being cleaned by them.",
                "The room had been cleaned by them."
            ],
            answer: "The room was cleaned by them.",
            explanation: "Simple Past Passive memakai was/were + V3."
        },
        {
            type: "Continuous Passive",
            question: "The house ___ being painted.",
            options: ["is", "are", "was", "has"],
            answer: "was",
            explanation: "Past Continuous Passive memakai was/were + being + V3."
        },
        {
            type: "Continuous Passive",
            question: "The rooms were being ___.",
            options: ["clean", "cleans", "cleaning", "cleaned"],
            answer: "cleaned",
            explanation: "Setelah being dalam passive voice, verb harus V3."
        },
        {
            type: "Continuous Passive",
            question: "Which sentence is Past Continuous Passive?",
            options: [
                "The food was being prepared.",
                "The food was prepared.",
                "She was preparing the food.",
                "The food had been prepared."
            ],
            answer: "The food was being prepared.",
            explanation: "Past Continuous Passive memakai was/were + being + V3."
        },
        {
            type: "Continuous Passive",
            question: "Active: She was writing a letter. Passive form is...",
            options: [
                "A letter was written by her.",
                "A letter was being written by her.",
                "A letter had been written by her.",
                "A letter is written by her."
            ],
            answer: "A letter was being written by her.",
            explanation: "Past Continuous Passive memakai was/were being + V3."
        },
        {
            type: "Continuous Passive",
            question: "The report was not being ___.",
            options: ["prepare", "prepares", "preparing", "prepared"],
            answer: "prepared",
            explanation: "Negative Past Continuous Passive tetap memakai being + V3."
        },
        {
            type: "Perfect Passive",
            question: "The work had ___ finished before dinner.",
            options: ["be", "been", "being", "was"],
            answer: "been",
            explanation: "Past Perfect Passive memakai had been + V3."
        },
        {
            type: "Perfect Passive",
            question: "The letters had been ___.",
            options: ["send", "sends", "sending", "sent"],
            answer: "sent",
            explanation: "Passive voice memakai V3. V3 dari send adalah sent."
        },
        {
            type: "Perfect Passive",
            question: "Which sentence is Past Perfect Passive?",
            options: [
                "The report was submitted.",
                "The report was being submitted.",
                "The report had been submitted.",
                "She had submitted the report."
            ],
            answer: "The report had been submitted.",
            explanation: "Past Perfect Passive memakai had been + V3."
        },
        {
            type: "Perfect Passive",
            question: "Active: She had written a letter. Passive form is...",
            options: [
                "A letter was written by her.",
                "A letter was being written by her.",
                "A letter had been written by her.",
                "A letter has been written by her."
            ],
            answer: "A letter had been written by her.",
            explanation: "Past Perfect Passive memakai had been + V3."
        },
        {
            type: "Perfect Passive",
            question: "Had the letters ___ sent?",
            options: ["be", "been", "being", "were"],
            answer: "been",
            explanation: "Question Past Perfect Passive memakai Had + subject + been + V3."
        },
        {
            type: "Concept",
            question: "Past Passive still uses...",
            options: ["V1", "V2", "V3", "V-ing only"],
            answer: "V3",
            explanation: "Semua passive voice memakai V3."
        },
        {
            type: "Concept",
            question: "In passive voice, the object of active voice becomes...",
            options: ["Subject", "Adverb", "Conjunction", "Article"],
            answer: "Subject",
            explanation: "Object pada active voice berubah menjadi subject pada passive voice."
        },
        {
            type: "Transform",
            question: "Active: They were cleaning the rooms. Passive form is...",
            options: [
                "The rooms were cleaned by them.",
                "The rooms were being cleaned by them.",
                "The rooms had been cleaned by them.",
                "The rooms are being cleaned by them."
            ],
            answer: "The rooms were being cleaned by them.",
            explanation: "Past Continuous Passive memakai were being + V3."
        },
        {
            type: "Transform",
            question: "Active: They had sent the letters. Passive form is...",
            options: [
                "The letters were sent by them.",
                "The letters were being sent by them.",
                "The letters had been sent by them.",
                "The letters have been sent by them."
            ],
            answer: "The letters had been sent by them.",
            explanation: "Past Perfect Passive memakai had been + V3."
        },
        {
            type: "Concept",
            question: "Which tense uses Subject + had been + V3?",
            options: [
                "Simple Past Passive",
                "Past Continuous Passive",
                "Past Perfect Passive",
                "Present Perfect Passive"
            ],
            answer: "Past Perfect Passive",
            explanation: "Past Perfect Passive memakai had been + V3."
        }
    ]
},


"future-passive": {
    title: "Future Passive",
    description: "Future Passive digunakan ketika fokus kalimat berada pada penerima aksi yang akan terjadi di masa depan. Bentuk yang paling sering digunakan adalah Simple Future Passive dan Future Perfect Passive.",

    formula: `
        <strong>Inti Materi:</strong><br>
        Simple Future Passive = Subject + will be + V3<br>
        Future Perfect Passive = Subject + will have been + V3
    `,

    notes: [
        "Simple Future Passive memakai will be + V3.",
        "Future Perfect Passive memakai will have been + V3.",
        "Future Continuous Passive secara teori berbentuk will be being + V3.",
        "Namun Future Continuous Passive sangat jarang digunakan dalam Bahasa Inggris modern.",
        "Dalam penggunaan nyata, Simple Future Passive biasanya lebih natural.",
        "Passive voice selalu memakai V3.",
        "Pelaku aksi bisa ditambahkan dengan by jika diperlukan."
    ],

    patterns: [
        {
            group: "Simple Future Passive",
            items: [
                {
                    label: "Positive",
                    formula: "Subject + will be + V3",
                    examples: [
                        "The report will be submitted tomorrow.",
                        "The room will be cleaned tonight.",
                        "English will be taught next semester."
                    ]
                },
                {
                    label: "Negative",
                    formula: "Subject + will + not + be + V3",
                    examples: [
                        "The report will not be submitted tomorrow.",
                        "The room will not be cleaned tonight.",
                        "English will not be taught next semester."
                    ]
                },
                {
                    label: "Question",
                    formula: "Will + Subject + be + V3?",
                    examples: [
                        "Will the report be submitted tomorrow?",
                        "Will the room be cleaned tonight?",
                        "Will English be taught next semester?"
                    ]
                },
                {
                    label: "Active to Passive",
                    formula: "Active: Subject + will + V1 + Object → Passive: Object + will be + V3",
                    examples: [
                        "Active: She will submit the report.",
                        "Passive: The report will be submitted by her.",
                        "Active: They will clean the room.",
                        "Passive: The room will be cleaned by them."
                    ]
                }
            ]
        },
        {
            group: "Future Continuous Passive",
            items: [
                {
                    label: "Rare Form",
                    formula: "Subject + will be being + V3",
                    examples: [
                        "The room will be being cleaned.",
                        "The report will be being checked."
                    ]
                },
                {
                    label: "Better Alternative",
                    formula: "Use Simple Future Passive instead",
                    examples: [
                        "The room will be cleaned.",
                        "The report will be checked."
                    ]
                },
                {
                    label: "Usage Note",
                    formula: "will be being + V3 is grammatically possible but rarely used",
                    examples: [
                        "Better: The food will be prepared soon.",
                        "Better: The project will be reviewed tomorrow."
                    ]
                }
            ]
        },
        {
            group: "Future Perfect Passive",
            items: [
                {
                    label: "Positive",
                    formula: "Subject + will have been + V3",
                    examples: [
                        "The project will have been completed by Friday.",
                        "The report will have been submitted before noon.",
                        "The letters will have been sent before tomorrow."
                    ]
                },
                {
                    label: "Negative",
                    formula: "Subject + will + not + have + been + V3",
                    examples: [
                        "The project will not have been completed by Friday.",
                        "The report will not have been submitted before noon.",
                        "The letters will not have been sent before tomorrow."
                    ]
                },
                {
                    label: "Question",
                    formula: "Will + Subject + have been + V3?",
                    examples: [
                        "Will the project have been completed by Friday?",
                        "Will the report have been submitted before noon?",
                        "Will the letters have been sent before tomorrow?"
                    ]
                },
                {
                    label: "Active to Passive",
                    formula: "Active: Subject + will have + V3 + Object → Passive: Object + will have been + V3",
                    examples: [
                        "Active: She will have submitted the report.",
                        "Passive: The report will have been submitted by her.",
                        "Active: They will have completed the project.",
                        "Passive: The project will have been completed by them."
                    ]
                }
            ]
        }
    ],

    quiz: [
        {
            type: "Simple Passive",
            question: "The report ___ submitted tomorrow.",
            options: ["will be", "will", "will have", "is being"],
            answer: "will be",
            explanation: "Simple Future Passive memakai will be + V3."
        },
        {
            type: "Simple Passive",
            question: "The room will be ___.",
            options: ["clean", "cleans", "cleaning", "cleaned"],
            answer: "cleaned",
            explanation: "Passive voice selalu memakai V3. V3 dari clean adalah cleaned."
        },
        {
            type: "Simple Passive",
            question: "English will be ___ next semester.",
            options: ["teach", "teaches", "teaching", "taught"],
            answer: "taught",
            explanation: "V3 dari teach adalah taught."
        },
        {
            type: "Simple Passive",
            question: "The report will not be ___ tomorrow.",
            options: ["submit", "submits", "submitted", "submitting"],
            answer: "submitted",
            explanation: "Negative Simple Future Passive tetap memakai will not be + V3."
        },
        {
            type: "Simple Passive",
            question: "___ the room be cleaned tonight?",
            options: ["Do", "Did", "Will", "Have"],
            answer: "Will",
            explanation: "Question Simple Future Passive memakai Will + subject + be + V3."
        },
        {
            type: "Simple Passive",
            question: "Which sentence is Simple Future Passive?",
            options: [
                "She will submit the report.",
                "The report will be submitted.",
                "She is submitting the report.",
                "The report has been submitted."
            ],
            answer: "The report will be submitted.",
            explanation: "Simple Future Passive memakai will be + V3."
        },
        {
            type: "Transform",
            question: "Active: They will clean the room. Passive form is...",
            options: [
                "The room will clean by them.",
                "The room will be cleaned by them.",
                "The room will have cleaned by them.",
                "The room is being cleaned by them."
            ],
            answer: "The room will be cleaned by them.",
            explanation: "Object 'the room' menjadi subject, lalu memakai will be + V3."
        },
        {
            type: "Transform",
            question: "Active: She will write a letter. Passive form is...",
            options: [
                "A letter will be written by her.",
                "A letter will written by her.",
                "A letter will have written by her.",
                "A letter is written by her."
            ],
            answer: "A letter will be written by her.",
            explanation: "Simple Future Passive memakai will be + V3."
        },
        {
            type: "Simple Passive",
            question: "The food will be ___ soon.",
            options: ["prepare", "prepares", "prepared", "preparing"],
            answer: "prepared",
            explanation: "Passive voice memakai V3."
        },
        {
            type: "Simple Passive",
            question: "The documents will ___ checked later.",
            options: ["be", "been", "being", "are"],
            answer: "be",
            explanation: "Simple Future Passive memakai will be + V3."
        },
        {
            type: "Perfect Passive",
            question: "The project will have ___ completed by Friday.",
            options: ["be", "been", "being", "is"],
            answer: "been",
            explanation: "Future Perfect Passive memakai will have been + V3."
        },
        {
            type: "Perfect Passive",
            question: "The letters will have been ___.",
            options: ["send", "sends", "sending", "sent"],
            answer: "sent",
            explanation: "Passive voice memakai V3. V3 dari send adalah sent."
        },
        {
            type: "Perfect Passive",
            question: "The report will not have been ___ before noon.",
            options: ["submit", "submits", "submitted", "submitting"],
            answer: "submitted",
            explanation: "Negative Future Perfect Passive memakai will not have been + V3."
        },
        {
            type: "Perfect Passive",
            question: "___ the project have been completed by Friday?",
            options: ["Do", "Did", "Will", "Has"],
            answer: "Will",
            explanation: "Question Future Perfect Passive memakai Will + subject + have been + V3."
        },
        {
            type: "Perfect Passive",
            question: "Which sentence is Future Perfect Passive?",
            options: [
                "The project will be completed.",
                "The project will have been completed.",
                "They will complete the project.",
                "They will have completed the project."
            ],
            answer: "The project will have been completed.",
            explanation: "Future Perfect Passive memakai will have been + V3."
        },
        {
            type: "Transform",
            question: "Active: They will have completed the project. Passive form is...",
            options: [
                "The project will be completed by them.",
                "The project will have been completed by them.",
                "The project has been completed by them.",
                "The project is completed by them."
            ],
            answer: "The project will have been completed by them.",
            explanation: "Future Perfect Passive memakai will have been + V3."
        },
        {
            type: "Transform",
            question: "Active: She will have submitted the report. Passive form is...",
            options: [
                "The report will be submitted by her.",
                "The report will have been submitted by her.",
                "The report has been submitted by her.",
                "The report was submitted by her."
            ],
            answer: "The report will have been submitted by her.",
            explanation: "Future Perfect Passive memakai will have been + V3."
        },
        {
            type: "Concept",
            question: "Future Continuous Passive uses...",
            options: [
                "will be being + V3",
                "will be + V1",
                "will have + V1",
                "will + V-ing"
            ],
            answer: "will be being + V3",
            explanation: "Secara teori Future Continuous Passive memakai will be being + V3, tetapi bentuk ini sangat jarang digunakan."
        },
        {
            type: "Concept",
            question: "Which form is more natural than 'will be being cleaned'?",
            options: [
                "will be cleaned",
                "will clean",
                "will have clean",
                "will cleaning"
            ],
            answer: "will be cleaned",
            explanation: "Dalam penggunaan modern, Simple Future Passive lebih natural daripada Future Continuous Passive."
        },
        {
            type: "Concept",
            question: "Passive voice focuses on...",
            options: [
                "The receiver of the action",
                "The doer only",
                "The adjective",
                "The conjunction"
            ],
            answer: "The receiver of the action",
            explanation: "Passive voice menekankan penerima aksi."
        }
    ]
},


"modal-passive": {
    title: "Modal Passive",
    description: "Modal Passive digunakan ketika kalimat pasif memakai modal seperti can, could, may, might, must, should, have to, dan need to. Fokus kalimat tetap pada penerima aksi, bukan pelaku aksi.",

    formula: `
        <strong>Inti Materi:</strong><br>
        Modal Passive = Subject + modal + be + V3<br>
        Semi Modal Passive = Subject + have to / need to + be + V3
    `,

    notes: [
        "Modal Passive memakai modal + be + V3.",
        "Can be + V3 digunakan untuk menyatakan sesuatu yang bisa dilakukan.",
        "Must be + V3 digunakan untuk menyatakan kewajiban kuat.",
        "Should be + V3 digunakan untuk memberi saran.",
        "May/Might be + V3 digunakan untuk kemungkinan.",
        "Have to be + V3 dan need to be + V3 juga termasuk bentuk passive yang sering dipakai.",
        "Passive voice selalu memakai V3."
    ],

    patterns: [
        {
            group: "Ability / Possibility",
            items: [
                {
                    label: "Can / Could",
                    formula: "Subject + can/could + be + V3",
                    examples: [
                        "The problem can be solved.",
                        "This task could be finished today.",
                        "The file can be downloaded."
                    ]
                },
                {
                    label: "May / Might",
                    formula: "Subject + may/might + be + V3",
                    examples: [
                        "The meeting may be postponed.",
                        "The result might be announced tomorrow.",
                        "The package may be delivered today."
                    ]
                }
            ]
        },
        {
            group: "Obligation / Advice",
            items: [
                {
                    label: "Must",
                    formula: "Subject + must + be + V3",
                    examples: [
                        "The door must be closed.",
                        "The report must be submitted today.",
                        "The rules must be followed."
                    ]
                },
                {
                    label: "Should",
                    formula: "Subject + should + be + V3",
                    examples: [
                        "The room should be cleaned.",
                        "The homework should be finished.",
                        "The message should be sent now."
                    ]
                }
            ]
        },
        {
            group: "Semi Modal Passive",
            items: [
                {
                    label: "Have To",
                    formula: "Subject + have/has to + be + V3",
                    examples: [
                        "The form has to be completed.",
                        "The documents have to be checked.",
                        "The payment has to be made today."
                    ]
                },
                {
                    label: "Need To",
                    formula: "Subject + need/needs to + be + V3",
                    examples: [
                        "The car needs to be repaired.",
                        "The data needs to be updated.",
                        "The books need to be arranged."
                    ]
                }
            ]
        }
    ],

    quiz: [
        {
            type: "Can Passive",
            question: "The problem can ___ solved.",
            options: ["be", "been", "being", "is"],
            answer: "be",
            explanation: "Modal Passive memakai modal + be + V3."
        },
        {
            type: "Can Passive",
            question: "The file can be ___.",
            options: ["download", "downloads", "downloading", "downloaded"],
            answer: "downloaded",
            explanation: "Setelah can be, verb harus V3."
        },
        {
            type: "Could Passive",
            question: "This task could ___ finished today.",
            options: ["be", "been", "being", "was"],
            answer: "be",
            explanation: "Could Passive memakai could be + V3."
        },
        {
            type: "May Passive",
            question: "The meeting may be ___.",
            options: ["postpone", "postpones", "postponed", "postponing"],
            answer: "postponed",
            explanation: "May Passive memakai may be + V3."
        },
        {
            type: "Might Passive",
            question: "The result might ___ announced tomorrow.",
            options: ["be", "been", "being", "is"],
            answer: "be",
            explanation: "Might Passive memakai might be + V3."
        },
        {
            type: "Must Passive",
            question: "The door must be ___.",
            options: ["close", "closes", "closed", "closing"],
            answer: "closed",
            explanation: "Must Passive memakai must be + V3."
        },
        {
            type: "Must Passive",
            question: "The rules must ___ followed.",
            options: ["be", "been", "being", "are"],
            answer: "be",
            explanation: "Modal Passive memakai must be + V3."
        },
        {
            type: "Should Passive",
            question: "The homework should be ___.",
            options: ["finish", "finishes", "finished", "finishing"],
            answer: "finished",
            explanation: "Should Passive memakai should be + V3."
        },
        {
            type: "Should Passive",
            question: "The message should ___ sent now.",
            options: ["be", "been", "being", "is"],
            answer: "be",
            explanation: "Should Passive memakai should be + V3."
        },
        {
            type: "Have To Passive",
            question: "The form has to be ___.",
            options: ["complete", "completed", "completing", "completes"],
            answer: "completed",
            explanation: "Have to Passive memakai have/has to be + V3."
        },
        {
            type: "Have To Passive",
            question: "The documents have to ___ checked.",
            options: ["be", "been", "being", "are"],
            answer: "be",
            explanation: "Have to Passive memakai have to be + V3."
        },
        {
            type: "Need To Passive",
            question: "The car needs to be ___.",
            options: ["repair", "repairs", "repaired", "repairing"],
            answer: "repaired",
            explanation: "Need to Passive memakai need/needs to be + V3."
        },
        {
            type: "Need To Passive",
            question: "The data needs to ___ updated.",
            options: ["be", "been", "being", "is"],
            answer: "be",
            explanation: "Need to Passive memakai needs to be + V3."
        },
        {
            type: "Concept",
            question: "Modal Passive uses...",
            options: [
                "modal + V1",
                "modal + be + V3",
                "modal + being + V3",
                "modal + have + V3"
            ],
            answer: "modal + be + V3",
            explanation: "Modal Passive selalu memakai modal + be + V3."
        },
        {
            type: "Concept",
            question: "Which sentence is Modal Passive?",
            options: [
                "She can solve the problem.",
                "The problem can be solved.",
                "She is solving the problem.",
                "The problem has been solved."
            ],
            answer: "The problem can be solved.",
            explanation: "Can be solved adalah bentuk Modal Passive."
        },
        {
            type: "Transform",
            question: "Active: She can solve the problem. Passive form is...",
            options: [
                "The problem can solve by her.",
                "The problem can be solved by her.",
                "The problem can been solved by her.",
                "The problem is can solved by her."
            ],
            answer: "The problem can be solved by her.",
            explanation: "Object 'the problem' menjadi subject, lalu memakai can be + V3."
        },
        {
            type: "Transform",
            question: "Active: They must follow the rules. Passive form is...",
            options: [
                "The rules must follow by them.",
                "The rules must be followed by them.",
                "The rules must been followed by them.",
                "The rules are must followed by them."
            ],
            answer: "The rules must be followed by them.",
            explanation: "Must Passive memakai must be + V3."
        },
        {
            type: "Transform",
            question: "Active: You should finish the homework. Passive form is...",
            options: [
                "The homework should finish by you.",
                "The homework should be finished by you.",
                "The homework should been finished by you.",
                "The homework is should finished by you."
            ],
            answer: "The homework should be finished by you.",
            explanation: "Should Passive memakai should be + V3."
        },
        {
            type: "Concept",
            question: "In 'The report must be submitted', the main passive structure is...",
            options: [
                "must + V1",
                "must be + V3",
                "must have + V3",
                "must being + V3"
            ],
            answer: "must be + V3",
            explanation: "Struktur modal passive adalah modal + be + V3."
        },
        {
            type: "Concept",
            question: "Passive voice focuses on...",
            options: [
                "The receiver of the action",
                "The conjunction",
                "The adjective",
                "The adverb"
            ],
            answer: "The receiver of the action",
            explanation: "Passive voice berfokus pada penerima aksi."
        }
    ]
},

"can-could": {
    title: "Can & Could",
    description: "Can dan could adalah modal verbs yang digunakan untuk menyatakan kemampuan, kemungkinan, izin, atau permintaan. Can biasanya digunakan untuk situasi sekarang, sedangkan could sering digunakan untuk masa lampau atau bentuk yang lebih sopan.",

    formula: `
        <strong>Inti Materi:</strong><br>
        Can/Could + V1<br>
        Can/Could + Subject + V1?
    `,

    notes: [
        "Can digunakan untuk kemampuan saat ini.",
        "Could digunakan untuk kemampuan di masa lampau.",
        "Can dan could selalu diikuti V1.",
        "Could terdengar lebih sopan daripada can dalam request.",
        "Can juga bisa digunakan untuk izin informal.",
        "Could juga bisa menunjukkan kemungkinan."
    ],

    patterns: [
        {
            group: "Can",
            items: [
                {
                    label: "Ability",
                    formula: "Subject + can + V1",
                    examples: [
                        "I can swim.",
                        "She can speak English.",
                        "They can solve the problem."
                    ]
                },
                {
                    label: "Negative",
                    formula: "Subject + cannot/can't + V1",
                    examples: [
                        "I cannot swim.",
                        "She can't speak English.",
                        "They cannot solve the problem."
                    ]
                },
                {
                    label: "Question",
                    formula: "Can + Subject + V1?",
                    examples: [
                        "Can you swim?",
                        "Can she speak English?",
                        "Can they solve the problem?"
                    ]
                }
            ]
        },
        {
            group: "Could",
            items: [
                {
                    label: "Past Ability",
                    formula: "Subject + could + V1",
                    examples: [
                        "I could swim when I was young.",
                        "She could read before school.",
                        "They could play football well."
                    ]
                },
                {
                    label: "Polite Request",
                    formula: "Could + Subject + V1?",
                    examples: [
                        "Could you help me?",
                        "Could you open the door?",
                        "Could I borrow your pen?"
                    ]
                },
                {
                    label: "Possibility",
                    formula: "Subject + could + V1",
                    examples: [
                        "It could rain tonight.",
                        "This answer could be correct.",
                        "He could arrive late."
                    ]
                }
            ]
        }
    ],

    quiz: [
        {
            type: "Can",
            question: "She ___ speak English.",
            options: ["can", "cans", "can to", "can speaks"],
            answer: "can",
            explanation: "Can selalu diikuti V1 tanpa tambahan -s atau to."
        },
        {
            type: "Can",
            question: "After can, we use...",
            options: ["V1", "V2", "V-ing", "to + V1"],
            answer: "V1",
            explanation: "Modal verb can selalu diikuti base verb atau V1."
        },
        {
            type: "Can",
            question: "Which sentence is correct?",
            options: [
                "She can speaks English.",
                "She can speak English.",
                "She cans speak English.",
                "She can to speak English."
            ],
            answer: "She can speak English.",
            explanation: "Struktur yang benar adalah subject + can + V1."
        },
        {
            type: "Could",
            question: "I ___ swim when I was young.",
            options: ["can", "could", "am", "have"],
            answer: "could",
            explanation: "Could digunakan untuk kemampuan di masa lampau."
        },
        {
            type: "Could",
            question: "Which sentence is a polite request?",
            options: [
                "Could you help me?",
                "You could helped me.",
                "You could helping me.",
                "Could you helps me?"
            ],
            answer: "Could you help me?",
            explanation: "Could digunakan untuk request yang lebih sopan."
        },
        {
            type: "Negative",
            question: "She ___ speak Japanese.",
            options: ["can not", "cannot", "cans not", "can to not"],
            answer: "cannot",
            explanation: "Bentuk negatif can adalah cannot atau can't."
        },
        {
            type: "Question",
            question: "___ you open the window?",
            options: ["Can", "Cans", "Do can", "Are can"],
            answer: "Can",
            explanation: "Pertanyaan dengan can memakai Can + subject + V1?"
        },
        {
            type: "Concept",
            question: "Could is often more...",
            options: ["polite", "plural", "past participle", "continuous"],
            answer: "polite",
            explanation: "Could sering terdengar lebih sopan daripada can."
        },
        {
            type: "Possibility",
            question: "It ___ rain tonight.",
            options: ["could", "coulds", "could to", "could raining"],
            answer: "could",
            explanation: "Could dapat digunakan untuk kemungkinan."
        },
        {
            type: "Concept",
            question: "Can and could are...",
            options: ["modal verbs", "nouns", "adjectives", "articles"],
            answer: "modal verbs",
            explanation: "Can dan could termasuk modal verbs."
        }
    ]
},

"may-might": {
    title: "May & Might",
    description: "May dan might adalah modal verbs yang digunakan untuk menyatakan kemungkinan, izin, atau permintaan formal. May biasanya terdengar lebih formal, sedangkan might menunjukkan kemungkinan yang lebih lemah atau tidak pasti.",

    formula: `
        <strong>Inti Materi:</strong><br>
        May/Might + V1<br>
        May + Subject + V1?
    `,

    notes: [
        "May digunakan untuk kemungkinan.",
        "Might digunakan untuk kemungkinan yang lebih lemah.",
        "May juga digunakan untuk meminta atau memberi izin secara formal.",
        "May dan might selalu diikuti V1.",
        "Tidak gunakan to setelah may atau might.",
        "Tidak tambahkan -s pada verb setelah may atau might."
    ],

    patterns: [
        {
            group: "May",
            items: [
                {
                    label: "Possibility",
                    formula: "Subject + may + V1",
                    examples: [
                        "It may rain today.",
                        "She may come late.",
                        "They may join the meeting."
                    ]
                },
                {
                    label: "Permission",
                    formula: "Subject + may + V1",
                    examples: [
                        "You may enter the room.",
                        "You may leave now.",
                        "Students may use a dictionary."
                    ]
                },
                {
                    label: "Formal Request",
                    formula: "May + Subject + V1?",
                    examples: [
                        "May I come in?",
                        "May I ask a question?",
                        "May we leave early?"
                    ]
                }
            ]
        },
        {
            group: "Might",
            items: [
                {
                    label: "Weak Possibility",
                    formula: "Subject + might + V1",
                    examples: [
                        "It might rain tonight.",
                        "She might be busy.",
                        "They might arrive late."
                    ]
                },
                {
                    label: "Uncertainty",
                    formula: "Subject + might + V1",
                    examples: [
                        "This answer might be correct.",
                        "He might know the truth.",
                        "The package might arrive tomorrow."
                    ]
                },
                {
                    label: "Polite Suggestion",
                    formula: "Subject + might + V1",
                    examples: [
                        "You might try again.",
                        "You might ask your teacher.",
                        "We might consider another option."
                    ]
                }
            ]
        }
    ],

    quiz: [
        {
            type: "May",
            question: "It ___ rain today.",
            options: ["may", "mays", "may to", "may raining"],
            answer: "may",
            explanation: "May digunakan untuk kemungkinan dan selalu diikuti V1."
        },
        {
            type: "May",
            question: "May I ___ in?",
            options: ["come", "comes", "coming", "came"],
            answer: "come",
            explanation: "Setelah may, gunakan V1."
        },
        {
            type: "May",
            question: "Which sentence is correct?",
            options: [
                "She may comes late.",
                "She may come late.",
                "She may to come late.",
                "She mays come late."
            ],
            answer: "She may come late.",
            explanation: "May + V1, tanpa -s dan tanpa to."
        },
        {
            type: "Permission",
            question: "Which modal is more formal for asking permission?",
            options: ["May", "Do", "Did", "Have"],
            answer: "May",
            explanation: "May sering digunakan untuk meminta izin secara formal."
        },
        {
            type: "Might",
            question: "She ___ be busy.",
            options: ["might", "mights", "might to", "might being"],
            answer: "might",
            explanation: "Might digunakan untuk kemungkinan yang tidak pasti."
        },
        {
            type: "Might",
            question: "This answer might ___ correct.",
            options: ["be", "been", "being", "is"],
            answer: "be",
            explanation: "Setelah might, gunakan V1. Bentuk V1 dari be adalah be."
        },
        {
            type: "Concept",
            question: "Might usually shows...",
            options: ["weak possibility", "strong command", "past tense only", "plural noun"],
            answer: "weak possibility",
            explanation: "Might biasanya menunjukkan kemungkinan yang lebih lemah."
        },
        {
            type: "Concept",
            question: "After may or might, we use...",
            options: ["V1", "V2", "V-ing", "to + V1"],
            answer: "V1",
            explanation: "May dan might selalu diikuti base verb atau V1."
        },
        {
            type: "Request",
            question: "Which sentence is a formal request?",
            options: [
                "May I ask a question?",
                "I may asks a question.",
                "May I asking a question?",
                "I may to ask a question."
            ],
            answer: "May I ask a question?",
            explanation: "May I + V1 digunakan untuk request formal."
        },
        {
            type: "Concept",
            question: "May and might are...",
            options: ["modal verbs", "articles", "nouns", "prepositions"],
            answer: "modal verbs",
            explanation: "May dan might termasuk modal verbs."
        }
    ]
},

"should-ought-to": {
    title: "Should & Ought To",
    description: "Should dan ought to adalah modal verbs yang digunakan untuk memberi saran, nasihat, kewajiban ringan, atau menunjukkan sesuatu yang sebaiknya dilakukan. Should lebih umum digunakan, sedangkan ought to terdengar sedikit lebih formal.",

    formula: `
        <strong>Inti Materi:</strong><br>
        Should + V1<br>
        Ought to + V1
    `,

    notes: [
        "Should digunakan untuk memberi saran atau nasihat.",
        "Ought to memiliki makna mirip dengan should.",
        "Should selalu diikuti V1.",
        "Ought selalu diikuti to + V1.",
        "Should tidak memakai to setelahnya.",
        "Should not dapat disingkat menjadi shouldn't."
    ],

    patterns: [
        {
            group: "Should",
            items: [
                {
                    label: "Advice",
                    formula: "Subject + should + V1",
                    examples: [
                        "You should study harder.",
                        "She should drink more water.",
                        "They should arrive early."
                    ]
                },
                {
                    label: "Negative",
                    formula: "Subject + should + not + V1",
                    examples: [
                        "You should not smoke.",
                        "She should not sleep late.",
                        "They shouldn't be rude."
                    ]
                },
                {
                    label: "Question",
                    formula: "Should + Subject + V1?",
                    examples: [
                        "Should I call him?",
                        "Should we leave now?",
                        "Should they join the class?"
                    ]
                }
            ]
        },
        {
            group: "Ought To",
            items: [
                {
                    label: "Advice",
                    formula: "Subject + ought to + V1",
                    examples: [
                        "You ought to apologize.",
                        "She ought to study more.",
                        "They ought to respect the rules."
                    ]
                },
                {
                    label: "Negative",
                    formula: "Subject + ought not to + V1",
                    examples: [
                        "You ought not to lie.",
                        "She ought not to ignore the problem.",
                        "They ought not to be late."
                    ]
                },
                {
                    label: "Meaning",
                    formula: "Ought to ≈ Should",
                    examples: [
                        "You should help him.",
                        "You ought to help him.",
                        "Both sentences give advice."
                    ]
                }
            ]
        }
    ],

    quiz: [
        {
            type: "Should",
            question: "You ___ study harder.",
            options: ["should", "should to", "shoulds", "should studying"],
            answer: "should",
            explanation: "Should selalu diikuti V1 tanpa to."
        },
        {
            type: "Should",
            question: "After should, we use...",
            options: ["V1", "V2", "V-ing", "to + V1"],
            answer: "V1",
            explanation: "Should adalah modal verb dan selalu diikuti base verb atau V1."
        },
        {
            type: "Should",
            question: "Which sentence is correct?",
            options: [
                "You should to study.",
                "You should studies.",
                "You should study.",
                "You should studying."
            ],
            answer: "You should study.",
            explanation: "Struktur benar adalah subject + should + V1."
        },
        {
            type: "Negative",
            question: "You ___ smoke.",
            options: ["should not", "should to not", "shoulds not", "should not to"],
            answer: "should not",
            explanation: "Bentuk negatif should adalah should not + V1."
        },
        {
            type: "Question",
            question: "___ I call him?",
            options: ["Should", "Do should", "Should to", "Am should"],
            answer: "Should",
            explanation: "Pertanyaan memakai Should + subject + V1?"
        },
        {
            type: "Ought To",
            question: "You ought ___ apologize.",
            options: ["to", "for", "at", "with"],
            answer: "to",
            explanation: "Ought selalu diikuti to + V1."
        },
        {
            type: "Ought To",
            question: "She ought to ___ more.",
            options: ["study", "studies", "studying", "studied"],
            answer: "study",
            explanation: "Setelah ought to, gunakan V1."
        },
        {
            type: "Concept",
            question: "Should and ought to are mainly used for...",
            options: ["advice", "place", "color", "ownership"],
            answer: "advice",
            explanation: "Should dan ought to digunakan untuk memberi saran atau nasihat."
        },
        {
            type: "Meaning",
            question: "Which has similar meaning to 'You should rest'?",
            options: [
                "You ought to rest.",
                "You are rest.",
                "You have rest.",
                "You did rest."
            ],
            answer: "You ought to rest.",
            explanation: "Ought to memiliki makna mirip dengan should."
        },
        {
            type: "Concept",
            question: "Should and ought to are...",
            options: ["modal verbs", "articles", "prepositions", "nouns"],
            answer: "modal verbs",
            explanation: "Should dan ought to termasuk modal verbs."
        }
    ]
},

"must-have-to": {
    title: "Must & Have To",
    description: "Must dan have to digunakan untuk menyatakan kewajiban atau keharusan. Must biasanya berasal dari penutur (internal obligation), sedangkan have to berasal dari aturan, keadaan, atau pihak lain (external obligation).",

    formula: `
        <strong>Inti Materi:</strong><br>
        Must + V1<br>
        Have/Has To + V1
    `,

    notes: [
        "Must menyatakan kewajiban yang kuat atau berasal dari diri sendiri.",
        "Have to menyatakan kewajiban karena aturan atau keadaan.",
        "Must selalu diikuti V1.",
        "Have to berubah menjadi has to untuk he/she/it.",
        "Must tidak memiliki bentuk lampau, sehingga menggunakan had to.",
        "Don't have to berarti tidak perlu, sedangkan mustn't berarti dilarang."
    ],

    patterns: [
        {
            group: "Must",
            items: [
                {
                    label: "Positive",
                    formula: "Subject + must + V1",
                    examples: [
                        "You must wear a helmet.",
                        "Students must study hard.",
                        "I must finish this report today."
                    ]
                },
                {
                    label: "Negative",
                    formula: "Subject + must not + V1",
                    examples: [
                        "You must not smoke here.",
                        "Students mustn't cheat.",
                        "You must not park here."
                    ]
                },
                {
                    label: "Question",
                    formula: "Must + Subject + V1?",
                    examples: [
                        "Must I finish this today?",
                        "Must we leave now?",
                        "Must they attend the meeting?"
                    ]
                }
            ]
        },

        {
            group: "Have To",
            items: [
                {
                    label: "Positive",
                    formula: "Subject + have/has to + V1",
                    examples: [
                        "I have to work tomorrow.",
                        "She has to wear a uniform.",
                        "They have to pay taxes."
                    ]
                },
                {
                    label: "Negative",
                    formula: "Subject + don't/doesn't have to + V1",
                    examples: [
                        "You don't have to come.",
                        "She doesn't have to drive today.",
                        "They don't have to pay now."
                    ]
                },
                {
                    label: "Question",
                    formula: "Do/Does + Subject + have to + V1?",
                    examples: [
                        "Do I have to finish this?",
                        "Does she have to work today?",
                        "Do they have to wear uniforms?"
                    ]
                }
            ]
        },

        {
            group: "Difference",
            items: [
                {
                    label: "Must vs Have To",
                    formula: "Internal obligation vs External obligation",
                    examples: [
                        "I must stop eating junk food. (my decision)",
                        "I have to wear a uniform. (school rule)",
                        "Employees have to wear an ID card."
                    ]
                },
                {
                    label: "Mustn't vs Don't Have To",
                    formula: "Prohibition vs No necessity",
                    examples: [
                        "You mustn't smoke here. (forbidden)",
                        "You don't have to come tomorrow. (not necessary)",
                        "They don't have to pay today."
                    ]
                }
            ]
        }
    ],

    quiz: [
        {
            type: "Must",
            question: "You ___ wear a helmet.",
            options: ["must", "must to", "musts", "must wearing"],
            answer: "must",
            explanation: "Must selalu diikuti V1."
        },
        {
            type: "Must",
            question: "After must we use...",
            options: ["V1", "V2", "V3", "V-ing"],
            answer: "V1",
            explanation: "Must adalah modal verb sehingga diikuti V1."
        },
        {
            type: "Have To",
            question: "She ___ wear a uniform.",
            options: ["have to", "has to", "musts", "have"],
            answer: "has to",
            explanation: "Untuk he/she/it gunakan has to."
        },
        {
            type: "Difference",
            question: "'I must study tonight' shows...",
            options: [
                "Personal obligation",
                "Past obligation",
                "Permission",
                "Possibility"
            ],
            answer: "Personal obligation",
            explanation: "Must biasanya berasal dari keputusan atau kewajiban diri sendiri."
        },
        {
            type: "Difference",
            question: "'Employees have to wear uniforms' means...",
            options: [
                "Company rule",
                "Personal wish",
                "Ability",
                "Suggestion"
            ],
            answer: "Company rule",
            explanation: "Have to biasanya berasal dari aturan atau keadaan."
        },
        {
            type: "Negative",
            question: "'You mustn't smoke here' means...",
            options: [
                "It is forbidden",
                "It isn't necessary",
                "You may smoke",
                "You can smoke later"
            ],
            answer: "It is forbidden",
            explanation: "Mustn't berarti dilarang."
        },
        {
            type: "Negative",
            question: "'You don't have to come tomorrow' means...",
            options: [
                "It is not necessary",
                "It is forbidden",
                "You must come",
                "You are able to come"
            ],
            answer: "It is not necessary",
            explanation: "Don't have to berarti tidak perlu."
        },
        {
            type: "Question",
            question: "___ she have to work today?",
            options: ["Do", "Does", "Has", "Musts"],
            answer: "Does",
            explanation: "Pertanyaan have to menggunakan Do/Does."
        },
        {
            type: "Question",
            question: "___ I finish this report today?",
            options: ["Must", "Do", "Does", "Have"],
            answer: "Must",
            explanation: "Pertanyaan dengan must menggunakan Must + Subject + V1."
        },
        {
            type: "Concept",
            question: "Which sentence expresses prohibition?",
            options: [
                "You mustn't park here.",
                "You don't have to park here.",
                "You can park here.",
                "You should park here."
            ],
            answer: "You mustn't park here.",
            explanation: "Mustn't menunjukkan larangan."
        }
    ]
},

"will-would": {
    title: "Will & Would",
    description: "Will dan would adalah modal verbs yang digunakan untuk menyatakan masa depan, kemauan, janji, prediksi, permintaan sopan, kebiasaan di masa lampau, dan situasi hipotetis. Will lebih sering digunakan untuk masa depan, sedangkan would banyak digunakan pada Conditional Sentence dan Reported Speech.",

    formula: `
        <strong>Inti Materi:</strong><br>
        Will + V1<br>
        Would + V1
    `,

    notes: [
        "Will digunakan untuk masa depan.",
        "Will digunakan untuk keputusan spontan.",
        "Will digunakan untuk janji dan prediksi.",
        "Would adalah bentuk lampau dari will pada Reported Speech.",
        "Would digunakan untuk permintaan yang lebih sopan.",
        "Would digunakan pada Conditional Sentence Type 2 dan Type 3.",
        "Setelah will maupun would selalu menggunakan V1."
    ],

    patterns: [
        {
            group: "Will",
            items: [
                {
                    label: "Future",
                    formula: "Subject + will + V1",
                    examples: [
                        "I will study tonight.",
                        "She will arrive tomorrow.",
                        "They will visit Bali next month."
                    ]
                },
                {
                    label: "Negative",
                    formula: "Subject + will not + V1",
                    examples: [
                        "I will not be late.",
                        "She won't come today.",
                        "They won't join us."
                    ]
                },
                {
                    label: "Question",
                    formula: "Will + Subject + V1?",
                    examples: [
                        "Will you come tomorrow?",
                        "Will she help us?",
                        "Will they arrive early?"
                    ]
                }
            ]
        },

        {
            group: "Would",
            items: [
                {
                    label: "Polite Request",
                    formula: "Would + Subject + V1?",
                    examples: [
                        "Would you help me?",
                        "Would you open the window?",
                        "Would you mind waiting?"
                    ]
                },
                {
                    label: "Conditional",
                    formula: "Subject + would + V1",
                    examples: [
                        "I would buy that car.",
                        "She would travel abroad.",
                        "They would help us."
                    ]
                },
                {
                    label: "Reported Speech",
                    formula: "will → would",
                    examples: [
                        "He said he would come.",
                        "She said she would call me.",
                        "They promised they would return."
                    ]
                }
            ]
        },

        {
            group: "Difference",
            items: [
                {
                    label: "Will vs Would",
                    formula: "Future vs Polite/Hypothetical",
                    examples: [
                        "I will help you.",
                        "I would help you if I had time.",
                        "Would you close the door?"
                    ]
                },
                {
                    label: "Usage",
                    formula: "Will = certainty, Would = possibility/politeness",
                    examples: [
                        "It will rain tomorrow.",
                        "It would be nice to travel there.",
                        "Would you like some coffee?"
                    ]
                }
            ]
        }
    ],

    quiz: [
        {
            type: "Future",
            question: "She ___ come tomorrow.",
            options: ["will", "would", "wills", "will to"],
            answer: "will",
            explanation: "Will digunakan untuk menyatakan masa depan."
        },
        {
            type: "Future",
            question: "After will, we use...",
            options: ["V1", "V2", "V3", "V-ing"],
            answer: "V1",
            explanation: "Will selalu diikuti base verb."
        },
        {
            type: "Future",
            question: "Which sentence is correct?",
            options: [
                "She will comes tomorrow.",
                "She will come tomorrow.",
                "She will coming tomorrow.",
                "She will to come tomorrow."
            ],
            answer: "She will come tomorrow.",
            explanation: "Will selalu diikuti V1."
        },
        {
            type: "Would",
            question: "___ you help me?",
            options: ["Would", "Will", "Do", "Does"],
            answer: "Would",
            explanation: "Would digunakan untuk permintaan yang sopan."
        },
        {
            type: "Would",
            question: "I ___ buy that house if I had enough money.",
            options: ["will", "would", "am", "have"],
            answer: "would",
            explanation: "Would digunakan pada Conditional Sentence."
        },
        {
            type: "Reported Speech",
            question: "He said he ___ come tomorrow.",
            options: ["will", "would", "is", "has"],
            answer: "would",
            explanation: "Dalam Reported Speech, will berubah menjadi would."
        },
        {
            type: "Concept",
            question: "Which modal is more polite?",
            options: ["Would", "Will", "Can", "Must"],
            answer: "Would",
            explanation: "Would terdengar lebih sopan daripada will."
        },
        {
            type: "Concept",
            question: "Will is mainly used for...",
            options: [
                "Future actions",
                "Past actions",
                "Past habits",
                "Present perfect"
            ],
            answer: "Future actions",
            explanation: "Will digunakan untuk masa depan."
        },
        {
            type: "Concept",
            question: "Would is commonly used in...",
            options: [
                "Conditional Sentence",
                "Passive Voice only",
                "Present Perfect only",
                "Gerund"
            ],
            answer: "Conditional Sentence",
            explanation: "Would merupakan modal utama dalam Conditional Sentence."
        },
        {
            type: "Difference",
            question: "Which sentence expresses a future plan?",
            options: [
                "I will call you tonight.",
                "I would call you if I had your number.",
                "Would you help me?",
                "He said he would come."
            ],
            answer: "I will call you tonight.",
            explanation: "Will digunakan untuk menyatakan rencana atau tindakan di masa depan."
        }
    ]
},

"modal-review": {
    title: "Modal Review",
    description: "Modal Review adalah rangkuman akhir untuk menguji pemahaman semua modal verbs: can, could, may, might, should, ought to, must, have to, will, dan would.",

    formula: `
        <strong>Inti Materi:</strong><br>
        Modal + V1<br>
        Semi Modal + to + V1
    `,

    notes: [
        "Can dan could berhubungan dengan kemampuan, izin, dan permintaan.",
        "May dan might berhubungan dengan kemungkinan dan izin formal.",
        "Should dan ought to digunakan untuk saran atau nasihat.",
        "Must dan have to digunakan untuk kewajiban.",
        "Mustn't berarti dilarang.",
        "Don't have to berarti tidak perlu.",
        "Will digunakan untuk masa depan.",
        "Would digunakan untuk permintaan sopan, conditional, dan reported speech."
    ],

    patterns: [
        {
            group: "Core Modal",
            items: [
                {
                    label: "Ability",
                    formula: "can/could + V1",
                    examples: [
                        "I can swim.",
                        "She could read when she was five.",
                        "Can you help me?"
                    ]
                },
                {
                    label: "Possibility",
                    formula: "may/might/could + V1",
                    examples: [
                        "It may rain.",
                        "She might be busy.",
                        "This answer could be correct."
                    ]
                },
                {
                    label: "Advice",
                    formula: "should/ought to + V1",
                    examples: [
                        "You should rest.",
                        "She ought to apologize.",
                        "They should study harder."
                    ]
                }
            ]
        },
        {
            group: "Obligation",
            items: [
                {
                    label: "Must",
                    formula: "must + V1",
                    examples: [
                        "You must follow the rules.",
                        "Students must wear uniforms.",
                        "You must not smoke here."
                    ]
                },
                {
                    label: "Have To",
                    formula: "have/has to + V1",
                    examples: [
                        "I have to work tomorrow.",
                        "She has to wear a uniform.",
                        "They don't have to come."
                    ]
                }
            ]
        },
        {
            group: "Future & Hypothetical",
            items: [
                {
                    label: "Will",
                    formula: "will + V1",
                    examples: [
                        "I will call you tonight.",
                        "She will arrive tomorrow.",
                        "They will help us."
                    ]
                },
                {
                    label: "Would",
                    formula: "would + V1",
                    examples: [
                        "Would you help me?",
                        "I would buy it if I had money.",
                        "He said he would come."
                    ]
                }
            ]
        }
    ],

    quiz: [
        {
            type: "Can/Could",
            question: "She ___ speak English fluently.",
            options: ["can", "cans", "can to", "can speaking"],
            answer: "can",
            explanation: "Can selalu diikuti V1."
        },
        {
            type: "Can/Could",
            question: "I ___ swim when I was young.",
            options: ["can", "could", "must", "will"],
            answer: "could",
            explanation: "Could digunakan untuk kemampuan di masa lampau."
        },
        {
            type: "May/Might",
            question: "It ___ rain tonight.",
            options: ["might", "mustn't", "has to", "ought"],
            answer: "might",
            explanation: "Might menunjukkan kemungkinan yang tidak pasti."
        },
        {
            type: "May/Might",
            question: "___ I ask a question?",
            options: ["May", "Have", "Mustn't", "Ought"],
            answer: "May",
            explanation: "May digunakan untuk permintaan izin secara formal."
        },
        {
            type: "Should",
            question: "You ___ drink more water.",
            options: ["should", "should to", "shoulds", "should drinking"],
            answer: "should",
            explanation: "Should digunakan untuk saran."
        },
        {
            type: "Ought To",
            question: "She ought ___ apologize.",
            options: ["to", "for", "at", "with"],
            answer: "to",
            explanation: "Ought selalu diikuti to + V1."
        },
        {
            type: "Must",
            question: "You ___ not smoke here.",
            options: ["must", "have", "may", "will"],
            answer: "must",
            explanation: "Must not berarti dilarang."
        },
        {
            type: "Have To",
            question: "She ___ wear a uniform.",
            options: ["have to", "has to", "musts", "have"],
            answer: "has to",
            explanation: "Untuk subject She gunakan has to."
        },
        {
            type: "Meaning",
            question: "'You don't have to come tomorrow' means...",
            options: [
                "It is not necessary",
                "It is forbidden",
                "You must come",
                "You cannot come"
            ],
            answer: "It is not necessary",
            explanation: "Don't have to berarti tidak perlu."
        },
        {
            type: "Meaning",
            question: "'You mustn't park here' means...",
            options: [
                "It is forbidden",
                "It is optional",
                "It is possible",
                "It is recommended"
            ],
            answer: "It is forbidden",
            explanation: "Mustn't berarti dilarang."
        },
        {
            type: "Will",
            question: "She ___ call you tonight.",
            options: ["will", "would", "has", "did"],
            answer: "will",
            explanation: "Will digunakan untuk masa depan."
        },
        {
            type: "Would",
            question: "___ you help me, please?",
            options: ["Would", "Will", "Do", "Has"],
            answer: "Would",
            explanation: "Would digunakan untuk permintaan yang lebih sopan."
        },
        {
            type: "Would",
            question: "I ___ buy that car if I had enough money.",
            options: ["will", "would", "can", "must"],
            answer: "would",
            explanation: "Would digunakan dalam conditional sentence."
        },
        {
            type: "Reported Speech",
            question: "He said he ___ come later.",
            options: ["will", "would", "is", "has"],
            answer: "would",
            explanation: "Dalam reported speech, will berubah menjadi would."
        },
        {
            type: "Concept",
            question: "After most modal verbs, we use...",
            options: ["V1", "V2", "V3", "V-ing"],
            answer: "V1",
            explanation: "Sebagian besar modal diikuti base verb atau V1."
        },
        {
            type: "Concept",
            question: "Which one is a semi-modal?",
            options: ["have to", "can", "may", "will"],
            answer: "have to",
            explanation: "Have to disebut semi-modal karena polanya berbeda dan berubah mengikuti subject."
        },
        {
            type: "Concept",
            question: "Which modal gives advice?",
            options: ["should", "mustn't", "will", "may"],
            answer: "should",
            explanation: "Should digunakan untuk memberi saran."
        },
        {
            type: "Concept",
            question: "Which modal shows strong obligation?",
            options: ["must", "might", "could", "would"],
            answer: "must",
            explanation: "Must menunjukkan kewajiban kuat."
        },
        {
            type: "Concept",
            question: "Which modal shows weak possibility?",
            options: ["might", "must", "should", "have to"],
            answer: "might",
            explanation: "Might menunjukkan kemungkinan yang lemah."
        },
        {
            type: "Concept",
            question: "Which modal is used for polite request?",
            options: ["would", "must", "has to", "mustn't"],
            answer: "would",
            explanation: "Would sering digunakan untuk permintaan yang sopan."
        },
        {
            type: "Error Check",
            question: "Which sentence is correct?",
            options: [
                "She can speaks English.",
                "She can speak English.",
                "She can to speak English.",
                "She cans speak English."
            ],
            answer: "She can speak English.",
            explanation: "Can + V1 tanpa -s dan tanpa to."
        },
        {
            type: "Error Check",
            question: "Which sentence is correct?",
            options: [
                "You should to rest.",
                "You should rests.",
                "You should rest.",
                "You should resting."
            ],
            answer: "You should rest.",
            explanation: "Should + V1."
        },
        {
            type: "Error Check",
            question: "Which sentence is correct?",
            options: [
                "She has to wear a uniform.",
                "She have to wears a uniform.",
                "She has wear a uniform.",
                "She must to wear a uniform."
            ],
            answer: "She has to wear a uniform.",
            explanation: "Untuk She gunakan has to + V1."
        },
        {
            type: "Meaning",
            question: "Which sentence means 'not necessary'?",
            options: [
                "You don't have to pay now.",
                "You mustn't pay now.",
                "You can't pay now.",
                "You shouldn't pay now."
            ],
            answer: "You don't have to pay now.",
            explanation: "Don't have to berarti tidak perlu."
        },
        {
            type: "Meaning",
            question: "Which sentence means 'forbidden'?",
            options: [
                "You mustn't enter this room.",
                "You don't have to enter this room.",
                "You may enter this room.",
                "You should enter this room."
            ],
            answer: "You mustn't enter this room.",
            explanation: "Mustn't berarti dilarang."
        },
        {
            type: "Review",
            question: "Which pair is closest in meaning?",
            options: [
                "should / ought to",
                "mustn't / don't have to",
                "will / must",
                "may / have to"
            ],
            answer: "should / ought to",
            explanation: "Should dan ought to sama-sama memberi saran."
        },
        {
            type: "Review",
            question: "Which modal is best for formal permission?",
            options: ["may", "must", "would", "has to"],
            answer: "may",
            explanation: "May sering dipakai untuk izin formal."
        },
        {
            type: "Review",
            question: "Which modal is best for past ability?",
            options: ["could", "can", "must", "will"],
            answer: "could",
            explanation: "Could dapat digunakan untuk kemampuan di masa lampau."
        },
        {
            type: "Review",
            question: "Which modal is best for future prediction?",
            options: ["will", "could", "mustn't", "ought to"],
            answer: "will",
            explanation: "Will digunakan untuk prediksi masa depan."
        },
        {
            type: "Review",
            question: "Which modal is best for strong obligation?",
            options: ["must", "might", "would", "may"],
            answer: "must",
            explanation: "Must menunjukkan kewajiban kuat."
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
                { label: "Pronoun", id: "pronoun" },
                { label: "Verb", id: "verb" },
                { label: "Adjective", id: "adjective" },
                { label: "Adverb", id: "adverb" },
                { label: "Preposition", id: "preposition" },
                { label: "Conjunction", id: "conjunction" },
                { label: "Interjection", id: "interjection" }
                ]
    },
    {
    id: "bab2",
    icon: "fa-clock",
    title: "BAB 2: Kalimat Aktif",
    level: "Intermediate",
    color: "#f59e0b",
    items: [
        { label: "Present Tense", id: "present-tense" },
        { label: "Past Tense", id: "past-tense" },
        { label: "Future Tense", id: "future-tense" },
        { label: "Past Future Tense", id: "past-future-tense" }
    ]
},
    {
    id: "bab3",
    icon: "fa-code-branch",
    title: "BAB 3: Passive Voice",
    level: "Upper Intermediate",
    color: "#8b5cf6",
    items: [
        { label: "Present Passive", id: "present-passive" },
        { label: "Past Passive", id: "past-passive" },
        { label: "Future Passive", id: "future-passive" },
        { label: "Modal Passive", id: "modal-passive" }
    ]
},
    {
    id: "bab4",
    icon: "fa-graduation-cap",
    title: "BAB 4: Modal Verbs",
    level: "Advanced",
    color: "#22c55e",
    items: [
        { label: "Can & Could", id: "can-could" },
        { label: "May & Might", id: "may-might" },
        { label: "Should & Ought To", id: "should-ought-to" },
        { label: "Must & Have To", id: "must-have-to" },
        { label: "Will & Would", id: "will-would" },
        { label: "Modal Review", id: "modal-review" }
    ]
},

{
    id: "bab5",
    icon: "fa-person-running",
    title: "BAB 5: Gerund & Infinitive",
    level: "Advanced",
    color: "#06b6d4",
    items: [
        { label: "Gerund", id: "gerund" },
        { label: "Infinitive", id: "infinitive" },
        { label: "Gerund vs Infinitive", id: "gerund-vs-infinitive" },
        { label: "Verb + Gerund", id: "verb-gerund" },
        { label: "Verb + Infinitive", id: "verb-infinitive" },
        { label: "Verb + Gerund / Infinitive", id: "verb-both" },
        { label: "Gerund & Infinitive Review", id: "gerund-review" }
    ]
}
];
window.MATERI_CONTENT = MATERI_CONTENT;
window.MATERI_BAB_CONFIG = MATERI_BAB_CONFIG;

console.log("CONFIG LOADED", {
    bab1Total: MATERI_BAB_CONFIG[0].items.length,
    bab1Items: MATERI_BAB_CONFIG[0].items.map(i => i.label),
    bab2Total: MATERI_BAB_CONFIG[1].items.length,
    bab2Items: MATERI_BAB_CONFIG[1].items.map(i => i.label)
});