export default class InputHandler {
  constructor(ship) {
    window.addEventListener("keydown", event => {
      switch (event.keyCode) {
        case 37:
          //left key
          ship.leftPressed = true;
          break;
        case 39:
          //right key
          ship.rightPressed = true;
          break;
        case 32:
          //spacebar
          ship.spacePressed = true;
          break;
        default:
          break;
      } //end switch
    }); //end keyDownHandler

    window.addEventListener("keyup", event => {
      switch (event.keyCode) {
        case 37:
          //left key
          ship.leftPressed = false;
          break;
        case 39:
          //right key
          ship.rightPressed = false;
          break;
        case 32:
          //spacebar
          ship.spacePressed = false;
          break;
        default:
          break;
      } //end switch
    }); //end keyUpHandler
  } //end constructor
} //end class
