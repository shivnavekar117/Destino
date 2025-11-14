// Autoplay audio on page load (muted first), then fade in
window.addEventListener("load", () => {
    const bgMusic = document.getElementById("bgMusic");

    bgMusic.volume = 0; // start muted

    bgMusic.play().then(() => {
        let volume = 0;

        let fade = setInterval(() => {
            volume += 0.02; // fade speed
            if (volume >= 0.5) { 
                volume = 0.5; // final volume
                clearInterval(fade);
            }
            bgMusic.volume = volume;
        }, 150); // fade interval
    }).catch(() => {
        // If autoplay is blocked (rare), start on first tap
        const startOnClick = () => {
            bgMusic.play();
            document.removeEventListener("click", startOnClick);
        };
        document.addEventListener("click", startOnClick);
    });
});

// Submit alert
document.getElementById("dateForm").addEventListener("submit", function() {
    alert("Your choice is on the way to Shiv 💙");
});
