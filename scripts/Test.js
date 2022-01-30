// FormValidator.js class
/*
Instructions:
- [ ]  Create the `FormValidator` class, which sets settings for validating form fields according to the following requirements:
    - [ ]  Its constructor has two parameters. The first parameter is a settings object that stores selectors and form classes, and the second one takes a form element to be validated.
    - [ ]  It has private methods for processing the form, which include: checking the field's validity, changing the state of the `Submit` button, and adding all the needed handlers.
    - [ ]  It has a public method `enableValidation()`, which enables form validation.
- [ ]  Create an instance of the `FormValidator` class for each form that should be validated.
*/

/* class FormValidator {

  constructor(settings, formElement) {
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;

    this._form = formElement;
  }

  _showInputError(inputElement) {
    const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(settings.inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(settings.errorClass);
  }

  _hideInputError() {

  }

  _checkInputValid() {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, settings);
    } else {
      hideInputError(formElement, inputElement, settings);
    }
  }

  _hasInvalidInput() {

  }

  _toggleButtonState() {
      if (hasInvalidInput(this._inputList)) {
        this._buttonElement.setAttribute('disabled', true);
        this._buttonElement.classList.add(this._inactiveButtonClass);
      } else {
        this._buttonElement.removeAttribute('disabled');
        this._buttonElement.classList.remove(this._inactiveButtonClass);
      }
  }

  _setEventListeners() {
    this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
    this._buttonElement = this._form.querySelector(this._submitButtonSelector);

    inputList.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        checkInputValid(this._form, inputElement, settings);
        toggleButtonState(inputList, buttonElement, settings);
      })
    })
  }

  enableValidation() {
    // public function to call it later
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    }); 
    setEventListeners(formElement, settings);
  }

} */

/* const editFormValidator = new FormValidator(settings, editForm);
const addFormValidator = new FormValidator(settings, addForm); */