import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { DietComponent } from './diet/diet.component';
import { DietDetailComponent } from './diet-detail/diet-detail.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'cadastro',
    component: CadastroComponent
  },
  {
    path: 'diet',
    component: DietComponent
  },
  {
    path: 'diet-detail',
    component: DietDetailComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  }
];
