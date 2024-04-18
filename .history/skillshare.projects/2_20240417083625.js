var url = prompt ("inser url");

if(url.substr(0, 4) == "http") {
    console.log("ok")
} else {
    url = "http://" + url
}

var spannode = document.getElementById(my);
spannode.innerHTML = url