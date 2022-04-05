export default class Card {
  constructor(data, template, { handleCardClick }) {
    this._template = template; 
    this._data = data;
    this._element = null;
    this._handleCardClick = handleCardClick;
  }
  
  _getTemplate() {
    return this._template
    .cloneNode(true);
  }
  
  _setEventListeners() {
    this._cardLikeButton
    .addEventListener('click', this._handleLikeButton);

    this._cardDeleteButton
    .addEventListener('click', this._handleDeleteCard);
    
    this._cardImage
    .addEventListener('click', this._handleCardClick);
  }
  
  _handleLikeButton = (evt) => {
    evt.currentTarget.classList.toggle('photos__like-button_active');
  }
  
  _handleDeleteCard = () => {
    this._element.remove();
    this._element = null;
  }

  generateCard() {
    this._element = this._getTemplate();

    this._cardLikeButton = this._element.querySelector('.button_type_like');
    this._cardDeleteButton = this._element.querySelector('.button_type_delete');
    this._cardImage = this._element.querySelector('.photos__card-img');
    const cardTitle = this._element.querySelector('.photos__title');

    this._cardImage.src = this._data.link;
    this._cardImage.alt = this._data.title;
    cardTitle.textContent = this._data.title;
    
    this._setEventListeners();

    return this._element;
  }
}