var icon = document.getElementById("icon");

icon.onclick = function () {
    document.body.classList.toggle("light");
    if (document.body.classList.contains("light")) {
        icon.src = "image/moon.png";
    } else {
        icon.src = "image/sun.png";
    }
}
