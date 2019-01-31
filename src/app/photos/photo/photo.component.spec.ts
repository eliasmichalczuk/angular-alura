import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoComponent } from './photo.component';
import { Component, DebugElement, ViewChild } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('PhotoComponent | ', () => {
  // let component: PhotoComponent;
  // let fixture: ComponentFixture<PhotoComponent>;

  let testComponent: TestPhotoComponent;
  let testFixture: ComponentFixture<TestPhotoComponent>;

  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoComponent, TestPhotoComponent ]
    })
    .compileComponents();
    // fixture = TestBed.createComponent(PhotoComponent);
    // component = fixture.componentInstance;
    testFixture = TestBed.createComponent(TestPhotoComponent);
    testComponent = testFixture.componentInstance;
    testFixture.detectChanges();
    //fixture.detectChanges();
    // de = fixture.debugElement;
  }));

  it('should show image', () => {
    testComponent.photoComponent.url = 'uploadTest';
    testComponent.photoComponent.description = 'testing alt';
    testFixture.detectChanges();
    expect(testFixture.nativeElement.querySelector('img').src).toEqual('http://localhost:3000/imgs/uploadTest');
    expect(testFixture.nativeElement.querySelector('img').alt).toEqual('testing alt');
  });
});

@Component({
  selector: 'app-test-photo-component',
  template: `
    <app-photo >
    </app-photo>
  `
})
export class TestPhotoComponent {

  @ViewChild (PhotoComponent)
  public photoComponent: PhotoComponent;
}
