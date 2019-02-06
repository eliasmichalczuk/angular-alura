import { Observable, of } from 'rxjs';
import { Photo } from 'src/app/photos/photo/photo';
import { HttpResponse, HttpEventType, HttpEvent } from '@angular/common/http';
import { PhotoComment } from 'src/app/photos/photo/photo-comment';

export class PhotoServiceStub {


    constructor() {

    }
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

    upload(description: string, allowComments: boolean, file: File) {
      const formData = new FormData();
      formData.append('description', description);
      formData.append('allowComments', allowComments ? 'true' : 'false');
      formData.append('imageFile', file);

      const progress: HttpEvent<any> = {
        loaded: 15,
        type: HttpEventType.UploadProgress
      };
      return of(progress);
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

    listFromUserPaginated(): Photo[] {
      throw new Error('Method not implemented.');
    }
  }
