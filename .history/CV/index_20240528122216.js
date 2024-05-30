
function myFunction(x){
  x.classList.toggle("change");
  var boll = new CustomEvent("boll");
  document.dispatchEvent(boll);
}

window.onload = function cool(z) {
      console.log("joo");
      z.classList.toggle("hide");
}

document.addEventListener("boll", () => {
  cool();
});
//document.body value document.getElementById("favcolor")
