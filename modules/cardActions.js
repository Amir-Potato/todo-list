import { titleInput, descriptionInput } from "./domElements.js";

export function remove(list, id) {
  list = list.filter((container) => container.id != id);
  return list;
}

export function edit(list, id) {
  const container = list.filter((container) => container.id == id)[0];

  const title = container.card.querySelector("h4").innerText;
  const description = container.card.querySelector("p").innerText;

  titleInput.value = title;
  descriptionInput.value = description;

  list = remove(list, id);
  return list;
}

