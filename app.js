// App state
let currentScenario = null;
let currentPhrase = null;
let isRecording = false;
let recognition = null;
let deferredPrompt = null;
let rolePlayMode = false;

// DOM elements - will be initialized after DOM loads
let scenarioScreen, practiceScreen, practiceTitle, phraseList, backButton;
let recordButton, recordingStatus, resultDisplay, phraseJp, phraseRomaji, phraseEn;
let installPrompt, installButton, rolePlayIntro;

// Initialize DOM element references
function initializeDOMElements() {
    scenarioScreen = document.getElementById('scenarioScreen');
    practiceScreen = document.getElementById('practiceScreen');
    practiceTitle = document.getElementById('practiceTitle');
    phraseList = document.getElementById('phraseList');
    backButton = document.getElementById('backButton');
    recordButton = document.getElementById('recordButton');
    recordingStatus = document.getElementById('recordingStatus');
    resultDisplay = document.getElementById('resultDisplay');
    phraseJp = document.getElementById('phraseJp');
    phraseRomaji = document.getElementById('phraseRomaji');
    phraseEn = document.getElementById('phraseEn');
    installPrompt = document.getElementById('installPrompt');
    installButton = document.getElementById('installButton');
    rolePlayIntro = document.getElementById('rolePlayIntro');
    
    console.log('DOM elements initialized');
}

// Scenario selection
function initializeScenarioButtons() {
    const scenarioCards = document.querySelectorAll('.scenario-card');
    scenarioCards.forEach(card => {
        card.addEventListener('click', () => {
            const scenario = card.dataset.scenario;
            loadScenario(scenario);
        });
    });
    
    backButton.addEventListener('click', () => {
        showScreen('scenario');
        currentScenario = null;
        currentPhrase = null;
        rolePlayMode = false;
        recordButton.disabled = true;
    });
}

// Load scenario
function loadScenario(scenario) {
    currentScenario = scenario;
    const scenarioData = phrases[scenario];
    
    if (!scenarioData) {
        console.error('Scenario not found:', scenario);
        return;
    }
    
    // Update title
    practiceTitle.textContent = scenarioData.title;
    
    // Check if role-play mode
    rolePlayMode = scenarioData.rolePlay || false;
    
    // Show role-play intro if applicable
    if (rolePlayMode && scenarioData.intro) {
        showRolePlayIntro(scenarioData.intro);
    } else {
        rolePlayIntro.style.display = 'none';
    }
    
    // Build phrase list
    phraseList.innerHTML = '';
    scenarioData.phrases.forEach((phrase, index) => {
        const phraseItem = document.createElement('div');
        phraseItem.className = 'phrase-item';
        phraseItem.innerHTML = `
            <div class="phrase-item-jp">${phrase.japanese}</div>
            <div class="phrase-item-romaji">${phrase.romaji}</div>
            <div class="phrase-item-en">${phrase.english}</div>
        `;
        phraseItem.addEventListener('click', () => selectPhrase(phrase, phraseItem));
        phraseList.appendChild(phraseItem);
    });
    
    // Reset practice area
    phraseJp.textContent = 'Select a phrase to practice';
    phraseRomaji.textContent = '';
    phraseEn.textContent = '';
    resultDisplay.innerHTML = '';
    resultDisplay.className = 'result-display';
    
    showScreen('practice');
}

// Show role-play introduction
function showRolePlayIntro(intro) {
    rolePlayIntro.style.display = 'block';
    
    let introHTML = '<div class="role-play-header">🎭 Role Play Scenario</div>';
    
    if (intro.shopkeeper) {
        introHTML += `
            <div class="role-play-dialogue">
                <div class="dialogue-label">Staff says:</div>
                <div class="dialogue-jp">${intro.shopkeeper.japanese}</div>
                <div class="dialogue-romaji">${intro.shopkeeper.romaji}</div>
                <div class="dialogue-en">"${intro.shopkeeper.english}"</div>
            </div>
        `;
    }
    
    if (intro.userResponse) {
        introHTML += `
            <div class="role-play-dialogue user-response">
                <div class="dialogue-label">You can respond:</div>
                <div class="dialogue-jp">${intro.userResponse.japanese}</div>
                <div class="dialogue-romaji">${intro.userResponse.romaji}</div>
                <div class="dialogue-en">"${intro.userResponse.english}"</div>
            </div>
        `;
    }
    
    introHTML += '<div class="role-play-instruction">👇 Choose a phrase below to practice your response</div>';
    
    rolePlayIntro.innerHTML = introHTML;
}

