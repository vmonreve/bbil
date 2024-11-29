// Optional: You can add JavaScript for more interactivity or dynamic behavior
// Example: Dynamically change text every 10 seconds
const textElement = document.querySelector(".animated-text");

let texts = ["GWS Bibill🍒", "Semoga Cepat Sembuh🌟", "Stay Strong💕"];
let index = 0;

setInterval(() => {
  index = (index + 1) % texts.length;
  textElement.textContent = texts[index];
}, 3000);
