
const themeToggle = document.getElementById("themeToggle");

// Load saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light");
    themeToggle.checked = true;
}

// Toggle theme
themeToggle.addEventListener("change", () => {

    document.body.classList.toggle("light", themeToggle.checked);

    localStorage.setItem(
        "theme",
        themeToggle.checked ? "light" : "dark"
    );

});
