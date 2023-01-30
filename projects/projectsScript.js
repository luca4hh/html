const images = document.querySelectorAll(".galerie img");

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
			objectPosition: `${percent}% 0%`
		},
		{ fill: "forwards", duration: 250, easing: "ease-in" }
	);
}



const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.querySelector("h1").onmouseover = event => {  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 30);
}

const dark_mode_button = document.getElementById("dark-mode-a")

dark_mode_button.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode")
})