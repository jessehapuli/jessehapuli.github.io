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

//velocity
var velocityX = 0;
var velocityY = 0;

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
    document.addEventListener("keyw", changeDirection);
    //update
    setInterval(update, 1000/10);
}



function update() {
    Context.fillStyle="rgb(217, 227, 255)";
    Context.fillRect(0, 0, board.width, board.height);

    Context.fillStyle="black";
    snakeX += velocityX;
    snakeY += velocityY;
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
    if (e.code == 'keyw') {
        velocityX = 0;
        velocityY = -1;
    }

    else if (e.code == 'keyd') {
        velocityX = -1;
        velocityY = 0;
    }

    else if (e.code == 'keys') {
        velocityX = 0;
        velocityY = 1;
    }

    else if (e.code == 'keya') {
        velocityX = 1;
        velocityY = 0;
    }
}

