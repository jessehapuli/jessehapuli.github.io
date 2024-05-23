function myFunction(x){
  x.classList.toggle("change");
  var event = new CustomEvent("event", { "detail": "Example of an event" });
  document.dispatchEvent(event);
}



  //split merge.
//  var burger = function () {
//    var currentClassName = document.getElementById('cool').className;

//    if (currentClassName == 'cool') {
//        document.getElementById('cool').className = 'cool drop';
//    } else {
//    document.getElementById('cool').className = 'cool';
//    }
 // };

document.addEventListener("event", (e) => {
  var currentClassName = document.getElementById('cool').className;

  if (currentClassName == 'cool') {
      document.getElementById('cool').className = 'cool drop';
  } else {
  document.getElementById('cool').className = 'cool';
  }
}, { once: true });