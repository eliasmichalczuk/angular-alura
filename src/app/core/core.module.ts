import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './auth/interceptor.service';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [HeaderComponent],
  // utilizado o interceptor criado para enviar o token na requisição
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
  }]
})
export class CoreModule { }
