import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoListResover } from './photos/photo-list/photo-list.resolver';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  { path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },
  { path: 'user/:userName', component:  PhotoListComponent,
    resolve: {
    photos: PhotoListResover
    }
  },
  { path: 'p/add', component:  PhotoFormComponent},
  { path: '**', component:  NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {/*useHash: true*/})],
  // use hash utilizado para que navegadores que nao suportam o historyAPI, nao acessem o backend direto
  exports: [RouterModule]
})
export class AppRoutingModule { }
