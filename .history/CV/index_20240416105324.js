var y = document.getElementById("ig");


function myFunction(x){
  x.classList.toggle("change");
  var event = new CustomEvent("event", { "detail": "an event" });
  document.dispatchEvent(event);
}


console.log("Hello world!");


y.document.addEventListener("event", function(){
    if (y.style.display === "none") {
      y.style.display = "block";
    } else {
      y.style.display = "none";
    }
});