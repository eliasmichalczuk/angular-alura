import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoListComponent } from './photo-list.component';
import { ActivatedRoute } from '@angular/router';
import { ActivatedRouteStub } from 'src/app/shared/test/activated-route-stub';
import { PhotoServiceStub } from 'src/app/shared/test/photo-service-stub';
import { PhotoService } from '../photo/photo.service';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { PhotosComponent } from './photos/photos.component';
import { LoadButtonComponent } from './load-button/load-button.component';
import { FilterByDescriptionPipe } from './filter-by-description.pipe';
import { of } from 'rxjs';
import { Photo } from '../photo/photo';

describe('PhotoListComponent', async () => {
  let component: PhotoListComponent;
  let fixture: ComponentFixture<PhotoListComponent>;
  let activatedStub = new ActivatedRouteStub();
  let photoStub = new PhotoServiceStub();
  let photoList: Photo[];

  beforeEach(async(async () => {
    await photoStub.listFromUserPaginated().subscribe((res) => {
      photoList = res;
    });
    TestBed.configureTestingModule({
      declarations: [ PhotoListComponent, FilterByDescriptionPipe  ],
      providers: [
        {
          provide: ActivatedRoute, useValue:
          {
            params: of({userName: 'flavio'}),
            snapshot: photoList
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

  it('should create', () => {
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
    expect(component.photos).toBe(photoList);
    fixture.detectChanges();
    await fixture.whenStable();
  });
});

// [ Object({ allowComments: true, comments: 1, description: 'descr', id: 1, likes: 2, postDate: Date(Mon Feb 11 2019 09:17:10 GMT-0200 (Horário de Verão de Brasília)), url: 'url base', userId: 1 }), Object({ allowComments: true, comments: 1, description: 'descr', id: 2, likes: 2, postDate: Date(Mon Feb 11 2019 09:17:10 GMT-0200 (Horário de Verão de Brasília)), url: 'url base', userId: 1 }), Object({ allowComments: true, comments: 1, description: 'descr', id: 2, likes: 2, postDate: Date(Mon Feb 11 2019 09:17:10 GMT-0200 (Horário de Verão de Brasília)), url: 'url base', userId: 1 }) ]
// [ Object({ allowComments: true, comments: 1, description: 'descr', id: 1, likes: 2, postDate: Date(Mon Feb 11 2019 09:17:10 GMT-0200 (Horário de Verão de Brasília)), url: 'url base', userId: 1 }), Object({ allowComments: true, comments: 1, description: 'descr', id: 2, likes: 2, postDate: Date(Mon Feb 11 2019 09:17:10 GMT-0200 (Horário de Verão de Brasília)), url: 'url base', userId: 1 }), Object({ allowComments: true, comments: 1, description: 'descr', id: 2, likes: 2, postDate: Date(Mon Feb 11 2019 09:17:10 GMT-0200 (Horário de Verão de Brasília)), url: 'url base', userId: 1 }) ] 