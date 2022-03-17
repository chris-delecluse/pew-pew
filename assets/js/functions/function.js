const animeCanvas = () => {
    requestAnimationFrame(animeCanvas)
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    drawSpaceships()
    drawBullet()
}

const spaceshipsMoveToLeft = (subPositionX) => {
    spaceshipsX_1 -= subPositionX
    spaceshipsX_2 -= subPositionX
    spaceshipsX_3 -= subPositionX
    spaceshipsX_4 -= subPositionX
    spaceshipsX_5 -= subPositionX

    if (spaceshipsX_1 - 25 < 0) {
        spaceshipsX_1 = 0
        spaceshipsX_2 = 20
        spaceshipsX_3 = 22.5
        spaceshipsX_4 = 25
        spaceshipsX_5 = 49

        spaceshipsBulletX = 21
    }
}

const spaceshipsMoveToRight = (addPositionX) => {
    spaceshipsX_1 += addPositionX
    spaceshipsX_2 += addPositionX
    spaceshipsX_3 += addPositionX
    spaceshipsX_4 += addPositionX
    spaceshipsX_5 += addPositionX

    if (spaceshipsX_5 + 25 > canvas.width) {
        spaceshipsX_1 = 1051
        spaceshipsX_2 = 1071
        spaceshipsX_3 = 1073.5
        spaceshipsX_4 = 1076
        spaceshipsX_5 = 1100

        spaceshipsBulletX = 1072
    }
}