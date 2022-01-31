import { toggleModal, previewCardModal, popupImage, previewCaption } from "./utils.js";

export class Card {
  constructor(template, data) {
    this._template = template;
    this._data = data;
  }
  
  _getTemplate() {
    return this._template
    .cloneNode(true);
  }
  
  _setEventListeners() {
    this._cardLikeButton.addEventListener('click', (evt) => this._handleLikeButton(evt.target));
    this._cardDeleteButton.addEventListener('click', () => this._handleDeleteCard(this._element));
    this._cardImage.addEventListener('click', () => this._handlePreviewImage(this._data.link, this._data.title));
  }
  
  _handleLikeButton() {
    this._cardLikeButton.classList.toggle('photos__like-button_active');
  }
  
  _handleDeleteCard(element) {
    element.remove();
  }

  _handlePreviewImage(link, title) {
    popupImage.src = link;
    popupImage.alt = title;
    previewCaption.textContent = title;

    toggleModal(previewCardModal);
}
  
  generateCard() {
    this._element = this._getTemplate();

    this._cardLikeButton = this._element.querySelector('.button_type_like');
    this._cardDeleteButton = this._element.querySelector('.button_type_delete');
    this._cardImage = this._element.querySelector('.photos__card-img');
    this._cardTitle = this._element.querySelector('.photos__title');

    this._cardImage.src = this._data.link;
    this._cardImage.alt = this._data.title;
    this._cardTitle.textContent = this._data.title;

    this._setEventListeners();

    return this._element;
  }
}

export default Card;