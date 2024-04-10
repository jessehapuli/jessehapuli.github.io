function myFunction(x) {
  x.classList.toggle("change");
}

function myFunction() {
  var x = document.getElementByid("#myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}