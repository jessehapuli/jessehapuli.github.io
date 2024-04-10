function myFunction(x) {
  x.classList.toggle("change");
  var y = document.getElementByid("#myLinks");
  if (y.style.display === "block") {
    y.style.display = "none";
  } else {
    y.style.display = "block";
  }
}