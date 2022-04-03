export default class UserInfo {
  constructor({userName, userJob}) {
    this._profileName = userName;
    this._profileTitle = userJob;
  }
  
  getUserInfo() {
    this._userInfo = {
      name: document.querySelector(this._profileName).textContent,
      description: document.querySelector(this._profileTitle).textContent
    };
    
    document.querySelector('.popup__input_type_name').value = this._userInfo.name;
    document.querySelector('.popup__input_type_description').value = this._userInfo.description;

    return this._userInfo;
  }
  
  setUserInfo = ({formData}) => {
    document.querySelector(this._profileName).textContent = formData.name;
    document.querySelector(this._profileTitle).textContent = formData.description;
  }
}