
function myFunction(x){
  x.classList.toggle("change");
  var boll = new CustomEvent("boll");
  document.dispatchEvent(boll);
}

window.onload = function cool() {
  z.style.display === "none";
  document.addEventListener("boll", () => {
      var z = document.getElementById("myDIV");
      if (z.style.display === "none") {
        z.style.display = "block";
      } else {
        z.style.display = "none";
      };
    });
};
//document.body value document.getElementById("favcolor")

document.addEventListener("boll", () => {
  console.log("wor")
}, { once: true });


