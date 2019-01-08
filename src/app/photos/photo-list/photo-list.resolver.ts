import { PhotoService } from '../photo/photo.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Photo } from '../photo/photo';

@Injectable({providedIn: 'root'})
export class PhotoListResover implements Resolve<Observable<Array<Photo>>> {

    constructor(private service: PhotoService) {}

    resolve (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<Photo>> {
        const userName = route.params.userName;
        return this.service.listFromUserPaginated(userName, 1);
    }
}
