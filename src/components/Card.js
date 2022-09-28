export default class Card {
  constructor(data, template, { handleCurrentUser }, { handleCardClick }, { handleTrashClick }, { handleLikeClick }) {
    this._template = template; 
    this._data = data;
    this._element = null;
    this._handleCurrentUser = handleCurrentUser;
    this._handleCardClick = handleCardClick;
    this._handleTrashClick = handleTrashClick;
    this._handleLikeClick = handleLikeClick;
    this._currentUserId = null;
  }
  
  _getTemplate() {
    return this._template
    .cloneNode(true);
  }
  
  _setEventListeners() {
    this._cardLikeButton
    .addEventListener('click', this._handleLikeClick);

    this._cardDeleteButton
    .addEventListener('click', this._handleTrashClick);
    
    this._cardImage
    .addEventListener('click', this._handleCardClick);
  }

  getCardId = () => {
    return this._data._id;
  }

  getUserId = (userId) => {
    this._currentUserId = userId;
  }
  
  handleLikeButton = (evt, { addLike }, { removeLike }) => {
    this._addLike = addLike;
    this._removeLike = removeLike;
    
    if (this._cardLikeButton.classList.contains("photos__like-button_active")) {
      this._removeLike();
    } else {
      this._addLike();
    };
    
    evt.currentTarget.classList.toggle('photos__like-button_active');
  }

  setLikeButton = () => {
    const array = this._data.likes;
    array.forEach(like => {
      if (like._id === this._currentUserId) {
        this._cardLikeButton.classList.add('photos__like-button_active');
      }
    })
  }

  handleLikesCounter = (likesLength) => {
    this._likesLength = likesLength;
    this._likesCounter.textContent = this._likesLength;
  }
  
  handleDeleteCard = () => {
    if (this._data.owner._id === this._currentUserId) {
      this._element.remove();
      this._element = null;
      return this.getCardId();
    }
  }

  handleTrashIcon = (currentUserId) => {
    if (this._data.owner._id != currentUserId) {
      this._cardDeleteButton.classList.remove('button_type_delete');
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

    this._handleCurrentUser();
    this._handleName();

    this._cardImage.src = this._data.link;
    this._cardImage.alt = this._data.title;
    cardTitle.textContent = this._data.title;
    this._likesCounter.textContent = this._data.likes.length;

    this._setEventListeners();

    return this._element;
  }
}