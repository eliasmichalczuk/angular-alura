import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoCommentsComponent } from './photo-comments.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { PhotoService } from '../../photo/photo.service';
import { of, defer } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { ComponentForTestComponent } from './component-for-test.component';
import { PhotoComment } from '../../photo/photo-comment';

describe('PhotoCommentsComponent', () => {
  let component: PhotoCommentsComponent;
  let fixture: ComponentFixture<PhotoCommentsComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PhotoCommentsComponent, ComponentForTestComponent
      ],
      providers: [ {
        provide: PhotoService, useClass: MockPhotoService
      }, FormBuilder ]
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

  it('should create a comment', async () => {
    // let commentLength;
    // component.comments$.subscribe(comments => commentLength = comments.length);
    // const newComment = 'new comment';
    // component.save(newComment);
    // let newLength;
    // component.comments$.subscribe(comments => newLength = comments.length);
    // expect(newLength > commentLength).toBeTruthy();

    const newComment = de.query(By.css('test-form-text')).nativeElement.value = 'new Comment';

    let comments;
    await component.comments$.subscribe((commentsResponse: Array<PhotoComment>) => {
      comments = commentsResponse;
    });
    expect(comments.length).toBe(1);
    component.save();
    await component.comments$.subscribe((commentsResponse: Array<PhotoComment>) => {
      comments = commentsResponse;
    });
    expect(this.comments.length).toBe(2);
    expect(this.comments[1].text).toEqual('new Comment');
  });

});

class MockPhotoService {

  comment: PhotoComment = {
    date: new Date,
    text: 'comment',
    userName: 'user'
  };
  private comments = new Array<PhotoComment>(this.comment);
  addComment(postId: number, value: string) {
    const newComment: PhotoComment = {
      date: new Date,
      text: value,
      userName: 'user'
    };
    this.comments.push(newComment);
    return defer(() => Promise.resolve(new HttpResponse()));
  }

  getComments() {
    return defer(() => Promise.resolve(this.comments));
  }
}
