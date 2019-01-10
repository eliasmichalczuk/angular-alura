import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URl = 'http://localhost:3000/';
// unica isntancia para toda a aplicação
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  authenticate(userName: string, password: string) {
                                            // mesmo nome da variavel e da propriedade, posso simplificar
    return this.http.post(API_URl + 'user/login', { userName, password });
  }
}
