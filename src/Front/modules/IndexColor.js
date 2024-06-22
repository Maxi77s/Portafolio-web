const canvas = document.getElementById('starfield');
const buttonCv = document.getElementsByClassName("btn btn-primary")[0];
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];
const numStars = 200;
let mouse = { x: canvas.width / 2, y: canvas.height / 2 };

function initStars() {
    for (let i = 0; i < numStars; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 4,
            color: 'white',
            dx: Math.random() * 1.5 - 0.75, // Ajustado para mayor rango horizontal
            dy: Math.random() * 1.5 - 0.75  // Ajustado para mayor rango vertical
        });
    }
}

function drawStars() {                                                                                  
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.globalCompositeOperation = 'lighter';
    stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.fill();
    });
}

function updateStars() {
    stars.forEach(star => {
        star.x += star.dx;
        star.y += star.dy;

        // Ajustar movimiento basado en la posición del mouse
        const distanceX = mouse.x - star.x;
        const distanceY = mouse.y - star.y;
        star.x += distanceX * 0.0005; // Ajuste menor para movimiento suave
        star.y += distanceY * 0.0005; // Ajuste menor para movimiento suave

        // Envolver alrededor de los bordes
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;
    });
}

function animate() {
    updateStars();
    drawStars();
    requestAnimationFrame(animate);
}

initStars();
animate();

window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    stars = [];
    initStars();
});
