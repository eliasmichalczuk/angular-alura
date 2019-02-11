import { TestBed, ComponentFixture, async } from '@angular/core/testing';

import { SignupService } from './signup.service';
import { SignupComponent } from './signup.component';
import { Router } from '@angular/router';
import { ActivatedRouteStub } from 'src/app/shared/test/activated-route-stub';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';
import { HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { VmessageModule } from 'src/app/shared/components/vmessage/vmessage.module';
import { NO_ERRORS_SCHEMA, DebugElement } from '@angular/core';
import { BrowserModule, By } from '@angular/platform-browser';
import { VmessageComponent } from 'src/app/shared/components/vmessage/vmessage.component';
import { setTimeout } from 'timers';
import { newEvent } from 'src/app/shared/test';

let activatedRoute: ActivatedRouteStub;
let component: SignupComponent;
let fixture: ComponentFixture<SignupComponent>;
let de: any;
let page: Page;
let routerSpy = jasmine.createSpyObj('Router', ['navigate']);
let validatorSpy = jasmine.createSpyObj('UserNotTakenValidatorService', ['usernameTaken']);
let signUpStub = jasmine.createSpyObj('SignUpService', ['signup']);

describe('SignupComponent', () => {
  beforeEach(async(() => {

    TestBed.configureTestingModule({
      providers: [FormBuilder,
        PlatformDetectorService,
        {provide: Router, useValue: routerSpy},
        {provide: SignupService, useVale: signUpStub}
        // ,
        // {provide: UserNotTakenValidatorService, useValue: validatorSpy}
      ],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [SignupComponent, VmessageComponent],
      imports: [FormsModule, BrowserModule, CommonModule, ReactiveFormsModule]
    }).compileComponents();
    signUpStub.signup.and.returnValue(of(new HttpResponse));

    validatorSpy.usernameTaken.and.returnValue(null);
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;

    de = fixture.debugElement.nativeElement;
    page = new Page(fixture);
    fixture.detectChanges();
  }));

  beforeEach(async(() => {

  }));

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should display all inputs', async () => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {

      const bannerDe: DebugElement = fixture.debugElement;
      const bannerEl: HTMLElement = bannerDe.nativeElement;
      const email = bannerDe.query(By.css('.test-email-input'));
      const fullname = bannerDe.query(By.css('.test-fullname-input'));
      const username = bannerDe.query(By.css('.test-username-input'));
      const password = bannerDe.query(By.css('.test-password-input'));

      expect(email).toBeTruthy();
      expect(fullname).toBeTruthy();
      expect(username).toBeTruthy();
      expect(password).toBeTruthy();
    });
  });

  it('should complete inputs and send to service', async () => {
    fixture.detectChanges();
    fixture.whenStable().then(async () => {
      const bannerDe: DebugElement = fixture.debugElement;
      const bannerEl: HTMLInputElement = <HTMLInputElement> bannerDe.nativeElement;
      let email: HTMLInputElement = bannerEl.querySelector('.test-email-input');
      let fullname: HTMLInputElement = bannerEl.querySelector('.test-fullname-input');
      let username: HTMLInputElement = bannerEl.querySelector('.test-username-input');
      let password: HTMLInputElement = bannerEl.querySelector('.test-password-input');

      email.value = 'email@test.com';
      fullname.value = 'Full name';
      username.value = 'usernamer';
      password.value = 'newPassword';

      email.dispatchEvent(newEvent('input'));
      fullname.dispatchEvent(newEvent('input'));
      username.dispatchEvent(newEvent('input'));
      password.dispatchEvent(newEvent('input'));

      let spy = spyOn(component, 'signup');
      bannerDe.query(By.css('.test-submit-button')).triggerEventHandler('click', null);
      fixture.detectChanges();
      await fixture.whenStable();
      expect(component.signupForm.errors).toBeNull();
      expect(spy).toHaveBeenCalled();
    });
  });

  it('should complete form with wrong info and get error', async () => {
    fixture.detectChanges();
    fixture.whenStable().then(async () => {
      const de: DebugElement = fixture.debugElement;
      const htmlEl: HTMLInputElement = <HTMLInputElement> de.nativeElement;
      let email: HTMLInputElement = htmlEl.querySelector('.test-email-input');
      let fullname: HTMLInputElement = htmlEl.querySelector('.test-fullname-input');
      let username: HTMLInputElement = htmlEl.querySelector('.test-username-input');
      let password: HTMLInputElement = htmlEl.querySelector('.test-password-input');

      email.value = 'email';
      fullname.value = 'a';
      username.value = 's';
      password.value = 'short';

      email.dispatchEvent(newEvent('input'));
      fullname.dispatchEvent(newEvent('input'));
      username.dispatchEvent(newEvent('input'));
      password.dispatchEvent(newEvent('input'));

      let spy = spyOn(component, 'signup');
      de.query(By.css('.test-submit-button')).triggerEventHandler('click', null);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(spy).not.toHaveBeenCalled();
        // expect(component.signupForm.get('userName').errors).toBeTruthy();
        // verificar porque esta nulo
      });
    });
  });
});

class Page {


  get fields() { return this.queryAll<HTMLElement>('input'); }
  // get fieldsArray() { return this.queryAllDebug<DebugElement>(By.css('input')); }
  navigateSpy:  jasmine.Spy;


  constructor(fixture: ComponentFixture<SignupComponent>) {
    // const routerSpy = <any> fixture.debugElement.injector.get(Router);
    this.navigateSpy = routerSpy.navigate;
  }
  private query<T>(selector: string): T {
    return fixture.nativeElement.querySelector(selector);
  }

  private queryAll<T>(selector: string): T[] {
    return fixture.nativeElement.querySelectorAll(selector);
  }

}
