const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const player = new Image();
player.src = 'assets/ninja.png';

const obstacles = [
    { img: new Image(), x: 400 },
    { img: new Image(), x: 650 },
    { img: new Image(), x: 900 }
];

obstacles[0].img.src = 'assets/chip.png';
obstacles[1].img.src = 'assets/drone.png';
obstacles[2].img.src = 'assets/fire.png';

let x = 50, y = 150, speed = 5;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(player, x, y, 40, 40);
    obstacles.forEach(ob => {
        ctx.drawImage(ob.img, ob.x, y, 40, 40);
        ob.x -= speed;
    });
    requestAnimationFrame(draw);
}
draw();