export default class Card {
  constructor(data, template, { handleCardClick }, { handleTrashClick }) {
    this._template = template; 
    this._data = data;
    this._element = null;
    this._handleCardClick = handleCardClick;
    this._handleTrashClick = handleTrashClick;
  }
  
  _getTemplate() {
    return this._template
    .cloneNode(true);
  }
  
  _setEventListeners() {
    this._cardLikeButton
    .addEventListener('click', this._handleLikeButton);

    this._cardDeleteButton
    .addEventListener('click', this._handleTrashClick);

    this._cardImage
    .addEventListener('click', this._handleCardClick);
  }
  
  _handleLikeButton = (evt) => {
    evt.currentTarget.classList.toggle('photos__like-button_active');
  }
  
  handleDeleteCard = () => {
    this._element.remove();
    this._element = null;
  }

  _handleTrashIcon = () => {
    if (this._data.owner._id != "5872314bc3b100b98081a62a") {
      this._cardDeleteButton.remove();
    }
  }

  _handleName = () => {
    // checks and reassigns cards with "name"
    if (this._data.name) {
      this._data.title = this._data.name;
    }
  }

  generateCard() {
    this._element = this._getTemplate();

    this._cardLikeButton = this._element.querySelector('.button_type_like');
    this._cardDeleteButton = this._element.querySelector('.button_type_delete');
    this._cardImage = this._element.querySelector('.photos__card-img');
    this._likesCounter = this._element.querySelector('.reaction__count_likes');
    const cardTitle = this._element.querySelector('.photos__title');

    this._handleTrashIcon();
    this._handleName();

    this._cardImage.src = this._data.link;
    this._cardImage.alt = this._data.title;
    cardTitle.textContent = this._data.title;
    this._likesCounter.textContent = this._data.likes.length;

    this._setEventListeners();

    return this._element;
  }
}