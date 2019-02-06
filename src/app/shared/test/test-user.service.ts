import { Injectable } from '@angular/core';
import { UserService } from 'src/app/core/user/user.service';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/core/user/user.interface';

@Injectable()

export class TestUserService {

  private userSubjet = new BehaviorSubject<User>(null);
  private userName: string;

    constructor() {
      const user: User = {
        name: 'user',
        email: 'email@user.com',
        id: 2
      };
      this.userSubjet.next(user);
    }

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

