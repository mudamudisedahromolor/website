


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
},

"gerund": {
    title: "Gerund",
    description: "Gerund adalah bentuk verb yang ditambah -ing tetapi berfungsi sebagai noun. Gerund dapat menjadi subject, object, complement, atau muncul setelah preposition.",

    formula: `
        <strong>Inti Materi:</strong><br>
        Gerund = Verb + ing sebagai noun<br>
        swimming, reading, studying, writing
    `,

    notes: [
        "Gerund berbentuk V-ing.",
        "Gerund berfungsi seperti noun.",
        "Gerund dapat menjadi subject kalimat.",
        "Gerund dapat menjadi object setelah verb tertentu.",
        "Gerund dapat muncul setelah preposition.",
        "Gerund berbeda dari Present Continuous karena gerund berfungsi sebagai noun."
    ],

    patterns: [
        {
            group: "Function",
            items: [
                {
                    label: "Subject",
                    formula: "Gerund + Verb + Complement",
                    examples: [
                        "Swimming is fun.",
                        "Reading improves vocabulary.",
                        "Studying English takes time."
                    ]
                },
                {
                    label: "Object",
                    formula: "Subject + Verb + Gerund",
                    examples: [
                        "I enjoy reading.",
                        "She likes swimming.",
                        "They avoid smoking."
                    ]
                },
                {
                    label: "After Preposition",
                    formula: "Preposition + Gerund",
                    examples: [
                        "She is good at singing.",
                        "I am interested in learning English.",
                        "He left without saying goodbye."
                    ]
                }
            ]
        },
        {
            group: "Common Gerund Verbs",
            items: [
                {
                    label: "Enjoy / Avoid / Finish",
                    formula: "Verb + Gerund",
                    examples: [
                        "I enjoy cooking.",
                        "She avoids eating junk food.",
                        "They finished working."
                    ]
                },
                {
                    label: "Mind / Keep / Practice",
                    formula: "Verb + Gerund",
                    examples: [
                        "Do you mind waiting?",
                        "He keeps trying.",
                        "We practice speaking English."
                    ]
                }
            ]
        }
    ],

    quiz: [
        {
            type: "Concept",
            question: "Gerund is formed by...",
            options: ["V1", "V2", "V3", "Verb + ing"],
            answer: "Verb + ing",
            explanation: "Gerund berbentuk verb + ing dan berfungsi sebagai noun."
        },
        {
            type: "Function",
            question: "In 'Swimming is fun', 'Swimming' is...",
            options: ["Gerund", "Adjective", "Conjunction", "Preposition"],
            answer: "Gerund",
            explanation: "Swimming berbentuk V-ing dan berfungsi sebagai subject."
        },
        {
            type: "Subject",
            question: "Which sentence uses a gerund as subject?",
            options: [
                "Reading is useful.",
                "She is reading.",
                "They read books.",
                "The book is red."
            ],
            answer: "Reading is useful.",
            explanation: "Reading menjadi subject kalimat."
        },
        {
            type: "Object",
            question: "I enjoy ___.",
            options: ["read", "reads", "reading", "to reading"],
            answer: "reading",
            explanation: "Enjoy diikuti gerund."
        },
        {
            type: "Object",
            question: "She avoids ___ junk food.",
            options: ["eat", "eats", "eating", "to eat"],
            answer: "eating",
            explanation: "Avoid diikuti gerund."
        },
        {
            type: "After Preposition",
            question: "She is good at ___.",
            options: ["sing", "sings", "singing", "to sing"],
            answer: "singing",
            explanation: "Setelah preposition at, gunakan gerund."
        },
        {
            type: "After Preposition",
            question: "I am interested in ___ English.",
            options: ["learn", "learns", "learning", "to learn"],
            answer: "learning",
            explanation: "Setelah preposition in, gunakan gerund."
        },
        {
            type: "Compare",
            question: "Which sentence contains a gerund, not Present Continuous?",
            options: [
                "She is studying.",
                "Studying is important.",
                "They are playing.",
                "I am reading."
            ],
            answer: "Studying is important.",
            explanation: "Studying berfungsi sebagai subject, jadi itu gerund."
        },
        {
            type: "Verb Pattern",
            question: "They finished ___.",
            options: ["work", "works", "working", "to working"],
            answer: "working",
            explanation: "Finish diikuti gerund."
        },
        {
            type: "Verb Pattern",
            question: "We practice ___ English.",
            options: ["speak", "speaks", "speaking", "to speak"],
            answer: "speaking",
            explanation: "Practice diikuti gerund."
        }
    ]
},

"infinitive": {
    title: "Infinitive",
    description: "Infinitive adalah bentuk dasar verb yang biasanya diawali dengan 'to'. Infinitive dapat berfungsi sebagai noun, adjective, atau adverb dalam kalimat.",

    formula: `
        <strong>Inti Materi:</strong><br>
        Infinitive = to + V1<br>
        to study, to read, to swim
    `,

    notes: [
        "Infinitive berbentuk to + V1.",
        "Infinitive dapat menjadi subject kalimat.",
        "Infinitive dapat menjadi object setelah verb tertentu.",
        "Infinitive digunakan untuk menunjukkan tujuan (purpose).",
        "Infinitive juga dapat menjelaskan noun atau adjective.",
        "Jangan bingung dengan modal verbs karena modal memakai V1 tanpa 'to'."
    ],

    patterns: [
        {
            group: "Function",
            items: [
                {
                    label: "Subject",
                    formula: "To + V1 + Verb",
                    examples: [
                        "To travel is exciting.",
                        "To study every day is important.",
                        "To exercise is healthy."
                    ]
                },
                {
                    label: "Object",
                    formula: "Subject + Verb + to + V1",
                    examples: [
                        "I want to sleep.",
                        "She hopes to pass the exam.",
                        "They decided to leave."
                    ]
                },
                {
                    label: "Purpose",
                    formula: "Subject + Verb + to + V1",
                    examples: [
                        "I study to get good grades.",
                        "She works to earn money.",
                        "He exercises to stay healthy."
                    ]
                }
            ]
        },
        {
            group: "Common Infinitive Verbs",
            items: [
                {
                    label: "Want / Hope / Decide",
                    formula: "Verb + to + V1",
                    examples: [
                        "I want to eat.",
                        "She hopes to win.",
                        "They decided to stay."
                    ]
                },
                {
                    label: "Plan / Promise / Learn",
                    formula: "Verb + to + V1",
                    examples: [
                        "We plan to travel.",
                        "He promised to help.",
                        "She learned to drive."
                    ]
                }
            ]
        }
    ],

    quiz: [
        {
            type: "Concept",
            question: "What is an infinitive?",
            options: [
                "Verb + ing",
                "to + V1",
                "V2",
                "V3"
            ],
            answer: "to + V1",
            explanation: "Infinitive berbentuk to + V1."
        },
        {
            type: "Subject",
            question: "Which sentence uses an infinitive as the subject?",
            options: [
                "To travel is exciting.",
                "She is traveling.",
                "They travel often.",
                "Traveling is exciting."
            ],
            answer: "To travel is exciting.",
            explanation: "To travel menjadi subject kalimat."
        },
        {
            type: "Object",
            question: "I want ___ English.",
            options: [
                "study",
                "studying",
                "to study",
                "studied"
            ],
            answer: "to study",
            explanation: "Want diikuti infinitive."
        },
        {
            type: "Object",
            question: "She decided ___ home.",
            options: [
                "go",
                "going",
                "to go",
                "gone"
            ],
            answer: "to go",
            explanation: "Decide diikuti infinitive."
        },
        {
            type: "Purpose",
            question: "I exercise ___ healthy.",
            options: [
                "stay",
                "staying",
                "to stay",
                "stayed"
            ],
            answer: "to stay",
            explanation: "Infinitive dapat menunjukkan tujuan."
        },
        {
            type: "Verb Pattern",
            question: "They hope ___ the competition.",
            options: [
                "win",
                "winning",
                "to win",
                "won"
            ],
            answer: "to win",
            explanation: "Hope diikuti infinitive."
        },
        {
            type: "Verb Pattern",
            question: "We plan ___ abroad.",
            options: [
                "travel",
                "traveling",
                "to travel",
                "traveled"
            ],
            answer: "to travel",
            explanation: "Plan diikuti infinitive."
        },
        {
            type: "Compare",
            question: "Which sentence contains an infinitive?",
            options: [
                "She enjoys reading.",
                "To learn English is useful.",
                "Swimming is fun.",
                "He is running."
            ],
            answer: "To learn English is useful.",
            explanation: "To learn adalah infinitive."
        },
        {
            type: "Concept",
            question: "After 'want', we usually use...",
            options: [
                "Gerund",
                "Infinitive",
                "V2",
                "V3"
            ],
            answer: "Infinitive",
            explanation: "Want hampir selalu diikuti infinitive."
        },
        {
            type: "Concept",
            question: "Which verb below is commonly followed by an infinitive?",
            options: [
                "Enjoy",
                "Avoid",
                "Want",
                "Keep"
            ],
            answer: "Want",
            explanation: "Want termasuk kelompok verb yang diikuti infinitive."
        }
    ]
},

"gerund-vs-infinitive": {
    title: "Gerund vs Infinitive",
    description: "Gerund dan infinitive sama-sama berasal dari verb, tetapi penggunaannya berbeda. Beberapa verb hanya diikuti gerund, beberapa hanya infinitive, dan beberapa dapat menggunakan keduanya dengan atau tanpa perubahan makna.",

    formula: `
        <strong>Inti Materi:</strong><br>
        Gerund = Verb + ing<br>
        Infinitive = to + Verb (V1)
    `,

    notes: [
        "Gerund berfungsi sebagai noun dalam bentuk Verb + ing.",
        "Infinitive berbentuk to + V1.",
        "Beberapa verb hanya diikuti gerund.",
        "Beberapa verb hanya diikuti infinitive.",
        "Ada verb yang bisa memakai keduanya.",
        "Sebagian verb berubah makna jika memakai gerund atau infinitive."
    ],

    patterns: [
        {
            group: "Gerund Only",
            items: [
                {
                    label: "Enjoy / Finish / Avoid",
                    formula: "Verb + Gerund",
                    examples: [
                        "I enjoy reading.",
                        "She finished cooking.",
                        "They avoid smoking."
                    ]
                },
                {
                    label: "Mind / Keep / Practice",
                    formula: "Verb + Gerund",
                    examples: [
                        "Do you mind waiting?",
                        "He keeps talking.",
                        "We practice speaking English."
                    ]
                }
            ]
        },
        {
            group: "Infinitive Only",
            items: [
                {
                    label: "Want / Decide / Hope",
                    formula: "Verb + to + V1",
                    examples: [
                        "I want to sleep.",
                        "She decided to leave.",
                        "They hope to win."
                    ]
                },
                {
                    label: "Plan / Promise / Learn",
                    formula: "Verb + to + V1",
                    examples: [
                        "We plan to travel.",
                        "He promised to help.",
                        "She learned to drive."
                    ]
                }
            ]
        },
        {
            group: "Both",
            items: [
                {
                    label: "Like / Love / Hate",
                    formula: "Verb + Gerund / Infinitive",
                    examples: [
                        "I like swimming.",
                        "I like to swim.",
                        "Both are generally acceptable."
                    ]
                },
                {
                    label: "Begin / Start / Continue",
                    formula: "Verb + Gerund / Infinitive",
                    examples: [
                        "She started reading.",
                        "She started to read.",
                        "Both forms are correct."
                    ]
                }
            ]
        }
    ],

    quiz: [
        {
            type: "Gerund",
            question: "I enjoy ___.",
            options: ["read", "reading", "to read", "reads"],
            answer: "reading",
            explanation: "Enjoy selalu diikuti gerund."
        },
        {
            type: "Gerund",
            question: "They avoid ___.",
            options: ["drive", "driving", "to drive", "drove"],
            answer: "driving",
            explanation: "Avoid selalu diikuti gerund."
        },
        {
            type: "Infinitive",
            question: "She wants ___ abroad.",
            options: ["travel", "traveling", "to travel", "traveled"],
            answer: "to travel",
            explanation: "Want diikuti infinitive."
        },
        {
            type: "Infinitive",
            question: "We decided ___ early.",
            options: ["leave", "leaving", "to leave", "left"],
            answer: "to leave",
            explanation: "Decide diikuti infinitive."
        },
        {
            type: "Both",
            question: "Which verb can be followed by both gerund and infinitive?",
            options: ["Like", "Enjoy", "Avoid", "Finish"],
            answer: "Like",
            explanation: "Like dapat diikuti gerund maupun infinitive."
        },
        {
            type: "Both",
            question: "She started ___ English yesterday.",
            options: ["study", "studying", "to study", "Both B and C"],
            answer: "Both B and C",
            explanation: "Start dapat diikuti gerund maupun infinitive."
        },
        {
            type: "Concept",
            question: "Gerund is...",
            options: [
                "Verb + ing",
                "to + V1",
                "V2",
                "V3"
            ],
            answer: "Verb + ing",
            explanation: "Gerund berbentuk verb + ing."
        },
        {
            type: "Concept",
            question: "Infinitive is...",
            options: [
                "Verb + ing",
                "to + V1",
                "V2",
                "V3"
            ],
            answer: "to + V1",
            explanation: "Infinitive berbentuk to + V1."
        },
        {
            type: "Comparison",
            question: "Which sentence is correct?",
            options: [
                "I enjoy to swim.",
                "I enjoy swimming.",
                "I enjoy swim.",
                "I enjoy swam."
            ],
            answer: "I enjoy swimming.",
            explanation: "Enjoy hanya diikuti gerund."
        },
        {
            type: "Comparison",
            question: "Which sentence is correct?",
            options: [
                "She wants going home.",
                "She wants to go home.",
                "She wants go home.",
                "She wants went home."
            ],
            answer: "She wants to go home.",
            explanation: "Want hanya diikuti infinitive."
        }
    ]
},

"verb-gerund": {
    title: "Verb + Gerund",
    description: "Beberapa verb dalam Bahasa Inggris harus selalu diikuti oleh gerund (Verb + ing). Menggunakan infinitive setelah verb-verb ini akan menyebabkan kalimat menjadi tidak gramatikal.",

    formula: `
        <strong>Inti Materi:</strong><br>
        Subject + Verb + Gerund (V-ing)
    `,

    notes: [
        "Setelah verb tertentu wajib menggunakan gerund.",
        "Jangan gunakan 'to + V1' setelah verb-verb ini.",
        "Gerund tetap berfungsi sebagai noun.",
        "Kelompok verb ini sangat sering muncul pada soal TOEFL dan TOEIC.",
        "Cara terbaik menguasainya adalah menghafal daftar verb-nya."
    ],

    patterns: [
        {
            group: "Preference",
            items: [
                {
                    label: "Enjoy / Love / Like / Prefer",
                    formula: "Verb + Gerund",
                    examples: [
                        "I enjoy reading books.",
                        "She loves cooking.",
                        "They prefer walking to school."
                    ]
                }
            ]
        },

        {
            group: "Finish Activity",
            items: [
                {
                    label: "Finish / Stop / Quit",
                    formula: "Verb + Gerund",
                    examples: [
                        "She finished writing.",
                        "He quit smoking.",
                        "They stopped arguing."
                    ]
                }
            ]
        },

        {
            group: "Avoidance",
            items: [
                {
                    label: "Avoid / Escape / Miss",
                    formula: "Verb + Gerund",
                    examples: [
                        "I avoid driving at night.",
                        "She missed meeting us.",
                        "He escaped being caught."
                    ]
                }
            ]
        },

        {
            group: "Mental Activity",
            items: [
                {
                    label: "Consider / Imagine / Suggest",
                    formula: "Verb + Gerund",
                    examples: [
                        "We considered moving.",
                        "She suggested eating outside.",
                        "Imagine living in Japan."
                    ]
                }
            ]
        },

        {
            group: "Continuation",
            items: [
                {
                    label: "Keep / Continue / Practice",
                    formula: "Verb + Gerund",
                    examples: [
                        "Keep smiling.",
                        "Continue studying.",
                        "Practice speaking English."
                    ]
                }
            ]
        },

        {
            group: "Tolerance",
            items: [
                {
                    label: "Mind / Can't Stand",
                    formula: "Verb + Gerund",
                    examples: [
                        "Do you mind waiting?",
                        "I can't stand lying.",
                        "She doesn't mind helping."
                    ]
                }
            ]
        }
    ],

    quiz: [
        {
            type:"Preference",
            question:"I enjoy ____ books.",
            options:["read","reading","to read","reads"],
            answer:"reading",
            explanation:"Enjoy selalu diikuti gerund."
        },
        {
            type:"Preference",
            question:"She loves ____.",
            options:["cook","cooking","to cook","cooked"],
            answer:"cooking",
            explanation:"Love dapat diikuti gerund."
        },
        {
            type:"Finish",
            question:"He finished ___.",
            options:["write","writing","to write","written"],
            answer:"writing",
            explanation:"Finish selalu diikuti gerund."
        },
        {
            type:"Finish",
            question:"They quit ___.",
            options:["smoke","smoking","to smoke","smoked"],
            answer:"smoking",
            explanation:"Quit selalu diikuti gerund."
        },
        {
            type:"Avoidance",
            question:"I avoid ___ at night.",
            options:["drive","driving","to drive","drove"],
            answer:"driving",
            explanation:"Avoid selalu diikuti gerund."
        },
        {
            type:"Mental",
            question:"She suggested ___ outside.",
            options:["eat","eating","to eat","ate"],
            answer:"eating",
            explanation:"Suggest diikuti gerund."
        },
        {
            type:"Mental",
            question:"Imagine ___ on the moon.",
            options:["live","living","to live","lived"],
            answer:"living",
            explanation:"Imagine diikuti gerund."
        },
        {
            type:"Continuation",
            question:"Keep ___.",
            options:["try","trying","to try","tried"],
            answer:"trying",
            explanation:"Keep diikuti gerund."
        },
        {
            type:"Continuation",
            question:"We practice ___ English.",
            options:["speak","speaking","to speak","spoken"],
            answer:"speaking",
            explanation:"Practice diikuti gerund."
        },
        {
            type:"Tolerance",
            question:"Do you mind ___?",
            options:["wait","waiting","to wait","waited"],
            answer:"waiting",
            explanation:"Mind diikuti gerund."
        },
        {
            type:"Tolerance",
            question:"I can't stand ___.",
            options:["lie","lying","to lie","lied"],
            answer:"lying",
            explanation:"Can't stand selalu diikuti gerund."
        },
        {
            type:"Concept",
            question:"Which verb below is always followed by a gerund?",
            options:["Enjoy","Want","Decide","Hope"],
            answer:"Enjoy",
            explanation:"Enjoy termasuk verb yang wajib diikuti gerund."
        },
        {
            type:"Concept",
            question:"Which sentence is correct?",
            options:[
                "She enjoys to swim.",
                "She enjoys swimming.",
                "She enjoys swim.",
                "She enjoys swam."
            ],
            answer:"She enjoys swimming.",
            explanation:"Enjoy + Gerund."
        },
        {
            type:"Concept",
            question:"Which sentence is correct?",
            options:[
                "He suggested eating outside.",
                "He suggested to eat outside.",
                "He suggested eat outside.",
                "He suggested ate outside."
            ],
            answer:"He suggested eating outside.",
            explanation:"Suggest diikuti gerund."
        },
        {
            type:"Concept",
            question:"After 'practice', use...",
            options:["Gerund","Infinitive","V2","V3"],
            answer:"Gerund",
            explanation:"Practice selalu diikuti gerund."
        },
        {
            type:"Concept",
            question:"After 'avoid', use...",
            options:["Gerund","Infinitive","V2","V3"],
            answer:"Gerund",
            explanation:"Avoid selalu diikuti gerund."
        },
        {
            type:"Concept",
            question:"After 'keep', use...",
            options:["Gerund","Infinitive","V2","V3"],
            answer:"Gerund",
            explanation:"Keep diikuti gerund."
        },
        {
            type:"Concept",
            question:"After 'mind', use...",
            options:["Gerund","Infinitive","V2","V3"],
            answer:"Gerund",
            explanation:"Mind diikuti gerund."
        },
        {
            type:"Review",
            question:"Which sentence is grammatically correct?",
            options:[
                "They avoided talking.",
                "They avoided to talk.",
                "They avoided talk.",
                "They avoided talked."
            ],
            answer:"They avoided talking.",
            explanation:"Avoid + Gerund."
        },
        {
            type:"Review",
            question:"Verb + Gerund means...",
            options:[
                "Verb diikuti V-ing",
                "Verb diikuti to + V1",
                "Verb diikuti V2",
                "Verb diikuti V3"
            ],
            answer:"Verb diikuti V-ing",
            explanation:"Kelompok verb ini selalu diikuti gerund."
        }
    ]
},

