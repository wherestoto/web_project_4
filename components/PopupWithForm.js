import Popup from "./Popup.js";

export default class PopupWithForms extends Popup {
  constructor(popupSelector, submitForm) {
    // two arguments: the popup selector, and a callback function which PopupWithForm calls when the form’s submit event fires.
    super(popupSelector);
    this._submitForm = submitForm;
  }

  close = () => {
    super.close();
    // It modifies the close() parent method in order to reset the form once the popup is closed.
  }

  _getInputValues() {
    // collects data from all the input fields and returns that data as an object.
  }

  setEventListeners() {
    // modifies the setEventListeners() parent method. The setEventListeners() method of the PopupWithForm class has to add the submit event handler to the form and the click event listener to the close icon.
    super.setEventListeners();
  }
}

// Finally, Create an instance of the PopupWithForm class for each popup.