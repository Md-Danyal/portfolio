document.addEventListener("DOMContentLoaded", function () {
    let iconElement = document.querySelector("#icons"); // First button
    let navbarIcon = document.querySelector(".icon"); // Second button
    let body = document.body;

    function toggleTheme() {
        console.log("Theme toggled!"); // Debugging log
        body.classList.toggle("light");
        let isLightMode = body.classList.contains("light");

        // New images and text
        let newImgSrc = isLightMode ? "image/moon.png" : "image/sun.png";
        let newText = isLightMode ? "Dark" : "Light";

        // Update #icons (text and image)
        if (iconElement) {
            iconElement.innerHTML = `<img src="${newImgSrc}" class="icon1"> ${newText}`;
        }

        // Update navbar icon image
        if (navbarIcon) {
            navbarIcon.src = newImgSrc;
        }
    }

    // Event listeners for both buttons
    if (iconElement) {
        iconElement.addEventListener("click", toggleTheme);
    }

    if (navbarIcon) {
        navbarIcon.addEventListener("click", toggleTheme);
    }
});

const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open');

    const isOpen = dropDownMenu.classList.contains('open');

    toggleBtnIcon.className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
};

let pC1 = document.querySelector(".projectCard");

const textOptions = [
    "Surprise! Click to Reveal a New Color!",
    "Click for a Random Surprise!",
    "A Hidden Color Lies Within... Tap to Unveil!",
    "Refreshing Colors... Try Again!",
    "Unlock a Secret Shade – Click Me!",
    "What’s Your Lucky Color? Click to Find Out!",
    "A New Shade Awaits – Dare to Click?",
    "Click & Watch the Colors Change!",
    "Till my new project is coming CLICK ME! for the surprise... And don't forget to explore my page.There are more things to Explore.",
    "There is a Light theme of this page also!",
    "You can mail me your valuable feedback!",
    "You can mail me future improvement's for my portfolio website also!",
    "Click on Social Media Apps icons for connecting with me on different social media apps.",
    "Thank's for viewing my page!",
    "Click Netflix clone Above to see my Netflix clone website.",
    "You can tire but new color's will alway's ready in the queue!"
];


pC1.addEventListener("click", function () {

    let RandomColor = getRandomColor();
    let txt = document.querySelector(".random")
    let div = document.querySelector(".projectCard");
    div.style.backgroundColor = RandomColor;

    let randomText = textOptions[Math.floor(Math.random() * textOptions.length)];
    txt.textContent = randomText;
});

function getRandomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    let color = `rgb(${red},${green},${blue})`;
    return color;
};
