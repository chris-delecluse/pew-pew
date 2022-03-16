spaceships()

window.addEventListener('keydown', event => {

    if (event.key === 'q') {
        console.log('move left')
        spaceships()
        spaceshipsMoveToLeft(20)

    } else if (event.key === 'd') {
        console.log('move right')
        spaceships()
        spaceshipsMoveToRight(20)

    } else if (event.key === 'f') {
        console.log('fire')
        bullet()
    }
})