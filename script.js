import { createCard } from "./modules/card.js";
const titleInput = document.getElementById("sidebar-title");
const descriptionInput = document.getElementById("sidebar-description");
const buttonInput = document.getElementById("sidebar-submit-button");
const listElement = document.getElementsByClassName("list")[0];

let list = [];

buttonInput.addEventListener("click", () => {
  const title = titleInput.value.trim();
  const description = descriptionInput.value.trim();

  if (title && description) {
    list.push(createCard(title, description, remove, edit));
  }

  render();
});

const remove = (id) => {
  list = list.filter((container) => container.id != id);

  render();
};

const edit = (id) => {
  const container = list.filter((container) => container.id == id)[0];

  const title = container.card.querySelector("h4").innerText;
  const description = container.card.querySelector("p").innerText;

  titleInput.value = title;
  descriptionInput.value = description;

  remove(id);
};

const render = () => {
  while (listElement.firstChild) {
    listElement.removeChild(listElement.firstChild);
  }

  for (const container of list) {
    listElement.appendChild(container.card);
  }
};
