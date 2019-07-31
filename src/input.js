export default class InputHandler {
  constructor() {
    this.leftPressed = false;
    this.rightPressed = false;
    this.spacePressed = false;
  } //end constructor

  keyDownHandler(event) {
    switch (event.keyCode) {
      case 37:
        //left key
        this.leftPressed = true;
        break;
      case 39:
        //right key
        this.rightPressed = true;
        break;
      case 32:
        //spacebar
        this.spacePressed = true;
        break;
      default:
        break;
    } //end switch
  } //end keyDownHandler

  keyUpHandler(event) {
    switch (event.keyCode) {
      case 37:
        //left key
        this.leftPressed = false;
        break;
      case 39:
        //right key
        this.rightPressed = false;
        break;
      case 32:
        //spacebar
        this.spacePressed = false;
        break;
      default:
        break;
    } //end switch
  } //end keyUpHandler
} //end class
