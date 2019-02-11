import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../photo/photo';
import { Subject, timer } from 'rxjs';
import { debounceTime, debounce } from 'rxjs/operators';
import { PhotoService } from '../photo/photo.service';
import { LoadingService } from 'src/app/shared/components/loading/loading.service';

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
    // necessários subscribe para receber os dados ao entrar no perfil de outro usuário
    this.actRoute.params.subscribe(params => {
      this.userName = params.userName;
      this.photos = this.actRoute.snapshot.data['photos'];
    });
  }


  load() {
    this.photoService.listFromUserPaginated(this.userName, ++this.currentPage)
      .subscribe(photos => {
        this.photos = this.photos.concat(photos);
        this.filter = '';
        if (!photos.length) {
          this.hasMore = false;
        }
      });
  }
}
