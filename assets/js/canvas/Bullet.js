export default class Bullet {
    x = 0;
    y = 0;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    draw = () => {
        ctx.fillStyle = 'blue';
        ctx.fillRect(this.x, this.y, 3, 6);
    }

    move = () => {
        this.y -= 5;
    }
}

