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

let formElement = page.querySelector('.popup__form');
  function handleFormSubmit(evt) {
    evt.preventDefault();
    let nameInput = formElement.querySelector('.popup__input_name');
    let jobInput = formElement.querySelector('.popup__input_description');
    let nameProfile = profile.querySelector('.profile__name');
    let titleProfile = profile.querySelector('.profile__description');

    nameProfile.textContent = nameInput.value;
    titleProfile.textContent = jobInput.value;
    
    popupToggle();
  }

formElement.addEventListener('submit', handleFormSubmit);