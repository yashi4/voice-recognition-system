// Check if the browser supports Speech Recognition
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
const startButton = document.getElementById('start-button');
const outputText = document.getElementById('output-text');

// Start the speech recognition process
startButton.addEventListener('click', () => {
    recognition.start();
    outputText.textContent = "Listening...";
});

// Process the recognized speech
recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    outputText.textContent = `Recognized Text: ${transcript}`;
};

// Handle errors
recognition.onerror = (event) => {
    outputText.textContent = `Error: ${event.error}`;
};

// Stop recognition when done
recognition.onend = () => {
    outputText.textContent += " (Stopped Listening)";
};