"verb-infinitive": {
    title: "Verb + Infinitive",
    description: "Beberapa verb dalam Bahasa Inggris harus diikuti oleh infinitive (to + Verb). Menggunakan gerund setelah verb-verb ini akan membuat kalimat menjadi tidak tepat secara grammar.",

    formula: `
        <strong>Inti Materi:</strong><br>
        Subject + Verb + to + V1
    `,

    notes: [
        "Infinitive berbentuk to + V1.",
        "Verb tertentu selalu diikuti infinitive.",
        "Jangan gunakan gerund setelah verb-verb ini.",
        "Kelompok verb ini sering muncul pada TOEFL, IELTS, TOEIC, dan ujian grammar.",
        "Cara terbaik menguasainya adalah menghafal daftar verb yang umum."
    ],

    patterns: [
        {
            group: "Desire",
            items: [
                {
                    label: "Want / Wish / Hope",
                    formula: "Verb + to + V1",
                    examples: [
                        "I want to sleep.",
                        "She hopes to win.",
                        "They wish to travel abroad."
                    ]
                }
            ]
        },

        {
            group: "Decision",
            items: [
                {
                    label: "Decide / Choose / Plan",
                    formula: "Verb + to + V1",
                    examples: [
                        "We decided to leave.",
                        "She chose to stay.",
                        "They plan to study overseas."
                    ]
                }
            ]
        },

        {
            group: "Agreement",
            items: [
                {
                    label: "Agree / Promise / Refuse",
                    formula: "Verb + to + V1",
                    examples: [
                        "He agreed to help.",
                        "She promised to come.",
                        "They refused to answer."
                    ]
                }
            ]
        },

        {
            group: "Learning",
            items: [
                {
                    label: "Learn / Manage / Fail",
                    formula: "Verb + to + V1",
                    examples: [
                        "She learned to drive.",
                        "He managed to escape.",
                        "They failed to finish."
                    ]
                }
            ]
        },

        {
            group: "Attempt",
            items: [
                {
                    label: "Try / Attempt / Offer",
                    formula: "Verb + to + V1",
                    examples: [
                        "I tried to call you.",
                        "She attempted to climb the mountain.",
                        "They offered to help."
                    ]
                }
            ]
        },

        {
            group: "Expectation",
            items: [
                {
                    label: "Expect / Seem / Pretend",
                    formula: "Verb + to + V1",
                    examples: [
                        "We expect to arrive early.",
                        "He seems to understand.",
                        "She pretended to sleep."
                    ]
                }
            ]
        }
    ],

    quiz: [
        {
            type: "Desire",
            question: "I want ___ early.",
            options: ["leave", "leaving", "to leave", "left"],
            answer: "to leave",
            explanation: "Want selalu diikuti infinitive."
        },
        {
            type: "Desire",
            question: "She hopes ___ the competition.",
            options: ["win", "winning", "to win", "won"],
            answer: "to win",
            explanation: "Hope diikuti infinitive."
        },
        {
            type: "Decision",
            question: "We decided ___ home.",
            options: ["go", "going", "to go", "gone"],
            answer: "to go",
            explanation: "Decide selalu diikuti infinitive."
        },
        {
            type: "Decision",
            question: "They plan ___ abroad.",
            options: ["study", "studying", "to study", "studied"],
            answer: "to study",
            explanation: "Plan diikuti infinitive."
        },
        {
            type: "Agreement",
            question: "He promised ___ me.",
            options: ["help", "helping", "to help", "helped"],
            answer: "to help",
            explanation: "Promise diikuti infinitive."
        },
        {
            type: "Agreement",
            question: "She refused ___.",
            options: ["answer", "answering", "to answer", "answered"],
            answer: "to answer",
            explanation: "Refuse selalu diikuti infinitive."
        },
        {
            type: "Learning",
            question: "She learned ___ a car.",
            options: ["drive", "driving", "to drive", "drove"],
            answer: "to drive",
            explanation: "Learn diikuti infinitive."
        },
        {
            type: "Learning",
            question: "They managed ___ on time.",
            options: ["arrive", "arriving", "to arrive", "arrived"],
            answer: "to arrive",
            explanation: "Manage diikuti infinitive."
        },
        {
            type: "Attempt",
            question: "I tried ___ him yesterday.",
            options: ["call", "calling", "to call", "called"],
            answer: "to call",
            explanation: "Try (attempt) diikuti infinitive."
        },
        {
            type: "Attempt",
            question: "They offered ___ us.",
            options: ["help", "helping", "to help", "helped"],
            answer: "to help",
            explanation: "Offer diikuti infinitive."
        },
        {
            type: "Expectation",
            question: "We expect ___ tomorrow.",
            options: ["arrive", "arriving", "to arrive", "arrived"],
            answer: "to arrive",
            explanation: "Expect diikuti infinitive."
        },
        {
            type: "Expectation",
            question: "He seems ___ tired.",
            options: ["be", "being", "to be", "been"],
            answer: "to be",
            explanation: "Seem diikuti infinitive."
        },
        {
            type: "Concept",
            question: "Which verb is always followed by an infinitive?",
            options: ["Want", "Enjoy", "Avoid", "Keep"],
            answer: "Want",
            explanation: "Want termasuk kelompok verb + infinitive."
        },
        {
            type: "Concept",
            question: "Which sentence is correct?",
            options: [
                "I want sleeping.",
                "I want to sleep.",
                "I want sleep.",
                "I want slept."
            ],
            answer: "I want to sleep.",
            explanation: "Want + infinitive."
        },
        {
            type: "Concept",
            question: "Which sentence is correct?",
            options: [
                "She promised helping.",
                "She promised help.",
                "She promised to help.",
                "She promised helped."
            ],
            answer: "She promised to help.",
            explanation: "Promise diikuti infinitive."
        },
        {
            type: "Concept",
            question: "After 'decide', use...",
            options: ["Infinitive", "Gerund", "V2", "V3"],
            answer: "Infinitive",
            explanation: "Decide selalu diikuti infinitive."
        },
        {
            type: "Concept",
            question: "After 'plan', use...",
            options: ["Infinitive", "Gerund", "V2", "V3"],
            answer: "Infinitive",
            explanation: "Plan diikuti infinitive."
        },
        {
            type: "Concept",
            question: "After 'expect', use...",
            options: ["Infinitive", "Gerund", "V2", "V3"],
            answer: "Infinitive",
            explanation: "Expect diikuti infinitive."
        },
        {
            type: "Review",
            question: "Which sentence is grammatically correct?",
            options: [
                "They agreed to help.",
                "They agreed helping.",
                "They agreed help.",
                "They agreed helped."
            ],
            answer: "They agreed to help.",
            explanation: "Agree selalu diikuti infinitive."
        },
        {
            type: "Review",
            question: "Verb + Infinitive means...",
            options: [
                "Verb + to + V1",
                "Verb + V-ing",
                "Verb + V2",
                "Verb + V3"
            ],
            answer: "Verb + to + V1",
            explanation: "Kelompok verb ini selalu diikuti infinitive."
        }
    ]
},

"verb-both": {
    title: "Verb + Gerund / Infinitive",
    description: "Beberapa verb dapat diikuti gerund maupun infinitive. Namun, pada verb tertentu perubahan tersebut menyebabkan perubahan makna kalimat.",

    formula: `
        <strong>Inti Materi:</strong><br>
        Verb + Gerund ≠ Verb + Infinitive
    `,

    notes: [
        "Tidak semua verb yang bisa memakai gerund dan infinitive memiliki arti yang sama.",
        "Remember, forget, regret, stop, try, mean, go on merupakan verb yang paling sering diuji.",
        "Pelajari makna, bukan hanya rumus.",
        "Topik ini sangat sering muncul di TOEFL dan IELTS."
    ],

    patterns: [

        {
            group: "Remember",
            items: [
                {
                    label: "remember + gerund",
                    formula: "remember + V-ing = mengingat sesuatu yang sudah dilakukan",
                    examples: [
                        "I remember meeting her.",
                        "She remembers locking the door.",
                        "We remember visiting Bali."
                    ]
                },
                {
                    label: "remember + infinitive",
                    formula: "remember + to V1 = ingat untuk melakukan",
                    examples: [
                        "Remember to lock the door.",
                        "Remember to call your mother.",
                        "Please remember to study."
                    ]
                }
            ]
        },

        {
            group: "Forget",
            items: [
                {
                    label: "forget + gerund",
                    formula: "forget + V-ing = lupa pernah melakukan",
                    examples: [
                        "I forgot meeting him.",
                        "She forgot paying the bill.",
                        "He forgot seeing that movie."
                    ]
                },
                {
                    label: "forget + infinitive",
                    formula: "forget + to V1 = lupa melakukan",
                    examples: [
                        "I forgot to lock the door.",
                        "She forgot to call me.",
                        "He forgot to bring his book."
                    ]
                }
            ]
        },

        {
            group: "Stop",
            items: [
                {
                    label: "stop + gerund",
                    formula: "berhenti melakukan aktivitas",
                    examples: [
                        "He stopped smoking.",
                        "They stopped arguing.",
                        "She stopped talking."
                    ]
                },
                {
                    label: "stop + infinitive",
                    formula: "berhenti untuk melakukan sesuatu",
                    examples: [
                        "He stopped to smoke.",
                        "She stopped to buy coffee.",
                        "They stopped to rest."
                    ]
                }
            ]
        },

        {
            group: "Try",
            items: [
                {
                    label: "try + gerund",
                    formula: "mencoba sebagai eksperimen",
                    examples: [
                        "Try restarting your computer.",
                        "Try adding more salt.",
                        "Try exercising daily."
                    ]
                },
                {
                    label: "try + infinitive",
                    formula: "berusaha melakukan",
                    examples: [
                        "I tried to lift the box.",
                        "She tried to win.",
                        "They tried to escape."
                    ]
                }
            ]
        },

        {
            group: "Regret",
            items: [
                {
                    label: "regret + gerund",
                    formula: "menyesali sesuatu yang telah terjadi",
                    examples: [
                        "I regret saying that.",
                        "She regrets leaving early.",
                        "They regret selling the house."
                    ]
                },
                {
                    label: "regret + infinitive",
                    formula: "menyesal harus menyampaikan sesuatu",
                    examples: [
                        "We regret to inform you...",
                        "I regret to tell you...",
                        "She regrets to announce..."
                    ]
                }
            ]
        },

        {
            group: "Mean",
            items: [
                {
                    label: "mean + gerund",
                    formula: "berarti / mengakibatkan",
                    examples: [
                        "Being rich means working hard.",
                        "Winning means practicing.",
                        "Success means sacrificing."
                    ]
                },
                {
                    label: "mean + infinitive",
                    formula: "bermaksud",
                    examples: [
                        "I meant to call you.",
                        "She meant to help.",
                        "They meant to arrive early."
                    ]
                }
            ]
        },

        {
            group: "Go On",
            items: [
                {
                    label: "go on + gerund",
                    formula: "melanjutkan aktivitas yang sama",
                    examples: [
                        "He went on talking.",
                        "She went on reading.",
                        "They went on working."
                    ]
                },
                {
                    label: "go on + infinitive",
                    formula: "melanjutkan ke aktivitas berikutnya",
                    examples: [
                        "He went on to explain.",
                        "She went on to become a doctor.",
                        "They went on to win."
                    ]
                }
            ]
        }

    ],

    quiz: [

        {
            type:"Remember",
            question:"Remember ___ the lights before leaving.",
            options:["turning off","to turn off","turned","turn"],
            answer:"to turn off",
            explanation:"Remember to + V1 berarti ingat untuk melakukan."
        },

        {
            type:"Remember",
            question:"I remember ___ him years ago.",
            options:["meet","meeting","to meet","met"],
            answer:"meeting",
            explanation:"Remember + gerund berarti mengingat kejadian masa lalu."
        },

        {
            type:"Forget",
            question:"She forgot ___ me yesterday.",
            options:["call","calling","to call","called"],
            answer:"to call",
            explanation:"Forget to + V1 berarti lupa melakukan."
        },

        {
            type:"Stop",
            question:"He stopped ___ because it was unhealthy.",
            options:["smoke","smoking","to smoke","smoked"],
            answer:"smoking",
            explanation:"Stop + gerund berarti berhenti melakukan kebiasaan."
        },

        {
            type:"Stop",
            question:"We stopped ___ some coffee.",
            options:["buy","buying","to buy","bought"],
            answer:"to buy",
            explanation:"Stop to + V1 berarti berhenti untuk melakukan aktivitas lain."
        },

        {
            type:"Try",
            question:"Try ___ the computer again.",
            options:["restart","restarting","to restarting","restarted"],
            answer:"restarting",
            explanation:"Try + gerund berarti mencoba sebagai eksperimen."
        },

        {
            type:"Try",
            question:"She tried ___ the heavy box.",
            options:["lift","lifting","to lift","lifted"],
            answer:"to lift",
            explanation:"Try to + V1 berarti berusaha melakukan."
        },

        {
            type:"Regret",
            question:"We regret ___ that your application was unsuccessful.",
            options:["informing","to inform","informed","inform"],
            answer:"to inform",
            explanation:"Regret to + V1 umum dipakai pada pengumuman resmi."
        },

        {
            type:"Regret",
            question:"I regret ___ those words.",
            options:["say","saying","to say","said"],
            answer:"saying",
            explanation:"Regret + gerund berarti menyesali sesuatu yang telah dilakukan."
        },

        {
            type:"Mean",
            question:"Success means ___ hard.",
            options:["work","working","to work","worked"],
            answer:"working",
            explanation:"Mean + gerund berarti 'berarti'."
        },

        {
            type:"Mean",
            question:"I meant ___ you yesterday.",
            options:["call","calling","to call","called"],
            answer:"to call",
            explanation:"Mean to + V1 berarti bermaksud."
        },

        {
            type:"Go On",
            question:"She went on ___ after lunch.",
            options:["explain","explaining","to explain","explained"],
            answer:"to explain",
            explanation:"Go on to + V1 berarti lanjut ke aktivitas berikutnya."
        },

        {
            type:"Go On",
            question:"He went on ___ although nobody listened.",
            options:["talk","talking","to talk","talked"],
            answer:"talking",
            explanation:"Go on + gerund berarti melanjutkan aktivitas yang sama."
        },

        {
            type:"Concept",
            question:"Which verb changes meaning when followed by a gerund or an infinitive?",
            options:["Remember","Enjoy","Avoid","Finish"],
            answer:"Remember",
            explanation:"Remember adalah salah satu verb yang berubah makna tergantung pola yang digunakan."
        },

        {
            type:"Concept",
            question:"Which pair has different meanings?",
            options:[
                "remember meeting / remember to meet",
                "enjoy reading / enjoy reading",
                "avoid smoking / avoid smoking",
                "finish working / finish working"
            ],
            answer:"remember meeting / remember to meet",
            explanation:"Remember + gerund dan remember + infinitive memiliki makna yang berbeda."
        }

    ]
},

"gerund-review": {
    title: "Gerund & Infinitive Review",
    description: "Review ini menguji seluruh materi BAB 5, mulai dari Gerund, Infinitive, Verb + Gerund, Verb + Infinitive, hingga Verb yang dapat menggunakan keduanya dengan perubahan makna.",

    formula: `
        <strong>Ringkasan BAB 5</strong><br>
        Gerund = Verb + ing<br>
        Infinitive = to + Verb (V1)<br>
        Beberapa verb hanya memakai Gerund, sebagian hanya Infinitive, dan sebagian dapat memakai keduanya dengan makna berbeda.
    `,

    notes: [
        "Gerund = Verb + ing.",
        "Infinitive = to + V1.",
        "Enjoy, avoid, finish, suggest → Gerund.",
        "Want, decide, promise, hope → Infinitive.",
        "Remember, forget, stop, try, regret, mean → Makna berubah tergantung pola."
    ],

    patterns: [
        {
            group: "Ringkasan",
            items: [
                {
                    label: "Gerund",
                    formula: "Verb + ing",
                    examples: [
                        "I enjoy reading.",
                        "Swimming is fun.",
                        "She avoids driving."
                    ]
                },
                {
                    label: "Infinitive",
                    formula: "to + Verb",
                    examples: [
                        "I want to study.",
                        "She decided to leave.",
                        "They hope to win."
                    ]
                },
                {
                    label: "Meaning Changes",
                    formula: "Gerund ≠ Infinitive",
                    examples: [
                        "Remember meeting him.",
                        "Remember to meet him.",
                        "Stop smoking / Stop to smoke."
                    ]
                }
            ]
        }
    ],

    quiz: [

        {
            type:"Gerund",
            question:"I enjoy ___ books.",
            options:["read","reading","to read","reads"],
            answer:"reading",
            explanation:"Enjoy selalu diikuti gerund."
        },

        {
            type:"Gerund",
            question:"She avoids ___ late.",
            options:["arrive","arriving","to arrive","arrived"],
            answer:"arriving",
            explanation:"Avoid diikuti gerund."
        },

        {
            type:"Infinitive",
            question:"We decided ___ home.",
            options:["go","going","to go","gone"],
            answer:"to go",
            explanation:"Decide diikuti infinitive."
        },

        {
            type:"Infinitive",
            question:"He promised ___ us.",
            options:["help","helping","to help","helped"],
            answer:"to help",
            explanation:"Promise diikuti infinitive."
        },

        {
            type:"Infinitive",
            question:"She hopes ___ the exam.",
            options:["pass","passing","to pass","passed"],
            answer:"to pass",
            explanation:"Hope diikuti infinitive."
        },

        {
            type:"Comparison",
            question:"Which verb is followed by a gerund?",
            options:["Enjoy","Want","Hope","Promise"],
            answer:"Enjoy",
            explanation:"Enjoy termasuk Verb + Gerund."
        },

        {
            type:"Comparison",
            question:"Which verb is followed by an infinitive?",
            options:["Avoid","Finish","Want","Keep"],
            answer:"Want",
            explanation:"Want termasuk Verb + Infinitive."
        },

        {
            type:"Remember",
            question:"Remember ___ the lights before leaving.",
            options:["turning off","to turn off","turn","turned"],
            answer:"to turn off",
            explanation:"Remember to berarti ingat untuk melakukan."
        },

        {
            type:"Remember",
            question:"I remember ___ him before.",
            options:["meet","meeting","to meet","met"],
            answer:"meeting",
            explanation:"Remember + gerund berarti mengingat pengalaman."
        },

        {
            type:"Forget",
            question:"She forgot ___ me.",
            options:["call","calling","to call","called"],
            answer:"to call",
            explanation:"Forget to berarti lupa melakukan."
        },

        {
            type:"Stop",
            question:"He stopped ___ because it was unhealthy.",
            options:["smoke","smoking","to smoke","smoked"],
            answer:"smoking",
            explanation:"Stop + gerund berarti berhenti dari kebiasaan."
        },

        {
            type:"Stop",
            question:"We stopped ___ lunch.",
            options:["eat","eating","to eat","ate"],
            answer:"to eat",
            explanation:"Stop + infinitive berarti berhenti untuk melakukan sesuatu."
        },

        {
            type:"Try",
            question:"Try ___ your computer.",
            options:["restart","restarting","to restart","restarted"],
            answer:"restarting",
            explanation:"Try + gerund berarti mencoba sebagai eksperimen."
        },

        {
            type:"Try",
            question:"I tried ___ the heavy box.",
            options:["lift","lifting","to lift","lifted"],
            answer:"to lift",
            explanation:"Try + infinitive berarti berusaha."
        },

        {
            type:"Regret",
            question:"We regret ___ you that your application was unsuccessful.",
            options:["informing","to inform","inform","informed"],
            answer:"to inform",
            explanation:"Regret to + infinitive digunakan pada pengumuman formal."
        },

        {
            type:"Regret",
            question:"She regrets ___ school.",
            options:["leave","leaving","to leave","left"],
            answer:"leaving",
            explanation:"Regret + gerund berarti menyesali sesuatu."
        },

        {
            type:"Mean",
            question:"Success means ___ hard.",
            options:["work","working","to work","worked"],
            answer:"working",
            explanation:"Mean + gerund berarti 'berarti'."
        },

        {
            type:"Mean",
            question:"I meant ___ you yesterday.",
            options:["call","calling","to call","called"],
            answer:"to call",
            explanation:"Mean to berarti bermaksud."
        },

        {
            type:"Go On",
            question:"She went on ___ after the break.",
            options:["explain","explaining","to explain","explained"],
            answer:"to explain",
            explanation:"Go on to berarti lanjut ke aktivitas berikutnya."
        },

        {
            type:"Go On",
            question:"He went on ___ although nobody listened.",
            options:["talk","talking","to talk","talked"],
            answer:"talking",
            explanation:"Go on + gerund berarti melanjutkan aktivitas yang sama."
        },

        {
            type:"Concept",
            question:"Gerund is formed by...",
            options:["Verb + ing","to + Verb","Verb 2","Verb 3"],
            answer:"Verb + ing",
            explanation:"Gerund adalah Verb + ing."
        },

        {
            type:"Concept",
            question:"Infinitive is formed by...",
            options:["Verb + ing","to + Verb","Verb 2","Verb 3"],
            answer:"to + Verb",
            explanation:"Infinitive adalah to + V1."
        },

        {
            type:"Concept",
            question:"Which sentence is correct?",
            options:[
                "I enjoy to swim.",
                "I enjoy swimming.",
                "I enjoy swim.",
                "I enjoy swam."
            ],
            answer:"I enjoy swimming.",
            explanation:"Enjoy selalu diikuti gerund."
        },

        {
            type:"Concept",
            question:"Which sentence is correct?",
            options:[
                "She wants going home.",
                "She wants to go home.",
                "She wants go home.",
                "She wants gone home."
            ],
            answer:"She wants to go home.",
            explanation:"Want selalu diikuti infinitive."
        },

        {
            type:"Review",
            question:"After modal verbs we use...",
            options:["Verb 1","Gerund","Infinitive","Verb 3"],
            answer:"Verb 1",
            explanation:"Modal verb diikuti V1 tanpa 'to'."
        },

        {
            type:"Review",
            question:"Which pair changes meaning?",
            options:[
                "remember",
                "enjoy",
                "avoid",
                "finish"
            ],
            answer:"remember",
            explanation:"Remember + gerund dan remember + infinitive memiliki makna berbeda."
        },

        {
            type:"Review",
            question:"Which pair changes meaning?",
            options:[
                "stop",
                "practice",
                "mind",
                "avoid"
            ],
            answer:"stop",
            explanation:"Stop smoking ≠ Stop to smoke."
        },

        {
            type:"Review",
            question:"Which sentence is grammatically correct?",
            options:[
                "They avoided talking.",
                "They avoided to talk.",
                "They avoided talk.",
                "They avoided talked."
            ],
            answer:"They avoided talking.",
            explanation:"Avoid selalu diikuti gerund."
        },

        {
            type:"Review",
            question:"Which sentence is grammatically correct?",
            options:[
                "We decided leaving.",
                "We decided to leave.",
                "We decided leave.",
                "We decided left."
            ],
            answer:"We decided to leave.",
            explanation:"Decide selalu diikuti infinitive."
        },

        {
            type:"Final",
            question:"Which statement is TRUE?",
            options:[
                "All verbs can use gerund and infinitive interchangeably.",
                "Some verbs change meaning depending on gerund or infinitive.",
                "Gerund and infinitive are always interchangeable.",
                "Gerund is always incorrect after verbs."
            ],
            answer:"Some verbs change meaning depending on gerund or infinitive.",
            explanation:"Verb seperti remember, stop, regret, try, mean, dan go on berubah makna sesuai pola yang digunakan."
        }
    ]
},

