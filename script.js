// Autoplay background music with fade-in
window.addEventListener("load", () => {
    const bgMusic = document.getElementById("bgMusic");

    if (!bgMusic) return;

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
        const startOnClick = () => {
            bgMusic.play();
            document.removeEventListener("click", startOnClick);
        };
        document.addEventListener("click", startOnClick);
    });
});

// Submit alert
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("dateForm");
    if (form) {
        form.addEventListener("submit", () =>
            alert("Your choice is on the way to Shiv 💙")
        );
    }
});
