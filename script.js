/* ----------------------------------------------------
   FLOATING PIXEL CLOUDS (if you added them earlier)
---------------------------------------------------- */
// (leave cloud code here if you added it)


/* ----------------------------------------------------
   PIXEL CALENDAR
---------------------------------------------------- */

const dateOptions = [
  "16/11/25",
  "22/11/25",
  "23/11/25",
  "29/11/25",
  "30/11/25",
  "6/12/25",
  "7/12/25",
  "13/12/25",
  "14/12/25"
];

const calendarContainer = document.getElementById("pixelCalendar");
const chosenDateInput = document.getElementById("chosenDate");

if (calendarContainer) {
  dateOptions.forEach(date => {
    const btn = document.createElement("div");
    btn.className = "pixel-date-btn";
    btn.textContent = date;

    btn.addEventListener("click", () => {
      document.querySelectorAll(".pixel-date-btn").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      chosenDateInput.value = date;
    });

    calendarContainer.appendChild(btn);
  });
}


/* ----------------------------------------------------
   TIME OPTIONS GENERATOR
---------------------------------------------------- */

const timeList = document.getElementById("timeOptions");

if (timeList) {
  for (let hour = 9; hour <= 22; hour++) {
    const formatted = `${hour}:00`;
    const li = document.createElement("li");
    li.textContent = formatted;
    li.dataset.value = formatted;
    timeList.appendChild(li);
  }
}


/* ----------------------------------------------------
   CUSTOM DROPDOWNS
---------------------------------------------------- */

document.querySelectorAll(".pixel-dropdown").forEach(drop => {
  const selected = drop.querySelector(".pixel-selected");
  const options = drop.querySelector(".pixel-options");
  const hiddenInput = document.querySelector(`input[name="${drop.dataset.name}"]`);

  selected.addEventListener("click", () => drop.classList.toggle("open"));

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


/* ----------------------------------------------------
   PIXEL POPUP + ROSE ON SUBMIT
---------------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("dateForm");

  if (form) {
    form.addEventListener("submit", () => {
      const popup = document.getElementById("pixel-popup");
      popup.style.display = "block";

      setTimeout(() => {
        popup.style.animation = "fadeOutPopup 0.4s forwards";
      }, 2000);

      setTimeout(() => {
        popup.style.display = "none";
        popup.style.animation = "";
      }, 2600);

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


/* ----------------------------------------------------
   MUSIC FADE-IN
---------------------------------------------------- */

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
    document.addEventListener("click", () => bgMusic.play(), { once: true });
  });
});

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

