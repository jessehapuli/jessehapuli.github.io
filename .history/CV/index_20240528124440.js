
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
      }
    });
}
//document.body value document.getElementById("favcolor")