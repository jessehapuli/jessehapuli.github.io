function myFunction(x){
  x.classList.toggle("change");
}



  //split merge.
  var burger = function () {
    var currentClassName = document.getElementById('cool').className;

    if (currentClassName == 'cool') {
        document.getElementById('cool').className = 'cool red';
    } else {
    document.getElementById('cool').className = 'cool';
    }
  }
