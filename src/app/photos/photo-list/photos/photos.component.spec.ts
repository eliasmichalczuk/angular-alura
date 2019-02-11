import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotosComponent } from './photos.component';
import { NO_ERRORS_SCHEMA, ViewChild, OnInit, Component, DebugElement } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoServiceStub } from 'src/app/shared/test/photo-service-stub';
import { Photo } from '../../photo/photo';


describe('PhotosComponent', () => {
  let component: TestPhotosComponent;
  let fixture: ComponentFixture<TestPhotosComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotosComponent, TestPhotosComponent ],
      providers: [PhotoServiceStub],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [CommonModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de = fixture.debugElement;
  });

  it('should change rows on changes', async () => {

    fixture.detectChanges();
    await fixture.whenStable();
    expect(component.photosComponent.rows.length).toBe(1);
    component.load();
    fixture.detectChanges();
    await fixture.whenStable();
    expect(component.photosComponent.rows.length).toBe(2);

  });
});


@Component({
  selector: 'app-test-photos-component',
  template: `
    <app-photos [photos]=photos></app-photos>
  `
})
export class TestPhotosComponent implements OnInit {

  @ViewChild(PhotosComponent)
  photosComponent: PhotosComponent;

  photos: Photo[] = [];
  constructor(private photoService: PhotoServiceStub) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.photoService.listFromUserPaginated().subscribe((response) => {
      this.photos = this.photos.concat(response);
    });
    this.photosComponent.photos = this.photos;
  }

}
