import { ComponentFixture, TestBed, fakeAsync, TestModuleMetadata } from '@angular/core/testing';
import { SigninComponent } from './signin.component';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { VmessageModule } from 'src/app/shared/components/vmessage/vmessage.module';
import { ActivatedRouteStub } from 'src/app/shared/test/activated-route-stub';
import { click, newEvent } from 'src/app/shared/test';
import { setUpTestBed } from 'src/test.common.spec';

let component: SigninComponent;
let fixture: ComponentFixture<SigninComponent>;
let de: DebugElement;
const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl', 'navigate']);
const activatedRouteStub = new ActivatedRouteStub();
const authServiceSpy = jasmine.createSpyObj('AuthService', ['authenticate']);

describe('SigninComponent ', () => {
  const moduleDef: TestModuleMetadata = {
    declarations: [SigninComponent],
    providers: [FormBuilder
      , PlatformDetectorService,
      {
        provide: AuthService, useValue: authServiceSpy
      },
      {
        provide: Router, useValue: routerSpy
      },
      {
        provide: ActivatedRoute, useValue: activatedRouteStub
      }
    ],
    imports: [ReactiveFormsModule, VmessageModule],
    schemas: [NO_ERRORS_SCHEMA]
  };
  setUpTestBed(moduleDef);
  beforeEach((() => {
    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  }));

  it('should login correctly', async () => {
    fixture.detectChanges();
    await fixture.whenStable();

    authServiceSpy.authenticate.and.returnValue(of(new HttpResponse().ok));
    const navigateSpy = spyOn(component, 'navigateToUser');

    const htmlEl: HTMLInputElement = de.nativeElement;
    const username: HTMLInputElement = htmlEl.querySelector('.test-username');
    const password: HTMLInputElement = htmlEl.querySelector('.test-password');

    username.value = 'flavio';
    password.value = '123';
    username.dispatchEvent(newEvent('input'));
    password.dispatchEvent(newEvent('input'));
    fixture.detectChanges();
    await fixture.whenStable();
    const loginButton = de.nativeElement.querySelector('button');
    click(loginButton);
    fixture.detectChanges();
    await fixture.whenStable();
    expect(navigateSpy).toHaveBeenCalled();
  });
});
