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
import Api from "../components/Api";

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
    userJob: profileConfig.descriptionSelector,
    userAvatar: profileConfig.avatarSelector
  }
);

const submitProfileForm = new PopupWithForms(popupType.editProfileSelector, {
  handleSubmit: (formData) => {
    submitProfileForm.close();
    userData.setUserInfo({formData});
    apiEditUserInfo({name: formData.name, about: formData.description});
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

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-12",
  headers: {
    authorization: "3cccee21-d932-4c2e-b1c2-879d2d446f5b",
    "Content-Type": "application/json"
  }
});

const apiUserInfo = () => {
  api.getUserInfo()
    .then(data => {
      const formData = {
        name: data.name, 
        description: data.about, 
        avatar: data.avatar,
        id: data._id,
        cohort: data.cohort
      };
      userData.setUserInfo({formData});
      userData.setUserAvatar({formData});
    })
    .catch(err => console.error("UserInfo error: ",err));
};

apiUserInfo();

const apiInitialCards = () => {
  api.getInitialCards()
    .then(data => {
      const cardList = new Section(
        {
          items: data,
          renderer: renderCard
        }, cardListSection);

      cardList.renderer(); // renderer puts the data through a for each 
    })
    .catch(err => console.error("Api Card Data Error: ",err));
}

apiInitialCards();

function apiEditUserInfo(userInfo) {
  api.editUserInfo(userInfo)
  .catch(err => console.error("apiEditUserInfo Error: ", err));
}