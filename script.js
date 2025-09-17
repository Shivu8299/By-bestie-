document.addEventListener('DOMContentLoaded', () => {
    // Get all the elements we need
    const proposalScreen = document.getElementById('proposal-screen');
    const celebrationScreen = document.getElementById('celebration-screen');
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const backgroundMusic = document.getElementById('background-music');

    // --- "YES" Button Logic ---
    yesBtn.addEventListener('click', () => {
        // Hide the proposal screen
        proposalScreen.style.display = 'none';
        
        // Show the celebration screen
        celebrationScreen.classList.remove('hidden');

        // Play the background music
        backgroundMusic.play();
    });

    // --- "NO" Button Logic (The Fun Part!) ---
    noBtn.addEventListener('mouseover', moveButton);
    noBtn.addEventListener('click', moveButton); // Also move on click attempt

    function moveButton() {
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const btnWidth = noBtn.offsetWidth;
        const btnHeight = noBtn.offsetHeight;

        const newLeft = Math.random() * (viewportWidth - btnWidth);
        const newTop = Math.random() * (viewportHeight - btnHeight);

        noBtn.style.left = `${newLeft}px`;
        noBtn.style.top = `${newTop}px`;
    }
});
