/* ------------------------------
   MUSIC FADE-IN
------------------------------ */
window.addEventListener("load", () => {
    const bgMusic = document.getElementById("bgMusic");
    if (!bgMusic) return;

    bgMusic.volume = 0;

    bgMusic.play().then(() => {
        let v = 0;
        let fade = setInterval(() => {
            v += 0.02;
            if (v >= 0.5) {
                v = 0.5;
                clearInterval(fade);
            }
            bgMusic.volume = v;
        }, 150);
    }).catch(() => {
        const start = () => bgMusic.play();
        document.addEventListener("click", start, { once: true });
    });
});

/* ------------------------------
   CUSTOM PIXEL DROPDOWN LOGIC
------------------------------ */
document.querySelectorAll(".pixel-dropdown").forEach(drop => {

    const selected = drop.querySelector(".pixel-selected");
    const options = drop.querySelector(".pixel-options");
    const hiddenInput = document.querySelector(`input[name="${drop.dataset.name}"]`);

    // Toggle open
    selected.addEventListener("click", () => {
        drop.classList.toggle("open");
    });

    // Select option
    options.querySelectorAll("li").forEach(li => {
        li.addEventListener("click", () => {
            selected.textContent = li.textContent;
            hiddenInput.value = li.dataset.value;
            drop.classList.remove("open");
        });
    });
});

// Close dropdowns if clicked elsewhere
document.addEventListener("click", e => {
    document.querySelectorAll(".pixel-dropdown").forEach(d => {
        if (!d.contains(e.target)) d.classList.remove("open");
    });
});

/* ------------------------------
   SUBMIT ALERT
------------------------------ */
document.addEventListener("DOMContentLoaded", () => {
  const f = document.getElementById("dateForm");
  if (f) {
    f.addEventListener("submit", () =>
      alert("Your choice is on the way to Shiv 💖")
    );
  }
});
