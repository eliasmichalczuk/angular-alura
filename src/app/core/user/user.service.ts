import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { Subject, BehaviorSubject } from 'rxjs';
import { User } from './user.interface';
import * as jtw_decode from 'jwt-decode';
import { UserServiceInterface } from 'src/app/shared/interfaces/user-service.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService implements UserServiceInterface {

  // subject behavior segua o valor para o próximo subscribe que buscar
  private userSubjet = new BehaviorSubject<User>(null);
  private userName: string;

  constructor(private tokenService: TokenService) {
    if (this.tokenService.hasToken()) {
      this.decodeAndNotify();
    }
  }

  setToken(token: string) {
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }

  getUser() {
    return this.userSubjet.asObservable();
  }

  private decodeAndNotify() {
    const token = this.tokenService.getToken();
    const user = jtw_decode(token) as User;
    this.userName = user.name;
    this.userSubjet.next(user);
  }

  logout() {
    this.tokenService.removeToken();
      // next é usado para que os metodos que assinam esse observable recebam o valor atualizado
    this.userSubjet.next(null);
  }

  isLogedIn() {
    return this.tokenService.hasToken();
  }

  getUserName() {
    return this.userName;
  }
}
