import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { of } from 'rxjs';
import { UserService } from '../user/user.service';
import { TestUserService } from 'src/app/shared/test/test-user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('AuthService', () => {
  const httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
  let service: AuthService;
  const userStub = new TestUserService();
  const loginKeys = {
    login: 'flavio',
    password: '123'
  };
  const API_URl = 'http://localhost:3000/';


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService,
        {
          provide: UserService,
          useValue: userStub
        }]
    });
    service = TestBed.get(AuthService);
  });

  it('should call post with right url',
    inject([HttpClient], (httpClient: HttpClient) => {
      spyOn(httpClient, 'post').and.returnValue(of(true));
      service.authenticate(loginKeys.login, loginKeys.password);
      expect(httpClient.post).toHaveBeenCalledWith(API_URl + 'user/login',
        {
          userName: loginKeys.login,
          password: loginKeys.password
        }, { observe: 'response' });
    }));
});
