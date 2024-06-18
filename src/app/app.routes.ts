import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { CategoryPageComponent } from './category-page/category-page.component';

export const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'registro', component: RegistrationFormComponent },
  { path: 'cartas', component: CategoryPageComponent },
];
