import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoDetailsComponent } from './photo-details.component';
import { PhotoModule } from '../photo/photo.module';
import { PhotoCommentsComponent } from './photo-comments/photo-comments.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { VmessageModule } from 'src/app/shared/components/vmessage/vmessage.module';
import { PhotoOwnerOnlyDirective } from './photo-owner-only/photo-owner-only.directive';
import { ShowIfLoggeInModule } from 'src/app/shared/directives/show-if-loggeIn/show-if-logge-in.module';

@NgModule({
  declarations: [PhotoDetailsComponent, PhotoCommentsComponent, PhotoCommentsComponent, PhotoOwnerOnlyDirective],
  imports: [
    CommonModule,
    PhotoModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    VmessageModule,
    ShowIfLoggeInModule
  ],
  exports: [PhotoDetailsComponent, PhotoCommentsComponent]
})
export class PhotoDetailsModule { }
