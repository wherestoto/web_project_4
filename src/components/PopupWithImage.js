import { popupImage, previewCaption } from "../utils/constants";
import Popup from "./Popup";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open = ({ link, caption }) => {
    popupImage.src = link;
    popupImage.alt = caption;
    previewCaption.textContent = caption;
    super.open();
  }
}