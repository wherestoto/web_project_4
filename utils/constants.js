const body = document.querySelector('.page');

const profile = body.querySelector('.profile');

const profileEditModal = body.querySelector('.popup_type_edit-profile');
const profilePopupSelector = '.popup_type_edit-profile';

const cardsContainer = body.querySelector('.photos__card-grid');
const cardListSection = '.photos__card-grid';

const cardTemplate = body.querySelector('#card-template').content.querySelector('.card');

const addCardModal = body.querySelector('.popup_type_add-card');
const addCardFormPopup = '.popup_type_add-card';

const previewCardModal = body.querySelector('.popup_type_preview');
const previewPopup = '.popup_type_preview';

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

const popupImage = previewCardModal.querySelector('.popup__image');

const previewCaption = previewCardModal.querySelector('.popup__image-caption');

export {
  body,
  profile,
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
  addCardSubmitButton,
  profileSubmitButton,
  previewCardModal,
  previewPopup,
  popupImage,
  previewCaption
};