
var x = document.getElementById("myBtn");

function myFunction(x){
  x.classList.toggle("change");
  var event = new CustomEvent("event");
  document.dispatchEvent("event");
}


console.log("Hello world!");

  function aFuction(y) {
    var y = document.getElementById("ig");
    if (y.style.display === "none") {
      y.style.display = "block";
    } else {
      y.style.display = "none";
    }
  };

  document.addEventListener("event");

  //split merge.
  var burger = document.getElementById("burger");