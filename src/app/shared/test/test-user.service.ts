import { Injectable } from '@angular/core';
import { UserService } from 'src/app/core/user/user.service';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/core/user/user.interface';

@Injectable()

export class TestUserService {

    constructor() {
    }

  private userSubjet = new BehaviorSubject<User>(null);
  private userName: string;

  setToken(token: string) {
  }

  getUser() {
    return this.userSubjet.asObservable();
  }

  private decodeAndNotify() {
  }

  logout() {
  }

  getUserName() {
    return this.userName;
  }
}

