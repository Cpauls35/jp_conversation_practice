// App state
let currentScenario = null;
let currentPhrase = null;
let isRecording = false;
let recognition = null;
let deferredPrompt = null;

// DOM elements
const scenarioScreen = document.getElementById('scenarioScreen');
const practiceScreen = document.getElementById('practiceScreen');
const practiceTitle = document.getElementById('practiceTitle');
const phraseList = document.getElementById('phraseList');
const backButton = document.getElementById('backButton');
const recordButton = document.getElementById('recordButton');
const recordingStatus = document.getElementById('recordingStatus');
const resultDisplay = document.getElementById('resultDisplay');
const phraseJp = document.getElementById('phraseJp');
const phraseRomaji = document.getElementById('phraseRomaji');
const phraseEn = document.getElementById('phraseEn');
const installPrompt = document.getElementById('installPrompt');
const installButton = document.getElementById('installButton');

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    initializeScenarioButtons();
    initializeSpeechRecognition();
    initializePWA();
});

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
    
    if (screenName === 'scenario') {
        scenarioScreen.classList.add('active');
    } else if (screenName === 'practice') {
        practiceScreen.classList.add('active');
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
    resultDisplay.className = `result-display ${type}`;
    resultDisplay.innerHTML = `
        <div class="result-heard">You said: ${heard}</div>
        <div class="result-message">${message}</div>
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
