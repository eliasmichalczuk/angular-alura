import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { LoginGuard } from '../core/auth/login.guard';

const routes: Routes = [
  { path: '',
  component:  HomeComponent,
  canActivate: [LoginGuard],
  children: [
      { path: '',
      component:  SigninComponent,
        data: { title : 'Sign in'}
      },
      { path: 'signup',
      component:  SignupComponent,
      data: { title : 'Sign up'}
    },
    ]
  }
];

@NgModule({
    // usa-se for child em rota de lazy loading
  imports: [RouterModule.forChild(routes)],
  // use hash utilizado para que navegadores que nao suportam o historyAPI, nao acessem o backend direto
  exports: [RouterModule]
})
export class HomeRoutingModule { }
