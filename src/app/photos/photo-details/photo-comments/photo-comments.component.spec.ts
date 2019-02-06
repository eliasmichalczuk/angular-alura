import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoCommentsComponent } from './photo-comments.component';
import { FormBuilder } from '@angular/forms';
import { PhotoService } from '../../photo/photo.service';
import { PhotoServiceStub } from 'src/app/shared/test/photo-service-stub';
import { NO_ERRORS_SCHEMA, DebugElement } from '@angular/core';
import { TestPhotoCommentsComponent } from './test-photo-comments.component';
import { VmessageModule } from 'src/app/shared/components/vmessage/vmessage.module';
import { newEvent, click } from 'src/app/shared/test';
import { By } from '@angular/platform-browser';

describe('PhotoCommentsComponent', () => {
  let component: TestPhotoCommentsComponent;
  let fixture: ComponentFixture<TestPhotoCommentsComponent>;
  const photoServiceStub = new PhotoServiceStub();
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoCommentsComponent, TestPhotoCommentsComponent ],
      imports: [ VmessageModule ],
      providers: [
        FormBuilder,
        {
          provide: PhotoService, useValue: photoServiceStub
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPhotoCommentsComponent);
    component = fixture.componentInstance;
    component.component.photoId = 3;
    fixture.detectChanges();
    de = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a new comment', async () => {
    fixture.detectChanges();
    await fixture.whenStable();

    const inputEl: HTMLInputElement = de.nativeElement;
    const textarea: HTMLInputElement = inputEl.querySelector('.test-textarea');
    component.component.commentForm.get('comment').setValue('new comment');
    textarea.dispatchEvent(newEvent('input'));
    await fixture.detectChanges();
    component.component.save();
    fixture.detectChanges();
    await fixture.detectChanges();
    const comments: Array<HTMLElement> = fixture.nativeElement.querySelectorAll('p');
    expect(comments[2].innerText).toContain('new comment');
  });
});
