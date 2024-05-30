//board
var board;
var Context;
var blocksize = 30;
var rows = 20;
var columns = 20;
var mesh = 1;

//sneak
var snakeX = blocksize * 5;
var snakeY = blocksize * 5;

//apple
var appleX = blocksize * 10;
var appleY = blocksize * 10;

window.onload = function() {
    board = document.getElementById("board");
    board.height = rows * blocksize;
    board.width = columns * blocksize;
    Context = board.getContext("2d");

    update();
    placefood();
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
    appleX = math.floor(math.random() * columns) * blocksize;
    appleY = math.floor(math.random() * rows) * blocksize;
}