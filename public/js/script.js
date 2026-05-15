const header = document.querySelector("header");
const menu = document.querySelector("#menu-icon");
const navlist = document.querySelector(".navlist");
const toggle = document.getElementById("toggle_light_dark");
const navLinks = document.querySelectorAll(".navlist li a");

function updateThemeIcon() {
    if (!toggle) return;
    if (document.body.classList.contains("light_theme")) {
        toggle.className = "fa-solid fa-sun";
        toggle.setAttribute("aria-label", "Switch to dark mode");
    } else {
        toggle.className = "fa-solid fa-moon";
        toggle.setAttribute("aria-label", "Switch to light mode");
    }
}

function setTheme(theme) {
    if (theme === "dark") {
        document.body.classList.remove("light_theme");
        document.body.classList.add("dark_theme");
    } else {
        document.body.classList.remove("dark_theme");
        document.body.classList.add("light_theme");
    }
    localStorage.setItem("theme", theme);
    updateThemeIcon();
}

const storedTheme = localStorage.getItem("theme");
if (storedTheme === "dark" || storedTheme === "light") {
    setTheme(storedTheme);
} else {
    updateThemeIcon();
}

window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 40);
    menu.classList.remove("bx-x");
    navlist.classList.remove("open");
});

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navlist.classList.toggle("open");
};

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        menu.classList.remove("bx-x");
        navlist.classList.remove("open");
    });
});

if (toggle) {
    toggle.onclick = () => {
        if (document.body.classList.contains("light_theme")) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };
}

const revealTargets = document.querySelectorAll("section, .box, .row");
revealTargets.forEach((target) => target.classList.add("reveal"));

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                revealObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px"
    }
);

revealTargets.forEach((target) => revealObserver.observe(target));