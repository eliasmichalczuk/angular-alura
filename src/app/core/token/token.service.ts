import { Injectable } from '@angular/core';

const KEY = 'authToken';
@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  setToken(token) {
    window.localStorage.setItem(KEY, token);
  }

  getToken() {
    return window.localStorage.getItem(KEY);
  }

  removeToken() {
    window.localStorage.removeItem(KEY);
  }

  hasToken() {
    return !!this.getToken();
  }
}
