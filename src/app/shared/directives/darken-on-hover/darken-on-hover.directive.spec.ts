import { DarkenOnHoverDirective } from './darken-on-hover.directive';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { DarkenOnHoverTestComponent } from './darken-on-hover-test.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('DarkenOnHoverDirective', () => {

  let component: DarkenOnHoverTestComponent;
  let fixture: ComponentFixture<DarkenOnHoverTestComponent>;
  let inputEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DarkenOnHoverDirective]
    });
    fixture = TestBed.createComponent(DarkenOnHoverTestComponent);
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.css('input'));
  });

  it('should create an instance', () => {

    inputEl.triggerEventHandler('mouseover', null);
    fixture.detectChanges();
    expect(inputEl.nativeElement.style.brightness).toBe(80);
  });
});
