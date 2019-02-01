import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { AlertComponent } from './alert.component';
import { AlertService } from './alert.service';
import { CommonModule } from '@angular/common';
import { DebugElement } from '@angular/core';
import { TestAlertService } from './test/test-alert.service';
import { createComponent } from '@angular/compiler/src/core';

describe('AlertComponent', () => {
  let component: AlertComponent;
  let fixture: ComponentFixture<AlertComponent>;
  let de: DebugElement;
  let alertService: AlertService;
  let httpClientSpy: {get: jasmine.Spy};

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ AlertComponent ],
      providers: [ AlertService ],
      imports: [CommonModule]
    })
    .compileComponents().then(createComponent);

    fixture = TestBed.createComponent(AlertComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    // alertService = fixture.debugElement.injector.get(AlertService);
    // apenas utilizar quando o serviço é provido no root
    alertService = TestBed.get(AlertService);
    fixture.detectChanges();
  }));


  // didin't work inject([AlertService], (alertService: AlertService)
  it('should create', () => {
    alertService.success('test message', true);
    fixture.detectChanges();
    expect(de.nativeElement.querySelector('div').textContent).toEqual('test message');
  });
});
