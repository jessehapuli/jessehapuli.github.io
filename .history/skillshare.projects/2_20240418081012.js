var url = prompt ("insert url");

if(url.substr(0, 4) != "http") {
    console.log("ok")
    url = "http://" + url
}

var spannode = document.getElementById("my");
spannode.innerHTML = "<a href='" + url + "'>" + url + "</a>";