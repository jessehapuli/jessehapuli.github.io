//board
var board;
var Context;
var blocksize = 30;
var rows = 20;
var columns = 20;
var mesh = 1;

//sneak
var snakeX;
var snakeY;

//apple
var appleX;
var appleY;

window.onload = function() {
    board = document.getElementById("board");
    board.height = rows * blocksize;
    board.width = columns * blocksize;
    Context = board.getContext("2d");

    placesnake();
    placeapple();
    document.addEventListener("keyup", changeDirection);
    update();
}



function update() {
    Context.fillStyle="rgb(217, 227, 255)";
    Context.fillRect(0, 0, board.width, board.height);

    Context.fillStyle="black";
    Context.fillRect(snakeX, snakeY, blocksize, blocksize);

    Context.fillStyle="yellow";
    Context.fillRect(appleX, appleY, blocksize, blocksize);
}

function placeapple() {
    appleX = Math.floor(Math.random() * columns) * blocksize;
    appleY = Math.floor(Math.random() * rows) * blocksize;
}

function placesnake() {
    snakeX = Math.floor(Math.random() * columns) * blocksize;
    snakeY = Math.floor(Math.random() * rows) * blocksize;
}

function changeDirection(e) {
    if (e.code == 'arrowup') {
        velocityX = 0;
        velocityY = -1;
    }
}