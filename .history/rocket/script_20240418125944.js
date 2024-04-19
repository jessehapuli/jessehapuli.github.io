var sayMyName = function (name) {
    alert ('Youre: '+name);
}

var favcolor = 'bred';
var myfavcolor = ['blue', 'black', 'green'];
var numoffavcolors = 3;
var hsagotfavcolor = true;
var jeobject = {
    firstname: 'Je',
    lastname: 'ss',
    thirdname: 'e',
    favcolor: ['blue', 'red', 'green']
    ,
    yearsalive: '4.6bilj',
    ismale: true,
}

var car = {
    make: 'wolksWagen',
    type: 'Beetle',
    color: 'lightBlue',
    IsTurnedOn: false,
    numberofwheels: 4,
    seats: [
        'seat 1',
        'seat 2',
        'seat 3',
        'seat 4',
        'seat 5'
    ],

    TurnOn: function () {
        this.IsTurnedOn = true;
    },

        switchcar: function (isOn) {
    console.log('turncar'+isOn)
        ;
    if (isOn == true) {
        this.IsTurnedOn = true;
    } else {
        this.IsTurnedOn = false;
        }
    },

    
    fly: function () {
        alert('fly');
    }

};

var car2 = {
    type: 'dispencer',
    color: 'red',
    level: '1',
    hp: '100',
    canfly: 'True',
    seats: [
        'seat 1',
        'seat 2'
    ],

    IsTurnedOn: (true),

    flyightMode: function () {
        if (vector > 100) {
            this.flyightMode.IsTurnedOn = true
        } else {
            this.flyightMode.IsTurnedOn = false
        }
    }

}

var doCoolStuff = function () {
    var currentclassname = document.getElementById('cool').className;
    document.getElementById('cool').className = 'cool red';
}