document.querySelector("#icons").onclick = function () {
    document.body.classList.toggle("light");

    let iconImg = document.querySelector("#icons .icon1"); // Select img inside <a>
    let iconText = document.querySelector("#icons"); // Select the <a> itself

    // Determine whether to switch to light or dark mode
    let isLightMode = document.body.classList.contains("light");

    // Update image and text based on mode
    let newImgSrc = isLightMode ? "image/moon.png" : "image/sun.png";
    let newText = isLightMode ? "Dark" : "Light";

    // Update the inner content of <a> (icon + text)
    iconText.innerHTML = `<img src="${newImgSrc}" class="icon1"> ${newText}`;
};

const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open');

    const isOpen = dropDownMenu.classList.contains('open');

    toggleBtnIcon.className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
};
