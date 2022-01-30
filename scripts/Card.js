export class Card {
  constructor(text, image) {
    this._text = text;
    this._image = image;
  }
  // template element selector
  _getTemplate() {
    const cardElement = document
    .querySelector("#card-template")
    .content
    .querySelector(".card")
    .cloneNode(true);

    return cardElement
  }
  // private method for working with markup and adding event listeners
  _setEventListeners() {
  
  }
  
  // private method for each event handler
  
  // public method for returning a fully functioning card element populated with data
  generateCard() {
    this._element = this._getTemplate();

    this._setEventListeners();

    this._element.querySelector(".photos__title").textContent = this._text;
    this._element.querySelector(".photos__card-img").src = this._image;

    return this._element;
  }
}
/* 
initialCards.forEach((item) => {
  const card = new Card(item.text, item.image);
  const cardElement = card.generateCard();

  document.querySelector(".photos__card-grid").prepend(cardElement);
}) */