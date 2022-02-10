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
    if (this._hasInvalidInput(inputList)) {
      this._disableSubmitButton(buttonElement);
    } else {
      this._enableSubmitButton(buttonElement);
    }
  }
  
  resetValidation() {
  [
    ...this._formElement.querySelectorAll(this._settings.inputSelector),
  ].forEach(input => this._hideInputError(input));

    // reset this._formElement instead of individual forms
    addCardModalForm.reset();
    this._disableSubmitButton(this._formElement.querySelector(this._settings.submitButtonSelector));

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
