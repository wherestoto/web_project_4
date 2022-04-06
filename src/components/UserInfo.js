export default class UserInfo {
  constructor({userName, userJob}) {
    this._profileNameElement = document.querySelector(userName);
    this._profileTitleElement = document.querySelector(userJob);
  }
  
  getUserInfo() {
    this._userInfo = {
      name: this._profileNameElement.textContent,
      description: this._profileTitleElement.textContent
    };

    return this._userInfo;
  }
  
  setUserInfo = ({formData}) => {
    this._profileNameElement.textContent = formData.name;
    this._profileTitleElement.textContent = formData.description;
  }
}