"articles": {
    title: "Articles",
    description: "Articles adalah kata kecil yang diletakkan sebelum noun. Dalam Bahasa Inggris, articles utama adalah a, an, dan the. Articles membantu menjelaskan apakah noun bersifat umum, satu, atau sudah spesifik.",

    formula: `
        <strong>Inti Materi:</strong><br>
        a / an + singular countable noun<br>
        the + specific noun
    `,

    notes: [
        "A digunakan sebelum singular countable noun yang bunyinya konsonan.",
        "An digunakan sebelum singular countable noun yang bunyinya vokal.",
        "The digunakan untuk noun yang sudah spesifik atau sudah diketahui.",
        "A dan an tidak digunakan untuk plural noun.",
        "A dan an tidak digunakan untuk uncountable noun.",
        "Articles selalu berkaitan dengan noun."
    ],

    patterns: [
        {
            group: "A / An",
            items: [
                {
                    label: "A",
                    formula: "a + singular countable noun",
                    examples: [
                        "a book",
                        "a student",
                        "a university"
                    ]
                },
                {
                    label: "An",
                    formula: "an + vowel sound",
                    examples: [
                        "an apple",
                        "an egg",
                        "an hour"
                    ]
                }
            ]
        },
        {
            group: "The",
            items: [
                {
                    label: "Specific Noun",
                    formula: "the + specific noun",
                    examples: [
                        "The book on the table is mine.",
                        "I saw a cat. The cat was black.",
                        "The sun is bright."
                    ]
                }
            ]
        },
        {
            group: "No Article",
            items: [
                {
                    label: "General / Plural / Uncountable",
                    formula: "No article before general plural or uncountable noun",
                    examples: [
                        "Cats are cute.",
                        "Water is important.",
                        "Students need practice."
                    ]
                }
            ]
        }
    ],

    quiz: [
        {
            type: "A/An",
            question: "I have ___ book.",
            options: ["a", "an", "the", "no article"],
            answer: "a",
            explanation: "Book diawali bunyi konsonan, jadi gunakan a."
        },
        {
            type: "A/An",
            question: "She eats ___ apple.",
            options: ["a", "an", "the", "no article"],
            answer: "an",
            explanation: "Apple diawali bunyi vokal, jadi gunakan an."
        },
        {
            type: "A/An",
            question: "He is ___ honest man.",
            options: ["a", "an", "the", "no article"],
            answer: "an",
            explanation: "Honest diawali bunyi vokal karena h tidak dibaca."
        },
        {
            type: "A/An",
            question: "She studies at ___ university.",
            options: ["a", "an", "the", "no article"],
            answer: "a",
            explanation: "University diawali bunyi /yu/, yaitu bunyi konsonan, jadi gunakan a."
        },
        {
            type: "The",
            question: "I saw a dog. ___ dog was black.",
            options: ["A", "An", "The", "No article"],
            answer: "The",
            explanation: "Dog sudah disebut sebelumnya, jadi menjadi spesifik."
        },
        {
            type: "The",
            question: "___ sun rises in the east.",
            options: ["A", "An", "The", "No article"],
            answer: "The",
            explanation: "The sun unik dan spesifik."
        },
        {
            type: "No Article",
            question: "___ water is important.",
            options: ["A", "An", "The", "No article"],
            answer: "No article",
            explanation: "Water sebagai uncountable noun umum tidak memakai article."
        },
        {
            type: "No Article",
            question: "___ cats are cute.",
            options: ["A", "An", "The", "No article"],
            answer: "No article",
            explanation: "Plural noun umum tidak memakai article."
        },
        {
            type: "Concept",
            question: "A and an are used before...",
            options: [
                "singular countable nouns",
                "plural nouns only",
                "uncountable nouns only",
                "verbs"
            ],
            answer: "singular countable nouns",
            explanation: "A/an dipakai sebelum singular countable noun."
        },
        {
            type: "Concept",
            question: "The is used for...",
            options: [
                "specific nouns",
                "verbs",
                "adverbs only",
                "unknown general nouns only"
            ],
            answer: "specific nouns",
            explanation: "The digunakan untuk noun yang spesifik."
        }
    ]
},

"a-vs-an": {
    title: "A vs An",
    description: "A dan an digunakan sebelum singular countable noun. Pilihannya bukan berdasarkan huruf pertama, tetapi berdasarkan bunyi awal kata.",

    formula: `
        <strong>Inti Materi:</strong><br>
        a + consonant sound<br>
        an + vowel sound
    `,

    notes: [
        "Gunakan a sebelum bunyi konsonan.",
        "Gunakan an sebelum bunyi vokal.",
        "Yang menentukan adalah bunyi, bukan huruf.",
        "University memakai a karena berbunyi /yu/.",
        "Hour memakai an karena h tidak dibaca.",
        "A/an hanya untuk singular countable noun."
    ],

    patterns: [
        {
            group: "A",
            items: [
                {
                    label: "Consonant Sound",
                    formula: "a + consonant sound",
                    examples: [
                        "a book",
                        "a student",
                        "a car",
                        "a university",
                        "a European country"
                    ]
                }
            ]
        },
        {
            group: "An",
            items: [
                {
                    label: "Vowel Sound",
                    formula: "an + vowel sound",
                    examples: [
                        "an apple",
                        "an egg",
                        "an hour",
                        "an honest man",
                        "an umbrella"
                    ]
                }
            ]
        }
    ],

    quiz: [
        {
            type: "A",
            question: "I have ___ book.",
            options: ["a", "an", "the", "no article"],
            answer: "a",
            explanation: "Book diawali bunyi konsonan /b/, jadi gunakan a."
        },
        {
            type: "An",
            question: "She eats ___ orange.",
            options: ["a", "an", "the", "no article"],
            answer: "an",
            explanation: "Orange diawali bunyi vokal, jadi gunakan an."
        },
        {
            type: "A",
            question: "He studies at ___ university.",
            options: ["a", "an", "the", "no article"],
            answer: "a",
            explanation: "University berbunyi /yu/, jadi memakai a."
        },
        {
            type: "An",
            question: "It takes ___ hour.",
            options: ["a", "an", "the", "no article"],
            answer: "an",
            explanation: "Hour diawali bunyi vokal karena h tidak dibaca."
        },
        {
            type: "An",
            question: "He is ___ honest person.",
            options: ["a", "an", "the", "no article"],
            answer: "an",
            explanation: "Honest diawali bunyi vokal karena h tidak dibaca."
        },
        {
            type: "A",
            question: "She is ___ European student.",
            options: ["a", "an", "the", "no article"],
            answer: "a",
            explanation: "European berbunyi /yu/, jadi memakai a."
        },
        {
            type: "Concept",
            question: "A/an is chosen based on...",
            options: ["sound", "spelling only", "plural form", "verb tense"],
            answer: "sound",
            explanation: "A/an dipilih berdasarkan bunyi awal kata."
        },
        {
            type: "Concept",
            question: "A/an is used before...",
            options: [
                "singular countable noun",
                "plural noun",
                "uncountable noun only",
                "verb"
            ],
            answer: "singular countable noun",
            explanation: "A/an digunakan untuk singular countable noun."
        },
        {
            type: "Error Check",
            question: "Which phrase is correct?",
            options: ["a apple", "an apple", "a apples", "an books"],
            answer: "an apple",
            explanation: "Apple diawali bunyi vokal dan singular countable."
        },
        {
            type: "Error Check",
            question: "Which phrase is correct?",
            options: ["a hour", "an hour", "a honest man", "an university"],
            answer: "an hour",
            explanation: "Hour memakai an karena h tidak dibaca."
        }
    ]
},

"the-article": {
    title: "The",
    description: "The adalah definite article. The digunakan ketika noun sudah spesifik, sudah diketahui oleh pembicara dan pendengar, unik, atau sudah disebut sebelumnya.",

    formula: `
        <strong>Inti Materi:</strong><br>
        the + specific noun
    `,

    notes: [
        "The digunakan untuk noun yang spesifik.",
        "The digunakan jika noun sudah disebut sebelumnya.",
        "The digunakan untuk benda yang unik, seperti the sun dan the moon.",
        "The dapat digunakan sebelum singular, plural, dan uncountable noun.",
        "The tidak selalu berarti 'ini' atau 'itu', tetapi menunjukkan noun yang sudah jelas."
    ],

    patterns: [
        {
            group: "Specific Noun",
            items: [
                {
                    label: "Known Object",
                    formula: "the + noun yang sudah jelas",
                    examples: [
                        "The book on the table is mine.",
                        "The teacher in this class is kind.",
                        "The car outside is expensive."
                    ]
                }
            ]
        },
        {
            group: "Second Mention",
            items: [
                {
                    label: "A → The",
                    formula: "First mention: a/an, second mention: the",
                    examples: [
                        "I saw a cat. The cat was black.",
                        "She bought a book. The book was expensive.",
                        "He met a man. The man was friendly."
                    ]
                }
            ]
        },
        {
            group: "Unique Object",
            items: [
                {
                    label: "Only One",
                    formula: "the + unique noun",
                    examples: [
                        "The sun is bright.",
                        "The moon looks beautiful.",
                        "The sky is blue."
                    ]
                }
            ]
        }
    ],

    quiz: [
        {
            type: "Specific",
            question: "___ book on the table is mine.",
            options: ["A", "An", "The", "No article"],
            answer: "The",
            explanation: "Book sudah spesifik karena ada keterangan on the table."
        },
        {
            type: "Second Mention",
            question: "I saw a dog. ___ dog was black.",
            options: ["A", "An", "The", "No article"],
            answer: "The",
            explanation: "Dog sudah disebut sebelumnya, jadi gunakan the."
        },
        {
            type: "Unique",
            question: "___ sun rises in the east.",
            options: ["A", "An", "The", "No article"],
            answer: "The",
            explanation: "The sun unik dan spesifik."
        },
        {
            type: "Unique",
            question: "___ moon is beautiful tonight.",
            options: ["A", "An", "The", "No article"],
            answer: "The",
            explanation: "The moon adalah benda unik."
        },
        {
            type: "Specific",
            question: "Please close ___ door.",
            options: ["a", "an", "the", "no article"],
            answer: "the",
            explanation: "Door yang dimaksud sudah jelas dalam konteks."
        },
        {
            type: "Second Mention",
            question: "She bought a dress. ___ dress was red.",
            options: ["A", "An", "The", "No article"],
            answer: "The",
            explanation: "Dress sudah disebut sebelumnya."
        },
        {
            type: "Concept",
            question: "The is used for...",
            options: [
                "specific nouns",
                "unknown singular nouns only",
                "verbs",
                "adverbs"
            ],
            answer: "specific nouns",
            explanation: "The digunakan untuk noun yang spesifik atau sudah diketahui."
        },
        {
            type: "Concept",
            question: "The can be used before...",
            options: [
                "singular, plural, and uncountable nouns",
                "verbs only",
                "adjectives only",
                "adverbs only"
            ],
            answer: "singular, plural, and uncountable nouns",
            explanation: "The bisa dipakai sebelum singular, plural, dan uncountable noun."
        },
        {
            type: "Error Check",
            question: "Which sentence is correct?",
            options: [
                "I saw a cat. A cat was black.",
                "I saw a cat. The cat was black.",
                "I saw an cat. The cat was black.",
                "I saw cat. A cat was black."
            ],
            answer: "I saw a cat. The cat was black.",
            explanation: "Penyebutan pertama memakai a, penyebutan kedua memakai the."
        },
        {
            type: "Meaning",
            question: "In 'the book on the table', the book is...",
            options: ["specific", "general", "plural", "verb"],
            answer: "specific",
            explanation: "Keterangan on the table membuat book menjadi spesifik."
        }
    ]
},

"zero-article": {
    title: "Zero Article",
    description: "Zero Article berarti tidak menggunakan article (a, an, atau the). Umumnya digunakan untuk plural noun dan uncountable noun yang bersifat umum, serta nama orang, negara, bahasa, mata pelajaran, dan sebagian besar nama tempat.",

    formula: `
        <strong>Inti Materi:</strong><br>
        Ø + plural noun (general)<br>
        Ø + uncountable noun (general)<br>
        Ø + proper noun
    `,

    notes: [
        "Plural noun yang bersifat umum tidak memakai article.",
        "Uncountable noun yang bersifat umum tidak memakai article.",
        "Nama orang biasanya tidak memakai article.",
        "Nama negara umumnya tidak memakai article (Indonesia, Japan, France).",
        "Nama bahasa dan mata pelajaran tidak memakai article.",
        "Jika noun menjadi spesifik, gunakan the."
    ],

    patterns: [
        {
            group: "Plural Nouns",
            items: [
                {
                    label: "General Plural",
                    formula: "Ø + plural noun",
                    examples: [
                        "Cats are cute.",
                        "Students need practice.",
                        "Computers are useful."
                    ]
                }
            ]
        },
        {
            group: "Uncountable Nouns",
            items: [
                {
                    label: "General Uncountable",
                    formula: "Ø + uncountable noun",
                    examples: [
                        "Water is important.",
                        "Milk is healthy.",
                        "Information is valuable."
                    ]
                }
            ]
        },
        {
            group: "Proper Nouns",
            items: [
                {
                    label: "Names",
                    formula: "Ø + proper noun",
                    examples: [
                        "Rina is my friend.",
                        "Indonesia is beautiful.",
                        "English is easy."
                    ]
                }
            ]
        }
    ],

    quiz: [
        {
            type: "Plural",
            question: "___ dogs are loyal animals.",
            options: ["A", "An", "The", "No article"],
            answer: "No article",
            explanation: "Plural noun yang bersifat umum tidak memakai article."
        },
        {
            type: "Plural",
            question: "___ students should study hard.",
            options: ["A", "An", "The", "No article"],
            answer: "No article",
            explanation: "Students digunakan secara umum."
        },
        {
            type: "Uncountable",
            question: "___ water is essential for life.",
            options: ["A", "An", "The", "No article"],
            answer: "No article",
            explanation: "Water sebagai uncountable noun umum tidak memakai article."
        },
        {
            type: "Uncountable",
            question: "___ information is useful.",
            options: ["A", "An", "The", "No article"],
            answer: "No article",
            explanation: "Information adalah uncountable noun."
        },
        {
            type: "Proper Noun",
            question: "___ Indonesia is a beautiful country.",
            options: ["A", "An", "The", "No article"],
            answer: "No article",
            explanation: "Nama negara umumnya tidak memakai article."
        },
        {
            type: "Proper Noun",
            question: "She speaks ___ English well.",
            options: ["a", "an", "the", "no article"],
            answer: "no article",
            explanation: "Nama bahasa tidak memakai article."
        },
        {
            type: "Concept",
            question: "Zero article is commonly used before...",
            options: [
                "general plural nouns",
                "singular countable nouns",
                "verbs",
                "adjectives"
            ],
            answer: "general plural nouns",
            explanation: "Plural noun yang bersifat umum memakai zero article."
        },
        {
            type: "Concept",
            question: "Which noun usually uses zero article?",
            options: [
                "Indonesia",
                "the book on the table",
                "an apple",
                "the sun"
            ],
            answer: "Indonesia",
            explanation: "Nama negara umumnya tidak memakai article."
        },
        {
            type: "Error Check",
            question: "Which sentence is correct?",
            options: [
                "The cats are friendly. (all cats in general)",
                "Cats are friendly.",
                "A cats are friendly.",
                "An cats are friendly."
            ],
            answer: "Cats are friendly.",
            explanation: "Plural noun umum menggunakan zero article."
        },
        {
            type: "Comparison",
            question: "Which sentence refers to something specific?",
            options: [
                "Books are expensive.",
                "The books on the desk are mine.",
                "Water is important.",
                "English is easy."
            ],
            answer: "The books on the desk are mine.",
            explanation: "Keterangan 'on the desk' membuat noun menjadi spesifik sehingga menggunakan 'the'."
        }
    ]
},

"determiners": {
    title: "Determiners",
    description: "Determiners adalah kata yang diletakkan sebelum noun untuk memberikan informasi tentang jumlah, kepemilikan, jarak, atau identitas noun tersebut. Articles (a, an, the) juga termasuk determiner.",

    formula: `
        <strong>Inti Materi:</strong><br>
        Determiner + Noun
    `,

    notes: [
        "Determiner selalu berada sebelum noun.",
        "Article (a, an, the) termasuk determiner.",
        "Possessive determiner menunjukkan kepemilikan.",
        "Demonstrative determiner menunjukkan jarak.",
        "Distributive determiner menunjukkan anggota dalam kelompok.",
        "Biasanya hanya satu determiner utama digunakan sebelum noun."
    ],

    patterns: [
        {
            group: "Articles",
            items: [
                {
                    label: "Articles",
                    formula: "a / an / the + noun",
                    examples: [
                        "a book",
                        "an apple",
                        "the car"
                    ]
                }
            ]
        },
        {
            group: "Possessive Determiners",
            items: [
                {
                    label: "Possessive",
                    formula: "my, your, his, her, our, their + noun",
                    examples: [
                        "my house",
                        "your car",
                        "their school"
                    ]
                }
            ]
        },
        {
            group: "Demonstratives",
            items: [
                {
                    label: "This / That / These / Those",
                    formula: "demonstrative + noun",
                    examples: [
                        "this book",
                        "that car",
                        "these students",
                        "those houses"
                    ]
                }
            ]
        },
        {
            group: "Distributives",
            items: [
                {
                    label: "Each / Every / Either / Neither",
                    formula: "distributive + noun",
                    examples: [
                        "Each student passed.",
                        "Every child smiled.",
                        "Either answer is correct.",
                        "Neither option works."
                    ]
                }
            ]
        }
    ],

    quiz: [
        {
            type: "Possessive",
            question: "___ book is on the table.",
            options: ["My", "Mine", "Me", "I"],
            answer: "My",
            explanation: "Possessive determiner digunakan sebelum noun."
        },
        {
            type: "Demonstrative",
            question: "___ apples are fresh.",
            options: ["This", "That", "These", "It"],
            answer: "These",
            explanation: "These digunakan untuk benda jamak yang dekat."
        },
        {
            type: "Demonstrative",
            question: "___ car over there is expensive.",
            options: ["This", "These", "That", "Those"],
            answer: "That",
            explanation: "That digunakan untuk benda tunggal yang jauh."
        },
        {
            type: "Distributive",
            question: "___ student received a certificate.",
            options: ["Every", "Many", "Several", "Few"],
            answer: "Every",
            explanation: "Every digunakan untuk setiap anggota kelompok."
        },
        {
            type: "Distributive",
            question: "___ of the answers is correct.",
            options: ["Either", "Many", "Several", "Both"],
            answer: "Either",
            explanation: "Either berarti salah satu dari dua."
        },
        {
            type: "Concept",
            question: "Determiners usually come...",
            options: [
                "before a noun",
                "after a noun",
                "after a verb",
                "before a verb"
            ],
            answer: "before a noun",
            explanation: "Determiner selalu berada sebelum noun."
        },
        {
            type: "Concept",
            question: "Which word is a determiner?",
            options: [
                "my",
                "run",
                "quickly",
                "beautiful"
            ],
            answer: "my",
            explanation: "My adalah possessive determiner."
        },
        {
            type: "Concept",
            question: "Which is NOT a determiner?",
            options: [
                "this",
                "their",
                "quickly",
                "every"
            ],
            answer: "quickly",
            explanation: "Quickly adalah adverb."
        },
        {
            type: "Usage",
            question: "Choose the correct phrase.",
            options: [
                "these books",
                "this books",
                "those book",
                "these book"
            ],
            answer: "these books",
            explanation: "These digunakan untuk plural noun."
        },
        {
            type: "Usage",
            question: "Choose the correct sentence.",
            options: [
                "Every students passed.",
                "Every student passed.",
                "Every student pass.",
                "Every students pass."
            ],
            answer: "Every student passed.",
            explanation: "Every selalu diikuti singular noun."
        }
    ]
},

"quantifiers": {
    title: "Quantifiers",
    description: "Quantifiers adalah kata yang menunjukkan jumlah atau kuantitas suatu noun. Penggunaannya bergantung pada apakah noun tersebut countable atau uncountable.",

    formula: `
        <strong>Inti Materi:</strong><br>
        Quantifier + Noun
    `,

    notes: [
        "Many digunakan untuk countable noun.",
        "Much digunakan untuk uncountable noun.",
        "Few berarti sedikit (countable).",
        "Little berarti sedikit (uncountable).",
        "A few berarti beberapa (masih bernilai positif).",
        "A little berarti sedikit tetapi cukup.",
        "Some digunakan pada kalimat positif.",
        "Any umumnya digunakan pada kalimat negatif dan pertanyaan.",
        "A lot of dapat digunakan untuk countable maupun uncountable noun."
    ],

    patterns: [
        {
            group: "Countable",
            items: [
                {
                    label: "Many / Few / A Few",
                    formula: "Quantifier + Countable Noun",
                    examples: [
                        "Many students attended.",
                        "Few people agreed.",
                        "A few books are missing."
                    ]
                }
            ]
        },
        {
            group: "Uncountable",
            items: [
                {
                    label: "Much / Little / A Little",
                    formula: "Quantifier + Uncountable Noun",
                    examples: [
                        "Much money was spent.",
                        "Little water remained.",
                        "A little sugar is enough."
                    ]
                }
            ]
        },
        {
            group: "Both Types",
            items: [
                {
                    label: "Some / Any / A lot of",
                    formula: "Quantifier + Noun",
                    examples: [
                        "Some students are here.",
                        "Do you have any questions?",
                        "A lot of people came."
                    ]
                }
            ]
        }
    ],

    quiz: [
        {
            type: "Countable",
            question: "How ___ books do you have?",
            options: ["many", "much", "little", "a little"],
            answer: "many",
            explanation: "Books adalah countable noun."
        },
        {
            type: "Uncountable",
            question: "How ___ water do you drink?",
            options: ["many", "few", "much", "a few"],
            answer: "much",
            explanation: "Water adalah uncountable noun."
        },
        {
            type: "Few",
            question: "There are only ___ students in the class.",
            options: ["few", "little", "much", "many"],
            answer: "few",
            explanation: "Students adalah countable noun."
        },
        {
            type: "Little",
            question: "There is very ___ milk left.",
            options: ["few", "little", "many", "a few"],
            answer: "little",
            explanation: "Milk adalah uncountable noun."
        },
        {
            type: "Positive",
            question: "I have ___ friends in London.",
            options: ["a few", "little", "much", "any"],
            answer: "a few",
            explanation: "A few berarti beberapa dan digunakan untuk countable noun."
        },
        {
            type: "Positive",
            question: "Add ___ salt.",
            options: ["a little", "few", "many", "a few"],
            answer: "a little",
            explanation: "Salt adalah uncountable noun."
        },
        {
            type: "Some/Any",
            question: "Do you have ___ questions?",
            options: ["some", "any", "many", "few"],
            answer: "any",
            explanation: "Any umum digunakan pada pertanyaan."
        },
        {
            type: "Some/Any",
            question: "She bought ___ apples.",
            options: ["any", "some", "few", "little"],
            answer: "some",
            explanation: "Some umum digunakan pada kalimat positif."
        },
        {
            type: "A lot of",
            question: "___ people joined the event.",
            options: ["A lot of", "Much", "Little", "Few"],
            answer: "A lot of",
            explanation: "A lot of dapat digunakan untuk countable noun."
        },
        {
            type: "Concept",
            question: "Which quantifier can be used for both countable and uncountable nouns?",
            options: [
                "A lot of",
                "Many",
                "Much",
                "Few"
            ],
            answer: "A lot of",
            explanation: "A lot of dapat digunakan pada kedua jenis noun."
        }
    ]
},

