export function detectCollision(ship, gameWidth, gameHeight) {
  let topOfShip = ship.position.x;
  let bottomOfShip = ship.position.x + ship.width;
  let leftOfShip = ship.position.y + ship.height;
  let rightOfShip = ship.position.y;

  let topOfGame = 0;
  let bottomOfGame = gameHeight;
  let leftOfGame = 0 - ship.width / 3;
  let rightOfGame = gameWidth;

  let collisionSide;

  //ship is draw sideways so top of ship is facing the left of the stage
  if (topOfShip <= leftOfGame) {
    collisionSide = "left";
  } else if (bottomOfShip >= rightOfGame) {
    collisionSide = "right";
  } else if (leftOfShip >= bottomOfGame) {
    collisionSide = "bottom";
  } else if (rightOfShip <= topOfGame) {
    collisionSide = "top";
  } else {
    collisionSide = false;
  }

  return collisionSide;
}
