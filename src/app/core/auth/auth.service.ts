import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { TokenService } from '../token/token.service';
import { UserService } from '../user/user.service';

const API_URl = 'http://localhost:3000/';
// unica isntancia para toda a aplicação
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
    private userService: UserService) { }

  authenticate(userName: string, password: string) {
                                            // mesmo nome da variavel e da propriedade, posso simplificar
                                            console.log('user pass', userName);
    return this.http
    .post(API_URl + 'user/login', { userName, password }, { observe: 'response'})
     // observe response usado para ter acesso ao headers, para pegar o token
    .pipe(tap( res => {
      const authToken = res.headers.get('x-access-token');
      this.userService.setToken(authToken);
      console.log('AuthService -> authenticate -> authToken', authToken);
    }));
  }
}
