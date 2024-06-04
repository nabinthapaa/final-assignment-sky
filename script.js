/**@type {HTMLInputElement} */
const theme_toggle = document.querySelector("#theme-toggle");

/**@type {HTMLUListElement} */
const nav_list = document.querySelector(".header__nav-list");

// Checks if the the user preference is dark mode or not
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.body.classList.add("dark");
    theme_toggle.click();
}

// Add fucntion to switch theme using switcher
theme_toggle.addEventListener("click", (e) => {
    document.body.classList.toggle("dark");
});

/**@type {HTMLButtonElement} */
const menu = document.querySelector("#menu-button");

// Displays the menu in mobile view
menu.addEventListener("click", (e) => {
    nav_list.classList.toggle("header__nav-list--show");
})

// Hides navigation menu when click on a link in mobile
nav_list.addEventListener("click", (e) => {
    if (e.target.tagName === "A" || e.target.tagName === "LI") {
        nav_list.classList.toggle("header__nav-list--show");
    }
})