// Select phrase to practice
function selectPhrase(phrase, element) {
    currentPhrase = phrase;
    
    // Update UI
    document.querySelectorAll('.phrase-item').forEach(item => {
        item.classList.remove('active');
    });
    element.classList.add('active');
    
    // Update current phrase display
    phraseJp.textContent = phrase.japanese;
    phraseRomaji.textContent = phrase.romaji;
    phraseEn.textContent = phrase.english;
    
    // Clear previous results
    resultDisplay.innerHTML = '';
    resultDisplay.className = 'result-display';
    
    // Enable recording
    recordButton.disabled = false;
}

// Screen navigation
function showScreen(screenName) {
    scenarioScreen.classList.remove('active');
    practiceScreen.classList.remove('active');

    // Get knowledge and flashcard screens
    const knowledgeScreen = document.getElementById('knowledgeScreen');
    const flashcardScreen = document.getElementById('flashcardScreen');

    if (knowledgeScreen) knowledgeScreen.classList.remove('active');
    if (flashcardScreen) flashcardScreen.classList.remove('active');

    if (screenName === 'scenario') {
        scenarioScreen.classList.add('active');
    } else if (screenName === 'practice') {
        practiceScreen.classList.add('active');
    } else if (screenName === 'knowledge' && knowledgeScreen) {
        knowledgeScreen.classList.add('active');
    } else if (screenName === 'flashcard' && flashcardScreen) {
        flashcardScreen.classList.add('active');
    }
}

// Speech Recognition
function initializeSpeechRecognition() {
    // Check for browser support
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
        recordingStatus.textContent = 'Speech recognition not supported in this browser';
        recordButton.disabled = true;
        return;
    }
    
    // Create recognition instance
    recognition = new SpeechRecognition();
    recognition.lang = 'ja-JP';
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    
    // Handle results
    recognition.onresult = (event) => {
        const result = event.results[0][0];
        const transcript = result.transcript;
        const confidence = result.confidence;
        
        handleRecognitionResult(transcript, confidence);
    };
    
    // Handle errors
    recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        stopRecording();
        
        let errorMessage = 'Error: ';
        switch(event.error) {
            case 'no-speech':
                errorMessage += 'No speech detected. Please try again.';
                break;
            case 'audio-capture':
                errorMessage += 'Microphone not accessible.';
                break;
            case 'not-allowed':
                errorMessage += 'Microphone permission denied.';
                break;
            default:
                errorMessage += event.error;
        }
        
        recordingStatus.textContent = errorMessage;
        setTimeout(() => {
            recordingStatus.textContent = '';
        }, 3000);
    };
    
    // Handle end
    recognition.onend = () => {
        stopRecording();
    };
    
    // Record button handler
    recordButton.addEventListener('click', () => {
        if (!currentPhrase) return;
        
        if (isRecording) {
            recognition.stop();
        } else {
            startRecording();
        }
    });
}

// Start recording
function startRecording() {
    try {
        recognition.start();
        isRecording = true;
        recordButton.classList.add('recording');
        recordButton.querySelector('.record-text').textContent = 'Listening...';
        recordingStatus.textContent = '🎤 Speak now...';
        resultDisplay.innerHTML = '';
        resultDisplay.className = 'result-display';
    } catch (error) {
        console.error('Error starting recognition:', error);
        recordingStatus.textContent = 'Error starting recognition';
    }
}

// Stop recording
function stopRecording() {
    isRecording = false;
    recordButton.classList.remove('recording');
    recordButton.querySelector('.record-text').textContent = 'Tap to Speak';
    recordingStatus.textContent = '';
}

