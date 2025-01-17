var settingsMenu = document.querySelector('.settings-menu');
var darkBtn = document.getElementById('dark-btn');

function settingsMenuToggle() {
    settingsMenu.classList.toggle("settings-menu-height");
}

// Check the theme on page load
if (localStorage.getItem("theme") === "dark") {
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
} else {
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
}

darkBtn.onclick = function() {
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    if (localStorage.getItem("theme") === "light") {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.scrolly-section');
    const scrollPosition = window.scrollY;

    sections.forEach((section, index) => {
        if (scrollPosition >= index * window.innerHeight && scrollPosition < (index + 1) * window.innerHeight) {
            section.style.opacity = 1;
        } else {
            section.style.opacity = 0.5;
        }
    });
});

