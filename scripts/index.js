const page = document.querySelector('.page');
const profile = page.querySelector('.profile');
const popupEditBtn = profile.querySelector('.profile__edit-button');
const profileName = profile.querySelector('.profile__name');
const profileTitle = profile.querySelector('.profile__description');
const popup = page.querySelector('.popup');
const popupForm = popup.querySelector('.popup__form');
const popupCloseBtn = popup.querySelector('.popup__close-button');
const popupInputName = popup.querySelector('.popup__input_name');
const popupInputTitle = popup.querySelector('.popup__input_description');

function popupToggle() {
  popupInputName.value = profileName.textContent;
  popupInputTitle.value = profileTitle.textContent;
  popup.classList.toggle('popup_opened');
}

popupEditBtn.addEventListener('click', popupToggle);

popupCloseBtn.addEventListener('click', popupToggle);

/* ------------------- Practicum Exercise for Legacy Code Below ------------------- */

// Let's find the form in the DOM
let formElement = page.querySelector('.popup__form'); // Use the querySelector() method

  // Next is the form submit handler, though
  // it won't submit anywhere just yet
  function handleFormSubmit(evt) {
    evt.preventDefault(); // This line stops the browser from submitting the form in the default way.
    // Having done so, we can define our own way of submitting the form.
    // We'll explain it in more detail later.

    // Let's find the form fields in the DOM
    let nameInput = formElement.querySelector('.popup__input_name'); // Use querySelector()
    let jobInput = formElement.querySelector('.popup__input_description'); // Use querySelector()

    // Get the values of each field from the corresponding value property

    // Select elements where the field values will be entered
    let nameProfile = profile.querySelector('.profile__name');
    let titleProfile = profile.querySelector('.profile__description');

    // Insert new values using the textContent property of the querySelector() method
    nameProfile.textContent = nameInput.value;
    titleProfile.textContent = jobInput.value;
    
    popupToggle();
  }

// Connect the handler to the form:
// it will watch the submit event
formElement.addEventListener('submit', handleFormSubmit);