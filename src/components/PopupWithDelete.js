import Popup from "./Popup";

export default class PopupWithDelete extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._formElement = this._popup.querySelector('.popup__form');
  }

  setSubmitAction = (action) => {
    this._handleSubmit = action;
  }

  open() {
    super.open();
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleSubmit(evt);
    });
  }
  
  close() {
    super.close();
    this._formElement.reset();
    this._formElement.removeEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleSubmit(evt);
    });
  }
}