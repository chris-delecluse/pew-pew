const canvas = document.getElementsByTagName('canvas')[0]
const ctx = canvas.getContext('2d')

let spaceshipsX_1 = 525
let spaceshipsX_2 = 545
let spaceshipsX_3 = 547.5
let spaceshipsX_4 = 550
let spaceshipsX_5 = 574

let spaceshipsBulletX = 546
let spaceshipsBulletY = 635

canvas.width = 1100
canvas.height = 700

const drawSpaceships = () => {
    ctx.fillStyle = '#FFF'
    ctx.strokeStyle = '#FFF'

    ctx.beginPath()

    ctx.moveTo(spaceshipsX_1, 690) // 1
    ctx.lineTo(spaceshipsX_2, 670) // 2
    ctx.lineTo(spaceshipsX_2, 650) // 2
    ctx.lineTo(spaceshipsX_3, 647) // 3
    ctx.lineTo(spaceshipsX_4, 650) // 4
    ctx.lineTo(spaceshipsX_4, 670) // 4
    ctx.lineTo(spaceshipsX_5, 690) // 5
    ctx.lineTo(spaceshipsX_4, 683) // 4
    ctx.lineTo(spaceshipsX_4, 691) // 4
    ctx.lineTo(spaceshipsX_2, 691) // 2
    ctx.lineTo(spaceshipsX_2, 683) // 2
    ctx.lineTo(spaceshipsX_1, 690) // 1

    ctx.closePath()

    ctx.fill()
    ctx.stroke()
}

const drawBullet = () => {
    ctx.fillStyle = 'blue'
    ctx.fillRect(spaceshipsBulletX, spaceshipsBulletY, 3, 6)

    spaceshipsBulletY -= 10

    if (spaceshipsBulletY === 20) {
        spaceshipsBulletY += 10
    }
}