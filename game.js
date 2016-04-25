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
var canvasEntities = document.getElementById("canvasEntities"); //sets canvas to a new canvas name 
var ctxEntities = canvasEntities.getContext("2d"); //makes new canvas 2d
var canvasHeight = canvasBg.height; //links function to variable 
var canvasWidth = canvasBg.width; //links function to variable 
var player1 = new Player(); //links funtion to a variable 

var requestAnimFrame = window.requestAnimationFrame //Need for different types of browsers 
  || window.webkitRequestAnimationFrame
  || window.mozRequestAnimationFrame
  || window.oRequestAnimationFrame
  || window.msRequestAnimationFrame
  || function(callback) {
       window.setTimeout(callback, 1000 / 60);
     }

var bgImage = new Image(); //function on getting a new image 
bgImage.src = "images/back_cave.png"; //source of the background picture
bgImage.addEventListener("load", init, false); //load then begin our game 

function init(){ //begin function 
  requestAnimFrame(loop); //links Animation to the function loop
  ctxBg.drawImage( //
    bgImage, //gets information on background 
    0, 0, //top corner 
    2000, 2000, //dimensions 
    0, 0, //other corner 
    canvasWidth, canvasHeight //
  );
}

function loop() { //goes back and continuously does actions 
  console.log( outOfBounds(player1) );
  clearCtx(ctxEntities)//calls function clearCtx on the ctxEntities canvas 
  update(); //calls function update ()
  draw(); //calls function draw()
  requestAnimFrame(loop);
}

function update() { //updates for new information 
  player1.draw(); //updates the function draw()
}

function draw() {
  player1.update(); //links this to the prototype.update
}

function clearCtx (ctx){ //Clears old imformation
  ctx.clearRect(0, 0, canvasWidth, canvasHeight) //dimensions of the background 
}

function Player() { //Funtions set variables 
//Demensional Variables 
  this.srcX = 0;
  this.srcY = 0;
  this.srcHeight = 32;
  this.srcWidth = 32;
  this.dWidth = this.srcWidth;
  this.dHeight = this.srcHeight;

  this.centerX = this.drawX + (this.dWidth / 2);
  this.centerY = this.drawY + (this.dHeight / 2);

//Location of File
  this.srcFile = 'images/pink_snake_tongue_pixel.png'; //location
  this.srcImage = new Image(); //knows where to find image
  this.srcImage.src = this.srcFile; //data fed to SrcImage

//Drawing Variables
  this.drawX = 100;
  this.drawY = 100;
  this.drawHeight = this.srcHeight; 
  this.drawWidth = this.srcWidth;
  
  // r = right
  // l = left
  // u = up
  // d = down
  this.direction = 'r';
}

Player.prototype.draw = function() { //the word protoype make a variable do something
  ctxEntities.drawImage( //draws images on new canvas called ctxEntities 
    this.srcImage, //function that can find image 
    this.srcX, this.srcY, //location set for start drawing 
    this.srcWidth, this.srcHeight, //dimensions of player //always in order of Width and then Height
    this.drawX, this.drawY, //where to draw player
    this.drawWidth, this.drawHeight //where to start drawing
  );
}

Player.prototype.update = function() { //updates the draw function to move player1
  // !outOfBounds(player1)         => true
  // outOfBounds(player1) == false => true
  var speed = 0;
  if(this.direction == 'r'){
    speed = 20;
  }else if(this.direction == 'l'){
    speed = -20;
  }
  if(outOfBounds(player1) == false){
    this.drawX += speed; //this += makes it add one more to its drawing variables 
  }
}

Player.prototype.checkDirection = function () {
  var newDrawX = this.drawX;
  var newDrawY = this.drawY;
};

function outOfBounds(entity) {
    var newRightX = entity.drawX + entity.drawWidth;
    var newLeftX = entity.drawX;
    var LineTop = 10;
    var LineRight = canvasWidth - 10;
    var LineLeft = 10;
    return outOfLowerBounds(entity) ||
        outOfUpperBounds(entity) ||
        newRightX > LineRight ||
        newLeftX < LineLeft;
}

function outOfLowerBounds(entity) {
  var newBottomY = entity.drawY + entity.drawHeight;
  var LineBottom = canvasHeight - 10;
  return newBottomY > LineBottom;
}

function outOfUpperBounds(entity) {
  var newTopY = entity.drawY;
  var LineTop = 10;
  return newTopY < LineTop;
}
