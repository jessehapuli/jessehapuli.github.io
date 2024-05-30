var z = document.getElementById("myDIV");



function myFunction(x){
  x.classList.toggle("change");
  var boll = new CustomEvent("boll");
  document.dispatchEvent(boll);
}

window.onload = function cool() {
  document.addEventListener("boll", () => {
      var z = document.getElementById("myDIV");
      if (z.style.display === "none") {
        z.style.display = "block";
      } else {
        z.style.display = "none";
      };
    });
    newFunction();
};
//document.getElementById("favcolor"), value = document.body




document.addEventListener("boller", () => {
  var z = document.getElementById("myDIV");
  window.getComputedStyle(z).visibility = "visible"
}, { once: true });




function newFunction() {
  if (window.getComputedStyle(z).visibility === "hidden") {
    var boller = new CustomEvent("boller");
  };
}

