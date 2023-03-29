import { createCard } from "./modules/card.js";
import { titleInput, descriptionInput, buttonInput, listElement } from "./modules/domElements.js";
import { remove, edit} from "./modules/cardActions.js";
import { saveCards, loadCards } from "./modules/saving.js";

// Load cards from localStorage
let cardsData = loadCards();
let list = cardsData.map((data) => createCard(data.title, data.description, removeCard, editCard, data.id));

// Listen for sidebar button click
buttonInput.addEventListener("click", () => {
  const title = titleInput.value.trim();
  const description = descriptionInput.value.trim();

  // Add card to the list if title and description are provided
  if (title) {
    const newCard = createCard(title, description, removeCard, editCard);
    list.push(newCard);
    saveCardsData(list);
    render();
  }
});

function removeCard(id) {
  list = remove(list, id);
  saveCardsData(list);
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
  const render = () => {
    // Remove existing card elements
    while (listElement.firstChild) {
      listElement.removeChild(listElement.firstChild);
    }
    // Add card elements to the list
    for (const container of list) {
      listElement.appendChild(container.card);
    }
  };

  // Initial render to load from localStorage
  render();
