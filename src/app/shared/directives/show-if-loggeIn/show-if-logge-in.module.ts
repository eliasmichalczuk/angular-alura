import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowIfLoggedInDirective } from './show-if-logged-in.directive';

@NgModule({
  declarations: [ShowIfLoggedInDirective],
  imports: [
    CommonModule
  ],
  exports: [ShowIfLoggedInDirective]
})
export class ShowIfLoggeInModule { }
