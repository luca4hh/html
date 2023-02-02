/* TITLE TEXT ANIMATION muss in eine schleife da er sonst komplett abbricht*/
/* DARKMODE GEHT IMMER NOCH NICHT */

function HackedText() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let interval = null;
  document.getElementById("hacked-effect").onmouseover = (event) => {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return event.target.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= event.target.dataset.value.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);
  };
}

/* OLD
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interval = null;
document.querySelector("#hacked-effect").onmouseover = (event) => {
  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return event.target.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= event.target.dataset.value.length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 30);
};
*/

/* TITLE TEXT ANIMATION END */

/* DARKMODE */
const darkModeBody = document.querySelector("body");
var themeMode = localStorage.getItem("theme");

// Listening on click event
function initPage() {
  const darkModeBtn = document.querySelector(".theme-switch");
  darkModeBtn.addEventListener("click", toggelTheme);
  checkTheme();
}

// Toggel from light to dark or in the other way + add the data to localstorage
function toggelTheme() {
  themeMode = localStorage.getItem("theme");
  // Wenn themeMode off ist bodyclass remove "dark"
  if (themeMode === "light") {
    darkModeBody.classList.add("dark");
    themeMode = localStorage.setItem("theme", "dark");
  } else {
    darkModeBody.classList.remove("dark");
    themeMode = localStorage.setItem("theme", "light");
  }
}

function checkTheme() {
  themeMode = localStorage.getItem("theme");
  if (themeMode === "light") {
    darkModeBody.classList.remove("dark");
  } else {
    darkModeBody.classList.add("dark");
  }
}

/* DARKMODE END */

/* GALLERY */

const images = document.querySelectorAll(".galerie .img-gallery");

document.addEventListener("mousemove", ($event) => {
  const { clientX } = $event;
  const percent = calcPercent(clientX);
  images.forEach((image) => moveImageBackground(image, percent));
});

function calcPercent(clientX) {
  return (clientX / window.innerWidth) * 100;
}

function moveImageBackground(image, percent) {
  image.animate(
    {
      objectPosition: `${percent}% 0%`,
    },
    { fill: "forwards", duration: 250, easing: "ease-in" }
  );
}

/* GALLERY END */
