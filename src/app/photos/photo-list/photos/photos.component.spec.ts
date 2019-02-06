import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotosComponent } from './photos.component';
import { NO_ERRORS_SCHEMA, ViewChild, OnInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoServiceStub } from 'src/app/shared/test/photo-service-stub';


describe('PhotosComponent', () => {
  let component: PhotosComponent;
  let fixture: ComponentFixture<PhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotosComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [CommonModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


@Component({
  selector: 'app-test-photos-component'
})
export class TestPhotosComponent implements OnInit {

  @ViewChild(PhotosComponent)
  photosComponent: PhotosComponent;

  constructor(private photoService: PhotoServiceStub) { }

  ngOnInit() {
    this.photosComponent.photos = this.photoService.listFromUserPaginated();
  }

}
