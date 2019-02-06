import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
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
import { ActivatedRouteStub } from 'src/app/shared/test/activated-route-stub';

let component: SigninComponent;
let fixture: ComponentFixture<SigninComponent>;
let de: DebugElement;
let authenticate;
const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl', 'navigate']);
const activatedRouteStub = new ActivatedRouteStub();
const authServiceSpy = jasmine.createSpyObj('AuthService', ['authenticate']);

describe('SigninComponent ', () => {
  beforeEach((() => {
    activatedRouteStub.setParamMap({fromUrl: '/home'});
    TestBed.configureTestingModule({
      declarations: [ SigninComponent ],
      providers: [ FormBuilder
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
      imports: [ReactiveFormsModule, VmessageModule, RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    // spyOn(component, 'navigateToUser').and.callFake((name: string) => {
    //   return name;
    // });
    //router = fixture.debugElement.injector.get(Router);
      fixture.detectChanges();
  }));

  it('should login correctly', async () => {
      fixture.detectChanges();
      await fixture.whenStable();
      de.query(By.css('test-username')).nativeElement.value = 'flavio';
      de.query(By.css('test-password')).nativeElement.value = '123';
      de.nativeElement.querySelector('button').click();
      authServiceSpy.authenticate.and.returnValue(of(new HttpResponse()));
      const navigateSpy = spyOn(component, 'navigateToUser');
      
      const spy = routerSpy.navigateByUrl as jasmine.Spy;
      const navArgs = spy.calls.first().args[0];
      console.log('navargs -> ', navArgs);
      const name = 'flavio';

      expect(navArgs).toBe(`/user/${name}`);
      expect(navigateSpy).toHaveBeenCalled();
  });
});
