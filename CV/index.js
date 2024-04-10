function myFunction(x) {
  x.classList.toggle("change");

  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}