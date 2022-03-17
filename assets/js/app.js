import {Player, Unit} from "./canvas/Unit.js"
import {Bullet} from "./canvas/Bullet.js"

let ship = new Player()
ship.x = 547.5
ship.y = 690

let bullets = []
let allUnit = []


for (let i = 0; i <= 40; i++) {
    let unit = new Unit()
    unit.x = Math.floor(Math.random() * 1100)
    unit.y = Math.floor(Math.random() * 400)
    unit.radius = 12
    allUnit.push(unit)
}



const animeCanvas = () => {
    requestAnimationFrame(animeCanvas)
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    ship.draw();

    bullets.forEach(el => {
        el.draw();
        el.move();
    })

    allUnit.forEach((el, key ) => {
        el.collide(allUnit)
        el.arrayOfBool.forEach(element => {
            if (element === true) {
                console.log('collide')
            } else {
                el.draw()
            }
        })
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
        let b = new Bullet(ship.x, (ship.y - 60));
        bullets.push(b);
    }
})

animeCanvas();