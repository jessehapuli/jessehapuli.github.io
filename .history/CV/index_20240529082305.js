var z = document.getElementById("myDIV");


function myFunction(x){
  x.classList.toggle("change");
  var boll = new CustomEvent("boll");
  document.dispatchEvent(boll);
}

window.onload = function cool() {
  document.addEventListener("boll", () => {
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

function lol() {
  z.style.display === "none";
}, { once: true };
setInterval(lol, 1000/10);