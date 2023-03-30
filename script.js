import { createCard } from "./modules/card.js";
import {
  titleInput,
  descriptionInput,
  buttonInput,
  listElement,
} from "./modules/domElements.js";
import { remove, edit } from "./modules/cardActions.js";
import { saveCards, loadCards } from "./modules/saving.js";

// Load cards from localStorage
let list = loadCards();

export const getList = () => {
  return list;
};

export const setList = (newList) => {
  list = newList;
  render();
};

// Listen for sidebar button click
buttonInput.addEventListener("click", () => {
  const title = titleInput.value.trim();
  const description = descriptionInput.value.trim();

  let tempList = getList();

  //Add card to the list of title and description are provided
  if (title) {
    tempList.push(createCard(title, description, remove, edit));
  }

  setList(tempList);
});

// Render the list of cards
export const render = () => {
  // Remove existing card elements
  while (listElement.firstChild) {
    listElement.removeChild(listElement.firstChild);
  }
  //Add card elements to the list
  for (const container of list) {
    listElement.appendChild(container.card);
  }

  saveCards(list);
};
//initial render to save to localStorage
render();
