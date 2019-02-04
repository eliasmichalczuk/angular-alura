import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoDetailsComponent } from './photo-details.component';
import { TestUserService } from 'src/app/shared/test/test-user.service';
import { AlertService } from 'src/app/shared/components/alert/alert.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ActivatedRouteStub } from 'src/app/shared/test/activated-route-stub';
import { PhotoService } from '../photo/photo.service';
import { Photo } from '../photo/photo';
import { defer, of, Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { click } from 'src/app/shared/test';
import { ShowIfLoggeInModule } from 'src/app/shared/directives/show-if-loggeIn/show-if-logge-in.module';
import { VmessageModule } from 'src/app/shared/components/vmessage/vmessage.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('PhotoDetailsComponent', () => {
  let component: PhotoDetailsComponent;
  let fixture: ComponentFixture<PhotoDetailsComponent>;
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
  let activatedSub: ActivatedRouteStub;
  let photoStub: PhotoServiceStub;
  const photoServiceSpy = jasmine.createSpyObj('PhotoService', ['findById', 'removePhoto', 'like']);
  let deleteButton: DebugElement;
  beforeEach(async(() => {
    activatedSub = new ActivatedRouteStub();
    activatedSub.setParamMap({id: '50'});
    photoStub = new PhotoServiceStub();
    TestBed.configureTestingModule({
      declarations: [ PhotoDetailsComponent ],
      providers: [ TestUserService,
        {
        provide: AlertService, useValue: new AlertServiceStub()
      }, {
        provide: ActivatedRoute, useValue: activatedSub
      },
    {
      provide: Router, useValue: routerSpy
    },
    {
      provide: PhotoService, useValue: new PhotoServiceStub()
    }],
    imports: [ReactiveFormsModule,
      FormsModule,
      VmessageModule,
      ShowIfLoggeInModule],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    deleteButton = fixture.debugElement.query(By.css('.test-delete-button'));
    // deleteButton = fixture.debugElement.nativeElement.queryAll(By.directive('i'))[0];
  });

  it('should delete the photo and replace url', () => {
    fixture.whenStable().then(() => {
      expect(component).toBeDefined();
      fixture.detectChanges();
      const onClick = spyOn(component, 'remove').and.callFake(() => null);
      // const button = fixture.nativeElement.query(By.css('test-delete-button'));
      click(deleteButton);
      fixture.detectChanges();
      expect(onClick).toHaveBeenCalled();
    });
  });

  // it('should create', () => {
  //   // photoServiceSpy.findById.and.returnValue();
  //   const app = fixture.debugElement.componentInstance();
  //   expect(app).toBeTruthy();
  // });
});

class PhotoServiceStub {

  constructor() {

  }

  findById(photoId: number): Observable<Photo> {
    return of({
      id: photoId,
      allowComments: true,
      comments: 2,
      description: 'desc',
      likes: 2,
      postDate: new Date,
      url: 'url',
      userId: 1
    });
  }
  removePhoto(photoId: number) {
    return of(new HttpResponse());
  }

  like(photoId: number) {
    return of(false);
  }
}

class AlertServiceStub {
  constructor() {
  }

  success(message: string, keepAfterRouteChange = false) {
  }

  warning(message: string, keepAfterRouteChange = false) {
  }

  danger(message: string, keepAfterRouteChange = false) {
  }

  info(message: string, keepAfterRouteChange = false) {
  }
}
