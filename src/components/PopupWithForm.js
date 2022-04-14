import Popup from "./Popup";

export default class PopupWithForms extends Popup {
  constructor(popupSelector, { handleSubmit }) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
    this._formElement = this._popup.querySelector('.popup__form');
  }

  open() {
    this._formElement.addEventListener('submit', this._handleFormSubmit);
    super.open();
  }
  
  close = () => {
    this._formElement.reset();
    this._formElement.removeEventListener('submit', this._handleFormSubmit);
    super.close();
  }
  
  _getInputValues = () => {
    this._inputList = this._popup.querySelectorAll('.popup__input');
    this._formValues = {};
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }
  
  _handleFormSubmit = (evt) => {
    evt.preventDefault();
    this._handleSubmit(this._getInputValues());
  }
}