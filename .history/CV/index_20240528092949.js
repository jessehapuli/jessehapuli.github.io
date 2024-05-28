
function myFunction(x){
  x.classList.toggle("change");
  var boll = new CustomEvent("boll");
  document.dispatchEvent(boll);
}

window.onload = function yi(z) {
  document.addEventListener("boll", () => {
    console.log("joo");
    z.classList.toggle("hide");
});
}


