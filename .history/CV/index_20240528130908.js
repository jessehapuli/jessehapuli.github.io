
function myFunction(x){
  x.classList.toggle("change");
  var boll = new CustomEvent("boll");
  document.dispatchEvent(boll);
}



window.onload = function cool() {
  document.addEventListener("boll", () => {
    var boller = new CustomEvent("boller");
      var z = document.getElementById("myDIV");
      if (z.style.display === "none") {
        z.style.display = "block";
      } else {
        z.style.display = "none";
      }
    });
    z.style.display === "none";
};

onload = document.addEventListener("boller", () => {
  if (window.getComputedStyle(z).visibility === "hidden") {
    z.visibility = "visible";
  }
}, { once: true });
//document.body value document.getElementById("favcolor")