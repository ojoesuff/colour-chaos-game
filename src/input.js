export default class InputHandler {
  constructor(ship) {
    document.addEventListener("keydown", event => {
      switch (event.keyCode) {
        case 37:
          //left key
          ship.rotateAntiClock();
          break;
        case 39:
          //right key
          ship.rotateClock();
          break;
        case 32:
          //spacebar
          ship.accelerate();
          break;
        default:
          break;
      } //end switch
    }); //end addEventListener
  } //end constructor
} //end class
