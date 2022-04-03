export const validationConfig = {
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
  openModalClass: 'popup_opened',
  closeButtonSelector: '.popup__close-button',
  popupImageSelector: '.popup__image',
  popupImageCaptionSelector: '.popup__image-caption'
};

export const cardListSection = '.photos__card-grid';

export const popupType = {
  editProfileSelector: '.popup_type_edit-profile',
  addCardSelector: '.popup_type_add-card',
  previewSelector: '.popup_type_preview'
}

export const profileConfig = {
  nameSelector: '.profile__name',
  descriptionSelector: '.profile__description',
}

const cardsContainer = document.querySelector('.photos__card-grid');

const cardTemplate = document.querySelector('#card-template').content.querySelector('.card');

const addCardModal = document.querySelector('.popup_type_add-card');

const profileEditBtn = document.querySelector('.profile').querySelector('.profile__edit-button');

const addCardBtn = document.querySelector('.profile').querySelector('.profile__add-button');

const profileEditModal = document.querySelector('.popup_type_edit-profile');

const profileSubmitButton = profileEditModal.querySelector('.popup__form').querySelector('.popup__button');

export {
  profileEditModal,
  cardsContainer,
  cardTemplate,
  addCardModal,
  profileEditBtn,
  addCardBtn,
  profileSubmitButton,
};