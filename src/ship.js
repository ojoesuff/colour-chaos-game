export default class Ship {
  constructor() {
    this.position = {
      x: 100,
      y: 100
    };
    this.height = 100;
    this.width = 100;
    this.degrees = 0;
    this.radians = 0;
    this.speed = 6;
    this.velocity = 6;
  }

  draw(ctx) {
    //calculated with formula found @ https://www.mathopenref.com/coordcentroid.html
    let centre = {
      x: (this.position.x + (this.position.x + this.width) * 2) / 3,
      y:
        (this.position.y +
          this.height / 2 +
          (this.position.y + this.height) +
          this.position.y) /
        3
    };
    ctx.save();
    //move canvas to centre of shape
    ctx.translate(centre.x, centre.y);
    ctx.rotate(this.radians);
    //reset canvas coordinates
    ctx.translate(-centre.x, -centre.y);
    //draw triangle
    ctx.beginPath();
    ctx.moveTo(this.position.x, this.position.y + this.height / 2);
    ctx.lineTo(this.position.x + this.width, this.position.y + this.height);
    ctx.lineTo(this.position.x + this.width, this.position.y);
    ctx.closePath();
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.restore();
    // console.log(`${centre.x}, ${centre.y}`);
  }

  update(deltaTime) {
    this.degrees = this.degrees % 360;
    this.radians = (this.degrees * Math.PI) / 180;
  }

  rotateAntiClock() {
    //rotate ship anticlockwise
    this.degrees -= this.speed;
  }

  rotateClock() {
    //rotate ship clockwise
    this.degrees += this.speed;
  }

  accelerate() {
    let x1 = Math.cos(this.radians) * this.velocity;
    let y1 = Math.sin(this.radians) * this.velocity;

    this.position.x -= x1;
    this.position.y -= y1;
  }
}
