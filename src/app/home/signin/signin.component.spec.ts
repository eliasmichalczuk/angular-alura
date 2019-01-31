import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninComponent } from './signin.component';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Router, ActivatedRoute, RouterModule, RouterLink } from '@angular/router';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { By, BrowserModule } from '@angular/platform-browser';
import { defer, of } from 'rxjs';
import { HttpResponse, HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { VmessageModule } from 'src/app/shared/components/vmessage/vmessage.module';

describe('SigninComponent |', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;
  let de: DebugElement;
  let authServiceSpy;

  beforeEach((() => {
    const spy = jasmine.createSpyObj('AuthService', ['authenticate']);
    TestBed.configureTestingModule({
      declarations: [ SigninComponent ],
      providers: [ FormBuilder, Router, PlatformDetectorService, {
        provide: ActivatedRoute,
        useValue: {
          params: of({fromUrl: '/'})
        }
      },
      {
        provide: AuthService, useValue: spy
      }],
      imports: [ReactiveFormsModule, VmessageModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
    authServiceSpy = TestBed.get(AuthService);
    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de = fixture.debugElement;
    spyOn(component, 'navigateToUser').and.callThrough();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should login correctly', () => {
    de.query(By.css('test-username')).nativeElement.value = 'flavio';
    de.query(By.css('test-password')).nativeElement.value = '123';
    de.nativeElement.querySelector('button').click();
    authServiceSpy.authenticate.and.returnValue(defer(() => Promise.resolve(new HttpResponse())));
    expect(component.navigateToUser).toHaveBeenCalled();
  });
});
