import { Photo } from 'src/app/photos/photo/photo';

export class PhotosMock {

    constructor() {}

    get photos() {
        return this._photos;
    }
    private _photos: Array<Photo> = [
        {
          allowComments: true,
          comments: 1,
          description: 'descr',
          id: 1,
          likes: 2,
          postDate: new Date,
          url: 'url base',
          userId: 1
        },
        {
          allowComments: true,
          comments: 1,
          description: 'descr',
          id: 2,
          likes: 2,
          postDate: new Date,
          url: 'url base',
          userId: 1
        },
        {
          allowComments: true,
          comments: 1,
          description: 'descr',
          id: 2,
          likes: 2,
          postDate: new Date,
          url: 'url base',
          userId: 1
        }
      ];
}
