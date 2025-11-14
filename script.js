// Fade-in function for the music
function fadeInAudio(audio) {
    let volume = 0;
    audio.volume = 0;
    audio.play();

    let fade = setInterval(() => {
        volume += 0.02;
        if (volume >= 0.5) { 
            volume = 0.5; // final volume
            clearInterval(fade);
        }
        audio.volume = volume;
    }, 150);
}

// Start music after first user interaction
document.addEventListener("click", function startMusic() {
    const bgMusic = document.getElementById("bgMusic");
    fadeInAudio(bgMusic);
    document.removeEventListener("click", startMusic);
});

// Submit alert
document.getElementById("dateForm").addEventListener("submit", function() {
    alert("Your choice is on the way to Shiv 💙");
});
