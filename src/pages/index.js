import "./index.css";
import {
  validationConfig,
  cardListSection,
  popupType,
  profileConfig,
  cardTemplate,
  addCardModal,
  profileEditBtn,
  addCardBtn,
  profileEditModal,
  profileNameInput, 
  profileDescriptionInput,
} from "../utils/constants";
import { initialCards } from "../utils/initial-cards";
import Card from "../components/Card";
import FormValidator from "../components/FormValidator";
import Section from "../components/Section";
import PopupWithImage from "../components/PopupWithImage";
import PopupWithForms from "../components/PopupWithForm";
import UserInfo from "../components/UserInfo";

const editProfileFormValidator = new FormValidator(validationConfig, profileEditModal);

editProfileFormValidator.enableValidation();

const addCardFormValidator = new FormValidator(validationConfig, addCardModal);

addCardFormValidator.enableValidation();

const previewCardPopup = new PopupWithImage(popupType.previewSelector);

const renderCard = (item) => {
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
        )
      }
    });
  cardList.addItem(card.generateCard());
};

const cardList = new Section(
  {
    items: initialCards,
    renderer: renderCard
  }, cardListSection);

cardList.renderer();

const submitCardForm = new PopupWithForms(popupType.addCardSelector, {
  handleSubmit: (item) => {
    renderCard(item);
    submitCardForm.close();
  }
});

const openCardForm = () => {
  addCardFormValidator.resetValidation();
  submitCardForm.open();
}

const userData = new UserInfo(
  {
    userName: profileConfig.nameSelector, 
    userJob: profileConfig.descriptionSelector
  }
);

const submitProfileForm = new PopupWithForms(popupType.editProfileSelector, {
  handleSubmit: (formData) => {
    submitProfileForm.close();
    userData.setUserInfo({formData});
  }
});

const openProfileForm = () => {
  editProfileFormValidator.resetValidation();
  
  const { name, description } = userData.getUserInfo();
  profileNameInput.value = name; 
  profileDescriptionInput.value = description;

  submitProfileForm.open();
};

profileEditBtn.addEventListener('click', openProfileForm);

addCardBtn.addEventListener('click', openCardForm);