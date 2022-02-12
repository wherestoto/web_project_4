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
    /* Code 1 for hiding error messages */
    // [
    //   ...this._formElement.querySelectorAll(this._settings.inputSelector),
    // ].forEach(input => this._hideInputError(input));

    /* Code 2 for hiding error messages */
    const invalidInputs = Array.from(this._formElement.querySelectorAll(this._settings.inputSelector));
    const buttonElement = this._formElement.querySelector(this._settings.submitButtonSelector);

    invalidInputs.forEach(input => {
      this._hideInputError(input);
    })
    
    /* Code for Resetting Current Form */
    this._formElement.querySelector(this._settings.formSelector).reset();
    
    /* Code for resetting submit buttons on profile edit form and new card form */
    // does not work... if card is disabled, profile is also disabled...
    this._toggleButtonState(invalidInputs, buttonElement, this._settings); 
    
    /* Specifically targets each submit button by using class names */
    // this._resetSubmitButton();
    
    // Reference Notes:
    // this._formElement.querySelectorAll(this._settings.submitButtonSelector); //'.popup__button'
    // this._formElement.querySelectorAll(this._settings.inactiveButtonClass); //'popup__button_disabled'
  }

  _resetSubmitButton() {
    this._disableSubmitButton(addCardSubmitButton);
    this._enableSubmitButton(profileSubmitButton);
  }
  
  _disableSubmitButton(buttonElement) {
    buttonElement.setAttribute('disabled', true);
    buttonElement.classList.add(this._settings.inactiveButtonClass);
  }
  
  _enableSubmitButton(buttonElement) {
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
