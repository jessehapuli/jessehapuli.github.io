
function myFunction(x){
  x.classList.toggle("change");
  var boll = new CustomEvent("boll");
  document.dispatchEvent(boll);
}

function cool(z){
  console.log("joo");
  z.classList.toggle("hide");
}

window.onload = document.addEventListener("boll", function cool () {

  });
//document.body value document.getElementById("favcolor")
