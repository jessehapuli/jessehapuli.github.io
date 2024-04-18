var y = document.getElementById("ig");


function myFunction(x){
  x.classList.toggle("change");
  var event = new CustomEvent("event", { "detail": "an event" });
  document.dispatchEvent(event);
}


console.log("Hello world!");


document.addEventListener("event", function(){
  function aFuction() {
    if (y.style.display === "none") {
      y.style.display = "block";
    } else {
      y.style.display = "none";
    }
  }
});
myFunction();