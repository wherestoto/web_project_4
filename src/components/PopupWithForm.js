import Popup from "./Popup";

export default class PopupWithForms extends Popup {
  constructor(popupSelector, { submitFormHandler }) {
    super(popupSelector);
    this._submitFormHandler = submitFormHandler;
    this._formSelector = this._popup.querySelector('.popup__form');
  }

  closeWithSuper = () => {
    super.close();
    this._formSelector.reset();
  }
  
  _handleFormEscClose = (evt) => {
    if (evt.key === 'Escape') {
      this.closeWithSuper();
    }
  }
  
  _checkFormOverlayContainer = (evt) => {
    if (!evt.target.closest('.popup__container')) {
      evt.currentTarget.closest('.popup').classList.remove('popup_opened');
      this._formSelector.reset();
    };
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
    
    this._submitFormHandler(this._getInputValues());
    
    this._formSelector.removeEventListener('submit', (evt) => {
      this._submitFormHandler(this._getInputValues());
    });
  }
  
  setEventListenersWithSuper() {
    this._popup.querySelector('.popup__close-button').addEventListener('click', this.closeWithSuper); 
    
    this._popupList = Array.from(document.querySelectorAll('.popup'));
    
    this._popupList.forEach(modalElement => {
      modalElement.addEventListener('click', this._checkFormOverlayContainer)
    });
    
    if (this._popup.classList.contains('popup_opened')) {
      document.addEventListener('keydown', this._handleFormEscClose);
    } else {
      document.removeEventListener('keydown', this._handleFormEscClose);
    };
    
    this._formSelector.addEventListener('submit', this._handleFormSubmit);
  }
}