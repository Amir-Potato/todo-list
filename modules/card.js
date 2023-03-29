export function createCard(title, desc, removeFunc, editFunc, id) {
  const uniqueId = id || Math.random().toString(36).substring(2, 9);

  // Creates card elements
  let card = document.createElement("div");
  let cardTitle = document.createElement("h4");
  let cardDescription = document.createElement("p");
  let cardActions = document.createElement("div");
  let cardRemove = document.createElement("button");
  let cardEdit = document.createElement("button");

  // Assign title and description to the card
  cardTitle.innerText = title;
  cardDescription.innerText = desc;

  // Configures button and classes
  cardRemove.innerText = "Remove";
  cardEdit.innerText = "Edit";
  card.classList.add("card");

  // Appends card title, description, and actions to the card
  card.appendChild(cardTitle);
  card.appendChild(cardDescription);
  card.appendChild(cardActions);

  // Appends remove and edit buttons to the card actions
  cardActions.appendChild(cardRemove);
  cardActions.appendChild(cardEdit);

  // Listener for the remove and edit buttons
  cardRemove.addEventListener("click", () => removeFunc(uniqueId));
  cardEdit.addEventListener("click", () => editFunc(uniqueId));

  return { id: uniqueId, card: card };
}
