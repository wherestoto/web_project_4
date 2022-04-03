import Popup from "./Popup";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open = ({ link, caption }) => {
    this._popup.querySelector('.popup__image').src = link;
    this._popup.querySelector('.popup__image').alt = caption;
    this._popup.querySelector('.popup__image-caption').textContent = caption;
    super.open();
  }
}