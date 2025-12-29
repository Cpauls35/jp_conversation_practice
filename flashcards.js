// Flashcard database for vocabulary practice
const flashcards = {
    basics: {
        title: '基本 (Basics)',
        cards: [
            { front: 'Hello', back: 'こんにちは', romaji: 'konnichiwa' },
            { front: 'Good morning', back: 'おはようございます', romaji: 'ohayō gozaimasu' },
            { front: 'Good evening', back: 'こんばんは', romaji: 'konbanwa' },
            { front: 'Thank you', back: 'ありがとうございます', romaji: 'arigatō gozaimasu' },
            { front: 'Excuse me/Sorry', back: 'すみません', romaji: 'sumimasen' },
            { front: 'Please (give me)', back: 'ください', romaji: 'kudasai' },
            { front: 'Please (request)', back: 'お願いします', romaji: 'onegaishimasu' },
            { front: 'Yes', back: 'はい', romaji: 'hai' },
            { front: 'No', back: 'いいえ', romaji: 'iie' },
            { front: 'Goodbye', back: 'さようなら', romaji: 'sayōnara' }
        ]
    },
    numbers: {
        title: '数字 (Numbers)',
        cards: [
            { front: '1', back: '一 (いち)', romaji: 'ichi' },
            { front: '2', back: '二 (に)', romaji: 'ni' },
            { front: '3', back: '三 (さん)', romaji: 'san' },
            { front: '4', back: '四 (よん)', romaji: 'yon' },
            { front: '5', back: '五 (ご)', romaji: 'go' },
            { front: '6', back: '六 (ろく)', romaji: 'roku' },
            { front: '7', back: '七 (なな)', romaji: 'nana' },
            { front: '8', back: '八 (はち)', romaji: 'hachi' },
            { front: '9', back: '九 (きゅう)', romaji: 'kyū' },
            { front: '10', back: '十 (じゅう)', romaji: 'jū' },
            { front: '100', back: '百 (ひゃく)', romaji: 'hyaku' },
            { front: '1,000', back: '千 (せん)', romaji: 'sen' },
            { front: '10,000', back: '一万 (いちまん)', romaji: 'ichiman' }
        ]
    },
    directions: {
        title: '方向 (Directions)',
        cards: [
            { front: 'Right', back: '右 (みぎ)', romaji: 'migi' },
            { front: 'Left', back: '左 (ひだり)', romaji: 'hidari' },
            { front: 'Straight', back: 'まっすぐ', romaji: 'massugu' },
            { front: 'Here', back: 'ここ', romaji: 'koko' },
            { front: 'There', back: 'そこ', romaji: 'soko' },
            { front: 'Over there', back: 'あそこ', romaji: 'asoko' },
            { front: 'Where?', back: 'どこ', romaji: 'doko' },
            { front: 'Near/Close', back: '近い (ちかい)', romaji: 'chikai' },
            { front: 'Far', back: '遠い (とおい)', romaji: 'tōi' },
            { front: 'Front', back: '前 (まえ)', romaji: 'mae' },
            { front: 'Back/Behind', back: '後ろ (うしろ)', romaji: 'ushiro' }
        ]
    },
    sizes: {
        title: 'サイズ (Sizes)',
        cards: [
            { front: 'Small (adjective)', back: '小さい (ちいさい)', romaji: 'chiisai' },
            { front: 'Large (adjective)', back: '大きい (おおきい)', romaji: 'ōkii' },
            { front: 'Small (S)', back: 'Sサイズ', romaji: 'S saizu' },
            { front: 'Medium (M)', back: 'Mサイズ', romaji: 'M saizu' },
            { front: 'Large (L)', back: 'Lサイズ', romaji: 'L saizu' },
            { front: 'Regular portion', back: '普通盛り (ふつうもり)', romaji: 'futsūmori' },
            { front: 'Large portion', back: '大盛り (おおもり)', romaji: 'ōmori' },
            { front: 'Extra/More', back: '多め (おおめ)', romaji: 'ōme' },
            { front: 'Less', back: '少なめ (すくなめ)', romaji: 'sukuname' }
        ]
    },
    food: {
        title: '食べ物 (Food)',
        cards: [
            { front: 'Coffee', back: 'コーヒー', romaji: 'kōhī' },
            { front: 'Water', back: '水 (みず)', romaji: 'mizu' },
            { front: 'Tea', back: 'お茶 (おちゃ)', romaji: 'ocha' },
            { front: 'Ramen', back: 'ラーメン', romaji: 'rāmen' },
            { front: 'Rice', back: 'ご飯 (ごはん)', romaji: 'gohan' },
            { front: 'Delicious', back: '美味しい (おいしい)', romaji: 'oishii' },
            { front: 'Hot (temperature)', back: 'ホット', romaji: 'hotto' },
            { front: 'Iced/Cold', back: 'アイス', romaji: 'aisu' },
            { front: 'Milk', back: 'ミルク', romaji: 'miruku' },
            { front: 'Sugar', back: '砂糖 (さとう)', romaji: 'satō' }
        ]
    },
    counters: {
        title: '助数詞 (Counters)',
        cards: [
            { front: '1 item', back: '一つ (ひとつ)', romaji: 'hitotsu' },
            { front: '2 items', back: '二つ (ふたつ)', romaji: 'futatsu' },
            { front: '3 items', back: '三つ (みっつ)', romaji: 'mittsu' },
            { front: '1 person', back: '一人 (ひとり)', romaji: 'hitori' },
            { front: '2 people', back: '二人 (ふたり)', romaji: 'futari' },
            { front: '3 people', back: '三人 (さんにん)', romaji: 'sannin' },
            { front: '1 ticket (flat)', back: '一枚 (いちまい)', romaji: 'ichimai' },
            { front: '1 bottle (long)', back: '一本 (いっぽん)', romaji: 'ippon' }
        ]
    },
    questions: {
        title: '質問 (Questions)',
        cards: [
            { front: 'What?', back: '何 (なん / なに)', romaji: 'nan / nani' },
            { front: 'Where?', back: 'どこ', romaji: 'doko' },
            { front: 'When?', back: 'いつ', romaji: 'itsu' },
            { front: 'Who?', back: '誰 (だれ)', romaji: 'dare' },
            { front: 'Why?', back: 'なぜ / どうして', romaji: 'naze / dōshite' },
            { front: 'How much?', back: 'いくら', romaji: 'ikura' },
            { front: 'How many?', back: 'いくつ', romaji: 'ikutsu' },
            { front: 'Which?', back: 'どれ / どちら', romaji: 'dore / dochira' },
            { front: 'What is this?', back: 'これは何ですか', romaji: 'kore wa nan desu ka' }
        ]
    },
    time: {
        title: '時間 (Time)',
        cards: [
            { front: 'Now', back: '今 (いま)', romaji: 'ima' },
            { front: 'Today', back: '今日 (きょう)', romaji: 'kyō' },
            { front: 'Tomorrow', back: '明日 (あした)', romaji: 'ashita' },
            { front: 'Yesterday', back: '昨日 (きのう)', romaji: 'kinō' },
            { front: 'Morning', back: '朝 (あさ)', romaji: 'asa' },
            { front: 'Afternoon', back: '午後 (ごご)', romaji: 'gogo' },
            { front: 'Evening', back: '夕方 (ゆうがた)', romaji: 'yūgata' },
            { front: 'Night', back: '夜 (よる)', romaji: 'yoru' },
            { front: 'What time?', back: '何時 (なんじ)', romaji: 'nanji' }
        ]
    }
};
