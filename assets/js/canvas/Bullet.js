export class Bullet {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    draw = () => {
        ctx.fillStyle = 'blue'
        ctx.fillRect(this.x, this.y, 3, 6)
    }

    move = () => {
        return this.y -= 5
    }
}