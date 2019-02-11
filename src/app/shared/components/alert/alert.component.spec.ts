import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertComponent } from './alert.component';
import { AlertService } from './alert.service';
import { CommonModule } from '@angular/common';
import { DebugElement } from '@angular/core';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

xdescribe('AlertComponent', () => {
  let component: AlertComponent;
  let fixture: ComponentFixture<AlertComponent>;
  let alertService: AlertService;
  let de: DebugElement;
  // const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertComponent ],
      providers: [ AlertService ],
      imports: [CommonModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de = fixture.debugElement;
    alertService = fixture.debugElement.injector.get(AlertService);
    router = fixture.debugElement.injector.get(Router);
  });

  it('should create', () => {
    alertService.success('test message', true);
    fixture.detectChanges();
    expect(de.nativeElement.querySelector('div').textContent).toContain('test message');
  });
});
