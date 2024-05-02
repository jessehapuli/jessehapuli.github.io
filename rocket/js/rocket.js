var timer = null;

var countdownNumber = 10;


//state changing part
var changestate = function (state) {
    document.body.className = 'body-state'+ state;
    clearInterval(timer);
    countdownNumber = 5;
    document.getElementById('countdown').innerHTML = countdownNumber;

    if (state == 2) {
        timer = setInterval(function () {
            countdownNumber = countdownNumber -1;
            document.getElementById('countdown').innerHTML = countdownNumber;

            //nervous part
            if (countdownNumber ==5) {
                document.getElementById('nervous').className = 'nervous show';
            } else {
                document.getElementById('nervous').className = 'nervous'
            }

            if (countdownNumber > 1 && countdownNumber <= 4) {
    
                //catwalk part
            if (countdownNumber == 3) {
                DocumentFragment.getElementById('cantwalk').className = 'cantwalk show';
            } else {
                document.getElementById('cantwalk').className = 'cantwalk';
            }
        };
    
                if (countdownNumber <=-1) {
                    changestate(3);
                }
        }, 1300);

    }
    //success or failure/state 4 or 5 part
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
    if (state == 4) {
        console.log('sabaton fan')
    }

};