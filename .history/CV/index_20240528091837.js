
function myFunction(x){
  x.classList.toggle("change");
  var boll = new CustomEvent("boll");
  document.dispatchEvent(boll);
}

window.onload = function(z) {
  document.addEventListener("boll", (e), (z) => {
    z.classList.toggle("hide");
});
}


