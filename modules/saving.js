export function loadCards() {
    const cardsData = JSON.parse(localStorage.getItem("cards")) || [];
    return cardsData;
  }
  
  export function saveCards(cards) {
    localStorage.setItem("cards", JSON.stringify(cards));
  }
