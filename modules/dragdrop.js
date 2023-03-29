import { render, list } from "../script.js";

const cards = document.getElementsByClassName("card");
const drags = document.getElementsByClassName("drag-texture");

let currentlyDragging = "";

for (const drag of drags) {
  drag.addEventListener("mousedown", (ev) => {
    currentlyDragging = drag.parentElement.getAttribute("data-id");
  });
  drag.addEventListener("mouseup", (ev) => {
    currentlyDragging = "";
  });
  drag.addEventListener("click", (ev) => {
    currentlyDragging = "";
  });
}

for (const card of cards) {
  card.addEventListener("mouseenter", (ev) => {
    if (
      currentlyDragging != "" &&
      currentlyDragging != card.getAttribute("data-id")
    ) {
      swap(card.getAttribute("data-id"), currentlyDragging);
    }
  });
}

const swap = (prevId, newId) => {
  let i1;
  let i2;

  for (let i = 0; i < list.length; i++) {
    if (list[i].id == prevId) {
      i1 = i;
    }
    if (list[i].id == newId) {
      i2 = i;
    }
  }

  if (i1 != i2) {
    const prevCard = list[i1];
    const newCard = list[i2];
    list[i1] = newCard;
    list[i2] = prevCard;
  }

  render();
};