// Handle recognition result
function handleRecognitionResult(transcript, confidence) {
    if (!currentPhrase) return;
    
    const expected = currentPhrase.japanese;
    const heard = transcript;
    
    // Simple comparison (you could make this more sophisticated)
    const match = compareJapanese(expected, heard);
    
    // Display result
    if (match >= 0.8) {
        showResult('success', heard, 'Great job! 素晴らしい！', confidence);
    } else if (match >= 0.5) {
        showResult('success', heard, 'Good try! Close enough. もう少し！', confidence);
    } else {
        showResult('error', heard, `Keep practicing! Expected: ${expected}`, confidence);
    }
}

// Compare Japanese text (simplified)
function compareJapanese(expected, heard) {
    // Remove spaces and normalize
    const normalizeText = (text) => {
        return text.replace(/\s+/g, '').toLowerCase();
    };
    
    const exp = normalizeText(expected);
    const hrd = normalizeText(heard);
    
    // Exact match
    if (exp === hrd) return 1.0;
    
    // Calculate similarity (simple character overlap)
    let matches = 0;
    const maxLen = Math.max(exp.length, hrd.length);
    
    for (let i = 0; i < Math.min(exp.length, hrd.length); i++) {
        if (exp[i] === hrd[i]) matches++;
    }
    
    return matches / maxLen;
}

// Show result
function showResult(type, heard, message, confidence) {
    const expectedPhrase = currentPhrase;
    
    resultDisplay.className = `result-display ${type}`;
    resultDisplay.innerHTML = `
        <div class="result-heard">You said: ${heard}</div>
        <div class="result-message">${message}</div>
        ${type === 'error' || confidence < 0.8 ? `
            <div class="pronunciation-help" style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid rgba(0,0,0,0.1);">
                <div style="font-weight: 700; margin-bottom: 0.5rem;">📚 Target Phrase:</div>
                <div style="font-family: var(--font-jp); font-size: 1.1rem; margin-bottom: 0.5rem;">${expectedPhrase.japanese}</div>
                <div style="color: var(--sage); margin-bottom: 0.5rem;">Romaji: ${expectedPhrase.romaji}</div>
                <div style="font-size: 0.85rem; font-style: italic; color: var(--indigo);">🗣️ Pronunciation: ${expectedPhrase.pronunciation || 'Listen carefully to the sounds and practice slowly'}</div>
            </div>
        ` : ''}
        <div class="result-confidence" style="margin-top: 0.5rem; font-size: 0.85rem; opacity: 0.7;">
            Confidence: ${(confidence * 100).toFixed(0)}%
        </div>
    `;
}

// PWA Installation
function initializePWA() {
    // Register service worker
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js')
            .then(registration => {
                console.log('Service Worker registered:', registration);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    }
    
    // Handle install prompt
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        installPrompt.style.display = 'flex';
    });
    
    installButton.addEventListener('click', async () => {
        if (!deferredPrompt) return;
        
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        
        if (outcome === 'accepted') {
            installPrompt.style.display = 'none';
        }
        
        deferredPrompt = null;
    });
    
    // Hide prompt if already installed
    window.addEventListener('appinstalled', () => {
        installPrompt.style.display = 'none';
        deferredPrompt = null;
    });
}

// ============================================
// KNOWLEDGE AND FLASHCARD FUNCTIONALITY
// ============================================

// Additional state for new features
let currentMode = 'scenarios';
let currentKnowledgeCategory = null;
let currentFlashcardSet = null;
let flashcardIndex = 0;
let flashcardDeck = [];
let incorrectCards = [];
let correctCount = 0;
let isFlipped = false;

