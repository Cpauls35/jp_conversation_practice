# 日本語練習 (Japanese Practice PWA)

A Progressive Web App for practicing Japanese conversations with voice recognition, audio playback, flashcards, and knowledge base.

## ✨ Features

### 🎭 Practice Scenarios (Voice Recognition)
- **7 Real-World Scenarios**: Coffee shop, ramen shop, train station, directions, shopping, and more
- **73 Common Phrases**: All with Japanese, romaji, and English
- **Role-Play Mode**: Interactive dialogues with shopkeeper responses
- **Voice Recognition**: Practice pronunciation with real-time feedback
- **Pronunciation Guides**: Detailed phonetic breakdowns when you make mistakes

### 🔊 Audio Playback & Difficulty Modes
- **Easy Mode**: See text while practicing (Japanese, romaji, English all visible)
- **Hard Mode**: Audio-only challenge - text is blurred, listen and respond from memory
- **Native Japanese Audio**: High-quality text-to-speech using device voices
- **Auto-Play**: Audio automatically plays in hard mode
- **Repeat Button**: Quickly replay audio as many times as needed
- **Works Offline**: All audio generated on-device

### 📚 Knowledge Base
- **5 Major Categories**: Politeness, Numbers, Directions, Sizes, Counter Words
- **12 Detailed Topics**: In-depth explanations with examples
- **100+ Examples**: Real usage in context
- **Grammar Notes**: When to use ください vs お願いします, number sound changes, etc.
- **Cultural Tips**: Understanding Japanese communication

### 🎴 Flashcard System
- **8 Decks**: Basics, Numbers, Directions, Sizes, Food, Counters, Questions, Time
- **79 Total Cards**: Comprehensive vocabulary coverage
- **Active Recall**: Proven learning method
- **Smart Review**: Track incorrect cards and practice them again
- **Self-Marking**: Honest assessment of your knowledge
- **Shuffled Decks**: Different order each time for better retention

### 📱 PWA Features
- **Installable**: Add to home screen, works like native app
- **Offline Support**: Full functionality without internet
- **Mobile-First**: Designed for iOS and Android
- **No Login Required**: Completely private
- **No Data Collection**: Everything runs locally

## 🚀 Quick Start

### For iPhone Users (Recommended Path)

1. **Deploy to GitHub Pages** (free hosting):
   - Create GitHub account
   - Create new repository named `japanese-practice`
   - Upload all files from this folder
   - Enable GitHub Pages in Settings → Pages
   - Get URL: `https://yourusername.github.io/japanese-practice`

2. **Install on iPhone**:
   - Open URL in Safari
   - Tap Share button
   - Tap "Add to Home Screen"
   - Done! Works like a native app

### Alternative Hosting Options

**Netlify** (Easiest):
1. Go to netlify.com
2. Drag and drop project folder
3. Get instant URL
4. Add to iPhone home screen

**Vercel**:
1. Sign up at vercel.com
2. Import GitHub repository
3. Deploy automatically
4. Add to iPhone home screen

## 📖 How to Use

### Practice Scenarios

1. **Choose Scenario**: Coffee, Ramen, Train, etc.
2. **Select Difficulty**:
   - **📖 Easy**: See all text, practice reading and pronunciation
   - **🎧 Hard**: Audio only, simulate real conversations
3. **Choose Phrase**: Pick what you want to practice
4. **Listen** (optional): Click 🔊 Play Audio to hear it
5. **Speak**: Tap microphone and say the phrase
6. **Get Feedback**: See if you got it right with pronunciation tips

### Knowledge Base

1. **Tap "📚 Knowledge"** tab
2. **Choose Topic**: Politeness, Numbers, Directions, Sizes, Counters
3. **Read Explanations**: Detailed info with examples
4. **Learn Nuances**: When to use different words/forms

### Flashcards

1. **Tap "🎴 Flashcards"** tab
2. **Choose Deck**: Basics, Numbers, Directions, etc.
3. **See English**: Try to recall Japanese
4. **Flip Card**: Tap to see answer
5. **Mark Yourself**: ✅ Correct or ❌ Incorrect
6. **Review**: Practice wrong cards again

## 📚 Content Included

### Scenarios (73 phrases total)
- ☕ Coffee Shop (8 phrases) - Role-play ✓
- 🍜 Ramen Shop (9 phrases) - Role-play ✓
- 🔢 Numbers (18 phrases)
- 🚆 Train Station (7 phrases) - Role-play ✓
- 🗺️ Directions (9 phrases) - Role-play ✓
- 🛍️ Shopping (10 phrases) - Role-play ✓
- ❓ Questions (12 phrases)

### Knowledge Topics
- Politeness: ください vs お願いします, すみません vs ごめんなさい
- Numbers: 1-10, tens, hundreds, thousands, sound changes
- Directions: Left/right, position words, navigation
- Sizes: Clothing sizes, food portions, quantities
- Counters: Different counters for different objects

### Flashcard Decks (79 cards total)
- Basics (10) - Greetings, please, thank you
- Numbers (13) - 1-10, 100, 1000, 10,000
- Directions (11) - Left, right, here, there
- Sizes (9) - Small, large, portions
- Food (10) - Coffee, water, delicious
- Counters (8) - People, items, tickets
- Questions (9) - What, where, when, how much
- Time (9) - Today, tomorrow, morning, night

## 🎯 Learning Paths

### Beginner Path
1. Start with **Flashcards - Basics** (greetings, please, thank you)
2. Study **Knowledge - Numbers** (understand counting)
3. Practice **Flashcards - Numbers** (memorize 1-10)
4. Try **Scenario - Coffee Shop** in **Easy Mode**
5. Read **Knowledge - Politeness** (understand ください vs お願いします)

