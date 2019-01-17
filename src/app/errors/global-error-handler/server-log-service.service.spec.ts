import { TestBed } from '@angular/core/testing';

import { ServerLogServiceService } from './server-log-service.service';

describe('ServerLogServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServerLogServiceService = TestBed.get(ServerLogServiceService);
    expect(service).toBeTruthy();
  });
});
