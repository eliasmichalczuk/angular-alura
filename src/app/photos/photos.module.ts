import { NgModule } from '@angular/core';
import { PhotoModule } from './photo/photo.module';
import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoDetailsModule } from './photo-details/photo-details.module';

@NgModule({
  declarations: [],
  imports: [
    PhotoModule,
    PhotoListModule,
    PhotoFormModule,
    PhotoDetailsModule
  ],
  exports: [ ]
})
export class PhotosModule { }
