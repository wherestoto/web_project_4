export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    // this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popup.classList.add('popup_opened');
    this._setEventListeners();
  }

  close = () => {
    this._popup.classList.remove('popup_opened');
    this._removeEventListeners();
  }

  /* REVIEWER NOTES:
  // addEventListener and removeEventListener 
  // should be called with the same 
  // arguments compared by reference.
  
  // Here a new function is created so, 
  // Declare close as an arrow function to not lose the context.
  close = ()  => {  ... } // this is a Popup instance

  // when open
  this._closeButton.addEventListener("click", this.close)

  // when close
  this._closeButton.removeEventListener("click", this.close) 
 */
  
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