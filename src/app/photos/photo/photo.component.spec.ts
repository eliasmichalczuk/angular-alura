import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoComponent } from './photo.component';
import { Component } from '@angular/core';

describe('PhotoComponent', () => {
  let component: PhotoComponent;
  let fixture: ComponentFixture<PhotoComponent>;

  let testComponent: TestPhotoComponent;
  let testFixture: ComponentFixture<TestPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoComponent, TestPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoComponent);
    component = fixture.componentInstance;
    testFixture = TestBed.createComponent(TestPhotoComponent);
    testComponent = testFixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({
  selector: 'app-test-photo-component',
  template: `
    <app-photo src="https://cdn-images-1.medium.com/max/1600/1*AKKvE3QmN_ZQmEzSj16oXg.png" alt="testing">
    </app-photo>
  `
})
export class TestPhotoComponent {

}