// Initialize knowledge and flashcard features
function initializeKnowledgeAndFlashcards() {
    console.log('Initializing knowledge and flashcards...');
    
    const modeTabs = document.querySelectorAll('.mode-tab');
    const scenariosContent = document.getElementById('scenariosContent');
    const knowledgeContent = document.getElementById('knowledgeContent');
    const flashcardsContent = document.getElementById('flashcardsContent');
    const knowledgeGrid = document.getElementById('knowledgeGrid');
    const flashcardSets = document.getElementById('flashcardSets');
    const knowledgeScreen = document.getElementById('knowledgeScreen');
    const flashcardScreen = document.getElementById('flashcardScreen');
    const knowledgeBackButton = document.getElementById('knowledgeBackButton');
    const flashcardBackButton = document.getElementById('flashcardBackButton');
    
    if (!modeTabs || modeTabs.length === 0) {
        console.error('Mode tabs not found');
        return;
    }
    
    if (!knowledgeGrid || !flashcardSets) {
        console.error('Knowledge or flashcard containers not found');
        return;
    }
    
    // Mode tab switching
    modeTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const mode = tab.dataset.mode;
            console.log('Mode tab clicked:', mode);
            switchMode(mode);
        });
    });
    
    // Initialize knowledge grid
    populateKnowledgeGrid();
    
    // Initialize flashcard sets
    populateFlashcardSets();
    
    // Back buttons
    if (knowledgeBackButton) {
        knowledgeBackButton.addEventListener('click', () => {
            showScreen('scenario');
            switchMode('knowledge');
        });
    }
    
    if (flashcardBackButton) {
        flashcardBackButton.addEventListener('click', () => {
            showScreen('scenario');
            switchMode('flashcards');
        });
    }
    
    console.log('Knowledge and flashcards initialized');
}

// Switch between modes
function switchMode(mode) {
    currentMode = mode;
    
    console.log('Switching to mode:', mode);
    
    // Get elements
    const modeTabs = document.querySelectorAll('.mode-tab');
    const scenariosContent = document.getElementById('scenariosContent');
    const knowledgeContent = document.getElementById('knowledgeContent');
    const flashcardsContent = document.getElementById('flashcardsContent');
    
    // Update tabs
    modeTabs.forEach(tab => {
        tab.classList.toggle('active', tab.dataset.mode === mode);
    });
    
    // Update content
    if (scenariosContent) scenariosContent.classList.toggle('active', mode === 'scenarios');
    if (knowledgeContent) knowledgeContent.classList.toggle('active', mode === 'knowledge');
    if (flashcardsContent) flashcardsContent.classList.toggle('active', mode === 'flashcards');
    
    console.log('Mode switched to:', mode);
}

// ============================================
// KNOWLEDGE SECTION
// ============================================

function populateKnowledgeGrid() {
    const knowledgeGrid = document.getElementById('knowledgeGrid');
    if (!knowledgeGrid) {
        console.error('Knowledge grid not found');
        return;
    }
    
    knowledgeGrid.innerHTML = '';
    
    Object.keys(knowledge).forEach(categoryKey => {
        const category = knowledge[categoryKey];
        const card = document.createElement('div');
        card.className = 'knowledge-card';
        card.innerHTML = `
            <div class="knowledge-card-icon">${category.icon}</div>
            <div class="knowledge-card-title">${category.title}</div>
        `;
        card.addEventListener('click', () => showKnowledgeDetail(categoryKey));
        knowledgeGrid.appendChild(card);
    });
}

