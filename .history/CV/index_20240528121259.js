
function myFunction(x){
  x.classList.toggle("change");
  var boll = new CustomEvent("boll");
  document.dispatchEvent(boll);
}

window.onload = function cool(z) {
  document.addEventListener("boll", function cool() {
      console.log("joo");
      z.classList.toggle("hide");
    });
}

//document.body value document.getElementById("favcolor")