### Travel Preparation Path
1. **Flashcards - Basics** + **Questions**
2. **Knowledge - Directions** + **Flashcards - Directions**
3. **Scenario - Train Station** (Easy → Hard)
4. **Scenario - Directions** (Easy → Hard)
5. **Scenario - Shopping** + **Ramen** (Easy → Hard)

### Daily Practice (15-20 min)
1. **Morning**: One flashcard deck (5 min)
2. **Afternoon**: One scenario in Easy mode with voice (5 min)
3. **Evening**: Read one Knowledge topic (5 min)
4. **Night**: Same scenario in Hard mode - audio only! (5 min)

## 🛠️ Technical Details

### Files Included
```
japanese-practice/
├── index.html          # Main app structure
├── styles.css          # All styling (Japanese-inspired design)
├── app.js             # Main app logic, voice recognition, audio
├── phrases.js         # 73 scenario phrases with role-play
├── knowledge.js       # Knowledge base content
├── flashcards.js      # 79 flashcards across 8 decks
├── manifest.json      # PWA configuration
├── sw.js              # Service worker (offline support)
├── create-icons.html  # Icon generator tool
├── icon-192.png       # App icon 192x192 (generate with tool)
├── icon-512.png       # App icon 512x512 (generate with tool)
└── README.md          # This file
```

### Technologies Used
- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **Voice Recognition**: Web Speech API (SpeechRecognition)
- **Audio Playback**: Web Speech API (SpeechSynthesis)
- **Storage**: Service Worker for offline caching
- **PWA**: Manifest.json for installability
- **No Backend**: Everything runs locally

### Browser Support
| Feature | iOS Safari | Chrome | Android |
|---------|-----------|--------|---------|
| Voice Recognition | ✅ Excellent | ✅ Good | ✅ Good |
| Audio Playback | ✅ Native | ✅ Good | ✅ Good |
| PWA Install | ✅ Yes | ✅ Yes | ✅ Yes |
| Offline Mode | ✅ Yes | ✅ Yes | ✅ Yes |

## 🔧 Setup & Deployment

### Generate Icons First
1. Open `create-icons.html` in browser
2. Download `icon-192.png`
3. Download `icon-512.png`
4. Place in project folder

### Deploy to GitHub Pages
1. Create GitHub account
2. Create repository: `japanese-practice`
3. Upload all files
4. Settings → Pages → Source: main branch → Save
5. Wait 2 minutes
6. Visit: `https://yourusername.github.io/japanese-practice`

### Test on iPhone
1. Open URL in Safari
2. Grant microphone permission
3. Test voice recognition
4. Test audio playback (both modes)
5. Add to home screen
6. Test offline mode

## 🎨 Design Features

**Japanese-Inspired Aesthetic:**
- Traditional color palette (ink black, paper white, vermillion, indigo)
- Japanese typography (Noto Sans JP)
- Clean, minimalist layout
- Bold, tactile interface with shadow effects

**User Experience:**
- Clear visual feedback
- Smooth animations
- Intuitive navigation
- Mobile-first responsive design

## 🔒 Privacy & Security

- ✅ No data collection
- ✅ No analytics
- ✅ No user accounts
- ✅ No server communication
- ✅ All processing on-device
- ✅ Completely private
- ✅ Works offline

## 🐛 Troubleshooting

### Voice Recognition Not Working
- Grant microphone permission in browser settings
- Use Safari on iOS (best support)
- Check device volume/microphone

### Audio Not Playing
- Check device volume
- Disable silent mode
- Toggle difficulty modes
- Refresh page

### App Not Installing
- Must use HTTPS (GitHub Pages/Netlify provide this)
- Use Safari on iOS
- Clear cache and try again

### Text Still Visible in Hard Mode
- Refresh page
- Make sure "Hard" button is highlighted
- Check browser compatibility

## 📱 System Requirements

**Minimum:**
- iOS 14+ (Safari)
- Android 8+ (Chrome)
- Modern web browser with Web Speech API

**Recommended:**
- iOS 16+ for best voice quality
- Good internet for first load
- Japanese voice pack downloaded (iOS Settings → Accessibility)

## 🎓 Learning Tips

### For Voice Recognition:
1. Speak clearly and naturally
2. Don't shout - normal volume works
3. Match the pacing in audio playback
4. Practice in quiet environment first

### For Hard Mode:
1. Listen carefully multiple times
2. Use 🔁 repeat button liberally
3. Don't peek! The blur is there to help
4. Start with Easy mode first

### For Flashcards:
1. Be honest with self-marking
2. Review incorrect cards same day
3. Practice daily for best results
4. Mix different decks to stay engaged

### General:
1. Consistency > Intensity (15 min daily beats 2 hours weekly)
2. Use all three modes (Scenarios, Knowledge, Flashcards)
3. Progress: Easy → Hard mode as you improve
4. Real-world practice: Use phrases when traveling!

## 🔮 Future Ideas

Potential enhancements:
- Custom flashcard decks
- Spaced repetition algorithm
- Progress tracking & stats
- More scenarios (restaurant, hotel, emergency)
- Kanji practice mode
- Conversation mode (back-and-forth dialogue)
- Achievement system

## 📄 License

Free to use and modify for personal learning.

## 🙏 Credits

Created for Japanese language learners who want practical, real-world practice.

---

## Quick Reference

**Need help?** Check these guides:
- First time setup: See "Setup & Deployment" section above
- Using voice: See "Practice Scenarios" section
- Understanding differences: See "Knowledge Base"
- Memorizing vocab: See "Flashcards"

**Ready to start?** 
1. Deploy to GitHub Pages
2. Open on iPhone Safari
3. Add to home screen
4. Start with Easy mode + Flashcards - Basics
5. 頑張ってください！(Good luck!)
