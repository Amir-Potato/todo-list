import { titleInput, descriptionInput } from "./domElements.js";
import { getList, setList } from "../script.js";

export function remove(id) {
  let list = getList();
  list = list.filter((container) => container.id != id);
  setList(list);
}

export function edit(id) {
  let list = getList();

  const container = list.filter((container) => container.id == id)[0];

  const title = container.card.querySelector("h4").innerText;
  const description = container.card.querySelector("p").innerText;

  titleInput.value = title;
  descriptionInput.value = description;

  remove(id);
}
