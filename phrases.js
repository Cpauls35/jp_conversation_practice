// Phrase database organized by scenario
const phrases = {
    coffee: {
        title: 'カフェ (Coffee Shop)',
        phrases: [
            {
                japanese: 'コーヒーを一つください',
                romaji: 'Kōhī wo hitotsu kudasai',
                english: 'One coffee, please'
            },
            {
                japanese: 'コーヒーを二つください',
                romaji: 'Kōhī wo futatsu kudasai',
                english: 'Two coffees, please'
            },
            {
                japanese: 'カプチーノを一つお願いします',
                romaji: 'Kapuchīno wo hitotsu onegaishimasu',
                english: 'One cappuccino, please'
            },
            {
                japanese: 'カプチーノを二つお願いします',
                romaji: 'Kapuchīno wo futatsu onegaishimasu',
                english: 'Two cappuccinos, please'
            },
            {
                japanese: 'ホットでお願いします',
                romaji: 'Hotto de onegaishimasu',
                english: 'Hot, please'
            },
            {
                japanese: 'アイスでお願いします',
                romaji: 'Aisu de onegaishimasu',
                english: 'Iced, please'
            },
            {
                japanese: 'ミルクと砂糖をください',
                romaji: 'Miruku to satō wo kudasai',
                english: 'Milk and sugar, please'
            },
            {
                japanese: 'お会計お願いします',
                romaji: 'Okaikei onegaishimasu',
                english: 'Check, please'
            }
        ]
    },
    ramen: {
        title: 'ラーメン屋 (Ramen Shop)',
        phrases: [
            {
                japanese: 'ラーメンを一つください',
                romaji: 'Rāmen wo hitotsu kudasai',
                english: 'One ramen, please'
            },
            {
                japanese: 'ラーメンを二つください',
                romaji: 'Rāmen wo futatsu kudasai',
                english: 'Two ramens, please'
            },
            {
                japanese: '味噌ラーメンをお願いします',
                romaji: 'Miso rāmen wo onegaishimasu',
                english: 'Miso ramen, please'
            },
            {
                japanese: '醤油ラーメンをお願いします',
                romaji: 'Shōyu rāmen wo onegaishimasu',
                english: 'Soy sauce ramen, please'
            },
            {
                japanese: '大盛りでお願いします',
                romaji: 'Ōmori de onegaishimasu',
                english: 'Large size, please'
            },
            {
                japanese: '普通盛りでお願いします',
                romaji: 'Futsūmori de onegaishimasu',
                english: 'Regular size, please'
            },
            {
                japanese: 'チャーシュー多めでお願いします',
                romaji: 'Chāshū ōme de onegaishimasu',
                english: 'Extra chashu, please'
            },
            {
                japanese: '替え玉お願いします',
                romaji: 'Kaedama onegaishimasu',
                english: 'Extra noodles, please'
            }
        ]
    },
    shopping: {
        title: '買い物 (Shopping)',
        phrases: [
            {
                japanese: 'これをください',
                romaji: 'Kore wo kudasai',
                english: 'This one, please'
            },
            {
                japanese: 'これを二つください',
                romaji: 'Kore wo futatsu kudasai',
                english: 'Two of these, please'
            },
            {
                japanese: 'いくらですか',
                romaji: 'Ikura desu ka',
                english: 'How much is it?'
            },
            {
                japanese: '試着できますか',
                romaji: 'Shichaku dekimasu ka',
                english: 'Can I try this on?'
            },
            {
                japanese: '他の色はありますか',
                romaji: 'Hoka no iro wa arimasu ka',
                english: 'Do you have other colors?'
            },
            {
                japanese: 'もっと小さいサイズはありますか',
                romaji: 'Motto chīsai saizu wa arimasu ka',
                english: 'Do you have a smaller size?'
            },
            {
                japanese: 'もっと大きいサイズはありますか',
                romaji: 'Motto ōkii saizu wa arimasu ka',
                english: 'Do you have a larger size?'
            },
            {
                japanese: 'クレジットカードで払えますか',
                romaji: 'Kurejitto kādo de haraemasu ka',
                english: 'Can I pay with credit card?'
            }
        ]
    },
    asking: {
        title: '質問 (Asking Questions)',
        phrases: [
            {
                japanese: 'これは何ですか',
                romaji: 'Kore wa nan desu ka',
                english: 'What is this?'
            },
            {
                japanese: 'あれは何ですか',
                romaji: 'Are wa nan desu ka',
                english: 'What is that?'
            },
            {
                japanese: 'これは何と言いますか',
                romaji: 'Kore wa nan to iimasu ka',
                english: 'What is this called?'
            },
            {
                japanese: 'どこですか',
                romaji: 'Doko desu ka',
                english: 'Where is it?'
            },
            {
                japanese: 'トイレはどこですか',
                romaji: 'Toire wa doko desu ka',
                english: 'Where is the bathroom?'
            },
            {
                japanese: 'すみません',
                romaji: 'Sumimasen',
                english: 'Excuse me'
            },
            {
                japanese: 'もう一度お願いします',
                romaji: 'Mō ichido onegaishimasu',
                english: 'One more time, please'
            },
            {
                japanese: 'ゆっくり話してください',
                romaji: 'Yukkuri hanashite kudasai',
                english: 'Please speak slowly'
            },
            {
                japanese: '英語を話せますか',
                romaji: 'Eigo wo hanasemasu ka',
                english: 'Do you speak English?'
            },
            {
                japanese: 'わかりません',
                romaji: 'Wakarimasen',
                english: "I don't understand"
            }
        ]
    }
};
