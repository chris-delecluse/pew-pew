const ctx = canvas.getContext('2d')

class Unit {
    x = 0;
    y = 0;
    life = 3;

    shoot = () => {
        console.log("unit.shoot");
    }

    move = () => {

    }

    modifyLife = () => {

    }
}

class Player extends Unit {

    positionsX = [525, 545, 547.5, 550, 574];

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
        this.x += value;
        this.positionsX.forEach((pos, index) => {
            this.positionsX[index] = pos + value;
        })

        if (this.positionsX[0] < 0) {
            this.positionsX[0] = 0;
            this.positionsX[1] = 20;
            this.positionsX[2] = 22.5;
            this.positionsX[3] = 25;
            this.positionsX[4] = 49;
        }
        else if (this.positionsX[4] > canvas.width) {
            this.positionsX[0] = 1051;
            this.positionsX[1] = 1071;
            this.positionsX[2] = 1073.5;
            this.positionsX[3] = 1076;
            this.positionsX[4] = 1100;
        }
    }

    shoot = () => {
        console.log("player shoot")
    }
}

export {
    Unit,
    Player
}