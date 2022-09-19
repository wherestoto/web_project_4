import Popup from "./Popup";

export default class PopupWithDelete extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._formElement = this._popup.querySelector('.popup__form');
  }

  open() {
    super.open();
    this._formElement.addEventListener('submit', this._handleDeleteSubmit);
    console.log("this._cardElement: ", this._cardElement);
  }

  close() {
    super.close();
    this._formElement.removeEventListener('submit', this._handleDeleteSubmit);
    this._formElement.reset();
  }

  _handleDeleteSubmit = (evt) => {
    evt.preventDefault();
  }
}