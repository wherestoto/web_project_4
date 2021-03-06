export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this.close = this.close.bind(this);
  }

  open() {
    this._popup.classList.add('popup_opened');
    this._setEventListeners();
  }

  close() {
    this._popup.classList.remove('popup_opened');
    this._removeEventListeners();
  }
  
  _handleEscClose = (evt) => {
    if (evt.key === 'Escape') this.close();
  }
  
  _checkOverlayContainer = (evt) => {
    if (!evt.target.closest('.popup__container')) {
      evt.currentTarget.closest('.popup').classList.remove('popup_opened');
    };
  }

  _removeEventListeners() {
    this._closeButton.removeEventListener('click', this.close);
    
    this._popup.removeEventListener('click', this._checkOverlayContainer);
    
    document.removeEventListener('keydown', this._handleEscClose);
  }
  
  _setEventListeners() {
    this._closeButton = this._popup.querySelector('.popup__close-button'); 
    this._closeButton.addEventListener('click', this.close);
    
    this._popup.addEventListener('click', this._checkOverlayContainer);

    if (this._popup.classList.contains('popup_opened')) {
      document.addEventListener('keydown', this._handleEscClose);
    };
  }
}