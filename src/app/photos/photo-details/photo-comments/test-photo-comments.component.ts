import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { PhotoComment } from '../../photo/photo-comment';
import { PhotoService } from '../../photo/photo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap, tap } from 'rxjs/operators';
import { PhotoCommentsComponent } from './photo-comments.component';

@Component({
  template:
  `
    <app-photo-comments></app-photo-comments>
  `,
  styleUrls: ['./photo-comments.component.css']
})
export class TestPhotoCommentsComponent implements OnInit {

  @ViewChild(PhotoCommentsComponent)
  public component: PhotoCommentsComponent;

  constructor() { }

  ngOnInit() {
  }
}
