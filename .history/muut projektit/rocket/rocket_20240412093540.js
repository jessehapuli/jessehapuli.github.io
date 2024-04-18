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
    make: 'falseWagen',
    type: 'polo',
    color: 'blue',
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
    }
};

