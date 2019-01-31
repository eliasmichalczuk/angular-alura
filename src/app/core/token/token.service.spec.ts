import { TestBed } from '@angular/core/testing';

import { TokenService } from './token.service';

describe('TokenService', () => {
  let service: TokenService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ TokenService ]
    });
    service = TestBed.get(TokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set a new token', () => {
    service.setToken(`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
    .eyJpZCI6MSwibmFtZSI6ImZsYXZpbyIsImVtYWlsIjoiZmxhdmlvQGFsdXJhcGljLmNvbS5iciIsIm
    lhdCI6MTU0ODg1MDM2OSwiZXhwIjoxNTQ4OTM2NzY5fQ
    .4Hzxze_4VWy1Si1WodaSXFoELTTmyoQFJENfzWWvAZE`);
    expect(service.hasToken()).toBeTruthy();
    expect(service.getToken()).toBeTruthy();
  });

  it('should remove a token', () => {
    service.setToken(`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
    .eyJpZCI6MSwibmFtZSI6ImZsYXZpbyIsImVtYWlsIjoiZmxhdmlvQGFsdXJhcGljLmNvbS5iciIsIm
    lhdCI6MTU0ODg1MDM2OSwiZXhwIjoxNTQ4OTM2NzY5fQ
    .4Hzxze_4VWy1Si1WodaSXFoELTTmyoQFJENfzWWvAZE`);
    expect(service.hasToken()).toBeTruthy();
    service.removeToken();
    expect(service.hasToken()).toBeFalsy();
  });
});
