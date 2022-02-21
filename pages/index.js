import {
  profileEditModal,
  profilePopupSelector,
  cardsContainer,
  cardListSection,
  cardTemplate,
  addCardModal,
  addCardFormPopup,
  profileEditModalForm,
  addCardModalForm,
  profileEditBtn,
  placesAddBtn,
  profileName,
  profileTitle,
  addCardModalInputTitle,
  addCardModalInputLink,
  profileEditModalInputName,
  profileEditModalInputTitle,
  profileSubmitButton,
  popupImage,
  previewCaption,
  previewPopup,
  cardImage
} from "../utils/constants.js";
import FormValidator from "../components/FormValidator.js";
import { Card } from "../components/Card.js";
import { initialCards } from "../utils/initial-cards.js";
import Section from "../components/Section.js";
import Popup from "../components/Popup.js";
import PopupWithImage from "../components/PopupWithImage.js";
// import PopupWithForms from "../components/PopupWithForms.js";

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input', 
  submitButtonSelector: '.popup__button', 
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

export const popupConfig = {
  containerSelector: '.popup__container',
  modalParentSelector: '.popup',
  openModalClass: 'popup_opened'
};

const editProfileFormValidator = new FormValidator(validationConfig, profileEditModal);
editProfileFormValidator.enableValidation();

const openProfilePopup = new Popup(profilePopupSelector);
openProfilePopup.setEventListeners();

const openProfileForm = () => {
  editProfileFormValidator.resetValidation();
  editProfileFormValidator.enableSubmitButton(profileSubmitButton);
  profileEditModalInputName.value = profileName.textContent;
  profileEditModalInputTitle.value = profileTitle.textContent;
  openProfilePopup.open();
}

const submitProfileHandler = (evt) => {
  evt.preventDefault();
  profileName.textContent = profileEditModalInputName.value;
  profileTitle.textContent = profileEditModalInputTitle.value;
  openProfilePopup.open();
}

const addCardFormValidator = new FormValidator(validationConfig, addCardModal);
addCardFormValidator.enableValidation();

const addCardForm = new Popup(addCardFormPopup); //.popup_type_add-card
addCardForm.setEventListeners();



const prependCard = (element, container) => {
  const card = new Card(cardTemplate, element);

  container.prepend(card.generateCard());
}

const addNewCardHandler = (evt) => {
  evt.preventDefault();
  prependCard({ title: addCardModalInputTitle.value, link: addCardModalInputLink.value }, cardsContainer);
  addCardForm.close();
}

const openPreview = new PopupWithImage(previewPopup);
openPreview.setEventListeners();

// initiate Section class here to render this card section
const defaultCardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(cardTemplate, item);
    const cardElement = card.generateCard();
    defaultCardList.addItem(cardElement);
  }
}, cardListSection);

defaultCardList.renderer();

/* Event Listeners */
profileEditModalForm.addEventListener('submit', submitProfileHandler);

addCardModalForm.addEventListener('submit', addNewCardHandler);

profileEditBtn.addEventListener('click', openProfileForm);

const openCardForm = () => {
  addCardFormValidator.resetValidation();
  addCardForm.open();
}

placesAddBtn.addEventListener('click', openCardForm); //placesAddBtn = '.profile__add-button'