import { TestBed } from '@angular/core/testing';

import { SignupService } from './signup.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { HttpResponse, HttpClient } from '@angular/common/http';
import { post } from 'selenium-webdriver/http';

describe('SignupService', () => {

  let service: SignupService;
  let httpClientSpy = jasmine.createSpyObj('HttpClient', ['post', 'get']);
  const API_URL = 'http://localhost:3000/';
  let username = 'flavio';
  let spy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule ],
      providers: [SignupService]
    });
    service = new SignupService(httpClientSpy);
  });
  it('should call userNameTaken with right params', () => {
    httpClientSpy.get.and.returnValue(of(new HttpResponse().ok));
    service.usernameTaken(username);
    expect(httpClientSpy.get).toHaveBeenCalledWith(API_URL + 'user/exists/' + username);
  });
});
