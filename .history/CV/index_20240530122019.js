

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
  

  



