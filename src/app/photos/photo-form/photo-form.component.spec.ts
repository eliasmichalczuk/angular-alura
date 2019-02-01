import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoFormComponent } from './photo-form.component';
import { FormBuilder } from '@angular/forms';
import { AlertService } from 'src/app/shared/components/alert/alert.service';
import { UserService } from 'src/app/core/user/user.service';
import { TestUserService } from 'src/app/shared/test/test-user.service';
import { RouterTestingModule } from '@angular/router/testing';
import { PhotoService } from '../photo/photo.service';

describe('PhotoFormComponent', () => {
  let component: PhotoFormComponent;
  let fixture: ComponentFixture<PhotoFormComponent>;
  let photoSpy =  jasmine.createSpyObj('PhotoService', ['upload']);
  let routerSpy = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoFormComponent ],
      providers: [ FormBuilder, AlertService,
      {
        provide: UserService, userClass: TestUserService
      },
    {
      provide: PhotoService, useValue: photoSpy
    }],
      imports: [RouterTestingModule]
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
});
