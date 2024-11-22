const timerElement = document.getElementById('timer');
const failButton = document.getElementById('failButton');
const resultElement = document.getElementById('result');
const ransomwareBox = document.querySelector('.ransomware-box');

// Set initial countdown time (in seconds)
let countdown = 10; 
let timerInterval;

// Update the timer display
function updateTimer() {
    const minutes = Math.floor(countdown / 60);
    const seconds = countdown % 60;

    timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds
        .toString()
        .padStart(2, '0')}`;

    // Check if time is up
    if (countdown > 0) {
        countdown--;
    } else {
        clearInterval(timerInterval); // Stop the timer
        triggerPass(); // Trigger the "PASS" message
    }
}

// Trigger "FAIL" when the button is clicked
failButton.addEventListener('click', () => {
    clearInterval(timerInterval); // Stop the timer
    resultElement.textContent = "FAIL";
    resultElement.style.color = "red";
    failButton.disabled = true; // Disable the button
});

// Trigger "PASS" when the timer runs out
function triggerPass() {
    resultElement.textContent = "You dodged it!";
    resultElement.style.color = "green";
    failButton.disabled = true; // Disable the button when time runs out
}

// Start the timer
timerInterval = setInterval(updateTimer, 1000);
