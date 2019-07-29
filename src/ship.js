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
    this.degrees = 0;
    this.radians = 0;
    this.speed = 6;
  }

  draw(ctx) {
    ctx.save();
    //move canvas to centre of shape
    ctx.translate(this.centre.x, this.centre.y);
    ctx.rotate(this.radians);
    //reset canvas coordinates
    ctx.translate(-this.centre.x, -this.centre.y);
    //draw triangle
    ctx.beginPath();
    ctx.moveTo(this.position.x + this.width / 2, this.position.y);
    ctx.lineTo(this.position.x, this.position.y + this.height);
    ctx.lineTo(this.position.x + this.width, this.position.y + this.height);
    ctx.closePath();
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.restore();
  }

  update(deltaTime) {}

  rotateAntiClock() {
    //rotate ship anticlockwise
    this.degrees = (this.degrees + this.speed) % 360;
    this.radians = (this.degrees * Math.PI) / 180;
  }

  rotateClock() {
    //rotate ship clockwise
    this.degrees = (this.degrees - this.speed) % 360;
    this.radians = (this.degrees * Math.PI) / 180;
  }
}
