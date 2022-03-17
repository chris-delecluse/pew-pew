drawSpaceships()
animeCanvas()


window.addEventListener('keydown', event => {

    if (event.key === 'q') {
        console.log('move left')
        drawSpaceships()
        spaceshipsMoveToLeft(20)

    } else if (event.key === 'd') {
        console.log('move right')
        drawSpaceships()
        spaceshipsMoveToRight(20)

    } else if (event.key === 'f') {
        console.log('fire')

    }
})