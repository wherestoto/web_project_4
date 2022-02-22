import { popupImage, previewCaption } from "../utils/constants.js";
import Popup from "./Popup.js";

// Create the `PopupWithImage` class as a child class of `Popup`.
export default class PopupWithImage extends Popup {
  constructor(cardSelector, popupSelector) {
    super(popupSelector);
    this._cardSelector = cardSelector;
    this._caption = cardSelector.alt;
    this._image = cardSelector.src;
  }

  open() {
    console.log("PopupWithImage Class: this._popup", this._popup);
    console.log("PopupWithImage Class: this._cardSelector", this._cardSelector);
    console.log("PopupWithImage Class: this._cardSelector img src", this._cardSelector.src);
    console.log("PopupWithImage Class: this._cardSelector img alt", this._cardSelector.alt);

    popupImage.src = this._image;
    popupImage.alt = this._caption;
    previewCaption.textContent = this._caption;
    console.log("popupwithimage class open worked");
    // const previewCardModal = body.querySelector('.popup_type_preview');
    // const previewPopup = '.popup_type_preview';
    // const popupImage = previewCardModal.querySelector('.popup__image');
    // const previewCaption = previewCardModal.querySelector('.popup__image-caption');
    // const addCardModalInputTitle = addCardModal.querySelector('.popup__input_type_title');
    // const addCardModalInputLink = addCardModal.querySelector('.popup__input_type_image');
    
    super.open();
  }
}