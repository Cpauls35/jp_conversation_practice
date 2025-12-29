// Phrase database organized by scenario
const phrases = {
    coffee: {
        title: 'カフェ (Coffee Shop)',
        rolePlay: true,
        intro: {
            shopkeeper: {
                japanese: 'いらっしゃいませ。ご注文は？',
                romaji: 'Irasshaimase. Gochūmon wa?',
                english: 'Welcome! What would you like to order?'
            }
        },
        phrases: [
            {
                japanese: 'コーヒーを一つください',
                romaji: 'Kōhī wo hitotsu kudasai',
                english: 'One coffee, please',
                pronunciation: 'KOH-hee wo HEE-toh-tsu koo-dah-sigh'
            },
            {
                japanese: 'コーヒーを二つください',
                romaji: 'Kōhī wo futatsu kudasai',
                english: 'Two coffees, please',
                pronunciation: 'KOH-hee wo foo-TAH-tsu koo-dah-sigh'
            },
            {
                japanese: 'カプチーノを一つお願いします',
                romaji: 'Kapuchīno wo hitotsu onegaishimasu',
                english: 'One cappuccino, please',
                pronunciation: 'kah-poo-CHEE-noh wo HEE-toh-tsu oh-neh-guy-shee-moss'
            },
            {
                japanese: 'カプチーノを二つお願いします',
                romaji: 'Kapuchīno wo futatsu onegaishimasu',
                english: 'Two cappuccinos, please',
                pronunciation: 'kah-poo-CHEE-noh wo foo-TAH-tsu oh-neh-guy-shee-moss'
            },
            {
                japanese: 'ホットでお願いします',
                romaji: 'Hotto de onegaishimasu',
                english: 'Hot, please',
                pronunciation: 'HOT-toh deh oh-neh-guy-shee-moss'
            },
            {
                japanese: 'アイスでお願いします',
                romaji: 'Aisu de onegaishimasu',
                english: 'Iced, please',
                pronunciation: 'EYE-soo deh oh-neh-guy-shee-moss'
            },
            {
                japanese: 'ミルクと砂糖をください',
                romaji: 'Miruku to satō wo kudasai',
                english: 'Milk and sugar, please',
                pronunciation: 'mee-ROO-koo toh sah-TOH wo koo-dah-sigh'
            },
            {
                japanese: 'お会計お願いします',
                romaji: 'Okaikei onegaishimasu',
                english: 'Check, please',
                pronunciation: 'oh-kai-KAY oh-neh-guy-shee-moss'
            }
        ]
    },
    ramen: {
        title: 'ラーメン屋 (Ramen Shop)',
        rolePlay: true,
        intro: {
            shopkeeper: {
                japanese: 'いらっしゃい！何名様ですか？',
                romaji: 'Irasshai! Nanmei-sama desu ka?',
                english: 'Welcome! How many people?'
            },
            userResponse: {
                japanese: '一人です',
                romaji: 'Hitori desu',
                english: "Just one person",
                pronunciation: 'hee-TOH-ree dess'
            }
        },
        phrases: [
            {
                japanese: '味噌ラーメンをお願いします',
                romaji: 'Miso rāmen wo onegaishimasu',
                english: 'Miso ramen, please',
                pronunciation: 'MEE-soh RAH-men wo oh-neh-guy-shee-moss'
            },
            {
                japanese: '醤油ラーメンをお願いします',
                romaji: 'Shōyu rāmen wo onegaishimasu',
                english: 'Soy sauce ramen, please',
                pronunciation: 'SHOH-yoo RAH-men wo oh-neh-guy-shee-moss'
            },
            {
                japanese: '豚骨ラーメンをお願いします',
                romaji: 'Tonkotsu rāmen wo onegaishimasu',
                english: 'Pork bone ramen, please',
                pronunciation: 'ton-KOH-tsu RAH-men wo oh-neh-guy-shee-moss'
            },
            {
                japanese: '塩ラーメンをお願いします',
                romaji: 'Shio rāmen wo onegaishimasu',
                english: 'Salt ramen, please',
                pronunciation: 'SHEE-oh RAH-men wo oh-neh-guy-shee-moss'
            },
            {
                japanese: '大盛りでお願いします',
                romaji: 'Ōmori de onegaishimasu',
                english: 'Large size, please',
                pronunciation: 'OH-moh-ree deh oh-neh-guy-shee-moss'
            },
            {
                japanese: '普通盛りでお願いします',
                romaji: 'Futsūmori de onegaishimasu',
                english: 'Regular size, please',
                pronunciation: 'foo-TSOO-moh-ree deh oh-neh-guy-shee-moss'
            },
            {
                japanese: 'チャーシュー多めでお願いします',
                romaji: 'Chāshū ōme de onegaishimasu',
                english: 'Extra chashu, please',
                pronunciation: 'CHAH-shoo OH-meh deh oh-neh-guy-shee-moss'
            },
            {
                japanese: '替え玉お願いします',
                romaji: 'Kaedama onegaishimasu',
                english: 'Extra noodles, please',
                pronunciation: 'kah-eh-DAH-mah oh-neh-guy-shee-moss'
            },
            {
                japanese: '麺は固めでお願いします',
                romaji: 'Men wa katame de onegaishimasu',
                english: 'Firm noodles, please',
                pronunciation: 'men wah kah-TAH-meh deh oh-neh-guy-shee-moss'
            }
        ]
    },
    numbers: {
        title: '数字 (Numbers)',
        rolePlay: false,
        phrases: [
            {
                japanese: '一 (いち)',
                romaji: 'ichi',
                english: '1',
                pronunciation: 'EE-chee'
            },
            {
                japanese: '二 (に)',
                romaji: 'ni',
                english: '2',
                pronunciation: 'nee'
            },
            {
                japanese: '三 (さん)',
                romaji: 'san',
                english: '3',
                pronunciation: 'sahn'
            },
            {
                japanese: '四 (よん / し)',
                romaji: 'yon / shi',
                english: '4',
                pronunciation: 'yon or shee'
            },
            {
                japanese: '五 (ご)',
                romaji: 'go',
                english: '5',
                pronunciation: 'goh'
            },
            {
                japanese: '六 (ろく)',
                romaji: 'roku',
                english: '6',
                pronunciation: 'roh-koo'
            },
            {
                japanese: '七 (なな / しち)',
                romaji: 'nana / shichi',
                english: '7',
                pronunciation: 'nah-nah or shee-chee'
            },
            {
                japanese: '八 (はち)',
                romaji: 'hachi',
                english: '8',
                pronunciation: 'hah-chee'
            },
            {
                japanese: '九 (きゅう)',
                romaji: 'kyū',
                english: '9',
                pronunciation: 'kyoo'
            },
            {
                japanese: '十 (じゅう)',
                romaji: 'jū',
                english: '10',
                pronunciation: 'joo'
            },
            {
                japanese: '二十 (にじゅう)',
                romaji: 'nijū',
                english: '20',
                pronunciation: 'nee-joo'
            },
            {
                japanese: '百 (ひゃく)',
                romaji: 'hyaku',
                english: '100',
                pronunciation: 'HYAH-koo'
            },
            {
                japanese: '三百 (さんびゃく)',
                romaji: 'sanbyaku',
                english: '300',
                pronunciation: 'sahn-BYAH-koo'
            },
            {
                japanese: '千 (せん)',
                romaji: 'sen',
                english: '1,000',
                pronunciation: 'sen'
            },
            {
                japanese: '三千 (さんぜん)',
                romaji: 'sanzen',
                english: '3,000',
                pronunciation: 'sahn-zen'
            },
            {
                japanese: '一万 (いちまん)',
                romaji: 'ichiman',
                english: '10,000',
                pronunciation: 'ee-chee-mahn'
            },
            {
                japanese: '五百円 (ごひゃくえん)',
                romaji: 'gohyaku en',
                english: '500 yen',
                pronunciation: 'goh-HYAH-koo en'
            },
            {
                japanese: '千円 (せんえん)',
                romaji: 'sen en',
                english: '1,000 yen',
                pronunciation: 'sen en'
            }
        ]
    },
    train: {
        title: '電車 (Train Station)',
        rolePlay: true,
        intro: {
            shopkeeper: {
                japanese: 'どちらまで行かれますか？',
                romaji: 'Dochira made ikaremasu ka?',
                english: 'Where are you going?'
            }
        },
        phrases: [
            {
                japanese: '新宿まで一枚お願いします',
                romaji: 'Shinjuku made ichimai onegaishimasu',
                english: 'One ticket to Shinjuku, please',
                pronunciation: 'shin-joo-koo mah-deh ee-chee-my oh-neh-guy-shee-moss'
            },
            {
                japanese: 'どこで乗り換えますか',
                romaji: 'Doko de norikaemasu ka',
                english: 'Where do I transfer?',
                pronunciation: 'doh-koh deh noh-ree-kah-eh-mass kah'
            },
            {
                japanese: '何番線ですか',
                romaji: 'Nanban-sen desu ka',
                english: 'Which platform?',
                pronunciation: 'nahn-bahn-sen dess kah'
            },
            {
                japanese: '次の電車は何時ですか',
                romaji: 'Tsugi no densha wa nanji desu ka',
                english: 'What time is the next train?',
                pronunciation: 'tsoo-ghee noh den-shah wah nahn-jee dess kah'
            },
            {
                japanese: 'ICカードは使えますか',
                romaji: 'IC kādo wa tsukaemasu ka',
                english: 'Can I use an IC card?',
                pronunciation: 'eye-see KAH-doh wah tsoo-kah-eh-mass kah'
            },
            {
                japanese: 'すみません、降ります',
                romaji: 'Sumimasen, orimasu',
                english: 'Excuse me, getting off',
                pronunciation: 'soo-mee-mah-sen, oh-ree-mass'
            },
            {
                japanese: 'この電車は〇〇に止まりますか',
                romaji: 'Kono densha wa ○○ ni tomarimasu ka',
                english: 'Does this train stop at ○○?',
                pronunciation: 'koh-noh den-shah wah [place] nee toh-mah-ree-mass kah'
            }
        ]
    },
    directions: {
        title: '道案内 (Directions)',
        rolePlay: true,
        intro: {
            shopkeeper: {
                japanese: 'どうされましたか？',
                romaji: 'Dō saremashita ka?',
                english: 'Can I help you? / What happened?'
            }
        },
        phrases: [
            {
                japanese: '〇〇はどこですか',
                romaji: '○○ wa doko desu ka',
                english: 'Where is ○○?',
                pronunciation: '[place] wah doh-koh dess kah'
            },
            {
                japanese: 'まっすぐ行ってください',
                romaji: 'Massugu itte kudasai',
                english: 'Please go straight',
                pronunciation: 'mahs-SOO-goo eet-teh koo-dah-sigh'
            },
            {
                japanese: '右に曲がってください',
                romaji: 'Migi ni magatte kudasai',
                english: 'Please turn right',
                pronunciation: 'mee-ghee nee mah-GAHT-teh koo-dah-sigh'
            },
            {
                japanese: '左に曲がってください',
                romaji: 'Hidari ni magatte kudasai',
                english: 'Please turn left',
                pronunciation: 'hee-DAH-ree nee mah-GAHT-teh koo-dah-sigh'
            },
            {
                japanese: 'ここから近いですか',
                romaji: 'Koko kara chikai desu ka',
                english: 'Is it close from here?',
                pronunciation: 'koh-koh kah-rah chee-kai dess kah'
            },
            {
                japanese: '歩いて何分ですか',
                romaji: 'Aruite nanpun desu ka',
                english: 'How many minutes on foot?',
                pronunciation: 'ah-roo-ee-teh nahn-poon dess kah'
            },
            {
                japanese: '地図を見せてもらえますか',
                romaji: 'Chizu wo misete moraemasu ka',
                english: 'Can you show me on a map?',
                pronunciation: 'chee-zoo wo mee-seh-teh moh-rah-eh-mass kah'
            },
            {
                japanese: '迷ってしまいました',
                romaji: 'Mayotte shimaimashita',
                english: "I'm lost",
                pronunciation: 'mah-YOHT-teh shee-my-mah-shta'
            },
            {
                japanese: 'もう一度お願いします',
                romaji: 'Mō ichido onegaishimasu',
                english: 'One more time, please',
                pronunciation: 'moh ee-chee-doh oh-neh-guy-shee-moss'
            }
        ]
    },
    shopping: {
        title: '買い物 (Shopping)',
        rolePlay: true,
        intro: {
            shopkeeper: {
                japanese: 'いらっしゃいませ。何かお探しですか？',
                romaji: 'Irasshaimase. Nanika osagashi desu ka?',
                english: 'Welcome! Are you looking for something?'
            }
        },
        phrases: [
            {
                japanese: 'これをください',
                romaji: 'Kore wo kudasai',
                english: 'This one, please',
                pronunciation: 'koh-reh wo koo-dah-sigh'
            },
            {
                japanese: 'これを二つください',
                romaji: 'Kore wo futatsu kudasai',
                english: 'Two of these, please',
                pronunciation: 'koh-reh wo foo-TAH-tsu koo-dah-sigh'
            },
            {
                japanese: 'いくらですか',
                romaji: 'Ikura desu ka',
                english: 'How much is it?',
                pronunciation: 'ee-KOO-rah dess kah'
            },
            {
                japanese: '試着できますか',
                romaji: 'Shichaku dekimasu ka',
                english: 'Can I try this on?',
                pronunciation: 'shee-CHAH-koo deh-kee-mass kah'
            },
            {
                japanese: '他の色はありますか',
                romaji: 'Hoka no iro wa arimasu ka',
                english: 'Do you have other colors?',
                pronunciation: 'hoh-kah noh ee-roh wah ah-ree-mass kah'
            },
            {
                japanese: 'もっと小さいサイズはありますか',
                romaji: 'Motto chīsai saizu wa arimasu ka',
                english: 'Do you have a smaller size?',
                pronunciation: 'moht-toh CHEE-sai sigh-zoo wah ah-ree-mass kah'
            },
            {
                japanese: 'もっと大きいサイズはありますか',
                romaji: 'Motto ōkii saizu wa arimasu ka',
                english: 'Do you have a larger size?',
                pronunciation: 'moht-toh OH-kee sigh-zoo wah ah-ree-mass kah'
            },
            {
                japanese: 'クレジットカードで払えますか',
                romaji: 'Kurejitto kādo de haraemasu ka',
                english: 'Can I pay with credit card?',
                pronunciation: 'koo-reh-JEET-toh KAH-doh deh hah-rah-eh-mass kah'
            },
            {
                japanese: '袋をください',
                romaji: 'Fukuro wo kudasai',
                english: 'A bag, please',
                pronunciation: 'foo-KOO-roh wo koo-dah-sigh'
            },
            {
                japanese: 'レシートをください',
                romaji: 'Reshīto wo kudasai',
                english: 'Receipt, please',
                pronunciation: 'reh-SHEET-oh wo koo-dah-sigh'
            }
        ]
    },
    asking: {
        title: '質問 (Asking Questions)',
        rolePlay: false,
        phrases: [
            {
                japanese: 'これは何ですか',
                romaji: 'Kore wa nan desu ka',
                english: 'What is this?',
                pronunciation: 'koh-reh wah nahn dess kah'
            },
            {
                japanese: 'あれは何ですか',
                romaji: 'Are wa nan desu ka',
                english: 'What is that?',
                pronunciation: 'ah-reh wah nahn dess kah'
            },
            {
                japanese: 'これは何と言いますか',
                romaji: 'Kore wa nan to iimasu ka',
                english: 'What is this called?',
                pronunciation: 'koh-reh wah nahn toh ee-mass kah'
            },
            {
                japanese: 'どこですか',
                romaji: 'Doko desu ka',
                english: 'Where is it?',
                pronunciation: 'doh-koh dess kah'
            },
            {
                japanese: 'トイレはどこですか',
                romaji: 'Toire wa doko desu ka',
                english: 'Where is the bathroom?',
                pronunciation: 'toh-ee-reh wah doh-koh dess kah'
            },
            {
                japanese: 'すみません',
                romaji: 'Sumimasen',
                english: 'Excuse me',
                pronunciation: 'soo-mee-mah-sen'
            },
            {
                japanese: 'もう一度お願いします',
                romaji: 'Mō ichido onegaishimasu',
                english: 'One more time, please',
                pronunciation: 'moh ee-chee-doh oh-neh-guy-shee-moss'
            },
            {
                japanese: 'ゆっくり話してください',
                romaji: 'Yukkuri hanashite kudasai',
                english: 'Please speak slowly',
                pronunciation: 'yook-KOO-ree hah-nah-shee-teh koo-dah-sigh'
            },
            {
                japanese: '英語を話せますか',
                romaji: 'Eigo wo hanasemasu ka',
                english: 'Do you speak English?',
                pronunciation: 'ay-goh wo hah-nah-seh-mass kah'
            },
            {
                japanese: 'わかりません',
                romaji: 'Wakarimasen',
                english: "I don't understand",
                pronunciation: 'wah-kah-ree-mah-sen'
            },
            {
                japanese: '日本語が話せません',
                romaji: 'Nihongo ga hanasemasen',
                english: "I can't speak Japanese",
                pronunciation: 'nee-HOHN-goh gah hah-nah-seh-mah-sen'
            },
            {
                japanese: '助けてください',
                romaji: 'Tasukete kudasai',
                english: 'Please help me',
                pronunciation: 'tah-soo-keh-teh koo-dah-sigh'
            }
        ]
    }
};
