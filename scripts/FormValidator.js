export class FormValidator {
  constructor(settings, formElement) {
    this._settings = settings;
    this._formElement = formElement;
  } 
  
  _showInputError(inputElement, settings) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(settings.inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(settings.errorClass);
  }
  
  _hideInputError(inputElement, settings) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(settings.inputErrorClass);
    inputElement.classList.remove(settings.errorClass);
    errorElement.textContent = '';
  }
  
  _checkInputValid(inputElement, settings) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, settings);
    } else {
      this._hideInputError(inputElement, settings);
    }
  }
  
  _hasInvalidInput(inputList) {
    return inputList.some(inputElement => !inputElement.validity.valid);
  }
  
  _toggleButtonState(inputList, buttonElement, { inactiveButtonClass }) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.setAttribute('disabled', true);
      buttonElement.classList.add(inactiveButtonClass);
    } else {
      buttonElement.removeAttribute('disabled');
      buttonElement.classList.remove(inactiveButtonClass);
    }
  }
  
  _resetErrorValidation(modalWindow) {
    const errorLineVisible = modalWindow.querySelectorAll('.popup__input_type_error');
    const errorTextVisible = modalWindow.querySelectorAll('.popup__error_visible');
    errorLineVisible.forEach(errorLine => {
      errorLine.classList.remove('popup__input_type_error');
    });
    errorTextVisible.forEach(errorText => {
      errorText.textContent = '';
    });
  }
  
  _setEventListeners() {
    const inputList = Array.from(this._formElement.querySelectorAll(this._settings.inputSelector));
    const buttonElement = this._formElement.querySelector(this._settings.submitButtonSelector);

    inputList.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        this._checkInputValid(inputElement, this._settings);
        this._toggleButtonState(inputList, buttonElement, this._settings);
      });
    });
  }
  
  enableValidation() {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners(this._settings);
  }
}

export default FormValidator;