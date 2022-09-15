export default class UserInfo {
  constructor({userName, userAbout, userAvatar}) {
    this._profileNameElement = document.querySelector(userName);
    this._profileAboutElement = document.querySelector(userAbout);
    this._profileAvatarElement = document.querySelector(userAvatar);
  }
  
  getUserInfo() {
    this._userInfo = {
      name: this._profileNameElement.textContent,
      about: this._profileAboutElement.textContent
    };
    
    return this._userInfo;
  }
  
  setUserInfo = (formData) => {
    this._profileNameElement.textContent = formData.name;
    this._profileAboutElement.textContent = formData.about;
  }
  
  setUserAvatar = (formData) => {
    this._profileAvatarElement.src = formData.avatar;
  }
}