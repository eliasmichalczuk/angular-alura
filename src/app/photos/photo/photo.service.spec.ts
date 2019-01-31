import { TestBed } from '@angular/core/testing';

import { PhotoService } from './photo.service';

describe('PhotoService', () => {
  let photoService: PhotoService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ PhotoService, { useClass: MockPhotoService } ]
    });
    photoService = TestBed.get(PhotoService);
  });

  it('should be created', () => {
    const service: PhotoService = TestBed.get(PhotoService);
    expect(service).toBeTruthy();
  });
});

class MockPhotoService {

}
