import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { VmessageModule } from '../shared/components/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home.routing.module';
import { SignupService } from './signup/signup.service';
import { TokenService } from '../core/token/token.service';
import { UserNotTakenValidatorService } from './signup/user-not-taken-validator.service';

@NgModule({
  declarations: [ SigninComponent, SignupComponent, HomeComponent ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VmessageModule,
    RouterModule,
    FormsModule,
    HomeRoutingModule
  ],
  exports: [
    FormsModule
  ],
  providers: [SignupService, TokenService, UserNotTakenValidatorService, SignupService]
})
export class HomeModule { }
