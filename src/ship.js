export default class Ship {
  constructor() {
    this.position = {
      x: 100,
      y: 100
    };
    this.height = 100;
    this.width = 100;
    this.centre = {
      x: this.position.x + this.width / 2,
      y: this.position.y + this.height / 2
    };
    this.point1 = {
      x: this.position.x + this.width / 2,
      y: this.position.y
    };
    this.point2 = {
      x: this.position.x,
      y: this.position.y + this.height
    };
    this.point3 = {
      x: this.position.x + this.width,
      y: this.position.y
    };
    this.degrees = 10;
    this.radians = (this.degrees * Math.PI) / 180;
  }

  draw(ctx) {
    //draw triangle
    ctx.beginPath();
    ctx.moveTo(this.position.x + this.width / 2, this.position.y);
    ctx.lineTo(this.position.x, this.position.y + this.height);
    ctx.lineTo(this.position.x + this.width, this.position.y + this.height);
    ctx.closePath();
    ctx.fillStyle = "black";
    ctx.fill();
    console.log(`${this.position.x}, ${this.position.y}`);
    // console.log(`${this.centre.x}, ${this.centre.y}`);
  }

  update(deltaTime) {}

  rotateAntiClock() {
    //FIRST TRANSLATE THE DIFFERENCE
    let x1 = this.position.x - this.centre.x;
    let y1 = this.position.y - this.centre.y;

    //APPLY ROTATION
    this.position.x =
      x1 * Math.cos(this.radians) - y1 * Math.sin(this.radians) + this.centre.x;
    this.position.y =
      x1 * Math.sin(this.radians) + y1 * Math.cos(this.radians) + this.centre.y;
  }

  rotateClock() {}
}
