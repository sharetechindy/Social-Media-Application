/*document.addEventListener('DOMContentLoaded', function() {
    const menu = document.createElement('ul');
    menu.id = 'menu';

    const menuItems = ['Home', 'Profile', 'Messages', 'Settings', 'Logout'];

    menuItems.forEach(item => {
        const menuItem = document.createElement('li');
        const menuLink = document.createElement('a');
        menuLink.href = `#${item.toLowerCase()}`;
        menuLink.textContent = item;
        menuItem.appendChild(menuLink);
        menu.appendChild(menuItem);
    });

    document.body.appendChild(menu);
});*/
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

