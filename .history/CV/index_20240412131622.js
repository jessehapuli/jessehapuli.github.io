var x = document.getElementById("ig");


function myFunction(x){
  x.classList.toggle("change");
  var event = new CustomEvent("event", { "detail": "Example of an event" });
  document.dispatchEvent(event);
}


console.log("Hello world!");


document.addEventListener("event", function(){
  //This is the secondary function
  //or the function I need to run after the main function is called
  function aFuction() {
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
});
// call main
myFunction();