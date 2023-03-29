const themePanel = document.getElementsByClassName("themes")[0];
const themeButtons = document.getElementsByClassName("theme-button");
const themeToggleButton = document.getElementById("theme-toggle");
const body = document.getElementsByTagName("body")[0];

themeToggleButton.addEventListener("click", () => {
  themePanel.classList.toggle("open");
});

for (const button of themeButtons) {
  button.addEventListener("click", () => {
    body.classList.remove("light");
    body.classList.remove("default");
    body.classList.remove("dark");
    body.classList.remove("stupid");
    body.classList.add(button.getAttribute("data-theme"));
  });
}
