export default class Api {
  constructor({baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      } return Promise.reject(`Error: ${res.status}`);
    });
  }
    
  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      } return Promise.reject(`Promise Error: ${res.status}`);
    });
  }

  editUserInfo(userInfo) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: userInfo.name,
        about: userInfo.about
      })
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      } return Promise.reject(`Promise Error: ${res.status}`);
    })
  }

  createCard(cardInfo) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: cardInfo.title,
        link: cardInfo.link
      })
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      } return Promise.reject(`Error: ${res.status}`);
    });
  }

  deleteCard(id) {
    return fetch(`${this._baseUrl}/cards/${id}`, {
      method: 'DELETE',
      headers: this._headers,
    })
    .then(res => {
      if (res.ok) {
        console.log("apiDeleteCard: ", res);
        return res.json();
      } return Promise.reject(`Error: ${res.status}`);
    });
  }

  addLikes(cardId) {
    return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
      method: 'PUT',
      headers: this._headers,
    })
    .then(res => {
      if (res.ok) {
        console.log("addLikes: ", res);
        return res.json();
      } return Promise.reject(`Error: ${res.status}`);
    });
  }

  removeLikes(cardId) {
    return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
    })
    .then(res => {
      if (res.ok) {
        console.log("deleteLikes: ", res);
        return res.json();
      } return Promise.reject(`Error: ${res.status}`);
    });
  }
}