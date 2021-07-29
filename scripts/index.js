const page = document.querySelector('.page');
const profile = page.querySelector('.profile');
const popupEditBtn = profile.querySelector('.profile__edit-button');
const profileName = profile.querySelector('.profile__name');
const profileTitle = profile.querySelector('.profile__description');
const popup = page.querySelector('.popup');
const popupForm = popup.querySelector('.popup__form');
const popupCloseBtn = popup.querySelector('.popup__close-button');
const popupInputName = popup.querySelector('.popup__input_type_name');
const popupInputTitle = popup.querySelector('.popup__input_type_description');

function fillInBlanks() {
  popupInputName.value = profileName.textContent;
  popupInputTitle.value = profileTitle.textContent;
}

function popupClose() {
  popup.classList.remove('popup_opened');
}

function popupOpen() {
  fillInBlanks();
  popup.classList.add('popup_opened');
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = popupInputName.value;
  profileTitle.textContent = popupInputTitle.value;
  popupClose();
}

popupEditBtn.addEventListener('click', popupOpen);

popupCloseBtn.addEventListener('click', popupClose);

popupForm.addEventListener('submit', handleFormSubmit);