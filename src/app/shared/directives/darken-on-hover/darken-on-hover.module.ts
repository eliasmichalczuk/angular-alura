import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarkenOnHoverDirective } from './darken-on-hover.directive';
import { DarkenOnHoverTestComponent } from './darken-on-hover-test.component';

@NgModule({
  declarations: [DarkenOnHoverDirective],
  imports: [
    CommonModule
  ],
  exports: [ DarkenOnHoverDirective]
})
export class DarkenOnHoverModule { }
