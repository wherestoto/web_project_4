export class FormValidator {
  constructor(settings, formElement) {
    this._settings = settings;
    this._formElement = formElement;
  } 
  
  _showInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._settings.inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._settings.errorClass);
  }
  
  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._settings.inputErrorClass);
    inputElement.classList.remove(this._settings.errorClass);
    errorElement.textContent = '';
  }
  
  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, this._settings);
    } else {
      this._hideInputError(inputElement, this._settings);
    }
  }
  
  _hasInvalidInput(inputList) {
    return inputList.some(inputElement => !inputElement.validity.valid);
  }
  
  _disableSubmitButton() {
    this._buttonElement.setAttribute('disabled', true);
    this._buttonElement.classList.add(this._settings.inactiveButtonClass);
  }
  
  enableSubmitButton() {
    this._buttonElement.removeAttribute('disabled');
    this._buttonElement.classList.remove(this._settings.inactiveButtonClass);
  }

  _toggleButtonState() {
    if (this._hasInvalidInput(this._inputList)) {
      this._disableSubmitButton();
    } else {
      this.enableSubmitButton();
    }
  }
  
  resetValidation() {
    this._inputList.forEach(input => {
      this._hideInputError(input);
    })
    
    this._formElement.querySelector(this._settings.formSelector).reset();

    this._toggleButtonState();
  }

  _setEventListeners() {
    this._inputList = Array.from(this._formElement.querySelectorAll(this._settings.inputSelector));
    this._buttonElement = this._formElement.querySelector(this._settings.submitButtonSelector);
    
    this._inputList.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(); 
      });
    });
  }
  
  enableValidation() {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._toggleButtonState();
    });
    this._setEventListeners();
  }
}

export default FormValidator;