// Autoplay audio with fade-in (works everywhere)
window.addEventListener("load", () => {
    const bgMusic = document.getElementById("bgMusic");

    bgMusic.volume = 0;

    bgMusic.play().then(() => {
        let volume = 0;

        let fade = setInterval(() => {
            volume += 0.02;
            if (volume >= 0.5) {
                volume = 0.5;
                clearInterval(fade);
            }
            bgMusic.volume = volume;
        }, 150);

    }).catch(() => {
        // Autoplay blocked — fallback
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
