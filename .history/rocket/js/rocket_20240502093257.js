var timer = null;

var countdownNumber = 10;

var changestate = function (state) {
    document.body.className = 'body-state'+ state;
    clearInterval(timer);
    countdownNumber = 10;
    document.getElementById('countdown').innerHTML = countdownNumber;

    if (state == 2) {
        timer = setInterval(function () {
            countdownNumber = countdownNumber -1;
            document.getElementById('countdown').innerHTML = countdownNumber;
                if (countdownNumber <=-1) {
                    changestate(3);
                }
        }, 200);

    }
    else if (state == 3) {
        var success = setTimeout(function(){
            var randomNumber = Math.round(Math.random()*10);

            console.log('randomNumber', randomNumber)

            if (randomNumber > 4) {
                changestate(4);
            } else {
             changestate(5);
            }
        }, 2000);
    }
};