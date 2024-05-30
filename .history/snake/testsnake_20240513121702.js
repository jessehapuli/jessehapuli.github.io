//board
var board;
var Context;
var blocksize = 20;
var rows = 30;
var columns = 30;
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

//tail
var tailX;
var tailY;

//body
var snakebody = [];

window.onload = function() {
    board = document.getElementById("board");
    board.height = rows * blocksize;
    board.width = columns * blocksize;
    Context = board.getContext("2d");

    placesnake();
    placeapple();
    document.addEventListener("keyup", changeDirection);
    //update
    setInterval(update, 1000/10);
}

function update() {
    Context.fillStyle="rgb(255, 92, 51)";
    Context.fillRect(0, 0, board.width, board.height);

    Context.fillStyle="yellow";
    Context.fillRect(appleX, appleY, blocksize, blocksize);

    Context.fillStyle="gray";
    Context.fillRect(tailX, tailY, blocksize, blocksize);

    if (snakeX  == appleX && snakeY == appleY) {
        placeapple();
        snakebody.push([appleX, appleY])
    }

    Context.fillStyle="black";
    snakeX += velocityX * blocksize;
    snakeY += velocityY * blocksize;
    Context.fillRect(snakeX, snakeY, blocksize, blocksize);
    for (let i = 0; i < snakebody.length; i++) {
        Context.fillRect(snakebody[i][1], blocksize, blocksize);
    }
}

function changeDirection(e) {
    if (e.code == "KeyW" && velocityY != 1) {
        velocityX = 0;
        velocityY = -1;
    }

    else if (e.code == "KeyS" && velocityY != -1) {
        velocityX = 0;
        velocityY = 1;
    }

    else if (e.code == "KeyA" && velocityX != 1) {
        velocityX = -1;
        velocityY = 0;
    }

    else if (e.code == "KeyD" && velocityX != -1) {
        velocityX = 1;
        velocityY = 0;
    }
}




function placeapple() {
    appleX = Math.floor(Math.random() * columns) * blocksize;
    appleY = Math.floor(Math.random() * rows) * blocksize;
}

function placesnake() {
    snakeX = Math.floor(Math.random() * columns) * blocksize;
    snakeY = Math.floor(Math.random() * rows) * blocksize;
}



