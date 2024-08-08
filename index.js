function newFunction() {
    let colorpicker = document.getElementById("colorpicker");
  
    setInterval(() => {
      let color = colorpicker.value;
      document.body.style.backgroundColor = color;
    }, 100);
  }
  
  setInterval(()=>{
    let color = colorpicker.value;
    document.body.style.backgroundColor = color;
}, 200);