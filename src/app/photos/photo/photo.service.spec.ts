import { TestBed } from '@angular/core/testing';

import { PhotoService } from './photo.service';
import { HttpClient } from '@angular/common/http';
import { Photo } from './photo';
import { OnInit } from '@angular/core';
import { defer } from 'rxjs';

describe('PhotoService |', () => {
  let photoService: PhotoService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: PhotoService, useClass: MockPhotoService }, HttpClient ]
    });
    photoService = TestBed.get(PhotoService);
  });

  it('should be created', () => {
    const service: PhotoService = TestBed.get(PhotoService);
    expect(service).toBeTruthy();
  });

  it('should return a photo', () => {
    photoService.findById(1).subscribe((photo: Photo) => {
      expect(photo.id).toBe(2);
    });
  });
});

class MockPhotoService implements OnInit {
  photo: Photo = {
    id: 1,
    postDate: new Date,
    url: 'url',
    description: 'description',
    allowComments: true,
    likes: 2,
    comments: 2,
    userId: 1
  };
  photos: Array<Photo>;

  ngOnInit(): void {
    this.photos.push(this.photo);
  }

  findById(photoId: number) {
    return defer(() => Promise.resolve(this.photos[0]));
  }
}
