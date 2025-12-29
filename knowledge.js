// Knowledge base for vocabulary and grammar explanations
const knowledge = {
    politeness: {
        title: '丁寧さ (Politeness Levels)',
        icon: '🙇',
        items: [
            {
                word: 'ください vs お願いします',
                japanese: 'ください vs お願いします',
                romaji: 'kudasai vs onegaishimasu',
                explanation: 'Both mean "please", but with different uses and politeness levels.',
                details: [
                    {
                        term: 'ください (kudasai)',
                        usage: 'Direct requests for items or actions',
                        formality: 'Polite but straightforward',
                        examples: [
                            'コーヒーをください (Coffee, please)',
                            '袋をください (A bag, please)',
                            'まっすぐ行ってください (Please go straight)'
                        ]
                    },
                    {
                        term: 'お願いします (onegaishimasu)',
                        usage: 'Requests with more deference/humility',
                        formality: 'More polite, shows respect',
                        examples: [
                            'カプチーノをお願いします (Cappuccino, please)',
                            'お会計お願いします (Check, please)',
                            'もう一度お願いします (One more time, please)'
                        ]
                    }
                ],
                tip: 'When in doubt, use お願いします - it\'s safer to be more polite! Use ください for quick, simple requests.'
            },
            {
                word: 'すみません vs ごめんなさい',
                japanese: 'すみません vs ごめんなさい',
                romaji: 'sumimasen vs gomen nasai',
                explanation: 'Both can mean "sorry" or "excuse me", but used differently.',
                details: [
                    {
                        term: 'すみません (sumimasen)',
                        usage: 'Getting attention, minor apologies, thanking',
                        formality: 'Polite, all-purpose',
                        examples: [
                            'すみません！ (Excuse me! - to get attention)',
                            'すみません、降ります (Excuse me, getting off)',
                            'すみません、ありがとう (Sorry for the trouble, thank you)'
                        ]
                    },
                    {
                        term: 'ごめんなさい (gomen nasai)',
                        usage: 'Genuine apologies for mistakes',
                        formality: 'Polite, more personal',
                        examples: [
                            'ごめんなさい、遅れました (Sorry I\'m late)',
                            'ごめんなさい！ (I\'m sorry! - for a real mistake)'
                        ]
                    }
                ],
                tip: 'Use すみません to get someone\'s attention or for minor things. Use ごめんなさい when you genuinely did something wrong.'
            }
        ]
    },
    numbers: {
        title: '数字 (Numbers)',
        icon: '🔢',
        items: [
            {
                word: '基本的な数字',
                japanese: '基本的な数字',
                romaji: 'Basic Numbers',
                explanation: 'Japanese numbers 1-10 with variations',
                details: [
                    {
                        term: '1-3',
                        numbers: [
                            '一 (いち) ichi - 1',
                            '二 (に) ni - 2',
                            '三 (さん) san - 3'
                        ]
                    },
                    {
                        term: '4 (Special)',
                        numbers: [
                            '四 (よん) yon - 4 (most common)',
                            '四 (し) shi - 4 (avoid in some contexts - sounds like "death")'
                        ],
                        note: 'Use よん in most situations'
                    },
                    {
                        term: '5-6',
                        numbers: [
                            '五 (ご) go - 5',
                            '六 (ろく) roku - 6'
                        ]
                    },
                    {
                        term: '7 (Special)',
                        numbers: [
                            '七 (なな) nana - 7 (most common)',
                            '七 (しち) shichi - 7 (used in some contexts)'
                        ],
                        note: 'Use なな in most situations'
                    },
                    {
                        term: '8-10',
                        numbers: [
                            '八 (はち) hachi - 8',
                            '九 (きゅう) kyū - 9',
                            '十 (じゅう) jū - 10'
                        ]
                    }
                ],
                tip: 'For 4 and 7, stick with よん and なな to avoid confusion!'
            },
            {
                word: '大きな数字',
                japanese: '大きな数字',
                romaji: 'Large Numbers',
                explanation: 'Tens, hundreds, thousands in Japanese',
                details: [
                    {
                        term: 'Tens (10-90)',
                        pattern: 'Number + じゅう (jū)',
                        examples: [
                            '二十 (にじゅう) nijū - 20',
                            '三十 (さんじゅう) sanjū - 30',
                            '五十 (ごじゅう) gojū - 50'
                        ]
                    },
                    {
                        term: 'Hundreds',
                        pattern: 'Number + ひゃく (hyaku) *with sound changes',
                        examples: [
                            '百 (ひゃく) hyaku - 100',
                            '三百 (さんびゃく) sanbyaku - 300 (note: びゃく)',
                            '六百 (ろっぴゃく) roppyaku - 600 (note: ぴゃく)',
                            '八百 (はっぴゃく) happyaku - 800 (note: ぴゃく)'
                        ],
                        note: 'Sound changes for 3, 6, 8 hundred'
                    },
                    {
                        term: 'Thousands',
                        pattern: 'Number + せん (sen) *with sound changes',
                        examples: [
                            '千 (せん) sen - 1,000',
                            '三千 (さんぜん) sanzen - 3,000 (note: ぜん)',
                            '八千 (はっせん) hassen - 8,000 (note: せん)'
                        ],
                        note: 'Sound changes for 3 and 8 thousand'
                    },
                    {
                        term: 'Ten Thousands',
                        pattern: 'Number + まん (man)',
                        examples: [
                            '一万 (いちまん) ichiman - 10,000',
                            '十万 (じゅうまん) jūman - 100,000',
                            '百万 (ひゃくまん) hyakuman - 1,000,000'
                        ],
                        note: 'Japanese counts in 10,000s (万), not 1,000s like English'
                    }
                ],
                tip: 'Watch for sound changes! 300 is さんびゃく not さんひゃく'
            }
        ]
    },
    directions: {
        title: '方向 (Directions)',
        icon: '🧭',
        items: [
            {
                word: '左右',
                japanese: '左右',
                romaji: 'Left and Right',
                explanation: 'Direction words in Japanese',
                details: [
                    {
                        term: '右 (みぎ) migi',
                        meaning: 'Right',
                        examples: [
                            '右に曲がってください (Please turn right)',
                            '右側 (Right side)'
                        ]
                    },
                    {
                        term: '左 (ひだり) hidari',
                        meaning: 'Left',
                        examples: [
                            '左に曲がってください (Please turn left)',
                            '左側 (Left side)'
                        ]
                    },
                    {
                        term: 'まっすぐ massugu',
                        meaning: 'Straight',
                        examples: [
                            'まっすぐ行ってください (Please go straight)'
                        ]
                    }
                ],
                tip: 'Mnemonic: "Migi" has "gi" like "riGht", "Hidari" has "hi" like "HIde" (to the left)'
            },
            {
                word: '位置',
                japanese: '位置',
                romaji: 'Position Words',
                explanation: 'Describing locations and positions',
                details: [
                    {
                        term: 'Location words',
                        words: [
                            'ここ (koko) - here',
                            'そこ (soko) - there (near you)',
                            'あそこ (asoko) - over there (far from both)',
                            '近い (ちかい chikai) - close/near',
                            '遠い (とおい tōi) - far'
                        ]
                    },
                    {
                        term: 'Direction from location',
                        words: [
                            '前 (まえ mae) - front',
                            '後ろ (うしろ ushiro) - back/behind',
                            '隣 (となり tonari) - next to',
                            '向かい (むかい mukai) - across from'
                        ]
                    }
                ],
                tip: 'Remember: ko-so-a pattern (here-there-over there)'
            }
        ]
    },
    sizes: {
        title: 'サイズと量 (Sizes & Quantities)',
        icon: '📏',
        items: [
            {
                word: 'サイズ',
                japanese: 'サイズ',
                romaji: 'Sizes',
                explanation: 'Size words for clothing, food portions, and items',
                details: [
                    {
                        term: 'Clothing sizes',
                        sizes: [
                            'S サイズ (S saizu) - Small',
                            'M サイズ (M saizu) - Medium',
                            'L サイズ (L saizu) - Large',
                            'XL サイズ (XL saizu) - Extra Large'
                        ]
                    },
                    {
                        term: 'Japanese size terms',
                        sizes: [
                            '小さい (ちいさい chiisai) - small (adjective)',
                            '大きい (おおきい ōkii) - big/large (adjective)',
                            '小 (しょう shō) - small (noun)',
                            '中 (ちゅう chū) - medium (noun)',
                            '大 (だい dai) - large (noun)',
                            '特大 (とくだい tokudai) - extra large'
                        ]
                    },
                    {
                        term: 'Food portions',
                        sizes: [
                            '普通盛り (ふつうもり futsūmori) - regular portion',
                            '大盛り (おおもり ōmori) - large portion',
                            '特盛り (とくもり tokumori) - extra large portion',
                            '少なめ (すくなめ sukuname) - small portion/less'
                        ]
                    }
                ],
                tip: 'For clothes, English letters (S/M/L) are commonly used. For food, use もり (mori) portion terms.'
            },
            {
                word: '量',
                japanese: '量',
                romaji: 'Quantities',
                explanation: 'Amount and intensity modifiers',
                details: [
                    {
                        term: 'Amount modifiers',
                        words: [
                            '多め (おおめ ōme) - more/extra',
                            '少なめ (すくなめ sukuname) - less',
                            '普通 (ふつう futsū) - regular/normal',
                            '半分 (はんぶん hanbun) - half'
                        ]
                    },
                    {
                        term: 'Examples in use',
                        examples: [
                            'チャーシュー多めで (Extra chashu)',
                            'ご飯少なめで (Less rice)',
                            '氷抜きで (Without ice - literally "ice removed")'
                        ]
                    }
                ],
                tip: 'Add で (de) after these to mean "with" that modification'
            }
        ]
    },
    counters: {
        title: '助数詞 (Counter Words)',
        icon: '🔢',
        items: [
            {
                word: '個数',
                japanese: '個数',
                romaji: 'Counting Items',
                explanation: 'Different counters for different types of objects',
                details: [
                    {
                        term: 'General objects (つ)',
                        counter: 'Native Japanese counting',
                        numbers: [
                            '一つ (ひとつ hitotsu) - 1 item',
                            '二つ (ふたつ futatsu) - 2 items',
                            '三つ (みっつ mittsu) - 3 items',
                            '四つ (よっつ yottsu) - 4 items',
                            '五つ (いつつ itsutsu) - 5 items'
                        ],
                        note: 'Use up to 10, then switch to 個 (こ ko)'
                    },
                    {
                        term: 'Flat objects (枚 mai)',
                        counter: 'Paper, tickets, plates, shirts',
                        examples: [
                            '切符一枚 (きっぷいちまい) - 1 ticket',
                            'シャツ二枚 (しゃつにまい) - 2 shirts'
                        ]
                    },
                    {
                        term: 'Long objects (本 hon)',
                        counter: 'Bottles, pens, umbrellas, trains',
                        examples: [
                            'ビール一本 (いっぽん) - 1 bottle of beer',
                            '傘二本 (かさにほん) - 2 umbrellas'
                        ],
                        note: 'Sound changes: 1=いっぽん, 3=さんぼん, 6=ろっぽん'
                    },
                    {
                        term: 'People (人 nin)',
                        counter: 'Counting people',
                        numbers: [
                            '一人 (ひとり hitori) - 1 person (irregular)',
                            '二人 (ふたり futari) - 2 people (irregular)',
                            '三人 (さんにん sannin) - 3 people',
                            '四人 (よにん yonin) - 4 people'
                        ]
                    }
                ],
                tip: 'When in doubt, use つ counting for general objects!'
            }
        ]
    }
};