function showKnowledgeDetail(categoryKey) {
    currentKnowledgeCategory = categoryKey;
    const category = knowledge[categoryKey];
    const detail = document.getElementById('knowledgeDetail');
    
    let html = `<h2 class="knowledge-detail-title">${category.title}</h2>`;
    
    category.items.forEach(item => {
        html += `
            <div class="knowledge-item">
                <div class="knowledge-item-word">${item.word}</div>
                ${item.romaji ? `<div class="knowledge-item-romaji">${item.romaji}</div>` : ''}
                ${item.explanation ? `<div class="knowledge-item-explanation">${item.explanation}</div>` : ''}
                
                ${item.details ? item.details.map(detail => `
                    <div class="knowledge-detail-section">
                        <div class="knowledge-detail-term">${detail.term}</div>
                        ${detail.usage ? `<div class="knowledge-detail-usage"><strong>Usage:</strong> ${detail.usage}</div>` : ''}
                        ${detail.formality ? `<div class="knowledge-detail-formality"><strong>Formality:</strong> ${detail.formality}</div>` : ''}
                        ${detail.meaning ? `<div class="knowledge-detail-formality"><strong>Meaning:</strong> ${detail.meaning}</div>` : ''}
                        ${detail.pattern ? `<div class="knowledge-detail-formality"><strong>Pattern:</strong> ${detail.pattern}</div>` : ''}
                        ${detail.counter ? `<div class="knowledge-detail-formality"><strong>Used for:</strong> ${detail.counter}</div>` : ''}
                        ${detail.note ? `<div class="knowledge-detail-formality"><em>Note: ${detail.note}</em></div>` : ''}
                        
                        ${detail.examples ? `
                            <div class="knowledge-detail-examples">
                                ${detail.examples.map(ex => `<div class="knowledge-example">${ex}</div>`).join('')}
                            </div>
                        ` : ''}
                        
                        ${detail.numbers ? `
                            <div class="knowledge-detail-examples">
                                ${detail.numbers.map(num => `<div class="knowledge-example">${num}</div>`).join('')}
                            </div>
                        ` : ''}
                        
                        ${detail.sizes ? `
                            <div class="knowledge-detail-examples">
                                ${detail.sizes.map(size => `<div class="knowledge-example">${size}</div>`).join('')}
                            </div>
                        ` : ''}
                        
                        ${detail.words ? `
                            <div class="knowledge-detail-examples">
                                ${detail.words.map(word => `<div class="knowledge-example">${word}</div>`).join('')}
                            </div>
                        ` : ''}
                    </div>
                `).join('') : ''}
                
                ${item.tip ? `<div class="knowledge-tip">${item.tip}</div>` : ''}
            </div>
        `;
    });
    
    detail.innerHTML = html;
    showScreen('knowledge');
}

// ============================================
// FLASHCARD SECTION
// ============================================

function populateFlashcardSets() {
    const flashcardSets = document.getElementById('flashcardSets');
    if (!flashcardSets) {
        console.error('Flashcard sets container not found');
        return;
    }
    
    flashcardSets.innerHTML = '';
    
    Object.keys(flashcards).forEach(setKey => {
        const set = flashcards[setKey];
        const card = document.createElement('div');
        card.className = 'flashcard-set-card';
        card.innerHTML = `
            <div class="flashcard-set-title">${set.title}</div>
            <div class="flashcard-set-count">${set.cards.length} cards</div>
        `;
        card.addEventListener('click', () => startFlashcardSet(setKey));
        flashcardSets.appendChild(card);
    });
}

function startFlashcardSet(setKey) {
    currentFlashcardSet = setKey;
    const set = flashcards[setKey];
    
    // Initialize deck (shuffle)
    flashcardDeck = [...set.cards].sort(() => Math.random() - 0.5);
    flashcardIndex = 0;
    incorrectCards = [];
    correctCount = 0;
    isFlipped = false;
    
    // Update UI
    document.getElementById('flashcardTitle').textContent = set.title;
    document.getElementById('flashcardSummary').style.display = 'none';
    document.getElementById('flashcardControls').style.display = 'none';
    
    // Setup event listeners
    setupFlashcardListeners();
    
    // Show first card
    showCurrentCard();
    showScreen('flashcard');
}

function setupFlashcardListeners() {
    const flashcard = document.getElementById('flashcard');
    const flipButton = document.getElementById('flipButton');
    const incorrectButton = document.getElementById('incorrectButton');
    const correctButton = document.getElementById('correctButton');
    const reviewIncorrect = document.getElementById('reviewIncorrect');
    const restartSet = document.getElementById('restartSet');
    const backToSets = document.getElementById('backToSets');
    
    // Remove old listeners by cloning
    const newFlashcard = flashcard.cloneNode(true);
    flashcard.parentNode.replaceChild(newFlashcard, flashcard);
    const newFlipButton = flipButton.cloneNode(true);
    flipButton.parentNode.replaceChild(newFlipButton, flipButton);
    
    // Add new listeners
    newFlashcard.addEventListener('click', flipCard);
    newFlipButton.addEventListener('click', flipCard);
    incorrectButton.onclick = () => markCard(false);
    correctButton.onclick = () => markCard(true);
    reviewIncorrect.onclick = reviewIncorrectCards;
    restartSet.onclick = () => startFlashcardSet(currentFlashcardSet);
    backToSets.onclick = () => {
        showScreen('scenario');
        switchMode('flashcards');
    };
}

