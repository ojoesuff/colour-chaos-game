export default class InputHandler {
  constructor(ship) {
    document.addEventListener("keydown", event => {
      switch (event.keyCode) {
        case 37:
          ship.rotateAntiClock();
          break;
        case 39:
          ship.rotateClock();
          break;
        default:
          break;
      } //end switch
    }); //end addEventListener
  } //end constructor
} //end class
