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
import { tick } from '@angular/core/src/render3';

describe('SigninComponent |', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;
  let de: DebugElement;
  let authServiceSpy;
  let router: Router;

  beforeEach((() => {
    const spy = jasmine.createSpyObj('AuthService', ['authenticate']);
    const activatedSpy = jasmine.createSpyObj('ActivatedRoute', ['queryParams']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl', 'navigate']);

    TestBed.configureTestingModule({
      declarations: [ SigninComponent ],
      providers: [ FormBuilder
        , PlatformDetectorService,
      {
        provide: AuthService, useValue: spy
      },
    ],
      imports: [ReactiveFormsModule, VmessageModule, RouterTestingModule ]
    })
    .compileComponents();
    authServiceSpy = TestBed.get(AuthService);
    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de = fixture.debugElement;
    spyOn(component, 'navigateToUser').and.callFake((name: string) => {
      return name;
    });
    // router = fixture.debugElement.injector.get(Router);
  }));

  it('should login correctly', () => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      de.query(By.css('test-username')).nativeElement.value = 'flavio';
      de.query(By.css('test-password')).nativeElement.value = '123';
      de.nativeElement.querySelector('button').click();

      const spy = router.navigateByUrl as jasmine.Spy;
      const navArgs = spy.calls.first().args[0];
      const name = 'flavio';

      expect(navArgs).toBe(`/user/${name}`);
      expect(component.navigateToUser).toHaveBeenCalled();
    });
  });
});