function showCurrentCard() {
    if (flashcardIndex >= flashcardDeck.length) {
        showSummary();
        return;
    }
    
    const card = flashcardDeck[flashcardIndex];
    const flashcardElement = document.getElementById('flashcard');
    
    // Reset flip
    flashcardElement.classList.remove('flipped');
    isFlipped = false;
    
    // Update content
    document.getElementById('cardFront').textContent = card.front;
    document.getElementById('cardJapanese').textContent = card.back;
    document.getElementById('cardRomaji').textContent = card.romaji;
    
    // Update progress
    document.getElementById('flashcardProgress').textContent = 
        `Card ${flashcardIndex + 1} of ${flashcardDeck.length}`;
    
    // Hide controls until flipped
    document.getElementById('flashcardControls').style.display = 'none';
}

function flipCard() {
    const flashcardElement = document.getElementById('flashcard');
    flashcardElement.classList.toggle('flipped');
    isFlipped = !isFlipped;
    
    // Show controls after flip
    if (isFlipped) {
        document.getElementById('flashcardControls').style.display = 'flex';
    }
}

function markCard(correct) {
    const card = flashcardDeck[flashcardIndex];
    
    if (correct) {
        correctCount++;
    } else {
        incorrectCards.push(card);
    }
    
    // Move to next card
    flashcardIndex++;
    showCurrentCard();
}

function showSummary() {
    const summary = document.getElementById('flashcardSummary');
    const stats = document.getElementById('summaryStats');
    
    const total = flashcardDeck.length;
    const incorrect = incorrectCards.length;
    const correct = total - incorrect;
    
    stats.innerHTML = `
        <div class="stat-item stat-correct">✅ Correct: ${correct}/${total}</div>
        <div class="stat-item stat-incorrect">❌ Incorrect: ${incorrect}/${total}</div>
    `;
    
    summary.style.display = 'block';
    document.getElementById('flashcard').style.display = 'none';
    document.getElementById('flipButton').style.display = 'none';
    
    // Hide review button if no incorrect cards
    document.getElementById('reviewIncorrect').style.display = 
        incorrectCards.length > 0 ? 'block' : 'none';
}

function reviewIncorrectCards() {
    if (incorrectCards.length === 0) return;
    
    // Reset with only incorrect cards
    flashcardDeck = [...incorrectCards];
    flashcardIndex = 0;
    incorrectCards = [];
    correctCount = 0;
    
    // Show flashcard again
    document.getElementById('flashcard').style.display = 'block';
    document.getElementById('flipButton').style.display = 'block';
    document.getElementById('flashcardSummary').style.display = 'none';
    
    showCurrentCard();
}

// Call initialization after DOM loaded

// ============================================
// AUDIO AND DIFFICULTY MODE FUNCTIONALITY
// ============================================

let currentDifficulty = 'easy'; // 'easy' or 'hard'
let speechSynthesis = window.speechSynthesis;
let currentUtterance = null;
let japaneseVoice = null;

// Initialize audio and difficulty features
function initializeAudioAndDifficulty() {
    const easyBtn = document.getElementById('easyMode');
    const hardBtn = document.getElementById('hardMode');
    const audioPlayButton = document.getElementById('audioPlayButton');
    const audioRepeatButton = document.getElementById('audioRepeatButton');
    
    // Check if elements exist
    if (!easyBtn || !hardBtn) {
        console.error('Difficulty buttons not found');
        return;
    }
    
    if (!audioPlayButton || !audioRepeatButton) {
        console.error('Audio buttons not found');
        return;
    }
    
    console.log('Initializing audio and difficulty...');
    
    // Load Japanese voice
    loadJapaneseVoice();
    
    // Difficulty toggle
    easyBtn.addEventListener('click', () => {
        console.log('Easy mode clicked');
        setDifficulty('easy');
    });
    hardBtn.addEventListener('click', () => {
        console.log('Hard mode clicked');
        setDifficulty('hard');
    });
    
    // Audio playback
    audioPlayButton.addEventListener('click', () => playCurrentPhrase());
    audioRepeatButton.addEventListener('click', () => playCurrentPhrase());
    
    console.log('Audio and difficulty initialized');
}

