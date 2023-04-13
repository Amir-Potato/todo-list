import { createCard } from "./card.js";
import { remove, edit } from "./cardActions.js";

export function loadCards() {
  const cardsData = stringToCards(localStorage.getItem("cards") || "[]");
  return cardsData;
}

export function saveCards(cards) {
  localStorage.setItem("cards", cardsToString(cards));
}

function stringToCards(str) {
  const stringList = JSON.parse(str);

  return stringList.map((card) => {
    return createCard(
      card.card.title,
      card.card.description,
      remove,
      edit,
      card.id
    );
  });
}

function cardsToString(cards) {
  if (cards.length === 0) {
    return "[]";
  }

  let stringList = [];

  stringList = cards.map((card) => {
    return {
      id: card.id,
      card: {
        title: card.card.querySelector("h4").innerText,
        description: card.card.querySelector("p").innerText,
      },
    };
  });

  return JSON.stringify(stringList);
}
