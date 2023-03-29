const themePanel = document.getElementsByClassName("themes")[0];
const themeButtons = document.getElementsByClassName("theme-button");
const themeToggleButton = document.getElementById("theme-toggle");
const body = document.getElementsByTagName("body")[0];

function saveTheme(theme) {
  localStorage.setItem("theme", theme);
}

function loadTheme() {
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme) {
    body.classList.add(storedTheme);
  } else {
    // Set a default theme if no theme is stored
    body.classList.add("default");
    saveTheme("default");
  }
}

function changeTheme(theme) {
  // Remove existing theme classes
  for (const button of themeButtons) {
    body.classList.remove(button.getAttribute("data-theme"));
  }

  // Add the new theme class
  body.classList.add(theme);
  saveTheme(theme);
}

themeToggleButton.addEventListener("click", () => {
  themePanel.classList.toggle("open");
});

for (const button of themeButtons) {
  button.addEventListener("click", () => {
    changeTheme(button.getAttribute("data-theme"));
  });
}

loadTheme();