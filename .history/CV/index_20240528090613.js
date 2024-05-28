
function myFunction(x){
  x.classList.toggle("change");
  var boll = new CustomEvent("boll");
  document.dispatchEvent(boll);
}

window.onload = function(e) {
  document.addEventListener("boll", (e) => {
    e.classList.toggle("y");
    console.log("yes");
});
}


