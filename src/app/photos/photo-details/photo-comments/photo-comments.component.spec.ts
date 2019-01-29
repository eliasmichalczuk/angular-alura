import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoCommentsComponent } from './photo-comments.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('PhotoCommentsComponent', () => {
  let component: PhotoCommentsComponent;
  let fixture: ComponentFixture<PhotoCommentsComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoCommentsComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a comment', () => {
    let commentLength;
    component.comments$.subscribe(comments => commentLength = comments.length);
    const newComment = 'new comment';
    component.save(newComment);
    let newLength;
    component.comments$.subscribe(comments => newLength = comments.length);
    expect(newLength > commentLength).toBeTruthy();
  });

});
