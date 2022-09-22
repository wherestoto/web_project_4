import Popup from "./Popup";

export default class PopupWithDelete extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._formElement = this._popup.querySelector('.popup__form');
  }

  setSubmitAction(action) {
    this._handleSubmit = action;
  }

  open() {
    super.open();
    this._formElement.addEventListener('submit', this._handleSubmit);
  }

  close() {
    super.close();
    this._formElement.removeEventListener('submit', this._handleSubmit);
    this._formElement.reset();
  }
}