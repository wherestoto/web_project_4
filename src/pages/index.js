import "../styles/index.css";
import {
  profileEditModal,
  cardsContainer,
  cardTemplate,
  addCardModal,
  profileEditBtn,
  addCardBtn,
  profileSubmitButton,
  validationConfig,
  profileConfig,
  popupType,
  cardListSection
} from "../utils/constants";
import { initialCards } from "../utils/initial-cards";
import Card from "../components/Card";
import FormValidator from "../components/FormValidator";
import Section from "../components/Section";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForms from "../components/PopupWithForm";
import UserInfo from "../components/UserInfo";

const editProfileFormValidator = new FormValidator(validationConfig, profileEditModal);

editProfileFormValidator.enableValidation();

const addCardFormValidator = new FormValidator(validationConfig, addCardModal);

addCardFormValidator.enableValidation();

const previewCardPopup = new PopupWithImage(popupType.previewSelector);

const defaultCardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(
      item,
      cardTemplate,
      {
        handleCardClick: (item) => {
          previewCardPopup.open(
            {
              link: item.target.src,
              caption: item.target.alt
            }
          );
          previewCardPopup.setEventListeners();
        }
      });
    defaultCardList.addItem(card.generateCard());
  }
}, cardListSection);

defaultCardList.renderer();

const submitCardForm = new PopupWithForms(popupType.addCardSelector, {
  submitFormHandler: (formData) => {
    const card = new Card(
      formData,
      cardTemplate,
      {
        handleCardClick: (evt) => {
          previewCardPopup.open(
            {
              link: evt.target.src,
              caption: evt.target.alt
            }
          );
          previewCardPopup.setEventListeners();
        }
      });
    cardsContainer.prepend(card.generateCard());
    submitCardForm.closeWithSuper();
  }
});

const openCardForm = () => {
  addCardFormValidator.resetValidation();
  submitCardForm.open();
  submitCardForm.setEventListenersWithSuper();
}

const userData = new UserInfo({
  userName: profileConfig.nameSelector, 
  userJob: profileConfig.descriptionSelector
});

const submitProfileForm = new PopupWithForms(popupType.editProfileSelector, {
  submitFormHandler: (formData) => {
    submitProfileForm.close();
    userData.setUserInfo({formData});
  }
});

const openProfileForm = () => {
  editProfileFormValidator.resetValidation();
  editProfileFormValidator.enableSubmitButton(profileSubmitButton);
  userData.getUserInfo();
  submitProfileForm.open();
  submitProfileForm.setEventListenersWithSuper();
};

profileEditBtn.addEventListener('click', openProfileForm);

addCardBtn.addEventListener('click', openCardForm);