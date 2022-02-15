import { FormValidator } from "./FormValidator.js";
import { Card } from "./Card.js";
import { initialCards } from "./initial-cards.js";
import { toggleModal } from "./utils.js";

const body = document.querySelector('.page');

const profile = body.querySelector('.profile');

const profileEditModal = body.querySelector('.popup_type_edit-profile');

const cardsContainer = body.querySelector('.photos__card-grid');

const cardTemplate = body.querySelector('#card-template').content.querySelector('.card');

const addCardModal = body.querySelector('.popup_type_add-card');

const previewCardModal = body.querySelector('.popup_type_preview');

const profileEditModalForm = profileEditModal.querySelector('.popup__form');

const addCardModalForm = addCardModal.querySelector('.popup__form');

const profileEditBtn = profile.querySelector('.profile__edit-button');

const profileCloseBtn = profileEditModal.querySelector('.popup__close-button');

const placesAddBtn = profile.querySelector('.profile__add-button');

const addCardModalCloseBtn = addCardModal.querySelector('.popup__close-button');

const previewImageModalCloseBtn = previewCardModal.querySelector('.popup__close-button');

const profileName = profile.querySelector('.profile__name');

const profileTitle = profile.querySelector('.profile__description');

const addCardModalInputTitle = addCardModal.querySelector('.popup__input_type_title');

const addCardModalInputLink = addCardModal.querySelector('.popup__input_type_image');

const profileEditModalInputName = profileEditModal.querySelector('.popup__input_type_name');

const profileEditModalInputTitle = profileEditModal.querySelector('.popup__input_type_description');

const addCardSubmitButton = addCardModalForm.querySelector('.popup__button');

const profileSubmitButton = profileEditModalForm.querySelector('.popup__button');

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input', 
  submitButtonSelector: '.popup__button', 
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

const editProfileFormValidator = new FormValidator(validationConfig, profileEditModal);
editProfileFormValidator.enableValidation();

const openProfileForm = () => {
  editProfileFormValidator.resetValidation();
  editProfileFormValidator.enableSubmitButton(profileSubmitButton);
  profileEditModalInputName.value = profileName.textContent;
  profileEditModalInputTitle.value = profileTitle.textContent;
  toggleModal(profileEditModal);
}

const addCardFormValidator = new FormValidator(validationConfig, addCardModal);
addCardFormValidator.enableValidation();

const openCardForm = () => {
  addCardFormValidator.resetValidation();
  toggleModal(addCardModal);
}

const submitProfileHandler = (evt) => {
  evt.preventDefault();
  profileName.textContent = profileEditModalInputName.value;
  profileTitle.textContent = profileEditModalInputTitle.value;
  toggleModal(profileEditModal);
}

const renderCard = (element, container) => {
  const card = new Card(cardTemplate, element);
  
  container.append(card.generateCard());
}

const prependCard = (element, container) => {
  const card = new Card(cardTemplate, element);

  container.prepend(card.generateCard());
}

const addNewCardHandler = (evt) => {
  evt.preventDefault();
  prependCard({title: addCardModalInputTitle.value, link: addCardModalInputLink.value}, cardsContainer);
  toggleModal(addCardModal);
}

const checkContainer = (evt, settings) => {
  if (!evt.target.closest(settings.containerSelector)) {
    evt.currentTarget.closest(settings.modalParentSelector).classList.remove(settings.openModalClass);
  };
}

const setOverlayEventListener = (modalElement, settings) => {
  modalElement.addEventListener('click', (evt) => checkContainer(evt, settings));
}

const addRemoteClickListeners = (settings) => {
  const modalList = Array.from(document.querySelectorAll(settings.modalParentSelector));
  modalList.forEach(modalElement => setOverlayEventListener(modalElement, settings));
}

addRemoteClickListeners({
  containerSelector: '.popup__container',
  modalParentSelector: '.popup',
  openModalClass: 'popup_opened'
})

profileEditBtn.addEventListener('click', openProfileForm);

profileCloseBtn.addEventListener('click', () => toggleModal(profileEditModal));

profileEditModalForm.addEventListener('submit', submitProfileHandler);

placesAddBtn.addEventListener('click', openCardForm);

addCardModalCloseBtn.addEventListener('click', () => toggleModal(addCardModal));

addCardModalForm.addEventListener('submit', addNewCardHandler);

previewImageModalCloseBtn.addEventListener('click', () => toggleModal(previewCardModal));

initialCards.forEach(card => renderCard(card, cardsContainer));