"articles-review": {
    title: "Articles & Determiners Review",
    description: "Review ini menguji seluruh materi BAB 6: articles, a vs an, the, zero article, determiners, dan quantifiers.",

    formula: `
        <strong>Ringkasan BAB 6:</strong><br>
        a/an = singular countable noun<br>
        the = specific noun<br>
        zero article = general plural / uncountable / proper noun<br>
        determiner = kata sebelum noun<br>
        quantifier = jumlah noun
    `,

    notes: [
        "A digunakan sebelum bunyi konsonan.",
        "An digunakan sebelum bunyi vokal.",
        "The digunakan untuk noun yang spesifik.",
        "Zero article digunakan untuk plural noun umum dan uncountable noun umum.",
        "Determiners meliputi article, possessive, demonstrative, dan distributive.",
        "Many untuk countable noun.",
        "Much untuk uncountable noun.",
        "A lot of bisa digunakan untuk countable dan uncountable noun."
    ],

    patterns: [
        {
            group: "Review",
            items: [
                {
                    label: "Articles",
                    formula: "a / an / the / zero article",
                    examples: [
                        "a book",
                        "an apple",
                        "the book on the table",
                        "Water is important."
                    ]
                },
                {
                    label: "Determiners",
                    formula: "determiner + noun",
                    examples: [
                        "my book",
                        "this car",
                        "every student"
                    ]
                },
                {
                    label: "Quantifiers",
                    formula: "quantifier + noun",
                    examples: [
                        "many books",
                        "much water",
                        "a lot of people"
                    ]
                }
            ]
        }
    ],

    quiz: [
        {
            type: "A/An",
            question: "She has ___ apple.",
            options: ["a", "an", "the", "no article"],
            answer: "an",
            explanation: "Apple diawali bunyi vokal."
        },
        {
            type: "A/An",
            question: "He is ___ honest man.",
            options: ["a", "an", "the", "no article"],
            answer: "an",
            explanation: "Honest diawali bunyi vokal karena h tidak dibaca."
        },
        {
            type: "A/An",
            question: "She studies at ___ university.",
            options: ["a", "an", "the", "no article"],
            answer: "a",
            explanation: "University berbunyi /yu/, jadi memakai a."
        },
        {
            type: "The",
            question: "I saw a bird. ___ bird was beautiful.",
            options: ["A", "An", "The", "No article"],
            answer: "The",
            explanation: "Bird sudah disebut sebelumnya."
        },
        {
            type: "The",
            question: "___ sun is bright today.",
            options: ["A", "An", "The", "No article"],
            answer: "The",
            explanation: "Sun adalah benda unik."
        },
        {
            type: "Zero Article",
            question: "___ water is important.",
            options: ["A", "An", "The", "No article"],
            answer: "No article",
            explanation: "Water sebagai uncountable noun umum tidak memakai article."
        },
        {
            type: "Zero Article",
            question: "___ cats are friendly.",
            options: ["A", "An", "The", "No article"],
            answer: "No article",
            explanation: "Plural noun umum memakai zero article."
        },
        {
            type: "Zero Article",
            question: "She speaks ___ English.",
            options: ["a", "an", "the", "no article"],
            answer: "no article",
            explanation: "Nama bahasa tidak memakai article."
        },
        {
            type: "Determiner",
            question: "___ book is on the table.",
            options: ["My", "Mine", "Me", "I"],
            answer: "My",
            explanation: "My adalah possessive determiner sebelum noun."
        },
        {
            type: "Determiner",
            question: "___ students are waiting outside.",
            options: ["This", "That", "These", "It"],
            answer: "These",
            explanation: "These digunakan untuk plural noun yang dekat."
        },
        {
            type: "Determiner",
            question: "___ student must submit the task.",
            options: ["Every", "Many", "Few", "Several"],
            answer: "Every",
            explanation: "Every diikuti singular noun."
        },
        {
            type: "Quantifier",
            question: "How ___ books do you have?",
            options: ["many", "much", "little", "a little"],
            answer: "many",
            explanation: "Books adalah countable noun."
        },
        {
            type: "Quantifier",
            question: "How ___ water do you drink?",
            options: ["many", "much", "few", "a few"],
            answer: "much",
            explanation: "Water adalah uncountable noun."
        },
        {
            type: "Quantifier",
            question: "There are ___ students in the class.",
            options: ["many", "much", "little", "a little"],
            answer: "many",
            explanation: "Students adalah countable noun."
        },
        {
            type: "Quantifier",
            question: "There is ___ milk left.",
            options: ["few", "little", "many", "a few"],
            answer: "little",
            explanation: "Milk adalah uncountable noun."
        },
        {
            type: "Quantifier",
            question: "She bought ___ apples.",
            options: ["some", "much", "little", "a little"],
            answer: "some",
            explanation: "Some dapat digunakan untuk plural countable noun."
        },
        {
            type: "Quantifier",
            question: "Do you have ___ questions?",
            options: ["some", "any", "much", "little"],
            answer: "any",
            explanation: "Any umum dipakai pada pertanyaan."
        },
        {
            type: "Quantifier",
            question: "___ people joined the meeting.",
            options: ["A lot of", "Much", "Little", "A little"],
            answer: "A lot of",
            explanation: "A lot of bisa digunakan untuk countable noun."
        },
        {
            type: "Error Check",
            question: "Which phrase is correct?",
            options: ["a apple", "an apple", "a apples", "an books"],
            answer: "an apple",
            explanation: "Apple diawali bunyi vokal dan singular countable."
        },
        {
            type: "Error Check",
            question: "Which phrase is correct?",
            options: ["this books", "these books", "those book", "these book"],
            answer: "these books",
            explanation: "These digunakan untuk plural noun."
        },
        {
            type: "Error Check",
            question: "Which sentence is correct?",
            options: [
                "Every students passed.",
                "Every student passed.",
                "Every student pass.",
                "Every students pass."
            ],
            answer: "Every student passed.",
            explanation: "Every diikuti singular noun."
        },
        {
            type: "Concept",
            question: "A and an are used before...",
            options: [
                "singular countable nouns",
                "plural nouns only",
                "uncountable nouns only",
                "verbs"
            ],
            answer: "singular countable nouns",
            explanation: "A/an digunakan sebelum singular countable noun."
        },
        {
            type: "Concept",
            question: "The is used for...",
            options: ["specific nouns", "unknown verbs", "adverbs", "general plural nouns only"],
            answer: "specific nouns",
            explanation: "The digunakan untuk noun yang spesifik."
        },
        {
            type: "Concept",
            question: "Zero article is commonly used for...",
            options: [
                "general plural nouns",
                "specific singular nouns only",
                "verbs",
                "modal verbs"
            ],
            answer: "general plural nouns",
            explanation: "Plural noun umum biasanya tidak memakai article."
        },
        {
            type: "Concept",
            question: "Which word is a determiner?",
            options: ["their", "quickly", "run", "beautiful"],
            answer: "their",
            explanation: "Their adalah possessive determiner."
        },
        {
            type: "Concept",
            question: "Which word is a quantifier?",
            options: ["many", "beautiful", "quickly", "under"],
            answer: "many",
            explanation: "Many menunjukkan jumlah."
        },
        {
            type: "Comparison",
            question: "Which sentence is specific?",
            options: [
                "Books are useful.",
                "The books on the shelf are useful.",
                "Water is important.",
                "Cats are cute."
            ],
            answer: "The books on the shelf are useful.",
            explanation: "On the shelf membuat books menjadi spesifik."
        },
        {
            type: "Comparison",
            question: "Which noun is uncountable?",
            options: ["water", "book", "student", "apple"],
            answer: "water",
            explanation: "Water adalah uncountable noun."
        },
        {
            type: "Comparison",
            question: "Which noun is countable?",
            options: ["information", "milk", "rice", "chair"],
            answer: "chair",
            explanation: "Chair bisa dihitung."
        },
        {
            type: "Final",
            question: "Which sentence is correct?",
            options: [
                "I need an information.",
                "I need a information.",
                "I need information.",
                "I need informations."
            ],
            answer: "I need information.",
            explanation: "Information adalah uncountable noun, jadi tidak memakai a/an dan tidak dibuat plural."
        }
    ]
},

"conditionals": {
    title: "Introduction to Conditionals",
    description: "Conditional Sentence adalah kalimat pengandaian yang menunjukkan hubungan antara syarat dan hasil. Kalimat ini biasanya memakai if untuk menjelaskan apa yang terjadi jika suatu kondisi terpenuhi.",

    formula: `
        <strong>Inti Materi:</strong><br>
        If + Condition, Result<br>
        Result + if + Condition
    `,

    notes: [
        "Conditional sentence terdiri dari condition dan result.",
        "Condition adalah syarat.",
        "Result adalah hasil dari syarat tersebut.",
        "If biasanya digunakan untuk memperkenalkan syarat.",
        "Jika if-clause berada di awal kalimat, biasanya gunakan koma.",
        "Conditional sentence memiliki beberapa jenis: Zero, First, Second, Third, dan Mixed Conditional."
    ],

    patterns: [
        {
            group: "Basic Structure",
            items: [
                {
                    label: "If Clause First",
                    formula: "If + condition, result",
                    examples: [
                        "If it rains, I stay at home.",
                        "If you study, you understand better.",
                        "If she calls, I answer."
                    ]
                },
                {
                    label: "Result First",
                    formula: "Result + if + condition",
                    examples: [
                        "I stay at home if it rains.",
                        "You understand better if you study.",
                        "I answer if she calls."
                    ]
                }
            ]
        },
        {
            group: "Types",
            items: [
                {
                    label: "Real Conditions",
                    formula: "Real / possible situations",
                    examples: [
                        "If water reaches 100°C, it boils.",
                        "If I have time, I will call you."
                    ]
                },
                {
                    label: "Unreal Conditions",
                    formula: "Imaginary / impossible / past unreal situations",
                    examples: [
                        "If I had more money, I would travel.",
                        "If she had studied, she would have passed."
                    ]
                }
            ]
        }
    ],

    quiz: [
        {
            type: "Concept",
            question: "Conditional sentence usually shows...",
            options: ["condition and result", "noun and adjective", "subject only", "article only"],
            answer: "condition and result",
            explanation: "Conditional sentence menunjukkan hubungan antara syarat dan hasil."
        },
        {
            type: "Concept",
            question: "Which word is commonly used in conditional sentences?",
            options: ["if", "wow", "the", "quickly"],
            answer: "if",
            explanation: "If digunakan untuk memperkenalkan condition."
        },
        {
            type: "Structure",
            question: "In 'If it rains, I stay home', 'If it rains' is...",
            options: ["condition", "result", "object", "article"],
            answer: "condition",
            explanation: "If it rains adalah syarat atau condition."
        },
        {
            type: "Structure",
            question: "In 'If it rains, I stay home', 'I stay home' is...",
            options: ["condition", "result", "preposition", "determiner"],
            answer: "result",
            explanation: "I stay home adalah hasil dari condition."
        },
        {
            type: "Comma",
            question: "Which sentence uses comma correctly?",
            options: [
                "If it rains, I stay home.",
                "If it rains I, stay home.",
                "I stay, home if it rains.",
                "If, it rains I stay home."
            ],
            answer: "If it rains, I stay home.",
            explanation: "Jika if-clause berada di awal, gunakan koma setelah clause tersebut."
        },
        {
            type: "Order",
            question: "Which sentence is also correct?",
            options: [
                "I stay home if it rains.",
                "I if it rains stay home.",
                "If stay home it rains.",
                "It rains if stay home."
            ],
            answer: "I stay home if it rains.",
            explanation: "Result bisa muncul di awal tanpa koma sebelum if-clause."
        },
        {
            type: "Type",
            question: "Which conditional is used for general facts?",
            options: ["Zero Conditional", "Third Conditional", "Mixed Conditional", "Reported Speech"],
            answer: "Zero Conditional",
            explanation: "Zero Conditional digunakan untuk fakta umum atau kebiasaan."
        },
        {
            type: "Type",
            question: "Which conditional is used for possible future situations?",
            options: ["First Conditional", "Zero Conditional only", "Third Conditional", "Passive Voice"],
            answer: "First Conditional",
            explanation: "First Conditional digunakan untuk kemungkinan nyata di masa depan."
        },
        {
            type: "Type",
            question: "Which conditional is used for unreal present situations?",
            options: ["Second Conditional", "Zero Conditional", "Simple Present", "Article"],
            answer: "Second Conditional",
            explanation: "Second Conditional digunakan untuk situasi imajinatif atau tidak nyata sekarang."
        },
        {
            type: "Type",
            question: "Which conditional is used for unreal past situations?",
            options: ["Third Conditional", "First Conditional", "Zero Conditional", "Determiner"],
            answer: "Third Conditional",
            explanation: "Third Conditional digunakan untuk pengandaian masa lampau yang tidak terjadi."
        }
    ]
},

"zero-conditional": {
    title: "Zero Conditional",
    description: "Zero Conditional digunakan untuk fakta umum, kebenaran ilmiah, aturan, atau kebiasaan yang selalu benar jika syaratnya terpenuhi.",

    formula: `
        <strong>Inti Materi:</strong><br>
        If + Simple Present, Simple Present
    `,

    notes: [
        "Zero Conditional digunakan untuk fakta umum.",
        "Kedua clause memakai Simple Present.",
        "If dapat diganti dengan when jika maknanya selalu terjadi.",
        "Jika if-clause berada di awal, gunakan koma.",
        "Zero Conditional tidak memakai will."
    ],

    patterns: [
        {
            group: "Basic Form",
            items: [
                {
                    label: "If First",
                    formula: "If + Simple Present, Simple Present",
                    examples: [
                        "If water reaches 100°C, it boils.",
                        "If you heat ice, it melts.",
                        "If people eat too much, they gain weight."
                    ]
                },
                {
                    label: "Result First",
                    formula: "Simple Present + if + Simple Present",
                    examples: [
                        "Water boils if it reaches 100°C.",
                        "Ice melts if you heat it.",
                        "People gain weight if they eat too much."
                    ]
                }
            ]
        },
        {
            group: "When",
            items: [
                {
                    label: "If / When",
                    formula: "When + Simple Present, Simple Present",
                    examples: [
                        "When it rains, the ground gets wet.",
                        "When the sun sets, it gets dark.",
                        "When students practice, they improve."
                    ]
                }
            ]
        }
    ],

    quiz: [
        {
            type: "Formula",
            question: "Zero Conditional uses...",
            options: [
                "If + Simple Present, Simple Present",
                "If + Simple Present, will + V1",
                "If + Simple Past, would + V1",
                "If + Past Perfect, would have + V3"
            ],
            answer: "If + Simple Present, Simple Present",
            explanation: "Zero Conditional memakai Simple Present di kedua clause."
        },
        {
            type: "Fact",
            question: "If water reaches 100°C, it ___.",
            options: ["boil", "boils", "will boil", "boiled"],
            answer: "boils",
            explanation: "Zero Conditional memakai Simple Present."
        },
        {
            type: "Fact",
            question: "If you heat ice, it ___.",
            options: ["melts", "will melt", "melted", "would melt"],
            answer: "melts",
            explanation: "Ini fakta umum, jadi gunakan Simple Present."
        },
        {
            type: "Fact",
            question: "If people eat too much, they ___ weight.",
            options: ["gain", "gains", "will gain", "gained"],
            answer: "gain",
            explanation: "Subject they memakai V1 biasa."
        },
        {
            type: "When",
            question: "___ it rains, the ground gets wet.",
            options: ["When", "Would", "Had", "Will"],
            answer: "When",
            explanation: "When bisa digunakan untuk kejadian yang selalu benar."
        },
        {
            type: "Error Check",
            question: "Which sentence is correct?",
            options: [
                "If water reaches 100°C, it will boil.",
                "If water reaches 100°C, it boils.",
                "If water reached 100°C, it boils.",
                "If water has reached 100°C, it would boil."
            ],
            answer: "If water reaches 100°C, it boils.",
            explanation: "Zero Conditional tidak memakai will pada result clause."
        },
        {
            type: "Concept",
            question: "Zero Conditional is used for...",
            options: [
                "general facts",
                "unreal past situations",
                "imaginary present situations",
                "reported speech"
            ],
            answer: "general facts",
            explanation: "Zero Conditional digunakan untuk fakta umum atau aturan yang selalu benar."
        },
        {
            type: "Comma",
            question: "Which punctuation is correct?",
            options: [
                "If you heat ice, it melts.",
                "If you heat, ice it melts.",
                "If, you heat ice it melts.",
                "If you heat ice it, melts."
            ],
            answer: "If you heat ice, it melts.",
            explanation: "Jika if-clause di awal, gunakan koma setelah clause."
        },
        {
            type: "Order",
            question: "Which sentence is correct?",
            options: [
                "Ice melts if you heat it.",
                "Ice if you heat it melts.",
                "If ice melts you heat it.",
                "Melts ice if you heat it."
            ],
            answer: "Ice melts if you heat it.",
            explanation: "Result clause bisa diletakkan sebelum if-clause."
        },
        {
            type: "Concept",
            question: "In Zero Conditional, 'if' can often be replaced by...",
            options: ["when", "would", "must", "although"],
            answer: "when",
            explanation: "Untuk kejadian yang selalu benar, if sering bisa diganti dengan when."
        }
    ]
},

"first-conditional": {
    title: "First Conditional",
    description: "First Conditional digunakan untuk kemungkinan nyata di masa depan. Kalimat ini menunjukkan bahwa suatu hasil kemungkinan akan terjadi jika syaratnya terpenuhi.",

    formula: `
        <strong>Inti Materi:</strong><br>
        If + Simple Present, Subject + will + V1
    `,

    notes: [
        "First Conditional digunakan untuk situasi masa depan yang mungkin terjadi.",
        "If-clause memakai Simple Present.",
        "Result clause memakai will + V1.",
        "Jangan gunakan will di dalam if-clause.",
        "Jika if-clause berada di awal, gunakan koma."
    ],

    patterns: [
        {
            group: "Basic Form",
            items: [
                {
                    label: "If First",
                    formula: "If + Simple Present, will + V1",
                    examples: [
                        "If it rains, I will stay at home.",
                        "If you study, you will pass the exam.",
                        "If she calls, I will answer."
                    ]
                },
                {
                    label: "Result First",
                    formula: "Will + V1 + if + Simple Present",
                    examples: [
                        "I will stay at home if it rains.",
                        "You will pass the exam if you study.",
                        "I will answer if she calls."
                    ]
                }
            ]
        }
    ],

    quiz: [
        {
            type: "Formula",
            question: "First Conditional uses...",
            options: [
                "If + Simple Present, will + V1",
                "If + Simple Past, would + V1",
                "If + Past Perfect, would have + V3",
                "If + Simple Present, Simple Present"
            ],
            answer: "If + Simple Present, will + V1",
            explanation: "First Conditional memakai If + Simple Present, will + V1."
        },
        {
            type: "Future Possibility",
            question: "If it rains, I ___ stay at home.",
            options: ["will", "would", "was", "had"],
            answer: "will",
            explanation: "Result clause First Conditional memakai will + V1."
        },
        {
            type: "Future Possibility",
            question: "If you study hard, you ___ pass the exam.",
            options: ["will", "would", "had", "were"],
            answer: "will",
            explanation: "First Conditional menunjukkan kemungkinan nyata di masa depan."
        },
        {
            type: "If Clause",
            question: "If she ___ me, I will answer.",
            options: ["call", "calls", "called", "will call"],
            answer: "calls",
            explanation: "If-clause memakai Simple Present. Subject she memakai calls."
        },
        {
            type: "Error Check",
            question: "Which sentence is correct?",
            options: [
                "If it will rain, I will stay home.",
                "If it rains, I will stay home.",
                "If it rained, I will stay home.",
                "If it rains, I would stay home."
            ],
            answer: "If it rains, I will stay home.",
            explanation: "Jangan gunakan will di dalam if-clause."
        },
        {
            type: "Comma",
            question: "Which sentence uses comma correctly?",
            options: [
                "If you study, you will pass.",
                "If, you study you will pass.",
                "If you, study you will pass.",
                "If you study you, will pass."
            ],
            answer: "If you study, you will pass.",
            explanation: "Jika if-clause di awal, gunakan koma."
        },
        {
            type: "Order",
            question: "Which sentence is also correct?",
            options: [
                "You will pass if you study.",
                "You pass will if you study.",
                "If you will study, you pass.",
                "You would pass if you study."
            ],
            answer: "You will pass if you study.",
            explanation: "Result clause bisa diletakkan sebelum if-clause."
        },
        {
            type: "Concept",
            question: "First Conditional is used for...",
            options: [
                "real future possibilities",
                "general facts only",
                "unreal past situations",
                "past habits"
            ],
            answer: "real future possibilities",
            explanation: "First Conditional digunakan untuk kemungkinan nyata di masa depan."
        },
        {
            type: "Result",
            question: "If they arrive early, we ___ start the meeting.",
            options: ["will", "would", "had", "were"],
            answer: "will",
            explanation: "Result clause memakai will + V1."
        },
        {
            type: "If Clause",
            question: "If he ___ late, we will leave without him.",
            options: ["is", "will be", "was", "were"],
            answer: "is",
            explanation: "If-clause First Conditional memakai Simple Present."
        }
    ]
},

"second-conditional": {
    title: "Second Conditional",
    description: "Second Conditional digunakan untuk situasi imajinatif, tidak nyata, atau kecil kemungkinan terjadi di masa sekarang atau masa depan.",

    formula: `
        <strong>Inti Materi:</strong><br>
        If + Simple Past, Subject + would + V1
    `,

    notes: [
        "Second Conditional digunakan untuk kondisi tidak nyata atau imajinatif.",
        "If-clause memakai Simple Past.",
        "Result clause memakai would + V1.",
        "Untuk semua subject, bentuk formal menggunakan were pada be verb.",
        "Second Conditional sering digunakan untuk impian, saran, dan situasi hipotetis."
    ],

    patterns: [
        {
            group: "Basic Form",
            items: [
                {
                    label: "If First",
                    formula: "If + Simple Past, would + V1",
                    examples: [
                        "If I had more money, I would travel.",
                        "If she studied harder, she would pass.",
                        "If they lived here, we would meet often."
                    ]
                },
                {
                    label: "Result First",
                    formula: "Would + V1 + if + Simple Past",
                    examples: [
                        "I would travel if I had more money.",
                        "She would pass if she studied harder.",
                        "We would meet often if they lived here."
                    ]
                },
                {
                    label: "Were",
                    formula: "If + Subject + were, would + V1",
                    examples: [
                        "If I were you, I would apologize.",
                        "If she were here, she would help us.",
                        "If they were ready, we would leave."
                    ]
                }
            ]
        }
    ],

    quiz: [
        {
            type: "Formula",
            question: "Second Conditional uses...",
            options: [
                "If + Simple Past, would + V1",
                "If + Simple Present, will + V1",
                "If + Past Perfect, would have + V3",
                "If + Simple Present, Simple Present"
            ],
            answer: "If + Simple Past, would + V1",
            explanation: "Second Conditional memakai If + Simple Past, would + V1."
        },
        {
            type: "Hypothetical",
            question: "If I had more money, I ___ travel.",
            options: ["will", "would", "had", "am"],
            answer: "would",
            explanation: "Result clause Second Conditional memakai would + V1."
        },
        {
            type: "Hypothetical",
            question: "If she studied harder, she ___ pass.",
            options: ["will", "would", "has", "is"],
            answer: "would",
            explanation: "Second Conditional menunjukkan situasi hipotetis."
        },
        {
            type: "If Clause",
            question: "If they ___ here, we would meet often.",
            options: ["live", "lived", "will live", "living"],
            answer: "lived",
            explanation: "If-clause Second Conditional memakai Simple Past."
        },
        {
            type: "Were",
            question: "If I ___ you, I would apologize.",
            options: ["am", "was", "were", "be"],
            answer: "were",
            explanation: "Dalam bentuk formal Second Conditional, gunakan were untuk semua subject."
        },
        {
            type: "Error Check",
            question: "Which sentence is correct?",
            options: [
                "If I have more money, I would travel.",
                "If I had more money, I would travel.",
                "If I had more money, I will travel.",
                "If I will have more money, I would travel."
            ],
            answer: "If I had more money, I would travel.",
            explanation: "Second Conditional memakai If + Simple Past, would + V1."
        },
        {
            type: "Concept",
            question: "Second Conditional is used for...",
            options: [
                "imaginary or unreal situations",
                "general facts",
                "real future possibilities",
                "completed past events"
            ],
            answer: "imaginary or unreal situations",
            explanation: "Second Conditional digunakan untuk situasi imajinatif atau tidak nyata."
        },
        {
            type: "Advice",
            question: "If I were you, I ___ accept the offer.",
            options: ["will", "would", "had", "am"],
            answer: "would",
            explanation: "If I were you sering digunakan untuk memberi saran."
        },
        {
            type: "Order",
            question: "Which sentence is also correct?",
            options: [
                "I would travel if I had more money.",
                "I travel would if I had more money.",
                "I will travel if I had more money.",
                "I would travelled if I had money."
            ],
            answer: "I would travel if I had more money.",
            explanation: "Result clause boleh muncul sebelum if-clause."
        },
        {
            type: "Verb Form",
            question: "After would, use...",
            options: ["V1", "V2", "V3", "V-ing"],
            answer: "V1",
            explanation: "Would selalu diikuti base verb atau V1."
        }
    ]
},

