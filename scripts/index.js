const initialCards = [
  {
    title: "McWay Falls",
    link: "https://images.unsplash.com/photo-1432889490240-84df33d47091?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"
  },
  {
    title: "Arches National Park",
    link: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1608&q=80"
  },
  {
    title: "Inian Islands",
    link: "https://images.unsplash.com/photo-1597800235425-ef23b8bcdffd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=968&q=80"
  },
  {
    title: "Antelope Canyon",
    link: "https://images.unsplash.com/photo-1505521377774-103a8cc2f735?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80"
  },
  {
    title: "Grand Teton National Park",
    link: "https://images.unsplash.com/photo-1533083653349-e2882c0d1208?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80"
  },
  {
    title: "Boulder, Colorado",
    link: "https://images.unsplash.com/photo-1609645918655-65c52395f976?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
  }
];

const body = document.querySelector('.page');

const modal = body.querySelector('.popup');

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

const profileEditModalInputName = profileEditModal.querySelector('.popup__input_type_name');

const profileEditModalInputTitle = profileEditModal.querySelector('.popup__input_type_description');

const toggleModal = (modalWindow) => {
  if (!modalWindow.classList.contains('popup_opened')) {
    profileEditModalInputName.value = profileName.textContent;
    profileEditModalInputTitle.value = profileTitle.textContent;
  }
  modalWindow.classList.toggle('popup_opened');
}

const submitProfileHandler = (evt) => {
  evt.preventDefault();
  profileName.textContent = profileEditModalInputName.value;
  profileTitle.textContent = profileEditModalInputTitle.value;
  toggleModal(profileEditModal);
}

function renderCard(element, container) {
  container.append(element);
}

function prependCard(element, container) {
  container.prepend(element);
}

const previewImage = (link, title) => {
  const popupImage = previewCardModal.querySelector('.popup__image');
  const previewCaption = previewCardModal.querySelector('.popup__image-caption');
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
  const addCardModalInputTitle = addCardModal.querySelector('.popup__input_type_title');
  const addCardModalInputLink = addCardModal.querySelector('.popup__input_type_image');
  initialCards.push({title: addCardModalInputTitle.value, 
                      link: addCardModalInputLink.value});
  prependCard(createCard(initialCards[initialCards.length-1]), cardsContainer);
  toggleModal(addCardModal);
  addCardModalForm.reset();
}

profileEditBtn.addEventListener('click', () => toggleModal(profileEditModal));

profileCloseBtn.addEventListener('click', () => toggleModal(profileEditModal));

profileEditModalForm.addEventListener('submit', submitProfileHandler);

placesAddBtn.addEventListener('click', () => toggleModal(addCardModal));

addCardModalCloseBtn.addEventListener('click', () => toggleModal(addCardModal));

addCardModalForm.addEventListener('submit', addNewCardHandler);

previewImageModalCloseBtn.addEventListener('click', () => toggleModal(previewCardModal));

initialCards.forEach(card => renderCard(createCard(card), cardsContainer));