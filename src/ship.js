export default class Ship {
  constructor() {
    this.position = {
      x: 100,
      y: 100
    };
    this.height = 100;
    this.width = 100;
    this.rotation = 0;
    this.degrees = 4;
  }

  draw(ctx) {
    //draw triangle
    ctx.save();
    ctx.beginPath();
    ctx.translate(
      this.position.x + this.width / 2,
      this.position.y + this.height / 2
    );
    ctx.rotate((this.rotation * Math.PI) / 180);
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
    this.rotation += this.degrees;
  }

  rotateClock() {
    this.rotation -= this.degrees;
  }
}
