import Ship from "/src/ship";
import InputHandler from "/src/input";

let canvas = document.getElementById("gameSpace");

let ctx = canvas.getContext("2d");

const GAMEWIDTH = canvas.width;
const GAMEHEIGHT = canvas.height;

let ship = new Ship();
ship.draw(ctx);
new InputHandler(ship);

let lastTime = 0;

function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  ctx.clearRect(0, 0, GAMEWIDTH, GAMEHEIGHT);
  ship.update(deltaTime, GAMEWIDTH, GAMEHEIGHT);
  ship.draw(ctx);

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
