import Popup from "./Popup";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open = ({ link, caption }) => {
    const imageElement = this._popup.querySelector('.popup__image');
    const captionElement = this._popup.querySelector('.popup__image-caption');
    imageElement.src = link;
    imageElement.alt = caption;
    captionElement.textContent = caption;
    super.open();
  }

  close = () => {
    // arrow syntax necessary for inheritance
    super.close();
  }
}