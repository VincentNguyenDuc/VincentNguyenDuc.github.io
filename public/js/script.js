const header = document.querySelector("header");
window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 100);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');
let toggle = document.getElementById("toggle_light_dark");

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
}

toggle.onclick = () => {
    document.body.classList.toggle("light_theme")
    if (document.body.classList.contains("light_theme")) {
        toggle.className = "fa-solid fa-sun";
    } else {
        toggle.classList = "fa-solid fa-moon";
    }
}