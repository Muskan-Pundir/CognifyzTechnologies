document.addEventListener("DOMContentLoaded",function(){
    fetch("index.html")
    .then(Response => response.text())
    .then(data => {
        document.getElementById("topnav").innerHTML = data;
    });
});