"third-conditional": {
    title: "Third Conditional",
    description: "Third Conditional digunakan untuk membicarakan situasi masa lampau yang tidak terjadi. Kalimat ini sering digunakan untuk penyesalan, kritik, atau membayangkan hasil berbeda di masa lalu.",

    formula: `
        <strong>Inti Materi:</strong><br>
        If + Past Perfect, Subject + would have + V3
    `,

    notes: [
        "Third Conditional digunakan untuk situasi masa lampau yang tidak nyata.",
        "If-clause memakai Past Perfect.",
        "Result clause memakai would have + V3.",
        "Third Conditional sering dipakai untuk penyesalan.",
        "Kalimat ini membicarakan hal yang sudah tidak bisa diubah."
    ],

    patterns: [
        {
            group: "Basic Form",
            items: [
                {
                    label: "If First",
                    formula: "If + had + V3, would have + V3",
                    examples: [
                        "If I had studied, I would have passed.",
                        "If she had left earlier, she would have arrived on time.",
                        "If they had invited me, I would have come."
                    ]
                },
                {
                    label: "Result First",
                    formula: "Would have + V3 + if + had + V3",
                    examples: [
                        "I would have passed if I had studied.",
                        "She would have arrived on time if she had left earlier.",
                        "I would have come if they had invited me."
                    ]
                }
            ]
        }
    ],

    quiz: [
        {
            type: "Formula",
            question: "Third Conditional uses...",
            options: [
                "If + Past Perfect, would have + V3",
                "If + Simple Present, will + V1",
                "If + Simple Past, would + V1",
                "If + Simple Present, Simple Present"
            ],
            answer: "If + Past Perfect, would have + V3",
            explanation: "Third Conditional memakai If + Past Perfect, would have + V3."
        },
        {
            type: "Past Unreal",
            question: "If I had studied, I ___ passed.",
            options: ["will have", "would have", "would", "had"],
            answer: "would have",
            explanation: "Result clause Third Conditional memakai would have + V3."
        },
        {
            type: "Past Unreal",
            question: "If she had left earlier, she would have ___.",
            options: ["arrive", "arrives", "arrived", "arriving"],
            answer: "arrived",
            explanation: "Setelah would have, gunakan V3."
        },
        {
            type: "If Clause",
            question: "If they ___ me, I would have come.",
            options: ["invite", "invited", "had invited", "will invite"],
            answer: "had invited",
            explanation: "If-clause Third Conditional memakai had + V3."
        },
        {
            type: "Regret",
            question: "If I had known the answer, I ___ told you.",
            options: ["will have", "would have", "would", "had"],
            answer: "would have",
            explanation: "Kalimat ini membayangkan hasil berbeda di masa lalu."
        },
        {
            type: "Error Check",
            question: "Which sentence is correct?",
            options: [
                "If I studied, I would have passed.",
                "If I had studied, I would have passed.",
                "If I had studied, I would pass.",
                "If I have studied, I would have passed."
            ],
            answer: "If I had studied, I would have passed.",
            explanation: "Third Conditional memakai If + had + V3, would have + V3."
        },
        {
            type: "Concept",
            question: "Third Conditional is used for...",
            options: [
                "unreal past situations",
                "general facts",
                "real future possibilities",
                "present habits"
            ],
            answer: "unreal past situations",
            explanation: "Third Conditional digunakan untuk pengandaian masa lampau yang tidak terjadi."
        },
        {
            type: "Order",
            question: "Which sentence is also correct?",
            options: [
                "I would have passed if I had studied.",
                "I would passed if I had studied.",
                "I will have passed if I studied.",
                "I had passed if I would study."
            ],
            answer: "I would have passed if I had studied.",
            explanation: "Result clause boleh muncul sebelum if-clause."
        },
        {
            type: "Verb Form",
            question: "After would have, use...",
            options: ["V1", "V2", "V3", "V-ing"],
            answer: "V3",
            explanation: "Would have selalu diikuti V3."
        },
        {
            type: "Meaning",
            question: "If she had studied, she would have passed. This means...",
            options: [
                "She did not study and did not pass.",
                "She studies now.",
                "She will pass tomorrow.",
                "She always passes."
            ],
            answer: "She did not study and did not pass.",
            explanation: "Third Conditional menunjukkan kondisi lampau yang tidak terjadi."
        }
    ]
},

"mixed-conditional": {
    title: "Mixed Conditional",
    description: "Mixed Conditional digunakan ketika waktu pada condition dan result berbeda. Biasanya kalimat ini menghubungkan kondisi masa lampau dengan hasil sekarang, atau kondisi sekarang dengan hasil masa lampau.",

    formula: `
        <strong>Inti Materi:</strong><br>
        Past condition → Present result:<br>
        If + Past Perfect, would + V1<br><br>
        Present condition → Past result:<br>
        If + Simple Past, would have + V3
    `,

    notes: [
        "Mixed Conditional menggabungkan dua waktu berbeda.",
        "Bentuk paling umum: kondisi masa lampau, hasil sekarang.",
        "If + Past Perfect, would + V1 berarti masa lalu memengaruhi sekarang.",
        "If + Simple Past, would have + V3 berarti kondisi sekarang memengaruhi kejadian masa lalu.",
        "Materi ini lebih advanced daripada Type 0, 1, 2, dan 3."
    ],

    patterns: [
        {
            group: "Past Condition → Present Result",
            items: [
                {
                    label: "Past to Present",
                    formula: "If + had + V3, would + V1",
                    examples: [
                        "If I had studied medicine, I would be a doctor now.",
                        "If she had saved money, she would be rich now.",
                        "If they had left earlier, they would be here now."
                    ]
                }
            ]
        },
        {
            group: "Present Condition → Past Result",
            items: [
                {
                    label: "Present to Past",
                    formula: "If + Simple Past, would have + V3",
                    examples: [
                        "If I were more careful, I would not have made that mistake.",
                        "If he knew English, he would have understood the movie.",
                        "If she were braver, she would have accepted the challenge."
                    ]
                }
            ]
        }
    ],

    quiz: [
        {
            type: "Past to Present",
            question: "If I had studied medicine, I ___ a doctor now.",
            options: ["will be", "would be", "would have been", "am"],
            answer: "would be",
            explanation: "Past condition dengan present result memakai would + V1."
        },
        {
            type: "Past to Present",
            question: "If she had saved money, she ___ rich now.",
            options: ["would be", "would have been", "will be", "has been"],
            answer: "would be",
            explanation: "Kondisi masa lampau memengaruhi hasil sekarang."
        },
        {
            type: "Past to Present",
            question: "If they had left earlier, they ___ here now.",
            options: ["would be", "would have been", "will be", "are"],
            answer: "would be",
            explanation: "Had left adalah past condition, here now adalah present result."
        },
        {
            type: "Past Condition",
            question: "If I ___ harder, I would be successful now.",
            options: ["study", "studied", "had studied", "will study"],
            answer: "had studied",
            explanation: "Untuk kondisi masa lampau, gunakan had + V3."
        },
        {
            type: "Present to Past",
            question: "If I were more careful, I ___ that mistake.",
            options: ["would not make", "would not have made", "will not make", "did not make"],
            answer: "would not have made",
            explanation: "Present condition dengan past result memakai would have + V3."
        },
        {
            type: "Present to Past",
            question: "If he knew English, he ___ the movie.",
            options: ["would understand", "would have understood", "will understand", "understood"],
            answer: "would have understood",
            explanation: "Kondisi sekarang memengaruhi hasil masa lampau."
        },
        {
            type: "Concept",
            question: "Mixed Conditional usually combines...",
            options: [
                "different time references",
                "only present time",
                "only future time",
                "only articles"
            ],
            answer: "different time references",
            explanation: "Mixed Conditional menggabungkan condition dan result dari waktu berbeda."
        },
        {
            type: "Formula",
            question: "Past condition → Present result uses...",
            options: [
                "If + had + V3, would + V1",
                "If + Simple Present, will + V1",
                "If + Simple Past, would have + V3",
                "If + Simple Present, Simple Present"
            ],
            answer: "If + had + V3, would + V1",
            explanation: "Ini pola mixed conditional paling umum."
        },
        {
            type: "Formula",
            question: "Present condition → Past result uses...",
            options: [
                "If + Simple Past, would have + V3",
                "If + Past Perfect, would + V1",
                "If + Simple Present, will + V1",
                "If + Simple Present, Simple Present"
            ],
            answer: "If + Simple Past, would have + V3",
            explanation: "Kondisi sekarang dengan hasil lampau memakai Simple Past + would have V3."
        },
        {
            type: "Meaning",
            question: "If I had studied medicine, I would be a doctor now. This means...",
            options: [
                "I did not study medicine, so I am not a doctor now.",
                "I am studying medicine now.",
                "I will become a doctor tomorrow.",
                "I was a doctor yesterday."
            ],
            answer: "I did not study medicine, so I am not a doctor now.",
            explanation: "Kalimat ini menunjukkan penyesalan masa lampau dengan akibat sekarang."
        }
    ]
},

"conditional-review": {
    title: "Conditional Review",
    description: "Conditional Review adalah latihan akhir untuk menguji pemahaman Zero, First, Second, Third, dan Mixed Conditional.",

    formula: `
        <strong>Ringkasan BAB 7:</strong><br>
        Zero = If + Simple Present, Simple Present<br>
        First = If + Simple Present, will + V1<br>
        Second = If + Simple Past, would + V1<br>
        Third = If + Past Perfect, would have + V3<br>
        Mixed = gabungan waktu berbeda
    `,

    notes: [
        "Zero Conditional digunakan untuk fakta umum.",
        "First Conditional digunakan untuk kemungkinan nyata di masa depan.",
        "Second Conditional digunakan untuk situasi imajinatif sekarang/masa depan.",
        "Third Conditional digunakan untuk pengandaian masa lampau yang tidak terjadi.",
        "Mixed Conditional menggabungkan waktu berbeda antara condition dan result."
    ],

    patterns: [
        {
            group: "Review",
            items: [
                {
                    label: "Zero / First",
                    formula: "Present → Present / Future",
                    examples: [
                        "If water reaches 100°C, it boils.",
                        "If it rains, I will stay home."
                    ]
                },
                {
                    label: "Second / Third",
                    formula: "Past → Would / Past Perfect → Would Have",
                    examples: [
                        "If I had money, I would travel.",
                        "If I had studied, I would have passed."
                    ]
                },
                {
                    label: "Mixed",
                    formula: "Different time references",
                    examples: [
                        "If I had studied medicine, I would be a doctor now.",
                        "If I were more careful, I would not have made that mistake."
                    ]
                }
            ]
        }
    ],

    quiz: [
        {
            type: "Zero",
            question: "If water reaches 100°C, it ___.",
            options: ["boils", "will boil", "would boil", "would have boiled"],
            answer: "boils",
            explanation: "Zero Conditional memakai Simple Present di kedua clause."
        },
        {
            type: "Zero",
            question: "If you heat ice, it ___.",
            options: ["melts", "will melt", "would melt", "melted"],
            answer: "melts",
            explanation: "Ini fakta umum, jadi gunakan Zero Conditional."
        },
        {
            type: "First",
            question: "If it rains tomorrow, I ___ stay home.",
            options: ["will", "would", "would have", "had"],
            answer: "will",
            explanation: "First Conditional memakai will + V1 pada result clause."
        },
        {
            type: "First",
            question: "If she ___ hard, she will pass.",
            options: ["studies", "studied", "had studied", "will study"],
            answer: "studies",
            explanation: "If-clause First Conditional memakai Simple Present."
        },
        {
            type: "Second",
            question: "If I had more money, I ___ travel.",
            options: ["will", "would", "would have", "had"],
            answer: "would",
            explanation: "Second Conditional memakai would + V1."
        },
        {
            type: "Second",
            question: "If I ___ you, I would apologize.",
            options: ["am", "was", "were", "be"],
            answer: "were",
            explanation: "Dalam bentuk formal, gunakan were untuk semua subject."
        },
        {
            type: "Third",
            question: "If I had studied, I ___ passed.",
            options: ["will have", "would have", "would", "had"],
            answer: "would have",
            explanation: "Third Conditional memakai would have + V3."
        },
        {
            type: "Third",
            question: "If she ___ earlier, she would have arrived on time.",
            options: ["leaves", "left", "had left", "will leave"],
            answer: "had left",
            explanation: "If-clause Third Conditional memakai had + V3."
        },
        {
            type: "Mixed",
            question: "If I had studied medicine, I ___ a doctor now.",
            options: ["will be", "would be", "would have been", "am"],
            answer: "would be",
            explanation: "Mixed Conditional: past condition dengan present result."
        },
        {
            type: "Mixed",
            question: "If I were more careful, I ___ that mistake.",
            options: ["would not make", "would not have made", "will not make", "did not make"],
            answer: "would not have made",
            explanation: "Mixed Conditional: present condition dengan past result."
        },
        {
            type: "Formula",
            question: "Which formula is First Conditional?",
            options: [
                "If + Simple Present, will + V1",
                "If + Simple Past, would + V1",
                "If + Past Perfect, would have + V3",
                "If + Simple Present, Simple Present"
            ],
            answer: "If + Simple Present, will + V1",
            explanation: "First Conditional memakai Simple Present + will."
        },
        {
            type: "Formula",
            question: "Which formula is Third Conditional?",
            options: [
                "If + Simple Present, will + V1",
                "If + Simple Past, would + V1",
                "If + Past Perfect, would have + V3",
                "If + Simple Present, Simple Present"
            ],
            answer: "If + Past Perfect, would have + V3",
            explanation: "Third Conditional memakai had + V3 dan would have + V3."
        },
        {
            type: "Meaning",
            question: "If I had studied, I would have passed. This means...",
            options: [
                "I did not study and I did not pass.",
                "I study every day.",
                "I will pass tomorrow.",
                "I am passing now."
            ],
            answer: "I did not study and I did not pass.",
            explanation: "Third Conditional menunjukkan pengandaian masa lampau yang tidak terjadi."
        },
        {
            type: "Meaning",
            question: "If I had more time, I would learn French. This is...",
            options: [
                "real future possibility",
                "imaginary present/future situation",
                "general fact",
                "completed past event"
            ],
            answer: "imaginary present/future situation",
            explanation: "Second Conditional digunakan untuk situasi imajinatif."
        },
        {
            type: "Error Check",
            question: "Which sentence is correct?",
            options: [
                "If it will rain, I will stay home.",
                "If it rains, I will stay home.",
                "If it rained, I will stay home.",
                "If it rains, I would stay home."
            ],
            answer: "If it rains, I will stay home.",
            explanation: "First Conditional tidak memakai will di if-clause."
        },
        {
            type: "Error Check",
            question: "Which sentence is correct?",
            options: [
                "If I have money, I would travel.",
                "If I had money, I would travel.",
                "If I had money, I will travel.",
                "If I will have money, I would travel."
            ],
            answer: "If I had money, I would travel.",
            explanation: "Second Conditional memakai Simple Past + would."
        },
        {
            type: "Error Check",
            question: "Which sentence is correct?",
            options: [
                "If she had called, I would answer.",
                "If she called, I would have answered.",
                "If she had called, I would have answered.",
                "If she has called, I would have answered."
            ],
            answer: "If she had called, I would have answered.",
            explanation: "Third Conditional memakai had + V3 dan would have + V3."
        },
        {
            type: "Concept",
            question: "Which conditional is used for general facts?",
            options: ["Zero", "First", "Second", "Third"],
            answer: "Zero",
            explanation: "Zero Conditional digunakan untuk fakta umum."
        },
        {
            type: "Concept",
            question: "Which conditional is used for real future possibilities?",
            options: ["Zero", "First", "Second", "Third"],
            answer: "First",
            explanation: "First Conditional digunakan untuk kemungkinan nyata di masa depan."
        },
        {
            type: "Concept",
            question: "Which conditional is used for unreal past situations?",
            options: ["Zero", "First", "Second", "Third"],
            answer: "Third",
            explanation: "Third Conditional digunakan untuk situasi masa lampau yang tidak terjadi."
        }
    ]
},

"reported-speech": {
    title: "Introduction to Reported Speech",
    description: "Reported Speech digunakan untuk menyampaikan kembali ucapan seseorang tanpa mengutip kata-katanya secara langsung.",

    formula: `
        <strong>Inti Materi:</strong><br>
        Direct Speech: He said, "I am tired."<br>
        Reported Speech: He said that he was tired.
    `,

    notes: [
        "Direct Speech mengutip ucapan asli secara langsung.",
        "Reported Speech menyampaikan ulang ucapan tanpa tanda kutip.",
        "Pronoun sering berubah sesuai pembicara.",
        "Tense sering mundur satu langkah jika reporting verb berbentuk past.",
        "That sering digunakan, tetapi dalam percakapan bisa dihilangkan."
    ],

    patterns: [
        {
            group: "Basic",
            items: [
                {
                    label: "Direct Speech",
                    formula: "Subject + said, \"sentence\"",
                    examples: [
                        "He said, \"I am tired.\"",
                        "She said, \"I like English.\"",
                        "They said, \"We are ready.\""
                    ]
                },
                {
                    label: "Reported Speech",
                    formula: "Subject + said that + reported clause",
                    examples: [
                        "He said that he was tired.",
                        "She said that she liked English.",
                        "They said that they were ready."
                    ]
                }
            ]
        },
        {
            group: "Main Changes",
            items: [
                {
                    label: "Pronoun Change",
                    formula: "I → he/she, we → they",
                    examples: [
                        "Direct: She said, \"I am happy.\"",
                        "Reported: She said that she was happy."
                    ]
                },
                {
                    label: "Tense Change",
                    formula: "Present → Past",
                    examples: [
                        "Direct: He said, \"I work here.\"",
                        "Reported: He said that he worked there."
                    ]
                }
            ]
        }
    ],

    quiz: [
        {
            type: "Concept",
            question: "Reported Speech is used to...",
            options: [
                "repeat someone's words indirectly",
                "make passive voice",
                "describe nouns",
                "show quantity"
            ],
            answer: "repeat someone's words indirectly",
            explanation: "Reported Speech digunakan untuk menyampaikan ulang ucapan seseorang secara tidak langsung."
        },
        {
            type: "Direct vs Reported",
            question: "Which one is Direct Speech?",
            options: [
                "He said that he was tired.",
                "He said, \"I am tired.\"",
                "He was tired.",
                "He had been tired."
            ],
            answer: "He said, \"I am tired.\"",
            explanation: "Direct Speech memakai tanda kutip dan ucapan asli."
        },
        {
            type: "Direct vs Reported",
            question: "Which one is Reported Speech?",
            options: [
                "She said, \"I am happy.\"",
                "She said that she was happy.",
                "I am happy.",
                "\"She is happy.\""
            ],
            answer: "She said that she was happy.",
            explanation: "Reported Speech menyampaikan ulang tanpa tanda kutip."
        },
        {
            type: "Pronoun",
            question: "Direct: She said, \"I am tired.\" Reported: She said that ___ was tired.",
            options: ["I", "she", "he", "they"],
            answer: "she",
            explanation: "I berubah menjadi she karena pembicaranya adalah She."
        },
        {
            type: "Tense",
            question: "Direct: He said, \"I work here.\" Reported: He said that he ___ there.",
            options: ["work", "works", "worked", "working"],
            answer: "worked",
            explanation: "Simple Present biasanya berubah menjadi Simple Past."
        },
        {
            type: "Concept",
            question: "Reported Speech usually removes...",
            options: ["quotation marks", "subjects", "verbs", "nouns"],
            answer: "quotation marks",
            explanation: "Reported Speech tidak memakai tanda kutip langsung."
        },
        {
            type: "Concept",
            question: "The word 'that' in reported speech is...",
            options: [
                "often optional",
                "always impossible",
                "an article",
                "a modal"
            ],
            answer: "often optional",
            explanation: "That sering digunakan, tetapi dalam percakapan bisa dihilangkan."
        },
        {
            type: "Error Check",
            question: "Which sentence is correct?",
            options: [
                "He said that he was tired.",
                "He said that I was tired. (if he refers to himself)",
                "He said he is tired yesterday.",
                "He said, that he was tired."
            ],
            answer: "He said that he was tired.",
            explanation: "Pronoun dan tense harus disesuaikan."
        },
        {
            type: "Concept",
            question: "If the reporting verb is past, tense often...",
            options: ["moves back", "moves forward", "disappears", "becomes article"],
            answer: "moves back",
            explanation: "Jika reporting verb berbentuk past, tense biasanya mengalami backshift."
        },
        {
            type: "Concept",
            question: "Reported Speech is also called...",
            options: ["Indirect Speech", "Passive Speech", "Zero Article", "Modal Passive"],
            answer: "Indirect Speech",
            explanation: "Reported Speech juga disebut Indirect Speech."
        }
    ]
},

