let colorpicker = document.getElementById('colorpicker');



  setInterval(()=>{
      let color = colorpicker.value;
      document.body.style.backgroundColor = color;
  }, 200);

var z = document.getElementById("myDIV");



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




