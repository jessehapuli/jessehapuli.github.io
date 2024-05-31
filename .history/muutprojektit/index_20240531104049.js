var numbah = prompt("what's 9+10?");
numbah = Number(numbah)

if (numbah == ("21")) {
    alert("you stoopid")
    console.log(numbah)
} else {
    console.log(numbah)
}

if (numbah >= 18) {
    changeText();
}


    function changeText(id) {
        id.innerHTML = "0";
    }