"reported-statements": {
    title: "Reported Statements",
    description: "Reported Statements digunakan untuk melaporkan pernyataan seseorang. Dalam reported statement, tanda kutip dihilangkan, pronoun disesuaikan, dan tense biasanya mengalami backshift jika reporting verb berbentuk past.",

    formula: `
        <strong>Inti Materi:</strong><br>
        Subject + said/told + that + reported clause
    `,

    notes: [
        "Gunakan said jika tidak menyebut object orang yang diajak bicara.",
        "Gunakan told jika menyebut object orang yang diajak bicara.",
        "Direct statement berubah menjadi reported statement tanpa tanda kutip.",
        "Pronoun harus disesuaikan dengan konteks.",
        "Jika reporting verb berbentuk past, tense biasanya mundur satu langkah."
    ],

    patterns: [
        {
            group: "Said",
            items: [
                {
                    label: "Said That",
                    formula: "Subject + said that + clause",
                    examples: [
                        "Direct: He said, \"I am tired.\"",
                        "Reported: He said that he was tired.",
                        "Direct: She said, \"I like English.\"",
                        "Reported: She said that she liked English."
                    ]
                }
            ]
        },
        {
            group: "Told",
            items: [
                {
                    label: "Told Object That",
                    formula: "Subject + told + object + that + clause",
                    examples: [
                        "Direct: He said to me, \"I am busy.\"",
                        "Reported: He told me that he was busy.",
                        "Direct: She said to him, \"I need help.\"",
                        "Reported: She told him that she needed help."
                    ]
                }
            ]
        },
        {
            group: "Backshift",
            items: [
                {
                    label: "Present to Past",
                    formula: "Simple Present → Simple Past",
                    examples: [
                        "Direct: He said, \"I work here.\"",
                        "Reported: He said that he worked there.",
                        "Direct: She said, \"I live in Jakarta.\"",
                        "Reported: She said that she lived in Jakarta."
                    ]
                },
                {
                    label: "Present Continuous to Past Continuous",
                    formula: "am/is/are + V-ing → was/were + V-ing",
                    examples: [
                        "Direct: She said, \"I am studying.\"",
                        "Reported: She said that she was studying.",
                        "Direct: They said, \"We are waiting.\"",
                        "Reported: They said that they were waiting."
                    ]
                }
            ]
        }
    ],

    quiz: [
        {
            type: "Said",
            question: "Direct: He said, \"I am tired.\" Reported: He said that he ___ tired.",
            options: ["is", "was", "were", "be"],
            answer: "was",
            explanation: "Am berubah menjadi was karena reporting verb said berbentuk past."
        },
        {
            type: "Said",
            question: "Direct: She said, \"I like English.\" Reported: She said that she ___ English.",
            options: ["like", "likes", "liked", "liking"],
            answer: "liked",
            explanation: "Simple Present berubah menjadi Simple Past."
        },
        {
            type: "Told",
            question: "He said to me, \"I am busy.\" Reported form is...",
            options: [
                "He told me that he was busy.",
                "He told that he was busy.",
                "He said me that he was busy.",
                "He told me that I was busy."
            ],
            answer: "He told me that he was busy.",
            explanation: "Told harus diikuti object, dan pronoun disesuaikan."
        },
        {
            type: "Pronoun",
            question: "Direct: Rina said, \"I am happy.\" Reported: Rina said that ___ was happy.",
            options: ["I", "she", "he", "they"],
            answer: "she",
            explanation: "I berubah menjadi she karena pembicaranya Rina."
        },
        {
            type: "Pronoun",
            question: "Direct: They said, \"We are ready.\" Reported: They said that ___ were ready.",
            options: ["we", "they", "he", "she"],
            answer: "they",
            explanation: "We berubah menjadi they."
        },
        {
            type: "Backshift",
            question: "Direct: She said, \"I am studying.\" Reported: She said that she ___ studying.",
            options: ["is", "are", "was", "were"],
            answer: "was",
            explanation: "Present Continuous berubah menjadi Past Continuous."
        },
        {
            type: "Backshift",
            question: "Direct: They said, \"We are waiting.\" Reported: They said that they ___ waiting.",
            options: ["are", "is", "was", "were"],
            answer: "were",
            explanation: "Are berubah menjadi were."
        },
        {
            type: "Said/Told",
            question: "Which sentence is correct?",
            options: [
                "She said me that she was tired.",
                "She told me that she was tired.",
                "She told that she was tired.",
                "She said to me that I was tired."
            ],
            answer: "She told me that she was tired.",
            explanation: "Gunakan told + object."
        },
        {
            type: "Concept",
            question: "Reported statements usually remove...",
            options: ["quotation marks", "all verbs", "subjects", "nouns"],
            answer: "quotation marks",
            explanation: "Reported Speech tidak memakai tanda kutip langsung."
        },
        {
            type: "Concept",
            question: "When using told, we need...",
            options: ["an object", "a modal only", "an article only", "a preposition only"],
            answer: "an object",
            explanation: "Told biasanya diikuti object seperti me, him, her, them."
        }
    ]
},

"reported-questions": {
    title: "Reported Questions",
    description: "Reported Questions digunakan untuk melaporkan pertanyaan seseorang. Dalam reported questions, struktur kalimat berubah menjadi urutan statement, bukan lagi bentuk pertanyaan.",

    formula: `
        <strong>Inti Materi:</strong><br>
        Yes/No Question → asked if/whether + subject + verb<br>
        WH Question → asked + WH word + subject + verb
    `,

    notes: [
        "Reported questions tidak memakai tanda tanya.",
        "Urutan kata berubah menjadi subject + verb.",
        "Yes/No question memakai if atau whether.",
        "WH question tetap memakai kata tanya seperti what, where, why, when, how.",
        "Do/does/did biasanya hilang dalam reported question.",
        "Tense biasanya mengalami backshift jika reporting verb berbentuk past."
    ],

    patterns: [
        {
            group: "Yes / No Questions",
            items: [
                {
                    label: "If / Whether",
                    formula: "asked + if/whether + subject + verb",
                    examples: [
                        "Direct: He asked, \"Are you tired?\"",
                        "Reported: He asked if I was tired.",
                        "Direct: She asked, \"Do you like English?\"",
                        "Reported: She asked whether I liked English."
                    ]
                }
            ]
        },
        {
            group: "WH Questions",
            items: [
                {
                    label: "WH Word",
                    formula: "asked + WH word + subject + verb",
                    examples: [
                        "Direct: He asked, \"Where do you live?\"",
                        "Reported: He asked where I lived.",
                        "Direct: She asked, \"What are you doing?\"",
                        "Reported: She asked what I was doing."
                    ]
                }
            ]
        }
    ],

    quiz: [
        {
            type: "Yes/No",
            question: "Direct: He asked, \"Are you tired?\" Reported: He asked if I ___ tired.",
            options: ["am", "is", "was", "were"],
            answer: "was",
            explanation: "Are berubah menjadi was sesuai subject I dan backshift."
        },
        {
            type: "Yes/No",
            question: "Direct: She asked, \"Do you like English?\" Reported: She asked if I ___ English.",
            options: ["like", "likes", "liked", "liking"],
            answer: "liked",
            explanation: "Do hilang dan Simple Present berubah menjadi Simple Past."
        },
        {
            type: "Yes/No",
            question: "Yes/No reported questions use...",
            options: ["if/whether", "because", "although", "the"],
            answer: "if/whether",
            explanation: "Yes/No question dilaporkan dengan if atau whether."
        },
        {
            type: "WH",
            question: "Direct: He asked, \"Where do you live?\" Reported: He asked where I ___.",
            options: ["live", "lives", "lived", "living"],
            answer: "lived",
            explanation: "Do hilang dan verb berubah ke past."
        },
        {
            type: "WH",
            question: "Direct: She asked, \"What are you doing?\" Reported: She asked what I ___ doing.",
            options: ["am", "is", "was", "were"],
            answer: "was",
            explanation: "Present Continuous berubah menjadi Past Continuous."
        },
        {
            type: "Word Order",
            question: "Which reported question has correct word order?",
            options: [
                "He asked where did I live.",
                "He asked where I lived.",
                "He asked where do I live.",
                "He asked where lived I."
            ],
            answer: "He asked where I lived.",
            explanation: "Reported question memakai urutan statement: subject + verb."
        },
        {
            type: "Punctuation",
            question: "Reported questions usually end with...",
            options: ["period", "question mark", "exclamation mark", "comma only"],
            answer: "period",
            explanation: "Reported questions biasanya menjadi statement dan berakhir dengan titik."
        },
        {
            type: "Error Check",
            question: "Which sentence is correct?",
            options: [
                "She asked if I was ready.",
                "She asked was I ready.",
                "She asked if was I ready.",
                "She asked if am I ready."
            ],
            answer: "She asked if I was ready.",
            explanation: "Gunakan if + subject + verb."
        },
        {
            type: "WH",
            question: "Direct: They asked, \"Why are you late?\" Reported: They asked why I ___ late.",
            options: ["am", "was", "were", "be"],
            answer: "was",
            explanation: "Are berubah menjadi was sesuai subject I."
        },
        {
            type: "Concept",
            question: "In reported questions, do/does/did usually...",
            options: ["disappear", "stay before subject", "become articles", "become nouns"],
            answer: "disappear",
            explanation: "Dalam reported question, auxiliary do/does/did biasanya hilang."
        }
    ]
},

"reported-commands": {
    title: "Reported Commands",
    description: "Reported Commands digunakan untuk melaporkan perintah, instruksi, permintaan, atau larangan dari seseorang.",

    formula: `
        <strong>Inti Materi:</strong><br>
        Positive Command = told/asked + object + to + V1<br>
        Negative Command = told/asked + object + not to + V1
    `,

    notes: [
        "Perintah positif memakai to + V1.",
        "Perintah negatif memakai not to + V1.",
        "Gunakan told untuk perintah yang lebih tegas.",
        "Gunakan asked untuk permintaan yang lebih sopan.",
        "Reported commands tidak memakai tanda kutip.",
        "Subject dalam direct command biasanya tidak disebutkan, tetapi object harus muncul dalam reported command."
    ],

    patterns: [
        {
            group: "Positive Command",
            items: [
                {
                    label: "Told",
                    formula: "Subject + told + object + to + V1",
                    examples: [
                        "Direct: He said, \"Close the door.\"",
                        "Reported: He told me to close the door.",
                        "Direct: She said, \"Study hard.\"",
                        "Reported: She told him to study hard."
                    ]
                },
                {
                    label: "Asked",
                    formula: "Subject + asked + object + to + V1",
                    examples: [
                        "Direct: She said, \"Please help me.\"",
                        "Reported: She asked me to help her.",
                        "Direct: He said, \"Please wait here.\"",
                        "Reported: He asked us to wait there."
                    ]
                }
            ]
        },
        {
            group: "Negative Command",
            items: [
                {
                    label: "Not To",
                    formula: "Subject + told/asked + object + not to + V1",
                    examples: [
                        "Direct: He said, \"Don't smoke here.\"",
                        "Reported: He told me not to smoke there.",
                        "Direct: She said, \"Don't be late.\"",
                        "Reported: She told him not to be late."
                    ]
                }
            ]
        }
    ],

    quiz: [
        {
            type: "Positive Command",
            question: "Direct: He said, \"Close the door.\" Reported: He told me ___ the door.",
            options: ["close", "closing", "to close", "closed"],
            answer: "to close",
            explanation: "Reported command positif memakai told + object + to + V1."
        },
        {
            type: "Positive Command",
            question: "Direct: She said, \"Study hard.\" Reported: She told him ___ hard.",
            options: ["study", "studying", "to study", "studied"],
            answer: "to study",
            explanation: "Gunakan to + V1 setelah told + object."
        },
        {
            type: "Request",
            question: "Direct: She said, \"Please help me.\" Reported: She asked me ___ her.",
            options: ["help", "helping", "to help", "helped"],
            answer: "to help",
            explanation: "Permintaan sopan dapat dilaporkan dengan asked + object + to + V1."
        },
        {
            type: "Negative Command",
            question: "Direct: He said, \"Don't smoke here.\" Reported: He told me ___ smoke there.",
            options: ["not", "not to", "to not", "don't"],
            answer: "not to",
            explanation: "Reported command negatif memakai not to + V1."
        },
        {
            type: "Negative Command",
            question: "Direct: She said, \"Don't be late.\" Reported: She told him ___ late.",
            options: ["not be", "not to be", "to not was", "don't be"],
            answer: "not to be",
            explanation: "Negative command memakai told + object + not to + V1."
        },
        {
            type: "Concept",
            question: "Reported commands use...",
            options: [
                "to + V1",
                "V2",
                "will + V1",
                "have + V3"
            ],
            answer: "to + V1",
            explanation: "Reported command positif memakai to + V1."
        },
        {
            type: "Concept",
            question: "Negative reported commands use...",
            options: [
                "not to + V1",
                "do not + V1 only",
                "did not + V1",
                "not + V2"
            ],
            answer: "not to + V1",
            explanation: "Bentuk negatifnya adalah not to + V1."
        },
        {
            type: "Error Check",
            question: "Which sentence is correct?",
            options: [
                "He told me close the door.",
                "He told me to close the door.",
                "He told me closing the door.",
                "He told me closed the door."
            ],
            answer: "He told me to close the door.",
            explanation: "Reported command memakai told + object + to + V1."
        },
        {
            type: "Error Check",
            question: "Which sentence is correct?",
            options: [
                "She told him don't be late.",
                "She told him not be late.",
                "She told him not to be late.",
                "She told him to not was late."
            ],
            answer: "She told him not to be late.",
            explanation: "Negative command memakai not to + V1."
        },
        {
            type: "Told/Asked",
            question: "Which verb is softer and more polite?",
            options: ["asked", "told", "ordered", "commanded"],
            answer: "asked",
            explanation: "Asked lebih sopan untuk permintaan."
        }
    ]
},

"reported-commands": {
    title: "Reported Commands",
    description: "Reported Commands digunakan untuk melaporkan perintah, instruksi, permintaan, atau larangan dari seseorang.",

    formula: `
        <strong>Inti Materi:</strong><br>
        Positive Command = told/asked + object + to + V1<br>
        Negative Command = told/asked + object + not to + V1
    `,

    notes: [
        "Perintah positif memakai to + V1.",
        "Perintah negatif memakai not to + V1.",
        "Gunakan told untuk perintah yang lebih tegas.",
        "Gunakan asked untuk permintaan yang lebih sopan.",
        "Reported commands tidak memakai tanda kutip.",
        "Subject dalam direct command biasanya tidak disebutkan, tetapi object harus muncul dalam reported command."
    ],

    patterns: [
        {
            group: "Positive Command",
            items: [
                {
                    label: "Told",
                    formula: "Subject + told + object + to + V1",
                    examples: [
                        "Direct: He said, \"Close the door.\"",
                        "Reported: He told me to close the door.",
                        "Direct: She said, \"Study hard.\"",
                        "Reported: She told him to study hard."
                    ]
                },
                {
                    label: "Asked",
                    formula: "Subject + asked + object + to + V1",
                    examples: [
                        "Direct: She said, \"Please help me.\"",
                        "Reported: She asked me to help her.",
                        "Direct: He said, \"Please wait here.\"",
                        "Reported: He asked us to wait there."
                    ]
                }
            ]
        },
        {
            group: "Negative Command",
            items: [
                {
                    label: "Not To",
                    formula: "Subject + told/asked + object + not to + V1",
                    examples: [
                        "Direct: He said, \"Don't smoke here.\"",
                        "Reported: He told me not to smoke there.",
                        "Direct: She said, \"Don't be late.\"",
                        "Reported: She told him not to be late."
                    ]
                }
            ]
        }
    ],

    quiz: [
        {
            type: "Positive Command",
            question: "Direct: He said, \"Close the door.\" Reported: He told me ___ the door.",
            options: ["close", "closing", "to close", "closed"],
            answer: "to close",
            explanation: "Reported command positif memakai told + object + to + V1."
        },
        {
            type: "Positive Command",
            question: "Direct: She said, \"Study hard.\" Reported: She told him ___ hard.",
            options: ["study", "studying", "to study", "studied"],
            answer: "to study",
            explanation: "Gunakan to + V1 setelah told + object."
        },
        {
            type: "Request",
            question: "Direct: She said, \"Please help me.\" Reported: She asked me ___ her.",
            options: ["help", "helping", "to help", "helped"],
            answer: "to help",
            explanation: "Permintaan sopan dapat dilaporkan dengan asked + object + to + V1."
        },
        {
            type: "Negative Command",
            question: "Direct: He said, \"Don't smoke here.\" Reported: He told me ___ smoke there.",
            options: ["not", "not to", "to not", "don't"],
            answer: "not to",
            explanation: "Reported command negatif memakai not to + V1."
        },
        {
            type: "Negative Command",
            question: "Direct: She said, \"Don't be late.\" Reported: She told him ___ late.",
            options: ["not be", "not to be", "to not was", "don't be"],
            answer: "not to be",
            explanation: "Negative command memakai told + object + not to + V1."
        },
        {
            type: "Concept",
            question: "Reported commands use...",
            options: [
                "to + V1",
                "V2",
                "will + V1",
                "have + V3"
            ],
            answer: "to + V1",
            explanation: "Reported command positif memakai to + V1."
        },
        {
            type: "Concept",
            question: "Negative reported commands use...",
            options: [
                "not to + V1",
                "do not + V1 only",
                "did not + V1",
                "not + V2"
            ],
            answer: "not to + V1",
            explanation: "Bentuk negatifnya adalah not to + V1."
        },
        {
            type: "Error Check",
            question: "Which sentence is correct?",
            options: [
                "He told me close the door.",
                "He told me to close the door.",
                "He told me closing the door.",
                "He told me closed the door."
            ],
            answer: "He told me to close the door.",
            explanation: "Reported command memakai told + object + to + V1."
        },
        {
            type: "Error Check",
            question: "Which sentence is correct?",
            options: [
                "She told him don't be late.",
                "She told him not be late.",
                "She told him not to be late.",
                "She told him to not was late."
            ],
            answer: "She told him not to be late.",
            explanation: "Negative command memakai not to + V1."
        },
        {
            type: "Told/Asked",
            question: "Which verb is softer and more polite?",
            options: ["asked", "told", "ordered", "commanded"],
            answer: "asked",
            explanation: "Asked lebih sopan untuk permintaan."
        }
    ]
}, 

"backshift": {
    title: "Backshift",
    description: "Backshift adalah perubahan tense dalam reported speech. Jika reporting verb berbentuk past seperti said, told, atau asked, tense dalam ucapan asli biasanya mundur satu langkah.",

    formula: `
        <strong>Inti Materi:</strong><br>
        Simple Present → Simple Past<br>
        Present Continuous → Past Continuous<br>
        Present Perfect → Past Perfect<br>
        Simple Past → Past Perfect<br>
        will → would<br>
        can → could
    `,

    notes: [
        "Backshift terjadi ketika reporting verb berbentuk past.",
        "Simple Present biasanya berubah menjadi Simple Past.",
        "Present Continuous berubah menjadi Past Continuous.",
        "Present Perfect berubah menjadi Past Perfect.",
        "Simple Past sering berubah menjadi Past Perfect.",
        "Will berubah menjadi would.",
        "Can berubah menjadi could.",
        "Backshift tidak selalu wajib jika ucapan masih benar sampai sekarang."
    ],

    patterns: [
        {
            group: "Present to Past",
            items: [
                {
                    label: "Simple Present",
                    formula: "Simple Present → Simple Past",
                    examples: [
                        "Direct: He said, \"I work here.\"",
                        "Reported: He said that he worked there.",
                        "Direct: She said, \"I like coffee.\"",
                        "Reported: She said that she liked coffee."
                    ]
                },
                {
                    label: "Present Continuous",
                    formula: "am/is/are + V-ing → was/were + V-ing",
                    examples: [
                        "Direct: She said, \"I am studying.\"",
                        "Reported: She said that she was studying.",
                        "Direct: They said, \"We are waiting.\"",
                        "Reported: They said that they were waiting."
                    ]
                }
            ]
        },
        {
            group: "Perfect / Past",
            items: [
                {
                    label: "Present Perfect",
                    formula: "have/has + V3 → had + V3",
                    examples: [
                        "Direct: He said, \"I have finished.\"",
                        "Reported: He said that he had finished.",
                        "Direct: She said, \"I have eaten.\"",
                        "Reported: She said that she had eaten."
                    ]
                },
                {
                    label: "Simple Past",
                    formula: "Simple Past → Past Perfect",
                    examples: [
                        "Direct: She said, \"I saw him.\"",
                        "Reported: She said that she had seen him.",
                        "Direct: He said, \"I bought a car.\"",
                        "Reported: He said that he had bought a car."
                    ]
                }
            ]
        },
        {
            group: "Modal Backshift",
            items: [
                {
                    label: "Will / Can",
                    formula: "will → would, can → could",
                    examples: [
                        "Direct: He said, \"I will call you.\"",
                        "Reported: He said that he would call me.",
                        "Direct: She said, \"I can swim.\"",
                        "Reported: She said that she could swim."
                    ]
                }
            ]
        }
    ],

    quiz: [
        {
            type: "Simple Present",
            question: "Direct: He said, \"I work here.\" Reported: He said that he ___ there.",
            options: ["work", "works", "worked", "working"],
            answer: "worked",
            explanation: "Simple Present berubah menjadi Simple Past."
        },
        {
            type: "Present Continuous",
            question: "Direct: She said, \"I am studying.\" Reported: She said that she ___ studying.",
            options: ["am", "is", "was", "were"],
            answer: "was",
            explanation: "Present Continuous berubah menjadi Past Continuous."
        },
        {
            type: "Present Perfect",
            question: "Direct: He said, \"I have finished.\" Reported: He said that he ___ finished.",
            options: ["has", "have", "had", "was"],
            answer: "had",
            explanation: "Present Perfect berubah menjadi Past Perfect."
        },
        {
            type: "Simple Past",
            question: "Direct: She said, \"I saw him.\" Reported: She said that she ___ him.",
            options: ["saw", "seen", "had seen", "has seen"],
            answer: "had seen",
            explanation: "Simple Past sering berubah menjadi Past Perfect."
        },
        {
            type: "Will",
            question: "Direct: He said, \"I will call you.\" Reported: He said that he ___ call me.",
            options: ["will", "would", "can", "could"],
            answer: "would",
            explanation: "Will berubah menjadi would."
        },
        {
            type: "Can",
            question: "Direct: She said, \"I can swim.\" Reported: She said that she ___ swim.",
            options: ["can", "could", "will", "would"],
            answer: "could",
            explanation: "Can berubah menjadi could."
        },
        {
            type: "Concept",
            question: "Backshift usually happens when the reporting verb is...",
            options: ["past", "future", "plural", "article"],
            answer: "past",
            explanation: "Backshift biasanya terjadi jika reporting verb berbentuk past."
        },
        {
            type: "Error Check",
            question: "Which sentence is correct?",
            options: [
                "He said that he work there.",
                "He said that he worked there.",
                "He said that he working there.",
                "He said that he works there yesterday."
            ],
            answer: "He said that he worked there.",
            explanation: "Simple Present dalam direct speech berubah menjadi Simple Past."
        },
        {
            type: "Modal",
            question: "Which backshift is correct?",
            options: [
                "will → would",
                "will → can",
                "can → will",
                "would → will"
            ],
            answer: "will → would",
            explanation: "Dalam reported speech, will biasanya berubah menjadi would."
        },
        {
            type: "Concept",
            question: "Backshift means...",
            options: [
                "moving the tense one step back",
                "removing all verbs",
                "changing nouns to adjectives",
                "adding articles"
            ],
            answer: "moving the tense one step back",
            explanation: "Backshift berarti tense mundur satu langkah."
        }
    ]
},

