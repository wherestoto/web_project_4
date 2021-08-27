const showInputError = (formElement, inputElement, settings) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(settings.inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add(settings.errorClass);
}

const hideInputError = (formElement, inputElement, settings) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(settings.inputErrorClass);
  inputElement.classList.remove(settings.errorClass);
  errorElement.textContent = '';
}

const checkInputValid = (formElement, inputElement, settings) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, settings);
  } else {
    hideInputError(formElement, inputElement, settings);
  }
}

const hasInvalidInput = inputList => {
  return inputList.some(inputElement => !inputElement.validity.valid);
}

const toggleButtonState = (inputList, buttonElement, {inactiveButtonClass}) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(inactiveButtonClass);
  } else {
    buttonElement.classList.remove(inactiveButtonClass);
  }
}

const setEventListeners = (formElement, settings) => {
  const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
  const buttonElement = formElement.querySelector(settings.submitButtonSelector);
  inputList.forEach(inputElement => {
    inputElement.addEventListener('input', () => {
      checkInputValid(formElement, inputElement, settings);
      toggleButtonState(inputList, buttonElement, settings);
    })
  })
};

const enableValidation = (settings) => {
  const formList = Array.from(document.querySelectorAll(settings.formSelector));
  formList.forEach(formElement => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    }); 
    setEventListeners(formElement, settings);
  });
}

enableValidation({ /* This object is called a "settings object"; pass as "settings" parameter in enableValidation() */
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled", // includes style for inactive button;
  inputErrorClass: 'popup__input_type_error', // includes style for error border;
  errorClass: "popup__error_visible" // style for error message color
})