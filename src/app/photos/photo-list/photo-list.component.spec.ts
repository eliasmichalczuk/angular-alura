import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoListComponent } from './photo-list.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { PhotoService } from '../photo/photo.service';

describe('PhotoListComponent', () => {
  let component: PhotoListComponent;
  let fixture: ComponentFixture<PhotoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoListComponent, {
        provide: ActivatedRoute,
        useValue: {
          params: of({id: 13})
        }
      }, PhotoService ]
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

class MockPhotoService {

  listFromUserPaginated() {
  }
}
