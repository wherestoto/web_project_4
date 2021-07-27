const page = document.querySelector('.page');
const profile = page.querySelector('.profile')
const popup = page.querySelector('.popup');
const popupEditBtn = profile.querySelector('.profile__button_edit');
const popupCloseBtn = popup.querySelector('.popup__button_close');
const popupForm = popup.querySelector('.popup__form');
const popupInputName = popup.querySelector('.popup__input_name');
const popupInputTitle = popup.querySelector('.popup__input_title');
const profileName = profile.querySelector('.profile__name');
const profileTitle = profile.querySelector('.profile__title');

function popupClose() {
  popup.classList.remove('popup_opened');
}

function popupOpen() {
  popup.classList.add('popup_opened');
}

function fillInBlanks() {
  let nameProfile = profileName.textContent;
  let titleProfile = profileTitle.textContent;
  popupInputName.value = nameProfile;
  popupInputTitle.value = titleProfile;
}

popupEditBtn.addEventListener('click', () => {
  popupOpen();
  fillInBlanks();
})

popupCloseBtn.addEventListener('click', () => {
  popupClose();
})

// popupForm.addEventListener('submit', (event) => {
//   event.preventDefault();
//   profileName.textContent = popupInputName.value;
//   profileTitle.textContent = popupInputTitle.value;
//   popupClose();
// })

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
    let jobInput = formElement.querySelector('.popup__input_title'); // Use querySelector()

        // Get the values of each field from the corresponding value property
        let nameIn = nameInput.value; 
        let jobIn = jobInput.value;

        // Select elements where the field values will be entered
        let nameProfile = profile.querySelector('.profile__name');
        let titleProfile = profile.querySelector('.profile__title');

        // Insert new values using the textContent property of the querySelector() method
        nameProfile.textContent = nameIn;
        titleProfile.textContent = jobIn;
        
        popupClose();
  }

// Connect the handler to the form:
// it will watch the submit event
formElement.addEventListener('submit', handleFormSubmit);