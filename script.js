/* --------------------------------------
   ENVELOPE OPEN ANIMATION
-------------------------------------- */
if (document.getElementById("letter")) {
  const letter = document.getElementById("letter");
  letter.addEventListener("click", () => {
    letter.classList.add("opening");

    setTimeout(() => {
      document.body.classList.add("fade-out");
    }, 500);

    setTimeout(() => {
      window.location.href = "date.html";
    }, 1100);
  });
}

/* --------------------------------------
   MUSIC FADE-IN
-------------------------------------- */
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

/* --------------------------------------
   CUSTOM DROPDOWNS
-------------------------------------- */
document.querySelectorAll(".pixel-dropdown").forEach(drop => {
  const selected = drop.querySelector(".pixel-selected");
  const options = drop.querySelector(".pixel-options");
  const hiddenInput = document.querySelector(`input[name="${drop.dataset.name}"]`);

  selected.addEventListener("click", () => {
    drop.classList.toggle("open");
  });

  options.querySelectorAll("li").forEach(li => {
    li.addEventListener("click", () => {
      selected.textContent = li.textContent;
      hiddenInput.value = li.dataset.value;
      drop.classList.remove("open");
    });
  });
});

document.addEventListener("click", e => {
  document.querySelectorAll(".pixel-dropdown").forEach(d => {
    if (!d.contains(e.target)) d.classList.remove("open");
  });
});

/* --------------------------------------
   PIXEL POPUP + ROSE
-------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("dateForm");

  if (form) {
    form.addEventListener("submit", () => {
      // Show popup
      const popup = document.getElementById("pixel-popup");
      popup.style.display = "block";

      // Hide popup after 2 seconds
      setTimeout(() => {
        popup.style.animation = "fadeOutPopup 0.4s forwards";
      }, 2000);

      // Remove popup fully after fade
      setTimeout(() => {
        popup.style.display = "none";
        popup.style.animation = "";
      }, 2600);

      // Rose animation
      const container = document.getElementById("rose-container");
      const rose = document.createElement("img");
      rose.src = "rose.png";
      rose.classList.add("rose");

      rose.style.left = Math.random() * window.innerWidth + "px";

      container.appendChild(rose);

      setTimeout(() => rose.remove(), 2600);
    });
  }
});
