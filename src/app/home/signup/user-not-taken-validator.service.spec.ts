import { TestBed } from '@angular/core/testing';

import { UserNotTakenValidatorService } from './user-not-taken-validator.service';

describe('UserNotTakenValidatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  xit('should be created', () => {
    const service: UserNotTakenValidatorService = TestBed.get(UserNotTakenValidatorService);
    expect(service).toBeTruthy();
  });
});
