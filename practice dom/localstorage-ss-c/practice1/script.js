
function applyTheme(theme) {
    document.body.classList.remove("dark", "light");
    document.body.classList.add(theme);

}

function getSystemTheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function setInitialTheme() {
    let storedTheme = localStorage.getItem("theme");
    applyTheme(storedTheme || getSystemTheme());
}

setInitialTheme();

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
    if (!localStorage.getItem("theme")) {
        applyTheme(getSystemTheme());
    }
});

document.querySelector("button").addEventListener("click", () => {
    const currentTheme = document.body.classList.contains("dark") ? "dark" : "light";
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    applyTheme(newTheme);

    localStorage.setItem("theme", newTheme);
})
