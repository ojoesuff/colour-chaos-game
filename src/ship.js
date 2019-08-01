import { detectCollision } from "./collisionDetection";

export default class Ship {
  constructor() {
    this.position = {
      x: 500,
      y: 500
    };
    this.height = 30;
    this.width = 40;
    this.degrees = 0;
    this.radians = 0;
    this.rotationSpeed = 6;
    this.velocity = 6;
    this.leftPressed = false;
    this.rightPressed = false;
    this.spacePressed = false;
    this.collisionBounce = 0;
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

  update(deltaTime, gameWidth, gameHeight) {
    // console.log(`${this.position.x}, ${this.position.y}`);
    console.log(this.degrees);
    let collisionDetected = detectCollision(this, gameWidth, gameHeight);
    //move ship
    if (this.leftPressed) {
      //rotate ship anticlockwise
      this.degrees -= this.rotationSpeed;
    }
    if (this.rightPressed) {
      //rotate ship clockwise
      this.degrees += this.rotationSpeed;
    }
    if (collisionDetected) {
      //bounce off wall
      //calculate angle
      let x1 = Math.cos(this.radians) * (this.velocity + this.collisionBounce);
      let y1 = Math.sin(this.radians) * (this.velocity + this.collisionBounce);

      //reverse ship
      this.position.x += x1;
      this.position.y += y1;
      //rotate ship depending on orientation and which wall hit
      switch (collisionDetected) {
        case "left":
          if (this.degrees >= 0 && this.degrees < 180) {
            this.degrees += this.rotationSpeed * 2;
          } else {
            this.degrees -= this.rotationSpeed * 2;
          }
          break;
        case "right":
          if (this.degrees >= 0 && this.degrees < 180) {
            this.degrees -= this.rotationSpeed * 2;
          } else {
            this.degrees += this.rotationSpeed * 2;
          }
          break;
        case "top":
          if (this.degrees >= 90 && this.degrees < 270) {
            this.degrees += this.rotationSpeed * 2;
          } else {
            this.degrees -= this.rotationSpeed * 2;
          }
          break;
        case "bottom":
          if (this.degrees >= 90 && this.degrees < 270) {
            this.degrees -= this.rotationSpeed * 2;
          } else {
            this.degrees += this.rotationSpeed * 2;
          }
          break;
        default:
          break;
      }
      //reduce bounce each time
      this.collisionBounce -= this.collisionBounce / 2;
    } else {
      this.collisionBounce = 10;
    }
    if (this.spacePressed && collisionDetected) {
      //accelerate ship
      let x1 = Math.cos(this.radians) * (this.velocity * 0.0003);
      let y1 = Math.sin(this.radians) * (this.velocity * 0.0003);

      this.position.x -= x1;
      this.position.y -= y1;
    } else if (this.spacePressed) {
      //accelerate ship
      let x1 = Math.cos(this.radians) * this.velocity;
      let y1 = Math.sin(this.radians) * this.velocity;

      this.position.x -= x1;
      this.position.y -= y1;
    }
    //keep degrees positive and below 360
    this.degrees = (360 + this.degrees) % 360;
    //rotate ship
    this.radians = (this.degrees * Math.PI) / 180;
  }
}
