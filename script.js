const canvas = document.getElementById('flowerCanvas');
const ctx = canvas.getContext('2d');
const textEl = document.getElementById('text');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let angle = 0;

function drawFlower() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;

  for (let i = 0; i < 100; i++) {
    let rad = angle + i * (Math.PI * 2 / 50);
    let radius = 100 + Math.sin(angle + i) * 60;
    let x = centerX + Math.cos(rad) * radius;
    let y = centerY + Math.sin(rad) * radius;

    ctx.beginPath();
    ctx.arc(x, y, 3, 0, Math.PI * 2);
    ctx.fillStyle = `hsl(${(i * 4 + angle * 80) % 360}, 100%, 60%)`;
    ctx.fill();
  }

  angle += 0.02;
  requestAnimationFrame(drawFlower);
}

drawFlower();

// Ganti teks setelah delay
setTimeout(() => {
  textEl.textContent = 'Found: YourChannel';
  textEl.style.color = '#00ff99';
  textEl.style.textShadow = '0 0 10px #00ff99, 0 0 30px #00ff99';
}, 5000);
