export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }

  // It stores the public methods `open()` and `close()` that will open and close the popup.
  open() {
    this._popup.classList.add('popup_opened');
    this.setEventListeners();
    console.log("this._popup: ", this._popup);
  }
  
  close = () => {
    this._popup.classList.remove('popup_opened');
  }
  
  _handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
      this.close();
    }
  }
  
  _checkOverlayContainer = (evt) => {
    if (!evt.target.closest('.popup__container')) {
      evt.currentTarget.closest('.popup').classList.remove('popup_opened');
    };
  }
  
  setEventListeners() {
    // close icon evt listener
    this._popup.querySelector('.popup__close-button').addEventListener('click', this.close);
    
    // set overlay event listener:
    this._popupList = Array.from(document.querySelectorAll('.popup'));
    this._popupList.forEach(modalElement => {
      modalElement.addEventListener('click', this._checkOverlayContainer)
    });

    if (this._popup.classList.contains('popup_opened')) {
      document.addEventListener('keydown', this._handleEscClose);
    } else {
      document.removeEventListener('keydown', this._handleEscClose);
    }
  }
}