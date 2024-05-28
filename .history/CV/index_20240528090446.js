
function myFunction(x){
  x.classList.toggle("change");
  var boll = new CustomEvent("boll");
  document.dispatchEvent(boll);
}

window.onload = function() {
  document.addEventListener("boll", (e) => {
    x.classList.toggle("y");
    console.log("yes");
});
}


