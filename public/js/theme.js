const themeToggle = document.querySelector("#themeToggle");
const themeIcon = document.querySelector("#themeIcon");
const themeLabel = document.querySelector("#themeLabel");

// localStorage keeps the visitor's theme preference after page refreshes.
const savedTheme = localStorage.getItem("portfolio-theme");
const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const initialTheme = savedTheme || (systemPrefersDark ? "dark" : "light");

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  themeIcon.textContent = theme === "dark" ? "☀" : "☾";
  themeLabel.textContent = theme === "dark" ? "Light" : "Dark";
  localStorage.setItem("portfolio-theme", theme);
}

applyTheme(initialTheme);

// The button simply flips between dark and light mode by changing the html data attribute.
themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.dataset.theme;
  applyTheme(currentTheme === "dark" ? "light" : "dark");
});
