# How to Update Your Git Repository

## What's New in This Version

✅ **Role-Play Mode** - Interactive dialogues with shopkeeper responses
✅ **Audio Playback** - Hear Japanese pronunciation with text-to-speech
✅ **Easy/Hard Difficulty** - Text visible vs audio-only challenge
✅ **Knowledge Base** - 12 topics explaining vocabulary and grammar
✅ **Flashcard System** - 79 cards across 8 decks with smart review
✅ **3 New Scenarios** - Numbers, Train Station, Directions
✅ **Pronunciation Guides** - Phonetic breakdowns in feedback

**Total**: 73 phrases, 79 flashcards, 12 knowledge topics

---

## Files to Update

### Files That Changed (Replace These):
1. ✅ `index.html` - Added mode tabs, difficulty toggle, audio controls
2. ✅ `styles.css` - New styling for all features
3. ✅ `app.js` - Added audio, difficulty modes, knowledge, flashcards
4. ✅ `phrases.js` - Added role-play, new scenarios, pronunciation
5. ✅ `README.md` - Complete updated documentation

### New Files (Add These):
6. ✅ `knowledge.js` - Complete knowledge base
7. ✅ `flashcards.js` - All flashcard decks

### Unchanged Files (Keep As-Is):
- `manifest.json`
- `sw.js`
- `create-icons.html`
- `icon-192.png` & `icon-512.png` (if you created them)

---

## Option 1: GitHub Web Interface (Easiest)

### For Changed Files:
1. Go to your repository on GitHub
2. Click file name (e.g., `index.html`)
3. Click pencil icon (Edit)
4. Select all → Delete
5. Copy content from new file
6. Paste into editor
7. Scroll down → "Commit changes"
8. Repeat for: `styles.css`, `app.js`, `phrases.js`, `README.md`

### For New Files:
1. In your repository, click "Add file" → "Create new file"
2. Type filename: `knowledge.js`
3. Paste content from downloaded file
4. Commit
5. Repeat for `flashcards.js`

---

## Option 2: Using Git Desktop/Command Line

### Step 1: Backup Your Current Version
```bash
# Navigate to your repo
cd path/to/japanese-practice

# Create backup branch (optional but recommended)
git checkout -b backup-before-update
git push origin backup-before-update

# Return to main
git checkout main
```

### Step 2: Replace Files
Download and extract `japanese-practice.zip`, then:

**On Windows (VSCode integrated terminal):**
```bash
# Copy all files from downloaded folder to your repo folder
# This will overwrite existing files

# Or manually:
# - Delete old index.html, styles.css, app.js, phrases.js, README.md
# - Copy new versions from downloaded folder
# - Copy knowledge.js and flashcards.js
```

**On Mac/Linux:**
```bash
# From your repo folder:
cp /path/to/downloaded/files/*.html .
cp /path/to/downloaded/files/*.css .
cp /path/to/downloaded/files/*.js .
cp /path/to/downloaded/files/*.md .
```

### Step 3: Commit and Push
```bash
# Check what changed
git status

# Add all changes
git add .

# Commit with message
git commit -m "Added audio playback, difficulty modes, knowledge base, and flashcard system"

# Push to GitHub
git push origin main
```

### Step 4: Verify
- Wait 1-2 minutes for GitHub Pages to deploy
- Visit your URL
- Hard refresh (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
- Test new features!

---

## Option 3: Fresh Start (If Issues Arise)

If you encounter merge conflicts or issues:

```bash
# Completely replace repository contents
cd path/to/japanese-practice

# Remove everything except .git folder
rm -rf !(.|..|.git)  # Linux/Mac
# On Windows: manually delete all files except .git folder

# Copy all files from downloaded folder

# Force commit
git add -A
git commit -m "Major update: Audio, difficulty modes, knowledge, flashcards"
git push -f origin main
```

---

## Testing Checklist

After updating, test on your iPhone:

### Basic Functionality:
- [ ] App loads without errors
- [ ] Can see 3 mode tabs (Scenarios, Knowledge, Flashcards)
- [ ] Can switch between tabs

### Scenarios:
- [ ] Can select a scenario
- [ ] See role-play intro (Coffee, Ramen, Train, Directions, Shopping)
- [ ] Can toggle Easy/Hard difficulty
- [ ] Audio button works (click to hear phrase)
- [ ] Hard mode blurs text and auto-plays audio
- [ ] Voice recognition still works

### Knowledge:
- [ ] Can click a knowledge topic
- [ ] See detailed explanations
- [ ] Back button returns to list

### Flashcards:
- [ ] Can select a deck
- [ ] Cards flip when tapped
- [ ] Correct/Incorrect buttons work
- [ ] See summary at end
- [ ] Review incorrect cards works

---

## Troubleshooting

### "App looks the same after update"
**Solution**: Hard refresh on iPhone
- In Safari, hold the reload button
- Select "Request Desktop Website"
- Reload again
- Or: Delete app from home screen and re-add

### "JavaScript errors in console"
**Solution**: Make sure ALL files were updated
- Check that you have `knowledge.js` and `flashcards.js`
- Verify all 7 JavaScript files are present
- Clear browser cache

### "Audio doesn't work"
**Solution**: 
- Check device volume
- Disable silent mode
- Grant microphone permission (might need to reload)
- Try toggling difficulty modes

### "Hard mode doesn't blur text"
**Solution**:
- Make sure `styles.css` was fully replaced
- Hard refresh browser
- Check that "Hard" button highlights in red

### "Flashcards don't show"
**Solution**:
- Verify `flashcards.js` was added
- Check browser console for errors
- Make sure file is in same folder as `index.html`

---

## Quick Git Command Reference

```bash
# See what changed
git status

# See differences
git diff filename.html

# Add specific file
git add index.html

# Add all changes
git add .

# Commit
git commit -m "Your message here"

# Push to GitHub
git push origin main

# Undo local changes (before commit)
git checkout -- filename.html

# View commit history
git log --oneline
```

---

## Need Help?

If you get stuck:

1. **Check browser console** (F12) for errors
2. **Verify all 10 files** are in your repo
3. **Hard refresh** your deployed site
4. **Try incognito mode** to rule out cache issues
5. **Check GitHub Pages** is still enabled in settings

---

## Summary

**Simple version:**
1. Download `japanese-practice.zip`
2. Extract files
3. Replace 5 files: `index.html`, `styles.css`, `app.js`, `phrases.js`, `README.md`
4. Add 2 files: `knowledge.js`, `flashcards.js`
5. Git commit and push
6. Wait 2 minutes
7. Test on iPhone!

**That's it!** 🎉

頑張ってください！
