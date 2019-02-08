import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { DebugElement } from '@angular/core';
import { newEvent } from 'src/app/shared/test';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should read emit and have the same value', fakeAsync(async () => {
    const de: DebugElement = fixture.debugElement;
    const htmlEl: HTMLInputElement = <HTMLInputElement> de.nativeElement;
    const input: HTMLInputElement = htmlEl.querySelector('input');
    input.value = 'test emit';
    input.dispatchEvent(newEvent('input'));
    component.Typing.subscribe((res) => {
      expect(res).toContain('test emit');
    });

  }));
});
