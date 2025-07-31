const text = "Searching...";
const typewriter = document.getElementById("typewriter-text");
let index = 0;

function typeEffect() {
  if (index < text.length) {
    typewriter.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 150); // kecepatan ketik
  }
}

window.onload = () => {
  setTimeout(typeEffect, 500); // delay sebelum mulai
};