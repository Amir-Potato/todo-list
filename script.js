import { createCard } from "./modules/card.js";
import { titleInput, descriptionInput, buttonInput, listElement } from "./modules/domElements.js";
import { remove, edit} from "./modules/cardActions.js";
import { saveCards, loadCards } from "./modules/saving.js";

// Load cards from localStorage

export let list = loadCards();


// Listen for sidebar button click
buttonInput.addEventListener("click", () => {
  const title = titleInput.value.trim();
  const description = descriptionInput.value.trim();

  //Add card to the list of title and description are provided
  if (title && description) {
    list.push(createCard(title, description, remove, edit));

  }
});


// Remove card by id
function remove(id) {
  list = list.filter((container) => container.id != id);

  render();
}

function editCard(id) {
  list = edit(list, id);
  render();
}

function saveCardsData(cards) {
  const cardsData = cards.map((container) => ({
    id: container.id,
    title: container.card.querySelector("h4").innerText,
    description: container.card.querySelector("p").innerText,
  }));
  saveCards(cardsData);
}


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
//initial render to load from localStorage
render();

