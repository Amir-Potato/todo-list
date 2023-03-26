import { createCard } from "./modules/card.js"
const titleInput = document.getElementById("sidebar-title")
const descriptionInput = document.getElementById("sidebar-description")
const buttonInput = document.getElementById("sidebar-submit-button")
const listElement = document.getElementsByClassName("list")[0]

buttonInput.addEventListener("click", () => {
    const title = titleInput.value.trim();
    const description = descriptionInput.value.trim()

    if (title && description){
        listElement.appendChild(createCard(title, description))
    }
})
