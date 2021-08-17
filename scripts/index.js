const body = document.querySelector('.page');

const profile = body.querySelector('.profile');

const profileEditModal = body.querySelector('.popup_type_edit-profile');

const cardsContainer = body.querySelector('.photos__card-grid');

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

const popupImage = previewCardModal.querySelector('.popup__image');

const previewCaption = previewCardModal.querySelector('.popup__image-caption');

const profileEditModalInputName = profileEditModal.querySelector('.popup__input_type_name');

const profileEditModalInputTitle = profileEditModal.querySelector('.popup__input_type_description');

const fillProfile = () => {
  profileEditModalInputName.value = profileName.textContent;
  profileEditModalInputTitle.value = profileTitle.textContent;
  toggleModal(profileEditModal);
}

const toggleModal = (modalWindow) => {
  modalWindow.classList.toggle('popup_opened');
}

const submitProfileHandler = (evt) => {
  evt.preventDefault();
  profileName.textContent = profileEditModalInputName.value;
  profileTitle.textContent = profileEditModalInputTitle.value;
  toggleModal(profileEditModal);
}

const renderCard = (element, container) => {
  container.append(element);
}

const prependCard = (element, container) => {
  container.prepend(element);
}

const previewImage = (link, title) => {
  popupImage.src = link;
  popupImage.alt = title;
  previewCaption.textContent = title;
  toggleModal(previewCardModal);
}

const clickLikeButton = (element) => {
  element.classList.toggle('photos__like-button_active');
}

const deleteCard = (element) => {
  element.remove();
}

function createCard(card) {
  const cardTemplate = body.querySelector('#card-template').content.querySelector('.card');
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector('.photos__card-img');
  const cardTitle = cardElement.querySelector('.photos__title');
  const cardLikeButton = cardElement.querySelector('.button_type_like');
  const cardDeleteButton = cardElement.querySelector('.button_type_delete');
  cardImage.src = card.link;
  cardImage.alt = card.title;
  cardTitle.textContent = card.title;
  cardLikeButton.addEventListener('click', (evt) => clickLikeButton(evt.target));
  cardDeleteButton.addEventListener('click', () => deleteCard(cardElement));
  cardImage.addEventListener('click', () => previewImage(card.link, card.title));
  return cardElement;
}

const addNewCardHandler = (evt) => {
  evt.preventDefault();
  initialCards.push({title: addCardModalInputTitle.value, 
                      link: addCardModalInputLink.value});
  prependCard(createCard(initialCards[initialCards.length-1]), cardsContainer);
  toggleModal(addCardModal);
  addCardModalForm.reset();
}

profileEditBtn.addEventListener('click', fillProfile);

profileCloseBtn.addEventListener('click', () => toggleModal(profileEditModal));

profileEditModalForm.addEventListener('submit', submitProfileHandler);

placesAddBtn.addEventListener('click', () => toggleModal(addCardModal));

addCardModalCloseBtn.addEventListener('click', () => toggleModal(addCardModal));

addCardModalForm.addEventListener('submit', addNewCardHandler);

previewImageModalCloseBtn.addEventListener('click', () => toggleModal(previewCardModal));

initialCards.forEach(card => renderCard(createCard(card), cardsContainer));