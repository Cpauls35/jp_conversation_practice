# 日本語練習 (Japanese Practice PWA)

A Progressive Web App for practicing basic Japanese conversations with voice recognition.

## Features

- 🎤 **Voice Recognition**: Practice pronunciation with real-time speech recognition
- 📱 **Mobile-First**: Designed for iOS and Android phones
- 🔌 **Offline Support**: Works without internet connection after installation
- 🎯 **Scenario-Based**: Practice common situations (coffee shop, ramen shop, shopping, questions)
- 🗣️ **Instant Feedback**: Get immediate feedback on your pronunciation

## Scenarios Included

1. **Coffee Shop (カフェ)** - Order coffee, cappuccinos, with variations
2. **Ramen Shop (ラーメン屋)** - Order ramen, customize size and toppings
3. **Shopping (買い物)** - Ask prices, try on clothes, request different sizes
4. **Asking Questions (質問)** - Common questions like "What is this?" and "Where is...?"

## Setup Instructions

### Option 1: Test Locally on Your Computer

1. **Download all files** to a folder on your Lenovo laptop
2. **Start a local web server** (required for PWA features):

   **Using Python** (if installed):
   ```bash
   # Navigate to the folder with the files
   cd path/to/japanese-practice
   
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```

   **Using Node.js** (if installed):
   ```bash
   npx http-server -p 8000
   ```

   **Using VS Code**:
   - Install "Live Server" extension
   - Right-click on `index.html` → "Open with Live Server"

3. **Open in your browser**: `http://localhost:8000`

### Option 2: Deploy to Your iPhone (Recommended)

Since you want to use this on your iPhone, you'll need to host it online:

#### A. Using GitHub Pages (Free & Easy)

1. **Create a GitHub account** (if you don't have one)
2. **Create a new repository** named `japanese-practice`
3. **Upload all files** to the repository
4. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: main → / (root) → Save
5. **Access your app**: `https://yourusername.github.io/japanese-practice`
6. **On your iPhone**:
   - Open Safari and visit the URL
   - Tap the Share button
   - Tap "Add to Home Screen"
   - Now it works like a native app!

#### B. Using Netlify (Alternative, also free)

1. Go to [netlify.com](https://netlify.com)
2. Sign up for free account
3. Drag and drop your project folder
4. Get instant URL like `https://random-name.netlify.app`
5. Add to iPhone home screen as above

### Option 3: Using Vercel (Another Alternative)

1. Sign up at [vercel.com](https://vercel.com)
2. Install Vercel CLI: `npm i -g vercel`
3. Run `vercel` in your project folder
4. Follow prompts
5. Get URL and add to iPhone

## Generating Icons

The app needs two icon files: `icon-192.png` and `icon-512.png`

1. Open `create-icons.html` in your browser
2. Click the download links to get both icons
3. Place them in the same folder as `index.html`

## How to Use

1. **Launch the app** on your iPhone
2. **Grant microphone permission** when prompted (required for voice recognition)
3. **Choose a scenario** (Coffee Shop, Ramen Shop, etc.)
4. **Select a phrase** you want to practice
5. **Tap the red microphone button** and speak the Japanese phrase
6. **Get instant feedback** on your pronunciation

## Browser Requirements

- **iOS Safari**: Full support (recommended)
- **Chrome/Edge**: Full support
- **Firefox**: Speech recognition may have limited support

## Microphone Permission

The app requires microphone access for voice recognition:
- First time: Browser will ask for permission
- If denied: Go to your phone's Settings → Safari → Microphone → Allow
- The app works completely offline after installation

## Technical Details

- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **Speech Recognition**: Web Speech API (works offline for Japanese on iOS)
- **Storage**: Service Worker for offline caching
- **No backend required**: Everything runs locally on your device

## Files Included

```
japanese-practice/
├── index.html          # Main HTML structure
├── styles.css          # Japanese-inspired styling
├── app.js             # App logic and speech recognition
├── phrases.js         # Database of Japanese phrases
├── manifest.json      # PWA configuration
├── sw.js              # Service worker for offline support
├── create-icons.html  # Icon generator tool
├── icon-192.png       # Small app icon (generate this)
├── icon-512.png       # Large app icon (generate this)
└── README.md          # This file
```

## Customization

### Add New Phrases

Edit `phrases.js` and add new phrases to any scenario:

```javascript
{
    japanese: 'あなたの日本語フレーズ',
    romaji: 'Anata no nihongo furēzu',
    english: 'Your English translation'
}
```

### Add New Scenarios

In `phrases.js`, add a new scenario object following the existing pattern.

### Change Colors/Styling

Edit `styles.css` - all colors are defined in the `:root` section at the top.

## Troubleshooting

**Voice recognition not working:**
- Make sure you granted microphone permission
- Try using Safari on iOS (best support)
- Check that your device has internet connection (first time only)

**App not installing:**
- Make sure you're using HTTPS (required for PWA)
- GitHub Pages and Netlify automatically provide HTTPS
- Local testing with `http://localhost` is okay for development

**Phrases not appearing:**
- Check browser console for errors (press F12)
- Make sure all files are in the same directory

## Privacy

- No data is collected or sent to any server
- Voice recordings are processed locally on your device
- No account or login required
- 100% private

## License

Free to use and modify for personal learning.

## Future Enhancements

Possible additions:
- More scenarios (restaurant, hotel, directions, etc.)
- Difficulty levels
- Progress tracking
- Spaced repetition system
- More sophisticated pronunciation comparison
- Audio playback of correct pronunciation

---

Enjoy practicing Japanese! 頑張ってください！(Ganbatte kudasai!)
