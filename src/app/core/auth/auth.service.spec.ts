import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });

  it('shoud return a http response', inject([AuthService], (service: AuthService) => {
    expect(service.authenticate('flavio', '123')).toBeTruthy();
  }));
});
