
function myFunction(x){
  x.classList.toggle("change");
  var boll = new CustomEvent("boll");
  document.dispatchEvent(boll);
}

document.addEventListener("boll", (e) => {
    classList.toggle("y");
});

