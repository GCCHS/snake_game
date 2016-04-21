/*
  Entities:
    * Player(Snake)
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
var canvasEntities = document.getElementById("canvasEntities");
var ctxEntities = canvasEntities.getContext("2d");
var canvasHeight = canvasBg.height;
var canvasWidth = canvasBg.width;
var player1 = new Player();

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
    0, 0,
    2000, 2000,
    0, 0,
    canvasWidth, canvasHeight
  );
}

function loop() {
  clearCtx(ctxEntities);
  update();
  draw();
  requestAnimFrame(loop);
}

function clearCtx(ctx){
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
}

function draw() {
  player1.draw();
}

function update() {
  player1.update();
}

function Player() {
  this.srcX = 0;
  this.srcY = 0;
  this.srcHeight = 32;
  this.srcWidth = 32;

  this.srcFile = 'images/pink_snake_tongue_pixel.png';
  this.srcImage = new Image();
  this.srcImage.src = this.srcFile;

  this.drawX = 100;
  this.drawY = 100;
  this.drawWidth = this.srcWidth;
  this.drawHeight = this.srcHeight;
}

Player.prototype.draw = function() {
  ctxEntities.drawImage(
    this.srcImage,
    this.srcX, this.srcY,
    this.srcWidth, this.srcHeight,
    this.drawX, this.drawY,
    this.drawWidth, this.drawHeight
  );
}

Player.prototype.update = function() {
  this.drawX += 5;
  //this.drawY -= 1;
}

