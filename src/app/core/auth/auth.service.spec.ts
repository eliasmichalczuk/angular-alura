import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpClient, post } from 'selenium-webdriver/http';
import { HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { UserService } from '../user/user.service';
import { TestUserService } from 'src/app/shared/test/test-user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AuthService', () => {
  let httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
  let service: AuthService;
  let userStub = new TestUserService();
  let loginKeys = {
    login: 'flavio',
    password: '123'
  };
  let httpclient;
  const API_URl = 'http://localhost:3000/';


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule ],
      providers: [AuthService,
      {
        provide: UserService,
        useValue: userStub
      }]
    });
    service = TestBed.get(AuthService);
  });

  it('should call post with right url', () => {
    service.authenticate(loginKeys.login, loginKeys.password);
    //let spy = spyOn(httpclient, 'post').and.returnValue(of(new HttpResponse().ok));
    httpClientSpy.post.and.returnValue(of(new HttpResponse().ok));
    expect(httpClientSpy.post).toHaveBeenCalledWith(API_URl + 'user/login',
    {
      username: loginKeys.login,
      password: loginKeys.password
    }, {observe: 'response'});
  });
});