"reporting-verbs": {
    title: "Reporting Verbs",
    description: "Reporting verbs adalah kata kerja yang digunakan untuk melaporkan ucapan, perintah, saran, janji, atau permintaan seseorang. Selain said, told, dan asked, ada banyak reporting verbs lain seperti advised, promised, warned, suggested, dan ordered.",

    formula: `
        <strong>Inti Materi:</strong><br>
        reporting verb + object + to + V1<br>
        reporting verb + gerund<br>
        reporting verb + that + clause
    `,

    notes: [
        "Said digunakan untuk melaporkan ucapan umum.",
        "Told membutuhkan object, seperti told me, told him, told them.",
        "Asked dapat digunakan untuk pertanyaan atau permintaan.",
        "Advised, warned, ordered, reminded biasanya memakai object + to + V1.",
        "Suggested dapat memakai gerund atau that-clause.",
        "Promised biasanya memakai to + V1 atau that-clause."
    ],

    patterns: [
        {
            group: "Verb + Object + To",
            items: [
                {
                    label: "Advise / Warn / Remind",
                    formula: "verb + object + to + V1",
                    examples: [
                        "She advised me to study harder.",
                        "He warned us not to touch the wire.",
                        "They reminded him to bring his book."
                    ]
                },
                {
                    label: "Order / Tell / Ask",
                    formula: "verb + object + to + V1",
                    examples: [
                        "The teacher told us to sit down.",
                        "The officer ordered them to leave.",
                        "She asked me to help her."
                    ]
                }
            ]
        },
        {
            group: "Verb + Gerund",
            items: [
                {
                    label: "Suggest / Admit / Deny",
                    formula: "verb + V-ing",
                    examples: [
                        "She suggested eating outside.",
                        "He admitted making a mistake.",
                        "They denied stealing the money."
                    ]
                }
            ]
        },
        {
            group: "Verb + That Clause",
            items: [
                {
                    label: "Say / Explain / Promise",
                    formula: "verb + that + clause",
                    examples: [
                        "He said that he was tired.",
                        "She explained that she had been busy.",
                        "They promised that they would come."
                    ]
                }
            ]
        }
    ],

    quiz: [
        {
            type: "Object + To",
            question: "She advised me ___ harder.",
            options: ["study", "studying", "to study", "studied"],
            answer: "to study",
            explanation: "Advise memakai object + to + V1."
        },
        {
            type: "Object + To",
            question: "He warned us ___ the wire.",
            options: ["not touch", "not to touch", "to not touched", "touching"],
            answer: "not to touch",
            explanation: "Warn memakai object + not to + V1 untuk larangan."
        },
        {
            type: "Object + To",
            question: "The teacher told us ___ quiet.",
            options: ["be", "being", "to be", "been"],
            answer: "to be",
            explanation: "Tell memakai object + to + V1."
        },
        {
            type: "Object + To",
            question: "She asked me ___ her.",
            options: ["help", "helping", "to help", "helped"],
            answer: "to help",
            explanation: "Ask untuk permintaan memakai object + to + V1."
        },
        {
            type: "Gerund",
            question: "She suggested ___ outside.",
            options: ["eat", "eating", "to eat", "ate"],
            answer: "eating",
            explanation: "Suggest dapat diikuti gerund."
        },
        {
            type: "Gerund",
            question: "He admitted ___ a mistake.",
            options: ["make", "making", "to make", "made"],
            answer: "making",
            explanation: "Admit diikuti gerund."
        },
        {
            type: "Gerund",
            question: "They denied ___ the money.",
            options: ["steal", "stealing", "to steal", "stole"],
            answer: "stealing",
            explanation: "Deny diikuti gerund."
        },
        {
            type: "That Clause",
            question: "He said ___ he was tired.",
            options: ["that", "to", "for", "with"],
            answer: "that",
            explanation: "Say dapat diikuti that-clause."
        },
        {
            type: "Promise",
            question: "They promised ___ come.",
            options: ["that", "to", "for", "with"],
            answer: "to",
            explanation: "Promise dapat diikuti to + V1."
        },
        {
            type: "Said/Told",
            question: "Which sentence is correct?",
            options: [
                "She said me the truth.",
                "She told me the truth.",
                "She told the truth me.",
                "She said to me the truth me."
            ],
            answer: "She told me the truth.",
            explanation: "Told membutuhkan object dan dapat langsung diikuti informasi."
        }
    ]
},

"reported-speech-review": {
    title: "Reported Speech Review",
    description: "Review akhir untuk menguji pemahaman Direct Speech, Reported Statements, Questions, Commands, Backshift, dan Reporting Verbs.",

    formula: `
        <strong>Ringkasan BAB 8:</strong><br>
        Statements → said/told + that + clause<br>
        Questions → asked + if/whether / WH + clause<br>
        Commands → told/asked + object + to + V1<br>
        Backshift → tense mundur satu langkah
    `,

    notes: [
        "Gunakan said tanpa object.",
        "Gunakan told dengan object.",
        "Yes/No Question memakai if atau whether.",
        "WH Question mempertahankan kata tanya.",
        "Command memakai to + V1.",
        "Negative command memakai not to + V1.",
        "Reporting verb berbentuk past biasanya menyebabkan backshift."
    ],

    patterns: [
        {
            group: "Summary",
            items: [
                {
                    label: "Statements",
                    formula: "said/told + that + clause",
                    examples: [
                        "He said that he was tired.",
                        "She told me that she was busy."
                    ]
                },
                {
                    label: "Questions",
                    formula: "asked + if/WH + clause",
                    examples: [
                        "He asked if I was ready.",
                        "She asked where I lived."
                    ]
                },
                {
                    label: "Commands",
                    formula: "told/asked + object + to + V1",
                    examples: [
                        "He told me to sit down.",
                        "She asked me to help her."
                    ]
                }
            ]
        }
    ],

    quiz: [
        {
            type:"Statements",
            question:"Direct: He said, \"I am tired.\"",
            options:[
                "He said that he was tired.",
                "He said that he is tired.",
                "He told that he was tired.",
                "He asked if he was tired."
            ],
            answer:"He said that he was tired.",
            explanation:"Simple Present berubah menjadi Simple Past."
        },
        {
            type:"Statements",
            question:"Which sentence correctly uses 'told'?",
            options:[
                "She told me that she was happy.",
                "She told that she was happy.",
                "She told happy.",
                "She told."
            ],
            answer:"She told me that she was happy.",
            explanation:"Told harus diikuti object."
        },
        {
            type:"Questions",
            question:"He asked, \"Are you ready?\"",
            options:[
                "He asked if I was ready.",
                "He asked was I ready.",
                "He asked if was I ready.",
                "He asked am I ready."
            ],
            answer:"He asked if I was ready.",
            explanation:"Yes/No Question memakai if."
        },
        {
            type:"Questions",
            question:"She asked, \"Where do you live?\"",
            options:[
                "She asked where I lived.",
                "She asked where did I live.",
                "She asked where do I live.",
                "She asked lived I where."
            ],
            answer:"She asked where I lived.",
            explanation:"Urutan berubah menjadi statement."
        },
        {
            type:"Commands",
            question:"He said, \"Open the window.\"",
            options:[
                "He told me to open the window.",
                "He told me open the window.",
                "He asked if I opened the window.",
                "He said that open the window."
            ],
            answer:"He told me to open the window.",
            explanation:"Command memakai to + V1."
        },
        {
            type:"Commands",
            question:"She said, \"Don't be late.\"",
            options:[
                "She told him not to be late.",
                "She told him don't be late.",
                "She asked if he was late.",
                "She told him not be late."
            ],
            answer:"She told him not to be late.",
            explanation:"Negative command memakai not to."
        },
        {
            type:"Backshift",
            question:"Simple Present changes into...",
            options:[
                "Simple Past",
                "Future",
                "Past Perfect",
                "Present Perfect"
            ],
            answer:"Simple Past",
            explanation:"Backshift pertama."
        },
        {
            type:"Backshift",
            question:"Will changes into...",
            options:[
                "would",
                "could",
                "had",
                "has"
            ],
            answer:"would",
            explanation:"Will berubah menjadi would."
        },
        {
            type:"Backshift",
            question:"Can changes into...",
            options:[
                "could",
                "would",
                "might",
                "must"
            ],
            answer:"could",
            explanation:"Can berubah menjadi could."
        },
        {
            type:"Backshift",
            question:"Present Perfect changes into...",
            options:[
                "Past Perfect",
                "Simple Past",
                "Past Continuous",
                "Future Perfect"
            ],
            answer:"Past Perfect",
            explanation:"Have/has + V3 berubah menjadi had + V3."
        },
        {
            type:"Reporting Verb",
            question:"Which verb needs an object?",
            options:[
                "told",
                "said",
                "explained",
                "mentioned"
            ],
            answer:"told",
            explanation:"Told hampir selalu membutuhkan object."
        },
        {
            type:"Reporting Verb",
            question:"She advised me ___ harder.",
            options:[
                "to study",
                "study",
                "studying",
                "studied"
            ],
            answer:"to study",
            explanation:"Advise + object + to + V1."
        },
        {
            type:"Reporting Verb",
            question:"She suggested ___ outside.",
            options:[
                "eating",
                "eat",
                "to eat",
                "ate"
            ],
            answer:"eating",
            explanation:"Suggest dapat diikuti gerund."
        },
        {
            type:"Reporting Verb",
            question:"He admitted ___ the mistake.",
            options:[
                "making",
                "make",
                "to make",
                "made"
            ],
            answer:"making",
            explanation:"Admit diikuti gerund."
        },
        {
            type:"Concept",
            question:"Reported Speech is also called...",
            options:[
                "Indirect Speech",
                "Passive Voice",
                "Direct Object",
                "Nominal Sentence"
            ],
            answer:"Indirect Speech",
            explanation:"Nama lainnya adalah Indirect Speech."
        },
        {
            type:"Concept",
            question:"Which reported question uses correct word order?",
            options:[
                "She asked where he lived.",
                "She asked where did he live.",
                "She asked where he did live.",
                "She asked did he live where."
            ],
            answer:"She asked where he lived.",
            explanation:"Reported question menggunakan urutan statement."
        },
        {
            type:"Concept",
            question:"Negative commands use...",
            options:[
                "not to + V1",
                "don't + V1",
                "didn't + V1",
                "not + V2"
            ],
            answer:"not to + V1",
            explanation:"Ini adalah pola standar."
        },
        {
            type:"Concept",
            question:"The word 'that' in reported statements is...",
            options:[
                "often optional",
                "always required",
                "never used",
                "an article"
            ],
            answer:"often optional",
            explanation:"Dalam percakapan sehari-hari, 'that' sering dihilangkan."
        },
        {
            type:"Concept",
            question:"Backshift usually happens when reporting verb is...",
            options:[
                "past",
                "future",
                "present continuous",
                "modal"
            ],
            answer:"past",
            explanation:"Said, told, asked menyebabkan backshift."
        },
        {
            type:"Final",
            question:"Which sentence is completely correct?",
            options:[
                "He told me that he would come.",
                "He said me that he would come.",
                "He asked me that he would come.",
                "He told that he would come."
            ],
            answer:"He told me that he would come.",
            explanation:"Told membutuhkan object dan struktur kalimat sudah benar."
        }
    ]
},

"relative-clauses": {
    title: "Introduction to Relative Clauses",
    description: "Relative Clause adalah klausa yang digunakan untuk menjelaskan noun. Relative clause biasanya diawali dengan relative pronoun seperti who, whom, which, that, whose, where, atau when.",

    formula: `
        <strong>Inti Materi:</strong><br>
        Noun + Relative Pronoun + Clause
    `,

    notes: [
        "Relative clause digunakan untuk memberi informasi tambahan tentang noun.",
        "Who digunakan untuk orang sebagai subject.",
        "Whom digunakan untuk orang sebagai object.",
        "Which digunakan untuk benda atau hewan.",
        "That dapat digunakan untuk orang, benda, atau hewan dalam defining clause.",
        "Whose menunjukkan kepemilikan.",
        "Where digunakan untuk tempat.",
        "When digunakan untuk waktu."
    ],

    patterns: [
        {
            group: "Basic Function",
            items: [
                {
                    label: "Describe People",
                    formula: "person + who/that + clause",
                    examples: [
                        "The man who lives next door is friendly.",
                        "The student who won the competition is my friend.",
                        "The teacher that teaches English is kind."
                    ]
                },
                {
                    label: "Describe Things",
                    formula: "thing + which/that + clause",
                    examples: [
                        "The book which is on the table is mine.",
                        "The car that he bought is expensive.",
                        "The phone which I use is new."
                    ]
                },
                {
                    label: "Describe Place / Time",
                    formula: "place/time + where/when + clause",
                    examples: [
                        "This is the school where I studied.",
                        "Monday is the day when we have English class.",
                        "Jakarta is the city where she was born."
                    ]
                }
            ]
        }
    ],

    quiz: [
        {
            type: "Concept",
            question: "Relative clause is used to describe...",
            options: ["noun", "verb only", "adverb only", "article"],
            answer: "noun",
            explanation: "Relative clause memberi informasi tambahan tentang noun."
        },
        {
            type: "People",
            question: "The man ___ lives next door is friendly.",
            options: ["who", "which", "where", "when"],
            answer: "who",
            explanation: "Who digunakan untuk orang sebagai subject."
        },
        {
            type: "Things",
            question: "The book ___ is on the table is mine.",
            options: ["who", "which", "where", "when"],
            answer: "which",
            explanation: "Which digunakan untuk benda."
        },
        {
            type: "Place",
            question: "This is the school ___ I studied.",
            options: ["who", "which", "where", "when"],
            answer: "where",
            explanation: "Where digunakan untuk tempat."
        },
        {
            type: "Time",
            question: "Monday is the day ___ we have English class.",
            options: ["who", "which", "where", "when"],
            answer: "when",
            explanation: "When digunakan untuk waktu."
        },
        {
            type: "Possession",
            question: "The girl ___ bag was stolen is crying.",
            options: ["who", "whose", "which", "where"],
            answer: "whose",
            explanation: "Whose menunjukkan kepemilikan."
        },
        {
            type: "That",
            question: "The car ___ he bought is expensive.",
            options: ["that", "where", "when", "whose"],
            answer: "that",
            explanation: "That dapat digunakan untuk benda dalam defining clause."
        },
        {
            type: "Concept",
            question: "Which relative pronoun is used for possession?",
            options: ["whose", "where", "when", "which"],
            answer: "whose",
            explanation: "Whose digunakan untuk menunjukkan kepemilikan."
        },
        {
            type: "Concept",
            question: "Which relative pronoun is used for place?",
            options: ["where", "when", "who", "whose"],
            answer: "where",
            explanation: "Where digunakan untuk tempat."
        },
        {
            type: "Concept",
            question: "Which relative pronoun is used for time?",
            options: ["when", "where", "who", "which"],
            answer: "when",
            explanation: "When digunakan untuk waktu."
        }
    ]
},

"who-whom": {
    title: "Who & Whom",
    description: "Who dan whom digunakan dalam relative clause untuk menjelaskan orang. Who digunakan ketika orang tersebut berfungsi sebagai subject, sedangkan whom digunakan ketika orang tersebut berfungsi sebagai object.",

    formula: `
        <strong>Inti Materi:</strong><br>
        who = subject untuk orang<br>
        whom = object untuk orang
    `,

    notes: [
        "Who digunakan untuk orang sebagai subject.",
        "Whom digunakan untuk orang sebagai object.",
        "Dalam percakapan modern, whom sering diganti dengan who.",
        "Whom lebih formal dan sering muncul dalam tulisan akademik.",
        "Gunakan whom setelah preposition seperti to whom, with whom, for whom."
    ],

    patterns: [
        {
            group: "Who",
            items: [
                {
                    label: "Subject",
                    formula: "person + who + verb",
                    examples: [
                        "The man who lives next door is kind.",
                        "The student who won the prize is my friend.",
                        "The woman who teaches English is patient."
                    ]
                }
            ]
        },
        {
            group: "Whom",
            items: [
                {
                    label: "Object",
                    formula: "person + whom + subject + verb",
                    examples: [
                        "The man whom I met yesterday is a doctor.",
                        "The girl whom he helped was grateful.",
                        "The teacher whom we respect is retiring."
                    ]
                },
                {
                    label: "After Preposition",
                    formula: "preposition + whom",
                    examples: [
                        "The person to whom I spoke was polite.",
                        "The friend with whom I traveled was funny.",
                        "The student for whom I bought the book was absent."
                    ]
                }
            ]
        }
    ],

    quiz: [
        {
            type: "Who",
            question: "The woman ___ teaches English is kind.",
            options: ["who", "whom", "where", "when"],
            answer: "who",
            explanation: "Who digunakan karena woman menjadi subject dari teaches."
        },
        {
            type: "Who",
            question: "The student ___ won the prize is my friend.",
            options: ["who", "whom", "whose", "where"],
            answer: "who",
            explanation: "Who digunakan untuk orang sebagai subject."
        },
        {
            type: "Whom",
            question: "The man ___ I met yesterday is a doctor.",
            options: ["who", "whom", "where", "when"],
            answer: "whom",
            explanation: "Whom digunakan karena man menjadi object dari met."
        },
        {
            type: "Whom",
            question: "The teacher ___ we respect is retiring.",
            options: ["whom", "where", "when", "whose"],
            answer: "whom",
            explanation: "Whom digunakan untuk orang sebagai object."
        },
        {
            type: "Preposition",
            question: "The person to ___ I spoke was polite.",
            options: ["who", "whom", "which", "where"],
            answer: "whom",
            explanation: "Setelah preposition to, gunakan whom."
        },
        {
            type: "Concept",
            question: "Who is used when the person is...",
            options: ["subject", "object only", "place", "time"],
            answer: "subject",
            explanation: "Who digunakan untuk orang sebagai subject."
        },
        {
            type: "Concept",
            question: "Whom is used when the person is...",
            options: ["object", "place", "time", "possession"],
            answer: "object",
            explanation: "Whom digunakan untuk orang sebagai object."
        },
        {
            type: "Formal",
            question: "Which phrase is more formal?",
            options: ["to whom", "to who", "where whom", "when whom"],
            answer: "to whom",
            explanation: "Whom digunakan setelah preposition dalam gaya formal."
        },
        {
            type: "Error Check",
            question: "Which sentence is correct?",
            options: [
                "The man who lives next door is kind.",
                "The man whom lives next door is kind.",
                "The man where lives next door is kind.",
                "The man when lives next door is kind."
            ],
            answer: "The man who lives next door is kind.",
            explanation: "Who digunakan sebagai subject dari lives."
        },
        {
            type: "Error Check",
            question: "Which sentence is correct in formal English?",
            options: [
                "The person to whom I spoke was polite.",
                "The person to who I spoke was polite.",
                "The person where I spoke was polite.",
                "The person when I spoke was polite."
            ],
            answer: "The person to whom I spoke was polite.",
            explanation: "Setelah preposition to, bentuk formalnya adalah whom."
        }
    ]
},

"which-that": {
    title: "Which & That",
    description: "Which dan that digunakan untuk menggantikan benda atau hewan dalam relative clause. Which dapat digunakan pada defining maupun non-defining clause, sedangkan that hanya digunakan pada defining clause.",

    formula: `
        <strong>Inti Materi:</strong><br>
        thing + which + clause<br>
        thing + that + clause
    `,

    notes: [
        "Which digunakan untuk benda atau hewan.",
        "That juga dapat digunakan untuk benda atau hewan.",
        "That tidak digunakan setelah koma (non-defining clause).",
        "Which lebih umum dalam penulisan formal.",
        "Dalam defining clause, which dan that sering dapat saling menggantikan."
    ],

    patterns: [
        {
            group: "Which",
            items: [
                {
                    label: "Things",
                    formula: "thing + which + clause",
                    examples: [
                        "The book which is on the table is mine.",
                        "The car which I bought is expensive.",
                        "The phone which she uses is new."
                    ]
                },
                {
                    label: "Non-Defining",
                    formula: "noun, which + clause",
                    examples: [
                        "My car, which is ten years old, still runs well.",
                        "The Eiffel Tower, which is in Paris, attracts millions of visitors.",
                        "My laptop, which I bought last year, works perfectly."
                    ]
                }
            ]
        },
        {
            group: "That",
            items: [
                {
                    label: "Defining Clause",
                    formula: "thing + that + clause",
                    examples: [
                        "The book that is on the table is mine.",
                        "The house that Jack built is famous.",
                        "The computer that I use is fast."
                    ]
                }
            ]
        }
    ],

    quiz: [
        {
            type: "Which",
            question: "The book ___ is on the table is mine.",
            options: ["which", "who", "where", "when"],
            answer: "which",
            explanation: "Which digunakan untuk benda."
        },
        {
            type: "That",
            question: "The computer ___ I use is very fast.",
            options: ["that", "who", "whose", "where"],
            answer: "that",
            explanation: "That dapat digunakan untuk benda dalam defining clause."
        },
        {
            type: "Object",
            question: "The car ___ he bought is expensive.",
            options: ["which", "where", "when", "whose"],
            answer: "which",
            explanation: "Which digunakan sebagai object untuk benda."
        },
        {
            type: "Concept",
            question: "Which relative pronoun can introduce a non-defining clause?",
            options: ["which", "that", "who only", "where"],
            answer: "which",
            explanation: "That tidak digunakan pada non-defining clause."
        },
        {
            type: "Concept",
            question: "That is commonly used in...",
            options: [
                "defining clauses",
                "non-defining clauses",
                "questions only",
                "commands only"
            ],
            answer: "defining clauses",
            explanation: "That hanya digunakan pada defining clause."
        },
        {
            type: "Comma",
            question: "Which sentence is correct?",
            options: [
                "My car, which is old, still works.",
                "My car, that is old, still works.",
                "My car that, is old still works.",
                "My car which is old still works."
            ],
            answer: "My car, which is old, still works.",
            explanation: "Non-defining clause memakai which dan dipisahkan dengan koma."
        },
        {
            type: "Defining",
            question: "Which sentence is correct?",
            options: [
                "The book that I borrowed is interesting.",
                "The book, that I borrowed, is interesting.",
                "The book where I borrowed is interesting.",
                "The book when I borrowed is interesting."
            ],
            answer: "The book that I borrowed is interesting.",
            explanation: "That digunakan dalam defining clause tanpa koma."
        },
        {
            type: "Concept",
            question: "Which and that are mainly used for...",
            options: [
                "things and animals",
                "people only",
                "places only",
                "time only"
            ],
            answer: "things and animals",
            explanation: "Which dan that digunakan untuk benda atau hewan."
        },
        {
            type: "Error Check",
            question: "Which sentence is correct?",
            options: [
                "The phone which she uses is new.",
                "The phone who she uses is new.",
                "The phone where she uses is new.",
                "The phone when she uses is new."
            ],
            answer: "The phone which she uses is new.",
            explanation: "Which digunakan untuk benda."
        },
        {
            type: "Comparison",
            question: "Which sentence uses a non-defining relative clause?",
            options: [
                "My house, which was built in 1990, is still beautiful.",
                "The house that Jack built is famous.",
                "The book that I borrowed is interesting.",
                "The computer that I use is fast."
            ],
            answer: "My house, which was built in 1990, is still beautiful.",
            explanation: "Adanya koma menunjukkan non-defining clause sehingga menggunakan which."
        }
    ]
},

