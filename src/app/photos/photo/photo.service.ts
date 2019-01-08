import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Photo } from './photo';
const API = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
@Injectable({providedIn: 'root'})
export class PhotoService {

  constructor(private http: HttpClient) { }

  listFromUser(username: string) {
    return this.http
    .get<Photo[]>(API + `${username}/photos`);
      // err => console.log(err.message)
  }

  listFromUserPaginated(username: string, page: number) {
    const params = new HttpParams().append('page', page.toString());
    return this.http
    .get<Photo[]>(API + `${username}/photos`, { params });
      // err => console.log(err.message)
  }
}
