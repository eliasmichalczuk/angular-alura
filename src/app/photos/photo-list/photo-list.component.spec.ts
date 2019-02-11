import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoListComponent } from './photo-list.component';
import { ActivatedRoute } from '@angular/router';
import { ActivatedRouteStub } from 'src/app/shared/test/activated-route-stub';
import { PhotoServiceStub } from 'src/app/shared/test/photo-service-stub';
import { PhotoService } from '../photo/photo.service';
import {NO_ERRORS_SCHEMA } from '@angular/core';

import { FilterByDescriptionPipe } from './filter-by-description.pipe';
import { of } from 'rxjs';
import { Photo } from '../photo/photo';

describe('PhotoListComponent', async () => {
  let component: PhotoListComponent;
  let fixture: ComponentFixture<PhotoListComponent>;
  const photoStub = new PhotoServiceStub();
  let photoList: Photo[];

  beforeEach(async(async () => {
    await photoStub.listFromUserPaginated().subscribe((res) => {
      photoList = res;
    });
    TestBed.configureTestingModule({
      declarations: [PhotoListComponent, FilterByDescriptionPipe],
      providers: [
        {
          provide: ActivatedRoute, useValue:
          {
            params: of({ userName: 'flavio' }),
            snapshot: {
              data: {
                'photos': photoList
              }
            }
          }
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

  xit('should create', () => {
    // testar métodos privados
    // spyOn<any>(component, 'foo');
    // component.ngOnInit();
    // component['foo']();
    // expect(component['foo']).toHaveBeenCalled();
    expect(component).toBeTruthy();

  });

  it('load method should work', async () => {
    fixture.detectChanges();
    await fixture.whenStable();
    component.load();
    const photoListLoaded = photoList.concat(photoList);

    expect(component.photos).toEqual(photoListLoaded);
    fixture.detectChanges();
    await fixture.whenStable();
  });
});
