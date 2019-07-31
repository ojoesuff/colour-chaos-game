import Ship from "/src/ship";

let canvas = document.getElementById("gameSpace");

let ctx = canvas.getContext("2d");

const GAMEWIDTH = canvas.width;
const GAMEHEIGHT = canvas.height;

let ship = new Ship();
ship.draw(ctx);
window.addEventListener("keydown", function(event) {
  if (event.keyCode === 37) {
    ship.leftPressed = true;
  }
  if (event.keyCode === 39) {
    ship.rightPressed = true;
  }
  if (event.keyCode === 32) {
    ship.spacePressed = true;
  }
});
window.addEventListener("keyup", function(event) {
  if (event.keyCode === 37) {
    ship.leftPressed = false;
  }
  if (event.keyCode === 39) {
    ship.rightPressed = false;
  }
  if (event.keyCode === 32) {
    ship.spacePressed = false;
  }
});

let lastTime = 0;

function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  ctx.clearRect(0, 0, GAMEWIDTH, GAMEHEIGHT);
  if (ship.leftPressed) {
    ship.rotateAntiClock();
  }
  if (ship.rightPressed) {
    ship.rotateClock();
  }
  if (ship.spacePressed) {
    ship.accelerate();
  }
  ship.update(deltaTime);
  ship.draw(ctx);

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
