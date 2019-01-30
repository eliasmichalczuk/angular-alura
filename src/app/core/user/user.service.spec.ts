import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { TokenService } from '../token/token.service';

describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [UserService, TokenService]
  }));

  it('UserService | should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });


});
