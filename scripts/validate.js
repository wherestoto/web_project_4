const showInputError = (formElement, inputElement, errorMessage, settings) => {
  console.log("printed: ", errorMessage);
  console.log("inputElement.id 3: ", (`#${inputElement.id}-error`));
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(settings.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(settings.errorClass);
}

const hideInputError = (formElement, inputElement, settings) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(settings.inputErrorClass);
  inputElement.classList.remove(settings.errorClass);
  errorElement.textContent = '';
}

const checkInputValid = (formElement, inputElement, settings) => {
  console.log("inputElement 19: ", inputElement);
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, settings);
  } else {
    hideInputError(formElement, inputElement, settings);
  }
}

const setEventListeners = (formElement, settings) => {
  const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
  inputList.forEach(inputElement => {
    inputElement.addEventListener('input', () => {
      console.log("inputElement 34: ", inputElement);
      checkInputValid(formElement, inputElement, settings);
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