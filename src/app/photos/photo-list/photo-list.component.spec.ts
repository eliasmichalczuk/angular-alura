import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoListComponent } from './photo-list.component';
import { ActivatedRoute } from '@angular/router';
import { ActivatedRouteStub } from 'src/app/shared/test/activated-route-stub';
import { PhotoServiceStub } from 'src/app/shared/test/photo-service-stub';
import { PhotoService } from '../photo/photo.service';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { PhotosComponent } from './photos/photos.component';
import { LoadButtonComponent } from './load-button/load-button.component';

describe('PhotoListComponent', () => {
  let component: PhotoListComponent;
  let fixture: ComponentFixture<PhotoListComponent>;
  let activatedStub = new ActivatedRouteStub();
  let photoStub = new PhotoServiceStub();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoListComponent,  ],
      providers: [
        {
          provide: ActivatedRoute, useValue: activatedStub
        },
        {
          provide: PhotoService, useValue: photoStub
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
