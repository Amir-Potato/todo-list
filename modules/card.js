export function createCard(title, desc) {

//creates card elements
  let cardContainer = document.createElement('div');
  let card = document.createElement('div');
  let cardTitle = document.createElement('h4');
  let cardDescription = document.createElement('p');
  let cardActions = document.createElement('div');
  let cardRemove = document.createElement('button');

// assign title and description to the card
  cardTitle.innerText = title;
  cardDescription.innerText = desc;

//configures button and classes
  cardRemove.innerText = 'Remove';
  card.classList.add('card');
  cardContainer.classList.add('card-container');

//appends card element to the card container
  cardContainer.appendChild(card);

//appends card title, description, and actions to the card
  card.appendChild(cardTitle);
  card.appendChild(cardDescription);
  card.appendChild(cardActions);

//appends remove button to the card actions
  cardActions.appendChild(cardRemove);

//listener for the remove button
  cardRemove.addEventListener('click', () => {
    cardContainer.removeChild(card);
  });


  return cardContainer;
}