class Unit {
        x = 0
        y = 0
        radius = 0
        dx = 0
        dy = 0
        sumOfRadius = 0
        distance = 0
        arrayOfBool = []

    draw = () => {
        ctx.fillStyle = 'black'
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
        ctx.fill()
        ctx.stroke()
    }

    collide = (array) => {

        array.forEach(el => {
             this.dx = el.x - this.x
             this.dy = el.y - this.y
             this.distance = Math.sqrt(this.dx * this.dx + this.dy * this.dy)
             this.sumOfRadius = el.radius + this.radius

             this.arrayOfBool.push(this.distance < this.sumOfRadius)
        })
    }

    shoot = () => {
        console.log("unit.shoot")
    }

    move = () => {

    }

    modifyLife = () => {

    }
}

class Player extends Unit {

    positionsX = [525, 545, 547.5, 550, 574]
    bullets = []

    draw = () => {
        ctx.fillStyle = '#FFF'
        ctx.strokeStyle = '#FFF'

        ctx.beginPath()

        ctx.moveTo(this.positionsX[0], 690) // 1
        ctx.lineTo(this.positionsX[1], 670) // 2
        ctx.lineTo(this.positionsX[1], 650) // 2
        ctx.lineTo(this.positionsX[2], 647) // 3
        ctx.lineTo(this.positionsX[3], 650) // 4
        ctx.lineTo(this.positionsX[3], 670) // 4
        ctx.lineTo(this.positionsX[4], 690) // 5
        ctx.lineTo(this.positionsX[3], 683) // 4
        ctx.lineTo(this.positionsX[3], 691) // 4
        ctx.lineTo(this.positionsX[1], 691) // 2
        ctx.lineTo(this.positionsX[1], 683) // 2
        ctx.lineTo(this.positionsX[0], 690) // 1

        ctx.closePath()

        ctx.fill()
        ctx.stroke()
    }

    move = (value) => {
        this.x += value
        this.positionsX.forEach((pos, index) => {
            this.positionsX[index] = pos + value
        })

        if (this.positionsX[0] < 0) {
            this.positionsX[0] = 0
            this.positionsX[1] = 20
            this.positionsX[2] = 22.5
            this.positionsX[3] = 25
            this.positionsX[4] = 49
        }
        else if (this.positionsX[4] > canvas.width) {
            this.positionsX[0] = 1051
            this.positionsX[1] = 1071
            this.positionsX[2] = 1073.5
            this.positionsX[3] = 1076
            this.positionsX[4] = 1100
        }
    }
}

export {
    Unit,
    Player
}