function setTheme(theme) {
    if (theme === "dark") {
        document.querySelector(':root').classList.add("dark");
    } else {
        document.querySelector(':root').classList.remove("dark");
    }
}

function retrieveCurrentTheme() {
    const savedTheme = localStorage.getItem("idontlikeads-theme");
    if (typeof savedTheme == "string") {
        return savedTheme;
    } else {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            return "dark";
        } else {
            return "light";
        }
    }
}

function loadTheme() {
    const theme = retrieveCurrentTheme();
    setTheme(theme);
}

function toggleTheme() {
    let toggled = null;
    if (document.querySelector(':root').classList.contains("dark")) {
        localStorage.setItem("idontlikeads-theme", "light");
        loadTheme();
        toggled = "light";
    } else {
        localStorage.setItem("idontlikeads-theme", "dark");
        loadTheme();
        toggled = "dark";
    }
}

const addThemeChangeListener = btn => btn.addEventListener('click', toggleTheme);
const forEachThemeChanger = func => document.querySelectorAll('.theme-changer').forEach(func);

window.addEventListener('DOMContentLoaded', () => forEachThemeChanger(addThemeChangeListener));
loadTheme();