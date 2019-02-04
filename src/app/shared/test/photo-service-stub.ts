import { Observable, of } from 'rxjs';
import { Photo } from 'src/app/photos/photo/photo';
import { HttpResponse } from '@angular/common/http';

export class PhotoServiceStub {

    constructor() {
  
    }
  
    findById(photoId: number): Observable<Photo> {
      return of({
        id: photoId,
        allowComments: true,
        comments: 2,
        description: 'desc',
        likes: 2,
        postDate: new Date,
        url: 'url',
        userId: 1
      });
    }
    removePhoto(photoId: number) {
      return of(new HttpResponse());
    }
  
    like(photoId: number) {
      return of(false);
    }
  }