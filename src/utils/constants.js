export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input', 
  submitButtonSelector: '.popup__button', 
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
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

export const cardTemplate = document.querySelector('#card-template').content.querySelector('.card');

export const addCardModal = document.querySelector('.popup_type_add-card');

export const profileEditBtn = document.querySelector('.profile').querySelector('.profile__edit-button');

export const addCardBtn = document.querySelector('.profile').querySelector('.profile__add-button');

export const profileEditModal = document.querySelector('.popup_type_edit-profile');

export const profileNameInput = document.querySelector('.popup__input_type_name');

export const profileDescriptionInput = document.querySelector('.popup__input_type_description');