
function myFunction(x){
  x.classList.toggle("change");
  var boll = new CustomEvent("boll");
  document.dispatchEvent(boll);
}

Element.addEventListener("boll", (e) => {
    classList.toggle("y");
    console.log("yes")
});

