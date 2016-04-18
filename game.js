/*
  Entities:
    - Player(Snake)
    - Score Items(Person?)
  Constraints:
    - User is bound to the border of the canvas
    - User can pick up a score item
      - When User picks up score items they grow in length
      - When score item is picked up up a new one is randomly placed
    - Score Item can not be placed outside the border
    - Score Item cannot be placed on top of the User
  End Conditions:
    - Game ends when User strikes the border
    - Game ends when User strikes itself
*/

var canvasBg = document.getElementById("canvasBg");
var ctxBg = canvasBg.getContext("2d");

var requestAnimFrame = window.requestAnimationFrame
  || window.webkitRequestAnimationFrame
  || window.mozRequestAnimationFrame
  || window.oRequestAnimationFrame
  || window.msRequestAnimationFrame
  || function(callback) {
       window.setTimeout(callback, 1000 / 60);
     }

var bgImage = new Image();
bgImage.src = "images/back_cave.png";
bgImage.addEventListener("load", init, false);

function init(){
  requestAnimFrame(loop);
  ctxBg.drawImage(
    bgImage,
    0,
    0,
    canvasWidth,
    canvasHeight,
    0,
    0,
    canvasWidth,
    canvasHeight
  );
}

function loop() {
  //update();
  //draw();
  console.log("Looping");
  requestAnimFrame(loop);
}








