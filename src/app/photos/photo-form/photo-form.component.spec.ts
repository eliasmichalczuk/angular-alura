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
import { PhotoServiceStub } from 'src/app/shared/test/photo-service-stub';
import { Router } from '@angular/router';

describe('PhotoFormComponent', () => {
  let component: PhotoFormComponent;
  let fixture: ComponentFixture<PhotoFormComponent>;
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
  const alertStub = new AlertServiceStub();
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
          provide: AlertService, useValue: alertStub
        },
      {
        provide: UserService, useClass: TestUserService
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

  it('handle file should assign file to local variable', async () => {
    fixture.detectChanges();
    await fixture.whenStable();

    component.handleFile(file);
    expect(component.file.name).toBe(file.name);
  });

  it('should upload file and show progress', async () => {

    spyOn(alertStub, 'success');
    fixture.detectChanges();
    await fixture.whenStable();
    component.handleFile(file);
    component.upload();
    component.percentDone = 20;
    expect(component.percentDone).toBe(20);
    fixture.detectChanges();
    await fixture.whenStable();
    expect(alertStub.success).toHaveBeenCalled();
  });
});
