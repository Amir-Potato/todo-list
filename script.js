import { createCard } from "./modules/card.js";
const titleInput = document.getElementById("sidebar-title");
const descriptionInput = document.getElementById("sidebar-description");
const buttonInput = document.getElementById("sidebar-submit-button");
const listElement = document.getElementsByClassName("list")[0];

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
  // Render updated list
  render();
});

// Remove card by id
function remove(id) {
  list = list.filter((container) => container.id != id);
  render();
}

// Edit card by id
function edit(id) {
  const container = list.filter((container) => container.id == id)[0];

  const title = container.card.querySelector("h4").innerText;
  const description = container.card.querySelector("p").innerText;
  // Update input fields with the selected card's title and description
  titleInput.value = title;
  descriptionInput.value = description;
  // Remove the card from the list
  remove(id);
}
// Load cards from localStorage
function loadCards() {
  const cardsData = JSON.parse(localStorage.getItem("cards")) || [];
  return cardsData.map((data) =>
    createCard(data.title, data.description, remove, edit, data.id)
  );
}
// Save cards to localStorage
function saveCards(cards) {
  const cardsData = cards.map((container) => ({
    id: container.id,
    title: container.card.querySelector("h4").innerText,
    description: container.card.querySelector("p").innerText,
  }));
  localStorage.setItem("cards", JSON.stringify(cardsData));
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
