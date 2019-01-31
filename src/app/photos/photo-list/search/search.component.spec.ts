import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let de: DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should wait wait 300 ms before sending a request', fakeAsync(() => {
    // fixture.debugElement.query(By.css('test-input'));
    // const el = fixture.nativeElement();
    // el.query(By.css('test-input'))
    spyOn(component.Typing, 'emit');
    component.debounce.next('search test');
    tick(300);
    expect(component.Typing.emit).toHaveBeenCalled();
  }));
});
