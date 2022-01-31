// utils.js will contain the event handlers and the function that opens/closes modal windows

const previewCardModal = document.querySelector('.popup_type_preview');
const popupImage = previewCardModal.querySelector('.popup__image');
const previewCaption = previewCardModal.querySelector('.popup__image-caption');

const toggleModal = (modalWindow) => {
  modalWindow.classList.toggle('popup_opened');
  checkValidEscapeModal(modalWindow);
}

const checkValidEscapeModal = (modalWindow) => {
  if (modalWindow.classList.contains('popup_opened')) {
    document.addEventListener('keydown', escapeModal);
  } else {
    document.removeEventListener('keydown', escapeModal);
  }
}

const escapeModal = (evt) => {
  if (evt.key === 'Escape') {
    toggleModal(document.querySelector('.popup_opened'));
  }
}

export { toggleModal, previewCardModal, popupImage, previewCaption }; 