//objects/parts
//extremely simplefied
var content;
var blocksize = 20;
var columns = 30;
var rows = 30;
var board;

var appleX;
var appleY;

var snakeX;
var snakeY;

//loading things in
window.onload = function () {
    board = document.getElementById("board");
    board.height = rows * blocksize;
    board.width = columns * blocksize;
    content = board.getcontent("2d");

}

addEventListener("keyup", turn);
spawnapple();
spawnsnake();
loading();

//controls
//use wasd if possible
function turn(e) {
    if (Code.e) {}
}


//functions
 //inhere you make everything appear, and have the disigred visuals
    //apple yellow
    //snake-head black, snake body gray
function loading() {
    content.fillStyle="rgb(0, 55, 120)";
    content.fillRect(0, 0, board.height, board.width);

    content.fillstyle="black";
    content.fillrect(snakeX, snakeY, blocksize, blocksize);

    content.fillstyle="yellow";
    content.fillrect(appleX, appleY, blocksize, blocksize);
   
}

//apples random spawnning
function spawnapple() {
    appleX = Math.floor(Math.random() * columns) * ...;
    appleY = Math.floor(Math.random() * rows) * ...;

}
//snakes random spawning
function spawnsnake() {
    snakeX = math.floor(Math.random() * columns) * ...;
    snakeY = math.floor(Math.random() * rows) * ...;

}