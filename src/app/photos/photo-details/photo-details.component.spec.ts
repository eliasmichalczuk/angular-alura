import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { PhotoDetailsComponent } from './photo-details.component';
import { TestUserService } from 'src/app/shared/test/test-user.service';
import { AlertService } from 'src/app/shared/components/alert/alert.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ActivatedRouteStub } from 'src/app/shared/test/activated-route-stub';
import { PhotoService } from '../photo/photo.service';
import { Photo } from '../photo/photo';
import { defer, of, Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { DebugElement, NO_ERRORS_SCHEMA, inject } from '@angular/core';
import { By } from '@angular/platform-browser';
import { click } from 'src/app/shared/test';
import { ShowIfLoggeInModule } from 'src/app/shared/directives/show-if-loggeIn/show-if-logge-in.module';
import { VmessageModule } from 'src/app/shared/components/vmessage/vmessage.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { setTimeout } from 'timers';
import { PhotoServiceStub } from 'src/app/shared/test/photo-service-stub';
import { AlertServiceStub } from 'src/app/shared/test/alert-service-stub';

describe('PhotoDetailsComponent', () => {
  let component: PhotoDetailsComponent;
  let fixture: ComponentFixture<PhotoDetailsComponent>;
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
  let activatedSub = new ActivatedRouteStub({id: '50'});
  let photoStub = new PhotoServiceStub();
  const photoServiceSpy = jasmine.createSpyObj('PhotoService', ['findById', 'removePhoto', 'like']);
  let deleteButton: DebugElement;
  let router: Router;
  let alertServiceStub =  new AlertServiceStub();
  let serviceSpy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoDetailsComponent ],
      providers: [ TestUserService,
        {
        provide: AlertService, useValue: alertServiceStub
      }, {
        provide: ActivatedRoute, useValue: activatedSub
      },
    {
      provide: Router, useValue: routerSpy
    },
    {
      provide: PhotoService, useValue: photoStub
    }],
    imports: [ReactiveFormsModule,
      FormsModule,
      VmessageModule,
      ShowIfLoggeInModule, CommonModule],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    deleteButton = fixture.debugElement.query(By.css('.test-delete-button'));
    serviceSpy = TestBed.get(ActivatedRoute);
    // deleteButton = fixture.debugElement.nativeElement.queryAll(By.directive('i'))[0];
  });

  it('should call delete from component', () => {
    fixture.whenStable().then(() => {
      expect(component).toBeDefined();
      fixture.detectChanges();

      const photosrc = fixture.debugElement.injector.get(PhotoService);
      router = fixture.debugElement.injector.get(Router);

      spyOn(photosrc, 'removePhoto');
      spyOn(component, 'remove');
      click(deleteButton);
      fixture.detectChanges();
      expect(component.remove).toHaveBeenCalled();
    });
  });

  it('should like a photo', () => {
    fixture.whenStable().then(async () => {
      fixture.detectChanges();
      photoStub.findById(50).subscribe((photo) => {
        component.photo = photo;
      });
      fixture.detectChanges();
      const spy = spyOn(component, 'like');
      const likeButton = fixture.debugElement.query(By.css('.test-like-button'));
      click(likeButton);
      fixture.detectChanges();
      expect(spy).toHaveBeenCalledWith(photoStub.getPhoto());
    });
  });
});



