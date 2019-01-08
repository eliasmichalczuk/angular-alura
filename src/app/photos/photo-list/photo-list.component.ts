import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../photo/photo';
import { Subject, timer } from 'rxjs';
import { debounceTime, debounce } from 'rxjs/operators';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];
  filter = '';
  hasMore: Boolean = true;

  currentPage = 1;
  userName = '';

  constructor(private actRoute: ActivatedRoute,
    private photoService: PhotoService) { }

  ngOnInit(): void {
    this.photos = this.actRoute.snapshot.data.photos;
    this.userName = this.actRoute.snapshot.params.userName;
  }


  load() {
    this.photoService.listFromUserPaginated(this.userName, ++this.currentPage)
                    .subscribe(photos => {
                      this.photos = this.photos.concat(photos);
                      this.filter = '';
                      // this.photos.push(...photos) -> atribui um a um no array
                      if (!photos.length) {
                        this.hasMore = false;
                      }
                    });
  }
}
