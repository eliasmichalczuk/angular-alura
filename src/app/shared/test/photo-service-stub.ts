import { Observable, of } from 'rxjs';
import { Photo } from 'src/app/photos/photo/photo';
import { HttpResponse, HttpEventType, HttpEvent } from '@angular/common/http';
import { PhotoComment } from 'src/app/photos/photo/photo-comment';
import { PhotosMock } from './components/photosMock';

export class PhotoServiceStub {

  photosMock: PhotosMock;

  comments: Array<PhotoComment> = [
    {
      date: new Date,
      text: 'text test',
      userName: 'user'
    },
    {
      date: new Date,
      text: 'test',
      userName: 'joao'
    }
  ];

  photos: Array<Photo>;
    constructor() {
      this.photosMock = new PhotosMock();
      this.photos = this.photosMock.photos;
    }

    upload(description: string, allowComments: boolean, file: File): Observable<HttpResponse<any>> {
      const formData = new FormData();
      formData.append('description', description);
      formData.append('allowComments', allowComments ? 'true' : 'false');
      formData.append('imageFile', file);

      const progress: HttpEvent<any> = {
        loaded: 15,
        type: HttpEventType.UploadProgress
      };
      return of(new HttpResponse());
    }

    findById(photoId: number): Observable<Photo> {
      return of({
        id: photoId,
        allowComments: true,
        comments: 2,
        description: 'desc',
        likes: 2,
        postDate: new Date(2019, 4, 12),
        url: 'url',
        userId: 1
      });
    }

    getPhoto() {
      return {
        id: 50,
        allowComments: true,
        comments: 2,
        description: 'desc',
        likes: 2,
        postDate: new Date(2019, 4, 12),
        url: 'url',
        userId: 1
      };
    }

    removePhoto(photoId: number) {
      return of(new HttpResponse());
    }

    like(photoId: number) {
      return of(false);
    }

    getComments(photoId: number) {
      return of(this.comments);
    }

    addComment(photoId: number, commentText: string) {
      this.comments.push({
        date: new Date,
        text: commentText,
        userName: 'name'
      });
      return of(new HttpResponse().ok);
    }

    listFromUserPaginated(): Observable<Photo[]> {
      return of(this.photos);
    }
  }
