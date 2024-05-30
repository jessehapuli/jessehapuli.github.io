

  var z = document.getElementById("myDIV");

function newFunction() {
  let colorpicker = document.getElementById("colorpicker");

  setInterval(() => {
    let color = colorpicker.value;
    document.body.style.backgroundColor = color;
  }, 100);
}

  function myFunction(x){
    x.classList.toggle("change");
    var boll = new CustomEvent("boll");
    document.dispatchEvent(boll);
  }
  
  window.onload = function cool() {
    newFunction();
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
  



