import {Player} from "./canvas/Unit.js"
import Bullet from "./canvas/Bullet.js";

let ship = new Player();
ship.x = 547.5;
ship.y = 690;

let bullets = [];

const animeCanvas = () => {
    requestAnimationFrame(animeCanvas)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ship.draw();
    bullets.forEach(b => {
        b.draw();
        b.move();
    })
}

window.addEventListener('keydown', event => {

    if (event.key === 'q' || event.key === "ArrowLeft") {
        console.log('move left');
        ship.move(-20);

    } else if (event.key === 'd' || event.key === "ArrowRight") {
        console.log('move right');
        ship.move(20);

    } else if (event.key === 'f') {
        console.log('fire');
        let b = new Bullet(ship.x, ship.y);
        bullets.push(b);
    }
})

animeCanvas();
//drawSpaceships()
