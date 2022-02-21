import Popup from "./Popup.js";

// Create the `PopupWithImage` class as a child class of `Popup`.
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open() {
    console.log("PopupWithImage: this._popup", this._popup);
    super.open();
    // This class has to change the parent `open()` method. 
    // In the `open()` method of the `PopupWithImage` class, 
    // you need to add an image to the popup 
    // and the corresponding image `src` attribute 
    // along with a caption for the image.
  }
}

