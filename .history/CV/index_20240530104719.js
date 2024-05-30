var z = document.getElementById("myDIV");



function myFunction(x){
  x.classList.toggle("change");
  var boll = new CustomEvent("boll");
  document.dispatchEvent(boll);

}

window.onload = function cool() {
  var z = document.getElementById("myDIV");
  if (z.style.display === "none") {
    z.style.display = "block";
  } else {
    z.style.display = "none";
  };
  document.addEventListener("boll", () => {
      var z = document.getElementById("myDIV");
      if (z.style.display === "none") {
        z.style.display = "block";
      } else {
        z.style.display = "none";
      };
    });
};
//document.getElementById("favcolor"), value = document.body

let colorpicker = document.getElementById('colorpicker');


function changecolor() {
  let color = colorpicker.value;
  document.body.style.backgroundColor = color;
}
