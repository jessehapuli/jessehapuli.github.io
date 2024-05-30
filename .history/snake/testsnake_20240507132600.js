//board
var board;
var Context;
var blocksize = 20;
var rows = 20;
var columns = 20;

window.onload = function() {
    board = document.getElementById("board");
    board.height = rows * blocksize;
    board.width = columns * blocksize;
    context = board.getContext("2d");

    update();
}



function update() {
    context.fillStyle="rgb(155, 180, 210)";
    context.fillRect(0, 0, board.width, board.height);

}