// Load Japanese voice for text-to-speech
function loadJapaneseVoice() {
    // Get available voices
    function setVoice() {
        const voices = speechSynthesis.getVoices();
        // Try to find Japanese voice
        japaneseVoice = voices.find(voice => voice.lang === 'ja-JP') || 
                       voices.find(voice => voice.lang.startsWith('ja')) ||
                       voices[0]; // Fallback to first available voice
        
        console.log('Using voice:', japaneseVoice?.name || 'Default');
    }
    
    // Voices might load asynchronously
    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = setVoice;
    }
    setVoice();
}

// Set difficulty mode
function setDifficulty(mode) {
    currentDifficulty = mode;
    
    const easyBtn = document.getElementById('easyMode');
    const hardBtn = document.getElementById('hardMode');
    const practiceArea = document.querySelector('.practice-area');
    const audioRepeatButton = document.getElementById('audioRepeatButton');
    
    // Update button states
    easyBtn.classList.toggle('active', mode === 'easy');
    hardBtn.classList.toggle('active', mode === 'hard');
    
    // Update practice area
    if (mode === 'hard') {
        practiceArea.classList.add('hard-mode');
        audioRepeatButton.style.display = 'block';
        // Auto-play current phrase in hard mode
        if (currentPhrase) {
            setTimeout(() => playCurrentPhrase(), 300);
        }
    } else {
        practiceArea.classList.remove('hard-mode');
        audioRepeatButton.style.display = 'none';
    }
}

// Play current phrase audio
function playCurrentPhrase() {
    if (!currentPhrase) return;
    
    // Stop any currently playing audio
    speechSynthesis.cancel();
    
    // Create new utterance
    currentUtterance = new SpeechSynthesisUtterance(currentPhrase.japanese);
    
    // Set voice and properties
    if (japaneseVoice) {
        currentUtterance.voice = japaneseVoice;
    }
    currentUtterance.lang = 'ja-JP';
    currentUtterance.rate = 0.8; // Slightly slower for learning
    currentUtterance.pitch = 1.0;
    currentUtterance.volume = 1.0;
    
    const audioPlayButton = document.getElementById('audioPlayButton');
    
    // Visual feedback
    audioPlayButton.classList.add('playing');
    audioPlayButton.querySelector('.audio-text').textContent = 'Playing...';
    
    // Event handlers
    currentUtterance.onend = () => {
        audioPlayButton.classList.remove('playing');
        audioPlayButton.querySelector('.audio-text').textContent = 'Play Audio';
    };
    
    currentUtterance.onerror = (event) => {
        console.error('Speech synthesis error:', event);
        audioPlayButton.classList.remove('playing');
        audioPlayButton.querySelector('.audio-text').textContent = 'Play Audio';
    };
    
    // Speak
    speechSynthesis.speak(currentUtterance);
}

// Update selectPhrase to enable audio and handle hard mode
const originalSelectPhrase = selectPhrase;
selectPhrase = function(phrase, element) {
    // Call original function
    originalSelectPhrase.call(this, phrase, element);
    
    // Enable audio button
    document.getElementById('audioPlayButton').disabled = false;
    document.getElementById('audioRepeatButton').disabled = false;
    
    // Auto-play in hard mode
    if (currentDifficulty === 'hard') {
        setTimeout(() => playCurrentPhrase(), 500);
    }
};

// ============================================
// CONSOLIDATED INITIALIZATION
// ============================================

// Single DOMContentLoaded listener to initialize everything
document.addEventListener('DOMContentLoaded', () => {
    console.log('Initializing app...');
    
    // Initialize DOM element references FIRST
    initializeDOMElements();
    
    // Initialize all features
    initializeScenarioButtons();
    initializeSpeechRecognition();
    initializeKnowledgeAndFlashcards();
    initializeAudioAndDifficulty();
    initializePWA();
    
    console.log('App initialized successfully');
});

// Clean up on page unload
window.addEventListener('beforeunload', () => {
    if (speechSynthesis) {
        speechSynthesis.cancel();
    }
});
