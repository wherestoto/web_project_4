import {addCardModalForm, addCardSubmitButton, profileEditModalForm, profileSubmitButton} from "./index.js";

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
  
  _toggleButtonState(inputList, buttonElement) {
    console.log(inputList);
    console.log(buttonElement);
    if (this._hasInvalidInput(inputList)) {
      buttonElement.setAttribute('disabled', true);
      buttonElement.classList.add(this._settings.inactiveButtonClass);
    } else {
      buttonElement.removeAttribute('disabled');
      buttonElement.classList.remove(this._settings.inactiveButtonClass);
    }
  }
  
  resetValidation() {
    const errorLineVisible = this._formElement.querySelectorAll('.popup__input_type_error');
    const errorTextVisible = this._formElement.querySelectorAll('.popup__error_visible');
    
    errorLineVisible.forEach(errorLine => {
      this._hideInputError(errorLine);
    });
    errorTextVisible.forEach(errorText => {
      errorText.textContent = '';
    });

    // deprecated this._resetCardFormValidation();
    addCardModalForm.reset();
    this._disableSubmitButton(addCardSubmitButton);

    // deprecated this._resetProfileFormValidation();
    profileEditModalForm.reset();
    this._enableSubmitButton(profileSubmitButton);
  }

  _disableSubmitButton(buttonElement) {
    // use this._toggleButtonState(); //However, inputList error at line 31
    buttonElement.setAttribute('disabled', true);
    buttonElement.classList.add(this._settings.inactiveButtonClass);
  }
  
  _enableSubmitButton(buttonElement) {
    // use this._toggleButtonState(); //However, inputList error at line 31
    buttonElement.removeAttribute('disabled');
    buttonElement.classList.remove(this._settings.inactiveButtonClass);
  }
  
  _setEventListeners() {
    const inputList = Array.from(this._formElement.querySelectorAll(this._settings.inputSelector));
    const buttonElement = this._formElement.querySelector(this._settings.submitButtonSelector);

    inputList.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement, this._settings);
        this._toggleButtonState(inputList, buttonElement, this._settings);
        console.log("inputList: ", inputList);
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
