# Japanese Practice PWA - Deployment Checklist ✅

## Files Included (All Present ✓)

- ✅ index.html - Main app page
- ✅ styles.css - Styling and design
- ✅ app.js - Application logic and speech recognition
- ✅ phrases.js - Database of Japanese phrases (30+ phrases)
- ✅ manifest.json - PWA configuration
- ✅ sw.js - Service worker for offline support
- ✅ create-icons.html - Tool to generate app icons
- ✅ README.md - Setup instructions

## Verification Complete ✓

✅ Speech recognition configured for Japanese (ja-JP)
✅ All 4 scenarios loaded (coffee, ramen, shopping, asking)
✅ Phrases include: Japanese, Romaji, and English
✅ PWA manifest configured correctly
✅ Service worker ready for offline support
✅ All file references are correct

## Before You Deploy - Generate Icons

1. Open `create-icons.html` in your browser
2. Download both icons (192x192 and 512x512)
3. Save them as `icon-192.png` and `icon-512.png`
4. Add them to your folder with the other files

## Deployment Steps (GitHub Pages - Recommended)

### Step 1: Create GitHub Account
- Go to https://github.com
- Sign up for free account

### Step 2: Create Repository
- Click "New" or "+" icon → "New repository"
- Name it: `japanese-practice` (or anything you want)
- Make it Public
- Don't initialize with README (we already have one)
- Click "Create repository"

### Step 3: Upload Files
- On the repository page, click "uploading an existing file"
- Drag and drop ALL 10 files (8 from above + 2 icon files)
- Commit the upload

### Step 4: Enable GitHub Pages
- Go to Settings (gear icon)
- Scroll down to "Pages" in left sidebar
- Under "Source": 
  - Branch: main
  - Folder: / (root)
  - Click Save
- Wait 1-2 minutes for deployment

### Step 5: Get Your URL
- Still in Pages settings, you'll see:
  "Your site is live at https://username.github.io/japanese-practice"
- Copy this URL

### Step 6: Test on iPhone
- Open Safari on your iPhone
- Visit the URL
- Grant microphone permission when asked
- Test voice recognition
- Tap Share button (square with arrow)
- Tap "Add to Home Screen"
- Name it "Japanese Practice" or "日本語"
- Done! You now have an app icon on your home screen

## Testing Checklist

Once deployed, verify:
- [ ] App loads correctly
- [ ] All 4 scenarios appear
- [ ] Clicking a scenario shows phrases
- [ ] Selecting a phrase displays it in the practice area
- [ ] Microphone button is enabled after selecting phrase
- [ ] Speaking Japanese triggers recognition
- [ ] Results display with feedback
- [ ] App works offline (turn off WiFi and test)

## Troubleshooting

**Icons not showing:**
- Make sure you generated and uploaded icon-192.png and icon-512.png

**Microphone not working:**
- Check Safari settings: Settings → Safari → Microphone → Allow
- Try reloading the page
- Make sure you granted permission when prompted

**App not installing to home screen:**
- Must use Safari on iPhone (not Chrome)
- Must be HTTPS (GitHub Pages automatically uses HTTPS)

**Phrases not appearing:**
- Check browser console for errors (on computer)
- Make sure all files uploaded successfully

## Alternative Deployment: Netlify (Easier but less control)

1. Go to https://netlify.com
2. Sign up for free
3. Drag and drop your entire folder
4. Get instant URL like: https://random-name.netlify.app
5. Use on iPhone same as above

## Need Help?

If something doesn't work:
1. Check all files uploaded correctly
2. Wait 2-3 minutes after enabling GitHub Pages
3. Try hard refresh on iPhone (hold reload button)
4. Check README.md for detailed troubleshooting

---

**Ready to deploy?** Follow the steps above and you'll be practicing Japanese in minutes!

頑張って！ (Good luck!)