"whose": {
    title: "Whose",
    description: "Whose digunakan dalam relative clause untuk menunjukkan kepemilikan. Whose dapat digunakan untuk orang maupun benda.",

    formula: `
        <strong>Inti Materi:</strong><br>
        person/thing + whose + noun + clause
    `,

    notes: [
        "Whose menunjukkan hubungan kepemilikan.",
        "Whose dapat digunakan untuk orang.",
        "Whose juga dapat digunakan untuk benda atau hewan.",
        "Setelah whose selalu diikuti noun.",
        "Whose tidak sama dengan who's. Who's adalah singkatan dari who is atau who has."
    ],

    patterns: [
        {
            group: "People",
            items: [
                {
                    label: "Person",
                    formula: "person + whose + noun + clause",
                    examples: [
                        "The girl whose bag was stolen is crying.",
                        "The teacher whose class I joined is friendly.",
                        "The man whose son is a doctor lives next door."
                    ]
                }
            ]
        },
        {
            group: "Things",
            items: [
                {
                    label: "Thing",
                    formula: "thing + whose + noun + clause",
                    examples: [
                        "The company whose products are popular is expanding.",
                        "The house whose roof was damaged has been repaired.",
                        "The car whose engine failed was towed away."
                    ]
                }
            ]
        }
    ],

    quiz: [
        {
            type: "People",
            question: "The girl ___ bag was stolen is crying.",
            options: ["who", "whose", "whom", "which"],
            answer: "whose",
            explanation: "Whose menunjukkan kepemilikan terhadap bag."
        },
        {
            type: "People",
            question: "The teacher ___ class I joined is very kind.",
            options: ["whose", "who", "which", "where"],
            answer: "whose",
            explanation: "Class dimiliki oleh teacher."
        },
        {
            type: "People",
            question: "The man ___ son is a doctor lives here.",
            options: ["whose", "who", "whom", "that"],
            answer: "whose",
            explanation: "Son dimiliki oleh the man."
        },
        {
            type: "Things",
            question: "The company ___ products are famous is expanding.",
            options: ["whose", "which", "that", "where"],
            answer: "whose",
            explanation: "Products dimiliki oleh company."
        },
        {
            type: "Things",
            question: "The house ___ roof was damaged has been repaired.",
            options: ["whose", "where", "which", "who"],
            answer: "whose",
            explanation: "Roof merupakan bagian dari house."
        },
        {
            type: "Concept",
            question: "Whose shows...",
            options: [
                "possession",
                "location",
                "time",
                "question"
            ],
            answer: "possession",
            explanation: "Whose digunakan untuk menunjukkan kepemilikan."
        },
        {
            type: "Grammar",
            question: "After 'whose' we usually use...",
            options: [
                "a noun",
                "a verb",
                "an adjective",
                "an adverb"
            ],
            answer: "a noun",
            explanation: "Whose selalu diikuti noun, misalnya whose car, whose house."
        },
        {
            type: "Difference",
            question: "Which sentence is correct?",
            options: [
                "The girl whose phone is ringing is my sister.",
                "The girl who's phone is ringing is my sister.",
                "The girl who phone is ringing is my sister.",
                "The girl whom phone is ringing is my sister."
            ],
            answer: "The girl whose phone is ringing is my sister.",
            explanation: "Whose adalah relative pronoun, sedangkan who's berarti who is/who has."
        },
        {
            type: "Error Check",
            question: "Which sentence is correct?",
            options: [
                "The car whose engine failed was repaired.",
                "The car which engine failed was repaired.",
                "The car who engine failed was repaired.",
                "The car where engine failed was repaired."
            ],
            answer: "The car whose engine failed was repaired.",
            explanation: "Whose dapat digunakan untuk menunjukkan kepemilikan pada benda."
        },
        {
            type: "Concept",
            question: "Whose can be used for...",
            options: [
                "people and things",
                "people only",
                "things only",
                "places only"
            ],
            answer: "people and things",
            explanation: "Dalam grammar modern, whose dapat digunakan baik untuk orang maupun benda."
        }
    ]
}, 

"where-when": {
    title: "Where & When",
    description: "Where dan when digunakan dalam relative clause untuk menjelaskan tempat dan waktu. Where menggantikan place (tempat), sedangkan when menggantikan time (waktu).",

    formula: `
        <strong>Inti Materi:</strong><br>
        Place + where + clause<br>
        Time + when + clause
    `,

    notes: [
        "Where digunakan untuk menjelaskan tempat.",
        "When digunakan untuk menjelaskan waktu.",
        "Where dapat diganti dengan in which pada bahasa formal.",
        "When dapat diganti dengan on/in/at which pada bahasa formal.",
        "Jika menggunakan where atau when, jangan tambahkan preposition lagi.",
        "Gunakan which jika preposition tetap ingin ditulis."
    ],

    patterns: [
        {
            group: "Where",
            items: [
                {
                    label: "Place",
                    formula: "place + where + clause",
                    examples: [
                        "This is the school where I studied.",
                        "The hotel where we stayed was beautiful.",
                        "Jakarta is the city where she was born."
                    ]
                },
                {
                    label: "Formal",
                    formula: "place + in which + clause",
                    examples: [
                        "This is the school in which I studied.",
                        "The hotel in which we stayed was beautiful.",
                        "The city in which she was born is Jakarta."
                    ]
                }
            ]
        },
        {
            group: "When",
            items: [
                {
                    label: "Time",
                    formula: "time + when + clause",
                    examples: [
                        "Sunday is the day when we rest.",
                        "2020 was the year when I graduated.",
                        "That was the moment when everything changed."
                    ]
                },
                {
                    label: "Formal",
                    formula: "time + on/in/at which + clause",
                    examples: [
                        "Sunday is the day on which we rest.",
                        "2020 was the year in which I graduated.",
                        "That was the moment at which everything changed."
                    ]
                }
            ]
        }
    ],

    quiz: [
        {
            type: "Where",
            question: "This is the school ___ I studied.",
            options: ["where", "when", "whose", "who"],
            answer: "where",
            explanation: "Where digunakan untuk tempat."
        },
        {
            type: "Where",
            question: "The hotel ___ we stayed was comfortable.",
            options: ["where", "when", "who", "whose"],
            answer: "where",
            explanation: "Hotel adalah tempat."
        },
        {
            type: "Where",
            question: "Jakarta is the city ___ she was born.",
            options: ["where", "when", "which", "who"],
            answer: "where",
            explanation: "City adalah tempat."
        },
        {
            type: "When",
            question: "Sunday is the day ___ we usually relax.",
            options: ["where", "when", "whose", "who"],
            answer: "when",
            explanation: "Day menunjukkan waktu."
        },
        {
            type: "When",
            question: "2020 was the year ___ I graduated.",
            options: ["where", "when", "who", "whose"],
            answer: "when",
            explanation: "Year menunjukkan waktu."
        },
        {
            type: "Formal",
            question: "The school ___ I studied is very old. (formal)",
            options: [
                "in which",
                "at when",
                "who",
                "whose"
            ],
            answer: "in which",
            explanation: "Where dapat diganti dengan in which."
        },
        {
            type: "Formal",
            question: "Sunday is the day ___ we rest. (formal)",
            options: [
                "on which",
                "in where",
                "whose",
                "who"
            ],
            answer: "on which",
            explanation: "When dapat diganti dengan on which."
        },
        {
            type: "Concept",
            question: "Where is used for...",
            options: [
                "places",
                "time",
                "people",
                "possession"
            ],
            answer: "places",
            explanation: "Where digunakan untuk tempat."
        },
        {
            type: "Concept",
            question: "When is used for...",
            options: [
                "time",
                "people",
                "things",
                "places"
            ],
            answer: "time",
            explanation: "When digunakan untuk waktu."
        },
        {
            type: "Error Check",
            question: "Which sentence is correct?",
            options: [
                "This is the school where I studied.",
                "This is the school where in I studied.",
                "This is the school when I studied.",
                "This is the school who I studied."
            ],
            answer: "This is the school where I studied.",
            explanation: "Jangan menggunakan preposition tambahan setelah where."
        }
    ]
}, 

"defining-nondefining": {
    title: "Defining vs Non-Defining Relative Clauses",
    description: "Relative clause dibagi menjadi dua jenis, yaitu Defining dan Non-Defining. Defining memberikan informasi yang penting untuk mengidentifikasi noun, sedangkan Non-Defining hanya memberikan informasi tambahan dan dipisahkan dengan koma.",

    formula: `
        <strong>Inti Materi:</strong><br>
        Defining: Noun + Relative Clause<br>
        Non-Defining: Noun, Relative Clause,
    `,

    notes: [
        "Defining Clause memberikan informasi penting.",
        "Tanpa defining clause, arti kalimat bisa berubah atau menjadi tidak jelas.",
        "Non-defining clause hanya memberikan informasi tambahan.",
        "Non-defining clause selalu dipisahkan dengan koma.",
        "That tidak digunakan pada non-defining clause.",
        "Who dan which dapat digunakan pada non-defining clause."
    ],

    patterns: [
        {
            group: "Defining Clause",
            items: [
                {
                    label: "Essential Information",
                    formula: "noun + who/which/that + clause",
                    examples: [
                        "The student who won the competition is my brother.",
                        "The book that I borrowed is interesting.",
                        "The house which Jack built is famous."
                    ]
                }
            ]
        },
        {
            group: "Non-Defining Clause",
            items: [
                {
                    label: "Extra Information",
                    formula: "noun, who/which + clause,",
                    examples: [
                        "My brother, who lives in London, is a doctor.",
                        "My car, which is ten years old, still runs well.",
                        "Mr. Smith, who teaches English, is very friendly."
                    ]
                }
            ]
        },
        {
            group: "Meaning Difference",
            items: [
                {
                    label: "Compare",
                    formula: "Defining vs Non-Defining",
                    examples: [
                        "The students who studied passed the exam. (Only those students)",
                        "The students, who studied, passed the exam. (All students)"
                    ]
                }
            ]
        }
    ],

    quiz: [
        {
            type: "Defining",
            question: "Which sentence contains a defining clause?",
            options: [
                "The book that I borrowed is interesting.",
                "My book, which I bought yesterday, is expensive.",
                "My father, who is a doctor, lives in Bandung.",
                "Jakarta, which is the capital of Indonesia, is crowded."
            ],
            answer: "The book that I borrowed is interesting.",
            explanation: "Defining clause tidak memakai koma dan menentukan noun."
        },
        {
            type: "Non-Defining",
            question: "Which sentence contains a non-defining clause?",
            options: [
                "My brother, who lives in London, is a doctor.",
                "The student who won the prize is happy.",
                "The car that I bought is new.",
                "The teacher who teaches math is absent."
            ],
            answer: "My brother, who lives in London, is a doctor.",
            explanation: "Non-defining clause dipisahkan dengan koma."
        },
        {
            type: "Comma",
            question: "Non-defining clauses are separated by...",
            options: [
                "commas",
                "quotation marks",
                "semicolon only",
                "colon"
            ],
            answer: "commas",
            explanation: "Non-defining clause selalu dipisahkan dengan koma."
        },
        {
            type: "That",
            question: "Which relative pronoun should NOT be used in non-defining clauses?",
            options: [
                "that",
                "which",
                "who",
                "whose"
            ],
            answer: "that",
            explanation: "That tidak digunakan pada non-defining clause."
        },
        {
            type: "Meaning",
            question: "Which clause gives essential information?",
            options: [
                "Defining Clause",
                "Non-Defining Clause",
                "Passive Voice",
                "Conditional Clause"
            ],
            answer: "Defining Clause",
            explanation: "Defining clause menentukan noun yang dimaksud."
        },
        {
            type: "Meaning",
            question: "Which clause gives extra information only?",
            options: [
                "Non-Defining Clause",
                "Defining Clause",
                "Reported Speech",
                "Modal Clause"
            ],
            answer: "Non-Defining Clause",
            explanation: "Non-defining hanya memberikan informasi tambahan."
        },
        {
            type: "Grammar",
            question: "Which sentence is correct?",
            options: [
                "My car, which is old, still works.",
                "My car, that is old, still works.",
                "My car that, is old still works.",
                "My car where is old still works."
            ],
            answer: "My car, which is old, still works.",
            explanation: "Non-defining clause menggunakan which, bukan that."
        },
        {
            type: "Grammar",
            question: "Which sentence is correct?",
            options: [
                "The teacher who teaches English is kind.",
                "The teacher, that teaches English, is kind.",
                "The teacher when teaches English is kind.",
                "The teacher where teaches English is kind."
            ],
            answer: "The teacher who teaches English is kind.",
            explanation: "Defining clause dapat menggunakan who tanpa koma."
        },
        {
            type: "Concept",
            question: "Removing a defining clause usually...",
            options: [
                "changes the meaning",
                "has no effect",
                "changes it into passive voice",
                "changes tense only"
            ],
            answer: "changes the meaning",
            explanation: "Defining clause penting untuk mengidentifikasi noun."
        },
        {
            type: "Concept",
            question: "Removing a non-defining clause usually...",
            options: [
                "keeps the main meaning",
                "makes the sentence impossible",
                "changes active to passive",
                "changes the subject"
            ],
            answer: "keeps the main meaning",
            explanation: "Non-defining clause hanya informasi tambahan."
        }
    ]
},

"relative-clauses-review": {
    title: "Relative Clauses Review",
    description: "Review akhir untuk menguji seluruh materi Relative Clauses.",

    formula: `
        <strong>Ringkasan BAB 9:</strong><br>
        who → people (subject)<br>
        whom → people (object)<br>
        which → things/animals<br>
        that → people/things (defining only)<br>
        whose → possession<br>
        where → place<br>
        when → time
    `,

    notes: [
        "Who digunakan untuk subject orang.",
        "Whom digunakan untuk object orang.",
        "Which digunakan untuk benda.",
        "That hanya digunakan pada defining clause.",
        "Whose menunjukkan kepemilikan.",
        "Where digunakan untuk tempat.",
        "When digunakan untuk waktu.",
        "Non-defining clause selalu memakai koma."
    ],

    patterns: [
        {
            group: "Summary",
            items: [
                {
                    label: "Relative Pronouns",
                    formula: "Noun + Relative Pronoun + Clause",
                    examples: [
                        "The man who helped me is kind.",
                        "The book which I bought is interesting.",
                        "The girl whose phone was stolen is crying."
                    ]
                }
            ]
        }
    ],

    quiz: [
        {
            type:"Who",
            question:"The man ___ lives next door is friendly.",
            options:["who","whom","which","where"],
            answer:"who",
            explanation:"Who digunakan sebagai subject."
        },
        {
            type:"Whom",
            question:"The teacher ___ we respect is retiring.",
            options:["whom","who","where","whose"],
            answer:"whom",
            explanation:"Whom digunakan sebagai object."
        },
        {
            type:"Which",
            question:"The book ___ I borrowed is interesting.",
            options:["which","who","whose","where"],
            answer:"which",
            explanation:"Which digunakan untuk benda."
        },
        {
            type:"That",
            question:"The car ___ he bought is expensive.",
            options:["that","where","when","whose"],
            answer:"that",
            explanation:"That digunakan pada defining clause."
        },
        {
            type:"Whose",
            question:"The girl ___ bag was stolen is crying.",
            options:["whose","who","whom","which"],
            answer:"whose",
            explanation:"Whose menunjukkan kepemilikan."
        },
        {
            type:"Where",
            question:"This is the city ___ I was born.",
            options:["where","when","who","whose"],
            answer:"where",
            explanation:"Where digunakan untuk tempat."
        },
        {
            type:"When",
            question:"Sunday is the day ___ we rest.",
            options:["when","where","whose","which"],
            answer:"when",
            explanation:"When digunakan untuk waktu."
        },
        {
            type:"Defining",
            question:"Which sentence contains a defining clause?",
            options:[
                "The book that I borrowed is interesting.",
                "My car, which is old, still works.",
                "My father, who is a doctor, lives in Bandung.",
                "Jakarta, which is the capital, is crowded."
            ],
            answer:"The book that I borrowed is interesting.",
            explanation:"Tidak memakai koma."
        },
        {
            type:"Non-Defining",
            question:"Which sentence contains a non-defining clause?",
            options:[
                "My brother, who lives in London, is a doctor.",
                "The student who won is happy.",
                "The book that I borrowed is interesting.",
                "The teacher who teaches math is absent."
            ],
            answer:"My brother, who lives in London, is a doctor.",
            explanation:"Dipisahkan dengan koma."
        },
        {
            type:"Concept",
            question:"Which pronoun shows possession?",
            options:["whose","who","which","where"],
            answer:"whose",
            explanation:"Whose menunjukkan kepemilikan."
        },
        {
            type:"Concept",
            question:"Which pronoun is NOT used in non-defining clauses?",
            options:["that","which","who","whose"],
            answer:"that",
            explanation:"That hanya digunakan pada defining clause."
        },
        {
            type:"Concept",
            question:"Who is used for...",
            options:[
                "people as subject",
                "people as object",
                "things",
                "places"
            ],
            answer:"people as subject",
            explanation:"Who adalah subject."
        },
        {
            type:"Concept",
            question:"Whom is used for...",
            options:[
                "people as object",
                "people as subject",
                "things",
                "time"
            ],
            answer:"people as object",
            explanation:"Whom adalah object."
        },
        {
            type:"Concept",
            question:"Which is mainly used for...",
            options:[
                "things",
                "people",
                "time",
                "places"
            ],
            answer:"things",
            explanation:"Which digunakan untuk benda."
        },
        {
            type:"Grammar",
            question:"Which sentence is correct?",
            options:[
                "The person to whom I spoke was helpful.",
                "The person to who I spoke was helpful.",
                "The person where I spoke was helpful.",
                "The person when I spoke was helpful."
            ],
            answer:"The person to whom I spoke was helpful.",
            explanation:"Setelah preposition gunakan whom."
        },
        {
            type:"Grammar",
            question:"Which sentence is correct?",
            options:[
                "The company whose products are famous is expanding.",
                "The company which products are famous is expanding.",
                "The company who products are famous is expanding.",
                "The company where products are famous is expanding."
            ],
            answer:"The company whose products are famous is expanding.",
            explanation:"Whose dapat digunakan untuk benda."
        },
        {
            type:"Grammar",
            question:"Which sentence is correct?",
            options:[
                "The hotel where we stayed was comfortable.",
                "The hotel when we stayed was comfortable.",
                "The hotel whose we stayed was comfortable.",
                "The hotel who we stayed was comfortable."
            ],
            answer:"The hotel where we stayed was comfortable.",
            explanation:"Hotel adalah tempat."
        },
        {
            type:"Grammar",
            question:"Which sentence is correct?",
            options:[
                "2020 was the year when I graduated.",
                "2020 was the year where I graduated.",
                "2020 was the year who I graduated.",
                "2020 was the year whose I graduated."
            ],
            answer:"2020 was the year when I graduated.",
            explanation:"Year menunjukkan waktu."
        },
        {
            type:"Meaning",
            question:"Removing a defining clause usually...",
            options:[
                "changes the meaning",
                "has no effect",
                "changes tense",
                "changes voice"
            ],
            answer:"changes the meaning",
            explanation:"Defining clause penting untuk identifikasi."
        },
        {
            type:"Meaning",
            question:"Removing a non-defining clause usually...",
            options:[
                "keeps the main meaning",
                "makes the sentence incorrect",
                "changes passive voice",
                "changes subject"
            ],
            answer:"keeps the main meaning",
            explanation:"Non-defining clause hanya informasi tambahan."
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
},

{
    id: "bab6",
    icon: "fa-book-open",
    title: "BAB 6: Articles & Determiners",
    level: "Upper Advanced",
    color: "#0ea5e9",
    items: [
        { label: "Articles", id: "articles" },
        { label: "A vs An", id: "a-vs-an" },
        { label: "The", id: "the-article" },
        { label: "Zero Article", id: "zero-article" },
        { label: "Determiners", id: "determiners" },
        { label: "Quantifiers", id: "quantifiers" },
        { label: "Articles Review", id: "articles-review" }
    ]
},

{
    id: "bab7",
    icon: "fa-code-branch",
    title: "BAB 7: Conditional Sentences",
    level: "Advanced",
    color: "#8b5cf6",
    items: [
        { label: "Introduction to Conditionals", id: "conditionals" },
        { label: "Zero Conditional", id: "zero-conditional" },
        { label: "First Conditional", id: "first-conditional" },
        { label: "Second Conditional", id: "second-conditional" },
        { label: "Third Conditional", id: "third-conditional" },
        { label: "Mixed Conditional", id: "mixed-conditional" },
        { label: "Conditional Review", id: "conditional-review" }
    ]
},

{
    id: "bab8",
    icon: "fa-comments",
    title: "BAB 8: Reported Speech",
    level: "Advanced",
    color: "#ec4899",
    items: [
        { label: "Introduction to Reported Speech", id: "reported-speech" },
        { label: "Reported Statements", id: "reported-statements" },
        { label: "Reported Questions", id: "reported-questions" },
        { label: "Reported Commands", id: "reported-commands" },
        { label: "Backshift", id: "backshift" },
        { label: "Reporting Verbs", id: "reporting-verbs" },
        { label: "Reported Speech Review", id: "reported-speech-review" }
    ]
},

{
    id: "bab9",
    icon: "fa-link",
    title: "BAB 9: Relative Clauses",
    level: "Advanced",
    color: "#14b8a6",
    items: [
        { label: "Introduction to Relative Clauses", id: "relative-clauses" },
        { label: "Who & Whom", id: "who-whom" },
        { label: "Which & That", id: "which-that" },
        { label: "Whose", id: "whose" },
        { label: "Where & When", id: "where-when" },
        { label: "Defining vs Non-Defining", id: "defining-nondefining" },
        { label: "Relative Clauses Review", id: "relative-clauses-review" }
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