export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }

  // It stores the public methods `open()` and `close()` that will open and close the popup.
  open() {
    this._popup.classList.add('popup_opened');
    this.setEventListeners();
  }
  
  close() {
    this._popup.classList.remove('popup_opened');
    this.setEventListeners();
  }
  
  _handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
      this.close();
    }
  }
  
  setEventListeners() {
    // add `click` event listener to the close icon of the popup.
    // this._popup.querySelector('.popup__close-button').addEventListener('click', this.close);
    // The modal window should also close when users click on the shaded area around the form.
    if (this._popup.classList.contains('popup_opened')) {
      document.addEventListener('keydown', this._handleEscClose);
    } else {
      document.removeEventListener('keydown', this._handleEscClose);
    }
  }
}
