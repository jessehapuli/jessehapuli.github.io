
function myFunction(x){
  x.classList.toggle("change");
  var boll = new CustomEvent("boll");
  document.dispatchEvent(boll);
  var boller = new CustomEvent("boller");
  document.dispatchEvent(boller);
}

document.addEventListener("boller", () => {
  if (window.getComputedStyle(z).visibility === "hidden") {
    (z).visibility = "visible";
    console.log("yi")
  }
}, { once: true });

window.onload = function cool() {
  document.addEventListener("boll", () => {
      var z = document.getElementById("myDIV");
      if (z.style.display === "none") {
        z.style.display = "block";
      } else {
        z.style.display = "none";
      }
    });
    z.style.display === "none";
};
//document.body value document.getElementById("favcolor")