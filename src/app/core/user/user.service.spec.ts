import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { TokenService } from '../token/token.service';

describe('UserService', () => {
  // let tokenServiceSpy = jasmine.spyObj<TokenService>;
  let tokenService: TokenService;
  let userService: UserService;
  beforeEach(() => {
    // const spy = jasmine.createSpyObj('TokenService', ['setToken', 'getToken', 'hasToken'])
    TestBed.configureTestingModule({
      providers: [
        UserService,
        { provide: TokenService, useClass: MockTokenService }
      ]
    });
    // tokenServiceSpy = TestBed.get(TokenService);
    userService = TestBed.get(UserService);
    tokenService = TestBed.get(TokenService);
    userService.setToken(`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
    .eyJpZCI6MSwibmFtZSI6ImZsYXZpbyIsImVtYWlsIjoiZmxhdmlvQGFsdXJhcGljLmNvbS5iciIsIm
    lhdCI6MTU0ODg1MDM2OSwiZXhwIjoxNTQ4OTM2NzY5fQ
    .4Hzxze_4VWy1Si1WodaSXFoELTTmyoQFJENfzWWvAZE`);
  });

  it('UserService | should be created', () => {
    expect(userService).toBeTruthy();
  });

  it('UserService | should get the user', () => {
    expect(userService.getUser()).toBeTruthy();
  });

  it('UserService | should return is user is logged in', () => {
    expect(userService.isLogedIn()).toBeTruthy();
  });

  it('UserService | should return user name', () => {
    expect(userService.getUserName()).toBeTruthy();
    expect(userService.getUserName()).toEqual('flavio');
  });

  it('UserService | should log out  and remove token', () => {
    expect(userService.logout());
    expect(userService.isLogedIn()).toBeFalsy();
  });

});

class MockTokenService {

  private token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
  .eyJpZCI6MSwibmFtZSI6ImZsYXZpbyIsImVtYWlsIjoiZmxhdmlvQGFsdXJhcGljLmNvbS5iciIsIm
  lhdCI6MTU0ODg1MDM2OSwiZXhwIjoxNTQ4OTM2NzY5fQ
  .4Hzxze_4VWy1Si1WodaSXFoELTTmyoQFJENfzWWvAZE`;
  getToken() {
    return this.token;
  }

  setToken() {
    this.token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
    .eyJpZCI6MSwibmFtZSI6ImZsYXZpbyIsImVtYWlsIjoiZmxhdmlvQGFsdXJhcGljLmNvbS5iciIsIm
    lhdCI6MTU0ODg1MDM2OSwiZXhwIjoxNTQ4OTM2NzY5fQ
    .4Hzxze_4VWy1Si1WodaSXFoELTTmyoQFJENfzWWvAZE`;
  }

  removeToken() {
    this.token = null;
  }

  hasToken() {
    return !!this.token;
  }
}
