import FormValidator from "../components/FormValidator.js";
import { Card } from "../components/Card.js";
import { initialCards } from "../utils/initial-cards.js";
import toggleModal from "../utils/utils.js";
import Section from "../components/Section.js";
import {
  profileEditModal,
  cardsContainer,
  cardListSection,
  cardTemplate,
  addCardModal,
  previewCardModal,
  profileEditModalForm,
  addCardModalForm,
  profileEditBtn,
  profileCloseBtn,
  placesAddBtn,
  addCardModalCloseBtn,
  previewImageModalCloseBtn,
  profileName,
  profileTitle,
  addCardModalInputTitle,
  addCardModalInputLink,
  profileEditModalInputName,
  profileEditModalInputTitle,
  profileSubmitButton
} from "../utils/constants.js";

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

// initiate Section class here to render this card section
const defaultCardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(cardTemplate, item);
    const cardElement = card.generateCard();
    defaultCardList.addItem(cardElement);
  }
},
cardListSection);

defaultCardList.renderer();