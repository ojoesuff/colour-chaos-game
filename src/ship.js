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
    // console.log(`${this.position.x}, ${this.position.y}`);
    // console.log(`${this.centre.x}, ${this.centre.y}`);
  }

  update(deltaTime) {}

  rotateAntiClock() {
    // this.position.x =
    //   (this.position.x - this.centre.x) * Math.cos(this.radians) -
    //   (this.position.y - this.centre.y) * Math.sin(this.radians) +
    //   this.centre.x;

    // this.position.y =
    //   (this.position.x - this.centre.x) * Math.sin(this.radians) +
    //   (this.position.y - this.centre.y) * Math.cos(this.radians) +
    //   this.centre.y;
    //FIRST TRANSLATE THE DIFFERENCE
    let x1 = this.position.x - this.centre.x;
    let y1 = this.position.y - this.centre.y;

    //APPLY ROTATION
    x1 = x1 * Math.cos(this.radians) - y1 * Math.sin(this.radians);
    y1 = x1 * Math.sin(this.radians) + y1 * Math.cos(this.radians);

    //TRANSLATE BACK
    this.position.x = x1 + this.centre.x;
    this.position.y = y1 + this.centre.y;
  }

  rotateClock() {}
}
