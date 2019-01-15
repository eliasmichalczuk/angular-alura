import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotoService } from '../photo/photo.service';
import { Photo } from '../photo/photo';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.css']
})
export class PhotoDetailsComponent implements OnInit {

  photo$: Observable<Photo>;
  photo: Photo;
  photoId: number;

  constructor(
    private route: ActivatedRoute,
    private photoService: PhotoService,
    private router: Router) { }

  ngOnInit() {
    this.photoId = this.route.snapshot.params.id;
    this.photoService.findById(this.photoId).subscribe(photo => this.photo = photo);
  }

  remove() {
    this.photoService.removePhoto(this.photoId)
                      .subscribe(() => this.router.navigate(['']));
  }
}
