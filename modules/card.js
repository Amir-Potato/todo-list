export function createCard(title, desc) {
  let card = document.createElement('div');
  let cardTitle = document.createElement('h4');
  let cardDescription = document.createElement('p');
  let cardActions = document.createElement('div');

  cardTitle.innerText = title;
  cardDescription.innerText = desc;

  card.appendChild(cardTitle);
  card.appendChild(cardDescription);
  card.appendChild(cardActions);

  card.classList.add('card');

  return card;
}