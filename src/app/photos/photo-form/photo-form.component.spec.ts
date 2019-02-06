import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoFormComponent } from './photo-form.component';
import { FormBuilder } from '@angular/forms';
import { AlertService } from 'src/app/shared/components/alert/alert.service';
import { UserService } from 'src/app/core/user/user.service';
import { TestUserService } from 'src/app/shared/test/test-user.service';
import { RouterTestingModule } from '@angular/router/testing';
import { PhotoService } from '../photo/photo.service';
import { AlertServiceStub } from 'src/app/shared/test/alert-service-stub';
import { NO_ERRORS_SCHEMA, DebugElement } from '@angular/core';
import { CommonModule } from '@angular/common';
import { By } from '@angular/platform-browser';
import { click } from 'src/app/shared/test';
import { PhotoServiceStub } from 'src/app/shared/test/photo-service-stub';
import { Router } from '@angular/router';

describe('PhotoFormComponent', () => {
  let component: PhotoFormComponent;
  let fixture: ComponentFixture<PhotoFormComponent>;
  // let photoSpy =  jasmine.createSpyObj('PhotoService', ['upload']);
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
  const alertServiceStub = new AlertServiceStub();
  const userService = new TestUserService();
  const photoServiceStub = new PhotoServiceStub();
  const parts = [
    new Blob(['file part 1'], {type: 'text/plain'}),
    'file part 2',
    new Uint16Array([33])
  ];
  const file = new File(parts, 'test-file.jpg', {lastModified : 1990, type: 'image/jpeg'});

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoFormComponent ],
      providers: [ FormBuilder,
        {
          provide: AlertService, alertServiceStub
        },
      {
        provide: UserService, useValue: TestUserService
      },
    {
      provide: PhotoService, useValue: photoServiceStub
    },
    {
      provide: Router, useValue: routerSpy
    }],
      imports: [CommonModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('handle file should assign file to local variable', async () => {
    fixture.detectChanges();
    await fixture.whenStable();

    component.handleFile(file);
    expect(component.file.name).toBe(file.name);
  });

  it('should upload file and show progress', async () => {
    fixture.detectChanges();
    await fixture.whenStable();
    component.handleFile(file);
    // const button: DebugElement = fixture.debugElement.query(By.css('test-submit-button'));
    // click(button);
    // fixture.detectChanges();
    component.upload();
    fixture.detectChanges();
    await fixture.whenStable();
    component.percentDone = 20;
    fixture.detectChanges();
    expect(component.percentDone).toBe(20);
  });
});
