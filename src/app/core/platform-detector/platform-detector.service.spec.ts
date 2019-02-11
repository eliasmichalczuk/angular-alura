import { TestBed } from '@angular/core/testing';

import { PlatformDetectorService } from './platform-detector.service';

xdescribe('PlatformDetectorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlatformDetectorService = TestBed.get(PlatformDetectorService);
    expect(service).toBeTruthy();
  });
});
