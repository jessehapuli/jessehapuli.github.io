
function myFunction(x){
  x.classList.toggle("change");
  var boll = new CustomEvent("boll");
  document.dispatchEvent(boll);
}

function useless() {
  document.addEventListener("boll", (e) => {
    classList.toggle("y");
    console.log("yes")
});
}


